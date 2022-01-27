import { createRouter, createWebHistory } from 'vue-router'


const q1 = () =>
    import ("../views/q1.vue")

const q2 = () =>
    import ("../views/q2.vue")

const q3 = () =>
    import ("../views/q3.vue")

const q4 = () =>
    import ("../views/q4.vue")


const routes = [{
        path: "",
        redirect: '/q1',

    }, {
        path: '/q1',
        component: q1
    },
    {
        path: '/q2',
        component: q2
    },
    {
        path: '/q3',
        component: q3
    },
    {
        path: '/q4',
        component: q4
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    mode: "history"
})

export default router