<template>
    <van-tabbar v-model="active" active-color="#ee0a24">
        <van-tabbar-item to="/painting">
            <span>绘图</span>
            <template #icon="props">
                <i class="iconfont icon-tubiaozhizuomoban"></i>
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/home/draw">
            <span>词库</span>
            <template #icon="props">
                <i class="iconfont icon-hotword"></i>
            </template>
        </van-tabbar-item>
        <van-tabbar-item>
            <span>画廊</span>
            <template #icon="props">
                <i class="iconfont icon-hualang"></i>
            </template>
        </van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>

<style lang="less" scoped>
.iconfont {
    font-size: 20px;
}
</style>