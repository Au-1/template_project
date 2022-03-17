import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/components/Home.vue'
import catalogue from '@/utils/catalogue'

let routes = [
    {
        name: "home",
        path: "/",
        component: Home,
        meta: {
            title: "首页"
        },
        redirect: "/attribute",
        children: []
    },
]

routes[0].children = routes[0].children.concat(catalogue);

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router