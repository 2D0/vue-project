exports.ids = [11];
exports.modules = {

/***/ 126:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNyIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE1IDE3Ij4KICA8cGF0aCBmaWxsPSIjMEE3NUMyIiBkPSJNMTMuOTQ3IDIuODMzYy0uNTgzIDAtMS4wNTQuNDc1LTEuMDU0IDEuMDYzdjMuNTQyYS4zNS4zNSAwIDAgMS0uMzUuMzU0LjM1LjM1IDAgMCAxLS4zNTItLjM1NFYxLjc3YzAtLjU4OC0uNDctMS4wNjMtMS4wNTMtMS4wNjNzLTEuMDUzLjQ3NS0xLjA1MyAxLjA2M3Y1LjY2N2EuMzUuMzUgMCAwIDEtLjM1Mi4zNTQuMzUuMzUgMCAwIDEtLjM1LS4zNTRWMS4wNjNBMS4wNTkgMS4wNTkgMCAwIDAgOC4zMjggMGMtLjU4MyAwLTEuMDUzLjQ3NS0xLjA1MyAxLjA2M1Y3LjQzYS4zNS4zNSAwIDAgMS0uMzUxLjM1NS4zNS4zNSAwIDAgMS0uMzUxLS4zNTVWMy4xODhjMC0uNTg4LS40Ny0xLjA2My0xLjA1NC0xLjA2My0uNTgzIDAtMS4wNTMuNDc1LTEuMDUzIDEuMDYzdjguMDgyTDEuNTc0IDkuNjA1YTEuMDQzIDEuMDQzIDAgMCAwLTEuMjUuMTU2IDEuMDY1IDEuMDY1IDAgMCAwLS4wMjEgMS41MDlsNC43NiA0Ljg4YTIuNzcgMi43NyAwIDAgMCAyLjAwMi44NWg1LjEyNkMxMy43NDMgMTcgMTUgMTUuNzMyIDE1IDE0LjE2N1YzLjg5NmMwLS41ODgtLjQ3LTEuMDYzLTEuMDUzLTEuMDYzWiIvPgo8L3N2Zz4K"

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-reCapcha.5d4e9d9.svg";

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/join/home.vue?vue&type=template&id=4354a010&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"join page container__inner--mid container__inner--padding"},[(_vm.warningModal == true)?_c('WarningModal',{on:{"close":_vm.closeModal}}):_vm._e(),_vm._ssrNode(" "),(_vm.moreModal == true)?_c('MoreModal',{attrs:{"moreTxt":_vm.modalInfo,"moreAgree":_vm.modalInfo.agree},on:{"close":_vm.closeModal,"agree1":_vm.checked1,"agree2":_vm.checked2,"agree3":_vm.checked3,"agree4":_vm.checked4}}):_vm._e(),_vm._ssrNode(" "),(_vm.emailModal == true)?_c('ModalEmail',{attrs:{"userEmail":_vm.email},on:{"emailClose":_vm.emailClose,"close":_vm.closeModal}}):_vm._e(),_vm._ssrNode(" <div class=\"join__top\"><img"+(_vm._ssrAttr("src",__webpack_require__(77)))+" alt=\"민트오션\" class=\"join__top--logo\"> <h1 class=\"page__margin--mid\">회원가입</h1> <div class=\"join__top--noti page__margin--mid\"><img"+(_vm._ssrAttr("src",__webpack_require__(126)))+" alt=\"경고\"> <span>법인 및 12세 이하 회원님은 서비스 이용이 불가합니다.</span></div></div> "),_vm._ssrNode("<div class=\"join__mid\">","</div>",[_vm._ssrNode("<form action method=\"post\" class=\"join__writeBox formInfoLayout page__margin--mid\">","</form>",[_vm._ssrNode("<fieldset><input type=\"hidden\" name=\"xxxx\" id=\"xxxx\" value=\"xxxx\"> <legend>회원가입</legend> <div class=\"formInfoLayout__input  page__margin--small\">"+((_vm.nickActive == true)?("<span class=\"formInfoLayout__input--tit\">닉네임</span>"):"<!---->")+" <div"+(_vm._ssrClass("formInfoLayout__write formInfoLayout__write--box",{valid: _vm.ableNick == true, unValid: _vm.ableNick == false}))+"><input type=\"text\" name=\"nickname\" placeholder=\"닉네임\" maxlength=\"16\""+(_vm._ssrAttr("disabled",_vm.AbleNick()))+(_vm._ssrAttr("value",(_vm.nickname)))+(_vm._ssrClass("formInfoLayout__write--noIcon",{icon: _vm.write == true}))+"> "+((_vm.nickClear == true)?("<div class=\"formInfoLayout__write--inputBtn clear\"><img"+(_vm._ssrAttr("src",__webpack_require__(76)))+" alt=\"전체 지우기\"></div>"):"<!---->")+"</div> "+((_vm.sameNick == false)?("<span class=\"page__color--error formInfoLayout__input--error\">\n            중복된 닉네임입니다.\n          </span>"):"<!---->")+" "+((_vm.ableNick == false)?("<span class=\"page__color--error formInfoLayout__input--error\">\n            닉네임은 한글, 영어, 숫자, 띄어쓰기만 가능합니다.\n          </span>"):"<!---->")+"</div> <div class=\"formInfoLayout__input  page__margin--small\">"+((_vm.emailActive == true)?("<span class=\"formInfoLayout__input--tit\">이메일</span>"):"<!---->")+" <div"+(_vm._ssrClass("formInfoLayout__write formInfoLayout__write--box",{valid: _vm.ableEmail == true, unValid: _vm.ableEmail == false}))+"><input type=\"email\" name=\"email\" placeholder=\"이메일\" maxlength=\"64\""+(_vm._ssrAttr("disabled",_vm.AbleEmail()))+(_vm._ssrAttr("value",(_vm.email)))+(_vm._ssrClass("formInfoLayout__write formInfoLayout__write--noIcon",{icon: _vm.write == true}))+"> "+((_vm.emailClear == true)?("<div class=\"formInfoLayout__write--inputBtn clear\"><img"+(_vm._ssrAttr("src",__webpack_require__(76)))+" alt=\"전체 지우기\"></div>"):"<!---->")+"</div> "+((_vm.ableEmail == false)?("<span class=\"page__color--error formInfoLayout__input--error\">\n            이메일 주소를 확인해주세요.\n          </span>"):"<!---->")+"</div> <div class=\"formInfoLayout__input  page__margin--small\">"+((_vm.pwActive == true)?("<span class=\"formInfoLayout__input--tit\">비밀번호</span>"):"<!---->")+" <div"+(_vm._ssrClass("formInfoLayout__write formInfoLayout__write--box",{valid: _vm.ablePw == true, unValid: _vm.ablePw == false}))+">"+(((_vm.passwordType)==='checkbox')?("<input name=\"password\" placeholder=\"비밀번호 (영문, 숫자, 특수문자 포함 8-16자)\" maxlength=\"16\""+(_vm._ssrAttr("disabled",_vm.AblePass()))+" type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.pass)?_vm._i(_vm.pass,null)>-1:(_vm.pass)))+(_vm._ssrClass("formInfoLayout__write--inIcon formInfoLayout__write--noIcon",{icon: _vm.write == true, secret: _vm.password == true}))+">"):((_vm.passwordType)==='radio')?("<input name=\"password\" placeholder=\"비밀번호 (영문, 숫자, 특수문자 포함 8-16자)\" maxlength=\"16\""+(_vm._ssrAttr("disabled",_vm.AblePass()))+" type=\"radio\""+(_vm._ssrAttr("checked",_vm._q(_vm.pass,null)))+(_vm._ssrClass("formInfoLayout__write--inIcon formInfoLayout__write--noIcon",{icon: _vm.write == true, secret: _vm.password == true}))+">"):("<input name=\"password\" placeholder=\"비밀번호 (영문, 숫자, 특수문자 포함 8-16자)\" maxlength=\"16\""+(_vm._ssrAttr("disabled",_vm.AblePass()))+(_vm._ssrAttr("type",_vm.passwordType))+(_vm._ssrAttr("value",(_vm.pass)))+(_vm._ssrClass("formInfoLayout__write--inIcon formInfoLayout__write--noIcon",{icon: _vm.write == true, secret: _vm.password == true}))+">"))+" "+((_vm.pwClear == true)?("<div class=\"formInfoLayout__write--inputBtn clear\"><img"+(_vm._ssrAttr("src",__webpack_require__(76)))+" alt=\"전체 지우기\"></div>"):"<!---->")+" <label><div class=\"formInfoLayout__write--inputBtn secret\">"+((_vm.secret == true)?("<img"+(_vm._ssrAttr("src",__webpack_require__(85)))+" alt=\"비밀번호 가리기\">"):("<img"+(_vm._ssrAttr("src",__webpack_require__(86)))+" alt=\"비밀번호 오픈\">"))+"</div></label></div> "+((_vm.ablePw == false)?("<span class=\"page__color--error formInfoLayout__input--error\">\n            비밀번호는 8-16자의 문자, 숫자, 기호로 입력해 주세요.\n          </span>"):"<!---->")+"</div> <div class=\"formInfoLayout__input  page__margin--small\"><div"+(_vm._ssrClass("formInfoLayout__write formInfoLayout__write--box",{valid: _vm.ablePwVerify == true, unValid: _vm.ablePwVerify == false}))+"><input type=\"password\" name=\"passConfirm\" placeholder=\"비밀번호 확인\" maxlength=\"16\""+(_vm._ssrAttr("disabled",_vm.AblePassVer()))+(_vm._ssrAttr("value",(_vm.pwVerify)))+" class=\"formInfoLayout__write--noIcon\"></div> "+((_vm.ablePwVerify == false)?("<span class=\"page__color--error formInfoLayout__input--error\">\n            비밀번호와 비밀번호 확인이 일치하지 않습니다.\n          </span>"):"<!---->")+"</div></fieldset> <fieldset class=\"join__agree agreeLayout page__margin--mid\"><legend>서비스 정책</legend> <h3 class=\"page__margin--mid\">서비스 정책</h3> <div class=\"join__agree--inner \"><div class=\"agreeLayout\"><div class=\"agreeLayout__box\"><div class=\"agreeLayout__checkLine\"><div class=\"agreeLayout__check\"><input id=\"agree1\" type=\"checkbox\" name=\"agree1\""+(_vm._ssrAttr("checked",Array.isArray(_vm.agree1)?_vm._i(_vm.agree1,null)>-1:(_vm.agree1)))+"> "+((_vm.error1 == true)?("<span class=\"agreeLayout__essential page__essential\">\n                    *\n                  </span>"):"<!---->")+" <label for=\"agree1\"><span"+(_vm._ssrClass("agreeLayout__checkBox",{error : _vm.error1 == true}))+">\n                      체크박스\n                    </span> <span><i class=\"agreeLayout__check--essen page__color--error\">[필수]</i> 서비스 이용동의\n                    </span></label></div> <button type=\"button\" class=\"agreeLayout__btn\">\n                  전문보기\n                </button></div> <div class=\"agreeLayout__checkLine\"><div class=\"agreeLayout__check\"><input id=\"agree2\" type=\"checkbox\" name=\"agree2\""+(_vm._ssrAttr("checked",Array.isArray(_vm.agree2)?_vm._i(_vm.agree2,null)>-1:(_vm.agree2)))+"> "+((_vm.error2 == true)?("<span class=\"agreeLayout__essential page__essential\">\n                    *\n                  </span>"):"<!---->")+" <label for=\"agree2\"><span"+(_vm._ssrClass("agreeLayout__checkBox",{error : _vm.error2 == true}))+">\n                      체크박스\n                    </span> <span><i class=\"agreeLayout__check--essen page__color--error\">[필수]</i> 서비스 이용약관 동의\n                    </span></label></div> <button type=\"button\" class=\"agreeLayout__btn\">\n                  전문보기\n                </button></div> <div class=\"agreeLayout__checkLine\"><div class=\"agreeLayout__check\"><input id=\"agree3\" type=\"checkbox\" name=\"agree3\""+(_vm._ssrAttr("checked",Array.isArray(_vm.agree3)?_vm._i(_vm.agree3,null)>-1:(_vm.agree3)))+"> "+((_vm.error3 == true)?("<span class=\"agreeLayout__essential page__essential\">\n                    *\n                  </span>"):"<!---->")+" <label for=\"agree3\"><span"+(_vm._ssrClass("agreeLayout__checkBox",{error : _vm.error3 == true}))+">\n                      체크박스\n                    </span> <span><i class=\"agreeLayout__check--essen page__color--error\">[필수]</i> 개인정보 처리방침 동의\n                    </span></label></div> <button type=\"button\" class=\"agreeLayout__btn\">\n                  전문보기\n                </button></div> <div class=\"agreeLayout__checkLine\"><div class=\"agreeLayout__check\"><input id=\"agree4\" type=\"checkbox\" name=\"agree4\""+(_vm._ssrAttr("checked",Array.isArray(_vm.agree4)?_vm._i(_vm.agree4,null)>-1:(_vm.agree4)))+"> "+((_vm.error4 == true)?("<span class=\"agreeLayout__essential page__essential\">\n                    *\n                  </span>"):"<!---->")+" <label for=\"agree4\"><span"+(_vm._ssrClass("agreeLayout__checkBox",{error : _vm.error4 == true}))+">\n                      체크박스\n                    </span> <span><i class=\"agreeLayout__check--select\">[선택]</i> 마케팅 정보이용 동의\n                    </span></label></div> <button type=\"button\" class=\"agreeLayout__btn\">\n                  전문보기\n                </button></div> <div class=\"agreeLayout__checkLine\"><div class=\"agreeLayout__check\"><input id=\"checkAll\" type=\"checkbox\" true-value=\"true\" false-value=\"false\" name=\"agreeAll\"> <label for=\"checkAll\"><span class=\"agreeLayout__checkBox\">체크박스</span>\n                    약관 전체 동의하기\n                  </label></div></div></div> "+((_vm.needCheck == true)?("<div class=\"agreeLayout__error page__color--error\">\n              약관에 동의 해주세요!\n            </div>"):"<!---->")+" <div class=\"agreeLayout__ex\">\n              개인 정보 제3자 제공 동의, 결제 대행 서비스 이용약관 등 모든 약관에 동의합니다.<br>\n              주식회사 민트 오션은 통신판매중개사로서 거래 당사자가 아니며, 사용자가 등록한 상품정보 및 거래에 대한 어떠한 책임도 지지 않습니다.\n            </div></div></div></fieldset> <fieldset class=\"join__recapcha  page__margin--mid\"><img"+(_vm._ssrAttr("src",__webpack_require__(127)))+" alt=\"구글 리캡차\"></fieldset> "),_vm._ssrNode("<fieldset>","</fieldset>",[_vm._ssrNode("<legend>회원가입</legend> "),_vm._ssrNode("<div class=\"agreeLayout__btns\">","</div>",[_vm._ssrNode("<input"+(_vm._ssrAttr("disabled",_vm.ableBtn()))+" type=\"submit\" value=\"회원가입\""+(_vm._ssrClass("btn--unAcceptLight btn--big page__margin--small",{accept: _vm.disabled == true}))+"> <button type=\"button\" class=\"btn--big\">\n              로그인\n            </button> "),_c('NuxtLink',{staticClass:"btn--big",attrs:{"to":"complete"}},[_vm._v("다음 페이지(임시버튼)")])],2)],2)],2)]),_vm._ssrNode(" <div class=\"join__btm\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/join/home.vue?vue&type=template&id=4354a010&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./modal/warning.vue?vue&type=template&id=2924cf56&
var warningvue_type_template_id_2924cf56_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"stopJoin"}},[_c('div',{staticClass:"modal"},[_c('div',{staticClass:"modal__layout modal--mid modal--auto modalSubmit"},[_c('div',{staticClass:"modalSubmit__inner"},[_c('div',{staticClass:"modal__top modal__inner page__margin--big"},[_c('h1',{staticClass:"modalSubmit__tit"},[_vm._v("알림")]),_vm._v(" "),_c('button',{staticClass:"btn__close modal__close",attrs:{"type":"button"},on:{"click":_vm.closeBtn}},[_c('span',[_vm._v("닫기")])])]),_vm._v(" "),_c('div',{staticClass:"modalSubmit__cont--txt modal__inner page__margin--big"},[_vm._v("\n              회원가입을 완료하지 않았습니다."),_c('br'),_vm._v("\n              회원가입을 중단하시겠습니까?\n          ")]),_vm._v(" "),_c('div',{staticClass:"modalMore__bottom--half modal__inner modalMore__inner btn"},[_c('NuxtLink',{staticClass:"btn--error btn--half lineHeight",attrs:{"to":"/login/home"}},[_vm._v("\n              예, 중단합니다.\n            ")]),_vm._v(" "),_c('button',{staticClass:"btn--accept btn--half",attrs:{"type":"button"},on:{"click":_vm.closeBtn}},[_vm._v("\n              돌아가기\n            ")])],1)])]),_vm._v(" "),_c('div',{staticClass:"modal__back",on:{"click":_vm.closeBtn}},[_vm._v("\n      배경\n    ")])])])}
var warningvue_type_template_id_2924cf56_staticRenderFns = []


