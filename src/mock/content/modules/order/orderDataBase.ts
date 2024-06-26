import { ENUM_ORDER_STATUS, type OrderDataBase } from '../../types'
import type { OrderRequestInfo } from '~/common'

let orderDataBase: Array<OrderDataBase> = []

export function getOrderDataBase(id?: number) {
  orderDataBase = JSON.parse(localStorage.getItem('orderDataBase') || '[]') || []
  return id ? orderDataBase.filter(orderData => orderData.id === id) : orderDataBase
}
export function getAllOrder4UserId(userId: number, orderRequestInfo: OrderRequestInfo) {
  orderDataBase = JSON.parse(localStorage.getItem('orderDataBase') || '[]') || []
  const { pageInfo, classify } = orderRequestInfo
  let result = orderDataBase.filter(orderData => orderData.userId === userId)
  if (classify !== ENUM_ORDER_STATUS.ALL) {
    result = result.filter(orderData => orderData.status === classify)
  }
  result = result.sort((a, b) => a.addDate > b.addDate ? -1 : 1)

  return {
    allCount: result.length,
    data: result.splice(pageInfo.pageSize * (pageInfo.page - 1), pageInfo.pageSize),
  }
}
export function addOrder(orderData: OrderDataBase) {
  orderDataBase = JSON.parse(localStorage.getItem('orderDataBase') || '[]') || []
  orderDataBase.push(orderData)
  localStorage.setItem('orderDataBase', JSON.stringify(orderDataBase))
}
export function updateOrder(orderData: OrderDataBase) {
  orderDataBase = JSON.parse(localStorage.getItem('orderDataBase') || '[]') || []
  orderDataBase.forEach((order, i) => {
    if (order.id === orderData.id) {
      orderDataBase[i] = orderData
    }
  })
  localStorage.setItem('orderDataBase', JSON.stringify(orderDataBase))
}
export function deleteOrder(id: number) {
  orderDataBase = JSON.parse(localStorage.getItem('orderDataBase') || '[]') || []
  const i = orderDataBase.findIndex(u => u.id === id)
  if (i !== -1) {
    orderDataBase.splice(i, 1)
    localStorage.setItem('orderDataBase', JSON.stringify(orderDataBase))
  }
  else {
    warn(`no find id : ${id}`)
  }
}
