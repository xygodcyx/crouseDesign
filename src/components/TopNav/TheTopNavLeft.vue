<script setup lang="ts">
import { useUserStore } from '~/store/user'

const router = useRouter()
const userStore = useUserStore()
</script>

<template>
  <nav flex="~ justify-around items-center" wa pl2 text-base transition-colors>
    <span
      mr-2
      cursor-pointer text-sm lh-relaxed transition-duration-300 lt-sm:hidden hover:text-gray-5 @click="router.push('/')"
    >
      欢迎来到XyGod的商店
    </span>
    <span

      mr-2 hidden cursor-pointer text-2xl transition-duration-300 lt-sm:block hover:text-gray-5 @click="router.push('/')"
    >
      X
    </span>
    <!-- <span
      mr-2 cursor-pointer
      transition-duration-300 @click="router.push('/register')"
    >
      注册
    </span> -->
    <span
      mr-2 cursor-pointer
      transition-duration-300 @click="router.push(`${userStore.isLogin ? '/userInfo' : '/login'}`)"
    >
      {{ userStore.isLogin ? userStore.userInfo.name : "登录" }}
    </span>
    <Transition>
      <el-image
        v-show="userStore.isLogin"
        style="width: 24px; height: 24px" :src="userStore.userInfo.imgFace" h6 w6 cursor-pointer border-rounded
        @click="router.push(`${userStore.isLogin ? '/userInfo' : '/login'}`)"
      />
    </Transition>
  </nav>
</template>
