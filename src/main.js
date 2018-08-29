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


//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex);
var car = JSON.parse(localStorage.getItem('car') || '[]');
var store = new Vuex.Store({
  state: {
    car: car //将购物车商品数据用数组存
  }, //将state想象成组件中的打他，用来存储数据
  mutations: { //想象成组建中的methods
    addToCar(state, goodsinfo) {
      //点击加入购物车，保存数据到car上
      //如果购物车已经有这个商品了 只需要改变数量
      var flag = false;
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true
        }
      })
      //如果没有则直接把goodsinfo放入数组中
      if (!flag) {
        state.car.push(goodsinfo);
      }
      //当更新car之后，把数组存储到localstorage中
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    updategoodsinfo(state, goodsinfo) {
      //修改购物车里的商品数量
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count);
          return true
        }
      });

      localStorage.setItem('car', JSON.stringify(state.car));
    }
  },
  getters: {
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count;
      });
      return c;
    },
    getgoodscount(state) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.count
      });
      return o;
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store: store
})
