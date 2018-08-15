<template>
  <div class="newslist">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newslist/'+item.id">
          <img class="mui-media-object mui-pull-left" src="./../../images/shuijiao.jpg">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.addTime | dataFormat}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
        newslist: []
      }
    },
    created() {
      this.getnewslist();
    },
    methods: {
      getnewslist: function () {
        var vm = this;
        this.$reqs.get('/news/newslist').then(function (res) {
          if (res.data.status === true) {
            vm.newslist = res.data.data;
          } else {
            Toast('获取失败！')
          }
        })
      }
    }

  }

</script>

<style scoped>
  .newslist {
    width: 100%
  }

  .mui-table-view li h1 {
    font-size: 14px;
  }

  .mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }

  .mui-media-body h1 {
    display: flex;
    justify-content: left
  }

</style>
