exports.ids = [33,1,3];
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

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(348);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("dd7acc96", content, true, context)
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

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/form/chipSelector.vue?vue&type=template&id=2da2bef2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [!_vm.isRadio ? [_vm._ssrNode(_vm.options && _vm.options.length > 0 ? "<div class=\"chips-container\">" + _vm._ssrList(_vm.options, function (option, index) {
    return "<div" + _vm._ssrClass(null, _vm.selectedOptions.includes(option[_vm.$attrs.value] || option.value) || _vm.selected || _vm.defaultValue && _vm.defaultValue.includes(option[_vm.$attrs.value] || option.value) ? 'selected chip' : 'chip') + "><div class=\"chip-label\"><span>" + _vm._ssrEscape(_vm._s(option[_vm.$attrs.label] || option.label)) + "</span></div></div>";
  }) + "</div>" : "<!---->")] : [_vm._ssrNode("<div class=\"chips-container\">", "</div>", [_c('b-form-radio-group', _vm._b({
    model: {
      value: _vm.form[_vm.fieldName],
      callback: function ($$v) {
        _vm.$set(_vm.form, _vm.fieldName, $$v);
      },
      expression: "form[fieldName]"
    }
  }, 'b-form-radio-group', _vm.$attrs, false), _vm._l(_vm.options, function (option, index) {
    return _c('b-form-radio', {
      key: index,
      attrs: {
        "value": option[_vm.$attrs.value]
      }
    }, [_c('div', {
      staticClass: "chip d-flex align-items-center justify-content",
      class: option[_vm.$attrs.value] == _vm.form[_vm.fieldName] ? 'selected' : ''
    }, [_c('span', {
      staticClass: "chip-label font-size-smaller"
    }, [_vm._v("\n              " + _vm._s(option[_vm.$attrs.label]) + "\n            ")])])]);
  }), 1)], 1)]], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/form/chipSelector.vue?vue&type=template&id=2da2bef2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/form/chipSelector.vue?vue&type=script&lang=js&
/* harmony default export */ var chipSelectorvue_type_script_lang_js_ = ({
  name: 'chipSelector',
  props: {
    options: {
      type: Array,
      required: true
    },
    form: {
      type: Object,
      default: () => {}
    },
    fieldName: {
      type: String,
      default: ''
    },
    isRadio: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: [Object, Array],
      required: false
    }
  },
  data() {
    return {
      selectedOptions: []
    };
  },
  methods: {
    toggleOption(option) {
      if (this.defaultValue) {
        this.selectedOptions = this.defaultValue;
        this.defaultValue = null;
      }
      if (!this.selectedOptions.includes(option[this.$attrs.value] || option.value)) {
        this.selectedOptions.push(option[this.$attrs.value] || option.value);
      } else {
        this.selectedOptions.splice(this.selectedOptions.indexOf(option[this.$attrs.value] || option.value), 1);
      }
      this.$emit('update-selection', this.selectedOptions);
    }
  },
  mounted() {
    if (this.defaultValue) {
      this.selectedOptions = this.defaultValue;
    }
    console.log(this.options);
  }
});
// CONCATENATED MODULE: ./components/shared/form/chipSelector.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_chipSelectorvue_type_script_lang_js_ = (chipSelectorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/form/chipSelector.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(347)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_chipSelectorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b33847d0"
  
)

