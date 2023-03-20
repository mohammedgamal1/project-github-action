exports.ids = [38];
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

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(854);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("68e77536", content, true, context)
};

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewForm_vue_vue_type_style_index_0_id_64cd80ec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewForm_vue_vue_type_style_index_0_id_64cd80ec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewForm_vue_vue_type_style_index_0_id_64cd80ec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewForm_vue_vue_type_style_index_0_id_64cd80ec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewForm_vue_vue_type_style_index_0_id_64cd80ec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-64cd80ec]{color:#204ecf}.dark-blue[data-v-64cd80ec]{color:#0f256e !important}.gray[data-v-64cd80ec]{color:#262d3d}.light-gray[data-v-64cd80ec]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-64cd80ec]{color:rgba(38,45,61,.32)}.black-light[data-v-64cd80ec]{color:#111}.btn.btn-outline-secondary[data-v-64cd80ec]{color:#333}label[data-v-64cd80ec]{text-transform:capitalize}.object-fit-cover[data-v-64cd80ec]{object-fit:cover}.object-fit-contain[data-v-64cd80ec]{object-fit:contain}.font-14[data-v-64cd80ec]{font-size:14px}.font-18[data-v-64cd80ec]{font-size:18px}.spacer-5[data-v-64cd80ec]{height:5px;width:100%;display:block}.spacer-10[data-v-64cd80ec]{height:10px;width:100%;display:block}.spacer-15[data-v-64cd80ec]{height:15px;width:100%;display:block}.spacer-20[data-v-64cd80ec]{height:20px;width:100%;display:block}.spacer-25[data-v-64cd80ec]{height:25px;width:100%;display:block}.spacer-30[data-v-64cd80ec]{height:30px;width:100%;display:block}.spacer-40[data-v-64cd80ec]{height:40px;width:100%;display:block}.spacer-50[data-v-64cd80ec]{height:50px;width:100%;display:block}.spacer-65[data-v-64cd80ec]{height:65px;width:100%;display:block}.spacer-100[data-v-64cd80ec]{height:100px;width:100%;display:block}.sb-wrapper[data-v-64cd80ec]{position:relative}.sb-wrapper .sb-button[data-v-64cd80ec]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-64cd80ec]{cursor:pointer}.sb-wrapper .sb-button[data-v-64cd80ec]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-64cd80ec]:focus{outline:1px solid}.m-end-2[data-v-64cd80ec]{margin-inline-end:10px}.preview-form .section[data-v-64cd80ec]{background-color:#fff;padding:18px 0;border-bottom:1px solid #f2f4f5;margin-top:18px}.preview-form .section[data-v-64cd80ec]:last-child{border:none;padding-bottom:0}.preview-form .section.address .container[data-v-64cd80ec]{display:flex;align-items:flex-start}.preview-form .section.address .container .svg-icon[data-v-64cd80ec]{margin:2px 16px 0 16px}.preview-form .section .images[data-v-64cd80ec]{width:100%;height:100%;display:flex;overflow-y:hidden;overflow-x:scroll;padding:8px 0}.preview-form .section .images .image[data-v-64cd80ec]{margin-right:12px}.preview-form .section .images .image[data-v-64cd80ec]:last-child{margin:0}.preview-form .section .images .image img[data-v-64cd80ec]{border-radius:12px;object-fit:cover}.preview-form .section .number-counter[data-v-64cd80ec]{display:flex;justify-content:space-between;align-items:center;padding:16px 0}.preview-form .section .number-counter[data-v-64cd80ec]:last-child{border:none}.preview-form .section .number-counter p[data-v-64cd80ec]{margin:0;font-weight:600;font-size:16px}.preview-form .section .number-counter .number[data-v-64cd80ec]{display:flex;justify-content:center;align-items:center;width:40px;height:40px;border:1px solid #e3e5e5;border-radius:50%}.preview-form .section .number-counter .number.area[data-v-64cd80ec]{width:fit-content !important;height:60px !important}.preview-form .section .chip[data-v-64cd80ec]{display:inline-block;padding:8px 12px;background-color:#e6f2ff;color:#0078ff;font-weight:bold;border-radius:32px;margin:0px 12px 12px 0}.preview-form .section .chip[data-v-64cd80ec]:last-child{margin:0}@media screen and (max-width: 560px){.mobile-scroll[data-v-64cd80ec]{justify-content:flex-start;overflow-x:scroll}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/add/7.vue?vue&type=template&id=1c2e8e24&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('ProgressCircle', {
    attrs: {
      "current-step": 7,
      "total-steps": 7
    }
  }), _vm._ssrNode(" "), _c('PreviewForm', {
    attrs: {
      "propertyData": _vm.propertyData,
      "currentProperty": _vm.currentProperty
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"page-actions\">", "</div>", [_c('b-button', {
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v(_vm._s(_vm.$t('common.back')))]), _vm._ssrNode(" "), _c('b-button', {
    attrs: {
      "variant": "primary",
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.submitProperty
    }
  }, [_vm._v("\n      " + _vm._s(!_vm.loading ? _vm.$t('common.submit') : 'Loading...') + "\n    ")])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/properties/add/7.vue?vue&type=template&id=1c2e8e24&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/AddProperty/PreviewForm.vue?vue&type=template&id=64cd80ec&scoped=true&
var PreviewFormvue_type_template_id_64cd80ec_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-overlay', {
    attrs: {
      "show": !_vm.propertyTitle,
      "rounded": "sm",
      "opacity": 1
    }
  }, [_c('div', {
    staticClass: "preview-form"
  }, [_c('div', {
    staticClass: "form-container"
  }, [_c('h2', {
    staticClass: "form-heading"
  }, [_vm._v("\n        " + _vm._s(_vm.propertyTitle) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "address section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "svg-icon"
  }, [_c('svg-icon', {
    attrs: {
      "fill": "#262D3D",
      "name": "dollar",
      "height": "24",
      "width": "24"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('p', {
    staticClass: "font-size-semi-large font-weight-bold mb-0"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('property.propertyPrice')) + "\n            ")]), _vm._v(" "), _vm.form4 && _vm.form4.daily_price ? _c('p', {
    staticClass: "my-2"
  }, [_c('span', {
    staticClass: "font-weight-bold font-size-semi-large"
  }, [_vm._v("\n                " + _vm._s(_vm.form4.daily_price) + "\n              ")]), _vm._v("\n              /" + _vm._s(_vm.$t('form.shortTerm')) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm.form4 && _vm.form4.monthly_price ? _c('p', [_c('span', {
    staticClass: "font-weight-bold font-size-semi-large"
  }, [_vm._v("\n                " + _vm._s(_vm.form4.monthly_price) + "\n              ")]), _vm._v("\n              /" + _vm._s(_vm.$t('form.longTerm')) + "\n            ")]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "address section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "svg-icon"
  }, [_c('svg-icon', {
    attrs: {
      "fill": "#262D3D",
      "name": "MapPin",
      "height": "24",
      "width": "24"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('p', {
    staticClass: "font-size-semi-large font-weight-bold mb-0"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('form.PropertyAddress')) + "\n            ")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("\n                " + _vm._s(_vm.form1 ? _vm.form1.city.location_name : '') + "\n              ")]), _vm._v("\n\n              " + _vm._s(_vm.form1 && _vm.form1.district ? _vm.form1.district.location_name : '') + "\n              " + _vm._s(_vm.form1 && _vm.form1.neighborhood ? _vm.form1.neighborhood.location_name : '') + "\n            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "text"
  }, [_c('p', {
    staticClass: "font-size-semi-large font-weight-bold mb-2"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('form.propertyDescription')) + "\n            ")]), _vm._v(" "), _c('span', {
    staticClass: "light-gray font-weight-bold"
  }, [_vm._v("\n              " + _vm._s(_vm.form4 ? _vm.form4.propertyDescription : '') + "\n            ")])])])]), _vm._v(" "), _vm.form5 ? _c('div', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "text"
  }, [_c('p', {
    staticClass: "font-size-semi-large font-weight-bold mb-2"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('form.propertyPhotos')) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "images mobile-scroll"
  }, _vm._l(_vm.form5, function (image, index) {
    return _c('div', {
      key: index,
      staticClass: "image"
    }, [_c('img', {
      attrs: {
        "src": image,
        "width": "120",
        "height": "100"
      }
    })]);
  }), 0)])])]) : _vm._e(), _vm._v(" "), _vm.form2 ? _c('div', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('p', {
    staticClass: "font-size-semi-large font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.$t(`property.furnishing_status`)) + "\n          ")]), _vm._v(" "), _vm._l(_vm.form2.furnishTypes, function (furnishType, index) {
    return _c('span', {
      key: index,
      staticClass: "chip"
    }, [_vm._v("\n            " + _vm._s(furnishType.text) + "\n          ")]);
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.form2 ? _c('div', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('p', {
    staticClass: "font-size-semi-large font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.$t(`property.property_types`)) + "\n          ")]), _vm._v(" "), _vm._l(_vm.form2.propertyTypes, function (propertyType, index) {
    return _c('span', {
      key: index,
      staticClass: "chip"
    }, [_vm._v("\n            " + _vm._s(propertyType.prop_type_name) + "\n          ")]);
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.form2 ? _c('div', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "text"
  }, [_c('p', {
    staticClass: "font-size-semi-large font-weight-bold mb-0"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('form.noOfRooms')) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "number-counter"
  }, [_c('p', [_vm._v("\n                " + _vm._s(_vm.$t('form.bedrooms')) + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "number"
  }, [_c('span', [_vm._v(_vm._s(_vm.form2.bedrooms))])])]), _vm._v(" "), _c('div', {
    staticClass: "number-counter"
  }, [_c('p', [_vm._v("\n                " + _vm._s(_vm.$t('property.bathrooms')) + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "number"
  }, [_vm._v("\n                " + _vm._s(_vm.form2.bathrooms) + "\n              ")])])])])]) : _vm._e(), _vm._v(" "), _vm.form2 ? _c('div', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "text"
  }, [_c('p', {
    staticClass: "font-size-semi-large font-weight-bold mb-0"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('property.area')) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "number-counter"
  }, [_c('p', [_vm._v("\n                " + _vm._s(_vm.$t('property.area')) + "\n              ")]), _vm._v(" "), _c('div', {
    staticClass: "number area"
  }, [_c('span', [_vm._v(_vm._s(`${_vm.form2.area}m`)), _c('sup', [_vm._v("2")])])])])])])]) : _vm._e(), _vm._v(" "), _vm.form2 && _vm.propertyData && _vm.propertyData.bedTypes ? _c('div', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "text"
  }, [_c('p', {
    staticClass: "font-size-semi-large font-weight-bold mb-0"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('property.beds_availability')) + "\n            ")]), _vm._v(" "), _vm._l(_vm.propertyData.bedTypes, function (bedType, index) {
    return _c('div', {
      key: index,
      staticClass: "number-counter"
    }, [_c('p', [_vm._v("\n                " + _vm._s(bedType.name) + "\n              ")]), _vm._v(" "), _c('div', {
      staticClass: "number"
    }, [_c('span', [_vm._v(_vm._s(_vm.form2.bedTypes[index].count))])])]);
  })], 2)])]) : _vm._e(), _vm._v(" "), _vm.form3 ? _vm._l(Object.keys(_vm.form3), function (amenityType, index) {
    return _c('div', {
      key: index,
      staticClass: "section"
    }, [_c('div', {
      staticClass: "container"
    }, [_c('p', {
      staticClass: "font-size-semi-large font-weight-bold"
    }, [_vm._v("\n              " + _vm._s(_vm.$t(`form.${amenityType.toLowerCase()}Amenities`)) + "\n            ")]), _vm._v(" "), _vm._l(_vm.form3[amenityType], function (amenity) {
      return _c('span', {
        key: amenity.amenity_id,
        staticClass: "chip"
      }, [_vm._v("\n              " + _vm._s(amenity.amenity_name) + "\n            ")]);
    })], 2)]);
  }) : _vm._e()], 2)])]);
};
var PreviewFormvue_type_template_id_64cd80ec_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/AddProperty/PreviewForm.vue?vue&type=template&id=64cd80ec&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddProperty/PreviewForm.vue?vue&type=script&lang=js&
/* harmony default export */ var PreviewFormvue_type_script_lang_js_ = ({
  name: 'AddPropertyPreviewForm',
  props: {
    propertyData: {
      type: Object,
      required: true
    },
    currentProperty: {
      type: Object | null,
      required: true
    }
  },
  computed: {
    propertyTitle() {
      var _this$propertyData, _this$propertyData$pr, _this$propertyData$pr2, _this$currentProperty3, _this$currentProperty4, _this$currentProperty5, _this$currentProperty6, _this$currentProperty7, _this$currentProperty8;
      const propertyType = ((_this$propertyData = this.propertyData) === null || _this$propertyData === void 0 ? void 0 : (_this$propertyData$pr = _this$propertyData.propertyType) === null || _this$propertyData$pr === void 0 ? void 0 : (_this$propertyData$pr2 = _this$propertyData$pr.find(prop => {
        var _this$currentProperty, _this$currentProperty2;
        return prop.prop_type_id === ((_this$currentProperty = this.currentProperty) === null || _this$currentProperty === void 0 ? void 0 : (_this$currentProperty2 = _this$currentProperty.form2) === null || _this$currentProperty2 === void 0 ? void 0 : _this$currentProperty2.propertyType[0]);
      })) === null || _this$propertyData$pr2 === void 0 ? void 0 : _this$propertyData$pr2.prop_type_name) || '';
      const propertyCity = ((_this$currentProperty3 = this.currentProperty) === null || _this$currentProperty3 === void 0 ? void 0 : (_this$currentProperty4 = _this$currentProperty3.form1) === null || _this$currentProperty4 === void 0 ? void 0 : (_this$currentProperty5 = _this$currentProperty4.city) === null || _this$currentProperty5 === void 0 ? void 0 : _this$currentProperty5.location_name) || '';
      const propertyDistrict = ((_this$currentProperty6 = this.currentProperty) === null || _this$currentProperty6 === void 0 ? void 0 : (_this$currentProperty7 = _this$currentProperty6.form1) === null || _this$currentProperty7 === void 0 ? void 0 : (_this$currentProperty8 = _this$currentProperty7.district) === null || _this$currentProperty8 === void 0 ? void 0 : _this$currentProperty8.location_name) || '';
      return propertyType && `${propertyType} in ${propertyDistrict}, ${propertyCity}`;
    },
    form1() {
      var _this$currentProperty9;
      if ((_this$currentProperty9 = this.currentProperty) !== null && _this$currentProperty9 !== void 0 && _this$currentProperty9.form1) {
        const {
          city,
          district,
          neighborhood
        } = this.currentProperty.form1;
        return {
          city,
          district,
          neighborhood
        };
      }
      return null;
    },
    form2() {
      var _this$currentProperty10;
      if ((_this$currentProperty10 = this.currentProperty) !== null && _this$currentProperty10 !== void 0 && _this$currentProperty10.form2) {
        var _this$propertyData2, _this$propertyData2$f, _this$propertyData3, _this$propertyData3$p;
        const {
          bathrooms,
          bedTypes,
          bedrooms,
          furnishType,
          propertyType,
          area
        } = this.currentProperty.form2;
        const furnishTypes = (_this$propertyData2 = this.propertyData) === null || _this$propertyData2 === void 0 ? void 0 : (_this$propertyData2$f = _this$propertyData2.furnishType) === null || _this$propertyData2$f === void 0 ? void 0 : _this$propertyData2$f.filter(item => furnishType.some(t => item.id === t));
        const propertyTypes = (_this$propertyData3 = this.propertyData) === null || _this$propertyData3 === void 0 ? void 0 : (_this$propertyData3$p = _this$propertyData3.propertyType) === null || _this$propertyData3$p === void 0 ? void 0 : _this$propertyData3$p.filter(item => propertyType.some(t => item.prop_type_id === t));
        return {
          bathrooms,
          bedTypes,
          bedrooms,
          furnishTypes,
          propertyTypes,
          area
        };
      }
      return null;
    },
    form3() {
      var _this$currentProperty11;
      if ((_this$currentProperty11 = this.currentProperty) !== null && _this$currentProperty11 !== void 0 && _this$currentProperty11.form3) {
        var _this$propertyData4, _this$propertyData4$a, _this$propertyData4$a2, _this$propertyData5, _this$propertyData5$a, _this$propertyData5$a2, _this$propertyData6, _this$propertyData6$a, _this$propertyData6$a2;
        const {
          bathroomAmenities,
          kitchenAmenities,
          propertyAmenities
        } = this.currentProperty.form3;
        const Bathroom = ((_this$propertyData4 = this.propertyData) === null || _this$propertyData4 === void 0 ? void 0 : (_this$propertyData4$a = _this$propertyData4.amenities) === null || _this$propertyData4$a === void 0 ? void 0 : (_this$propertyData4$a2 = _this$propertyData4$a.Bathroom) === null || _this$propertyData4$a2 === void 0 ? void 0 : _this$propertyData4$a2.filter(item => bathroomAmenities === null || bathroomAmenities === void 0 ? void 0 : bathroomAmenities.some(amenity => item.amenity_id === amenity))) || [];
        const Kitchen = ((_this$propertyData5 = this.propertyData) === null || _this$propertyData5 === void 0 ? void 0 : (_this$propertyData5$a = _this$propertyData5.amenities) === null || _this$propertyData5$a === void 0 ? void 0 : (_this$propertyData5$a2 = _this$propertyData5$a.Kitchen) === null || _this$propertyData5$a2 === void 0 ? void 0 : _this$propertyData5$a2.filter(item => kitchenAmenities === null || kitchenAmenities === void 0 ? void 0 : kitchenAmenities.some(amenity => item.amenity_id === amenity))) || [];
        const Property = ((_this$propertyData6 = this.propertyData) === null || _this$propertyData6 === void 0 ? void 0 : (_this$propertyData6$a = _this$propertyData6.amenities) === null || _this$propertyData6$a === void 0 ? void 0 : (_this$propertyData6$a2 = _this$propertyData6$a.Property) === null || _this$propertyData6$a2 === void 0 ? void 0 : _this$propertyData6$a2.filter(item => propertyAmenities === null || propertyAmenities === void 0 ? void 0 : propertyAmenities.some(amenity => item.amenity_id === amenity))) || [];
        return {
          Bathroom,
          Kitchen,
          Property
        };
      }
      return null;
    },
    form4() {
      var _this$currentProperty12;
      if ((_this$currentProperty12 = this.currentProperty) !== null && _this$currentProperty12 !== void 0 && _this$currentProperty12.form4) {
        const {
          daily_price,
          monthly_price,
          propertyDescription,
          propertyName
        } = this.currentProperty.form4;
        return {
          daily_price,
          monthly_price,
          propertyDescription,
          propertyName
        };
      }
      return null;
    },
    form5() {
      return this.$store.state.PropertyModule.propertyImages || null;
    }
  }
});
// CONCATENATED MODULE: ./components/AddProperty/PreviewForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var AddProperty_PreviewFormvue_type_script_lang_js_ = (PreviewFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/AddProperty/PreviewForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(853)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AddProperty_PreviewFormvue_type_script_lang_js_,
  PreviewFormvue_type_template_id_64cd80ec_scoped_true_render,
  PreviewFormvue_type_template_id_64cd80ec_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "64cd80ec",
  "0d71b56a"
  
)

