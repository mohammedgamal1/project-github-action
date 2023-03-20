exports.ids = [35];
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

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/add/4.vue?vue&type=template&id=58c843f6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"form-container\">", "</div>", [_c('ProgressCircle', {
    attrs: {
      "current-step": 4,
      "total-steps": 7
    }
  }), _vm._ssrNode(" <h2 class=\"form-heading\">" + _vm._ssrEscape(_vm._s(_vm.$t('form.postDetails'))) + "</h2> "), _vm._ssrNode("<div class=\"form-input\">", "</div>", [_vm._ssrNode("<label>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('form.PropertyNameTitle')) + "\n      ") + "</label> "), _c('b-form-input', {
    attrs: {
      "placeholder": _vm.$t('form.PropertyNameTitle1'),
      "state": _vm.nameState
    },
    model: {
      value: _vm.property.form4.propertyName,
      callback: function ($$v) {
        _vm.$set(_vm.property.form4, "propertyName", $$v);
      },
      expression: "property.form4.propertyName"
    }
  }), _vm._ssrNode(" "), _c('b-form-invalid-feedback', [_vm._v("\n        Please provide a valid description\n      ")])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-input\">", "</div>", [_vm._ssrNode("<label>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('form.propertyDescription')) + "\n      ") + "</label> "), _c('b-form-textarea', {
    attrs: {
      "rows": "5",
      "placeholder": _vm.$t('form.writeSuitableDescription'),
      "state": _vm.descriptionState
    },
    model: {
      value: _vm.property.form4.propertyDescription,
      callback: function ($$v) {
        _vm.$set(_vm.property.form4, "propertyDescription", $$v);
      },
      expression: "property.form4.propertyDescription"
    }
  }), _vm._ssrNode(" "), _c('b-form-invalid-feedback', [_vm._v("\n        Please provide a valid description\n      ")])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-input\">", "</div>", [_vm._ssrNode("<div class=\"mb-3\">", "</div>", [_vm._ssrNode("<label>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('form.pricing')) + "\n        ") + "</label> <label class=\"d-block mt-3\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('form.pricePerNight')) + "\n        ") + "</label> "), _c('b-form-input', {
    attrs: {
      "type": "number",
      "placeholder": `${_vm.$t('form.moneyPlaceholder')} ${_vm.$t('form.shortTerm')}`,
      "state": _vm.dailyState
    },
    model: {
      value: _vm.property.form4.daily_price,
      callback: function ($$v) {
        _vm.$set(_vm.property.form4, "daily_price", $$v);
      },
      expression: "property.form4.daily_price"
    }
  }), _vm._ssrNode(" "), _c('b-form-invalid-feedback', [_vm._v("\n          Daily price must be a valid amount\n        ")])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<label class=\"d-block mt-1\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('form.pricePerMonth')) + "\n        ") + "</label> "), _c('b-form-input', {
    attrs: {
      "type": "number",
      "placeholder": `${_vm.$t('form.moneyPlaceholder')} ${_vm.$t('form.longTerm')}`,
      "state": _vm.monthlyState
    },
    model: {
      value: _vm.property.form4.monthly_price,
      callback: function ($$v) {
        _vm.$set(_vm.property.form4, "monthly_price", $$v);
      },
      expression: "property.form4.monthly_price"
    }
  }), _vm._ssrNode(" "), _c('b-form-invalid-feedback', [_vm._v("\n          Monthly price must be a valid amount\n        ")])], 2)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"page-actions\">", "</div>", [_c('b-button', {
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v(_vm._s(_vm.$t('common.back')))]), _vm._ssrNode(" "), _c('b-button', {
    attrs: {
      "variant": "primary",
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.goNext
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('common.next')) + "\n    ")])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/properties/add/4.vue?vue&type=template&id=58c843f6&

// EXTERNAL MODULE: ./components/postingRequestForm/ProgressCircle.vue + 4 modules
var ProgressCircle = __webpack_require__(345);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/add/4.vue?vue&type=script&lang=js&

/* harmony default export */ var _4vue_type_script_lang_js_ = ({
  name: 'AddPropertyPage4',
  props: {
    propertyData: {
      type: Object,
      required: true
    }
  },
  components: {
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
        form2: null,
        form3: null,
        form4: {
          propertyName: '',
          propertyDescription: '',
          daily_price: '',
          monthly_price: ''
        },
        form5: null,
        form6: null
      }
    };
  },
  head() {
    return {
      title: `${this.dir === "ltr" ? "Add Property | Step 4" : "إضافة عقار | الخطوة 4"} ${this.appEnv !== 'production' ? '| Staging' : ''}`,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.dir === "ltr" ? 'Add Property | Property Information' : 'إضافة عقار | معلومات عن العقار'
      }]
    };
  },
  computed: {
    nameState() {
      const {
        propertyName
      } = this.property.form4;
      if (!propertyName) return null;
      return propertyName.trim().length > 0;
    },
    descriptionState() {
      const {
        propertyDescription
      } = this.property.form4;
      if (!propertyDescription) return null;
      return propertyDescription.trim().length > 0;
    },
    dailyState() {
      const {
        daily_price
      } = this.property.form4;
      if (!daily_price) return null;
      return daily_price >= 0;
    },
    monthlyState() {
      const {
        monthly_price
      } = this.property.form4;
      if (!monthly_price) return null;
      return monthly_price >= 0;
    },
    disabled() {
      const {
        daily_price,
        monthly_price
      } = this.property.form4;
      if (!this.nameState || !this.descriptionState) return true;
      if (!this.dailyState && !this.monthlyState) return true;
      if (daily_price < 0 || monthly_price < 0) return true;
      return false;
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    appEnv() {
      return this.$config.APP_ENV;
    }
  },
  methods: {
    goNext() {
      localStorage.setItem('property', JSON.stringify({
        ...this.currentProperty,
        form4: this.property.form4
      }));
      this.$router.push(this.localePath('/properties/add/5'));
    },
    goBack() {
      this.$router.push(this.localePath('/properties/add/3'));
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
    if (this.currentProperty.form4) this.property = this.currentProperty;
  }
});
// CONCATENATED MODULE: ./pages/properties/add/4.vue?vue&type=script&lang=js&
 /* harmony default export */ var add_4vue_type_script_lang_js_ = (_4vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/properties/add/4.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  add_4vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "415e78f2"
  
)

/* harmony default export */ var _4 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map