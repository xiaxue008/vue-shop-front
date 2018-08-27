<template>
  <div class="photoinfo-content">
    <h3>{{items.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{items.addtime | dataFormat}}</span>
      <span>点击次数：{{items.click}}</span>
    </p>

    <hr>

    <!-- 缩略图 -->
    <div class="lunbo">
      <vue-preview :slides="list" @close="handleClose"></vue-preview>
    </div>

    <!-- 图片内容 -->
    <div class="content">
      {{items.content}}
    </div>

    <!-- 评论子组建 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import comment from "../subcomponts/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      items: {},
      list: [] //,缩略图数组
    };
  },
  created() {
    this.getPhotoInfo();
    this.getPhoto();
  },
  methods: {
    getPhotoInfo() {
      var vm = this;
      this.$reqs.get("photos/photoinfo/" + this.id).then(function(res) {
        vm.items = res.data;
      });
    },
    getPhoto() {
      //获取缩略图
      var vm = this;
      this.$reqs.get("photos/getphoto/" + this.id).then(function(res) {
        res.data.forEach(item => {
          item.w = 600;
          item.h = 600;
          item.title = "123";
          item.alt = "p";
          item.msrc = item.src;
        });
        vm.list = res.data;
      });
    },
    handleClose() {
      console.log("close event");
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>

<style scoped>
.photoinfo-content {
  padding: 3px;
}
.photoinfo-content h3 {
  color: #26a2ff;
  font-size: 15px;
  text-align: center;
  margin: 15px 0;
}

.subtitle {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}

.content {
  font-size: 13px;
  line-height: 30px;
  text-align: left;
}

img{
  width: 200px !important;
}
</style>
