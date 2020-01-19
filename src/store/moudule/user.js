import Vue from 'vue'

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
			if (info) {
				commit('SET_TOKEN', 'WANGXIAOJIAN')
				Vue.ls.set('ACCESS_TOKEN', 'WANGXIAOJIAN', 7 * 24 * 60 * 60 * 1000)
				return ("login success")
			}
		}
	}
}
export default user
