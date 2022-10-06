exports.ids = [39,40];
exports.modules = {

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/support/search/result.vue?vue&type=template&id=19a79f76&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"support page container__inner--max container__inner--padding"},[_vm._ssrNode("<div class=\"listPage__cont--top\">","</div>",[_vm._ssrNode("<div class=\"support__nav\">","</div>",[_c('NuxtLink',{staticClass:"support__nav--home",attrs:{"to":"home"}},[_vm._v("Ocean Support")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"support__nav--now",attrs:{"to":"menu"}},[_vm._v(_vm._s(_vm.navTit))])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page__search\">","</div>",[_vm._ssrNode("<div class=\"modalNftList__search--inner page__search--inner\">","</div>",[_vm._ssrNode("<input type=\"text\" placeholder=\"검색어를 입력해주세요.\"> "),_c('NuxtLink',{attrs:{"to":"result"}},[_c('span',{staticClass:"page__img"},[_c('img',{attrs:{"src":__webpack_require__(15),"alt":"검색 버튼"}})])])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"support__menu page__margin--mid\">","</div>",[_vm._ssrNode("<div class=\"support__menu--tit\"><h1 class=\"page__tit--big\">"+_vm._ssrEscape("'"+_vm._s(_vm.searchName)+"'검색 결과")+"</h1> <div class=\"support__menu--count\">"+_vm._ssrEscape("\n        총 "+_vm._s(_vm.list.length)+" 개의 상품이 검색 되었습니다.\n      ")+"</div></div> "),_vm._ssrNode("<ul class=\"support__menu--list\">","</ul>",_vm._l((_vm.list.slice(0, 20)),function(item){return _vm._ssrNode("<li class=\"support__result\">","</li>",[_vm._ssrNode("<div class=\"support__result--top\">","</div>",[_c('NuxtLink',{staticClass:"support__result--tit page__split page__color--blue",attrs:{"to":"detail"}},[_vm._v(_vm._s(item.tit))]),_vm._ssrNode(" <div class=\"page__color--lightGray\">"+_vm._ssrEscape(_vm._s(_vm.goodCount)+"명에게 도움 되었습니다.")+"</div>")],2),_vm._ssrNode(" <div><div class=\"support__result--nav\"><span class=\"support__result--home\">Ocean Support</span> <span class=\"support__result--second\">"+_vm._ssrEscape(_vm._s(item.navTit))+"</span> <span>"+_vm._ssrEscape(_vm._s(item.navNow))+"</span></div> <span>"+_vm._ssrEscape(_vm._s(item.data))+"</span></div> <div class=\"support__result--write page__split\">"+_vm._ssrEscape(_vm._s(item.write))+"</div>")],2)}),0)],2),_vm._ssrNode(" "),_c('Pager')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/support/search/result.vue?vue&type=template&id=19a79f76&

// EXTERNAL MODULE: ./pages/support/sideMenu.vue + 4 modules
var sideMenu = __webpack_require__(75);

// EXTERNAL MODULE: ./blockComponents/pager.vue + 4 modules
var pager = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/support/search/result.vue?vue&type=script&lang=js&
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

 // 페이저

/* harmony default export */ var resultvue_type_script_lang_js_ = ({
  name: 'supportMenu',
  // layout: 'default',
  components: {
    SideMenu: sideMenu["default"],
    Pager: pager["a" /* default */]
  },
  data: () => ({
    navTit: '검색결과',
    navNow: '출금',
    searchName: '코인',
    searchCount: '155',
    goodCount: '64',
    list: [{
      tit: '코인을 보유하고 있는데 왜 출금이 안 되나요?',
      navTit: '이용안내',
      navNow: '출금',
      date: '2022.03.22 ',
      write: '아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는'
    }, {
      tit: '코인을 보유하고 있는데 왜 출금이 안 되나요?',
      navTit: '이용안내',
      navNow: '출금',
      date: '2022.03.22 ',
      write: '아래의 상황에서는 디지털 자산 출금이 '
    }, {
      tit: '코인을 보유하고 있는데 왜 출금이 안 되나요?',
      navTit: '이용안내',
      navNow: '출금',
      date: '2022.03.22 ',
      write: '아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디'
    }, {
      tit: '코인을 보유하고 있는데 왜 출금이 안 되나요?',
      navTit: '이용안내',
      navNow: '출금',
      date: '2022.03.22 ',
      write: '아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는'
    }, {
      tit: '코인을 보유하고 있는데 왜 출금이 안 되나요?',
      navTit: '이용안내',
      navNow: '출금',
      date: '2022.03.22 ',
      write: '아래의 상황에서는 디지털 자산 출금이 '
    }, {
      tit: '코인을 보유하고 있는데 왜 출금이 안 되나요?',
      navTit: '이용안내',
      navNow: '출금',
      date: '2022.03.22 ',
      write: '아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디'
    }, {
      tit: '코인을 보유하고 있는데 왜 출금이 안 되나요?',
      navTit: '이용안내',
      navNow: '출금',
      date: '2022.03.22 ',
      write: '아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는'
    }, {
      tit: '코인을 보유하고 있는데 왜 출금이 안 되나요?',
      navTit: '이용안내',
      navNow: '출금',
      date: '2022.03.22 ',
      write: '아래의 상황에서는 디지털 자산 출금이 '
    }, {
      tit: '코인을 보유하고 있는데 왜 출금이 안 되나요?',
      navTit: '이용안내',
      navNow: '출금',
      date: '2022.03.22 ',
      write: '아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디'
    }, {
      tit: '코인을 보유하고 있는데 왜 출금이 안 되나요?',
      navTit: '이용안내',
      navNow: '출금',
      date: '2022.03.22 ',
      write: '아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는'
    }, {
      tit: '코인을 보유하고 있는데 왜 출금이 안 되나요?',
      navTit: '이용안내',
      navNow: '출금',
      date: '2022.03.22 ',
      write: '아래의 상황에서는 디지털 자산 출금이 '
    }, {
      tit: '코인을 보유하고 있는데 왜 출금이 안 되나요?',
      navTit: '이용안내',
      navNow: '출금',
      date: '2022.03.22 ',
      write: '아래의 상황에서는 디지털 자산 출금이 제한되니 참고하시기 바랍니다.아래의 상황에서는 디'
    }],
    pager: [{
      num: ''
    }, {
      num: ''
    }, {
      num: ''
    }, {
      num: ''
    }, {
      num: ''
    }]
  }),
  methods: {}
});
// CONCATENATED MODULE: ./pages/support/search/result.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_resultvue_type_script_lang_js_ = (resultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/support/search/result.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  search_resultvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e420fd02"
  
)

/* harmony default export */ var result = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./blockComponents/pager.vue?vue&type=template&id=78237620&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"pager\">","</div>",[_vm._ssrNode("<div class=\"pager__btn\"><button class=\"pager__arrow\">\n          첫 번째 페이지 버튼\n        <span class=\"pager__doubleFirst\"><i class=\"pager__doubleFirst--top pager__arrow--top\"></i> <i class=\"pager__doubleFirst--bottom pager__arrow--bottom\"></i></span> <span class=\"pager__doubleLast\"><i class=\"pager__doubleLast--top pager__arrow--top\"></i> <i class=\"pager__doubleLast--bottom pager__arrow--bottom\"></i></span></button> <button class=\"pager__arrow\">\n          이전 페이지 버튼\n        <i class=\"pager__arrow--top\"></i> <i class=\"pager__arrow--bottom\"></i></button></div> "),_vm._ssrNode("<ul class=\"pager__num\">","</ul>",_vm._l((_vm.pager),function(item,idx){return _vm._ssrNode("<li class=\"pager__btn pager__num--web\">","</li>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v(_vm._s(idx + 1))])],1)}),0),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"pager__num pager__num--tablet\">","</ul>",_vm._l((_vm.pager.slice(0, 5)),function(item,idx){return _vm._ssrNode("<li class=\"pager__btn\">","</li>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v(_vm._s(idx + 1))])],1)}),0),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"pager__num pager__num--mobile\">","</ul>",_vm._l((_vm.pager.slice(0, 3)),function(item,idx){return _vm._ssrNode("<li class=\"pager__btn\">","</li>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v(_vm._s(idx + 1))])],1)}),0),_vm._ssrNode(" <div class=\"pager__btn\"><button class=\"pager__arrow pager__arrow--right\">\n        다음페이지 버튼\n        <i class=\"pager__arrow--top\"></i> <i class=\"pager__arrow--bottom\"></i></button> <button class=\"pager__arrow pager__arrow--right\">\n        마지막 페이지 버튼\n        <span class=\"pager__doubleFirst\"><i class=\"pager__doubleFirst--top pager__arrow--top\"></i> <i class=\"pager__doubleFirst--bottom pager__arrow--bottom\"></i></span> <span class=\"pager__doubleLast\"><i class=\"pager__doubleLast--top pager__arrow--top\"></i> <i class=\"pager__doubleLast--bottom pager__arrow--bottom\"></i></span></button></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./blockComponents/pager.vue?vue&type=template&id=78237620&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./blockComponents/pager.vue?vue&type=script&lang=js&
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
/* harmony default export */ var pagervue_type_script_lang_js_ = ({
  name: 'pager',
  props: {},
  data: () => ({
    pager: [{
      num: ''
    }, {
      num: ''
    }, {
      num: ''
    }, {
      num: ''
    }, {
      num: ''
    }, {
      num: ''
    }, {
      num: ''
    }, {
      num: ''
    }, {
      num: ''
    }]
  }),
  methods: {}
});
// CONCATENATED MODULE: ./blockComponents/pager.vue?vue&type=script&lang=js&
 /* harmony default export */ var blockComponents_pagervue_type_script_lang_js_ = (pagervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./blockComponents/pager.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blockComponents_pagervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9457b1c6"
  
)

/* harmony default export */ var pager = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=result.js.map