<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img src="./headSculpture.jpg" width="64" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="nickname">呆同学</span>
                </div>
                <div class="description">
                    <div class="username">用户名：</div>
                    <span>17870597213</span>
                </div>
            </div>
            <div class="Information" @click="handle">
                <i class="iconfont icon-erweima"></i>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
        <div class="bulletin-wrapper">
            <span class="bulletin-title"></span>
            <div class="bulletin-text-container" ref="bulletinContainer">
                <span class="bulletin-text" ref="bulletinText">{{ text }}</span>
            </div>
            <i class="iconfont icon-youjiantou"></i>
        </div>
        <div class="bg">
            <img src="./bg.jpg" width="100%" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
// 点击二维码跳转菜单
const handle = () => {
    router.push({
        path: '/menu',
    });
};

// 滚动文本
const text = ref('🌟 全新功能上线！ 使用我们的服务，即可快速生成您想要的图片。只需提供描述，我们将通过 OpenAI 的 DALL-E 3 技术，为您打造独特的视觉作品。快来体验吧！🖼️✨');
const bulletinText = ref(null);
const bulletinContainer = ref(null);
onMounted(() => {
    const textElement = bulletinText.value;
    const containerElement = bulletinContainer.value;
    const textWidth = textElement.scrollWidth;

    // Duplicate text content for seamless scrolling
    textElement.innerHTML += textElement.innerHTML;
    // 计算滚动动画的持续时间    50: 这是一个速度因子，可以调整滚动速度。值越大，滚动越慢；值越小，滚动越快。
    const animationDuration = (textWidth * 2) / 50;
    // 计算出的动画持续时间设置为一个 CSS 变量 --animation-duration
    containerElement.style.setProperty('--animation-duration', `${animationDuration}s`);
    // 将滚动文本的宽度设置为一个 CSS 变量 --text-width。
    containerElement.style.setProperty('--text-width', `${textWidth}px`);
});

</script>

<style lang="less" scoped>
@import "@/assets/styles/variable.less";
@import "@/assets/styles/mixin.less";

.header {
    position: relative;
    overflow: hidden;
    color: @color-white;
    background-color: rgba(7, 17, 27, 0.3);

    .content-wrapper {
        display: flex;
        padding: 24px 12px 18px 24px;
        position: relative;

        .avatar {
            flex: 0 0 64px;
            margin-right: 16px;

            img {
                width: 100%;
                border-radius: 50%;
            }
        }

        .content {
            flex: 1;

            .title {
                margin-bottom: 8px;

                .nickname {
                    margin-left: 6px;
                    font-size: @fontsize-large-xxx;
                    font-weight: bold;
                }
            }

            .description {
                font-size: @fontsize-small;
                margin-left: 6px;

                .username {
                    margin-bottom: 6px;
                }

                span {
                    font-size: @fontsize-small-s;
                }
            }
        }

        .Information {
            position: absolute;
            right: 12px;
            bottom: 14px;
            padding: 0 8px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            background-color: @color-background-sss;
            border-radius: 14px;
            display: flex;
            justify-content: space-between;
        }
    }

    .bulletin-wrapper {
        display: flex;
        align-items: center;
        height: 28px;
        padding: 0 8px;
        background-color: @color-background-sss;
        overflow: hidden;

        .bulletin-title {
            flex: 0 0 22px;
            height: 12px;
            .bg-image('bulletin');
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        .bulletin-text-container {
            flex: 1;
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            position: relative;

            .bulletin-text {
                margin-left: 6px;
                white-space: nowrap;
                font-size: @fontsize-small-s;
                display: inline-block;
                animation: marquee var(--animation-duration) linear infinite;
            }
        }

        .icon-youjiantou {
            flex: 0 0 10px;
        }
    }

    .bg {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-size: 100% 100%;
        z-index: -1;
        // filter: blur(10px);
    }
}

//marquee: 这是应用的动画名称，对应于下面定义的 @keyframes marquee。
// 它决定了动画的关键帧规则，从而控制动画的具体行为。
@keyframes marquee {
    0% {
        transform: translateX(0%);
    }

    100% {
        // 滚动的距离等于文本的宽度的负值，确保文本从容器的左侧完全移出
        transform: translateX(calc(-1 * var(--text-width)));
    }
}
</style>