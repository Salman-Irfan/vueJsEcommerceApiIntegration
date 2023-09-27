import Home from "./pages/Home.vue";
import UserLoginForm from "./pages/user/UserLoginForm.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'UserLoginForm',
        component: UserLoginForm,
        path: '/login'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
// import it in main.js