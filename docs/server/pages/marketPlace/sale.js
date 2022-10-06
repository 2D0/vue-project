exports.ids = [20];
exports.modules = {

/***/ 128:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDUwIDUwIj4KICA8cGF0aCBmaWxsPSIjOTk5IiBkPSJNMjUgMTIuNWEyLjUwNyAyLjUwNyAwIDAwLTIuNSAyLjV2Ny41SDE1YTIuNTA3IDIuNTA3IDAgMDAtMi41IDIuNWMwIDEuMzc1IDEuMTI1IDIuNSAyLjUgMi41aDcuNVYzNWMwIDEuMzc1IDEuMTI1IDIuNSAyLjUgMi41czIuNS0xLjEyNSAyLjUtMi41di03LjVIMzVjMS4zNzUgMCAyLjUtMS4xMjUgMi41LTIuNXMtMS4xMjUtMi41LTIuNS0yLjVoLTcuNVYxNWMwLTEuMzc1LTEuMTI1LTIuNS0yLjUtMi41ek0yNSAwQzExLjIyNSAwIDAgMTEuMjI1IDAgMjVzMTEuMjI1IDI1IDI1IDI1IDI1LTExLjIyNSAyNS0yNVMzOC43NzUgMCAyNSAwem0wIDQ1QzEzLjk3NSA0NSA1IDM2LjAyNSA1IDI1UzEzLjk3NSA1IDI1IDVzMjAgOC45NzUgMjAgMjAtOC45NzUgMjAtMjAgMjB6Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/marketPlace/sale.vue?vue&type=template&id=fde65402&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"saleItem page container__inner--max container__inner--padding"},[(_vm.moreModal == true)?_c('MoreModal',{attrs:{"moreTxt":_vm.modalInfo},on:{"close":_vm.closeModal,"agree1":_vm.checked1,"agree2":_vm.checked2}}):_vm._e(),_vm._ssrNode(" "),(_vm.nftList == true)?_c('NftListModal',{on:{"close":_vm.closeModal,"selected":_vm.selectedItem}}):_vm._e(),_vm._ssrNode(" "),(_vm.confirmModal == true)?_c('ConfirmModal',{attrs:{"modalTxt":_vm.text},on:{"close":_vm.closeModal}}):_vm._e(),_vm._ssrNode(" <h1 class=\"page__tit page__margin--mid\">NFT 마켓 판매</h1> "+((_vm.showItem == false)?("<div class=\"card saleItem__addItem\"><button type=\"button\" class=\"card__inner saleItem__addBtn\"><span class=\"saleItem__addBtnIn\"><i class=\"saleItem__addBtnIn--img\"><img"+(_vm._ssrAttr("src",__webpack_require__(128)))+" alt=\"item plus\"></i> <i class=\"saleItem__addBtnIn--tit\">Add NFT</i></span></button></div>"):"<!---->")+" "+((_vm.showItem == true)?("<div class=\"saleItem__itemImg\"><div class=\"saleItem__itemImgInner container__inner--mid\"><button type=\"button\" class=\"btn__close saleItem__itemImg--close\"><span>취소</span></button> <div class=\"page__img\"><img"+(_vm._ssrAttr("src",_vm.itemImgUrl))+(_vm._ssrAttr("alt",_vm.itemName))+"></div></div></div>"):"<!---->")+" "+((_vm.showItem == true)?("<div class=\"saleItem__itemInfo\"><div class=\"container__inner--mid\"><div class=\"saleItem__itemCont\"><div class=\"page__tit--small\">작품 제목</div> <div class=\"saleItem__itemCont--tit\">"+_vm._ssrEscape(_vm._s(_vm.itemName))+"</div></div> <div class=\"saleItem__itemCont\"><div class=\"page__tit--small\">작품 설명</div> <div class=\"saleItem__itemCont--txt\">"+_vm._ssrEscape(_vm._s(_vm.itemComment))+"</div></div></div></div>"):"<!---->")+" <div class=\"saleItem__form formBorderLayout\"><form action method=\"post\"><fieldset><legend>정보입력</legend> <div class=\"container__inner--mid\"><div class=\"formBorderLayout__cont\"><div class=\"formBorderLayout__tit\">판매자 의견</div> <input id=\"com\" name=\"comment\" type=\"text\" maxlength=\"30\" placeholder=\"30자 이내로 적어주세요.\"></div> <div class=\"formBorderLayout__cont\"><div class=\"formBorderLayout__tit\">판매 금액(KRW)<span class=\"page__essential\">*</span></div> <div class=\"formBorderLayout__subTit\"></div> <input type=\"text\" name=\"price\" placeholder=\"5,000원 이상 금액을 등록해주세요.\""+(_vm._ssrAttr("value",_vm.price))+"></div> <div class=\"formBorderLayout__cont\"><div class=\"formBorderLayout__tit\">판매 기간 설정<span class=\"page__essential\">*</span></div> <div class=\"formBorderLayout__subTit\"></div> <input type=\"text\" name=\"date\" readonly=\"readonly\" placeholder=\"날짜를 선택해 주세요.\"></div> <div class=\"formBorderLayout__cont\"><div class=\"formBorderLayout__tit\">수수료</div> <div class=\"formBorderLayout__subTit\">작품 판매 시 서비스 수수료와 결제수수료를 제외한 금액은 정산관리 메뉴에서 확인하실 수 있습니다.</div> "+((_vm.incentive == false)?("<input type=\"text\" name=\"incentive\" value=\"현재는 수수료 무료 이벤트 중입니다.\" readonly=\"readonly\">"):(_vm.incentive == true)?("<input type=\"text\" name=\"incentive\" value=\"수수료\" readonly=\"readonly\">"):"<!---->")+"</div></div></fieldset> <fieldset class=\"agreeLayout\"><legend>동의 항목</legend> <div class=\"container__inner--mid\"><div class=\"agreeLayout\"><div class=\"agreeLayout__box\"><div class=\"agreeLayout__checkLine\"><div class=\"agreeLayout__check\"><input id=\"agree1\" type=\"checkbox\" name=\"agree1\""+(_vm._ssrAttr("checked",Array.isArray(_vm.agree1)?_vm._i(_vm.agree1,null)>-1:(_vm.agree1)))+"> "+((_vm.error1 == true)?("<span class=\"agreeLayout__essential page__essential\">\n                      *\n                    </span>"):"<!---->")+" <label for=\"agree1\"><span"+(_vm._ssrClass("agreeLayout__checkBox",{error : _vm.error1 == true}))+">\n                        체크박스\n                      </span> <span>NFT 판매를 위한 정보 수집 및 이용에 동의합니다.</span></label></div> <button type=\"button\" class=\"agreeLayout__btn\">\n                    전문보기\n                  </button></div> <div class=\"agreeLayout__checkLine\"><div class=\"agreeLayout__check\"><input id=\"agree2\" type=\"checkbox\" name=\"agree2\""+(_vm._ssrAttr("checked",Array.isArray(_vm.agree2)?_vm._i(_vm.agree2,null)>-1:(_vm.agree2)))+"> "+((_vm.error2 == true)?("<span class=\"agreeLayout__essential page__essential\">\n                      *\n                    </span>"):"<!---->")+" <label for=\"agree2\"><span"+(_vm._ssrClass("agreeLayout__checkBox",{error : _vm.error2 == true}))+">\n                        체크박스\n                      </span> <span>NFT 판매시 유의사항을 확인하였으며, 하단 내용에 동의합니다.</span></label></div> <button type=\"button\" class=\"agreeLayout__btn\">\n                    전문보기\n                  </button></div> <div class=\"agreeLayout__checkLine\"><div class=\"agreeLayout__check\"><input id=\"checkAll\" type=\"checkbox\" true-value=\"true\" false-value=\"false\" name=\"agreeALl\"> <label for=\"checkAll\"><span class=\"agreeLayout__checkBox\">체크박스</span>\n                      약관 전체 동의하기\n                    </label></div></div></div> "+((_vm.needCheck == true)?("<div class=\"agreeLayout__error page__color--error\">\n                약관에 동의 해주세요!\n              </div>"):"<!---->")+" <div class=\"agreeLayout__ex\">\n                개인 정보 제3자 제공 동의, 결제 대행 서비스 이용약관 등 모든 약관에 동의합니다.<br>\n                주식회사 민트 오션은 통신판매중개사로서 거래 당사자가 아니며, 사용자가 등록한 상품정보 및 거래에 대한 어떠한 책임도 지지 않습니다.\n              </div></div></div></fieldset> <fieldset><legend>데이터 전송</legend> <div class=\"saleItem__btn container__inner--mid\"><button class=\"btn--unAcceptLine btn--mini\">\n            취소하기\n            </button> <input"+(_vm._ssrAttr("disabled",_vm.ableBtn()))+" type=\"submit\" value=\"등록하기\""+(_vm._ssrClass("btn--unAcceptLight btn--middle",{accept: _vm.disabled == true}))+"></div></fieldset></form></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/marketPlace/sale.vue?vue&type=template&id=fde65402&

// EXTERNAL MODULE: ./modal/more.vue + 4 modules
var more = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./modal/nftList.vue?vue&type=template&id=17d50449&
var nftListvue_type_template_id_17d50449_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"nftList"}},[_c('div',{staticClass:"modalNftList modal"},[_c('div',{staticClass:"modal__layout modalNftList__inner container__inner--max page"},[_c('div',{staticClass:"modal__top modal__inner page__margin--small"},[_c('h1',{staticClass:"modalMore__tit"},[_vm._v("소유중인 NFT")]),_vm._v(" "),_c('button',{staticClass:"btn__close modal__close",attrs:{"type":"button"},on:{"click":_vm.closeBtn}},[_c('span',[_vm._v("닫기")])])]),_vm._v(" "),_c('div',{staticClass:"modalNftList__search page__search modal__inner page__margin--small"},[_c('div',{staticClass:"modalNftList__search--inner page__search--inner"},[_c('input',{attrs:{"type":"text","placeholder":"검색어를 입력해주세요."}}),_vm._v(" "),_c('button',{attrs:{"type":"button"}},[_c('span',{staticClass:"page__img"},[_c('img',{attrs:{"src":__webpack_require__(15),"alt":"검색 버튼"}})])])])]),_vm._v(" "),_c('div',{staticClass:"modalNftList__table table itemTable"},[_c('div',{staticClass:"modalNftList__tableInner itemTable__inner"},[_c('table',{staticClass:"modalNftList__tableLayout itemTable__layout table__layout"},[_c('thead',[_c('th',{staticClass:"table__info--10"}),_vm._v(" "),_c('th',{staticClass:"table__info--40"},[_vm._v("이름")]),_vm._v(" "),_c('th',{staticClass:"table__info--20"},[_vm._v("판매자")]),_vm._v(" "),_c('th',{staticClass:"table__info--10"},[_vm._v("에디션")]),_vm._v(" "),_c('th',{staticClass:"table__info--20"},[_vm._v("체결가")])]),_vm._v(" "),_c('tbody',[(_vm.tableItemList == 0)?_c('tr',{staticClass:"table__blank"},[_c('td',[_vm._v("보유중인 NFT가 없습니다.")])]):_vm._e(),_vm._v(" "),_vm._l((_vm.tableItemList),function(item){return _c('tr',{key:item.id,on:{"click":_vm.selectItem}},[_c('td',{staticClass:"table__info--10 itemTable__imgBox"},[_c('div',{staticClass:"itemTable__img page__img"},[_c('img',{attrs:{"src":item.itemImgUrl,"alt":item.itemName}})])]),_vm._v(" "),_c('td',{staticClass:"table__info--40 page__text--left page__table--innerpage__split"},[_vm._v(_vm._s(item.itemName))]),_vm._v(" "),_c('td',{staticClass:"table__info--20 page__split"},[_vm._v(_vm._s(item.userName))]),_vm._v(" "),_c('td',{staticClass:"table__info--10 table__info--edition"},[_vm._v(_vm._s(item.edition)+"st")]),_vm._v(" "),_c('td',{staticClass:"table__info--20"},[_vm._v(_vm._s(item.price)+" "),_c('span',[_vm._v("KRW")])])])})],2)]),_vm._v(" "),_c('ul',{staticClass:"itemTable__toggle"},[(_vm.tableItemList == 0)?_c('li',{staticClass:"table__blank"},[_c('div',[_vm._v("보유중인 NFT가 없습니다.")])]):_vm._e(),_vm._v(" "),_vm._l((_vm.tableItemList),function(item,idx){return _c('li',{key:idx,staticClass:"itemTable__toggle--list"},[_c('div',{staticClass:"itemTable__toggle--tit",on:{"click":function($event){return _vm.toggleBtn(idx)}}},[_c('p',{staticClass:"itemTable__toggle--img itemTable__img page__img"},[_c('img',{attrs:{"src":item.itemImgUrl,"alt":item.itemName}})]),_vm._v(" "),_c('p',{staticClass:"itemTable__toggle--name page__split"},[_vm._v(_vm._s(item.itemName))])]),_vm._v(" "),_c('div',{staticClass:"itemTable__toggle--info",class:{active: _vm.listId == idx},on:{"click":_vm.selectItem}},[_c('div',{staticClass:"itemTable__toggle--txt"},[_c('dl',[_c('dt',[_vm._v("판매자")]),_vm._v(" "),_c('dd',[_vm._v(_vm._s(item.userName))])]),_vm._v(" "),_c('dl',[_c('dt',[_vm._v("에디션")]),_vm._v(" "),_c('dd',[_vm._v(_vm._s(item.edition)+"st")])]),_vm._v(" "),_c('dl',[_c('dt',[_vm._v("체결가")]),_vm._v(" "),_c('dd',[_vm._v(_vm._s(item.price)+" "),_c('span',[_vm._v("KRW")])])])]),_vm._v(" "),_c('div',{staticClass:"itemTable__toggle--btn"},[_vm._v("\n                  선택하기\n                ")])])])})],2)])])]),_vm._v(" "),_c('div',{staticClass:"modal__back",on:{"click":_vm.closeBtn}},[_vm._v("\n      배경\n    ")])])])}
var nftListvue_type_template_id_17d50449_staticRenderFns = []


