<template>
	<div class="userLayout">
		<a-row class="center">
			<a-col :span="24">
				<img src="@/assets/logo.png" width="100"/>
			</a-col>
		</a-row>
		<router-view></router-view>
	</div>
</template>

<script>
</script>

<style scoped>
	.userLayout{
		width: 1200px;
		margin: 0 auto;
		padding: 40px 0;
	}
</style>
