import Mock from 'mockjs'

// import book from './modules/book';
import { getBannersData } from './banner'
import {
  addLikeData,
  addOrderData,
  addShopGoodsData,
  deleteLikeData,
  deleteOrderData,
  deleteShopGoodData,
  getAllLikeData4UserId,
  getAllOrderData4UserId,
  getAllShopGoodData4UserId,
  getGoodsData,
  getShopGoodData4GoodIdAndUserId,
  getShopGoodsDataBaseData,
  updateLikeData,
  updateOrderData,

} from './content/'
import { login, register, update } from './user'

const { mock } = Mock // Mock函数
// 使用拦截规则拦截命中的请求
// mock( url, post/get, 返回的数据/函数（有return值）);
// banners
mock('/api/getBannerData', 'get', getBannersData)
// goods
mock('/api/getGoodsData', 'post', getGoodsData)
// shopGoods
mock('/api/getShopGoodsData', 'post', getShopGoodsDataBaseData)
mock('/api/getAllShopGoodData4UserId', 'post', getAllShopGoodData4UserId)
mock('/api/getShopGoodData4GoodIdAndUserId', 'post', getShopGoodData4GoodIdAndUserId)
mock('/api/addShopGoodsData', 'post', addShopGoodsData)
mock('/api/deleteShopGoodsData', 'post', deleteShopGoodData)
// orders
mock('/api/getAllOrderData4UserId', 'post', getAllOrderData4UserId)
mock('/api/addOrderData', 'post', addOrderData)
mock('/api/deleteOrderData', 'post', deleteOrderData)
mock('/api/updateOrderData', 'post', updateOrderData)
// likes
mock('/api/getAllLikeData4UserId', 'post', getAllLikeData4UserId)
mock('/api/addLikeData', 'post', addLikeData)
mock('/api/deleteLikeData', 'post', deleteLikeData)
mock('/api/updateLikeData', 'post', updateLikeData)
// users
mock('/api/login', 'post', login)
mock('/api/register', 'post', register)
mock('/api/updateUser', 'post', update)
mock('/api/logout', 'post', (req) => {
  log(req.body)
})
