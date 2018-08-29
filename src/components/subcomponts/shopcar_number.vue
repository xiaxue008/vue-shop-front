<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' style="height:25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countchange" ref="numberbox" readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from "../../Lib/mui/js/mui.js";
export default {
  data() {
    return {};
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countchange() {
        var vm=this;
        this.$store.commit('updategoodsinfo',{
            id:vm.goodsid,
            count:vm.$refs.numberbox.value
        })
    }
  },
  props:["initcount","goodsid"]
};
</script>

<style scoped>
</style>