// CONCATENATED MODULE: ./modal/warning.vue?vue&type=template&id=2924cf56&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./modal/warning.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var warningvue_type_script_lang_js_ = ({
  name: 'stopJoin',
  data: () => ({
    submitComplete: true
  }),
  methods: {
    // 모달창 닫기 버튼
    closeBtn() {
      this.$emit('close');
    }

  }
});
// CONCATENATED MODULE: ./modal/warning.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_warningvue_type_script_lang_js_ = (warningvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./modal/warning.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_warningvue_type_script_lang_js_,
  warningvue_type_template_id_2924cf56_render,
  warningvue_type_template_id_2924cf56_staticRenderFns,
  false,
  injectStyles,
  null,
  "2e45a7a0"
  
)

/* harmony default export */ var warning = (component.exports);
// EXTERNAL MODULE: ./modal/more.vue + 4 modules
var more = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./modal/email.vue?vue&type=template&id=603655dc&
var emailvue_type_template_id_603655dc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"submitModal"}},[_c('div',{staticClass:"modal"},[_c('div',{staticClass:"modal__layout modalSubmit modal--mid"},[_c('div',{staticClass:"modalSubmit__inner modal__inner"},[(_vm.topCloseBtn == true)?_c('button',{staticClass:"btn__close modal__close--form",attrs:{"type":"button"},on:{"click":_vm.closeBtn}},[_c('span',[_vm._v("닫기")])]):_vm._e(),_vm._v(" "),_c('img',{staticClass:"join__top--logo page__margin--small",attrs:{"src":__webpack_require__(77),"alt":"민트오션"}}),_vm._v(" "),_c('div',{staticClass:"page__margin--small"},[_c('h1',{staticClass:"modalSubmit__tit"},[_vm._v("\n            이메일 인증\n          ")])]),_vm._v(" "),_c('div',{staticClass:"modalSubmit__cont page__margin--midPlus"},[_c('div',{staticClass:"modalSubmit__cont--txt"},[_vm._v("\n              "+_vm._s(_vm.emailTxt)+"\n          ")])]),_vm._v(" "),(_vm.complete == true)?_c('div',{staticClass:"join__mid"},[_c('form',{staticClass:"join__writeBox formInfoLayout page__margin--mid",attrs:{"action":"","method":"post"},on:{"submit":function($event){$event.preventDefault();return _vm.checkForm.apply(null, arguments)}}},[_c('fieldset',[_c('div',{staticClass:"formInfoLayout__modal page__margin--small"},[_c('input',{attrs:{"type":"hidden","name":"xxxx","id":"xxxx","value":"xxxx"}}),_vm._v(" "),_c('legend',[_vm._v("이메일 인증")]),_vm._v(" "),_c('div',{staticClass:"formInfoLayout__input  page__margin--small"},[_c('div',{staticClass:"formInfoLayout__modal--input"},[_c('div',{staticClass:"formInfoLayout__write formInfoLayout__write--box"},[_c('input',{staticClass:"formInfoLayout__write page__color--lightGray",attrs:{"type":"email","name":"email","readonly":""},domProps:{"value":_vm.userEmail}})]),_vm._v(" "),_c('input',{staticClass:"btn--accept btn--modalConfirm",attrs:{"type":"button","disabled":_vm.SendBtn(),"value":_vm.btnName},on:{"click":function($event){return _vm.reSendBtn()}}})])]),_vm._v(" "),(_vm.sendEmail == true)?_c('div',{staticClass:"formInfoLayout__input"},[_c('span',{staticClass:"formInfoLayout__input--tit"},[_vm._v("인증번호")]),_vm._v(" "),_c('div',{staticClass:"formInfoLayout__write formInfoLayout__write--box"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.number),expression:"number"}],staticClass:"formInfoLayout__write icon",attrs:{"type":"text","name":"certificationNumber","maxlength":"6","disabled":_vm.AbleCertNum()},domProps:{"value":(_vm.number)},on:{"input":function($event){if($event.target.composing){ return; }_vm.number=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"formInfoLayout__write--inputBtn page__color--error"},[_vm._v("\n                    "+_vm._s(_vm.timerCount)+"\n                  ")])]),_vm._v(" "),(_vm.ableNum == false)?_c('span',{staticClass:"page__color--error  formInfoLayout__input--error"},[_vm._v("\n                  "+_vm._s(_vm.numTxt)+"\n                ")]):_vm._e()]):_vm._e()])]),_vm._v(" "),_c('fieldset',[_c('legend',[_vm._v("확인")]),_vm._v(" "),_c('div',{staticClass:"modalSubmit__btn modalSubmit__inner btn"},[_c('input',{staticClass:"modalSubmit__confirm btn--unAcceptLight btn--big page__margin--small",class:{accept: _vm.disabled == true},attrs:{"disabled":_vm.ableBtn(),"type":"submit","value":"확인"},on:{"click":_vm.checkForm}})])])])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"modal__back",on:{"click":_vm.closeBtn}},[_vm._v("\n      배경\n    ")])])])}
var emailvue_type_template_id_603655dc_staticRenderFns = []


