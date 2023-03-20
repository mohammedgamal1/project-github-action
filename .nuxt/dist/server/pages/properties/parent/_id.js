exports.ids = [40];
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

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(898);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("77bc8483", content, true, context)
};

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(900);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4c5a136a", content, true, context)
};

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,UklGRvgBAABXRUJQVlA4WAoAAAAQAAAAIQAAIQAAQUxQSM0AAAABb6CojRQ4CAqoBY4fERGB70OlAtxq25YnT9w96YJ2dCzg0OoAVtFlBGQEDp2OwAg6wFfh8N3T8L4ftkBE/ydAf3j6O1vvXA2SNiMQCgntV74eZLw97KL35Kw57Q/nOmMtAqPVFyBv7QF5LQJF6xiuJL1D2bqHbUnPULdOYCTpBSrWMYSM2hHK1iYwo1OgYM0CnAHkLH1i38h9dra9B2fobToFrx2NkPH0ZKwp8dgop0xGIGRT9AxsK/kYKKW1IyGTpkfm9M1F8t/Rvv4zAFZQOCAEAQAA0AcAnQEqIgAiAD5RGotEI6GhGO5kADgFBLYAPHL67vTZC35ALsB9gG+zdYB6AHli/oB8EH7F/th7SgHY7SNuKDjMhtjOUAAA/umd6x1hf/0xu/1TncZT1oTePuTcBXv/9feGp/bUyxD2YPHJs19+Z3U3+cbmFrnUM8b7VQZYilyJzAbYI88OMtzXCl88T27XPs15f8/DM1MSxuSI1fT//LdUFT2osRumZ/+A6v/F/+02eayrocR/ticOidwHrnBWhWnO9tL+uL507dl0V0ORBxNO585qRbP/yM4GVZrPUWosdOvRd2YqHZd/vqqcOyIOUmvLvIng1KBRG+/0M4vZ3oaoAAA="

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomGoogleMap_vue_vue_type_style_index_0_id_2c16c7f7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(651);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomGoogleMap_vue_vue_type_style_index_0_id_2c16c7f7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomGoogleMap_vue_vue_type_style_index_0_id_2c16c7f7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomGoogleMap_vue_vue_type_style_index_0_id_2c16c7f7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomGoogleMap_vue_vue_type_style_index_0_id_2c16c7f7_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.GMap__Wrapper {\r\n  border-radius: 15px;\n}\n.marker-label {\r\n  background-color: #0080fd !important;\r\n  display: inline-block;\r\n  padding: 5px;\r\n  border-radius: 8px;\n}\r\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_cbaf4cfc_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(652);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_cbaf4cfc_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_cbaf4cfc_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_cbaf4cfc_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_cbaf4cfc_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-cbaf4cfc]{color:#204ecf}.dark-blue[data-v-cbaf4cfc]{color:#0f256e !important}.gray[data-v-cbaf4cfc]{color:#262d3d}.light-gray[data-v-cbaf4cfc]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-cbaf4cfc]{color:rgba(38,45,61,.32)}.black-light[data-v-cbaf4cfc]{color:#111}.btn.btn-outline-secondary[data-v-cbaf4cfc]{color:#333}label[data-v-cbaf4cfc]{text-transform:capitalize}.object-fit-cover[data-v-cbaf4cfc]{object-fit:cover}.object-fit-contain[data-v-cbaf4cfc]{object-fit:contain}.font-14[data-v-cbaf4cfc]{font-size:14px}.font-18[data-v-cbaf4cfc]{font-size:18px}.spacer-5[data-v-cbaf4cfc]{height:5px;width:100%;display:block}.spacer-10[data-v-cbaf4cfc]{height:10px;width:100%;display:block}.spacer-15[data-v-cbaf4cfc]{height:15px;width:100%;display:block}.spacer-20[data-v-cbaf4cfc]{height:20px;width:100%;display:block}.spacer-25[data-v-cbaf4cfc]{height:25px;width:100%;display:block}.spacer-30[data-v-cbaf4cfc]{height:30px;width:100%;display:block}.spacer-40[data-v-cbaf4cfc]{height:40px;width:100%;display:block}.spacer-50[data-v-cbaf4cfc]{height:50px;width:100%;display:block}.spacer-65[data-v-cbaf4cfc]{height:65px;width:100%;display:block}.spacer-100[data-v-cbaf4cfc]{height:100px;width:100%;display:block}.sb-wrapper[data-v-cbaf4cfc]{position:relative}.sb-wrapper .sb-button[data-v-cbaf4cfc]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-cbaf4cfc]{cursor:pointer}.sb-wrapper .sb-button[data-v-cbaf4cfc]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-cbaf4cfc]:focus{outline:1px solid}.m-end-2[data-v-cbaf4cfc]{margin-inline-end:10px}.property-parent .custom-arrow[data-v-cbaf4cfc]{height:20px}.property-parent .custom-arrow[data-v-cbaf4cfc]:before{display:none !important}.property-parent .slider-wrapper[data-v-cbaf4cfc]{height:400px}.property-parent .img-wrapper img[data-v-cbaf4cfc]{width:100%;height:350px;transform:scale(0.8)}@media(max-width: 767.98px){.property-parent .img-wrapper img[data-v-cbaf4cfc]{height:200px}}.property-parent .active-img[data-v-cbaf4cfc]{transform:scale(1.1) !important}ul[data-v-cbaf4cfc]{list-style:initial !important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/parent/_id.vue?vue&type=template&id=cbaf4cfc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {
    staticClass: "property-parent"
  }, [_c('b-container', [_vm.property_parent ? _c('b-row', [_c('b-col', {
    staticClass: "py-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', [_c('span', [_vm._v("\n            " + _vm._s(_vm.property_parent[`name_${_vm.$i18n.locale}`]) + "\n          ")]), _vm._v(" "), _vm.property_parent.type_en == 'Hotel' ? _c('b-avatar', {
    attrs: {
      "src": _vm.avatar
    }
  }) : _vm._e()], 1), _vm._v(" "), _vm.property_parent.type_en == 'Hotel' ? _c('StarRateBox', {
    staticClass: "star-rate-box",
    attrs: {
      "showReview": false,
      "with-star-rating": true,
      "rate": _vm.property_parent.hotel_stars
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mx-auto",
    staticStyle: {
      "margin-top": "20px"
    },
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('swiper', {
    ref: "swiper_ref",
    attrs: {
      "options": _vm.swiperOptionThumbs
    }
  }, [_vm._l(_vm.categoryImages[0].images, function (img, index) {
    return _c('swiper-slide', {
      key: index,
      staticClass: "img-wrapper"
    }, [_c('AppImage', {
      class: (index + 1) % 2 == 0 ? 'active-img' : '',
      attrs: {
        "src": img
      }
    })], 1);
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-button-prev",
    attrs: {
      "slot": "button-prev"
    },
    slot: "button-prev"
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-button-next",
    attrs: {
      "slot": "button-next"
    },
    slot: "button-next"
  })], 2)], 1)], 1), _vm._v(" "), _c('b-row', {
    staticStyle: {
      "margin-top": "20px"
    }
  }, _vm._l(_vm.categories, function (category, key, index) {
    return _c('b-col', {
      key: index,
      attrs: {
        "cols": "12",
        "lg": "4"
      },
      on: {
        "click": function ($event) {
          return _vm.getCategoryImage(category);
        }
      }
    }, [_c('h5', {
      staticClass: "text-center",
      style: {
        color: category === _vm.singleCategory ? '#0080fd' : '#444',
        cursor: 'pointer'
      }
    }, [_vm._v("\n              " + _vm._s(category) + "\n            ")])]);
  }), 1)], 1), _vm._v(" "), _vm.property_parent.type_en == 'Hotel' ? _c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('common.property_description')))]), _vm._v(" "), _c('p', [_vm._v("\n          " + _vm._s(_vm.property_parent[`description_${_vm.$i18n.locale}`]) + "\n        ")])]) : _vm._e(), _vm._v(" "), _vm.property_parent.type_en == 'Hotel' ? _c('b-col', {
    staticClass: "mt-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('common.facilities')))]), _vm._v(" "), _vm._l(_vm.property_parent.facilities, function (amenity, key, index) {
    return _c('div', {
      key: index
    }, [_c('h4', [_vm._v(_vm._s(key))]), _vm._v(" "), _c('ul', {
      staticClass: "px-0"
    }, _vm._l(amenity, function (item, i) {
      return _c('li', {
        key: i
      }, [_c('strong', [_vm._v(_vm._s(item.category))])]);
    }), 0)]);
  })], 2) : _vm._e(), _vm._v(" "), _vm.property_parent.type_en == 'Hotel' ? _c('b-col', {
    staticClass: "mt-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('common.payment_policy')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.property_parent.payment_policy))])]) : _vm._e(), _vm._v(" "), _vm.property_parent.type_en == 'Hotel' ? _c('b-col', {
    staticClass: "mt-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('common.house_rules')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.property_parent.house_rules))])]) : _vm._e(), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t('common.location')))])]), _vm._v(" "), _c('b-col', {
    staticClass: "mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', [_c('GoogleMap', {
    attrs: {
      "markerLabel": _vm.property_parent[`name_${_vm.$i18n.locale}`],
      "location": {
        lat: _vm.property_parent.lat,
        lng: _vm.property_parent.lon
      }
    }
  })], 1)]), _vm._v(" "), _c('b-col', {
    staticClass: "mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h4', [_vm._v("\n          " + _vm._s(_vm.$t('common.listing_located')) + "\n          "), _vm.property_parent.type_en == 'Hotel' ? _c('span', [_vm._v("\n            " + _vm._s(_vm.$t('common.hotel')) + "\n          ")]) : _c('span', [_vm._v("\n            " + _vm._s(_vm.property_parent[`name_${_vm.$i18n.locale}`]) + "\n          ")])])])], 1) : _vm._e(), _vm._v(" "), _vm.properties ? _c('b-row', _vm._l(_vm.properties, function (property, index) {
    return _c('b-col', {
      key: index,
      attrs: {
        "cols": "12",
        "lg": "4"
      }
    }, [_c('PropertyCard', {
      attrs: {
        "hideActions": true,
        "cardData": property
      },
      on: {
        "showSendOfferModal": _vm.handleOffer,
        "updateFavouriteProperty": _vm.updateFavourite
      }
    })], 1);
  }), 1) : _vm._e()], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/properties/parent/_id.vue?vue&type=template&id=cbaf4cfc&scoped=true&

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(332);

