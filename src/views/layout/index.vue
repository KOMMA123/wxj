<template>
	<a-layout id="components-layout-demo-custom-trigger" style="min-height: 100vh">
		<a-layout-sider collapsible v-model="collapsed" :trigger="null">
			<div class="logo" />
			<a-menu theme="dark" mode="inline" :defaultSelectedKeys="defaultSelectedKeys" :openKeys="openKeys" @openChange="onOpenChange">
				<!-- 一级目录 -->
				<template v-for="(menuItem,uid) in roteData">
					<a-menu-item v-if="!menuItem.children" :key="menuItem.meta.key">
						<router-link :to="menuItem.path">
							<a-icon type="pie-chart" />
							<span>{{menuItem.meta.title}}</span></router-link>
					</a-menu-item>
					<!-- 二级目录 -->
					<a-sub-menu v-else :key="menuItem.meta.key">
						<span slot="title">
							<a-icon type="user" /><span>{{menuItem.meta.title}}</span></span>
						<a-menu-item :key="nav.meta.key" v-for="(nav,id) in menuItem.children">
							<router-link :to="nav.path">{{nav.meta.title}}</router-link>
						</a-menu-item>
					</a-sub-menu>
				</template>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header style="background: #fff; padding: 0">
				<a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="collapsedChange" />
				<user-info></user-info>
			</a-layout-header>
			<a-layout-content :style="{ margin: '10px', padding: '0px 24px', background: '#fff', minHeight: '280px' }">
				<a-breadcrumb style="margin: 16px 0">
					<a-breadcrumb-item v-for="(item,index) in breadcrumb">{{item}}</a-breadcrumb-item>
				</a-breadcrumb>
				<router-view></router-view>
			</a-layout-content>
			<a-layout-footer style="text-align: center">
				Ant Design ©2018 Created by Ant UED
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>
<script>
	import userInfo from './userInfo.vue'
	export default {
		components:{
			userInfo
		},
		data() {
			return {
				collapsed: false,
				roteData: [],
				openKeys: [],
				rootSubmenuKeys: [],
				defaultSelectedKeys: [],
				breadcrumb: []
			};
		},
		watch: {
			$route(to, from) {
				this.getBreadcrumb(to)
			}
		},
		created() {
			this.getMenu()
			this.getBreadcrumb()
		},
		mounted() {

		},
		methods: {
			collapsedChange() {
				this.collapsed = !this.collapsed
				if (!this.collapsed) {
					this.getBreadcrumb()
				} else {
					this.openKeys = []
				}
			},
			onOpenChange(openKeys) {
				const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
				if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
					this.openKeys = openKeys;
				} else {
					this.openKeys = latestOpenKey ? [latestOpenKey] : [];
				}
				console.log(this.openKeys)
			},
			//初始化菜单栏
			getMenu() {
				this.roteData = this.$router.options.routes[0].children
				this.roteData.forEach((val, index) => {
					this.rootSubmenuKeys.push(val.meta.key)
				})
			},
			//初始化面包屑
			getBreadcrumb(data) {
				const arr = data ? data : this.$route
				this.breadcrumb.length = 0
				this.openKeys.length = 0
				this.defaultSelectedKeys.length = 0
				this.openKeys.push(arr.matched[1].meta.key)
				this.defaultSelectedKeys.push(arr.meta.key)
				arr.matched.forEach((val, index) => {
					this.breadcrumb.push(val.meta.title)
				})
			}
		}
	};
</script>
<style>
	#components-layout-demo-custom-trigger {
		height: 100%;
	}

	#components-layout-demo-custom-trigger .trigger {
		font-size: 20px;
		line-height: 64px;
		padding: 0 24px;
		cursor: pointer;
		transition: color 0.3s;
	}

	#components-layout-demo-custom-trigger .trigger:hover {
		color: #1890ff;
	}

	#components-layout-demo-custom-trigger .logo {
		height: 32px;
		background: rgba(255, 255, 255, 0.2);
		margin: 16px;
	}
</style>
