import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "./views/home/index"
import rating from "./views/rating/index"

Vue.use(VueRouter)

const routes = [
  { path: '/', component: rating },
  { path: '/rating', component: home }
]

let router = new VueRouter({
  mode: 'history',
  routes
})

export default router;