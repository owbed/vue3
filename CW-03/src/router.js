import { createRouter, createWebHistory } from 'vue-router'
import Tasks from './views/Tasks'
import Task from './views/Task'
import New from './views/New'
import NotFound from './views/NotFound'


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'tasks', component: Tasks },
        { path: '/new', name: 'new', component: New },
        { path: '/task/:taskID', name: 'task', component: Task },
        { path: '/:notFound(.*)', name: 'notFound', component: NotFound }
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})