<template>
  <div class="container" v-for="(imageUrl, index) in imageUrls" :key="index">
    <div v-if="imageUrls.length > 0">
      <van-card num="1" desc="描述信息" title="作品名称" :thumb="imageUrl">
        <template #price-top>
          <van-rate v-model="value" icon="like" void-icon="like-o" allow-half clearable />
        </template>
        <template #footer>
          <van-button size="mini">收藏</van-button>
          <van-button size="mini">下载</van-button>
        </template>
      </van-card>
    </div>
    <div v-else>
      <p>没有图片</p>
    </div>
  </div>
  <!-- <h2>图库</h2>
      <div v-if="imageUrl">
        <img :src="imageUrl" alt="Generated Image" class="generated-image"/>
      </div> -->
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
// const imageUrl = ref('');
const imageUrls = ref<string[]>([]);
const value = ref(3);

onMounted(() => {
  // if (route.query.imageUrl) {
  //   imageUrl.value = route.query.imageUrl as string;
  // }
  // const storedImageUrl = localStorage.getItem('generatedImageUrl');
  // if (storedImageUrl) {
  //   imageUrl.value = storedImageUrl;
  // }
  // 从 LocalStorage 中读取图片 URL 列表
  imageUrls.value = JSON.parse(localStorage.getItem('generatedImageUrls')) || [];
});
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
}
</style>