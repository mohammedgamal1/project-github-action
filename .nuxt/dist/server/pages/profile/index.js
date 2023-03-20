exports.ids = [29];
exports.modules = {

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _components_shared_Separator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _components_shared_StarRateBox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var _helpers_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _helpers_imageValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(792);




/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    avatar: {
      type: String,
      default: '',
      required: true
    },
    user: {
      type: Object,
      default: () => {}
    },
    inMob: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Separator: _components_shared_Separator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    StarRateBox: _components_shared_StarRateBox_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  data() {
    return {
      previewImg: '',
      image_error_message: ''
    };
  },
  created() {
    if (typeof this.avatar === 'string' || this.avatar === '' || !this.avatar) {
      this.previewImg = Object(_helpers_images__WEBPACK_IMPORTED_MODULE_2__[/* generateServerImageUrl */ "c"])({
        url: this.avatar
      });
    } else {
      this.previewImg = URL.createObjectURL(this.avatar);
    }
  },
  computed: {
    rateCount() {
      if (this.user.isLandlord) {
        return this.user.landlord_rating_avg;
      } else {
        return this.user.tenant_rating_avg;
      }
    },
    reviewsCount() {
      if (this.user.isLandlord) {
        return this.user.landlord_rating_count;
      } else {
        return this.user.tenant_rating_count;
      }
    }
  },
  methods: {
    updateProfile(prop, event) {
      const imageFile = event.target.files[0];
      if (!imageFile) return;
      if (Object(_helpers_imageValidation__WEBPACK_IMPORTED_MODULE_3__[/* isValidImage */ "a"])(imageFile)) {
        Object(_helpers_images__WEBPACK_IMPORTED_MODULE_2__[/* compressImage */ "a"])({
          file: event.target.files[0],
          callback: file => {
            this.previewImg = URL.createObjectURL(file);
            this.$emit('updateProfile', prop, file);
          }
        });
        this.image_error_message = '';
      } else {
        this.image_error_message = this.$t('profile.imageErrorMessage');
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(74)["URL"]))

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(794);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("9a90d072", content, true, context)
};

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(796);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7edf1d1e", content, true, context)
};

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(803);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("22571006", content, true, context)
};

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(805);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("a46b4f08", content, true, context)
};

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNjFfMjY3NikiPg0KPHBhdGggZD0iTTMuNSAyMy42OTkyVjUuNjk5MjJIMTQuNDI1TDEyLjQyNSA3LjY5OTIySDUuNVYyMS42OTkySDE5LjVWMTQuNzQ5MkwyMS41IDEyLjc0OTJWMjMuNjk5MkgzLjVaTTE2LjY3NSA2LjI3NDIyTDE4LjEgNy42NzQyMkwxMS41IDE0LjI3NDJWMTUuNjk5MkgxMi45TDE5LjUyNSA5LjA3NDIyTDIwLjk1IDEwLjQ3NDJMMTMuNzUgMTcuNjk5Mkg5LjVWMTMuNDQ5MkwxNi42NzUgNi4yNzQyMlpNMjAuOTUgMTAuNDc0MkwxNi42NzUgNi4yNzQyMkwyMC42MjUgMi4zMjQyMkwyNC44MjUgNi41OTkyMkwyMC45NSAxMC40NzQyWiIgZmlsbD0iYmxhY2siLz4NCjwvZz4NCjxkZWZzPg0KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjFfMjY3NiI+DQo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUpIi8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPC9zdmc+DQo="

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isValidImage; });
function isValidImage(file) {
  return /\.(jpe?g|png|jpg|jpeg)$/i.test(file.name);
}

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarSection_vue_vue_type_style_index_0_id_28d6c276_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(605);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarSection_vue_vue_type_style_index_0_id_28d6c276_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarSection_vue_vue_type_style_index_0_id_28d6c276_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarSection_vue_vue_type_style_index_0_id_28d6c276_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarSection_vue_vue_type_style_index_0_id_28d6c276_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-28d6c276]{color:#204ecf}.dark-blue[data-v-28d6c276]{color:#0f256e !important}.gray[data-v-28d6c276]{color:#262d3d}.light-gray[data-v-28d6c276]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-28d6c276]{color:rgba(38,45,61,.32)}.black-light[data-v-28d6c276]{color:#111}.btn.btn-outline-secondary[data-v-28d6c276]{color:#333}label[data-v-28d6c276]{text-transform:capitalize}.object-fit-cover[data-v-28d6c276]{object-fit:cover}.object-fit-contain[data-v-28d6c276]{object-fit:contain}.font-14[data-v-28d6c276]{font-size:14px}.font-18[data-v-28d6c276]{font-size:18px}.spacer-5[data-v-28d6c276]{height:5px;width:100%;display:block}.spacer-10[data-v-28d6c276]{height:10px;width:100%;display:block}.spacer-15[data-v-28d6c276]{height:15px;width:100%;display:block}.spacer-20[data-v-28d6c276]{height:20px;width:100%;display:block}.spacer-25[data-v-28d6c276]{height:25px;width:100%;display:block}.spacer-30[data-v-28d6c276]{height:30px;width:100%;display:block}.spacer-40[data-v-28d6c276]{height:40px;width:100%;display:block}.spacer-50[data-v-28d6c276]{height:50px;width:100%;display:block}.spacer-65[data-v-28d6c276]{height:65px;width:100%;display:block}.spacer-100[data-v-28d6c276]{height:100px;width:100%;display:block}.sb-wrapper[data-v-28d6c276]{position:relative}.sb-wrapper .sb-button[data-v-28d6c276]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-28d6c276]{cursor:pointer}.sb-wrapper .sb-button[data-v-28d6c276]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-28d6c276]:focus{outline:1px solid}.m-end-2[data-v-28d6c276]{margin-inline-end:10px}.makeGap[data-v-28d6c276]{gap:20px}.preview[data-v-28d6c276]{width:150px;height:150px;border-radius:50%;overflow:hidden;border:solid 1px #c3c3c3;background-color:#fff;display:flex;align-items:flex-end;justify-content:center}.preview.inMob[data-v-28d6c276]{width:100px;height:100px}.preview .avatar[data-v-28d6c276]{object-fit:contain}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Normal_User_vue_vue_type_style_index_0_id_a5aab3b2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(606);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Normal_User_vue_vue_type_style_index_0_id_a5aab3b2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Normal_User_vue_vue_type_style_index_0_id_a5aab3b2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Normal_User_vue_vue_type_style_index_0_id_a5aab3b2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Normal_User_vue_vue_type_style_index_0_id_a5aab3b2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.user{background-color:#fdf2f2 !important}.user .custom-select{background-color:#fdf2f2 !important}.w-90{width:90% !important}.dropdown-toggle{padding-left:10px !important;padding-right:10px !important;background-color:transparent !important}a.dropdown-item{padding-left:10px !important;padding-right:10px !important}div.vue-tel-input input{background-color:transparent !important}.social-media .social-media-item{position:relative;border:1px solid #ced4da;border-radius:.25rem;border-collapse:collapse}.social-media .social-media-item .img{border:1px solid #ced4da;padding:.35rem .25rem;border-radius:.25rem 0 0 .25rem;border-collapse:collapse}.social-media .social-media-item input{border-radius:0 .25rem .25rem 0;height:38.2px !important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMCAxNkg1LjVDMy45ODMzMyAxNiAyLjY4NzY3IDE1LjQ3NSAxLjYxMyAxNC40MjVDMC41Mzc2NjcgMTMuMzc1IDAgMTIuMDkxNyAwIDEwLjU3NUMwIDkuMjc1IDAuMzkxNjY3IDguMTE2NjcgMS4xNzUgNy4xQzEuOTU4MzMgNi4wODMzMyAyLjk4MzMzIDUuNDMzMzMgNC4yNSA1LjE1QzQuNjY2NjcgMy42MTY2NyA1LjUgMi4zNzUgNi43NSAxLjQyNUM4IDAuNDc1IDkuNDE2NjcgMCAxMSAwQzEyLjk1IDAgMTQuNjA0IDAuNjc5IDE1Ljk2MiAyLjAzN0MxNy4zMjA3IDMuMzk1NjcgMTggNS4wNSAxOCA3QzE5LjE1IDcuMTMzMzMgMjAuMTA0MyA3LjYyOSAyMC44NjMgOC40ODdDMjEuNjIxIDkuMzQ1NjcgMjIgMTAuMzUgMjIgMTEuNUMyMiAxMi43NSAyMS41NjI3IDEzLjgxMjcgMjAuNjg4IDE0LjY4OEMxOS44MTI3IDE1LjU2MjcgMTguNzUgMTYgMTcuNSAxNkgxMlY4Ljg1TDEzLjYgMTAuNEwxNSA5TDExIDVMNyA5TDguNCAxMC40TDEwIDguODVWMTZaIiBmaWxsPSIjMDA3OEZGIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik05LjM5ODQ0IDExLjI1SDcuMTQ4NDRWOUwxMy44OTg0IDIuMjVMMTYuMTQ4NCA0LjVMOS4zOTg0NCAxMS4yNVoiIHN0cm9rZT0iI0ZGNTI1MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMTIuMjEwOSAzLjkzNzVMMTQuNDYwOSA2LjE4NzUiIHN0cm9rZT0iI0ZGNTI1MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMTUuNTg1OSA4LjQzNzVWMTQuNjI1QzE1LjU4NTkgMTQuNzc0MiAxNS41MjY3IDE0LjkxNzMgMTUuNDIxMiAxNS4wMjI3QzE1LjMxNTcgMTUuMTI4MiAxNS4xNzI2IDE1LjE4NzUgMTUuMDIzNCAxNS4xODc1SDMuNzczNDRDMy42MjQyNSAxNS4xODc1IDMuNDgxMTggMTUuMTI4MiAzLjM3NTY5IDE1LjAyMjdDMy4yNzAyIDE0LjkxNzMgMy4yMTA5NCAxNC43NzQyIDMuMjEwOTQgMTQuNjI1VjMuMzc1QzMuMjEwOTQgMy4yMjU4MiAzLjI3MDIgMy4wODI3NCAzLjM3NTY5IDIuOTc3MjVDMy40ODExOCAyLjg3MTc2IDMuNjI0MjUgMi44MTI1IDMuNzczNDQgMi44MTI1SDkuOTYwOTQiIHN0cm9rZT0iI0ZGNTI1MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Trash.1febc3c.svg";

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICAgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbW9yZS12ZXJ0aWNhbCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTIiIGN5PSI1IiByPSIxIj48L2NpcmNsZT48Y2lyY2xlIGN4PSIxMiIgY3k9IjE5IiByPSIxIj48L2NpcmNsZT48L3N2Zz4="

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/agent.b83d80c.svg";

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Broker_vue_vue_type_style_index_0_id_7eb74675_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(607);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Broker_vue_vue_type_style_index_0_id_7eb74675_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Broker_vue_vue_type_style_index_0_id_7eb74675_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Broker_vue_vue_type_style_index_0_id_7eb74675_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Broker_vue_vue_type_style_index_0_id_7eb74675_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.actions button.agentBtn{background-color:rgba(255,82,82,.2) !important;color:#db0909 !important;transition:.5s !important}.actions button.agentBtn:hover{background-color:rgba(255,82,82,.5) !important}.agents_content .agent_header .btn{gap:5px;border:1px solid #004ed4}.agents_content .agent_header .btn:hover{background-color:#004ed4 !important;color:#fff !important}.agents_content .agent_header .btn:hover span:first-of-type{border:1px solid #fff}.agents_content .agent_header .btn span:first-of-type{width:20px;height:20px;border-radius:50%;border:1px solid #004ed4}.agents_content .agents_wrapper .agent{gap:10px;margin:10px 0}.agents_content .agents_wrapper .agent>img{position:absolute;right:20px;top:20px;cursor:pointer}.agents_content .agents_wrapper .agent .img{width:60px;height:60px;border-radius:50%}.agents_content .agents_wrapper .agent .img img{width:100%;height:100%}.w-90{width:90% !important}.broker{background-color:#fdf2f2 !important;min-height:calc(100vh - 220px) !important}.broker .content .uploadImg{border:1px solid #004ed4 !important;padding:7px !important}.broker .content .uploadImg span{font-size:13px !important}.noBorder{border:none !important}.noBorder .tabLink{border:none}.noBorder .tabLink.activeClassTab button{background-color:#004ed4 !important;color:#fff !important}.noBorder .tabLink:hover,.noBorder .tabLink:focus{isolation:none !important;border:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4097cc24_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(608);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4097cc24_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4097cc24_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4097cc24_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4097cc24_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}@media(min-width: 768px)and (max-width: 991px){.profile{margin-top:70px !important}}svg{cursor:pointer}svg path{transition:.5s}svg:hover path{fill:red !important}.card-body{display:flex;justify-content:space-between;align-items:center}.makeGap{gap:15px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=4097cc24&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-overlay', {
    attrs: {
      "show": _vm.loading || !_vm.form
    }
  }, [_c('div', {
    staticClass: "profile"
  }, [_vm.form.type === 'corporate' ? _c('Broker', {
    attrs: {
      "form": _vm.form
    }
  }) : _c('Normal_User', {
    attrs: {
      "form": _vm.form
    }
  })], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=4097cc24&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/Normal_User.vue?vue&type=template&id=a5aab3b2&
var Normal_Uservue_type_template_id_a5aab3b2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "user pb-4"
  }, [_c('b-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('b-row', {
    staticClass: "pt-4"
  }, [_c('b-col', {
    attrs: {
      "cols": "6",
      "lg": "3",
      "offset": "3",
      "offset-lg": "0"
    }
  }, [_c('AvatarSection', {
    staticClass: "d-flex",
    attrs: {
      "user": _vm.form,
      "avatar": _vm.form.avatar
    },
    on: {
      "updateProfile": _vm.updateProfileHandler
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mx-sm-auto mx-lg-0 d-flex align-items-center",
    attrs: {
      "cols": "12",
      "sm": "9",
      "lg": "6",
      "offset-lg": "0"
    }
  }, [_c('div', {
    staticClass: "user_type w-100"
  }, [_c('h2', {
    staticClass: "font-18 color-black font-weight-bold mt-4 mb-2"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('profile.user_Type')) + "\n          ")]), _vm._v(" "), _c('b-form-select', {
    attrs: {
      "options": _vm.options
    },
    model: {
      value: _vm.type,
      callback: function ($$v) {
        _vm.type = $$v;
      },
      expression: "type"
    }
  })], 1)]), _vm._v(" "), _c('hr', {
    staticClass: "w-90 mx-auto"
  }), _vm._v(" "), _c('b-col', {
    staticClass: "mx-auto py-2",
    attrs: {
      "cols": "12",
      "sm": "9",
      "lg": "6",
      "offset-lg": "0"
    }
  }, [_c('h2', {
    staticClass: "font-18 font-weight-bold mb-3"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('profile.basicInformation')) + "\n        ")]), _vm._v(" "), _c('b-row', {
    staticClass: "mt-4"
  }, [_c('b-col', {
    staticClass: "mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Full Name")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.full_name,
      callback: function ($$v) {
        _vm.$set(_vm.form, "full_name", $$v);
      },
      expression: "form.full_name"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Gender")]), _vm._v(" "), _c('b-form-select', {
    attrs: {
      "options": _vm.genderOptions
    },
    model: {
      value: _vm.form.gender,
      callback: function ($$v) {
        _vm.$set(_vm.form, "gender", $$v);
      },
      expression: "form.gender"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Address")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Address"
    },
    model: {
      value: _vm.form.address,
      callback: function ($$v) {
        _vm.$set(_vm.form, "address", $$v);
      },
      expression: "form.address"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('hr', {
    staticClass: "w-90 mx-auto"
  }), _vm._v(" "), _c('b-col', {
    staticClass: "mx-auto py-2",
    attrs: {
      "cols": "12",
      "sm": "9",
      "lg": "6",
      "offset-lg": "0"
    }
  }, [_c('h2', {
    staticClass: "font-18 color-black font-weight-bold"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('profile.contactInformation')) + "\n        ")]), _vm._v(" "), _c('b-row', {
    staticClass: "md-4"
  }, [_c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Email Address")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.full_name,
      callback: function ($$v) {
        _vm.$set(_vm.form, "full_name", $$v);
      },
      expression: "form.full_name"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('vue-tel-input', {
    attrs: {
      "label": _vm.$t('form.mobileNumber'),
      "validation-name": _vm.$t('form.mobileNumber'),
      "validation-rules": "required|phoneNumber",
      "input-id": "mobile-number",
      "placeholder": _vm.$t('form.mobileNumber'),
      "mode": "international",
      "dropdownOptions.showSearchBox": "true"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`mobile`, $event);
      }
    },
    model: {
      value: _vm.form.mobile,
      callback: function ($$v) {
        _vm.$set(_vm.form, "mobile", $$v);
      },
      expression: "form.mobile"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('hr', {
    staticClass: "w-90 mx-auto"
  }), _vm._v(" "), _c('b-col', {
    staticClass: "mx-auto pt-4",
    attrs: {
      "cols": "12",
      "sm": "9",
      "lg": "6",
      "offset-lg": "0"
    }
  }, [_c('h3', {
    staticClass: "font-18 color-black font-weight-bold text-center"
  }, [_vm._v("\n          Forget Password\n        ")]), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4 px-0",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Login Email")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4 px-0",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Old Password")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "type": "password",
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.password,
      callback: function ($$v) {
        _vm.password = $$v;
      },
      expression: "password"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4 px-0",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("New Password")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "type": "password",
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.password,
      callback: function ($$v) {
        _vm.password = $$v;
      },
      expression: "password"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4 px-0",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Confirm Password")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "type": "password",
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.password,
      callback: function ($$v) {
        _vm.password = $$v;
      },
      expression: "password"
    }
  })], 1)], 1), _vm._v(" "), _c('b-col', {
    staticClass: "text-center mx-auto mt-4",
    attrs: {
      "cols": "9"
    }
  }, [_c('b-button', {
    staticClass: "w-75",
    attrs: {
      "variant": "primary"
    }
  }, [_vm._v("Save Changes")])], 1)], 1)], 1)], 1);
};
var Normal_Uservue_type_template_id_a5aab3b2_staticRenderFns = [];

