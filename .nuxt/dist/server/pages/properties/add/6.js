exports.ids = [37];
exports.modules = {

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("16192d46", content, true, context)
};

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressCircle_vue_vue_type_style_index_0_id_724294ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(339);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressCircle_vue_vue_type_style_index_0_id_724294ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressCircle_vue_vue_type_style_index_0_id_724294ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressCircle_vue_vue_type_style_index_0_id_724294ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressCircle_vue_vue_type_style_index_0_id_724294ea_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.progress-circle-container[data-v-724294ea] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 5px;\r\n  margin: auto;\r\n  margin-top: 10px;\n}\n.progress-circle-container .percent[data-v-724294ea] {\r\n  position: relative;\n}\n.progress-circle-container svg[data-v-724294ea] {\r\n  position: relative;\r\n  width: 60px;\r\n  height: 60px;\r\n  transform: rotate(-90deg);\n}\n.progress-circle-container svg circle[data-v-724294ea] {\r\n  width: 100%;\r\n  height: 100%;\r\n  fill: none;\r\n  stroke: rgba(0, 120, 255, 0.1);\r\n  stroke-width: 5;\r\n  stroke-linecap: round;\n}\n.progress-circle-container svg circle[data-v-724294ea]:last-of-type {\r\n  stroke-dasharray:125px;\r\n  stroke-dashoffset: calc(125px - (125px * var(--percent)) / 100);\r\n  stroke: #3498db;\n}\n.progress-circle-container .number[data-v-724294ea] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\n}\n.progress-circle-container .number h3[data-v-724294ea] {\r\n  font-weight: 200;\r\n  font-size: .6rem;\r\n  color: #0078FF;\n}\n.progress-circle-container .number h3 span[data-v-724294ea] {\r\n  font-size: 2rem;\n}\n.progress-circle-container .title h2[data-v-724294ea] {\r\n  margin: 25px 0 0;\n}\n.progress-circle-container:nth-child(1) svg circle[data-v-724294ea]:last-of-type {\r\n  stroke: #0078FF;\n}\r\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/ProgressCircle.vue?vue&type=template&id=724294ea&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "progress-circle-container"
  }, [_vm._ssrNode("<div class=\"percent\" data-v-724294ea><svg data-v-724294ea><circle cx=\"30\" cy=\"30\" r=\"25\" data-v-724294ea></circle> <circle cx=\"30\" cy=\"30\" r=\"25\"" + _vm._ssrStyle(null, `--percent: ${_vm.currentStep / _vm.totalSteps * 100}`, null) + " data-v-724294ea></circle></svg> <div class=\"number\" data-v-724294ea><h3 data-v-724294ea>" + _vm._ssrEscape(_vm._s(_vm.currentStep) + "  " + _vm._s(_vm.dir === 'rtl' ? 'من' : 'of') + " " + _vm._s(_vm.totalSteps)) + "</h3></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/postingRequestForm/ProgressCircle.vue?vue&type=template&id=724294ea&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/ProgressCircle.vue?vue&type=script&lang=js&
/* harmony default export */ var ProgressCirclevue_type_script_lang_js_ = ({
  name: 'ProgressCircle',
  props: {
    currentStep: {
      type: Number,
      default: () => 0
    },
    totalSteps: {
      type: Number,
      default: () => 1
    }
  },
  computed: {
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    }
  }
});
// CONCATENATED MODULE: ./components/postingRequestForm/ProgressCircle.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_ProgressCirclevue_type_script_lang_js_ = (ProgressCirclevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/postingRequestForm/ProgressCircle.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(343)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_ProgressCirclevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "724294ea",
  "793037ac"
  
)

/* harmony default export */ var ProgressCircle = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQoNCjx0aXRsZT5jaGVja19ib3hfb3V0bGluZV9ibGFuazwvdGl0bGU+DQo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCjxnIGlkPSJJY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQo8ZyBpZD0iT3V0bGluZWQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MDkuMDAwMDAwLCAtNDMyMy4wMDAwMDApIj4NCjxnIGlkPSJUb2dnbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMC4wMDAwMDAsIDQyNjYuMDAwMDAwKSI+DQo8ZyBpZD0iT3V0bGluZWQtLy1Ub2dnbGUtLy1jaGVja19ib3hfb3V0bGluZV9ibGFuayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzA2LjAwMDAwMCwgNTQuMDAwMDAwKSI+DQo8Zz4NCjxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiPjwvcG9seWdvbj4NCjxwYXRoIGQ9Ik0xOSw1IEwxOSwxOSBMNSwxOSBMNSw1IEwxOSw1IFogTTE5LDMgTDUsMyBDMy45LDMgMywzLjkgMyw1IEwzLDE5IEMzLDIwLjEgMy45LDIxIDUsMjEgTDE5LDIxIEMyMC4xLDIxIDIxLDIwLjEgMjEsMTkgTDIxLDUgQzIxLDMuOSAyMC4xLDMgMTksMyBaIiBpZD0i8J+UuS1JY29uLUNvbG9yIiBmaWxsPSIjZmYwMDAwIj48L3BhdGg+DQo8L2c+DQo8L2c+DQo8L2c+DQo8L2c+DQo8L2c+DQo8L3N2Zz4="

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(503);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("02393150", content, true, context)
};

