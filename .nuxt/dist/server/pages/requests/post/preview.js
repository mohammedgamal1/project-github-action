exports.ids = [45];
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

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(524);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("91ff57a2", content, true, context)
};

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_7acf1451_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(438);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_7acf1451_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_7acf1451_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_7acf1451_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_7acf1451_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-7acf1451]{color:#204ecf}.dark-blue[data-v-7acf1451]{color:#0f256e !important}.gray[data-v-7acf1451]{color:#262d3d}.light-gray[data-v-7acf1451]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-7acf1451]{color:rgba(38,45,61,.32)}.black-light[data-v-7acf1451]{color:#111}.btn.btn-outline-secondary[data-v-7acf1451]{color:#333}label[data-v-7acf1451]{text-transform:capitalize}.object-fit-cover[data-v-7acf1451]{object-fit:cover}.object-fit-contain[data-v-7acf1451]{object-fit:contain}.font-14[data-v-7acf1451]{font-size:14px}.font-18[data-v-7acf1451]{font-size:18px}.spacer-5[data-v-7acf1451]{height:5px;width:100%;display:block}.spacer-10[data-v-7acf1451]{height:10px;width:100%;display:block}.spacer-15[data-v-7acf1451]{height:15px;width:100%;display:block}.spacer-20[data-v-7acf1451]{height:20px;width:100%;display:block}.spacer-25[data-v-7acf1451]{height:25px;width:100%;display:block}.spacer-30[data-v-7acf1451]{height:30px;width:100%;display:block}.spacer-40[data-v-7acf1451]{height:40px;width:100%;display:block}.spacer-50[data-v-7acf1451]{height:50px;width:100%;display:block}.spacer-65[data-v-7acf1451]{height:65px;width:100%;display:block}.spacer-100[data-v-7acf1451]{height:100px;width:100%;display:block}.sb-wrapper[data-v-7acf1451]{position:relative}.sb-wrapper .sb-button[data-v-7acf1451]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-7acf1451]{cursor:pointer}.sb-wrapper .sb-button[data-v-7acf1451]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-7acf1451]:focus{outline:1px solid}.m-end-2[data-v-7acf1451]{margin-inline-end:10px}#color-head[data-v-7acf1451]{color:#1c7db6}.details-container[data-v-7acf1451]{background:#fff;padding:0px 25px 20px;overflow:hidden}.details-container.no-border .row span[data-v-7acf1451]{border:none !important}.details-container .prop-type[data-v-7acf1451]{border:0px !important}.details-container .title-section[data-v-7acf1451]{margin-bottom:15px}.details-container .row[data-v-7acf1451]{gap:20px;justify-content:space-between}.details-container .row span[data-v-7acf1451]{border:1px solid #000;border-radius:50%;padding:5px 10px}.details-container .details-item[data-v-7acf1451]{width:calc((100% / 2) - 10px);text-align:center;padding:15px;border:solid 1px #e3e5e5;border-radius:10px}.details-container .details-item h3[data-v-7acf1451]{text-align:center;margin:15px 0px 0px;color:#000;font-weight:bold}.details-container .details-item span[data-v-7acf1451]{font-size:12px;color:#48535b}.request-details[data-v-7acf1451]{min-height:100vh;background-color:#f7f9fa}.request-details .section[data-v-7acf1451]{background-color:#fff;padding:32px 0;margin-top:18px}.request-details .chip[data-v-7acf1451]{display:inline-block;padding:8px 12px;background-color:#e6f2ff;color:#0078ff;font-weight:bold;border-radius:32px;margin:0px 12px 12px 0}.request-details .chip[data-v-7acf1451]:last-child{margin:0}.request-details .heading[data-v-7acf1451]{font-weight:bold}.request-details .heading .container[data-v-7acf1451]{display:flex;justify-content:space-between}.request-details .heading p[data-v-7acf1451]{font-size:18px;margin:0}.request-details .heading .btn-primary[data-v-7acf1451]{background-color:#e6f2ff;color:#0078ff;border:none;font-weight:bold;border-radius:12px}.request-details .cards[data-v-7acf1451]{display:flex;justify-content:space-around}.request-details .cards .card[data-v-7acf1451]{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:1rem;height:156px;width:170px;border:1px solid #e3e5e5;border-radius:32px}.request-details .cards .card .price-tag[data-v-7acf1451]{text-align:center;font-weight:bold;font-size:16px}.request-details .cards .card .price-tag p[data-v-7acf1451]{font-weight:300;color:#48535b;text-align:center;font-size:15px}.request-details .address .container[data-v-7acf1451]{display:flex;align-items:flex-start}.request-details .address .container .svg-icon[data-v-7acf1451]{margin:2px 16px 0 0}.request-details .number-counter[data-v-7acf1451]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #e3e5e5}.request-details .number-counter[data-v-7acf1451]:last-child{border:none}.request-details .number-counter p[data-v-7acf1451]{margin:0;font-weight:600;font-size:16px}.request-details .number-counter .number[data-v-7acf1451]{display:flex;justify-content:center;align-items:center;width:40px;height:40px;border:1px solid #e3e5e5;border-radius:50%}.request-details .actions[data-v-7acf1451]{display:flex;padding:24px 16px 16px;background-color:#fff;margin-top:16px;gap:10px}.request-details .actions .btn[data-v-7acf1451]{padding-top:12px;padding-bottom:12px;border-radius:12px;font-weight:600;border:none;max-width:260px !important}.request-details .actions .btn-secondary[data-v-7acf1451]{background-color:#f7f9fa;color:#111;flex:1;margin-right:14px}.request-details .actions .btn-primary[data-v-7acf1451]{background-color:#0078ff;flex:3}@media screen and (min-width: 768px){.request-details .cards[data-v-7acf1451]{justify-content:center}.request-details .cards .card[data-v-7acf1451]{margin:0 16px}}@media screen and (max-width: 768px){.request-details .actions[data-v-7acf1451]{width:100%;margin:0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/PostingPreview.vue?vue&type=template&id=7acf1451&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "request-details py-3"
  }, [_vm._ssrNode("<div class=\"container\" data-v-7acf1451>", "</div>", [_c('b-col', {
    staticClass: "step-heading",
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', {
    staticClass: "second-step__title font-weight-semi font-size-large text-center",
    attrs: {
      "id": "color-head"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('form.postingRequest.preview.heading')) + "\n      ")]), _vm._v(" "), _c('h1', {
    staticClass: "second-step__title font-weight-semi font-size-large text-center"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('form.postingRequest.preview.preview')) + "\n      ")])]), _vm._ssrNode(" "), _c('b-col', {
    staticClass: "mx-auto px-0",
    attrs: {
      "cols": "12",
      "md": "9"
    }
  }, [_vm.postingRequest.stayingDetails ? _c('div', {
    staticClass: "cards section"
  }, [_c('div', {
    staticClass: "card mx-2"
  }, [_c('svg-icon', {
    staticClass: "mb-2 ml-2",
    attrs: {
      "fill": "#262D3D",
      "name": "calendar",
      "height": "24",
      "width": "24"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "price-tag"
  }, [_c('span', [_vm._v("\n              " + _vm._s(_vm.postingRequest.stayingDetails.selectedDuration) + "\n              " + _vm._s(_vm.formating_price_type(_vm.postingRequest.stayingDetails.selectedDurationType)) + "\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n              From,\n              " + _vm._s(_vm.$dateFns.format(new Date(_vm.postingRequest.stayingDetails.startingDate), 'dd MMM yyyy')) + "\n            ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "card mx-2"
  }, [_c('svg-icon', {
    staticClass: "mb-2",
    attrs: {
      "fill": "#262D3D",
      "name": "dollar",
      "height": "24",
      "width": "24"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "price-tag"
  }, [_c('span', [_vm._v(_vm._s(_vm.postingRequest.stayingDetails.budgetRange))]), _vm._v("\n            " + _vm._s(_vm.$t('common.egp')) + "\n            "), _c('p', [_vm._v("\n              " + _vm._s(_vm.formating_price_type_ly(_vm.postingRequest.stayingDetails.selectedDurationType)) + "\n            ")])])], 1)]) : _vm._e()]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section mx-auto col-md-9 col-12 py-0\" data-v-7acf1451>", "</div>", [_vm._ssrNode("<div class=\"container mb-3\" data-v-7acf1451><p class=\"heading font-size-semi-large font-weight-bold\" data-v-7acf1451>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('form.postingRequest.preview.your_terms')) + "\n        ") + "</p> " + _vm._ssrList(_vm.checkboxesTerms, function (term, index) {
    return "<span class=\"chip\" data-v-7acf1451>" + _vm._ssrEscape("\n          " + _vm._s(term.name) + "\n        ") + "</span>";
  }) + "</div> "), _vm._ssrNode("<div class=\"container mt-3\" data-v-7acf1451>", "</div>", _vm._l(_vm.otherTerms, function (term) {
    return _c('b-col', {
      key: term.id,
      staticClass: "m-0 p-0",
      attrs: {
        "cols": "12"
      }
    }, [_c('div', {
      class: ['details-container', 'col-12', 'staying_details', isNaN(term.value) ? 'no-border' : '']
    }, [_c('b-row', [_c('h4', {
      staticClass: "gray m-0"
    }, [_vm._v("\n                " + _vm._s(term.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(term.value))])])], 1)]);
  }), 1)], 2), _vm._ssrNode(" " + (_vm.postingRequest.selectPreferences ? "<div class=\"section mx-auto col-md-9 col-12\" data-v-7acf1451><div class=\"container\" data-v-7acf1451><p class=\"heading font-size-semi-large font-weight-bold\" data-v-7acf1451>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('form.postingRequest.preview.furnishing_status')) + "\n        ") + "</p> " + _vm._ssrList(_vm.selectedFurnishTypes, function (furnishType, index) {
    return "<span class=\"chip\" data-v-7acf1451>" + _vm._ssrEscape("\n          " + _vm._s(furnishType.text) + "\n        ") + "</span>";
  }) + "</div></div>" : "<!---->") + " " + (_vm.postingRequest.selectPreferences ? "<div class=\"section mx-auto col-md-9 col-12\" data-v-7acf1451><div class=\"container\" data-v-7acf1451><div class=\"number-counter\" data-v-7acf1451><p data-v-7acf1451>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('form.postingRequest.preview.minimum_rooms')) + "\n          ") + "</p> <div class=\"number\" data-v-7acf1451><span data-v-7acf1451>" + _vm._ssrEscape("\n              " + _vm._s(_vm.postingRequest.selectPreferences.miniumRooms || 1) + "\n            ") + "</span></div></div></div></div>" : "<!---->") + " <div class=\"section mx-auto col-md-9 col-12\" data-v-7acf1451><div class=\"container\" data-v-7acf1451><p class=\"heading font-size-semi-large font-weight-bold\" data-v-7acf1451>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('property.property_types')) + "\n        ") + "</p> " + _vm._ssrList(_vm.propertyType, function (type, index) {
    return "<span class=\"chip\" data-v-7acf1451>" + _vm._ssrEscape("\n          " + _vm._s(type.prop_type_name) + "\n        ") + "</span>";
  }) + "</div></div> "), _vm._ssrNode("<div class=\"actions justify-content-center mx-auto col-md-9 col-12 mt-3\" data-v-7acf1451>", "</div>", [_c('b-button', {
    on: {
      "click": () => this.$router.push(this.localePath('/requests/post/terms'))
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('common.back')) + "\n        ")]), _vm._ssrNode(" "), _c('b-button', {
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('submitRequest', _vm.moveOutDate);
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('form.postingRequest.preview.submit')) + "\n        ")])], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/postingRequestForm/PostingPreview.vue?vue&type=template&id=7acf1451&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(22);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/PostingPreview.vue?vue&type=script&lang=js&

