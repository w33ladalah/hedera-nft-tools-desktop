// import check from '../hedera/check.mjs'

export default {
	name: 'CheckOwnershipForm',
	data() {
		return {
			tokenId: '',
			walletId: '',
			showTokenZeroBalance: false,
			showWalletZeroBalance: false,
			excludedWallets: "",
			showTokenRoyalties: false,
			threshold: 1,
			auditToken: false,
			auditSerials: false,
			hodl: false,
			epoch: false,
			listed: false,
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
