import { lazy } from 'react'

const PageA = lazy(() => import(/* webpackChunkName: "Page-A" */ '@views/PageA'))

const PageB = lazy(() => import(/* webpackChunkName: "Page-B" */ '@views/PageB'))


const routerMap = [
    {
        path: '/',
        name: 'HandsomeTT_PageA',
        component: PageA
    },
    {
      path: '/HandsomeTT_pageB',
      name: 'HandsomeTT_PageB',
      component: PageB
    }
]

export default routerMap