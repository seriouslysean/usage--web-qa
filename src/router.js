import { createRouter, createWebHashHistory } from 'vue-router';

import CounterView from '@/views/CounterView.vue';
import TodoView from '@/views/TodoView.vue';
import AboutView from '@/views/AboutView.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'About',
            path: '/',
            component: AboutView,
        },
        {
            name: 'Counter',
            path: '/counter',
            component: CounterView,
        },
        {
            name: 'Todo',
            path: '/todo',
            component: TodoView,
        },
    ],
});

export default router;
