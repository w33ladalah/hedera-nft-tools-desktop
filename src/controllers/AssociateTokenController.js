// import check from '../hedera/check.mjs'

export default {
	name: 'AssociateTokenForm',
	data() {
		return {
			tokenId: '',
			action: "ass",
			outputs: "",
		}
	},
	methods: {
		onSubmit(e) {
			e.preventDefault()

			this.outputs = "Processing..."

			if (!this.tokenId || !this.walletId) {
				alert('You must specify the token ID or wallet ID!')
				this.outputs = ""
				return
			}

		}
	}
}
