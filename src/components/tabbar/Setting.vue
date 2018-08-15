<template>
    <button @click="backtoLogin">退出登录</button>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    backtoLogin() {
        console.log(this.$router)
      this.$router.replace('/login')
    }
  }
};
</script>


<style>
</style>
