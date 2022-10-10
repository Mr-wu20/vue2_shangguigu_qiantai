import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'

export default [
  {
    path: '/home',
    component: Home,
    meta: { show: true }
  },
  {
    path: '/detail/:skuid?',
    component: Detail,
    meta: { show: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false }
  },
  {
    path: '/register',
    component: Register,
    meta: { show: false }
  },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: { show: true },
    name: 'search'
  },
  // 重定向
  {
    path: '*',
    redirect: '/home'
  }
]
