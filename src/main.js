import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

// style
import 'common/stylus/index.styl'

import fastclick from 'fastclick'

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