/***/ }),

/***/ 501:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNiAyOEMyMi42Mjc0IDI4IDI4IDIyLjYyNzQgMjggMTZDMjggOS4zNzI1OCAyMi42Mjc0IDQgMTYgNEM5LjM3MjU4IDQgNCA5LjM3MjU4IDQgMTZDNCAyMi42Mjc0IDkuMzcyNTggMjggMTYgMjhaIiBzdHJva2U9IiMxMTExMTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xNSAxNUgxNlYyMkgxNyIgc3Ryb2tlPSIjMTExMTExIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMTUuNzUgMTJDMTYuNTc4NCAxMiAxNy4yNSAxMS4zMjg0IDE3LjI1IDEwLjVDMTcuMjUgOS42NzE1NyAxNi41Nzg0IDkgMTUuNzUgOUMxNC45MjE2IDkgMTQuMjUgOS42NzE1NyAxNC4yNSAxMC41QzE0LjI1IDExLjMyODQgMTQuOTIxNiAxMiAxNS43NSAxMloiIGZpbGw9ImJsYWNrIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_owner_info_vue_vue_type_style_index_0_id_95330194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_owner_info_vue_vue_type_style_index_0_id_95330194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_owner_info_vue_vue_type_style_index_0_id_95330194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_owner_info_vue_vue_type_style_index_0_id_95330194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_owner_info_vue_vue_type_style_index_0_id_95330194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.owner-information{background-color:#f7f9fa;padding-top:15px;margin-top:15px;margin-bottom:25px}.owner-information .row .input-container{margin-bottom:10px;background-color:#fff;padding:20px;border-radius:10px;margin-bottom:20px}.owner-information .footer{padding:20px;background-color:#fff !important;border-radius:10px;margin-bottom:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/my-properties/owner-info.vue?vue&type=template&id=95330194&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "owner-information"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "heading py-2"
  }, [_vm.isAddListing ? _c('div', {
    staticClass: "mb-2"
  }, [_c('h1', {
    staticClass: "d-flex justify-content-center flex-column align-items-center text-dark font-weight-semi font-size-large text-center mb-2"
  }, [_vm._v(_vm._s(_vm.$t('owner.are_You_Broker')))]), _vm._v(" "), _c('small', [_vm._v("*" + _vm._s(_vm.$t('owner.are_You_Broker_Content')) + " "), _c('nuxt-link', {
    staticClass: "font-weight-bold text-uppercase",
    attrs: {
      "to": _vm.localePath('/properties/add/7')
    }
  }, [_vm._v(_vm._s(_vm.dir === 'ltr' ? 'Skip' : 'تخطى'))])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', [_vm._v("*" + _vm._s(_vm.$t('owner.are_You_Broker_Content_2')))])]) : _c('h1', {
    staticClass: "d-flex justify-content-center flex-column align-items-center text-dark font-weight-semi font-size-large text-center mb-4"
  }, [_c('img', {
    attrs: {
      "width": "50px",
      "height": "50px",
      "src": __webpack_require__(501),
      "alt": "Info"
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('owner.heading')))])])])]), _vm._v(" "), !_vm.isCreateMode && !_vm.isAddListing ? _c('b-col', {
    staticClass: "mx-auto mb-4",
    attrs: {
      "cols": "4"
    }
  }, [_c('b-button', {
    attrs: {
      "block": "",
      "variant": "outline-danger"
    },
    on: {
      "click": function ($event) {
        return _vm.unSelectOwner(_vm.ownerData.id);
      }
    }
  }, [_c('img', {
    class: [_vm.dir === 'ltr' ? 'mr-1' : 'ml-1'],
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(423),
      "alt": "UnSelect"
    }
  }), _vm._v("\n                    " + _vm._s(_vm.$t('owner.unselect_Owner')) + "\n                ")])], 1) : _vm._e()], 1), _vm._ssrNode(" "), _vm._ssrNode("<form>", "</form>", [_c('b-row', [_c('b-col', {
    staticClass: "mx-auto",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "container--fluid"
  }, [_c('b-row', {
    class: ['form-row', {
      'notAddListing': !_vm.isAddListing
    }]
  }, [_c('b-col', {
    staticClass: "input-container",
    attrs: {
      "cols": "12"
    }
  }, [_c('label', {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.$t('owner.ownerName')))]), _vm._v(" "), _c('b-form-input', {
    attrs: {
      "placeholder": _vm.$t('owner.ownerNamePlaceholder'),
      "id": "name"
    },
    model: {
      value: _vm.ownerData.name,
      callback: function ($$v) {
        _vm.$set(_vm.ownerData, "name", $$v);
      },
      expression: "ownerData.name"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "input-container",
    attrs: {
      "cols": "12"
    }
  }, [_c('label', {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "adress"
    }
  }, [_vm._v(_vm._s(_vm.$t('owner.address')))]), _vm._v(" "), _c('b-form-input', {
    attrs: {
      "placeholder": _vm.$t('owner.addressPlaceholder'),
      "id": "adress"
    },
    model: {
      value: _vm.ownerData.address,
      callback: function ($$v) {
        _vm.$set(_vm.ownerData, "address", $$v);
      },
      expression: "ownerData.address"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "input-container",
    attrs: {
      "cols": "12",
      "lg": "6"
    }
  }, [_c('label', {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "email1"
    }
  }, [_vm._v(_vm._s(_vm.$t('owner.email')))]), _vm._v(" "), _c('b-form-input', {
    attrs: {
      "placeholder": _vm.$t('owner.emailPlaceholder'),
      "type": "email",
      "id": "email1"
    },
    model: {
      value: _vm.ownerData.email,
      callback: function ($$v) {
        _vm.$set(_vm.ownerData, "email", $$v);
      },
      expression: "ownerData.email"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "input-container",
    attrs: {
      "cols": "12",
      "lg": "6"
    }
  }, [_c('label', {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "customerCode"
    }
  }, [_vm._v(_vm._s(_vm.$t('owner.customer_Code')))]), _vm._v(" "), _c('b-form-input', {
    attrs: {
      "placeholder": _vm.dir === 'ltr' ? 'eg: ABC123' : 'مثل: ABC123',
      "type": "email",
      "id": "customerCode"
    },
    model: {
      value: _vm.ownerData.ref_id,
      callback: function ($$v) {
        _vm.$set(_vm.ownerData, "ref_id", $$v);
      },
      expression: "ownerData.ref_id"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "input-container",
    attrs: {
      "cols": "12",
      "lg": "6"
    }
  }, [_c('label', {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "num1"
    }
  }, [_vm._v(_vm._s(_vm.$t('owner.mobileNumber')))]), _vm._v(" "), _c('b-form-input', {
    attrs: {
      "placeholder": _vm.$t('owner.mobileNumberPlaceholder'),
      "id": "num1"
    },
    model: {
      value: _vm.ownerData.first_mobile,
      callback: function ($$v) {
        _vm.$set(_vm.ownerData, "first_mobile", $$v);
      },
      expression: "ownerData.first_mobile"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "input-container",
    attrs: {
      "cols": "12",
      "lg": "6"
    }
  }, [_c('label', {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "num2"
    }
  }, [_vm._v(_vm._s(_vm.$t('owner.anotherMobileNumber')))]), _vm._v(" "), _c('b-form-input', {
    attrs: {
      "placeholder": _vm.$t('owner.mobileNumberPlaceholder'),
      "id": "num2"
    },
    model: {
      value: _vm.ownerData.second_mobile,
      callback: function ($$v) {
        _vm.$set(_vm.ownerData, "second_mobile", $$v);
      },
      expression: "ownerData.second_mobile"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "input-container",
    attrs: {
      "cols": "12",
      "lg": "12"
    }
  }, [_c('label', {
    staticClass: "font-weight-bold",
    attrs: {
      "for": "textarea"
    }
  }, [_vm._v(_vm._s(_vm.$t('owner.note')))]), _vm._v(" "), _c('b-form-textarea', {
    attrs: {
      "no-resize": "",
      "rows": "3",
      "id": "textarea",
      "placeholder": _vm.$t('owner.textArea_placeholder')
    },
    model: {
      value: _vm.ownerData.notes,
      callback: function ($$v) {
        _vm.$set(_vm.ownerData, "notes", $$v);
      },
      expression: "ownerData.notes"
    }
  })], 1)], 1), _vm._v(" "), !_vm.isAddListing ? _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "4"
    }
  }, [_c('b-button', {
    staticClass: "bg-light text-dark text-center",
    attrs: {
      "size": "sm",
      "block": "",
      "to": _vm.localePath('/dashboard/my-properties')
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.dir === 'ltr' ? 'Back' : 'رجوع') + "\n                                        ")])], 1), _vm._v(" "), _vm.isCreateMode ? _c('b-col', {
    attrs: {
      "cols": "8"
    }
  }, [_c('b-button', {
    attrs: {
      "size": "sm",
      "block": "",
      "variant": "primary"
    },
    on: {
      "click": function ($event) {
        return _vm.addOwner();
      }
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.dir === 'ltr' ? 'Create New Owner' : 'انشاء مالك جديد') + "\n                                        ")])], 1) : _c('b-col', {
    attrs: {
      "cols": "8"
    }
  }, [_c('b-button', {
    attrs: {
      "size": "sm",
      "block": "",
      "variant": "primary",
      "disabled": _vm.active
    },
    on: {
      "click": function ($event) {
        return _vm.editOwner();
      }
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.dir === 'ltr' ? 'Edit Owner Information' : 'تعديل بيانات المالك') + "\n                                        ")])], 1)], 1)], 1)]) : _vm._e()], 1)])], 1)], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/dashboard/my-properties/owner-info.vue?vue&type=template&id=95330194&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(22);

