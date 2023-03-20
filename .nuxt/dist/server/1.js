exports.ids = [1];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=1.js.map