<template>
    <div class="draw">
        <div class="categories">
            <CategoryList @selectCategory="selectCategory" />
            <DetailList :details="details" @selectDetail="addDetailToInput" />
        </div>
        <div class="draw-content">
            <div class="input-content">
                <textarea class="desc" type="text" v-model="inputContent" placeholder="请选择词库描述"></textarea>
                <button class="btn" @click="submit">点击生成图片</button>
            </div>
            <div class="clear">
                <van-icon name="clear" class="icon-clear" size="20px" @click="clearInput" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import CategoryList from '@/components/draw/CategoryList.vue'
import DetailList from '@/components/draw/DetailList.vue'
import { useDrawStore } from '@/stores/useDrawStore.ts'
import { useRouter } from 'vue-router';
import { fetchGenerateImage } from '@/api/index';

// 状态管理
const router = useRouter()
const store = useDrawStore()
// const selectedDetailName = computed(() => store.selectedDetailName.join(', '))
const inputContent = ref('')

const details = computed(() => store.details)

const selectCategory = (categoryId: number) => {
    store.selectCategory(categoryId)
}

const addDetailToInput = (detailName: string) => {
    inputContent.value += inputContent.value ? `, ${detailName}` : detailName
}

const clearInput = () => {
    inputContent.value = ''
}

const submit = async () => {
    try {
        const response = await fetchGenerateImage(inputContent.value);
        if (response.data.code === 200) {
            const imageUrl = response.data.url;

            // 从 LocalStorage 中读取现有的图片 URL 列表
            let imageUrls = JSON.parse(localStorage.getItem('generatedImageUrls')) || [];

            // 添加新的图片 URL
            imageUrls.push(imageUrl);

            // 存储更新后的列表
            localStorage.setItem('generatedImageUrls', JSON.stringify(imageUrls));

            // 跳转到图库页面，并传递图片URL
            router.push({
                path: '/home/gallery',
                query: { imageUrl: imageUrl }
            });
        } else {
            console.error('生成图片失败');
        }
    } catch (error) {
        console.error('请求出错', error);
    }
}

onMounted(() => {
    store.loadCategories()
})
</script>

<style lang="less" scoped>
@import "@/assets/styles/variable.less";

.draw {
    width: 100%;
    position: absolute;
    bottom: 102px;
    top: 195px;
    overflow: hidden;

    .categories {
        display: flex;
        height: 90%;
    }

    .draw-content {
        width: 100%;
        display: flex;
        background-color: skyblue;
        position: fixed;
        left: 0;
        bottom: 50px;
        right: 0;
        height: 12%;
        border-radius: 10px;

        .input-content {
            flex: 0 0 90%;
            display: flex;
            flex-direction: column;

            .desc {
                background-color: transparent;
                border: none;
                flex: 0 0 65%;
            }

            .btn {
                flex: 1;
                border-radius: 10px;
                background-color: rgb(92, 236, 236);
                border: none;
                font-size: @fontsize-medium;
            }
        }

        .clear {
            flex: 1;
            display: flex;
            // 垂直居中
            justify-content: center;
            align-items: center;

            .icon-clear {
                text-align: center;
            }
        }
    }


}
</style>