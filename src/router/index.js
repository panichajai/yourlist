import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import DashboardPage from '../views/DashboardPage.vue'  
import LoginPage from '@/views/LoginPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import ProjectPage from '@/views/ProjectPage.vue'
import ProjectIDPage from '@/views/ProjectIDPage.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpPage
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectPage
  },
  {
    path: '/project/:id',  // รับพารามิเตอร์ `id` จาก URL
    name: 'ProjectID',
    component: ProjectIDPage,
    props: true,  // ส่ง `id` เป็น props ไปที่ component
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
