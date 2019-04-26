// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import './router/request'; // 引入axios配置
import library from './library'; //引入公共方法 过滤器
import './router/url.js' //引入接口地址表
import store from './vuex/store.js';// 引入vuex 配置store文件
import './static/css/common.css' //引入公共css

Vue.prototype.library = library;//挂在公共方法
Vue.prototype.$echarts = echarts //引入echart
Vue.config.productionTip = false// 取消警告
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
