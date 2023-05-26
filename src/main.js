import { createApp } from 'vue'
import App from './App.vue'
import './assets/index-js/index'
import {router} from './router/router';

createApp(App)
.use(router)
.mount('#app')