// EXTERNAL MODULE: ./components/shared/StarRateBox.vue + 4 modules
var StarRateBox = __webpack_require__(72);

// EXTERNAL MODULE: ./helpers/images.js
var helpers_images = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/CustomGoogleMap.vue?vue&type=template&id=2c16c7f7&
var CustomGoogleMapvue_type_template_id_2c16c7f7_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('GmapMap', {
    ref: "gMap",
    staticStyle: {
      "height": "300px"
    },
    attrs: {
      "language": _vm.$i18n.locale,
      "center": {
        lat: parseFloat(_vm.location.lat),
        lng: parseFloat(_vm.location.lng)
      },
      "options": _vm.mapOptions,
      "zoom": 6
    }
  }, [_c('GmapMarker', {
    attrs: {
      "position": {
        lat: _vm.location.lat,
        lng: _vm.location.lng
      },
      "options": _vm.markerOptions
    }
  })], 1);
};
var CustomGoogleMapvue_type_template_id_2c16c7f7_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/CustomGoogleMap.vue?vue&type=template&id=2c16c7f7&

// EXTERNAL MODULE: ./assets/images/map/place-marker.webp
var place_marker = __webpack_require__(896);
var place_marker_default = /*#__PURE__*/__webpack_require__.n(place_marker);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/CustomGoogleMap.vue?vue&type=script&lang=js&