// CONCATENATED MODULE: ./modal/nftList.vue?vue&type=template&id=17d50449&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./modal/nftList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nftListvue_type_script_lang_js_ = ({
  name: 'nftList',
  // layout: 'default',
  data: () => ({
    listId: 0,
    // 리스트 아이디
    toggleOn: false,
    // 토글 on off
    tableItemList: [{
      itemName: 'HAKAI.PT2_S Canvas Print',
      // 아이템 이름
      userName: 'GHARLIERA',
      // 판매자 이름
      itemImgUrl: __webpack_require__(62),
      // 아이템 이미지
      edition: '11',
      // 에디션
      price: '250,900' // 금액

    }, {
      itemName: 'HAKAI.PT2_S Canvas Print',
      // 아이템 이름
      userName: 'GHARLIERA',
      // 판매자 이름
      itemImgUrl: __webpack_require__(65),
      // 아이템 이미지
      edition: '11',
      // 에디션
      price: '250,900' // 금액

    }, {
      itemName: 'HAKAI.PT2_S Canvas Print',
      // 아이템 이름
      userName: 'GHARLIERA',
      // 판매자 이름
      itemImgUrl: __webpack_require__(67),
      // 아이템 이미지
      edition: '11',
      // 에디션
      price: '250,900' // 금액

    }, {
      itemName: 'HAKAI.PT2_S Canvas Print',
      // 아이템 이름
      userName: 'GHARLIERA',
      // 판매자 이름
      itemImgUrl: __webpack_require__(64),
      // 아이템 이미지
      edition: '11',
      // 에디션
      price: '250,900' // 금액

    }, {
      itemName: 'HAKAI.PT2_S Canvas Print',
      // 아이템 이름
      userName: 'GHARLIERA',
      // 판매자 이름
      itemImgUrl: __webpack_require__(61),
      // 아이템 이미지
      edition: '11',
      // 에디션
      price: '250,900' // 금액

    }, {
      itemName: 'HAKAI.PT2_S Canvas Print',
      // 아이템 이름
      userName: 'GHARLIERA',
      // 판매자 이름
      itemImgUrl: __webpack_require__(63),
      // 아이템 이미지
      edition: '11',
      // 에디션
      price: '250,900' // 금액

    }, {
      itemName: 'HAKAI.PT2_S Canvas Print',
      // 아이템 이름
      userName: 'GHARLIERA',
      // 판매자 이름
      itemImgUrl: __webpack_require__(60),
      // 아이템 이미지
      edition: '11',
      // 에디션
      price: '250,900' // 금액

    }, {
      itemName: 'HAKAI.PT2_S Canvas Print',
      // 아이템 이름
      userName: 'GHARLIERA',
      // 판매자 이름
      itemImgUrl: __webpack_require__(62),
      // 아이템 이미지
      edition: '11',
      // 에디션
      price: '250,900' // 금액

    }, {
      itemName: 'HAKAI.PT2_S Canvas Print',
      // 아이템 이름
      userName: 'GHARLIERA',
      // 판매자 이름
      itemImgUrl: __webpack_require__(61),
      // 아이템 이미지
      edition: '11',
      // 에디션
      price: '250,900' // 금액

    }, {
      itemName: 'HAKAI.PT2_S Canvas Print',
      // 아이템 이름
      userName: 'GHARLIERA',
      // 판매자 이름
      itemImgUrl: __webpack_require__(64),
      // 아이템 이미지
      edition: '11',
      // 에디션
      price: '250,900' // 금액

    }]
  }),
  methods: {
    // 아이템 정보 토글 버튼
    toggleBtn(idx) {
      this.listId = idx;
    },

    // 아이템 선택 버튼
    selectItem() {
      this.$emit('selected');
    },

    // 모달창 닫기 버튼
    closeBtn() {
      this.$emit('close');
    }

  }
});
// CONCATENATED MODULE: ./modal/nftList.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_nftListvue_type_script_lang_js_ = (nftListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./modal/nftList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_nftListvue_type_script_lang_js_,
  nftListvue_type_template_id_17d50449_render,
  nftListvue_type_template_id_17d50449_staticRenderFns,
  false,
  null,
  null,
  "1d8ae97e"
  
)

