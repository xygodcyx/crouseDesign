import Mock from 'mockjs'

// import book from './modules/book';
import { getBannersData } from './banner'
import { addShopGoodsData, deleteShopGoodData, getAllShopGoods4UserIdData, getGoodsData, getShopGood4GoodIdData, getShopGoodsDataBaseData } from './content/'
import { login, register, update } from './user'

const { mock } = Mock // Mock函数
// 使用拦截规则拦截命中的请求
// mock( url, post/get, 返回的数据/函数（有return值）);
// banner
mock('/api/getBannerData', 'get', getBannersData)
// goods
mock('/api/getGoodsData', 'post', getGoodsData)
mock('/api/getShopGoodsData', 'post', getShopGoodsDataBaseData)
mock('/api/getAllGoodsData4UserId', 'post', getAllShopGoods4UserIdData)
mock('/api/getShopGood4GoodIdData', 'post', getShopGood4GoodIdData)
mock('/api/addShopGoodsData', 'post', addShopGoodsData)
mock('/api/deleteShopGoodsData', 'post', deleteShopGoodData)
// user
mock('/api/login', 'post', login)
mock('/api/register', 'post', register)
mock('/api/updateUser', 'post', update)
mock('/api/logout', 'post', (req) => {
  log(req.body)
})
