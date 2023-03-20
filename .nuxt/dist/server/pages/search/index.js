exports.ids = [50];
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

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(448);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("20c2c1c7", content, true)

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(449);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("46f7ed82", content, true)

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Assala.webp": 459,
	"./Blue Lagoon.webp": 460,
	"./Mashraba.webp": 461,
	"./blue hole.webp": 462,
	"./cairo.webp": 463,
	"./canyon.webp": 464,
	"./dahab.webp": 465,
	"./giza.webp": 466,
	"./light_house.webp": 467,
	"./marsa matruh.webp": 468,
	"./north coast.webp": 469
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 412;

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(484);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("fdd58c96", content, true, context)
};

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slick-track[data-v-e4caeaf8]{position:relative;top:0;left:0;display:block;-webkit-transform:translateZ(0);transform:translateZ(0)}.slick-track.slick-center[data-v-e4caeaf8]{margin-left:auto;margin-right:auto}.slick-track[data-v-e4caeaf8]:after,.slick-track[data-v-e4caeaf8]:before{display:table;content:\"\"}.slick-track[data-v-e4caeaf8]:after{clear:both}.slick-loading .slick-track[data-v-e4caeaf8]{visibility:hidden}.slick-slide[data-v-e4caeaf8]{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide[data-v-e4caeaf8]{float:right}.slick-slide img[data-v-e4caeaf8]{display:block}.slick-slide.slick-loading img[data-v-e4caeaf8]{display:none}.slick-slide.dragging img[data-v-e4caeaf8]{pointer-events:none}.slick-initialized .slick-slide[data-v-e4caeaf8]{display:block}.slick-loading .slick-slide[data-v-e4caeaf8]{visibility:hidden}.slick-vertical .slick-slide[data-v-e4caeaf8]{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden[data-v-21137603]{display:none}.slick-slider[data-v-3d1a4f76]{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list[data-v-3d1a4f76]{position:relative;display:block;overflow:hidden;margin:0;padding:0;-webkit-transform:translateZ(0);transform:translateZ(0)}.slick-list[data-v-3d1a4f76]:focus{outline:none}.slick-list.dragging[data-v-3d1a4f76]{cursor:pointer;cursor:hand}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset 'UTF-8';\n/* Icons */\n@font-face {\n  font-family: 'slick';\n  src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA)\n    format('woff');\n}\n/* Arrows */\n.slick-prev,\n.slick-next {\n  font-size: 0;\n  line-height: 0;\n\n  position: absolute;\n  top: 50%;\n\n  display: block;\n\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n\n  cursor: pointer;\n\n  color: transparent;\n  border: none;\n  outline: none;\n  background: transparent;\n}\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus {\n  color: transparent;\n  outline: none;\n  background: transparent;\n}\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before {\n  opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before {\n  opacity: 0.25;\n}\n\n.slick-prev:before,\n.slick-next:before {\n  font-family: 'slick';\n  font-size: 20px;\n  line-height: 1;\n\n  opacity: 0.75;\n  color: white;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev {\n  left: -25px;\n}\n[dir='rtl'] .slick-prev {\n  right: -25px;\n  left: auto;\n}\n.slick-prev:before {\n  content: '←';\n}\n[dir='rtl'] .slick-prev:before {\n  content: '→';\n}\n\n.slick-next {\n  right: -25px;\n}\n[dir='rtl'] .slick-next {\n  right: auto;\n  left: -25px;\n}\n.slick-next:before {\n  content: '→';\n}\n[dir='rtl'] .slick-next:before {\n  content: '←';\n}\n\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px;\n}\n\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n\n  display: block;\n\n  width: 100%;\n  padding: 0;\n  margin: 0;\n\n  list-style: none;\n\n  text-align: center;\n}\n.slick-dots li {\n  position: relative;\n\n  display: inline-block;\n\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  padding: 0;\n\n  cursor: pointer;\n}\n.slick-dots li button {\n  font-size: 0;\n  line-height: 0;\n\n  display: block;\n\n  width: 20px;\n  height: 20px;\n  padding: 5px;\n\n  cursor: pointer;\n\n  color: transparent;\n  border: 0;\n  outline: none;\n  background: transparent;\n}\n.slick-dots li button:hover,\n.slick-dots li button:focus {\n  outline: none;\n}\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before {\n  opacity: 1;\n}\n.slick-dots li button:before {\n  font-family: 'slick';\n  font-size: 6px;\n  line-height: 20px;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 20px;\n  height: 20px;\n\n  content: '•';\n  text-align: center;\n\n  opacity: 0.25;\n  color: black;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before {\n  opacity: 0.75;\n  color: black;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Assala.21e09dc.webp";

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Blue Lagoon.60f0e4f.webp";

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Mashraba.bc7e0e5.webp";

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/blue hole.4e5d907.webp";

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cairo.e4d07dd.webp";

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/canyon.a611516.webp";

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dahab.ad97b13.webp";

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/giza.5e84723.webp";

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/light_house.3f25071.webp";

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/marsa matruh.52ae6b3.webp";

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/north coast.0bd6d6f.webp";

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Assala.jpg": 471,
	"./Blue Lagoon.jpg": 472,
	"./Mashraba.jpg": 473,
	"./blue hole.jpg": 474,
	"./cairo.jpg": 475,
	"./canyon.jpg": 476,
	"./dahab.jpg": 477,
	"./giza.jpg": 478,
	"./light_house.jpg": 479,
	"./marsa matruh.jpg": 480,
	"./north coast.jpg": 481,
	"./test1.jpg": 482
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 470;

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Assala.45933eb.jpg";

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Blue Lagoon.99fa9a8.jpg";

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Mashraba.d053a3b.jpg";

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/blue hole.f699185.jpg";

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cairo.e9d2170.jpg";

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/canyon.d048677.jpg";

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dahab.2c96767.jpg";

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/giza.540fe89.jpg";

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/light_house.617b94e.jpg";

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/marsa matruh.1461687.jpg";

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/north coast.bd1241e.jpg";

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/test1.956b938.jpg";

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DahabCities_vue_vue_type_style_index_0_id_f378cecc_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(413);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DahabCities_vue_vue_type_style_index_0_id_f378cecc_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DahabCities_vue_vue_type_style_index_0_id_f378cecc_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DahabCities_vue_vue_type_style_index_0_id_f378cecc_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_DahabCities_vue_vue_type_style_index_0_id_f378cecc_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-f378cecc]{color:#204ecf}.dark-blue[data-v-f378cecc]{color:#0f256e !important}.gray[data-v-f378cecc]{color:#262d3d}.light-gray[data-v-f378cecc]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-f378cecc]{color:rgba(38,45,61,.32)}.black-light[data-v-f378cecc]{color:#111}.btn.btn-outline-secondary[data-v-f378cecc]{color:#333}label[data-v-f378cecc]{text-transform:capitalize}.object-fit-cover[data-v-f378cecc]{object-fit:cover}.object-fit-contain[data-v-f378cecc]{object-fit:contain}.font-14[data-v-f378cecc]{font-size:14px}.font-18[data-v-f378cecc]{font-size:18px}.spacer-5[data-v-f378cecc]{height:5px;width:100%;display:block}.spacer-10[data-v-f378cecc]{height:10px;width:100%;display:block}.spacer-15[data-v-f378cecc]{height:15px;width:100%;display:block}.spacer-20[data-v-f378cecc]{height:20px;width:100%;display:block}.spacer-25[data-v-f378cecc]{height:25px;width:100%;display:block}.spacer-30[data-v-f378cecc]{height:30px;width:100%;display:block}.spacer-40[data-v-f378cecc]{height:40px;width:100%;display:block}.spacer-50[data-v-f378cecc]{height:50px;width:100%;display:block}.spacer-65[data-v-f378cecc]{height:65px;width:100%;display:block}.spacer-100[data-v-f378cecc]{height:100px;width:100%;display:block}.sb-wrapper[data-v-f378cecc]{position:relative}.sb-wrapper .sb-button[data-v-f378cecc]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-f378cecc]{cursor:pointer}.sb-wrapper .sb-button[data-v-f378cecc]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-f378cecc]:focus{outline:1px solid}.m-end-2[data-v-f378cecc]{margin-inline-end:10px}.cities[data-v-f378cecc]{vertical-align:middle;display:flex;flex-direction:column;align-items:center;margin-bottom:20px}.cities .mobile-puller[data-v-f378cecc]{width:100%;height:1px;left:146.5px;top:545px;background:#e5e9eb;border-radius:8px;margin:0 0 60px 0}.slider-title[data-v-f378cecc]{display:flex;justify-content:flex-start;flex-direction:column;align-items:flex-start;text-align:center}.slider-title .slider-title-text[data-v-f378cecc]{font-weight:700;font-size:32px;line-height:40px;color:#262d3d;margin:auto}.city-wrapper[data-v-f378cecc]{margin:0 15px;filter:drop-shadow(0px 4px 8px rgba(39, 39, 39, 0.08))}@media(max-width: 767.98px){.city-wrapper[data-v-f378cecc]{margin:0 4px}}.city-wrapper .city-image[data-v-f378cecc]{position:relative}.city-wrapper .city-image img[data-v-f378cecc]{width:100%;height:270px;background:linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.48) 86.35%),#c4c4c4;border-radius:8px}.city-wrapper .city-image .city-title-wrapper[data-v-f378cecc]{position:relative;bottom:0;width:100%;margin:auto;z-index:5;padding:10px 12px}.city-wrapper .city-image .city-title-wrapper .city-title[data-v-f378cecc]{text-transform:capitalize;opacity:1;font-weight:600;font-size:14px;line-height:18px;color:#000;text-align:center}.slider-description[data-v-f378cecc]{font-weight:400;font-size:16px;line-height:24px;text-align:center;color:#48535b;margin:auto}.SearchPhrase[data-v-f378cecc]{border:1px solid #000;border-radius:8px;font-weight:600;font-size:15px;line-height:16px;color:#000;padding:15px 75px;width:370px;max-width:100%;height:48px;text-align:center;margin:1rem auto}.SearchPhrase[data-v-f378cecc]:hover{color:#0077e2}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner-image.6beed0d.webp";

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/home/DahabCities.vue?vue&type=template&id=f378cecc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {
    staticClass: "cities"
  }, [_vm._ssrNode("<div class=\"mobile-puller\" data-v-f378cecc></div> "), _c('b-container', {
    staticClass: "h-100"
  }, [_c('b-col', {
    staticClass: "mb-3",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "slider-title"
  }, [_c('h5', {
    staticClass: "text-center slider-title-text"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('home.explore_dahab_cities')) + "\n        ")]), _vm._v(" "), _c('span', {
    staticClass: "slider-description"
  }, [_vm._v(_vm._s(_vm.$t('home.see_more')))])])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('VueSlickCarousel', _vm._b({}, 'VueSlickCarousel', _vm.settings, false), _vm._l(_vm.cities, function (city) {
    return _c('div', {
      key: city.id
    }, [_c('div', {
      on: {
        "click": function ($event) {
          return _vm.goToProperties(city);
        }
      }
    }, [_c('div', {
      staticClass: "city-wrapper mx-0"
    }, [_c('div', {
      staticClass: "city-image"
    }, [_c('picture', [_c('source', {
      attrs: {
        "srcset": __webpack_require__(412)(`./${city.image_name}.webp`),
        "type": "image/webp"
      }
    }), _vm._v(" "), _c('source', {
      attrs: {
        "srcset": __webpack_require__(470)(`./${city.image_name}.jpg`),
        "type": "image/jpg"
      }
    }), _vm._v(" "), _c('img', {
      attrs: {
        "src": __webpack_require__(412)(`./${city.image_name}.webp`),
        "alt": city.image_name
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "city-title-wrapper"
    }, [_c('h2', {
      staticClass: "city-title"
    }, [_vm._v(_vm._s(_vm.$t(`home.${city.name}`)))])])])])])]);
  }), 0)], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('nuxt-link', {
    attrs: {
      "to": _vm.localePath('/search')
    }
  }, [_c('p', {
    staticClass: "SearchPhrase"
  }, [_c('span', {
    staticClass: "SearchPhrase2"
  }, [_vm._v(_vm._s(_vm.$t('common.explore_all_properties')))])])])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/DahabCities.vue?vue&type=template&id=f378cecc&scoped=true&

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(334);

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(332);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/shared/PropertyCard.vue + 4 modules
var PropertyCard = __webpack_require__(367);

// EXTERNAL MODULE: external "vue-slick-carousel"
var external_vue_slick_carousel_ = __webpack_require__(333);
var external_vue_slick_carousel_default = /*#__PURE__*/__webpack_require__.n(external_vue_slick_carousel_);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css
var vue_slick_carousel = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css
var vue_slick_carousel_theme = __webpack_require__(379);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/DahabCities.vue?vue&type=script&lang=js&






// optional style for arrows & dots


// import carousel from 'vue-owl-carousel'

/* harmony default export */ var DahabCitiesvue_type_script_lang_js_ = ({
  name: 'DahabCities',
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"],
    PropertyCard: PropertyCard["a" /* default */],
    VueSlickCarousel: external_vue_slick_carousel_default.a
    // carousel, //: typeof window !== 'undefined' ? () => import('vue-owl-carousel') : ''
  },

  data() {
    return {
      properties: [],
      swiperOptionThumbs: {
        slidesPerView: 'auto',
        loopedSlides: 0,
        spaceBetween: 40,
        loop: false,
        touchRatio: 0.2,
        slideToClickedSlide: false,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1200: {
            slidesPerView: 6
          },
          900: {
            slidesPerView: 2
          },
          450: {
            slidesPerView: 1
          }
        }
      },
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      settings: {
        waitForAnimate: true,
        autoplaySpeed: 2000,
        autoplay: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        initialSlide: 0,
        draggable: true,
        slidesToShow: 4,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }]
      }
    };
  },
  computed: {
    cities() {
      return [{
        name: 'dahab',
        image_name: 'dahab',
        link: 'dahab',
        id: 30
      }, {
        name: 'north coast',
        image_name: 'north coast',
        link: 'north coast',
        id: 127
      }, {
        name: 'marsa matruh',
        image_name: 'marsa matruh',
        link: 'marsa matruh',
        id: 477
      }, {
        name: 'giza',
        image_name: 'giza',
        link: 'giza',
        id: 4
      }, {
        name: 'cairo',
        image_name: 'cairo',
        link: 'cairo',
        id: 2
      }];
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['setSearchLocationId']),
    goToProperties(city) {
      localStorage.setItem('searchLocationId', JSON.stringify(city.id));
      this.setSearchLocationId(JSON.stringify(city.id));
      this.$router.push(this.localePath(`/properties/?keyword=${city.link}&term=0&location_id=${city.id}`));
    }
  }
});
// CONCATENATED MODULE: ./components/home/DahabCities.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_DahabCitiesvue_type_script_lang_js_ = (DahabCitiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/home/DahabCities.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(483)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_DahabCitiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f378cecc",
  "72a6d524"
  
)

