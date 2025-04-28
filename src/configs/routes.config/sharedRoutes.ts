import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const sharedRoutes: Routes = [
    {
        key: 'homePage',
        path: '/',
        component: lazy(() => import('@/views/Home')),
        authority: [],
        exact:true,
    },
    // Add more shared routes here
]

export default sharedRoutes
