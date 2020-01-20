<template>
	<div class="center">
		<a-form class="loginForm" :form="form" @submit="handleSubmit">
			<a-form-item>
				<a-input v-decorator="['username',{rules:[{required: true, message: 'Please input your username!'}]}]" placeholder="username">
					<a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
				</a-input>
			</a-form-item>
			<a-form-item>
				<a-input v-decorator="['password',{rules:[{required: true, message: 'Please input your password!'}]}]" placeholder="password"
				 type="password">
					<a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
				</a-input>
			</a-form-item>
			<a-form-item>
				<a-button type="primary" htmlType="submit">登录</a-button>
			</a-form-item>
		</a-form>

	</div>

</template>

<script>
	import {
		mapActions
	} from 'vuex'
	import md5 from 'md5'
	export default {
		data() {
			return {
				form: this.$form.createForm(this)
			}
		},
		beforeCreate() {

		},
		methods: {
			...mapActions(['Login']),
			handleSubmit(e) {
				e.preventDefault();
				this.form.validateFields((err, values) => {
					if (!err) {
						this.Login({...values,password:md5(values.password)}).then(res => {
							console.log(res)
							// this.$router.push({"name":"home"})
							// console.log('Received values of form: ', values);
						})
					}
				});
			},
		}
	}
</script>

<style scoped>
	.loginForm {
		width: 300px;
		margin: 0 auto;
	}
</style>