// CONCATENATED MODULE: ./modal/email.vue?vue&type=template&id=603655dc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./modal/email.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var emailvue_type_script_lang_js_ = ({
  name: 'email',
  props: {
    userEmail: String
  },
  data: () => ({
    emailTxt: '회원가입을 위해서는 이메일 인증이 필요합니다.',
    // 메시지
    numTxt: '인증번호 유효기간이 만료되었습니다. 인증번호를 재전송해 주세요.',
    // 인증번호 에러 메시지
    complete: true,
    // 입력창 노출 여부
    timerCount: 30,
    // 카운트다운
    number: '',
    // 인증번호
    certifNum: true,
    // 인증번호 (임시 데이터)
    numActive: false,
    // 인증번호 입력 감지
    ableNum: true,
    // 인증번호 입력 조건
    sendEmail: false,
    // 이메일 전송 감지
    emailClear: false,
    // 이메일 지우기 버튼
    write: true,
    // 인풋아이콘 on  
    isFocused: false,
    // 인풋 자동입력
    btnName: '전송',
    // 전송 버튼 이름
    activeSend: false,
    // 전송 버튼 활성화
    disabled: null,
    // 폼 버튼 활성화
    timerCount: '15:00',
    // 타이머 시간
    topCloseBtn: true // 상단 닫기 버튼 노출

  }),
  methods: {
    // 인증번호 ============================================
    AbleCertNum() {
      this.number = this.number.replace(/[^-0-9]/g, '');
    },

    // 버튼 ============================================
    // 모달창 닫기 버튼
    closeBtn() {
      this.$emit('close');
    },

    // 전송 버튼
    SendBtn() {
      this.activeSend = true;
    },

    // 전송 버튼 활성화
    reSendBtn() {
      if (this.activeSend == true) {
        this.btnName = '재전송';
        this.sendEmail = true; // 디자인을 보기위한 임시 효과입니다.

        setTimeout(() => {
          this.timerCount = '00:00';
          this.ableNum = false;
          this.numTxt = '인증번호 유효기간이 만료되었습니다. 재전송해 주세요.';
        }, 2500);
      }

      if (this.ableNum == false) {
        this.ableNum = true;
        this.timerCount = '15:00';
        this.number = '';
        setTimeout(() => {
          this.timerCount = '00:00';
          this.ableNum = false;
        }, 2500);
      }
    },

    // 폼 버튼 활성화
    ableBtn() {
      // 글자 입력시 x버튼 on, off 
      if (this.number.length == 6 && this.ableNum == true) {
        this.disabled = true;
      } else {
        this.disabled = null;
      }
    },

    // 확인 버튼
    checkForm() {
      if (this.disabled == true) {
        if (this.certifNum == true) {
          this.topCloseBtn = false;
          this.emailTxt = '인증이 완료되었습니다.';
          this.complete = false;
          this.$emit('emailClose');
        } else {
          this.ableNum = true;
          this.numTxt = '인증번호가 틀렸습니다. 인증번호를 재전송해 주세요.';
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./modal/email.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_emailvue_type_script_lang_js_ = (emailvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./modal/email.vue



function email_injectStyles (context) {
  
  
}

/* normalize component */

var email_component = Object(componentNormalizer["a" /* default */])(
  modal_emailvue_type_script_lang_js_,
  emailvue_type_template_id_603655dc_render,
  emailvue_type_template_id_603655dc_staticRenderFns,
  false,
  email_injectStyles,
  null,
  "a01ba2c0"
  
)

/* harmony default export */ var email = (email_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/join/home.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'join',
  // layout: 'default',
  components: {
    WarningModal: warning,
    // 회원가입 중단 경고
    MoreModal: more["a" /* default */],
    // 전문보기
    ModalEmail: email // 이메일 인증

  },
  data: () => ({
    //모달
    modalInfo: {
      tit: '',
      text: '',
      btn: '',
      agree: ''
    },
    // 벨류
    nickname: '',
    // 닉네임
    email: '',
    // 이메일
    pass: '',
    // 비밀번호
    pwVerify: '',
    // 비밀번호 확인
    // 버튼
    nickClear: false,
    // 닉네임 지우기 버튼
    emailClear: false,
    // 이메일 지우기 버튼
    pwClear: false,
    // 비밀번호 지우기 버튼
    // 조건 검사
    disabled: false,
    // 폼 버튼 활성화
    sameNick: null,
    // 닉네임 중복 (임시 데이터)
    ableNick: null,
    // 닉네임 중복 검사
    ableEmail: null,
    // 이메일 입력 조건
    ablePw: null,
    // 비밀번호 입력 조건
    ablePwVerify: null,
    // 비밀번호 일치 검사
    // 이벤트
    nickActive: false,
    // 닉네임 입력 감지        
    emailActive: false,
    // 이메일 입력 감지        
    pwActive: false,
    // 비밀번호 입력 감지    
    passwordType: 'password',
    // 비밀번호 타입
    write: true,
    // 인풋아이콘 on
    password: true,
    // 비밀번호 아이콘 on
    passClear: false,
    // 비밀번호 아이콘 on
    secret: false,
    // 비밀번호 가리기 on off
    // 동의
    needCheck: false,
    // 필수 동의 체크 안 됐을 때
    error1: false,
    // 필수 동의 체크 안 됐을 때
    error2: false,
    // 필수 동의 체크 안 됐을 때    
    error3: false,
    // 필수 동의 체크 안 됐을 때    
    error4: false,
    // 필수 동의 체크 안 됐을 때    
    agree1: false,
    // 동의1
    agree2: false,
    // 동의2
    agree3: false,
    // 동의3
    agree4: false,
    // 동의4
    //모달
    warningModal: false,
    // 회원가입 취소 경고 모달
    moreModal: false,
    // 전문보기 모달
    emailModal: false // 이메일 인증 모달

  }),
  methods: {
    // 닉네임 ============================================
    // 포커스 온
    nickFocus() {
      // 형식에 안 맞을 경우 전부 리셋
      if (this.ableNick == false) {
        this.nickname = '';
        this.ableNick = null;
        this.nickClear = false;
      }
    },

    // 포커스 아웃
    nickBlur() {
      // 아무 글도 없을 경우 리셋
      if (this.nickname == '') {
        this.ableNick = null;
        this.nickClear = false;
      }
    },

    AbleNick() {
      // 형식 안 맞을 경우 에러
      let nickVal = this.nickname; // 벨류

      let returnNick = /[~!@\#$%<>^&*)]/; // 형식

      if (returnNick.test(nickVal) && nickVal != '') {
        this.ableNick = false;
      } // 글자 입력시 x버튼 on, off 


      if (!returnNick.test(nickVal) && this.nickname != '') {
        this.ableNick = true;
        this.nickClear = true;
      } // 아무 글도 없을 경우 리셋


      if (this.nickname != '') {
        this.nickActive = true;
      } else if (this.nickname == '') {
        this.ableNick = null;
        this.nickClear = false;
        this.nickActive = false;
      }
    },

    // 이메일 ============================================
    // 포커스 온
    emailFocus() {
      // 형식에 안 맞을 경우 전부 리셋
      if (this.ableEmail == false) {
        this.email = '';
        this.ableEmail = null;
        this.emailClear = false;
      }
    },

    // 포커스 아웃
    emailBlur() {
      let emVal = this.email; // 벨류

      let returnEmail = // 이메일 데이터 일치하는지
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      // 형식 안 맞을 경우 에러

      if (!returnEmail.test(emVal) && emVal != '') this.ableEmail = false;
    },

    // 폼 버튼 활성화
    AbleEmail() {
      let emVal = this.email; // 벨류

      let returnEmail = // 이메일 데이터 일치하는지
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      // 형식 안 맞을 경우 에러

      if (!returnEmail.test(emVal) && emVal != '') this.ableEmail = false; // 형식 맞으면 통과
      else if (returnEmail.test(emVal)) this.ableEmail = true; // 아무 글도 없을 경우 리셋
      else if (emVal == '') this.ableEmail = null; // 글자 입력시 x버튼 on, off 

      if (emVal != '') {
        this.emailClear = true;
        this.emailActive = true;
      } else {
        this.emailClear = false;
        this.emailActive = false;
      }
    },

    // 비밀번호 ============================================
    // 포커스 온
    passFocus() {
      // 형식에 안 맞을 경우 전부 리셋
      if (this.ablePw == false) {
        this.pass = '';
        this.ablePw = null;
        this.pwClear = false;
        this.pwActive = false;
      }
    },

    // 포커스 아웃
    passBlur() {
      // 아무 글도 없을 경우 리셋
      if (this.pass == '') this.ablePw = null;
    },

    AblePass() {
      let pwVal = this.pass; // 벨류

      let returnPass = // 문자, 숫자, 특수문자, 최소 8자리 조건
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
      let length = this.pass.length > 7; // 형식 맞으면 통과

      if (returnPass.test(pwVal)) this.ablePw = true; // 형식 안 맞을 경우 에러
      else if (!returnPass.test(pwVal) && pwVal != '') this.ablePw = false; // 글자 입력시 x버튼 on, off

      if (pwVal != '') {
        this.pwActive = true;
        this.pwClear = true;
        this.pwActive = true;
      } else {
        this.pwActive = false;
        this.pwClear = false;
        this.pwActive = false;
        this.ablePw = null;
      }
    },

    // 비밀번호 확인 ============================================
    // 포커스 온
    pwVerFocus() {
      if (this.ablePwVerify == false) {
        this.pwVerify = '';
        this.ablePwVerify = null;
      }
    },

    // 포커스 아웃
    AblePassVer() {
      let password = this.pass.valueOf(); // 비밀번호 벨류 가져오기

      let passVer = this.pwVerify.valueOf(); // 비밀번호 확인 벨류 가져오기

      let pwVerBlank = this.pass != ''; // 비밀번호 입력 여부

      let pwBlank = this.pwVerify != ''; // 비밀번호 확인 입력 여부
      // 비밀번호가 일치하는 경우

      if (password == passVer && pwVerBlank && pwBlank) {
        this.ablePwVerify = true;
      } // 비밀번호가 일치하지 않는 경우
      else if (password != passVer && pwVerBlank && pwBlank) {
        this.ablePwVerify = false;
      }
    },

    // 버튼 ============================================
    // 닉네임 리셋
    clearNick() {
      this.nickname = ''; // 벨류

      this.ableNick = null; // 입력 조건

      this.nickClear = false; // 지우기 버튼
    },

    // 이메일 리셋
    clearEmail() {
      this.email = ''; // 벨류

      this.ableEmail = null; // 입력 조건

      this.emailClear = false; // 지우기 버튼
    },

    // 비밀번호 리셋
    clearPassword() {
      this.pass = ''; // 비밀번호 벨류

      this.pwVerify = ''; // 비밀번호 확인 벨류

      this.ablePw = null; // 비밀번호 조건

      this.pwClear = false; // 비밀번호 지우기 버튼

      this.ablePwVerify = null; // 비밀번호 일치 검사
    },

    // 비밀번호 시크릿
    secretToggle() {
      if (this.secret == true) {
        this.secret = false;
        this.passwordType = 'password';
      } else {
        this.secret = true;
        this.passwordType = 'text';
      }
    },

    // 모달 전문보기
    useService() {
      this.modalInfo.tit = '서비스 이용동의';
      this.modalInfo.text = '회원가입 서비스 모달입니다.';
      this.modalInfo.btn = '동의';
      this.modalInfo.agree = 'agree1';
      this.moreModal = true;
    },

    service() {
      this.modalInfo.tit = '서비스 이용약관 동의';
      this.modalInfo.text = '회원가입 서비스 이용약관 모달입니다.';
      this.modalInfo.btn = '동의';
      this.modalInfo.agree = 'agree2';
      this.moreModal = true;
    },

    privacy() {
      this.modalInfo.tit = '개인정보 처리방침 동의';
      this.modalInfo.text = '회원가입 개인정보 처리방침 모달입니다.';
      this.modalInfo.btn = '동의';
      this.modalInfo.agree = 'agree3';
      this.moreModal = true;
    },

    marketing() {
      this.modalInfo.tit = '마케팅 정보이용 동의';
      this.modalInfo.text = '회원가입 마케팅 정보이용 모달입니다.';
      this.modalInfo.btn = '동의';
      this.modalInfo.agree = 'agree4';
      this.moreModal = true;
    },

    // 동의 ============================================
    // 전체동의 체크
    allCheck() {
      this.checkAll = this.checkAll ? false : true;
      this.agree1 = this.checkAll;
      this.agree2 = this.checkAll;
      this.agree3 = this.checkAll;
      this.agree4 = this.checkAll;
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

    checked3() {
      this.agree3 = true;
      this.moreModal = false;
    },

    checked4() {
      this.agree4 = true;
      this.moreModal = false;
    },

    // 모달창 끄기
    closeModal() {
      this.moreModal = false; // 전문보기 모달 닫기

      this.warningModal = false; // 알림 모달 끄기

      this.emailModal = false;
    },

    // 이메일 모달창 끄기
    emailClose() {
      setTimeout(() => {
        this.emailModal = false;
      }, 1200);
    },

    // 폼 버튼 활성화
    ableBtn() {
      let Nick = this.ableNick == true;
      let Email = this.ableEmail == true;
      let Pw = this.ablePw == true;
      let PwVerify = this.ablePwVerify == true;
      let Agree1 = this.agree1 == true;
      let Agree2 = this.agree2 == true;
      let Agree3 = this.agree3 == true;
      if (Nick && Email && Pw && PwVerify && Agree1 && Agree2 && Agree3) this.disabled = true;else this.disabled = false;
    },

    // 폼 버튼 활성화 될 경우 클릭 이벤트
    checkForm() {
      // 이메일 인증 모달 켜기
      if (this.disabled == true) {
        this.emailModal = true;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/join/home.vue?vue&type=script&lang=js&
 /* harmony default export */ var join_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/join/home.vue





/* normalize component */

var home_component = Object(componentNormalizer["a" /* default */])(
  join_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "67a4dc7f"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (home_component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTEwIDBDNC40NyAwIDAgNC40NyAwIDEwQzAgMTUuNTMgNC40NyAyMCAxMCAyMEMxNS41MyAyMCAyMCAxNS41MyAyMCAxMEMyMCA0LjQ3IDE1LjUzIDAgMTAgMFpNMTQuMyAxNC4zQzEzLjkxIDE0LjY5IDEzLjI4IDE0LjY5IDEyLjg5IDE0LjNMMTAgMTEuNDFMNy4xMSAxNC4zQzYuNzIgMTQuNjkgNi4wOSAxNC42OSA1LjcgMTQuM0M1LjMxIDEzLjkxIDUuMzEgMTMuMjggNS43IDEyLjg5TDguNTkgMTBMNS43IDcuMTFDNS4zMSA2LjcyIDUuMzEgNi4wOSA1LjcgNS43QzYuMDkgNS4zMSA2LjcyIDUuMzEgNy4xMSA1LjdMMTAgOC41OUwxMi44OSA1LjdDMTMuMjggNS4zMSAxMy45MSA1LjMxIDE0LjMgNS43QzE0LjY5IDYuMDkgMTQuNjkgNi43MiAxNC4zIDcuMTFMMTEuNDEgMTBMMTQuMyAxMi44OUMxNC42OCAxMy4yNyAxNC42OCAxMy45MSAxNC4zIDE0LjNaIiBmaWxsPSIjOTk5OTk5Ii8+Cjwvc3ZnPgo="

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

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxNSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIyIDE1Ij4KICA8cGF0aCBmaWxsPSIjOTk5IiBkPSJNMTEgMEM2IDAgMS43MyAzLjExIDAgNy41IDEuNzMgMTEuODkgNiAxNSAxMSAxNXM5LjI3LTMuMTEgMTEtNy41QzIwLjI3IDMuMTEgMTYgMCAxMSAwem0wIDEyLjVjLTIuNzYgMC01LTIuMjQtNS01czIuMjQtNSA1LTUgNSAyLjI0IDUgNS0yLjI0IDUtNSA1em0wLThjLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDMgMy0xLjM0IDMtMy0xLjM0LTMtMy0zeiIvPgo8L3N2Zz4K"

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIyIDIwIj4KICA8cGF0aCBmaWxsPSIjOTk5IiBkPSJNMTEgNC41YzIuNzYgMCA1IDIuMjQgNSA1IDAgLjUxLS4xIDEtLjI0IDEuNDZsMy4wNiAzLjA2YzEuMzktMS4yMyAyLjQ5LTIuNzcgMy4xOC00LjUzQzIwLjI3IDUuMTEgMTYgMiAxMSAyYy0xLjI3IDAtMi40OS4yLTMuNjQuNTdsMi4xNyAyLjE3Yy40Ny0uMTQuOTYtLjI0IDEuNDctLjI0Wk0xLjcxIDEuMTZhLjk5Ni45OTYgMCAwIDAgMCAxLjQxbDEuOTcgMS45N0ExMS44OTIgMTEuODkyIDAgMCAwIDAgOS41QzEuNzMgMTMuODkgNiAxNyAxMSAxN2MxLjUyIDAgMi45Ny0uMyA0LjMxLS44MmwyLjcyIDIuNzJhLjk5Ni45OTYgMCAxIDAgMS40MS0xLjQxTDMuMTMgMS4xNmMtLjM5LS4zOS0xLjAzLS4zOS0xLjQyIDBaTTExIDE0LjVjLTIuNzYgMC01LTIuMjQtNS01IDAtLjc3LjE4LTEuNS40OS0yLjE0bDEuNTcgMS41N2MtLjAzLjE4LS4wNi4zNy0uMDYuNTcgMCAxLjY2IDEuMzQgMyAzIDMgLjIgMCAuMzgtLjAzLjU3LS4wN0wxMy4xNCAxNGMtLjY1LjMyLTEuMzcuNS0yLjE0LjVabTIuOTctNS4zM2EyLjk3IDIuOTcgMCAwIDAtMi42NC0yLjY0bDIuNjQgMi42NFoiLz4KPC9zdmc+Cg=="

/***/ })

};;
//# sourceMappingURL=home.js.map