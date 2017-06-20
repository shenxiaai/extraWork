// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import Mint from 'mint-ui'
import router from './router'

import 'mint-ui/lib/style.css'
import '../static/css/tools-m.css'
require('../static/js/reset.js')
require('../static/js/common.js')

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
