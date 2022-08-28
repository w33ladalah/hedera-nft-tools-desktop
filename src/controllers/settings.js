export default {
	name: 'SettingForm',
	data() {
		const settings = JSON.parse(window.localStorage.getItem('settings'))
		if (settings == null) {
			return {
				environment: 'TEST',
				myAccountId: '',
				myAccountPrivateKey: '',
			}
		} else {
			return {
				environment: settings.environment,
				myAccountId: settings.myAccoundId,
				myAccountPrivateKey: settings.myAccountPrivateKey,
			}
		}
	},
	methods: {
		onSubmit(e) {
			e.preventDefault()

			if (!this.myAccountId) {
				alert('Please insert your account ID')
				return
			}

			const settingsData = {
				id: Math.floor(Math.random() * 100000),
				environment: this.environment,
				myAccoundId: this.myAccountId,
				myAccountPrivateKey: this.myAccountPrivateKey,
				// reminder: this.reminder
			}

			window.localStorage.setItem('settings', JSON.stringify(settingsData))

			alert('Settings was saved successfully')
		}
	}
}
