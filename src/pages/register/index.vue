<script setup lang="ts">
const router = useRouter()
const registerInfo = reactive({
  account: '',
  password: '',
  name: '',
  imgFace: '',
})
async function onClickRegisterButton() {
  if (registerInfo.account === '' || registerInfo.password === '') {
    ElMessage('账号密码不能为空')
    return
  }
  if (registerInfo.password.length < 6) {
    ElMessage('密码长度不能小于6')
    return
  }
  const register_result = (await register(
    registerInfo.account,
    registerInfo.password,
    registerInfo.name,
    // registerInfo.imgFace,
  )).data
  ElMessage(register_result.message)
  router.push('/login')
}
</script>

<template>
  <!-- input输入 -->
  <div flex="~ justify-center items-center" h130>
    <div>
      <h1 mb10 ml8 wa text-center text-4xl>
        Hi,Register
      </h1>
      <div flex="~ justify-center content-center items-center col gap5" w-100vw>
        <div flex items-center justify-center gap1>
          <span>账号:</span><input v-model="registerInfo.account" placeholder="你的账号" h10 w-300px border border-rounded text-center text-black type="text">
        </div>
        <div flex items-center justify-center gap1>
          <span>密码:</span><input v-model="registerInfo.password" placeholder="你的密码" h10 w-300px border border-rounded text-center text-black type="password">
        </div>
        <div flex items-center justify-center gap1>
          <span>昵称:</span><input v-model="registerInfo.name" placeholder="你的昵称" h10 w-300px border border-rounded text-center text-black type="text">
        </div>
        <button ml8 w20 border-rounded bg-amber text-white @click="onClickRegisterButton">
          注册
        </button>
        <span mt4 inline-block w-90 pr2 text-right underline @click="router.push('/login')">has account,login?</span>
      </div>
    </div>
  </div>
</template>
