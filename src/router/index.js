import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import Home from '@/components/home.vue'
import HomeCompont from '@/components/tabbar/HomeContent.vue'
import MemberCompont from './../components/tabbar/MemberContent.vue'
import SearchCompont from './../components/tabbar/Search.vue'
import ShopcarCompont from './../components/tabbar/ShopCarContent.vue'
import NewsListCompont from './../components/news/newslist.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    component: login
  }, {
    path: '/',
    redirect: '/login'
  }, {
    path: '/home',
    component: Home,
    children: [{
        path: 'home',
        component: HomeCompont
      },
      {
        path: 'member',
        component: MemberCompont
      },
      {
        path: 'shopcar',
        component: ShopcarCompont
      },
      {
        path: 'search',
        component: SearchCompont
      },
      {
        path: 'newslist',
        component: NewsListCompont
      },{
        path:'',
        redirect:'home'
      }
    ]
  }],
  linkActiveClass: 'mui-active' //覆盖默认路由高亮的类
})
