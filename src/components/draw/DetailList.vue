<template>
    <div class="detail-list">
        <ul>
            <li v-for="detail in details" :key="detail.id" @click="addDetailToInput(detail.name)">
                <img src="https://img2.baidu.com/it/u=3209331295,3118483431&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
                    :alt="detail.name" />
                <div class="detail-name">{{ detail.name }}</div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useDrawStore } from '@/stores/useDrawStore'
import { computed, defineEmits } from 'vue'

const store = useDrawStore()
const details = computed(() => store.details)

const emit = defineEmits(['selectDetail'])
const addDetailToInput = (detailName) => {
  emit('selectDetail', detailName)
}
</script>

<style scoped lang="less">
.detail-list {
    flex: 1;
    overflow: hidden;

    ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        // 超出的地方滚动
        overflow-y: scroll;
        height: 100%;

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;

            img {
                width: 60%;
                object-fit: cover;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
}
</style>