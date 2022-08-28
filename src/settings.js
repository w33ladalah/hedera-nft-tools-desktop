const storageKey = 'settings'

const saveSetting = data => {
	window.localStorage.setItem(storageKey, JSON.stringify(data))
}
const getSetting = () => {
	return JSON.parse(window.localStorage.getItem(storageKey))
}
const getSettingByKey = keyName => {
	try {
		const allSettings = getSetting()
		return allSettings[keyName]
	} catch (err) {
		return false
	}
}

export default {
	saveSetting,
	getSetting,
	getSettingByKey
}
