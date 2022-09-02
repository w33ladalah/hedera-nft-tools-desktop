import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import Setting from '../components/Setting.vue'
import GetTokenInfo from '../components/GetTokenInfo.vue'
import CheckOwnership from '../components/CheckOwnership.vue'
import AssociateToken from '../components/AssociateToken.vue'
import CreateFungibleToken from '../components/CreateFungibleToken.vue'

const routes = [
	{ path: '/', name: 'Main', component: Main },
	{ path: '/settings', name: 'Setting', component: Setting },
	{ path: '/get-token-info', name: 'GetTokenInfo', component: GetTokenInfo },
	{ path: '/check-ownership', name: 'CheckOwnership', component: CheckOwnership },
	{ path: '/associate-token', name: 'AssociateToken', component: AssociateToken },
	{ path: '/create-fungible-token', name: 'CreateFungibleToken', component: CreateFungibleToken },
]

const router = createRouter({
	history: createWebHistory(),
	routes, // short for `routes: routes`
})

export default router
