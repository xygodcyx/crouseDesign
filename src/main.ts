import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'element-plus/dist/index.css'
// import 'virtual:svg-icons-register'
import './styles/main.css'
import 'uno.css'
import './mock'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
