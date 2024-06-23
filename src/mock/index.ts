import Mock from 'mockjs'

// import book from './modules/book';
import { getBannerData } from './banner/getBannerData'
import { getGoodsData } from './content/getGoodsData'
import { login } from './user/login'
import { register } from './user/register'
import { update } from './user/update'
import { addShopGood, deleteShopGood, getAllShopGoods4UserId, getShopGoodsDataBase } from './content/shopGoodsDataBase'

const { mock } = Mock // Mock函数
// 使用拦截规则拦截命中的请求
// mock( url, post/get, 返回的数据/函数（有return值）);
// banner
mock('/api/getBannerData', 'get', getBannerData)
// goods
mock('/api/getGoodsData', 'post', getGoodsData)
mock('/api/getShopGoodsData', 'post', getShopGoodsDataBase)
mock('/api/getAllGoodsData4UserId', 'post', getAllShopGoods4UserId)
mock('/api/addShopGoodsData', 'post', addShopGood)
mock('/api/deleteShopGoodsData', 'post', deleteShopGood)
// user
mock('/api/login', 'post', login)
mock('/api/register', 'post', register)
mock('/api/updateUser', 'post', update)
mock('/api/logout', 'post', (req) => {
  log(req.body)
})
