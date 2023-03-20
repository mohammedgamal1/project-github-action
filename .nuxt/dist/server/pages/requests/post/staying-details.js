exports.ids = [47];
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

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    calculateMoveOutData({
      durationType,
      duration,
      startingDate
    }) {
      if (durationType === 'days' || durationType === 'أيام') {
        this.moveOutDate = this.$dateFns.addDays(new Date(startingDate), duration);
      }
      if (durationType === 'months' || durationType === 'شهور') {
        this.moveOutDate = this.$dateFns.addMonths(new Date(startingDate), duration);
      }
      if (durationType === 'years' || durationType === 'سنين') {
        this.moveOutDate = this.$dateFns.addYears(new Date(startingDate), duration);
      }
    }
  }
});

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(520);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("e7f90996", content, true, context)
};

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_StayingDetails_vue_vue_type_style_index_0_id_50d423ee_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(436);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_StayingDetails_vue_vue_type_style_index_0_id_50d423ee_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_StayingDetails_vue_vue_type_style_index_0_id_50d423ee_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_StayingDetails_vue_vue_type_style_index_0_id_50d423ee_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_StayingDetails_vue_vue_type_style_index_0_id_50d423ee_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-50d423ee]{color:#204ecf}.dark-blue[data-v-50d423ee]{color:#0f256e !important}.gray[data-v-50d423ee]{color:#262d3d}.light-gray[data-v-50d423ee]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-50d423ee]{color:rgba(38,45,61,.32)}.black-light[data-v-50d423ee]{color:#111}.btn.btn-outline-secondary[data-v-50d423ee]{color:#333}label[data-v-50d423ee]{text-transform:capitalize}.object-fit-cover[data-v-50d423ee]{object-fit:cover}.object-fit-contain[data-v-50d423ee]{object-fit:contain}.font-14[data-v-50d423ee]{font-size:14px}.font-18[data-v-50d423ee]{font-size:18px}.spacer-5[data-v-50d423ee]{height:5px;width:100%;display:block}.spacer-10[data-v-50d423ee]{height:10px;width:100%;display:block}.spacer-15[data-v-50d423ee]{height:15px;width:100%;display:block}.spacer-20[data-v-50d423ee]{height:20px;width:100%;display:block}.spacer-25[data-v-50d423ee]{height:25px;width:100%;display:block}.spacer-30[data-v-50d423ee]{height:30px;width:100%;display:block}.spacer-40[data-v-50d423ee]{height:40px;width:100%;display:block}.spacer-50[data-v-50d423ee]{height:50px;width:100%;display:block}.spacer-65[data-v-50d423ee]{height:65px;width:100%;display:block}.spacer-100[data-v-50d423ee]{height:100px;width:100%;display:block}.sb-wrapper[data-v-50d423ee]{position:relative}.sb-wrapper .sb-button[data-v-50d423ee]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-50d423ee]{cursor:pointer}.sb-wrapper .sb-button[data-v-50d423ee]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-50d423ee]:focus{outline:1px solid}.m-end-2[data-v-50d423ee]{margin-inline-end:10px}.myParagraph[data-v-50d423ee]{font-size:11px}.makeGap[data-v-50d423ee]{gap:20px}.second-step[data-v-50d423ee]{min-height:100vh}.second-step .step-content .b-form-datepicker .form-control[for=datepicker][data-v-50d423ee]{padding-right:0 !important}.duration-type[data-v-50d423ee]{background-color:transparent;border:1px solid #111;border-radius:8px;font-weight:600;padding:7px 12px;display:flex;gap:4px}.duration-type span[data-v-50d423ee]{font-weight:600;font-size:12px;line-height:12px;color:#111;margin:auto}.duration-type .circle-container[data-v-50d423ee]{width:24px;height:24px;border-radius:50%;border:1px solid #000;display:flex;flex-direction:column;justify-content:center;text-align:center}.duration-type.primary .inner-circle[data-v-50d423ee]{width:14px;height:14px;border-radius:50%;background-color:#004ed4;margin:auto}.duration-indicator[data-v-50d423ee]{font-weight:600;font-size:16px;line-height:16px;color:#111}.inner[data-v-50d423ee]{display:flex;justify-content:space-between;overflow:scroll;padding-bottom:20px;gap:24px}.inner span[data-v-50d423ee]{width:38px;height:38px;padding:10px 12px;font-weight:700;font-size:12px;text-align:center;border-radius:50%;border:1px solid #e3e5e5;color:#48535b;cursor:pointer}.inner span.active[data-v-50d423ee]{color:#0877f1;border-color:#0877f1}.px-minus-15[data-v-50d423ee]{margin-left:-15px !important;margin-right:-15px !important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/StayingDetails.vue?vue&type=template&id=50d423ee&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {
    staticClass: "second-step"
  }, [_vm._ssrNode("<div class=\"container--fluid\" data-v-50d423ee>", "</div>", [_c('b-row', {
    staticClass: "flex-column"
  }, [_c('b-col', {
    staticClass: "step-heading",
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', {
    staticClass: "second-step__title font-weight-semi font-size-large text-center mb-4"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('form.postingRequest.stayingDetails.heading')) + "\n        ")])]), _vm._v(" "), _vm.selectedTag ? _c('b-col', {
    staticClass: "pt-2 mx-auto d-flex justify-content-center makeGap my-4",
    attrs: {
      "cols": "12",
      "lg": "6"
    }
  }, _vm._l(_vm.selectedTag.price_type, function (duration, index) {
    return _c('button', {
      key: index,
      class: ['duration-type', 'lighter-gray', 'font-size-normal', 'mb-2', 'mt-2', _vm.dir === 'rtl' ? 'mr-1' : 'ml-1', _vm.stayingDetails.selectedDurationType === duration ? 'primary' : ''],
      attrs: {
        "type": "button"
      },
      on: {
        "click": function ($event) {
          return _vm.setDurationType(duration);
        }
      }
    }, [_c('div', {
      staticClass: "circle-container"
    }, [_c('div', {
      staticClass: "inner-circle"
    })]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.formating_price_type(duration)))])]);
  }), 0) : _vm._e(), _vm._v(" "), _c('b-col', {
    staticClass: "my-3 step-content pt-2 mx-auto",
    attrs: {
      "cols": "12",
      "lg": "6"
    }
  }, [_c('div', {
    staticClass: "section-white px-minus-15"
  }, [_c('b-row', {
    staticClass: "px-2 my-2 align-items-center justify-content-between",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-col', {
    attrs: {
      "cols": "6"
    }
  }, [_c('h1', {
    staticClass: "font-size-normal font-weight-bold text-dark"
  }, [_vm._v("\n                " + _vm._s(_vm.dir === 'ltr' ? `Number of ${_vm.formating_price_type(_vm.stayingDetails.selectedDurationType)}` : `عدد ال${_vm.formating_price_type(_vm.stayingDetails.selectedDurationType)}`) + "\n                "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c('b-col', {
    staticClass: "d-flex justify-content-end",
    attrs: {
      "cols": "6"
    }
  }, [_c('CustomCounter', {
    attrs: {
      "id": "duration",
      "step": 1,
      "validation-rules": "required|min_value:1",
      "min": 1,
      "max": _vm.selectedDurationNumber
    },
    model: {
      value: _vm.stayingDetails.selectedDuration,
      callback: function ($$v) {
        _vm.$set(_vm.stayingDetails, "selectedDuration", $$v);
      },
      expression: "stayingDetails.selectedDuration"
    }
  })], 1)], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('b-row', {
    staticClass: "px-2 my-2 align-items-center justify-content-between",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-col', {
    attrs: {
      "cols": "5"
    }
  }, [_c('h1', {
    staticClass: "font-size-normal font-weight-bold text-dark"
  }, [_vm._v("\n                " + _vm._s(_vm.date_StartingDate) + "\n                "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c('b-col', {
    staticClass: "d-flex justify-content-end",
    attrs: {
      "cols": "7"
    }
  }, [_c('b-form-datepicker', {
    staticClass: "pr-4",
    attrs: {
      "date-format-options": _vm.dateFormatOptions,
      "id": "datepicker",
      "placeholder": _vm.$t('common.date'),
      "today-button": "",
      "reset-button": "",
      "close-button": "",
      "locale": "en",
      "min": new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
      "aria-describedby": "inputcheck-in-feedback",
      "state": _vm.startingDateState
    },
    on: {
      "input": _vm.changeDate
    },
    model: {
      value: _vm.stayingDetails.startingDate,
      callback: function ($$v) {
        _vm.$set(_vm.stayingDetails, "startingDate", $$v);
      },
      expression: "stayingDetails.startingDate"
    }
  }), _vm._v(" "), _c('b-form-invalid-feedback', {
    attrs: {
      "id": "input-live-feedback"
    }
  }, [_vm._v("\n                Enter a valid starting date\n              ")])], 1)], 1)], 1)]), _vm._v(" "), _c('b-col', {
    staticClass: "my-3 step-content pt-2 mx-auto",
    attrs: {
      "cols": "12",
      "lg": "6"
    }
  }, [_c('b-row', [_c('b-col', {
    staticClass: "mt-4 section-white",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', {
    staticClass: "align-items-center mb-4"
  }, [_c('b-col', {
    attrs: {
      "md": "12",
      "lg": "6"
    }
  }, [_c('h5', {
    class: ['font-size-normal font-weight-bold text-dark', 'mb-2', _vm.dir === 'rtl' ? 'mr-1' : 'ml-1']
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('form.postingRequest.stayingDetails.budget_range')) + "\n                  "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")]), _vm._v(" "), _vm.stayingDetails.selectedDuration ? _c('span', {
    staticClass: "font-size-smaller light-gray"
  }, [_vm._v("\n                    (" + _vm._s(_vm.formating_price_type_ly()) + ")\n                  ")]) : _vm._e()])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "12",
      "lg": "6"
    }
  }, [_c('b-form-input', {
    attrs: {
      "placeholder": _vm.$t('form.postingRequest.stayingDetails.budget_placeHolder'),
      "type": "number",
      "state": _vm.budgetState
    },
    model: {
      value: _vm.stayingDetails.budgetRange,
      callback: function ($$v) {
        _vm.$set(_vm.stayingDetails, "budgetRange", $$v);
      },
      expression: "stayingDetails.budgetRange"
    }
  }), _vm._v(" "), _c('b-form-invalid-feedback', {
    attrs: {
      "id": "input-live-feedback"
    }
  }, [_vm._v("\n                  Budget range must be over 99 EGP\n                ")])], 1)], 1)], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4 section-white",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', {
    staticClass: "align-items-center mt-4"
  }, [_c('b-col', {
    attrs: {
      "md": "12",
      "lg": "6"
    }
  }, [_c('h5', {
    class: ['font-size-normal font-weight-bold text-dark', 'mb-2', _vm.dir === 'rtl' ? 'mr-1' : 'ml-1']
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('form.postingRequest.stayingDetails.average_Price')) + "\n                ")])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "12",
      "lg": "6"
    }
  }, [_vm.dir === 'ltr' ? _c('p', {
    staticClass: "myParagraph"
  }, [_vm._v("The average rate for this area is between "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("220 LE")]), _vm._v(" to "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("250 LE")]), _vm._v(" per month or "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("30 LE")]), _vm._v(" to "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("35 LE")]), _vm._v(" per day.")]) : _c('p', {
    staticClass: "myParagraph"
  }, [_vm._v("متوسط السعر فى هذه المنطقة ما بين "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("220 جنية")]), _vm._v(" إلى "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("250 جنية")]), _vm._v(" فى الشهر أو "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("30 جنية")]), _vm._v(" إلى "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("35 جنية")])])])], 1)], 1)], 1), _vm._v(" "), false ? undefined : _vm._e()], 1), _vm._v(" "), _c('b-col', {
    staticClass: "px-0",
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
        _vm.$router.push(this.localePath('/requests/post/destination'));
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('common.back')))])])], 1)]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "7"
    }
  }, [_c('div', [_c('b-button', {
    staticClass: "next-btn",
    attrs: {
      "variant": "primary",
      "disabled": !_vm.budgetState || !_vm.startingDateState
    },
    on: {
      "click": _vm.handleNextClick
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('common.next')))])])], 1)])], 1)], 1)], 1)], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/postingRequestForm/StayingDetails.vue?vue&type=template&id=50d423ee&scoped=true&

