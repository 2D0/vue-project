exports.ids = [7];
exports.modules = {

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/main-bn-mini1.3b330d5.png";

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/main-bn-mini2.f1b5d11.png";

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/main-bn-mini3.6577625.png";

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home.vue?vue&type=template&id=ce710cb8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main container__inner--main"},[_vm._ssrNode("<div class=\"main__slider slide__slider\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"main__slide--inner\">","</div>",[_c('Hooper',{staticClass:"main__slide--left",attrs:{"settings":_vm.hooperSetTop}},[_vm._l((_vm.slide),function(item,idx){return _c('Slide',{key:idx,class:("idx" + (item.class))},[_c('div',{staticClass:"main__slide--box"},[_c('NuxtLink',{staticClass:"main__slide--img page__img",class:("back" + (idx + 1)),attrs:{"to":item.moreUrl}},[_c('img',{attrs:{"src":item.img,"alt":item.name}})]),_vm._v(" "),_c('p',{staticClass:"main__slide--txt"},[_vm._v(_vm._s(item.txt))])],1)])}),_vm._v(" "),_c('HooperNavigation',{staticClass:"slide__btn",attrs:{"slot":"hooper-addons"},slot:"hooper-addons"},[_c('span',{staticClass:"slide__arrow slide__arrow--left",attrs:{"slot":"hooper-prev"},slot:"hooper-prev"},[_c('i',{staticClass:"slide__arrow--top"}),_vm._v(" "),_c('i',{staticClass:"slide__arrow--bottom"})]),_vm._v(" "),_c('span',{staticClass:"slide__arrow slide__arrow--right",attrs:{"slot":"hooper-next"},slot:"hooper-next"},[_c('i',{staticClass:"slide__arrow--top"}),_vm._v(" "),_c('i',{staticClass:"slide__arrow--bottom"})])])],2),_vm._ssrNode(" <div class=\"main__slide--right\"><div class=\"main__slide--comment\"><p>\n              민트 오션과 함께하는 NFT 수집\n            </p> <p>\n              내가 좋아하는 <span>유튜버</span></p></div> <div class=\"main__slide--round\">\n            오직 민트 오션만이 제공하는 차별화된 서비스\n          </div></div> "),_c('client-only',[_c('VueTyper',{staticClass:"vue-typer",attrs:{"repeat":"Infinity","shuffle":true,"erase-style":"backspace","pre-erase-delay":2000,"erase-delay":25,"caret-animation":"expand","text":[
              'test1',
              'test2',
              'test3' ]}})],1)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<article class=\"main__squareItem main__cont container__inner--max\">","</article>",[_vm._ssrNode("<h2>RECOMMEND ITEM</h2> "),_vm._ssrNode("<div class=\"main__squareItem--recommendBack\">","</div>",[_vm._ssrNode("<ul class=\"main__squareItem--recommend main__squareItem--list\">","</ul>",_vm._l((_vm.recommend.slice(0, 9)),function(item,idx){return _vm._ssrNode("<li class=\"main__squareItem--item\">","</li>",[_c('NuxtLink',{staticClass:"page__img",attrs:{"to":("/marketPlace/detail" + (item.url))}},[_c('img',{attrs:{"src":item.img,"alt":item.name}}),_vm._v(" "),_c('span',{staticClass:"main__squareItem--info hover"},[_c('i',{staticClass:"main__squareItem--name page__split"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('i',{staticClass:"main__squareItem--user page__split"},[_vm._v(_vm._s(item.user))])])])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<article class=\"main__tabItem\">","</article>",[_vm._ssrNode("<div class=\"container__inner--max\">","</div>",[_vm._ssrNode("<div class=\"main__tabItem--tab\"><ul class=\"main__tabItem--tit\"><li><span>\n              NOTABLE ARTIST\n            </span></li></ul></div> "),_vm._ssrNode("<div class=\"main__tabItem--item\">","</div>",[_c('Hooper',{attrs:{"settings":_vm.hooperSetting}},[_vm._l((_vm.card1.slice(0, 9)),function(itemCard,idx){return _c('Slide',{key:idx},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card__inner"},[_c('div',{staticClass:"card__topImg"},[_c('NuxtLink',{staticClass:"card__imgLink page__img page",attrs:{"to":"marketPlace/detail"}},[_c('img',{attrs:{"src":itemCard.itemImgUrl,"alt":itemCard.itemName}})]),_vm._v(" "),_c('span',{staticClass:"card__topImg--icon"},[(itemCard.kinds == 'photo')?_c('img',{attrs:{"src":__webpack_require__(68),"alt":"사진"}}):(itemCard.kinds == 'video')?_c('img',{attrs:{"src":__webpack_require__(69),"alt":"영상"}}):(itemCard.kinds == 'music')?_c('img',{attrs:{"src":__webpack_require__(70),"alt":"음악"}}):_vm._e()]),_vm._v(" "),_c('NuxtLink',{staticClass:"main__card--info",attrs:{"to":"marketPlace/detail"}},[_c('p',{staticClass:"card__name page__split page__shadowTxt"},[_vm._v("\n                        "+_vm._s(itemCard.itemName)+"\n                      ")])]),_vm._v(" "),_c('NuxtLink',{staticClass:"card__user",attrs:{"to":"/myPage/userItem/home"}},[_c('p',{staticClass:"card__userImg page__img page__shadowThin"},[_c('img',{attrs:{"src":itemCard.userImgUrl,"alt":itemCard.userName}})]),_vm._v(" "),_c('p',{staticClass:"card__userName"},[_vm._v("\n                        "+_vm._s(itemCard.userName)+"\n                      ")])]),_vm._v(" "),_c('span',{staticClass:"card__info",attrs:{"to":"/marketPlace/detail"}},[_c('p',{staticClass:"card__price"},[_vm._v("\n                        "+_vm._s(itemCard.itemPrice)+"\n                        "),_c('span',[_vm._v("KRW")])])])],1)]),_vm._v(" "),_c('NuxtLink',{staticClass:"card__back",attrs:{"to":"marketPlace/detail"}})],1)])}),_vm._v(" "),_c('HooperNavigation',{staticClass:"slide__btn",attrs:{"slot":"hooper-addons"},slot:"hooper-addons"},[_c('span',{staticClass:"slide__arrow slide__arrow--left",attrs:{"slot":"hooper-prev"},slot:"hooper-prev"},[_c('i',{staticClass:"slide__arrow--top"}),_vm._v(" "),_c('i',{staticClass:"slide__arrow--bottom"})]),_vm._v(" "),_c('span',{staticClass:"slide__arrow slide__arrow--right",attrs:{"slot":"hooper-next"},slot:"hooper-next"},[_c('i',{staticClass:"slide__arrow--top"}),_vm._v(" "),_c('i',{staticClass:"slide__arrow--bottom"})])])],2)],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<article class=\"main__squareItem--items main__squareItem main__cont container__inner--max\">","</article>",[_vm._ssrNode("<div class=\"main__squareItem--itemBack\">","</div>",[_vm._ssrNode("<div class=\"main__squareItem--item\">","</div>",[_c('NuxtLink',{staticClass:"page__img",attrs:{"to":("/marketPlace/detail" + (_vm.itemBox.big.url))}},[_c('img',{attrs:{"src":_vm.itemBox.big.img,"alt":_vm.itemBox.big.name}}),_vm._v(" "),_c('span',{staticClass:"main__squareItem--big main__squareItem--info hover"},[_c('i',{staticClass:"main__squareItem--name page__split"},[_vm._v(_vm._s(_vm.itemBox.big.name))]),_vm._v(" "),_c('i',{staticClass:"main__squareItem--user page__split"},[_vm._v(_vm._s(_vm.itemBox.big.user))])])])],1),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"main__squareItem--box main__squareItem--list\">","</ul>",_vm._l((_vm.itemBox.items.slice(0, 4)),function(item,idx){return _vm._ssrNode("<li class=\"main__squareItem--item\">","</li>",[_c('NuxtLink',{staticClass:"page__img",attrs:{"to":("/marketPlace/detail" + (item.url))}},[_c('img',{attrs:{"src":item.img,"alt":item.name}}),_vm._v(" "),_c('span',{staticClass:"main__squareItem--info hover"},[_c('i',{staticClass:"main__squareItem--name page__split"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('i',{staticClass:"main__squareItem--user page__split"},[_vm._v(_vm._s(item.user))])])])],1)}),0)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<article class=\"main__btmBanner\">","</article>",[_c('NuxtLink',{attrs:{"to":"/marketPlace/list"}},[_c('span',{staticClass:"main__btmBanner--inner container__inner--max"},[_c('i',{staticClass:"main__btmBanner--txt"},[_vm._v("오직 민트오션에서만 만날 수 있는"),_c('br'),_vm._v(" 나만의 특별한 NFT")]),_vm._v(" "),_c('i',{staticClass:"main__btmBanner--btn"},[_vm._v("더 많은 작품 보러 가기")])])])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home.vue?vue&type=template&id=ce710cb8&

// EXTERNAL MODULE: external "hooper"
var external_hooper_ = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/hooper/dist/hooper.css
var hooper = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //import VueTyper from '@/blockComponents/VueTyper';
//import {VueTyper} from 'vue-typer';

/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'home',
  components: {
    Hooper: external_hooper_["Hooper"],
    Slide: external_hooper_["Slide"],
    HooperPagination: external_hooper_["Pagination"],
    HooperNavigation: external_hooper_["Navigation"]
  },
  data: () => ({
    topSlideId: 0,
    // 탑 슬라이드 id 초기값
    back: false,
    // 메인 슬라이더 슬라이드 옵션
    hooperSetTop: {
      // group        : 'group1',
      // autoPlay     : true,    // 슬라이드 자동 넘김
      playSpeed: 4000,
      // 슬라이드 속도
      transition: 800,
      // 슬라이드 전환 속도
      infiniteScroll: true,
      // 무한 스크롤 모드
      wheelControl: false,
      // 스크롤 슬라이드 넘김 방지
      hoverPause: true // 호버시 슬라이드 멈춤

    },
    // 메인 슬라이더
    slide: [{
      id: 1,
      name: 'nft 풍선',
      img: __webpack_require__(120),
      txt: '풍선 터지듯 사라지는 일회성 덕질은 그만!',
      class: '1',
      moreUrl: '#'
    }, {
      id: 2,
      name: 'nft 설명',
      img: __webpack_require__(121),
      txt: '이것만 보면 당신도 NFT 마스터!',
      class: '2',
      moreUrl: '#',
      fontColor: 'black'
    }, {
      id: 3,
      name: 'nft 거래소',
      img: __webpack_require__(122),
      txt: '세계 최초 수수료 0% NFT 거래소',
      class: '3',
      moreUrl: '#',
      fontColor: 'black'
    }],
    // 추천 컨텐츠
    recommend: [{
      name: '미로인간을 탐험하자',
      user: '미궁',
      img: __webpack_require__(66),
      url: ''
    }, {
      name: '천공의 성 라퓨타',
      user: '퍼플',
      img: __webpack_require__(65),
      url: ''
    }, {
      name: 'HAKAI.PT2_S " Canvas Print HAKAI.PT2_S " Canvas Print HAKAI.PT2_S " Canvas Print',
      user: 'GHARLIERAGHARLIERAGHARLIERA',
      img: __webpack_require__(67),
      url: ''
    }, {
      name: 'HAKAI.PT2_S " Canvas Print',
      user: 'GHARLIERA',
      img: __webpack_require__(62),
      url: ''
    }, {
      name: '청소시간은 즐거워 언제나 깨끗하게 청결하게 청소를 합시다.',
      user: '신나는 청소시간',
      img: __webpack_require__(60),
      url: ''
    }, {
      name: '비오는 날이면 외롭고 쓸쓸한 마음',
      user: '빨래',
      img: __webpack_require__(61),
      url: ''
    }, {
      name: 'HAKAI.PT2_S " Canvas Print',
      user: 'GHARLIERA',
      img: __webpack_require__(63),
      url: ''
    }, {
      name: 'HAKAI.PT2_S " Canvas Print',
      user: 'GHARLIERA',
      img: __webpack_require__(64),
      url: ''
    }, {
      name: 'HAKAI.PT2_S " Canvas Print',
      user: 'GHARLIERA',
      img: __webpack_require__(65),
      url: ''
    }, {
      name: 'HAKAI.PT2_S " Canvas Print',
      user: 'GHARLIERA',
      img: __webpack_require__(65),
      url: ''
    }],
    // 탭메뉴 아이템
    card1: [{
      itemName: 'Santa claus appears',
      userName: 'ProdLowell',
      itemPrice: '60,142',
      itemTime: '01D:13:47:30',
      itemImgUrl: __webpack_require__(61),
      userImgUrl: __webpack_require__(63),
      itemState: '진행중',
      kinds: 'video'
    }, {
      itemName: '닿을 수 없는 우리',
      userName: 'LowellStraight',
      itemPrice: '50,000',
      itemTime: '03D:11:49:30',
      itemImgUrl: __webpack_require__(78),
      userImgUrl: __webpack_require__(64),
      itemState: '종료임박',
      kinds: 'video'
    }, {
      itemName: 'Rockefeller street',
      userName: 'LW1273',
      itemPrice: '100,000',
      itemTime: '2022.04.02 PM.12:00',
      itemImgUrl: __webpack_require__(65),
      userImgUrl: __webpack_require__(66),
      itemState: '진행예정',
      kinds: 'music'
    }, {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: 'GHARLIERAGHARLIERA',
      itemPrice: '60,142',
      itemTime: '01D:13:47:30',
      itemImgUrl: __webpack_require__(67),
      userImgUrl: __webpack_require__(61),
      itemState: '진행중',
      kinds: 'photo'
    }, {
      itemName: 'PT2_SGHARLIERAGHARLIERA HAKAI.PT2_SGHARLIERAGHARLIERA Rockefeller street',
      userName: 'G1241',
      itemPrice: '50,000',
      itemTime: '03D:11:49:30',
      itemImgUrl: __webpack_require__(61),
      userImgUrl: __webpack_require__(67),
      itemState: '종료임박',
      kinds: 'video'
    }, {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: '무야호',
      itemPrice: '100,000',
      itemTime: '2022.04.02 PM.12:00',
      itemImgUrl: __webpack_require__(62),
      userImgUrl: __webpack_require__(61),
      itemState: '진행예정',
      kinds: 'music'
    }, {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: '애플마우스',
      itemPrice: '1,000,000',
      itemTime: '00D:03:00:30',
      itemImgUrl: __webpack_require__(64),
      userImgUrl: __webpack_require__(67),
      itemState: '진행중',
      kinds: 'video'
    }, {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: 'GHARLIERA',
      itemPrice: '1,000,000',
      itemTime: '00D:03:00:30',
      itemImgUrl: __webpack_require__(65),
      userImgUrl: __webpack_require__(60),
      itemState: '진행중',
      kinds: 'music'
    }, {
      itemName: 'HAKAI.PT2_S Canvas Print',
      userName: 'GHARLIERA',
      itemPrice: '60,142',
      itemTime: '01D:13:47:30',
      itemImgUrl: __webpack_require__(60),
      userImgUrl: __webpack_require__(63),
      itemState: '진행중',
      kinds: 'music'
    }, {
      itemName: 'HAKAI.PT2_S',
      userName: 'GHARLIERA',
      itemPrice: '50,000',
      itemTime: '03D:11:49:30',
      itemImgUrl: __webpack_require__(66),
      userImgUrl: __webpack_require__(64),
      itemState: '종료임박',
      kinds: 'music'
    }, {
      itemName: '짱 멋있는 최고의 재미있는 그런 짱 멋있는 최고의 재미있는 그런',
      userName: 'GHARLIERA',
      itemPrice: '100,000',
      itemTime: '2022.04.02 PM.12:00',
      itemImgUrl: __webpack_require__(62),
      userImgUrl: __webpack_require__(61),
      itemState: '진행예정',
      kinds: 'photo'
    }],
    // 탭 아이템 슬라이드 옵션
    hooperSetting: {
      itemsToShow: 2,
      // 슬라이드 보이는 개수
      centerMode: true,
      // 센터 모드
      //autoPlay        : true,    // 슬라이드 자동 넘김
      playSpeed: 4000,
      // 슬라이드 속도
      infiniteScroll: true,
      // 무한 스크롤 모드
      wheelControl: false,
      // 스크롤 슬라이드 넘김 방지
      hoverPause: true,
      // 호버시 슬라이드 멈춤
      breakpoints: {
        // 슬라이더 반응형 700px
        700: {
          itemsToShow: 3,
          centerMode: false // 센터 모드

        },
        // 슬라이더 반응형 969px
        969: {
          itemsToShow: 3,
          // 슬라이드 보이는 개수
          centerMode: false // 센터 모드

        }
      }
    },
    // 추천 컨텐츠
    itemBox: {
      big: {
        name: 'HAKAI.PT2_S " Canvas Print',
        user: 'GHARLIERA',
        img: __webpack_require__(78),
        url: ''
      },
      items: [{
        name: '미로인간을 탐험하자',
        user: '미궁',
        img: __webpack_require__(88),
        url: ''
      }, {
        name: '천공의 성 라퓨타',
        user: '퍼플',
        img: __webpack_require__(97),
        url: ''
      }, {
        name: 'HAKAI.PT2_S " Canvas Print HAKAI.PT2_S " Canvas Print HAKAI.PT2_S " Canvas Print',
        user: 'GHARLIERAGHARLIERAGHARLIERA',
        img: __webpack_require__(98),
        url: ''
      }, {
        name: 'HAKAI.PT2_S " Canvas Print',
        user: 'GHARLIERA',
        img: __webpack_require__(99),
        url: ''
      }, {
        name: '청소시간은 즐거워 언제나 깨끗하게 청결하게 청소를 합시다.',
        user: '신나는 청소시간',
        img: __webpack_require__(60),
        url: ''
      }, {
        name: '비오는 날이면 외롭고 쓸쓸한 마음',
        user: '빨래',
        img: __webpack_require__(61),
        url: ''
      }]
    }
  }),

  mounted() {
    /* if (process.client) {
    // your JS code here like >> jsPlumb.ready(function () {})
      VueTyper
    } */
  },

  methods: {
    changeBack() {
      //console.log(document.querySelector('idx1').classList.contains('is-active'))
      //document.getElementsByClassName('idx1').classList.contains('is-active')
      let idx1 = document.getElementsByClassName('idx1');

      if (idx1.hasClass('is-active')) {
        alert('성공');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/home.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7e1dce58"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

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

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card2.4521b9b.png";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card5.06dfbb1.png";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico-card-picture.49aa3bb.svg";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico-card-video.ad2e189.svg";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico-card-music.23b4a16.svg";

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


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card9.55411dd.png";

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card10.dfc8e81.png";

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card11.39c04d3.png";

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card12.3e707cc.png";

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test-card13.b34a421.png";

/***/ })

};;
//# sourceMappingURL=home.js.map