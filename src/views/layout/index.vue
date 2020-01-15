<template>
	<a-layout id="components-layout-demo-custom-trigger" style="min-height: 100vh">
		<a-layout-sider collapsible v-model="collapsed" :trigger="null">
			<div class="logo" />
			<a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1-1']">
				<template v-for="(menuItem,uid) in roteData">
					<a-menu-item v-if="!menuItem.children" :key="menuItem.key">
						<router-link :to="menuItem.path">
							<a-icon type="pie-chart" />
							<span>{{menuItem.meta.title}}</span></router-link>
					</a-menu-item>
					<a-sub-menu :key="item.key" v-for="(item,index) in menuItem.children" v-else>
						<span slot="title">
							<a-icon type="user" /><span>{{item.meta.title}}</span></span>
						<a-menu-item :key="nav.key" v-for="(nav,id) in item.children">
							<router-link :to="nav.path">{{nav.meta.title}}</router-link>
						</a-menu-item>
					</a-sub-menu>
				</template>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header style="background: #fff; padding: 0">
				<a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed" />
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
				<a-breadcrumb style="margin: 16px 0">
					<a-breadcrumb-item>User</a-breadcrumb-item>
					<a-breadcrumb-item>Bill</a-breadcrumb-item>
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
	export default {
		data() {
			return {
				collapsed: false,
				roteData:[]
			};
		},
		created() {
			this.roteData = this.$router.options.routes
		},
		mounted() {
			
		},
		methods: {
			
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
