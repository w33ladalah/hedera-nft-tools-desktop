<template>
	<section class="py-4">
		<div class="container px-4 mx-auto">
			<div class="relative py-11 px-16 bg-spe rounded-md overflow-hidden">
				<img class="absolute z-10 left-4 top-4" src="flex-ui-assets/elements/dashboard/banners/dots-red.svg" alt=""><img
					class="absolute z-10 right-4 bottom-4" src="flex-ui-assets/elements/dashboard/banners/dots-red.svg" alt="">
				<img class="absolute h-64 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
					src="flex-ui-assets/elements/dashboard/banners/wave-basic.svg" alt="">
				<div class="relative z-20 flex flex-wrap items-center -m-3">
					<div class="w-full md:w-1/2 p-3">
						<h2 class="mb-6 text-4xl font-bold text-white tracking-tighter" contenteditable="false">Hedera Tools</h2>
						<p class="font-semibold text-coolGray-200">Useful set of tools to perform actions with Hedera Network.</p>
					</div>
					<div class="w-full md:w-1/2 p-3">
						<router-link
							class="block md:ml-auto px-7 py-4 font-medium text-lg text-coolGray-800 bg-white hover:bg-coolGray-50 rounded-md"
							style="max-width:170px" to="/settings">Get Started</router-link>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="container mx-auto">
		<section class=" py-4">
			<div class="container px-4 mx-auto">
				<div class="flex flex-wrap -m-3">
					<div class="w-full md:w-1/2 xl:w-1/4 p-3">
						<div class=" dark-second rounded-md">
							<div class="flex flex-col justify-center items-center px-4 pt-8 pb-6  ">
								<img class="mb-4" src="images/icons8-info-48-1.png" alt="">
								<h2 class="text-sm font-medium text-coolGray-600">Get Token Info</h2>
								<h3 class="mb-3 text-xs font-medium text-coolGray-400 justify">Get Token Info Used to get basic
									information about a token [and can pull metadata].</h3>
								<a href="get_token_info.html"
									class="flex items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md so-button">
									<p>Use it</p>
								</a>
							</div>
						</div>
					</div>
					<div class="w-full md:w-1/2 xl:w-1/4 p-3  ">
						<div class="dark-second   rounded-md">
							<div class="flex flex-col justify-center items-center px-4 pt-8 pb-6 ">
								<img class="mb-4" src="images/icons8-chercher-48.png" alt="">
								<h2 class="text-sm font-medium text-coolGray-600">Check Ownership</h2>
								<h3 class="mb-3 text-xs font-medium text-coolGray-400 justify">Used to query ownership of tokens
									and produce audit snapshots.</h3>
								<a href="#"
									class="flex items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md so-button">
									<p>Use it</p>
								</a>
							</div>
						</div>
					</div>
					<div class="w-full md:w-1/2 xl:w-1/4 p-3">
						<div class="dark-second rounded-md">
							<div class="flex flex-col justify-center items-center px-4 pt-8 pb-6 ">
								<img class="mb-4" src="images/icons8-lien-48.png" alt="">
								<h2 class="text-sm font-medium text-coolGray-600">Associate/Disassociate Tokens </h2>
								<h3 class="mb-3 text-xs font-medium text-coolGray-400 justify">Allows multiple association /
									disassociation of tokens in a single transaction.</h3>
								<a href="#"
									class="flex items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md so-button">
									<p>Use it</p>
								</a>
							</div>
						</div>
					</div>
					<div class="w-full md:w-1/2 xl:w-1/4 p-3">
						<div class="dark-second  rounded-md">
							<div class="flex flex-col justify-center items-center px-4 pt-8 pb-6 ">
								<img class="mb-4" src="images/icons8-coin-48.png" alt="">
								<h2 class="text-sm font-medium text-coolGray-600">Create Fungible Token</h2>
								<h3 class="mb-3 text-xs font-medium text-coolGray-400 justify">Used to create a new fungible
									token.</h3>
								<a href="#"
									class="flex items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md .so-button so-button aligncent">
									<p class="aligncent">Use it</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section class=" py-4">
				<div class="container px-4 mx-auto">
					<div class="flex flex-wrap -m-3">
						<div class="w-full md:w-1/2 xl:w-1/4 p-3">
							<div class=" dark-second rounded-md">
								<div class="flex flex-col justify-center items-center px-4 pt-8 pb-6  ">
									<img class="mb-4" src="images/icons8-degivrage-48.png" alt="">
									<h2 class="text-sm font-medium text-coolGray-600">Freeze NFT</h2>
									<h3 class="mb-3 text-xs font-medium text-coolGray-400 justify">Simple tool to freeze a token
										for an account. Requires FREEZE Key on mint.</h3>
									<a href="#"
										class="flex items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md so-button">
										<p>Use it</p>
									</a>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/2 xl:w-1/4 p-3  ">
							<div class="dark-second   rounded-md">
								<div class="flex flex-col justify-center items-center px-4 pt-8 pb-6 ">
									<img class="mb-4" src="images/icons8-fire-64.png" alt="">
									<h2 class="text-sm font-medium text-coolGray-600">Burn NFT</h2>
									<h3 class="mb-3 text-xs font-medium text-coolGray-400 justify">Simple tool to allow the
										burning of NFTs [when you hold the supply key].</h3>
									<a href="#"
										class="flex items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md so-button">
										<p>Use it</p>
									</a>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/2 xl:w-1/4 p-3">
							<div class="dark-second rounded-md">
								<div class="flex flex-col justify-center items-center px-4 pt-8 pb-6 justify">
									<img class="mb-4" src="images/icons8-fire-64-1.png" alt="">
									<h2 class="text-sm font-medium text-coolGray-600">Burn FT</h2>
									<h3 class="mb-3 text-xs font-medium text-coolGray-400">Simple tool to allow the burning of FTs
										[when you hold the supply key].</h3>
									<a href="#"
										class="flex items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md so-button">
										<p>Use it</p>
									</a>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/2 xl:w-1/4 p-3">
							<div class="dark-second  rounded-md">
								<div class="flex flex-col justify-center items-center px-4 pt-8 pb-6 ">
									<img class="mb-4" src="images/icons8-token-64.png" alt="">
									<h2 class="text-sm font-medium text-coolGray-600">Mint additional FT</h2>
									<h3 class="mb-3 text-xs font-medium text-coolGray-400 justify">Used to add supply to an
										existing Fungible token.</h3>
									<a href="#"
										class="flex items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md .so-button so-button aligncent">
										<p class="aligncent">Use it</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class=" py-4">
				<div class="container px-4 mx-auto">
					<div class="flex flex-wrap -m-3">
						<div class="w-full md:w-1/2 xl:w-1/4 p-3">
							<div class=" dark-second rounded-md">
								<div class="flex flex-col justify-center items-center px-4 pt-8 pb-6  ">
									<img class="mb-4" src="images/icons8-donnees-dans-les-deux-directions-48.png" alt="">
									<h2 class="text-sm font-medium text-coolGray-600 justify">Transfer Tokens between two accounts
										owned</h2>
									<h3 class="mb-3 text-xs font-medium text-coolGray-400 justify">Tool to transfer all serials of
										a given token from one account to another when you have both keys.</h3>
									<a href="#"
										class="flex items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md so-button">
										<p>Use it</p>
									</a>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/2 xl:w-1/4 p-3  ">
							<div class="dark-second   rounded-md">
								<div class="flex flex-col justify-center items-center px-4 pt-8 pb-6 ">
									<img class="mb-4" src="images/icons8-cle-48.png" alt="">
									<h2 class="text-sm font-medium text-coolGray-600">Update Private Key</h2>
									<h3 class="mb-3 text-xs font-medium text-coolGray-400 justify">Tool to update the Private Key
										on an account.</h3>
									<a href="#"
										class="flex items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md so-button">
										<p>Use it</p>
									</a>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/2 xl:w-1/4 p-3">
							<div class="dark-second rounded-md">
								<div class="flex flex-col justify-center items-center px-4 pt-8 pb-6 justify">
									<img class="mb-4" src="images/icons8-longue-vue-48.png" alt="">
									<h2 class="text-sm font-medium text-coolGray-600">Track Hedera NFTs</h2>
									<h3 class="mb-3 text-xs font-medium text-coolGray-400">Scans for ALL NFTs on the network and
										tracks which wallets own what balances.</h3>
									<a href="#"
										class="flex items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md so-button">
										<p>Use it</p>
									</a>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/2 xl:w-1/4 p-3">
							<div class="dark-second  rounded-md">
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
		<section class=" " style=" ">
			<div class="container px-4 mx-auto">
			</div>
			<div class="border-b border-coolGray-800" style="margin-top:50px"></div>
			<div class="container px-4 mx-auto">
				<p class="py-10  text-coolGray-400   text-center" style="font-size:10px">&copy; Deejay - <a
						href="https://github.com/Burstall/hedera-nft-scripts" target="blank">Burstall Github</a>
					- This software is provided for free and open-source "as it is"
				</p>
			</div>
		</section>
	</div>
</template>

<script>
export default {
  name: 'MainPage',
}
</script>
