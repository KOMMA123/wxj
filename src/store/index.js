import Vue from 'vue'
import Vuex from 'vuex'
import user from './moudule/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user
	},
	state: {
		count: 1,
		cc: 12
	},
	mutations: {
		// postData(state, payload) {
		// 	state.count += payload.step || 1
		// }
	},
	actions: {
		getData(context, param) {
			console.log(context)
			context.state.count += param.data;
			//context.commit('postData', context.state.count) //提交改变后的state.count值
		},
	}
})
