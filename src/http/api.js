import request from './request'

export function getList(params) {
  return request({
    url: 'https://mobile-ms.uat.homecreditcfc.cn/mock/62a8ad741dcd1800271141df/api/getToDoList',
    method: 'GET',
    params: params
  })
}
