import getTokenInfo from '../hedera/getTokenInfo.mjs'

export default {
	name: 'GetTokenInfoForm',
	data() {
		return {
			tokenId: '',
			serials: '',
			outputs: '',
		}
	},
	methods: {
		onSubmit(e) {
			e.preventDefault()

			this.outputs = "Processing..."

			if (!this.tokenId) {
				alert('You must specify token ID!')
				this.outputs = ""
				return
			}

			getTokenInfo(this.tokenId, this.serials)
				.then((data) => {
					this.outputs = data.join("<br>")
				});
		}
	}
}
