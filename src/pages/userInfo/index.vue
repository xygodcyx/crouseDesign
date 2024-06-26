<script setup lang="ts">
import { useUserStore } from '~/store/user'

const router = useRouter()

const userStore = useUserStore()
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
  <div flex="col ~ justify-center items-center" mt--6 wa>
    <div frow gap10 overflow-hidden>
      <div text-center class="userOperation">
        <!-- <img src="https://q1.qlogo.cn/g?b=qq&nk=114929968&s=640" h-100 w-100> -->
        <h1 t2>
          Hi , <span text-blue>{{ userStore.userInfo.name }} </span><span ml1 mr0 text-sm>{{ hi }}</span>
          <span mt1 block text-center text-xl> 别来无恙 ~</span>
        </h1>
        <em t3 text-center>
          干点什么?
        </em>
        <div fcol fcenter gap2>
          <div w40 btn @click="router.push('/shop')">
            去购物车
          </div>
          <div w40 btn @click="router.push('/order')">
            去订单
          </div>
          <div w40 btn @click="router.push('/like')">
            去收藏夹
          </div>
        </div>
        <em t3>或者</em>
        <button btn @click="userStore.logout()">
          登出
        </button>
      </div>
      <!-- <i h-auto border border-b-amber /> -->
      <div class="userInfo">
        <h1 t1>
          钱: <span text-red>￥{{ userStore.userInfo.balance }}</span>
        </h1>
        <button btn @click="userStore.userInfo.balance += Math.floor(Math.random() * 50 + 10);">
          钱不够?加点钱
        </button>
      </div>
    </div>
  </div>
</template>
