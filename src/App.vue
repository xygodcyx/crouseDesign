<template>
  <main p-4 font-sans text="gray-700 dark:gray-200">
    <TheTopNav />
    <TheBanner />
    <router-view v-slot="{ Component }">
      <Transition name="slide-fade">
        <component :is="Component" />
      </Transition>
    </router-view>
    <!-- <Transition>
      <RouterView />
    </Transition> -->
  </main>
</template>

<style>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  transition: none;
  opacity: 0;
}
</style>
