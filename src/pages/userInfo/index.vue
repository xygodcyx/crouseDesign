<script setup lang="ts">
import { Random } from 'mockjs'
import { useUserStore } from '~/store/user'

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
  <div>
    <h1 text-4xl>
      <span mb3 block>Hi :</span>
      <div flex="~ justify-start items-center gap2">
        <img :src="userStore.userInfo.imgFace" border-rounded>
        <div>
          <span text-blue>{{ userStore.userInfo.name }}</span>
          <span ml2 text-sm> {{ hi }}</span>
        </div>
      </div>
    </h1>
  </div>
</template>
