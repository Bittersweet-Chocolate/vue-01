import Vue from 'vue'
import VueRouter from 'vue-router'
import Center from '@/views/Center'
import Film from '@/views/Film'
import Cinema from '@/views/Cinema'
import Detail from '@/views/Detail'
import Login from '@/views/Login'
import Nowplaying from '@/views/films/Nowplaying'
import Comingsoon from '@/views/films/Comingsoon'
Vue.use(VueRouter)

const routes = [{
        path: '/center',
        name: 'Center',
        component: Center,
        beforeEnter: (to, from, next) => {
            next();
        }
    },
    {
        path: '/film',
        name: 'Film',
        component: Film,
        children: [{
                path: 'nowplaying',
                component: Nowplaying
            },
            {
                path: 'comingsoon',
                component: Comingsoon
            }, {
                path: '',
                redirect: '/film/nowplaying'
            }
        ]
    },
    {
        path: '/detail/:myid', //动态路由
        name: 'Detail',
        component: Detail,
        props: (route) => ({
            myid: route.params.myid,
        })
    },
    {
        path: '/cinema',
        name: 'Cinema',
        component: Cinema
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '*',
        // 重定向
        redirect: '/center'
    },
]

const router = new VueRouter({
    // hash 在刷新时不会向后台直接请求数据 但是网页会存在 #/xxxx
    // history 不存在# 但是刷新会直接写后台请求对应路由数据
    mode: 'history',
    routes
})

//全局守卫
router.beforeEach((to, from, next) => {
    // to.path === '/center' ? null : next();
    next();

})
export default router