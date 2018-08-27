<template>
  <!-- <div class="goods-list">
        <router-link class="goods-item" v-for="item in goodslist" :key="item.id" tag="div" :to="'/home/goodsInfo/'+item.id">
            <img :src=item.src>
            <h1 class="title">
                {{item.title}}
            </h1>

            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.newvalue}}</span>
                    <span class="old">￥{{item.oldvalue}}</span>
                </p>
                <p class="sell">
                    <span>{{item.sellstatus}}</span>
                    <span>剩{{item.sellcount}}件</span>
                </p>
            </div>
        </router-link>
        <mt-button type="danger" size="large" :disabled=btn_status @click="jiazai">加载更多</mt-button>
    </div> -->
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src=item.src>
      <h1 class="title">
        {{item.title}}
      </h1>

      <div class="info">
        <p class="price">
          <span class="now">￥{{item.newvalue}}</span>
          <span class="old">￥{{item.oldvalue}}</span>
        </p>
        <p class="sell">
          <span>{{item.sellstatus}}</span>
          <span>剩{{item.sellcount}}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" :disabled=btn_status @click="jiazai">加载更多</mt-button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      goodslist: [],
      pageIndex: 0,
      btn_status: false
    };
  },
  methods: {
    getgoodslist() {
      let vm = this;
      this.$reqs
        .get("goods/getgoodslist?pageIndex=" + this.pageIndex)
        .then(function(res) {
          vm.goodslist = vm.goodslist.concat(res.data.data);
          if (vm.goodslist.length === res.data.total) {
            vm.btn_status = true;
          }
        });
    },
    jiazai() {
      this.pageIndex++;
      this.getgoodslist();
    },
    goDetail(id) {
      //区分router 和 route的区别
      //this.$route是路由参数对象，parmas和query都属于它
      //this.$router是路由导航对象，用它实现路由的前进，后退等
      //  this.$router.replace("/home/goodsinfo/"+id);
      this.$router.push({
        name:'goodsinfo',
        params:{id}
      })
    }
  },
  created() {
    this.getgoodslist();
  }
};
</script>

<style scope>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  padding-bottom: 15px;
}

.goods-item {
  margin: 3px 0;
  width: 49%;
  border: 1px solid #cccccc;
  box-shadow: 0 0 8px #cccccc;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 293px;
}
.goods-item img {
  width: 100%;
}

.title {
  font-size: 14px;
  text-align: left;
}

.info {
  background-color: #eee;
  text-align: left;
}
.info p {
  margin: 0;
  padding: 5px;
}
.info .price .now {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}
.sell {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
</style>
