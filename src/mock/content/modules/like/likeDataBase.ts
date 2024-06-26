import type { LikeDataBase } from '../../types'

let likeDataBase: Array<LikeDataBase> = []

export function letLikeDataBase(id?: number) {
  likeDataBase = JSON.parse(localStorage.getItem('likeDataBase') || '[]') || []
  return id ? likeDataBase.filter(likeData => likeData.id === id) : likeDataBase
}
export function getAllLike4UserId(userId: number) {
  likeDataBase = JSON.parse(localStorage.getItem('likeDataBase') || '[]') || []
  return likeDataBase.filter(likeData => likeData.userId === userId).sort((a, b) => a.addDate > b.addDate ? -1 : 1)
}
function CheckUserHasDuplicateLike(like: LikeDataBase): boolean {
  let result = false
  likeDataBase = JSON.parse(localStorage.getItem('likeDataBase') || '[]') || []
  likeDataBase.forEach((_like) => {
    if (_like.userId === like.userId && _like.good.id === like.good.id) {
      result = true
    }
  })
  return result
}
export function addLike(likeData: LikeDataBase) {
  likeDataBase = JSON.parse(localStorage.getItem('likeDataBase') || '[]') || []
  log(likeData)
  if (!CheckUserHasDuplicateLike(likeData)) {
    likeDataBase.push(likeData)
    localStorage.setItem('likeDataBase', JSON.stringify(likeDataBase))
  }
}
export function updateLike(likeData: LikeDataBase) {
  likeDataBase = JSON.parse(localStorage.getItem('likeDataBase') || '[]') || []
  likeDataBase.forEach((like, i) => {
    if (like.id === likeData.id) {
      likeDataBase[i] = likeData
    }
  })
  localStorage.setItem('likeDataBase', JSON.stringify(likeDataBase))
}
export function deleteLike(id: number) {
  likeDataBase = JSON.parse(localStorage.getItem('likeDataBase') || '[]') || []
  const i = likeDataBase.findIndex(u => u.id === id)
  if (i !== -1) {
    likeDataBase.splice(i, 1)
    localStorage.setItem('likeDataBase', JSON.stringify(likeDataBase))
  }
  else {
    warn(`no find id : ${id}`)
  }
}