// CONCATENATED MODULE: ./components/profile/Normal_User.vue?vue&type=template&id=a5aab3b2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/AvatarSection.vue?vue&type=template&id=28d6c276&scoped=true&
var AvatarSectionvue_type_template_id_28d6c276_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    class: ['d-flex align-items-center', {
      'flex-column': !_vm.inMob
    }, {
      'makeGap': _vm.inMob
    }, {
      'mb-4': _vm.inMob
    }, {
      'justify-content-center': _vm.inMob
    }]
  }, [_vm._ssrNode("<div" + _vm._ssrClass(null, ['preview', {
    'inMob': _vm.inMob
  }]) + " data-v-28d6c276><img" + _vm._ssrAttr("src", _vm.previewImg ? _vm.previewImg : 'https://rentup-storage.s3.eu-central-1.amazonaws.com/image_content/users/user/default-avatar.png') + " alt=\"avatar img\" class=\"avatar w-100 h-100\" data-v-28d6c276></div> " + (!_vm.inMob ? "<div class=\"spacer-10\" data-v-28d6c276></div>" : "<!---->") + " "), _vm.image_error_message ? _c('b-alert', {
    staticClass: "rounded-0 mb-5 text-center",
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.image_error_message) + "\n  ")]) : _vm._e(), _vm._ssrNode(" <div class=\"img_reviews\" data-v-28d6c276><label class=\"btn btn-transparent px-3 d-flex align-items-center\" data-v-28d6c276><input type=\"file\" accept=\"image/png, image/jpe, image/jpeg, image/jpg\" class=\"d-none\" data-v-28d6c276> <img width=\"20px\" height=\"20px\"" + _vm._ssrAttr("src", __webpack_require__(791)) + " alt=\"Edit Image\" class=\"mb-1 mx-1\" data-v-28d6c276> <span data-v-28d6c276>" + _vm._ssrEscape(_vm._s(_vm.$t('common.change'))) + "</span></label></div>")], 2);
};
var AvatarSectionvue_type_template_id_28d6c276_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/profile/AvatarSection.vue?vue&type=template&id=28d6c276&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/AvatarSection.vue?vue&type=script&lang=js&
var AvatarSectionvue_type_script_lang_js_ = __webpack_require__(506);

