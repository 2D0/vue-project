exports.ids = [10];
exports.modules = {

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/join/complete.vue?vue&type=template&id=6392672a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"join page container__inner--mid container__inner--padding"},[_vm._ssrNode("<div class=\"join__top container__inner--small\"><img"+(_vm._ssrAttr("src",__webpack_require__(77)))+" alt=\"민트오션\" class=\"join__top--logo\"></div> <h1 class=\"join__top--complete\">\n      수집과 투자가 모두 가능한 NFT 거래소<br>\n      민트 오션에 가입해 주셔서 진심으로 감사드립니다.\n    </h1> "),_vm._ssrNode("<div class=\"join__slide\">","</div>",[_c('Hooper',{attrs:{"settings":_vm.hooperSetting}},[_vm._l((_vm.nft),function(item){return _c('Slide',{key:item.id,staticClass:"join__slide--img"},[_c('NuxtLink',{attrs:{"to":"/marketPlace/detail"}},[_c('div',{staticClass:"join__slide--inner page__img"},[_c('img',{attrs:{"src":item.img,"alt":item.itemName}})])])],1)}),_vm._v(" "),_c('HooperNavigation',{staticClass:"slide__btn slide__nft",attrs:{"slot":"hooper-addons"},slot:"hooper-addons"},[_c('span',{staticClass:"slide__arrow slide__arrow--left",attrs:{"slot":"hooper-prev"},slot:"hooper-prev"},[_c('i',{staticClass:"slide__nft--top"}),_vm._v(" "),_c('i',{staticClass:"slide__nft--bottom"})]),_vm._v(" "),_c('span',{staticClass:"slide__arrow slide__arrow--right",attrs:{"slot":"hooper-next"},slot:"hooper-next"},[_c('i',{staticClass:"slide__nft--top"}),_vm._v(" "),_c('i',{staticClass:"slide__nft--bottom"})])])],2)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page__margin--mid container__inner--small\">","</div>",[_c('NuxtLink',{staticClass:"btn--big btn--accept",attrs:{"to":"../login/home"}},[_vm._v("\n      로그인하러 가기\n    ")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/join/complete.vue?vue&type=template&id=6392672a&

// EXTERNAL MODULE: external "hooper"
var external_hooper_ = __webpack_require__(59);

// EXTERNAL MODULE: ./modal/more.vue + 4 modules
var more = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/join/complete.vue?vue&type=script&lang=js&
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


/* harmony default export */ var completevue_type_script_lang_js_ = ({
  name: 'joinComplete',
  // layout: 'default',
  components: {
    Hooper: external_hooper_["Hooper"],
    Slide: external_hooper_["Slide"],
    HooperNavigation: external_hooper_["Navigation"],
    MoreModal: more["a" /* default */]
  },
  data: () => ({
    // nftList
    nft: [{
      itemName: '아이템1',
      img: __webpack_require__(61)
    }, {
      itemName: '아이템1',
      img: __webpack_require__(63)
    }, {
      itemName: '아이템1',
      img: __webpack_require__(66)
    }, {
      itemName: '아이템1',
      img: __webpack_require__(67)
    }],
    hooperSetting: {
      itemsToShow: 1,
      // 슬라이드 보이는 개수
      centerMode: true,
      // 센터 모드
      autoPlay: false,
      // 자동 
      playSpeed: 4000,
      // 슬라이드 속도
      infiniteScroll: true //무한 스크롤 모드

    }
  }),
  methods: {}
});
// CONCATENATED MODULE: ./pages/join/complete.vue?vue&type=script&lang=js&
 /* harmony default export */ var join_completevue_type_script_lang_js_ = (completevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/join/complete.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  join_completevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1624504e"
  
)

/* harmony default export */ var complete = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card7.82f9f1f.png";

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card8.047b26b.png";

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card2.4521b9b.png";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card5.06dfbb1.png";

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-round.40bdc5a.svg";

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./modal/more.vue?vue&type=template&id=36878f0a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"moreModal"}},[_c('div',{staticClass:"modal"},[_c('div',{staticClass:"modal__layout modalMore modal--mid"},[_c('div',{staticClass:"modalMore__inner"},[_c('div',{staticClass:"modal__top modal__inner"},[_c('h1',{staticClass:"modalMore__tit"},[_vm._v(_vm._s(_vm.moreTxt.tit))]),_vm._v(" "),_c('button',{staticClass:"btn__close modal__close",attrs:{"type":"button"},on:{"click":_vm.closeBtn}},[_c('span',[_vm._v("닫기")])])]),_vm._v(" "),_c('div',{staticClass:"modalMore__cont"},[_c('div',{staticClass:"modal__inner"},[_vm._v("\n            "+_vm._s(_vm.moreTxt.text)+"\n          ")])]),_vm._v(" "),_c('div',{staticClass:"modalMore__bottom modalMore__inner btn"},[(_vm.stopBtn == true)?_c('div',{staticClass:"agreeLayout__check modalMore__stopCheck"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.stopCheck),expression:"stopCheck"}],attrs:{"id":"stopCheck","type":"checkbox","name":"stopCheck"},domProps:{"checked":Array.isArray(_vm.stopCheck)?_vm._i(_vm.stopCheck,null)>-1:(_vm.stopCheck)},on:{"change":function($event){var $$a=_vm.stopCheck,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.stopCheck=$$a.concat([$$v]))}else{$$i>-1&&(_vm.stopCheck=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.stopCheck=$$c}}}}),_vm._v(" "),_c('label',{attrs:{"for":"stopCheck"}},[_c('span',{staticClass:"agreeLayout__checkBox"},[_vm._v("\n                체크박스\n              ")]),_vm._v(" "),_c('span',[_vm._v("\n                오늘 하루 열지 않기\n              ")])])]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"modalMore__confirm btn--accept btn--modalMini",attrs:{"type":"button"},on:{"click":_vm.agreeBtn}},[_vm._v("\n            "+_vm._s(_vm.moreTxt.btn)+"\n          ")])])])]),_vm._v(" "),_c('div',{staticClass:"modal__back",on:{"click":_vm.closeBtn}},[_vm._v("\n      배경\n    ")])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./modal/more.vue?vue&type=template&id=36878f0a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./modal/more.vue?vue&type=script&lang=js&
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
/* harmony default export */ var morevue_type_script_lang_js_ = ({
  name: 'more',
  props: {
    moreTxt: Object
  },
  data: () => ({
    stopBtn: false,
    // 오늘하루 보지 않기 버튼
    stopCheck: [] // 버튼 체크

  }),
  methods: {
    // 모달창 닫기 버튼
    closeBtn() {
      this.$emit('close');
    },

    // 모달 끄는 동시에 동의 체크
    agreeBtn() {
      switch (this.moreTxt.agree) {
        case 'agree1':
          this.$emit('agree1');
          break;

        case 'agree2':
          this.$emit('agree2');
          break;

        case 'agree3':
          this.$emit('agree3');
          break;

        case 'agree4':
          this.$emit('agree4');
          break;

        default:
          console('값 없음');
          break;
      }
    }

  }
});
// CONCATENATED MODULE: ./modal/more.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_morevue_type_script_lang_js_ = (morevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./modal/more.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_morevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1dc65f81"
  
)

/* harmony default export */ var more = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=complete.js.map