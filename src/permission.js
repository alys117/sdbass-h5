import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import { getQueryObject } from '@/utils'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist
if (process.env.NODE_ENV !== 'production') {
  // console.log('router.afterEach', location, 'process.env.NODE_ENV', process.env.NODE_ENV)
  store.dispatch('app/toggleHead', 50)
  console.log('显示/隐藏头部')
}
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)
  const query = getQueryObject(location.search)
  console.info('①', '进入路由守卫start', query, to.path)
  if (!store.getters.mobile) {
    console.log('②', 'store无mobile')
    if (!query.mobile) {
      console.log('②-1', '没传mobile,也没有store，next(), end')
      next(); return
    } else {
      store.commit('user/SET_MOBILE', query.mobile)
      console.log('②-2', '设置mobile', query.mobile, to.path)
    }
    if (to.path === '/dashboard') {
      console.log('-----------------------')
      if (query.page === 'index') {
        console.log('============')
        next('/example/index')
        NProgress.done()
        return
      } else if (query.page === 'tabs') {
        next('/example/tabs')
      } else if (query.page === 'broadband') {
        next('/example/broadband-satisfaction')
      } else if (query.page === 'wireless') {
        next('/example/wireless-satisfaction')
      } else if (query.page === 'tariff') {
        next('/example/tariff-satisfaction')
      } else {
        next()
      }
      console.log('②-3', '选择一个路由跳转', query)
    } else {
      console.log('②-4', '直接url里去了特定路由,to.path', to.path)
      next()
    }
  } else {
    console.log('③', 'store里有mobile, next()', store.getters.mobile)
    next()
  }
  console.info('end', query, to.path)
  // determine whether the user has logged in
  // const hasToken = getToken()
  //
  // if (hasToken) {
  //   if (to.path === '/login') {
  //     // if is logged in, redirect to the home page
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     const hasGetUserInfo = store.getters.name
  //     if (hasGetUserInfo) {
  //       next()
  //     } else {
  //       try {
  //         // get user info
  //         await store.dispatch('user/getInfo')
  //
  //         next()
  //       } catch (error) {
  //         // remove token and go to login page to re-login
  //         await store.dispatch('user/resetToken')
  //         Message.error(error || 'Has Error')
  //         next(`/login?redirect=${to.path}`)
  //         NProgress.done()
  //       }
  //     }
  //   }
  // } else {
  //   /* has no token*/
  //
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // in the free login whitelist, go directly
  //     next()
  //   } else {
  //     // other pages that do not have permission to access are redirected to the login page.
  //     next(`/login?redirect=${to.path}`)
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
