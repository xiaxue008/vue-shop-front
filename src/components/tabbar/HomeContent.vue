<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item>
        <img src="./../../images/1.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./../../images/2.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./../../images/3.jpg">
      </mt-swipe-item>
    </mt-swipe>


    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/newslist"> 
          <span class="mui-icon-extra mui-icon-extra-topic"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/photolist">
          <span class="mui-icon-extra mui-icon-extra-share"></span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon-extra mui-icon-extra-alipay"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon-extra mui-icon-extra-comment"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon-extra mui-icon-extra-computer"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-contact"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {};
    },
    created: function () {
      this.getLunbo();
    },
    methods: {
      getLunbo: function () {
        console.log(123);
      }
    }
  };

</script>

<style scoped>
  .mint-swipe {
    height: 200px;
  }

  .mint-swipe img {
    width: 100%;
    height: 100%;
  }

  .mui-grid-view.mui-grid-9 {
    background-color: white;
    border: none;
  }

  .mui-icon-extra{
      width: 40px;
      height: 40px;
  }

  .mui-grid-view.mui-grid-9.mui-media-body {
    font-size: 13px;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none
  }

</style>