/* harmony default export */ var PreviewForm = (component.exports);
// EXTERNAL MODULE: ./helpers/images.js
var helpers_images = __webpack_require__(73);

// EXTERNAL MODULE: ./components/postingRequestForm/ProgressCircle.vue + 4 modules
var ProgressCircle = __webpack_require__(345);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/add/7.vue?vue&type=script&lang=js&




const {
  mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('PropertyModule');
/* harmony default export */ var _7vue_type_script_lang_js_ = ({
  name: 'AddPropertyPreviewPage',
  props: {
    propertyData: {
      type: Object,
      required: true
    }
  },
  components: {
    PreviewForm: PreviewForm,
    ProgressCircle: ProgressCircle["a" /* default */]
  },
  data() {
    return {
      currentProperty: null,
      loading: false
    };
  },
  head() {
    return {
      title: `${this.dir === "ltr" ? "Add Property | Step 6" : "إضافة عقار | الخطوة 6"} ${this.appEnv !== 'production' ? '| Staging' : ''}`,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.dir === "ltr" ? 'Add Property | Property Preview' : 'إضافة عقار | نظره عمه على العقار'
      }]
    };
  },
  computed: {
    images() {
      return this.$store.state.PropertyModule.propertyImages || [];
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    appEnv() {
      return this.$config.APP_ENV;
    }
  },
  methods: {
    ...mapActions(['addProperty']),
    async submitProperty() {
      this.loading = true;
      await this.addProperty(this.convertDataForPOST());
      this.loading = false;
    },
    goBack() {
      this.$router.push(this.localePath('/properties/add/6'));
    },
    appendArrayValue(formData, fieldName, array) {
      if (array.length === 0) {
        formData.append(`${fieldName}[]`, '');
        return;
      }
      array.forEach((item, index) => {
        if (typeof item === 'object' && !(item instanceof File)) {
          Object.keys(item).forEach(key => {
            formData.append(`${fieldName}[${index}][${key}]`, item[key]);
          });
        } else {
          formData.append(`${fieldName}[${index}]`, item);
        }
      });
    },
    convertDataForPOST() {
      var _form1$district, _form1$neighborhood;
      const {
        form1,
        form2,
        form3,
        form4,
        form6
      } = this.currentProperty;
      let term = 0;
      if (form4.monthly_price && form4.daily_price) term = 2;else if (form4.monthly_price) term = 1;
      let getLocationId = form1.neighborhood !== null ? form1.neighborhood.location_id : form1.district !== null ? form1.district.location_id : form1.city.location_id;
      let convertedData = {
        location_id: getLocationId,
        city: form1.city.location_name,
        district: ((_form1$district = form1.district) === null || _form1$district === void 0 ? void 0 : _form1$district.location_name) || null,
        neighborhood: ((_form1$neighborhood = form1.neighborhood) === null || _form1$neighborhood === void 0 ? void 0 : _form1$neighborhood.location_name) || null,
        bathrooms: form2.bathrooms,
        bedrooms: form2.bedrooms,
        furnishType: form2.furnishType[0],
        propertyType: form2.propertyType[0],
        bed_types: form2.bedTypes,
        amenities: [...form3.bathroomAmenities, ...form3.kitchenAmenities, ...form3.propertyAmenities],
        name_en: form4.propertyName,
        name_ar: 'name_ar',
        description_en: form4.propertyDescription,
        description_ar: 'description_ar',
        monthly_price: form4.monthly_price || 0,
        daily_price: form4.daily_price || 0,
        term,
        lng: '29.951604',
        lat: '26.671847',
        default_image: '0.png',
        google_location_en: '',
        google_location_ar: '',
        google_location_frnk: '',
        google_location: JSON.stringify({})
      };
      const formData = new FormData();
      for (var i in this.images) {
        let blob = Object(helpers_images["b" /* dataURItoBlob */])(this.images[i]);
        formData.append('images[' + i + ']', blob);
      }
      Object.keys(convertedData).forEach(index => {
        if (Array.isArray(convertedData[index])) {
          this.appendArrayValue(formData, `${index}`, convertedData[index]);
        } else {
          formData.append(index, convertedData[index]);
        }
      });
      return formData;
    }
  },
  mounted() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.currentProperty = localStorage.getItem('property') && JSON.parse(localStorage.getItem('property'));
    if (!this.currentProperty) this.$router.push(this.localePath('/properties/add/1'));

    // if (!this.images?.length) {
    //   this.$bvToast.toast('Kindly re-upload your property images', {
    //     variant: 'primary',
    //     toaster: 'b-toaster-top-center',
    //     solid: true,
    //     autoHideDelay: 2000,
    //   });
    //   this.$router.push(this.localePath('/properties/add/5'));
    // }
  }
});
// CONCATENATED MODULE: ./pages/properties/add/7.vue?vue&type=script&lang=js&
 /* harmony default export */ var add_7vue_type_script_lang_js_ = (_7vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/properties/add/7.vue





/* normalize component */

var _7_component = Object(componentNormalizer["a" /* default */])(
  add_7vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4188bf75"
  
)

/* harmony default export */ var _7 = __webpack_exports__["default"] = (_7_component.exports);

/***/ })

};;
//# sourceMappingURL=7.js.map