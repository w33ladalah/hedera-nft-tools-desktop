import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import Setting from '../components/Setting.vue'

const routes = [
	{ path: '/', name: 'Main', component: Main },
	{ path: '/settings', name: 'Setting', component: Setting },
]

const router = createRouter({
	history: createWebHistory(),
	routes, // short for `routes: routes`
})

export default router
