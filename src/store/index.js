import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 1,
		cc:12
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
	},
	modules: {}
})
