(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{300:function(t,o,e){var content=e(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(72).default)("1fbb21b2",content,!0,{sourceMap:!1})},301:function(t,o,e){var r=e(71)(!1);r.push([t.i,".hooper-slide{flex-shrink:0;height:100%;margin:0;padding:0;list-style:none}.hooper-progress{position:absolute;top:0;right:0;left:0;height:4px;background-color:#efefef}.hooper-progress-inner{height:100%;background-color:#4285f4;transition:.3s}.hooper-pagination{position:absolute;bottom:0;right:50%;transform:translateX(50%);display:flex;padding:5px 10px}.hooper-indicators{display:flex;list-style:none;margin:0;padding:0}.hooper-indicator.is-active,.hooper-indicator:hover{background-color:#4285f4}.hooper-indicator{margin:0 2px;width:12px;height:4px;border-radius:4px;border:none;padding:0;background-color:#fff;cursor:pointer}.hooper-pagination.is-vertical{bottom:auto;right:0;top:50%;transform:translateY(-50%)}.hooper-pagination.is-vertical .hooper-indicators{flex-direction:column}.hooper-pagination.is-vertical .hooper-indicator{width:6px}.hooper-next,.hooper-prev{background-color:transparent;border:none;padding:1em;position:absolute;top:50%;transform:translateY(-50%);cursor:pointer}.hooper-next.is-disabled,.hooper-prev.is-disabled{opacity:.3;cursor:not-allowed}.hooper-next{right:0}.hooper-prev{left:0}.hooper-navigation.is-vertical .hooper-next{top:auto;bottom:0;transform:none}.hooper-navigation.is-vertical .hooper-prev{top:0;bottom:auto;right:0;left:auto;transform:none}.hooper-navigation.is-rtl .hooper-prev{left:auto;right:0}.hooper-navigation.is-rtl .hooper-next{right:auto;left:0}.hooper{position:relative;width:100%;height:200px}.hooper,.hooper *{box-sizing:border-box}.hooper-list{overflow:hidden;width:100%;height:100%}.hooper-track{display:flex;box-sizing:border-box;width:100%;height:100%;padding:0;margin:0}.hooper.is-vertical .hooper-track{flex-direction:column;height:200px}.hooper.is-rtl{direction:rtl}.hooper-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}",""]),t.exports=r},408:function(t,o,e){"use strict";e.r(o);var r=e(306),n=(e(300),{name:"profileEdit",components:{Hooper:r.a,Slide:r.d,HooperNavigation:r.b},data:function(){return{profilePhotoOn:!1,select:!1,count:1,selectIdx:0,badgeList:[{img:"~assets/img/test/test-card8.png",name:"새싹",idx:0},{img:"~assets/img/test/test-card8.png",name:"꽃",idx:1},{img:"~assets/img/test/test-card8.png",name:"저울",idx:2},{img:"~assets/img/test/test-card8.png",name:"저울",idx:3},{img:"~assets/img/test/test-card8.png",name:"저울",idx:4},{img:"~assets/img/test/test-card8.png",name:"저울",idx:5},{img:"~assets/img/test/test-card8.png",name:"저울",idx:6},{img:"~assets/img/test/test-card8.png",name:"저울",idx:7}],hooperSetting:{itemsToShow:1}}},methods:{selectBadge:function(t,o){var e=o.target.classList.contains("active");e?e&&(this.count--,this.count<4&&o.target.classList.remove("active")):(this.count++,this.count<4&&o.target.classList.add("active"))}}}),d=e(22),component=Object(d.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"myPage page container__inner--mid container__inner--padding"},[e("div",{staticClass:"myPage__info page__margin--big"},[e("div",{staticClass:"myPage__badgeBox page__margin--mid"},[e("div",{staticClass:"myPage__badgeBox--inner page__shadow",staticStyle:{background:"none","box-shadow":"none"}},[e("Hooper",{staticClass:"myPage__badge",attrs:{settings:t.hooperSetting}},[e("Slide",{staticClass:"myPage__badge--inner"},[e("ul",{staticClass:"myPage__badgeList"},t._l(t.badgeList,(function(o,r){return e("li",{key:r,on:{click:function(o){return t.selectBadge(r,o)}}},[e("p",{staticClass:"myPage__badge--img",staticStyle:{background:"#ddd"}},[e("img",{attrs:{src:o.img,alt:o.name}}),t._v(" "),e("span",{staticClass:"myPage__badge--count"},[t._v("\n                    "+t._s(t.count)+"\n                  ")])])])})),0)]),t._v(" "),e("HooperNavigation",{staticClass:"myPage__badge--nav",attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],1)],1)])])])}),[],!1,null,null,null);o.default=component.exports}}]);