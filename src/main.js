import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AntUI from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

Vue.use(AntUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
