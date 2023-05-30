import { reactive } from "vue";

const store = reactive({
    baseUrl: import.meta.env.VITE_BASE_URL,
    endpoints: {
        projects: '/projects',
        technologies: '/technologies',
        types: '/types'
    }
});


export default store;