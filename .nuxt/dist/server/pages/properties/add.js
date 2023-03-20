exports.ids = [31];
exports.modules = {

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchPropertiesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchUserTerms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return postingRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchPropertiesByLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateFavoriteProperties; });
/* harmony import */ var _helpers_axios_port__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * GET: fetch properties data
 */
function fetchPropertiesData() {
  const url = `/getPropMasterData`;
  return _helpers_axios_port__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].$get(url);
}

/**
 * GET: fetch user terms
 */
function fetchUserTerms(term = 0) {
  const url = `/conditions?term=${term}`;
  return _helpers_axios_port__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].$get(url);
}

/**
 * POST: submit a new property request
 */
function postingRequest(payload) {
  const url = `/requests`;
  return _helpers_axios_port__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].$post(url, payload);
}

/**
 * GET: Get properties by location id
 */
async function fetchPropertiesByLocation(locationId, request_id) {
  const url = `/user/locations/${locationId}/properties?request_id=${request_id}`;
  return _helpers_axios_port__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].$get(url);
}

/**
 * POST: update favorite properties
 */
function updateFavoriteProperties(payload) {
  const url = `/user/updateFavourite`;
  return _helpers_axios_port__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].$post(url, payload);
}

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(842);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("25737e01", content, true, context)
};

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(844);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("d8c23f8c", content, true, context)
};

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stepper_vue_vue_type_style_index_0_id_c6093ea6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(625);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stepper_vue_vue_type_style_index_0_id_c6093ea6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stepper_vue_vue_type_style_index_0_id_c6093ea6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stepper_vue_vue_type_style_index_0_id_c6093ea6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stepper_vue_vue_type_style_index_0_id_c6093ea6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.container[data-v-c6093ea6] {\r\n  width: 100%;\r\n  position: absolute;\r\n  z-index: 1;\r\n  margin-top: 20px;\n}\n.progressbar[data-v-c6093ea6] {\r\n  counter-reset: step;\n}\n.progressbar li[data-v-c6093ea6] {\r\n  float: left;\r\n  width: 14.28%;\r\n  position: relative;\r\n  text-align: center;\n}\n.progressbar li[data-v-c6093ea6]:before {\r\n  content: counter(step);\r\n  counter-increment: step;\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 2px solid #bebebe;\r\n  display: block;\r\n  margin: 0 auto 10px auto;\r\n  border-radius: 50%;\r\n  line-height: 27px;\r\n  background: white;\r\n  color: #bebebe;\r\n  text-align: center;\r\n  font-weight: bold;\n}\n.progressbar li[data-v-c6093ea6]:after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 3px;\r\n  background: #979797;\r\n  top: 15px;\r\n  left: -50%;\r\n  z-index: -1;\n}\n.progressbar li.active[data-v-c6093ea6]:before {\r\n  border-color: #3aac5d;\r\n  background: #3aac5d;\r\n  color: white;\n}\n.progressbar li.active[data-v-c6093ea6]:after {\r\n  background: #3aac5d;\n}\n.progressbar li.active - li[data-v-c6093ea6]:after {\r\n  background: #3aac5d;\n}\n.progressbar li.active - li[data-v-c6093ea6]:before {\r\n  border-color: #3aac5d;\r\n  background: #3aac5d;\r\n  color: white;\n}\n.progressbar li[data-v-c6093ea6]:first-child:after {\r\n  content: none;\n}\r\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_298714f3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_298714f3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_298714f3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_298714f3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_298714f3_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.add-property{min-height:calc(100vh - 48px - 48px);background-color:#f7f9fa}.add-property .container{height:100%}.add-property .container .form{width:700px}.add-property .container .form .form-container{width:100%;height:100%;padding:32px;margin:16px 0;border-radius:16px;background-color:#fff}.add-property .container .form .form-container .form-heading{text-align:center;font-size:24px;font-weight:bold;margin:16px 0;color:#111}.add-property .container .form .form-container .form-input{padding:18px 0;border-bottom:1px solid #f2f4f5}.add-property .container .form .form-container .form-input:last-child{border:none}.add-property .container .form .form-container .form-input label{font-size:16px;font-weight:bold}.add-property .container .form .form-container .form-input .v-select svg{all:unset}.add-property .container .form .form-container .form-input .chips-container{margin:0}.add-property .container .form .form-container .form-input .number-counter-input{display:flex;justify-content:space-between;align-items:center}.add-property .container .form .form-container .form-input input.form-input{padding:24px 16px;border:1px solid #e3e5e5;border-radius:10px}.add-property .container .page-actions{display:flex;justify-content:center;align-items:center}.add-property .container .page-actions .btn{width:280px;padding:12px 0;font-weight:bold;border-radius:8px;border:none;margin:8px}.add-property .container .page-actions .btn-primary{color:#fff;background-color:#0078ff}.add-property .container .page-actions .btn-secondary{color:#111;background-color:#fff}@media screen and (max-width: 768px){.add-property .container .container{padding:0}.add-property .container .form{width:100%}.add-property .container .page-actions{flex-direction:column-reverse}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/add.vue?vue&type=template&id=298714f3&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {
    staticClass: "add-property pb-3"
  }, [_c('b-container', [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "navigation"
  }), _vm._v(" "), _c('div', {
    staticClass: "form mx-auto"
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('NuxtChild', {
    attrs: {
      "propertyData": _vm.propertyData
    }
  })], 1)], 1)], 1)])], 1)], 1), _vm._ssrNode(" "), _c('WarningModal', {
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

// CONCATENATED MODULE: ./pages/properties/add.vue?vue&type=template&id=298714f3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/AddProperty/Stepper.vue?vue&type=template&id=c6093ea6&scoped=true&
var Steppervue_type_template_id_c6093ea6_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "root"
  }, [_vm._ssrNode("<div class=\"container\" data-v-c6093ea6><ul class=\"progressbar\" data-v-c6093ea6>" + _vm._ssrList(_vm.length, function (i) {
    return "<li class=\"active\" data-v-c6093ea6></li>";
  }) + "</ul></div>")]);
};
var Steppervue_type_template_id_c6093ea6_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/AddProperty/Stepper.vue?vue&type=template&id=c6093ea6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddProperty/Stepper.vue?vue&type=script&lang=js&
/* harmony default export */ var Steppervue_type_script_lang_js_ = ({
  props: ['length'],
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./components/AddProperty/Stepper.vue?vue&type=script&lang=js&
 /* harmony default export */ var AddProperty_Steppervue_type_script_lang_js_ = (Steppervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/AddProperty/Stepper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(841)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AddProperty_Steppervue_type_script_lang_js_,
  Steppervue_type_template_id_c6093ea6_scoped_true_render,
  Steppervue_type_template_id_c6093ea6_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "c6093ea6",
  "7654f7e2"
  
)

/* harmony default export */ var Stepper = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/AddProperty/WarningModal.vue?vue&type=template&id=71bcd562&
var WarningModalvue_type_template_id_71bcd562_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-modal', {
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function () {
        return [_c('b', [_vm._v("Warning")])];
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
        }, [_vm._v("\n        Discard changes\n      ")]), _vm._v(" "), _c('b-button', {
          staticClass: "float-right mx-3",
          attrs: {
            "variant": "success",
            "size": "sm"
          },
          on: {
            "click": _vm.closeModalAndNavigate
          }
        }, [_vm._v("\n        Save for later\n      ")])], 1)];
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
  }, [_vm._v("\n\n  You have unsaved changes that will be lost\n\n  ")]);
};
var WarningModalvue_type_template_id_71bcd562_staticRenderFns = [];

