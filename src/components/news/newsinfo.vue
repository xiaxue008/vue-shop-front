<template>
  <div class="newsinfo-content">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsinfo.addTime | dataFormat}}</span>
      <span>点击：{{newsinfo.click}}</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content">

    </div>

    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
//导入子组建
import comments from "./../subcomponts/comment";

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getnewsinfo();
  },
  methods: {
    getnewsinfo: function() {
      let vm = this;
      this.$reqs
        .get("/news/newsinfo/" + this.id)
        .then(function(res) {
          vm.newsinfo = res.data.data[0];
        })
        .then(function(err) {
          //   Toast("获取新闻失败！");
        });
    }
  },
  components: {
    "comment-box": comments
  }
};
</script>

<style scoped>
.newsinfo-content {
  padding: 0 5px;
}
.newsinfo-content .title {
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
}
.newsinfo-content .subtitle {
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
.newsinfo-content .content {
  font-size: 14px;
  position: relative;
  bottom: 10px;
}
</style>
