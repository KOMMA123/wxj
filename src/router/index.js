import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout/index.vue'
import UserLayout from '@/views/layout/userLayout.vue'
import Login from '@/views/user/login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'layout',
		component: Layout,
		meta: {
			title: '首页'
		},
		redirect: '/home',
		children: [{
			path: '/home',
			name: 'home',
			component: Home,
			meta: {
				title: '仪表盘',
				key: '1'
			},
			redirect: '/home/home1',
			children: [{
				path: '/home/home1',
				name: 'home1',
				component: Home,
				meta: {
					title: '仪表盘1',
					key: '1-1'
				},
			}, {
				path: '/home/home2',
				name: 'home2',
				component: Home,
				meta: {
					key: '1-2',
					title: '仪表盘2'
				},
			}, {
				path: '/home/home3',
				name: 'home3',
				component: Home,
				meta: {
					key: '1-3',
					title: '仪表盘3'
				},
			}]
		}, {
			path: '/form',
			name: 'form',
			component: Home,
			meta: {
				key: '2',
				title: '表单'
			},
			redirect: '/form/form1',
			children: [{
				path: '/form/form1',
				name: 'form1',
				component: Home,
				meta: {
					key: '2-1',
					title: '表单1'
				},
			}, {
				path: '/form/form2',
				name: 'form2',
				component: Home,
				meta: {
					key: '2-2',
					title: '表单2'
				},
			}, {
				path: '/form/form3',
				name: 'form3',
				component: Home,
				meta: {
					key: '2-3',
					title: '表单3'
				},
			}]
		}, {
			path: '/table',
			name: 'table',
			component: Home,
			meta: {
				key: '3',
				title: '表格'
			}
		}]
	},
	{
		path: '/user',
		name: 'user',
		component:UserLayout,
		redirect: '/user/login',
		children: [{
			path: '/user/login',
			name: 'login',
			component: Login,
			meta: {
				title: '登录'
			}
		}]
	},
	{
		path: '/404',
		name: '404',
		component: Home,
		meta: {
			title: '404',
			key: '404'
		},
	},
	{
		path: '/500',
		name: '500',
		component: Home,
		meta: {
			title: '500',
			key: '500'
		},
	}

	// {
	//   path: '/about',
	//   name: 'about',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// },{
	//  path:'/text',
	//  name:'text',
	//  component:()=>import('../views/Text.vue')
	// }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
