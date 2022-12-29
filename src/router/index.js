import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recommend from '../components/recommend/recommend.vue'
import Singer from '../components/singer/singer.vue'
import Rank from '../components/rank/rank.vue'
import Search from '../components/search/search.vue'
import SingerDetail from '../components/singerdetail/singerDetail.vue'
import Disc from '../components/disc/disc.vue'
import TopList from '../components/top-list/top-list.vue'
import UserCenter from '../components/user-center/user-center.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend,
    children:[
     { 
      path:':id',
      component:Disc}

    ]
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer,
    children:[
      {
        path:':id',
        component:SingerDetail
      }
    ]
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    children:[
      {
        path:':id',
        component:SingerDetail
      }
    ]
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank,
    children:[
      {
        path:':id',
        component:TopList
      }
    ]
  },
  {
    path: '/about',
    name: 'About',

    component: () => import( '../views/About.vue')
  },
  {
    path:'/user',
    component:UserCenter
  }
]

const router = new VueRouter({
  routes
})


export default router
