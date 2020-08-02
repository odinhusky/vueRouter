import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/HelloWorld'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: '首頁', // 對應的名稱
            path: '/', // 對應的虛擬路徑
            component: Home // 對應的component
        }
    ]
})
