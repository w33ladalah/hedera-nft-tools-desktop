<template>
	<div class="container mx-auto">
		<div>
			<Header></Header>
			<router-view></router-view>
			<div class="container">
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
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
		Header,
  }
}
</script>
