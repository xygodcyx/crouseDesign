import Mock from 'mockjs'

// import book from './modules/book';
import { getBannerData } from './banner/getBannerData'
import { getGoodsData } from './content/getGoodsData'
import { login } from './user/login'
import { register } from './user/register'
import { update } from './user/update'

const { mock } = Mock // Mock函数
// 使用拦截规则拦截命中的请求
// mock( url, post/get, 返回的数据/函数（有return值）);
mock('/api/getBannerData', 'get', getBannerData)
mock('/api/getGoodsData', 'get', getGoodsData)
mock('/api/login', 'post', login)
mock('/api/register', 'post', register)
mock('/api/updateUser', 'post', update)
mock('/api/logout', 'post', (req) => {
  log(req.body)
})
