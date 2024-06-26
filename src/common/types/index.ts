import type { ENUM_ORDER_STATUS } from '~/mock/content'

export interface OrderRequestInfo {
  pageInfo: PageInfo
  classify: ENUM_ORDER_STATUS
}

interface PageInfo {
  page: number
  pageSize: number
}
