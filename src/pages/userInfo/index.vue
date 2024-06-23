<script setup lang="ts">
import { useUserStore } from '~/store/user'

const router = useRouter()

const userStore = useUserStore()
log(userStore.userInfo)
const hi = ref('')
onMounted(() => {
  const date = new Date()
  const hour = date.getHours()
  if (hour < 5) {
    hi.value = '夜深了,早睡吧'
  }
  else if (hour < 9) {
    hi.value = '早上好'
  }
  else if (hour < 12) {
    hi.value = '上午好'
  }
  else if (hour < 14) {
    hi.value = '中午好'
  }
  else if (hour < 17) {
    hi.value = '下午好'
  }
  else if (hour < 19) {
    hi.value = '傍晚好'
  }
  else {
    hi.value = '晚上好'
  }
})
</script>

<template>
  <div flex="~ justify-center items-center">
    <h1>Hi</h1>
  </div>
</template>
