import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import TodoView from '@/views/TodoView.vue';
import AboutView from '@/views/AboutView.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/todo',
            component: TodoView,
        },
        {
            path: '/about',
            component: AboutView,
        },
    ],
});

export default router;