/* harmony default export */ var CustomGoogleMapvue_type_script_lang_js_ = ({
  name: 'GoogleMap',
  props: {
    location: {
      type: Object,
      default: () => ({
        lat: '',
        lng: ''
      })
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: true
    },
    markerLabel: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      circleOptions: {},
      pins: {
        selected: 'data:image/png;base64,iVBORw0KGgo...',
        notSelected: 'data:image/png;base64,iVBORw0KGgo...'
      },
      mapStyle: ['terrain']
    };
  },
  computed: {
    markerOptions() {
      return {
        icon: {
          url: place_marker_default.a,
          labelOrigin: {
            x: 40,
            y: 70
          },
          labelInBackground: true
        },
        draggable: false,
        label: {
          text: this.markerLabel,
          color: '#383838',
          fontSize: '12px',
          fontWeight: 'bold',
          className: 'marker-label'
        }
      };
    },
    mapOptions() {
      return {
        zoomControl: true,
        fullscreenControl: true,
        draggable: this.draggable,
        mapTypeId: 'roadmap'
        // styles: this.mapStyle,
      };
    }
  },

  methods: {
    setLocation({
      event
    }) {
      if (!this.readOnly) {
        this.location.lat = event.latLng.lat();
        this.location.lng = event.latLng.lng();
        this.handleMarker();
      }
    },
    handleMarker() {
      this.$refs.gMap.map.setCenter({
        lat: parseFloat(this.location.lat),
        lng: parseFloat(this.location.lng)
      });
      this.$refs.gMap.map.markers[0].setPosition({
        lat: parseFloat(this.location.lat),
        lng: parseFloat(this.location.lng)
      });
    }
  }
});
// CONCATENATED MODULE: ./components/shared/CustomGoogleMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_CustomGoogleMapvue_type_script_lang_js_ = (CustomGoogleMapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/CustomGoogleMap.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(897)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shared_CustomGoogleMapvue_type_script_lang_js_,
  CustomGoogleMapvue_type_template_id_2c16c7f7_render,
  CustomGoogleMapvue_type_template_id_2c16c7f7_staticRenderFns,
  false,
  injectStyles,
  null,
  "7279c972"
  
)

