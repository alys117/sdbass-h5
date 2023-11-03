import request from '@/utils/request'
const contextPath = '/' + process.env['VUE_APP_BASE_CONTEXT']
export function getAuth(params) {
  return request({
    // url: context + '/decision/sp/client/api/sql/st_user_instant_evaluate_zftc_dm/optime',
    url: contextPath + '/decision/sp/client/api/service/kefu_auth',
    method: 'get',
    params
  })
}
