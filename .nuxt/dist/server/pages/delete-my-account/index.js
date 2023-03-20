exports.ids = [24];
exports.modules = {

/***/ 340:
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

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(351);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("96d3b12c", content, true, context)
};

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_d5be09ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(342);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_d5be09ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_d5be09ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_d5be09ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_d5be09ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(340);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(352);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-d5be09ac]{color:#204ecf}.dark-blue[data-v-d5be09ac]{color:#0f256e !important}.gray[data-v-d5be09ac]{color:#262d3d}.light-gray[data-v-d5be09ac]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-d5be09ac]{color:rgba(38,45,61,.32)}.black-light[data-v-d5be09ac]{color:#111}.btn.btn-outline-secondary[data-v-d5be09ac]{color:#333}label[data-v-d5be09ac]{text-transform:capitalize}.object-fit-cover[data-v-d5be09ac]{object-fit:cover}.object-fit-contain[data-v-d5be09ac]{object-fit:contain}.font-14[data-v-d5be09ac]{font-size:14px}.font-18[data-v-d5be09ac]{font-size:18px}.spacer-5[data-v-d5be09ac]{height:5px;width:100%;display:block}.spacer-10[data-v-d5be09ac]{height:10px;width:100%;display:block}.spacer-15[data-v-d5be09ac]{height:15px;width:100%;display:block}.spacer-20[data-v-d5be09ac]{height:20px;width:100%;display:block}.spacer-25[data-v-d5be09ac]{height:25px;width:100%;display:block}.spacer-30[data-v-d5be09ac]{height:30px;width:100%;display:block}.spacer-40[data-v-d5be09ac]{height:40px;width:100%;display:block}.spacer-50[data-v-d5be09ac]{height:50px;width:100%;display:block}.spacer-65[data-v-d5be09ac]{height:65px;width:100%;display:block}.spacer-100[data-v-d5be09ac]{height:100px;width:100%;display:block}.sb-wrapper[data-v-d5be09ac]{position:relative}.sb-wrapper .sb-button[data-v-d5be09ac]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-d5be09ac]{cursor:pointer}.sb-wrapper .sb-button[data-v-d5be09ac]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-d5be09ac]:focus{outline:1px solid}.m-end-2[data-v-d5be09ac]{margin-inline-end:10px}.breadcrumb[data-v-d5be09ac]{padding:.75rem 0rem;background:none;margin-bottom:0}.breadcrumb .breadcrumb-item[data-v-d5be09ac]{line-height:1;display:flex;align-items:center;text-transform:capitalize}[dir=rtl] .breadcrumb .breadcrumb-item.active[data-v-d5be09ac]{padding-right:.5rem;padding-left:0}.breadcrumb .breadcrumb-item+.breadcrumb-item[data-v-d5be09ac]::before{content:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");line-height:0}[dir=rtl] .breadcrumb .breadcrumb-item+.breadcrumb-item[data-v-d5be09ac]::before{float:right;padding-right:.5rem;color:#6c757d;transform:rotate(180deg)}.breadcrumb .breadcrumb-item[data-v-d5be09ac]:first-of-type::before{display:none}@media(max-width: 767.98px){.breadcrumb[data-v-d5be09ac]{padding:0;margin-bottom:0}.breadcrumb .breadcrumb-item[data-v-d5be09ac]:first-of-type::before{content:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");line-height:0;transform:rotate(180deg)}[dir=rtl] .breadcrumb .breadcrumb-item[data-v-d5be09ac]:first-of-type::before{color:#6c757d;transform:rotate(360deg)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgICA8Zz4NCiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyMHYyMEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyMCkgcm90YXRlKC05MCkiLz4NCiAgICAgICAgPHBhdGggZmlsbD0iIzMzMyIgZD0iTTE0LjgyNSA4LjU5TDExIDEyLjQwNyA3LjE3NSA4LjU5IDYgOS43NjVsNSA1IDUtNXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjApIHJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtMSAtMS40MzIpIi8+DQogICAgPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/Breadcrumbs.vue?vue&type=template&id=d5be09ac&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-breadcrumb', {
    attrs: {
      "items": _vm.items
    }
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/Breadcrumbs.vue?vue&type=template&id=d5be09ac&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/Breadcrumbs.vue?vue&type=script&lang=js&
/* harmony default export */ var Breadcrumbsvue_type_script_lang_js_ = ({
  props: {
    items: {
      type: Array,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/shared/Breadcrumbs.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_Breadcrumbsvue_type_script_lang_js_ = (Breadcrumbsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/Breadcrumbs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(350)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_Breadcrumbsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d5be09ac",
  "0a1cd7a5"
  
)

/* harmony default export */ var Breadcrumbs = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(369);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("36d39a79", content, true, context)
};

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_59f63724_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_59f63724_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_59f63724_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_59f63724_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_59f63724_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-59f63724]{color:#204ecf}.dark-blue[data-v-59f63724]{color:#0f256e !important}.gray[data-v-59f63724]{color:#262d3d}.light-gray[data-v-59f63724]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-59f63724]{color:rgba(38,45,61,.32)}.black-light[data-v-59f63724]{color:#111}.btn.btn-outline-secondary[data-v-59f63724]{color:#333}label[data-v-59f63724]{text-transform:capitalize}.object-fit-cover[data-v-59f63724]{object-fit:cover}.object-fit-contain[data-v-59f63724]{object-fit:contain}.font-14[data-v-59f63724]{font-size:14px}.font-18[data-v-59f63724]{font-size:18px}.spacer-5[data-v-59f63724]{height:5px;width:100%;display:block}.spacer-10[data-v-59f63724]{height:10px;width:100%;display:block}.spacer-15[data-v-59f63724]{height:15px;width:100%;display:block}.spacer-20[data-v-59f63724]{height:20px;width:100%;display:block}.spacer-25[data-v-59f63724]{height:25px;width:100%;display:block}.spacer-30[data-v-59f63724]{height:30px;width:100%;display:block}.spacer-40[data-v-59f63724]{height:40px;width:100%;display:block}.spacer-50[data-v-59f63724]{height:50px;width:100%;display:block}.spacer-65[data-v-59f63724]{height:65px;width:100%;display:block}.spacer-100[data-v-59f63724]{height:100px;width:100%;display:block}.sb-wrapper[data-v-59f63724]{position:relative}.sb-wrapper .sb-button[data-v-59f63724]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-59f63724]{cursor:pointer}.sb-wrapper .sb-button[data-v-59f63724]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-59f63724]:focus{outline:1px solid}.m-end-2[data-v-59f63724]{margin-inline-end:10px}.banner[data-v-59f63724]{position:relative;height:220px;max-height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;background-size:cover;background-position:top}.banner .layer[data-v-59f63724]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(3,3,3,.226)}.banner .z-2[data-v-59f63724]{z-index:2}.banner h2[data-v-59f63724]{font-size:45px;font-weight:600}.banner h2[data-v-59f63724],.banner p[data-v-59f63724]{color:#fff;text-transform:capitalize}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/Banner.vue?vue&type=template&id=59f63724&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "banner",
    style: {
      background: `url(${_vm.data.bg}) #f4f4f4`
    }
  }, [_vm._ssrNode("<div class=\"layer\" data-v-59f63724></div> <div class=\"container z-2\" data-v-59f63724><h2 style=\"text-align: center\" data-v-59f63724>" + _vm._ssrEscape(_vm._s(_vm.data.title)) + "</h2> <p style=\"font-size: 20px\" data-v-59f63724>" + _vm._ssrEscape("\n      " + _vm._s(_vm.data.caption) + "\n    ") + "</p></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/Banner.vue?vue&type=template&id=59f63724&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/Banner.vue?vue&type=script&lang=js&
/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  props: ['data']
});
// CONCATENATED MODULE: ./components/shared/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/Banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(368)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_Bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "59f63724",
  "fbd5e532"
  
)

/* harmony default export */ var Banner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(780);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7222f1dd", content, true, context)
};

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_07aee6c4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(599);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_07aee6c4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_07aee6c4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_07aee6c4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_07aee6c4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-07aee6c4]{color:#204ecf}.dark-blue[data-v-07aee6c4]{color:#0f256e !important}.gray[data-v-07aee6c4]{color:#262d3d}.light-gray[data-v-07aee6c4]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-07aee6c4]{color:rgba(38,45,61,.32)}.black-light[data-v-07aee6c4]{color:#111}.btn.btn-outline-secondary[data-v-07aee6c4]{color:#333}label[data-v-07aee6c4]{text-transform:capitalize}.object-fit-cover[data-v-07aee6c4]{object-fit:cover}.object-fit-contain[data-v-07aee6c4]{object-fit:contain}.font-14[data-v-07aee6c4]{font-size:14px}.font-18[data-v-07aee6c4]{font-size:18px}.spacer-5[data-v-07aee6c4]{height:5px;width:100%;display:block}.spacer-10[data-v-07aee6c4]{height:10px;width:100%;display:block}.spacer-15[data-v-07aee6c4]{height:15px;width:100%;display:block}.spacer-20[data-v-07aee6c4]{height:20px;width:100%;display:block}.spacer-25[data-v-07aee6c4]{height:25px;width:100%;display:block}.spacer-30[data-v-07aee6c4]{height:30px;width:100%;display:block}.spacer-40[data-v-07aee6c4]{height:40px;width:100%;display:block}.spacer-50[data-v-07aee6c4]{height:50px;width:100%;display:block}.spacer-65[data-v-07aee6c4]{height:65px;width:100%;display:block}.spacer-100[data-v-07aee6c4]{height:100px;width:100%;display:block}.sb-wrapper[data-v-07aee6c4]{position:relative}.sb-wrapper .sb-button[data-v-07aee6c4]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-07aee6c4]{cursor:pointer}.sb-wrapper .sb-button[data-v-07aee6c4]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-07aee6c4]:focus{outline:1px solid}.m-end-2[data-v-07aee6c4]{margin-inline-end:10px}.delete-my-account-content[data-v-07aee6c4]{max-width:750px;padding-top:20px}ol li[data-v-07aee6c4]{list-style-type:decimal}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/delete-my-account/index.vue?vue&type=template&id=07aee6c4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-overlay', {
    attrs: {
      "show": _vm.show,
      "rounded": "sm"
    }
  }, [!_vm.show ? _c('div', [_c('Banner', {
    attrs: {
      "data": _vm.banner
    }
  }), _vm._v(" "), _c('b-container', [_c('Breadcrumbs', {
    staticClass: "px-0",
    attrs: {
      "items": _vm.items
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "delete-my-account-content"
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "sm": "12"
    }
  }, [_c('h2', [_vm._v(_vm._s(_vm.$t('deleteAccount.title')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('deleteAccount.deleteAccountDescription')))])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "12"
    }
  }, [_c('ol', _vm._l(_vm.$t('deleteAccount.deleteAccountSteps'), function (textCotent, index) {
    return _c('li', {
      key: index,
      domProps: {
        "innerHTML": _vm._s(textCotent)
      }
    });
  }), 0)]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "12"
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('deleteAccount.deleteAccountFooter')))])])], 1)], 1)], 1)], 1) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/delete-my-account/index.vue?vue&type=template&id=07aee6c4&scoped=true&

