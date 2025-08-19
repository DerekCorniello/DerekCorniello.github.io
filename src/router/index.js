import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'
import nvim from '../blogs/nvim.vue'
import keyboard from '../blogs/keyboard.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,
            children: [
                {
                    path: 'nvim-transition',
                    name: 'nvim-transition',
                    component: nvim,
                },
            ],
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
        },
        {
          path: '/resume',
          name: 'Resume',
          beforeEnter: (_, __, next) => {
            globalThis.open('/resume.pdf', '_blank');
            next(false);
          },
        },
        {
            path: '/blogs/nvim-transition',
            name: 'nvim-transition',
            component: nvim,
        },
        {
            path: '/blogs/keyboard',
            name: 'keyboard',
            component: keyboard,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
        }
    ],
})

export default router
