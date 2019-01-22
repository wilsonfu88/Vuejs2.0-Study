<template>
	
	
	<div>
		 
		 <transition  name="bounce"
			 enter-active-class="bounceInLeft"
			 leave-active-class="bounceOutRight">			
			 <div class="loading" v-if="loading">
			  Loading...
			</div>
		</transition>
		
		{{msg}}
		<div>
			<a href="#/index">返回</a>
		</div>
		<table border="1" style="border-collapse: collapse;">
			<tr>
				<th>排名</th>
				<th>街道</th>
				<th>分数</th>
			</tr>
			<tr v-for="item in list">
				<td>{{item.rank}}</td>
				<td>{{item.street}}</td>
				<td>{{item.env_health_index}}</td>
			</tr>
		</table>
		<button @click="getList" class="weui-btn weui-btn_primary">获取</button>
		
			
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				msg:"我的订单",
				list:[],
				loading:false
			};
		},
		created(){
			this.getList();
		},
		methods:{
			getList:function(){
				this.$http.post("http://wnl.52mlsz.com/wx/api/street/healthIndex"
				,"rows=10"
				,{					
					"headers":{"Content-Type":"application/x-www-form-urlencoded"}
				,before:function(){
					this.loading=true;
				},
				
				})
				
				.then(function(rep){
					this.list = rep.body.data.list;	
					this.loading = false;
					
					
				},function(err){
					console.error(err);
				})
				
				/*this.$http({
					url:"http://wnl.52mlsz.com/wx/api/street/healthIndex",
					methods:"post",
					data:{
						"rows":75
					},
					headers:{"Content-Type":"application/x-www-form-urlencoded"}					
				}).then(function(rep){
					this.list = rep.body.data.list;
				})*/
			}
		}
	}
</script>

<style>

</style>
