exports.ids = [40];
exports.modules = {

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
//# sourceMappingURL=sideMenu.js.map