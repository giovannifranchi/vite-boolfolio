import { createRouter , createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ProjectsPage from '../views/ProjectsPage.vue';
import ProjectDetail from '../components/ProjectPage/ProjectDetails.vue';
import TypesPage from '../views/TypesPage.vue'
import PageNotFound from '../views/PageNotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        }, 
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        }, 
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        }, 
        {
            path: '/projects/:id/:slug',
            name: 'detail',
            component: ProjectDetail
        },
        {
            path:'/types/:slug',
            name: 'types',
            component: TypesPage

        }, 
        { 
            path: '/:pathMatch(.*)*', 
            name: 'not-found',
            component: PageNotFound 
        }
    ]
});


export  { router }