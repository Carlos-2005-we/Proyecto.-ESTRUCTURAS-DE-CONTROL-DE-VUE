import { createRouter, createWebHistory } from 'vue-router'
import IfElseView from '../views/IfElseView.vue'
import ShowView from '../views/ShowView.vue'
import ForView from '../views/ForView.vue'
import KeyView from '../views/KeyView.vue'

const routes = [
  { path: '/', redirect: '/if-else' },
  { path: '/if-else', component: IfElseView },
  { path: '/v-show', component: ShowView },
  { path: '/v-for', component: ForView },
  { path: '/v-bind-key', component: KeyView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
