import { lazy } from 'react'

const routes = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('../views/RootView')),
  },
  {
    exact: true,
    path: '/exercise',
    component: lazy(() => import('../views/ExerciseView')),
  },
]

export default routes
