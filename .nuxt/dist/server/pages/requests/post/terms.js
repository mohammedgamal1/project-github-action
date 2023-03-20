exports.ids = [48,3];
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

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/WarningModal.vue?vue&type=template&id=b6a1bb8a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-modal', {
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function () {
        return [_c('b', [_vm._v(_vm._s(_vm.$t('common.warning')))])];
      },
      proxy: true
    }, {
      key: "modal-footer",
      fn: function () {
        return [_c('div', {
          staticClass: "w-100"
        }, [_c('b-button', {
          staticClass: "float-right",
          attrs: {
            "variant": "danger",
            "size": "sm"
          },
          on: {
            "click": _vm.removeCache
          }
        }, [_vm._v("\n        " + _vm._s(_vm.$t('common.discard_ch')) + "\n      ")]), _vm._v(" "), _c('b-button', {
          staticClass: "float-right mx-3",
          attrs: {
            "variant": "success",
            "size": "sm"
          },
          on: {
            "click": _vm.closeModalAndNavigate
          }
        }, [_vm._v("\n        " + _vm._s(_vm.$t('common.save_for_later')) + "\n      ")])], 1)];
      },
      proxy: true
    }]),
    model: {
      value: _vm.toggleModel,
      callback: function ($$v) {
        _vm.toggleModel = $$v;
      },
      expression: "toggleModel"
    }
  }, [_vm._v("\n\n  " + _vm._s(_vm.$t('common.warning_message')) + "\n\n  ")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/postingRequestForm/WarningModal.vue?vue&type=template&id=b6a1bb8a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/WarningModal.vue?vue&type=script&lang=js&
/* harmony default export */ var WarningModalvue_type_script_lang_js_ = ({
  props: {
    show: Boolean,
    routeTo: String
  },
  computed: {
    toggleModel: {
      get: function () {
        return this.show;
      },
      set: function () {
        this.$emit('closeModal');
      }
    }
  },
  methods: {
    removeCache() {
      localStorage.removeItem('request');
      this.closeModalAndNavigate();
    },
    closeModalAndNavigate() {
      this.$emit('closeModalAndNavigate');
      this.$router.push(this.routeTo);
    }
  }
});
// CONCATENATED MODULE: ./components/postingRequestForm/WarningModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_WarningModalvue_type_script_lang_js_ = (WarningModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/postingRequestForm/WarningModal.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_WarningModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "17801680"
  
)

