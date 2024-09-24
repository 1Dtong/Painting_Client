<template>
    <!-- 渐变 -->
    <div>
        <div class="top-bg absolute h-56 -z-10 w-screen 
        bg-gradient-to-b from-sky-600 to-white"></div>
    </div>
    <!-- 搜索框 -->
    <van-search show-action placeholder="请输入搜索关键词" shape="round" background="transparent">
        <template #action>
            <div class="text-white"><van-icon name="like-o" size="20px" /></div>
        </template>
    </van-search>
    <!-- 轮播图 -->
    <div class="swipe w-11/12 mx-auto overflow-hidden rounded-lg">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
    <!-- 通知栏 -->
    <div class="notice mt-1">
        <van-notice-bar left-icon="volume-o" background="#bae6fd" text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。" />
    </div>
    <main>
        <section class="AI-toimg  w-full flex justify-between items-center text-white">
            <div class="textToimg shadow-xl bg-teal-500 rounded m-2.5 text-center overflow-hidden">
                <img src="@/assets/imgs/01.png" alt="" class="rounded">
                </img>
                <span class="leading-3" style="font-size: large">AI 文生图</span>
            </div>
            <div class="imgToimg shadow-xl bg-cyan-500 rounded m-2.5 text-center overflow-hidden">
                <img src="@/assets/imgs/01.png" alt="" class="rounded">
                </img>
                <span class="leading-3" style="font-size: large">AI 图生图</span>
            </div>
        </section>
        <section class="topbar shadow-xl flex justify-start overflow-x-scroll mb-3 mt-3 w-4/5 mx-auto py-1 bg-teal-100 rounded-sm">
            <div class="topbar-item flex flex-col items-center min-w-[25%]" v-for="item in topBarState" :key="item.title">
                <div class="topbar-item__icon">
                    <van-image width="1rem" height="1rem" fit="cover" round position="contain" :src="item.cover" />
                </div>
                <div class="topbar-item__text">{{ item.title }}</div>
            </div>
        </section>
        <section>
            <h2 class="workShow">作品展示</h2>
            <div>
                <div class="works-list">
                    <div class="works-item" v-for="(item, index) in works" :key="item.title"
                        :ref="(el) => { index === works.length - 1 ? (itemRef = el as HTMLElement) : '' }">
                        <div class="works-item__img">
                            <img v-lazy="item.cover" class="rounded-lg">
                        </div>
                        <div class="works-item__title">{{ item.title }}</div>
                        <div class="works-item__auth">{{ item.auth }}</div>
                    </div>
                    <div v-if="!hasMore" class="last-item">
                        没有更多了
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref, toRefs, onMounted } from 'vue';
import img01 from '@/assets/imgs/01.png';
import img02 from '@/assets/imgs/02.png';
import img03 from '@/assets/imgs/03.png';
import img04 from '@/assets/imgs/04.png';
import { useHomeStore } from "@/stores/homeStore"
import { useWorksStore } from "@/stores/worksStore"
import useIntersectionObserver from "@/hooks/useIntersectionobserver.ts"

const images = ref([img01, img02, img03, img04]);
const homeStore = useHomeStore()
const worksStore = useWorksStore()

onMounted(async () => {
    await worksStore.getWorks(1, 6)
})

const itemRef = ref<HTMLElement | null>(null)
let hasMore = ref<boolean>(true);
// 定义当前的页数，初始值为1
const currentPage = ref<number>(1);
const handleNextPage = async (setHasMore: (value: boolean) => void) => {
    currentPage.value++;
    const res = await worksStore.getWorks(currentPage.value, 6);
    if (!res.hasMore) {
        setHasMore(false);
        hasMore.value = false;
    }
}
const { setHasMore } = useIntersectionObserver(itemRef, () => {
    handleNextPage(setHasMore);
})

const { topBarState } = toRefs(homeStore)
const { works } = toRefs(worksStore)

</script>

<style lang="less" scoped>
.workShow {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
}

.works-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 60px;

    .works-item {
        width: 50%;
        padding: 10px;
        .works-item__title,
        .works-item__auth {
            padding-left: 5px;
            font-size: 14px;
            // 加粗
            font-weight: bold;
        }
    }
    .last-item {
        width: 100%;
        text-align: center;
        font-size: 20px;
        // 加粗
        font-weight: bold;
    }
}
</style>