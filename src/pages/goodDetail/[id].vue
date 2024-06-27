<script setup lang="ts">
import type { GoodDataBase } from '~/mock/content/types'
import { LikeDataBase, OrderDataBase, ShopGoodDataBase } from '~/mock/content/types'
import { useUserStore } from '~/store/user'

const params = useRoute('/goodDetail/[id]').params
// const router = useRouter()
const userStore = useUserStore()
const good = ref<GoodDataBase | undefined>(undefined)
const shopGood = ref<ShopGoodDataBase | undefined>(undefined)
const wantAddQuantity = ref(1)
onMounted(async () => {
  const result = await getGoodsData(+params.id)
  good.value = result.data[0]
  if (!good.value) {
    return
  }
  good.value.views += 1
  await updateGoodsData(good.value)
  shopGood.value = (await getShopGoodData4GoodIdAndUserId(good.value?.id, userStore.userInfo.id)).data || new ShopGoodDataBase(userStore.userInfo.id, good.value)
  ElMessage('获取详细页成功')
})
function addShop() {
  if (!shopGood.value) {
    return
  }
  if (!userStore.isLogin) {
    ElMessage('未登录,请登录')
    return
  }
  shopGood.value.quantity += wantAddQuantity.value
  addShopGoodsData(shopGood.value)
  wantAddQuantity.value = 1
  userStore.addShopGoodId(shopGood.value.id)
  ElMessage('已添加到购物车')
}
function buyNow() {
  if (!shopGood.value) {
    return
  }
  if (!userStore.isLogin) {
    ElMessage('未登录,请登录')
    return
  }
  log(shopGood.value)
  shopGood.value.quantity = wantAddQuantity.value
  shopGood.value.sum = shopGood.value.quantity * shopGood.value.good.newPrice
  addOrderData(new OrderDataBase(userStore.userInfo.id, [shopGood.value]))
  ElMessage('已添加到订单,请前往支付')
}
function addLike() {
  if (!good.value) {
    return
  }
  if (!userStore.isLogin) {
    ElMessage('未登录,请登录')
    return
  }
  const like = new LikeDataBase(userStore.userInfo.id, good.value)
  addLikeData(like)
  ElMessage('已添加到收藏(如果已收藏则不会添加)')
}
</script>

<template>
  <div v-if="good" flex fcenter gap10 fill-amber lt-sm="fcol justify-center items-center">
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
      <span cursor-text text-center text-2xl>{{ good.label }}</span>
      <div flex="~ items-center justify-between">
        <p flex="~ items-center justify-center" w-full cursor-text>
          <del text-center>
            ￥{{ good.oldPrice * wantAddQuantity }}
          </del>
          <span text-center text-2xl text-red>
            ￥{{ good.newPrice * wantAddQuantity }}
          </span>
        </p>

        <div mr5 inline-block ha w10 flex="~ justify-between items-center gap2">
          <span text-2xl @click="wantAddQuantity > 1 ? wantAddQuantity-- : wantAddQuantity = 1">-</span>
          <span cursor-text text-xl>{{ wantAddQuantity }}</span>
          <span text-2xl @click="wantAddQuantity++">+</span>
        </div>
      </div>
      <div h5 w-full lh-5 flex="~ justify-center items-center">
        <p>
          <span text-3 lh-5>浏览量:</span>
          <span text-md text-gray lh-5>{{ good.views }}</span>
        </p>
        <div flex-auto />
        <p>
          <span text-3 lh-5>销量:</span>
          <span text-xl text-green lh-5>{{ good.sales }}</span>
        </p>
      </div>
    </div>
    <div flex="gap3" class="operation" wa fcol lt-sm="w60">
      <button flex="~ justify-center" btn @click="buyNow">
        <span i-icon-park-outline:buy inline-block h6 w6 /> <span>立即购买</span>
      </button>
      <button flex="~ justify-center" btn @click="addShop">
        <span i-ph:shopping-cart inline-block h6 w6 /> <span>加入购物车</span>
      </button>
      <button flex="~ justify-center" btn @click="addLike">
        <span i-material-symbols:kid-star-outline-sharp inline-block h6 w6 /> <span>收藏</span>
      </button>
    </div>
  </div>
  <div v-else>
    <span text-xl text-green>什么也没有哦,你是不是随便输的id?<br>请在商品栏里打开详细页,谢谢!</span>
  </div>
</template>
