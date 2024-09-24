import { Ref, onUnmounted, watch, ref } from 'vue'

const useIntersectionObserver = (
    nodeRef: Ref<HTMLElement | null>,
    loadMore: () => void
) => {
    // 判断是否有下一页
    let hasMore = ref(true)
    // 创建一个IntersectionObserver实例 联合类型
    let observer: IntersectionObserver | null = null;
    // 观察者，监听节点
    watch(nodeRef, (newNodeRef, oldNodeRef) => {
        // 取消监听旧节点
        if (oldNodeRef && observer) {
            observer.unobserve(oldNodeRef);
        }
        // 监听新节点
        if (newNodeRef) {
            observer = new IntersectionObserver(([entry]) => {
                // 解构获取第一个元素
                // isIntersecting 判断是否进入可视区域
                if (entry.isIntersecting) {
                    // 触发加载更多的数据
                    loadMore();
                }
            });
            observer.observe(newNodeRef);
        }
    })

    // 组件卸载时，取消监听
    onUnmounted(() => {
        if (observer) {
            observer.disconnect();
        }
    });

    watch(hasMore, (value) => {
        if (observer) {
            if (value && nodeRef.value) {
                observer.observe(nodeRef.value);
            } else {
                observer.disconnect();
            }
        }
        // value ? observer.observe(NodeRef.value!) : observer.disconnect()
    })

    return {
        hasMore,
        // 提供设置hasMore的方法
        setHasMore: (value: boolean) => {
            hasMore.value = value
        }
    }
}
export default useIntersectionObserver
