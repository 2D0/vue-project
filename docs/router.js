import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _421d7952 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _4627a802 = () => interopDefault(import('../pages/home_back.vue' /* webpackChunkName: "pages/home_back" */))
const _c2c281b0 = () => interopDefault(import('../pages/loginBack.vue' /* webpackChunkName: "pages/loginBack" */))
const _0c8de2bc = () => interopDefault(import('../pages/sample.vue' /* webpackChunkName: "pages/sample" */))
const _90dcfcec = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _821bbdd6 = () => interopDefault(import('../pages/auction/detail.vue' /* webpackChunkName: "pages/auction/detail" */))
const _5e64f43c = () => interopDefault(import('../pages/auction/list.vue' /* webpackChunkName: "pages/auction/list" */))
const _419ac854 = () => interopDefault(import('../pages/auction/list_back.vue' /* webpackChunkName: "pages/auction/list_back" */))
const _7d2276ba = () => interopDefault(import('../pages/auction/order.vue' /* webpackChunkName: "pages/auction/order" */))
const _b5dc5e94 = () => interopDefault(import('../pages/join/complete.vue' /* webpackChunkName: "pages/join/complete" */))
const _d68c6848 = () => interopDefault(import('../pages/join/home.vue' /* webpackChunkName: "pages/join/home" */))
const _e7301986 = () => interopDefault(import('../pages/login/home.vue' /* webpackChunkName: "pages/login/home" */))
const _0bd8b42d = () => interopDefault(import('../pages/marketPlace/detail.vue' /* webpackChunkName: "pages/marketPlace/detail" */))
const _63edfefa = () => interopDefault(import('../pages/marketPlace/list.vue' /* webpackChunkName: "pages/marketPlace/list" */))
const _4e1120a2 = () => interopDefault(import('../pages/marketPlace/order.vue' /* webpackChunkName: "pages/marketPlace/order" */))
const _f1c1dbba = () => interopDefault(import('../pages/marketPlace/sale.vue' /* webpackChunkName: "pages/marketPlace/sale" */))
const _b298e334 = () => interopDefault(import('../pages/service/privacy.vue' /* webpackChunkName: "pages/service/privacy" */))
const _f4dac89a = () => interopDefault(import('../pages/service/provision.vue' /* webpackChunkName: "pages/service/provision" */))
const _3e5baee4 = () => interopDefault(import('../pages/support/sideMenu.vue' /* webpackChunkName: "pages/support/sideMenu" */))
const _20041b02 = () => interopDefault(import('../pages/system/accountSuspension.vue' /* webpackChunkName: "pages/system/accountSuspension" */))
const _715e31b1 = () => interopDefault(import('../pages/system/systemCheck.vue' /* webpackChunkName: "pages/system/systemCheck" */))
const _4eaa98bf = () => interopDefault(import('../pages/login/password/complete.vue' /* webpackChunkName: "pages/login/password/complete" */))
const _7f3dbdb9 = () => interopDefault(import('../pages/login/password/reset.vue' /* webpackChunkName: "pages/login/password/reset" */))
const _7faa29e5 = () => interopDefault(import('../pages/login/password/sendMail.vue' /* webpackChunkName: "pages/login/password/sendMail" */))
const _0b5d171c = () => interopDefault(import('../pages/myPage/profile/edit.vue' /* webpackChunkName: "pages/myPage/profile/edit" */))
const _e235a91e = () => interopDefault(import('../pages/myPage/profile/home.vue' /* webpackChunkName: "pages/myPage/profile/home" */))
const _fc6627ae = () => interopDefault(import('../pages/myPage/table/calculate.vue' /* webpackChunkName: "pages/myPage/table/calculate" */))
const _6724549a = () => interopDefault(import('../pages/myPage/table/myNft.vue' /* webpackChunkName: "pages/myPage/table/myNft" */))
const _59f9cbc0 = () => interopDefault(import('../pages/myPage/table/usageHistory.vue' /* webpackChunkName: "pages/myPage/table/usageHistory" */))
const _59b8cdfc = () => interopDefault(import('../pages/myPage/table/withdrawal.vue' /* webpackChunkName: "pages/myPage/table/withdrawal" */))
const _0d612614 = () => interopDefault(import('../pages/myPage/userItem/home.vue' /* webpackChunkName: "pages/myPage/userItem/home" */))
const _7a90ea53 = () => interopDefault(import('../pages/myPage/userItem/list.vue' /* webpackChunkName: "pages/myPage/userItem/list" */))
const _71134ed2 = () => interopDefault(import('../pages/support/board/detail.vue' /* webpackChunkName: "pages/support/board/detail" */))
const _425092d8 = () => interopDefault(import('../pages/support/board/news.vue' /* webpackChunkName: "pages/support/board/news" */))
const _633031d9 = () => interopDefault(import('../pages/support/board/notice.vue' /* webpackChunkName: "pages/support/board/notice" */))
const _380b42b3 = () => interopDefault(import('../pages/support/board/qna.vue' /* webpackChunkName: "pages/support/board/qna" */))
const _cbff38e0 = () => interopDefault(import('../pages/support/search/detail.vue' /* webpackChunkName: "pages/support/search/detail" */))
const _067f3244 = () => interopDefault(import('../pages/support/search/home.vue' /* webpackChunkName: "pages/support/search/home" */))
const _14837144 = () => interopDefault(import('../pages/support/search/menu.vue' /* webpackChunkName: "pages/support/search/menu" */))
const _94a16548 = () => interopDefault(import('../pages/support/search/result.vue' /* webpackChunkName: "pages/support/search/result" */))
const _53746b0a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _421d7952,
    name: "home"
  }, {
    path: "/home_back",
    component: _4627a802,
    name: "home_back"
  }, {
    path: "/loginBack",
    component: _c2c281b0,
    name: "loginBack"
  }, {
    path: "/sample",
    component: _0c8de2bc,
    name: "sample"
  }, {
    path: "/test",
    component: _90dcfcec,
    name: "test"
  }, {
    path: "/auction/detail",
    component: _821bbdd6,
    name: "auction-detail"
  }, {
    path: "/auction/list",
    component: _5e64f43c,
    name: "auction-list"
  }, {
    path: "/auction/list_back",
    component: _419ac854,
    name: "auction-list_back"
  }, {
    path: "/auction/order",
    component: _7d2276ba,
    name: "auction-order"
  }, {
    path: "/join/complete",
    component: _b5dc5e94,
    name: "join-complete"
  }, {
    path: "/join/home",
    component: _d68c6848,
    name: "join-home"
  }, {
    path: "/login/home",
    component: _e7301986,
    name: "login-home"
  }, {
    path: "/marketPlace/detail",
    component: _0bd8b42d,
    name: "marketPlace-detail"
  }, {
    path: "/marketPlace/list",
    component: _63edfefa,
    name: "marketPlace-list"
  }, {
    path: "/marketPlace/order",
    component: _4e1120a2,
    name: "marketPlace-order"
  }, {
    path: "/marketPlace/sale",
    component: _f1c1dbba,
    name: "marketPlace-sale"
  }, {
    path: "/service/privacy",
    component: _b298e334,
    name: "service-privacy"
  }, {
    path: "/service/provision",
    component: _f4dac89a,
    name: "service-provision"
  }, {
    path: "/support/sideMenu",
    component: _3e5baee4,
    name: "support-sideMenu"
  }, {
    path: "/system/accountSuspension",
    component: _20041b02,
    name: "system-accountSuspension"
  }, {
    path: "/system/systemCheck",
    component: _715e31b1,
    name: "system-systemCheck"
  }, {
    path: "/login/password/complete",
    component: _4eaa98bf,
    name: "login-password-complete"
  }, {
    path: "/login/password/reset",
    component: _7f3dbdb9,
    name: "login-password-reset"
  }, {
    path: "/login/password/sendMail",
    component: _7faa29e5,
    name: "login-password-sendMail"
  }, {
    path: "/myPage/profile/edit",
    component: _0b5d171c,
    name: "myPage-profile-edit"
  }, {
    path: "/myPage/profile/home",
    component: _e235a91e,
    name: "myPage-profile-home"
  }, {
    path: "/myPage/table/calculate",
    component: _fc6627ae,
    name: "myPage-table-calculate"
  }, {
    path: "/myPage/table/myNft",
    component: _6724549a,
    name: "myPage-table-myNft"
  }, {
    path: "/myPage/table/usageHistory",
    component: _59f9cbc0,
    name: "myPage-table-usageHistory"
  }, {
    path: "/myPage/table/withdrawal",
    component: _59b8cdfc,
    name: "myPage-table-withdrawal"
  }, {
    path: "/myPage/userItem/home",
    component: _0d612614,
    name: "myPage-userItem-home"
  }, {
    path: "/myPage/userItem/list",
    component: _7a90ea53,
    name: "myPage-userItem-list"
  }, {
    path: "/support/board/detail",
    component: _71134ed2,
    name: "support-board-detail"
  }, {
    path: "/support/board/news",
    component: _425092d8,
    name: "support-board-news"
  }, {
    path: "/support/board/notice",
    component: _633031d9,
    name: "support-board-notice"
  }, {
    path: "/support/board/qna",
    component: _380b42b3,
    name: "support-board-qna"
  }, {
    path: "/support/search/detail",
    component: _cbff38e0,
    name: "support-search-detail"
  }, {
    path: "/support/search/home",
    component: _067f3244,
    name: "support-search-home"
  }, {
    path: "/support/search/menu",
    component: _14837144,
    name: "support-search-menu"
  }, {
    path: "/support/search/result",
    component: _94a16548,
    name: "support-search-result"
  }, {
    path: "/",
    component: _53746b0a,
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
