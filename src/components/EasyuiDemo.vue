<template>
	<div>
        <DataGrid :data="data" style="height:90%">
            <GridColumn field="rank" title="名次"></GridColumn>
            <GridColumn field="street" title="街道"></GridColumn>
            <GridColumn field="env_health_index" title="环境卫生指数" align="right"></GridColumn>
            <GridColumn field="on_inv_index" title="现场考察指数" align="right"></GridColumn>
            <GridColumn field="res_sat_index" title="居民满意指数" width="30%"></GridColumn>
            <GridColumn field="area_name" title="地区名称" align="center"></GridColumn>
        </DataGrid>
		<div v-show="loading">加载中……</div>
		<input type="text" v-model="rows"/>
		<button @click="getList">获取</button>
    </div>
</template>

<script>
	 export default {
        data() {
            return {
                data: [],
				loading:false,
				rows:1
            }
        },
		methods:{
			getList:function(){
				this.$http.post("http://wnl.52mlsz.com/wx/api/street/healthIndex"
				,"rows="+this.rows
				,{					
					"headers":{"Content-Type":"application/x-www-form-urlencoded"}
				,before:function(){
					this.loading=true;
				},
				
				})				
				.then(function(rep){
					this.data = rep.body.data.list;
					this.loading = false;
					})
			}
			
		}
		
    }
</script>

<style>
</style>
