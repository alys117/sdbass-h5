import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token, options = {}) {
  if (options && options.mobile) {
    return request({
      url: '/vue-admin-template/user/info',
      method: 'get',
      params: { token, mobile: options.mobile }
    })
  } else {
    return request({
      url: '/vue-admin-template/user/info',
      method: 'get',
      params: { token }
    })
  }
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
