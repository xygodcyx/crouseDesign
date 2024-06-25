<script setup lang="ts">
import { useUserStore } from '~/store/user'
import type { OrderDataBase } from '~/mock/content'

const classics = [{
  label: '全部',
  value: '',
  onclick: () => { },
}, {
  label: '未支付',
  value: 'UNPAID',
  onclick: () => {},
}, {
  label: '已支付',
  value: 'HAVE_PAID',
  onclick: () => {},
}, {
  label: '已取消',
  value: 'CANCELED',
  onclick: () => {},
}]
const userStore = useUserStore()
const orderData = ref<Array<OrderDataBase>>()
onMounted(async () => {
  orderData.value = (await getAllOrderData4UserId(userStore.userInfo.id)).data
  log(orderData.value)
})
</script>

<template>
  <!-- wrap -->
  <div flex=" ~ col justify-center items-center" wa>
    <!-- classify -->
    <div flex="~ justify-around items-center" h20 w70>
      <span
        v-for="classify in classics" :key="classify.value"
        text-btn h10 w11 text-sm lh-10 @click="classify.onclick()"
      >{{ classify.label }}</span>
    </div>
    <!-- content -->
    <div grid grid-auto-flow-row wa gap2>
      <!-- order-item -->
      <div v-for="order in orderData" :key="order.id" border >
        <div h30 w80 flex="~ col" >
          <!-- imgs -->
          <div flex="~ gap1" w-full overflow-y-hidden>
            <!-- <div  h10 w12 flex="~ row justify-start items-center gap1"> -->
            <img v-for="shopGood in order.shopGoods" :key="shopGood.id" :src="shopGood.good.pic.replace(shopGood.good.label.substring(0, 5), shopGood.good.label[0]).replace('600x400', '40x40')" alt="" h10 w10>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- footer -->
</template>
