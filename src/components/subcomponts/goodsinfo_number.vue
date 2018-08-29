<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countchange" ref="numberbox" />
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
        this.$emit('getcount',parseInt(this.$refs.numberbox.value));
    }
  }
};
</script>

<style scoped>
</style>
