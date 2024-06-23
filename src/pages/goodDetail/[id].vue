<script setup lang="ts">
import type { GoodDataBase } from '~/mock/content/types'

const params = useRoute('/goodDetail/[id]').params
// const router = useRouter()
const good = ref<GoodDataBase | null>(null)
onMounted(async () => {
  const result = await getGoodsData(+params.id)
  good.value = result.data[0]
  log(good.value)
})
</script>

<template>
  <div v-if="good" fcenter flex gap10 fill-amber lt-sm="fcol justify-center items-center">
    <div
      flex="~ col justify-center"
      ha w-400px cursor-pointer gap-1 rounded-md p2 shadow-2xl shadow-amber
      lt-sm="w-360px"
    >
      <el-image :src="good.pic">
        <template #placeholder>
          <div class="image-slot" text-center>
            等一会哦<span class="dot">...</span>
          </div>
        </template>
      </el-image>
      <!-- <img h-100px w-full select-none :src="good.pic" alt="" @click="console.log(good)"> -->
      <span cursor-text text-center text-2xl>{{ good.label }}</span>
      <div flex="~ items-center justify-between">
        <p flex="~ items-center justify-center" w-full cursor-text>
          <del text-center>
            ￥{{ good.oldPrice }}
          </del>
          <span text-center text-2xl text-red>
            ￥{{ good.newPrice }}
          </span>
        </p>
        <div inline-block ha w10 flex="~ justify-between items-center">
          <span text-xl @click="''">-</span>
          <span text-xl>1</span>
          <span text-xl @click="''">+</span>
        </div>
      </div>
    </div>
    <div fcol flex="gap3" class="operation" wa lt-sm="w60">
      <button flex="~ justify-center" btn>
        <span class="i-ph:shopping-cart" inline-block h6 w6 /> <span>立即购买</span>
      </button>
      <button flex="~ justify-center" btn>
        <span class="i-ph:shopping-cart" inline-block h6 w6 /> <span>加入购物车</span>
      </button>
      <button flex="~ justify-center" btn>
        <span class="i-ph:shopping-cart" inline-block h6 w6 /> <span>收藏</span>
      </button>
    </div>
  </div>
</template>
