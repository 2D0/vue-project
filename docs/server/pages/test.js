exports.ids = [43];
exports.modules = {

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=template&id=098c74f1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"myPage page container__inner--mid container__inner--padding"},[_vm._ssrNode("<div class=\"myPage__info page__margin--big\">","</div>",[_vm._ssrNode("<div class=\"myPage__badgeBox page__margin--mid\">","</div>",[_vm._ssrNode("<div class=\"myPage__badgeBox--inner page__shadow\" style=\"background:none; box-shadow:none\">","</div>",[_c('Hooper',{staticClass:"myPage__badge",attrs:{"settings":_vm.hooperSetting}},[_c('Slide',{staticClass:"myPage__badge--inner"},[_c('ul',{staticClass:"myPage__badgeList"},_vm._l((_vm.badgeList),function(badge,idx){return _c('li',{key:idx,on:{"click":function($event){return _vm.selectBadge(idx, $event)}}},[_c('p',{staticClass:"myPage__badge--img",staticStyle:{"background":"#ddd"}},[_c('img',{attrs:{"src":badge.img,"alt":badge.name}}),_vm._v(" "),_c('span',{staticClass:"myPage__badge--count"},[_vm._v("\n                    "+_vm._s(_vm.count)+"\n                  ")])])])}),0)]),_vm._v(" "),_c('HooperNavigation',{staticClass:"myPage__badge--nav",attrs:{"slot":"hooper-addons"},slot:"hooper-addons"})],1)],1)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/test.vue?vue&type=template&id=098c74f1&

// EXTERNAL MODULE: external "hooper"
var external_hooper_ = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/hooper/dist/hooper.css
var hooper = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var testvue_type_script_lang_js_ = ({
  name: 'profileEdit',
  // layout: 'default',
  components: {
    Hooper: external_hooper_["Hooper"],
    Slide: external_hooper_["Slide"],
    HooperNavigation: external_hooper_["Navigation"]
  },
  data: () => ({
    profilePhotoOn: false,
    select: false,
    count: 1,
    selectIdx: 0,
    badgeList: [{
      img: '~assets/img/test/test-card8.png',
      name: '새싹',
      idx: 0
    }, {
      img: '~assets/img/test/test-card8.png',
      name: '꽃',
      idx: 1
    }, {
      img: '~assets/img/test/test-card8.png',
      name: '저울',
      idx: 2
    }, {
      img: '~assets/img/test/test-card8.png',
      name: '저울',
      idx: 3
    }, {
      img: '~assets/img/test/test-card8.png',
      name: '저울',
      idx: 4
    }, {
      img: '~assets/img/test/test-card8.png',
      name: '저울',
      idx: 5
    }, {
      img: '~assets/img/test/test-card8.png',
      name: '저울',
      idx: 6
    }, {
      img: '~assets/img/test/test-card8.png',
      name: '저울',
      idx: 7
    }],
    hooperSetting: {
      itemsToShow: 1
    }
  }),
  methods: {
    selectBadge(idx, event) {
      let activeClass = event.target.classList.contains('active');

      if (!activeClass) {
        this.count++;

        if (this.count < 4) {
          event.target.classList.add('active');
        }
      } else if (activeClass) {
        this.count--;

        if (this.count < 4) {
          event.target.classList.remove('active');
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/test.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ccdd51f2"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("1fbb21b2", content, true)

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hooper-slide{flex-shrink:0;height:100%;margin:0;padding:0;list-style:none}.hooper-progress{position:absolute;top:0;right:0;left:0;height:4px;background-color:#efefef}.hooper-progress-inner{height:100%;background-color:#4285f4;transition:.3s}.hooper-pagination{position:absolute;bottom:0;right:50%;transform:translateX(50%);display:flex;padding:5px 10px}.hooper-indicators{display:flex;list-style:none;margin:0;padding:0}.hooper-indicator.is-active,.hooper-indicator:hover{background-color:#4285f4}.hooper-indicator{margin:0 2px;width:12px;height:4px;border-radius:4px;border:none;padding:0;background-color:#fff;cursor:pointer}.hooper-pagination.is-vertical{bottom:auto;right:0;top:50%;transform:translateY(-50%)}.hooper-pagination.is-vertical .hooper-indicators{flex-direction:column}.hooper-pagination.is-vertical .hooper-indicator{width:6px}.hooper-next,.hooper-prev{background-color:transparent;border:none;padding:1em;position:absolute;top:50%;transform:translateY(-50%);cursor:pointer}.hooper-next.is-disabled,.hooper-prev.is-disabled{opacity:.3;cursor:not-allowed}.hooper-next{right:0}.hooper-prev{left:0}.hooper-navigation.is-vertical .hooper-next{top:auto;bottom:0;transform:none}.hooper-navigation.is-vertical .hooper-prev{top:0;bottom:auto;right:0;left:auto;transform:none}.hooper-navigation.is-rtl .hooper-prev{left:auto;right:0}.hooper-navigation.is-rtl .hooper-next{right:auto;left:0}.hooper{position:relative;width:100%;height:200px}.hooper,.hooper *{box-sizing:border-box}.hooper-list{overflow:hidden;width:100%;height:100%}.hooper-track{display:flex;box-sizing:border-box;width:100%;height:100%;padding:0;margin:0}.hooper.is-vertical .hooper-track{flex-direction:column;height:200px}.hooper.is-rtl{direction:rtl}.hooper-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=test.js.map