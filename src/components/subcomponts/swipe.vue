<template>
    <div>
        <mt-swipe>
            <mt-swipe-item v-for="item in lunboList" :key="item.url">
                <img :src="item.src" alt="" :class="{full:isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:["lunboList","isfull"]
};
</script>

<style scoped>
.mint-swipe {
  height: 200px;
}

.mint-swipe img {
  /* width: 100%; */
  height: 100%;
}

.full{
    width: 100%;
}
</style>
