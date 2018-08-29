<template>
  <div class="car_list">
    <!-- //商品列表 -->
    <div class="mui-card" v-for="item in items" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch></mt-switch>
          <img :src="item.src">
          <div class="info">
            <h1>{{item.title}}</h1>
            <p>
              <span class="price">￥{{item.sellprice}}</span>
              <numbox :initcount="$store.getters.getgoodscount[item.id]" :goodsid="item.id"></numbox>
              <a href="#">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- //商品结算 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcomponts/shopcar_number.vue";
export default {
  data() {
    return {
      items: []
    };
  },
  components: {
    numbox
  },
  methods: {
    getshopcar() {
      var vm = this;
      this.$reqs.get("/shopcar/shopcarlist").then(function(res) {
        vm.items = res.data;
      });
    }
  },
  created() {
    this.getshopcar();
  }
};
</script>


<style scoped>
.car_list {
  background-color: #eee;
  overflow: hidden;
}
.car_list img {
  width: 60px;
  height: 60px;
}
.car_list h1 {
  font-size: 13px;
}
.price {
  font-weight: bold;
  color: red;
}
.mui-card-content-inner {
  display: flex;
  align-items: center;
}
.info {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
