import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import MoviesIndex from '../components/Movies/Index.vue';
import MoviesCreate from '../components/Movies/Create.vue';
import HelloWorld from '../components/HelloWorld.vue';
import NotFound from '../components/NotFound'

const routes = [
    {
        path: '/',
        name: 'default',
        component: HelloWorld
    },
    {
        path: '/movies',
        name: 'movie_index',
        component: MoviesIndex
    },
    {
        path: '/movies/create',
        name: 'movie_create',
        component: MoviesCreate
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: NotFound
    }
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes // short for `routes: routes`
})


router.beforeEach((to, from, next) => {
    console.log("Hola")
    next()
})

export default router

//export const router = createRouter({
//    history: createWebHistory(),
//    routes
//})
