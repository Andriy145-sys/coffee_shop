import Vue from 'vue'
import Router from 'vue-router'
import mainComponent from '@/components/Main/mainComponent'
import menuComponent from '@/components/Menu/menuComponent'
import ourStoryComponent from '@/components/outStory/ourStoryComponent'
import contactComponent from '@/components/Contact/contactComponent'
import aboutUsComponent from '@/components/aboutUs/aboutUsComponent';
import blogComponent from '@/components/Blog/blogComponent'
import blogDetailPage from '@/components/Blog/detailPage/blogDetailPage'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainComponent
  },
  {
    path: '/menu',
    name: 'menu',
    component: menuComponent
  },
  {
    path: '/about_us',
    name: 'about_us',
    component: aboutUsComponent
  },
  {
    path: '/our_story',
    name: 'our_story',
    component: ourStoryComponent
  },
  {
    path: '/blog',
    name: 'blog',
    component: blogComponent
  },
  {
    path: '/blog/:id',
    name: 'blog_detail_page',
    component: blogDetailPage
  },
  {
    path: '/contact',
    name: 'contact',
    component: contactComponent
  },
]

export default new Router({
  mode: 'history',
  routes: routes
})
