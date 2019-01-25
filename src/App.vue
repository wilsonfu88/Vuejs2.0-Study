<template>
  <div id="app"  class="page__bd" style="height:99%;border:solid 1px red;overflow:hidden;">
		<div   class="weui-tab">
			<router-view class="weui-tab__panel" />
			
			<!--<img src="./assets/logo.png"> -->
				<div class="weui-tabbar">
					<router-link to="/index" class="weui-tabbar__item">
						 <p class="weui-tabbar__label">首页</p>
					</router-link>
					<router-link to="/bookList" class="weui-tabbar__item">
						 <p class="weui-tabbar__label">图书列表</p>
						</router-link>
					<!--<router-link to="/bookDetail">书籍详情</router-link>-->
					<router-link to="/setting" class="weui-tabbar__item">
						<p class="weui-tabbar__label">设置</p>
						</router-link>
						
					<router-link to="/me" class="weui-tabbar__item">
						<p class="weui-tabbar__label">我的</p>
						</router-link>
				</div>
			
		</div>	 
			
				
	 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	body{
		height:100%
	}
	.weui-tabbar__label{
		height:50px;}

</style>
