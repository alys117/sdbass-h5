import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/sdbass/wq',
    method: 'get',
    params
  })
}
export function getMaxOpTime(params) {
  return request({
    url: '/webroot/decision/sp/client/api/sql/st_user_instant_evaluate_zftc_dm/optime',
    method: 'get',
    params
  })
}

export function getTableList(params) {
  return request({
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_zftc_dm/table',
    method: 'get',
    params
  })
}
