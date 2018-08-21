<template>
  <div class="cmt-content">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postcomment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="i">
        <div class="cmt-title">
          第{{i+1}}楼&nbsp;&nbsp;用户:{{item.username}}&nbsp;&nbsp;发表时间:{{item.addTime|dataFormat}}
        </div>
        <div class="cmt-body">
          {{item.content}}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain :disabled='btn_status' @click="jiazai">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1, //默认展示第一页
      comments: [],
      btn_status: false,
      total: 0,
      msg: ""
    };
  },
  created() {
    this.getcomments();
  },
  methods: {
    getcomments: function() {
      var vm = this;
      this.$reqs
        .get("/comments/" + this.id + "?pageindex=" + this.pageindex)
        .then(function(res) {
          if (res.data.status === true) {
            vm.total = res.data.total;
            vm.comments = vm.comments.concat(res.data.data);
            if (vm.pageindex === res.data.total) {
              vm.btn_status = true;
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    jiazai() {
      this.pageindex++;
      this.getcomments();
      console.log(123);
    },
    postcomment() {
      var vm = this;
      //发表评论
      this.$reqs
        .post("/comments/postcom/" + this.id, {
          msg: vm.msg.trim()
        })
        .then(function(res) {
          if (res === true) {
            var cmt = {
              username: "text",
              addTime: Date.now(),
              content: vm.msg.trim()
            };
            vm.comments.pop(cmt);
            vm.msg = "";
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  props: ["id"]
};
</script>

<style>
.cmt-content {
  position: relative;
  bottom: 15px;
}
.cmt-content h3 {
  size: 18px;
  text-align: left;
}
.cmt-content textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-list {
  margin: 5px 0;
}
.cmt-list .cmt-item {
  font-size: 13px;
  text-align: center;
}

.cmt-list .cmt-item .cmt-title {
  background-color: #ccc;
  line-height: 30px;
  text-align: left;
}
.cmt-list .cmt-item .cmt-body {
  line-height: 35px;
  text-indent: 2rem;
  text-align: left;
}
</style>