// CONCATENATED MODULE: ./components/profile/AvatarSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_AvatarSectionvue_type_script_lang_js_ = (AvatarSectionvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/profile/AvatarSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(793)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_AvatarSectionvue_type_script_lang_js_,
  AvatarSectionvue_type_template_id_28d6c276_scoped_true_render,
  AvatarSectionvue_type_template_id_28d6c276_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "28d6c276",
  "02bd09fd"
  
)

/* harmony default export */ var AvatarSection = (component.exports);
// EXTERNAL MODULE: external "vue-tel-input"
var external_vue_tel_input_ = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/vue-tel-input/dist/vue-tel-input.css
var vue_tel_input = __webpack_require__(148);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/Normal_User.vue?vue&type=script&lang=js&



/* harmony default export */ var Normal_Uservue_type_script_lang_js_ = ({
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  components: {
    AvatarSection: AvatarSection,
    VueTelInput: external_vue_tel_input_["VueTelInput"]
  },
  data() {
    return {
      options: [{
        text: 'Private Owner / Tenant',
        value: 'Private Owner / Tenant'
      }, {
        text: 'Broker',
        value: 'corporate'
      }],
      type: '',
      genderOptions: [{
        value: 'm',
        text: this.$t('form.genderOptions.male')
      }, {
        value: 'f',
        text: this.$t('form.genderOptions.female')
      }],
      gender: '',
      password: ''
    };
  },
  mounted() {
    if (this.form.type === 'corporate') {
      this.type = this.dir === 'ltr' ? 'Broker' : 'وسيط عقارى';
    } else {
      this.type = this.dir === 'ltr' ? 'Private Owner / Tenant' : 'مالك / مستأجر خاص';
    }
    if (this.dir === 'ltr') {
      this.options = [{
        text: 'Private Owner / Tenant',
        value: 'Private Owner / Tenant'
      }, {
        text: 'Broker',
        value: 'corporate'
      }];
    } else {
      this.options = [{
        text: 'مالك / مستأجر خاص',
        value: 'Private Owner / Tenant'
      }, {
        text: 'وسيط عقارى',
        value: 'corporate'
      }];
    }
  },
  computed: {
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    }
  },
  methods: {
    setSelectedOption(option) {
      if (this.type === option.text) {
        return;
      } else {
        this.type = option.text;
        this.updateProfile('type', option.value);
      }
    },
    setSelectedGender(option) {
      if (this.gender === option.text) {
        return;
      } else {
        this.gender = option.text;
        this.updateProfile('gender', option.value);
      }
    },
    updateProfile(prop, value) {
      this.$emit('updateProfile', prop, value);
    }
  }
});
// CONCATENATED MODULE: ./components/profile/Normal_User.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_Normal_Uservue_type_script_lang_js_ = (Normal_Uservue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/profile/Normal_User.vue