/* harmony default export */ var WarningModal = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(522);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("761911ea", content, true, context)
};

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTerms_vue_vue_type_style_index_0_id_b3ce66de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(437);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTerms_vue_vue_type_style_index_0_id_b3ce66de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTerms_vue_vue_type_style_index_0_id_b3ce66de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTerms_vue_vue_type_style_index_0_id_b3ce66de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTerms_vue_vue_type_style_index_0_id_b3ce66de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-b3ce66de]{color:#204ecf}.dark-blue[data-v-b3ce66de]{color:#0f256e !important}.gray[data-v-b3ce66de]{color:#262d3d}.light-gray[data-v-b3ce66de]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-b3ce66de]{color:rgba(38,45,61,.32)}.black-light[data-v-b3ce66de]{color:#111}.btn.btn-outline-secondary[data-v-b3ce66de]{color:#333}label[data-v-b3ce66de]{text-transform:capitalize}.object-fit-cover[data-v-b3ce66de]{object-fit:cover}.object-fit-contain[data-v-b3ce66de]{object-fit:contain}.font-14[data-v-b3ce66de]{font-size:14px}.font-18[data-v-b3ce66de]{font-size:18px}.spacer-5[data-v-b3ce66de]{height:5px;width:100%;display:block}.spacer-10[data-v-b3ce66de]{height:10px;width:100%;display:block}.spacer-15[data-v-b3ce66de]{height:15px;width:100%;display:block}.spacer-20[data-v-b3ce66de]{height:20px;width:100%;display:block}.spacer-25[data-v-b3ce66de]{height:25px;width:100%;display:block}.spacer-30[data-v-b3ce66de]{height:30px;width:100%;display:block}.spacer-40[data-v-b3ce66de]{height:40px;width:100%;display:block}.spacer-50[data-v-b3ce66de]{height:50px;width:100%;display:block}.spacer-65[data-v-b3ce66de]{height:65px;width:100%;display:block}.spacer-100[data-v-b3ce66de]{height:100px;width:100%;display:block}.sb-wrapper[data-v-b3ce66de]{position:relative}.sb-wrapper .sb-button[data-v-b3ce66de]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-b3ce66de]{cursor:pointer}.sb-wrapper .sb-button[data-v-b3ce66de]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-b3ce66de]:focus{outline:1px solid}.m-end-2[data-v-b3ce66de]{margin-inline-end:10px}.custom-terms-container .term-container[data-v-b3ce66de]{display:flex;justify-content:space-between}.custom-terms-container .term-container h5[data-v-b3ce66de]{margin:auto 0}.custom-terms-container .term-container .percentage-sign[data-v-b3ce66de]{position:absolute;right:50px;top:25px;user-select:none}.custom-terms-container[data-v-b3ce66de]  .counter-input-contianer{gap:5px}.custom-terms-container[data-v-b3ce66de]  .input-field{width:100px !important}.details-container[data-v-b3ce66de]{background:#fff;padding:15px 25px 20px;overflow:hidden;gap:20px}.details-container .form-check[data-v-b3ce66de]{margin-bottom:10px;margin-top:10px;display:flex;align-items:center;padding-left:0}.details-container .form-check.forEn[data-v-b3ce66de]{gap:10px}.details-container .form-check.forEn .form-check-input[data-v-b3ce66de]{margin-left:0}.details-container .form-check.forEn .form-check-label[data-v-b3ce66de]{font-size:13px}.details-container .form-check.forAr[data-v-b3ce66de]{gap:25px}.details-container .form-check.forAr .form-check-input[data-v-b3ce66de]{margin-right:0}.details-container .form-check.forAr .form-check-label[data-v-b3ce66de]{font-size:15px}.details-container .form-check .form-check-input[data-v-b3ce66de]{position:static;width:20px;height:20px;margin-top:auto}.details-container .form-check .form-check-label[data-v-b3ce66de]{font-weight:600;line-height:14px;text-align:center;cursor:pointer}.details-container .cancellation[data-v-b3ce66de]{gap:20px}.details-container .cancellation p[data-v-b3ce66de]{padding-right:20px;font-size:12px}.details-container .prop-type[data-v-b3ce66de]{border:0 !important}.details-container .title-section[data-v-b3ce66de]{margin-bottom:15px}.details-container .row[data-v-b3ce66de]{gap:5px}.details-container .details-item[data-v-b3ce66de]{width:calc((100% / 2) - 10px);text-align:center;padding:15px;border:solid 1px #e3e5e5;border-radius:10px}.details-container .details-item h3[data-v-b3ce66de]{text-align:center;margin:15px 0 0;color:#000;font-weight:bold}.details-container .details-item span[data-v-b3ce66de]{font-size:12px;color:#48535b}.user-terms .title[data-v-b3ce66de]{font-weight:600;font-size:16px;line-height:16px;color:#111}.user-terms .row[data-v-b3ce66de]{align-items:center}.step-content .divider[data-v-b3ce66de]{width:120%;height:5px;position:relative;left:-30px;background-color:#f7f9fa}.user-terms .custom-control.custom-checkbox[data-v-b3ce66de]{width:100%;margin-bottom:10px;padding:10px;border-radius:4px;background:linear-gradient(0deg, rgba(38, 45, 61, 0.04), rgba(38, 45, 61, 0.04)),#fff;span-color:#0f256e !important;span-font-weight:bold;span-margin-left:1.5rem;span-margin-bottom:0 !important}.annual-increase[data-v-b3ce66de]{border:solid 1px #e3e5e5;padding:10px;border-radius:10px}.contract-section .row[data-v-b3ce66de]:first-of-type{border-bottom:1px solid #f2f4f5}.contract-section .row[data-v-b3ce66de]{padding:15px 0px}.contract-section .row[data-v-b3ce66de]:last-of-type{border-top:1px solid #f2f4f5}.user-terms .custom-control-label span[data-v-b3ce66de]{color:#0f256e !important;font-weight:bold;margin-left:1.5rem;margin-bottom:0 !important}[dir=rtl] .user-terms .custom-control-label span[data-v-b3ce66de]{margin-left:unset;margin-right:1.5rem !important}.furnish-radio[data-v-b3ce66de]{display:grid}.furnish-radio .custom-radio[data-v-b3ce66de]{margin:10px 0px;padding:0px}.furnish-radio .custom-radio[data-v-b3ce66de]:first-child{padding-bottom:20px;border-bottom:1px solid #f2f4f5}.furnish-radio .custom-radio .custom-control-label[data-v-b3ce66de]::after{left:0px}.user-terms .form-group .custom-control .custom-control-label[data-v-b3ce66de]::before{left:-24px}.user-terms .custom-control-label[data-v-b3ce66de]::before{left:0}[dir=rtl] .user-terms .custom-control-label[data-v-b3ce66de]::before{left:auto;right:0 !important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/UserTerms.vue?vue&type=template&id=b3ce66de&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row user-terms"
  }, [_c('b-col', {
    staticClass: "mt-2 step-content pt-2 mx-auto",
    attrs: {
      "cols": "12",
      "lg": "6"
    }
  }, [_c('b-row', [_c('b-col', {
    staticClass: "step-heading",
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', {
    staticClass: "second-step__title font-weight-semi font-size-large text-center"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('form.postingRequest.userTerms.heading')) + "\n        ")])]), _vm._v(" "), _c('b-col', {
    staticClass: "mt-2 section-white mb-0",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('h3', {
    staticClass: "font-size-semi-large dark-blue title"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('form.postingRequest.preview.your_terms')) + "\n              "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _vm.terms.checkBoxes.length ? [_c('chip-selector', {
    attrs: {
      "options": _vm.terms.checkBoxes,
      "label": "text"
    },
    on: {
      "update-selection": _vm.updateSelectedTerm
    }
  })] : _vm._e()], 2), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_vm.terms.radioBtns.length ? _c('b-row', _vm._l(_vm.terms.radioBtns, function (radio) {
    return _c('div', {
      key: radio.id,
      staticClass: "details-container col-12"
    }, [_c('div', {
      staticClass: "arrive-section"
    }, [_c('h5', {
      staticClass: "font-size-semi-large dark-blue title"
    }, [_vm._v("\n                    " + _vm._s(radio.name) + "\n                  ")]), _vm._v(" "), _c('b-row', _vm._l(radio.input_values, function (val) {
      return _c('b-col', {
        key: val.value_en + radio.id
      }, [_c('div', {
        class: ['form-check', _vm.dir === 'rtl' ? 'forAr' : 'forEn']
      }, [_c('input', {
        staticClass: "form-check-input",
        attrs: {
          "type": "radio",
          "name": _vm.replaceSpacesWithunderscore(radio.name),
          "id": _vm.replaceSpacesWithunderscore(val.value_en)
        },
        on: {
          "change": function ($event) {
            return _vm.getConditions(radio.id, _vm.dir === 'ltr' ? val.value_en : val.value_ar, radio.name);
          }
        }
      }), _vm._v(" "), _c('label', {
        staticClass: "form-check-label font-weight-normal",
        attrs: {
          "for": _vm.replaceSpacesWithunderscore(val.value_en)
        }
      }, [_vm._v("\n                          " + _vm._s(_vm.dir === 'ltr' ? val.value_en : val.value_ar) + "\n                        ")])])]);
    }), 1)], 1)]);
  }), 0) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_vm.terms.inputInt.length ? _c('b-row', [_c('b-col', {
    staticClass: "details-container cancellation mt-0 section-white py-2",
    attrs: {
      "cols": "12"
    }
  }, _vm._l(_vm.terms.inputInt, function (inputTerm) {
    return _c('b-row', {
      key: inputTerm.id,
      staticClass: "justify-content-between mb-3"
    }, [_c('b-col', {
      staticClass: "px-1",
      attrs: {
        "md": "12",
        "lg": "6"
      }
    }, [_c('h5', {
      staticClass: "font-size-semi-large dark-blue title",
      staticStyle: {
        "font-size": "13px"
      }
    }, [_vm._v("\n                  " + _vm._s(inputTerm.name) + "\n                ")]), _vm._v(" "), inputTerm.name.toLowerCase().indexOf('Cancellation'.toLowerCase()) >= 0 ? _c('p', [_vm._v("You can cancel this reservation after the specific days, after this the price will be Non-refundable.")]) : _vm._e()]), _vm._v(" "), _c('b-col', {
      attrs: {
        "md": "12",
        "lg": "3"
      }
    }, [_c('CustomCounter', {
      attrs: {
        "id": `${inputTerm.name}_${inputTerm.id}`,
        "step": 1,
        "validation-rules": "required|min_value:1",
        "min": 1,
        "max": 365
      },
      on: {
        "inputt": function ($event) {
          return _vm.userInputs($event, inputTerm.id, inputTerm.name);
        },
        "changee": function ($event) {
          _vm.getConditions(inputTerm.id, parseInt(inputTerm.value), inputTerm.name);
        }
      },
      model: {
        value: inputTerm.value,
        callback: function ($$v) {
          _vm.$set(inputTerm, "value", $$v);
        },
        expression: "inputTerm.value"
      }
    })], 1)], 1);
  }), 1)], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('b-row', [_c('b-col', {
    staticClass: "section-white",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-semi-large dark-blue title"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('property.furnishing_status')) + "\n          "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c('chip-selector', {
    attrs: {
      "options": _vm.transformFurnishTypes,
      "defaultValue": _vm.selectPreferences.furnishType
    },
    on: {
      "update-selection": _vm.updateFurnishTypes
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4 section-white",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', {
    staticClass: "justify-content-between"
  }, [_c('b-col', {
    attrs: {
      "md": "12",
      "lg": "4"
    }
  }, [_c('h5', {
    staticClass: "font-size-semi-large dark-blue title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('form.postingRequest.SelectPreferences.minimum_rooms')) + "\n            "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "12",
      "lg": "3"
    }
  }, [_c('CustomCounter', {
    attrs: {
      "id": "minimumRooms",
      "step": 1,
      "validation-rules": "required|min_value:1",
      "min": 1,
      "max": 10
    },
    model: {
      value: _vm.selectPreferences.miniumRooms,
      callback: function ($$v) {
        _vm.$set(_vm.selectPreferences, "miniumRooms", $$v);
      },
      expression: "selectPreferences.miniumRooms"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4 section-white",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-semi-large dark-blue title"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('property.property_types')) + "\n        "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c('chip-selector', {
    attrs: {
      "options": _vm.propertyTypes,
      "defaultValue": _vm.selectPreferences.propertyType
    },
    on: {
      "update-selection": _vm.updatePropertyTypes
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm.showNext ? [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', {
    staticClass: "step-next-container mx-auto"
  }, [_c('b-col', {
    attrs: {
      "cols": "5"
    }
  }, [_c('div', [_c('b-button', {
    staticClass: "back-btn",
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": () => {
        _vm.$router.push(this.localePath('/requests/post/staying-details'));
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('common.back')))])])], 1)]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "7"
    }
  }, [_c('div', [_c('b-button', {
    staticClass: "next-btn",
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": _vm.handleNextClick
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('common.next')))])])], 1)])], 1)], 1)] : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/postingRequestForm/UserTerms.vue?vue&type=template&id=b3ce66de&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/esnext.string.replace-all.js"
var esnext_string_replace_all_js_ = __webpack_require__(337);

// EXTERNAL MODULE: ./components/shared/CounterInput.vue + 4 modules
var CounterInput = __webpack_require__(76);

// EXTERNAL MODULE: ./components/shared/form/chipSelector.vue + 4 modules
var chipSelector = __webpack_require__(346);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(22);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/UserTerms.vue?vue&type=script&lang=js&




/* harmony default export */ var UserTermsvue_type_script_lang_js_ = ({
  name: 'UserTerms',
  props: {
    showDescription: {
      type: Boolean,
      default: () => true
    },
    showNext: {
      type: Boolean,
      default: () => true
    },
    conditionsData: {
      type: Array,
      default: []
    },
    propertiesData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ChipSelector: chipSelector["default"],
    CounterInput: CounterInput["a" /* default */],
    CustomCounter: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 446))
  },
  data() {
    return {
      selectPreferences: {
        miniumRooms: 1,
        minimumContract: 1,
        evictionNotice: 1,
        maximumAnnualIncrease: null,
        arrive: 'Early check-in',
        furnishType: [],
        propertyType: [],
        userTerms: [],
        cancellationDays: 5
      },
      conditions: [],
      conditions_for_Preview: [],
      propertyTypes: [],
      terms: {
        checkBoxes: [],
        radioBtns: [],
        inputInt: []
      },
      propertyCategory: {}
    };
  },
  computed: {
    transformUserConditions() {
      return this.conditionsData.map(condition => ({
        value: condition.id,
        text: condition[`name_${this.$i18n.locale}`]
      }));
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    transformFurnishTypes() {
      return this.propertiesData.furnishType && this.propertiesData.furnishType.map(furnish => ({
        value: furnish.id,
        label: furnish.text
      }));
    },
    transformPropertyTypes() {
      return this.propertiesData.propertyType && this.propertiesData.propertyType.map(property => ({
        value: property.prop_type_id,
        label: property.prop_type_name
      }));
    }
  },
  methods: {
    updateSelectedTerm(terms) {
      this.selectPreferences.userTerms = terms;
      this.conditions = this.conditions.filter(condition => typeof condition.value !== 'boolean');
      this.conditions_for_Preview = this.conditions_for_Preview.filter(condition => typeof condition.value !== 'boolean');
      for (let term of terms) {
        this.getConditions(term, true, "");
      }
    },
    updatePropertyTypes(values) {
      this.selectPreferences.propertyType = values;
    },
    updateFurnishTypes(values) {
      this.selectPreferences.furnishType = values;
    },
    handleNextClick() {
      localStorage.setItem('conditions', JSON.stringify(this.conditions));
      localStorage.setItem('conditionsPreview', JSON.stringify(this.conditions_for_Preview));
      let {
        furnishType,
        miniumRooms,
        propertyType,
        userTerms
      } = this.selectPreferences;
      if (!this.conditions.length) {
        window.scrollTo({
          top: 120,
          left: 0,
          behavior: 'smooth'
        });
        let body = this.$t('form.one_condition_at_Least');
        this.$bvToast.toast(body, {
          title: this.$t('form.fillInput'),
          variant: 'primary',
          toaster: 'b-toaster-top-center',
          solid: true,
          autoHideDelay: 1000
        });
        return;
      }
      if (!furnishType || !propertyType) {
        window.scrollTo({
          top: 120,
          left: 0,
          behavior: 'smooth'
        });
        let body = this.$t('form.checkListFirst');
        this.$bvToast.toast(body, {
          title: this.$t('form.fillInput'),
          variant: 'primary',
          toaster: 'b-toaster-top-center',
          solid: true,
          autoHideDelay: 1000
        });
        return;
      }
      if (!furnishType.length || !miniumRooms || !propertyType.length) {
        window.scrollTo({
          top: 120,
          left: 0,
          behavior: 'smooth'
        });
        let body = this.$t('form.checkListFirst');
        this.$bvToast.toast(body, {
          title: this.$t('form.fillInput'),
          variant: 'primary',
          toaster: 'b-toaster-top-center',
          solid: true,
          autoHideDelay: 1000
        });
        return;
      }
      this.$emit('nextStep', this.selectPreferences);
    },
    replaceSpacesWithunderscore(text) {
      return text.replaceAll(/\s/g, '_');
    },
    getConditions(conditionId, val, name) {
      if (this.conditions.length) {
        if (val !== null || val.trim() !== '') {
          for (let condition of this.conditions) {
            if (condition.condition_id === conditionId) {
              condition.value = val;
              let currentConditionInPreview = this.conditions_for_Preview.filter(condition => condition.id === conditionId)[0];
              currentConditionInPreview.value = val;
              return;
            }
          }
        } else {
          return;
        }
        this.conditions.push({
          condition_id: conditionId,
          value: val
        });
        this.conditions_for_Preview.push({
          id: conditionId,
          value: val,
          name: name
        });
      } else {
        this.conditions.push({
          condition_id: conditionId,
          value: val
        });
        this.conditions_for_Preview.push({
          id: conditionId,
          value: val,
          name: name
        });
      }
    },
    userInputs(e, id, name) {
      this.getConditions(id, parseInt(e), name);
    }
  },
  async mounted() {
    var _request$selectPrefer, _request$selectPrefer2, _request$selectPrefer3, _request$selectPrefer4;
    this.conditions = [];
    this.conditions_for_Preview = [];
    const request = localStorage.getItem('request') ? JSON.parse(localStorage.getItem('request')) : this.$router.push(this.localePath('/requests/post/property-category'));
    let selectedCategory = request.propertyCategory;
    this.propertyCategory = request.propertyCategory;
    const propertyRes = await external_axios_default.a.get(`https://apibeta.rentup.co/api/tags/${selectedCategory.id}/propertyTypeByTag`);
    const conditionRes = await external_axios_default.a.get(`https://apibeta.rentup.co/api/tags/${selectedCategory.id}/conditionByTag`);
    this.propertyTypes = [];
    for (let property of propertyRes.data.Data) {
      this.propertyTypes.push({
        value: property.id,
        label: property.name
      });
    }
    let allConditions = conditionRes.data.Data;
    this.terms.checkBoxes = [];
    this.terms.radioBtns = [];
    this.terms.inputInt = [];
    let checkBoxes = allConditions.filter(condition => condition.category_name.indexOf('Check') >= 0);
    if (checkBoxes.length) {
      for (let term of checkBoxes) {
        this.terms.checkBoxes.push({
          value: term.id,
          text: term.name
        });
      }
    }
    this.terms.radioBtns = allConditions.filter(condition => condition.category_name.indexOf('Radio') >= 0);
    this.terms.inputInt = allConditions.filter(condition => condition.category_name.indexOf('Input') >= 0);
    for (let termInput of this.terms.inputInt) {
      termInput.value = 1;
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.selectPreferences.userTerms = (_request$selectPrefer = request.selectPreferences) === null || _request$selectPrefer === void 0 ? void 0 : _request$selectPrefer.userTerms;
    this.selectPreferences.furnishType = (_request$selectPrefer2 = request.selectPreferences) === null || _request$selectPrefer2 === void 0 ? void 0 : _request$selectPrefer2.furnishType;
    this.selectPreferences.propertyType = (_request$selectPrefer3 = request.selectPreferences) === null || _request$selectPrefer3 === void 0 ? void 0 : _request$selectPrefer3.propertyType;
    this.selectPreferences.miniumRooms = ((_request$selectPrefer4 = request.selectPreferences) === null || _request$selectPrefer4 === void 0 ? void 0 : _request$selectPrefer4.miniumRooms) || 1;
  }
});
// CONCATENATED MODULE: ./components/postingRequestForm/UserTerms.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_UserTermsvue_type_script_lang_js_ = (UserTermsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/postingRequestForm/UserTerms.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(521)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_UserTermsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b3ce66de",
  "2dc3bc7d"
  
)

/* harmony default export */ var UserTerms = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(895);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3fc7eb86", content, true, context)
};

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_style_index_0_id_2c4b7c29_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(650);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_style_index_0_id_2c4b7c29_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_style_index_0_id_2c4b7c29_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_style_index_0_id_2c4b7c29_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_vue_vue_type_style_index_0_id_2c4b7c29_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.back_close{background-color:#f2f2f2 !important}.add-property{overflow:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/requests/post/terms.vue?vue&type=template&id=2c4b7c29&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "add-property pb-2"
  }, [_vm._ssrNode("<div class=\"px-3 back_close d-flex justify-content-between align-items-center py-3 d-md-none\">", "</div>", [_c('b-icon', {
    attrs: {
      "font-scale": "1.5",
      "icon": "arrow-left"
    },
    on: {
      "click": function ($event) {
        return _vm.$router.go(-1);
      }
    }
  }), _vm._ssrNode(" "), _c('b-icon', {
    attrs: {
      "icon": "x-lg"
    },
    on: {
      "click": function ($event) {
        _vm.$router.push(_vm.localePath('/'));
      }
    }
  })], 2), _vm._ssrNode(" "), _c('b-overlay', {
    attrs: {
      "show": _vm.loading,
      "rounded": "sm",
      "opacity": 1
    }
  }, [_c('div', {
    staticClass: "post-form-container"
  }, [_c('b-progress', {
    staticClass: "w-100 mt-lg-2",
    attrs: {
      "value": 4,
      "max": 5,
      "height": _vm.progressHeight
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "p-3 step"
  }, [_c('UserTerms', {
    attrs: {
      "conditionsData": _vm.userConditions,
      "propertiesData": _vm.propertiesData
    },
    on: {
      "nextStep": _vm.goNext
    }
  })], 1)], 1)]), _vm._ssrNode(" "), _c('WarningModal', {
    attrs: {
      "show": _vm.showWarningModal,
      "routeTo": _vm.routeTo
    },
    on: {
      "closeModal": function ($event) {
        _vm.showWarningModal = false;
      },
      "closeModalAndNavigate": _vm.closeModalAndNavigate
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/requests/post/terms.vue?vue&type=template&id=2c4b7c29&

// EXTERNAL MODULE: ./components/postingRequestForm/UserTerms.vue + 4 modules
var UserTerms = __webpack_require__(545);

// EXTERNAL MODULE: ./components/postingRequestForm/ProgressCircle.vue + 4 modules
var ProgressCircle = __webpack_require__(345);

// EXTERNAL MODULE: ./components/postingRequestForm/WarningModal.vue + 4 modules
var WarningModal = __webpack_require__(377);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/requests/post/terms.vue?vue&type=script&lang=js&



/* harmony default export */ var termsvue_type_script_lang_js_ = ({
  transition: {
    name: 'slide-fade',
    mode: 'out-in'
  },
  components: {
    UserTerms: UserTerms["a" /* default */],
    ProgressCircle: ProgressCircle["a" /* default */],
    WarningModal: WarningModal["a" /* default */]
  },
  data() {
    return {
      currentRequest: null,
      propertiesData: {},
      userConditions: [],
      loading: false,
      showWarningModal: false,
      routeTo: '',
      navigate: false
    };
  },
  head() {
    return {
      title: `${this.dir === "ltr" ? "Posting Request | Step 3" : "نشر طلب | الخطوة 3"} ${this.appEnv !== 'production' ? '| Staging' : ''}`,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.dir === "ltr" ? 'Posting Request | Terms Selection' : 'نشر طلب | إختيار الشروط'
      }]
    };
  },
  computed: {
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    appEnv() {
      return this.$config.APP_ENV;
    },
    progressHeight() {
      if (false) {}
    }
  },
  methods: {
    goNext(values) {
      localStorage.setItem('request', JSON.stringify({
        ...this.currentRequest,
        selectPreferences: values
      }));
      this.$router.push(this.localePath('/requests/post/preview'));
    },
    closeModalAndNavigate() {
      this.showWarningModal = false;
      this.navigate = true;
    }
  },
  async mounted() {
    this.currentRequest = localStorage.getItem('request') && JSON.parse(localStorage.getItem('request'));
    this.loading = true;
    this.term = localStorage.getItem('request') ? JSON.parse(localStorage.getItem('request')).stayingDetails.selectedDurationType === 'days' ? 0 : 1 : 0;
    const {
      Data
    } = await this.$axios.$get('/getPropMasterData');
    this.propertiesData = Data;
    const terms = await this.$axios.$get(`/conditions?term=${this.term}`);
    this.userConditions = terms.Data.conditions;
    this.loading = false;
  },
  beforeRouteLeave(to, from, next) {
    if (!to.path.includes('/requests/post/') && this.currentRequest) {
      this.showWarningModal = true;
      this.routeTo = to.path;
      if (this.navigate) return next();
    } else next();
  }
});
// CONCATENATED MODULE: ./pages/requests/post/terms.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_termsvue_type_script_lang_js_ = (termsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/requests/post/terms.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(894)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_termsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "33cf6e9e"
  
)

/* harmony default export */ var terms = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=terms.js.map