// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import animate from 'animate.css'
import weui from "weui"


require('./assets/css/default.css')
import 'vx-easyui/dist/themes/default/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import 'swiper/dist/css/swiper.css';

import EasyUI from 'vx-easyui';
import store from './store'

Vue.config.productionTip = false


Vue.use(VueResource)
Vue.use(weui)
Vue.use(Vuex)
Vue.use(EasyUI);
//Vue.use(Swiper);



console.log(store.state.announcements);
var globaData={msg:"测试全局变量"};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
