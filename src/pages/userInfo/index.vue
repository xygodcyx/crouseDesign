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
  <div flex="~ justify-center items-center" transform>
    <div wa>
      <span mb3 block text-4xl>Hi :</span>
      <div flex="~ justify-start items-center gap2">
        <img :src="userStore.userInfo.imgFace" border-rounded>
        <div>
          <span text-4xl text-blue>{{ userStore.userInfo.name }}</span>
          <span ml2 text-sm> {{ hi }}</span>
        </div>
      </div>
      <p mb3 mt3 text-3xl text-amber>
        干点什么?
      </p>
      <div flex="~ gap2" h7 w160>
        <div h-full text-3 btn @click="router.push('/cart')">
          去购物车看看
        </div>
        <div h-full text-3 btn @click="router.push('/like')">
          去收藏看看
        </div>
        <div h-full text-3 btn @click="router.push('/order')">
          去订单看看
        </div>
      </div>
      <p mb3 mt3 text-3xl text-amber>
        我有什么?
      </p>
      <div class="userInfo" flex="~ gap1">
        <span text-5>钱: </span><span text-2xl text-red>{{ userStore.userInfo.balance }}</span>
      </div>
    </div>
  </div>
</template>