// EXTERNAL MODULE: ./components/shared/Banner.vue + 4 modules
var Banner = __webpack_require__(376);

// EXTERNAL MODULE: ./components/shared/Breadcrumbs.vue + 4 modules
var Breadcrumbs = __webpack_require__(353);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/delete-my-account/index.vue?vue&type=script&lang=js&



const {
  mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('HomeModule');
/* harmony default export */ var delete_my_accountvue_type_script_lang_js_ = ({
  name: 'privacy-policy',
  components: {
    Banner: Banner["a" /* default */],
    Breadcrumbs: Breadcrumbs["a" /* default */]
  },
  data() {
    return {
      items: [{
        text: this.$t('breadcrumb.home'),
        to: this.localePath('/')
      }, {
        text: this.$t('home.deleteMyAccount'),
        to: this.localePath('/delete-my-account')
      }],
      banner: {
        title: this.$t('home.deleteMyAccount'),
        // bg: require('@/assets/images/about-us/banner.jpg'),
        caption: ''
      },
      tabs: null,
      show: false
    };
  }
  // mounted() {
  //   this.getPrivacy()
  //     .then((res) => {
  //       this.privacyPolicy = res.Data.privacy
  //     })
  //     .finally(() => {
  //       this.show = false
  //     })
  // },
  // methods: {
  //   ...mapActions(['getPrivacy']),
  // },
});
// CONCATENATED MODULE: ./pages/delete-my-account/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_delete_my_accountvue_type_script_lang_js_ = (delete_my_accountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/delete-my-account/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(779)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_delete_my_accountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "07aee6c4",
  "57e2fab2"
  
)

/* harmony default export */ var delete_my_account = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map