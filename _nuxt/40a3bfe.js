(window.webpackJsonp=window.webpackJsonp||[]).push([[38,41],{305:function(t,e,n){"use strict";n.r(e);var c={name:"sideMenu",data:function(){return{menuNames:[{name:"공지사항",url:"/support/board/notice",new:!0},{name:"민트오션 소식",url:"/support/board/news",new:!0},{name:"수수료 안내",url:"/support/search/detail",new:!1},{name:"자주하는 질문",url:"/support/search/home",new:!1},{name:"1:1문의",url:"/support/board/qna",new:!1}]}},methods:{}},_=n(23),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sideMenu"},[n("h2",{staticClass:"sideMenu__top"},[t._v("고객센터")]),t._v(" "),n("ul",{staticClass:"sideMenu__inner"},t._l(t.menuNames,(function(menu,e){return n("li",{key:e,staticClass:"sideMenu__tit"},[n("NuxtLink",{attrs:{to:menu.url}},[1==menu.new?n("span",{staticClass:"sideMenu__tit--icon page__icon--new"},[t._v("N")]):t._e(),t._v(" "),n("span",{staticClass:"sideMenu__tit--inner"},[t._v("\n          "+t._s(menu.name)+"\n          ")])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,n){t.exports=n.p+"img/ico-support1.6763236.svg"},393:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjkiIGhlaWdodD0iMTA5IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMTI5IDEwOSI+CiAgPHBhdGggc3Ryb2tlPSIjNTk1OTVDIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSI1IiBkPSJNNTcuOTY1IDYxLjAzbDIyLjc2OC03LjMzLTIyLjM4Ni03LjMzMiAyMi4zODYtNi4xNzQtMjEuOTkzLTYuNTZNNjcuNTA0IDMxLjcwOXYzMC40ODJNMzAuNzE1IDI4LjkxOUgxMy4yMzNDNy41ODMgMjguOTE5IDMgMjQuMzM2IDMgMTguNjg0di01LjExN0MzIDcuOTE4IDcuNTgyIDMuMzM1IDEzLjIzMyAzLjMzNWgxMDIuMzMzYzUuNjUxIDAgMTAuMjMzIDQuNTgyIDEwLjIzMyAxMC4yMzN2NS4xMTdjMCA1LjY1MS00LjU4MiAxMC4yMzQtMTAuMjMzIDEwLjIzNEg5NC4yNDciLz4KICA8cGF0aCBzdHJva2U9IiMwQTc1QzIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjUiIGQ9Ik05Mi41MzggNC4yNThINDMuOTN2OTAuODJoNDguNjA4VjQuMjU4eiIvPgogIDxwYXRoIHN0cm9rZT0iIzBBNzVDMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iNSIgZD0iTTgyLjMxNSA5Ny4xNHY4LjUzSDMzLjcwN1Y0LjYxN2g4LjUyOCIvPgo8L3N2Zz4K"},394:function(t,e,n){t.exports=n.p+"img/ico-support3.6df0e78.svg"},395:function(t,e,n){t.exports=n.p+"img/ico-support4.9a87680.svg"},396:function(t,e,n){t.exports=n.p+"img/ico-support5.90d58de.svg"},397:function(t,e,n){t.exports=n.p+"img/ico-support6.321d15e.svg"},434:function(t,e,n){"use strict";n.r(e);var c={name:"supportQna",components:{SideMenu:n(305).default},data:function(){return{info:[{tit:"계정을 어떻게 생성하나요?"},{tit:"비밀번호를 분실하였습니다."},{tit:"제 계정이 해킹을 당했습니다."},{tit:"결제를 어떻게 하나요?"},{tit:"결제를 어떻게 하나요?"},{tit:"결제를 어떻게 하나요?"},{tit:"결제를 어떻게 하나요?"}],withdraw:[{tit:"계정을 어떻게 생성하나요?"},{tit:"비밀번호를 분실하였습니다."},{tit:"제 계정이 해킹을 당했습니다."},{tit:"제 계정이 해킹을 당했습니다."},{tit:"제 계정이 해킹을 당했습니다."},{tit:"제 계정이 해킹을 당했습니다."},{tit:"결제를 어떻게 하나요?"}],incentive:[{tit:"계정을 어떻게 생성하나요?"},{tit:"비밀번호를 분실하였습니다."},{tit:"제 계정이 해킹을 당했습니다."}],buy:[{tit:"계정을 어떻게 생성하나요?"},{tit:"비밀번호를 분실하였습니다."},{tit:"제 계정이 해킹을 당했습니다."},{tit:"결제를 어떻게 하나요?"},{tit:"결제를 어떻게 하나요?"},{tit:"결제를 어떻게 하나요?"}],service:[{tit:"계정을 어떻게 생성하나요?"}],delMember:[{tit:"계정을 어떻게 생성하나요?"},{tit:"비밀번호를 분실하였습니다."},{tit:"제 계정이 해킹을 당했습니다."},{tit:"결제를 어떻게 하나요?"}]}},methods:{}},_=n(23),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"supportSearch page"},[c("div",{staticClass:"supportSearch__top"},[c("div",{staticClass:"supportSearch__top--inner page__search container__inner--max"},[c("div",{staticClass:"supportSearch__top--txt"},[t._v("\n        알고 싶은 내용을 검색해주세요.\n      ")]),t._v(" "),c("div",{staticClass:"supportSearch__top--search page__search--inner page__search--inner"},[c("input",{attrs:{type:"text",placeholder:"검색어를 입력해주세요."}}),t._v(" "),c("NuxtLink",{attrs:{to:"result"}},[c("span",{staticClass:"page__img"},[c("img",{attrs:{src:n(186),alt:"검색 버튼"}})])])],1)])]),t._v(" "),c("div",{staticClass:"container__inner--max container__inner--padding"},[c("h1",{staticClass:"page__tit--big page__margin--big"},[t._v("자주하는 질문")]),t._v(" "),c("ul",{staticClass:"supportSearch__cont"},[c("li",{staticClass:"supportSearch__cont--menu"},[c("NuxtLink",{staticClass:"supportSearch__cont--tit",attrs:{to:"menu"}},[c("div",{staticClass:"supportSearch__cont--img page__img"},[c("p",[c("img",{attrs:{src:n(392),alt:"이용안내"}})])]),t._v(" "),c("span",[t._v("이용안내")])]),t._v(" "),c("div",{staticClass:"supportSearch__cont--list"},[c("ul",t._l(t.info.slice(0,4),(function(e,n){return c("li",{key:n},[c("NuxtLink",{staticClass:"page__split",attrs:{to:"detail"}},[t._v(t._s(e.tit))])],1)})),0),t._v(" "),t.info.length>=5?c("NuxtLink",{staticClass:"supportSearch__cont--plus",attrs:{to:"menu"}},[c("span",{staticClass:"page__plus"},[t._v("플러스")]),t._v("\n            더보기\n          ")]):t._e()],1)],1),t._v(" "),c("li",{staticClass:"supportSearch__cont--menu"},[c("NuxtLink",{staticClass:"supportSearch__cont--tit",attrs:{to:"menu"}},[c("div",{staticClass:"supportSearch__cont--img page__img"},[c("p",[c("img",{attrs:{src:n(393),alt:"출금"}})])]),t._v(" "),c("span",[t._v("출금")])]),t._v(" "),c("div",{staticClass:"supportSearch__cont--list"},[c("ul",t._l(t.withdraw.slice(0,4),(function(e,n){return c("li",{key:n},[c("NuxtLink",{staticClass:"page__split",attrs:{to:"detail"}},[t._v(t._s(e.tit))])],1)})),0),t._v(" "),t.withdraw.length>=5?c("NuxtLink",{staticClass:"supportSearch__cont--plus",attrs:{to:"menu"}},[c("span",{staticClass:"page__plus"},[t._v("플러스")]),t._v("\n            더보기\n          ")]):t._e()],1)],1),t._v(" "),c("li",{staticClass:"supportSearch__cont--menu"},[c("NuxtLink",{staticClass:"supportSearch__cont--tit",attrs:{to:"menu"}},[c("div",{staticClass:"supportSearch__cont--img page__img"},[c("p",[c("img",{attrs:{src:n(394),alt:"수수료 안내"}})])]),t._v(" "),c("span",[t._v("수수료 안내")])]),t._v(" "),c("div",{staticClass:"supportSearch__cont--list"},[c("ul",t._l(t.incentive.slice(0,4),(function(e,n){return c("li",{key:n},[c("NuxtLink",{staticClass:"page__split",attrs:{to:"detail"}},[t._v(t._s(e.tit))])],1)})),0),t._v(" "),t.incentive.length>=5?c("NuxtLink",{staticClass:"supportSearch__cont--plus",attrs:{to:"menu"}},[c("span",{staticClass:"page__plus"},[t._v("플러스")]),t._v("\n            더보기\n          ")]):t._e()],1)],1),t._v(" "),c("li",{staticClass:"supportSearch__cont--menu"},[c("NuxtLink",{staticClass:"supportSearch__cont--tit",attrs:{to:"menu"}},[c("div",{staticClass:"supportSearch__cont--img page__img"},[c("p",[c("img",{attrs:{src:n(395),alt:"NFT 구매"}})])]),t._v(" "),c("span",[t._v("NFT 구매")])]),t._v(" "),c("div",{staticClass:"supportSearch__cont--list"},[c("ul",t._l(t.buy.slice(0,4),(function(e,n){return c("li",{key:n},[c("NuxtLink",{staticClass:"page__split",attrs:{to:"detail"}},[t._v(t._s(e.tit))])],1)})),0),t._v(" "),t.buy.length>=5?c("NuxtLink",{staticClass:"supportSearch__cont--plus",attrs:{to:"menu"}},[c("span",{staticClass:"page__plus"},[t._v("플러스")]),t._v("\n            더보기\n          ")]):t._e()],1)],1),t._v(" "),c("li",{staticClass:"supportSearch__cont--menu"},[c("NuxtLink",{staticClass:"supportSearch__cont--tit",attrs:{to:"menu"}},[c("div",{staticClass:"supportSearch__cont--img page__img"},[c("p",[c("img",{attrs:{src:n(396),alt:"서비스 이용"}})])]),t._v(" "),c("span",[t._v("서비스 이용")])]),t._v(" "),c("div",{staticClass:"supportSearch__cont--list"},[c("ul",t._l(t.service.slice(0,4),(function(e,n){return c("li",{key:n},[c("NuxtLink",{staticClass:"page__split",attrs:{to:"detail"}},[t._v(t._s(e.tit))])],1)})),0),t._v(" "),t.service.length>=5?c("NuxtLink",{staticClass:"supportSearch__cont--plus",attrs:{to:"menu"}},[c("span",{staticClass:"page__plus"},[t._v("플러스")]),t._v("\n            더보기\n          ")]):t._e()],1)],1),t._v(" "),c("li",{staticClass:"supportSearch__cont--menu"},[c("NuxtLink",{staticClass:"supportSearch__cont--tit",attrs:{to:"menu"}},[c("div",{staticClass:"supportSearch__cont--img page__img"},[c("p",[c("img",{attrs:{src:n(397),alt:"가입 탈퇴"}})])]),t._v(" "),c("span",[t._v("가입 탈퇴")])]),t._v(" "),c("div",{staticClass:"supportSearch__cont--list"},[c("ul",t._l(t.delMember.slice(0,4),(function(e,n){return c("li",{key:n},[c("NuxtLink",{staticClass:"page__split",attrs:{to:"detail"}},[t._v(t._s(e.tit))])],1)})),0),t._v(" "),t.delMember.length>=5?c("NuxtLink",{staticClass:"supportSearch__cont--plus",attrs:{to:"menu"}},[c("span",{staticClass:"page__plus"},[t._v("플러스")]),t._v("\n            더보기\n          ")]):t._e()],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);