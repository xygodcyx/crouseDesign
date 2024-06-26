<script setup lang="ts">
import type { OrderDataBase, ShopGoodDataBase } from '~/mock/content'

const router = useRouter()
const params = useRoute('/order/[id]').params
const order = ref<OrderDataBase>()

onMounted(async () => {
  await getOrder()
})

async function getOrder() {
  order.value = (await getOrderData4Id(+params.id)).data[0]
}

async function removeShopGood2Order(id: number) {
  // await deleteShopGoodsData(id)
  if (!order.value) {
    return
  }
  const index = order.value.shopGoods.findIndex(shopGood => shopGood.id === id)
  if (index === -1) {
    return
  }
  order.value.shopGoods.splice(index, 1)
  if (order.value.shopGoods.length === 0) {
    await deleteOrderData(order.value.id)
    await getOrder()
    ElMessage('已删除订单中的所有商品,订单已被删除')
    router.push('/order')
    return
  }
  order.value.sum = order.value.shopGoods.reduce((sum, shopGood) => sum + shopGood.sum, 0)

  await updateOrderData(order.value)
  await getOrder()
  ElMessage('删除成功')
}

async function increaseShopGoodQuantity2Order(shopGood: ShopGoodDataBase) {
  if (order.value) {
    shopGood.quantity += 1
    shopGood.sum = shopGood.quantity * shopGood.good.newPrice
    order.value.sum = order.value.shopGoods.reduce((sum, shopGood) => sum + shopGood.sum, 0)
    await updateOrderData(order.value)
    await getOrder()
  }
}
async function subtractShopGoodQuantity2Order(shopGood: ShopGoodDataBase) {
  if (order.value) {
    shopGood.quantity > 1 ? shopGood.quantity -= 1 : shopGood.quantity = 1
    shopGood.sum = shopGood.quantity * shopGood.good.newPrice
    order.value.sum = order.value.shopGoods.reduce((sum, shopGood) => sum + shopGood.sum, 0)
    await updateOrderData(order.value)
    await getOrder()
  }
}
</script>

<template>
  <div flex="~ justify-center">
    <!-- wrap -->
    <div v-if="order">
      <!-- tip -->
      <p text-center lh-normal>
        <span flex-shrink-0 text-sm text-gray>当前订单编号:</span>
        <span flex-shrink-0 text-xl text-green>{{ order.id }}</span>
      </p>
      <!-- shopGoodWrap -->
      <div flex="~ col justify-start" ha wa>
        <!-- shopGoodItem -->
        <div
          v-for="shopGood in order.shopGoods" :key="shopGood.id" class="shopGoodItem"

          mb4 h14 w160 b-rounded p1 shadow shadow-amber flex="~ items-center justify-between gap6" lt-sm="gap0 h10 w90 p0"
        >
          <div class="left" flex="~ justify-center items-center gap4" lt-sm="h10 gap1" h20>
            <img
              ml1
              :src="shopGood.good.pic.replace(shopGood.good.label.substring(0, 5), shopGood.good.label[0]).replace('600x400', '30x30')" alt="12" lt-sm="h7 w7" inline-block h10 w10 b-rounded
            >
            <span lt-sm="text-3 w22" ml1 mr2 w40 overflow-hidden text-ellipsis text-nowrap text-2xl :title="shopGood.good.label">{{ shopGood.good.label }}</span>
            <div flex="~ items-center justify-start" lt-sm="w20" w50>
              <span mr1 text-start lt-sm="text-4" text-2xl :title="shopGood.good.label">{{ shopGood.quantity }}</span>
              <span text-start text-5 text-red flex="2" lt-sm="text-4" :title="shopGood.good.label">￥{{ shopGood.sum }}</span>
            </div>
          </div>
          <div class="right" flex="~ justify-between items-center gap1" mr2 lt-sm="ml4 mr2">
            <span text-btn h10 w10 lh-10 lt-sm="h6 w6 lh-6" @click="removeShopGood2Order(shopGood.id)">移</span>
            <span text-btn h10 w10 bg-green lh-10 lt-sm="h6 w6 lh-6" @click="increaseShopGoodQuantity2Order(shopGood)">加</span>
            <span text-btn h10 w10 bg-amber lh-10 lt-sm="h6 w6 lh-6" @click="subtractShopGoodQuantity2Order(shopGood)">减</span>
          </div>
        </div>
      </div>
      <div />
    </div>
  </div>
</template>
