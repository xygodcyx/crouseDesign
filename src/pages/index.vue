<script setup lang="ts">
import type { Good } from '~/mock/content/types/GoodsData'
import { useDefer } from '~/utool/useDefer'

defineOptions({
  name: 'IndexPage',
})
const router = useRouter()
const goodsData = ref<Array<Good>>([])
const goodsSearchData = ref<Array<Good>>([])
const defer = computed(() => useDefer(goodsData.value.length))
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
  ElMessage('获取商品成功')
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

function initKeyMap() {
  const keyMap = []
  for (let i = 0; i < key.value.length; i++) {
    const char = key.value[i].toLowerCase() as string
    keyMap.push({
      char,
      isMatch: false,
    })
  }
  return keyMap
}

function search() {
  if (key.value) {
    goodsSearchData.value = []
    // console.log(keyMap)
    goodsData.value.forEach((good) => {
      const _key = key.value.toLowerCase() as string
      const _goodLabel = good.label.toLowerCase() as string
      const keyMap = initKeyMap()
      for (let j = 0; j < _key.length; j++) {
        for (let i = 0; i < _goodLabel.length; i++) {
          const char = _key[j]
          const glc = _goodLabel[i]
          if (glc === char) {
            const index = keyMap.findIndex(keyObj => keyObj.char === char)
            if (index + 1) {
              keyMap[index].isMatch = true
            }
          }
        }
      }
      if (keyMap.every(keyObj => keyObj.isMatch)) {
        goodsSearchData.value.push(good)
      }
    })
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
  <div lt-sm="mt--8">
    <el-backtop :right="20" :bottom="100" />

    <!-- top -->
    <div
      mb3 ml2 h-10 frow justify-between
      lt-sm="fcol fcenter h-16 mb6"
    >
      <!-- left classify -->
      <nav flex="~ justify-around" wa>
        <span
          v-for="classifyInfo in classifys" :key="classifyInfo.label"

          mr-3 cursor-pointer text-xl hover:text-warmgray
          lt-sm="text-4 mb1"
          @click="onClassifyClick(classifyInfo.value)"
        >
          {{ classifyInfo.label }}
        </span>
      </nav>
      <!-- right search -->
      <nav lt-sm="wa h30 mr0" mr6 frow fcenter>
        <input
          v-model="key"
          type="text"
          placeholder="搜点什么?"

          mr3 h10 w100
          border border-rounded text-center text-black outline-none placeholder-text-sm
          lt-md="h6 w24 mr1"
          lt-sm="w60 h10"
          @keydown.enter="onSearchButtonClick"
        >
        <button

          h10 w10 b-rounded bg-red text-center
          lt-md="text-4" @click="onSearchButtonClick"
        >
          搜
        </button>
      </nav>
      <!-- right search -->
    </div>
    <!-- content -->
    <div flex="~ wrap " gap-2 lt-sm="justify-center gap-4" lt-xl="justify-center gap6">
      <div
        v-for="(good, i) in goodsSearchData"
        :key="good.id"
        flex="~ col" ha w-200px gap-1 rounded-md p2 shadow-md dark:shadow="#ffffff32"
        lt-sm="w-160px"
      >
        <!-- goodItem -->
        <div
          v-if="defer(i)"
        >
          <el-image :src="good.pic" cursor-pointer @click="router.push(`/goodDetail/${good.id}`)">
            <template #placeholder>
              <div class="image-slot" text-center>
                等一会哦<span class="dot">...</span>
              </div>
            </template>
          </el-image>
          <!-- <img h-100px w-full select-none :src="good.pic" alt="" @click="console.log(good)"> -->
          <span cursor-text text-lg>{{ good.label }}</span>
          <div flex="~ col" ha>
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
            <div h5 w-full lh-5 flex="~ items-center">
              <span text-left text-3 lh-5>浏览量:</span><span text-md text-gray lh-5>{{ good.views }}</span>
              <div flex-auto />
              <span text-right text-3 lh-5>销量:</span><span text-xl text-green lh-5>{{ good.sales }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
