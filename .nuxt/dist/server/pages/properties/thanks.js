exports.ids = [42];
exports.modules = {

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

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(877);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("27c8653f", content, true, context)
};

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(879);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("49797831", content, true, context)
};

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(881);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("fc6b5cba", content, true, context)
};

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(883);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5aa6e6ac", content, true, context)
};

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SimilarPropertyCard_vue_vue_type_style_index_0_id_1d206702_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(641);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SimilarPropertyCard_vue_vue_type_style_index_0_id_1d206702_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SimilarPropertyCard_vue_vue_type_style_index_0_id_1d206702_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SimilarPropertyCard_vue_vue_type_style_index_0_id_1d206702_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SimilarPropertyCard_vue_vue_type_style_index_0_id_1d206702_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-1d206702]{color:#204ecf}.dark-blue[data-v-1d206702]{color:#0f256e !important}.gray[data-v-1d206702]{color:#262d3d}.light-gray[data-v-1d206702]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-1d206702]{color:rgba(38,45,61,.32)}.black-light[data-v-1d206702]{color:#111}.btn.btn-outline-secondary[data-v-1d206702]{color:#333}label[data-v-1d206702]{text-transform:capitalize}.object-fit-cover[data-v-1d206702]{object-fit:cover}.object-fit-contain[data-v-1d206702]{object-fit:contain}.font-14[data-v-1d206702]{font-size:14px}.font-18[data-v-1d206702]{font-size:18px}.spacer-5[data-v-1d206702]{height:5px;width:100%;display:block}.spacer-10[data-v-1d206702]{height:10px;width:100%;display:block}.spacer-15[data-v-1d206702]{height:15px;width:100%;display:block}.spacer-20[data-v-1d206702]{height:20px;width:100%;display:block}.spacer-25[data-v-1d206702]{height:25px;width:100%;display:block}.spacer-30[data-v-1d206702]{height:30px;width:100%;display:block}.spacer-40[data-v-1d206702]{height:40px;width:100%;display:block}.spacer-50[data-v-1d206702]{height:50px;width:100%;display:block}.spacer-65[data-v-1d206702]{height:65px;width:100%;display:block}.spacer-100[data-v-1d206702]{height:100px;width:100%;display:block}.sb-wrapper[data-v-1d206702]{position:relative}.sb-wrapper .sb-button[data-v-1d206702]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-1d206702]{cursor:pointer}.sb-wrapper .sb-button[data-v-1d206702]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-1d206702]:focus{outline:1px solid}.m-end-2[data-v-1d206702]{margin-inline-end:10px}.property-image[data-v-1d206702]{width:86px;height:86px}.property-meta .meta-item[data-v-1d206702]{background:rgba(255,255,255,.16);border-radius:8px;padding:8px 12px;min-width:84px}.price-duration[data-v-1d206702]{color:rgba(255,255,255,.64)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_style_index_0_id_7c781b7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_style_index_0_id_7c781b7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_style_index_0_id_7c781b7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_style_index_0_id_7c781b7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Thankyou_vue_vue_type_style_index_0_id_7c781b7a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-7c781b7a]{color:#204ecf}.dark-blue[data-v-7c781b7a]{color:#0f256e !important}.gray[data-v-7c781b7a]{color:#262d3d}.light-gray[data-v-7c781b7a]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-7c781b7a]{color:rgba(38,45,61,.32)}.black-light[data-v-7c781b7a]{color:#111}.btn.btn-outline-secondary[data-v-7c781b7a]{color:#333}label[data-v-7c781b7a]{text-transform:capitalize}.object-fit-cover[data-v-7c781b7a]{object-fit:cover}.object-fit-contain[data-v-7c781b7a]{object-fit:contain}.font-14[data-v-7c781b7a]{font-size:14px}.font-18[data-v-7c781b7a]{font-size:18px}.spacer-5[data-v-7c781b7a]{height:5px;width:100%;display:block}.spacer-10[data-v-7c781b7a]{height:10px;width:100%;display:block}.spacer-15[data-v-7c781b7a]{height:15px;width:100%;display:block}.spacer-20[data-v-7c781b7a]{height:20px;width:100%;display:block}.spacer-25[data-v-7c781b7a]{height:25px;width:100%;display:block}.spacer-30[data-v-7c781b7a]{height:30px;width:100%;display:block}.spacer-40[data-v-7c781b7a]{height:40px;width:100%;display:block}.spacer-50[data-v-7c781b7a]{height:50px;width:100%;display:block}.spacer-65[data-v-7c781b7a]{height:65px;width:100%;display:block}.spacer-100[data-v-7c781b7a]{height:100px;width:100%;display:block}.sb-wrapper[data-v-7c781b7a]{position:relative}.sb-wrapper .sb-button[data-v-7c781b7a]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-7c781b7a]{cursor:pointer}.sb-wrapper .sb-button[data-v-7c781b7a]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-7c781b7a]:focus{outline:1px solid}.m-end-2[data-v-7c781b7a]{margin-inline-end:10px}.thankyou-title[data-v-7c781b7a]{font-size:42px}p[data-v-7c781b7a]{color:rgba(255,255,255,.6)}hr[data-v-7c781b7a]{background:#fff}.view-all[data-v-7c781b7a]{display:flex;flex-direction:row;justify-content:center;align-items:center;background:#204ecf;border-radius:8px;padding:12px 24px;border-radius:8px;color:#fff;font-weight:600;font-size:16px}.city-name[data-v-7c781b7a]{text-decoration:underline !important}.thanks-subtitle[data-v-7c781b7a]{line-height:1.4}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankyouDesktop_vue_vue_type_style_index_0_id_02043a0c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(643);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankyouDesktop_vue_vue_type_style_index_0_id_02043a0c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankyouDesktop_vue_vue_type_style_index_0_id_02043a0c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankyouDesktop_vue_vue_type_style_index_0_id_02043a0c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankyouDesktop_vue_vue_type_style_index_0_id_02043a0c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-02043a0c]{color:#204ecf}.dark-blue[data-v-02043a0c]{color:#0f256e !important}.gray[data-v-02043a0c]{color:#262d3d}.light-gray[data-v-02043a0c]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-02043a0c]{color:rgba(38,45,61,.32)}.black-light[data-v-02043a0c]{color:#111}.btn.btn-outline-secondary[data-v-02043a0c]{color:#333}label[data-v-02043a0c]{text-transform:capitalize}.object-fit-cover[data-v-02043a0c]{object-fit:cover}.object-fit-contain[data-v-02043a0c]{object-fit:contain}.font-14[data-v-02043a0c]{font-size:14px}.font-18[data-v-02043a0c]{font-size:18px}.spacer-5[data-v-02043a0c]{height:5px;width:100%;display:block}.spacer-10[data-v-02043a0c]{height:10px;width:100%;display:block}.spacer-15[data-v-02043a0c]{height:15px;width:100%;display:block}.spacer-20[data-v-02043a0c]{height:20px;width:100%;display:block}.spacer-25[data-v-02043a0c]{height:25px;width:100%;display:block}.spacer-30[data-v-02043a0c]{height:30px;width:100%;display:block}.spacer-40[data-v-02043a0c]{height:40px;width:100%;display:block}.spacer-50[data-v-02043a0c]{height:50px;width:100%;display:block}.spacer-65[data-v-02043a0c]{height:65px;width:100%;display:block}.spacer-100[data-v-02043a0c]{height:100px;width:100%;display:block}.sb-wrapper[data-v-02043a0c]{position:relative}.sb-wrapper .sb-button[data-v-02043a0c]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-02043a0c]{cursor:pointer}.sb-wrapper .sb-button[data-v-02043a0c]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-02043a0c]:focus{outline:1px solid}.m-end-2[data-v-02043a0c]{margin-inline-end:10px}.thankyou-title[data-v-02043a0c]{font-size:42px}p[data-v-02043a0c]{color:rgba(255,255,255,.6)}svg[data-v-02043a0c]{height:64px;width:64px}hr[data-v-02043a0c]{background:#fff}.view-all[data-v-02043a0c]{background:#0877f1;border-radius:8px;padding:12px 24px;border-radius:8px;color:#fff;font-weight:600;font-size:16px}.city-name[data-v-02043a0c]{text-decoration:underline !important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_thanks_vue_vue_type_style_index_0_id_a55e9d04_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(644);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_thanks_vue_vue_type_style_index_0_id_a55e9d04_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_thanks_vue_vue_type_style_index_0_id_a55e9d04_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_thanks_vue_vue_type_style_index_0_id_a55e9d04_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_thanks_vue_vue_type_style_index_0_id_a55e9d04_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-a55e9d04]{color:#204ecf}.dark-blue[data-v-a55e9d04]{color:#0f256e !important}.gray[data-v-a55e9d04]{color:#262d3d}.light-gray[data-v-a55e9d04]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-a55e9d04]{color:rgba(38,45,61,.32)}.black-light[data-v-a55e9d04]{color:#111}.btn.btn-outline-secondary[data-v-a55e9d04]{color:#333}label[data-v-a55e9d04]{text-transform:capitalize}.object-fit-cover[data-v-a55e9d04]{object-fit:cover}.object-fit-contain[data-v-a55e9d04]{object-fit:contain}.font-14[data-v-a55e9d04]{font-size:14px}.font-18[data-v-a55e9d04]{font-size:18px}.spacer-5[data-v-a55e9d04]{height:5px;width:100%;display:block}.spacer-10[data-v-a55e9d04]{height:10px;width:100%;display:block}.spacer-15[data-v-a55e9d04]{height:15px;width:100%;display:block}.spacer-20[data-v-a55e9d04]{height:20px;width:100%;display:block}.spacer-25[data-v-a55e9d04]{height:25px;width:100%;display:block}.spacer-30[data-v-a55e9d04]{height:30px;width:100%;display:block}.spacer-40[data-v-a55e9d04]{height:40px;width:100%;display:block}.spacer-50[data-v-a55e9d04]{height:50px;width:100%;display:block}.spacer-65[data-v-a55e9d04]{height:65px;width:100%;display:block}.spacer-100[data-v-a55e9d04]{height:100px;width:100%;display:block}.sb-wrapper[data-v-a55e9d04]{position:relative}.sb-wrapper .sb-button[data-v-a55e9d04]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-a55e9d04]{cursor:pointer}.sb-wrapper .sb-button[data-v-a55e9d04]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-a55e9d04]:focus{outline:1px solid}.m-end-2[data-v-a55e9d04]{margin-inline-end:10px}.container[data-v-a55e9d04]{background-color:#0f256e;margin-top:-40px !important;padding-top:58px;margin:0;min-width:100%;min-height:100vh}h1[data-v-a55e9d04]{font-size:42px}h3[data-v-a55e9d04]{font-size:18px}p[data-v-a55e9d04]{color:rgba(255,255,255,.6)}svg[data-v-a55e9d04]{height:64px;width:64px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/thanks.vue?vue&type=template&id=a55e9d04&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mt-4"
  }, [_c('Thankyou', {
    staticClass: "is-mobile-device",
    attrs: {
      "properties": _vm.properties
    },
    on: {
      "refreshList": _vm.getPropertiesByLocation
    }
  }), _vm._ssrNode(" "), _c('ThankyouDesktop', {
    staticClass: "is-desktop-device",
    attrs: {
      "properties": _vm.properties
    },
    on: {
      "refreshList": _vm.getPropertiesByLocation
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/properties/thanks.vue?vue&type=template&id=a55e9d04&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/Thankyou.vue?vue&type=template&id=7c781b7a&scoped=true&
var Thankyouvue_type_template_id_7c781b7a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-row', {
    staticClass: "pb-3"
  }, [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('b-button', {
    staticClass: "bg-transparent border-0 p-0",
    on: {
      "click": _vm.closeClick
    }
  }, [_c('svg-icon', {
    attrs: {
      "name": "close-white",
      "height": "30",
      "width": "30"
    }
  })], 1)], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('svg-icon', {
    attrs: {
      "name": "thank-you",
      "height": "64",
      "width": "64"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mt-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('h3', {
    staticClass: "text-white font-size-semi-large thanks-subtitle"
  }, [_vm._v("\n      " + _vm._s(_vm.$t('property.thank_you_subtitle')) + "\n    ")])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('hr')]), _vm._v(" "), _c('b-col', {
    staticClass: "mt-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', {
    staticClass: "text-white font-size-semi-large"
  }, [_vm._v("\n      " + _vm._s(_vm.$t('property.similar_properties_title')) + "\n      "), _c('nuxt-link', {
    staticClass: "city-name",
    attrs: {
      "to": _vm.localePath(`/properties?keyword=${_vm.cityName}`)
    }
  }, [_vm._v(_vm._s(_vm.cityName))])], 1)]), _vm._v(" "), _vm._l(_vm.properties, function (property) {
    return _c('b-col', {
      key: property.id,
      staticClass: "mt-4",
      attrs: {
        "cols": "12"
      }
    }, [_c('SimilarPropertyCard', {
      attrs: {
        "property": property
      },
      on: {
        "updateFavorite": _vm.updateFavorite
      }
    })], 1);
  }), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('nuxt-link', {
    staticClass: "view-all",
    attrs: {
      "to": _vm.localePath('/search')
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('common.explore_more')))])], 1)], 2);
};
var Thankyouvue_type_template_id_7c781b7a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/postingRequestForm/Thankyou.vue?vue&type=template&id=7c781b7a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/SimilarPropertyCard.vue?vue&type=template&id=1d206702&scoped=true&
var SimilarPropertyCardvue_type_template_id_1d206702_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "d-flex"
  }, [_vm._ssrNode("<div data-v-1d206702>", "</div>", [_c('AppImage', {
    staticClass: "property-image",
    attrs: {
      "src": _vm.property.image,
      "quality": 50
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass(null, _vm.isRTL ? 'mr-4' : 'ml-4') + " data-v-1d206702>", "</div>", [_vm._ssrNode("<div class=\"d-flex justify-content-between align-items-start\" data-v-1d206702>", "</div>", [_vm._ssrNode("<h1 class=\"font-size-normal text-white font-weight-bold\" data-v-1d206702>" + _vm._ssrEscape("\n        " + _vm._s(_vm.property.property_name) + "\n      ") + "</h1> "), _c('b-button', {
    staticClass: "side-btn favourite-button p-0",
    staticStyle: {
      "background-color": "transparent"
    },
    attrs: {
      "variant": "link"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('updateFavorite', {
          propertyId: _vm.property.property_id,
          term: _vm.property.term
        });
      }
    }
  }, [_c('svg-icon', {
    attrs: {
      "name": _vm.property.isFav ? 'grey-checked-heart' : 'grey-unchecked-heart',
      "fill": "#204ECF",
      "width": "24px",
      "height": "24px"
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"property-meta d-flex justify-content-between\" data-v-1d206702>", "</div>", [_vm._ssrNode("<div class=\"meta-item\" data-v-1d206702>", "</div>", [_c('svg-icon', {
    attrs: {
      "name": "grey-bed",
      "fill": "#FFFFFF",
      "height": "14",
      "width": "14"
    }
  }), _vm._ssrNode(" <span class=\"font-size-smaller text-white\" data-v-1d206702>" + _vm._ssrEscape(_vm._s(_vm.property.no_of_bedroom) + "Bed") + "</span>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("meta-item", _vm.isRTL ? 'mr-2' : 'ml-2') + " data-v-1d206702>", "</div>", [_c('svg-icon', {
    attrs: {
      "name": "grey-bath",
      "fill": "#FFFFFF",
      "height": "14",
      "width": "14"
    }
  }), _vm._ssrNode(" <span class=\"font-size-smaller text-white\" data-v-1d206702>" + _vm._ssrEscape(_vm._s(_vm.property.no_bathrooms) + "Bath") + "</span>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("meta-item", _vm.isRTL ? 'mr-2' : 'ml-2') + " data-v-1d206702>", "</div>", [_c('svg-icon', {
    attrs: {
      "name": "grey-area",
      "fill": "#FFFFFF",
      "height": "14",
      "width": "14"
    }
  }), _vm._ssrNode(" <span class=\"font-size-smaller text-white\" data-v-1d206702>" + _vm._ssrEscape(_vm._s(_vm.property.property_area) + "M") + "</span> <span class=\"text-white\" data-v-1d206702>²</span>")], 2)], 2), _vm._ssrNode(" <div class=\"mt-2\" data-v-1d206702><span class=\"font-size-normal text-white font-weight-bold\" data-v-1d206702>" + _vm._ssrEscape(_vm._s(_vm.priceRange) + "\n      ") + "</span> <span class=\"font-size-smaller price-duration\" data-v-1d206702>" + _vm._ssrEscape(_vm._s(_vm.priceDuration)) + "</span></div>")], 2)], 2);
};
var SimilarPropertyCardvue_type_template_id_1d206702_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/SimilarPropertyCard.vue?vue&type=template&id=1d206702&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/SimilarPropertyCard.vue?vue&type=script&lang=js&

const {
  mapGetters
} = Object(external_vuex_["createNamespacedHelpers"])('CoreModule');
/* harmony default export */ var SimilarPropertyCardvue_type_script_lang_js_ = ({
  props: {
    property: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters(['isRTL']),
    priceRange() {
      return this.property.term == 1 ? `$ ${this.property.min_monthly_price} ${this.$t('common.egp')} - ${this.property.max_monthly_price} ${this.$t('common.egp')}` : ` ${this.property.min_daily_price} ${this.$t('common.egp')} - ${this.property.max_daily_price} ${this.$t('common.egp')}`;
    },
    priceDuration() {
      return this.property.term == 1 ? '/ ' + this.$t('common.monthly') : '/' + this.$t('common.daily');
    }
  }
});
// CONCATENATED MODULE: ./components/shared/SimilarPropertyCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_SimilarPropertyCardvue_type_script_lang_js_ = (SimilarPropertyCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/SimilarPropertyCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(876)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_SimilarPropertyCardvue_type_script_lang_js_,
  SimilarPropertyCardvue_type_template_id_1d206702_scoped_true_render,
  SimilarPropertyCardvue_type_template_id_1d206702_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "1d206702",
  "88215436"
  
)

/* harmony default export */ var SimilarPropertyCard = (component.exports);
// EXTERNAL MODULE: ./api/properties.js
var properties = __webpack_require__(357);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/Thankyou.vue?vue&type=script&lang=js&


/* harmony default export */ var Thankyouvue_type_script_lang_js_ = ({
  name: 'thank-you',
  components: {
    SimilarPropertyCard: SimilarPropertyCard
  },
  props: {
    properties: {
      type: Array,
      default: []
    }
  },
  computed: {
    cityName() {
      var _this$$route$query;
      return (_this$$route$query = this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.city;
    }
  },
  methods: {
    async updateFavorite(data) {
      let payload = {
        prop_id: data.propertyId,
        term: data.term
      };
      try {
        const response = await Object(properties["e" /* updateFavoriteProperties */])(payload);
        if (response.Message === 'success') {
          this.$emit('refreshList');
        }
      } catch (error) {}
    },
    closeClick() {
      this.$router.push(this.localePath('/search'));
    }
  }
});
// CONCATENATED MODULE: ./components/postingRequestForm/Thankyou.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_Thankyouvue_type_script_lang_js_ = (Thankyouvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/postingRequestForm/Thankyou.vue



function Thankyou_injectStyles (context) {
  
  var style0 = __webpack_require__(878)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Thankyou_component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_Thankyouvue_type_script_lang_js_,
  Thankyouvue_type_template_id_7c781b7a_scoped_true_render,
  Thankyouvue_type_template_id_7c781b7a_scoped_true_staticRenderFns,
  false,
  Thankyou_injectStyles,
  "7c781b7a",
  "1df71884"
  
)

/* harmony default export */ var Thankyou = (Thankyou_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/desktop/postingRequestForm/ThankyouDesktop.vue?vue&type=template&id=02043a0c&scoped=true&
var ThankyouDesktopvue_type_template_id_02043a0c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', [_c('b-row', {
    staticClass: "pb-3"
  }, [_c('b-col', {
    staticClass: "d-flex flex-column align-items-center",
    attrs: {
      "cols": "12"
    }
  }, [_c('svg-icon', {
    attrs: {
      "name": "thank-you"
    }
  }), _vm._v(" "), _c('h1', {
    staticClass: "text-white thankyou-title"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('property.thank_you')) + "\n      ")]), _vm._v(" "), _c('h3', {
    staticClass: "text-white font-size-semi-large"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('property.thank_you_subtitle')) + "\n      ")])], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "pb-3"
  }, [_c('b-col', {
    staticClass: "mt-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', {
    staticClass: "text-white font-size-semi-large text-center"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('property.similar_properties_title')) + "\n        "), _c('nuxt-link', {
    staticClass: "city-name",
    attrs: {
      "to": _vm.localePath(`/properties?keyword=${_vm.cityName}`)
    }
  }, [_vm._v(_vm._s(_vm.cityName))])], 1)])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "justify-content-center"
  }, _vm._l(_vm.properties, function (property) {
    return _c('b-col', {
      key: property.id,
      staticClass: "mt-4",
      attrs: {
        "cols": "3",
        "md": "4"
      }
    }, [_c('PropertyCard', {
      attrs: {
        "cardData": property,
        "isThankYouPage": true
      }
    })], 1);
  }), 1), _vm._v(" "), _c('b-row', {
    staticClass: "pb-4"
  }, [_c('b-col', {
    staticClass: "mt-4 d-flex justify-content-center",
    attrs: {
      "cols": "12"
    }
  }, [_c('nuxt-link', {
    staticClass: "view-all",
    attrs: {
      "to": _vm.localePath('/search')
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('common.explore_more')))])], 1)], 1)], 1);
};
var ThankyouDesktopvue_type_template_id_02043a0c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/desktop/postingRequestForm/ThankyouDesktop.vue?vue&type=template&id=02043a0c&scoped=true&

