import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'
import HelloWorld from '@/pages/HelloWorld.vue'
import SignUpPage from '@/pages/SignupPage.vue'
import SuccessPage from '@/pages/SuccessVerify.vue'

const routes: RouteRecordRaw[] = [
 {
  path: '/login',
  component: LoginPage
 },
{
  path: '/hello',
  component: HelloWorld
},
{
  path: '/signUp',
  component: SignUpPage
},
{
  path: '/success',
  component: SuccessPage
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
