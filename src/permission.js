import Vue from 'vue'
import router from './router'

const whiteList = ['login', 'register', 'registerResult']
router.beforeEach((to, from, next) => {
	if (Vue.ls.get("ACCESS_TOKEN")) {
		if (to.path === '/user/login') {
			next({
				path: '/home'
			})
		} else {
			next()
		}
	} else {
		if (whiteList.includes(to.name)) {
			next()
		} else {
			next({
				path: '/user/login',
				query: {
					redirect: to.pullPath
				}
			})
		}
	}
})
