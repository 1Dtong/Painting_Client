import { defineStore } from 'pinia'
import { fetchCategories, fetchDetailsByCategoryId, fetchGenerateImage } from '@/api/index.js'

/**
 * 使用pinia定义一个名为'draw'的store。
 * 该store用于管理绘画相关的数据，包括类别、细节信息、选中的类别ID和选中的细节名称。
 */
export const useDrawStore = defineStore('draw', {
    state: () => ({
        // 存储所有的类别信息
        categories: [],
        // 存储所有的细节信息
        details: [],
        // 存储当前选中的类别ID
        selectedCategoryId: null,
        // 存储选中的细节名称列表
        selectedDetailName: [],
        // 存储用户输入的文本内容
        inputContent: ''
    }),
    actions: {
        /**
         * 异步加载所有的类别信息。
         * 如果加载成功，将类别数据赋值给categories，并默认选中第一个类别。
         */
        async loadCategories() {
            try {
                const response = await fetchCategories();
                this.categories = response.data.data;
                if (this.categories.length > 0) {
                    this.selectCategory(this.categories[0].id)
                }
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        },
        /**
         * 根据给定的类别ID异步加载该类别的细节信息。
         * @param {number} categoryId - 需要加载细节信息的类别ID。
         */
        async loadDetails(categoryId) {
            try {
                const response = await fetchDetailsByCategoryId(categoryId);
                this.details = response.data.data;
            } catch (error) {
                console.error('Failed to fetch details:', error);
            }
        },
        /**
         * 选中一个类别，并加载该类别的细节信息。
         * @param {number} categoryId - 需要选中的类别ID。
         */
        selectCategory(categoryId) {
            this.selectedCategoryId = categoryId;
            this.loadDetails(categoryId);
        },
        /**
         * 将细节名称添加到选中的细节名称列表中。
         * @param {string} detailName - 需要添加的细节名称。
         */
        addDetailToInput(detailName) {
            this.selectedDetailName.push(detailName)
        }
    }
});