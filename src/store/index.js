// store/index.js
    import Vue from 'vue'
    import Vuex from 'vuex'

    // 从环境变量判断当前的运行模式
    const debug = process.env.NODE_ENV !== 'production'


// 声明引入此库文件的Vue实例使用Vuex插件应用状态管理
    // 这样可以从main.js文件内减少对vuex库的依赖
    Vue.use(Vuex)

    // 导出store实例对象
    export default new Vuex.Store({
        strict:debug,                     // 设置运行模式
        plugin: debug ? [] : [], // 调试模式则加入日志插件
		state: {
		      announcements:[1,2,3],
			promotions:[],
		      recommended:[]
		}
    });
	
	