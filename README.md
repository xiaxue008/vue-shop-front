# 一个vue-shop的小例子，前端文件
## 第一天：首先安装各种包~ 使用vue-cli搭建一个环境  
步骤：  
- 1 创建vue项目 全局安装vue-cli （npm install vue-cli -g）  
- 2 使用vue init webpack vueclient   
- 3 进入项目  安装依赖的包 npm install 
- 4 使用npm run dev 检查项目是否允许成功  
  
### 开发login首页  
步骤：  
- 1 在src/components中新建login.vue  
    ~~~
    <template>
      <div class="backlogin">
        <div class="login_box">
          <div class="title">后台登录</div>
            <div>
              <input class="myinput" type="text" placeholder="手机号/用户名" v-model="username" />
            </div>
          <div>
            <input @keyup.13="login" class="myinput" type="password" placeholder="口令" v-model="password" />
          </div>
          <div class="login_other">
            <a href="javascript:;">找回密码</a>
            <input type="checkbox" id="remenberme" />
            <label for="remenberme">记住我</label>
          </div>
          <button :disabled="disablebtn" class="login" @click="login">{{loginText}}</button>
        </div>
      </div>
    </template>

- 2 在main.js入口函数中引入axios并配置  
    ~~~
    import axios from 'axios'
    axios.defaults.withCredentials=true;  //跨域保存session有用
    axios.defaults.baseURL="http://localhost:3000";
    Vue.prototype.$reqs=axios;
    ~~~

- 3 在router中的index.js中配置路由  
    ~~~
    import Vue from 'vue'  
    import Router from 'vue-router'  
    import login from '@/components/login' //加载组件login
    Vue.use(Router)
    export default new Router({
    routes: [
       {
         path: '/',
         component: login
       }
      ]
    })
    ~~~


## 第二天：实现登陆和注册功能

