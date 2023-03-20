exports.ids = [11];
exports.modules = {

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(706);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("05eefcd9", content, true, context)
};

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_conditions_vue_vue_type_style_index_0_id_2c938bf8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(565);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_conditions_vue_vue_type_style_index_0_id_2c938bf8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_conditions_vue_vue_type_style_index_0_id_2c938bf8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_conditions_vue_vue_type_style_index_0_id_2c938bf8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_conditions_vue_vue_type_style_index_0_id_2c938bf8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-2c938bf8]{color:#204ecf}.dark-blue[data-v-2c938bf8]{color:#0f256e !important}.gray[data-v-2c938bf8]{color:#262d3d}.light-gray[data-v-2c938bf8]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-2c938bf8]{color:rgba(38,45,61,.32)}.black-light[data-v-2c938bf8]{color:#111}.btn.btn-outline-secondary[data-v-2c938bf8]{color:#333}label[data-v-2c938bf8]{text-transform:capitalize}.object-fit-cover[data-v-2c938bf8]{object-fit:cover}.object-fit-contain[data-v-2c938bf8]{object-fit:contain}.font-14[data-v-2c938bf8]{font-size:14px}.font-18[data-v-2c938bf8]{font-size:18px}.spacer-5[data-v-2c938bf8]{height:5px;width:100%;display:block}.spacer-10[data-v-2c938bf8]{height:10px;width:100%;display:block}.spacer-15[data-v-2c938bf8]{height:15px;width:100%;display:block}.spacer-20[data-v-2c938bf8]{height:20px;width:100%;display:block}.spacer-25[data-v-2c938bf8]{height:25px;width:100%;display:block}.spacer-30[data-v-2c938bf8]{height:30px;width:100%;display:block}.spacer-40[data-v-2c938bf8]{height:40px;width:100%;display:block}.spacer-50[data-v-2c938bf8]{height:50px;width:100%;display:block}.spacer-65[data-v-2c938bf8]{height:65px;width:100%;display:block}.spacer-100[data-v-2c938bf8]{height:100px;width:100%;display:block}.sb-wrapper[data-v-2c938bf8]{position:relative}.sb-wrapper .sb-button[data-v-2c938bf8]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-2c938bf8]{cursor:pointer}.sb-wrapper .sb-button[data-v-2c938bf8]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-2c938bf8]:focus{outline:1px solid}.m-end-2[data-v-2c938bf8]{margin-inline-end:10px}.conditions-list li[data-v-2c938bf8]:nth-child(2n){background-color:#d3d3d3}.conditions-list li .flex-1[data-v-2c938bf8]{margin:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/conditions.vue?vue&type=template&id=2c938bf8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-container', {
    staticClass: "pb-3"
  }, [_c('form', {
    attrs: {
      "id": "conditionsForm"
    },
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.saveConditions.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "categoryInput"
    }
  }, [_vm._v("Category")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedCategory,
      expression: "selectedCategory"
    }],
    attrs: {
      "id": "categoryInput"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedCategory = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.categories, function (category) {
    return _c('option', {
      domProps: {
        "value": category
      }
    }, [_vm._v(_vm._s(_vm.$i18n.locale === 'en' ? category.name_en : category.name_ar))]);
  }), 0)]), _vm._v(" "), _c('h3', [_vm._v("Short-term units conditions")]), _vm._v(" "), _c('ul', {
    staticClass: "conditions-list"
  }, _vm._l(_vm.allConditions, function (condition, key) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: condition.term === "short" && condition.category_name === _vm.selectedCategory.name_en,
        expression: "condition.term === \"short\" && condition.category_name === selectedCategory.name_en"
      }]
    }, [_c('div', {
      staticClass: "d-flex flex-row justify-content-between"
    }, [_c('div', {
      staticClass: "flex-1"
    }, [_c('p', {
      staticClass: "condition-title"
    }, [_vm._v(_vm._s(_vm.$i18n.locale === 'en' ? condition.name_en : condition.name_ar))])]), _vm._v(" "), _c('div', {
      staticClass: "flex-1 d-flex"
    }, [_c('b-form-checkbox', {
      attrs: {
        "name": "check-button",
        "switch": ""
      },
      model: {
        value: _vm.allConditions[key].condition_decline,
        callback: function ($$v) {
          _vm.$set(_vm.allConditions[key], "condition_decline", $$v);
        },
        expression: "allConditions[key].condition_decline"
      }
    })], 1)])]);
  }), 0), _vm._v(" "), _c('h3', [_vm._v("Long-term units conditions")]), _vm._v(" "), _c('ul', {
    staticClass: "conditions-list"
  }, _vm._l(_vm.allConditions, function (condition, key) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: condition.term === "long" && condition.category_name === _vm.selectedCategory.name_en,
        expression: "condition.term === \"long\" && condition.category_name === selectedCategory.name_en"
      }]
    }, [_c('div', {
      staticClass: "d-flex flex-row justify-content-between"
    }, [_c('div', {
      staticClass: "flex-1"
    }, [_c('p', {
      staticClass: "condition-title"
    }, [_vm._v(_vm._s(_vm.$i18n.locale === 'en' ? condition.name_en : condition.name_ar))])]), _vm._v(" "), _c('div', {
      staticClass: "flex-1 d-flex"
    }, [_c('b-form-checkbox', {
      attrs: {
        "name": "check-button",
        "switch": ""
      },
      model: {
        value: _vm.allConditions[key].condition_decline,
        callback: function ($$v) {
          _vm.$set(_vm.allConditions[key], "condition_decline", $$v);
        },
        expression: "allConditions[key].condition_decline"
      }
    })], 1)])]);
  }), 0), _vm._v(" "), _c('b-button', {
    attrs: {
      "type": "submit",
      "disabled": _vm.processing
    }
  }, [_vm._v("Save")])], 1)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/dashboard/conditions.vue?vue&type=template&id=2c938bf8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/conditions.vue?vue&type=script&lang=js&