/* harmony default export */ var nftList = (component.exports);
// EXTERNAL MODULE: ./modal/confirm.vue + 4 modules
var modal_confirm = __webpack_require__(95);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/marketPlace/sale.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // 확인 모달
//import Calendar     from 'v-calendar/lib/components/calendar.umd'
//import DatePicker   from 'v-calendar/lib/components/date-picker.umd'

/* harmony default export */ var salevue_type_script_lang_js_ = ({
  name: 'marketPlace',
  // layout: 'default',
  components: {
    MoreModal: more["a" /* default */],
    // 전문보기 모달 컴포넌트
    NftListModal: nftList,
    // NFT 목록 모달
    ConfirmModal: modal_confirm["a" /* default */] // 확인 모달
    //Calendar,       // 달력 모달
    //DatePicker,     // 달력 날짜 선택

  },
  data: () => ({
    //모달
    modalInfo: {
      tit: '',
      text: '',
      btn: '',
      agree1: ''
    },
    // 아이템 기본 정보
    itemName: 'HAKAI.PT2_S Canvas Print',
    // 아이템 이름
    userName: 'GHARLIERA',
    // 판매자 이름
    commission: '2,900',
    // 수수료
    itemComment: '아이템 상세 설명입니다.',
    // 아이템 설명
    itemImgUrl: __webpack_require__(60),
    // 아이템 이미지
    // 데이터 값들
    showItem: false,
    // 아이템 선택시 정보 노출
    agree1: false,
    // 동의1
    agree2: false,
    // 동의2
    moreModal: false,
    // 전문보기 모달
    confirmModal: false,
    // 등록완료 모달
    text: '등록이 완료되었습니다.',
    // 등록완료 모달 메시지
    price: '',
    // 가격 input 숫자만 입력 가능하게
    incentive: false,
    // 수수료
    nftList: false,
    // nft 리스트 모달
    needCheck: false,
    // 필수 동의 체크 안 됐을 때
    error1: false,
    // 필수 동의 체크 안 됐을 때
    error2: false,
    // 필수 동의 체크 안 됐을 때
    disabled: false // 버튼 활성화 조건    

  }),
  methods: {
    //뒤로가기
    back() {
      this.$router.go(-1);
    },

    //모달 전문보기
    infoBtn() {
      this.modalInfo.tit = '서비스 이용동의';
      this.modalInfo.text = '판매 서비스 모달입니다.';
      this.modalInfo.btn = '동의';
      this.modalInfo.agree = 'agree1';
      this.moreModal = true;
    },

    notice() {
      this.modalInfo.tit = '유의사항 안내';
      this.modalInfo.text = '판매 서비스 유의사항 모달입니다.';
      this.modalInfo.btn = '동의';
      this.modalInfo.agree = 'agree2';
      this.moreModal = true;
    },

    // 전체동의 체크
    allCheck() {
      this.checkAll = this.checkAll ? false : true;
      this.agree1 = this.checkAll;
      this.agree2 = this.checkAll;
    },

    // 모달창 끄기
    closeModal() {
      this.moreModal = false; // 전문보기 모달창 닫기

      this.nftList = false; // NFT 리스트 모달창 닫기

      this.confirmModal = false; // 등록완료 모달창 닫기
    },

    // 모달 끄는 동시에 동의 체크
    checked1() {
      this.agree1 = true;
      this.moreModal = false;
    },

    checked2() {
      this.agree2 = true;
      this.moreModal = false;
    },

    // 가격 input 숫자만 입력 가능하게
    onlyNum(e) {
      this.price = e.target.value;
    },

    // 아이템 리스트 모달
    selectedItem() {
      this.showItem = true; // 아이템 선택시 정보 노출

      this.nftList = false; // NFT 리스트 모달창 닫기
    },

    // 폼 버튼 활성화
    ableBtn() {
      let selectItem = this.showItem == true; // 아이템 선택 여부

      let price = this.price != ''; // 가격 입력 여부

      let check1 = this.agree1 == true; // 동의 체크

      let check2 = this.agree2 == true; // 동의 체크

      let salePrice = this.price.replace(/,/g, ''); // 판매 금액

      salePrice = Number(salePrice);
      selectItem && price && check1 && check2 && salePrice >= 5000 ? this.disabled = true : this.disabled = false;
    },

    // 폼 전송 조건
    checkForm() {
      if (this.disabled == true) {
        this.confirmModal = true;
        setTimeout(() => {
          this.confirmModal = false;
        }, 1200);
      }
    }

  },
  watch: {
    // 가격 input 숫자만 입력 가능하게
    price(val) {
      const rang = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;
      if (rang.exec(val) !== null) this.price = val.replace(/[^0-9]/g, '');
      if (isNaN(parseFloat(val))) this.price = ''; //this.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

  }
});
// CONCATENATED MODULE: ./pages/marketPlace/sale.vue?vue&type=script&lang=js&
 /* harmony default export */ var marketPlace_salevue_type_script_lang_js_ = (salevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/marketPlace/sale.vue





/* normalize component */

var sale_component = Object(componentNormalizer["a" /* default */])(
  marketPlace_salevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "45fcd7c0"
  
)

/* harmony default export */ var sale = __webpack_exports__["default"] = (sale_component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card1.ee4614d.png";

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card7.82f9f1f.png";

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card3.2bd5bfb.png";

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card8.047b26b.png";

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card6.bfc490d.png";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card4.86f1315.png";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card5.06dfbb1.png";

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

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./modal/confirm.vue?vue&type=template&id=fd0bef46&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"basic"}},[_c('div',{staticClass:"modal modalBasic"},[_c('div',{staticClass:"modalBasic__inner modal__layout modal--small modal--auto"},[_c('div',{staticClass:"modalSubmit__inner"},[_c('div',{staticClass:"modal__inner page__margin--mid"},[_c('h1',{staticClass:"modalSubmit__tit"},[_vm._v("알림")])]),_vm._v(" "),_c('div',{staticClass:"modalSubmit__cont--imgTxt modal__inner"},[_vm._v("\n              "+_vm._s(_vm.modalTxt)+"\n          ")])])]),_vm._v(" "),_c('div'),_vm._v(" "),_c('div',{staticClass:"modal__back",on:{"click":_vm.closeBtn}},[_vm._v("\n      배경\n    ")])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./modal/confirm.vue?vue&type=template&id=fd0bef46&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./modal/confirm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var confirmvue_type_script_lang_js_ = ({
  name: 'confirm',
  props: {
    modalTxt: String
  },
  data: () => ({}),
  methods: {
    // 모달창 닫기 버튼
    closeBtn() {
      this.$emit('close');
    }

  }
});
// CONCATENATED MODULE: ./modal/confirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_confirmvue_type_script_lang_js_ = (confirmvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./modal/confirm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_confirmvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5f78acc4"
  
)

/* harmony default export */ var modal_confirm = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sale.js.map