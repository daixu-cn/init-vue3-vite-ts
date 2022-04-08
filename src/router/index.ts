import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/index.vue")
  },
  {
    path: "/:pathMatch(.*)",
    name: "notFound",
    component: () => import("@/views/notFound.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

// 路由守卫--路由跳转之前触发;
router.beforeEach((to, from, next) => {
  next()
})

// 路由守卫--路由跳转之后触发;
router.afterEach((to, from, failure) => {
  const title = to.meta.title
  if (title) {
    document.title = `${title} | daixu`
  } else {
    document.title = "daixu个人博客 - 记录学习、分享生活"
  }
})

export default router
