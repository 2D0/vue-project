module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/nuxt-logo","2":"components/tutorial","3":"pages/auction/detail","4":"pages/auction/list","5":"pages/auction/list_back","6":"pages/auction/order","7":"pages/home","8":"pages/home_back","9":"pages/index","10":"pages/join/complete","11":"pages/join/home","12":"pages/login/home","13":"pages/login/password/complete","14":"pages/login/password/reset","15":"pages/login/password/sendMail","16":"pages/loginBack","17":"pages/marketPlace/detail","18":"pages/marketPlace/list","19":"pages/marketPlace/order","20":"pages/marketPlace/sale","21":"pages/myPage/profile/edit","22":"pages/myPage/profile/home","23":"pages/myPage/table/calculate","24":"pages/myPage/table/myNft","25":"pages/myPage/table/usageHistory","26":"pages/myPage/table/withdrawal","27":"pages/myPage/userItem/home","28":"pages/myPage/userItem/list","29":"pages/sample","30":"pages/service/privacy","31":"pages/service/provision","32":"pages/support/board/detail","33":"pages/support/board/news","34":"pages/support/board/notice","35":"pages/support/board/qna","36":"pages/support/search/detail","37":"pages/support/search/home","38":"pages/support/search/menu","39":"pages/support/search/result","40":"pages/support/sideMenu","41":"pages/system/accountSuspension","42":"pages/system/systemCheck","43":"pages/test"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6d27b298", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-bar.594546c.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE0IDE0Ij4KICA8cGF0aCBmaWxsPSIjOTk5IiBkPSJNNS45MjEgMTEuMDQ1YTYuMjE2IDYuMjE2IDAgMDAyLjkwMi0uNzEybDIuNDU2IDIuMjljLjI5OS4yOC43MDUuNDM2IDEuMTI4LjQzNi40MjMgMCAuODI5LS4xNTcgMS4xMjgtLjQzNi4yOTktLjI3OS40NjctLjY1Ny40NjctMS4wNTIgMC0uMzk0LS4xNjgtLjc3Mi0uNDY3LTEuMDUxbC0yLjQ1Ni0yLjI5YTUuMTk5IDUuMTk5IDAgMDAuNjM5LTMuODNjLS4yOS0xLjMwNy0xLjA3OS0yLjQ3MS0yLjIxOS0zLjI3OEE2LjIyNCA2LjIyNCAwIDAwNS41MTcuMDEyQzQuMDg5LjEwNSAyLjc0Ni42NzUgMS43MzQgMS42MTlhNS40MTcgNS40MTcgMCAwMC0xLjYyIDIuODI4IDUuMTc3IDUuMTc3IDAgMDAuMzM3IDMuMTkgNS42MjQgNS42MjQgMCAwMDIuMTggMi40NzggNi4yMyA2LjIzIDAgMDAzLjI5Ljkzek0yLjc3NiAyLjU5YTQuNTg2IDQuNTg2IDAgMDEyLjcwOS0xLjE5NCA0LjY5NiA0LjY5NiAwIDAxMi45MDUuNjggNC4xODMgNC4xODMgMCAwMTEuNzg0IDIuMjQ0IDMuODg2IDMuODg2IDAgMDEtLjE0NyAyLjc5IDQuMjY2IDQuMjY2IDAgMDEtMi4wMTIgMi4wNyA0LjczIDQuNzMgMCAwMS0yLjk2My40MSA0LjUxNCA0LjUxNCAwIDAxLTIuNTctMS40MzcgMy45NzkgMy45NzkgMCAwMS0xLjAwOS0yLjYzIDMuODc2IDMuODc2IDAgMDEuMzM3LTEuNTg4Yy4yMjMtLjUwNC41NTItLjk2Ljk2Ni0xLjM0NXoiLz4KPC9zdmc+Cg=="

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
module.exports = __webpack_require__(58);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("72c320c0", content, true)

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(22);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(23);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(24);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(25);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(28);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(33);
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_17___ = __webpack_require__(39);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_17___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"NotoSansKR\";font-weight:100;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}@font-face{font-family:\"NotoSansKR\";font-weight:200;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ")}@font-face{font-family:\"NotoSansKR\";font-weight:300;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "),url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + "),url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ")}@font-face{font-family:\"NotoSansKR\";font-weight:400;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + "),url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + "),url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ")}@font-face{font-family:\"NotoSansKR\";font-weight:500;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "),url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + "),url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ")}@font-face{font-family:\"NotoSansKR\";font-weight:600;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + "),url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + "),url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ")}*{font-family:\"NotoSansKR\",sans-serif!important;box-sizing:border-box;margin:0;padding:0;vertical-align:baseline;font-weight:300;color:#111}input{-webkit-appearance:none}input:focus,select:focus,textarea:focus{outline:none}label{display:block}textarea{resize:none}button{border:none;background:none;padding:0;cursor:pointer;-webkit-appearance:none}a,img{display:block}a{color:#111;text-decoration:none}a:hover{cursor:pointer}i{font-style:normal}li,ol,ul{list-style:none;padding-left:0;margin-left:0}fieldset{border:none}legend{font-size:0;text-indent:-9999px}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,table,tbody,td{display:block}thead,tr{display:flex}table{border-collapse:collapse;border-spacing:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Thin.30fa6d5.otf";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Thin.cc4e894.woff";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Thin.9d23ca6.woff2";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Light.7bad2c5.otf";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Light.4573634.woff";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Light.e2557c2.woff2";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Regular.457762e.otf";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Regular.957d49a.woff";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Regular.e95adf0.woff2";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Medium.72ba455.otf";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Medium.865a70c.woff";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Medium.e5d0c16.woff2";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Bold.29abf35.otf";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Bold.bccfd5f.woff";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Bold.a4ecc3f.woff2";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Black.57ee16c.otf";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Black.dc4ea50.woff";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/NotoSansKR-Black.90d5557.woff2";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("4cb2c460", content, true)

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(42);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(43);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(44);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container{min-height:calc(100vh - 450px);padding-top:75px}.container__inner--max{width:1400px;margin:0 auto}.container__inner--mid{width:700px;margin:0 auto}.container__inner--small{width:500px;margin:0 auto}.container__inner--padding{padding:90px 0}.container__inner--main{padding-bottom:90px}.btn>a,.btn>span{display:block;text-align:center;white-space:nowrap}.btn--big{width:100%}.btn--big,.btn--half{display:flex;align-items:center;justify-content:center;height:50px;line-height:50px;border-radius:10px;font-size:16px;font-weight:400}.btn--half{width:49%}.btn--half.lineHeight{line-height:44px}.btn--bigSub{display:flex;align-items:center;justify-content:center;width:300px}.btn--bigMiddle,.btn--bigSub{height:50px;line-height:50px;font-size:16px;border-radius:10px}.btn--bigMiddle{width:260px}.btn--middle{width:230px}.btn--many,.btn--middle{display:flex;align-items:center;justify-content:center;height:50px;line-height:50px;font-size:16px;border-radius:10px}.btn--many{width:200px}.btn--goMini{display:flex;align-items:center;justify-content:center;width:150px;height:45px;line-height:45px;padding:0 20px;font-size:16px;border-radius:7px}.btn--app{width:180px;font-size:15px}.btn--app,.btn--edit{display:flex;align-items:center;justify-content:center;height:35px;line-height:35px;border-radius:7px}.btn--edit{width:150px}.btn--mini{width:120px}.btn--mini,.btn--modalConfirm{display:flex;align-items:center;justify-content:center;height:50px;line-height:50px;font-size:16px;border-radius:10px}.btn--modalConfirm{width:100px}.btn--modalMini{width:100px;height:35px;line-height:35px}.btn--modalMini,.btn--stuff{display:flex;align-items:center;justify-content:center;border-radius:7px;font-size:16px}.btn--stuff{width:80px;height:50px;line-height:50px}.btn--stuff>img{width:18px}.btn--margin{margin-bottom:15px}.btn--accept{background:#0a75c2;border:none;color:#fff;cursor:pointer}.btn--error{border:2px solid #d10606;color:#d10606}.btn--sub{border:2px solid #0a75c2;color:#0a75c2}.btn--unAcceptLine{border:2px solid #999;color:#999}.btn--subUnAccept{background:#fff;border:1px solid #cbcbcb;color:#333}.btn--katalk{background:#ffe812;border:none;color:#3b2c30}.btn--unAccept{background:#999;border:none;color:#fff}.btn--unAcceptLight{background:#ccc;border:none;color:#fff}.btn--unAcceptLight.accept{background:#0a75c2;border:none;color:#fff;cursor:pointer}.btn--unAcceptSub{background:#fff;color:#999}.btn__ico{width:45px;height:45px;position:relative}.btn__ico.active .btn__ico--state{display:block}.btn__ico.active .btn__ico--stateOff{display:none}.btn__ico>div{z-index:-1}.btn__ico>div>img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:-1}.btn__ico--state{display:none}.btn__ico--state.active{display:block}.btn__ico--stateOff.active{display:none}.btn__close{width:45px;height:45px;z-index:100}.btn__close>span{display:block;width:45px;height:1px;font-size:0;text-indent:-9999px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.btn__close>span:before{top:-6px;transform:rotate(45deg) translateX(-50%)}.btn__close>span:after,.btn__close>span:before{content:\"\";display:block;width:1px;height:18px;border-radius:5px;background:#111;position:absolute;left:50%}.btn__close>span:after{bottom:-10px;transform:rotate(-45deg) translateX(-50%)}.scrollTop{display:flex;width:45px;height:45px;border-radius:50%;align-items:center;justify-content:center;position:fixed;text-indent:-9999px;font-size:0;bottom:40px;right:40px;transform:rotate(90deg);background:#15b5ea;z-index:999}.scrollTop__arrow>i{display:block;width:2px;height:9px;border-radius:10px;position:absolute;background:#fff}.scrollTop__arrow--top{top:15.5px;right:26px;left:inherit;transform:rotate(45deg)}.scrollTop__arrow--bottom{bottom:15.5px;left:17px;transform:rotate(135deg)}.scrollTop__arrow--doubleTop{right:20px}.scrollTop__arrow--doubleBtm{left:23px}.itemState>span{display:block;height:25px;font-weight:300;text-align:center;color:#fff}.itemState--start{background:linear-gradient(163.75deg,#15b2ea 4.15%,#16afe6 14.42%,#17a1dc 31.79%,#1f88c9 54.11%,#2f64ae 80.25%,#35509e 93.62%)}.itemState--expect{background:#35509e}.itemState--hurry{background:#d10606}.itemState--end{background:#333}.fade-enter{opacity:0}.fade-enter-active{transition:opacity .5s}.page__tit{height:45px;line-height:45px;font-weight:500;font-size:20px}.page__tit--small{font-size:18px;font-weight:400}.page__tit--big{font-size:30px}.page__tit--big,.page__tit--big>.web{white-space:nowrap}.page__tit--big>.mobile{display:none;white-space:nowrap}.page__icon--new{display:block;width:15px;height:15px;margin-right:15px;line-height:15px;border-radius:3px;text-align:center;font-size:10px;font-weight:400;color:#fff;background:#0098ec}.page__align--left{text-align:left;padding-left:20px}.page__img{display:block;position:relative}.page__img img{width:100%;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-o-object-fit:cover;object-fit:cover}.page__ico--img{display:block;position:relative}.page__ico--img img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.page__search--inner{display:flex;width:315px;height:45px;line-height:45px;padding-left:20px;border-radius:10px;border:1px solid #ddd;justify-content:space-between;background:#fff}.page__search--inner>input{width:100%;height:100%;line-height:45px;font-size:14px;border:none}.page__search--inner>input::-moz-placeholder{color:#999}.page__search--inner>input:-ms-input-placeholder{color:#999}.page__search--inner>input::placeholder{color:#999}.page__search--inner>button{width:45px;height:45px;position:relative}.page__search--inner>button img{width:14px;height:14px}.page__search--inner>a{display:block;width:45px;height:45px;position:relative}.page__search--inner>a>span{width:100%;height:100%}.page__search--inner>a>span>img{width:14px;height:14px}.page__split{display:-webkit-box!important;width:100%;height:100%;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all;overflow:hidden;text-overflow:ellipsis}.page__split--mid{width:100%}.page__shadow{box-shadow:0 2px 5px rgba(0,0,0,.25)}.page__shadowThin{box-shadow:0 2px 2px rgba(0,0,0,.25)}.page__shadowTxt{text-shadow:0 0 3px rgba(57,57,57,.35)}.page__essential{display:block;font-size:24px;height:24px;color:#d10606}.page__color--error{color:#d10606}.page__color--blue{color:#0a75c2}.page__color--gray{color:#555}.page__color--lightGray{color:#999}.page__margin--small{margin-bottom:20px!important}.page__margin--mid{margin-bottom:40px!important}.page__margin--midPlus{margin-bottom:60px!important}.page__margin--big{margin-bottom:90px!important}.page__margin--toBigPd{padding-bottom:140px!important}.page__top{display:flex;align-items:center;justify-content:center}.page__tableLayout>tbody{height:700px}.page__tableLayout--list.active{background:#efefef}.page__overHidden{overflow:hidden}.page__text--left{text-align:left!important}.card{width:100%;height:100%;position:relative;cursor:pointer}.card:after{content:\"\";padding-bottom:144.5%;z-index:-10;box-shadow:-3px 3px 3px #fafafa,7px 12px 24px #e3e3e3,-3px 3px 15px #e4e4e4;border-radius:10px;overflow:hidden;transform:matrix(-1,0,0,1,0,0);background:#fff}.card:after,.card__back{display:block;width:100%}.card__back{z-index:9}.card__back,.card__inner{height:100%;position:absolute}.card__inner{width:100%;padding:13px;z-index:10}.card__inner:after{position:absolute;top:0;left:0;z-index:-10;box-shadow:-4px 3px 15px rgba(0,0,0,.07),-4px 3px 5px #ddd,6px 6px 5px #eee;border-radius:10px;transform:matrix(-1,0,0,1,0,0)}.card a>{width:100%;height:100%;position:absolute}.card>div,.card a>{display:block}.card__topImg{width:100%;height:auto;position:relative}.card__topImg:hover img{-o-object-fit:contain;object-fit:contain}.card__topImg>div{width:100%;height:100%;position:absolute}.card__topImg:after{content:\"\";display:block;padding-bottom:100%}.card__topImg--icon{position:absolute;top:15px;right:15px}.card__itemState>span{width:98px;border-radius:0 5px 5px 0;position:absolute;z-index:10;top:10px;left:0}.card__topTit{display:flex;font-size:19px;font-weight:500;line-height:1.2em;justify-content:space-between;align-items:center;padding:12px 0;position:relative}.card__topTit>button{position:absolute;top:0;right:-10px}.card__name{width:calc(100% - 45px);font-weight:500}.card__user{display:flex;align-items:center;z-index:12}.card__userImg{width:25px;height:25px;border-radius:50%;position:relative;overflow:hidden;margin-right:7px}.card__userImg>img{width:100%;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-o-object-fit:cover;object-fit:cover;background-color:#999}.card__userName{color:#777;height:100%;font-size:14px;line-height:25px}.card__owner{justify-content:flex-end;text-align:right}.card__owner,.card__owner--tit{display:flex;align-items:center}.card__owner--tit{font-size:14px;color:#777}.card__owner--tit:before{content:\"\";display:block;width:1px;height:12px;margin:0 7px;background:#777}.card__owner--name{display:block;font-size:14px}.card__info{display:flex;flex-direction:column;align-items:flex-end;padding:15px 0 0}.card__time{height:12px;font-size:12px;line-height:1em}.card__time--ing{color:#333}.card__time--hurry{color:#d10606}.card__time--soon{color:#35509e}.card__time--end,.card__time--infinity{text-indent:-9999px;font-size:0}.card__price{font-size:20px;font-weight:500}.card__price>span{font-size:14px}.table{width:100%;overflow-x:scroll}.table__switch{display:flex;align-items:center}.table__switch--tit{font-size:16px;padding:0 15px;height:45px;line-height:45px;color:#999}.table__switch--tit.active{color:#333}.table__switch--tit:last-child{padding-right:0}.table__switch--active{color:#333}.table__switch--bar{display:block;width:1px;height:16px;background:#333}.table__layout>thead{height:50px;line-height:50px}.table__layout>thead>th{font-size:16px;text-align:center;white-space:nowrap;font-weight:400}.table__layout>tbody{border-top:1px solid #ddd;border-bottom:1px solid #ccc}.table__layout>tbody>tr{position:relative}.table__layout>tbody>tr>td{display:block;height:50px;line-height:50px;font-size:14px}.table__layout>tbody>tr:hover{background:#eaf3f9}.table__layout.active{display:block}.table__layout--scrollNone{height:auto!important;overflow-y:visible!important;overflow-y:initial!important;min-height:612px!important}.table__layout--name{text-align:left;padding-left:70px}.table__notice--icon{position:absolute;top:50%;left:40px;transform:translateY(-50%)}.table__info--edition{font-weight:500!important}.table__info--5{width:5%}.table__info--10{width:10%}.table__info--15{width:15%}.table__info--20{width:20%}.table__info--25{width:25%}.table__info--30{width:30%}.table__info--35{width:35%}.table__info--40{width:40%}.table__info--45{width:45%}.table__info--50{width:50%}.table__info--60{width:60%}.table__info--70{width:70%}.table__blank{display:flex;width:100%;height:100%;text-align:center;align-items:center;justify-content:center}.table__blank>div{color:#999}.table .blank{display:flex;width:100%;height:100%;text-align:center;align-items:center;justify-content:center}.table .blank tr{border-bottom:none}.table .blank tr:hover{background:#fff!important}.table .blank td{width:100%;color:#999}.table__backNone:hover{background:#fff!important}.table--small{font-size:18px}.table--big td{font-size:16px}.table__over--750{min-width:750px}.table__over--800{min-width:800px}.boardDetail{min-height:600px;border-top:1px solid #ccc;border-bottom:1px solid #ccc}.boardDetail__top{padding:20px;border-bottom:1px solid #eee}.boardDetail__top--tit{font-size:20px;line-height:1em;margin-bottom:15px}.boardDetail__top--info{display:flex;align-items:center}.boardDetail__top--info>span{font-size:17px;line-height:1em;color:#999}.boardDetail__top--date{display:flex;align-items:center}.boardDetail__top--date:after{content:\"\";display:block;width:1px;height:15px;background:#999;margin:0 7px}.boardDetail__top--date{font-size:17px;color:#999}.boardDetail__cont{padding:20px}.boardDetail__cont--txt{color:#555}.boardDetail__rateIt{text-align:center}.boardDetail__rateIt--tit{display:block;font-size:16px;color:#555}.boardDetail__rateIt--btn{display:flex;align-items:center;justify-content:center}.boardDetail__rateIt--btn button:first-child{margin-right:15px}.pager{width:auto;margin:0 auto;justify-content:center}.pager,.pager__btn{display:flex;align-items:center}.pager__btn{justify-content:space-between}.pager__btn>button{width:45px;height:45px;align-items:center;position:relative}.pager__btn>button,.pager__num,.pager__num>li{display:flex;justify-content:center}.pager__num>li{width:45px;height:45px;align-items:center}.pager__num>li a>{display:block;width:100%;height:100%;font-size:18px}.pager__num--mobile,.pager__num--tablet{display:none!important}.pager__table--inner{padding:0 20px}.pager__arrow{text-indent:-9999px;font-size:0}.pager__arrow i{display:block;width:2px;height:9px;border-radius:10px;position:absolute;background:#333}.pager__arrow--top{top:15.5px;right:24px;left:inherit;transform:rotate(45deg)}.pager__arrow--bottom{bottom:15.5px;left:19px;transform:rotate(135deg)}.pager__arrow--right{transform:rotate(180deg)}.pager__doubleFirst--top{right:20px}.pager__doubleFirst--bottom{left:23px}.pager__doubleLast--top{right:26px}.pager__doubleLast--bottom{left:17px}.itemTable__layout thead{justify-content:center}.itemTable__layout tbody{overflow-y:scroll;min-height:450px;max-height:720px}.itemTable__layout tbody>tr{justify-content:center;border-bottom:1px solid #ddd}.itemTable__layout tbody>tr>td{height:90px;line-height:90px;text-align:center}.itemTable__layout tbody>tr.small td{height:60px;line-height:60px}.itemTable__height{min-height:540px;max-height:810px}.itemTable__blank,.itemTable__height.blank{display:flex;align-items:center;justify-content:space-between}.itemTable__blank{height:540px}.itemTable__imgBox{display:flex!important;align-items:center;justify-content:center}.itemTable__img{width:60px;height:60px;position:relative;background:#ffd0d0}.itemTable__toggleTop{display:none;padding:0 20px;border-bottom:2px solid #ddd}.itemTable__toggleTop>li{padding:15px 0;font-weight:400;font-size:18px}.itemTable__toggle{display:none;height:calc(80vh - 220px);overflow-y:scroll}.itemTable__toggle--cont{border-bottom:2px solid #ddd}.itemTable__toggle--half{width:50%;text-align:center}.itemTable__toggle--date{width:30%;text-align:center}.itemTable__toggle--itemName{width:70%;text-align:center}.itemTable__toggle--state{width:33.3333%;text-align:center}.itemTable__toggle--list{border-bottom:1px solid #eee;padding:0 20px}.itemTable__toggle--tit{display:flex;align-items:center;padding:15px 0}.itemTable__toggle--name{width:calc(100% - 70px);font-size:18px;font-weight:500;-webkit-line-clamp:3}.itemTable__toggle--img{margin-right:20px}.itemTable__toggle--info{display:flex;height:0;align-items:center;justify-content:space-between;overflow:hidden;transition:all .3s}.itemTable__toggle--info.normal{height:auto}.itemTable__toggle--info.active{height:86px;border-top:1px dashed #ddd}.itemTable__toggle--info.active.calc{width:90%;height:120px;margin:0 auto}.itemTable__toggle--info.active.calc .itemTable__toggle--txt{width:75%;margin:0 auto}.itemTable__toggle--info.active.use{height:110px;margin:0 auto;padding:0}.itemTable__toggle--txt{display:block;width:100%;padding-left:10px}.itemTable__toggle--txt>dl{display:flex}.itemTable__toggle--txt>dl>dt{font-size:15px;color:#999;margin-right:10px;white-space:nowrap}.itemTable__toggle--txt>dl>dd{font-size:15px;color:#333;font-weight:400}.itemTable__toggle--txt>dl>dd>span{font-size:12px}.itemTable__toggle--btn{font-size:16px;padding-right:10px;font-weight:400;color:#0a75c2;white-space:nowrap}.itemTable .table__blank,.itemTable .table__blank>td{height:100%}.formBorderLayout input[type=text]{width:100%;height:45px;font-size:15px;padding:0 20px;border-radius:10px;border:2px solid #eee}.formBorderLayout input[type=text]::-moz-placeholder{color:#999}.formBorderLayout input[type=text]:-ms-input-placeholder{color:#999}.formBorderLayout input[type=text]::placeholder{color:#999}.formBorderLayout__cont{margin-bottom:25px}.formBorderLayout__priceBox{display:flex;align-items:center;justify-content:space-between;width:100%;height:45px;font-size:15px;padding:0 20px;border-radius:10px;border:2px solid #eee}.formBorderLayout__priceBox>input{width:100%;height:100%!important;padding:initial!important;border-radius:0!important;border-radius:initial!important;border:initial!important}.formBorderLayout__priceBox--unit{font-size:14px;color:#333}.formBorderLayout__tit{display:flex;align-items:center;font-size:16px;margin-bottom:10px}.formBorderLayout__subTit{font-size:13px;margin-bottom:10px;color:#999}.formBorderLayout__lineCont{display:flex;justify-content:space-between;align-items:center}.formBorderLayout__lineCont--tit{width:20%}.formBorderLayout__lineCont--txt{font-size:20px;font-weight:500;white-space:nowrap}.formBorderLayout__lineCont--box{display:flex;width:90%;justify-content:flex-end;align-items:center}.formBorderLayout__lineCont--box>input[type=text]{width:100%;margin-right:15px}.formBorderLayout__paySelect--radio{margin-bottom:10px}.formBorderLayout__paySelect--radio>input{display:none}.formBorderLayout__paySelect--radio>input:checked~label{border:2px solid #0a75c2;background:#0a75c2;color:#fff}.formBorderLayout__paySelect--radio>label{cursor:pointer}.formInfoLayout__write{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ddd}.formInfoLayout__write.valid{border-color:#0098ec}.formInfoLayout__write.unValid{border-color:#d10606}.formInfoLayout__write>input{width:100%;height:50px;border:none;padding:0 15px}.formInfoLayout__write>input::-moz-placeholder{color:#ccc}.formInfoLayout__write>input:-ms-input-placeholder{color:#ccc}.formInfoLayout__write>input::placeholder{color:#ccc}.formInfoLayout__write>input.icon{width:calc(100% - 42px)}.formInfoLayout__write>input.icon.secret{width:calc(100% - 84px)}.formInfoLayout__write>input--tit{font-size:15px;color:#333}.formInfoLayout__write--box>img{width:18px;height:auto;margin:0 15px}.formInfoLayout__write--inputBtn{height:50px;width:42px;display:flex;align-items:center;justify-content:center;cursor:pointer}.formInfoLayout__write--inputBtn.secret>img{width:22px;height:auto}.formInfoLayout__write--inputBtn.clear>img{width:18px;height:auto}.formInfoLayout__modal{text-align:left}.formInfoLayout__modal--input{display:flex;justify-content:space-between;align-items:flex-end}.formInfoLayout__modal--input>div{width:calc(100% - 115px)}.formInfoLayout__input{text-align:left}.formInfoLayout__input--tit{font-size:15px;color:#333}.formInfoLayout__input--error,.formInfoLayout__input--tit{display:block;margin-left:15px}.agreeLayout__checkLine{display:flex;align-items:center;justify-content:space-between;margin-bottom:3px;position:relative}.agreeLayout__checkLine:last-child{margin-bottom:0}.agreeLayout__check{width:100%}.agreeLayout__check>input{display:none}.agreeLayout__check>input:checked~label .agreeLayout__checkBox{background:#0a75c2;border:none}.agreeLayout__check>label{display:flex;align-items:center;cursor:pointer;padding:10px 0}.agreeLayout__check>label>span{width:calc(100% - 35px);font-size:16px}.agreeLayout__checkBox{display:block;width:25px!important;height:25px;border-radius:5px;font-size:0;text-indent:-9999px;border:1px solid #ccc;background:#fff;position:relative;margin-right:10px}.agreeLayout__checkBox:after{content:\"\";display:block;width:10px;height:4px;border-bottom:2px solid #fff;border-left:2px solid #fff;transform:translateX(-50%) rotate(-45deg);position:absolute;top:8px;left:50%}.agreeLayout__btn{font-size:13px;height:45px;line-height:45px;padding:0 5px;color:#0a75c2;text-decoration:underline;white-space:nowrap}.agreeLayout__btns{display:flex;flex-direction:column}.agreeLayout__ex{font-size:13px;margin-top:20px;color:#999}.agreeLayout__ex>ul{padding:0 35px}.agreeLayout__ex>ul>li{margin-bottom:7px;line-height:1.25em}.agreeLayout__ex--top{margin-bottom:23px}.agreeLayout .error{border:2px solid #d10606}.agreeLayout__essential{position:absolute;left:-12px;top:50%;transform:translateY(-50%)}.agreeLayout__error{font-size:14px;font-weight:400;margin-top:5px}.modal{width:100vw;height:100vh;z-index:1001;position:fixed;overflow:auto}.modal,.modal__layout{top:50%;left:50%;transform:translate(-50%,-50%)}.modal__layout{position:absolute;border-radius:10px;background:#fff;z-index:100;overflow:hidden}.modal--big{width:1400px}.modal--mid{width:580px}.modal--small{width:450px}.modal--auto{height:auto}.modal__inner{padding:0 40px}.modal__inner--padding{padding:40px 0}.modal__top{width:100%;height:60px;line-height:60px;text-align:center;position:relative}.modal__close{position:absolute;top:50%;right:30px;transform:translateY(-50%)}.modal__close--form{position:absolute;top:0;right:30px}.modal__back{width:100vw;height:100vh;background:#000;opacity:.3;z-index:1001}.modalMore{height:600px}.modalMore__tit{line-height:60px;font-size:20px;font-weight:500;text-align:center}.modalMore__cont{height:480px;padding-top:25px;overflow-y:scroll;background:#eaf3f9}.modalMore__bottom{height:60px;position:relative}.modalMore__bottom--half{height:60px;display:flex;justify-content:space-between}.modalMore__confirm{right:40px}.modalMore__confirm,.modalMore__stopCheck{position:absolute;top:50%;transform:translateY(-50%)}.modalMore__stopCheck{left:40px}.modalMore__slide{height:540px}.modalMore__slide>.hooper{height:100%}.modalMore__slide a{display:block;width:100%;height:auto;position:relative}.modalMore__slide a:after{content:\"\";display:block;padding-bottom:100%}.modalMore__slide--inner{width:100%;height:100%}.modalNftList__inner{height:80vh;padding:20px 0}.modalNftList__search{width:100%;display:flex;justify-content:flex-end}.modalNftList__tableLayout>tbody{height:calc(80vh - 280px);min-height:0;max-height:none}.modalNftList__tableLayout>tbody tr{cursor:pointer}.modalSubmit{height:auto;padding:40px 0}.modalSubmit__inner{text-align:center;position:relative}.modalSubmit__tit{font-size:25px;font-weight:500}.modalSubmit__box{display:flex;height:320px;flex-direction:column;justify-content:space-between}.modalSubmit__cont--reason{font-size:14px;text-align:left}.modalSubmit__cont--reason>h3{font-size:16px;margin-bottom:15px;color:#555}.modalSubmit__cont--reason>ul>li{margin-bottom:7px;line-height:1.5em;color:#555}.modalSubmit__cont--error{margin-top:12px}.modalSubmit__cont--txt{font-size:18px}.modalSubmit__cont--imgTxt{display:flex;align-items:center;justify-content:center;font-size:18px}.modalSubmit__cont--imgTxt>img{margin:0 10px}.modalBasic__inner{padding:50px 0 90px}.toastModal{width:800px;padding:20px;position:fixed;bottom:-100%;left:0;font-size:14px;background:#555;border-radius:10px;overflow:hidden;z-index:1000;transition:all .5s}.toastModal.active{bottom:0}.toastModal__inner{display:flex;align-items:center;justify-content:space-between}.toastModal__txt{color:#fff}.toastModal__btn{display:flex;height:45px;margin-left:20px;align-items:center;border-left:1px solid #fff}.toastModal__btn>button{height:100%;padding:0 10px;line-height:45px;white-space:nowrap;color:#fff}.toastModal__btn--bar{display:block;width:1px;height:13px;text-indent:-9999px;font-size:0;background:#fff}.priceOffer__modal--subTit{display:block;font-size:20px;font-weight:400;margin-bottom:10px}.priceOffer__modal--subTxt{display:block;font-size:14px;margin-bottom:10px}.priceOffer__modal--subTxt>strong{color:#0a75c2}.priceOffer__modal--guide>h3{font-size:16px;font-weight:500;margin-bottom:20px}.priceOffer__modal--guide>ul>li{font-size:14px;line-height:1.5em;margin-bottom:15px}.priceOffer__modal--guide>ul>li:last-child{margin-bottom:none}.comment{margin-top:90px}.comment__inner{padding:0 50px}.comment__top{display:flex;height:60px;align-items:center;font-size:15px;color:#333;background:linear-gradient(180deg,#f4f4f4,#fcfcfc);border-radius:10px 10px 0 0}.comment__top,.comment__top>span{font-weight:400}.comment__list{max-height:500px;overflow-y:scroll}.comment__list>li{padding:20px 0;border-bottom:1px solid #ddd}.comment__list--box{display:flex;justify-content:space-between}.comment__list--left{width:80%}.comment__list--top{display:flex;align-items:center}.comment__list--btns{display:flex}.comment__list--btn{text-align:center}.comment__list--btn>button{width:45px;height:45px;position:relative;z-index:1}.comment__list--btn>button>img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-o-object-fit:cover;object-fit:cover}.comment__list--btn span{display:block;margin-top:-8px;font-size:13px;font-weight:400;color:#333}.comment__list--best{width:58px;height:20px;margin:0 0 15px 20px;line-height:20px;border-radius:5px;text-align:center;font-size:12px;font-weight:400;color:#fff;background:#23d4ca}.comment__list--txt{margin-top:10px;font-size:14px;line-height:1.3em}.comment__list--date{font-size:13px;color:#999}.comment__user{display:flex;align-items:center;font-weight:400;font-size:15px}.comment__user--img{width:25px;height:25px;margin-right:8px;position:relative;border-radius:50%;overflow:hidden}.comment__write{display:flex;height:155px;align-items:center;justify-content:space-between;border-radius:0 0 10px 10px;background:linear-gradient(0deg,#f4f4f4,#fcfcfc);box-shadow:0,4px,4px hsla(0,0%,60%,.25)}.comment__write--input{width:calc(100% - 205px);height:55px;border-radius:5px;overflow:hidden}.comment__write--input>input{width:100%;height:100%;padding:0 40px;font-size:15px;border:none}.comment__write--input>input::-moz-placeholder{color:#777}.comment__write--input>input:-ms-input-placeholder{color:#777}.comment__write--input>input::placeholder{color:#777}.comment__write--btn{width:185px;height:55px;line-height:55px;border-radius:5px;font-size:15px;text-align:center;color:#fff;background:#0a75c2}.slide__slider.hooper{width:100%;height:100%;position:relative}.slide__slider .hooper-pagination{bottom:7px}.slide__slider .hooper-indicator{margin:0 4px;width:50px;height:7px;opacity:.7}.slide__slider .hooper-indicator.is-active,.slide__slider .hooper-indicator:hover{background:#34509d}.slide__slider:after{content:\"\";display:block;padding-bottom:500px}.slide__slider>div{display:block;width:100%;height:100%;position:absolute}.slide__btn{display:flex;align-items:center;justify-content:center;margin-top:8%}.slide__btn>button{width:45px;height:45px;transform:translateY(-50%)}.slide__btn>button.hooper-next{transform:translateY(-50%) rotate(180deg)}.slide__arrow>i{display:block;width:3px;height:16px;border-radius:10px;position:absolute;background:#333}.slide__arrow--top{top:4px;transform:rotate(35deg)}.slide__arrow--bottom{bottom:2px;transform:rotate(143deg)}.slide__nft--top{top:9px;transform:rotate(35deg)}.slide__nft--bottom{bottom:9px;transform:rotate(140deg)}.itemList__cards{display:grid;width:100%;height:100%;grid-template-columns:repeat(4,1fr);grid-column-gap:2%;-moz-column-gap:2%;column-gap:2%;grid-row-gap:50px;row-gap:50px}.itemList__card{transition:all .5s}.itemList__card:hover{margin-top:-10px}.itemList__more{display:flex;width:70px;height:50px;margin:70px auto 0;flex-direction:column;align-items:center;justify-content:center;font-size:18px;font-weight:500;color:#555}.itemList__more--arrow{display:block;width:20px;height:20px;margin-top:7px;position:relative}.itemList__more--arrow>i{display:block;width:4px;height:15px;border-radius:10px;position:absolute;top:0;background:#555}.itemList__more--top{left:4px;transform:rotate(135deg)}.itemList__more--bottom{right:4px;transform:rotate(45deg)}.header{width:100%;height:75px;position:fixed;box-shadow:0 1px 3px #ddd;background:#fff;z-index:1000}.header__inner{display:grid;width:1400px;margin:0 auto;height:100%;grid-template-columns:200px 2fr 1fr;justify-content:space-between;align-items:center}.header__logo{width:171px;height:50px}.header__logo>img{width:100%;height:100%}.header__nav{height:100%;line-height:75px;margin-left:45px}.header__nav>ul{display:flex}.header__nav>ul>li{position:relative;margin-right:10px}.header__nav>ul>li>li:last-child{margin-right:0}.header__nav>ul>li>a{display:block;width:100%;font-size:16px;padding:0 15px;text-align:center;white-space:nowrap}.header__nav>ul>li>a.nuxt-link-active>.active{display:block;width:100%;height:3px;background:#0a75c2;position:absolute;left:0;bottom:0}.header__login{display:flex;align-items:center;justify-content:flex-end;height:100%}.header__login--cmt{font-size:15px;color:#333;white-space:nowrap}.header__login--active{display:flex;width:120px;height:100%;margin-left:25px;align-items:center;justify-content:center;position:relative}.header__login--active:hover .header__subNav{top:75px}.header__loginBtns{display:flex;height:60px;line-height:60px}.header__loginBtns>li{font-size:14px;text-align:center;margin-right:30px}.header__loginBtns>li>a{padding:0 15px;white-space:nowrap}.header__loginBtns>li:first-child{margin-right:5px}.header__app--btn{padding:0 20px;font-size:13px}.header__myBtn{z-index:200}.header__myBtn--inner{display:block;width:100%}.header__myBtn--inner>strong{font-size:15px;font-weight:500;color:#333}.header__subNav{width:100%;height:auto;position:absolute;top:-300px;box-shadow:0 1px 4px rgba(85,85,85,.25);z-index:100;background:#fff;transition:all .4s}.header__subNav>li{width:100%;height:40px;position:relative}.header__subNav>li:hover .header__subNav--tit:after{display:block}.header__subNav--tit{display:flex;width:100%;height:100%;align-items:center;justify-content:center;font-size:14px}.header__subNav--tit:after{content:\"\";display:none;width:4px;height:100%;position:absolute;top:0;left:0;background:#0098ec}.side__my>span{display:block;margin-left:34px}.side__action--search{background:#eaf3f9}.side__action--btn{width:100%;height:45px;justify-content:space-between;line-height:45px;padding:0 10px}.side__action--btn,.side__action--tit{display:flex;align-items:center}.side__action--tit>img{margin-right:10px}.side__action>div{overflow:hidden;transition:all .3s}.side__search--inner{display:flex;width:90%;height:35px;align-items:center;justify-content:space-between;line-height:35px;margin:0 auto;border:1px solid #ddd;border-radius:5px;padding-left:7px;background:#fff;position:relative}.side__search--inner>input{width:calc(100% - 35px);height:100%;font-size:14px;color:#333;border:none}.side__search--inner .page__img{display:block;width:35px;height:35px;position:relative}.side__search--inner .page__img>img{width:14px;height:14px}.side__mobile{display:none;justify-content:space-between;align-items:center}.side__mobile--logo{margin-left:10px}.side__mobile--btn{width:45px;height:45px}.side__mobile--arrow{display:block;width:100%;height:100%;position:relative}.side__mobile--arrow>i{display:block;width:1px;height:11px;border-radius:10px;position:absolute;left:50%;background:#333}.side__mobile--arrowTop{top:13px;transform:translateX(-50%) rotate(50deg)}.side__mobile--arrowBtm{bottom:14px;transform:translateX(-50%) rotate(130deg)}.side__mobile--nav{width:45px;position:relative}.side__mobile--ham{width:25px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);cursor:pointer}.side__mobile--ham>i{display:block;height:2px;background:#15b5ea;margin-top:5px;position:relative}.side__mobile--ham>i:after{content:\"\";width:0;height:100%;background:#35509e;position:absolute;transition:.5s}.side__mobile--ham>i:first-child:after{transition-delay:.2s}.side__mobile--ham>i:nth-child(2):after{transition-delay:.3s}.side__mobile--ham:hover i{background:#15b5ea}.side__mobile--ham:hover i:after{width:100%}.side__mobile--sideMenu{width:240px;height:100vh;position:fixed;top:0;right:-100%;background:#fff;transition:all .5s;z-index:1002}.side__mobile--sideMenu.active{right:0}.side__mobile--sideMenu--left{left:-100%}.side__mobile--sideMenu--left.active{left:0}.side__mobile--login,.side__mobile--login>a{display:block;width:100%;height:45px;line-height:45px;text-align:center}.side__mobile--toggle{overflow:hidden;transition:all .2s}.side__mobile--tit{display:flex;height:45px;align-items:center;justify-content:center}.side__mobile--tit>img{margin-left:5px}.side__mobile--menu{display:flex;width:100%;height:45px;align-items:center;line-height:45px;padding:0 10px}.side__mobile--menu.active>span{color:#0a75c2}.side__mobile--menu>img{margin-right:10px}.side__mobile--label{display:flex;width:100%;height:45px;align-items:center;line-height:45px}.side__mobile--label>label{width:100%;height:100%;padding:0 10px}.side__mobile--back{display:none;position:fixed;top:0;right:0;width:100vw;height:100vh;background:#000;opacity:.3;z-index:1001;transition:all .5s}.side__mobile--back.active{display:block}.side__more{background:#eaf3f9}.side__more--tit{display:flex;width:100%;justify-content:space-between;align-items:center}.side__more--arrow{width:45px;height:45px;position:relative;transition:all .3s;transform:rotate(-180deg)}.side__more--arrow.active{transform:rotate(0deg)}.side__more--arrow.active>i{top:45%}.side__more--arrow>i{display:block;width:2px;height:9px;border-radius:10px;position:absolute;top:45%;background:#333}.side__more--top{left:21px;transform:rotate(45deg) translateY(-50%)}.side__more--bottom{left:22px;transform:rotate(-45deg) translateY(-50%)}.footer{width:100%;padding-top:60px;background:#333f50}.footer__top{display:flex;justify-content:space-between;margin-bottom:110px}.footer__leftTxt{font-size:15px;color:#8497b0}.footer__logo{width:auto;height:70px;margin-bottom:22px}.footer__logo img{width:auto;height:100%}.footer__right{display:flex}.footer__menuTxt{margin-left:80px}.footer__menuTxt>h3{font-size:15px;margin-bottom:20px;font-weight:300;color:#8497b0}.footer__menuLIst>li>a{display:block;font-size:15px;margin-bottom:10px;color:#bfd8fb}.footer__menuLIst--bar:before{content:\"\";display:block;width:12px;height:1px;margin:50px 0 6px;background:#bfd8fb}.footer__info{height:60px;line-height:60px;border-top:1px solid #8497b0}.footer__infoList,.footer__infoList>li{display:flex;align-items:center}.footer__infoList>li{font-size:14px;margin-right:10px;color:#8497b0}.footer__infoList>li:last-child{margin-right:0}.footer__infoList>li:after{content:\"\";display:block;width:1px;height:13px;background:#8497b0;margin-left:10px}.footer__infoList>li:last-child:after{display:none}.footer__copy{font-size:14px;color:#8497b0;padding-bottom:20px}.footer__mobile{display:none;padding:40px 0}.footer__mobile--inner{text-align:center}.footer__mobile--menu{display:flex;align-items:center;justify-content:center}.footer__mobile--menu>li>a{display:block;font-size:13px;padding:10px 5px;color:#bfd8fb}.footer__mobile--bar{display:flex;align-items:center}.footer__mobile--bar:after,.footer__mobile--bar:before{content:\"\";display:block;width:1px;height:13px;background:#bfd8fb}.footer__mobile--info span{display:block;font-size:13px;margin-bottom:10px;line-height:1em;color:#8497b0}.footer__mobile--name{display:flex!important;align-items:center;justify-content:center}.footer__mobile--name>i{font-size:13px;line-height:1em;color:#8497b0}.footer__mobile--name>em{display:block;width:1px;height:13px;background:#8497b0;margin:0 10px}.footer__mobile--sns{display:flex;align-items:center;justify-content:center}.footer__mobile--sns>a{display:block;width:45px;height:45px;position:relative;margin:0 2.5px}.footer__mobile--sns>a img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.footer__mobile--copy{font-size:13px;color:#8497b0}.comment__inner{padding:0 20px}.comment__write{height:120px}.comment__write--input{width:calc(100% - 155px);height:45px}.comment__write--input>input{padding:0 15px}.comment__write--btn{width:135px;height:45px;line-height:45px}.service>h1{text-align:center}.service__content{margin-top:70px}.service__content>h2{margin:50px 0 15px}.service__content>h2:first-child{margin-top:0}.main__slider{position:relative;transition:background-color .35s ease-out 0s;background:#80dbcf}.main__slide--more{display:flex;align-items:center;font-size:23px}.main__slide--btn{display:block;width:45px;height:45px;position:relative}.main__slide--btn>i{height:13px;left:21px}.main__slide--btn .slide__arrow--top{top:13px;transform:rotate(-45deg)}.main__slide--btn .slide__arrow--bottom{bottom:11px;transform:rotate(45deg)}.main__slide--inner{display:flex!important;width:1400px;margin:0 auto;height:100%;align-items:center;justify-content:space-between}.main__slide--left.hooper{width:600px;height:auto;margin:0 20px}.main__slide--left.hooper:after{content:\"\";display:block;padding-bottom:350px}.main__slide--left.hooper .hooper-list{width:100%;height:100%;position:absolute}.main__slide--left.hooper .hooper-slide{position:relative}.main__slide--box{padding:0 35px;display:block}.main__slide--box,.main__slide--img{width:100%;height:100%}.main__slide--img.back1{background:#ddfffa}.main__slide--img.back2{background:#d0faff}.main__slide--img.back3{background:#dee9f9}.main__slide--txt{width:80%;text-align:center;position:absolute;bottom:20px;left:50%;transform:translateX(-50%)}.main__slide--right{display:flex;flex-direction:column;justify-content:center;z-index:5}.main__slide--comment{margin-bottom:40px}.main__slide--comment>p{font-size:40px;font-weight:500;color:#fff}.main__slide--round{height:60px;line-height:60px;padding:0 40px;font-size:25px;font-weight:300;text-align:center;border-radius:50px;color:#fff;background:#2c796f}.main .slide__arrow>i{background:#fff}.main .slide__arrow--top{top:9px}.main .slide__arrow--bottom{bottom:9px}.main__cont{margin:90px auto}.main__cont>h2{font-size:30px;line-height:1em;font-weight:500;margin-bottom:40px}.main__squareItem--items{height:100%;position:relative}.main__squareItem--items:after{content:\"\";display:block;padding-bottom:48%}.main__squareItem--recommendBack{width:100%;height:100%;position:relative}.main__squareItem--recommendBack:after{content:\"\";display:block;padding-bottom:48%}.main__squareItem--recommend{width:100%;height:100%;position:absolute;grid-gap:6% 3%;gap:6% 3%;grid-template-columns:repeat(4,1fr)}.main__squareItem--recommend>li:last-child{display:none}.main__squareItem--box{grid-gap:7%;gap:7%;grid-template-columns:repeat(2,1fr)}.main__squareItem--list{display:grid}.main__squareItem--itemBack{display:grid;width:100%;height:100%;grid-gap:0 3.5%;gap:0 3.5%;grid-template-columns:repeat(2,1fr);position:absolute}.main__squareItem--item{width:100%;height:100%;border-radius:10px;position:relative;overflow:hidden;box-shadow:-3px 3px 4px #fafafa,-7px 5px 9px #d2d2d2,4px 18px 19px #d2d2d2}.main__squareItem--item:after{content:\"\";display:block;padding-bottom:100%}.main__squareItem--item>a{display:block;width:100%;height:100%;position:absolute}.main__squareItem--item .hover{bottom:-100%}.main__squareItem--item:hover .hover{bottom:0}.main__squareItem--info{display:flex;width:100%;height:100%;flex-direction:column;align-items:center;justify-content:center;position:absolute;left:0;z-index:1;background:rgba(0,0,0,.8);transition:all .3s}.main__squareItem--info>i{display:block;color:#fff}.main__squareItem--big{height:20%}.main__squareItem--name{width:auto;max-width:90%;height:auto;margin-bottom:10px;font-size:19px;font-weight:400;text-align:center;-webkit-line-clamp:2;word-break:break-word}.main__squareItem--user{width:auto;max-width:80%;height:auto;font-size:14px}.main__tabItem{width:100%;padding:90px 0;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:50%}.main__tabItem--tab{margin-bottom:40px}.main__tabItem--tit>li{margin-right:40px}.main__tabItem--tit>li:last-child{margin-right:0}.main__tabItem--tit>li>span{display:block;font-size:30px;line-height:1em;font-weight:500;color:#222f52}.main__tabItem--tit>li>span.active{color:#34509d}.main__tabItem--tit>li>span.active:before{width:100%}.main__tabItem .card:after{box-shadow:-3px 3px 4px #d2d2d2}.main__tabItem .card__topImg{height:100%;border-radius:8px;overflow:hidden}.main__tabItem .card__topImg:hover,.main__tabItem .card__topImg:hover img{-o-object-fit:cover;object-fit:cover}.main__tabItem .card__topImg:after{display:none}.main__tabItem .card__name{font-size:20px;font-weight:500;line-height:1.25em;color:#fff}.main__tabItem .card__name.page__split{height:auto;-webkit-line-clamp:2;word-break:break-word}.main__tabItem .card__imgLink{width:100%;height:100%;position:absolute}.main__tabItem .card__back{z-index:9}.main__tabItem .card__userName{color:#fff;line-height:25px;font-weight:400}.main__tabItem .card__user{width:50%;position:absolute;bottom:20px;left:17px;z-index:11}.main__tabItem .hooper{height:100%}.main__tabItem .hooper-slide{padding:0 1%}.main__tabItem .hooper-prev{left:-35px}.main__tabItem .hooper-next{right:-35px}.main__tabItem .slide__btn{margin-top:0}.main__tabItem .slide__arrow>i{width:5px;height:23px;background:#fff}.main__card--info{display:flex;width:100%;height:130px!important;padding:17px;position:absolute;left:0;bottom:0;flex-direction:column;justify-content:space-between;background:linear-gradient(0deg,rgba(3,3,3,.75),rgba(3,3,3,.5),rgba(3,3,3,.25),transparent)}.main__btmBanner{width:100%;height:400px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-repeat:no-repeat;background-size:cover;background-position:50%}.main__btmBanner>a{display:block;width:100%;height:100%;background:rgba(0,0,0,.35)}.main__btmBanner--inner{display:flex;height:100%;flex-direction:column;align-items:center;justify-content:center;text-align:center;grid-gap:9% 0;gap:9% 0}.main__btmBanner--inner>i{display:block;color:#fff}.main__btmBanner--txt{font-size:45px;font-weight:500}.main__btmBanner--txt>br{display:none}.main__btmBanner--btn{width:400px;height:65px;line-height:65px;text-align:center;font-size:25px;border-radius:65px;background:#17a1dc}.join legend{display:block;font-size:0;z-index:-9999px}.join__top{text-align:center}.join__top--logo{width:102px;height:auto;margin:0 auto 90px}.join__top>h1{font-size:25px;font-weight:500;color:#333}.join__top--noti{display:flex;align-items:center;justify-content:center;height:50px;line-height:50px;border-radius:10px;background:#eaf3f9}.join__top--noti>img{width:15px;height:17px;margin-right:10px}.join__top--txt{display:flex;align-items:center;justify-content:center;font-size:18px;color:#555}.join__top--txt>img{margin-right:10px}.join__top--txt>br{display:none}.join__top--comment{display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:400;color:#555;text-align:center;margin:20px 0 40px}.join__top--complete{margin-bottom:50px;font-size:25px;font-weight:500;text-align:center;color:#333}.join__agree{padding:20px 40px;border-radius:10px;overflow:hidden;background:#f9f9f9}.join__recapcha>img{margin:0 auto}.join__slide .hooper{height:auto}.join__slide--img,.join__slide--img>a{width:100%;height:100%;position:relative}.join__slide--img>a{display:block;margin:0 auto;overflow:hidden}.join__slide--img>a>img{background:#ff7c7c}.join__slide--inner{width:71.43%;height:auto;margin:0 auto;overflow:hidden}.join__slide--inner:after{content:\"\";display:block;padding-bottom:100%}.join__slide--inner>img{background:#ff7c7c}.login__check{display:flex;justify-content:space-between}.login__check>div{width:auto}.login__check label>span{white-space:nowrap}.login__find--pass{padding:10px 0;white-space:nowrap}.login__top--noti{display:flex;align-items:center;justify-content:center;height:50px;line-height:50px;border-radius:10px;background:#eaf3f9;margin:20px 0 40px}.login__top--noti>img{width:15px;height:17px;margin-right:10px}.login__top--notiBar{display:flex;align-items:center}.login__top--notiBar>em{display:block;width:1px;height:15px;background:#555;margin:0 10px}.listPage__info--modal{display:none;border-bottom:1px solid #ddd;margin-bottom:20px}.listPage__info--btn{display:flex;height:45px;align-items:center}.listPage__info--btn>span{font-size:16px;font-weight:400}.listPage__info--btn>img{margin-left:5px}.listPage .slide__btn{width:1400px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin-top:0}.listPage .slide__btn>button{width:42px;height:42px;border-radius:50%;position:absolute;background:hsla(0,0%,94.9%,.54)}.listPage .slide__arrow>i{display:block;width:3px;height:11px;border-radius:10px;position:absolute;background:#333}.listPage .slide__arrow--top{top:19px;left:18px;transform:rotate(135deg)}.listPage .slide__arrow--bottom{bottom:18px;right:21px;transform:rotate(45deg)}.listPage__slider{width:100%;height:100%}.listPage__slider--inner{width:100%;height:100%;position:absolute}.listPage__slider--inner>div{overflow:visible;overflow:initial}.listPage__slider--inner.hooper{width:100%;height:auto;position:absolute}.listPage__slider--inner.hooper ul{padding:3px 0 34px}.listPage__slider:after{padding-bottom:600px}.listPage__slide{width:100%;height:100%;position:relative}.listPage__slide--inner{width:100%;margin:0 auto}.listPage__slide__btn{position:absolute;bottom:20px;margin-top:0}.listPage__img{width:40%;height:auto;position:relative}.listPage__img:hover img{-o-object-fit:contain;object-fit:contain}.listPage__img:after{content:\"\";display:block;padding-bottom:100%}.listPage__img>p{width:100%;height:100%;position:absolute;box-shadow:-3px 3px 4px #fafafa,-7px 5px 9px #d2d2d2,4px 18px 19px #d2d2d2}.listPage__banner{width:100%}.listPage__banner--back{width:100%;height:100%;background:rgba(0,0,0,.5)}.listPage__banner--back>img{z-index:-1}.listPage__left{display:flex;width:73vw;max-width:1200px;justify-content:space-between;position:absolute;left:50%;bottom:90px;transform:translateX(-50%)}.listPage__left .salePage__tit{color:#fff}.listPage__tit{height:auto!important;color:#fff}.listPage__num--tit,.listPage__user--name{font-size:20px;color:#fff}.listPage__num--tit{display:block;margin-bottom:15px}.listPage__time{margin-bottom:33px}.listPage__time--clock{width:230px;font-size:24px;padding:10px 0;border-radius:10px;text-align:center;background:hsla(0,0%,100%,.6)}.listPage__price--num{font-size:30px;font-weight:500;color:#fff}.listPage__price--num>span{font-size:23px;font-weight:500;color:#fff}.listPage__price--tit{margin-bottom:0}.listPage__cont--top{display:flex;align-items:top;justify-content:space-between;margin-bottom:40px}.listPage__cont--tit{display:flex;align-items:center;height:30px}.listPage__cont--tit>span{display:block;margin-right:10px;font-size:30px;line-height:1em;font-weight:400}.listPage__cont--back{padding:90px 0}.listPage__user{display:flex;align-items:center}.listPage__user--img{width:45px;height:45px;border-radius:50%;position:relative;overflow:hidden;margin-right:10px}.listPage__bar{border-top:1px solid #ddd;border-bottom:1px solid #ddd}.listPage__bar--info{display:flex;height:60px;padding:0 20px;align-items:center;justify-content:space-between}.listPage__bar--menu{display:flex}.listPage__bar--menu>li{display:flex;align-items:center}.listPage__bar--menu>li>button{padding:5px;color:#999}.listPage__bar--menu>li>button.active{color:#0a75c2}.listPage__bar--menu>li:before{content:\"\";display:block;width:1px;height:15px;background:#999}.listPage__bar--menu>li:first-child:before{display:none}.listPage__bar--filter{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid #ddd;border-bottom:1px solid #ddd}.listPage__bar--filter>li{display:flex;height:50px;align-items:center;line-height:50px}.listPage__bar--filter>li>button{display:flex;width:100%;justify-content:center;height:100%;font-size:17px;text-align:center}.listPage__bar--filter>li>button.active{color:#fff;background:#0098ec}.listPage__bar--filter>li:before{content:\"\";display:block;width:1px;height:40px;background:#ddd}.listPage__bar--filter>li:first-child:before{display:none}.listPage__select{position:relative}.listPage__select .side__more--arrow{width:30px;height:30px;margin-left:10px;transform:rotate(0deg)}.listPage__select .side__more--arrow.active{transform:rotate(-180deg)}.listPage__select .side__more--arrow.active>i{top:45%}.listPage__select .side__more--arrow>i{top:55%}.listPage__select .side__more--top{left:13px}.listPage__select .side__more--bottom{left:14px}.listPage__select--pick{display:flex;width:130px;align-items:center;padding:0 10px}.listPage__select--pick>span{white-space:nowrap}.listPage__select--option{width:130px;position:absolute;top:45px;overflow:hidden;transition:all .2s;z-index:100;box-shadow:0 1px 4px rgba(85,85,85,.25);background:#fff}.listPage__select--option>li{height:40px;line-height:40px}.listPage__select--option>li>button{width:130px;text-align:left;padding:0 10px}.listPage__select--option>li:hover>button{color:#0098ec}.auction{padding-bottom:90px}.auction__end:last-child,.auction__ing:last-child,.auction__soon:nth-child(5),.auction__soon:nth-child(6){display:none}.auction__cont{margin-bottom:90px}.auction .listPage__cont--tit{width:155px}.salePage__contBox{border-bottom:1px solid #999}.salePage__cont{display:flex;justify-content:space-between}.salePage__cont--left{width:60.715%}.salePage__cont--tit{width:calc(100% - 140px)}.salePage__cont--right{width:35.715%}.salePage__cont--right--top{border-bottom:1px solid #999;margin-bottom:40px}.salePage__cont--info,.salePage__cont--price,.salePage__cont--recent,.salePage__cont--table{display:flex;flex-direction:column;justify-content:space-between}.salePage__cont--table{padding-bottom:20px;border-bottom:1px solid #999}.salePage__contGrid{display:grid;grid-template-columns:60.715% 35.715%;justify-content:space-between;grid-gap:40px;border-bottom:1px solid #999;padding-bottom:140px}.salePage__contGrid--right--top{border-bottom:1px solid #999;margin-bottom:40px}.salePage__contGrid--info,.salePage__contGrid--price,.salePage__contGrid--recent,.salePage__contGrid--table{display:flex;flex-direction:column;justify-content:space-between}.salePage__contGrid--table{padding-bottom:20px;border-bottom:1px solid #999}.salePage__state>span{width:87px;border-radius:5px}.salePage__tit{font-size:40px;line-height:1.2em;margin:20px 0;font-weight:500}.salePage__user{display:flex;align-items:center}.salePage__user--img{width:45px;height:45px;margin-right:10px;border-radius:50%;overflow:hidden;position:relative}.salePage__user--img>img{width:100%;height:100%;position:absolute;-o-object-fit:cover;object-fit:cover;background-color:#ddd}.salePage__user--name{font-size:20px;line-height:1em;color:#777}.salePage__itemImg{width:100%;height:100%;position:relative}.salePage__itemImg:after{content:\"\";display:block;padding-bottom:55.884%}.salePage__itemImg>span{display:block;width:100%;height:100%;position:absolute}.salePage__itemImg:hover img{-o-object-fit:contain;object-fit:contain}.salePage__comment{font-size:16px;color:#333;height:500px;overflow-y:scroll}.salePage__share{display:flex;justify-content:flex-end;align-items:flex-start}.salePage__share--like{display:flex;align-items:center;position:relative;color:#555}.salePage__share--like>span{white-space:nowrap}.salePage__share--like>.btn__ico img{width:24px;height:auto}.salePage__share .btn__share>img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.salePage__edition{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:34px}.salePage__editionNum--count{font-size:16px}.salePage__editionNum--total{font-size:13px;color:#555}.salePage__nowEdition{font-size:18px}.salePage__anotherEdition{display:flex;align-items:center;font-size:16px;line-height:1em;font-weight:500}.salePage__anotherEdition--arrow{display:block;width:9px;height:9px;margin-left:10px;border-top:3px solid #111;border-right:3px solid #111;transform:rotate(45deg)}.salePage__price{margin-bottom:75px}.salePage__price--time{display:flex;height:250px;margin-bottom:0;flex-direction:column;justify-content:space-between}.salePage__starDate{width:100%;padding:18px 0;font-size:30px;font-weight:400;text-align:center;border-radius:10px;background:#eaf3f9}.salePage__period{font-size:22px;font-weight:500;line-height:1em;margin-top:20px;text-align:center}.salePage__priceInfo{display:flex;align-items:center;justify-content:space-between}.salePage__priceInfo--tit{font-size:22px;line-height:1em;color:#666}.salePage__priceInfo--num{font-size:30px;line-height:1em;font-weight:500}.salePage__priceInfo--num>span{font-size:20px;line-height:1em;font-weight:500}.salePage__priceInfo--commission{font-size:17px;margin:15px 0 30px}.salePage__priceInfo--commission>span{font-size:17px}.salePage__tableTop{display:flex;align-items:center;justify-content:space-between}.salePage__TableLayout>thead{padding:0 30px;text-align:left}.salePage__TableLayout>tbody>tr{padding:0 30px}.salePage__TableLayout>tbody>tr>td{display:block;height:50px;text-align:center}.salePage__TableLayout>tbody>tr>td>span{font-size:14px}.salePage__TableLayout--250{height:250px;overflow-y:scroll}.salePage__TableLayout--400{height:400px;overflow-y:scroll}.salePage__TableLayout--graph{height:400px;margin-top:70px;border:1px solid #ddd}.salePage__TableLayout--auto{height:auto;max-height:auto;overflow-y:scroll}.salePage__ownerUser{display:flex;align-items:center;justify-content:flex-end;margin-top:20px}.salePage__ownerUser--img{width:30px;height:30px;margin-right:10px;border-radius:50%;overflow:hidden;position:relative}.salePage__chain>li{display:flex;justify-content:space-between;margin-bottom:25px}.salePage__chain>li>span{display:block;width:90px;font-size:14px}.salePage__chain>li>span.page__split{width:calc(100% - 90px)}.salePage__editionInfo{height:430px;padding:20px;margin-top:40px;border-radius:10px;background:#eaf3f9}.salePage__notice{font-size:14px}.salePage__recommendItem--tit{margin-bottom:30px}.salePage__recommendItem--inner{width:1400px;margin:0 auto}.saleItem .card:after{box-shadow:-3px 3px 4px #ebebeb,-7px 5px 9px #d2d2d2,4px 18px 19px #d2d2d2}.saleItem__itemImg{width:100%;height:100%;padding-bottom:40px}.saleItem__itemImg--close{position:absolute;top:10px;right:10px}.saleItem__itemImg--border{border-bottom:1px solid #ddd}.saleItem__itemImgInner{height:auto;position:relative}.saleItem__itemImgInner>div{width:100%;height:100%;position:absolute}.saleItem__itemImgInner>div:hover img{-o-object-fit:contain;object-fit:contain}.saleItem__itemImgInner:after{content:\"\";display:block;padding-bottom:50%}.saleItem__itemInfo{padding:40px 0}.saleItem__itemCont{margin-bottom:30px}.saleItem__itemCont--tit{font-size:30px;font-weight:500}.saleItem__itemCont--txt{font-size:16px;max-height:200px;overflow-y:scroll}.saleItem__itemCont:last-child{margin-bottom:0}.saleItem__itemBox--name{font-size:30px;font-weight:500;margin:20px 0}.saleItem__itemBox--user{display:flex;align-items:center;margin-bottom:40px}.saleItem__itemBox--userImg{width:45px;height:45px;border-radius:50%;overflow:hidden}.saleItem__itemBox--userName{font-size:21px;color:#777;margin-left:10px}.saleItem__itemBox--edition{font-size:20px;font-weight:400}.saleItem__itemBox--edition>span{display:block;font-size:20px;color:#777}.saleItem__itemBox--priceTit{font-size:20px;color:#666}.saleItem__itemBox--priceNum{font-size:30px;line-height:1em;font-weight:500}.saleItem__itemBox--priceNum>span{font-size:20px;line-height:1em;font-weight:500}.saleItem__itemBoxLine{display:flex;align-items:center;justify-content:space-between}.saleItem>h1{border-bottom:1px solid #ddd;padding-bottom:40px}.saleItem__addItem{width:23.786%;margin:0 auto 40px;text-align:center}.saleItem__addBtn{display:block}.saleItem .card:after{background:#eee}.saleItem__addBtnIn{display:block;width:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.saleItem__addBtnIn--img{display:block;width:16.687%;margin:0 auto 20px}.saleItem__addBtnIn--img img{width:100%}.saleItem__addBtnIn--tit{display:block;font-size:25px;line-height:1em;font-weight:500;white-space:nowrap;color:#999}.saleItem__form{border-top:1px solid #ddd}.saleItem__form>form>fieldset{padding:40px 0}.saleItem__form>form>fieldset.agreeLayout{border-top:1px solid #ddd}.saleItem__btn{display:flex;justify-content:space-between}.saleItem__btn input[type=submit]{border:none;cursor:pointer}.systemPage{display:flex;align-items:center;justify-content:space-around;min-height:calc(100vh - 478px)}.systemPage__left{width:420px}.systemPage__write--tit{font-size:25px;font-weight:500}.systemPage__write--txt{font-size:18px;color:#555;margin:40px 0}.systemPage__write--txt>a{display:inline;text-decoration:underline}.systemPage__img{width:100%;height:100%;position:relative}.systemPage__img>div{width:100%;height:100%;position:absolute}.systemPage__img:after{content:\"\";display:block;padding-bottom:95%}.systemPage__btn>a{display:flex;font-size:15px;padding-left:15px;align-items:center;margin-bottom:10px}.systemPage__btn>a>img{margin-right:10px}.systemPage__btn>a:last-child{margin-bottom:0}.tabMenu{margin:0 auto 90px;text-align:center}.tabMenu__tit{width:100%;display:grid}.tabMenu__tit--btn{text-align:center}.tabMenu__tit--btn>button{width:100%;font-size:20px;font-weight:400;height:50px;line-height:50px}.tabMenu__tit>li{text-align:center}.tabMenu__tit>li>button{width:100%;font-size:18px;font-weight:400;height:50px;line-height:50px}.tabMenu__tit>li>button.imgBtn{display:flex;height:80px;align-items:center;justify-content:center;line-height:1em}.tabMenu__tit>li>button.imgBtn>img{width:31px;margin-right:6px}.tabMenu__bar{height:10px;border-radius:20px;box-shadow:0 0 3px 1px hsla(0,0%,46.7%,.25);position:relative}.tabMenu__bar--active{height:10px;background:#35509e;border-radius:20px;position:absolute;left:0;transition:all .3s}.tabMenu__bar--active2{width:50%}.tabMenu__bar--active3{width:33.33333%}.tabMenu__bar--active4{width:25%}.tabMenu__bar--active5{width:20%}.sideMenu{width:160px;box-shadow:0 1px 4px rgba(85,85,85,.25)}.sideMenu__top{height:60px;line-height:60px;text-align:center;font-size:22px;color:#fff;background:#222f52}.sideMenu__inner{display:flex;flex-direction:column;align-items:flex-end;border-top:none;padding:25px 0}.sideMenu__tit{width:100%;text-align:right;position:relative}.sideMenu__tit>a{display:block;width:100%;height:45px;line-height:45px;padding:0 15px}.sideMenu__tit--inner{font-size:18px}.sideMenu__tit--active{display:block;font-size:0;text-indent:-9999px;width:auto;height:3px;border-radius:10px}.sideMenu__tit--icon{position:absolute;top:50%;left:20px;transform:translate(-50%,-50%)}.sideMenu__tit>a.nuxt-link-active,.sideMenu__tit>a.nuxt-link-active .active{background:#eaf3f9}.myPage__info{text-align:center;margin-bottom:90px}.myPage__topProfile{margin-bottom:40px}.myPage__topProfile>.myPage__profileImg{width:200px;margin-bottom:20px}.myPage__profileImg{display:block;width:300px;height:100%;margin:0 auto;border-radius:50%;overflow:hidden;position:relative;background:#eaf3f9}.myPage__profileImg:after{content:\"\";display:block;padding-bottom:100%}.myPage__img,.myPage__profileImg>div{width:100%;height:100%;position:absolute}.myPage__img--no>img{width:86%;height:auto;top:auto;bottom:0;left:50%;transform:translateX(-50%)}.myPage__nickname{font-size:30px;font-weight:500;text-align:center}.myPage__comment{font-size:25px}.myPage__badgeBox--tit{font-size:20px;font-weight:400}.myPage__badgeBox--back{height:126px;position:relative;border-radius:10px;background:#eaf3f9}.myPage__badgeBox--inner{display:flex;width:500px;margin:0 auto;justify-content:center;align-items:flex-end;position:relative}.myPage__badgeBox--inner>ul>li{width:calc(100% - 100px)}.myPage__badge .hooper-list{padding-top:50px}.myPage__badge .hooper-list>ul{height:50px}.myPage__badge--inner{display:flex;grid-gap:0 15px;gap:0 15px;align-items:center;justify-content:center}.myPage__badge--img{width:50px;height:50px;margin:0 auto;background-size:cover;position:relative}.myPage__badge--img>img{width:27px;height:27px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:all .3s}.myPage__badge--img.active>img{width:40px;height:40px}.myPage__badge--img.active .myPage__badge--count{display:block}.myPage__badge--nav{width:100%;position:absolute;bottom:47px}.myPage__badge--nav .hooper-prev{left:-70px}.myPage__badge--nav .hooper-next{right:-70px}.myPage__badge--count{display:none;width:20px;height:20px;font-size:12px;border-radius:50%;position:absolute;top:-30px;left:50%;transform:translate(-50%);color:#fff;background:#15b5ea}.myPage__badgeList{display:grid;width:calc(100% - 100px);margin:0 auto;grid-template-columns:repeat(8,1fr);justify-content:space-between}.myPage__badgeList>li{margin:0 auto;cursor:pointer}.myPage__snsBox{height:0;overflow:hidden;transition:all .3s}.myPage__snsBox.active{height:50px}.myPage__sns{display:flex;align-items:center;justify-content:center;grid-gap:0 12px;font-size:20px}.myPage__sns>li{cursor:pointer}.myPage__sns--img{width:20px;height:20px}.myPage__sns--img>img{width:100%;height:100%}.myPage__sns--url{font-size:16px;line-height:1em}.myPage__editBtn{text-align:center;margin:0 auto}.myPage__tabMenu{width:1000px}.myPage__tabMenu--tit{grid-template-columns:repeat(4,1fr)}.myPage__tabMenu--tit.user{grid-template-columns:repeat(3,1fr)}.myPage__slide.hooper{width:1040px;margin:0 auto 70px;height:auto}.myPage__slide.hooper .hooper-list{height:auto;padding-bottom:36px}.myPage__slide.hooper>li{height:auto}.myPage__slide.hooper .card{padding:10px 25px 0}.myPage__slide.hooper .card:after{box-shadow:-3px 3px 3px #fafafa,7px 12px 18px #e3e3e3,-3px 3px 15px #e4e4e4}.myPage__slide.hooper .card__inner{width:calc(100% - 50px)}.myPage__slide.hooper button>svg{width:50px;height:50px;opacity:.3;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.myPage__slide.hooper .hooper-prev{left:-29px}.myPage__slide.hooper .hooper-next{right:-29px}.myPage__slide .slide__arrow>i{height:20px;background:#555}.myPage__slide .slide__arrow--top{top:7px}.myPage__slide .slide__arrow--bottom{bottom:8px}.myPage__slide .slide__btn{margin-top:0}.myPage__slide .slide__btn>button{width:50px;height:50px}.myPage__noNft{display:flex;width:932px;align-items:center;justify-content:center;min-height:463px;border-bottom:1px solid #ddd;margin:0 auto 90px}.myPage__noNft--txt{font-size:20px;color:#999}.myPage__nftBtn>a{margin:0 auto}.myPage__writeBox input{padding:0}.myNft__btn--sale{display:flex;justify-content:flex-end;margin-top:40px}.myNft__btn--sale>a{display:flex;align-items:center;justify-content:center;width:150px;height:45px;line-height:45px;padding:0 20px;font-size:16px;border-radius:7px;background:#0a75c2;color:#fff}.myNft .page__search{display:flex;flex-direction:row-reverse;margin-bottom:40px}.myNft .page__search--user{justify-content:center}.myNft .page__search--user .page__search--inner{width:500px}.support__box{display:flex;justify-content:space-between}.support__cont{width:calc(100% - 216px)}.support__top{display:flex;justify-content:flex-end}.support .table table{border-top:1px solid #ccc}.support .table table thead{height:60px;line-height:60px}.support .table table tbody>tr:hover{background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial}.support .table table tbody>tr.active:hover{background:#efefef}.support .page__search{display:flex;flex-direction:row-reverse;margin-bottom:40px}.support__menu,.support__menu--tit{border-bottom:1px solid #ddd}.support__menu--tit{margin-bottom:40px}.support__menu--tit>h1{margin-bottom:20px}.support__menu--list{min-height:300px}.support__menu--name>a{height:45px;line-height:45px;color:#0a75c2}.support__menu--count{font-size:20px;color:#555;margin-bottom:40px}.support__result{margin-bottom:40px}.support__result--top{display:flex;align-items:center}.support__result--tit{width:auto;max-width:calc(100% - 220px);margin-right:15px}.support__result--nav{display:flex;align-items:center}.support__result--nav>span{font-size:14px;color:#999}.support__result--home{display:flex;align-items:center}.support__result--home:after{content:\"\";display:block;width:4px;height:4px;margin:0 5px;border-top:1px solid #999;border-right:1px solid #999;transform:rotate(45deg)}.support__result--second{display:flex;align-items:center}.support__result--second:after{content:\"\";display:block;width:4px;height:4px;margin:0 10px;border-top:1px solid #999;border-right:1px solid #999;transform:rotate(45deg)}.support__chat{padding:50px 0 50px 80px;background:#eaf3f9}.support__chatList{display:flex;margin-bottom:60px}.support__chatList:last-child{margin-bottom:0}.support__chatList--txt{display:flex;align-items:center;margin-bottom:40px;font-size:20px;color:#333}.support__chatList--txtBox{margin-top:70px;margin-left:80px}.support__chatList--num{display:flex;width:32px;height:32px;align-items:center;justify-content:center;margin-right:12px;font-size:16px;font-weight:400;border-radius:50%;background:#0a75c2;color:#fff}.support__chatList--comment{width:calc(100% - 32px)}.support__nav{display:flex;align-items:center;height:16px}.support__nav--home{display:flex;font-size:16px;font-weight:400;align-items:center;line-height:1em}.support__nav--home:after{content:\"\";display:block;width:6px;height:6px;margin:0 10px;border-top:2px solid #333;border-right:2px solid #333;transform:rotate(45deg)}.support__nav--second{display:flex;align-items:center;font-size:16px;line-height:1em;color:#555}.support__nav--second:after{content:\"\";display:block;width:6px;height:6px;margin:0 10px;border-top:2px solid #333;border-right:2px solid #333;transform:rotate(45deg)}.support__nav--now{font-size:16px;line-height:1em;color:#555}.support__mobile{display:none;border-top:2px solid #ddd;border-bottom:2px solid #ddd}.support__mobile--list{padding:10px;border-bottom:1px solid #eee}.support__mobile--list:last-child{border-bottom:none}.support__mobile--box{display:flex;align-items:center;justify-content:space-between}.support__mobile--box>span{display:block}.support__mobile--right{width:calc(100% - 50px)}.support__mobile--right>i{display:block}.support__mobile--tit{font-size:14px;font-weight:400}.support__mobile--date{font-size:13px;color:#999}.support__mobile--left{font-size:14px}.supportSearch__top{width:100%;height:500px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;background-size:cover;position:relative}.supportSearch__top--inner{display:flex;width:100%;height:100%;flex-direction:column;align-items:center;justify-content:center}.supportSearch__top--txt{color:#fff;font-size:20px;font-weight:400;margin-bottom:20px}.supportSearch__top--search{width:600px}.supportSearch__cont{display:grid;grid-template-columns:repeat(3,1fr);justify-content:space-between;grid-gap:0 5%}.supportSearch__cont--menu:first-child{margin-bottom:20%}.supportSearch__cont--tit{display:flex;width:100%;height:auto;flex-direction:column;align-items:center;position:relative;border-bottom:1px solid #999}.supportSearch__cont--tit>span{display:block;font-size:22px;font-weight:400;margin:27px 0 20px}.supportSearch__cont--img{width:27%;height:auto;position:relative}.supportSearch__cont--img:after{content:\"\";display:block;padding-bottom:100%}.supportSearch__cont--img>p{width:100%;height:100%;position:absolute}.supportSearch__cont--img>p>img{-o-object-fit:contain;object-fit:contain}.supportSearch__cont--list{padding:20px}.supportSearch__cont--list>ul{width:100%}.supportSearch__cont--list>ul>li>a{display:block;width:100%;height:45px;line-height:45px;font-size:16px}.supportSearch__cont--plus{display:flex;height:45px;line-height:45px;align-items:center;color:#999}.supportSearch__cont--plus>.page__plus{display:block;width:10px;height:10px;text-indent:-9999px;position:relative;margin-right:5px}.supportSearch__cont--plus>.page__plus:after{width:1px;height:10px}.supportSearch__cont--plus>.page__plus:after,.supportSearch__cont--plus>.page__plus:before{content:\"\";display:block;background:#555;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.supportSearch__cont--plus>.page__plus:before{width:10px;height:1px}.usageHistory__tabMenu{width:1165px}.usageHistory__tabMenu--tit{grid-template-columns:repeat(5,1fr)}.calcPage__info{margin-bottom:40px}.calcPage__info--inner{display:flex;width:100%;align-items:flex-start;justify-content:space-between;margin-bottom:20px}.calcPage__infoLeft{width:400px}.calcPage__price{display:flex;align-items:flex-end;justify-content:space-between}.calcPage__price--tit{font-size:20px}.calcPage__price--num{font-size:25px;font-weight:500}.calcPage__price--num>span{font-size:18px;font-weight:500;color:#666}.calcPage__price--margin{margin-left:45px}.calcPage__tabMenu{width:466px;margin-bottom:90px}.calcPage__tabMenu--tit{grid-template-columns:repeat(2,1fr)}.calcPage__noti{font-size:14px;word-break:keep-all}.withdrawalPage__top{display:flex;padding-bottom:40px;align-items:center;justify-content:center;border-bottom:1px solid #ddd}.withdrawalPage__top--txt{font-size:14px;line-height:1.5em;color:#999}.withdrawalPage__content--line{border-bottom:1px solid #ddd;margin-bottom:40px}.withdrawalPage__choose{padding:40px 0;border-radius:10px;background:#eaf3f9;text-align:center;margin-bottom:40px}.withdrawalPage__choose--inner{height:140px;display:flex;flex-direction:column;align-items:center;justify-content:center}.withdrawalPage__choose--inner.height{justify-content:space-between}.withdrawalPage__choose--icon{width:31px;height:auto;margin:0 auto 15px}.withdrawalPage__choose--icon>img{width:100%;height:auto}.withdrawalPage__choose--icon>img.width{width:25px}.withdrawalPage__choose--txt>p{color:#555;line-height:1em;word-break:keep-all}.withdrawalPage__choose--subTxt{font-size:14px;margin-top:10px}.withdrawalPage__choose--btn{margin:0 auto;background:#fff}.withdrawalPage__btn>input,.withdrawalPage__writeBox--btn{margin:0 auto}@media screen and (max-height:1350px){.container{min-height:calc(100vh - 478px)}}@media screen and (max-width:1500px){.container__inner--max{width:95%}}@media screen and (max-width:1410px){.header__inner{width:90%}.header__nav{margin-left:0}.header__nav>ul>li>a{padding:0 11px}.container__inner--max{width:95%}.card__topImg{margin:0 auto}.card__topTit{font-size:15px}.card__userName{font-size:12px;width:calc(100% - 35px)}.card__info{padding:1vw 0 0}.card__price{font-size:17px}.card__price>span{font-size:12px}.card__like>div>img{width:15px}.main__slide--inner{width:95%}.main__slide--text>span{font-size:17px}.main__slide--text>strong{font-size:28px}.main__slide--more{font-size:20px}.main__slide--btn{width:35px;height:35px}.main__slide--btn>i{width:2px;height:10px;left:17px}.main__slide--btn .slide__arrow--top{top:10px}.main__slide--btn .slide__arrow--bottom{bottom:9px}.main__slide--left{width:46%}.main__slide--left.hooper{width:45.8%}.main__slide--left.hooper:after{padding-bottom:57.5%}.main__slide--img>img{width:100%}.main__slide--comment>p{font-size:3vw}.main__slide--round{height:auto;line-height:1em;padding:1.2vw 2vw;font-size:1.8vw}.main__slide--txt{bottom:2vw}.main__cont>h2{font-size:25px}.main__tabItem{background-size:cover}.main__tabItem--tit>li>span{font-size:25px}.main__btmBanner--txt{font-size:38px}.main__btmBanner--btn{width:350px;height:55px;font-size:20px;line-height:55px}.main__tabItem .card__userName{font-size:15px}.listPage__time{margin:30px 0 20px}.listPage .slide__btn{width:95%}.salePage__starDate{padding:15px 0;font-size:23px}.salePage__period{font-size:18px}.salePage__cont--left{width:calc(100% - 475px)}.salePage__cont--right{width:450px}.salePage__btn{margin-top:40px}.salePage__btn .btn--margin{margin-bottom:0}.salePage__priceInfo--tit{font-size:20px}.salePage__priceInfo--num{font-size:25px}.salePage__priceInfo--num>span{font-size:17px}.salePage__priceInfo--commission{font-size:16px}.salePage__priceInfo--commission>span{font-size:12px}.salePage__recommendItem--inner{width:100%;overflow-y:scroll}.salePage__recommendItem--inner .itemList__cards{width:1400px;grid-template-columns:repeat(4,1fr);padding:3px 0 34px;margin:0 5%}.saleItem__itemBox--priceNum{font-size:25px}.saleItem__itemBox--priceNum>span{font-size:17px}.systemPage{flex-direction:column;grid-gap:90px 0;gap:90px 0}.myPage__tabMenu{width:95%}.myPage__slide .card__topTit{font-size:18px}.myPage__slide .card__userName{font-size:14px}.myPage__slide .card__price{font-size:20px}.myPage__slide .card__price>span{font-size:14px}.myPage__noNft{width:100%;min-height:400px;margin-bottom:40px}.myPage__noNft--txt{font-size:18px}.support__chat{padding:40px 30px}.support__chatList--txt{margin-bottom:20px}.support__chatList--txtBox{margin:40px 0 0 40px}.support__chatList--num{width:27px;height:27px;font-size:13px}.support__chatList--comment{font-size:16px}}@media screen and (max-width:1210px){.listPage__time--clock,.listPage__user--name{font-size:18px}.salePage__tit{font-size:30px}.salePage__user--tit{font-size:18px}.myPage__slide.hooper,.usageHistory__tabMenu{width:100%}}@media screen and (max-width:970px){.container{min-height:calc(100vh - 326px)}.container__inner--padding{padding:50px 0}.container__inner--max .container__inner--mid{width:100%}.container__inner--main{padding-bottom:50px}.page__margin--toBigPd{padding-bottom:100px!important}.page__margin--big{margin-bottom:70px!important}.page__margin--mid{margin-bottom:20px!important}.page__tit{font-size:18px}.page__tit--big{font-size:25px;margin-bottom:20px}.page__tit--big>.web{display:none}.page__tit--big>.mobile{display:block}.page__tit--small{font-size:16px}.btn--stuff{width:65px;height:45px}.btn--stuff img{width:18px}.scrollTop{bottom:15px;right:15px}.header--pc{display:none}.side__mobile{display:flex}.footer{padding-top:0}.footer--pc{display:none}.footer__mobile{display:block}.card:after{box-shadow:-3px 3px 4px #fafafa,-8px 5px 6px #d2d2d2,4px 10px 12px #d2d2d2}.card__topImg--icon{top:5px;right:5px}.card__inner{padding:10px}.tabMenu__tit>li>button{font-size:16px}.sideMenu{display:none}.agreeLayout__checkBox{width:22px!important;height:22px;border-radius:4px}.agreeLayout__checkBox:after{width:8px}.boardDetail__cont{padding:10px}.boardDetail__top{padding:15px 10px}.boardDetail__top--tit{font-size:17px;margin-bottom:10px}.boardDetail__top--info>span{font-size:15px}.boardDetail__rateIt--tit{font-size:14px}.toastModal{width:90%}.main .slide__btn{display:none}.main__cont{margin:70px auto}.main__cont>h2{margin-bottom:30px}.main__slider:after{padding-bottom:100%}.main__slide--inner{flex-direction:column;align-items:center;justify-content:center}.main__slide--box{padding:0}.main__slide--left.hooper{width:100%;margin-bottom:5vw}.main__slide--comment{margin-bottom:5vw;text-align:center}.main__slide--comment>p{font-size:5vw}.main__slide--round{padding:2.2vw 2vw;font-size:3vw}.main__slide--txt{font-size:3vw;bottom:4vw}.main__slide--text>span{font-size:16px;margin-bottom:3px}.main__slide--text>strong{font-size:26px;margin-bottom:15px}.main__slide--more{font-size:18px}.main__squareItem--recommendBack:after{padding-bottom:100%}.main__squareItem--recommend{grid-gap:4%;gap:4%;grid-template-columns:repeat(3,1fr)}.main__squareItem--recommend>li:last-child{display:block}.main__tabItem{padding:50px 0}.main__tabItem--tab{margin-bottom:30px}.main__tabItem--item .itemList__card:last-child{display:none}.main__tabItem .card__name{font-size:17px}.main__tabItem .card__userName{font-size:13px}.main__card--info{height:115px!important}.main__btmBanner--txt>br{display:block;text-align:center}.join__top>h1{font-size:20px}.join__top--txt>span{font-size:16px}.itemTable__layout{display:none}.itemTable__toggleTop{display:flex}.itemTable__toggle{display:block;height:calc(80vh - 210px)}.itemTable .table__blank{display:flex;height:100%;align-items:center;justify-content:center}.itemList__cards{grid-template-columns:repeat(3,1fr)}.itemList__more{margin:50px auto 0;font-size:16px}.itemList__more--arrow{margin-top:5px}.itemList__more--arrow>i{width:3px;height:12px}.itemList__more--top{left:5px}.itemList__more--bottom{right:5px}.auction__end:last-child,.auction__ing:last-child,.auction__soon:nth-child(5),.auction__soon:nth-child(6){display:block}.auction__cont{margin-bottom:80px}.auction .listPage__cont--tit{width:130px}.listPage__bar{display:none}.listPage__info--modal{display:block}.listPage__slider{padding-bottom:7%}.listPage__slide--inner{padding:40px 40px 90px;flex-direction:column}.listPage__img{width:100%;margin-bottom:40px}.listPage__img:after{padding-bottom:57%}.listPage__img:hover{-o-object-fit:cover;object-fit:cover}.listPage__left{width:95%;flex-direction:row;margin-left:0;bottom:3vh}.listPage__txt{width:65%}.listPage__num{width:35%}.listPage__time{margin:0 0 33px}.listPage__time--clock{width:100%;font-size:18px}.listPage__cont--tit>span,.listPage__time--num{font-size:25px}.listPage__cont--tit>img{width:26px}.listPage .slide__btn{display:none;align-items:center;justify-content:center;margin-top:0;bottom:60px}.listPage .slide__btn>button{width:45px;height:45px;border-radius:50%;position:relative;background:hsla(0,0%,94.9%,.54);transform:none}.listPage .slide__btn>button.hooper-next{transform:rotate(180deg);margin-left:12px}.listPage .slide__arrow>i{width:2px;height:9px}.listPage .slide__arrow--top{top:15.5px;right:24px;left:inherit;transform:rotate(45deg)}.listPage .slide__arrow--bottom{bottom:15.5px;left:19px;transform:rotate(135deg)}.salePage__cont{flex-direction:column}.salePage__cont--left{width:100%}.salePage__cont--right{width:100%;margin-left:0}.salePage__cont--btm{margin-top:50px}.salePage__cont--recent,.salePage__edition{margin-top:20px}.salePage__comment{min-height:150px;max-height:300px;height:auto;padding:20px;margin-top:20px;border-top:1px solid #ddd}.salePage__price{margin-bottom:50px}.salePage__owner{display:flex;align-items:center;justify-content:space-between;margin-top:50px}.salePage__ownerUser{margin-top:0}.salePage__TableLayout--400{height:auto;max-height:300px}.salePage__editionInfo{height:auto;margin:20px 0}.salePage__recommendItem--inner .itemList__cards{width:1000px}.saleItem__addItem{width:50%;margin:20px auto 30px}.saleItem__addBtnIn--tit{font-size:20px}.myPage__search{width:100%}.myPage__info{margin-bottom:40px}.myPage__profileImg{width:30%}.myPage__nickname{font-size:28px}.myPage__comment{font-size:20px}.myPage__sns--img{width:22px;height:22px}.myPage__sns--url{font-size:16px}.myPage__slide.hooper{margin:0 auto 20px}.myPage__slide.hooper .hooper-prev{left:-32px}.myPage__slide.hooper .hooper-next{right:-32px}.myPage__slide.hooper .slide__btn>button{display:none}.myPage__slide.hooper .slide__arrow>i{height:16px}.myPage__slide.hooper .slide__arrow--top{top:12px}.myPage__slide.hooper .slide__arrow--bottom{bottom:13px}.myPage__slide.hooper .card{padding:3px 2vw 0}.myPage__slide.hooper .card__inner{width:calc(100% - 4vw);padding:2vw}.myPage__slide.hooper .card__info{padding:3vw 0 0}.myPage__arrow>i{height:16px}.myPage__arrow--top{top:12px}.myPage__arrow--bottom{bottom:12px}.myPage__tabMenu{width:100%}.myPage__nftMenu{width:90%;margin:0 auto}.calcPage__tabMenu{width:400px;margin-bottom:40px}.calcPage__price--tit{font-size:16px}.calcPage__price--margin{margin-left:36px}.calcPage__price--num{font-size:21px}.calcPage__price--num>span{font-size:14px}.calcPage__infoLeft{width:300px}.withdrawalPage__content--tit{font-size:19px}.support__chatList--img{width:40%}.support__chatList--img>img{width:100%}.support__chatList--txtBox{width:calc(60% - 40px)}.support__web{display:none}.support__mobile{display:block}.support__box{flex-direction:column}.support__cont{width:100%}.support__menu--tit{margin-bottom:20px}.support__menu--tit>h1{margin-bottom:10px}.support__menu--count{font-size:18px;margin-bottom:20px}.support__result{margin-bottom:20px}.supportSearch__top--tit{font-size:18px}.supportSearch__cont--tit>span{font-size:20px}.supportSearch__cont--list{padding:10px}.supportSearch__cont--list>ul>li>a{font-size:14px}}@media screen and (max-width:768px){.tabMenu__tit>li>button.imgBtn{flex-direction:column}.tabMenu__tit>li>button.imgBtn img{width:27px;margin-right:0;margin-bottom:6px}.myPage__noNft{margin-bottom:40px}.myPage__tabMenu{width:100%}.myPage__nftMenu{width:90%;margin:0 auto}.myPage__slide.hooper .hooper-next{right:-44px}.myPage__slide.hooper .hooper-prev{left:-44px}.myPage__slide .slide__arrow>i{height:16px}.myPage__slide .slide__arrow--top{top:12px}.myPage__slide .slide__arrow--bottom{bottom:13px}.myPage__badgeBox--inner{width:450px}.myPage__badgeBox .hooper-prev{left:-8.5vw}.myPage__badgeBox .hooper-next{right:-8.5vw}.pager__num--web{display:none!important}.pager__num--tablet{display:flex!important}.pager__num--mobile{display:none!important}.card__topTit{padding:8px 0}.card__userImg{width:19px;height:19px}.card__info{padding:3vw 0 0}.main__slider:after{padding-bottom:100%}.main__slide{display:flex;align-items:center}.main__slide:after{padding-bottom:50%}.main__slide--left{width:80%}.main__slide--text>span{font-size:3.5vw}.main__slide--text>strong{font-size:6vw;margin-bottom:10px}.main__slide--more{font-size:4vw}.main__squareItem--recommendBack:after{content:\"\";display:block;padding-bottom:200%}.main__squareItem--recommend{grid-gap:3% 5.5%;gap:3% 5.5%;grid-template-columns:repeat(2,1fr)}.main__squareItem--recommend>li:last-child{display:none}.main__squareItem--items:after{content:\"\";display:block;padding-bottom:210%}.main__squareItem--itemBack{grid-gap:2.5% 0;gap:2.5% 0;grid-template-columns:repeat(1,1fr)}.main__squareItem--box{grid-gap:6%;gap:6%}.main__tabItem--tit>li{margin-right:25px}.main__tabItem--tit>li>span:before{height:3px}.main__tabItem .card__name{font-size:15px}.main__tabItem .card__userImg{width:20px;height:20px}.main__tabItem .card__userName{font-size:12px;line-height:20px}.main__tabItem .card__user{bottom:15px;left:15px}.main__card--info{height:100px!important;padding:15px}.main__btmBanner{height:200px}.main__btmBanner--txt{font-size:24px;font-weight:400}.main__btmBanner--btn{width:250px;height:45px;font-size:16px;line-height:45px}.itemList__cards{grid-template-columns:repeat(2,1fr);grid-column-gap:4%;-moz-column-gap:4%;column-gap:4%}.auction__end:last-child,.auction__ing:last-child{display:none}.listPage__cont--top{flex-direction:column}.listPage .page__search{margin-top:20px}.listPage .page__search--inner{width:100%}.listPage__slide--inner{padding:20px 20px 90px}.listPage .slide__btn{bottom:60px}.listPage__left{flex-direction:column}.listPage__time{display:flex;align-items:center;justify-content:space-between;margin-bottom:0}.listPage__time--clock{width:45%}.listPage__txt{width:100%}.listPage__num{width:100%;margin-top:7%}.listPage__num--tit{white-space:nowrap;margin:0}.listPage__price{display:flex;align-items:center;justify-content:space-between;margin-top:3%}.salePage__price{margin-bottom:40px}.salePage__price--time{height:200px;margin-bottom:40px}.salePage__btn{margin-top:0}}@media screen and (max-width:720px){.container__inner--mid{width:90%}.formInfoLayout__write>input{height:45px;padding:10px 0}.formInfoLayout__write--noIcon{width:calc(100% - 44px)!important;padding:10px 15px!important}.formInfoLayout__write--inputBtn{height:45px}.formInfoLayout__write--inputBtn.secret>img{width:20px}.formInfoLayout__write--box>img{width:19px;margin:0 12px}.login .agreeLayout__btns{width:100%}.login__top--noti{display:flex;flex-direction:column-reverse;height:auto;padding:10px 0;margin-top:10px;line-height:1.5em}.login__top--notiBar{margin-top:5px}.login__top--notiBar>img{width:13px}.login__top--notiBar>em{height:12px}.join__top--logo{width:80px}.join__top--txt{font-size:14px}.join__top--txt>img{width:34px}.join__top--noti>span,.join__top--notiBar{font-size:13px}.supportSearch__top{height:300px}.supportSearch__top--search{width:100%}.supportSearch__cont{grid-template-columns:repeat(2,1fr);grid-gap:25px 5%}.supportSearch__cont--menu:first-child{margin-bottom:0}.systemPage{grid-gap:40px 0;gap:40px 0}.systemPage__right{padding:0 10px;margin-bottom:20px}.systemPage__left{width:70%}.systemPage__write--tit{font-size:20px}.systemPage__write--txt{margin:20px 0;font-size:15px}.systemPage__btn>a{width:100%}}@media screen and (max-width:680px){.myPage__slide.hooper .card:after{padding-bottom:150%}.myPage__slide.hooper .card__name{width:calc(100% - 32px)}.myPage__slide.hooper .card__info{padding:1.5vw 0 0}.myPage__slide.hooper .card__topTit{font-size:15px}.myPage__slide.hooper .card__topTit>button{height:40px}.myPage__slide.hooper .card__userName{font-size:12px}.myPage__slide.hooper .card__price{font-size:17px}.myPage__slide.hooper .card__price>span{font-size:12px}.myPage__badgeBox--inner{width:400px}}@media screen and (max-width:600px){.container__inner--small{width:94%}.modal--mid{width:90%}.modal__inner{padding:0 10px;font-size:15px}.modal__close{right:0}.modal__top{height:50px;line-height:50px}.modalMore{height:420px}.modalMore__tit{font-size:17px;line-height:50px}.modalMore__cont{height:300px}.modalMore__confirm{right:10px}.modalNftList__search--inner{width:100%}.itemTable__toggle{height:calc(80vh - 190px)}.itemTable__toggle--list{padding:0 5px}.myPage__badgeBox--inner{width:400px}.calcPage__info--inner{flex-direction:column;margin-bottom:12px}.calcPage__infoRight{width:100%;margin-top:20px}.calcPage__infoRight>a{width:100%}.calcPage__noti{font-size:12px}}@media screen and (max-width:500px){.container{min-height:calc(100vh - 250px)}.container__inner--padding{padding:25px 0}.container__inner--max,.container__inner--mid{width:94%}.pager__num--tablet,.pager__num--web{display:none!important}.pager__num--mobile{display:flex!important}.boardDetail__top--tit{font-size:16px}.boardDetail__cont--txt{font-size:15px}.boardDetail__info>span{font-size:13px}.btn--big,.btn--half{height:42px;line-height:42px;font-size:14px;border-radius:7px}.btn--half.lineHeight{line-height:38px}.btn--bigSub{width:100%}.btn--bigMiddle,.btn--bigSub,.btn--middle{height:42px;line-height:42px;font-size:14px;border-radius:7px}.btn--edit{width:120px;font-size:14px;border-radius:7px}.btn--goMini,.btn--many{height:42px;line-height:42px;font-size:14px;border-radius:7px}.btn--goMini{width:100px}.btn--app{font-size:14px;border-radius:7px}.btn--mini,.btn--modalConfirm{height:42px;line-height:42px}.btn--mini,.btn--modalConfirm,.btn--modalMini,.btn--stuff{font-size:14px;border-radius:7px}.btn--stuff{height:42px;line-height:42px}.btn--stuff>img{width:16px}.btn__close>span:before{height:14px;top:-5px}.btn__close>span:after{height:14px;bottom:-7px}.page__margin--big{margin-bottom:50px!important}.page__margin--mid{margin-bottom:20px!important}.page__margin--small{margin-bottom:10px!important}.page__margin--toBigPd{padding-bottom:50px!important}.page__margin--midPlus{margin-bottom:30px!important}.page__search--inner{width:100%}.page__tit{font-size:17px}.page__tit--big{font-size:21px}.page__tit.page__margin--mid,.page__tit.page__margin--small{margin-bottom:0!important}.card__itemState{font-size:12px}.card__itemState>span{width:68px;height:19px}.card__inner{padding:7px}.card__topImg--icon>img{height:23px}.card__topTit{padding:5px 0}.card__topTit>a{font-size:14px}.card__topTit>button{height:35px}.card__topTit>button.btn__ico img{width:15px}.card__name{width:calc(100% - 20px);font-size:13px}.card__userImg{width:15px;height:15px}.card__userName{display:-webkit-box!important;width:calc(100% - 35px);height:100%;font-size:10px;line-height:15px;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-break:break-all;overflow:hidden;text-overflow:ellipsis}.card__time{font-size:10px}.card__price{font-size:13px}.card__price>span{font-size:10px}.itemState>span{height:20px}.modal--small{width:90%}.modal__close--form{top:-10px;right:-10px}.modalBasic__inner{padding:40px 0 80px}.modalSubmit{padding:25px 13px}.modalSubmit__tit{font-size:18px}.modalSubmit__cont--txt{font-size:15px}.toastModal{width:100%}.priceOffer__modal--subTit{font-size:14px}.priceOffer__modal--guide>h3{font-weight:400;margin-bottom:10px}.priceOffer__modal--guide>ul>li{font-size:12px;margin-bottom:7px}.table__switch--tit{font-size:14px}.table__layout>thead{height:45px;line-height:45px}.table__layout>thead>th{font-size:14px}.table__layout>tbody>tr>td{font-size:12px}.table__layout>tbody>tr>td>span{font-size:10px}.boardDetail{min-height:calc(100vh - 375px)}.formBorderLayout__lineCont--box>input[type=text]{margin-right:7px;padding:0 7px}.formBorderLayout__lineCont--box>input[type=text]::-moz-placeholder{font-size:13px}.formBorderLayout__lineCont--box>input[type=text]:-ms-input-placeholder{font-size:13px}.formBorderLayout__lineCont--box>input[type=text]::placeholder{font-size:13px}.formBorderLayout__lineCont--txt{font-size:17px;font-weight:400}.formBorderLayout__tit{font-size:14px}.formBorderLayout__priceBox{padding:0 10px}.formBorderLayout__priceBox--unit,.formBorderLayout__priceBox>input{font-size:12px}.formBorderLayout__cont{margin-bottom:18px}.agreeLayout__check>label,.agreeLayout__check>label>span{font-size:14px}.agreeLayout__btn{font-size:12px}.agreeLayout__ex--top{font-size:14px}.agreeLayout__ex>ul{padding:0 10px}.tabMenu__tit>li>button{font-size:15px}.tabMenu__tit>li>button.imgBtn{height:68px}.tabMenu__tit>li>button.imgBtn>img{width:26px}.tabMenu__bar,.tabMenu__bar--active{height:7px}.itemTable__toggleTop>li{font-size:14px}.itemTable__toggle--name{font-size:16px}.itemTable__toggle--tit{padding:11px 0}.itemTable__toggle--tit>p{font-size:14px}.itemTable__toggle--txt>dl>dd,.itemTable__toggle--txt>dl>dt{font-size:13px}.itemTable__toggle--info.active.calc .itemTable__toggle--txt{width:90%}.formInfoLayout__input--tit{font-size:12px}.formInfoLayout__write>input{font-size:14px}.formInfoLayout__write--inputBtn{width:38px}.formInfoLayout__write--inputBtn.clear>img{width:15px}.formInfoLayout__write--inputBtn.secret>img{width:17px}.formInfoLayout__write--box>img{width:20px;margin:0 12px}.formInfoLayout__input--error{font-size:12px}.comment{margin-top:40px}.comment__inner{padding:0 15px}.comment__top{height:50px;font-size:15px}.comment__list--left{width:100%}.comment__list--txt{font-size:14px}.comment__list--box{flex-direction:column}.comment__list--btns{margin-left:-10px}.comment__list--btn>button{width:40px}.comment__list--btn>button>img{width:13px}.comment__list--btn>span{margin-top:-12px;font-size:1px}.comment__list--best{width:40px;height:15px;margin:0 0 8px 15px;line-height:15px;border-radius:3px;font-size:10px}.comment__user{font-size:14px}.comment__user--img{width:20px;height:20px}.comment__write{height:100px}.comment__write--input{width:calc(100% - 95px);height:45px}.comment__write--input>input{padding:0 15px;font-size:14px}.comment__write--btn{width:85px;height:45px;line-height:45px;font-size:14px}.service>h1{font-size:20px;font-weight:400}.service__content{margin-top:30px}.service__content>h2{margin:30px 0 10px;font-size:17px}.main__cont{margin:50px auto}.main__cont>h2{margin-bottom:30px;font-size:20px}.main__squareItem--name{font-size:14px;margin-bottom:4px}.main__squareItem--user{font-size:12px}.main__tabItem--tit>li{margin-right:20px}.main__tabItem--tit>li>span{font-size:20px}.main__tabItem .card__user{width:90%;bottom:10px;left:50%;transform:translateX(-50%)}.main__card--info{height:90px!important;padding:10px}.main__slider .hooper-indicator{width:35px;height:6px}.main__slide--more{font-size:15px}.main__slide--btn{height:25px}.main__slide--btn>i{height:9px;left:12px}.main__slide--btn .slide__arrow--top{top:6px}.main__slide--btn .slide__arrow--bottom{bottom:4px}.main__btmBanner--txt{font-size:20px}.main__btmBanner--btn{width:229px;height:40px;font-size:14px;line-height:40px}.login__find--pass{font-size:13px}.login__top--noti{margin:20px 0;font-size:14px}.join__top--logo{width:50px}.join__top>h1{font-size:16px}.join__top--txt{margin:20px 0 10px;text-align:left}.join__top--txt>span{font-size:14px}.join__top--txt>img{width:25px}.join__top--txt>br{display:block}.join__top--comment{margin:20px 0}.join__top--comment>span{font-size:16px}.join__top--noti{height:40px;line-height:40px}.join__top--noti>img{width:10px;margin-right:4px}.join__top--noti>span{font-size:13px}.join__top--notiBar{font-size:11px}.join__top--notiBar:before{height:10px;margin-right:4px}.join__agree{padding:20px 15px}.join__agree>h3{font-size:15px}.join__slide{margin-bottom:20px}.join__slide--inner{width:94%}.join__slide .slide__btn{display:none}.itemList__cards{grid-row-gap:35px;row-gap:35px}.itemList__card:hover{margin-top:0}.itemList__more{margin:30px auto 0;font-size:14px}.itemList__more--arrow{margin-top:4px}.itemList__more--arrow>i{width:3px;height:11px}.itemList__more--top{left:6px}.itemList__more--bottom{right:5px}.marketPlace .card__owner--name,.marketPlace .card__owner--tit{font-size:11px}.marketPlace .card__owner--tit:before{content:\"\";display:block;height:8px;margin:0 4px}.auction__cont{margin-bottom:40px;padding:40px 0!important}.auction.listPage .page__search{margin-bottom:10px}.listPage{margin-bottom:20px}.listPage__img{margin-bottom:15px}.listPage__img:after{padding-bottom:100%}.listPage__user--img{width:28px;height:28px;margin-right:5px}.listPage__user--name{font-size:15px}.listPage__price--num{font-size:21px}.listPage__price--num>span{font-size:14px}.listPage__num{margin-top:10px}.listPage__num--tit{font-size:15px}.listPage__time--clock{width:145px;padding:5px 0;font-size:15px;border-radius:7px}.listPage__slide--inner{padding:15px}.listPage .slide__btn{display:none}.listPage__cont--tit>span{font-size:23px}.listPage__cont--tit>img{width:20px}.listPage__cont--back{padding:50px 0}.listPage .page__search{margin-bottom:25px}.salePage__cont.page__margin--mid{margin-bottom:0!important}.salePage__cont--table{padding-bottom:5px}.salePage__cont--btm{margin-top:25px}.salePage__cont--recent{margin-top:0}.salePage__tit{font-size:21px;margin:10px 0}.salePage__state>span{width:70px;font-size:13px}.salePage__user--img{width:28px;height:28px}.salePage__user--name{font-size:15px}.salePage__topBtn{overflow:hidden}.salePage__share{margin-right:-10px}.salePage__share .btn__share img{width:16px}.salePage__share--like>span{margin-right:-12px}.salePage__share--like>.btn__ico>div{width:100%;height:100%}.salePage__share--like>.btn__ico img{width:19px;right:10px;transform:translateY(-50%)}.salePage__starDate{padding:10px;font-size:16px}.salePage__edition{margin-bottom:20px}.salePage__anotherEdition{font-size:14px}.salePage__anotherEdition--arrow{width:7px;height:7px;margin-left:5px;border-top:2px solid #111;border-right:2px solid #111}.salePage__price,.salePage__time{margin-bottom:40px}.salePage__price--time{height:auto}.salePage__priceInfo--tit{font-size:16px}.salePage__priceInfo--num{font-size:21px}.salePage__priceInfo--num>span{font-size:14px}.salePage__priceInfo--commission{margin:10px 0 25px;font-size:14px}.salePage__priceInfo--commission>span{font-size:11px}.salePage__editionNum--count{font-size:14px}.salePage__editionNum--total{font-size:12px}.salePage__nowEdition{font-size:14px}.salePage__period{font-size:14px;font-weight:400}.salePage__btn{margin-top:0}.salePage__owner{margin-top:25px}.salePage__notice{font-size:12px}.salePage__comment{min-height:70px;max-height:180px;padding:10px;font-size:14px}.salePage__ownerUser--img{width:23px;height:23px;margin-right:7px}.salePage__ownerUser--name{font-size:12px}.salePage__chain{margin-top:10px}.salePage__chain>li{margin-bottom:10px}.salePage__TableLayout>tbody>tr{padding:0 15px}.salePage__tableTop{margin-top:25px}.salePage__tableTop.page__margin--small{margin-bottom:0!important}.salePage__recommendItem--tit{margin-bottom:25px}.saleItem__itemCont--tit{font-size:21px}.saleItem__itemInfo{padding:20px 0}.saleItem__itemImg{margin-top:20px;padding-bottom:0}.saleItem__itemImg--close{top:-6px;right:-4px}.saleItem__itemBox--name{font-size:21px;margin:10px 0}.saleItem__itemBox--userImg{width:25px;height:25px}.saleItem__itemBox--userName{font-size:15px}.saleItem__itemBox--edition{font-size:18px}.saleItem__itemBox--edition>span{font-size:16px}.saleItem__itemBox--priceNum{font-size:21px}.saleItem__itemBox--priceNum>span{font-size:14px}.saleItem__itemBox--priceTit{font-size:16px}.saleItem__btn{flex-direction:column-reverse;align-items:center}.saleItem .btn--middle{width:100%}.saleItem .btn--mini{width:80px;margin-top:10px;border:none}.saleItem__form>form>fieldset{padding:20px 0}.myPage__info{margin-bottom:20px}.myPage__topProfile>.myPage__profileImg{width:150px;margin-bottom:20px}.myPage__profileImg{width:42%}.myPage__nickname{font-size:21px}.myPage__comment{font-size:16px}.myPage__snsBox.active{height:45px}.myPage__sns--url{font-size:14px}.myPage__sns--img{width:20px;height:20px}.myPage__badge--nav{display:none}.myPage__badge--img.active>img{width:25px;height:25px}.myPage__badge--img>img{width:20px;height:20px}.myPage__badgeBox--inner{width:340px}.myPage__editBtn{margin:20px auto 0}.myPage__tabMenu .tabMenu__tit>li>button{height:70px;font-size:14px}.myPage__tabMenu .tabMenu__tit>li>button>img{width:24px;margin-bottom:3px}.myPage__noNft{min-height:300px;margin-bottom:25px}.myPage__noNft--txt{font-size:16px}.myPage__nftMenu{width:100%}.myPage__nftMenu .slide__btn{display:none}.myPage__slide.hooper .hooper-list{padding-bottom:20px}.myPage__slide.hooper .card{padding:3px 4vw 0}.myPage__slide.hooper .card:after{padding-bottom:144.5%}.myPage__slide.hooper .card__inner{width:calc(100% - 18vw);left:50%;transform:translateX(-50%);padding:0}.myPage__slide.hooper .card__topImg{margin:5vw auto 0}.myPage__slide.hooper .card__itemState>span{width:90px;height:23px;line-height:23px;font-size:14px;top:11px}.myPage__slide.hooper .card__name{width:calc(100% - 35px);font-size:17px}.myPage__slide.hooper .card__topTit{font-size:19px;padding:12px 0}.myPage__slide.hooper .card__topTit>a{font-size:16px;padding:0 10px}.myPage__slide.hooper .card__topTit>button{height:45px}.myPage__slide.hooper .card__topTit>button.btn__ico img{width:18px}.myPage__slide.hooper .card__userImg{width:21px;height:21px}.myPage__slide.hooper .card__userName{font-size:13px}.myPage__slide.hooper .card__info{padding:7vw 0 0}.myPage__slide.hooper .card__time{font-size:13px}.myPage__slide.hooper .card__price{font-size:18px}.myPage__slide.hooper .card__price>span{font-size:13px}.myNft__btn--sale>a{width:100%}.myNft .page__top{width:100%;flex-direction:column}.calcPage__tabMenu,.myNft .page__search{width:100%;margin-bottom:20px}.calcPage__infoLeft{width:78%;margin:0 auto}.calcPage__price--tit{font-size:14px}.calcPage__price--margin{margin-left:33px}.calcPage__price--num{font-size:16px}.calcPage__price--num>span{font-size:12px}.withdrawalPage__content--tit{font-size:16px}.withdrawalPage__choose{margin-bottom:20px;padding:20px}.withdrawalPage__choose--txt>p{line-height:1.2em;font-size:14px}.withdrawalPage__choose--subTxt{font-size:12px!important}.withdrawalPage__choose--icon{width:23px}.withdrawalPage__choose--complete{font-size:14px}.withdrawalPage__btn>input{width:100%}.support__chatList{flex-direction:column;margin-bottom:40px}.support__chatList--txt{margin-bottom:10px}.support__chatList--img{display:flex;width:100%;justify-content:center}.support__chatList--img>img{width:65%;height:auto}.support__chatList--txtBox{width:100%;margin:15px 0 0}.support .page__search{width:100%;margin-bottom:20px}.support__nav--home{font-size:14px}.support__nav--home:after{width:5px;height:5px;margin:0 6px}.support__nav--second{font-size:14px}.support__nav--second:after{width:5px;height:5px;margin:0 6px}.support__menu--name>a,.support__nav--now{font-size:14px}.support__menu--tit{margin-bottom:10px}.support__menu--count{font-size:14px}.support__result--top{flex-direction:column;align-items:flex-start;margin-bottom:5px}.support__result--top>div{font-size:13px}.support__result--tit{width:100%;max-width:none}.support__result--write{font-size:14px}.supportSearch h1{display:none}.supportSearch__top{height:250px}.supportSearch__top--txt{font-size:16px}.supportSearch__cont{padding:30px 0;grid-template-columns:repeat(3,1fr)}.supportSearch__cont--img{width:45%}.supportSearch__cont--tit{border-bottom:none;padding:15px 0}.supportSearch__cont--tit>span{font-size:16px;margin:10px 0 0}.supportSearch__cont--list{display:none}}@media screen and (max-width:400px){.page__margin--big{margin-bottom:30px!important}.page__margin--mid{margin-bottom:10px!important}.card:after{padding-bottom:155%}.itemList__cards{grid-row-gap:30px;row-gap:30px}.itemTable__toggle{height:calc(80vh - 175px)}.listPage__cont--tit>span{font-size:20px}.listPage__cont--tit>img{width:23px}.salePage__price{margin-bottom:25px}.myPage__badgeBox--inner{width:250px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/main-card-back.77cae03.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/main-btm-back.e8707ad.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/support-back.eab3c1e.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e5e86ae4", content, true)

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-sky.4524abb.svg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico-fsns1.d0615ca.svg";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico-fsns2.c473698.svg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ico-fsns3.784c38b.svg";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI1Ij4KICA8cGF0aCBmaWxsPSIjODQ5N0IwIiBkPSJNMTEuOTM2IDBDNS4zNDQgMCAwIDQuOTY2IDAgMTEuMDkyYzAgMy42MTkgMS44NjQgNi44MzIgNC43NSA4Ljg1N3Y0Ljg2OGEuMTg0LjE4NCAwIDAgMCAuMjkuMTQ5bDQuMjcxLTMuMDUxYy44NDUuMTc2IDEuNzIzLjI3IDIuNjI1LjI3IDYuNTkyIDAgMTEuOTM2LTQuOTY2IDExLjkzNi0xMS4wOTNDMjMuODcyIDQuOTY2IDE4LjUyOCAwIDExLjkzNiAwWiIvPgogIDxwYXRoIGZpbGw9IiMzMzNGNTAiIGQ9Ik0xOS4zOTIgOS44MDljLS40MDUtLjQ0LTEuMDA0LS42NjMtMS43OC0uNjYzLS40MzEgMC0uODI0LjA5NS0xLjE2OC4yODItLjI1OC4xNC0uNDgzLjMwNy0uNjcuNDk3di0zLjU5aC0xLjY4OHY5LjUxNWgxLjY3NnYtMy41NTVjMC0uMjk0LjA0LS41NjEuMTItLjc5My4wOC0uMjMuMTg4LS40MjcuMzIzLS41ODVhMS4zMyAxLjMzIDAgMCAxIDEuMDM1LS40ODdjLjM0NiAwIC42MTUuMDk0LjgwMi4yOC4xODcuMTg1LjI4MS41My4yODEgMS4wMjN2NC4xMTdIMjBWMTEuOGMwLS44ODQtLjIwNC0xLjU1NC0uNjA4LTEuOTkxWk04LjM3OSA4LjMxMmMxLjE3NyAwIDIuMTguNzYyIDIuNTgyIDEuODM2aDEuODAxYy0uNDU1LTIuMDc4LTIuMjQ0LTMuNjI5LTQuMzgzLTMuNjI5LTIuNDgzIDAtNC40OTYgMi4wODktNC40OTYgNC42NjUgMCAyLjU3NyAyLjAxMyA0LjY2NiA0LjQ5NiA0LjY2NiAyLjE0IDAgMy45MjgtMS41NTEgNC4zODMtMy42MjloLTEuODAxYy0uNDAxIDEuMDc0LTEuNDA1IDEuODM2LTIuNTgyIDEuODM2LTEuNTI5IDAtMi43NjgtMS4yODYtMi43NjgtMi44NzMgMC0xLjU4NiAxLjIzOS0yLjg3MiAyLjc2OC0yLjg3MloiLz4KPC9zdmc+Cg=="

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjMzIzMjMyIiBkPSJtMjEuODk4IDguODktMS4wNS00LjM3Yy0uMjItLjktMS0xLjUyLTEuOTEtMS41Mkg1LjA0OWMtLjkgMC0xLjY5LjYzLTEuOSAxLjUybC0xLjA1IDQuMzdjLS4yNCAxLjAyLS4wMiAyLjA2LjYyIDIuODguMDguMTEuMTkuMTkuMjguMjlWMTljMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnYtNi45NGMuMDktLjA5LjItLjE4LjI4LS4yOC42NC0uODIuODctMS44Ny42Mi0yLjg5Wm0tMi45OS0zLjkgMS4wNSA0LjM3Yy4xLjQyLjAxLjg0LS4yNSAxLjE3LS4xNC4xOC0uNDQuNDctLjk0LjQ3LS42MSAwLTEuMTQtLjQ5LTEuMjEtMS4xNEwxNi45NzkgNWwxLjkzLS4wMVptLTUuOTEuMDFoMS45NmwuNTQgNC41MmMuMDUuMzktLjA3Ljc4LS4zMyAxLjA3LS4yMi4yNi0uNTQuNDEtLjk1LjQxLS42NyAwLTEuMjItLjU5LTEuMjItMS4zMVY1Wm0tNC41MSA0LjUyTDkuMDM5IDVoMS45NnY0LjY5YzAgLjcyLS41NSAxLjMxLTEuMjkgMS4zMS0uMzQgMC0uNjUtLjE1LS44OS0uNDFhMS40MiAxLjQyIDAgMCAxLS4zMy0xLjA3Wm0tNC40NS0uMTZMNS4wNDkgNWgxLjk3bC0uNTggNC44NmMtLjA4LjY1LS42IDEuMTQtMS4yMSAxLjE0LS40OSAwLS44LS4yOS0uOTMtLjQ3LS4yNy0uMzItLjM2LS43NS0uMjYtMS4xN1ptLjk2IDkuNjR2LTYuMDNjLjA4LjAxLjE1LjAzLjIzLjAzLjg3IDAgMS42Ni0uMzYgMi4yNC0uOTUuNi42IDEuNC45NSAyLjMxLjk1Ljg3IDAgMS42NS0uMzYgMi4yMy0uOTMuNTkuNTcgMS4zOS45MyAyLjI5LjkzLjg0IDAgMS42NC0uMzUgMi4yNC0uOTUuNTguNTkgMS4zNy45NSAyLjI0Ljk1LjA4IDAgLjE1LS4wMi4yMy0uMDNWMTlINC45OTlaIi8+Cjwvc3ZnPgo="

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjMzIzMjMyIiBkPSJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QTYuNDcxIDYuNDcxIDAgMCAwIDE2IDkuNSA2LjUgNi41IDAgMSAwIDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTVabS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTRaIi8+Cjwvc3ZnPgo="

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjMzIzMjMyIiBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMlptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDhabS4zMS04Ljg2Yy0xLjc3LS40NS0yLjM0LS45NC0yLjM0LTEuNjcgMC0uODQuNzktMS40MyAyLjEtMS40MyAxLjM4IDAgMS45LjY2IDEuOTQgMS42NGgxLjcxYy0uMDUtMS4zNC0uODctMi41Ny0yLjQ5LTIuOTdWNUgxMC45djEuNjljLTEuNTEuMzItMi43MiAxLjMtMi43MiAyLjgxIDAgMS43OSAxLjQ5IDIuNjkgMy42NiAzLjIxIDEuOTUuNDYgMi4zNCAxLjE1IDIuMzQgMS44NyAwIC41My0uMzkgMS4zOS0yLjEgMS4zOS0xLjYgMC0yLjIzLS43Mi0yLjMyLTEuNjRIOC4wNGMuMSAxLjcgMS4zNiAyLjY2IDIuODYgMi45N1YxOWgyLjM0di0xLjY3YzEuNTItLjI5IDIuNzItMS4xNiAyLjczLTIuNzctLjAxLTIuMi0xLjktMi45Ni0zLjY2LTMuNDJaIi8+Cjwvc3ZnPgo="

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjMzIzMjMyIiBkPSJNMTUuNTUgMTNjLjc1IDAgMS40MS0uNDEgMS43NS0xLjAzbDMuNTgtNi40OUEuOTk2Ljk5NiAwIDAgMCAyMC4wMSA0SDUuMjFsLS45NC0ySDF2MmgybDMuNiA3LjU5LTEuMzUgMi40NEM0LjUyIDE1LjM3IDUuNDggMTcgNyAxN2gxMnYtMkg3bDEuMS0yaDcuNDVaTTYuMTYgNmgxMi4xNWwtMi43NiA1SDguNTNMNi4xNiA2Wk03IDE4Yy0xLjEgMC0xLjk5LjktMS45OSAyUzUuOSAyMiA3IDIyczItLjkgMi0yLS45LTItMi0yWm0xMCAwYy0xLjEgMC0xLjk5LjktMS45OSAycy44OSAyIDEuOTkgMiAyLS45IDItMi0uOS0yLTItMloiLz4KPC9zdmc+Cg=="

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjMzIzMjMyIiBkPSJNMTAuMjUgMTNhMS4yNSAxLjI1IDAgMSAxLTIuNSAwIDEuMjUgMS4yNSAwIDAgMSAyLjUgMFpNMTUgMTEuNzVhMS4yNSAxLjI1IDAgMSAwIDAgMi41IDEuMjUgMS4yNSAwIDAgMCAwLTIuNVptNyAuMjVjMCA1LjUyLTQuNDggMTAtMTAgMTBTMiAxNy41MiAyIDEyIDYuNDggMiAxMiAyczEwIDQuNDggMTAgMTBaTTEwLjY2IDQuMTJDMTIuMDYgNi40NCAxNC42IDggMTcuNSA4Yy40NiAwIC45MS0uMDUgMS4zNC0uMTJDMTcuNDQgNS41NiAxNC45IDQgMTIgNGMtLjQ2IDAtLjkxLjA1LTEuMzQuMTJaTTQuNDIgOS40N2E4LjA0NiA4LjA0NiAwIDAgMCAzLjY2LTQuNDQgOC4wNDYgOC4wNDYgMCAwIDAtMy42NiA0LjQ0Wk0yMCAxMmMwLS43OC0uMTItMS41My0uMzMtMi4yNC0uNy4xNS0xLjQyLjI0LTIuMTcuMjRhMTAgMTAgMCAwIDEtNy43Ni0zLjY5QTEwLjAxNiAxMC4wMTYgMCAwIDEgNCAxMS44NmMuMDEuMDQgMCAuMDkgMCAuMTQgMCA0LjQxIDMuNTkgOCA4IDhzOC0zLjU5IDgtOFoiLz4KPC9zdmc+Cg=="

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjMzIzMjMyIiBkPSJNMTkgMTR2NGgtMnYtNGgyWk03IDE0djRINmMtLjU1IDAtMS0uNDUtMS0xdi0zaDJabTUtMTNhOSA5IDAgMCAwLTkgOXY3YzAgMS42NiAxLjM0IDMgMyAzaDN2LThINXYtMmMwLTMuODcgMy4xMy03IDctN3M3IDMuMTMgNyA3djJoLTR2OGg0djFoLTd2Mmg2YzEuNjYgMCAzLTEuMzQgMy0zVjEwYTkgOSAwIDAgMC05LTlaIi8+Cjwvc3ZnPgo="

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./root/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "NuxtLogo", function() { return NuxtLogo; });
__webpack_require__.d(components_namespaceObject, "Tutorial", function() { return Tutorial; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(12);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./root/middleware.js
const middleware = {};
/* harmony default export */ var root_middleware = (middleware);
// CONCATENATED MODULE: ./root/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./root/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(13);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(7);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(6);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(8);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./root/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./root/router.js






const _5ec74d8b = () => interopDefault(__webpack_require__.e(/* import() | pages/home */ 7).then(__webpack_require__.bind(null, 172)));

const _3c08624b = () => interopDefault(__webpack_require__.e(/* import() | pages/home_back */ 8).then(__webpack_require__.bind(null, 173)));

const _048a1518 = () => interopDefault(__webpack_require__.e(/* import() | pages/loginBack */ 16).then(__webpack_require__.bind(null, 174)));

const _47954854 = () => interopDefault(__webpack_require__.e(/* import() | pages/sample */ 29).then(__webpack_require__.bind(null, 175)));

const _37678bbe = () => interopDefault(__webpack_require__.e(/* import() | pages/test */ 43).then(__webpack_require__.bind(null, 176)));

const _18b7fa49 = () => interopDefault(__webpack_require__.e(/* import() | pages/auction/detail */ 3).then(__webpack_require__.bind(null, 177)));

const _363fc7d4 = () => interopDefault(__webpack_require__.e(/* import() | pages/auction/list */ 4).then(__webpack_require__.bind(null, 178)));

const _3871f2a0 = () => interopDefault(__webpack_require__.e(/* import() | pages/auction/list_back */ 5).then(__webpack_require__.bind(null, 179)));

const _293ab1f4 = () => interopDefault(__webpack_require__.e(/* import() | pages/auction/order */ 6).then(__webpack_require__.bind(null, 180)));

const _13520102 = () => interopDefault(__webpack_require__.e(/* import() | pages/join/complete */ 10).then(__webpack_require__.bind(null, 181)));

const _1853fbb0 = () => interopDefault(__webpack_require__.e(/* import() | pages/join/home */ 11).then(__webpack_require__.bind(null, 165)));

const _10d28671 = () => interopDefault(__webpack_require__.e(/* import() | pages/login/home */ 12).then(__webpack_require__.bind(null, 166)));

const _2032593e = () => interopDefault(__webpack_require__.e(/* import() | pages/marketPlace/detail */ 17).then(__webpack_require__.bind(null, 167)));

const _63a25b2e = () => interopDefault(__webpack_require__.e(/* import() | pages/marketPlace/list */ 18).then(__webpack_require__.bind(null, 168)));

const _44e84aee = () => interopDefault(__webpack_require__.e(/* import() | pages/marketPlace/order */ 19).then(__webpack_require__.bind(null, 182)));

const _f2592352 = () => interopDefault(__webpack_require__.e(/* import() | pages/marketPlace/sale */ 20).then(__webpack_require__.bind(null, 169)));

const _f4ae489c = () => interopDefault(__webpack_require__.e(/* import() | pages/service/privacy */ 30).then(__webpack_require__.bind(null, 183)));

const _7c69c5ff = () => interopDefault(__webpack_require__.e(/* import() | pages/service/provision */ 31).then(__webpack_require__.bind(null, 184)));

const _3ef2f67c = () => interopDefault(__webpack_require__.e(/* import() | pages/support/sideMenu */ 40).then(__webpack_require__.bind(null, 75)));

const _3cf9f994 = () => interopDefault(__webpack_require__.e(/* import() | pages/system/accountSuspension */ 41).then(__webpack_require__.bind(null, 185)));

const _556c50e5 = () => interopDefault(__webpack_require__.e(/* import() | pages/system/systemCheck */ 42).then(__webpack_require__.bind(null, 186)));

const _0253da0b = () => interopDefault(__webpack_require__.e(/* import() | pages/login/password/complete */ 13).then(__webpack_require__.bind(null, 187)));

const _cf7e4026 = () => interopDefault(__webpack_require__.e(/* import() | pages/login/password/reset */ 14).then(__webpack_require__.bind(null, 188)));

const _33536b31 = () => interopDefault(__webpack_require__.e(/* import() | pages/login/password/sendMail */ 15).then(__webpack_require__.bind(null, 189)));

const _adda4330 = () => interopDefault(__webpack_require__.e(/* import() | pages/myPage/profile/edit */ 21).then(__webpack_require__.bind(null, 190)));

const _2c9af2bd = () => interopDefault(__webpack_require__.e(/* import() | pages/myPage/profile/home */ 22).then(__webpack_require__.bind(null, 191)));

const _6690515d = () => interopDefault(__webpack_require__.e(/* import() | pages/myPage/table/calculate */ 23).then(__webpack_require__.bind(null, 192)));

const _9f081632 = () => interopDefault(__webpack_require__.e(/* import() | pages/myPage/table/myNft */ 24).then(__webpack_require__.bind(null, 193)));

const _6f502be8 = () => interopDefault(__webpack_require__.e(/* import() | pages/myPage/table/usageHistory */ 25).then(__webpack_require__.bind(null, 194)));

const _f2664b64 = () => interopDefault(__webpack_require__.e(/* import() | pages/myPage/table/withdrawal */ 26).then(__webpack_require__.bind(null, 170)));

const _26644848 = () => interopDefault(__webpack_require__.e(/* import() | pages/myPage/userItem/home */ 27).then(__webpack_require__.bind(null, 195)));

const _d8d7e6f2 = () => interopDefault(__webpack_require__.e(/* import() | pages/myPage/userItem/list */ 28).then(__webpack_require__.bind(null, 196)));

const _ebd31df4 = () => interopDefault(__webpack_require__.e(/* import() | pages/support/board/detail */ 32).then(__webpack_require__.bind(null, 197)));

const _7a345470 = () => interopDefault(__webpack_require__.e(/* import() | pages/support/board/news */ 33).then(__webpack_require__.bind(null, 198)));

const _7c33540d = () => interopDefault(__webpack_require__.e(/* import() | pages/support/board/notice */ 34).then(__webpack_require__.bind(null, 199)));

const _2ee26cff = () => interopDefault(__webpack_require__.e(/* import() | pages/support/board/qna */ 35).then(__webpack_require__.bind(null, 200)));

const _bd3cf048 = () => interopDefault(__webpack_require__.e(/* import() | pages/support/search/detail */ 36).then(__webpack_require__.bind(null, 171)));

const _cb13a3ac = () => interopDefault(__webpack_require__.e(/* import() | pages/support/search/home */ 37).then(__webpack_require__.bind(null, 201)));

const _d917e2ac = () => interopDefault(__webpack_require__.e(/* import() | pages/support/search/menu */ 38).then(__webpack_require__.bind(null, 202)));

const _85df1cb0 = () => interopDefault(__webpack_require__.e(/* import() | pages/support/search/result */ 39).then(__webpack_require__.bind(null, 203)));

const _6340b154 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 9).then(__webpack_require__.bind(null, 204)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/home",
    component: _5ec74d8b,
    name: "home"
  }, {
    path: "/home_back",
    component: _3c08624b,
    name: "home_back"
  }, {
    path: "/loginBack",
    component: _048a1518,
    name: "loginBack"
  }, {
    path: "/sample",
    component: _47954854,
    name: "sample"
  }, {
    path: "/test",
    component: _37678bbe,
    name: "test"
  }, {
    path: "/auction/detail",
    component: _18b7fa49,
    name: "auction-detail"
  }, {
    path: "/auction/list",
    component: _363fc7d4,
    name: "auction-list"
  }, {
    path: "/auction/list_back",
    component: _3871f2a0,
    name: "auction-list_back"
  }, {
    path: "/auction/order",
    component: _293ab1f4,
    name: "auction-order"
  }, {
    path: "/join/complete",
    component: _13520102,
    name: "join-complete"
  }, {
    path: "/join/home",
    component: _1853fbb0,
    name: "join-home"
  }, {
    path: "/login/home",
    component: _10d28671,
    name: "login-home"
  }, {
    path: "/marketPlace/detail",
    component: _2032593e,
    name: "marketPlace-detail"
  }, {
    path: "/marketPlace/list",
    component: _63a25b2e,
    name: "marketPlace-list"
  }, {
    path: "/marketPlace/order",
    component: _44e84aee,
    name: "marketPlace-order"
  }, {
    path: "/marketPlace/sale",
    component: _f2592352,
    name: "marketPlace-sale"
  }, {
    path: "/service/privacy",
    component: _f4ae489c,
    name: "service-privacy"
  }, {
    path: "/service/provision",
    component: _7c69c5ff,
    name: "service-provision"
  }, {
    path: "/support/sideMenu",
    component: _3ef2f67c,
    name: "support-sideMenu"
  }, {
    path: "/system/accountSuspension",
    component: _3cf9f994,
    name: "system-accountSuspension"
  }, {
    path: "/system/systemCheck",
    component: _556c50e5,
    name: "system-systemCheck"
  }, {
    path: "/login/password/complete",
    component: _0253da0b,
    name: "login-password-complete"
  }, {
    path: "/login/password/reset",
    component: _cf7e4026,
    name: "login-password-reset"
  }, {
    path: "/login/password/sendMail",
    component: _33536b31,
    name: "login-password-sendMail"
  }, {
    path: "/myPage/profile/edit",
    component: _adda4330,
    name: "myPage-profile-edit"
  }, {
    path: "/myPage/profile/home",
    component: _2c9af2bd,
    name: "myPage-profile-home"
  }, {
    path: "/myPage/table/calculate",
    component: _6690515d,
    name: "myPage-table-calculate"
  }, {
    path: "/myPage/table/myNft",
    component: _9f081632,
    name: "myPage-table-myNft"
  }, {
    path: "/myPage/table/usageHistory",
    component: _6f502be8,
    name: "myPage-table-usageHistory"
  }, {
    path: "/myPage/table/withdrawal",
    component: _f2664b64,
    name: "myPage-table-withdrawal"
  }, {
    path: "/myPage/userItem/home",
    component: _26644848,
    name: "myPage-userItem-home"
  }, {
    path: "/myPage/userItem/list",
    component: _d8d7e6f2,
    name: "myPage-userItem-list"
  }, {
    path: "/support/board/detail",
    component: _ebd31df4,
    name: "support-board-detail"
  }, {
    path: "/support/board/news",
    component: _7a345470,
    name: "support-board-news"
  }, {
    path: "/support/board/notice",
    component: _7c33540d,
    name: "support-board-notice"
  }, {
    path: "/support/board/qna",
    component: _2ee26cff,
    name: "support-board-qna"
  }, {
    path: "/support/search/detail",
    component: _bd3cf048,
    name: "support-search-detail"
  }, {
    path: "/support/search/home",
    component: _cb13a3ac,
    name: "support-search-home"
  }, {
    path: "/support/search/menu",
    component: _d917e2ac,
    name: "support-search-menu"
  }, {
    path: "/support/search/result",
    component: _85df1cb0,
    name: "support-search-result"
  }, {
    path: "/",
    component: _6340b154,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./root/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=108c0b1b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_vm._ssrNode(((_vm.error.statusCode === 404)?("<h1 data-v-108c0b1b>Page not found</h1>"):("<h1 data-v-108c0b1b>An error occurred</h1>"))+" "),_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("Home page")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=108c0b1b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  name: "errorPage",
  props: ['error']
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./layouts/error.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "108c0b1b",
  "ba715f30"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./root/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./root/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./root/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./root/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(18)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "1fc896a8"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/scss/reset.scss
var scss_reset = __webpack_require__(20);

// EXTERNAL MODULE: ./assets/scss/style.scss
var style = __webpack_require__(40);

// EXTERNAL MODULE: ./assets/scss/test.scss
var test = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=a47ba6c2&
var defaultvue_type_template_id_a47ba6c2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_vm._ssrNode("<header class=\"header\">","</header>",[_vm._ssrNode("<div class=\"header--pc header__inner\">","</div>",[_c('NuxtLink',{staticClass:"header__logo logo",attrs:{"to":"/home"}},[_c('img',{attrs:{"src":__webpack_require__(11),"alt":"민트오션"}})]),_vm._ssrNode(" "),_vm._ssrNode("<nav class=\"header__nav\">","</nav>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":"/auction/list"}},[_vm._v("\n                  Auction\n                  "),_c('i',{staticClass:"active"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":"/marketPlace/list"}},[_vm._v("\n                  Marketplace\n                  "),_c('i',{staticClass:"active"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":"#"}},[_vm._v("\n                  My Fans\n                  "),(_vm.$route.name == 'myFans')?_c('i',{staticClass:"active"}):_vm._e()])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":"/support/board/notice"}},[_vm._v("\n                  Support\n                  "),_c('i',{staticClass:"active"})])],1)],2)]),_vm._ssrNode(" "),(_vm.login == false)?_vm._ssrNode("<div class=\"header__login\">","</div>",[_vm._ssrNode("<ul class=\"header__loginBtns\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":"../login/home"}},[_vm._v("로그인")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":"/join/join"}},[_vm._v("회원가입")])],1)],2),_vm._ssrNode(" <button class=\"header__app btn\"><span class=\"header__app--app btn--app btn--accept\">민트오션 앱 다운로드</span></button>")],2):_vm._e(),_vm._ssrNode(" "),(_vm.login == true)?_vm._ssrNode("<div class=\"header__login\">","</div>",[_vm._ssrNode("<div class=\"header__login--cmt\">"+_vm._ssrEscape("\n              "+_vm._s(_vm.userName)+" 님, 안녕하세요?\n            ")+"</div> "),_vm._ssrNode("<div class=\"header__login--active\">","</div>",[_vm._ssrNode("<div class=\"header__myBtn\">","</div>",[_c('NuxtLink',{staticClass:"header__myBtn--inner btn",attrs:{"to":"/myPage/profile/home"}},[_c('strong',{staticClass:"btn--modalMini"},[_vm._v("마이페이지")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"header__subNav\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{staticClass:"header__subNav--tit",attrs:{"to":"/myPage/profile/home"}},[_vm._v("My Profile")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{staticClass:"header__subNav--tit",attrs:{"to":"/myPage/table/myNft"}},[_vm._v("My NFT")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{staticClass:"header__subNav--tit",attrs:{"to":"/myPage/table/usageHistory"}},[_vm._v("이용내역")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{staticClass:"header__subNav--tit",attrs:{"to":"/myPage/table/calculate"}},[_vm._v("정산관리")])],1),_vm._ssrNode(" <li><button class=\"header__subNav--tit\">로그아웃</button></li> "),_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{staticClass:"header__subNav--tit",attrs:{"to":"/login/home"}},[_vm._v("(임시)로그인")])],1)],2)],2)],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"side__mobile header__inner\">","</div>",[_vm._ssrNode("<div class=\"side__mobile--logo\">","</div>",[_c('NuxtLink',{attrs:{"to":"/home"}},[_c('img',{attrs:{"src":__webpack_require__(11),"alt":"민트오션"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"side__mobile--nav\">","</div>",[_vm._ssrNode("<nav class=\"side__mobile--ham\"><i></i> <i></i> <i></i></nav> "),_c('SideMenu',{attrs:{"menuOpen":_vm.closeMenu,"searchOn":_vm.searchActive,"login":_vm.login,"userName":_vm.userName},on:{"close":_vm.closeBtn,"searchBtn":_vm.searchBtn}})],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container container__content\">","</div>",[_c('Nuxt')],1),_vm._ssrNode(" "),_vm._ssrNode("<footer class=\"footer\">","</footer>",[_vm._ssrNode("<div class=\"footer--pc container__inner--max footer__inner\"><div class=\"footer__top\"><div class=\"footer__left\"><div class=\"footer__logo logo\"><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt=\"민트오션\"></div> <div class=\"footer__leftTxt\">\n                소장과 투자가 모두 가능한 NFT 거래소\n              </div></div> <div class=\"footer__right\"><div class=\"footer__menu\"><div class=\"footer__menuTxt\"><h3>회사</h3> <ul class=\"footer__menuLIst\"><li><a href=\"/service/provision\">이용약관</a></li> <li><a href=\"/service/privacy\">개인정보취급방침</a></li></ul></div> <div class=\"footer__menuTxt\"><span class=\"footer__top_line\"></span> <ul class=\"footer__menuLIst\"><li class=\"footer__menuLIst--bar\"><a href=\"#\">제휴문의</a></li></ul></div></div> <div class=\"footer__menuTxt\"><h3>고객지원</h3> <ul class=\"footer__menuLIst\"><li><a href=\"/support/search/home\">고객센터</a></li> <li><a href=\"/support/board/notice\">공지사항</a></li> <li><a href=\"/support/search/menu\">이용안내</a></li></ul></div> <div class=\"footer__menuTxt\"><h3>공식 커뮤니티</h3> <ul class=\"footer__menuLIst\"><li><a href=\"#\">네이버 블로그</a></li> <li><a href=\"#\">인스타그램</a></li> <li><a href=\"#\">디스코드</a></li> <li><a href=\"#\">카카오톡 오픈채팅</a></li></ul></div></div></div> <div class=\"footer__info\"><ul class=\"footer__infoList\"><li>주식회사 민트랩스</li> <li>대표이사 : 김민규, 김민재</li> <li>사업자등록번호 : 123-45-67890</li> <li>서울시 강남구 도곡록 1길 25 강산빌딩 3층</li></ul></div> <div class=\"footer__copy\">Copyright © Mint Ocean. All rights reserved.</div></div> "),_vm._ssrNode("<div class=\"footer__mobile\">","</div>",[_vm._ssrNode("<div class=\"footer__mobile--inner\">","</div>",[_vm._ssrNode("<ul class=\"footer__mobile--menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":"/service/provision"}},[_vm._v("이용약관")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"footer__mobile--bar\">","</li>",[_c('NuxtLink',{attrs:{"to":"/service/privacy"}},[_vm._v("개인정보취급방침")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":"/support/search/home"}},[_vm._v("고객센터")])],1)],2),_vm._ssrNode(" <div class=\"footer__mobile--info\"><span>사업자등록번호 : 123-45-67890</span> <span>서울시 강남구 도곡록 1길 25 강산빌딩 3층</span> <span class=\"footer__mobile--name\"><i>주식회사 민트랩스</i> <em></em> <i>대표이사 : 김민규, 김민재</i></span></div> "),_vm._ssrNode("<div class=\"footer__mobile--sns\">","</div>",[_c('NuxtLink',{attrs:{"to":"#"}},[_c('img',{attrs:{"src":__webpack_require__(48),"alt":"네이버 블로그"}})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#"}},[_c('img',{attrs:{"src":__webpack_require__(49),"alt":"인스타그램"}})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#"}},[_c('img',{attrs:{"src":__webpack_require__(50),"alt":"디스코드"}})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#"}},[_c('img',{attrs:{"src":__webpack_require__(51),"alt":"카카오 채널"}})])],2),_vm._ssrNode(" <div class=\"footer__mobile--copy\">\n              Copyright © Mint Ocean. All rights reserved.\n            </div>")],2)])],2),_vm._ssrNode(" "+((_vm.scY > 300)?("<button class=\"scrollTop page__shadow\">\n    스크롤 탑\n    <span class=\"scrollTop__arrow\"><i class=\"scrollTop__arrow--top\"></i> <i class=\"scrollTop__arrow--bottom\"></i></span> <span class=\"scrollTop__arrow\"><i class=\"scrollTop__arrow--top scrollTop__arrow--doubleTop\"></i> <i class=\"scrollTop__arrow--bottom scrollTop__arrow--doubleBtm\"></i></span></button>"):"<!---->")+" "),_c('Toast')],2)}
var defaultvue_type_template_id_a47ba6c2_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=a47ba6c2&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./blockComponents/sideMenu.vue?vue&type=template&id=5f7639e0&
var sideMenuvue_type_template_id_5f7639e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"moreModal"}},[_c('div',{staticClass:"side__mobile--nav"},[_c('div',{staticClass:"side__mobile--sideMenu page__shadow",class:{active: _vm.menuOpen}},[(_vm.login)?_c('div',[_c('div',{staticClass:"side__mobile--login"},[_vm._v("\n            "+_vm._s(_vm.userName)+" 님, 안녕하세요? \n          ")]),_vm._v(" "),_c('div',{staticClass:"side__action",on:{"click":_vm.myPage}},[_c('button',{staticClass:"side__action--btn"},[_c('p',{staticClass:"side__action--tit"},[_c('img',{attrs:{"src":__webpack_require__(52),"alt":"마이페이지"}}),_vm._v(" "),_c('span',[_vm._v("My Page")])]),_vm._v(" "),_c('p',{staticClass:"side__more--arrow",class:{active: _vm.myMenuActive == true}},[_c('i',{staticClass:"side__more--top"}),_vm._v(" "),_c('i',{staticClass:"side__more--bottom"})])])]),_vm._v(" "),_c('ul',{staticClass:"side__mobile--menuList side__mobile--toggle",style:(_vm.myMenuActive == true ? ("height:" + (45 * _vm.myMenu.length) + "px") : 'height:0')},_vm._l((_vm.myMenu),function(item,idx){return _c('li',{key:idx,on:{"click":_vm.closeBtn}},[_c('NuxtLink',{staticClass:"side__my side__mobile--menu",attrs:{"to":item.url}},[_c('span',[_vm._v(_vm._s(item.name))])])],1)}),0)]):_c('div',{staticClass:"side__mobile--login",on:{"click":_vm.closeBtn}},[_c('NuxtLink',{attrs:{"to":"/login/home"}},[_vm._v("로그인")])],1),_vm._v(" "),_c('div',{staticClass:"side__action side__action--search"},[_c('button',{staticClass:"side__action--btn",on:{"click":_vm.searchBtn}},[_c('p',{staticClass:"side__action--tit"},[_c('img',{attrs:{"src":__webpack_require__(53),"alt":"검색창"}}),_vm._v(" "),_c('span',[_vm._v("Search")])]),_vm._v(" "),_c('p',{staticClass:"side__more--arrow",class:{active: _vm.searchOn == true}},[_c('i',{staticClass:"side__more--top"}),_vm._v(" "),_c('i',{staticClass:"side__more--bottom"})])]),_vm._v(" "),_c('div',{staticClass:"side__search",style:(_vm.searchOn ? 'padding:3px 0 7px;' : 'height:0')},[_c('div',{staticClass:"side__search--inner"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search),expression:"search"}],attrs:{"type":"text","placeholder":"검색어를 입력해주세요."},domProps:{"value":(_vm.search)},on:{"input":function($event){if($event.target.composing){ return; }_vm.search=$event.target.value}}}),_vm._v(" "),_c('div',{on:{"click":_vm.closeBtn}},[_c('NuxtLink',{staticClass:"page__img",attrs:{"to":"/marketPlace/list"}},[_c('img',{attrs:{"src":__webpack_require__(15),"alt":"검색 버튼"}})])],1)])])]),_vm._v(" "),_c('ul',{staticClass:"side__mobile--menuList"},[_c('li',{on:{"click":_vm.closeBtn}},[_c('NuxtLink',{staticClass:"side__mobile--menu",attrs:{"to":"/auction/list"}},[_c('img',{attrs:{"src":__webpack_require__(54),"alt":"Auction"}}),_vm._v(" "),_c('span',[_vm._v("Auction")])])],1),_vm._v(" "),_c('li',{on:{"click":_vm.closeBtn}},[_c('NuxtLink',{staticClass:"side__mobile--menu",attrs:{"to":"/marketPlace/list"}},[_c('img',{attrs:{"src":__webpack_require__(55),"alt":"Marketplace"}}),_vm._v(" "),_c('span',[_vm._v("Marketplace")])])],1),_vm._v(" "),_c('li',{on:{"click":_vm.ready}},[_c('NuxtLink',{staticClass:"side__mobile--menu",attrs:{"to":"#"}},[_c('img',{attrs:{"src":__webpack_require__(56),"alt":"MyFans"}}),_vm._v(" "),_c('span',[_vm._v("MyFans")])])],1),_vm._v(" "),_c('li',[_c('div',{staticClass:"side__action",on:{"click":_vm.support}},[_c('button',{staticClass:"side__action--btn"},[_c('p',{staticClass:"side__action--tit"},[_c('img',{attrs:{"src":__webpack_require__(57),"alt":"Support"}}),_vm._v(" "),_c('span',[_vm._v("support")])]),_vm._v(" "),_c('p',{staticClass:"side__more--arrow",class:{active: _vm.supportActive == true}},[_c('i',{staticClass:"side__more--top"}),_vm._v(" "),_c('i',{staticClass:"side__more--bottom"})])])]),_vm._v(" "),_c('ul',{staticClass:"side__mobile--menuList side__mobile--toggle",style:(_vm.supportActive == true ? ("height:" + (45 * _vm.supportMenu.length) + "px") : 'height:0')},_vm._l((_vm.supportMenu),function(item,idx){return _c('li',{key:idx,on:{"click":_vm.closeBtn}},[_c('NuxtLink',{staticClass:"side__my side__mobile--menu",attrs:{"to":item.url}},[_c('span',[_vm._v(_vm._s(item.name))])])],1)}),0)])])]),_vm._v(" "),_c('div',{staticClass:"side__mobile--back",class:{active: _vm.menuOpen},on:{"click":_vm.closeBtn}},[_vm._v("\n        배경\n      ")])])])}
var sideMenuvue_type_template_id_5f7639e0_staticRenderFns = []


// CONCATENATED MODULE: ./blockComponents/sideMenu.vue?vue&type=template&id=5f7639e0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./blockComponents/sideMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var sideMenuvue_type_script_lang_js_ = ({
  name: 'sideMenu',
  props: {
    login: Boolean,
    // 로그인 여부
    userName: String,
    // 유저 이름
    menuOpen: Boolean,
    // 사이드 메뉴 on off
    searchOn: Boolean // 검색 on off

  },
  data: () => ({
    search: '',
    // 검색 인풋
    myMenuActive: false,
    // 마이 메뉴 on off
    supportActive: false,
    // 서포트 메뉴 on off
    myMenu: [// 마이 메뉴 리스트
    {
      name: 'My Profile',
      url: '/myPage/profile/home'
    }, {
      name: 'My NFT',
      url: '/myPage/table/myNft'
    }, {
      name: '이용내역',
      url: '/myPage/table/usageHistory'
    }, {
      name: '정산관리',
      url: '/myPage/table/calculate'
    }, {
      name: '로그아웃',
      url: '#'
    }, {
      name: '로그인(임시 버튼)',
      url: '/login/home'
    }],
    supportMenu: [{
      name: '공지사항',
      url: '/support/board/notice'
    }, {
      name: '민트오션 소식',
      url: '/support/board/news'
    }, {
      name: '수수료 안내',
      url: '/support/search/detail'
    }, {
      name: '자주하는 질문',
      url: '/support/search/home'
    }, {
      name: '1:1문의',
      url: '/support/board/qna'
    }]
  }),
  methods: {
    // my fans 준비중 alert
    ready() {
      alert('지금은 준비 중입니다.');
    },

    // 마이 페이지 열기
    myPage() {
      this.myMenuActive == true ? this.myMenuActive = false : this.myMenuActive = true;
    },

    // 마이 페이지 열기
    support() {
      this.supportActive == true ? this.supportActive = false : this.supportActive = true;
    },

    // 서포트 열기
    // 검색 on off
    searchBtn() {
      this.$emit('searchBtn');
    },

    // 메뉴 닫기 버튼
    closeBtn() {
      this.$emit('close');
    }

  }
});
// CONCATENATED MODULE: ./blockComponents/sideMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var blockComponents_sideMenuvue_type_script_lang_js_ = (sideMenuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./blockComponents/sideMenu.vue



function sideMenu_injectStyles (context) {
  
  
}

/* normalize component */

var sideMenu_component = Object(componentNormalizer["a" /* default */])(
  blockComponents_sideMenuvue_type_script_lang_js_,
  sideMenuvue_type_template_id_5f7639e0_render,
  sideMenuvue_type_template_id_5f7639e0_staticRenderFns,
  false,
  sideMenu_injectStyles,
  null,
  "6e01c528"
  
)

/* harmony default export */ var sideMenu = (sideMenu_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./modal/toast.vue?vue&type=template&id=e6b90374&
var toastvue_type_template_id_e6b90374_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"toastModal"}},[_c('div',{staticClass:"toastModal page__shadow"},[_c('div',{staticClass:"toastModal__inner"},[_c('div',{staticClass:"toastModal__txt"},[_vm._v("\n          "+_vm._s(_vm.msg)+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"toastModal__btn"},[_c('button',{attrs:{"type":"button"},on:{"click":_vm.agreeBtn}},[_vm._v("\n            실명인증\n          ")]),_vm._v(" "),_c('span',{staticClass:"toastModal__btn--bar"},[_vm._v("바")]),_vm._v(" "),_c('button',{attrs:{"type":"button"},on:{"click":_vm.closeBtn}},[_vm._v("\n            닫기\n          ")])])])])])}
var toastvue_type_template_id_e6b90374_staticRenderFns = []


// CONCATENATED MODULE: ./modal/toast.vue?vue&type=template&id=e6b90374&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./modal/toast.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var toastvue_type_script_lang_js_ = ({
  name: 'more',
  components: {},
  props: {
    moreTxt: Object
  },
  data: () => ({
    msg: '회원님은 현재 1레벨입니다. 거래 및 내 지갑 활성화를 위해서는 실명인증(레벨 2)이 필요합니다.'
  }),
  methods: {
    // 모달창 닫기 버튼
    closeBtn() {
      this.$emit('close');
    },

    // 모달창 전문보기 동의 버튼
    agreeBtn() {
      this.$emit('agree');
    }

  }
});
// CONCATENATED MODULE: ./modal/toast.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_toastvue_type_script_lang_js_ = (toastvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./modal/toast.vue



function toast_injectStyles (context) {
  
  
}

/* normalize component */

var toast_component = Object(componentNormalizer["a" /* default */])(
  modal_toastvue_type_script_lang_js_,
  toastvue_type_template_id_e6b90374_render,
  toastvue_type_template_id_e6b90374_staticRenderFns,
  false,
  toast_injectStyles,
  null,
  "41383bab"
  
)

/* harmony default export */ var toast = (toast_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // 사이드메뉴

 // 토스트 모달

/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  name: "defaultLayout",
  components: {
    SideMenu: sideMenu,
    // 사이드 메뉴,
    Toast: toast // 토스트 모달

  },

  data() {
    return {
      login: true,
      // 로그인 했을 시 on
      userName: '곰돌이',
      // 로그인 시 유저 이름
      closeMenu: false,
      // 사이드 메뉴 of off
      searchActive: false,
      // 검색 on off
      scTimer: 0,
      // 검색 on off
      scY: 0 //스크롤 높이

    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    // my fans 준비중 alert
    ready() {
      alert('지금은 준비 중입니다.');
    },

    // 사이드 메뉴 닫기
    closeBtn() {
      this.closeMenu = false;
      this.searchActive = false;
    },

    // 검색 on off
    searchBtn() {
      if (this.searchActive == false) this.searchActive = true;else this.searchActive = false;
    },

    // 스크롤 탑 이벤트
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },

    // 스롤 탑 버튼
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_a47ba6c2_render,
  defaultvue_type_template_id_a47ba6c2_staticRenderFns,
  false,
  null,
  null,
  "7852be21"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./root/App.js









const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./root/components/index.js
const NuxtLogo = () => __webpack_require__.e(/* import() | components/nuxt-logo */ 1).then(__webpack_require__.bind(null, 206)).then(c => wrapFunctional(c.default || c));
const Tutorial = () => __webpack_require__.e(/* import() | components/tutorial */ 2).then(__webpack_require__.bind(null, 205)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./root/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(14);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./root/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var root_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || '/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./root/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "vue project",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./root/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./root/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof root_axios === 'function') {
    await root_axios(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./root/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./root/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof root_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return root_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof root_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return root_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("hooper");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map