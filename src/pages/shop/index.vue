<script setup lang="ts">
import type { ShopGoodDataBase } from '~/mock/content/types'
import { useUserStore } from '~/store/user'

const router = useRouter()
const userStore = useUserStore()
const shopGoods = ref<Array<ShopGoodDataBase>>()
const allShouldPay = computed(() => (shopGoods?.value || []).reduce((pre, cur) => pre + cur.sum, 0) || 0)
onMounted(async () => {
  await getAllShopGoods()
})

async function getAllShopGoods() {
  const userId = userStore.userInfo.id
  shopGoods.value = (await getAllShopGoodData4UserId(userId)).data
}
async function removeShopGood(id: number) {
  await deleteShopGoodsData(id)
  await getAllShopGoods()
  userStore.removeShopGoodId(id)
}
async function removeAllShopGood() {
  (shopGoods.value || []).forEach(async (shopGood) => {
    await deleteShopGoodsData(shopGood.id)
  })
  await getAllShopGoods()
  userStore.removeAllShopGoodId()
}

async function increaseShopGoodQuantity(shopGood: ShopGoodDataBase) {
  shopGood.quantity += 1
  await addShopGoodsData(shopGood)
  await getAllShopGoods()
}
async function subtractShopGoodQuantity(shopGood: ShopGoodDataBase) {
  shopGood.quantity > 1 ? shopGood.quantity -= 1 : shopGood.quantity = 1
  await addShopGoodsData(shopGood)
  await getAllShopGoods()
}
async function buyShopGood(shopGood: ShopGoodDataBase) {
  log(shopGood)
}
async function buyAllShopGood() {

}
</script>

<template>
  <div class="shopGoodsWrap" flex="~ justify-center items-center" mt--6 font-sans>
    <div v-if="shopGoods?.length !== 0" class="shopGoods" flex="col">
      <!-- operation -->
      <div flex="~ justify-start items-center gap2" mb2>
        <div text-btn h9 w9 bg-green text-sm lh-9 @click="buyAllShopGood">
          全要
        </div>
        <div text-btn h9 w9 text-3 lh-9 @click="removeAllShopGood">
          全不要
        </div>
        <div h9 w9 text-xl text-red font-bold lh-9>
          ￥{{ allShouldPay }}
        </div>
      </div>
      <div
        v-for="shopGood in shopGoods" :key="shopGood.id" class="shopGoodItem"

        mb4 h10 w86 b-rounded shadow shadow-amber flex="~ items-center justify-between gap6" lt-sm="gap0"
      >
        <div class="left" flex="~ justify-center items-center gap4" lt-sm="h10 gap1" h20>
          <img
            ml1
            :src="shopGood.good.pic.replace(shopGood.good.label.substring(0, 5), shopGood.good.label[0]).replace('600x400', '30x30')" alt="12" lt-sm="h7 w7" inline-block h10 w10 b-rounded
          >
          <span lt-sm="text-3" ml1 mr2 w22 overflow-hidden text-ellipsis text-nowrap text-2xl :title="shopGood.good.label">{{ shopGood.good.label }}</span>
          <div flex="~ items-center justify-start" w20>
            <span mr1 text-start lt-sm="text-4" text-2xl :title="shopGood.good.label">{{ shopGood.quantity }}</span>
            <span text-start text-5 text-red flex="2" lt-sm="text-4" :title="shopGood.good.label">￥{{ shopGood.sum }}</span>
          </div>
        </div>
        <div class="right" flex="~ justify-between items-center gap1" mr2 lt-sm="ml4 mr2">
          <span text-btn h10 w10 lh-10 lt-sm="h6 w6 lh-6" @click="removeShopGood(shopGood.id)">移</span>
          <span text-btn h10 w10 bg-green lh-10 lt-sm="h6 w6 lh-6" @click="increaseShopGoodQuantity(shopGood)">加</span>
          <span text-btn h10 w10 bg-amber lh-10 lt-sm="h6 w6 lh-6" @click="subtractShopGoodQuantity(shopGood)">减</span>
          <span text-btn h10 w10 bg-blue lh-10 lt-sm="h6 w6 lh-6" @click="buyShopGood(shopGood)">买</span>
        </div>
      </div>
    </div>
    <div v-else>
      <span t2>什么也没有哦,去买点?</span>
      <span text-btn w30 @click="router.push('/')">去购物</span>
    </div>
  </div>
</template>