/* harmony default export */ var chipSelector = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_chipSelector_vue_vue_type_style_index_0_id_2da2bef2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(341);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_chipSelector_vue_vue_type_style_index_0_id_2da2bef2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_chipSelector_vue_vue_type_style_index_0_id_2da2bef2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_chipSelector_vue_vue_type_style_index_0_id_2da2bef2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_chipSelector_vue_vue_type_style_index_0_id_2da2bef2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.chips-container{max-width:100%;margin:15px 0px}.chips-container .close-icon{background:#0078ff;color:#e6f2ff;width:13px;height:13px;border-radius:50%;font-size:11px;display:flex;align-items:center;justify-content:center;margin-left:9px;padding:8px}.chips-container .chip{height:36px;left:0;top:0;background:#fff;box-sizing:border-box;cursor:pointer;display:inline-block;padding:8px 12px;margin:8px 12px 8px 0px;transition:all 300ms linear;color:#48535b;border:1px solid #48535b;border-radius:100px}.chips-container .chip .chip-label{font-style:normal;font-weight:600;font-size:12px;line-height:20px;color:#48535b;margin:auto;vertical-align:middle;position:relative;top:50%;transform:translateY(-50%);text-align:center}.chips-container .chip.selected{background:rgba(0,120,255,.1);border:none}.chips-container .chip.selected .chip-label{color:#0078ff}.chips-container .custom-control-label::before{display:none !important}.chips-container .custom-control-label::after{display:none !important}.chips-container .custom-control{padding:0 !important}.chips-container .custom-control-inline{margin:0 !important}.chips-container .chip{border:1px solid #c1c2c5}.chips-container .chip .chip-label{color:#757e8d}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(430);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2083eb0f", content, true, context)
};

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomCounter_vue_vue_type_style_index_0_id_973c7e12_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomCounter_vue_vue_type_style_index_0_id_973c7e12_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomCounter_vue_vue_type_style_index_0_id_973c7e12_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomCounter_vue_vue_type_style_index_0_id_973c7e12_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomCounter_vue_vue_type_style_index_0_id_973c7e12_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.counter-input-contianer[data-v-973c7e12] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-radius: 8px;\r\n  padding: 12px;\n}\nbutton[data-v-973c7e12] {\r\n  background: none;\r\n  border: solid 2px rgb(72, 72, 255);\r\n  border-radius: 100%;\r\n  width: 27px;\r\n  height: 27px;\r\n  padding: 2px;\r\n  cursor: pointer;\n}\nbutton.counter-disabled[data-v-973c7e12] {\r\n  cursor: default;\r\n  opacity: 0.4;\n}\n.counter-value[data-v-973c7e12] {\r\n  width: auto;\r\n  min-width: 50px;\r\n  height: auto;\r\n  display: inline-block;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  border: none;\r\n  padding: 0;\r\n  -webkit-appearance: textfield;\r\n  -moz-appearance: textfield;\r\n  appearance: textfield;\r\n  background-color: #e9ecef;\n}\r\n/* Chrome, Safari, Edge, Opera */\ninput[data-v-973c7e12]::-webkit-outer-spin-button,\r\ninput[data-v-973c7e12]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\n}\r\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/form/CustomCounter.vue?vue&type=template&id=973c7e12&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ValidationProvider', {
    attrs: {
      "rules": _vm.validationRules,
      "name": _vm.feedbackId
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (vContext) {
        return [_c('div', {
          staticClass: "counter-input-contianer"
        }, [_c('button', {
          class: {
            'counter-disabled': _vm.counterValue == _vm.min
          },
          attrs: {
            "type": "button"
          },
          on: {
            "click": _vm.decrement
          }
        }, [_c('svg', {
          attrs: {
            "width": "24",
            "height": "24",
            "viewBox": "0 0 24 24",
            "fill": "none",
            "xmlns": "http://www.w3.org/2000/svg"
          }
        }, [_c('path', {
          attrs: {
            "d": "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z",
            "fill": "#004ED4"
          }
        })])]), _vm._v(" "), _c('b-form-input', {
          staticClass: "counter-value",
          attrs: {
            "type": "number",
            "aria-describedby": _vm.feedbackId,
            "min": _vm.min,
            "max": _vm.max
          },
          on: {
            "input": function ($event) {
              return _vm.$emit('inputt', _vm.counterValue);
            },
            "change": _vm.onInputChange
          },
          model: {
            value: _vm.counterValue,
            callback: function ($$v) {
              _vm.counterValue = $$v;
            },
            expression: "counterValue"
          }
        }), _vm._v(" "), _c('button', {
          class: {
            'counter-disabled': _vm.counterValue == _vm.max
          },
          attrs: {
            "type": "button"
          },
          on: {
            "click": _vm.increment
          }
        }, [_c('svg', {
          attrs: {
            "width": "24",
            "height": "24",
            "viewBox": "0 0 24 24",
            "fill": "none",
            "xmlns": "http://www.w3.org/2000/svg"
          }
        }, [_c('path', {
          attrs: {
            "d": "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z",
            "fill": "#004ED4"
          }
        })])])], 1), _vm._v(" "), _c('transition', {
          attrs: {
            "name": "slide"
          }
        }, [_c('b-form-invalid-feedback', {
          staticClass: "error-field",
          attrs: {
            "id": _vm.feedbackId
          }
        }, [_vm._v(_vm._s(!vContext.valid && vContext.errors[0]))])], 1)];
      }
    }])
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/form/CustomCounter.vue?vue&type=template&id=973c7e12&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/form/CustomCounter.vue?vue&type=script&lang=js&
// TODO : this component has to be replaced with the bootstrap spin button
/* harmony default export */ var CustomCountervue_type_script_lang_js_ = ({
  name: 'CustomCounter',
  inheritAttrs: false,
  props: {
    value: {
      // this prop for v-model
      required: true,
      type: Number
    },
    min: {
      required: false,
      type: Number,
      default: 0
    },
    max: {
      required: false,
      type: Number,
      default: 5000
    },
    validationRules: {
      type: String,
      default: ''
    },
    step: {
      required: false,
      default: 1
    },
    validationName: {
      type: String,
      required: false,
      default: 'text'
    }
  },
  data() {
    return {
      counterValue: 0
    };
  },
  computed: {
    feedbackId() {
      return 'input' + this.validationName.replace(/ /g, '-') + '-feedback';
    }
  },
  methods: {
    increment() {
      if (parseInt(this.counterValue) < this.max) {
        this.emitInputEvent(parseInt(this.counterValue) + this.step);
        this.updateCounterValue(parseInt(this.counterValue) + this.step);
        this.$emit('changee');
      }
    },
    decrement() {
      if (parseInt(this.counterValue) > this.min) {
        this.emitInputEvent(parseInt(this.counterValue) - this.step);
        this.updateCounterValue(parseInt(this.counterValue) - this.step);
        this.$emit('changee');
      }
    },
    emitInputEvent(value) {
      this.$emit('input', value);
    },
    validateNumber(newValue) {
      return newValue >= this.min && newValue <= this.max;
    },
    getValidationState(vContext) {
      return vContext.errors[0] ? false : vContext.valid ? true : null;
    },
    onInputChange() {
      this.validateNumber(this.counterValue) ? this.emitInputEvent(this.counterValue) : this.counterValue > this.max ? this.updateCounterValue(this.max) : this.updateCounterValue(this.min);
    },
    updateCounterValue(value) {
      this.counterValue = value;
    }
  },
  mounted() {
    if (this.value) {
      this.updateCounterValue(this.value);
    } else {
      this.updateCounterValue(this.min);
    }
  },
  watch: {
    value(val) {
      this.updateCounterValue(val);
    }
  }
});
// CONCATENATED MODULE: ./components/shared/form/CustomCounter.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_CustomCountervue_type_script_lang_js_ = (CustomCountervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/form/CustomCounter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(429)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_CustomCountervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "973c7e12",
  "ee38d3a4"
  
)

