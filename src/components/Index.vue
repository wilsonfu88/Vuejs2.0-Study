<template>
    <div class="item">
                <!--<h4 class="item__title">搜索框</h4> -->
		
		<div class="weui-search-bar" id="searchBar">
			<form class="weui-search-bar__form">
				<div class="weui-search-bar__box">
					<i class="weui-icon-search"></i>
					<input type="search" class="weui-search-bar__input" placeholder="搜索">
					<a href="javascript:" class="weui-icon-clear"></a>
				</div>
			   
			</form>
			<a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
		</div>
		
		<div class="swiper-container">
			 <div class="swiper-wrapper">
			  <div class="swiper-slide" v-for="item in imgList">
				<img :src="item.url" />
			  </div>
			 <!--<div class="swiper-slide"><img src="@/assets/img/2.jpg" /></div>
			 <div class="swiper-slide"><img src="@/assets/img/3.jpg" /></div>
			 <div class="swiper-slide"><img src="@/assets/img/4.jpg" /></div>-->
			</div>
			
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>		
			<div class="swiper-pagination"></div>
			
			
		</div>
			
    <div class="weui-grids">
        <a href="javascript:;" class="weui-grid" v-for="i in 9">
            <div class="weui-grid__icon">
                <img src="@/assets/img/icon_tabbar.png" alt="">
            </div>
            <p class="weui-grid__label">功能{{i}}</p>
        </a>      
	</div>
				
		
    </div>
    
 
</template>

<script>
	import Swiper from 'swiper';
	
export default {
  name: 'Index',
  data () {
    return {
      imgList:[
		  {url:"/static/img/1.jpg",name:"1"},
		  {url:"/static/img/2.jpg",name:"2"},
		  {url:"/static/img/3.jpg",name:"3"},
		  {url:"/static/img/4.jpg",name:"4"}
	  ]
    }
  },
  methods:{
	  imgUrl:function(){
		  return ""
	  }
  },
  mounted(){
	 var swiper = new Swiper('.swiper-container', {
	autoplay:true,
	loop:true,
      pagination: {
        el: '.swiper-pagination'
      },
	  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container{
height:200px;
/*border:solid 1px red*/
}
.swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
</style>
