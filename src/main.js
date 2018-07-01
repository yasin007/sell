import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'// 解决300毫秒延时
import 'babel-polyfill' // es6补丁

import 'common/stylus/index.styl'

fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
