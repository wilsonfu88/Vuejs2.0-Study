<template>
	<transition name="fade">		
		<div>
			<h1>
			图书列表
			</h1>
			<ul>
				<li v-for="i in list">				
					<a :href="bookUrl(i.id,i.name)">{{i.name}}</a>
				</li>
			</ul>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				list:[{id:1,name:"Javascript 高级程序设计"},{id:2,name:"Vue2 实战"},{id:3,name:"Spring Cloud 实战"}
				,{id:4,name:"asp.net core内幕"}]
			};
		},
		methods:{
			bookUrl:function(id,name){
				//console.log(this.store.state.announcements);
				return "#/bookDetail/" + id + "/" + name;
			}
		},
		computed:{
			detaiUrl:function(){
				return "";
			}/* ,
			announcements:function(){
				return this.store.announcements;
			} */
			
		}
	}
</script>

<style>

</style>
