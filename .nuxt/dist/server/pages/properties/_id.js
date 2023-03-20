exports.ids = [30];
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

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(351);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("96d3b12c", content, true, context)
};

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_d5be09ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(342);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_d5be09ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_d5be09ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_d5be09ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_style_index_0_id_d5be09ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(340);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(352);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-d5be09ac]{color:#204ecf}.dark-blue[data-v-d5be09ac]{color:#0f256e !important}.gray[data-v-d5be09ac]{color:#262d3d}.light-gray[data-v-d5be09ac]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-d5be09ac]{color:rgba(38,45,61,.32)}.black-light[data-v-d5be09ac]{color:#111}.btn.btn-outline-secondary[data-v-d5be09ac]{color:#333}label[data-v-d5be09ac]{text-transform:capitalize}.object-fit-cover[data-v-d5be09ac]{object-fit:cover}.object-fit-contain[data-v-d5be09ac]{object-fit:contain}.font-14[data-v-d5be09ac]{font-size:14px}.font-18[data-v-d5be09ac]{font-size:18px}.spacer-5[data-v-d5be09ac]{height:5px;width:100%;display:block}.spacer-10[data-v-d5be09ac]{height:10px;width:100%;display:block}.spacer-15[data-v-d5be09ac]{height:15px;width:100%;display:block}.spacer-20[data-v-d5be09ac]{height:20px;width:100%;display:block}.spacer-25[data-v-d5be09ac]{height:25px;width:100%;display:block}.spacer-30[data-v-d5be09ac]{height:30px;width:100%;display:block}.spacer-40[data-v-d5be09ac]{height:40px;width:100%;display:block}.spacer-50[data-v-d5be09ac]{height:50px;width:100%;display:block}.spacer-65[data-v-d5be09ac]{height:65px;width:100%;display:block}.spacer-100[data-v-d5be09ac]{height:100px;width:100%;display:block}.sb-wrapper[data-v-d5be09ac]{position:relative}.sb-wrapper .sb-button[data-v-d5be09ac]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-d5be09ac]{cursor:pointer}.sb-wrapper .sb-button[data-v-d5be09ac]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-d5be09ac]:focus{outline:1px solid}.m-end-2[data-v-d5be09ac]{margin-inline-end:10px}.breadcrumb[data-v-d5be09ac]{padding:.75rem 0rem;background:none;margin-bottom:0}.breadcrumb .breadcrumb-item[data-v-d5be09ac]{line-height:1;display:flex;align-items:center;text-transform:capitalize}[dir=rtl] .breadcrumb .breadcrumb-item.active[data-v-d5be09ac]{padding-right:.5rem;padding-left:0}.breadcrumb .breadcrumb-item+.breadcrumb-item[data-v-d5be09ac]::before{content:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");line-height:0}[dir=rtl] .breadcrumb .breadcrumb-item+.breadcrumb-item[data-v-d5be09ac]::before{float:right;padding-right:.5rem;color:#6c757d;transform:rotate(180deg)}.breadcrumb .breadcrumb-item[data-v-d5be09ac]:first-of-type::before{display:none}@media(max-width: 767.98px){.breadcrumb[data-v-d5be09ac]{padding:0;margin-bottom:0}.breadcrumb .breadcrumb-item[data-v-d5be09ac]:first-of-type::before{content:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");line-height:0;transform:rotate(180deg)}[dir=rtl] .breadcrumb .breadcrumb-item[data-v-d5be09ac]:first-of-type::before{color:#6c757d;transform:rotate(360deg)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgICA8Zz4NCiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyMHYyMEgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyMCkgcm90YXRlKC05MCkiLz4NCiAgICAgICAgPHBhdGggZmlsbD0iIzMzMyIgZD0iTTE0LjgyNSA4LjU5TDExIDEyLjQwNyA3LjE3NSA4LjU5IDYgOS43NjVsNSA1IDUtNXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjApIHJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtMSAtMS40MzIpIi8+DQogICAgPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/Breadcrumbs.vue?vue&type=template&id=d5be09ac&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-breadcrumb', {
    attrs: {
      "items": _vm.items
    }
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/Breadcrumbs.vue?vue&type=template&id=d5be09ac&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/Breadcrumbs.vue?vue&type=script&lang=js&
/* harmony default export */ var Breadcrumbsvue_type_script_lang_js_ = ({
  props: {
    items: {
      type: Array,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/shared/Breadcrumbs.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_Breadcrumbsvue_type_script_lang_js_ = (Breadcrumbsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/Breadcrumbs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(350)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_Breadcrumbsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d5be09ac",
  "0a1cd7a5"
  
)

/* harmony default export */ var Breadcrumbs = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(371);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5626b5be", content, true, context)
};

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(373);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6f961956", content, true, context)
};

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertySection.vue?vue&type=template&id=3feb67f0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "property-section"
  }, [_vm._ssrNode("<h4 class=\"property-section-title\" data-v-3feb67f0>", "</h4>", [_vm._t("title")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"property-section-body\" data-v-3feb67f0>", "</div>", [_vm._t("default")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/property-details/PropertySection.vue?vue&type=template&id=3feb67f0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertySection.vue?vue&type=script&lang=js&
/* harmony default export */ var PropertySectionvue_type_script_lang_js_ = ({
  name: 'PropertySection'
});
// CONCATENATED MODULE: ./components/property-details/PropertySection.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_details_PropertySectionvue_type_script_lang_js_ = (PropertySectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/property-details/PropertySection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(490)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  property_details_PropertySectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3feb67f0",
  "7764140a"
  
)

/* harmony default export */ var PropertySection = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(395);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3260be82", content, true, context)
};

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(397);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("69f06ebb", content, true, context)
};

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/PropertyCard.vue?vue&type=template&id=75917a6e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('nuxt-link', {
    class: _vm.isThankYouPage && 'thankyou-card',
    attrs: {
      "to": {
        path: !_vm.isHome ? _vm.localePath('/rent/' + _vm.cardData.property_slug) : _vm.localePath('/Dahab'),
        query: {
          term: _vm.term
        }
      }
    }
  }, [_c('div', {
    staticClass: "property-card"
  }, [_c('div', {
    staticClass: "image-wrapper"
  }, [typeof _vm.cardData.property_image[0] === 'string' ? _c('AppImage', {
    staticClass: "object-fit-cover bg-dark",
    attrs: {
      "src": _vm.cardData.property_image[0],
      "height": 202,
      "quality": 50
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "property-data"
  }, [_c('div', {
    staticClass: "favorite"
  }, [_c('b-button', {
    staticClass: "side-btn favourite-button",
    staticStyle: {
      "background-color": "transparent"
    },
    attrs: {
      "variant": "link"
    },
    on: {
      "click": function ($event) {
        return _vm.updateFavourite($event, _vm.cardData.property_id, _vm.cardData.term);
      }
    }
  }, [_c('svg-icon', {
    attrs: {
      "name": _vm.cardData.isFav ? 'grey-checked-heart' : 'grey-unchecked-heart',
      "fill": "#204ECF",
      "width": "24px",
      "height": "24px"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "property-card-details"
  }, [_c('h3', {
    staticClass: "location-details mb-2 alignment property-name"
  }, [_vm._v("\n          " + _vm._s(_vm._f("displayExcerpt")(_vm.cardData.property_name, 40)) + "\n        ")]), _vm._v(" "), _c('section', [_c('div', {
    staticClass: "d-flex justify-content-between flex-column"
  }, [_c('section', {
    staticClass: "actions-container"
  }, [_c('div', {
    staticClass: "action-item"
  }, [_c('svg-icon', {
    attrs: {
      "name": "grey-bed",
      "fill": "#0F256E"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "action-text"
  }, [_vm._v(_vm._s(_vm.cardData.no_of_bedroom) + "Bed")])], 1), _vm._v(" "), _c('div', {
    staticClass: "action-item"
  }, [_c('svg-icon', {
    attrs: {
      "name": "grey-bath",
      "fill": "#0F256E"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "action-text"
  }, [_vm._v(_vm._s(_vm.cardData.no_bathrooms) + "Bath")])], 1), _vm._v(" "), _c('div', {
    staticClass: "action-item"
  }, [_c('svg-icon', {
    attrs: {
      "name": "grey-area",
      "fill": "#0F256E"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "action-text"
  }, [_vm._v(_vm._s(_vm.cardData.property_area) + "M")]), _vm._v(" "), _c('span', {
    staticClass: "area-unit"
  }, [_vm._v("²")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "price m-0 d-flex",
    staticStyle: {
      "font-size": "16px"
    }
  }, [_c('span', {
    staticStyle: {
      "display": "flex",
      "justify-content": "space-between",
      "flex-wrap": "wrap"
    }
  }), _vm._v(" "), _c('div', {
    class: _vm.isThankYouPage && 'mt-2'
  }, [_c('span', {
    staticClass: "property-price"
  }, [_vm._v("\n                  " + _vm._s(_vm.longTerm ? `$ ${_vm.cardData.min_monthly_price} ${_vm.$t('common.egp')} - ${_vm.cardData.max_monthly_price} ${_vm.$t('common.egp')}` : ` ${_vm.cardData.min_daily_price} ${_vm.$t('common.egp')} - ${_vm.cardData.max_daily_price} ${_vm.$t('common.egp')}`) + "\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "font-size-smaller"
  }, [_vm._v("\n                  " + _vm._s(_vm.longTerm ? '/ ' + _vm.$t('common.month') : '/' + _vm.$t('common.night')) + "\n                ")])])])])])]), _vm._v(" "), !_vm.hideActions && !_vm.isThankYouPage ? _c('b-button', {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover.bottom",
      value: _vm.$t('property.compareTooltip'),
      expression: "$t('property.compareTooltip')",
      modifiers: {
        "hover": true,
        "bottom": true
      }
    }],
    staticClass: "compare-button compare-step",
    staticStyle: {
      "border": "0",
      "background-color": "transparent"
    },
    on: {
      "click": function ($event) {
        return _vm.sendProperty($event, _vm.cardData.property_id);
      }
    }
  }, [_c('span', {
    staticStyle: {
      "color": "#0b86e0",
      "font-size": "14px"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('property.compare')) + "\n        ")])]) : _vm._e()], 1)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/PropertyCard.vue?vue&type=template&id=75917a6e&scoped=true&

// EXTERNAL MODULE: ./components/shared/StarRateBox.vue + 4 modules
var StarRateBox = __webpack_require__(72);

// EXTERNAL MODULE: ./helpers/images.js
var helpers_images = __webpack_require__(73);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/PropertyCard.vue?vue&type=script&lang=js&



const {
  mapState
} = Object(external_vuex_["createNamespacedHelpers"])('PropertyModule');
/* harmony default export */ var PropertyCardvue_type_script_lang_js_ = ({
  name: 'PropertyCard',
  components: {
    StarRateBox: StarRateBox["a" /* default */]
  },
  props: ['cardData', 'hideActions', 'hideCompare', 'isHome', 'isThankYouPage'],
  data() {
    return {
      demoImg: 'https://picsum.photos/1024/480/?image=10',
      rating: null,
      lastSlideIndexLoaded: 0,
      generateServerImageUrl: helpers_images["c" /* generateServerImageUrl */],
      form: {
        offer_price: 0
      }
    };
  },
  computed: {
    ...mapState({
      termState: state => state.term,
      visibility: state => state.confirmationModal.visibility
    }),
    term() {
      let cardTerm = this.cardData.favourite_term == 1 ? 1 : 0;
      let term = this.$route.query.term ? this.termState : cardTerm;
      return term;
    },
    longTerm() {
      return this.term == 1;
    },
    shortTerm() {
      return this.term == 0;
    },
    bidId() {
      return this.$store.state.PropertyModule.bidId;
    },
    propertyRating() {
      return this.cardData.property_rating.toFixed(1);
    }
  },
  methods: {
    gtag_report_conversion(url) {
      var callback = function () {
        if (typeof url != 'undefined') {
          window.location = url;
        }
      };
      gtag('event', 'conversion', {
        send_to: 'AW-10826966991/6eLyCJrx54sDEM_P2aoo',
        event_callback: callback
      });
      return false;
    },
    sendProperty(e, id) {
      e.preventDefault();
      this.$emit('update', {
        id,
        term: this.term
      });
    },
    sendOffer(cardData) {
      const formData = {
        ...cardData,
        ...this.form
      };
      this.$emit('showSendOfferModal', formData);
      this.gtag_report_conversion();
    },
    updateFavourite(e, property_id) {
      e.preventDefault();
      this.$emit('updateFavouriteProperty', {
        property_id: property_id,
        term: this.term
      });
    },
    onCarouselSlidingStart(slide) {
      this.lastSlideIndexLoaded = slide > this.lastSlideIndexLoaded ? slide : this.lastSlideIndexLoaded;
    },
    goToPropertyDetails() {
      this.$router.push('/rent/' + this.cardData.property_slug + '#property-reviews-section');
    }
  },
  watch: {
    bidId(newVal) {
      if (newVal == this.cardData.property_id) {
        this.$refs.offerBtn.click();
      }
    },
    visibility: {
      handler(value) {
        if (!value) {
          this.form.offer_price = 0;
        }
      },
      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./components/shared/PropertyCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_PropertyCardvue_type_script_lang_js_ = (PropertyCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/PropertyCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(370)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(372)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_PropertyCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "75917a6e",
  "17d80e00"
  
)

/* harmony default export */ var PropertyCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_0_id_75917a6e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(355);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_0_id_75917a6e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_0_id_75917a6e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_0_id_75917a6e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_0_id_75917a6e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.property-card .input-postfix{font-size:12px !important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_1_id_75917a6e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(356);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_1_id_75917a6e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_1_id_75917a6e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_1_id_75917a6e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_1_id_75917a6e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-75917a6e]{color:#204ecf}.dark-blue[data-v-75917a6e]{color:#0f256e !important}.gray[data-v-75917a6e]{color:#262d3d}.light-gray[data-v-75917a6e]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-75917a6e]{color:rgba(38,45,61,.32)}.black-light[data-v-75917a6e]{color:#111}.btn.btn-outline-secondary[data-v-75917a6e]{color:#333}label[data-v-75917a6e]{text-transform:capitalize}.object-fit-cover[data-v-75917a6e]{object-fit:cover}.object-fit-contain[data-v-75917a6e]{object-fit:contain}.font-14[data-v-75917a6e]{font-size:14px}.font-18[data-v-75917a6e]{font-size:18px}.spacer-5[data-v-75917a6e]{height:5px;width:100%;display:block}.spacer-10[data-v-75917a6e]{height:10px;width:100%;display:block}.spacer-15[data-v-75917a6e]{height:15px;width:100%;display:block}.spacer-20[data-v-75917a6e]{height:20px;width:100%;display:block}.spacer-25[data-v-75917a6e]{height:25px;width:100%;display:block}.spacer-30[data-v-75917a6e]{height:30px;width:100%;display:block}.spacer-40[data-v-75917a6e]{height:40px;width:100%;display:block}.spacer-50[data-v-75917a6e]{height:50px;width:100%;display:block}.spacer-65[data-v-75917a6e]{height:65px;width:100%;display:block}.spacer-100[data-v-75917a6e]{height:100px;width:100%;display:block}.sb-wrapper[data-v-75917a6e]{position:relative}.sb-wrapper .sb-button[data-v-75917a6e]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-75917a6e]{cursor:pointer}.sb-wrapper .sb-button[data-v-75917a6e]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-75917a6e]:focus{outline:1px solid}.m-end-2[data-v-75917a6e]{margin-inline-end:10px}.property-card[data-v-75917a6e]{margin-bottom:20px;overflow:hidden;display:flex;flex-direction:row;justify-content:flex-start;gap:10px;border-bottom:1px solid #c3c3c3}.property-card .image-wrapper img[data-v-75917a6e]{width:86px;height:86px}.property-card .property-data .favorite[data-v-75917a6e]{position:absolute;top:0;right:0}.property-card .property-data .favorite .btn[data-v-75917a6e]{padding:0}.property-card .property-data .compare-button.btn[data-v-75917a6e]{background-color:#fff !important;padding:5px 0 !important;font-weight:400;font-size:14px;line-height:16px;color:#204ecf;border-radius:8px;border:1px solid #c3c3c3}.property-card .property-card-details .btn[data-v-75917a6e]{text-transform:capitalize}.property-card .property-card-details svg[data-v-75917a6e]{width:18px;height:18px}.property-card .property-card-details p[data-v-75917a6e]{font-size:12px}.property-card .property-card-details p.price[data-v-75917a6e]{font-size:18px;font-weight:800}.property-card .property-card-details .location-details[data-v-75917a6e]{font-size:14px;color:#333}.property-card .property-card-details .property-name[data-v-75917a6e]{font-weight:600;font-size:16px;line-height:24px;display:flex;align-items:center;color:#0f256e}.property-card .property-card-details .property-price[data-v-75917a6e]{font-weight:600;font-size:16px;line-height:24px;color:#262d3d}.property-card .rating-box[data-v-75917a6e]{cursor:pointer}.property-card .actions-container[data-v-75917a6e]{display:flex;justify-content:flex-start;flex-direction:row;gap:10px;align-items:baseline}.property-card .actions-container .action-item[data-v-75917a6e]{display:flex;flex-direction:row;align-items:center;padding:8px 12px;gap:2px;height:30px;background:linear-gradient(0deg, rgba(38, 45, 61, 0.04), rgba(38, 45, 61, 0.04)),#fff;border-radius:8px}.property-card .actions-container .action-item .action-text[data-v-75917a6e]{color:#0f256e;font-weight:400;font-size:12px}.property-card .actions-container .action-item .area-unit[data-v-75917a6e]{text-transform:uppercase;color:inherit}@media(max-width: 767.98px){.property-card[data-v-75917a6e]{padding-bottom:15px}}@media only screen and (min-width: 1024px){.property-card[data-v-75917a6e]{flex-direction:column;justify-content:flex-start;border:none}.property-card .image-wrapper img[data-v-75917a6e]{width:100%;height:197px}.property-card .property-data .favorite[data-v-75917a6e]{right:20px;background-color:#fff;top:5px;height:32px;width:32px;box-shadow:0px 4px 8px rgba(0,0,0,.12);padding:4px}.property-card .property-data .favorite button[data-v-75917a6e]{width:100%;height:100%}.thankyou-card[data-v-75917a6e]{display:block;background-color:#fff;border-radius:4px}.thankyou-card .image-wrapper img[data-v-75917a6e]{border-radius:4px}.thankyou-card .property-data[data-v-75917a6e]{padding:10px 10px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(420);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("44b6d794", content, true, context)
};

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(422);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("746e0b95", content, true, context)
};

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyBidDetails_vue_vue_type_style_index_0_id_42492824_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(362);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyBidDetails_vue_vue_type_style_index_0_id_42492824_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyBidDetails_vue_vue_type_style_index_0_id_42492824_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyBidDetails_vue_vue_type_style_index_0_id_42492824_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyBidDetails_vue_vue_type_style_index_0_id_42492824_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-42492824]{color:#204ecf}.dark-blue[data-v-42492824]{color:#0f256e !important}.gray[data-v-42492824]{color:#262d3d}.light-gray[data-v-42492824]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-42492824]{color:rgba(38,45,61,.32)}.black-light[data-v-42492824]{color:#111}.btn.btn-outline-secondary[data-v-42492824]{color:#333}label[data-v-42492824]{text-transform:capitalize}.object-fit-cover[data-v-42492824]{object-fit:cover}.object-fit-contain[data-v-42492824]{object-fit:contain}.font-14[data-v-42492824]{font-size:14px}.font-18[data-v-42492824]{font-size:18px}.spacer-5[data-v-42492824]{height:5px;width:100%;display:block}.spacer-10[data-v-42492824]{height:10px;width:100%;display:block}.spacer-15[data-v-42492824]{height:15px;width:100%;display:block}.spacer-20[data-v-42492824]{height:20px;width:100%;display:block}.spacer-25[data-v-42492824]{height:25px;width:100%;display:block}.spacer-30[data-v-42492824]{height:30px;width:100%;display:block}.spacer-40[data-v-42492824]{height:40px;width:100%;display:block}.spacer-50[data-v-42492824]{height:50px;width:100%;display:block}.spacer-65[data-v-42492824]{height:65px;width:100%;display:block}.spacer-100[data-v-42492824]{height:100px;width:100%;display:block}.sb-wrapper[data-v-42492824]{position:relative}.sb-wrapper .sb-button[data-v-42492824]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-42492824]{cursor:pointer}.sb-wrapper .sb-button[data-v-42492824]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-42492824]:focus{outline:1px solid}.m-end-2[data-v-42492824]{margin-inline-end:10px}[data-v-42492824]  #confirmation-modal{background:rgba(0,0,0,.2)}[data-v-42492824]  #confirmation-modal.modal{display:flex !important;height:100%}[data-v-42492824]  #confirmation-modal .modal-footer,[data-v-42492824]  #confirmation-modal .modal-header,[data-v-42492824]  #confirmation-modal .modal-body{align-items:center;border:0px !important;padding:25px;justify-content:space-between}[data-v-42492824]  #confirmation-modal .modal-header,[data-v-42492824]  #confirmation-modal .modal-body{padding-bottom:0}[data-v-42492824]  #confirmation-modal .modal-dialog{max-width:551px;margin:auto}[data-v-42492824]  #confirmation-modal .modal-title{font-size:18px;font-weight:700;margin:0px}[data-v-42492824]  #confirmation-modal .close-button{background:none;border:none;margin:0px;padding:0px;line-height:1}[data-v-42492824]  #confirmation-modal .modal-content{border-radius:0}[data-v-42492824]  #confirmation-modal .offer-info{display:flex;flex-direction:row;margin-bottom:8px;justify-content:space-between;font-size:12px;padding:0px}[data-v-42492824]  #confirmation-modal .offer-info .offer-info-title{color:#989898}[data-v-42492824]  #confirmation-modal .offer-info.offer-info-total{padding-top:13px;padding-bottom:13px;margin-top:10px;border-top:1px solid #c3c3c3;border-bottom:1px solid #c3c3c3;font-weight:bold}[data-v-42492824]  #confirmation-modal .offer-info.offer-info-total .offer-info-title{color:#333}[data-v-42492824]  #confirmation-modal .notes-for-landlord{margin:15px 0 0;padding:0px}[data-v-42492824]  #confirmation-modal .notes-for-landlord textarea{width:100%;min-width:100%;min-height:70px}[data-v-42492824]  #confirmation-modal .notes-for-landlord .modal-actions{display:flex;justify-content:flex-end;margin:0}[data-v-42492824]  #confirmation-modal .sendoffer{padding:8px 14px;font-size:14px;font-weight:400;background-color:#0080fd;border-color:#0080fd;color:#fff}[data-v-42492824]  #confirmation-modal svg{width:24px;height:24px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AmenityOption_vue_vue_type_style_index_0_id_17417d33_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(363);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AmenityOption_vue_vue_type_style_index_0_id_17417d33_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AmenityOption_vue_vue_type_style_index_0_id_17417d33_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AmenityOption_vue_vue_type_style_index_0_id_17417d33_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AmenityOption_vue_vue_type_style_index_0_id_17417d33_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-17417d33]{color:#204ecf}.dark-blue[data-v-17417d33]{color:#0f256e !important}.gray[data-v-17417d33]{color:#262d3d}.light-gray[data-v-17417d33]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-17417d33]{color:rgba(38,45,61,.32)}.black-light[data-v-17417d33]{color:#111}.btn.btn-outline-secondary[data-v-17417d33]{color:#333}label[data-v-17417d33]{text-transform:capitalize}.object-fit-cover[data-v-17417d33]{object-fit:cover}.object-fit-contain[data-v-17417d33]{object-fit:contain}.font-14[data-v-17417d33]{font-size:14px}.font-18[data-v-17417d33]{font-size:18px}.spacer-5[data-v-17417d33]{height:5px;width:100%;display:block}.spacer-10[data-v-17417d33]{height:10px;width:100%;display:block}.spacer-15[data-v-17417d33]{height:15px;width:100%;display:block}.spacer-20[data-v-17417d33]{height:20px;width:100%;display:block}.spacer-25[data-v-17417d33]{height:25px;width:100%;display:block}.spacer-30[data-v-17417d33]{height:30px;width:100%;display:block}.spacer-40[data-v-17417d33]{height:40px;width:100%;display:block}.spacer-50[data-v-17417d33]{height:50px;width:100%;display:block}.spacer-65[data-v-17417d33]{height:65px;width:100%;display:block}.spacer-100[data-v-17417d33]{height:100px;width:100%;display:block}.sb-wrapper[data-v-17417d33]{position:relative}.sb-wrapper .sb-button[data-v-17417d33]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-17417d33]{cursor:pointer}.sb-wrapper .sb-button[data-v-17417d33]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-17417d33]:focus{outline:1px solid}.m-end-2[data-v-17417d33]{margin-inline-end:10px}.amenity-option-container[data-v-17417d33]{margin-bottom:40px}[dir=rtl] .amenity-option-container.custom-checkbox[data-v-17417d33]{padding-right:1.5rem;padding-left:0}[dir=rtl] .amenity-option-container .custom-control-label[data-v-17417d33]::before,[dir=rtl] .amenity-option-container .custom-control-label[data-v-17417d33]::after{right:-1.5rem}.amenity-option-container .amenity-option-subcontainer[data-v-17417d33]{padding:8px 12px;background:linear-gradient(0deg, rgba(38, 45, 61, 0.04), rgba(38, 45, 61, 0.04)),#fff;border-radius:8px}[dir=ltr] .amenity-option-container .amenity-option-subcontainer[data-v-17417d33]{direction:ltr}.amenity-option-container .amenity-option-subcontainer img[data-v-17417d33]{width:28px;height:28px}.amenity-option-container .amenity-option-subcontainer p[data-v-17417d33]{font-weight:400;font-size:12px;line-height:14px;color:#5e696f;margin:4.9px 0 .6px 11.1px}[dir=rtl] .amenity-option-container .amenity-option-subcontainer p[data-v-17417d33]{margin:.9px 11.1px .6px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyBidDetails.vue?vue&type=template&id=42492824&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-modal', {
    ref: "confirmation-modal",
    attrs: {
      "id": "confirmation-modal"
    },
    on: {
      "hidden": _vm.onCloseModal
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function () {
        return [_c('h3', {
          staticClass: "modal-title"
        }, [_vm._v("\n      " + _vm._s(_vm.confirmData.offerInfo.property_name) + "\n    ")]), _vm._v(" "), _c('b-button', {
          staticClass: "close-button",
          attrs: {
            "size": "sm"
          },
          on: {
            "click": _vm.onCloseModal
          }
        }, [_c('svg-icon', {
          attrs: {
            "name": "close-black"
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "default",
      fn: function () {
        return [_c('b-row', {
          staticClass: "m-0"
        }, [_c('transition', {
          attrs: {
            "name": "slide"
          }
        }, [_vm.serverErrors && _vm.serverErrors.Data ? _c('b-alert', {
          attrs: {
            "show": "",
            "variant": "danger"
          }
        }, [_c('p', {
          staticStyle: {
            "text-align": "center"
          }
        }, [_vm._v(_vm._s(_vm.serverErrors.Data['message']))])]) : _vm._e()], 1), _vm._v(" "), _c('b-col', {
          staticClass: "offer-info",
          attrs: {
            "md": "12"
          }
        }, [_c('div', {
          staticClass: "offer-info-title"
        }, [_vm._v("\n          " + _vm._s(_vm.$t('common.yourOffer')) + " " + _vm._s(_vm.$t('common.price')) + "\n          " + _vm._s(_vm.longTerm ? '/' + _vm.$t('common.month') : '/' + _vm.$t('common.night')) + "\n        ")]), _vm._v(" "), _c('div', {
          staticClass: "offer-info-value"
        }, [_vm._v("\n          " + _vm._s(_vm.confirmData.form.budget) + "\n          " + _vm._s(_vm.$t('common.egp')) + "\n          " + _vm._s(_vm.longTerm ? '/' + _vm.$t('common.month') : '/' + _vm.$t('common.night')) + "\n        ")])]), _vm._v(" "), _c('b-col', {
          staticClass: "offer-info",
          attrs: {
            "md": "12"
          }
        }, [_c('div', {
          staticClass: "offer-info-title"
        }, [_vm._v("\n          " + _vm._s(_vm.$t('common.offerDuration')) + "\n        ")]), _vm._v(" "), _c('div', {
          staticClass: "offer-info-value"
        }, [_vm._v("\n          " + _vm._s(_vm.confirmData.form.duration) + "\n          " + _vm._s(_vm.longTerm ? _vm.$t('common.month') : _vm.$t('common.night')) + "\n        ")])]), _vm._v(" "), _vm.shortTerm ? _c('b-col', {
          staticClass: "offer-info",
          attrs: {
            "md": "12"
          }
        }, [_c('div', {
          staticClass: "offer-info-title"
        }, [_vm._v("\n          " + _vm._s(_vm.$t('common.dateRange')) + "\n        ")]), _vm._v(" "), _c('div', {
          staticClass: "offer-info-value"
        }, [_vm._v("\n          " + _vm._s(_vm._f("formatDate")(_vm.confirmData.form.move_in_date)) + " :\n          " + _vm._s(_vm._f("formatDate")(_vm.confirmData.form.move_out_date)) + "\n        ")])]) : _vm._e(), _vm._v(" "), _c('b-col', {
          staticClass: "offer-info",
          attrs: {
            "md": "12"
          }
        }, [_c('div', {
          staticClass: "offer-info-title"
        }, [_vm._v("\n          " + _vm._s(_vm.$t('common.dateRangeFlexibility')) + "\n        ")]), _vm._v(" "), _c('div', {
          staticClass: "offer-info-value"
        }, [_vm._v("\n          " + _vm._s(_vm.confirmData.form.is_date_flexible ? _vm.$t('common.yes') : _vm.$t('common.no')) + "\n        ")])]), _vm._v(" "), _c('b-col', {
          staticClass: "offer-info",
          attrs: {
            "md": "12"
          }
        }, [_c('div', {
          staticClass: "offer-info-title"
        }, [_vm._v("\n          " + _vm._s(_vm.$t('common.guests')) + "\n        ")]), _vm._v(" "), _c('div', {
          staticClass: "offer-info-value"
        }, [_vm._v("\n          " + _vm._s(_vm.confirmData.form.num_adult) + " " + _vm._s(_vm.$t('common.adult')) + " &\n          " + _vm._s(_vm.confirmData.form.num_children) + "\n          " + _vm._s(_vm.$t('common.children')) + "\n        ")])]), _vm._v(" "), _c('b-col', {
          staticClass: "offer-info offer-info-total",
          attrs: {
            "md": "12"
          }
        }, [_c('div', {
          staticClass: "offer-info-title"
        }, [_vm._v("\n          " + _vm._s(_vm.$t('common.total_amount')) + " : (" + _vm._s(_vm.confirmData.form.duration) + "\n          " + _vm._s(_vm.longTerm ? _vm.$t('common.month') : _vm.$t('common.night')) + "\n          * " + _vm._s(_vm.confirmData.form.budget) + " " + _vm._s(_vm.$t('common.egp')) + ")\n        ")]), _vm._v(" "), _c('div', {
          staticClass: "offer-info-value"
        }, [_vm._v("\n          " + _vm._s(_vm.confirmData.totalOffer) + "\n          " + _vm._s(_vm.$t('common.egp')) + "\n        ")])])], 1)];
      },
      proxy: true
    }, {
      key: "modal-footer",
      fn: function () {
        return [_c('div', {
          staticClass: "modal-actions"
        }, [_c('b-button', {
          staticClass: "sendoffer btn btn-primary",
          attrs: {
            "disabled": _vm.submitingLoading,
            "type": "submit"
          },
          on: {
            "click": _vm.submit
          }
        }, [_vm._v("\n        " + _vm._s(_vm.$t('common.sendOffer')) + "\n      ")])], 1)];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showModel,
      callback: function ($$v) {
        _vm.showModel = $$v;
      },
      expression: "showModel"
    }
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/property-details/PropertyBidDetails.vue?vue&type=template&id=42492824&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyBidDetails.vue?vue&type=script&lang=js&

const {
  mapState,
  mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('PropertyModule');
const {
  mapState: mapUserState
} = Object(external_vuex_["createNamespacedHelpers"])('UserModule');
/* harmony default export */ var PropertyBidDetailsvue_type_script_lang_js_ = ({
  name: 'PropertyBidDetails',
  data() {
    return {
      notes: '',
      submitingLoading: false,
      showModel: false
    };
  },
  mounted() {
    this.$eventBus.$on('on-user-loggedIn', () => {
      this.submit();
    });
  },
  computed: {
    ...mapState({
      visibility: state => state.confirmationModal.visibility
    }),
    ...mapState({
      confirmData: state => state.confirmationModal.data
    }),
    ...mapState({
      serverErrors: state => state.serverErrors
    }),
    ...mapUserState(['user']),
    term() {
      return this.confirmData.form.term;
    },
    longTerm() {
      return this.term == 1;
    },
    shortTerm() {
      return this.term == 0;
    }
  },
  watch: {
    visibility(newVal) {
      newVal ? this.$refs['confirmation-modal'].show() : this.$refs['confirmation-modal'].hide();
    }
  },
  beforeDestroy() {
    this.hideConfirmationModal();
  },
  methods: {
    ...mapActions(['hideConfirmationModal', 'sendOffer', 'hideSendOfferModal']),
    onCloseModal() {
      this.hideConfirmationModal();
    },
    submit() {
      var self = this;
      let requestBody = {};
      if (this.longTerm) {
        const {
          move_in_date,
          move_out_date,
          ...otherProperties
        } = JSON.parse(JSON.stringify(this.confirmData.form));
        requestBody = otherProperties;
      } else {
        requestBody = JSON.parse(JSON.stringify(this.confirmData.form));
      }
      if (this.notes != '') {
        this.$set(requestBody, 'notes', this.notes);
      }
      requestBody.type = 0;
      if (!this.user) {
        this.$store.dispatch('AuthModule/showAuthModal', {}, {
          root: true
        });
        return;
      } else {
        this.submitingLoading = true;
        this.$axios.$post('/requests', requestBody).then(() => {
          this.notes = '';
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'offer-sent',
            'unit-id': requestBody.property_id,
            price: requestBody.budget,
            duration: requestBody.duration
          });
        }).finally(() => {
          this.$bvModal.show('success-modal');
          setTimeout(() => {
            this.showModel = false;
            this.hideSendOfferModal();
            this.$refs['confirmation-modal'].hide();
            this.$bvModal.hide('success-modal');
          }, 2000);
          this.submitingLoading = false;
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./components/property-details/PropertyBidDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_details_PropertyBidDetailsvue_type_script_lang_js_ = (PropertyBidDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/property-details/PropertyBidDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(394)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  property_details_PropertyBidDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "42492824",
  "6be6ba70"
  
)

/* harmony default export */ var PropertyBidDetails = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/AmenityOption.vue?vue&type=template&id=17417d33&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "amenity-option-container",
    class: {
      'custom-control custom-checkbox': _vm.hasCheckbox
    }
  }, [_vm._ssrNode((_vm.hasCheckbox ? "<input type=\"checkbox\" name=\"checkbox-amenity\"" + _vm._ssrAttr("id", _vm.amenity.id) + _vm._ssrAttr("value", _vm.amenity) + _vm._ssrAttr("checked", Array.isArray(_vm.checkedValue) ? _vm._i(_vm.checkedValue, _vm.amenity) > -1 : _vm.checkedValue) + " class=\"custom-control-input checkbox-amenity\" data-v-17417d33>" : "<!---->") + " "), _vm._ssrNode("<label" + _vm._ssrAttr("for", _vm.amenity.id) + _vm._ssrClass(null, {
    'custom-control-label': _vm.hasCheckbox
  }) + " data-v-17417d33>", "</label>", [_vm._ssrNode("<div class=\"d-flex amenity-option-subcontainer\" data-v-17417d33>", "</div>", [_c('AppImage', {
    attrs: {
      "withoutCompression": "",
      "src": _vm.amenity.icon
    }
  }), _vm._ssrNode(" <p data-v-17417d33>" + _vm._ssrEscape("\n        " + _vm._s(_vm.amenity.amenity) + "\n      ") + "</p>")], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/AmenityOption.vue?vue&type=template&id=17417d33&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/AmenityOption.vue?vue&type=script&lang=js&
/* harmony default export */ var AmenityOptionvue_type_script_lang_js_ = ({
  name: 'AmenityOption',
  props: {
    amenity: {
      type: Object,
      required: true
    },
    value: {
      // this prop for v-model
      type: Array,
      required: false
    },
    hasCheckbox: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    emitInputEvent(value) {
      this.$emit('input', value);
    }
  },
  computed: {
    checkedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.emitInputEvent(value);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/shared/AmenityOption.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_AmenityOptionvue_type_script_lang_js_ = (AmenityOptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/AmenityOption.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(396)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_AmenityOptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "17417d33",
  "18b93123"
  
)

/* harmony default export */ var AmenityOption = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(489);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("49b9141c", content, true, context)
};

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(491);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("267f7f8b", content, true, context)
};

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(493);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("013efdfc", content, true, context)
};

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(495);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("48f5177c", content, true, context)
};

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyAmenities_vue_vue_type_style_index_0_id_4c52bba9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyAmenities_vue_vue_type_style_index_0_id_4c52bba9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyAmenities_vue_vue_type_style_index_0_id_4c52bba9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyAmenities_vue_vue_type_style_index_0_id_4c52bba9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyAmenities_vue_vue_type_style_index_0_id_4c52bba9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-4c52bba9]{color:#204ecf}.dark-blue[data-v-4c52bba9]{color:#0f256e !important}.gray[data-v-4c52bba9]{color:#262d3d}.light-gray[data-v-4c52bba9]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-4c52bba9]{color:rgba(38,45,61,.32)}.black-light[data-v-4c52bba9]{color:#111}.btn.btn-outline-secondary[data-v-4c52bba9]{color:#333}label[data-v-4c52bba9]{text-transform:capitalize}.object-fit-cover[data-v-4c52bba9]{object-fit:cover}.object-fit-contain[data-v-4c52bba9]{object-fit:contain}.font-14[data-v-4c52bba9]{font-size:14px}.font-18[data-v-4c52bba9]{font-size:18px}.spacer-5[data-v-4c52bba9]{height:5px;width:100%;display:block}.spacer-10[data-v-4c52bba9]{height:10px;width:100%;display:block}.spacer-15[data-v-4c52bba9]{height:15px;width:100%;display:block}.spacer-20[data-v-4c52bba9]{height:20px;width:100%;display:block}.spacer-25[data-v-4c52bba9]{height:25px;width:100%;display:block}.spacer-30[data-v-4c52bba9]{height:30px;width:100%;display:block}.spacer-40[data-v-4c52bba9]{height:40px;width:100%;display:block}.spacer-50[data-v-4c52bba9]{height:50px;width:100%;display:block}.spacer-65[data-v-4c52bba9]{height:65px;width:100%;display:block}.spacer-100[data-v-4c52bba9]{height:100px;width:100%;display:block}.sb-wrapper[data-v-4c52bba9]{position:relative}.sb-wrapper .sb-button[data-v-4c52bba9]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-4c52bba9]{cursor:pointer}.sb-wrapper .sb-button[data-v-4c52bba9]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-4c52bba9]:focus{outline:1px solid}.m-end-2[data-v-4c52bba9]{margin-inline-end:10px}.property-section[data-v-4c52bba9]{padding-bottom:0}.amenities-container p[data-v-4c52bba9]{font-size:16px;font-weight:600}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyAmenities_vue_vue_type_style_index_1_id_4c52bba9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(385);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyAmenities_vue_vue_type_style_index_1_id_4c52bba9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyAmenities_vue_vue_type_style_index_1_id_4c52bba9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyAmenities_vue_vue_type_style_index_1_id_4c52bba9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyAmenities_vue_vue_type_style_index_1_id_4c52bba9_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-4c52bba9]{color:#204ecf}.dark-blue[data-v-4c52bba9]{color:#0f256e !important}.gray[data-v-4c52bba9]{color:#262d3d}.light-gray[data-v-4c52bba9]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-4c52bba9]{color:rgba(38,45,61,.32)}.black-light[data-v-4c52bba9]{color:#111}.btn.btn-outline-secondary[data-v-4c52bba9]{color:#333}label[data-v-4c52bba9]{text-transform:capitalize}.object-fit-cover[data-v-4c52bba9]{object-fit:cover}.object-fit-contain[data-v-4c52bba9]{object-fit:contain}.font-14[data-v-4c52bba9]{font-size:14px}.font-18[data-v-4c52bba9]{font-size:18px}.spacer-5[data-v-4c52bba9]{height:5px;width:100%;display:block}.spacer-10[data-v-4c52bba9]{height:10px;width:100%;display:block}.spacer-15[data-v-4c52bba9]{height:15px;width:100%;display:block}.spacer-20[data-v-4c52bba9]{height:20px;width:100%;display:block}.spacer-25[data-v-4c52bba9]{height:25px;width:100%;display:block}.spacer-30[data-v-4c52bba9]{height:30px;width:100%;display:block}.spacer-40[data-v-4c52bba9]{height:40px;width:100%;display:block}.spacer-50[data-v-4c52bba9]{height:50px;width:100%;display:block}.spacer-65[data-v-4c52bba9]{height:65px;width:100%;display:block}.spacer-100[data-v-4c52bba9]{height:100px;width:100%;display:block}.sb-wrapper[data-v-4c52bba9]{position:relative}.sb-wrapper .sb-button[data-v-4c52bba9]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-4c52bba9]{cursor:pointer}.sb-wrapper .sb-button[data-v-4c52bba9]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-4c52bba9]:focus{outline:1px solid}.m-end-2[data-v-4c52bba9]{margin-inline-end:10px}[data-v-4c52bba9]  .nav-tabs{border:0;padding:0}[data-v-4c52bba9]  .nav-item a{font-weight:600;font-size:16px;line-height:24px;display:flex;align-items:center;color:#b9bbc1;background:transparent}@media(max-width: 991.98px){[data-v-4c52bba9]  .nav-item a{font-size:12px}}[data-v-4c52bba9]  .nav-link.active{padding:8px;background:#0078ff;border-radius:8px;color:#fff}@media(max-width: 991.98px){[data-v-4c52bba9]  .nav-link.active{padding:1px 5px}}@media(max-width: 991.98px){[data-v-4c52bba9]  .nav-link{padding:1px 5px}}@media(max-width: 991.98px){[data-v-4c52bba9]  .tab-content>.active{display:flex;gap:3px;flex-direction:column}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(510);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3e409b9a", content, true, context)
};

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(513);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("470093fa", content, true, context)
};

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(528);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0e2a198a", content, true, context)
};

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(530);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1b90e562", content, true, context)
};

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyAmenities.vue?vue&type=template&id=4c52bba9&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-tabs', {
    attrs: {
      "content-class": "mt-3"
    }
  }, _vm._l(_vm.amenitiesCategories, function (amenities, categoryName) {
    return _c('b-tab', {
      key: categoryName,
      attrs: {
        "title": categoryName,
        "active": ""
      }
    }, _vm._l(amenities, function (amenity) {
      return _c('b-col', {
        key: amenity.id,
        staticClass: "d-inline-block p-0 col-md-4 col-6",
        class: {
          'col-md-6': _vm.messaging
        }
      }, [_c('AmenityOption', {
        attrs: {
          "amenity": amenity
        }
      })], 1);
    }), 1);
  }), 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/property-details/PropertyAmenities.vue?vue&type=template&id=4c52bba9&scoped=true&

// EXTERNAL MODULE: ./components/shared/AmenityOption.vue + 4 modules
var AmenityOption = __webpack_require__(401);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyAmenities.vue?vue&type=script&lang=js&

/* harmony default export */ var PropertyAmenitiesvue_type_script_lang_js_ = ({
  name: 'PropertyAmenities',
  components: {
    AmenityOption: AmenityOption["a" /* default */]
  },
  props: {
    amenitiesCategories: {
      required: true
    },
    messaging: {
      type: Boolean
    }
  },
  data() {
    return {
      hasCheckbox: true
    };
  }
});
// CONCATENATED MODULE: ./components/property-details/PropertyAmenities.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_details_PropertyAmenitiesvue_type_script_lang_js_ = (PropertyAmenitiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/property-details/PropertyAmenities.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(419)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(421)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  property_details_PropertyAmenitiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4c52bba9",
  "738db1fc"
  
)

/* harmony default export */ var PropertyAmenities = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyGallery_vue_vue_type_style_index_0_id_58f40e51_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(415);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyGallery_vue_vue_type_style_index_0_id_58f40e51_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyGallery_vue_vue_type_style_index_0_id_58f40e51_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyGallery_vue_vue_type_style_index_0_id_58f40e51_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyGallery_vue_vue_type_style_index_0_id_58f40e51_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-58f40e51]{color:#204ecf}.dark-blue[data-v-58f40e51]{color:#0f256e !important}.gray[data-v-58f40e51]{color:#262d3d}.light-gray[data-v-58f40e51]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-58f40e51]{color:rgba(38,45,61,.32)}.black-light[data-v-58f40e51]{color:#111}.btn.btn-outline-secondary[data-v-58f40e51]{color:#333}label[data-v-58f40e51]{text-transform:capitalize}.object-fit-cover[data-v-58f40e51]{object-fit:cover}.object-fit-contain[data-v-58f40e51]{object-fit:contain}.font-14[data-v-58f40e51]{font-size:14px}.font-18[data-v-58f40e51]{font-size:18px}.spacer-5[data-v-58f40e51]{height:5px;width:100%;display:block}.spacer-10[data-v-58f40e51]{height:10px;width:100%;display:block}.spacer-15[data-v-58f40e51]{height:15px;width:100%;display:block}.spacer-20[data-v-58f40e51]{height:20px;width:100%;display:block}.spacer-25[data-v-58f40e51]{height:25px;width:100%;display:block}.spacer-30[data-v-58f40e51]{height:30px;width:100%;display:block}.spacer-40[data-v-58f40e51]{height:40px;width:100%;display:block}.spacer-50[data-v-58f40e51]{height:50px;width:100%;display:block}.spacer-65[data-v-58f40e51]{height:65px;width:100%;display:block}.spacer-100[data-v-58f40e51]{height:100px;width:100%;display:block}.sb-wrapper[data-v-58f40e51]{position:relative}.sb-wrapper .sb-button[data-v-58f40e51]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-58f40e51]{cursor:pointer}.sb-wrapper .sb-button[data-v-58f40e51]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-58f40e51]:focus{outline:1px solid}.m-end-2[data-v-58f40e51]{margin-inline-end:10px}.gallery-container .swiper img[data-v-58f40e51]{margin:auto;display:block;border-radius:5px}.gallery-container .swiper.gallery-top[data-v-58f40e51]{width:100%;height:350px}.gallery-container .swiper.gallery-top[data-v-58f40e51]  .swiper-slide img{position:relative;top:50%;transform:translateY(-50%)}.gallery-container .swiper.gallery-thumbs[data-v-58f40e51]{height:112px;box-sizing:border-box;padding:15px 0}.gallery-container .swiper.gallery-thumbs[data-v-58f40e51]  .swiper-slide{width:112px;height:77px;opacity:.3;overflow:hidden}.gallery-container .swiper.gallery-thumbs[data-v-58f40e51]  .swiper-slide-active{opacity:1}.gallery-container .swiper.gallery-thumbs[data-v-58f40e51]  .swiper-wrapper{justify-content:center}.gallery-container .swiper .swiper-nav-button[data-v-58f40e51]{width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:50%;color:#000;background-color:#fff;box-shadow:0 3px 6px 0 rgba(0,0,0,.47);font-style:12px}.gallery-container .swiper .swiper-nav-button[data-v-58f40e51]:after{font-size:14px;font-weight:700}.gallery-container[data-v-58f40e51]  .swiper-pagination-bullet{background:#c3c3c3;border:solid 1px #989898;width:9px;height:9px}.gallery-container[data-v-58f40e51]  .swiper-pagination-bullet-active{background:#fff}@media(max-width: 767.98px){.gallery-container .swiper.gallery-top[data-v-58f40e51]{height:200px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertySection_vue_vue_type_style_index_0_id_3feb67f0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(416);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertySection_vue_vue_type_style_index_0_id_3feb67f0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertySection_vue_vue_type_style_index_0_id_3feb67f0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertySection_vue_vue_type_style_index_0_id_3feb67f0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertySection_vue_vue_type_style_index_0_id_3feb67f0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-3feb67f0]{color:#204ecf}.dark-blue[data-v-3feb67f0]{color:#0f256e !important}.gray[data-v-3feb67f0]{color:#262d3d}.light-gray[data-v-3feb67f0]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-3feb67f0]{color:rgba(38,45,61,.32)}.black-light[data-v-3feb67f0]{color:#111}.btn.btn-outline-secondary[data-v-3feb67f0]{color:#333}label[data-v-3feb67f0]{text-transform:capitalize}.object-fit-cover[data-v-3feb67f0]{object-fit:cover}.object-fit-contain[data-v-3feb67f0]{object-fit:contain}.font-14[data-v-3feb67f0]{font-size:14px}.font-18[data-v-3feb67f0]{font-size:18px}.spacer-5[data-v-3feb67f0]{height:5px;width:100%;display:block}.spacer-10[data-v-3feb67f0]{height:10px;width:100%;display:block}.spacer-15[data-v-3feb67f0]{height:15px;width:100%;display:block}.spacer-20[data-v-3feb67f0]{height:20px;width:100%;display:block}.spacer-25[data-v-3feb67f0]{height:25px;width:100%;display:block}.spacer-30[data-v-3feb67f0]{height:30px;width:100%;display:block}.spacer-40[data-v-3feb67f0]{height:40px;width:100%;display:block}.spacer-50[data-v-3feb67f0]{height:50px;width:100%;display:block}.spacer-65[data-v-3feb67f0]{height:65px;width:100%;display:block}.spacer-100[data-v-3feb67f0]{height:100px;width:100%;display:block}.sb-wrapper[data-v-3feb67f0]{position:relative}.sb-wrapper .sb-button[data-v-3feb67f0]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-3feb67f0]{cursor:pointer}.sb-wrapper .sb-button[data-v-3feb67f0]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-3feb67f0]:focus{outline:1px solid}.m-end-2[data-v-3feb67f0]{margin-inline-end:10px}.property-section[data-v-3feb67f0]{border-bottom:1px solid rgba(0,0,0,.08);padding-bottom:30px;margin-bottom:30px}.property-section .property-section-title[data-v-3feb67f0]{font-size:22px;font-weight:bold;margin-bottom:20px}.property-section-body[data-v-3feb67f0]{word-break:break-word}@media(max-width: 767.98px){.property-section-title[data-v-3feb67f0]{font-size:16px !important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_style_index_0_id_62d0c690_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_style_index_0_id_62d0c690_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_style_index_0_id_62d0c690_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_style_index_0_id_62d0c690_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetails_vue_vue_type_style_index_0_id_62d0c690_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-62d0c690]{color:#204ecf}.dark-blue[data-v-62d0c690]{color:#0f256e !important}.gray[data-v-62d0c690]{color:#262d3d}.light-gray[data-v-62d0c690]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-62d0c690]{color:rgba(38,45,61,.32)}.black-light[data-v-62d0c690]{color:#111}.btn.btn-outline-secondary[data-v-62d0c690]{color:#333}label[data-v-62d0c690]{text-transform:capitalize}.object-fit-cover[data-v-62d0c690]{object-fit:cover}.object-fit-contain[data-v-62d0c690]{object-fit:contain}.font-14[data-v-62d0c690]{font-size:14px}.font-18[data-v-62d0c690]{font-size:18px}.spacer-5[data-v-62d0c690]{height:5px;width:100%;display:block}.spacer-10[data-v-62d0c690]{height:10px;width:100%;display:block}.spacer-15[data-v-62d0c690]{height:15px;width:100%;display:block}.spacer-20[data-v-62d0c690]{height:20px;width:100%;display:block}.spacer-25[data-v-62d0c690]{height:25px;width:100%;display:block}.spacer-30[data-v-62d0c690]{height:30px;width:100%;display:block}.spacer-40[data-v-62d0c690]{height:40px;width:100%;display:block}.spacer-50[data-v-62d0c690]{height:50px;width:100%;display:block}.spacer-65[data-v-62d0c690]{height:65px;width:100%;display:block}.spacer-100[data-v-62d0c690]{height:100px;width:100%;display:block}.sb-wrapper[data-v-62d0c690]{position:relative}.sb-wrapper .sb-button[data-v-62d0c690]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-62d0c690]{cursor:pointer}.sb-wrapper .sb-button[data-v-62d0c690]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-62d0c690]:focus{outline:1px solid}.m-end-2[data-v-62d0c690]{margin-inline-end:10px}.property-details-section[data-v-62d0c690]{margin-top:15px}@media(max-width: 767.98px){.property-details-section[data-v-62d0c690]{padding-bottom:20px;margin-bottom:15px}}.property-address[data-v-62d0c690]{color:#989898;font-size:14px}.property-details-container .property-detail-label[data-v-62d0c690]{font-size:14px;margin-left:5px}[dir=rtl] .property-details-container .property-detail-label[data-v-62d0c690]{margin-left:0;margin-right:5px}.property-details-container svg[data-v-62d0c690]{width:24px;height:24px}.property-details-container[data-v-62d0c690]  .list-group-item{padding:0 24px 0 0;border:0}[dir=rtl] .property-details-container[data-v-62d0c690]  .list-group-item{padding:0 0 0 24px}@media(max-width: 767.98px){.property-address[data-v-62d0c690],.property-detail-label[data-v-62d0c690]{font-size:12px !important}.property-details-container svg[data-v-62d0c690]{width:20px !important;height:20px !important}[data-v-62d0c690]  .list-group-item{padding:0 15px 0 0 !important}[dir=rtl][data-v-62d0c690]  .list-group-item{padding:0 0 0 15px !important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_BedroomCard_vue_vue_type_style_index_0_id_393ec38a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(418);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_BedroomCard_vue_vue_type_style_index_0_id_393ec38a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_BedroomCard_vue_vue_type_style_index_0_id_393ec38a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_BedroomCard_vue_vue_type_style_index_0_id_393ec38a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_BedroomCard_vue_vue_type_style_index_0_id_393ec38a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-393ec38a]{color:#204ecf}.dark-blue[data-v-393ec38a]{color:#0f256e !important}.gray[data-v-393ec38a]{color:#262d3d}.light-gray[data-v-393ec38a]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-393ec38a]{color:rgba(38,45,61,.32)}.black-light[data-v-393ec38a]{color:#111}.btn.btn-outline-secondary[data-v-393ec38a]{color:#333}label[data-v-393ec38a]{text-transform:capitalize}.object-fit-cover[data-v-393ec38a]{object-fit:cover}.object-fit-contain[data-v-393ec38a]{object-fit:contain}.font-14[data-v-393ec38a]{font-size:14px}.font-18[data-v-393ec38a]{font-size:18px}.spacer-5[data-v-393ec38a]{height:5px;width:100%;display:block}.spacer-10[data-v-393ec38a]{height:10px;width:100%;display:block}.spacer-15[data-v-393ec38a]{height:15px;width:100%;display:block}.spacer-20[data-v-393ec38a]{height:20px;width:100%;display:block}.spacer-25[data-v-393ec38a]{height:25px;width:100%;display:block}.spacer-30[data-v-393ec38a]{height:30px;width:100%;display:block}.spacer-40[data-v-393ec38a]{height:40px;width:100%;display:block}.spacer-50[data-v-393ec38a]{height:50px;width:100%;display:block}.spacer-65[data-v-393ec38a]{height:65px;width:100%;display:block}.spacer-100[data-v-393ec38a]{height:100px;width:100%;display:block}.sb-wrapper[data-v-393ec38a]{position:relative}.sb-wrapper .sb-button[data-v-393ec38a]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-393ec38a]{cursor:pointer}.sb-wrapper .sb-button[data-v-393ec38a]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-393ec38a]:focus{outline:1px solid}.m-end-2[data-v-393ec38a]{margin-inline-end:10px}.bedroom-section[data-v-393ec38a]{width:240px;min-height:116px;margin:0px 18px 10px 0px;padding:16px 18px;border-radius:12px;border:solid 1px #c3c3c3;display:inline-block}[dir=rtl] .bedroom-section[data-v-393ec38a]{margin:0px 0px 10px 18px}.bedroom-section .bed-type-container .bed-type-sub-container[data-v-393ec38a]{margin-bottom:15px}.bedroom-section img[data-v-393ec38a]{width:28px;height:28px}.bedroom-section .bedroom-heading[data-v-393ec38a]{margin:0 32px 16px 0px;font-size:16px;font-weight:600;line-height:1.25;color:#333}.bedroom-section .bed-type-container .bed-type-text[data-v-393ec38a]{font-size:14px;margin:2px 5px 0 0;line-height:1.29;color:#333}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCompare_vue_vue_type_style_index_0_id_304ea3ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(432);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCompare_vue_vue_type_style_index_0_id_304ea3ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCompare_vue_vue_type_style_index_0_id_304ea3ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCompare_vue_vue_type_style_index_0_id_304ea3ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCompare_vue_vue_type_style_index_0_id_304ea3ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-304ea3ba]{color:#204ecf}.dark-blue[data-v-304ea3ba]{color:#0f256e !important}.gray[data-v-304ea3ba]{color:#262d3d}.light-gray[data-v-304ea3ba]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-304ea3ba]{color:rgba(38,45,61,.32)}.black-light[data-v-304ea3ba]{color:#111}.btn.btn-outline-secondary[data-v-304ea3ba]{color:#333}label[data-v-304ea3ba]{text-transform:capitalize}.object-fit-cover[data-v-304ea3ba]{object-fit:cover}.object-fit-contain[data-v-304ea3ba]{object-fit:contain}.font-14[data-v-304ea3ba]{font-size:14px}.font-18[data-v-304ea3ba]{font-size:18px}.spacer-5[data-v-304ea3ba]{height:5px;width:100%;display:block}.spacer-10[data-v-304ea3ba]{height:10px;width:100%;display:block}.spacer-15[data-v-304ea3ba]{height:15px;width:100%;display:block}.spacer-20[data-v-304ea3ba]{height:20px;width:100%;display:block}.spacer-25[data-v-304ea3ba]{height:25px;width:100%;display:block}.spacer-30[data-v-304ea3ba]{height:30px;width:100%;display:block}.spacer-40[data-v-304ea3ba]{height:40px;width:100%;display:block}.spacer-50[data-v-304ea3ba]{height:50px;width:100%;display:block}.spacer-65[data-v-304ea3ba]{height:65px;width:100%;display:block}.spacer-100[data-v-304ea3ba]{height:100px;width:100%;display:block}.sb-wrapper[data-v-304ea3ba]{position:relative}.sb-wrapper .sb-button[data-v-304ea3ba]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-304ea3ba]{cursor:pointer}.sb-wrapper .sb-button[data-v-304ea3ba]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-304ea3ba]:focus{outline:1px solid}.m-end-2[data-v-304ea3ba]{margin-inline-end:10px}.all-compare[data-v-304ea3ba]{position:fixed;bottom:20px;z-index:80;background:transparent;left:50%;transform:translateX(-50%)}.all-compare .compare-container[data-v-304ea3ba]{margin-right:10px;position:relative;overflow:hidden;padding:0;transition:all .08s ease-in-out;transform:translateY(-30%);border-radius:7px;box-shadow:0 3px 6px 0 rgba(0,0,0,.16);background-color:#fff}.all-compare .compare-btn[data-v-304ea3ba]{background:#204ecf;border-radius:8px;font-weight:600;font-size:16px;line-height:24px;color:#fff}.all-compare--expanded .compare-btn[data-v-304ea3ba]{margin-inline-start:20px}.all-compare--expanded .compare-container[data-v-304ea3ba]{overflow:visible;padding:25px}.all-compare .hide-btn[data-v-304ea3ba]{background:#dbebff;border:0;font-size:14px}[dir=rtl] .all-compare .arrow-custom[data-v-304ea3ba]{transform:rotate(180deg)}.all-compare svg[data-v-304ea3ba]{width:20px;height:20px}.compare[data-v-304ea3ba]{position:fixed;width:fit-content;right:0;z-index:99;top:55%;min-width:415px;height:auto;min-height:278px;max-width:100%;padding:10px;margin-right:10px;border-radius:12px;background:#fff;box-shadow:0 0 5px #0080fd}.compare .compare-cotent[data-v-304ea3ba]{position:relative;width:135px;display:inline-block}.compare .compare-cotent[data-v-304ea3ba]  img{width:100%;height:120px;border-radius:5px}.compare span.delete[data-v-304ea3ba]{color:#fff;background:#004ed4;width:20px;height:20px;text-align:center;line-height:15px;border-radius:50%;position:absolute;right:3px;top:3px;cursor:pointer}@media(max-width: 991.98px){.compare[data-v-304ea3ba]{top:auto;bottom:0;min-width:250px}.compare .compare-cotent[data-v-304ea3ba]{width:100px}.compare .compare-cotent[data-v-304ea3ba]  img{height:90px}}@media(max-width: 767.98px){.compare .compare-cotent[data-v-304ea3ba]{width:70px}.compare .compare-cotent[data-v-304ea3ba]  img{height:60px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brief-bg.71bf315.png";

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CompareModal_vue_vue_type_style_index_0_id_061a2488_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(433);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CompareModal_vue_vue_type_style_index_0_id_061a2488_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CompareModal_vue_vue_type_style_index_0_id_061a2488_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CompareModal_vue_vue_type_style_index_0_id_061a2488_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_CompareModal_vue_vue_type_style_index_0_id_061a2488_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(340);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(514);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(515);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-061a2488]{color:#204ecf}.dark-blue[data-v-061a2488]{color:#0f256e !important}.gray[data-v-061a2488]{color:#262d3d}.light-gray[data-v-061a2488]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-061a2488]{color:rgba(38,45,61,.32)}.black-light[data-v-061a2488]{color:#111}.btn.btn-outline-secondary[data-v-061a2488]{color:#333}label[data-v-061a2488]{text-transform:capitalize}.object-fit-cover[data-v-061a2488]{object-fit:cover}.object-fit-contain[data-v-061a2488]{object-fit:contain}.font-14[data-v-061a2488]{font-size:14px}.font-18[data-v-061a2488]{font-size:18px}.spacer-5[data-v-061a2488]{height:5px;width:100%;display:block}.spacer-10[data-v-061a2488]{height:10px;width:100%;display:block}.spacer-15[data-v-061a2488]{height:15px;width:100%;display:block}.spacer-20[data-v-061a2488]{height:20px;width:100%;display:block}.spacer-25[data-v-061a2488]{height:25px;width:100%;display:block}.spacer-30[data-v-061a2488]{height:30px;width:100%;display:block}.spacer-40[data-v-061a2488]{height:40px;width:100%;display:block}.spacer-50[data-v-061a2488]{height:50px;width:100%;display:block}.spacer-65[data-v-061a2488]{height:65px;width:100%;display:block}.spacer-100[data-v-061a2488]{height:100px;width:100%;display:block}.sb-wrapper[data-v-061a2488]{position:relative}.sb-wrapper .sb-button[data-v-061a2488]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-061a2488]{cursor:pointer}.sb-wrapper .sb-button[data-v-061a2488]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-061a2488]:focus{outline:1px solid}.m-end-2[data-v-061a2488]{margin-inline-end:10px}.comapare[data-v-061a2488]{position:fixed;top:0;left:0;width:100%;height:100%;background:#ccccccc4;z-index:99999999;padding:10px 20px 30px;display:none;overflow-y:scroll}.comapare[data-v-061a2488]::-webkit-scrollbar{width:10px}.comapare[data-v-061a2488]::-webkit-scrollbar-track{background:#8f8b8b}.comapare[data-v-061a2488]::-webkit-scrollbar-thumb{background:#fff}.close-compare[data-v-061a2488]{width:30px;height:24px;color:#004ed4;cursor:pointer}.modal-content[data-v-061a2488]{min-height:100%}.modal-content .clear-btn[data-v-061a2488]{border:none;padding:0 5px;background-color:transparent}h2[data-v-061a2488]{font-size:20px;font-weight:800}p[data-v-061a2488]{font-size:15px;text-transform:capitalize;font-weight:800}p.p-small[data-v-061a2488]{display:block;font-size:14px;font-weight:500;color:#989898;text-transform:capitalize}hr[data-v-061a2488]{border-color:#ccc}.compare-property .compare-card[data-v-061a2488]{margin-bottom:30px}.compare-property .compare-card .property-name[data-v-061a2488]{min-height:45px}.compare-property .status[data-v-061a2488]{background:rgba(0,128,253,.1098);border-color:#0080fd;color:#0080fd;padding:5px 8px;border-radius:5px;text-transform:capitalize}.compare-property .carousel-wrapper[data-v-061a2488]{height:176px;position:relative;margin-top:10px;margin-bottom:30px}.compare-property .carousel-wrapper[data-v-061a2488]  .carousel-inner{border-radius:10px}.compare-property .carousel-wrapper[data-v-061a2488]  .carousel-indicators{margin-bottom:2px}.compare-property .carousel-wrapper[data-v-061a2488]  .carousel-indicators li{width:10px;height:10px;border-radius:50%}.compare-property .carousel-wrapper .delete[data-v-061a2488],.compare-property .carousel-wrapper .favorite[data-v-061a2488]{position:absolute;z-index:9}.compare-property .carousel-wrapper .delete[data-v-061a2488]{top:0;transform:translateY(-10px);right:-3px;width:25px;height:25px;text-align:center;line-height:20px;border-radius:50%;background:#004ed4;color:#fff;border:1px solid #fff;cursor:pointer}.compare-property .carousel-wrapper .favorite[data-v-061a2488]{top:10px;right:20px}.compare-property .carousel-wrapper .favorite svg[data-v-061a2488]{width:20px;height:20px}.amenity-list[data-v-061a2488]{list-style:none;padding:0;margin:0}.amenity-list li[data-v-061a2488]{margin:0 20px 10px;position:relative}.amenity-list li[data-v-061a2488]::before{content:\"\";position:absolute;top:50%;transform:translateY(-40%);left:-35px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:0 0;background-repeat:no-repeat;background-size:19px;width:20px;height:20px}.amenity-list li.active[data-v-061a2488]::before{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:0 0;background-repeat:no-repeat;background-size:19px;width:20px;height:20px}.compare-property .what-say[data-v-061a2488]  .carousel.slide{height:100%;min-height:300px}.compare-property .what-say[data-v-061a2488]  .carousel-inner{border-radius:10px}.compare-property .what-say[data-v-061a2488]  .carousel-indicators{margin:10px 0;position:relative}.compare-property .what-say[data-v-061a2488]  .carousel-indicators li{border:0;width:10px;height:10px;border-radius:50%;background:#004ed4}.compare-property .what-say ::v-depp img.img-fluid[data-v-061a2488]{position:absolute;top:0;left:0;height:100%;width:100%}.compare-property .what-say[data-v-061a2488]  .carousel-caption{width:100%;padding:0;right:0;left:0;bottom:0;font-size:15px;top:0;padding:10px;text-shadow:0 0 #000;text-align:left;color:#333}.compare-property .what-say[data-v-061a2488]  .carousel-caption>div{position:relative;width:100%;height:100%}.compare-property .what-say[data-v-061a2488]  .carousel-caption>div .head .user-image{position:relative;padding-top:100%}.compare-property .what-say[data-v-061a2488]  .carousel-caption>div .head .user-image ::v-deep() p,.compare-property .what-say[data-v-061a2488]  .carousel-caption>div .head .user-image ::v-deep() span{font-style:normal}.compare-property .what-say[data-v-061a2488]  .carousel-caption>div .head .user-image img{position:absolute;width:100%;height:100%;top:0;left:0;border-radius:50%}[data-v-061a2488]  .carousel-item.gallery img{height:176px;min-width:100%}[dir=rtl] .compare-property .carousel-wrapper .delete[data-v-061a2488]{right:auto;left:-3px}[dir=rtl] .text-left[data-v-061a2488]{text-align:right !important}.p-15[data-v-061a2488]{padding:15px}.swiper.gallery-thumbs[data-v-061a2488]{height:112px;box-sizing:border-box}.swiper.gallery-thumbs[data-v-061a2488]  .swiper-slide{opacity:.3;overflow:hidden}.swiper.gallery-thumbs[data-v-061a2488]  .swiper-slide-active{opacity:1}.swiper .swiper-nav-button[data-v-061a2488]{width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:50%;color:#000;background-color:#fff;box-shadow:0 3px 6px 0 rgba(0,0,0,.47);font-style:12px;top:50vh;position:fixed}.swiper .swiper-nav-button[data-v-061a2488]:after{font-size:14px;font-weight:700}[data-v-061a2488]  .swiper.gallery-thumbs .swiper-slide{opacity:1;height:auto}[data-v-061a2488]  .swiper.gallery-thumbs{height:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 514:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA3CAYAAABdJVn2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAG+SURBVGhD7ZpNj8FAHId/RFDh4iUu5SIOnHz/L+EkDpyERKgTibfEbg+/jZlkul121urM/7l4Do1q+nTMtM19xMAD8vx0Hm8O1Eq6p9OJBmw2GxpwOBxowPl8pumUSiUaUK1WaUCr1aIBQRDQnkfSdY2H0lU3XS6XNGC73dL+BjXjMAxp8Y/P5WjpSLqukZru7XajAfP5nKaPqK+kVqvRgF6vR4vPWP77cybpukZquovFggZEUUR7D5rNJg3odrs0M5KuaxjTPR6PNGA6ndLem8FgQDPPjSVd1zCm+18jbaFQoAHtdpsGrFYrWjJpI7Ck6xrGdCeTCS35zoAt1Fz7/T5Nv2R+sgwsl8s0YDgc0u5Iuq5hTHc8HtP0uwpJdDodGrBer2nA9Xql6djKVUVdpo1GI9odSdc1rKTbaDRo+h/9bDaj6d9jK1cVSZf4ne5vJgxJGau7sZWrikwYiN/p2lqm1et1Wrwj5fHBbrej2UOWacTvdOXmWIbxO10VeSSRMSTdL+RBcMaQdE2om8rrN2+KpPsISS897vd7GnC5XGg6xWKRpo+o6mSgUqnQnkfSdQ0r6WYBSdc1PDlQ4BNL7e0VBASe/gAAAABJRU5ErkJggg=="

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA7CAYAAAAjDDn3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJJSURBVGhD7Zo7aFNRHIe/RGNbxYJFUwJKtQ528THY1kl3LeIDWt184ebgpEPBdFWcXBQRpyI+ig7q6qitdRAHO6jxQdG0omBAI7GpCfwkNzS5Se2xlp7/lyHfeuC7h/8990SmC+AhUf17hy3cN2zhvuF0V3/1Iy2DwU+PZfA080YGH7JfZOWsa2yRQefKdhn0tXbLoGN5QjZ3LHXf+KvUc9NTMjj/7oEMbqSfyCCPmycoUvj94XDrDhmcadsjg1hkiax+LHXfqDv1bD4ng5Nj12UwmknJ5peu5tLOf3nTERk0RmOycCx136g79WTqngxuTQzLFga98dKQk9ywTxaOpe4boamPff8og4MvLskojCZuhhNXBIecoc2nZOGzvaXuG6GpDwR28pvzuJO3xFbI4HhilwwuvH8oq05fYIc/F7LDW+q+EZr67ucXZfA2+1n2bwjmfa3jhAzuTIzIYDBdOtWpRntTXAb3t5yWzcRS943Q1LeO9MvKT12q0b9+rwyujD+SwWQuIyvHVd5BmqLLZPCsc0A2E0vdN5ymfmDNdhkcS+yUwdGXV2UwRV7mLu8glnoNLPVKzGWAqZb9r8Ajc9tR3kFsgKmBpV4JV6+lPau3yaAhslQGQ5OjMnfYa2kNLPVK2GHjIsRSr0UydVdW/IRUGjwWAr3xLlnxE9J+WTiWum/UnbpdDFgkWOqz4X9d9zoUuOV4tq1HZte9ZoWl7oJql3iHv72WwfjPr7LizF9ibcMqGXQ3b5TZJV7nWOq+Yan7hi3cL+A34Ij1HRmZ+w4AAAAASUVORK5CYII="

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAALVBMVEVHcEzvQDDqQjTqQjTrQjTqQzXqQjXqQjTvQDDqQDXrQjTpQzTpQjTpQjXqQzXRLfHyAAAADnRSTlMAEHzwW6DQwCAwh7Dg34JzhNsAAADTSURBVCjPY2AgAXSg8YXy3j1TRBZgsnv37t1jBYQA4753IPBaAC7C+g4CAuAiflCRJ3BN96Aib2HaWICcpy5xQNIByRgHsDjMIPZ3754Bqbx37wqgIszv3j0CUnrv3hlARdiAxgApoEEJCF2PBRgY7RC6mIBmZjC0AUmYPzhBbkkDERNgTjwHdeEbuC/0oCKP4CLCUBFDRPBARRABBLL4HdgJaMHxBClU2cEiBUgiHOBwbkAOej0Uu2HaNqCIAG1DtgkE5r17iRapLPAwhoNQBooAAJYRliKXmWctAAAAAElFTkSuQmCC"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAARVBMVEVHcEwAgPwAgP0AgP0AgP0Agf8Ahv8AgP8AgP0AgP0Agf8AgP4AgP0Ag/8AgP3////N5v8QiP3u9/9rtf4tl/2g0P6fz/4JGGTcAAAADnRSTlMAuYj0zSoKRJzfIFVxFOkfgOYAAAGGSURBVFjD7Zdts4IgEIURNl7EINP8/z/12nWcQsTdlZn60vlUzfjEYQ+7KMRPX1FrZrUVgKu3LvzLWX89hTAQEoHh22hCpoZnS0sVdqSkpjMuEAqCC5nhQlGOaElDOBDQHDXhUA2F0QVEHSFhCoMoPHc2oLJoZbZP9NOUUbA6yy3jFuOt3/woEYjLGPd7RnEsN+MMGMcZNHL8dBmjX5YzMqqc1GZYjTwpA31T3tM6xPhYPz9iHMiphYQRX99iQgFiceb/3kDiRCxPcviekBgX2DsQs2NpEEsP7PpwDjmujqdBPD2xZUhLPztFiGO0k9empuVGG4qnQLBZqBXe2ZT+RHvM+2Ngd0d87NAGj8EgpCsGHDOANEb9McTTJjrULwTZFfIFpam8EyxZKcZWkReSD1PyAE1OUOHC5QRHpiJnyDm0PMauIaeZkD1D/Ht5bkjyGZkh0Ccgok0ip06+9JjKDcmCK8VpAf/clbfF1bwFrl3OiCp1xFcCNHNSVKux9QyhtfjpS/oDLw1T7mu84u4AAAAASUVORK5CYII="

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyNearBy_vue_vue_type_style_index_0_id_4cc70919_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyNearBy_vue_vue_type_style_index_0_id_4cc70919_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyNearBy_vue_vue_type_style_index_0_id_4cc70919_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyNearBy_vue_vue_type_style_index_0_id_4cc70919_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyNearBy_vue_vue_type_style_index_0_id_4cc70919_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-4cc70919]{color:#204ecf}.dark-blue[data-v-4cc70919]{color:#0f256e !important}.gray[data-v-4cc70919]{color:#262d3d}.light-gray[data-v-4cc70919]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-4cc70919]{color:rgba(38,45,61,.32)}.black-light[data-v-4cc70919]{color:#111}.btn.btn-outline-secondary[data-v-4cc70919]{color:#333}label[data-v-4cc70919]{text-transform:capitalize}.object-fit-cover[data-v-4cc70919]{object-fit:cover}.object-fit-contain[data-v-4cc70919]{object-fit:contain}.font-14[data-v-4cc70919]{font-size:14px}.font-18[data-v-4cc70919]{font-size:18px}.spacer-5[data-v-4cc70919]{height:5px;width:100%;display:block}.spacer-10[data-v-4cc70919]{height:10px;width:100%;display:block}.spacer-15[data-v-4cc70919]{height:15px;width:100%;display:block}.spacer-20[data-v-4cc70919]{height:20px;width:100%;display:block}.spacer-25[data-v-4cc70919]{height:25px;width:100%;display:block}.spacer-30[data-v-4cc70919]{height:30px;width:100%;display:block}.spacer-40[data-v-4cc70919]{height:40px;width:100%;display:block}.spacer-50[data-v-4cc70919]{height:50px;width:100%;display:block}.spacer-65[data-v-4cc70919]{height:65px;width:100%;display:block}.spacer-100[data-v-4cc70919]{height:100px;width:100%;display:block}.sb-wrapper[data-v-4cc70919]{position:relative}.sb-wrapper .sb-button[data-v-4cc70919]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-4cc70919]{cursor:pointer}.sb-wrapper .sb-button[data-v-4cc70919]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-4cc70919]:focus{outline:1px solid}.m-end-2[data-v-4cc70919]{margin-inline-end:10px}.location-tabs[data-v-4cc70919]{margin-top:20px;margin-bottom:18px}.location-tabs[data-v-4cc70919]  .nav-tabs{border:0;padding:0}.location-tabs[data-v-4cc70919]  .nav-link.active{border:solid 1px #0080fd;background-color:rgba(0,128,253,.1);color:#0080fd}.location-tabs[data-v-4cc70919]  .nav-item a{width:auto;height:34px;padding:4px 17px;border-radius:15px;border:solid 1px #c3c3c3;margin-right:12px;text-align:center;margin-top:10px}[dir=rtl] .location-tabs[data-v-4cc70919]  .nav-item a{margin-left:12px;margin-right:0}.location-tabs .map-contianer[data-v-4cc70919]{width:100%;height:340px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_6547c0a6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(440);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_6547c0a6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_6547c0a6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_6547c0a6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_6547c0a6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-6547c0a6]{color:#204ecf}.dark-blue[data-v-6547c0a6]{color:#0f256e !important}.gray[data-v-6547c0a6]{color:#262d3d}.light-gray[data-v-6547c0a6]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-6547c0a6]{color:rgba(38,45,61,.32)}.black-light[data-v-6547c0a6]{color:#111}.btn.btn-outline-secondary[data-v-6547c0a6]{color:#333}label[data-v-6547c0a6]{text-transform:capitalize}.object-fit-cover[data-v-6547c0a6]{object-fit:cover}.object-fit-contain[data-v-6547c0a6]{object-fit:contain}.font-14[data-v-6547c0a6]{font-size:14px}.font-18[data-v-6547c0a6]{font-size:18px}.spacer-5[data-v-6547c0a6]{height:5px;width:100%;display:block}.spacer-10[data-v-6547c0a6]{height:10px;width:100%;display:block}.spacer-15[data-v-6547c0a6]{height:15px;width:100%;display:block}.spacer-20[data-v-6547c0a6]{height:20px;width:100%;display:block}.spacer-25[data-v-6547c0a6]{height:25px;width:100%;display:block}.spacer-30[data-v-6547c0a6]{height:30px;width:100%;display:block}.spacer-40[data-v-6547c0a6]{height:40px;width:100%;display:block}.spacer-50[data-v-6547c0a6]{height:50px;width:100%;display:block}.spacer-65[data-v-6547c0a6]{height:65px;width:100%;display:block}.spacer-100[data-v-6547c0a6]{height:100px;width:100%;display:block}.sb-wrapper[data-v-6547c0a6]{position:relative}.sb-wrapper .sb-button[data-v-6547c0a6]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-6547c0a6]{cursor:pointer}.sb-wrapper .sb-button[data-v-6547c0a6]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-6547c0a6]:focus{outline:1px solid}.m-end-2[data-v-6547c0a6]{margin-inline-end:10px}input[type=checkbox][data-v-6547c0a6]{height:0;width:0;visibility:hidden}.switch-ui[data-v-6547c0a6]{cursor:pointer;text-indent:-9999px;width:50px;height:25px;background:gray;display:inline-block;vertical-align:middle;border-radius:100px;position:relative}.switch-ui[data-v-6547c0a6]:after{content:\"\";position:absolute;top:5px;left:5px;width:16px;height:16px;background:#fff;border-radius:90px;transition:.3s}input:checked+.switch-ui[data-v-6547c0a6]{background:#004ed4}input:checked+.switch-ui[data-v-6547c0a6]:after{left:calc(100% - 5px);transform:translateX(-100%)}.switch-label[data-v-6547c0a6]{margin:0px 5px;font-size:14px;font-weight:400}body[data-v-6547c0a6]{display:flex;justify-content:center;align-items:center;height:100vh}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scrollToElement; });
const scrollToElement = hash => {
  const element = document.querySelector(hash);
  if (!element) return;
  element.scrollIntoView({
    behavior: 'smooth'
  });
};

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertySleepingArrangements.vue?vue&type=template&id=21262884&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('PropertySection', {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function () {
        return [_vm._v("\n    " + _vm._s(_vm.$t('property.propertyDetails.sleepingArrangementsTitle')) + "\n  ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._l(_vm.bedrooms, function (bedroom, index) {
    return _c('BedroomCard', {
      key: index,
      attrs: {
        "bedroom": bedroom,
        "index": index
      }
    });
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/property-details/PropertySleepingArrangements.vue?vue&type=template&id=21262884&

// EXTERNAL MODULE: ./components/property-details/PropertySection.vue + 4 modules
var PropertySection = __webpack_require__(358);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/BedroomCard.vue?vue&type=template&id=393ec38a&scoped=true&
var BedroomCardvue_type_template_id_393ec38a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "bedroom-section"
  }, [_vm._ssrNode("<p class=\"bedroom-heading\" data-v-393ec38a>" + _vm._ssrEscape("\n    " + _vm._s(_vm.$t('property.propertyDetails.bedroom')) + "\n    " + _vm._s(_vm.index + 1) + "\n  ") + "</p> "), _c('b-col', {
    staticClass: "d-inline-flex p-0 flex-wrap bed-type-container",
    attrs: {
      "cols": "12"
    }
  }, _vm._l(_vm.bedroom.types, function (bedType, t) {
    return _c('div', {
      key: t,
      staticClass: "w-50 bed-type-sub-container"
    }, [_c('AppImage', {
      attrs: {
        "src": bedType.icon,
        "alt": bedType.name
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "bed-type-text"
    }, [_vm._v(_vm._s(bedType.count) + " " + _vm._s(bedType.name))])], 1);
  }), 0)], 2);
};
var BedroomCardvue_type_template_id_393ec38a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/BedroomCard.vue?vue&type=template&id=393ec38a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/BedroomCard.vue?vue&type=script&lang=js&
/* harmony default export */ var BedroomCardvue_type_script_lang_js_ = ({
  name: 'BedroomCard',
  props: {
    bedroom: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  }
});
// CONCATENATED MODULE: ./components/shared/BedroomCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_BedroomCardvue_type_script_lang_js_ = (BedroomCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/BedroomCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(494)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_BedroomCardvue_type_script_lang_js_,
  BedroomCardvue_type_template_id_393ec38a_scoped_true_render,
  BedroomCardvue_type_template_id_393ec38a_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "393ec38a",
  "6fc5fee1"
  
)

/* harmony default export */ var BedroomCard = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertySleepingArrangements.vue?vue&type=script&lang=js&


/* harmony default export */ var PropertySleepingArrangementsvue_type_script_lang_js_ = ({
  name: 'PropertySleepingArrangements',
  components: {
    PropertySection: PropertySection["a" /* default */],
    BedroomCard: BedroomCard
  },
  props: {
    bedrooms: {
      type: Array,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/property-details/PropertySleepingArrangements.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_details_PropertySleepingArrangementsvue_type_script_lang_js_ = (PropertySleepingArrangementsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/property-details/PropertySleepingArrangements.vue





/* normalize component */

var PropertySleepingArrangements_component = Object(componentNormalizer["a" /* default */])(
  property_details_PropertySleepingArrangementsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "161aeec2"
  
)

/* harmony default export */ var PropertySleepingArrangements = __webpack_exports__["a"] = (PropertySleepingArrangements_component.exports);

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyNearBy.vue?vue&type=template&id=4cc70919&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"location-tabs\" data-v-4cc70919>", "</div>", [_vm._ssrNode("<div data-v-4cc70919>", "</div>", [_c('b-tabs', {
    attrs: {
      "content-class": "mt-3"
    }
  }, [_c('b-tab', {
    attrs: {
      "title": _vm.$t('property.propertyDetails.map'),
      "active": ""
    }
  }, [_c('div', {
    attrs: {
      "id": "map"
    }
  }, [_c('GoogleMap', {
    staticClass: "map-contianer",
    attrs: {
      "location": {
        lat: parseFloat(_vm.propertyDetails.property.property_location.lat),
        lng: parseFloat(_vm.propertyDetails.property.property_location.lon)
      },
      "property-name": _vm.propertyDetails.property.property_name,
      "property-marker": _vm.propertyMarker
    }
  })], 1)]), _vm._v(" "), _c('b-tab', {
    attrs: {
      "title": _vm.$t('property.propertyDetails.schools')
    },
    on: {
      "click": function ($event) {
        return _vm.searchPlacesOnMap('school');
      }
    }
  }, [_c('div', {
    attrs: {
      "id": "school"
    }
  }, [_c('GoogleMap', {
    ref: "school",
    staticClass: "map-contianer",
    attrs: {
      "map-reference": "school",
      "location": {
        lat: parseFloat(_vm.propertyDetails.property.property_location.lat),
        lng: parseFloat(_vm.propertyDetails.property.property_location.lon)
      },
      "property-name": _vm.propertyDetails.property.property_name,
      "property-marker": _vm.propertyMarker
    }
  })], 1)]), _vm._v(" "), _c('b-tab', {
    attrs: {
      "title": _vm.$t('property.propertyDetails.cafes')
    },
    on: {
      "click": function ($event) {
        return _vm.searchPlacesOnMap('cafe');
      }
    }
  }, [_c('div', {
    attrs: {
      "id": "cafe"
    }
  }, [_c('GoogleMap', {
    ref: "cafe",
    staticClass: "map-contianer",
    attrs: {
      "map-reference": "cafe",
      "location": {
        lat: parseFloat(_vm.propertyDetails.property.property_location.lat),
        lng: parseFloat(_vm.propertyDetails.property.property_location.lon)
      },
      "property-name": _vm.propertyDetails.property.property_location_name,
      "property-marker": _vm.propertyMarker
    }
  })], 1)]), _vm._v(" "), _c('b-tab', {
    attrs: {
      "title": _vm.$t('property.propertyDetails.hospitals')
    },
    on: {
      "click": function ($event) {
        return _vm.searchPlacesOnMap('hospital');
      }
    }
  }, [_c('div', {
    attrs: {
      "id": "hospital"
    }
  }, [_c('GoogleMap', {
    ref: "hospital",
    staticClass: "map-contianer",
    attrs: {
      "map-reference": "hospital",
      "location": {
        lat: parseFloat(_vm.propertyDetails.property.property_location.lat),
        lng: parseFloat(_vm.propertyDetails.property.property_location.lon)
      },
      "property-name": _vm.propertyDetails.property.property_name,
      "property-marker": _vm.propertyMarker
    }
  })], 1)]), _vm._v(" "), _c('b-tab', {
    attrs: {
      "title": _vm.$t('property.propertyDetails.hotels')
    },
    on: {
      "click": function ($event) {
        return _vm.searchPlacesOnMap('hotel');
      }
    }
  }, [_c('div', {
    attrs: {
      "id": "hotel"
    }
  }, [_c('GoogleMap', {
    ref: "hotel",
    staticClass: "map-contianer",
    attrs: {
      "map-reference": "hotel",
      "location": {
        lat: parseFloat(_vm.propertyDetails.property.property_location.lat),
        lng: parseFloat(_vm.propertyDetails.property.property_location.lon)
      },
      "property-name": _vm.propertyDetails.property.property_name,
      "property-marker": _vm.propertyMarker
    }
  })], 1)])], 1)], 1)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/property-details/PropertyNearBy.vue?vue&type=template&id=4cc70919&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/GoogleMap.vue?vue&type=template&id=46d2e842&
var GoogleMapvue_type_template_id_46d2e842_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('GmapMap', {
    ref: _vm.mapReference,
    attrs: {
      "center": _vm.location,
      "zoom": 15,
      "map-type-id": "terrain"
    }
  }, [_c('GmapMarker', {
    attrs: {
      "position": _vm.location,
      "clickable": true,
      "draggable": false,
      "icon": _vm.propertyMarker,
      "title": _vm.propertyName
    },
    on: {
      "click": function ($event) {
        _vm.center = _vm.location;
      }
    }
  })], 1);
};
var GoogleMapvue_type_template_id_46d2e842_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/GoogleMap.vue?vue&type=template&id=46d2e842&

// EXTERNAL MODULE: ./node_modules/vue2-google-maps/dist/main.js
var main = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/GoogleMap.vue?vue&type=script&lang=js&

/* harmony default export */ var GoogleMapvue_type_script_lang_js_ = ({
  name: 'GoogleMap',
  props: {
    mapReference: {
      type: String,
      required: false,
      default: 'map'
    },
    location: {
      type: Object,
      required: true
    },
    propertyName: {
      type: String,
      required: true
    },
    propertyMarker: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      map: {}
    };
  },
  computed: {
    google: main["gmapApi"]
  },
  methods: {
    initGoogleNearBy(places) {
      this.map = new this.google.maps.Map(this.$refs[places].$el, {
        center: {
          lat: this.$refs[places].center.lat,
          lng: this.$refs[places].center.lng
        },
        zoom: 15
      });
      const request = {
        location: this.map.getCenter(),
        radius: 10000,
        types: [places]
      };
      const service = new this.google.maps.places.PlacesService(this.map);
      service.nearbySearch(request, this.callback);
    },
    callback(results, status) {
      if (status === this.google.maps.places.PlacesServiceStatus.OK) {
        const bounds = new google.maps.LatLngBounds();
        const defaultPlace = {
          geometry: {
            location: this.location
          },
          name: this.propertyName,
          icon: this.propertyMarker
        };
        this.createMarker(defaultPlace);
        results.forEach(place => {
          place.icon = __webpack_require__(525);
          const marker = this.createMarker(place);
          bounds.extend(marker.getPosition());
        });
        this.map.fitBounds(bounds);
      }
    },
    createMarker(place) {
      const icon = {
        url: place.icon,
        scaledSize: new this.google.maps.Size(30, 30)
      };
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: this.map,
        title: place.name,
        icon
      });
      return marker;
    }
  }
});
// CONCATENATED MODULE: ./components/shared/GoogleMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_GoogleMapvue_type_script_lang_js_ = (GoogleMapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/GoogleMap.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_GoogleMapvue_type_script_lang_js_,
  GoogleMapvue_type_template_id_46d2e842_render,
  GoogleMapvue_type_template_id_46d2e842_staticRenderFns,
  false,
  null,
  null,
  "53ae2e10"
  
)

/* harmony default export */ var GoogleMap = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyNearBy.vue?vue&type=script&lang=js&

/* harmony default export */ var PropertyNearByvue_type_script_lang_js_ = ({
  name: 'PropertyNearBy',
  props: ['propertyDetails'],
  components: {
    GoogleMap: GoogleMap
  },
  data() {
    return {
      propertyMarker: __webpack_require__(526)
    };
  },
  methods: {
    searchPlacesOnMap(place) {
      this.$refs[place].initGoogleNearBy(place);
    }
  }
});
// CONCATENATED MODULE: ./components/property-details/PropertyNearBy.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_details_PropertyNearByvue_type_script_lang_js_ = (PropertyNearByvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/property-details/PropertyNearBy.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(527)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PropertyNearBy_component = Object(componentNormalizer["a" /* default */])(
  property_details_PropertyNearByvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4cc70919",
  "06e381ec"
  
)

/* harmony default export */ var PropertyNearBy = __webpack_exports__["a"] = (PropertyNearBy_component.exports);

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyGallery.vue?vue&type=template&id=58f40e51&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "gallery-container"
  }, [_c('swiper', {
    ref: "swiperTop",
    staticClass: "swiper gallery-top",
    attrs: {
      "dir": _vm.$i18n.locale === 'en' ? 'ltr' : 'rtl',
      "options": _vm.swiperOptionTop
    }
  }, [_vm._l(_vm.images, function (image, index) {
    return _c('swiper-slide', {
      key: `image-${index}`
    }, [_c('AppImage', {
      attrs: {
        "src": image,
        "quality": 90,
        "width": "700",
        "height": "700"
      }
    })], 1);
  }), _vm._v(" "), (_vm.images || []).length > 1 ? _c('div', {
    staticClass: "swiper-pagination d-md-none",
    attrs: {
      "slot": "pagination"
    },
    slot: "pagination"
  }) : _vm._e()], 2), _vm._ssrNode(" "), _vm.images && _vm.images.length > 1 ? _c('swiper', {
    ref: "swiperThumbs",
    staticClass: "swiper gallery-thumbs d-none d-md-block",
    attrs: {
      "dir": _vm.$i18n.locale === 'en' ? 'ltr' : 'rtl',
      "options": _vm.swiperOptionThumbs
    }
  }, [_vm._l(_vm.images, function (image, index) {
    return _c('swiper-slide', {
      key: `image-${index}`
    }, [_c('AppImage', {
      attrs: {
        "src": image,
        "width": "200",
        "height": "200"
      }
    })], 1);
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-nav-button swiper-button-next swiper-button-white",
    attrs: {
      "slot": "button-next"
    },
    slot: "button-next"
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-nav-button swiper-button-prev swiper-button-white",
    attrs: {
      "slot": "button-prev"
    },
    slot: "button-prev"
  })], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/property-details/PropertyGallery.vue?vue&type=template&id=58f40e51&scoped=true&

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(332);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyGallery.vue?vue&type=script&lang=js&

/* harmony default export */ var PropertyGalleryvue_type_script_lang_js_ = ({
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"]
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOptionTop: {
        slidesPerView: 1,
        loopedSlides: 0,
        // looped slides should be the same
        spaceBetween: 0,
        breakpoints: {
          320: {
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
              bulletClass: 'swiper-pagination-bullet'
            }
          }
        }
      },
      swiperOptionThumbs: {
        slidesPerView: 5,
        slidesPerView: 'auto',
        loopedSlides: 0,
        // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        breakpoints: {
          1440: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 50
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = (this.$refs.swiperTop || {}).$swiper;
      const swiperThumbs = (this.$refs.swiperThumbs || {}).$swiper;
      if (swiperTop && swiperThumbs) {
        swiperTop.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperTop;
      }
    });
  }
});
// CONCATENATED MODULE: ./components/property-details/PropertyGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_details_PropertyGalleryvue_type_script_lang_js_ = (PropertyGalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/property-details/PropertyGallery.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(488)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  property_details_PropertyGalleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "58f40e51",
  "55f5e412"
  
)

/* harmony default export */ var PropertyGallery = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyDetails.vue?vue&type=template&id=62d0c690&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('PropertySection', {
    staticClass: "property-details-section",
    scopedSlots: _vm._u([{
      key: "title",
      fn: function () {
        return [_vm._v("\n    " + _vm._s(_vm.name) + "\n  ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), [_c('p', {
    staticClass: "property-address"
  }, [_vm._v("\n      " + _vm._s(_vm.address) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "property-details-container"
  }, [_c('b-list-group', {
    attrs: {
      "horizontal": ""
    }
  }, [_c('b-list-group-item', [_c('svg-icon', {
    staticClass: "property-detail-icon",
    attrs: {
      "name": "double-bed",
      "viewBox": "0 0 28 28"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "property-detail-label"
  }, [_vm._v(_vm._s(_vm.numberOfBedroom) + "\n            " + _vm._s(_vm.$t('property.propertyDetails.bedrooms')))])], 1), _vm._v(" "), _c('b-list-group-item', [_c('svg-icon', {
    staticClass: "property-detail-icon",
    attrs: {
      "name": "grey-bath",
      "viewBox": "0 0 16 16"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "property-detail-label"
  }, [_vm._v(_vm._s(_vm.numberOfBathroom) + "\n            " + _vm._s(_vm.$t('property.propertyDetails.bathrooms')))])], 1), _vm._v(" "), _c('b-list-group-item', [_c('svg-icon', {
    staticClass: "property-detail-icon",
    attrs: {
      "name": "grey-area",
      "viewBox": "0 0 16 16"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "property-detail-label"
  }, [_vm._v(_vm._s(_vm.area) + "\n            " + _vm._s(_vm.$t('property.propertyDetails.squareMeters')))])], 1)], 1)], 1)]], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/property-details/PropertyDetails.vue?vue&type=template&id=62d0c690&scoped=true&

// EXTERNAL MODULE: ./components/property-details/PropertySection.vue + 4 modules
var PropertySection = __webpack_require__(358);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyDetails.vue?vue&type=script&lang=js&

/* harmony default export */ var PropertyDetailsvue_type_script_lang_js_ = ({
  name: 'PropertyDetails',
  components: {
    PropertySection: PropertySection["a" /* default */]
  },
  props: {
    name: {
      type: String
    },
    address: {
      type: String
    },
    numberOfBathroom: {
      type: Number
    },
    numberOfBedroom: {
      type: Number
    },
    area: {
      type: Number
    }
  }
});
// CONCATENATED MODULE: ./components/property-details/PropertyDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_details_PropertyDetailsvue_type_script_lang_js_ = (PropertyDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/property-details/PropertyDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(492)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  property_details_PropertyDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "62d0c690",
  "480ade32"
  
)

/* harmony default export */ var PropertyDetails = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyDescription.vue?vue&type=template&id=fce806e6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('PropertySection', {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function () {
        return [_c('div', [_vm._v("\n      " + _vm._s(_vm.$t('property.propertyDetails.propertyDescriptionTitle')) + "\n    ")])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), [_c('p', {
    staticStyle: {
      "text-align": "justify"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.description) + "\n    ")])]], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/property-details/PropertyDescription.vue?vue&type=template&id=fce806e6&

// EXTERNAL MODULE: ./components/property-details/PropertySection.vue + 4 modules
var PropertySection = __webpack_require__(358);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyDescription.vue?vue&type=script&lang=js&

/* harmony default export */ var PropertyDescriptionvue_type_script_lang_js_ = ({
  name: 'PropertyDescription',
  components: {
    PropertySection: PropertySection["a" /* default */]
  },
  props: {
    description: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/property-details/PropertyDescription.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_details_PropertyDescriptionvue_type_script_lang_js_ = (PropertyDescriptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/property-details/PropertyDescription.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  property_details_PropertyDescriptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8b3731be"
  
)

/* harmony default export */ var PropertyDescription = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property/PropertyCompare.vue?vue&type=template&id=304ea3ba&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "all-compare",
    class: {
      'all-compare--expanded': _vm.compare
    }
  }, [_vm.compare ? _vm._ssrNode("<div class=\"compare compare-container\" data-v-304ea3ba>", "</div>", [_vm._ssrNode("<div data-v-304ea3ba>", "</div>", [_vm._ssrNode("<div class=\"d-block d-md-flex justify-content-between align-items-center w-100\" data-v-304ea3ba>", "</div>", [_vm._ssrNode("<h5 data-v-304ea3ba>" + _vm._ssrEscape(_vm._s(_vm.$t('property.compareHeading'))) + "</h5> "), _c('b-button', {
    staticClass: "hide-btn",
    on: {
      "click": _vm.hideCompare
    }
  }, [_vm._v(_vm._s(_vm.$t('common.hide')) + "\n          "), _c('svg-icon', {
    staticClass: "arrow-custom",
    attrs: {
      "name": "black-arrow"
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"w-100 py-3\" data-v-304ea3ba>", "</div>", [_vm.compareData.length ? _c('b-row', _vm._l(_vm.compareData, function (compareItem, i) {
    return _c('b-col', {
      key: i,
      staticClass: "compare-cotent",
      attrs: {
        "cols": "3"
      }
    }, [_c('span', {
      staticClass: "delete",
      on: {
        "click": function ($event) {
          return _vm.deleteProperty(compareItem.property_id);
        }
      }
    }, [_vm._v("x")]), _vm._v(" "), _c('AppImage', {
      staticClass: "object-fit-cover",
      attrs: {
        "src": compareItem.property_image[0],
        "alt": "property image"
      }
    })], 1);
  }), 1) : _c('div', [_vm._v(_vm._s(_vm.$t('property.compareEmpty')))])], 1), _vm._ssrNode(" "), _vm.compareData.length ? _vm._ssrNode("<div class=\"d-flex justify-content-between align-items-center w-100\" data-v-304ea3ba>", "</div>", [_c('b-button', {
    attrs: {
      "variant": "outline-primary"
    },
    on: {
      "click": _vm.clearAll
    }
  }, [_vm._v(_vm._s(_vm.$t('common.clearAll')))]), _vm._ssrNode(" "), _c('b-button', {
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": _vm.openComapreModal
    }
  }, [_vm._v(_vm._s(_vm.$t('common.compare')))])], 2) : _vm._e()], 2)]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/property/PropertyCompare.vue?vue&type=template&id=304ea3ba&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property/PropertyCompare.vue?vue&type=script&lang=js&
/* harmony default export */ var PropertyComparevue_type_script_lang_js_ = ({
  name: 'propertyCompare',
  props: ['compareData', 'open', 'isExpanded'],
  data() {
    return {
      compare: false,
      compareCotent: [],
      compareValue: 0
    };
  },
  methods: {
    toggleChart() {
      this.compare = !this.compare;
    },
    hideCompare() {
      this.compare = false;
    },
    clearAll() {
      this.$emit('clearAll');
    },
    deleteProperty(property_id) {
      this.$emit('deleteProperty', property_id);
    },
    openComapreModal() {
      this.hideCompare();
      this.compareValue++;
      let val = this.compareValue;
      this.$store.dispatch('PropertyModule/openComapreModal', val);
    }
  },
  watch: {
    open() {
      this.compare = true;
    }
  }
});
// CONCATENATED MODULE: ./components/property/PropertyCompare.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_PropertyComparevue_type_script_lang_js_ = (PropertyComparevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/property/PropertyCompare.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(509)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  property_PropertyComparevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "304ea3ba",
  "5b758215"
  
)

/* harmony default export */ var PropertyCompare = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property/CompareModal.vue?vue&type=template&id=061a2488&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "comapare",
    staticClass: "comapare",
    on: {
      "click": function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.closeCompare.apply(null, arguments);
      }
    }
  }, [_vm._ssrNode("<div class=\"modal-content\" data-v-061a2488>", "</div>", [_c('b-row', {
    staticClass: "border-bottom mt-4"
  }, [_c('b-col', {
    attrs: {
      "cols": "2"
    }
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c('svg-icon', {
    staticClass: "close-compare pr-1 pl-1",
    attrs: {
      "name": "close-black"
    },
    on: {
      "click": _vm.closeCompare
    }
  })], 1)]), _vm._v(" "), _c('b-col', {
    staticClass: "text-center",
    attrs: {
      "cols": "7"
    }
  }, [_c('div', [_c('h2', [_vm._v("\n            " + _vm._s(_vm.$t('property.compareProperty')) + "\n          ")])])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "3"
    }
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c('button', {
    staticClass: "clear-btn",
    on: {
      "click": _vm.clearAll
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('property.clear')) + "\n          ")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container compare-property\" data-v-061a2488>", "</div>", [_c('swiper', {
    ref: "swiperThumbs",
    staticClass: "swiper gallery-thumbs",
    attrs: {
      "options": _vm.swiperOptionThumbs
    }
  }, [_vm._l(_vm.compareData, function (property, i) {
    return _c('swiper-slide', {
      key: i,
      staticClass: "border"
    }, [_c('div', {
      staticClass: "p-15"
    }, [_c('div', {
      staticClass: "compare-card"
    }, [_c('p', {
      staticClass: "text-capitalize property-name"
    }, [_vm._v("\n                " + _vm._s(property.property_name) + "\n              ")]), _vm._v(" "), _c('div', {
      staticClass: "carousel-wrapper"
    }, [_c('div', {
      staticClass: "delete",
      on: {
        "click": function ($event) {
          return _vm.deleteColumn(property.property_id);
        }
      }
    }, [_vm._v("\n                  x\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "favorite"
    }, [_c('svg-icon', {
      attrs: {
        "name": "unchecked-heart"
      }
    })], 1), _vm._v(" "), _c('b-carousel', {
      attrs: {
        "fade": "",
        "indicators": "",
        "controls": "",
        "interval": 0
      }
    }, _vm._l(property.property_image, function (img, i) {
      return _c('b-carousel-slide', {
        key: i,
        staticClass: "gallery",
        scopedSlots: _vm._u([{
          key: "img",
          fn: function () {
            return [_c('AppImage', {
              staticClass: "object-fit-contain bg-dark",
              attrs: {
                "src": img,
                "height": 250
              }
            })];
          },
          proxy: true
        }], null, true)
      });
    }), 1)], 1), _vm._v(" "), _c('b-button', {
      staticClass: "w-100 text-center",
      attrs: {
        "variant": "primary"
      },
      on: {
        "click": function ($event) {
          return _vm.bid(property.property_id);
        }
      }
    }, [_vm._v("\n                " + _vm._s(_vm.$t('common.sendOffer')) + "\n              ")]), _vm._v(" "), _c('div', {
      staticClass: "py-3"
    }, [_c('h2', {
      staticClass: "mt-1 mb-3"
    }, [_vm._v("\n                  " + _vm._s(property.favourite_term == 0 ? property.daily_price : property.monthly_price) + "\n                  " + _vm._s(_vm.$t('common.egp')) + " /\n                  " + _vm._s(property.favourite_term == 0 ? _vm.$t('common.night') : _vm.$t('common.month')) + "\n                ")]), _vm._v(" "), _c('p', {
      staticClass: "p-small"
    }, [_vm._v("\n                  " + _vm._s(property.property_slug) + "\n                ")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {}, [_c('p', {
      staticClass: "p-small"
    }, [_vm._v("\n                  " + _vm._s(_vm.$t('property.propertyArea')) + ":\n                  " + _vm._s(property.property_area) + " " + _vm._s(_vm.$t('property.meter')) + "\n                  "), _c('sup', [_vm._v("2")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', {
      staticClass: "p-small"
    }, [_vm._v("\n                  " + _vm._s(_vm.$t('property.noBedroom')) + ": " + _vm._s(property.no_bathrooms) + "\n                ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', {
      staticClass: "p-small"
    }, [_vm._v("\n                  " + _vm._s(_vm.$t('property.noBathrooms')) + ":\n                  " + _vm._s(property.no_of_bedroom) + "\n                ")]), _vm._v(" "), _c('hr')]), _vm._v(" "), property.amenities ? _c('ul', {
      staticClass: "amenity-list"
    }, _vm._l(property.amenities, function (amenity, i) {
      return _c('li', {
        key: `$amenityProperty${i}`,
        class: {
          active: amenity.istrue == 1
        }
      }, [_vm._v("\n                  " + _vm._s(amenity.name) + "\n                ")]);
    }), 0) : _vm._e()], 1), _vm._v(" "), property.review.length ? _c('div', {}, [_c('p', [_vm._v(_vm._s(_vm.$t('property.whatOtherSaying')))]), _vm._v(" "), _c('div', {
      staticClass: "h-100 mb-4"
    }, [_c('div', {
      staticClass: "what-say mb-3"
    }, [_c('b-carousel', {
      attrs: {
        "fade": "",
        "indicators": "",
        "img-width": "100%",
        "img-height": "480",
        "interval": 0
      }
    }, _vm._l(property.review, function (review, i) {
      return _c('b-carousel-slide', {
        key: i,
        attrs: {
          "img-src": __webpack_require__(511)
        }
      }, [_c('div', {
        staticClass: "carousel-caption"
      }, [_c('div', [_c('div', {
        staticClass: "head mb-2"
      }, [_c('div', {
        staticClass: "row align-items-center"
      }, [_c('div', {
        staticClass: "col-4"
      }, [_c('div', {
        staticClass: "user-image"
      }, [_c('AppImage', {
        attrs: {
          "src": review.profile_picture,
          "width": 100,
          "height": 100,
          "alt": "user image"
        }
      })], 1)]), _vm._v(" "), _c('div', {
        staticClass: "col-8 px-1"
      }, [_c('p', {
        staticClass: "mb-1 text-left"
      }, [_vm._v("\n                                  " + _vm._s(review.user_name) + "\n                                ")]), _vm._v(" "), _c('span', {
        staticClass: "d-block text-left"
      }, [_vm._v("\n                                  " + _vm._s(review.human_creation_date) + "\n                                ")])])])]), _vm._v(" "), _c('q', [_vm._v(_vm._s(review.note))])])])]);
    }), 1)], 1), _vm._v(" "), _c('b-button', {
      staticClass: "w-100 d-block",
      attrs: {
        "variant": "primary"
      },
      on: {
        "click": function ($event) {
          return _vm.bid(property.property_id);
        }
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t('property.bidNow')) + "\n                ")])], 1)]) : _c('div', {}, [_vm._v("\n              " + _vm._s(_vm.$t('property.noReviewYet')) + "\n            ")])])]);
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-nav-button swiper-button-next swiper-button-white",
    attrs: {
      "slot": "button-next"
    },
    slot: "button-next"
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-nav-button swiper-button-prev swiper-button-white",
    attrs: {
      "slot": "button-prev"
    },
    slot: "button-prev"
  })], 2)], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/property/CompareModal.vue?vue&type=template&id=061a2488&scoped=true&

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(332);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property/CompareModal.vue?vue&type=script&lang=js&

/* harmony default export */ var CompareModalvue_type_script_lang_js_ = ({
  name: 'CompareModal',
  props: ['compareData'],
  data() {
    return {
      swiperOptionThumbs: {
        slidesPerView: 'auto',
        loopedSlides: 0,
        spaceBetween: 10,
        loop: false,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1200: {
            slidesPerView: 4
          },
          900: {
            slidesPerView: 2
          },
          450: {
            slidesPerView: 1.2
          }
        }
      }
    };
  },
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"]
  },
  computed: {
    openModal() {
      return this.$store.state.PropertyModule.openCmpareModal;
    }
  },
  methods: {
    closeCompare() {
      this.$refs.comapare.classList.remove('d-block');
      document.getElementsByTagName('body')[0].style.overflow = 'scroll';
    },
    deleteColumn(property_id) {
      this.$emit('deleteColumn', property_id);
    },
    bid(id) {
      this.closeCompare();
      this.$store.commit('PropertyModule/addBid', id);
    },
    clearAll() {
      this.$store.dispatch('PropertyModule/clearCompareProperty');
      this.$emit('clearAll');
    }
  },
  watch: {
    openModal() {
      this.$refs.comapare.classList.add('d-block');
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
  }
});
// CONCATENATED MODULE: ./components/property/CompareModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_CompareModalvue_type_script_lang_js_ = (CompareModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/property/CompareModal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(512)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  property_CompareModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "061a2488",
  "8f125f5a"
  
)

/* harmony default export */ var CompareModal = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/SwitchInput.vue?vue&type=template&id=6547c0a6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "d-flex align-items-center"
  }, [_vm._ssrNode("<div class=\"d-flex align-items-center\" data-v-6547c0a6><input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.value) + " data-v-6547c0a6> <span class=\"switch-ui\" data-v-6547c0a6></span></div> "), _c('small', {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover.bottom",
      value: _vm.$t('property.vacantOccupiedTooltip'),
      expression: "$t('property.vacantOccupiedTooltip')",
      modifiers: {
        "hover": true,
        "bottom": true
      }
    }],
    staticClass: "switch-label"
  }, [_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.label) + "\n  "))])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/SwitchInput.vue?vue&type=template&id=6547c0a6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/SwitchInput.vue?vue&type=script&lang=js&
/* harmony default export */ var SwitchInputvue_type_script_lang_js_ = ({
  props: {
    value: {
      required: true
    },
    label: {
      required: true,
      type: String
    }
  },
  methods: {
    changeValue() {
      this.$emit('input', !this.value);
    }
  }
});
// CONCATENATED MODULE: ./components/shared/SwitchInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_SwitchInputvue_type_script_lang_js_ = (SwitchInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/SwitchInput.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(529)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_SwitchInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6547c0a6",
  "10d894cb"
  
)

/* harmony default export */ var SwitchInput = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(902);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("69a5676c", content, true, context)
};

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(904);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4fa0d3e0", content, true, context)
};

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(906);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0de9c714", content, true, context)
};

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(908);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("29cd0f46", content, true, context)
};

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(910);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1aa675be", content, true, context)
};

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(912);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("190e4cd0", content, true, context)
};

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(914);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5313483e", content, true, context)
};

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(916);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("35a924d6", content, true, context)
};

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCard_vue_vue_type_style_index_0_id_78993f9f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(653);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCard_vue_vue_type_style_index_0_id_78993f9f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCard_vue_vue_type_style_index_0_id_78993f9f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCard_vue_vue_type_style_index_0_id_78993f9f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewCard_vue_vue_type_style_index_0_id_78993f9f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-78993f9f]{color:#204ecf}.dark-blue[data-v-78993f9f]{color:#0f256e !important}.gray[data-v-78993f9f]{color:#262d3d}.light-gray[data-v-78993f9f]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-78993f9f]{color:rgba(38,45,61,.32)}.black-light[data-v-78993f9f]{color:#111}.btn.btn-outline-secondary[data-v-78993f9f]{color:#333}label[data-v-78993f9f]{text-transform:capitalize}.object-fit-cover[data-v-78993f9f]{object-fit:cover}.object-fit-contain[data-v-78993f9f]{object-fit:contain}.font-14[data-v-78993f9f]{font-size:14px}.font-18[data-v-78993f9f]{font-size:18px}.spacer-5[data-v-78993f9f]{height:5px;width:100%;display:block}.spacer-10[data-v-78993f9f]{height:10px;width:100%;display:block}.spacer-15[data-v-78993f9f]{height:15px;width:100%;display:block}.spacer-20[data-v-78993f9f]{height:20px;width:100%;display:block}.spacer-25[data-v-78993f9f]{height:25px;width:100%;display:block}.spacer-30[data-v-78993f9f]{height:30px;width:100%;display:block}.spacer-40[data-v-78993f9f]{height:40px;width:100%;display:block}.spacer-50[data-v-78993f9f]{height:50px;width:100%;display:block}.spacer-65[data-v-78993f9f]{height:65px;width:100%;display:block}.spacer-100[data-v-78993f9f]{height:100px;width:100%;display:block}.sb-wrapper[data-v-78993f9f]{position:relative}.sb-wrapper .sb-button[data-v-78993f9f]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-78993f9f]{cursor:pointer}.sb-wrapper .sb-button[data-v-78993f9f]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-78993f9f]:focus{outline:1px solid}.m-end-2[data-v-78993f9f]{margin-inline-end:10px}p[data-v-78993f9f]{line-height:1.64;font-size:14px;font-size:14px;margin:0px}.review-card-header[data-v-78993f9f]{display:flex;flex-direction:row;align-items:center;line-height:1}.review-card-header .review-card-image[data-v-78993f9f]{border-radius:50%;margin-right:10px;width:50px;height:50px}[dir=rtl] .review-card-header .review-card-image[data-v-78993f9f]{margin-left:10px;margin-right:0px}.review-card-header .info .date[data-v-78993f9f]{color:#989898;font-size:12px}.review-card-body[data-v-78993f9f]{padding:20px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RateWithLabel_vue_vue_type_style_index_0_id_4756abee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(654);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RateWithLabel_vue_vue_type_style_index_0_id_4756abee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RateWithLabel_vue_vue_type_style_index_0_id_4756abee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RateWithLabel_vue_vue_type_style_index_0_id_4756abee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_RateWithLabel_vue_vue_type_style_index_0_id_4756abee_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-4756abee]{color:#204ecf}.dark-blue[data-v-4756abee]{color:#0f256e !important}.gray[data-v-4756abee]{color:#262d3d}.light-gray[data-v-4756abee]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-4756abee]{color:rgba(38,45,61,.32)}.black-light[data-v-4756abee]{color:#111}.btn.btn-outline-secondary[data-v-4756abee]{color:#333}label[data-v-4756abee]{text-transform:capitalize}.object-fit-cover[data-v-4756abee]{object-fit:cover}.object-fit-contain[data-v-4756abee]{object-fit:contain}.font-14[data-v-4756abee]{font-size:14px}.font-18[data-v-4756abee]{font-size:18px}.spacer-5[data-v-4756abee]{height:5px;width:100%;display:block}.spacer-10[data-v-4756abee]{height:10px;width:100%;display:block}.spacer-15[data-v-4756abee]{height:15px;width:100%;display:block}.spacer-20[data-v-4756abee]{height:20px;width:100%;display:block}.spacer-25[data-v-4756abee]{height:25px;width:100%;display:block}.spacer-30[data-v-4756abee]{height:30px;width:100%;display:block}.spacer-40[data-v-4756abee]{height:40px;width:100%;display:block}.spacer-50[data-v-4756abee]{height:50px;width:100%;display:block}.spacer-65[data-v-4756abee]{height:65px;width:100%;display:block}.spacer-100[data-v-4756abee]{height:100px;width:100%;display:block}.sb-wrapper[data-v-4756abee]{position:relative}.sb-wrapper .sb-button[data-v-4756abee]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-4756abee]{cursor:pointer}.sb-wrapper .sb-button[data-v-4756abee]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-4756abee]:focus{outline:1px solid}.m-end-2[data-v-4756abee]{margin-inline-end:10px}.rating-label[data-v-4756abee]{max-width:280px !important}@media(max-width: 767.98px){.rating-label[data-v-4756abee]{max-width:220px !important}}.section-container[data-v-4756abee]{display:flex;flex-direction:row;align-items:center;margin-bottom:24px;justify-content:space-between}.section-container .rate-container[data-v-4756abee]{display:flex;flex-direction:row;align-items:center}.section-container .rate-container .rate-percent[data-v-4756abee]{margin-left:10px;font-size:14px;font-weight:600;line-height:normal}[dir=rtl] .section-container .rate-container .rate-percent[data-v-4756abee]{margin-right:10px;margin-left:0px}.section-container .label[data-v-4756abee]{font-size:14px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyReviews_vue_vue_type_style_index_0_id_781f205e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(655);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyReviews_vue_vue_type_style_index_0_id_781f205e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyReviews_vue_vue_type_style_index_0_id_781f205e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyReviews_vue_vue_type_style_index_0_id_781f205e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyReviews_vue_vue_type_style_index_0_id_781f205e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-781f205e]{color:#204ecf}.dark-blue[data-v-781f205e]{color:#0f256e !important}.gray[data-v-781f205e]{color:#262d3d}.light-gray[data-v-781f205e]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-781f205e]{color:rgba(38,45,61,.32)}.black-light[data-v-781f205e]{color:#111}.btn.btn-outline-secondary[data-v-781f205e]{color:#333}label[data-v-781f205e]{text-transform:capitalize}.object-fit-cover[data-v-781f205e]{object-fit:cover}.object-fit-contain[data-v-781f205e]{object-fit:contain}.font-14[data-v-781f205e]{font-size:14px}.font-18[data-v-781f205e]{font-size:18px}.spacer-5[data-v-781f205e]{height:5px;width:100%;display:block}.spacer-10[data-v-781f205e]{height:10px;width:100%;display:block}.spacer-15[data-v-781f205e]{height:15px;width:100%;display:block}.spacer-20[data-v-781f205e]{height:20px;width:100%;display:block}.spacer-25[data-v-781f205e]{height:25px;width:100%;display:block}.spacer-30[data-v-781f205e]{height:30px;width:100%;display:block}.spacer-40[data-v-781f205e]{height:40px;width:100%;display:block}.spacer-50[data-v-781f205e]{height:50px;width:100%;display:block}.spacer-65[data-v-781f205e]{height:65px;width:100%;display:block}.spacer-100[data-v-781f205e]{height:100px;width:100%;display:block}.sb-wrapper[data-v-781f205e]{position:relative}.sb-wrapper .sb-button[data-v-781f205e]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-781f205e]{cursor:pointer}.sb-wrapper .sb-button[data-v-781f205e]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-781f205e]:focus{outline:1px solid}.m-end-2[data-v-781f205e]{margin-inline-end:10px}.property-section[data-v-781f205e]{border:0px}.property-section .review-card-row[data-v-781f205e]{justify-content:space-between;margin:0}.property-section .review-card[data-v-781f205e]{color:#333;margin-bottom:30px}@media(min-width: 768px){.property-section .review-card[data-v-781f205e]{max-width:45%}}.property-section .property-reviews-button[data-v-781f205e]{text-align:center}.property-section .property-reviews-button button[data-v-781f205e]{background-color:rgba(0,128,253,.1);color:#0080fd;border-color:rgba(0,128,253,.1)}.star-rate-box[data-v-781f205e]{margin-bottom:30px}@media(min-width: 768px){.review-sub-container[data-v-781f205e]{max-width:45%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyNeighborhood_vue_vue_type_style_index_0_id_4394d1f5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(656);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyNeighborhood_vue_vue_type_style_index_0_id_4394d1f5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyNeighborhood_vue_vue_type_style_index_0_id_4394d1f5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyNeighborhood_vue_vue_type_style_index_0_id_4394d1f5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyNeighborhood_vue_vue_type_style_index_0_id_4394d1f5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-4394d1f5]{color:#204ecf}.dark-blue[data-v-4394d1f5]{color:#0f256e !important}.gray[data-v-4394d1f5]{color:#262d3d}.light-gray[data-v-4394d1f5]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-4394d1f5]{color:rgba(38,45,61,.32)}.black-light[data-v-4394d1f5]{color:#111}.btn.btn-outline-secondary[data-v-4394d1f5]{color:#333}label[data-v-4394d1f5]{text-transform:capitalize}.object-fit-cover[data-v-4394d1f5]{object-fit:cover}.object-fit-contain[data-v-4394d1f5]{object-fit:contain}.font-14[data-v-4394d1f5]{font-size:14px}.font-18[data-v-4394d1f5]{font-size:18px}.spacer-5[data-v-4394d1f5]{height:5px;width:100%;display:block}.spacer-10[data-v-4394d1f5]{height:10px;width:100%;display:block}.spacer-15[data-v-4394d1f5]{height:15px;width:100%;display:block}.spacer-20[data-v-4394d1f5]{height:20px;width:100%;display:block}.spacer-25[data-v-4394d1f5]{height:25px;width:100%;display:block}.spacer-30[data-v-4394d1f5]{height:30px;width:100%;display:block}.spacer-40[data-v-4394d1f5]{height:40px;width:100%;display:block}.spacer-50[data-v-4394d1f5]{height:50px;width:100%;display:block}.spacer-65[data-v-4394d1f5]{height:65px;width:100%;display:block}.spacer-100[data-v-4394d1f5]{height:100px;width:100%;display:block}.sb-wrapper[data-v-4394d1f5]{position:relative}.sb-wrapper .sb-button[data-v-4394d1f5]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-4394d1f5]{cursor:pointer}.sb-wrapper .sb-button[data-v-4394d1f5]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-4394d1f5]:focus{outline:1px solid}.m-end-2[data-v-4394d1f5]{margin-inline-end:10px}.star-rate-box[data-v-4394d1f5]{margin-bottom:30px}.review-container[data-v-4394d1f5]{justify-content:space-between}@media(min-width: 768px){.review-sub-container[data-v-4394d1f5]{max-width:45%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SimilarProperties_vue_vue_type_style_index_0_id_7c8b8be6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(657);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SimilarProperties_vue_vue_type_style_index_0_id_7c8b8be6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SimilarProperties_vue_vue_type_style_index_0_id_7c8b8be6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SimilarProperties_vue_vue_type_style_index_0_id_7c8b8be6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SimilarProperties_vue_vue_type_style_index_0_id_7c8b8be6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-7c8b8be6]{color:#204ecf}.dark-blue[data-v-7c8b8be6]{color:#0f256e !important}.gray[data-v-7c8b8be6]{color:#262d3d}.light-gray[data-v-7c8b8be6]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-7c8b8be6]{color:rgba(38,45,61,.32)}.black-light[data-v-7c8b8be6]{color:#111}.btn.btn-outline-secondary[data-v-7c8b8be6]{color:#333}label[data-v-7c8b8be6]{text-transform:capitalize}.object-fit-cover[data-v-7c8b8be6]{object-fit:cover}.object-fit-contain[data-v-7c8b8be6]{object-fit:contain}.font-14[data-v-7c8b8be6]{font-size:14px}.font-18[data-v-7c8b8be6]{font-size:18px}.spacer-5[data-v-7c8b8be6]{height:5px;width:100%;display:block}.spacer-10[data-v-7c8b8be6]{height:10px;width:100%;display:block}.spacer-15[data-v-7c8b8be6]{height:15px;width:100%;display:block}.spacer-20[data-v-7c8b8be6]{height:20px;width:100%;display:block}.spacer-25[data-v-7c8b8be6]{height:25px;width:100%;display:block}.spacer-30[data-v-7c8b8be6]{height:30px;width:100%;display:block}.spacer-40[data-v-7c8b8be6]{height:40px;width:100%;display:block}.spacer-50[data-v-7c8b8be6]{height:50px;width:100%;display:block}.spacer-65[data-v-7c8b8be6]{height:65px;width:100%;display:block}.spacer-100[data-v-7c8b8be6]{height:100px;width:100%;display:block}.sb-wrapper[data-v-7c8b8be6]{position:relative}.sb-wrapper .sb-button[data-v-7c8b8be6]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-7c8b8be6]{cursor:pointer}.sb-wrapper .sb-button[data-v-7c8b8be6]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-7c8b8be6]:focus{outline:1px solid}.m-end-2[data-v-7c8b8be6]{margin-inline-end:10px}.similar-properties[data-v-7c8b8be6]{background-color:#f4f4f4}.similar-properties .property-section[data-v-7c8b8be6]{padding-top:28px;padding-bottom:10px;margin-bottom:0}.similar-properties .property-section[data-v-7c8b8be6]{border:0px}.similar-properties[data-v-7c8b8be6]  .swiper-pagination-bullet-active{border:1px solid #989898;background-color:#fff;box-shadow:0 3px 6px 0 rgba(0,0,0,.08)}.similar-properties[data-v-7c8b8be6]  .swiper-pagination-bullet{width:11px;height:11px;margin:0 5px}.similar-properties .swiper-nav-button[data-v-7c8b8be6]{width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:50%;color:#000;background-color:#fff;box-shadow:0 3px 6px 0 rgba(0,0,0,.47);font-style:12px}.similar-properties .swiper-nav-button[data-v-7c8b8be6]:after{font-size:14px;font-weight:700}.similar-properties .swiper-similar-pagination[data-v-7c8b8be6]{position:static;padding:0 20px}.similar-properties .swiper-button-prev[data-v-7c8b8be6],.similar-properties .swiper-button-next[data-v-7c8b8be6]{position:static;margin-top:0px}[dir=rtl] .similar-properties .swiper-button-next[data-v-7c8b8be6]:after,[dir=rtl] .similar-properties .swiper-container-rtl .swiper-button-prev[data-v-7c8b8be6]:after{transform:rotate(180deg)}[dir=rtl] .similar-properties .swiper-button-prev[data-v-7c8b8be6]:after,[dir=rtl] .similar-properties .swiper-container-rtl .swiper-button-next[data-v-7c8b8be6]:after{transform:rotate(180deg)}.similar-properties .pagination_buttons[data-v-7c8b8be6]{display:flex;justify-content:center;align-items:center;margin:auto;padding:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewsModal_vue_vue_type_style_index_0_id_877d81ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(658);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewsModal_vue_vue_type_style_index_0_id_877d81ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewsModal_vue_vue_type_style_index_0_id_877d81ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewsModal_vue_vue_type_style_index_0_id_877d81ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewsModal_vue_vue_type_style_index_0_id_877d81ac_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-877d81ac]{color:#204ecf}.dark-blue[data-v-877d81ac]{color:#0f256e !important}.gray[data-v-877d81ac]{color:#262d3d}.light-gray[data-v-877d81ac]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-877d81ac]{color:rgba(38,45,61,.32)}.black-light[data-v-877d81ac]{color:#111}.btn.btn-outline-secondary[data-v-877d81ac]{color:#333}label[data-v-877d81ac]{text-transform:capitalize}.object-fit-cover[data-v-877d81ac]{object-fit:cover}.object-fit-contain[data-v-877d81ac]{object-fit:contain}.font-14[data-v-877d81ac]{font-size:14px}.font-18[data-v-877d81ac]{font-size:18px}.spacer-5[data-v-877d81ac]{height:5px;width:100%;display:block}.spacer-10[data-v-877d81ac]{height:10px;width:100%;display:block}.spacer-15[data-v-877d81ac]{height:15px;width:100%;display:block}.spacer-20[data-v-877d81ac]{height:20px;width:100%;display:block}.spacer-25[data-v-877d81ac]{height:25px;width:100%;display:block}.spacer-30[data-v-877d81ac]{height:30px;width:100%;display:block}.spacer-40[data-v-877d81ac]{height:40px;width:100%;display:block}.spacer-50[data-v-877d81ac]{height:50px;width:100%;display:block}.spacer-65[data-v-877d81ac]{height:65px;width:100%;display:block}.spacer-100[data-v-877d81ac]{height:100px;width:100%;display:block}.sb-wrapper[data-v-877d81ac]{position:relative}.sb-wrapper .sb-button[data-v-877d81ac]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-877d81ac]{cursor:pointer}.sb-wrapper .sb-button[data-v-877d81ac]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-877d81ac]:focus{outline:1px solid}.m-end-2[data-v-877d81ac]{margin-inline-end:10px}header[data-v-877d81ac]{margin-bottom:20px}header h2[data-v-877d81ac]{font-size:18px;font-weight:bold;color:#333;margin-right:18px}header .close-button[data-v-877d81ac]{background:none;border:none;margin:0px;padding:0px;line-height:1}header svg[data-v-877d81ac]{width:24px;height:24px}[data-v-877d81ac]  .modal-dialog{width:551px;margin:auto}@media(max-width: 767.98px){[data-v-877d81ac]  .modal-dialog{width:343px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyOwnedBy_vue_vue_type_style_index_0_id_a8f3840a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(659);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyOwnedBy_vue_vue_type_style_index_0_id_a8f3840a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyOwnedBy_vue_vue_type_style_index_0_id_a8f3840a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyOwnedBy_vue_vue_type_style_index_0_id_a8f3840a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyOwnedBy_vue_vue_type_style_index_0_id_a8f3840a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-a8f3840a]{color:#204ecf}.dark-blue[data-v-a8f3840a]{color:#0f256e !important}.gray[data-v-a8f3840a]{color:#262d3d}.light-gray[data-v-a8f3840a]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-a8f3840a]{color:rgba(38,45,61,.32)}.black-light[data-v-a8f3840a]{color:#111}.btn.btn-outline-secondary[data-v-a8f3840a]{color:#333}label[data-v-a8f3840a]{text-transform:capitalize}.object-fit-cover[data-v-a8f3840a]{object-fit:cover}.object-fit-contain[data-v-a8f3840a]{object-fit:contain}.font-14[data-v-a8f3840a]{font-size:14px}.font-18[data-v-a8f3840a]{font-size:18px}.spacer-5[data-v-a8f3840a]{height:5px;width:100%;display:block}.spacer-10[data-v-a8f3840a]{height:10px;width:100%;display:block}.spacer-15[data-v-a8f3840a]{height:15px;width:100%;display:block}.spacer-20[data-v-a8f3840a]{height:20px;width:100%;display:block}.spacer-25[data-v-a8f3840a]{height:25px;width:100%;display:block}.spacer-30[data-v-a8f3840a]{height:30px;width:100%;display:block}.spacer-40[data-v-a8f3840a]{height:40px;width:100%;display:block}.spacer-50[data-v-a8f3840a]{height:50px;width:100%;display:block}.spacer-65[data-v-a8f3840a]{height:65px;width:100%;display:block}.spacer-100[data-v-a8f3840a]{height:100px;width:100%;display:block}.sb-wrapper[data-v-a8f3840a]{position:relative}.sb-wrapper .sb-button[data-v-a8f3840a]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-a8f3840a]{cursor:pointer}.sb-wrapper .sb-button[data-v-a8f3840a]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-a8f3840a]:focus{outline:1px solid}.m-end-2[data-v-a8f3840a]{margin-inline-end:10px}.owner-name[data-v-a8f3840a]{display:flex;flex-direction:row;align-items:center;color:#333}.owner-name .owner-by[data-v-a8f3840a]{padding-right:5px}[dir=rtl] .owner-name .owner-by[data-v-a8f3840a]{padding-left:5px;padding-right:0px}.owner-name .name[data-v-a8f3840a]{color:#0080fd;padding-right:12px;cursor:pointer}[dir=rtl] .owner-name .name[data-v-a8f3840a]{padding-left:12px;padding-right:0px}@media(max-width: 767.98px){.owner-name[data-v-a8f3840a]{justify-content:space-between}}@media(max-width: 767.98px){.property-section[data-v-a8f3840a]{margin-bottom:17px;padding-bottom:15px}}@media(min-width: 768px){.property-section[data-v-a8f3840a]{border:none;padding-bottom:0px;margin-bottom:0px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_cf115498_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(660);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_cf115498_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_cf115498_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_cf115498_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_cf115498_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-cf115498]{color:#204ecf}.dark-blue[data-v-cf115498]{color:#0f256e !important}.gray[data-v-cf115498]{color:#262d3d}.light-gray[data-v-cf115498]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-cf115498]{color:rgba(38,45,61,.32)}.black-light[data-v-cf115498]{color:#111}.btn.btn-outline-secondary[data-v-cf115498]{color:#333}label[data-v-cf115498]{text-transform:capitalize}.object-fit-cover[data-v-cf115498]{object-fit:cover}.object-fit-contain[data-v-cf115498]{object-fit:contain}.font-14[data-v-cf115498]{font-size:14px}.font-18[data-v-cf115498]{font-size:18px}.spacer-5[data-v-cf115498]{height:5px;width:100%;display:block}.spacer-10[data-v-cf115498]{height:10px;width:100%;display:block}.spacer-15[data-v-cf115498]{height:15px;width:100%;display:block}.spacer-20[data-v-cf115498]{height:20px;width:100%;display:block}.spacer-25[data-v-cf115498]{height:25px;width:100%;display:block}.spacer-30[data-v-cf115498]{height:30px;width:100%;display:block}.spacer-40[data-v-cf115498]{height:40px;width:100%;display:block}.spacer-50[data-v-cf115498]{height:50px;width:100%;display:block}.spacer-65[data-v-cf115498]{height:65px;width:100%;display:block}.spacer-100[data-v-cf115498]{height:100px;width:100%;display:block}.sb-wrapper[data-v-cf115498]{position:relative}.sb-wrapper .sb-button[data-v-cf115498]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-cf115498]{cursor:pointer}.sb-wrapper .sb-button[data-v-cf115498]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-cf115498]:focus{outline:1px solid}.m-end-2[data-v-cf115498]{margin-inline-end:10px}.property-container .property-top-bar[data-v-cf115498]{padding:20px 0;align-items:baseline}.property-container .property-top-bar .icons[data-v-cf115498]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center;color:#333;font-size:14px}.property-container .property-top-bar .icons .side-btn[data-v-cf115498]{margin-left:24px}[dir=rtl] .property-container .property-top-bar .icons .side-btn[data-v-cf115498]{padding-right:24px;padding-left:0;margin-left:0}.property-container .property-top-bar .icons .share-dropdown[data-v-cf115498]{font-size:14px;background:none;border:0;color:#333}.property-container .property-top-bar .icons .favourite-button[data-v-cf115498]{font-size:14px;color:#333;margin-bottom:0}.property-container .property-top-bar .icons .compare-btn[data-v-cf115498]{width:170px;height:45px;background-color:#fff;border-radius:5px;border:1px solid #004ed4;color:#004ed4;display:flex;justify-content:space-between;align-items:center}.property-container .property-top-bar .icons .compare-btn .compare-icon[data-v-cf115498]{width:20px;height:14px}.property-container .property-top-bar svg[data-v-cf115498]{width:18px;height:18px}.actions-container[data-v-cf115498]{position:absolute;top:15px;right:30px;left:30px;z-index:9}.actions-container .actions-subcontainer[data-v-cf115498]{align-items:center}.actions-container .action-button[data-v-cf115498]{width:28px;padding:1px;height:28px;background-color:#fff;border-radius:5px;border:none;color:#333;display:flex;justify-content:center;align-items:center}.actions-container .action-button .action-icon[data-v-cf115498]{width:18px;height:18px}.owner-mobile-name[data-v-cf115498]{font-size:14px;text-decoration:underline}[data-v-cf115498]  .breadcrumb{padding:0}.back-btn[data-v-cf115498]{background:none;border:none;padding:0}.arrow-custom[data-v-cf115498]{width:30px !important;height:30px !important;transform:rotate(180deg)}[dir=rtl] .arrow-custom[data-v-cf115498]{transform:rotate(360deg)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/_id.vue?vue&type=template&id=cf115498&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-overlay', {
    attrs: {
      "show": _vm.property.isLoading,
      "rounded": "sm",
      "opacity": 1
    }
  }, [_c('div', [_c('ReviewsModal', {
    attrs: {
      "header-title": _vm.$t('common.landlord'),
      "reviews-data": _vm.propertyDetails.property.owner_review_question
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "property-container"
  }, [_c('b-container', [_c('b-row', [_c('b-col', {
    attrs: {
      "md": "12"
    }
  }, [_c('b-row', {
    staticClass: "property-top-bar"
  }, [_c('b-col', {
    attrs: {
      "md": "6"
    }
  }, [_c('b-button', {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover",
      modifiers: {
        "hover": true
      }
    }],
    staticClass: "back-btn d-none d-lg-block",
    attrs: {
      "title": _vm.$t('common.back'),
      "variant": "text",
      "to": _vm.localePath(`/properties?keyword=${_vm.propertyDetails.property.district}&term=0`)
    }
  }, [_c('svg-icon', {
    staticClass: "arrow-custom",
    attrs: {
      "name": "blue-arrow-right"
    }
  })], 1), _vm._v(" "), _c('b-button', {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover",
      modifiers: {
        "hover": true
      }
    }],
    staticClass: "back-btn d-flex align-items-center d-lg-none",
    attrs: {
      "variant": "text"
    },
    on: {
      "click": _vm.back
    }
  }, [_c('svg-icon', {
    staticClass: "arrow-custom",
    attrs: {
      "name": "blue-arrow-right"
    }
  }), _vm._v(" "), _c('Breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbItems
    }
  })], 1)], 1), _vm._v(" "), _c('b-col', {
    staticClass: "icons d-none d-md-flex",
    attrs: {
      "md": "6"
    }
  }, [_vm.user && _vm.user.user_id == _vm.propertyDetails.property.owner_id ? _c('SwitchInput', {
    attrs: {
      "value": !!_vm.propertyDetails.property.status,
      "label": !!_vm.propertyDetails.property.status ? _vm.$t('property.vacant') : _vm.$t('property.occupied')
    },
    on: {
      "input": function ($event) {
        return _vm.changePropertyOpen($event, _vm.propertyDetails.property.property_id);
      }
    }
  }) : _c('b-button', {
    staticClass: "side-btn favourite-button",
    attrs: {
      "variant": "link"
    },
    on: {
      "click": _vm.updateFavourite
    }
  }, [_c('svg-icon', {
    attrs: {
      "name": "grey-unchecked-heart",
      "fill": _vm.propertyDetails.isFav ? '#fe4310' : '#333'
    }
  }), _vm._v("\n                  " + _vm._s(_vm.$t('common.favorite')) + "\n                ")], 1)], 1), _vm._v(" "), _c('b-col', [_c('div', {
    staticClass: "d-none d-lg-block"
  }, [_c('Breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbItems
    }
  })], 1), _vm._v(" "), _c('PropertyOwnedBy', {
    attrs: {
      "owner-id": _vm.propertyDetails.property.owner_id,
      "owner-name": _vm.propertyDetails.property.owner_name,
      "rate": _vm.propertyDetails.property.owner_rating_avg,
      "reviews-count": _vm.propertyDetails.property.owner_rating_count
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('b-col', {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "md": "8"
    }
  }, [_c('div', {
    staticClass: "actions-container d-md-none"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between actions-subcontainer"
  }, [_c('div', {
    staticClass: "side-btn"
  }, [_c('b-button', {
    staticClass: "action-button d-inline-block",
    on: {
      "click": _vm.updateFavourite
    }
  }, [_c('svg-icon', {
    staticClass: "action-icon",
    attrs: {
      "name": "grey-unchecked-heart",
      "fill": _vm.propertyDetails.isFav ? '#fe4310' : '#333'
    }
  })], 1)], 1)])]), _vm._v(" "), _c('PropertyGallery', {
    attrs: {
      "images": _vm.propertyDetails.property.property_image
    }
  })], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "4"
    }
  }, [_c('PropertyBid', {
    attrs: {
      "offerPrice": _vm.propertyDetails.property.offer_price,
      "property-price": _vm.propertyDetails.property.monthly_price,
      "property-daily-price": _vm.propertyDetails.property.daily_price,
      "property-security-deposite": _vm.propertyDetails.property.security_deposite,
      "property-rate": _vm.propertyDetails.property.property_rating_avg,
      "property-reviews-count": _vm.propertyDetails.property.property_rating_count,
      "property-name": _vm.propertyDetails.property.property_name,
      "property-term": _vm.propertyDetails.term,
      "property-id": _vm.propertyDetails.property.property_id
    },
    on: {
      "onClick": function ($event) {
        return _vm.goToPropertyReviews('#property-reviews-section');
      }
    }
  })], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('PropertyDetails', {
    attrs: {
      "name": this.propertyDetails.property.property_name,
      "address": _vm.propertyDetails.property.property_location_name,
      "number-of-bathroom": _vm.propertyDetails.property.no_of_bathroom,
      "number-of-bedroom": _vm.propertyDetails.property.no_of_bedroom,
      "area": _vm.propertyDetails.property.property_area
    }
  }), _vm._v(" "), _c('PropertyDescription', {
    attrs: {
      "description": _vm.propertyDetails.property.description
    }
  }), _vm._v(" "), _vm.getUnemptyBedrooms.length > 0 ? _c('PropertySleepingArrangements', {
    attrs: {
      "bedrooms": _vm.getUnemptyBedrooms
    }
  }) : _vm._e(), _vm._v(" "), _c('PropertyAmenities', {
    attrs: {
      "amenities-categories": _vm.propertyDetails.property.amenities
    }
  }), _vm._v(" "), _c('PropertyNeighborhood', {
    attrs: {
      "neighbour-review-data": _vm.propertyDetails.property.neighborhood_review_question,
      "neighborhood-rating": _vm.propertyDetails.property.neighborhood_rating_avg,
      "neighborhood-review-count": _vm.propertyDetails.property.neighborhood_rating_count
    }
  }), _vm._v(" "), _c('PropertyReviews', {
    attrs: {
      "id": "property-reviews-section",
      "property-reviews": _vm.propertyReviews,
      "reviews-data": _vm.propertyDetails.property.property_review_question,
      "reviews-rating": _vm.propertyDetails.property.property_rating_avg,
      "reviews-count": _vm.propertyDetails.property.property_rating_count,
      "review-loading": _vm.property.reviewLoading,
      "number-reviews-shown": _vm.property.numOfReviewsShown
    },
    on: {
      "viewAllReviews": _vm.viewAllReviews
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('PropertyBidDetails'), _vm._v(" "), _c('success-modal', {
    attrs: {
      "title": _vm.$t('property.offerSentSucess'),
      "description": _vm.$t('property.successMessage')
    }
  })], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/properties/_id.vue?vue&type=template&id=cf115498&scoped=true&

// EXTERNAL MODULE: ./components/property-details/PropertySection.vue + 4 modules
var PropertySection = __webpack_require__(358);

// EXTERNAL MODULE: ./components/property-details/PropertyDescription.vue + 4 modules
var PropertyDescription = __webpack_require__(539);

// EXTERNAL MODULE: ./components/property-details/PropertySleepingArrangements.vue + 9 modules
var PropertySleepingArrangements = __webpack_require__(532);

// EXTERNAL MODULE: ./components/property-details/PropertyAmenities.vue + 4 modules
var PropertyAmenities = __webpack_require__(443);

// EXTERNAL MODULE: ./components/property-details/PropertyDetails.vue + 4 modules
var PropertyDetails = __webpack_require__(538);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyReviews.vue?vue&type=template&id=781f205e&scoped=true&
var PropertyReviewsvue_type_template_id_781f205e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('PropertySection', {
    scopedSlots: _vm._u([_vm.isLandlord ? {
      key: "title",
      fn: function () {
        return [_vm._v("\n    " + _vm._s(_vm.$t('property.landlordReviews')) + "\n  ")];
      },
      proxy: true
    } : {
      key: "title",
      fn: function () {
        return [_vm._v("\n    " + _vm._s(_vm.$t('property.propertyDetails.propertyReviews')) + "\n  ")];
      },
      proxy: true
    }], null, true)
  }, [_vm._v(" "), [!_vm.isLandlord ? _c('StarRateBox', {
    staticClass: "star-rate-box",
    attrs: {
      "with-star-rating": true,
      "rate": _vm.reviewsRating,
      "reviews-count": _vm.reviewsCount
    }
  }) : _vm._e(), _vm._v(" "), _c('b-row', {
    staticClass: "m-0 justify-content-between px-0",
    class: {
      'col-lg-6': _vm.isLandlord
    }
  }, _vm._l(_vm.reviewsData, function (reviewData, ratingLabel) {
    return _c('b-col', {
      key: ratingLabel,
      staticClass: "d-inline-block p-0 review-sub-container",
      attrs: {
        "cols": "12",
        "md": "6"
      }
    }, [_c('RateWithLabel', {
      attrs: {
        "rating-label": ratingLabel,
        "rating-avg": reviewData
      }
    })], 1);
  }), 1), _vm._v(" "), _c('b-overlay', {
    attrs: {
      "show": _vm.reviewLoading,
      "rounded": "sm",
      "opacity": 1.0
    }
  }, [_c('b-row', {
    staticClass: "review-card-row"
  }, _vm._l(_vm.propertyReviews, function (card, index) {
    return _c('b-col', {
      key: index,
      staticClass: "d-inline-block review-card p-0",
      attrs: {
        "cols": "12",
        "md": "6"
      }
    }, [_c('ReviewCard', {
      attrs: {
        "profile-picture": card.profile_picture,
        "user-name": card.user_name,
        "creation-date": card.creation_date,
        "note": card.note
      }
    })], 1);
  }), 1)], 1), _vm._v(" "), _vm.propertyReviews && _vm.propertyReviews.length > 0 ? _c('b-row', {
    staticClass: "review-card-row"
  }, [_vm.reviewsCount > _vm.numberReviewsShown ? _c('b-col', {
    staticClass: "property-reviews-button",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-button', {
    on: {
      "click": _vm.viewAllReviews
    }
  }, [_vm._v("\n          " + _vm._s(_vm.viewLess ? _vm.$t('common.viewLess') : _vm.$t('common.viewAll') + _vm.reviewsCount + _vm.$t('common.reviews')) + "\n        ")])], 1) : _vm._e()], 1) : _vm._e()]], 2);
};
var PropertyReviewsvue_type_template_id_781f205e_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/property-details/PropertyReviews.vue?vue&type=template&id=781f205e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/ReviewCard.vue?vue&type=template&id=78993f9f&scoped=true&
var ReviewCardvue_type_template_id_78993f9f_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"review-card-header\" data-v-78993f9f>", "</div>", [_c('AppImage', {
    staticClass: "review-card-image",
    attrs: {
      "src": _vm.profilePicture,
      "alt": _vm.profilePicture,
      "width": 50,
      "height": 50,
      "quality": 30
    }
  }), _vm._ssrNode(" <div class=\"info\" data-v-78993f9f><p class=\"name\" data-v-78993f9f>" + _vm._ssrEscape("\n        " + _vm._s(_vm.userName) + "\n      ") + "</p> <p class=\"date\" data-v-78993f9f>" + _vm._ssrEscape("\n        " + _vm._s(_vm._f("formatDate")(_vm.creationDate)) + "\n      ") + "</p></div>")], 2), _vm._ssrNode(" <div class=\"review-card-body\" data-v-78993f9f><p data-v-78993f9f>" + _vm._ssrEscape(_vm._s(_vm.note)) + "</p></div>")], 2);
};
var ReviewCardvue_type_template_id_78993f9f_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/ReviewCard.vue?vue&type=template&id=78993f9f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/ReviewCard.vue?vue&type=script&lang=js&
/* harmony default export */ var ReviewCardvue_type_script_lang_js_ = ({
  name: 'ReviewCard',
  props: {
    profilePicture: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    creationDate: {
      type: String,
      required: true
    },
    note: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  }
});
// CONCATENATED MODULE: ./components/shared/ReviewCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_ReviewCardvue_type_script_lang_js_ = (ReviewCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/ReviewCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(901)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_ReviewCardvue_type_script_lang_js_,
  ReviewCardvue_type_template_id_78993f9f_scoped_true_render,
  ReviewCardvue_type_template_id_78993f9f_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "78993f9f",
  "68467143"
  
)

/* harmony default export */ var ReviewCard = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/RateWithLabel.vue?vue&type=template&id=4756abee&scoped=true&
var RateWithLabelvue_type_template_id_4756abee_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "p-0 section-container"
  }, [_vm._ssrNode("<div data-v-4756abee><div class=\"label rating-label\" data-v-4756abee>" + _vm._ssrEscape(_vm._s(_vm.ratingLabel)) + "</div></div> "), _vm._ssrNode("<div class=\"rate-container\" data-v-4756abee>", "</div>", [_vm.ratingAvg ? _c('StarRating', {
    attrs: {
      "value": Number(_vm.ratingAvg)
    }
  }) : _vm._e(), _vm._ssrNode(" " + (_vm.ratingAvg ? "<div class=\"rate-percent\" data-v-4756abee>" + _vm._ssrEscape("\n      " + _vm._s(_vm._f("toDecimal")(_vm.ratingAvg)) + "\n    ") + "</div>" : "<div class=\"rate-percent\" style=\"font-size: 14px\" data-v-4756abee>" + _vm._ssrEscape("\n      " + _vm._s(_vm.$t('property.noRatingYet')) + "\n    ") + "</div>"))], 2)], 2);
};
var RateWithLabelvue_type_template_id_4756abee_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/RateWithLabel.vue?vue&type=template&id=4756abee&scoped=true&

// EXTERNAL MODULE: ./components/shared/StarRating.vue + 4 modules
var StarRating = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/RateWithLabel.vue?vue&type=script&lang=js&

/* harmony default export */ var RateWithLabelvue_type_script_lang_js_ = ({
  name: 'RateWithLabel',
  components: {
    StarRating: StarRating["a" /* default */]
  },
  props: {
    ratingLabel: {
      type: String,
      required: true
    },
    ratingAvg: {
      type: Number,
      required: true
    }
  },
  filters: {
    toDecimal(value) {
      let realVal = '';
      if (!isNaN(value) && value !== '') {
        realVal = parseFloat(value).toFixed(2);
      } else {
        realVal = '--';
      }
      return realVal;
    }
  }
});
// CONCATENATED MODULE: ./components/shared/RateWithLabel.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_RateWithLabelvue_type_script_lang_js_ = (RateWithLabelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/shared/RateWithLabel.vue



function RateWithLabel_injectStyles (context) {
  
  var style0 = __webpack_require__(903)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var RateWithLabel_component = Object(componentNormalizer["a" /* default */])(
  shared_RateWithLabelvue_type_script_lang_js_,
  RateWithLabelvue_type_template_id_4756abee_scoped_true_render,
  RateWithLabelvue_type_template_id_4756abee_scoped_true_staticRenderFns,
  false,
  RateWithLabel_injectStyles,
  "4756abee",
  "0b71153a"
  
)

/* harmony default export */ var RateWithLabel = (RateWithLabel_component.exports);
// EXTERNAL MODULE: ./components/shared/StarRateBox.vue + 4 modules
var StarRateBox = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyReviews.vue?vue&type=script&lang=js&




/* harmony default export */ var PropertyReviewsvue_type_script_lang_js_ = ({
  name: 'PropertyReviews',
  components: {
    PropertySection: PropertySection["a" /* default */],
    ReviewCard: ReviewCard,
    RateWithLabel: RateWithLabel,
    StarRateBox: StarRateBox["a" /* default */]
  },
  props: {
    propertyReviews: {
      type: Array,
      required: true
    },
    reviewsData: {
      type: Object,
      required: true
    },
    reviewsRating: {
      type: Number
    },
    reviewsCount: {
      type: Number
    },
    isLandlord: {
      type: Boolean
    },
    reviewLoading: {
      type: Boolean
    },
    numberReviewsShown: {
      type: Number
    }
  },
  data() {
    return {
      viewLess: 0
    };
  },
  computed: {
    reviewLength: function () {
      if (!this.propertyReviews) return 0;
      return Object.keys(this.propertyReviews).length;
    }
  },
  watch: {
    reviewLength(value) {
      if (value == this.reviewsCount) {
        this.viewLess = 1;
      } else {
        this.viewLess = 0;
      }
    }
  },
  methods: {
    viewAllReviews() {
      this.$emit('viewAllReviews', {
        viewLess: this.viewLess
      });
    }
  }
});
// CONCATENATED MODULE: ./components/property-details/PropertyReviews.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_details_PropertyReviewsvue_type_script_lang_js_ = (PropertyReviewsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/property-details/PropertyReviews.vue



function PropertyReviews_injectStyles (context) {
  
  var style0 = __webpack_require__(905)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PropertyReviews_component = Object(componentNormalizer["a" /* default */])(
  property_details_PropertyReviewsvue_type_script_lang_js_,
  PropertyReviewsvue_type_template_id_781f205e_scoped_true_render,
  PropertyReviewsvue_type_template_id_781f205e_scoped_true_staticRenderFns,
  false,
  PropertyReviews_injectStyles,
  "781f205e",
  "b18a0380"
  
)

/* harmony default export */ var PropertyReviews = (PropertyReviews_component.exports);
// EXTERNAL MODULE: ./components/property-details/PropertyBid.vue + 4 modules
var PropertyBid = __webpack_require__(80);

// EXTERNAL MODULE: ./components/property-details/PropertyGallery.vue + 4 modules
var PropertyGallery = __webpack_require__(537);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyNeighborhood.vue?vue&type=template&id=4394d1f5&scoped=true&
var PropertyNeighborhoodvue_type_template_id_4394d1f5_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('PropertySection', {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function () {
        return [_vm._v("\n    " + _vm._s(_vm.$t('property.propertyDetails.neighborhoodTitle')) + "\n  ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), [_c('StarRateBox', {
    staticClass: "star-rate-box",
    attrs: {
      "withStarRating": true,
      "rate": _vm.neighborhoodRating,
      "reviews-count": _vm.neighborhoodReviewCount
    }
  }), _vm._v(" "), _c('b-row', {
    staticClass: "m-0 justify-content-between review-container"
  }, [_vm._l(_vm.neighbourReviewData, function (reviewData, ratingLabel) {
    return _c('b-col', {
      key: ratingLabel,
      staticClass: "d-inline-block p-0 review-sub-container",
      attrs: {
        "cols": "12",
        "md": "6"
      }
    }, [_c('RateWithLabel', {
      attrs: {
        "rating-label": ratingLabel,
        "rating-avg": reviewData
      }
    })], 1);
  }), _vm._v(" "), _c('b-col', {
    staticClass: "p-0",
    attrs: {
      "cols": "12"
    }
  }, [_c('PropertyNearBy')], 1)], 2)]], 2);
};
var PropertyNeighborhoodvue_type_template_id_4394d1f5_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/property-details/PropertyNeighborhood.vue?vue&type=template&id=4394d1f5&scoped=true&

// EXTERNAL MODULE: ./components/property-details/PropertyNearBy.vue + 9 modules
var PropertyNearBy = __webpack_require__(533);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyNeighborhood.vue?vue&type=script&lang=js&




/* harmony default export */ var PropertyNeighborhoodvue_type_script_lang_js_ = ({
  name: 'PropertyNeighborhood',
  components: {
    PropertySection: PropertySection["a" /* default */],
    RateWithLabel: RateWithLabel,
    PropertyNearBy: PropertyNearBy["a" /* default */],
    StarRateBox: StarRateBox["a" /* default */]
  },
  props: {
    neighbourReviewData: {
      type: Object,
      required: true
    },
    neighborhoodRating: {
      type: Number
    },
    neighborhoodReviewCount: {
      type: Number
    }
  }
});
// CONCATENATED MODULE: ./components/property-details/PropertyNeighborhood.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_details_PropertyNeighborhoodvue_type_script_lang_js_ = (PropertyNeighborhoodvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/property-details/PropertyNeighborhood.vue



function PropertyNeighborhood_injectStyles (context) {
  
  var style0 = __webpack_require__(907)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PropertyNeighborhood_component = Object(componentNormalizer["a" /* default */])(
  property_details_PropertyNeighborhoodvue_type_script_lang_js_,
  PropertyNeighborhoodvue_type_template_id_4394d1f5_scoped_true_render,
  PropertyNeighborhoodvue_type_template_id_4394d1f5_scoped_true_staticRenderFns,
  false,
  PropertyNeighborhood_injectStyles,
  "4394d1f5",
  "69e5a5b9"
  
)

/* harmony default export */ var PropertyNeighborhood = (PropertyNeighborhood_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/SimilarProperties.vue?vue&type=template&id=7c8b8be6&scoped=true&
var SimilarPropertiesvue_type_template_id_7c8b8be6_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "similar-properties"
  }, [_c('b-container', [_c('b-row', [_c('b-col', {
    attrs: {
      "md": "12"
    }
  }, [_c('PropertySection', {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function () {
        return [_vm._v("\n            " + _vm._s(_vm.$t('property.propertyDetails.similarPropertiesTitle')) + "\n          ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), [_c('b-overlay', {
    attrs: {
      "show": _vm.similarProperties.loading
    }
  }, [_c('swiper', {
    ref: "mySwiper",
    staticClass: "swiper gallery-top",
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.similarProperties.data.nearbyproperty, function (row, index) {
    return _c('swiper-slide', {
      key: index
    }, [_c('property-card', {
      attrs: {
        "card-data": row
      },
      on: {
        "update": function ($event) {
          return _vm.updateCompare($event);
        },
        "showSendOfferModal": _vm.handleOffer,
        "updateFavouriteProperty": _vm.updateFavourite
      }
    })], 1);
  }), 1)], 1), _vm._v(" "), _c('b-row', [_c('b-col', {
    staticClass: "pagination_buttons"
  }, [_c('div', {
    staticClass: "swiper-nav-button swiper-button-prev swiper-similar-button-prev swiper-button-white",
    attrs: {
      "slot": "button-prev"
    },
    slot: "button-prev"
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-similar-pagination",
    attrs: {
      "slot": "pagination"
    },
    slot: "pagination"
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-nav-button swiper-button-next swiper-similar-button-next swiper-button-white",
    attrs: {
      "slot": "button-next"
    },
    slot: "button-next"
  })])], 1)]], 2)], 1)], 1)], 1)], 1);
};
var SimilarPropertiesvue_type_template_id_7c8b8be6_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/property-details/SimilarProperties.vue?vue&type=template&id=7c8b8be6&scoped=true&

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(332);

// EXTERNAL MODULE: ./components/shared/PropertyCard.vue + 4 modules
var PropertyCard = __webpack_require__(367);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/SimilarProperties.vue?vue&type=script&lang=js&




const {
  mapState,
  mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('PropertyModule');
/* harmony default export */ var SimilarPropertiesvue_type_script_lang_js_ = ({
  name: 'swiper-example-multiple-slides-per-biew',
  title: 'Multiple slides per view',
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"],
    PropertyCard: PropertyCard["a" /* default */],
    PropertySection: PropertySection["a" /* default */]
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        pagination: {
          el: '.swiper-similar-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-similar-button-next',
          prevEl: '.swiper-similar-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1
          }
        }
      },
      compareArray: []
    };
  },
  computed: {
    ...mapState(['similarProperties', 'propertyDetails'])
  },
  mounted() {
    let content = {
      property_id: this.propertyDetails.property.property_id,
      property_slug: this.$route.params.id
    };
    this.getSimilarProperties(content);
  },
  methods: {
    ...mapActions(['updatePropertyFavourite', 'showSendOfferModal', 'getSimilarProperties']),
    handleOffer(offer) {
      this.showSendOfferModal({
        offerData: offer
      });
      const offerCard = document.getElementById('send-offer-mobile-view');
      offerCard.classList.remove('fixed-offer-card');
    },
    updateFavourite(data) {
      let formdata = {
        prop_id: data.property_id,
        term: data.term,
        type: 'similar-properties'
      };
      this.updatePropertyFavourite(formdata);
    },
    updateCompare(id) {
      this.$emit('update', id);
    }
  }
});
// CONCATENATED MODULE: ./components/property-details/SimilarProperties.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_details_SimilarPropertiesvue_type_script_lang_js_ = (SimilarPropertiesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/property-details/SimilarProperties.vue



function SimilarProperties_injectStyles (context) {
  
  var style0 = __webpack_require__(909)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SimilarProperties_component = Object(componentNormalizer["a" /* default */])(
  property_details_SimilarPropertiesvue_type_script_lang_js_,
  SimilarPropertiesvue_type_template_id_7c8b8be6_scoped_true_render,
  SimilarPropertiesvue_type_template_id_7c8b8be6_scoped_true_staticRenderFns,
  false,
  SimilarProperties_injectStyles,
  "7c8b8be6",
  "e1a51a90"
  
)

/* harmony default export */ var SimilarProperties = (SimilarProperties_component.exports);
// EXTERNAL MODULE: ./components/shared/Breadcrumbs.vue + 4 modules
var Breadcrumbs = __webpack_require__(353);

// EXTERNAL MODULE: ./components/favorite-properties/SendOfferModal.vue + 4 modules
var SendOfferModal = __webpack_require__(14);

// EXTERNAL MODULE: ./components/property/PropertyCompare.vue + 4 modules
var PropertyCompare = __webpack_require__(542);

// EXTERNAL MODULE: ./components/property/CompareModal.vue + 4 modules
var CompareModal = __webpack_require__(543);

// EXTERNAL MODULE: ./components/property-details/PropertyBidDetails.vue + 4 modules
var PropertyBidDetails = __webpack_require__(399);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/ReviewsModal.vue?vue&type=template&id=877d81ac&scoped=true&
var ReviewsModalvue_type_template_id_877d81ac_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-modal', _vm._b({
    ref: "review-modal",
    attrs: {
      "centered": "",
      "hide-header": "",
      "hide-footer": ""
    },
    on: {
      "hidden": _vm.onCloseModal
    }
  }, 'b-modal', _vm.$attrs, false), [_c('b-overlay', {
    attrs: {
      "show": _vm.modalLoading
    }
  }, [_c('header', {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c('h2', {
    staticClass: "mb-0"
  }, [_vm._v("\n          " + _vm._s(_vm.headerTitle) + "\n        ")]), _vm._v(" "), _c('b-button', {
    staticClass: "close-button",
    attrs: {
      "size": "sm"
    },
    on: {
      "click": _vm.onCloseModal
    }
  }, [_c('svg-icon', {
    attrs: {
      "name": "close-black"
    }
  })], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "m-0 justify-content-between px-0"
  }, _vm._l(_vm.reviewsData, function (reviewData, ratingLabel) {
    return _c('b-col', {
      key: ratingLabel,
      staticClass: "d-inline-block p-0 review-sub-container",
      attrs: {
        "cols": "12"
      }
    }, [_c('RateWithLabel', {
      attrs: {
        "rating-label": ratingLabel,
        "rating-avg": reviewData
      }
    })], 1);
  }), 1)], 1)], 1)], 1);
};
var ReviewsModalvue_type_template_id_877d81ac_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/ReviewsModal.vue?vue&type=template&id=877d81ac&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/ReviewsModal.vue?vue&type=script&lang=js&


const {
  mapState: ReviewsModalvue_type_script_lang_js_mapState,
  mapActions: ReviewsModalvue_type_script_lang_js_mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('PropertyModule');
/* harmony default export */ var ReviewsModalvue_type_script_lang_js_ = ({
  name: 'ReviewsModal',
  components: {
    RateWithLabel: RateWithLabel
  },
  props: {
    headerTitle: {
      type: String
    },
    reviewsData: {
      type: Array
    }
  },
  computed: {
    ...ReviewsModalvue_type_script_lang_js_mapState({
      visibility: state => state.reviewModal.visibility,
      modalLoading: state => state.reviewModal.loading
    })
  },
  watch: {
    visibility(newVal) {
      newVal ? this.$refs['review-modal'].show() : this.$refs['review-modal'].hide();
    }
  },
  beforeDestroy() {
    this.hideReviewModal();
  },
  methods: {
    ...ReviewsModalvue_type_script_lang_js_mapActions(['hideReviewModal']),
    onCloseModal() {
      this.hideReviewModal();
    }
  }
});
// CONCATENATED MODULE: ./components/shared/ReviewsModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_ReviewsModalvue_type_script_lang_js_ = (ReviewsModalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/shared/ReviewsModal.vue



function ReviewsModal_injectStyles (context) {
  
  var style0 = __webpack_require__(911)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ReviewsModal_component = Object(componentNormalizer["a" /* default */])(
  shared_ReviewsModalvue_type_script_lang_js_,
  ReviewsModalvue_type_template_id_877d81ac_scoped_true_render,
  ReviewsModalvue_type_template_id_877d81ac_scoped_true_staticRenderFns,
  false,
  ReviewsModal_injectStyles,
  "877d81ac",
  "70db1766"
  
)

/* harmony default export */ var ReviewsModal = (ReviewsModal_component.exports);
// EXTERNAL MODULE: ./components/shared/SwitchInput.vue + 4 modules
var SwitchInput = __webpack_require__(547);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/EditProperty.vue?vue&type=template&id=6aca219a&
var EditPropertyvue_type_template_id_6aca219a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    staticClass: "btn btn-link text-primary",
    on: {
      "click": _vm.editProperty
    }
  }, [_vm._ssrNode(_vm._ssrEscape("\n  " + _vm._s(_vm.$t('common.editProperty')) + "\n"))]);
};
var EditPropertyvue_type_template_id_6aca219a_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/EditProperty.vue?vue&type=template&id=6aca219a&

// EXTERNAL MODULE: ./helpers/axios-port.js
var axios_port = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/EditProperty.vue?vue&type=script&lang=js&

/* harmony default export */ var EditPropertyvue_type_script_lang_js_ = ({
  props: {
    propertyId: {
      required: true,
      type: String | Number
    }
  },
  methods: {
    saveDataToSessionStorage(data, masterData) {
      let city = masterData.rootLocations.filter(location => {
        if (location.location_id === data.locations[0]) {
          return location;
        }
      })[0];
      if (data.locations.length > 1) {
        axios_port["a" /* default */].$get(`/getChildrenRoutes/${city.location_id}`).then(response => {
          let district = response.Data.rootLocations.filter(location => {
            if (location.location_id === data.locations[1]) {
              return location;
            }
          })[0];
          if (data.locations.length > 2) {
            axios_port["a" /* default */].$get(`/getChildrenRoutes/${district.location_id}`).then(response => {
              let neighbourhood = response.Data.rootLocations.filter(location => {
                if (location.location_id === data.locations[2]) {
                  return location;
                }
              })[0];
              let dataToCache = JSON.stringify({
                form1: {
                  city: city,
                  district: district,
                  neighbourhood: neighbourhood,
                  location_id: neighbourhood.location_id ? neighbourhood.location_id : district.location_id ? district.location_id : city.location_id ? city.location_id : 0,
                  street_name: data.street_name ? data.street_name : ''
                },
                form2: {
                  bathrooms: data.bathroom,
                  bedrooms: data.bedroom,
                  furnishType: data.furnish_type_id,
                  propertyType: data.property_type_id,
                  bed_types: data.bed_types
                },
                form3: {
                  bathRoomAmenities: data.amenities && data.amenities.Bathroom ? data.amenities.Bathroom.map(amenity => {
                    return amenity.id;
                  }) : [],
                  kitchenAmenities: data.amenities && data.amenities.Kitchen ? data.amenities.Kitchen.map(amenity => {
                    return amenity.id;
                  }) : [],
                  propertyAmenities: data.amenities && data.amenities.Property ? data.amenities.Property.map(amenity => {
                    return amenity.id;
                  }) : []
                },
                form4: {
                  daily_price: data.daily_price,
                  description_en: data.description_en,
                  monthly_price: data.monthly_price,
                  name_en: data.property_name,
                  term: data.term
                },
                form5: {
                  default_image: data.default_image,
                  oldImages: data.old_images
                }
              });
              this.saveAnNavigate(dataToCache);
            });
          } else {
            let neighbourhood = {};
            let dataToCache = JSON.stringify({
              form1: {
                city: city,
                district: district,
                neighbourhood: neighbourhood,
                location_id: neighbourhood.location_id ? neighbourhood.location_id : district.location_id ? district.location_id : city.location_id ? city.location_id : 0,
                street_name: data.street_name ? data.street_name : ''
              },
              form2: {
                bathrooms: data.bathroom,
                bedrooms: data.bedroom,
                furnishType: data.furnish_type_id,
                propertyType: data.property_type_id,
                bed_types: data.bed_types
              },
              form3: {
                bathRoomAmenities: data.amenities && data.amenities.Bathroom ? data.amenities.Bathroom.map(amenity => {
                  return amenity.id;
                }) : [],
                kitchenAmenities: data.amenities && data.amenities.Kitchen ? data.amenities.Kitchen.map(amenity => {
                  return amenity.id;
                }) : [],
                propertyAmenities: data.amenities && data.amenities.Property ? data.amenities.Property.map(amenity => {
                  return amenity.id;
                }) : []
              },
              form4: {
                daily_price: data.daily_price,
                description_en: data.description_en,
                monthly_price: data.monthly_price,
                name_en: data.property_name,
                term: data.term
              },
              form5: {
                default_image: data.default_image,
                images: data.old_images.map(imageUrl => {
                  return {
                    default: false,
                    image: imageUrl
                  };
                })
              }
            });
            this.saveAnNavigate(dataToCache);
          }
        });
      } else {
        let district = {};
        let neighbourhood = {};
        let dataToCache = JSON.stringify({
          form1: {
            city: city,
            district: district,
            neighbourhood: neighbourhood,
            location_id: neighbourhood.location_id ? neighbourhood.location_id : district.location_id ? district.location_id : city.location_id ? city.location_id : 0,
            street_name: data.street_name ? data.street_name : ''
          },
          form2: {
            bathrooms: data.bathroom,
            bedrooms: data.bedroom,
            furnishType: data.furnish_type_id,
            propertyType: data.property_type_id,
            bed_types: data.bed_types
          },
          form3: {
            bathRoomAmenities: data.amenities && data.amenities.Bathroom ? data.amenities.Bathroom.map(amenity => {
              return amenity.id;
            }) : [],
            kitchenAmenities: data.amenities && data.amenities.Kitchen ? data.amenities.Kitchen.map(amenity => {
              return amenity.id;
            }) : [],
            propertyAmenities: data.amenities && data.amenities.Property ? data.amenities.Property.map(amenity => {
              return amenity.id;
            }) : []
          },
          form4: {
            daily_price: data.daily_price,
            description_en: data.description_en,
            monthly_price: data.monthly_price,
            name_en: data.property_name,
            term: data.term
          },
          form5: {
            default_image: data.default_image,
            images: data.old_images.map(imageUrl => {
              return {
                default: false,
                image: imageUrl
              };
            })
          }
        });
        this.saveAnNavigate(dataToCache);
      }
    },
    saveAnNavigate(dataToCache) {
      sessionStorage.setItem('addListing', dataToCache);
      window.location.href = '/properties/add/1?edit=' + this.propertyId;
    },
    editProperty() {
      axios_port["a" /* default */].$get(`/getPropMasterData`).then(response => {
        axios_port["a" /* default */].$get(`/user/properties/${this.propertyId}`).then(res => {
          this.saveDataToSessionStorage(res.Data, response.Data);
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./components/shared/EditProperty.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_EditPropertyvue_type_script_lang_js_ = (EditPropertyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/shared/EditProperty.vue





/* normalize component */

var EditProperty_component = Object(componentNormalizer["a" /* default */])(
  shared_EditPropertyvue_type_script_lang_js_,
  EditPropertyvue_type_template_id_6aca219a_render,
  EditPropertyvue_type_template_id_6aca219a_staticRenderFns,
  false,
  null,
  null,
  "bc72270c"
  
)

/* harmony default export */ var EditProperty = (EditProperty_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyOwnedBy.vue?vue&type=template&id=a8f3840a&scoped=true&
var PropertyOwnedByvue_type_template_id_a8f3840a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('PropertySection', [[_c('div', {
    staticClass: "owner-name"
  }, [_c('div', [_c('span', {
    staticClass: "owner-by"
  }, [_vm._v(" " + _vm._s(_vm.$t('common.ownedBy')) + " ")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover.top",
      value: _vm.$t('common.landlordReviewsTooltib') + _vm.ownerName,
      expression: "\n            $t('common.landlordReviewsTooltib') + ownerName\n          ",
      modifiers: {
        "hover": true,
        "top": true
      }
    }],
    staticClass: "name",
    on: {
      "click": function ($event) {
        _vm.showReviewModal();
        _vm.getLandlordQuestions({
          landlord_id: _vm.ownerId
        });
      }
    }
  }, [_vm._v(_vm._s(_vm._f("displayExcerpt")(_vm.ownerName, 10)))])]), _vm._v(" "), _c('StarRateBox', {
    attrs: {
      "rate": _vm.rate.toFixed(2),
      "reviews-count": _vm.reviewsCount
    }
  })], 1)]], 2);
};
var PropertyOwnedByvue_type_template_id_a8f3840a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/property-details/PropertyOwnedBy.vue?vue&type=template&id=a8f3840a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property-details/PropertyOwnedBy.vue?vue&type=script&lang=js&



const {
  mapState: PropertyOwnedByvue_type_script_lang_js_mapState,
  mapActions: PropertyOwnedByvue_type_script_lang_js_mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('PropertyModule');
const {
  mapState: mapUserState
} = Object(external_vuex_["createNamespacedHelpers"])('UserModule');
/* harmony default export */ var PropertyOwnedByvue_type_script_lang_js_ = ({
  name: 'PropertyNeighborhood',
  components: {
    PropertySection: PropertySection["a" /* default */],
    StarRateBox: StarRateBox["a" /* default */]
  },
  props: {
    ownerName: {
      type: String
    },
    ownerId: {
      type: Number
    },
    rate: {
      type: Number
    },
    reviewsCount: {
      type: Number
    }
  },
  methods: {
    ...PropertyOwnedByvue_type_script_lang_js_mapActions(['showReviewModal', 'getLandlordQuestions'])
  }
});
// CONCATENATED MODULE: ./components/property-details/PropertyOwnedBy.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_details_PropertyOwnedByvue_type_script_lang_js_ = (PropertyOwnedByvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/property-details/PropertyOwnedBy.vue



function PropertyOwnedBy_injectStyles (context) {
  
  var style0 = __webpack_require__(913)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PropertyOwnedBy_component = Object(componentNormalizer["a" /* default */])(
  property_details_PropertyOwnedByvue_type_script_lang_js_,
  PropertyOwnedByvue_type_template_id_a8f3840a_scoped_true_render,
  PropertyOwnedByvue_type_template_id_a8f3840a_scoped_true_staticRenderFns,
  false,
  PropertyOwnedBy_injectStyles,
  "a8f3840a",
  "450c2781"
  
)

/* harmony default export */ var PropertyOwnedBy = (PropertyOwnedBy_component.exports);
// EXTERNAL MODULE: ./helpers/common.js
var common = __webpack_require__(531);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/_id.vue?vue&type=script&lang=js&






















const {
  mapState: _idvue_type_script_lang_js_mapState,
  mapActions: _idvue_type_script_lang_js_mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('PropertyModule');
const {
  mapState: _idvue_type_script_lang_js_mapUserState
} = Object(external_vuex_["createNamespacedHelpers"])('UserModule');
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    PropertySection: PropertySection["a" /* default */],
    PropertyDescription: PropertyDescription["a" /* default */],
    PropertySleepingArrangements: PropertySleepingArrangements["a" /* default */],
    PropertyAmenities: PropertyAmenities["a" /* default */],
    PropertyDetails: PropertyDetails["a" /* default */],
    PropertyReviews: PropertyReviews,
    PropertyBid: PropertyBid["a" /* default */],
    PropertyGallery: PropertyGallery["a" /* default */],
    PropertyNeighborhood: PropertyNeighborhood,
    StarRateBox: StarRateBox["a" /* default */],
    Breadcrumbs: Breadcrumbs["a" /* default */],
    SimilarProperties: SimilarProperties,
    SendOfferModal: SendOfferModal["a" /* default */],
    PropertyCompare: PropertyCompare["a" /* default */],
    CompareModal: CompareModal["a" /* default */],
    PropertyBidDetails: PropertyBidDetails["a" /* default */],
    ReviewsModal: ReviewsModal,
    SwitchInput: SwitchInput["a" /* default */],
    EditProperty: EditProperty,
    PropertyOwnedBy: PropertyOwnedBy
  },
  data() {
    return {
      loading: false,
      shareUrlfb: `https://www.facebook.com/sharer/sharer.php?u=`,
      shareUrltwitter: `https://twitter.com/intent/tweet?url=`,
      screenWidth: 0,
      openSide: 0,
      compareArray: []
    };
  },
  fetch({
    store: {
      dispatch
    },
    params,
    query
  }) {
    let content = {
      propertySlug: params.id,
      term: query.term == 1 ? 1 : 0
    };
    return dispatch('PropertyModule/loadPropertyData', content);
  },
  computed: {
    ..._idvue_type_script_lang_js_mapState(['propertyDetails', 'property', 'propertyReviews', 'compareProperty', 'reviewQuestions']),
    ..._idvue_type_script_lang_js_mapUserState(['user']),
    isRTL() {
      return this.$store.getters['CoreModule/isRTL'];
    },
    fullUrl() {
      return typeof location !== 'undefined' && location.href;
    },
    domainName() {
      return typeof location !== 'undefined' && location.origin;
    },
    urlFacebook() {
      return this.shareUrlfb + this.fullUrl;
    },
    urlTwittter() {
      return this.shareUrltwitter + this.fullUrl;
    },
    breadcrumbItems() {
      if (this.screenWidth < 768) {
        return [{
          text: this.propertyDetails.property.city,
          active: true
        }];
      } else {
        return [{
          text: this.propertyDetails.property.city,
          to: this.localePath(`/properties?keyword=${this.propertyDetails.property.city}&term=${this.$route.query.term}`)
        }, {
          text: this.propertyDetails.property.district,
          to: this.localePath(`/properties?keyword=${this.propertyDetails.property.district}&term=${this.$route.query.term}`)
        }, {
          text: this.propertyDetails.property.neighbourhood,
          to: this.localePath(`/properties?keyword=${this.propertyDetails.property.neighbourhood}&term=${this.$route.query.term}`)
        }, {
          text: this.propertyDetails.property.property_location_name,
          active: true
        }].filter(item => {
          return item.text;
        });
      }
    },
    getUnemptyBedrooms() {
      return ((this.propertyDetails.property.bed_types || {}).bedrooms || []).filter(currentBedroom => currentBedroom.types.length > 0);
    }
  },
  mounted() {
    this.getPropertyReviews({
      property_id: this.propertyDetails.property.property_id,
      per_page: this.property.numOfReviewsShown
    });
    if (false) {}
  },
  watch: {
    showWarningToaster(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.hideWarningToaster();
        }, 3000);
      }
    },
    compareArray() {
      this.getCompareProperty(this.compareArray);
    }
  },
  methods: {
    ..._idvue_type_script_lang_js_mapActions(['updatePropertyFavourite', 'hideWarningFavouriteModal', 'hideWarningToaster', 'getPropertyReviews', 'getCompareProperty', 'showReviewModal', 'getLandlordQuestions', 'updatePropertyOpen']),
    updateFavourite() {
      let formdata = {
        prop_id: this.propertyDetails.property.property_id,
        term: this.propertyDetails.term,
        type: 'single-property'
      };
      this.updatePropertyFavourite(formdata);
    },
    onMouseOver() {
      this.$refs.dropdown.visible = true;
    },
    onMouseLeave() {
      this.$refs.dropdown.visible = false;
    },
    setScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
    viewAllReviews(viewLess) {
      this.getPropertyReviews({
        property_id: this.propertyDetails.property.property_id,
        ...(viewLess.viewLess ? {
          per_page: this.property.numOfReviewsShown
        } : {})
      });
    },
    updateCompare(data) {
      if (this.compareArray.length < 4 && this.compareArray.includes(data) == false) {
        this.compareArray.push(data);
      }
      this.openSide++;
    },
    clearCompareData() {
      this.compareArray = [];
    },
    deleteDetectedItem(property_id) {
      let index = this.compareArray.findIndex(item => item === property_id);
      this.compareArray.splice(index, 1);
    },
    compareCurrent() {
      let id = this.propertyDetails.property.property_id;
      this.updateCompare(id);
    },
    back() {
      this.$router.back();
    },
    changePropertyOpen(status, id) {
      this.updatePropertyOpen({
        id,
        status: +status,
        type: 'propertyDetails'
      });
    },
    goToPropertyReviews(hash) {
      Object(common["a" /* scrollToElement */])(hash);
    }
  },
  head() {
    return {
      title: `property in  ${this.$route.params.id}`
    };
  }
});
// CONCATENATED MODULE: ./pages/properties/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var properties_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/properties/_id.vue



function _id_injectStyles (context) {
  
  var style0 = __webpack_require__(915)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  properties_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _id_injectStyles,
  "cf115498",
  "5ffd129a"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map