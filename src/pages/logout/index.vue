<script setup lang="ts">
import { useUserStore } from '~/store/user'

const router = useRouter()
const userStore = useUserStore()
function onClickLogoutButton() {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <div flex="~ justify-center items-center">
    <button btn @click="onClickLogoutButton">
      退出登录
    </button>
  </div>
</template>
