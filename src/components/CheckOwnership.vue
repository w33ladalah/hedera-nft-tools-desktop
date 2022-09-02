<template>
	<section class="p-8">
		<div class="flex flex-wrap items-center">
			<div class="w-full">
				<h2 class="mb-2 font-semibold text-3xl">Check Ownership</h2>
				<p>
					Used to the ownership of tokens or wallets.
				</p>
			</div>
		</div>
	</section>
	<hr class="pl-8 pr-8 pb-8">
	<form ref="checkOwnership" @submit="onSubmit" class="check-ownership-form">
		<div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">
			<div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
				<div class="mb-6 pl-8 pr-8">
					<label class="block font-medium" for="">Token</label>
					<small class=" mb-2">If not specified look for all tokens in given wallet.</small>
					<input v-model="tokenId"
						class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
						type="text" name="tokenId" placeholder="Eg 0.0.xxxxxxxx">
					<label data-dashlane-label="true">
						<input type="checkbox" name="showTokenZeroBalance" id="show-zero-token" value="1"
							v-model="showTokenZeroBalance"><span class="ml-1">Only show wallet with 0 balance ready for airdrop</span>
					</label>
				</div>
				<div class="mb-6 pl-8 pr-8">
					<label class="block font-medium" for="">Wallet</label>
					<small class=" mb-2">If not specified will look for all wallets on token.</small>
					<input v-model="walletId"
						class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
						type="text" name="walletId" placeholder="Eg 0.0.xxxxxxxx">
					<label data-dashlane-label="true">
						<input type="checkbox" name="showWalletZeroBalance" id="show-zero-wallet" value="1"
							v-model="showWalletZeroBalance"><span class="ml-1">Only show zero balances for wallet specified</span>
					</label>
				</div>
				<div class="mb-6 pl-8 pr-8">
					<label class="block font-medium" for="">Exclude Wallets</label>
					<small class=" mb-2">List of wallets that you dont want to check (separated with comma, optional).</small>
					<input v-model="excludedWallets"
						class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
						type="text" name="excludedWallets" placeholder="Eg 0.0.xxxxxxxx,0.0.xxxxxxxx">
				</div>
				<div class="mb-6 pl-8 pr-8">
					<label class="block font-medium" for="">Threshold</label>
					<small class=" mb-2">Minimum ownership [default: 1].</small>
					<input v-model="threshold"
						class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
						type="number" min="1" name="threshold" placeholder="Eg 1">
				</div>
				<div class="mb-6 pl-8 pr-8">
					<label class="block font-medium" for=""></label>
					<div>
						<label data-dashlane-label="true">
							<input type="checkbox" name="showTokenRoyalties" id="show-token-royalties" value="1"
								v-model="showTokenRoyalties"><span class="ml-1">Show Token Royalties</span>
						</label>
					</div>
				</div>
				<div class="mb-6 pl-8 pr-8">
					<label class="block font-medium" for="">Serials</label>
					<small class=" mb-2">Check wallets onwning specified serials (comma seperated or - for range e.g. 2,5,10 or
						1-10)</small>
					<input v-model="serials"
						class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
						type="text" name="field-name" placeholder="Eg 22">
				</div>
				<div class="mb-6 pl-8 pr-8">
					<label class="block font-medium" for=""></label>
					<small class=" mb-2"></small>
					<div>
						<label data-dashlane-label="true">
							<input type="checkbox" name="listed" id="listed" value="1" v-model="listed"><span class="ml-1">Listed
								<small>- statistics on listed supply for a token.</small></span>
						</label>
					</div>
				</div>
				<div class="mb-6 pl-8 pr-8">
					<label class="block font-medium" for=""></label>
					<small class=" mb-2"></small>
					<div>
						<label data-dashlane-label="true">
							<input type="checkbox" name="auditToken" id="audit-token" value="1" v-model="auditToken"><span
								class="ml-1">Audit <small>- a simple token ownership audit output (saves to file).</small></span>
						</label>
					</div>
				</div>
				<div class="mb-6 pl-8 pr-8">
					<label class="block font-medium" for=""></label>
					<small class=" mb-2"></small>
					<div>
						<label data-dashlane-label="true">
							<input type="checkbox" name="auditSerials" id="audit-serials" value="1" v-model="auditSerials"><span
								class="ml-1">Audit Serials <small>- a simple *serials* ownership audit output (saves to
									file).</small></span>
						</label>
					</div>
				</div>
				<div class="mb-6 pl-8 pr-8" v-if="auditSerials==true">
					<label class="block font-medium" for=""></label>
					<small class=" mb-2"></small>
					<div>
						<label data-dashlane-label="true">
							<input type="checkbox" name="hodl" id="hodl" value="1" v-model="hodl"><span class="ml-1">Hodl <small>-
									used with auditserials to get hodl data per serial.</small></span>
						</label>
					</div>
				</div>
				<div class="mb-6 pl-8 pr-8" v-if="hodl==true">
					<label class="block font-medium" for=""></label>
					<small class=" mb-2"></small>
					<div>
						<label data-dashlane-label="true">
							<input type="checkbox" name="epoch" id="epoch" value="1" v-model="epoch"><span class="ml-1">Epoch <small>-
									a simple *serials* ownership audit output (saves to file).</small></span>
						</label>
					</div>
				</div>
				<button type="submit"
					class="bg-spe inline-block py-3 px-7 w-full md:w-auto text-lg leading-7 text-green-50 bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm ml-8 mr-8 button-spe">
					Run the tool</button>
				<p>&nbsp;</p>
			</div>
			<div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
				<div style="background-color:black;color:green;min-height:800px; overflow: scroll;">
					<p class="pr-8 pl-8 pt-8 pb-8" ref="consoleOutput" id="consoleOutput" v-html="outputs"></p>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
import CheckOwnershipController from '../controllers/CheckOwnershipController'
export default CheckOwnershipController
</script>

<style scoped>
#consoleOutput {
	word-wrap: break-word;
	font-size: 10px;
}
</style>
