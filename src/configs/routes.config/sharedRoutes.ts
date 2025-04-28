import { lazy } from 'react'
import type { Routes } from '@/@types/routes'
import { ADMIN, USER } from '@/constants/roles.constant'

const sharedRoutes: Routes = [
    {
        key: 'home',
        path: '/',
        component: lazy(() => import('@/views/Home')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'about',
        path: '/about',
        component: lazy(() => import('@/views/About')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
    {
        key: 'contact',
        path: '/contact',
        component: lazy(() => import('@/views/Contact')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
]

export default sharedRoutes
