<template>
	<div class="container mx-auto">
		<div>
			<Header></Header>
			<router-view></router-view>
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
