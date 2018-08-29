<template>
    <div class="goodsinfo-content">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <!-- 商品轮播图 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipeCon :lunboList="items" :isfull="false"></swipeCon>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：
                        <del>￥{{goodsinfo.oldvalue}}</del>&nbsp;&nbsp;销售价：
                        <span class="now_price">￥{{goodsinfo.newvalue}}</span>
                    </p>
                    <p>
                        购买数量：
                        <numberbox @getcount="getSelectCount"></numberbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToshopcar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：</p>
                    <p>库存情况：</p>
                    <p>上架时间: </p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                <mt-button type="danger" size="large" plain>商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import swipeCon from "./../subcomponts/swipe";
import numberbox from "./../subcomponts/goodsinfo_number";
export default {
  data() {
    return {
      id: this.$route.params.id,
      items: [],
      ballFlag: false,
      goodsinfo: {},
      selectCount: 1 //保存用户选择的数量，默认为1
    };
  },
  methods: {
    getlunbo() {
      var vm = this;
      this.$reqs.get("photos/getphoto/" + this.id).then(function(res) {
        vm.items = res.data;
      });
    },
    getgoodsinfo() {
      var vm = this;
      this.$reqs.get("goods/getgoodsinfo/" + this.id).then(function(res) {
        vm.goodsinfo = res.data[0];
      });
    },
    addToshopcar() {
      this.ballFlag = !this.ballFlag;
      //要保存到store中的数据形式
      var goodsinfo = {
        id: this.id,
        count: this.selectCount,
        price: this.goodsinfo.newvalue,
        selected: true
      };
      this.$store.commit("addToCar", goodsinfo); //调用vuex中的方法
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const ballPositon = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xDist = badgePosition.left - ballPositon.left;
      const yDist = badgePosition.top - ballPositon.top;
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getSelectCount(count) {
      //当子组件把选择的数量传递给父组件的时候，将值绑定至data上
      this.selectCount = count;
    }
  },
  created() {
    this.getlunbo();
    this.getgoodsinfo();
  },
  components: {
    swipeCon,
    numberbox
  }
};
</script>

<style scoped>
.goodsinfo-content {
  background-color: #eee;
  overflow: hidden;
}
.now_price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
.mui-card-footer {
  display: block;
}
.mui-card-content-inner {
  text-align: left;
}
.mui-card-footer button {
  margin: 5px;
}
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 352px;
  left: 152px;
  /* transform: translate(40px,230px) */
}
</style>
