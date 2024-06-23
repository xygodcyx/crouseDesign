import { Random } from 'mockjs'

import type { UserDataBase } from './types'

let userDataBase: Array<UserDataBase> = [
  // new UserDataBase('xygod', 'xygod'),
]

function testNewFunction() {
  userDataBase.forEach((user) => {
    if (!user.imgFace || user.imgFace === '/imgs/face.jpg') {
      user.imgFace = Random.image('40x40', Random.color(), user.name.substring(0, 1))
    }
  })
  localStorage.setItem('userDataBase', JSON.stringify(userDataBase))
}

export function getUserDataBase() {
  return userDataBase
}
export function addUser(user: UserDataBase) {
  userDataBase.push(user)
  user.imgFace = Random.image('40x40', Random.color(), user.name.substring(0, 1))
  localStorage.setItem('userDataBase', JSON.stringify(userDataBase))
}
export function updateUser(user: UserDataBase) {
  userDataBase = JSON.parse(localStorage.getItem('userDataBase') || '[]') || []
  const index = userDataBase.findIndex(u => u.id === user.id)
  if (index !== -1) {
    userDataBase[index] = user
    localStorage.setItem('userDataBase', JSON.stringify(userDataBase))
  }
}
export function deleteUser(user: UserDataBase) {
  const index = userDataBase.findIndex(u => u.id === user.id)
  if (index !== -1) {
    userDataBase.splice(index, 1)
    localStorage.setItem('userDataBase', JSON.stringify(userDataBase))
  }
  else {
    warn(`no find user ${user.name} : ${user.id}`)
  }
}
export function canLogin(account: string, password: string): UserDataBase | boolean {
  userDataBase = JSON.parse(localStorage.getItem('userDataBase') || '[]') || []
  testNewFunction()
  let result: UserDataBase | boolean = false
  userDataBase.forEach((user) => {
    if (user.account === account && user.password === password) {
      result = user
    }
  })
  return result
}

export function canRegister(account: string): boolean {
  userDataBase = JSON.parse(localStorage.getItem('userDataBase') || '')
  let result = true
  userDataBase.forEach((user) => {
    if (user.account === account) {
      result = false
    }
  })
  const repetition = checkRepetitionAccount()
  repetition ? result = false : result = !!result
  return result
}

function checkRepetitionAccount(): boolean {
  let lastAccount = ''
  userDataBase.forEach((user) => {
    if (user.account === lastAccount) {
      // 重复
      return true
    }
    else {
      lastAccount = user.account
    }
  })
  return false
}
