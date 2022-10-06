exports.ids = [19];
exports.modules = {

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/marketPlace/order.vue?vue&type=template&id=dcff1918&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"saleItem page container__inner--max container__inner--padding"},[(_vm.moreModal == true)?_c('MoreModal',{attrs:{"moreTxt":_vm.modalInfo},on:{"close":_vm.closeModal,"agree1":_vm.checked1}}):_vm._e(),_vm._ssrNode(" <h1 class=\"page__tit page__margin--mid\">가격제안</h1> <div class=\"saleItem__itemImg\"><div class=\"saleItem__itemImgInner container__inner--mid\"><div class=\"page__img\"><img"+(_vm._ssrAttr("src",_vm.itemImgUrl))+(_vm._ssrAttr("alt",_vm.itemName))+"></div></div></div> <article class=\"saleItem__itemInfo\"><div class=\"container__inner--mid\"><div class=\"saleItem__itemBox\"><div class=\"page__tit--small\">작품 정보</div> <div class=\"saleItem__itemBox--name\">"+_vm._ssrEscape(_vm._s(_vm.itemName))+"</div> <div class=\"saleItem__itemBox--user\"><div class=\"saleItem__itemBox--userImg page__img page__shadowThin\"><img"+(_vm._ssrAttr("src",_vm.userImgUrl))+(_vm._ssrAttr("alt",_vm.userName))+"></div> <div class=\"saleItem__itemBox--userName\">"+_vm._ssrEscape(_vm._s(_vm.userName))+"</div></div> <div class=\"saleItem__itemBoxLine\"><div class=\"saleItem__itemBox--edition\">"+_vm._ssrEscape("\n              "+_vm._s(_vm.NowEdition)+"st\n              ")+"<span>Edition</span></div> <div class=\"saleItem__itemBox--price\"><div class=\"saleItem__itemBox--priceTit\">\n                현재가\n              </div> <div class=\"saleItem__itemBox--priceNum\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.nowPrice)+"\n                ")+"<span>KRW</span></div></div></div></div></div></article> <article class=\"saleItem__form formBorderLayout\"><form action method=\"post\"><fieldset><legend>정보입력</legend> <div class=\"container__inner--mid\"><div class=\"formBorderLayout__pay\"><div class=\"formBorderLayout__lineCont--tit formBorderLayout__lineCont--txt page__margin--small\">\n                결제방식 선택\n              </div> <div class=\"formBorderLayout__paySelect\"><div class=\"formBorderLayout__paySelect--radio\"><input id=\"pay1\" type=\"radio\" name=\"pay\" checked=\"checked\"> <label for=\"pay1\" class=\"formBorderLayout__paySelect--btn btn--big btn--unAcceptLight\">\n                    신용카드\n                  </label></div> <div class=\"formBorderLayout__paySelect--radio\"><input id=\"pay2\" type=\"radio\" name=\"pay\"> <label for=\"pay2\" class=\"formBorderLayout__paySelect--btn btn--big btn--unAcceptLight\">결제수단1(테스트)</label></div> <div class=\"formBorderLayout__paySelect--radio\"><input id=\"pay3\" type=\"radio\" name=\"pay\"> <label for=\"pay3\" class=\"formBorderLayout__paySelect--btn btn--big btn--unAcceptLight\">결제수단2(테스트)</label></div></div> <div class=\"formBorderLayout__subTit\">\n                해외(달러) 결제, 암호화폐 결제 시 수수료에 따라 결제금액이 변경될 수 있습니다.\n              </div></div></div></fieldset> <fieldset class=\"agreeLayout\"><legend>동의 항목</legend> <div class=\"container__inner--mid\"><div class=\"agreeLayout\"><div class=\"agreeLayout__box\"><div class=\"agreeLayout__checkLine\"><div class=\"agreeLayout__check\"><input id=\"agree1\" type=\"checkbox\" name=\"agree1\""+(_vm._ssrAttr("checked",Array.isArray(_vm.agree1)?_vm._i(_vm.agree1,null)>-1:(_vm.agree1)))+"> "+((_vm.error1 == true)?("<span class=\"agreeLayout__essential page__essential\">\n                      *\n                    </span>"):"<!---->")+" <label for=\"agree1\"><span"+(_vm._ssrClass("agreeLayout__checkBox",{error : _vm.error1 == true}))+">\n                        체크박스\n                      </span> <span>\n                        NFT는 블록체인 기술 특성상, 성공적으로 거래된 구매에 대해 \n                        청약철회 및 취소가 되지 않음에 동의합니다.\n                      </span></label></div> <button type=\"button\" class=\"agreeLayout__btn\">\n                    전문보기\n                  </button></div> <div class=\"agreeLayout__checkLine\"><div class=\"agreeLayout__check\"><input id=\"checkAll\" type=\"checkbox\" true-value=\"true\" false-value=\"false\" name=\"agreeAll\"> <label for=\"checkAll\"><span class=\"agreeLayout__checkBox\">체크박스</span>\n                      약관 전체 동의하기\n                    </label></div></div></div> "+((_vm.needCheck == true)?("<div class=\"agreeLayout__error page__color--error\">\n                약관에 동의 해주세요!\n              </div>"):"<!---->")+" <div class=\"agreeLayout__ex\">\n                개인 정보 제3자 제공 동의, 결제 대행 서비스 이용약관 등 모든 약관에 동의합니다.<br>\n                주식회사 민트 오션은 통신판매중개사로서 거래 당사자가 아니며, 사용자가 등록한 상품정보 및 거래에 대한 어떠한 책임도 지지 않습니다.\n              </div></div></div></fieldset> <fieldset><legend>데이터 전송</legend> <div class=\"saleItem__btn container__inner--mid\"><button class=\"btn--unAcceptLine btn--mini\">\n            취소하기\n            </button> <input"+(_vm._ssrAttr("disabled",_vm.ableBtn()))+" type=\"submit\" value=\"결제하기\""+(_vm._ssrClass("btn--unAcceptLight btn--middle",{accept: _vm.disabled == true}))+"></div></fieldset></form></article>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/marketPlace/order.vue?vue&type=template&id=dcff1918&

// EXTERNAL MODULE: ./modal/more.vue + 4 modules
var more = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/marketPlace/order.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ordervue_type_script_lang_js_ = ({
  name: 'auctionBid',
  // layout: 'default',
  components: {
    MoreModal: more["a" /* default */] // 전문보기 모달 컴포넌트

  },
  data: () => ({
    // 모달 메시지
    modalInfo: {
      tit: '마켓플레이스 모달',
      text: '마켓플레이스페이지 전문보기 내용',
      btn: '동의',
      agree: 'agree1'
    },
    // 아이템 기본 정보
    itemName: 'HAKAI.PT2_S Canvas Print',
    // 아이템 이름
    userName: 'GHARLIERA',
    // 판매자 이름
    itemImgUrl: __webpack_require__(60),
    // 아이템 이미지
    userImgUrl: __webpack_require__(63),
    // 판매 유저 이미지
    NowEdition: '1',
    // 현재 에디션
    nowPrice: '250,900',
    // 현재 금액
    // 데이터 값들
    agree1: false,
    // 동의1
    pay: '',
    // 결제 수단
    moreModal: false,
    // 전문보기 모달
    num: '',
    // 가격 input 숫자만 입력 가능하게
    nftList: false,
    // nft 리스트 모달
    needCheck: false,
    // 필수 동의 체크 안 됐을 때
    error1: false,
    // 필수 동의 체크 안 됐을 때
    disabled: false // 버튼 활성화 조건

  }),
  methods: {
    //뒤로가기
    back() {
      this.$router.go(-1);
    },

    // 전체동의 체크
    allCheck() {
      this.checkAll = this.checkAll ? false : true;
      this.agree1 = this.checkAll;
    },

    // 모달창 끄기
    closeModal() {
      this.moreModal = false; // 전문보기 모달창 닫기
    },

    // 모달 끄는 동시에 동의 체크
    checked1() {
      this.agree1 = true;
      this.moreModal = false;
    },

    // 가격 input 숫자만 입력 가능하게
    onlyNum(e) {
      this.num = e.target.value;
    },

    // 폼 버튼 활성화
    ableBtn() {
      // 동의 체크
      this.agree1 == true ? this.disabled = true : this.disabled = false;
    },

    // 폼 전송 조건
    checkForm() {
      if (this.disabled == true) alert('결제하기 페이지로 이동');
    }

  },
  watch: {
    // 가격 input 숫자만 입력 가능하게
    num(val) {
      const rang = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;
      if (rang.exec(val) !== null) this.num = val.replace(/[^0-9]/g, '');
      if (isNaN(parseFloat(val))) this.num = ''; //this.num.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

  }
});
// CONCATENATED MODULE: ./pages/marketPlace/order.vue?vue&type=script&lang=js&
 /* harmony default export */ var marketPlace_ordervue_type_script_lang_js_ = (ordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/marketPlace/order.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  marketPlace_ordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "97024376"
  
)

/* harmony default export */ var order = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card1.ee4614d.png";

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card8.047b26b.png";

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
//# sourceMappingURL=order.js.map