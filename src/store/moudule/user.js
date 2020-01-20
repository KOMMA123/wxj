import Vue from 'vue'
import {login} from '@/api/user'

const user = {
	state: {
		userinfo: {},
		token: ''
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		}
	},
	actions: {
		Login({
			commit
		}, info) {
			// if (info) {
			// 	commit('SET_TOKEN', 'WANGXIAOJIAN')
			// 	Vue.ls.set('ACCESS_TOKEN', 'WANGXIAOJIAN', 7 * 24 * 60 * 60 * 1000)
			// 	return ("login success")
			// }
			return new Promise((resolve,reject)=>{
				login(info).then(res=>{
					console.log(res)
					resolve()
				}).catch(error=>{
					reject(error)
				})
			})
		}
	}
}
export default user
