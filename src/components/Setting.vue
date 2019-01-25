<template>
	<div>
		{{msg}}
		 <button @click="addCount">+</button>
		
		count:{{count}}
	</div>
</template>

<script>


console.log(this.$store);

	export default {
	  name: 'Setting',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
		  count:0
	    }
	  },methods:{
		  addCount:function(){
			  this.count ++;
		  }
	  }
	 
	}
</script>

<style>
</style>
