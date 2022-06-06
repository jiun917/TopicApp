import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/Home.vue'
import FriendPage from '@/pages/friend/Friend.vue'
import MapPage from '@/pages/map/Map.vue'
import MemberPage from '@/pages/member/Member.vue'
import OrderPage from '@/pages/order/Order.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/friend',
    name: 'friend',
    component: FriendPage
  },
  {
    path: '/map',
    name: 'map',
    component: MapPage
  },
  {
    path: '/member',
    name: 'member',
    component: MemberPage
  },
  {
    path: '/order',
    name: 'order',
    component: OrderPage
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
