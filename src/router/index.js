import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AccountPage from '../components/AccountPage.vue'
import BasketPage from '../components/BasketPage.vue'
import ItemViewByCategories from '../components/ItemViewByCategories.vue'
import AboutPage from '../components/AboutPage.vue'
import SettingPage from '../components/SettingPage.vue'
import LocationPage from '../components/LocationPage.vue'
import PasswordPage from '../components/PasswordPage.vue'
import EmailPage from '../components/EmailPage.vue'
import SignUpPage from '../components/SignUpPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpPage
    },
    {
        path: '/setting',
        name: 'setting',
        component: SettingPage
    },
    {
        path: '/password',
        name: 'PasswordPage',
        component: PasswordPage
    },
    {
        path: '/email',
        name: 'EmailPage',
        component: EmailPage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/account',
        name: 'account',
        component: AccountPage
    },
    {
        path: '/location',
        name: 'location',
        component: LocationPage
    },
    {
        path: '/basket',
        name: 'basket',
        component: BasketPage
    },
    {
        path: '/categories/:id',
        name: 'item-view',
        component: ItemViewByCategories
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