// CONCATENATED MODULE: ./mixins/changeCurrent.js
/* harmony default export */ var changeCurrent = ({
  methods: {
    changeStep(action, step) {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    }
  }
});
// EXTERNAL MODULE: ./mixins/calculateMoveOutData.js
var calculateMoveOutData = __webpack_require__(435);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/StayingDetails.vue?vue&type=script&lang=js&


/* harmony default export */ var StayingDetailsvue_type_script_lang_js_ = ({
  name: 'StayingDetails',
  mixins: [changeCurrent, calculateMoveOutData["a" /* default */]],
  components: {
    ChipSelector: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 346)),
    CustomCounter: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 446)),
    BarsChart: () => __webpack_require__.e(/* import() */ 53).then(__webpack_require__.bind(null, 979))
  },
  data() {
    return {
      days: 31,
      months: 12,
      years: 10,
      moveOutDate: null,
      selectedTag: null,
      dateFormatOptions: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      stayingDetails: {
        selectedDurationType: '',
        selectedDuration: 1,
        startingDate: new Date().toISOString().split('T')[0],
        budgetRange: '',
        move_out_date: ''
      }
    };
  },
  computed: {
    selectedDurationNumber() {
      return this.stayingDetails ? this[this.stayingDetails.selectedDurationType] : 0;
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    duration() {
      return this.$dateFns.differenceInDays(new Date(this.moveOutDate), new Date(this.stayingDetails.startingDate));
    },
    budgetTerm() {
      return this.formating_price_type_ly();
    },
    budgetState() {
      if (this.stayingDetails.budgetRange === '') return null;
      return this.stayingDetails.budgetRange >= 100;
    },
    startingDateState() {
      if (this.stayingDetails.startingDate === '') return null;
      return !!this.stayingDetails.startingDate;
    },
    selectedIntialDurationType() {
      this.selectedDurationType = this.selectedDurationType;
      this.selectedDurationType = this.dir === 'ltr' ? this.selectedDurationType : 'أيام';
      return this.selectedDurationType;
    },
    date_StartingDate() {
      let ifHourly = false;
      if (!ifHourly) {
        return this.$t('form.postingRequest.stayingDetails.starting_date');
      } else {
        return this.dir === 'ltr' ? 'Date' : 'التاريخ';
      }
    }
  },
  watch: {
    stayingDetails: {
      handler(newValue, oldValue) {
        const {
          selectedDurationType,
          selectedDuration,
          startingDate
        } = this.stayingDetails;
        this.calculateMoveOutData({
          durationType: selectedDurationType,
          duration: selectedDuration,
          startingDate
        });
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    calculateMoveOutData() {
      switch (this.stayingDetails.selectedDurationType) {
        case 'dy':
          this.stayingDetails.move_out_date = this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate), {
            days: this.stayingDetails.selectedDuration
          })), 'yyyy-MM-dd');
          break;
        case 'my':
          this.stayingDetails.move_out_date = this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate), {
            months: this.stayingDetails.selectedDuration
          })), 'yyyy-MM-dd');
          break;
        case 'yy':
          this.stayingDetails.move_out_date = this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate), {
            years: this.stayingDetails.selectedDuration
          })), 'yyyy-MM-dd');
          break;
        case 'hr':
          this.stayingDetails.move_out_date = this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate), {
            hours: this.stayingDetails.selectedDuration
          })), 'yyyy-MM-dd');
          break;
        case 'wy':
          this.stayingDetails.move_out_date = this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate), {
            weeks: this.stayingDetails.selectedDuration
          })), 'yyyy-MM-dd');
          break;
        default:
          this.stayingDetails.move_out_date = this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate), {
            days: 1
          })), 'yyyy-MM-dd');
      }
    },
    changeDate(value) {
      this.stayingDetails.startingDate = value;
      this.calculateMoveOutData();
    },
    setDurationType(duration) {
      this.stayingDetails.selectedDurationType = duration;
      this.calculateMoveOutData();
    },
    handleDurationNumberClick(value) {
      this.stayingDetails.selectedDuration = value;
    },
    handleNextClick() {
      let {
        budgetRange,
        startingDate,
        selectedDuration,
        selectedDurationType
      } = this.stayingDetails;
      if (!budgetRange || !startingDate || !selectedDuration || !selectedDurationType) {
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
      this.$emit('nextStep', {
        stayingDetails: {
          ...this.stayingDetails,
          ...{
            move_out_date: this.moveOutDate
          }
        },
        term: this.duration > 30 ? 1 : 0
      });
      const request = localStorage.getItem('request') ? JSON.parse(localStorage.getItem('request')) : null;
      localStorage.setItem('request', JSON.stringify({
        ...request,
        stayingDetails: this.stayingDetails
      }));
    },
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
    formating_price_type_ly() {
      switch (this.stayingDetails.selectedDurationType) {
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
  mounted() {
    const request = localStorage.getItem('request') ? JSON.parse(localStorage.getItem('request')) : this.$router.push(this.localePath('/requests/post/property-category'));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    if (!localStorage.getItem('request')) {
      // Watch The LocalStorage Request
      this.$router.push('/requests/post/property-category');
    }

    // const currentStayingDetails = localStorage.getItem('request') ? JSON.parse(localStorage.getItem('request')).stayingDetails : this.$router.push('/requests/post/destination');

    // if (!!currentStayingDetails.selectedDurationType)
    //   this.stayingDetails = currentStayingDetails;
  },

  created() {
    if (false) {}
  }
});
// CONCATENATED MODULE: ./components/postingRequestForm/StayingDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_StayingDetailsvue_type_script_lang_js_ = (StayingDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/postingRequestForm/StayingDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(519)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_StayingDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "50d423ee",
  "4c13ff68"
  
)