function Normal_User_injectStyles (context) {
  
  var style0 = __webpack_require__(795)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Normal_User_component = Object(componentNormalizer["a" /* default */])(
  profile_Normal_Uservue_type_script_lang_js_,
  Normal_Uservue_type_template_id_a5aab3b2_render,
  Normal_Uservue_type_template_id_a5aab3b2_staticRenderFns,
  false,
  Normal_User_injectStyles,
  null,
  "319e2498"
  
)

/* harmony default export */ var Normal_User = (Normal_User_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/Broker.vue?vue&type=template&id=7eb74675&
var Brokervue_type_template_id_7eb74675_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "broker pb-4"
  }, [_c('b-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('b-tabs', {
    staticClass: "pt-4",
    attrs: {
      "nav-class": "noBorder",
      "align": "center",
      "active-nav-item-class": "activeClassTab"
    }
  }, [_c('b-tab', {
    attrs: {
      "active": "",
      "title-link-class": ['bg-transparent', 'tabLink', 'p-2']
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function () {
        return [_c('b-button', {
          attrs: {
            "variant": "outline-primary"
          }
        }, [_vm._v("\n                Broker Settings\n              ")])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c('div', {
    staticClass: "content mt-4"
  }, [_c('b-row', [_c('b-col', {
    staticClass: "mx-auto",
    attrs: {
      "cols": "12",
      "md": "12",
      "lg": "6"
    }
  }, [_c('b-row', [_c('b-col', {
    staticClass: "mx-sm-auto mx-lg-0 mb-3",
    attrs: {
      "cols": "12",
      "sm": "9",
      "lg": "12"
    }
  }, [_c('h2', {
    staticClass: "font-weight-semi-bold text-body mb-4"
  }, [_vm._v("User Access")])]), _vm._v(" "), _c('b-col', {
    staticClass: "mx-sm-auto mx-lg-0 mb-3",
    attrs: {
      "cols": "12",
      "sm": "9",
      "lg": "6"
    }
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Login Email")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mx-sm-auto mx-lg-0 mb-3",
    attrs: {
      "cols": "12",
      "sm": "9",
      "lg": "6"
    }
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Password")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "type": "password",
      "placeholder": "Password"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('hr', {
    staticClass: "w-90 mx-auto my-4"
  }), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "6",
      "lg": "3",
      "offset": "3",
      "offset-lg": "0"
    }
  }, [_c('AvatarSection', {
    staticClass: "d-flex",
    attrs: {
      "user": _vm.form,
      "avatar": _vm.form.avatar
    },
    on: {
      "updateProfile": _vm.updateProfileHandler
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mx-sm-auto mx-lg-0",
    attrs: {
      "cols": "12",
      "sm": "9",
      "lg": "6",
      "offset-lg": "0"
    }
  }, [_c('h2', {
    staticClass: "font-weight-semi-bold text-body mb-4"
  }, [_vm._v("Company Information")]), _vm._v(" "), _c('b-row', {
    staticClass: "mb-3"
  }, [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Company Name")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "mb-3"
  }, [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Company Offecial Name")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "mb-3"
  }, [_c('b-col', {
    staticClass: "mb-3",
    attrs: {
      "cols": "12",
      "xl": "6"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Commerical Register")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent mt-3",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mb-3",
    attrs: {
      "cols": "12",
      "xl": "6"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Upload Commerical Register Image")]), _vm._v(" "), _c('label', {
    staticClass: "btn bg-transparent px-0 d-flex align-items-center pb-0",
    attrs: {
      "for": "commercialImg"
    }
  }, [_c('input', {
    staticClass: "d-none",
    attrs: {
      "type": "file",
      "accept": "image/png, image/jpe, image/jpeg, image/jpg",
      "id": "commercialImg"
    },
    on: {
      "change": function ($event) {
        return _vm.updateProfile(`avatar`, $event);
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "uploadImg d-flex rounded align-items-center w-100 justify-content-center"
  }, [_c('img', {
    staticClass: "mb-0 mx-1",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(797),
      "alt": "Edit  Image"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text-primary"
  }, [_vm._v("Upload Commercial Registry Image")])])])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "mb-3"
  }, [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Address")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "mb-3"
  }, [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Website")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "mb-3"
  }, [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Email address")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('hr', {
    staticClass: "w-90 mx-auto my-4"
  }), _vm._v(" "), _c('b-col', {
    staticClass: "mx-sm-auto",
    attrs: {
      "cols": "12",
      "sm": "9",
      "lg": "6",
      "offset-lg": "0"
    }
  }, [_c('b-row', [_c('b-col', {
    staticClass: "mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Company Name")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Company Name")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Company Name")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "text-center",
    attrs: {
      "cols": "6",
      "offset": "3"
    }
  }, [_c('b-button', {
    staticClass: "w-75",
    attrs: {
      "variant": "primary"
    }
  }, [_vm._v("Save Changes")])], 1)], 1)], 1)], 1)], 1)]), _vm._v(" "), _c('b-tab', {
    attrs: {
      "title-link-class": ['bg-transparent', 'tabLink', 'p-2']
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function () {
        return [_c('b-button', {
          attrs: {
            "variant": "outline-primary"
          },
          on: {
            "click": function ($event) {
              _vm.isAdd_Edit = false;
            }
          }
        }, [_vm._v("\n                Manage Agents\n              ")])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c('div', {
    staticClass: "agents_content mt-4"
  }, [_c('b-row', [!_vm.isAdd_Edit ? _c('b-col', {
    attrs: {
      "cols": "8",
      "offset": "2"
    }
  }, [_c('div', {
    staticClass: "agent_header d-flex align-items-center justify-content-between"
  }, [_c('h2', {
    staticClass: "font-weight-bold text-body"
  }, [_vm._v("\n                      My Agents\n                    ")]), _vm._v(" "), _c('b-button', {
    staticClass: "d-flex align-items-center text-primary bg-transparent",
    attrs: {
      "size": "sm"
    },
    on: {
      "click": function ($event) {
        _vm.isAdd_Edit = true;
      }
    }
  }, [_c('span', {
    staticClass: "p-1 font-size-large d-flex align-items-center justify-content-center"
  }, [_vm._v("+")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-semi-bold"
  }, [_vm._v("Add Agent")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "agents_wrapper mt-4"
  }, [_c('b-row', {
    attrs: {
      "cols": "12"
    }
  }, _vm._l(12, function (n) {
    return _c('b-col', {
      key: n,
      attrs: {
        "cols": "12",
        "md": "6",
        "xl": "4"
      }
    }, [_c('div', {
      staticClass: "agent d-flex align-items-center bg-white p-2 rounded"
    }, [_c('b-modal', {
      attrs: {
        "id": `modal-${n}`,
        "centered": "",
        "hide-footer": "",
        "hide-header": ""
      }
    }, [_c('div', {
      staticClass: "actions"
    }, [_c('b-row', [_c('b-col', {
      attrs: {
        "cols": "12"
      }
    }, [_c('b-button', {
      staticClass: "agentBtn mb-3",
      attrs: {
        "block": ""
      }
    }, [_c('img', {
      class: [_vm.dir === 'ltr' ? 'mr-1' : 'ml-1'],
      attrs: {
        "width": "20px",
        "height": "20px",
        "src": __webpack_require__(798),
        "alt": "Edit Agent"
      }
    }), _vm._v("\n                                    Edit Agent\n                                  ")])], 1), _vm._v(" "), _c('b-col', {
      attrs: {
        "cols": "12"
      }
    }, [_c('b-button', {
      staticClass: "agentBtn",
      attrs: {
        "block": ""
      }
    }, [_c('img', {
      class: [_vm.dir === 'ltr' ? 'mr-1' : 'ml-1'],
      attrs: {
        "width": "20px",
        "height": "20px",
        "src": __webpack_require__(799),
        "alt": "Delete Agent"
      }
    }), _vm._v("\n                                    Delete Agent\n                                  ")])], 1)], 1)], 1)]), _vm._v(" "), _c('img', {
      attrs: {
        "width": "20px",
        "height": "20px",
        "src": __webpack_require__(800),
        "alt": "Agnet options"
      },
      on: {
        "click": function ($event) {
          return _vm.$bvModal.show(`modal-${n}`);
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "width": "20px",
        "height": "20px",
        "src": __webpack_require__(801),
        "alt": "Agnet Image"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('h3', {
      staticClass: "font-weight-bold"
    }, [_vm._v("Salem Tarek")]), _vm._v(" "), _c('h5', [_vm._v("0201093967431")])])], 1)]);
  }), 1)], 1)]) : _c('b-col', {
    attrs: {
      "cols": "12",
      "md": "8",
      "offset-md": "2"
    }
  }, [_c('b-row', [_c('b-col', {
    staticClass: "mx-auto",
    attrs: {
      "cols": "8",
      "lg": "4"
    }
  }, [_c('AvatarSection', {
    staticClass: "d-flex",
    attrs: {
      "user": _vm.form,
      "avatar": _vm.form.avatar
    },
    on: {
      "updateProfile": _vm.updateProfileHandler
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mx-sm-auto mx-lg-0 mt-4",
    attrs: {
      "cols": "12",
      "sm": "9",
      "lg": "8",
      "offset-lg": "0"
    }
  }, [_c('h2', {
    staticClass: "font-weight-semi-bold text-body mb-4"
  }, [_vm._v("Company Information")]), _vm._v(" "), _c('b-row', {
    staticClass: "mb-3"
  }, [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', [_c('b-col', {
    staticClass: "mb-3",
    attrs: {
      "xl": "6"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("User Name")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mb-3",
    attrs: {
      "xl": "6"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Password")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "type": "password",
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "mb-3"
  }, [_c('b-col', {
    staticClass: "mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Agent Mobile Number")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Agent Email Address")]), _vm._v(" "), _c('b-form-input', {
    staticClass: "bg-transparent",
    attrs: {
      "placeholder": "Enter your name"
    },
    on: {
      "input": function ($event) {
        return _vm.updateProfile(`full_name`, $event);
      }
    },
    model: {
      value: _vm.form.email,
      callback: function ($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Agent Gender")]), _vm._v(" "), _c('b-dropdown', {
    staticClass: "my-2 outlined",
    attrs: {
      "text": _vm.form.gender || _vm.genderOptions[0].text,
      "menu-class": "w-100",
      "block": ""
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function () {
        return [_c('div', {
          staticClass: "dropdown-header d-flex align-items-center justify-content-between w-100 px-1"
        }, [_c('h3', {
          staticClass: "mb-0"
        }, [_vm._v(_vm._s(_vm.gender))]), _vm._v(" "), _c('img', {
          attrs: {
            "src": __webpack_require__(160),
            "alt": "Down Caret",
            "width": "20px",
            "height": "20px"
          }
        })])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._l(_vm.genderOptions, function (option, index) {
    return _c('b-dropdown-item', {
      key: index,
      on: {
        "click": function ($event) {
          return _vm.setSelectedGender(option);
        }
      }
    }, [_vm._v(_vm._s(option.text))]);
  })], 2)], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mx-auto text-center",
    attrs: {
      "cols": "12",
      "lg": "8"
    }
  }, [_c('b-button', {
    staticClass: "w-50",
    attrs: {
      "variant": "primary"
    }
  }, [_vm._v("\n                            Save Changes\n                          ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)])], 1)], 1)], 1)], 1)], 1);
};
var Brokervue_type_template_id_7eb74675_staticRenderFns = [];

// CONCATENATED MODULE: ./components/profile/Broker.vue?vue&type=template&id=7eb74675&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/profile/Broker.vue?vue&type=script&lang=js&



/* harmony default export */ var Brokervue_type_script_lang_js_ = ({
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  components: {
    AvatarSection: AvatarSection,
    VueTelInput: external_vue_tel_input_["VueTelInput"]
  },
  data() {
    return {
      options: [{
        text: 'Private Owner / Tenant',
        value: 'Private Owner / Tenant'
      }, {
        text: 'Broker',
        value: 'corporate'
      }],
      type: '',
      genderOptions: [{
        value: 'm',
        text: this.$t('form.genderOptions.male')
      }, {
        value: 'f',
        text: this.$t('form.genderOptions.female')
      }],
      gender: '',
      password: '',
      isAdd_Edit: false
    };
  },
  mounted() {
    if (this.form.type === 'corporate') {
      this.type = this.dir === 'ltr' ? 'Broker' : 'وسيط عقارى';
    } else {
      this.type = this.dir === 'ltr' ? 'Private Owner / Tenant' : 'مالك / مستأجر خاص';
    }
    if (this.dir === 'ltr') {
      this.options = [{
        text: 'Private Owner / Tenant',
        value: 'Private Owner / Tenant'
      }, {
        text: 'Broker',
        value: 'corporate'
      }];
    } else {
      this.options = [{
        text: 'مالك / مستأجر خاص',
        value: 'Private Owner / Tenant'
      }, {
        text: 'وسيط عقارى',
        value: 'corporate'
      }];
    }
  },
  computed: {
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    }
  },
  methods: {
    setSelectedOption(option) {
      if (this.type === option.text) {
        return;
      } else {
        this.type = option.text;
        this.updateProfile('type', option.value);
      }
    },
    setSelectedGender(option) {
      if (this.gender === option.text) {
        return;
      } else {
        this.gender = option.text;
        this.updateProfile('gender', option.value);
      }
    },
    updateProfile(prop, value) {
      this.$emit('updateProfile', prop, value);
    }
  }
});
// CONCATENATED MODULE: ./components/profile/Broker.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_Brokervue_type_script_lang_js_ = (Brokervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/profile/Broker.vue



function Broker_injectStyles (context) {
  
  var style0 = __webpack_require__(802)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Broker_component = Object(componentNormalizer["a" /* default */])(
  profile_Brokervue_type_script_lang_js_,
  Brokervue_type_template_id_7eb74675_render,
  Brokervue_type_template_id_7eb74675_staticRenderFns,
  false,
  Broker_injectStyles,
  null,
  "681541f8"
  
)

/* harmony default export */ var Broker = (Broker_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&


/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  components: {
    Normal_User: Normal_User,
    Broker: Broker
  },
  layout: 'dashboard',
  data() {
    return {
      timeout: null,
      form: {},
      loading: false,
      serverErrors: null,
      successMessage: null,
      userType: ''
    };
  },
  computed: {
    appEnv() {
      return this.$config.APP_ENV;
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    }
  },
  head() {
    return {
      title: `${this.dir === "ltr" ? "Profile Page" : "الصفحة الشخصية"} ${this.appEnv !== 'production' ? '| Staging' : ''}`,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.dir === "ltr" ? "Profile Page" : "الصفحة الشخصية"
      }]
    };
  },
  async created() {
    try {
      this.loading = true;
      const {
        Data
      } = await this.$axios.$get('/user/userDetails');
      this.form = Data;
      console.log(this.form);
      this.userType = Data.type;
      this.serverErrors = null;
      this.loading = false;
    } catch (error) {
      this.serverErrors = error.response.data.Data;
      this.loading = false;
    }
  },
  destroyed() {
    this.successMessage = null;
  },
  methods: {
    updateProfileHandler(prop, value) {
      // debouncing
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.form[prop] = value || '';
      }, 300);
    },
    async saveProfileHandler() {
      try {
        var _this$form$nationalit;
        if (this.form.type === 'corporate' && this.userType !== 'corporate') {
          const res = await this.$axios.$post('/user/corprate/changeType');
          if (res.Status === 200) {
            alert('Changed To Broker');
          }
        }
        this.loading = true;
        Object.entries(this.form).map(item => {
          if (!item[1] || item[1] == 'undefined') {
            this.$delete(this.form, item[0]);
          }
        });
        let formObj = null;
        formObj = {
          ...this.form
        };
        formObj.nationality = (_this$form$nationalit = this.form.nationality) === null || _this$form$nationalit === void 0 ? void 0 : _this$form$nationalit.replace(/ /g, '_');
        formObj[name] = this.form.full_name ? this.form.full_name : '';
        typeof formObj.avatar === 'string' ? delete formObj.avatar : null;
        const formData = new FormData();
        for (let key in formObj) {
          formData.append(key, this.form[key]);
        }
        const {
          Data
        } = await this.$axios.$post('/user/updateUser', formData);
        this.serverErrors = null;
        this.successMessage = Data.message;
        this.loading = false;
      } catch (error) {
        this.serverErrors = error.response.data;
        this.successMessage = null;
        this.loading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/profile/index.vue



function profile_injectStyles (context) {
  
  var style0 = __webpack_require__(804)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var profile_component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  profile_injectStyles,
  null,
  "fc4554a6"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (profile_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map