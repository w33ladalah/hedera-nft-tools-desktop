<template>
	<section class="p-8">
		<div class="flex flex-wrap items-center">
			<div class="w-full">
				<h2 class="mb-2 font-semibold text-3xl" contenteditable="false">Get Token Info</h2>
				<p>
					Used to get basic information about a token [and can pull metadata]<br><br>
					Usage: fill the fields and run the tool
				</p>
			</div>
		</div>
	</section>
	<hr class="pl-8 pr-8 pb-8">

	<form ref="getTokenInfoForm" @submit="onSubmit" class="get-token-info-form">
		<div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">
			<div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
				<div class="mb-6 pl-8 pr-8">
					<label class="block font-medium" for="">Token Id*</label>
					<small class=" mb-2">Targetted Token Id.</small>
					<input v-model="tokenId"
						class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
						type="text" name="field-name" placeholder="Eg 0.0.123456">
				</div>
				<div class="mb-6 pl-8 pr-8">
					<label class="block font-medium" for="">Serial</label>
					<small class=" mb-2">Targetted serial(s) (separated with comma, optional).</small>
					<input v-model="serials"
						class="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xs"
						type="text" name="field-name" placeholder="Eg 22">
				</div>
				<button type="submit" class="bg-spe inline-block py-3 px-7 w-full md:w-auto text-lg leading-7 text-green-50 bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm ml-8 mr-8 button-spe">
					Run the tool</button>
			</div>
			<div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
				<div style="background-color:black;color:green;min-height:400px">
					<p class="pr-8 pl-8 pt-8 pb-8" ref="consoleOutput">
						<!-- &gt; Console output<br>
						&gt; Console output -->
					</p>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
import GetTokenInfoForm from '../controllers/get-token-info'
export default GetTokenInfoForm
</script>
