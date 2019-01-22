<template>

    <div class="item">
                <h4 class="item__title">搜索框</h4>
                <div class="weui-search-bar" id="searchBar">
                    <form class="weui-search-bar__form">
                        <div class="weui-search-bar__box">
                            <i class="weui-icon-search"></i>
                            <input type="search" class="weui-search-bar__input" placeholder="搜索" required="">
                            <a href="javascript:" class="weui-icon-clear"></a>
                        </div>
                        <label class="weui-search-bar__label">
                            <i class="weui-icon-search"></i>
                            <span>搜索</span>
                        </label>
                    </form>
                    <a href="javascript:" class="weui-search-bar__cancel-btn">取消</a>
                </div>
            </div>
    
 
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