/* harmony default export */ var CustomCounter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(848);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1e286f2a", content, true, context)
};

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_2_vue_vue_type_style_index_0_id_6806d21c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(628);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_2_vue_vue_type_style_index_0_id_6806d21c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_2_vue_vue_type_style_index_0_id_6806d21c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_2_vue_vue_type_style_index_0_id_6806d21c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_2_vue_vue_type_style_index_0_id_6806d21c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.form-input.area{position:relative}.form-input.area .input-field{width:120px !important}.form-input.area .metre-sign{position:absolute;top:33px;user-select:none}.form-input.area .metre-sign.en_sign{right:40px}.form-input.area .metre-sign.ar_sign{left:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/add/2.vue?vue&type=template&id=6806d21c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"form-container\">", "</div>", [_c('ProgressCircle', {
    attrs: {
      "current-step": 2,
      "total-steps": 7
    }
  }), _vm._ssrNode(" <h2 class=\"form-heading\">" + _vm._ssrEscape(_vm._s(_vm.$t('property.define_specs'))) + "</h2> "), _vm._ssrNode("<div class=\"form-input\">", "</div>", [_vm._ssrNode("<label>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('property.furnishing_status')) + " ") + "<sup style=\"color: red\">*</sup></label> "), _c('ChipSelector', {
    attrs: {
      "value": "id",
      "label": "text",
      "options": _vm.propertyData.furnishType,
      "defaultValue": _vm.property.form2.furnishType
    },
    on: {
      "update-selection": _vm.updateFurnishType
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-input\">", "</div>", [_vm._ssrNode("<label>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('property.property_types')) + " ") + "<sup style=\"color: red\">*</sup></label> "), _c('ChipSelector', {
    attrs: {
      "value": "prop_type_id",
      "label": "prop_type_name",
      "options": _vm.propertyData.propertyType,
      "defaultValue": _vm.property.form2.propertyType
    },
    on: {
      "update-selection": _vm.updatePropertyType
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-input area d-flex justify-content-between align-items-center\">", "</div>", [_vm._ssrNode("<label>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('property.propertyArea')) + "\n      ") + "</label> "), _c('AppInput', {
    attrs: {
      "type": "number",
      "min": 0,
      "max": 10000,
      "validation-rules": "required|min:0|max:10000",
      "input-id": "area",
      "placeholder": _vm.dir === 'ltr' ? 'ex: 200m' : 'مثال: 200م',
      "isRequired": false
    },
    model: {
      value: _vm.property.form2.area,
      callback: function ($$v) {
        _vm.$set(_vm.property.form2, "area", $$v);
      },
      expression: "property.form2.area"
    }
  }), _vm._ssrNode(" " + (_vm.property.form2.area ? "<span" + _vm._ssrClass(null, ['metre-sign', 'font-size-semi-large', _vm.dir === 'ltr' ? 'en_sign' : 'ar_sign']) + ">" + _vm._ssrEscape(" " + _vm._s(_vm.dir === 'ltr' ? 'm' : 'م') + " ") + "<sup>2</sup></span>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-input\">", "</div>", [_vm._ssrNode("<label>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('property.room_numbers')) + " ") + "<sup style=\"color: red\">*</sup></label> "), _vm._ssrNode("<div class=\"number-counter-input\">", "</div>", [_vm._ssrNode("<label>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('property.bedrooms')) + "\n        ") + "</label> "), _c('CustomCounter', {
    attrs: {
      "step": 1,
      "validation-name": _vm.$t('property.bedrooms'),
      "validation-rules": "required|min_value:1",
      "min": 1,
      "max": 10
    },
    model: {
      value: _vm.property.form2.bedrooms,
      callback: function ($$v) {
        _vm.$set(_vm.property.form2, "bedrooms", $$v);
      },
      expression: "property.form2.bedrooms"
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"number-counter-input\">", "</div>", [_vm._ssrNode("<label for=\"bathrooms1\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('property.bathrooms')) + "\n        ") + "</label> "), _c('CustomCounter', {
    attrs: {
      "id": "bathrooms1",
      "step": 1,
      "validation-name": _vm.$t('property.bathrooms'),
      "validation-rules": "required|min_value:1",
      "min": 1,
      "max": 10
    },
    model: {
      value: _vm.property.form2.bathrooms,
      callback: function ($$v) {
        _vm.$set(_vm.property.form2, "bathrooms", $$v);
      },
      expression: "property.form2.bathrooms"
    }
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-input\">", "</div>", [_vm._ssrNode("<label>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('property.beds_availability')) + "\n      ") + "</label> "), _vm._l(_vm.propertyData.bedTypes, function (bedType, index) {
    return _vm._ssrNode("<div class=\"number-counter-input\">", "</div>", [_vm._ssrNode("<label class=\"mb-0\">" + _vm._ssrEscape("\n          " + _vm._s(bedType.name) + "\n        ") + "</label> "), _c('CustomCounter', {
      attrs: {
        "step": 1,
        "validation-name": 'count',
        "validation-rules": "required|min_value:0",
        "min": 0,
        "max": 10
      },
      model: {
        value: _vm.property.form2.bedTypes[index].count,
        callback: function ($$v) {
          _vm.$set(_vm.property.form2.bedTypes[index], "count", $$v);
        },
        expression: "property.form2.bedTypes[index].count"
      }
    })], 2);
  })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"page-actions\">", "</div>", [_c('b-button', {
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v(_vm._s(_vm.$t('common.back')))]), _vm._ssrNode(" "), _c('b-button', {
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": _vm.goNext
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('common.next')) + "\n    ")])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/properties/add/2.vue?vue&type=template&id=6806d21c&

// EXTERNAL MODULE: ./components/shared/form/chipSelector.vue + 4 modules
var chipSelector = __webpack_require__(346);

// EXTERNAL MODULE: ./components/shared/form/CustomCounter.vue + 4 modules
var CustomCounter = __webpack_require__(446);

// EXTERNAL MODULE: ./components/postingRequestForm/ProgressCircle.vue + 4 modules
var ProgressCircle = __webpack_require__(345);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/add/2.vue?vue&type=script&lang=js&



/* harmony default export */ var _2vue_type_script_lang_js_ = ({
  name: 'AddPropertyPage2',
  props: {
    propertyData: {
      type: Object,
      required: true
    }
  },
  components: {
    ChipSelector: chipSelector["default"],
    CustomCounter: CustomCounter["default"],
    ProgressCircle: ProgressCircle["a" /* default */]
  },
  transition: {
    name: 'slide-fade',
    mode: 'out-in'
  },
  data() {
    return {
      currentProperty: null,
      property: {
        form1: null,
        form2: {
          area: 100,
          furnishType: null,
          propertyType: null,
          bedrooms: 1,
          bathrooms: 1,
          bedTypes: [{
            property_bed_types_id: 1,
            count: 0
          }, {
            property_bed_types_id: 2,
            count: 0
          }, {
            property_bed_types_id: 3,
            count: 0
          }, {
            property_bed_types_id: 4,
            count: 0
          }]
        },
        form3: null,
        form4: null,
        form5: null,
        form6: null
      }
    };
  },
  head() {
    return {
      title: `${this.dir === "ltr" ? "Add Property | Step 2" : "إضافة عقار | الخطوة 2"} ${this.appEnv !== 'production' ? '| Staging' : ''}`,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.dir === "ltr" ? 'Add Property | Property Details' : 'إضافة عقار | تفاصيل العقار'
      }]
    };
  },
  methods: {
    updatePropertyType(item) {
      this.property.form2.propertyType = item;
    },
    updateFurnishType(item) {
      this.property.form2.furnishType = item;
    },
    goNext() {
      const {
        furnishType,
        propertyType,
        area
      } = this.property.form2;
      if (!(furnishType !== null && furnishType !== void 0 && furnishType.length) || !(propertyType !== null && propertyType !== void 0 && propertyType.length)) {
        window.scrollTo({
          top: 120,
          left: 0,
          behavior: 'smooth'
        });
        let body = this.$t('form.checkListFirst');
        this.$bvToast.toast(body, {
          title: this.$t('form.checkListFirst'),
          variant: 'primary',
          toaster: 'b-toaster-top-center',
          solid: true,
          autoHideDelay: 2000
        });
        return;
      }
      if ((area > 10000 || area < 0) && !!area) {
        window.scrollTo({
          top: 120,
          left: 0,
          behavior: 'smooth',
          solid: true,
          autoHideDelay: 2000
        });
        alert(area);
        let body = this.$t('property.propertyArea_Warning');
        this.$bvToast.toast(body, {
          title: this.$t('property.propertyArea_Warning'),
          variant: 'primary',
          toaster: 'b-toaster-top-center',
          solid: true,
          autoHideDelay: 1000
        });
        return;
      }
      localStorage.setItem('property', JSON.stringify({
        ...this.currentProperty,
        form2: this.property.form2
      }));
      this.$router.push(this.localePath('/properties/add/3'));
    },
    goBack() {
      this.$router.push(this.localePath('/properties/add/1'));
    }
  },
  computed: {
    appEnv() {
      return this.$config.APP_ENV;
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
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
    if (this.currentProperty.form2) this.property = this.currentProperty;
  }
});
// CONCATENATED MODULE: ./pages/properties/add/2.vue?vue&type=script&lang=js&
 /* harmony default export */ var add_2vue_type_script_lang_js_ = (_2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/properties/add/2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(847)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  add_2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "414249f0"
  
)

/* harmony default export */ var _2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map