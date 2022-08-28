export default {
	name: 'GetTokenInfoForm',
	data() {
		return {
			tokenId: '',
			serials: '',
		}
	},
	methods: {
		onSubmit(e) {
			e.preventDefault()

			if (!this.tokenId) {
				alert('Token ID can not be blank!')
				return
			}


		}
	}
}
