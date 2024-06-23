<script setup lang="ts">
import { useUserStore } from '~/store/user'

const router = useRouter()
const navItems = [
  {
    label: '登出',
    path: '/logout',
    needLogin: true,
    onclick: () => {},
  },
  {
    label: '购物车',
    path: '/cart',
    needLogin: true,
    onclick: () => {},
  },
  {
    label: '收藏',
    path: '/like',
    needLogin: true,
    onclick: () => {},
  },
  {
    label: '订单',
    path: '/order',
    needLogin: true,
    onclick: () => {},
  },
  {
    label: '注册',
    path: '/register',
    needLogin: false,
    onclick: () => {},
  },
]
const userStore = useUserStore()
const navItemss = computed(() => {
  return navItems.filter(item => item.needLogin === userStore.isLogin)
})
</script>

<template>
  <nav wa flex="~ justify-around" transition-colors>
    <!-- <svg src="https://api.iconify.design/simple-line-icons:menu.svg" /> -->
    <!-- <svg mr3 hidden h5 w5 cursor-pointer lt-sm:block xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2m974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2s18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2m0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2" /></svg> -->
    <span i-carbon:list mr3 hidden cursor-pointer text-xl lt-sm:block hover:text-green />
    <span
      v-for="ni in navItemss"
      :key="ni.path"

      mr-2 cursor-pointer text-base text-gray-9 transition-duration-300 lt-sm:hidden dark:text-gray-1 hover:text-gray-5
      @click="router.push(ni.path); ni.onclick()"
    >
      {{ ni.label }}
    </span>
  </nav>
</template>
