exports.ids = [49];
exports.modules = {

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner-image.6beed0d.webp";

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(834);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("c9ce82e8", content, true, context)
};

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(836);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("c906ef14", content, true, context)
};

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBannerMobile_vue_vue_type_style_index_0_id_7804d108_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(621);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBannerMobile_vue_vue_type_style_index_0_id_7804d108_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBannerMobile_vue_vue_type_style_index_0_id_7804d108_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBannerMobile_vue_vue_type_style_index_0_id_7804d108_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBannerMobile_vue_vue_type_style_index_0_id_7804d108_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.banner1{padding-top:2vw;height:70vh;display:flex;align-items:center;position:relative;background:#fff;background-size:cover;background-position:center;padding-bottom:48px}@media(max-width: 767.98px){.banner1{height:auto}}.banner1>.container .row .search-col{display:flex;flex-direction:column;align-items:center}.banner1>.container .row .search-col>.row{margin:auto}@media(max-width: 767.98px){.banner1>.container .row .search-col{margin-top:39px}}@media(max-width: 767.98px){.banner1>.container .row{align-items:flex-end}}@media(max-width: 767.98px){.banner1>.container .row__text-content{width:100%}}.banner1>.container .row .how-it-works{width:214px;height:60px;padding:20px;border-radius:20px;background-color:#fdd90f;font-size:18px;display:flex;align-items:center;justify-content:center;font-weight:bold;text-transform:capitalize;cursor:pointer}@media(max-width: 767.98px){.banner1>.container .row .how-it-works{width:fit-content;font-size:10px;padding:10px;height:30px}}.relatedSearchImg{height:15vw;width:15vw;border-radius:26%}.ar-back-btn{font-size:1.5rem}[dir=ltr] .ar-back-btn{display:none}[dir=rtl] .rotates{transform:rotate(180deg)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c8c22b1_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(622);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c8c22b1_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c8c22b1_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c8c22b1_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c8c22b1_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(340);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(516);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.home-main .banner-image-wrapper{height:100%}.home-main .banner-image-wrapper .banner-image{height:100%}.home-main .banner-image-wrapper .banner-image .banner-image-container{height:100%;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:contain;background-position:center;background-repeat:no-repeat}@media(max-width: 767.98px){.home-main .banner-image-wrapper .banner-image .banner-image-container{background-position:top}}.home-main .banner-image-wrapper.mobile-only{display:none}@media(max-width: 767.98px){.home-main .banner-image-wrapper.mobile-only{height:300px !important;display:block}.home-main .banner-image-wrapper.desktop-only{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/search-details/index.vue?vue&type=template&id=7c8c22b1&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "home-main"
  }, [_vm._ssrNode("<div class=\"home-front\">", "</div>", [_c('HomeBannerMobile')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/search-details/index.vue?vue&type=template&id=7c8c22b1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/home/HomeBannerMobile.vue?vue&type=template&id=7804d108&
var HomeBannerMobilevue_type_template_id_7804d108_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_vm._ssrNode("<div class=\"banner1 search-wrapper pt-0\">", "</div>", [_c('b-container', {
    staticClass: "h-100"
  }, [_c('b-row', {
    staticClass: "h-100"
  }, [_c('b-col', {
    staticClass: "mb-3",
    attrs: {
      "cols": "12",
      "lg": "12"
    }
  }, [_c('nuxt-link', {
    attrs: {
      "to": `/search`
    }
  }, [_c('svg-icon', {
    staticClass: "back is-mobile-device rotates",
    attrs: {
      "name": "back",
      "height": "24px"
    }
  })], 1)], 1), _vm._v(" "), _c('b-col', {
    staticClass: "align-self-end",
    attrs: {
      "cols": "12",
      "lg": "12"
    }
  }, [_c('SearchFieldMobile')], 1)], 1)], 1)], 1)]);
};
var HomeBannerMobilevue_type_template_id_7804d108_staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/HomeBannerMobile.vue?vue&type=template&id=7804d108&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/HomeBannerMobile.vue?vue&type=script&lang=js&
/* harmony default export */ var HomeBannerMobilevue_type_script_lang_js_ = ({
  name: 'HomeBannerMobile',
  components: {
    SearchFieldMobile: () => __webpack_require__.e(/* import() */ 52).then(__webpack_require__.bind(null, 978))
  },
  data() {
    return {
      order: 0
    };
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 767) {
        this.order = 1;
      } else {
        this.order = 0;
      }
    });
  }
});
// CONCATENATED MODULE: ./components/home/HomeBannerMobile.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_HomeBannerMobilevue_type_script_lang_js_ = (HomeBannerMobilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/home/HomeBannerMobile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(833)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_HomeBannerMobilevue_type_script_lang_js_,
  HomeBannerMobilevue_type_template_id_7804d108_render,
  HomeBannerMobilevue_type_template_id_7804d108_staticRenderFns,
  false,
  injectStyles,
  null,
  "6661562e"
  
)

/* harmony default export */ var HomeBannerMobile = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search-details/index.vue?vue&type=script&lang=js&

/* harmony default export */ var search_detailsvue_type_script_lang_js_ = ({
  components: {
    HomeBannerMobile: HomeBannerMobile
  },
  head() {
    return {
      title: 'Rentup Get the BEST Rent Deals for real estate in Egypt-Home'
    };
  }
});
// CONCATENATED MODULE: ./pages/search-details/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_search_detailsvue_type_script_lang_js_ = (search_detailsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/search-details/index.vue



function search_details_injectStyles (context) {
  
  var style0 = __webpack_require__(835)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var search_details_component = Object(componentNormalizer["a" /* default */])(
  pages_search_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  search_details_injectStyles,
  null,
  "0ebae1f5"
  
)

/* harmony default export */ var search_details = __webpack_exports__["default"] = (search_details_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map