/* harmony default export */ var conditionsvue_type_script_lang_js_ = ({
  name: 'Conditions',
  components: {},
  watchQuery: true,
  data() {
    return {
      selectedCategory: '',
      categories: [],
      allConditions: [],
      processing: true,
      myConditions: [],
      conditionsToBeSaved: []
    };
  },
  filters: {},
  mounted() {
    this.getCategories();
  },
  watch: {
    selectedCategory: {
      handler(value) {
        if (value) {}
      },
      immediate: true
    },
    allConditions: {
      handler(value) {
        if (value.length > 0) {}
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getCategories() {
      var self = this;
      this.$axios.$get('/user/condition-categories').then(res => {
        self.categories = res.Data.categories;
        self.selectedCategory = self.categories[0];
        this.getMyConditions();
      });
    },
    getConditions() {
      var self = this;
      this.$axios.$get('/user/conditions').then(res => {
        if (res.Data.conditions.length > 0) {
          if (self.myConditions !== []) {
            self.allConditions = res.Data.conditions;
            self.allConditions.forEach((condition, index) => {
              var currentCondition = self.myConditions.find(function (myCondition) {
                return myCondition.id === condition.id;
              });
              if (currentCondition) {
                self.allConditions[index].condition_decline = currentCondition.condition_decline === 0 || currentCondition.condition_decline === false ? false : true;
              }
            });
          }
          self.processing = false;
        }
      });
    },
    getMyConditions() {
      var self = this;
      this.$axios.$get('/user/landlord-conditions').then(res => {
        self.myConditions = res.Data.conditions;
        this.getConditions();
      }).catch(error => {
        this.getConditions();
      });
    },
    saveConditions() {
      var self = this;
      this.conditionsToBeSaved = {
        conditions: this.allConditions.map((condition, index) => {
          return condition.condition_decline !== undefined ? {
            condition_id: condition.id,
            condition_decline: condition.condition_decline === 0 || condition.condition_decline === false ? false : true
          } : {
            condition_id: condition.id,
            condition_decline: 0
          };
        })
      };
      this.$axios.$post('/user/landlord-conditions', self.conditionsToBeSaved).then(res => {
        this.$bvToast.toast(`Conditions saved successfully`, {
          title: 'Congrats!',
          autoHideDelay: 3000,
          appendToast: false
        });
      });
    }
  },
  head() {
    return {
      title: `Conditions`
    };
  }
});
// CONCATENATED MODULE: ./pages/dashboard/conditions.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_conditionsvue_type_script_lang_js_ = (conditionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/dashboard/conditions.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(705)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_conditionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2c938bf8",
  "c1b8c5bc"
  
)

/* harmony default export */ var conditions = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=conditions.js.map