// EXTERNAL MODULE: ./helpers/axios-port.js
var axios_port = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/my-properties/owner-info.vue?vue&type=script&lang=js&

const {
  mapState,
  mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('UserModule');
const {
  mapState: propertStates
} = Object(external_vuex_["createNamespacedHelpers"])('PropertyModule');


/* harmony default export */ var owner_infovue_type_script_lang_js_ = ({
  name: "ownerInfo",
  data() {
    return {
      ownerData: {
        name: '',
        address: '',
        email: '',
        ref_id: '',
        first_mobile: '',
        second_mobile: '',
        notes: '',
        property_id: '',
        occupation: 'Broker'
      },
      clonedOwnerData: {},
      active: true,
      ownerId: null
    };
  },
  computed: {
    ...mapState(['isCreateMode', 'editOwnerId']),
    ...propertStates(['clickedPropToAttachOwner']),
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    computedIsCreateMode() {
      return localStorage.getItem('isCreateMode') === "true";
    }
  },
  props: {
    isAddListing: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions(['enableCreateMode', 'disableCreateMode']),
    async addOwner() {
      const res = await this.$axios.$post('/user/owners/create', this.ownerData);
      if (res.Status == 200) {
        this.$bvToast.toast(`Owner Created and Attached to Owner Successfully.`, {
          autoHideDelay: 3000,
          appendToast: false,
          toaster: 'b-toaster-top-full',
          variant: 'success'
        });
        this.clearData();
        this.attachOwnerToProp(res.Data.id);
        this.$router.push(this.localePath('/dashboard/my-properties'));
      }
    },
    async editOwner() {
      // For Testing untill getting the user id from property object
      const res = await this.$axios.$post(`/user/owners/${this.ownerId}/update`, this.ownerData);
      if (res.Status == 200) {
        this.$bvToast.toast(`Owner Updated successfully.`, {
          autoHideDelay: 3000,
          appendToast: false,
          toaster: 'b-toaster-top-full',
          variant: 'success'
        });
        this.$router.push(this.localePath('/dashboard/my-properties'));
      }
    },
    async attachOwnerToProp(ownerId) {
      const res = await this.$axios.$post(`/user/owners/attach/${this.clickedPropToAttachOwner.id}/owner/${ownerId}`);
      if (res.Status === 200) {
        this.$bvToast.toast(`Property Attached To Owner Successfully.`, {
          autoHideDelay: 3000,
          appendToast: false,
          toaster: 'b-toaster-top-full',
          variant: 'success'
        });
      }
    },
    clearData() {
      this.ownerData.name = '';
      this.ownerData.address = '';
      this.ownerData.email = '';
      this.ownerData.first_mobile = '';
      this.ownerData.second_mobile = '';
      this.ownerData.notes = '';
    },
    async unSelectOwner(ownerId) {
      const res = await this.$axios.$post(`/user/owners/deattach/${this.clickedPropToAttachOwner.id}/owner/${ownerId}`);
      if (res.Status === 200) {
        this.$bvToast.toast(`Property Deattached From Owner Successfully.`, {
          autoHideDelay: 3000,
          appendToast: false,
          toaster: 'b-toaster-top-full',
          variant: 'danger'
        });
        this.$router.push(this.localePath('/dashboard/my-properties'));
      }
    }
  },
  async mounted() {
    let currentProperty = JSON.parse(localStorage.getItem('property'));
    if (this.$route.path.indexOf('/properties/add') >= 0 && currentProperty && currentProperty.form6) {
      this.ownerData = currentProperty.form6;
    }
    if (JSON.parse(localStorage.getItem('clickedProperty'))) {
      this.ownerData.property_id = JSON.parse(localStorage.getItem('clickedProperty')).id || this.clickedPropToAttachOwner.id;
    }
    if (!this.isCreateMode) {
      this.ownerId = this.editOwnerId;
      const res = await this.$axios.$get(`/user/owners/${this.editOwnerId}`);
      this.ownerData = res.Data;
    }
    this.active = true;
  },
  watch: {
    ownerData: {
      handler(newVal) {
        this.active = false;
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./components/dashboard/my-properties/owner-info.vue?vue&type=script&lang=js&
 /* harmony default export */ var my_properties_owner_infovue_type_script_lang_js_ = (owner_infovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/dashboard/my-properties/owner-info.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(502)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  my_properties_owner_infovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cb0c35b8"
  
)

/* harmony default export */ var owner_info = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(852);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5048fe66", content, true, context)
};

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_6_vue_vue_type_style_index_0_id_250b39d6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(630);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_6_vue_vue_type_style_index_0_id_250b39d6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_6_vue_vue_type_style_index_0_id_250b39d6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_6_vue_vue_type_style_index_0_id_250b39d6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_6_vue_vue_type_style_index_0_id_250b39d6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.form-input .container .mainMessage{text-align:center;font-size:16px;font-weight:bold;color:#0078ff}.form-input .container .imgsPreview .imageHolder .plus{display:flex;align-items:center;justify-content:center}.uploaded-images{padding:16px 0}.uploaded-images h3{font-size:16px;font-weight:bold;margin:16px 0}.uploaded-images .row .col-auto img{position:relative;object-fit:cover;margin:8px 0}.uploaded-images .row .col-auto .delete-image{position:absolute;display:flex;justify-content:center;align-items:center;top:10px;right:16px;width:32px;height:32px;background:#ea293c;clip-path:circle();cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/add/6.vue?vue&type=template&id=250b39d6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('ProgressCircle', {
    attrs: {
      "current-step": 6,
      "total-steps": 7
    }
  }), _vm._v(" "), _c('owner-info', {
    ref: "owner",
    attrs: {
      "isAddListing": true
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "page-actions"
  }, [_c('b-button', {
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v(_vm._s(_vm.$t('common.back')))]), _vm._v(" "), _c('b-button', {
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": _vm.goNext
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('common.next')) + "\n        ")])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/properties/add/6.vue?vue&type=template&id=250b39d6&

// EXTERNAL MODULE: ./components/dashboard/my-properties/owner-info.vue + 4 modules
var owner_info = __webpack_require__(541);

// EXTERNAL MODULE: ./components/postingRequestForm/ProgressCircle.vue + 4 modules
var ProgressCircle = __webpack_require__(345);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/add/6.vue?vue&type=script&lang=js&


/* harmony default export */ var _6vue_type_script_lang_js_ = ({
  name: 'AddPropertyPage5',
  components: {
    ownerInfo: owner_info["a" /* default */],
    ProgressCircle: ProgressCircle["a" /* default */]
  },
  data() {
    return {
      currentProp: null
    };
  },
  computed: {
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    }
  },
  methods: {
    goNext() {
      localStorage.setItem('property', JSON.stringify({
        ...this.currentProp,
        form6: this.$refs.owner.$data.ownerData
      }));
      this.$router.push(this.localePath('/properties/add/7'));
    },
    goBack() {
      this.$router.push(this.localePath('/properties/add/5'));
    }
  },
  head() {
    return {
      title: `${this.dir === "ltr" ? "Add Property | Step 5" : "إضافة عقار | الخطوة 5"} ${this.appEnv !== 'production' ? '| Staging' : ''}`,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.dir === "ltr" ? 'Add Property | Property Images' : 'إضافة عقار | صور العقار'
      }]
    };
  },
  mounted() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    const currentProperty = localStorage.getItem('property') && JSON.parse(localStorage.getItem('property'));
    this.currentProp = JSON.parse(localStorage.getItem('property'));
    if (!currentProperty) this.$router.push(this.localePath('/properties/add/1'));
  }
});
// CONCATENATED MODULE: ./pages/properties/add/6.vue?vue&type=script&lang=js&
 /* harmony default export */ var add_6vue_type_script_lang_js_ = (_6vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/properties/add/6.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(851)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  add_6vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "417aa7f4"
  
)

/* harmony default export */ var _6 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map