/* harmony default export */ var StayingDetails = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(893);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("64a21342", content, true, context)
};

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_staying_details_vue_vue_type_style_index_0_id_394ece2d_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(649);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_staying_details_vue_vue_type_style_index_0_id_394ece2d_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_staying_details_vue_vue_type_style_index_0_id_394ece2d_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_staying_details_vue_vue_type_style_index_0_id_394ece2d_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_staying_details_vue_vue_type_style_index_0_id_394ece2d_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.back_close{background-color:#f2f2f2 !important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/requests/post/staying-details.vue?vue&type=template&id=394ece2d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "add-property pb-2"
  }, [_vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"px-3 back_close d-flex justify-content-between align-items-center py-3 d-md-none\">", "</div>", [_c('b-icon', {
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
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"post-form-container\">", "</div>", [_c('b-progress', {
    staticClass: "w-100 mt-lg-2",
    attrs: {
      "value": 3,
      "max": 5,
      "height": _vm.progressHeight
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"p-3 step\">", "</div>", [_c('StayingDetails', {
    on: {
      "nextStep": _vm.goNext
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _c('WarningModal', {
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

// CONCATENATED MODULE: ./pages/requests/post/staying-details.vue?vue&type=template&id=394ece2d&

// EXTERNAL MODULE: ./components/postingRequestForm/StayingDetails.vue + 5 modules
var StayingDetails = __webpack_require__(534);

// EXTERNAL MODULE: ./components/postingRequestForm/ProgressCircle.vue + 4 modules
var ProgressCircle = __webpack_require__(345);

// EXTERNAL MODULE: ./components/postingRequestForm/WarningModal.vue + 4 modules
var WarningModal = __webpack_require__(377);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/requests/post/staying-details.vue?vue&type=script&lang=js&



/* harmony default export */ var staying_detailsvue_type_script_lang_js_ = ({
  transition: {
    name: 'slide-fade',
    mode: 'out-in'
  },
  components: {
    StayingDetails: StayingDetails["a" /* default */],
    ProgressCircle: ProgressCircle["a" /* default */],
    WarningModal: WarningModal["a" /* default */]
  },
  data() {
    return {
      currentRequest: null,
      showWarningModal: false,
      routeTo: '',
      navigate: false
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
  head() {
    return {
      title: `${this.dir === "ltr" ? "Posting Request | Step 2" : "نشر طلب | الخطوة 2"} ${this.appEnv !== 'production' ? '| Staging' : ''}`,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.dir === "ltr" ? 'Posting Request | Staying Details' : 'نشر طلب | تفاصيل الاقامة'
      }]
    };
  },
  methods: {
    goNext(values) {
      localStorage.setItem('request', JSON.stringify({
        ...JSON.parse(this.currentRequest),
        stayingDetails: values.stayingDetails
      }));
      this.$router.push(this.localePath('/requests/post/terms'));
    },
    closeModalAndNavigate() {
      this.showWarningModal = false;
      this.navigate = true;
    }
  },
  mounted() {
    this.currentRequest = localStorage.getItem('request');
  },
  beforeRouteLeave(to, from, next) {
    if (!to.path.includes('/requests/post/') && this.currentRequest) {
      this.showWarningModal = true;
      this.routeTo = to.path;
      if (this.navigate) return next();
    } else next();
  }
});
// CONCATENATED MODULE: ./pages/requests/post/staying-details.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_staying_detailsvue_type_script_lang_js_ = (staying_detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/requests/post/staying-details.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(892)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_staying_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "168e1ef0"
  
)

/* harmony default export */ var staying_details = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=staying-details.js.map