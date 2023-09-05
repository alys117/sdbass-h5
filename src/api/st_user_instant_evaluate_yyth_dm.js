import request from '@/utils/request'
const contextPath = '/' + process.env['VUE_APP_BASE_CONTEXT']
export function getMaxOpTime(params) {
  return request({
    // url: context + '/decision/sp/client/api/sql/st_user_instant_evaluate_yyth_dm/optime',
    url: contextPath + '/decision/sp/client/api/service/st_user_instant_evaluate_yyth_dm/op_time',
    method: 'get',
    params
  })
}
export function getLastMonth(params) {
  return request({
    url: contextPath + '/decision/sp/client/api/service/st_user_instant_evaluate_yyth_dm/lastmonth',
    method: 'get',
    params
  })
}
export function getThisMonth(params) {
  return request({
    url: contextPath + '/decision/sp/client/api/service/st_user_instant_evaluate_yyth_dm/thismonth',
    method: 'get',
    params
  })
}
export function getTableList(params) {
  return request({
    url: contextPath + '/decision/sp/client/api/service/st_user_instant_evaluate_yyth_dm/table',
    method: 'get',
    params
  })
}

export function getTrendList(params) {
  return request({
    url: contextPath + '/decision/sp/client/api/service/st_user_instant_evaluate_yyth_dm/trend',
    method: 'get',
    params
  })
}
