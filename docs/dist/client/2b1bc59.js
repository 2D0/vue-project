(window.webpackJsonp=window.webpackJsonp||[]).push([[34,42],{302:function(t,e,n){"use strict";n.r(e);var _={name:"sideMenu",data:function(){return{menuNames:[{name:"공지사항",url:"/support/board/notice",new:!0},{name:"민트오션 소식",url:"/support/board/news",new:!0},{name:"수수료 안내",url:"/support/search/detail",new:!1},{name:"자주하는 질문",url:"/support/search/home",new:!1},{name:"1:1문의",url:"/support/board/qna",new:!1}]}},methods:{}},r=n(22),component=Object(r.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sideMenu"},[n("h2",{staticClass:"sideMenu__top"},[t._v("고객센터")]),t._v(" "),n("ul",{staticClass:"sideMenu__inner"},t._l(t.menuNames,(function(menu,e){return n("li",{key:e,staticClass:"sideMenu__tit"},[n("NuxtLink",{attrs:{to:menu.url}},[1==menu.new?n("span",{staticClass:"sideMenu__tit--icon page__icon--new"},[t._v("N")]):t._e(),t._v(" "),n("span",{staticClass:"sideMenu__tit--inner"},[t._v("\n          "+t._s(menu.name)+"\n          ")])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){"use strict";n.r(e);var _=[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"support__top"},[_("div",{staticClass:"page__search"},[_("div",{staticClass:"page__search--inner page__search--inner"},[_("input",{attrs:{type:"text",placeholder:"검색어를 입력해주세요."}}),t._v(" "),_("button",{attrs:{type:"button"}},[_("span",{staticClass:"page__img"},[_("img",{attrs:{src:n(183),alt:"검색 버튼"}})])])])])])}],r={name:"supportNotice",components:{SideMenu:n(302).default},data:function(){return{id:0,boardName:"공지사항",board:{tit:"민트 오션 오픈 이벤트 안내",date:"2022.03.22",count:"32561",txt:"내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"}}},methods:{}},o=n(22),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"support page container__inner--max container__inner--padding"},[n("div",{staticClass:"support__box"},[n("div",{staticClass:"support__sideMenu"},[n("h1",{staticClass:"page__tit--big"},[n("span",{staticClass:"mobile"},[t._v(t._s(t.boardName))])]),t._v(" "),n("SideMenu")],1),t._v(" "),n("div",{staticClass:"support__cont"},[t._m(0),t._v(" "),n("div",{staticClass:"boardDetail page__margin--mid"},[n("div",{staticClass:"boardDetail__inner"},[n("div",{staticClass:"boardDetail__top"},[n("div",{staticClass:"boardDetail__top--tit"},[t._v(t._s(t.board.tit))]),t._v(" "),n("div",{staticClass:"boardDetail__top--info"},[n("span",{staticClass:"boardDetail__top--date"},[t._v(t._s(t.board.date))]),t._v(" "),n("span",{staticClass:"boardDetail__top--count"},[t._v("조회수 "+t._s(t.board.count))])])]),t._v(" "),n("div",{staticClass:"boardDetail__cont"},[n("div",{staticClass:"boardDetail__cont--txt"},[t._v(t._s(t.board.txt))])])])]),t._v(" "),n("NuxtLink",{staticClass:"btn--goMini btn--subUnAccept",attrs:{to:"notice"}},[t._v("목록")])],1)])])}),_,!1,null,null,null);e.default=component.exports}}]);