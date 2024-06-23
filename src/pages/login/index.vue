<script setup lang="ts">
import { useUserStore } from '~/store/user'

onMounted(async () => {
})
const router = useRouter()
const userStore = useUserStore()
const LoginInfo = reactive({
  account: 'xygod',
  password: '123456',
})
async function onClickLoginButton() {
  if (LoginInfo.account === '' || LoginInfo.password === '') {
    ElMessage('账号密码不能为空')
    return
  }
  const login_result = (await login(
    LoginInfo.account,
    LoginInfo.password,
    // LoginInfo.imgFace,
  )).data
  ElMessage(login_result.message)
  // 登录成功后，将用户信息存储到localStorage中
  if (login_result.code === 200) {
    userStore.userInfo = login_result.userInfo
    userStore.isLogin = true
    // localStorage.setItem('userInfo', JSON.stringify(login_result.userInfo))
  }
  LoginInfo.account = ''
  LoginInfo.password = ''
  log(login_result.userInfo)
  router.push('/')
}
</script>

<template>
  <!-- input输入 -->
  <div flex="~ justify-center items-center" h130>
    <div>
      <h1 mb10 ml8 wa text-center text-4xl>
        Hi,Login
      </h1>
      <div flex="~ justify-center items-center col gap5" w-100vw>
        <div flex items-center justify-center gap1>
          <label>账号:</label>
          <input
            v-model="LoginInfo.account" placeholder="你的账号" h10 w-300px border border-rounded text-center text-black type="text"
          >
        </div>
        <div flex items-center justify-center gap1>
          <label>密码:</label>
          <input
            v-model="LoginInfo.password"
            placeholder="你的密码"
            h10 w-300px border border-rounded text-center text-black type="password"
          >
        </div>
        <button ml8 w20 border-rounded bg-amber text-white @click="onClickLoginButton">
          登录
        </button>
        <span mt4 inline-block w-90 pr2 text-right underline @click="router.push('/register')">no account,register?</span>
      </div>
    </div>
  </div>
</template>
