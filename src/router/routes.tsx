import { lazy } from 'react'

const routes = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('../views/LoadingView')),
  },
  {
    exact: true,
    path: '/problem',
    component: lazy(() => import('../views/LoadingView')),
  },
]

export default routes
