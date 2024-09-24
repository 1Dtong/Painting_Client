import { defineStore } from "pinia";
import type { worksViewItem } from "@/types/works";
import { ref } from "vue";

export const useWorksStore = defineStore('works', () => {
    const _works = [
        {
            title: '作品1',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者1'
        },
        {
            title: '作品2',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者2'
        },
        {
            title: '作品3',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者3'
        },
        {
            title: '作品4',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者4'
        },
        {
            title: '作品4',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者4'
        },
        {
            title: '作品5',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者5'
        },
        {
            title: '作品6',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者6'
        },
        {
            title: '作品7',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者7'
        },
        {
            title: '作品8',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者8'
        },
        {
            title: '作品9',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者9'
        },
        {
            title: '作品10',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者10'
        },
        {
            title: '作品11',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者11'
        },
        {
            title: '作品12',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者12'
        },
        {
            title: '作品13',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者13'
        },
        {
            title: '作品14',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者14'
        },
        {
            title: '作品15',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者15'
        },
        {
            title: '作品16',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者16'
        },
        {
            title: '作品17',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者17'
        },
        {
            title: '作品18',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者18'
        },
        {
            title: '作品19',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者19'
        },
        {
            title: '作品20',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者20'
        },
        {
            title: '作品21',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者21'
        },
        {
            title: '作品22',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者22'
        },
        {
            title: '作品23',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者23'
        },
        {
            title: '作品24',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者24'
        },
        {
            title: '作品25',
            cover: 'https://img2.baidu.com/it/u=1204010260,4123864091&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1200',
            auth: '作者25'
        }
    ]
    const works = ref<worksViewItem[]>([])

    const getWorks = (page: number, size: number) => {
        return new Promise<{
            data: worksViewItem[],
            page: number,
            total: number,
            hasMore: boolean
        }>((resolve) => {
            setTimeout(() => {
                const data = _works.slice((page - 1) * size, page * size)
                works.value = [...works.value, ...data]
                resolve({
                    data,
                    page,
                    total: _works.length,
                    hasMore: page * size < _works.length
                })
            }, 200)
        })
    }
    return {
        works,
        getWorks
    }
})