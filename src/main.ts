import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import router from "./router"
import api from './api'
import 'uno.css'
 
console.log('现在环境是：',import.meta.env.MODE);

createApp(App)
  .use(createPinia())
  .use(router)
  .provide('api', api)
  .mount('#app')