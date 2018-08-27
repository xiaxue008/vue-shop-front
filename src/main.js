// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//配置axios 实现跨域请求3000端口下的node服务器
import axios from 'axios'
axios.defaults.withCredentials = true; //跨域保存session有用
axios.defaults.baseURL = "http://localhost:3000";
Vue.prototype.$reqs = axios;

//引入mui的字体和样式
import './Lib/mui/css/mui.css'
import './Lib/mui/css/icons-extra.css'

//引入mint-ui
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)

//定义时间过滤器
import moment from 'moment'
Vue.filter('dataFormat', function (dataStr, pattern = "YYYY-MM-DD") {
  return moment(dataStr).format(pattern)
})


//导入缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
