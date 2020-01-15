import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout/index.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
	meta:{title:'首页'},
	redirect:'/home',
	children:[{
		path:'/home',
		name:'home',
		component:Home,
		key:'1',
		meta:{title:'仪表盘'},
		redirect:'/home/home1',
		children:[{
			path:'/home/home1',
			name:'home1',
			component:Home,
			key:'1-1',
			meta:{title:'仪表盘1'},
		},{
			path:'/home/home2',
			name:'home2',
			component:Home,
			key:'1-2',
			meta:{title:'仪表盘2'},
		},{
			path:'/home/home3',
			name:'home3',
			component:Home,
			key:'1-3',
			meta:{title:'仪表盘3'},
		}]
	},{
		path:'/form',
		name:'form',
		component:Home,
		key:'2',
		meta:{title:'表单'},
		redirect:'/form/form1',
		children:[{
			path:'/form/form1',
			name:'form1',
			component:Home,
			key:'2-1',
			meta:{title:'表单1'},
		},{
			path:'/form/form2',
			name:'form2',
			component:Home,
			key:'2-2',
			meta:{title:'表单2'},
		},{
			path:'/form/form3',
			name:'form3',
			component:Home,
			key:'2-3',
			meta:{title:'表单3'},
		}]
	}]
  },
  {
	  path:'/404',
	  name:'404',
	  component:Home,
	  key:'404',
	  meta:{title:'404'},
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
