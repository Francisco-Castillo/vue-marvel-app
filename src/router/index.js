import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Character from '../views/Characters.vue'
import Comics from '../views/Comics.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/character',
    name: 'Character',
    component: Character
  },
  {
    path: '/comics',
    name: 'Comics',
    component: Comics
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
