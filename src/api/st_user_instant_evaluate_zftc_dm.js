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
    // url: '/webroot/decision/sp/client/api/sql/st_user_instant_evaluate_zftc_dm/optime',
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_zftc_dm/op_time',
    method: 'get',
    params
  })
}
export function getLastMonth(params) {
  return request({
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_zftc_dm/lastmonth',
    method: 'get',
    params
  })
}
export function getThisMonth(params) {
  return request({
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_zftc_dm/thismonth',
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

export function getTrendList(params) {
  return request({
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_zftc_dm/trend',
    method: 'get',
    params
  })
}
