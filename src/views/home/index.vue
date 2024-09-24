<template>
    <div>
        <Header></Header>
        <div class="tab">
            <div class="tab-wrap">
                <router-link to="/home/draw">绘图</router-link>
            </div>
            <div class="tab-wrap">
                <router-link to="/home/gallery">图库</router-link>
            </div>
            <div class="tab-wrap">
                <router-link to="/home/comment">评论</router-link>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>

<script setup>
import Header from "@/components/header/index.vue";

</script>

<style lang="less" scoped>
@import "@/assets/styles/variable.less";

div {
    font-style: normal;
}

.tab {
    display: flex;
    height: 36px;
    // justify-content: space-around;

    .tab-wrap {
        flex: 1;
        text-align: center;
        line-height: 36px;

        a {
            text-decoration: none;
            color: @color-font;
            width: 100%;
            height: 100%;
            display: inline-block;

            // display: block;
            &.router-link-active {
                color: @color-red;
                border-bottom: 2px solid @color-red;
            }
        }
    }
}
</style>