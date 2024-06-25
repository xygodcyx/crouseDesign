<script setup lang="ts">
import { type LikeDataBase, ShopGoodDataBase } from '~/mock/content'
import { useUserStore } from '~/store/user'

const router = useRouter()
const userStore = useUserStore()
const likes = ref<Array<LikeDataBase>>()
onMounted(async () => {
  await getLikes()
  ElMessage('获取收藏成功')
})
async function getLikes() {
  likes.value = (await getAllLikeData4UserId(userStore.userInfo.id)).data
}
async function removeLike(id: number) {
  await deleteLikeData(id)
  await getLikes()
  ElMessage('删除成功')
}
async function addLikeOfGood2Shop(like: LikeDataBase) {
  const shopGood = new ShopGoodDataBase(userStore.userInfo.id, like.good)
  shopGood.quantity += 1
  await addShopGoodsData(shopGood)
  await getLikes()
  ElMessage('添加购物车成功')
}
</script>

<template>
  <div>
    <p t2>
      收藏夹
    </p>
    <div flex="~ justify-center items-center">
      <div>
        <div
          v-for="like in likes" :key="like.id" class="likeItem"

          mb4 h14 w160 b-rounded p1 shadow shadow-amber flex="~ items-center justify-between gap6" lt-sm="gap0 h10 w90 p0"
        >
          <div class="left" flex="~ justify-center items-center gap4" lt-sm="h10 gap1" h20>
            <img
              ml1
              :src="like.good.pic.replace(like.good.label.substring(0, 5), like.good.label[0]).replace('600x400', '30x30')" alt="12" lt-sm="h7 w7" inline-block h10 w10 b-rounded
            >
            <span lt-sm="text-3 w22" ml1 mr2 w70 overflow-hidden text-ellipsis text-nowrap text-2xl :title="like.good.label">{{ like.good.label }}</span>
          </div>
          <div hover="underline cursor-pointer" @click="router.push(`/goodDetail/${like.good.id}`)">
            <span text-blue>前往详细页</span>
          </div>
          <div class="right" flex="~ justify-between items-center gap1" mr2 lt-sm="ml4 mr2">
            <span text-btn h10 w10 lh-10 lt-sm="h6 w6 lh-6" @click="removeLike(like.id)">移</span>
            <span text-btn h10 w10 bg-blue lh-10 lt-sm="h6 w6 lh-6" @click="addLikeOfGood2Shop(like)">买</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
