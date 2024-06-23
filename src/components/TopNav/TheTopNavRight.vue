<template>
  <nav wa text-xl flex="~ justify-around items-center content-center">
    <TheTopNavCenter />
    <button mr2 icon-btn @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>

    <a
      i-carbon-logo-github icon-btn
      rel="noreferrer"
      href="https://github.com/xygodcyx/crouseDesign"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
