<script setup lang="ts">
import { Random } from 'mockjs'

const labels = ['不知道地址就不要乱输~', '是我UI写的不好看吗？', '那就来Gitup提issue或者自己写pr!', '更不要试图黑了...', '怎么样^^']
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
    <a

      i-carbon-logo-github h30 w-full text-center icon-btn
      rel="noreferrer"
      href="https://github.com/xygodcyx/crouseDesign"
      target="_blank"
      title="GitHub"
    />
  </div>
</template>
