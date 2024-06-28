import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./constant";
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
router.beforeEach((to, from) => {
    console.log(to, from)
    // ...
    // 返回 false 以取消导航
    return true
})
export default router