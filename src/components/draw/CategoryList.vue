<template>
    <div class="category-list">
        <ul>
            <li v-for="category in categories" 
            :key="category.id" 
            @click="selectCategory(category.id)"
            class="category-item" 
            :class="{ selected: category.id === selectedCategoryId }">
                {{ category.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useDrawStore } from '@/stores/useDrawStore'
import { computed, onMounted } from 'vue'

const store = useDrawStore()
const categories = computed(() => store.categories)
const selectedCategoryId = computed(() => store.selectedCategoryId)

const selectCategory = (categoryId) => {
    store.selectCategory(categoryId)
}

onMounted(() => {
    if (categories.value.length > 0) {
        selectCategory(categories.value[0].id)
    }
})
</script>

<style scoped lang="less">
@import "@/assets/styles/variable.less";

.category-list {
    width: 80px;
    background-color: @color-background-ssss;

    ul {
        overflow-y: scroll;
        height: 100%;

        li {
            padding: 0 14px;
            font-size: @fontsize-small;
            height: 54px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-bottom: 1px solid #ccc;

            &:hover {
                background-color: skyblue;
            }
        }
    }
}

.selected {
    font-weight: bold;
    background-color: lightblue;
}
</style>