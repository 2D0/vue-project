exports.ids = [38,40];
exports.modules = {

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/support/search/menu.vue?vue&type=template&id=f36bccf0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"support page container__inner--max container__inner--padding"},[_vm._ssrNode("<div class=\"listPage__cont--top\">","</div>",[_vm._ssrNode("<div class=\"support__nav\">","</div>",[_c('NuxtLink',{staticClass:"support__nav--home",attrs:{"to":"home"}},[_vm._v("Ocean Support")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"support__nav--now",attrs:{"to":"menu"}},[_vm._v(_vm._s(_vm.navTit))])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page__search\">","</div>",[_vm._ssrNode("<div class=\"modalNftList__search--inner page__search--inner\">","</div>",[_vm._ssrNode("<input type=\"text\" placeholder=\"검색어를 입력해주세요.\"> "),_c('NuxtLink',{attrs:{"to":"result"}},[_c('span',{staticClass:"page__img"},[_c('img',{attrs:{"src":__webpack_require__(15),"alt":"검색 버튼"}})])])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"support__menu\">","</div>",[_vm._ssrNode("<div class=\"support__menu--tit\"><h1 class=\"page__tit--big tabMenu page__margin--mid\">"+_vm._ssrEscape(_vm._s(_vm.menuTit))+"</h1></div> "),_vm._ssrNode("<ul class=\"support__menu--list\">","</ul>",_vm._l((_vm.list),function(item){return _vm._ssrNode("<li class=\"support__menu--name\">","</li>",[_c('NuxtLink',{attrs:{"to":"detail"}},[_vm._v(_vm._s(item.tit))])],1)}),0)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/support/search/menu.vue?vue&type=template&id=f36bccf0&

// EXTERNAL MODULE: ./pages/support/sideMenu.vue + 4 modules
var sideMenu = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/support/search/menu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // 고객센터 사이드 메뉴

/* harmony default export */ var menuvue_type_script_lang_js_ = ({
  name: 'supportMenu',
  // layout: 'default',
  components: {
    SideMenu: sideMenu["default"]
  },
  data: () => ({
    navTit: '이용안내',
    menuTit: '이용안내',
    goodCount: '64',
    list: [{
      tit: '코인을 보유하고 있는데 왜 출금이 안 되나요?'
    }, {
      tit: '비밀번호를 분실하였습니다.'
    }, {
      tit: '제 계정이 해킹을 당했습니다.'
    }, {
      tit: '결제를 어떻게 하나요?'
    }, {
      tit: '제가 가진 NFT를 판매할 수 있나요?'
    }]
  }),
  methods: {}
});
// CONCATENATED MODULE: ./pages/support/search/menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_menuvue_type_script_lang_js_ = (menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/support/search/menu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  search_menuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "77b32841"
  
)

/* harmony default export */ var menu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/support/sideMenu.vue?vue&type=template&id=54e07f30&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sideMenu"},[_vm._ssrNode("<h2 class=\"sideMenu__top\">고객센터</h2> "),_vm._ssrNode("<ul class=\"sideMenu__inner\">","</ul>",_vm._l((_vm.menuNames),function(menu,idx){return _vm._ssrNode("<li class=\"sideMenu__tit\">","</li>",[_c('NuxtLink',{attrs:{"to":menu.url}},[(menu.new == true)?_c('span',{staticClass:"sideMenu__tit--icon page__icon--new"},[_vm._v("N")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"sideMenu__tit--inner"},[_vm._v("\n          "+_vm._s(menu.name)+"\n          ")])])],1)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/support/sideMenu.vue?vue&type=template&id=54e07f30&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/support/sideMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var sideMenuvue_type_script_lang_js_ = ({
  name: 'sideMenu',
  // layout: 'default',
  data: () => ({
    menuNames: [{
      name: '공지사항',
      url: '/support/board/notice',
      new: true
    }, {
      name: '민트오션 소식',
      url: '/support/board/news',
      new: true
    }, {
      name: '수수료 안내',
      url: '/support/search/detail',
      new: false
    }, {
      name: '자주하는 질문',
      url: '/support/search/home',
      new: false
    }, {
      name: '1:1문의',
      url: '/support/board/qna',
      new: false
    }]
  }),
  methods: {}
});
// CONCATENATED MODULE: ./pages/support/sideMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var support_sideMenuvue_type_script_lang_js_ = (sideMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/support/sideMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  support_sideMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "36b4aa8b"
  
)

/* harmony default export */ var sideMenu = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=menu.js.map