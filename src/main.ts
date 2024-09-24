import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.ts'

import '@/assets/styles/reset.css'
import 'lib-flexible/flexible.js' // 修改根字体大小

import '@/assets/styles/main.css'

import VueLazyload from 'vue-lazyload'

import {
    Icon,
    Tabbar,
    TabbarItem,
    Button,
    Search,
    Swipe,
    SwipeItem,
    NoticeBar,
    Image as VanImage,
    Card,
    Rate,
    Uploader
} from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(Icon)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Button)
    .use(Search)
    .use(Swipe)
    .use(SwipeItem)
    .use(NoticeBar)
    .use(VanImage)
    .use(Card)
    .use(Rate)
    .use(Uploader)

// 使用 VueLazyload 插件 
app.use(VueLazyload, {
    loading: '@/assets/imgs/fail.png', // 替换为你的加载占位图片路径 
    error: '@/assets/imgs/load.png' // 替换为你的错误占位图片路径 
});

app.use(createPinia())
app.use(router)

app.mount('#app')

