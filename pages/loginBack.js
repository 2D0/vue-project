exports.ids = [16];
exports.modules = {

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/loginBack.vue?vue&type=template&id=0b8d3c55&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h1 data-v-0b8d3c55>로그인</h1> "),_c('v-form',[_c('div',{attrs:{"label":"이메일"},on:{"keypress":_vm.enterCheck},model:{value:(_vm.formData.email),callback:function ($$v) {_vm.$set(_vm.formData, "email", $$v)},expression:"formData.email"}}),_vm._v(" "),_c('div',{attrs:{"label":"비밀번호","type":"password"},on:{"keypress":_vm.enterCheck},model:{value:(_vm.formData.password),callback:function ($$v) {_vm.$set(_vm.formData, "password", $$v)},expression:"formData.password"}}),_vm._v(" "),_c('button',{staticClass:"primary",on:{"click":_vm.login}},[_vm._v("로그인")])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/loginBack.vue?vue&type=template&id=0b8d3c55&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/loginBack.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loginBackvue_type_script_lang_js_ = ({
  layout: 'default',
  name: "login.vue",
  middleware: 'auth',
  auth: 'guest',
  data: () => ({
    formData: {
      email: '',
      password: ''
    }
  }),
  methods: {
    async login() {
      if (this.formData.email === '' || this.formData.password === '') return;

      try {
        await this.$auth.loginWith('local', {
          data: this.formData
        });
        this.$snackbar.show('환영합니다, ' + this.$auth.user.nickname + '님!');
        this.$router.back();
      } catch (e) {
        this.$snackbar.show(e.response.data);
      }
    },

    enterCheck(e) {
      if (e.keyCode === 13) this.login();
    }

  }
});
// CONCATENATED MODULE: ./pages/loginBack.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginBackvue_type_script_lang_js_ = (loginBackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/loginBack.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginBackvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0b8d3c55",
  "7189cfcb"
  
)

/* harmony default export */ var loginBack = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=loginBack.js.map