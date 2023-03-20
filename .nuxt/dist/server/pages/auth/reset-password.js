exports.ids = [8];
exports.modules = {

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(840);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("32811c89", content, true, context)
};

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_style_index_0_id_2320308c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(624);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_style_index_0_id_2320308c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_style_index_0_id_2320308c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_style_index_0_id_2320308c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_style_index_0_id_2320308c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-2320308c]{color:#204ecf}.dark-blue[data-v-2320308c]{color:#0f256e !important}.gray[data-v-2320308c]{color:#262d3d}.light-gray[data-v-2320308c]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-2320308c]{color:rgba(38,45,61,.32)}.black-light[data-v-2320308c]{color:#111}.btn.btn-outline-secondary[data-v-2320308c]{color:#333}label[data-v-2320308c]{text-transform:capitalize}.object-fit-cover[data-v-2320308c]{object-fit:cover}.object-fit-contain[data-v-2320308c]{object-fit:contain}.font-14[data-v-2320308c]{font-size:14px}.font-18[data-v-2320308c]{font-size:18px}.spacer-5[data-v-2320308c]{height:5px;width:100%;display:block}.spacer-10[data-v-2320308c]{height:10px;width:100%;display:block}.spacer-15[data-v-2320308c]{height:15px;width:100%;display:block}.spacer-20[data-v-2320308c]{height:20px;width:100%;display:block}.spacer-25[data-v-2320308c]{height:25px;width:100%;display:block}.spacer-30[data-v-2320308c]{height:30px;width:100%;display:block}.spacer-40[data-v-2320308c]{height:40px;width:100%;display:block}.spacer-50[data-v-2320308c]{height:50px;width:100%;display:block}.spacer-65[data-v-2320308c]{height:65px;width:100%;display:block}.spacer-100[data-v-2320308c]{height:100px;width:100%;display:block}.sb-wrapper[data-v-2320308c]{position:relative}.sb-wrapper .sb-button[data-v-2320308c]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-2320308c]{cursor:pointer}.sb-wrapper .sb-button[data-v-2320308c]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-2320308c]:focus{outline:1px solid}.m-end-2[data-v-2320308c]{margin-inline-end:10px}.form-header[data-v-2320308c]{margin-bottom:25px}.form-title[data-v-2320308c]{font-size:18px}.form-description[data-v-2320308c]{color:#989898;font-size:12px;margin-top:5px;margin-bottom:0}.form-message[data-v-2320308c]{display:flex;justify-content:center}.form-message button[data-v-2320308c]{border:none;margin:0 10px}form[data-v-2320308c]{max-width:400px;padding:10px;margin:100px auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/reset-password.vue?vue&type=template&id=2320308c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-overlay', {
    attrs: {
      "show": _vm.authLoading
    }
  }, [_c('form', {
    attrs: {
      "aria-busy": _vm.authLoading
    },
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.resetPasswordHandler.apply(null, arguments);
      }
    }
  }, [_c('transition-group', {
    attrs: {
      "name": "slide"
    }
  }, [_vm.serverErrors ? _c('div', {
    key: "serverErrors"
  }, [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_c('ul', {
    staticClass: "mb-0"
  }, _vm._l(_vm.serverErrors, function (error, index) {
    return _c('li', {
      key: index,
      staticStyle: {
        "text-align": "center"
      }
    }, [_vm._v("\n              " + _vm._s(error.errorMsg) + "\n            ")]);
  }), 0)])], 1) : _vm._e(), _vm._v(" "), _vm.successResponse ? _c('div', {
    key: "successResponse"
  }, [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "success"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.successResponse) + "\n        ")])], 1) : _vm._e()]), _vm._v("\n\n    " + _vm._s(_vm.successResponse) + "\n    "), _c('header', {
    staticClass: "form-header"
  }, [_c('h5', {
    staticClass: "form-title"
  }, [_vm._v("Reset Password")]), _vm._v(" "), _c('p', {
    staticClass: "form-description"
  }, [_vm._v("Write your new Password")])]), _vm._v(" "), _c('AppInput', {
    attrs: {
      "validation-name": _vm.$t('form.password'),
      "placeholder": _vm.$t('form.password'),
      "type": "password",
      "autoComplete": "new-password",
      "required": "",
      "validation-rules": "required|min:8"
    },
    model: {
      value: _vm.form.password,
      callback: function ($$v) {
        _vm.$set(_vm.form, "password", $$v);
      },
      expression: "form.password"
    }
  }), _vm._v(" "), _c('AppInput', {
    attrs: {
      "validation-name": _vm.$t('form.password'),
      "placeholder": _vm.$t('form.repeatPassword'),
      "type": "password",
      "autoComplete": "off",
      "required": "",
      "validation-rules": "required|min:8"
    },
    model: {
      value: _vm.form.c_password,
      callback: function ($$v) {
        _vm.$set(_vm.form, "c_password", $$v);
      },
      expression: "form.c_password"
    }
  }), _vm._v(" "), _c('AppButton', {
    attrs: {
      "type": "submit",
      "block": "",
      "variant": "primary",
      "loading": _vm.authLoading
    }
  }, [_vm._v("\n      Update Password\n    ")])], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/auth/reset-password.vue?vue&type=template&id=2320308c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/reset-password.vue?vue&type=script&lang=js&
/* harmony default export */ var reset_passwordvue_type_script_lang_js_ = ({
  name: 'resetPassword',
  middleware: 'visitors-only',
  data() {
    return {
      form: {
        password: '',
        c_password: '',
        token: '',
        authLoading: false,
        serverErrors: null,
        successResponse: null
      }
    };
  },
  methods: {
    async resetPasswordHandler() {
      try {
        this.authLoading = !this.authLoading;
        const {
          Data
        } = await this.$axios.$post('/resetpassword', this.form);
        this.serverErrors = null;
        this.successResponse = Data.message;
        this.authLoading = false;
        this.$router.push(this.localePath('/'));
      } catch (error) {
        this.serverErrors = error.response.data.Data;
        this.successResponse = null;
        this.authLoading = false;
      }
    }
  },
  created() {
    this.$route.query.token && (this.form.token = this.$route.query.token);
  }
});
// CONCATENATED MODULE: ./pages/auth/reset-password.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_reset_passwordvue_type_script_lang_js_ = (reset_passwordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/auth/reset-password.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(839)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_reset_passwordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2320308c",
  "2dbc7b5b"
  
)

/* harmony default export */ var reset_password = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=reset-password.js.map