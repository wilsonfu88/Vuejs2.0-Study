<template>
	<div>
		{{msg}}
		<div>
			<div>
			<div>书籍ID:{{$route.params.id}}</div>
			<div>书籍名称:{{$route.params.name}}</div>
			</div>
			<a href="#/bookList">返回书籍列表</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg:"书籍详情"
			};
		}
	}
</script>

<style>

</style>
