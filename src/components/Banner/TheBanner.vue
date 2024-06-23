<script setup lang="ts">
interface Banner {
  pic: string
}
const bannerData = ref<Array<Banner>>([])
onMounted(async () => {
  const result = await getBannerData()
  if (bannerData.value?.length === 0)
    bannerData.value = result.data
})
</script>

<template>
  <div mb6 h60 lt-sm="mb10 h50">
    <el-carousel h-full>
      <el-carousel-item v-for="(banner, index) in bannerData" :key="index" h-full>
        <img w-full :src="banner.pic" alt="12">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
