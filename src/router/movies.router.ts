import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/Presentation/Views/Pages/Home.vue'),
        name: 'home'
    },
    {
        path: '/movies/:id',
        component: () => import('@/Presentation/Views/Pages/MovieDetails.vue'),
        name: 'movie-details'
    }
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;