/* harmony default export */ var PostingPreviewvue_type_script_lang_js_ = ({
  name: 'PostingPreview',
  props: {
    conditionsData: {
      type: Array,
      default: []
    },
    propertiesData: Object
  },
  data() {
    return {
      moveOutDate: null,
      postingRequest: {},
      checkboxesTerms: [],
      otherTerms: [],
      propertyCategory: {}
    };
  },
  methods: {
    formating_price_type(item) {
      switch (item) {
        case 'dy':
          return this.$t('form.postingRequest.stayingDetails.days');
        case 'my':
          return this.$t('form.postingRequest.stayingDetails.months');
        case 'yy':
          return this.$t('form.postingRequest.stayingDetails.years');
        case 'hr':
          return this.$t('form.postingRequest.stayingDetails.hours');
        case 'wy':
          return this.$t('form.postingRequest.stayingDetails.weeks');
        default:
          return false;
      }
    },
    formating_price_type_ly(item) {
      switch (item) {
        case 'dy':
          return this.$t('common.daily');
        case 'my':
          return this.$t('common.monthly');
        case 'yy':
          return this.$t('common.yearly');
        case 'hr':
          return this.$t('common.hourly');
        case 'wy':
          return this.$t('common.weekly');
        default:
          return false;
      }
    }
  },
  computed: {
    selectedFurnishTypes() {
      if (this.propertiesData.furnishType) return this.propertiesData.furnishType.filter(type => {
        var _this$postingRequest$, _this$postingRequest$2;
        return (_this$postingRequest$ = this.postingRequest.selectPreferences) === null || _this$postingRequest$ === void 0 ? void 0 : (_this$postingRequest$2 = _this$postingRequest$.furnishType) === null || _this$postingRequest$2 === void 0 ? void 0 : _this$postingRequest$2.some(term => term === type.id);
      });
      return [];
    },
    propertyType() {
      var _this$propertiesData, _this$propertiesData$;
      return (_this$propertiesData = this.propertiesData) === null || _this$propertiesData === void 0 ? void 0 : (_this$propertiesData$ = _this$propertiesData.propertyType) === null || _this$propertiesData$ === void 0 ? void 0 : _this$propertiesData$.filter(type => {
        var _this$postingRequest, _this$postingRequest$3, _this$postingRequest$4;
        return (_this$postingRequest = this.postingRequest) === null || _this$postingRequest === void 0 ? void 0 : (_this$postingRequest$3 = _this$postingRequest.selectPreferences) === null || _this$postingRequest$3 === void 0 ? void 0 : (_this$postingRequest$4 = _this$postingRequest$3.propertyType) === null || _this$postingRequest$4 === void 0 ? void 0 : _this$postingRequest$4.some(p => p === type.prop_type_id);
      });
      return [];
    }
  },
  async mounted() {
    let conditionsPreview = localStorage.getItem('conditionsPreview') ? JSON.parse(localStorage.getItem('conditionsPreview')) : this.$router.push(this.localePath('/requests/post/property-category'));
    let checkboxesConditions = conditionsPreview.filter(condition => condition.name === "");
    this.otherTerms = conditionsPreview.filter(condition => condition.name !== "");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.postingRequest = localStorage.getItem('request') && JSON.parse(localStorage.getItem('request'));
    this.propertyCategory = this.postingRequest.propertyCategory;
    const conditionRes = await external_axios_default.a.get(`https://apibeta.rentup.co/api/tags/${this.propertyCategory.id}/conditionByTag`);
    for (let conditionId of checkboxesConditions) {
      for (let condition of conditionRes.data.Data) {
        if (conditionId.id === condition.id) {
          this.checkboxesTerms.push(condition);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/postingRequestForm/PostingPreview.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_PostingPreviewvue_type_script_lang_js_ = (PostingPreviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/postingRequestForm/PostingPreview.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(523)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_PostingPreviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7acf1451",
  "9b957016"
  
)

/* harmony default export */ var PostingPreview = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(887);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("49203211", content, true, context)
};

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_style_index_0_id_b4e04312_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(646);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_style_index_0_id_b4e04312_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_style_index_0_id_b4e04312_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_style_index_0_id_b4e04312_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_style_index_0_id_b4e04312_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.back_close{background-color:#f2f2f2 !important}.step{margin-top:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/requests/post/preview.vue?vue&type=template&id=b4e04312&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"px-3 back_close d-flex justify-content-between align-items-center py-3 d-md-none\">", "</div>", [_c('b-icon', {
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
  })], 2), _vm._ssrNode(" "), _c('b-progress', {
    staticClass: "w-100 mt-lg-2",
    attrs: {
      "value": 5,
      "max": 5,
      "height": _vm.progressHeight
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"p-3 step\">", "</div>", [_c('PostingPreview', {
    attrs: {
      "conditionsData": _vm.userConditions,
      "propertiesData": _vm.propertiesData
    },
    on: {
      "submitRequest": _vm.handleSubmitClick
    }
  })], 1), _vm._ssrNode(" "), _c('WarningModal', {
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

// CONCATENATED MODULE: ./pages/requests/post/preview.vue?vue&type=template&id=b4e04312&

// EXTERNAL MODULE: ./components/postingRequestForm/PostingPreview.vue + 4 modules
var PostingPreview = __webpack_require__(546);

// EXTERNAL MODULE: ./components/postingRequestForm/ProgressCircle.vue + 4 modules
var ProgressCircle = __webpack_require__(345);

// EXTERNAL MODULE: ./components/postingRequestForm/WarningModal.vue + 4 modules
var WarningModal = __webpack_require__(377);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/requests/post/preview.vue?vue&type=script&lang=js&




const {
  mapState
} = Object(external_vuex_["createNamespacedHelpers"])('UserModule');
const {
  mapState: mapPropertyState
} = Object(external_vuex_["createNamespacedHelpers"])('PropertyModule');
const {
  mapActions: mapAuthActions
} = Object(external_vuex_["createNamespacedHelpers"])('AuthModule');
const {
  mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('PropertyModule');
/* harmony default export */ var previewvue_type_script_lang_js_ = ({
  transition: {
    name: 'slide-fade',
    mode: 'out-in'
  },
  components: {
    PostingPreview: PostingPreview["a" /* default */],
    ProgressCircle: ProgressCircle["a" /* default */],
    WarningModal: WarningModal["a" /* default */]
  },
  data() {
    return {
      propertiesData: {},
      userConditions: [],
      request: {},
      showWarningModal: false,
      routeTo: '',
      navigate: false
    };
  },
  head() {
    return {
      title: `${this.dir === 'ltr' ? 'Posting Request | Step 4' : 'نشر طلب | الخطوة 4'} ${this.appEnv !== 'production' ? '| Staging' : ''}`,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.dir === 'ltr' ? 'Posting Request | Preview Request' : 'نشر طلب | نظرة عامة على الطلب '
      }]
    };
  },
  computed: {
    ...mapState(['user']),
    ...mapPropertyState(['postRequestFormSubmitted']),
    appEnv() {
      return this.$config.APP_ENV;
    },
    covertFurnishIdsToText() {
      if (this.propertiesData.furnishType) return this.propertiesData.furnishType.filter(type => {
        var _this$request$selectP, _this$request$selectP2;
        return (_this$request$selectP = this.request.selectPreferences) === null || _this$request$selectP === void 0 ? void 0 : (_this$request$selectP2 = _this$request$selectP.furnishType) === null || _this$request$selectP2 === void 0 ? void 0 : _this$request$selectP2.some(term => term === type.id);
      }).map(t => t.text);
      return [];
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    progressHeight() {
      if (false) {}
    }
  },
  methods: {
    ...mapAuthActions(['showAuthModal']),
    ...mapActions(['postRequest']),
    async handleSubmitClick(moveOutDate) {
      const {
        propertyCategory,
        selectedDestination,
        stayingDetails,
        selectPreferences
      } = this.request;
      const userConditions = localStorage.getItem('conditions') && JSON.parse(localStorage.getItem('conditions'));
      let stayingDuration = this.$dateFns.differenceInDays(new Date(moveOutDate), new Date(stayingDetails.startingDate));
      const {
        city,
        district,
        neighborhood
      } = selectedDestination;
      let locationId = neighborhood ? neighborhood : district ? district : city;
      const payload = {
        type: 1,
        // public request
        term: [stayingDetails.selectedDurationType.toUpperCase()],
        move_in_date: stayingDetails.startingDate,
        move_out_date: stayingDetails.move_out_date,
        budget: stayingDetails.budgetRange,
        num_of_bed_rooms: selectPreferences.miniumRooms,
        location_id: locationId,
        property_type_ids: selectPreferences.propertyType,
        conditions: userConditions,
        furnishing_status: this.covertFurnishIdsToText,
        // tag_id: propertyCategory.id,
        tag_id: 10
      };
      console.log("#####################");
      console.log(payload);
      if (!this.user) {
        this.showAuthModal({
          callbackAction: {}
        });
      } else {
        this.$axios.$post('/requests', payload).then(response => {
          if (response.Status === 200) {
            localStorage.removeItem('request');
            localStorage.removeItem('conditions');
            localStorage.removeItem('conditionsPreview');
            this.$router.push(this.localePath('/dashboard/requests'));
            let body = this.$t('form.successRequest');
            this.$bvToast.toast(body, {
              title: this.$t('form.fillInput'),
              variant: 'primary',
              toaster: 'b-toaster-top-center',
              solid: true,
              autoHideDelay: 1000
            });
            // location.reload();
          }
        }).catch(err => {
          console.log(err);
        });
      }
    },
    transformUserTerms() {
      this.userConditions = this.userConditions.filter(condition => {
        if (this.request.selectPreferences.userTerms.indexOf(condition.id) >= 0) {
          return {
            condition_id: condition.id
          };
        }
      });
      return this.userConditions.map(condition => {
        return {
          condition_id: condition.id
        };
      });
    },
    closeModalAndNavigate() {
      this.showWarningModal = false;
      this.navigate = true;
    }
  },
  async created() {
    const {
      Data
    } = await this.$axios.$get('/getPropMasterData');
    this.propertiesData = Data;
  },
  async mounted() {
    const currentRequest = localStorage.getItem('request') && JSON.parse(localStorage.getItem('request'));
    if (!!currentRequest) this.request = currentRequest;else this.$router.push('/requests/post/property-category');
    const term = localStorage.getItem('request') ? JSON.parse(localStorage.getItem('request')).stayingDetails.selectedDurationType === 'days' ? 0 : 1 : 0;
    const {
      Data
    } = await this.$axios.$get(`/conditions?term=${term}`);
    this.userConditions = Data.conditions;
  },
  beforeRouteLeave(to, from, next) {
    if (this.postRequestFormSubmitted) return next();
    if (!to.path.includes('/requests/post/') && localStorage.getItem('request')) {
      this.showWarningModal = true;
      this.routeTo = to.path;
      if (this.navigate) return next();
    } else next();
  }
});
// CONCATENATED MODULE: ./pages/requests/post/preview.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_previewvue_type_script_lang_js_ = (previewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/requests/post/preview.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(886)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_previewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "418c1df2"
  
)

/* harmony default export */ var preview = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=preview.js.map