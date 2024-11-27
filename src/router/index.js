import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import DashboardPage from '../views/DashboardPage.vue'  
import LoginPage from '@/views/LoginPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import ProjectPage from '@/views/ProjectPage.vue'

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