// CONCATENATED MODULE: ./components/AddProperty/WarningModal.vue?vue&type=template&id=71bcd562&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AddProperty/WarningModal.vue?vue&type=script&lang=js&
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
      localStorage.removeItem('property');
      this.closeModalAndNavigate();
    },
    closeModalAndNavigate() {
      this.$emit('closeModalAndNavigate');
      this.$router.push(this.routeTo);
    }
  }
});
// CONCATENATED MODULE: ./components/AddProperty/WarningModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var AddProperty_WarningModalvue_type_script_lang_js_ = (WarningModalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/AddProperty/WarningModal.vue



function WarningModal_injectStyles (context) {
  
  
}

/* normalize component */

var WarningModal_component = Object(componentNormalizer["a" /* default */])(
  AddProperty_WarningModalvue_type_script_lang_js_,
  WarningModalvue_type_template_id_71bcd562_render,
  WarningModalvue_type_template_id_71bcd562_staticRenderFns,
  false,
  WarningModal_injectStyles,
  null,
  "303649ba"
  
)

/* harmony default export */ var WarningModal = (WarningModal_component.exports);
// EXTERNAL MODULE: ./api/properties.js
var properties = __webpack_require__(357);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/add.vue?vue&type=script&lang=js&



/* harmony default export */ var addvue_type_script_lang_js_ = ({
  name: 'AddPropertyPage',
  components: {
    Stepper: Stepper,
    WarningModal: WarningModal
  },
  data() {
    return {
      propertyData: {},
      showWarningModal: false,
      routeTo: '',
      navigate: false
    };
  },
  computed: {
    isRTL() {
      return this.$store.getters['CoreModule/isRTL'];
    },
    currentPage() {
      var _this$$route, _this$$route$path;
      return parseInt((_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : (_this$$route$path = _this$$route.path) === null || _this$$route$path === void 0 ? void 0 : _this$$route$path.match(/(\d+)/)[0]);
    }
  },
  async fetch() {
    await this.getPropertiesData();
  },
  methods: {
    async getPropertiesData() {
      try {
        const response = await Object(properties["b" /* fetchPropertiesData */])();
        this.propertyData = response.Data;
      } catch (error) {
        console.log(error);
      }
    },
    closeModalAndNavigate() {
      this.showWarningModal = false;
      this.navigate = true;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!to.path.includes('/properties/add/') && localStorage.getItem('property')) {
      this.showWarningModal = true;
      this.routeTo = to.path;
      if (this.navigate) return next();
    } else next();
  }
});
// CONCATENATED MODULE: ./pages/properties/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var properties_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/properties/add.vue



function add_injectStyles (context) {
  
  var style0 = __webpack_require__(843)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var add_component = Object(componentNormalizer["a" /* default */])(
  properties_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  add_injectStyles,
  null,
  "3145b21a"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (add_component.exports);

/***/ })

};;
//# sourceMappingURL=add.js.map