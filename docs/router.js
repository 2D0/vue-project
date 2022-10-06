import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ec74d8b = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _3c08624b = () => interopDefault(import('../pages/home_back.vue' /* webpackChunkName: "pages/home_back" */))
const _048a1518 = () => interopDefault(import('../pages/loginBack.vue' /* webpackChunkName: "pages/loginBack" */))
const _47954854 = () => interopDefault(import('../pages/sample.vue' /* webpackChunkName: "pages/sample" */))
const _37678bbe = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _18b7fa49 = () => interopDefault(import('../pages/auction/detail.vue' /* webpackChunkName: "pages/auction/detail" */))
const _363fc7d4 = () => interopDefault(import('../pages/auction/list.vue' /* webpackChunkName: "pages/auction/list" */))
const _3871f2a0 = () => interopDefault(import('../pages/auction/list_back.vue' /* webpackChunkName: "pages/auction/list_back" */))
const _293ab1f4 = () => interopDefault(import('../pages/auction/order.vue' /* webpackChunkName: "pages/auction/order" */))
const _13520102 = () => interopDefault(import('../pages/join/complete.vue' /* webpackChunkName: "pages/join/complete" */))
const _1853fbb0 = () => interopDefault(import('../pages/join/home.vue' /* webpackChunkName: "pages/join/home" */))
const _10d28671 = () => interopDefault(import('../pages/login/home.vue' /* webpackChunkName: "pages/login/home" */))
const _2032593e = () => interopDefault(import('../pages/marketPlace/detail.vue' /* webpackChunkName: "pages/marketPlace/detail" */))
const _63a25b2e = () => interopDefault(import('../pages/marketPlace/list.vue' /* webpackChunkName: "pages/marketPlace/list" */))
const _44e84aee = () => interopDefault(import('../pages/marketPlace/order.vue' /* webpackChunkName: "pages/marketPlace/order" */))
const _f2592352 = () => interopDefault(import('../pages/marketPlace/sale.vue' /* webpackChunkName: "pages/marketPlace/sale" */))
const _f4ae489c = () => interopDefault(import('../pages/service/privacy.vue' /* webpackChunkName: "pages/service/privacy" */))
const _7c69c5ff = () => interopDefault(import('../pages/service/provision.vue' /* webpackChunkName: "pages/service/provision" */))
const _3ef2f67c = () => interopDefault(import('../pages/support/sideMenu.vue' /* webpackChunkName: "pages/support/sideMenu" */))
const _3cf9f994 = () => interopDefault(import('../pages/system/accountSuspension.vue' /* webpackChunkName: "pages/system/accountSuspension" */))
const _556c50e5 = () => interopDefault(import('../pages/system/systemCheck.vue' /* webpackChunkName: "pages/system/systemCheck" */))
const _0253da0b = () => interopDefault(import('../pages/login/password/complete.vue' /* webpackChunkName: "pages/login/password/complete" */))
const _cf7e4026 = () => interopDefault(import('../pages/login/password/reset.vue' /* webpackChunkName: "pages/login/password/reset" */))
const _33536b31 = () => interopDefault(import('../pages/login/password/sendMail.vue' /* webpackChunkName: "pages/login/password/sendMail" */))
const _adda4330 = () => interopDefault(import('../pages/myPage/profile/edit.vue' /* webpackChunkName: "pages/myPage/profile/edit" */))
const _2c9af2bd = () => interopDefault(import('../pages/myPage/profile/home.vue' /* webpackChunkName: "pages/myPage/profile/home" */))
const _6690515d = () => interopDefault(import('../pages/myPage/table/calculate.vue' /* webpackChunkName: "pages/myPage/table/calculate" */))
const _9f081632 = () => interopDefault(import('../pages/myPage/table/myNft.vue' /* webpackChunkName: "pages/myPage/table/myNft" */))
const _6f502be8 = () => interopDefault(import('../pages/myPage/table/usageHistory.vue' /* webpackChunkName: "pages/myPage/table/usageHistory" */))
const _f2664b64 = () => interopDefault(import('../pages/myPage/table/withdrawal.vue' /* webpackChunkName: "pages/myPage/table/withdrawal" */))
const _26644848 = () => interopDefault(import('../pages/myPage/userItem/home.vue' /* webpackChunkName: "pages/myPage/userItem/home" */))
const _d8d7e6f2 = () => interopDefault(import('../pages/myPage/userItem/list.vue' /* webpackChunkName: "pages/myPage/userItem/list" */))
const _ebd31df4 = () => interopDefault(import('../pages/support/board/detail.vue' /* webpackChunkName: "pages/support/board/detail" */))
const _7a345470 = () => interopDefault(import('../pages/support/board/news.vue' /* webpackChunkName: "pages/support/board/news" */))
const _7c33540d = () => interopDefault(import('../pages/support/board/notice.vue' /* webpackChunkName: "pages/support/board/notice" */))
const _2ee26cff = () => interopDefault(import('../pages/support/board/qna.vue' /* webpackChunkName: "pages/support/board/qna" */))
const _bd3cf048 = () => interopDefault(import('../pages/support/search/detail.vue' /* webpackChunkName: "pages/support/search/detail" */))
const _cb13a3ac = () => interopDefault(import('../pages/support/search/home.vue' /* webpackChunkName: "pages/support/search/home" */))
const _d917e2ac = () => interopDefault(import('../pages/support/search/menu.vue' /* webpackChunkName: "pages/support/search/menu" */))
const _85df1cb0 = () => interopDefault(import('../pages/support/search/result.vue' /* webpackChunkName: "pages/support/search/result" */))
const _6340b154 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _5ec74d8b,
    name: "home"
  }, {
    path: "/home_back",
    component: _3c08624b,
    name: "home_back"
  }, {
    path: "/loginBack",
    component: _048a1518,
    name: "loginBack"
  }, {
    path: "/sample",
    component: _47954854,
    name: "sample"
  }, {
    path: "/test",
    component: _37678bbe,
    name: "test"
  }, {
    path: "/auction/detail",
    component: _18b7fa49,
    name: "auction-detail"
  }, {
    path: "/auction/list",
    component: _363fc7d4,
    name: "auction-list"
  }, {
    path: "/auction/list_back",
    component: _3871f2a0,
    name: "auction-list_back"
  }, {
    path: "/auction/order",
    component: _293ab1f4,
    name: "auction-order"
  }, {
    path: "/join/complete",
    component: _13520102,
    name: "join-complete"
  }, {
    path: "/join/home",
    component: _1853fbb0,
    name: "join-home"
  }, {
    path: "/login/home",
    component: _10d28671,
    name: "login-home"
  }, {
    path: "/marketPlace/detail",
    component: _2032593e,
    name: "marketPlace-detail"
  }, {
    path: "/marketPlace/list",
    component: _63a25b2e,
    name: "marketPlace-list"
  }, {
    path: "/marketPlace/order",
    component: _44e84aee,
    name: "marketPlace-order"
  }, {
    path: "/marketPlace/sale",
    component: _f2592352,
    name: "marketPlace-sale"
  }, {
    path: "/service/privacy",
    component: _f4ae489c,
    name: "service-privacy"
  }, {
    path: "/service/provision",
    component: _7c69c5ff,
    name: "service-provision"
  }, {
    path: "/support/sideMenu",
    component: _3ef2f67c,
    name: "support-sideMenu"
  }, {
    path: "/system/accountSuspension",
    component: _3cf9f994,
    name: "system-accountSuspension"
  }, {
    path: "/system/systemCheck",
    component: _556c50e5,
    name: "system-systemCheck"
  }, {
    path: "/login/password/complete",
    component: _0253da0b,
    name: "login-password-complete"
  }, {
    path: "/login/password/reset",
    component: _cf7e4026,
    name: "login-password-reset"
  }, {
    path: "/login/password/sendMail",
    component: _33536b31,
    name: "login-password-sendMail"
  }, {
    path: "/myPage/profile/edit",
    component: _adda4330,
    name: "myPage-profile-edit"
  }, {
    path: "/myPage/profile/home",
    component: _2c9af2bd,
    name: "myPage-profile-home"
  }, {
    path: "/myPage/table/calculate",
    component: _6690515d,
    name: "myPage-table-calculate"
  }, {
    path: "/myPage/table/myNft",
    component: _9f081632,
    name: "myPage-table-myNft"
  }, {
    path: "/myPage/table/usageHistory",
    component: _6f502be8,
    name: "myPage-table-usageHistory"
  }, {
    path: "/myPage/table/withdrawal",
    component: _f2664b64,
    name: "myPage-table-withdrawal"
  }, {
    path: "/myPage/userItem/home",
    component: _26644848,
    name: "myPage-userItem-home"
  }, {
    path: "/myPage/userItem/list",
    component: _d8d7e6f2,
    name: "myPage-userItem-list"
  }, {
    path: "/support/board/detail",
    component: _ebd31df4,
    name: "support-board-detail"
  }, {
    path: "/support/board/news",
    component: _7a345470,
    name: "support-board-news"
  }, {
    path: "/support/board/notice",
    component: _7c33540d,
    name: "support-board-notice"
  }, {
    path: "/support/board/qna",
    component: _2ee26cff,
    name: "support-board-qna"
  }, {
    path: "/support/search/detail",
    component: _bd3cf048,
    name: "support-search-detail"
  }, {
    path: "/support/search/home",
    component: _cb13a3ac,
    name: "support-search-home"
  }, {
    path: "/support/search/menu",
    component: _d917e2ac,
    name: "support-search-menu"
  }, {
    path: "/support/search/result",
    component: _85df1cb0,
    name: "support-search-result"
  }, {
    path: "/",
    component: _6340b154,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
