exports.ids = [32,40];
exports.modules = {

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/support/board/detail.vue?vue&type=template&id=13c240e1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"support page container__inner--max container__inner--padding"},[_vm._ssrNode("<div class=\"support__box\">","</div>",[_vm._ssrNode("<div class=\"support__sideMenu\">","</div>",[_vm._ssrNode("<h1 class=\"page__tit--big\"><span class=\"mobile\">"+_vm._ssrEscape(_vm._s(_vm.boardName))+"</span></h1> "),_c('SideMenu')],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"support__cont\">","</div>",[_vm._ssrNode("<div class=\"support__top\"><div class=\"page__search\"><div class=\"page__search--inner page__search--inner\"><input type=\"text\" placeholder=\"검색어를 입력해주세요.\"> <button type=\"button\"><span class=\"page__img\"><img"+(_vm._ssrAttr("src",__webpack_require__(15)))+" alt=\"검색 버튼\"></span></button></div></div></div> <div class=\"boardDetail page__margin--mid\"><div class=\"boardDetail__inner\"><div class=\"boardDetail__top\"><div class=\"boardDetail__top--tit\">"+_vm._ssrEscape(_vm._s(_vm.board.tit))+"</div> <div class=\"boardDetail__top--info\"><span class=\"boardDetail__top--date\">"+_vm._ssrEscape(_vm._s(_vm.board.date))+"</span> <span class=\"boardDetail__top--count\">"+_vm._ssrEscape("조회수 "+_vm._s(_vm.board.count))+"</span></div></div> <div class=\"boardDetail__cont\"><div class=\"boardDetail__cont--txt\">"+_vm._ssrEscape(_vm._s(_vm.board.txt))+"</div></div></div></div> "),_c('NuxtLink',{staticClass:"btn--goMini btn--subUnAccept",attrs:{"to":"notice"}},[_vm._v("목록")])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/support/board/detail.vue?vue&type=template&id=13c240e1&

// EXTERNAL MODULE: ./pages/support/sideMenu.vue + 4 modules
var sideMenu = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/support/board/detail.vue?vue&type=script&lang=js&
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

/* harmony default export */ var detailvue_type_script_lang_js_ = ({
  name: 'supportNotice',
  // layout: 'default',
  components: {
    SideMenu: sideMenu["default"]
  },
  data: () => ({
    id: 0,
    boardName: '공지사항',
    board: {
      tit: '민트 오션 오픈 이벤트 안내',
      date: '2022.03.22',
      count: '32561',
      txt: '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용'
    } // nft 리스트

  }),
  methods: {}
});
// CONCATENATED MODULE: ./pages/support/board/detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var board_detailvue_type_script_lang_js_ = (detailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/support/board/detail.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  board_detailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e212db3"
  
)

/* harmony default export */ var detail = __webpack_exports__["default"] = (component.exports);

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
  "209c9fef"
  
)

/* harmony default export */ var sideMenu = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=detail.js.map