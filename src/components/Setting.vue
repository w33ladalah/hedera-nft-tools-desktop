<template>
	<section class="p-8">
		<div class="flex flex-wrap items-center">
			<div class="w-full">
				<h2 class="mb-2 font-semibold text-3xl" contenteditable="false">Settings</h2>
				<p>
					Configure your environment to run the tools.
				</p>
			</div>
		</div>
	</section>
	<div class="container mx-auto">
		<form ref="settingForm" @submit="onSubmit" class="settings-form">
			<!-- ENV -->
			<div class="flex flex-wrap -mx-4 -mb-4 mt-8 md:mb-0">
				<div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
					<h5 class="pr-8 pl-8 mb-4 text-base md:text-xl leading-tight font-bold tracking-tighter">ENVIRONMENT
						[{{environment}}]:</h5>
					<hr class="pl-8 pr-8 pb-8">
					<div class="mb-6 pr-8 pl-8">
						<div class="mb-1">
							<label data-dashlane-label="true">
								<input type="radio" name="environment" id="network-test" value="TEST" v-model="environment"><span
									class="ml-1">Testnet</span>
							</label>
						</div>
						<div>
							<label data-dashlane-label="true">
								<input type="radio" name="environment" id="network-main" value="MAIN" v-model="environment"><span
									class="ml-1">Mainnet</span>
							</label>
						</div>
					</div>
					<!-- ASSOCIATE / DISSOCIATE -->
					<h5 class="pr-8 pl-8 mb-4 mt-14 text-base md:text-xl leading-tight font-bold tracking-tighter">
						ASSOCIATE/DISSOCIATE TOKEN TOOL</h5>
					<hr class="pl-8 pr-8 pb-8">
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">My Account Id</label>
						<input v-model="myAccountId" name="myAccountId"
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="text" placeholder="Eg 0.0.123456">
					</div>
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">My Private Key</label>
						<input v-model="myAccountPrivateKey" name="myAccountPrivateKey"
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="password" placeholder="****************************************************************">
					</div>
					<!-- UPDATE PK -->
					<h5 class="pr-8 pl-8 mb-4 mt-14 text-base md:text-xl leading-tight font-bold tracking-tighter">UPDATE PRIVATE
						KEY TOOL</h5>
					<hr class="pl-8 pr-8 pb-8">
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Account Id</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="text" name="field-name" placeholder="Eg 0.0.123456">
					</div>
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Current Private Key</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="password" name="field-name"
							placeholder="****************************************************************">
					</div>
					<!-- NFTTransferTwoPKs -->
					<h5 class="pr-8 pl-8 mb-4 mt-14 text-base md:text-xl leading-tight font-bold tracking-tighter">TRANSFER TOKEN
						BETWEEN TWO OWNED ACCOUNTS</h5>
					<hr class="pl-8 pr-8 pb-8">
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Sender Account Id</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="text" name="field-name" placeholder="Eg 0.0.123456">
					</div>
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Sender Private Key</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="password" name="field-name"
							placeholder="****************************************************************">
					</div>
					<br><br>
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Receiver Account Id</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="text" name="field-name" placeholder="Eg 0.0.123456">
					</div>
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Receiver Private Key</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="password" name="field-name"
							placeholder="****************************************************************">
					</div>
				</div>
				<div class="w-full md:w-1/2 px-4 md:mb-0">
					<!-- 2nd col BURN / FREEZE (N)FT -->
					<h5 class="pr-8 pl-8 mb-4  text-base md:text-xl leading-tight font-bold tracking-tighter">BURN / FREEZE (N)FT
					</h5>
					<hr class="pl-8 pr-8 pb-8">
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Token ID</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="text" name="field-name" placeholder="Eg 0.0.123456">
					</div>
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Supply Key</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="password" name="field-name"
							placeholder="****************************************************************">
					</div>
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Freeze Key</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="password" name="field-name"
							placeholder="****************************************************************">
					</div>
					<!-- FT TOKEN CREATE -->
					<h5 class="pr-8 pl-8 mb-4 mt-14 text-base md:text-xl leading-tight font-bold tracking-tighter">FT TOKEN CREATE
					</h5>
					<hr class="pl-8 pr-8 pb-8">
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Token Name</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="text" name="field-name" placeholder="Eg LAZY">
					</div>
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Token Symbol</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="text" name="field-name" placeholder="Eg LAZY">
					</div>
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Token Decimals</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="number" name="field-name" placeholder="Eg 10">
					</div>
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Initial Supply</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="number" name="field-name" placeholder="Eg 10000">
					</div>
					<!-- FT TOKEN MINT -->
					<h5 class="pr-8 pl-8 mb-4 mt-14 text-base md:text-xl leading-tight font-bold tracking-tighter">FT TOKEN MINT
						NEW SUPPLY</h5>
					<hr class="pl-8 pr-8 pb-8">
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Token ID</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="text" name="field-name" placeholder="Eg 0.0.123456">
					</div>
					<div class="mb-6 pl-8 pr-8">
						<label class="block mb-2 font-medium" for="">Supply Key</label>
						<input
							class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
							type="password" name="field-name"
							placeholder="****************************************************************">
					</div>

				</div>
				<div class="w-full md px-4 md:mb-0">
					<hr class="pl-8 pr-8 pb-8 mt-1">
					<!-- INFO FAQ -->
					<div class="mb-6 pl-8 pr-8">
						<button type="submit"
							class="bg-spe mt-1 inline-block py-3 px-7 w-full md:w-auto text-lg leading-7 text-green-50 bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm ml-8 mr-8 button-spe">Save</button>
					</div>
				</div>
			</div>
		</form>
	</div>
	<div style="padding-bottom: 1rem"></div>
</template>

<script>
import SettingController from '../controllers/SettingController'
export default SettingController
</script>
