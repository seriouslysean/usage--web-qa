import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/components/HomeView.vue';
import TodoView from '@/components/TodoView.vue';
import AboutView from '@/components/AboutView.vue';

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
