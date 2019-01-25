import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource';
import Index from '@/components/Index'
import BookList from '@/components/BookList'
import BookDetail from '@/components/BookDetail'
import Me from '@/components/Me'
import Setting from '@/components/Setting'
import EasyuiDemo from '@/components/EasyuiDemo'

Vue.use(Router)
Vue.use(VueResource)


export default new Router({
	linkActiveClass:"weui-bar__item_on",
  routes: [{
    path: '/index',
    name: 'Index',
    component: Index
    },{
    path: '/bookList',
    name: 'BookList',
    component: BookList
		},{
    path: '/bookDetail/:id/:name',
    name: 'BookDetail',
    component: BookDetail
		},{
    path: '/me',
    name: 'Me',
    component: Me
		},{
    path: '/Setting',
    name: 'Setting',
    component: Setting
		},{
    path: '/EasyuiDemo',
    name: 'EasyuiDemo',
    component: EasyuiDemo
		}]
		})
