<script setup lang="ts">
import { useUserStore } from '~/store/user'
import type { OrderDataBase } from '~/mock/content'
import { ENUM_ORDER_STATUS } from '~/mock/content/types'
import type { OrderRequestInfo } from '~/common'

const classics = [{
  label: '全部',
  value: ENUM_ORDER_STATUS.ALL,
  onclick: () => { },
}, {
  label: '待支付',
  value: ENUM_ORDER_STATUS.UNPAID,
  onclick: () => {},
}, {
  label: '已支付',
  value: ENUM_ORDER_STATUS.HAVE_PAID,
  onclick: () => {},
}, {
  label: '已取消',
  value: ENUM_ORDER_STATUS.CANCELED,
  onclick: () => {},
}]
const userStore = useUserStore()
const router = useRouter()
const orderData = ref<Array<OrderDataBase>>()
const showOrderData = ref<Array<OrderDataBase>>()
const orderRequestInfo = reactive<OrderRequestInfo>(
  {
    pageInfo: {
      page: 1,
      pageSize: 8,
    },
    classify: ENUM_ORDER_STATUS.UNPAID,
  },
)
const allOrderCount = ref(0)
/* order */
watch(() => orderData.value, (newOrderData) => {
  showOrderData.value = newOrderData
})
onMounted(async () => {
  await getOrders()
  ElMessage('获取订单成功')
})

async function getOrders() {
  const { data, allCount } = (await getAllOrderData4UserId(userStore.userInfo.id, orderRequestInfo)).data
  orderData.value = data
  allOrderCount.value = allCount
}

async function cancelOrder(orderData: OrderDataBase) {
  orderData.status = ENUM_ORDER_STATUS.CANCELED
  await updateOrderData(orderData)
  await getOrders()
}

async function payOrder(orderData: OrderDataBase) {
  if (userStore.userInfo.balance < orderData.sum) {
    // alert('钱不够')
    ElMessage('钱不够')
    return
  }
  orderData.status = ENUM_ORDER_STATUS.HAVE_PAID
  await updateOrderData(orderData)
  userStore.userInfo.balance -= orderData.sum
  ElMessage('支付成功')
  await getOrders()
}

function openOrderDetail(id: number) {
  router.push(`/order/${id}`)
}

/* classify */
async function onClickClassifyButton(_curClassify: ENUM_ORDER_STATUS) {
  orderRequestInfo.classify = _curClassify
  orderRequestInfo.pageInfo.page = 1
  await getOrders()
}

async function deleteOrder(orderId: number) {
  await deleteOrderData(orderId)
  await getOrders()
}
</script>

<template>
  <!-- wrap -->
  <div flex=" ~ col justify-center items-center" mb10 mt--10 wa>
    <!-- classify -->
    <div flex="~ justify-around items-center gap2" h20 w70 lt-sm="justify-between">
      <span

        v-for="classify in classics" :key="classify.value"
        text-btn h10 w11 flex-shrink-0 text-sm lh-10 @click="onClickClassifyButton(classify.value); classify.onclick()"
      >{{ classify.label }}</span>
      <div flex="~ justify-between items-center">
        <span mr2 text-xl text-red>￥{{ userStore.userInfo.balance }}</span>
        <div h8 w8 cursor-pointer b-rounded bg-green text-center text-2xl lh-8 @click="router.push('/userInfo')">
          充
        </div>
      </div>
    </div>
    <!-- content -->
    <div grid ha wa gap10 lt-sm="grid-cols-1" md="grid-cols-2" lg="grid-cols-3" xl="grid-cols-4">
      <!-- order-item -->
      <div v-for="order in showOrderData" :key="order.id" ha border p1>
        <div flex="~ col" lt-sm="h50" md="h55" lg="h60" xl="h65">
          <!-- imgs -->
          <el-scrollbar max-h12 max-w80 min-h12>
            <div
              flex="~ self-stretch justify-start items-start gap1.2"
              h12 w80
            >
              <div v-for="shopGood in order.shopGoods" :key="shopGood.id" h12 wa flex-shrink-0 flex="~ justify-center items-center gap0.2">
                <img :src="shopGood.good.pic.replace(shopGood.good.label.substring(0, 5), shopGood.good.label[0]).replace('600x400', '40x40')" alt="" h10 w10 select-none>
                <span wa select-none>x
                  <b text-green>{{ shopGood.quantity }}</b>
                </span>
              </div>
            </div>
          </el-scrollbar>
          <!-- orderInfo -->
          <div mt2>
            <div flex="~ justify-start items-center">
              <span mr1 text-xl text-green>{{ order.shopGoods.reduce((pre, cur) => pre + cur.quantity, 0) }}</span>
              <span text-3>件东西一共</span>
              <span ml1 text-xl text-yellow>￥{{ order.sum }}</span>
            </div>
            <!-- names -->
            <el-scrollbar lt-sm="max-h13 min-h13" md="min-h20 max-h20" xl="min-h30 max-h30">
              <div flex="~ wrap items-start" lt-sm="max-h13" max-h30 w80 md="max-h20" xl="max-h30">
                <span v-for="shopGood in order.shopGoods" :key="shopGood.id" mb2 mr3 h5 wa text-3 lh-5 text-shadow text-shadow-color-amber shadow shadow-blue>
                  {{ shopGood.good.label }}
                </span>
              </div>
            </el-scrollbar>
          </div>
          <!-- operation -->
          <div flex="~ justify-between items-center" mt2>
            <div>
              <span text-blue>当前状态:</span>
              <span ml2 :class="order.status === ENUM_ORDER_STATUS.CANCELED ? 'text-gray' : order.status === ENUM_ORDER_STATUS.HAVE_PAID ? 'text-green' : order.status === ENUM_ORDER_STATUS.UNPAID ? 'text-red' : '' ">
                {{ order.status }}</span>
            </div>
            <div flex="~ justify-between" wa text-sm>
              <button v-if="order.status === ENUM_ORDER_STATUS.UNPAID" mr1 h7 wa bg-blue btn @click="openOrderDetail(order.id)">
                更改
              </button>
              <button v-if="order.status === ENUM_ORDER_STATUS.UNPAID" mr1 h7 wa bg-gray btn @click="cancelOrder(order)">
                取消
              </button>
              <button v-if="order.status === ENUM_ORDER_STATUS.UNPAID" h7 wa btn @click="payOrder(order)">
                支付
              </button>
            </div>
          </div>
          <!-- addDate -->
          <div mt2 flex="~">
            <div flex="~ justify-start items-center">
              <span text-3 text-bluegray>下单时间：</span>
              <span text-indigo>{{ new Date(order.addDate).toLocaleString() }}</span>
            </div>
            <div flex-auto />
            <span text-sm text-red hover="underline cursor-pointer" @click="deleteOrder(order.id)">删除订单</span>
          </div>
        </div>
      </div>
      <div v-if="showOrderData?.length === 0">
        <b text-base text-yellow>没有{{ curClassify }}订单</b>
      </div>
    </div>
    <!-- footer -->
    <el-pagination
      v-if="(showOrderData || []).length > 0"
      v-model:current-page="orderRequestInfo.pageInfo.page" v-model:page-size="orderRequestInfo.pageInfo.pageSize" v-model:total="allOrderCount"
      size="small"
      background mt2 layout="prev, pager, next" @current-change="getOrders()"
    />
  </div>
</template>