/* harmony default export */ var DahabCities = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(830);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("8b886238", content, true, context)
};

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(832);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("01710b8e", content, true, context)
};

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBanner_vue_vue_type_style_index_0_id_d3e4b65a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(619);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBanner_vue_vue_type_style_index_0_id_d3e4b65a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBanner_vue_vue_type_style_index_0_id_d3e4b65a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBanner_vue_vue_type_style_index_0_id_d3e4b65a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBanner_vue_vue_type_style_index_0_id_d3e4b65a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.banner{padding-top:50px;height:70vh;display:flex;align-items:center;position:relative;background-size:cover;background-position:center;padding-bottom:48px}@media(max-width: 767.98px){.banner{height:auto}}.banner>.container .row .search-col{display:flex;flex-direction:column;align-items:center}.banner>.container .row .search-col>.row{margin:auto}@media(max-width: 767.98px){.banner>.container .row .search-col{margin-top:39px}}@media(max-width: 767.98px){.banner>.container .row{align-items:flex-end}}@media(max-width: 767.98px){.banner>.container .row__text-content{width:100%}}.banner>.container .row .icon{text-align:center;margin-bottom:8px}.banner>.container .row .banner-title{font-weight:600;font-size:18px;line-height:18px;text-align:center;color:#111}@media(max-width: 767.98px){.banner>.container .row .banner-title{font-size:24px}}.banner>.container .row .website-name{text-align:center;color:#fff}.banner>.container .row .banner-secondline{width:100%;font-weight:400;font-size:12px;line-height:25px;text-align:center;color:#48535b;margin-bottom:38px}@media(max-width: 767.98px){.banner>.container .row .banner-secondline{font-size:18px;margin-bottom:32px}}.banner>.container .row .how-it-works{width:214px;height:60px;padding:20px;border-radius:20px;background-color:#fdd90f;font-size:18px;display:flex;align-items:center;justify-content:center;font-weight:bold;text-transform:capitalize;cursor:pointer}@media(max-width: 767.98px){.banner>.container .row .how-it-works{width:fit-content;font-size:10px;padding:10px;height:30px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29b98366_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(620);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29b98366_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29b98366_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29b98366_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29b98366_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 832:
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
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.home-main .banner-image-wrapper{height:100%}.home-main .banner-image-wrapper .banner-image{height:100%}.home-main .banner-image-wrapper .banner-image .banner-image-container{height:100%;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:contain;background-position:center;background-repeat:no-repeat}@media(max-width: 767.98px){.home-main .banner-image-wrapper .banner-image .banner-image-container{background-position:top}}.home-main .banner-image-wrapper.mobile-only{display:none}@media(max-width: 767.98px){.home-main .banner-image-wrapper.mobile-only{height:300px !important;display:block}.home-main .banner-image-wrapper.desktop-only{display:none}}.dahab{overflow:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/search/index.vue?vue&type=template&id=29b98366&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "home-main"
  }, [_vm._ssrNode("<div class=\"home-front\">", "</div>", [_c('HomeBanner')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"dahab\">", "</div>", [_c('DahabCities')], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/search/index.vue?vue&type=template&id=29b98366&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/home/HomeBanner.vue?vue&type=template&id=d3e4b65a&
var HomeBannervue_type_template_id_d3e4b65a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_vm._ssrNode("<div class=\"banner search-wrapper pt-0\">", "</div>", [_c('b-container', {
    staticClass: "h-100"
  }, [_c('b-row', {
    staticClass: "h-100"
  }, [_c('b-col', {
    staticClass: "search-col px-0",
    attrs: {
      "cols": "12",
      "lg": "12",
      "md": "6"
    }
  }, [_c('b-row', [_c('b-col', {
    staticClass: "transform-bottom",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "banner__text-content"
  }, [_c('div', {
    staticClass: "icon"
  }, [_c('img', {
    attrs: {
      "width": "32px",
      "height": "32px",
      "src": __webpack_require__(141),
      "alt": "Binoculars"
    }
  })]), _vm._v(" "), _c('h1', {
    staticClass: "banner-title alignment",
    domProps: {
      "innerHTML": _vm._s(_vm.$t('home.bannerTitle'))
    }
  }), _vm._v(" "), _c('h2', {
    staticClass: "banner-secondline alignment",
    domProps: {
      "innerHTML": _vm._s(_vm.$t('home.bannerSecondLine'))
    }
  })])])], 1), _vm._v(" "), _c('b-row', [_c('b-col', {
    staticClass: "align-self-end",
    attrs: {
      "cols": "12",
      "lg": "12",
      "order": _vm.order
    }
  }, [_c('SearchField')], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)]);
};
var HomeBannervue_type_template_id_d3e4b65a_staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/HomeBanner.vue?vue&type=template&id=d3e4b65a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/HomeBanner.vue?vue&type=script&lang=js&
/* harmony default export */ var HomeBannervue_type_script_lang_js_ = ({
  name: 'HomeBanner',
  components: {
    SearchField: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 667))
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
// CONCATENATED MODULE: ./components/home/HomeBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_HomeBannervue_type_script_lang_js_ = (HomeBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/home/HomeBanner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(829)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_HomeBannervue_type_script_lang_js_,
  HomeBannervue_type_template_id_d3e4b65a_render,
  HomeBannervue_type_template_id_d3e4b65a_staticRenderFns,
  false,
  injectStyles,
  null,
  "5025796c"
  
)

/* harmony default export */ var HomeBanner = (component.exports);
// EXTERNAL MODULE: ./components/home/DahabCities.vue + 4 modules
var DahabCities = __webpack_require__(535);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search/index.vue?vue&type=script&lang=js&


/* harmony default export */ var searchvue_type_script_lang_js_ = ({
  components: {
    HomeBanner: HomeBanner,
    DahabCities: DahabCities["a" /* default */]
  },
  computed: {
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    appEnv() {
      return this.$config.APP_ENV;
    }
  },
  head() {
    return {
      title: `${this.dir === 'ltr' ? 'Rentup | Search' : 'البحث'} ${this.appEnv !== 'production' ? '| Staging' : ''}`
    };
  }
});
// CONCATENATED MODULE: ./pages/search/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/search/index.vue



function search_injectStyles (context) {
  
  var style0 = __webpack_require__(831)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var search_component = Object(componentNormalizer["a" /* default */])(
  pages_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  search_injectStyles,
  null,
  "e27a2680"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (search_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map