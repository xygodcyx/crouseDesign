<script setup lang="ts">
import type { Good } from '~/mock/content/types/GoodsData'

defineOptions({
  name: 'IndexPage',
})
const goodsData = ref<Array<Good>>([])
const goodsSearchData = ref<Array<Good>>([])
const classifys = [
  {
    label: '首页',
    value: '',
  },
  {

    label: '好玩的',
    value: 'fun',
  },
  {
    label: '好吃的',
    value: 'food',
  },
]
watchEffect(() => { goodsSearchData.value = goodsData.value })
onMounted(async () => {
  const result = await getGoodsData()
  goodsData.value = result.data
  // goodsSearchData.value = goodsData.value
  log(goodsData.value)
})
const key = ref('')
const classify = ref('')
function onSearchButtonClick() {
  log(key.value)
  search()
}
function onClassifyClick(classifyKey: string) {
  classify.value = classifyKey
  log(classify.value)
  search()
}
function search() {
  if (key.value) {
    goodsSearchData.value = goodsData.value.filter(good => good.label.includes(key.value))
  }
  else {
    goodsSearchData.value = goodsData.value
  }
  if (classify.value) {
    goodsSearchData.value = goodsSearchData.value.filter(good => good.classifyValue === classify.value)
  }
}
</script>

<template>
  <div>
    <!-- top -->
    <div
      flex="~ row justify-between items-center" mb4 h-10
      lt-sm="flex='~ col justify-between items-center' h-20"
    >
      <!-- left classify -->
      <nav flex="~ justify-between" lt-sm="">
        <span
          v-for="classifyInfo in classifys" :key="classifyInfo.label"
          mr-3
          cursor-pointer text-lg hover:text-warmgray
          @click="onClassifyClick(classifyInfo.value)"
        >
          {{ classifyInfo.label }}
        </span>
      </nav>
      <!-- right search -->
      <nav>
        <input
          v-model="key"
          type="text"
          placeholder="搜点什么?"

          mr3 h8 border border-rounded text-center text-black outline-none placeholder-text-sm
          lt-md="h6 w24 mr1"
          @keydown.enter="onSearchButtonClick"
        >
        <button btn lt-md="text-2.6" @click="onSearchButtonClick">
          搜索
        </button>
      </nav>
      <!-- right search -->
    </div>
    <!-- content -->
    <div flex="~ wrap " gap-10 lt-sm="justify-start">
      <div
        v-for="good in goodsSearchData" :key="good.label"
        flex="~ col"
        ha w-200px cursor-pointer gap-1 rounded-md p2 shadow-md
        lt-sm="w-160px"
      >
        <el-image :src="good.pic" @click="log(good)">
          <template #placeholder>
            <div class="image-slot">
              Loading<span class="dot">...</span>
            </div>
          </template>
        </el-image>
        <!-- <img h-100px w-full select-none :src="good.pic" alt="" @click="console.log(good)"> -->
        <span cursor-text text-lg>{{ good.label }}</span>
        <div flex="~ items-center justify-between">
          <p flex="~ items-center" cursor-text>
            <del>
              ￥{{ good.oldPrice }}
            </del>
            <span text-xl text-red>
              ￥{{ good.newPrice }}
            </span>
          </p>
          <p mr2 text-2.4>
            <em cursor-text text-shadow text-shadow-color-black dark:text-amber>[{{ good.classify }}]</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
