<script setup lang="ts">
import { Random } from 'mockjs'

const router = useRouter()
const labels = ['没登录?', '去登录好不好', '不登录是看不了这个页面的']
</script>

<template>
  <div>
    <h1
      v-for="(label, index) in labels" :key="index" t3 :style="{
        color: Random.color(),
      }"
    >
      {{ label }}
    </h1>
    <button btn @click="router.push('/login')">
      好的,去登录!
    </button>
    <h1 t3 text-red>
      或者也可以
    </h1>
    <button btn @click="router.push('/')">
      去首页看看
    </button>
  </div>
</template>