// EXTERNAL MODULE: ./components/shared/PropertyCard.vue + 4 modules
var PropertyCard = __webpack_require__(367);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/desktop/postingRequestForm/ThankyouDesktop.vue?vue&type=script&lang=js&



/* harmony default export */ var ThankyouDesktopvue_type_script_lang_js_ = ({
  name: 'thank-you',
  components: {
    SimilarPropertyCard: SimilarPropertyCard,
    PropertyCard: PropertyCard["a" /* default */]
  },
  props: {
    properties: {
      type: Array,
      default: []
    }
  },
  computed: {
    cityName() {
      var _this$$route$query;
      return (_this$$route$query = this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.city;
    }
  },
  methods: {
    async updateFavorite(data) {
      let payload = {
        prop_id: data.propertyId,
        term: data.term
      };
      try {
        const response = await Object(properties["e" /* updateFavoriteProperties */])(payload);
        if (response.Message === 'success') {
          this.$emit('refreshList');
        }
      } catch (error) {}
    }
  }
});
// CONCATENATED MODULE: ./components/desktop/postingRequestForm/ThankyouDesktop.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_ThankyouDesktopvue_type_script_lang_js_ = (ThankyouDesktopvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/desktop/postingRequestForm/ThankyouDesktop.vue



function ThankyouDesktop_injectStyles (context) {
  
  var style0 = __webpack_require__(880)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ThankyouDesktop_component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_ThankyouDesktopvue_type_script_lang_js_,
  ThankyouDesktopvue_type_template_id_02043a0c_scoped_true_render,
  ThankyouDesktopvue_type_template_id_02043a0c_scoped_true_staticRenderFns,
  false,
  ThankyouDesktop_injectStyles,
  "02043a0c",
  "4b2f3630"
  
)

/* harmony default export */ var ThankyouDesktop = (ThankyouDesktop_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/thanks.vue?vue&type=script&lang=js&



/* harmony default export */ var thanksvue_type_script_lang_js_ = ({
  components: {
    Thankyou: Thankyou,
    ThankyouDesktop: ThankyouDesktop
  },
  data() {
    return {
      properties: []
    };
  },
  created() {
    this.getPropertiesByLocation();
  },
  methods: {
    async getPropertiesByLocation() {
      var _this$$route$query, _this$$route$query2;
      let locationId = (_this$$route$query = this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.locationId;
      let request_id = (_this$$route$query2 = this.$route.query) === null || _this$$route$query2 === void 0 ? void 0 : _this$$route$query2.request_id;
      try {
        const response = await Object(properties["a" /* fetchPropertiesByLocation */])(locationId, request_id);
        this.properties = response.Data.properties;
      } catch (error) {
        console.log(error, 'error');
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/properties/thanks.vue?vue&type=script&lang=js&
 /* harmony default export */ var properties_thanksvue_type_script_lang_js_ = (thanksvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/properties/thanks.vue



function thanks_injectStyles (context) {
  
  var style0 = __webpack_require__(882)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var thanks_component = Object(componentNormalizer["a" /* default */])(
  properties_thanksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  thanks_injectStyles,
  "a55e9d04",
  "3f0895e0"
  
)

/* harmony default export */ var thanks = __webpack_exports__["default"] = (thanks_component.exports);

/***/ })

};;
//# sourceMappingURL=thanks.js.map