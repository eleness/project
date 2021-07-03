import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from "./components/mainPage/index.vue"
import ratingPage from "./components/ratingPage/index.vue"

Vue.use(VueRouter)

const routes = [
  { path: '/', component: mainPage },
  { path: '/rating', component: ratingPage }
]

let router = new VueRouter({
  mode: 'history',
  routes
})

export default router;