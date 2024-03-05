import { createRouter, createWebHashHistory } from "vue-router"

const Index = () => import("../page/Index.vue")


const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })
  export default router