/* harmony default export */ var CustomGoogleMap = (component.exports);
// EXTERNAL MODULE: ./components/shared/PropertyCard.vue + 4 modules
var PropertyCard = __webpack_require__(367);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/parent/_id.vue?vue&type=script&lang=js&






const {
  mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('PropertyModule');
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: 'PropertyParent',
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"],
    StarRateBox: StarRateBox["a" /* default */],
    GoogleMap: CustomGoogleMap,
    PropertyCard: PropertyCard["a" /* default */]
  },
  async asyncData({
    $axios,
    params,
    query
  }) {
    const res = await $axios.get(`/getSingleProperty/${params.id}`, {
      params: query
    });
    const {
      Data
    } = res.data;
    const parentProperties = await $axios.get(`/property-parents/${Data.property_parent.id}/properties`);
    const categories = Object.keys(Data.property_parent.images);
    const singleCategory = categories && categories[0];
    return {
      property_parent: Data.property_parent,
      categories,
      singleCategory,
      categoryImages: Data.property_parent.images[singleCategory],
      properties: parentProperties.data.Data.properties
    };
  },
  data() {
    return {
      swiperOptionThumbs: {
        slidesPerView: 'auto',
        loopedSlides: 0,
        loop: false,
        touchRatio: 0.2,
        slideToClickedSlide: false,
        observer: true,
        observeParents: true,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          450: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }],
        pauseOnHover: true,
        autoplay: true,
        lazyLoad: 'ondemand'
      }
    };
  },
  computed: {
    avatar() {
      Object(helpers_images["c" /* generateServerImageUrl */])({
        $config: this.$config,
        url: this.property_parent.logo
      });
    }
  },
  methods: {
    ...mapActions(['updatePropertyFavourite', 'showSendOfferModal']),
    handleOffer(offer) {
      this.showSendOfferModal({
        offerData: offer
      });
    },
    updateFavourite(data) {
      let formdata = {
        prop_id: data.property_id,
        term: this.$route.query.term,
        type: 'search-property'
      };
      this.updatePropertyFavourite(formdata);
    },
    getCategoryImage(category) {
      this.singleCategory = category;
    }
  },
  watch: {
    singleCategory: {
      handler(value) {
        if (value) this.categoryImages = this.property_parent.images[value];
      },
      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./pages/properties/parent/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var parent_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/properties/parent/_id.vue



function _id_injectStyles (context) {
  
  var style0 = __webpack_require__(899)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  parent_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _id_injectStyles,
  "cbaf4cfc",
  "3b35f79f"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map