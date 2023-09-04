import {createRouter, createWebHashHistory} from 'vue-router'

const vTable = () => import('@/page/v-table.vue')
const home = () => import('@/page/table-home.vue')
// 路由表
const routes = [
    {
        path: "/",
        hidden: true,
        redirect: "/home",
    },

    {
        path: '/home',
        component: home,
        children: [
            {
                path: 'table',
                component: vTable
            },
        ]
    },

]

// 实例化路由对象，使用hash模式
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
