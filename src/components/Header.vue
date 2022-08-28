<template>
	<section class="header">
		<nav class="flex justify-between p-6 px-4">
			<div class="flex justify-between items-center w-full">
				<div class="xl:w-1/3">
					<a class="block max-w-max" href="#">
						<img class="h-8" src="images/LazySup-SVG-3-5.png" alt=""></a>
				</div>
				<div class="hidden xl:block xl:w-1/3">
					<ul class="flex justify-center">
						<li class="mr-12">
						</li>
						<li class="mr-12">
						</li>
						<li class="mr-12">
						</li>
						<li>
						</li>
					</ul>
				</div>
				<div class="xl:block xl:w-1/3">
					<div class="flex items-center justify-end">
						<router-link ref="main" class="inline-block py-2 px-4 mr-2 leading-5 font-medium rounded-md"
							:class="setMainActive" to="/">Tools</router-link>
						<router-link ref="setting" class="inline-block py-2 px-4 mr-2 leading-5 font-medium rounded-md"
							:class="setSettingActive" to="/settings">Settings
						</router-link>
					</div>
				</div>
			</div>
		</nav>
	</section>
</template>

<script>
export default {
	name: 'GlobalHeader',
	data() {
		return {
			isActive: false
		}
	},
	computed: {
		setMainActive() {
			return {
				'text-coolGray-500': this.$route.name !== 'Main'
			}
		},
		setSettingActive() {
			return {
				'text-coolGray-500': this.$route.name !== 'Setting'
			}
		}
	}
}
</script>
