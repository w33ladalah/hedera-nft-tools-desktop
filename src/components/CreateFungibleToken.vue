<template>
	<section class="p-8">
		<div class="flex flex-wrap items-center">
			<div class="w-full">
				<h2 class="mb-2 font-semibold text-3xl">Create Fungible Token</h2>
				<p>
					Create your own fungible token(s).
				</p>
			</div>
		</div>
	</section>
	<hr class="pl-8 pr-8 pb-8">
	<form ref="checkOwnership" @submit="onSubmit" class="check-ownership-form">
		<div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">
			<div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
				<div class="mb-6 pl-8 pr-8">
					<label class="block font-medium" for="">Token ID</label>
					<small class=" mb-2">TokenID or can be multiple tokens with "," seperated (no spaces) e.g.
						0.0.614759,0.0.614777,0.0.727536</small>
					<input v-model="tokenId"
						class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
						type="text" name="tokenId" placeholder="Eg 0.0.xxxxxxxx,0.0.xxxxxxxx">
				</div>
				<div class="mb-6 pr-8 pl-8">
					<label class="block font-medium" for="">Action</label>
					<div class="mb-1">
						<label data-dashlane-label="true">
							<input type="radio" name="action" id="network-test" value="ass" v-model="action"><span
								class="ml-1">Associate</span>
						</label>
					</div>
					<div>
						<label data-dashlane-label="true">
							<input type="radio" name="action" id="network-main" value="dis" v-model="action"><span
								class="ml-1">Dissociate</span>
						</label>
					</div>
				</div>
				<button type="submit"
					class="bg-spe inline-block py-3 px-7 w-full md:w-auto text-lg leading-7 text-green-50 bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm ml-8 mr-8 button-spe">
					Run the tool</button>
				<p>&nbsp;</p>
			</div>
			<div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
				<div style="background-color:black;color:green;min-height:400px; overflow: scroll;">
					<p class="pr-8 pl-8 pt-8 pb-8" ref="consoleOutput" id="consoleOutput" v-html="outputs"></p>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
import CreateFungibleTokenController from '../controllers/CreateFungibleTokenController'
export default CreateFungibleTokenController
</script>

<style scoped>
#consoleOutput {
	word-wrap: break-word;
	font-size: 10px;
}
</style>
