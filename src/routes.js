import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import AddForm from './components/AddForm.vue'

const routes= [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/addemployee',
        name: 'AddForm',
        component: AddForm
    },
];
const router = createRouter({
     history: createWebHistory(),
     routes
     })

export default router