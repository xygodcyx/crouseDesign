import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'element-plus/dist/index.css'
// import 'virtual:svg-icons-register'
import './styles/main.css'
import 'uno.css'
import './mock'
import { useUserStore } from './store/user'

const app = createApp(App)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
})
nextTick(() => {
  const userStore = useUserStore()
  const needLoginRouter = ['shop', 'like', 'userinfo', 'order']
  router.beforeEach((to, form, next) => {
    log(to.path)
    if (!userStore.isLogin && needLoginRouter.includes(to.path.split('/')[1].toLocaleLowerCase())) {
      next('/403')
    }
    else {
      next()
    }
  })
})
app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
