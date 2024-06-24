import type { OrderDataBase } from '../../types'

let orderDataBase: Array<OrderDataBase> = []

export function getOrderDataBase(id?: number) {
  orderDataBase = JSON.parse(localStorage.getItem('orderDataBase') || '[]') || []
  return id ? orderDataBase.filter(orderData => orderData.id === id) : orderDataBase
}
export function getAllOrder4UserId(userId: number) {
  orderDataBase = JSON.parse(localStorage.getItem('orderDataBase') || '[]') || []
  return orderDataBase.filter(orderData => orderData.userId === userId)
}
export function addOrder(orderData: OrderDataBase) {
  orderDataBase = JSON.parse(localStorage.getItem('orderDataBase') || '[]') || []
  orderDataBase.push(orderData)
  localStorage.setItem('orderDataBase', JSON.stringify(orderDataBase))
}
export function updateOrder(order: OrderDataBase) {
  orderDataBase = JSON.parse(localStorage.getItem('orderDataBase') || '[]') || []
  orderDataBase.forEach((orderData, i) => {
    if (orderData.id === order.id) {
      orderDataBase[i] = order
    }
  })
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
