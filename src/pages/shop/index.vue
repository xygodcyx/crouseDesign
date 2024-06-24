<script setup lang="ts">
import type { ShopGoodDataBase } from '~/mock/content/types'
import { useUserStore } from '~/store/user'

const router = useRouter()
const userStore = useUserStore()
const shopGoods = ref<Array<ShopGoodDataBase>>()
onMounted(async () => {
  await getAllShopGoods()
})

async function getAllShopGoods() {
  const userId = userStore.userInfo.id
  shopGoods.value = (await getAllGoodsData4UserId(userId)).data
}
async function removeShopGood(id: number) {
  await deleteShopGoodsData(id)
  await getAllShopGoods()
  userStore.removeShopGoodId(id)
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
</script>

<template>
  <div class="shopGoodsWrap" flex="~ justify-center items-center">
    <div v-if="shopGoods?.length !== 0" class="shopGoods" flex="col">
      <div
        v-for="shopGood in shopGoods" :key="shopGood.id" class="shopGoodItem"
        mb4
        h10 flex="~ items-center justify-between gap6" lt-sm="gap0"
      >
        <div class="left" flex="~ justify-center items-center gap4" lt-sm="h10 gap1" h20>
          <img :src="shopGood.good.pic" alt="12" lt-sm="h7 w7" inline-block h10 w10 b-rounded>
          <span mr3 lt-sm="text-sm" text-2xl :title="shopGood.good.label">{{ shopGood.good.label.length > 12 ? `${shopGood.good.label.substring(0, 12)}...` : shopGood.good.label }}</span>
          <div flex="~ items-center justify-center" wa>
            <span mr2 lt-sm="text-4" text-2xl :title="shopGood.good.label">{{ shopGood.quantity }}</span>
            <span text-5 text-red lt-sm="text-4" :title="shopGood.good.label">￥{{ shopGood.sum }}</span>
          </div>
        </div>
        <div class="right" flex="~ justify-between items-center gap1" mr2 lt-sm="ml4 mr0">
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
