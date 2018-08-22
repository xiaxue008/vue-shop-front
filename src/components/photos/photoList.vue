<template>
  <div>
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id===1?'mui-active':'']" v-for="item in cates" :key="item.id" @click="getphotolist(item.id)">
            {{item.title}}
          </a>
        </div>
      </div>
    </div>

    <ul class="photo-list">
      <li v-for="item in items" :key="item.id">
        <img v-lazy="item.imgurl">
        <div class="info">
          <h1 class="infotitle">{{item.title}}</h1>
          <div class="infobody">{{item.zhaiyao}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
// 开发遇到的坑，第一步 加载mui不能使用严格模式，需要在babelrc中加入控制语句！ 第二步  滑动的时候会报错 使用默认action 使用css控制语句
// 第三步 tab标签会不能使用，因为tabbar的样式冲突  修改tabbar的样式即可
<script>
//初始化滑动控件
import mui from "./../../Lib/mui/js/mui.js";

export default {
  data() {
    return {
      cates: {},
      items: {}
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll(
      {
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      },
      false
    );
  },
  created() {
    this.getallPhoto();
    this.getphotolist(1); //默认展示全部
  },
  methods: {
    getallPhoto() {
      let vm = this;
      this.$reqs.get("photos/phototitles").then(function(res) {
        vm.cates = res.data.data;
      });
    },
    getphotolist(id) {
      let vm = this;
      this.$reqs.get(`photos/photolist/` + id).then(function(res) {
        vm.items = res.data;
      });
    }
  }
};
</script>

<style scoped>
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
}
.photo-list li {
  background-color: #ccc;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0 0 9px #999999;
  position: relative;
}
.photo-list li img {
  width: 100%;
  vertical-align: middle;
}

.info {
  max-height: 84px;
  width: 100%;
  color: white;
  position: absolute;
  text-align: left;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.infotitle {
  font-size: 14px;
}
.infobody {
  font-size: 13px;
}
</style>
