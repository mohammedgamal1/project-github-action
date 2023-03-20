exports.ids = [25];
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

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(389);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("56780d35", content, true, context)
};

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _api_marketplace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(380);
/* harmony import */ var _helpers_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'marketplace-send-offer',
  props: {
    selectedRequest: {
      type: Object,
      default: () => {}
    },
    desktopView: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      offerForm: {
        propertyId: null,
        price: this.selectedRequest.budget,
        startingDate: this.selectedRequest.move_in_date || '',
        selectedTerms: [],
        duration: this.selectedRequest.duration,
        note: ''
      },
      userProperties: [],
      durationOptions: ['day', 'month', 'year'],
      dateFormatOptions: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      }
    };
  },
  computed: {
    transformUserConditions() {
      return this.selectedRequest.conditions.map(condition => ({
        value: condition.id,
        text: condition.name
      }));
    },
    formatedDuration() {
      let {
        duration
      } = this.offerForm;
      let splitedDuration = duration.split(' ');
      let offerData = {
        num: parseInt(splitedDuration),
        type: splitedDuration[1]
      };
      if (splitedDuration[1].indexOf('day') >= 0) {
        offerData.type = 'day';
        offerData.min = 1;
        offerData.max = 31;
      } else if (splitedDuration[1].indexOf('month') >= 0) {
        offerData.type = 'month';
        offerData.min = 1;
        offerData.max = 12;
      } else if (splitedDuration[1].indexOf('year') >= 0) {
        offerData.type = 'year';
        offerData.min = 1;
        offerData.max = 10;
      }
      return offerData;
    }
  },
  created() {
    this.getUserProperties();
    console.log(this.formatedDuration);
  },
  methods: {
    changeSelectedProperty(id) {
      this.offerForm.propertyId = id;
    },
    generateSrc(file) {
      if (!file) return '';
      if (typeof file === 'string') return Object(_helpers_images__WEBPACK_IMPORTED_MODULE_1__[/* generateServerImageUrl */ "c"])({
        $config: this.$config,
        url: file
      });
      return URL.createObjectURL(file);
    },
    changeDate(value) {
      this.offerForm.startingDate = value;
    },
    clearForm() {
      this.offerForm = {
        ...this.offerForm,
        propertyId: null,
        price: null,
        startingDate: '',
        selectedTerms: [],
        note: ''
      };
    },
    transformUserTerms() {
      return this.selectedRequest.conditions.map(condition => {
        if (this.offerForm.selectedTerms.indexOf(condition.id) >= 0) {
          return {
            condition_id: condition.id,
            status: 1
          };
        }
        return {
          condition_id: condition.id,
          status: 0
        };
      });
    },
    async getUserProperties() {
      try {
        const {
          Data
        } = await Object(_api_marketplace__WEBPACK_IMPORTED_MODULE_0__[/* fetchUserProperties */ "b"])();
        this.userProperties = Data.collection;
        console.log(this.userProperties);
        if (this.userProperties.length > 0) {
          this.offerForm.propertyId = this.userProperties[0].id;
        }
      } catch (error) {}
    },
    async confirmOrder() {
      // alert(1)
      this.$emit('colseSideBar');
      this.$emit('close');
      // alert(2)
      const {
        price,
        propertyId,
        startingDate,
        note,
        duration
      } = this.offerForm;
      try {
        const payload = {
          property_id: propertyId,
          price,
          move_in_date: startingDate,
          note,
          duration: `${this.formatedDuration.num} ${this.formatedDuration.type}`,
          conditions: this.transformUserTerms()
        };
        console.log(payload);
        const response = await Object(_api_marketplace__WEBPACK_IMPORTED_MODULE_0__[/* submitOffer */ "c"])(this.selectedRequest.id, payload);
        this.clearForm();
        let body = response.Data.message;
        this.$bvToast.toast(body, {
          variant: 'primary',
          toaster: 'b-toaster-top-center',
          solid: true,
          bodyClass: ['toast-body'],
          headerClass: ['toast-header'],
          autoHideDelay: 2000,
          noCloseButton: true
        });
      } catch (error) {
        if (error.response && error.response.data) {
          let errorMessage = error.response.data.Data.message;
          this.$bvToast.toast(`${errorMessage} `, {
            title: 'Error',
            toaster: 'b-toaster-top-center',
            autoHideDelay: 5000,
            variant: 'danger',
            appendToast: true
          });
        }
        this.clearForm();
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(74)["URL"]))

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

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchMarketPlaceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchUserProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return submitOffer; });
/* harmony import */ var _helpers_axios_port__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * GET: fetch requests data
 */
function fetchMarketPlaceData(query) {
  const fullQuery = Object.keys(query).map(key => `${key}=${query[key]}`).join('&');
  const url = `/requests${query && `?${fullQuery}`}`;
  return _helpers_axios_port__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].$get(url);
}

/**
 * GET: fetch user properties
 */
function fetchUserProperties() {
  const url = `/user/getMyProperties`;
  return _helpers_axios_port__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].$get(url);
}

/**
 * POST: submit offer
 */
function submitOffer(requestId, data) {
  console.log(data);
  const url = `/user/requests/${requestId}/send-offer`;
  return _helpers_axios_port__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].$post(url, data);
}

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(404);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0428f7be", content, true, context)
};

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(409);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("a2b86f9a", content, true, context)
};

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(411);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("040e7088", content, true, context)
};

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_style_index_0_id_33fc0404_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(360);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_style_index_0_id_33fc0404_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_style_index_0_id_33fc0404_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_style_index_0_id_33fc0404_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageSlider_vue_vue_type_style_index_0_id_33fc0404_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}#carousel-fade.property-image-slider .carousel-item.isHome img{height:100px !important}#carousel-fade.property-image-slider .carousel-item img{width:100%;height:220px;object-fit:cover}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avatar.9954840.png";

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yLjMzMjAzIDUuOTE3MjVDMi4zMzIwMyAzLjI5Mzc1IDQuNDIxMzcgMS4xNjY5OSA2Ljk5ODcgMS4xNjY5OUM5LjU3NjAzIDEuMTY2OTkgMTEuNjY1NCAzLjI5Mzc1IDExLjY2NTQgNS45MTcyNUMxMS42NjU0IDguNTIwMTggMTAuMTc1OSAxMS41NTc2IDcuODUyMDggMTIuNjQzOEM3LjMxMDM1IDEyLjg5NyA2LjY4NzA1IDEyLjg5NyA2LjE0NTMyIDEyLjY0MzhDMy44MjE0NyAxMS41NTc2IDIuMzMyMDMgOC41MjAxOCAyLjMzMjAzIDUuOTE3MjVaIiBzdHJva2U9IiMxMTExMTEiLz4NCjxjaXJjbGUgY3g9IjciIGN5PSI1LjgzMzAxIiByPSIxLjc1IiBzdHJva2U9IiMxMTExMTEiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik02LjUgMTAuNVY1SDEzQzEzLjUzMDQgNSAxNC4wMzkxIDUuMjEwNzEgMTQuNDE0MiA1LjU4NTc5QzE0Ljc4OTMgNS45NjA4NiAxNSA2LjQ2OTU3IDE1IDdWMTAuNSIgc3Ryb2tlPSIjNDg1MzVCIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xIDEzVjMiIHN0cm9rZT0iIzQ4NTM1QiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNMSAxMC41SDE1VjEzIiBzdHJva2U9IiM0ODUzNUIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTYuNSA1SDEiIHN0cm9rZT0iIzQ4NTM1QiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Bathtub.70d9d9e.svg";

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property/ImageSlider.vue?vue&type=template&id=33fc0404&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-carousel', {
    staticClass: "property-image-slider",
    attrs: {
      "id": "carousel-fade",
      "fade": "",
      "indicators": "",
      "img-width": "1024",
      "img-height": "480"
    }
  }, _vm._l(_vm.images, function (image, index) {
    return _c('b-carousel-slide', {
      key: index,
      class: _vm.isHome ? 'isHome' : '',
      attrs: {
        "img-src": image
      }
    });
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/property/ImageSlider.vue?vue&type=template&id=33fc0404&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property/ImageSlider.vue?vue&type=script&lang=js&
/* harmony default export */ var ImageSlidervue_type_script_lang_js_ = ({
  name: 'PropertyImageSlider',
  props: {
    images: {
      type: Array,
      required: false
    },
    isHome: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/property/ImageSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_ImageSlidervue_type_script_lang_js_ = (ImageSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/property/ImageSlider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(388)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  property_ImageSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "64710b61"
  
)

/* harmony default export */ var ImageSlider = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/marketplace/SendOffer.vue?vue&type=template&id=4848eff4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    staticClass: "send-offer-container"
  }, [_c('b-row', {
    staticClass: "submit-offer-header justify-content-center"
  }, [!_vm.desktopView ? _c('svg-icon', {
    staticClass: "back",
    attrs: {
      "name": "close",
      "height": "24px",
      "width": "24px"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "header-icon"
  }, [_c('svg-icon', {
    staticClass: "back",
    attrs: {
      "name": "HandWaving",
      "height": "32px",
      "width": "32px"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  })], 1), _vm._v(" "), _c('h1', {
    staticClass: "font-weight-semi font-size-large mt-2"
  }, [_vm._v("\n      " + _vm._s(_vm.$t('offer.submit_offer')) + "\n    ")])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "properties-main-container"
  }, [_c('b-col', {
    staticClass: "mt-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', {
    staticClass: "gray font-size-semi-large"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('marketplace.select_your_property')) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "properties-container col-12"
  }, [_c('div', {
    staticClass: "properties-scroll-row"
  }, _vm._l(_vm.userProperties, function (property) {
    return _c('div', {
      key: property.id,
      class: [_vm.offerForm.propertyId == property.id ? ' selectedProperty property-card' : 'property-card'],
      on: {
        "click": function ($event) {
          return _vm.changeSelectedProperty(property.id);
        }
      }
    }, [_c('b-row', [_c('img', {
      attrs: {
        "src": __webpack_require__(407),
        "alt": "",
        "srcset": ""
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "radio"
    })]), _vm._v(" "), _c('b-row', [_c('div', {
      staticClass: "property-title"
    }, [_vm._v("\n                " + _vm._s(property.name) + "\n              ")])])], 1);
  }), 0)])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "offer-price-container"
  }, [_c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-normal"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('form.price')) + "\n        "), _c('span', {
    staticClass: "font-size-smaller light-gray"
  }, [_vm._v("(" + _vm._s(_vm.selectedRequest.term === 1 ? _vm.$t('common.monthly') : _vm.$t('common.daily')) + ")")])]), _vm._v(" "), _c('AppInput', {
    attrs: {
      "placeholder": _vm.$t('marketplace.price_placeholder'),
      "type": "text"
    },
    model: {
      value: _vm.offerForm.price,
      callback: function ($$v) {
        _vm.$set(_vm.offerForm, "price", $$v);
      },
      expression: "offerForm.price"
    }
  })], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "starting-date-container"
  }, [_c('b-col', {
    staticClass: "mt-3",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-normal"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('form.postingRequest.stayingDetails.starting_date')) + "\n      ")]), _vm._v(" "), _c('b-form-datepicker', {
    attrs: {
      "date-format-options": _vm.dateFormatOptions,
      "id": "datepicker",
      "placeholder": _vm.$t('common.date'),
      "today-button": "",
      "reset-button": "",
      "close-button": "",
      "locale": "en",
      "aria-describedby": "inputcheck-in-feedback"
    },
    on: {
      "input": _vm.changeDate
    },
    model: {
      value: _vm.offerForm.startingDate,
      callback: function ($$v) {
        _vm.$set(_vm.offerForm, "startingDate", $$v);
      },
      expression: "offerForm.startingDate"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4 mb-2",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-normal"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('form.postingRequest.stayingDetails.duration')) + "\n      ")])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "3"
    }
  }, [_c('b-form-input', {
    staticClass: "mx-2 w-100",
    attrs: {
      "type": "number"
    },
    model: {
      value: _vm.formatedDuration.num,
      callback: function ($$v) {
        _vm.$set(_vm.formatedDuration, "num", $$v);
      },
      expression: "formatedDuration.num"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "9"
    }
  }, [_c('b-select', {
    staticClass: "w-100",
    attrs: {
      "options": _vm.durationOptions
    },
    model: {
      value: _vm.formatedDuration.type,
      callback: function ($$v) {
        _vm.$set(_vm.formatedDuration, "type", $$v);
      },
      expression: "formatedDuration.type"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('b-row', {
    staticClass: "mb-4"
  }, [_c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-button', {
    staticClass: "w-100 d-block",
    attrs: {
      "variant": "primary",
      "type": "button"
    },
    domProps: {
      "textContent": _vm._s(_vm.$t('offer.confirm_offer'))
    },
    on: {
      "click": _vm.confirmOrder
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/marketplace/SendOffer.vue?vue&type=template&id=4848eff4&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/marketplace/SendOffer.vue?vue&type=script&lang=js&
var SendOffervue_type_script_lang_js_ = __webpack_require__(361);

// CONCATENATED MODULE: ./components/marketplace/SendOffer.vue?vue&type=script&lang=js&
 /* harmony default export */ var marketplace_SendOffervue_type_script_lang_js_ = (SendOffervue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/marketplace/SendOffer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(408)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  marketplace_SendOffervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "52db1207"
  
)

/* harmony default export */ var SendOffer = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_0_id_01012c7c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(381);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_0_id_01012c7c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_0_id_01012c7c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_0_id_01012c7c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyCard_vue_vue_type_style_index_0_id_01012c7c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.property-card{margin:0 0 16px;background-color:#fff;border:1px solid #e8e8e8;border-radius:16px}.property-card .card-images div{border-radius:16px 16px 0 0}.property-card .card-content .container .card-title{font-size:16px;font-weight:bold;margin:10px 0 8px}.property-card .card-content .container .card-title a{color:#111}.property-card .card-content .container .card-amenities{display:flex}.property-card .card-content .container .card-amenities .amenity{font-size:13px;color:rgba(38,45,61,.64)}.property-card .card-content .container .card-amenities .amenity:nth-child(2){margin:0 16px}.property-card .card-content .container .card-price{margin:16px 0}.property-card .card-content .container .card-price .price{color:#0078ff;font-weight:bold;font-size:16px}.property-card .card-content .container .card-price .price.isHome{font-size:11px}.property-card .card-content .container .card-price .font-size-small{font-size:14px}.property-card .card-content .container .card-actions{display:flex;justify-content:center;align-items:center;padding:16px 0;border-top:1px solid #e8e8e8}.property-card .card-content .container .card-actions .btn{display:flex;align-items:center;justify-content:center;width:100%;text-decoration:none;font-size:14px;color:#111;padding:8px}.property-card .card-content .container .card-actions .vertical-line{width:1px;height:36px;background-color:#e8e8e8}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 405:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03IDMuNjY2NjdWN0w4LjY2NjY3IDhNMTMgN0MxMyAxMC4zMTM3IDEwLjMxMzcgMTMgNyAxM0MzLjY4NjI5IDEzIDEgMTAuMzEzNyAxIDdDMSAzLjY4NjI5IDMuNjg2MjkgMSA3IDFDMTAuMzEzNyAxIDEzIDMuNjg2MjkgMTMgN1oiIHN0cm9rZT0iIzQ4NTM1QiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(458);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6b78240f", content, true, context)
};

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lanlord-rating-landing.797acd5.jpg";

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SendOffer_vue_vue_type_style_index_0_id_4848eff4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(382);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SendOffer_vue_vue_type_style_index_0_id_4848eff4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SendOffer_vue_vue_type_style_index_0_id_4848eff4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SendOffer_vue_vue_type_style_index_0_id_4848eff4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SendOffer_vue_vue_type_style_index_0_id_4848eff4_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.submit-offer-header{flex-direction:column;align-items:center;padding:25px}.submit-offer-header h1{text-transform:capitalize;color:#000}.submit-offer-header .header-icon{width:60px;height:60px;background-color:#fff;border-radius:10px;text-align:center;line-height:60px}.properties-main-container{background-color:#fff;padding:10px 0px}.properties-main-container .properties-container{height:fit-content;margin-top:25px;overflow-x:scroll}.properties-main-container .properties-container::-webkit-scrollbar{width:0px}.properties-main-container .properties-container .properties-scroll-row{gap:10px;display:inline-flex;margin-left:-15px}.properties-main-container .properties-container .property-card{width:150px;height:110px;border-radius:20px;border:solid 1px #dddcdc;padding:15px 30px;position:relative;cursor:pointer}.properties-main-container .properties-container .property-card img{width:70%;height:54px;border-radius:10px}.properties-main-container .properties-container .property-card .radio{width:15px;height:15px;position:absolute;top:15px;right:15px;border-radius:100%;border:solid 1px #000;background-color:#fff}.properties-main-container .properties-container .property-card .property-title{font-size:10px;font-weight:bold;text-transform:capitalize;margin-top:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.properties-main-container .properties-container .selectedProperty{border:solid 1px #000}.properties-main-container .properties-container .selectedProperty .radio{width:20px;height:20px;position:absolute;top:15px;right:15px;border-radius:100%;border:solid 4px #fff;border-style:double;background-color:blue}.send-offer-container .offer-price-container{background-color:#fff;margin-top:10px}.send-offer-container .offer-price-container input{border-radius:10px !important}.send-offer-container .starting-date-container{background-color:#fff;padding:0px 0px 20px 0px;margin-top:10px}.send-offer-container .custom-control.custom-checkbox{width:100%;margin-bottom:10px;padding:10px;border-radius:4px;background:linear-gradient(0deg, rgba(38, 45, 61, 0.04), rgba(38, 45, 61, 0.04)),#fff}.send-offer-container .custom-control.custom-checkbox span{color:#0f256e !important;font-weight:bold;margin-left:1.5rem;margin-bottom:0 !important}[dir=rtl] .send-offer-container .custom-control.custom-checkbox span{margin-right:1.5rem}.send-offer-container .custom-control-label span{color:#0f256e !important;margin-left:1.5rem;margin-bottom:0 !important}.send-offer-container .custom-control-label::before{left:0}[dir=rtl] .send-offer-container .custom-control-label::before{right:0 !important}.send-offer-container img.property-image{width:64px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceItem_vue_vue_type_style_index_0_id_5f63d0e6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(383);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceItem_vue_vue_type_style_index_0_id_5f63d0e6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceItem_vue_vue_type_style_index_0_id_5f63d0e6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceItem_vue_vue_type_style_index_0_id_5f63d0e6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceItem_vue_vue_type_style_index_0_id_5f63d0e6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-5f63d0e6]{color:#204ecf}.dark-blue[data-v-5f63d0e6]{color:#0f256e !important}.gray[data-v-5f63d0e6]{color:#262d3d}.light-gray[data-v-5f63d0e6]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-5f63d0e6]{color:rgba(38,45,61,.32)}.black-light[data-v-5f63d0e6]{color:#111}.btn.btn-outline-secondary[data-v-5f63d0e6]{color:#333}label[data-v-5f63d0e6]{text-transform:capitalize}.object-fit-cover[data-v-5f63d0e6]{object-fit:cover}.object-fit-contain[data-v-5f63d0e6]{object-fit:contain}.font-14[data-v-5f63d0e6]{font-size:14px}.font-18[data-v-5f63d0e6]{font-size:18px}.spacer-5[data-v-5f63d0e6]{height:5px;width:100%;display:block}.spacer-10[data-v-5f63d0e6]{height:10px;width:100%;display:block}.spacer-15[data-v-5f63d0e6]{height:15px;width:100%;display:block}.spacer-20[data-v-5f63d0e6]{height:20px;width:100%;display:block}.spacer-25[data-v-5f63d0e6]{height:25px;width:100%;display:block}.spacer-30[data-v-5f63d0e6]{height:30px;width:100%;display:block}.spacer-40[data-v-5f63d0e6]{height:40px;width:100%;display:block}.spacer-50[data-v-5f63d0e6]{height:50px;width:100%;display:block}.spacer-65[data-v-5f63d0e6]{height:65px;width:100%;display:block}.spacer-100[data-v-5f63d0e6]{height:100px;width:100%;display:block}.sb-wrapper[data-v-5f63d0e6]{position:relative}.sb-wrapper .sb-button[data-v-5f63d0e6]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-5f63d0e6]{cursor:pointer}.sb-wrapper .sb-button[data-v-5f63d0e6]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-5f63d0e6]:focus{outline:1px solid}.m-end-2[data-v-5f63d0e6]{margin-inline-end:10px}.details-container[data-v-5f63d0e6]{background:#fff;padding:0px 25px 20px;overflow:hidden}.details-container .prop-type[data-v-5f63d0e6]{border:0px !important}.details-container .title-section[data-v-5f63d0e6]{margin-bottom:15px}.details-container .row[data-v-5f63d0e6]{gap:20px}.details-container .details-item[data-v-5f63d0e6]{width:calc((100% / 2) - 10px);text-align:center;padding:15px;border:solid 1px #e3e5e5;border-radius:10px}.details-container .details-item h3[data-v-5f63d0e6]{text-align:center;margin:15px 0px 0px;color:#000;font-weight:bold}.details-container .details-item span[data-v-5f63d0e6]{font-size:12px;color:#48535b}.staying-container[data-v-5f63d0e6]{background:#fff;padding:20px 25px;overflow:hidden;margin-top:10px}.staying-container .title-section[data-v-5f63d0e6]{margin-bottom:15px}.staying-container .row[data-v-5f63d0e6]{margin:0px;gap:20px !important}.staying-container .row .details-item[data-v-5f63d0e6]{display:inline-flex !important}.staying-details[data-v-5f63d0e6]{background-color:#fff;padding:25px 10px}.staying-container .row[data-v-5f63d0e6],.details-container .row[data-v-5f63d0e6]{margin:0px;border-bottom:solid 1px #f2f4f5;padding-bottom:20px;align-items:center}.staying-container .eviction_notice[data-v-5f63d0e6],.details-container .eviction_notice[data-v-5f63d0e6]{border:0px}[data-v-5f63d0e6]  .details-item-s1{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:1.5rem 1rem .5rem 1rem;background:#fff;border:1px solid #e3e5e5;border-radius:16px}.staying_details .row[data-v-5f63d0e6],.minimum-rooms .row[data-v-5f63d0e6]{justify-content:space-between}.staying_details span[data-v-5f63d0e6],.minimum-rooms span[data-v-5f63d0e6]{width:40px;height:40px;border-radius:100%;border:solid 1px #f2f4f5;line-height:40px;text-align:center}.minimum-rooms .row[data-v-5f63d0e6]{border:0px !important}.minimum-rooms h3[data-v-5f63d0e6]{margin:0px}.icon[data-v-5f63d0e6]{max-height:20px}[data-v-5f63d0e6]  .custom-control-label::before{left:0}.btn-outline[data-v-5f63d0e6]{border:1px solid #004ed4;color:#004ed4;font-weight:bold}.header-section[data-v-5f63d0e6]{background-color:#f7f9fa;padding:20px}[data-v-5f63d0e6] .title-3{font-style:normal;font-weight:600;font-size:18px;color:#111}[data-v-5f63d0e6]  .title-3-content{line-height:16px;color:#48535b}.chip[data-v-5f63d0e6]{padding:10px 15px;background-color:#79b7ff5b;border-radius:20px;color:#0078ff;font-weight:bold;font-size:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/marketplace/MarketPlaceItem.vue?vue&type=template&id=5f63d0e6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.showOfferForm ? _c('SendOffer', {
    attrs: {
      "selectedRequest": _vm.selectedRequest
    },
    on: {
      "close": function ($event) {
        _vm.showOfferForm = false;
      },
      "colseSideBar": function ($event) {
        return _vm.$emit('colseSideBar');
      }
    }
  }) : _c('b-container', [_c('b-row', [_c('b-row', {
    staticClass: "header-section",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-content-start align-items-start flex-column"
  }, [_c('h4', {
    staticClass: "font-weight-bold font-size-semi-large"
  }, [_vm._v("\n           " + _vm._s(_vm.selectedRequest.name) + "\n         ")]), _vm._v(" "), _c('span', {
    staticClass: "user_name"
  }, [_vm._v("\n           " + _vm._s('@' + _vm.selectedRequest.user_name) + "\n         ")]), _vm._v(" "), _vm.dir === 'ltr' ? _c('p', {
    staticClass: "title-3-content text-start mt-3 font-size-small"
  }, [_vm._v("\n           Add Post requirements here, and wait for home owners to get back to\n           you with offers.\n         ")]) : _c('p', {
    staticClass: "title-3-content text-start mt-3 font-size-small"
  }, [_vm._v("\n           أضف متطلبات النشر هنا ، وانتظر حتى يعود أصحاب المنازل إليها مع\n           العروض.\n         ")])])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "staying-details"
  }, [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-weight-bold"
  }, [_vm._v("\n         " + _vm._s(_vm.$t('form.postingRequest.preview.staying_details')) + "\n       ")]), _vm._v(" "), _c('b-row', [_c('b-col', {
    attrs: {
      "cols": "6"
    }
  }, [_c('SingleCard', {
    attrs: {
      "SvgName": "calendar",
      "Title": _vm.selectedRequest.duration,
      "Content": 'From' + _vm.$dateFns.format(new Date(_vm.selectedRequest.move_in_date), 'dd MMM yy')
    }
  })], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "6"
    }
  }, [_c('SingleCard', {
    attrs: {
      "SvgName": "price",
      "Title": _vm.selectedRequest.budget + _vm.$t('common.egp'),
      "Content": _vm.selectedRequest.term === 1 ? _vm.$t('common.per_month') : _vm.$t('common.per_night')
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('b-row', [_c('div', {
    staticClass: "staying-container col-12"
  }, [_c('div', {
    staticClass: "title-section"
  }, [_c('h5', {
    staticClass: "font-size-semi-large gray"
  }, [_vm._v("\n           " + _vm._s(_vm.$t('form.postingRequest.preview.your_terms')) + "\n         ")])]), _vm._v(" "), _c('b-row', _vm._l(_vm.selectedRequest.conditions, function (condition) {
    return _c('div', {
      key: condition.id,
      staticClass: "details-item mt-2 align-items-center",
      attrs: {
        "id": condition.id
      }
    }, [_c('svg-icon', {
      attrs: {
        "name": "duration",
        "width": "24",
        "height": "24"
      }
    }), _vm._v(" "), _c('h3', {
      class: ['font-size-smaller', _vm.dir === 'rtl' ? 'mr-2' : 'ml-2']
    }, [_vm._v("\n             " + _vm._s(condition.name) + "\n           ")])], 1);
  }), 0)], 1)]), _vm._v(" "), _c('b-row', [_c('div', {
    staticClass: "details-container col-12"
  }, [_c('b-row', [_c('div', {
    staticClass: "arrive-section"
  }, [_c('h5', {
    staticClass: "font-size-semi-large gray"
  }, [_vm._v("\n             " + _vm._s(_vm.$t('form.postingRequest.preview.arrive')) + "\n           ")]), _vm._v(" "), _c('h4', {
    staticClass: "font-size-semi gray m-0"
  }, [_vm._v("\n             " + _vm._s(_vm.$t('form.postingRequest.preview.early_check')) + "\n           ")])])])], 1), _vm._v(" "), _c('b-col', {
    staticClass: "m-0 p-0",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "details-container col-12 staying_details"
  }, [_c('b-row', [_c('h4', {
    staticClass: "font-size-semi gray m-0"
  }, [_vm._v("\n             " + _vm._s(_vm.$t('form.postingRequest.SelectPreferences.minimum_contract')) + "\n           ")]), _vm._v(" "), _c('span', [_vm._v(" 1 ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "details-container col-12 staying_details"
  }, [_c('b-row', [_c('h4', {
    staticClass: "font-size-semi gray m-0"
  }, [_vm._v("\n             " + _vm._s(_vm.$t('form.postingRequest.SelectPreferences.eviction_notice')) + "\n           ")]), _vm._v(" "), _c('span', [_vm._v(" 1 ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "details-container pb-0 col-12 staying_details"
  }, [_c('b-row', {
    staticClass: "eviction_notice"
  }, [_c('h4', {
    staticClass: "font-size-semi gray m-0"
  }, [_vm._v("\n             " + _vm._s(_vm.$t('form.postingRequest.SelectPreferences.maximum_annual_increase')) + "\n           ")]), _vm._v(" "), _c('p', [_vm._v("24%")])])], 1)])], 1), _vm._v(" "), _c('b-row', [_c('b-col', {
    staticClass: "m-0 p-0",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "details-item details-container mt-2 pt-2"
  }, [_c('h3', {
    staticClass: "font-size-small font-weight-semi mt-1"
  }, [_vm._v("\n           " + _vm._s(_vm.$t('form.postingRequest.preview.furnishing_status')) + "\n         ")]), _vm._v(" "), _vm._l(_vm.selectedRequest.furnishing_status, function (furnish, index) {
    return _c('h3', {
      key: index,
      staticClass: "font-size-small font-weight-semi-small"
    }, [_vm._v("\n           " + _vm._s(furnish) + "\n         ")]);
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "details-container minimum-rooms mt-2 pt-2"
  }, [_c('b-row', {
    staticClass: "p-0 mb-4"
  }, [_c('h3', {
    staticClass: "font-size-semi gray m-0"
  }, [_vm._v("\n             " + _vm._s(_vm.$t('form.postingRequest.preview.minimum_rooms')) + "\n           ")]), _vm._v(" "), _c('span', [_vm._v(" 1 ")])])], 1)])], 1), _vm._v(" "), _c('b-row', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.mode != 'desktop',
      expression: "mode != 'desktop'"
    }],
    staticClass: "bg-light mb-4 w-100",
    style: {
      position: 'fixed',
      top: '88%'
    }
  }, [_c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "4"
    }
  }, [_c('b-button', {
    staticClass: "w-100 d-block px-1",
    attrs: {
      "variant": "outline",
      "type": "button"
    },
    domProps: {
      "textContent": _vm._s(_vm.$t('marketplace.back'))
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('back');
      }
    }
  })], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "8"
    }
  }, [_c('b-button', {
    staticClass: "w-100 d-block",
    attrs: {
      "variant": "primary",
      "type": "button"
    },
    domProps: {
      "textContent": _vm._s(_vm.$t('marketplace.interested'))
    },
    on: {
      "click": _vm.handleShowOffer
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/marketplace/MarketPlaceItem.vue?vue&type=template&id=5f63d0e6&scoped=true&

// EXTERNAL MODULE: ./components/marketplace/SendOffer.vue + 3 modules
var SendOffer = __webpack_require__(402);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/marketplace/SingleCard.vue?vue&type=template&id=6a982849&scoped=true&
var SingleCardvue_type_template_id_6a982849_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "details-item-s1"
  }, [_c('svg-icon', {
    attrs: {
      "name": _vm.SvgName,
      "width": "24",
      "height": "24"
    }
  }), _vm._ssrNode(" <strong class=\"mt-2\" data-v-6a982849>" + _vm._ssrEscape("\n    " + _vm._s(_vm.Title) + "\n  ") + "</strong> <h3 class=\"font-size-smaller light-gray mt-1\" data-v-6a982849>" + _vm._ssrEscape("\n    " + _vm._s(_vm.Content) + "\n  ") + "</h3>")], 2);
};
var SingleCardvue_type_template_id_6a982849_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/marketplace/SingleCard.vue?vue&type=template&id=6a982849&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/marketplace/SingleCard.vue?vue&type=script&lang=js&
/* harmony default export */ var SingleCardvue_type_script_lang_js_ = ({
  name: 'SingleCard',
  props: {
    selectedRequest: {
      type: Object,
      default: () => {}
    },
    SvgName: {
      type: String,
      default: ''
    },
    Title: {
      type: String,
      default: ''
    },
    Content: ''
  }
});
// CONCATENATED MODULE: ./components/marketplace/SingleCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var marketplace_SingleCardvue_type_script_lang_js_ = (SingleCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/marketplace/SingleCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  marketplace_SingleCardvue_type_script_lang_js_,
  SingleCardvue_type_template_id_6a982849_scoped_true_render,
  SingleCardvue_type_template_id_6a982849_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "6a982849",
  "d6761896"
  
)

/* harmony default export */ var SingleCard = (component.exports);
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/marketplace/MarketPlaceItem.vue?vue&type=script&lang=js&



const {
  mapActions: mapAuthActions
} = Object(external_vuex_["createNamespacedHelpers"])('AuthModule');
const {
  mapState
} = Object(external_vuex_["createNamespacedHelpers"])('UserModule');
/* harmony default export */ var MarketPlaceItemvue_type_script_lang_js_ = ({
  name: 'marketplace-item',
  components: {
    SendOffer: SendOffer["a" /* default */],
    SingleCard: SingleCard
  },
  props: {
    selectedRequest: {
      type: Object,
      default: () => {}
    },
    mode: ''
  },
  data() {
    return {
      showOfferForm: false
    };
  },
  computed: {
    ...mapState(['user']),
    displayPropertyType() {
      if (this.selectedRequest.property_type) {
        var _this$selectedRequest;
        return (_this$selectedRequest = this.selectedRequest) === null || _this$selectedRequest === void 0 ? void 0 : _this$selectedRequest.property_type[`name_${this.$i18n.locale}`];
      }
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    }
  },
  methods: {
    ...mapAuthActions(['showAuthModal']),
    handleShowOffer(value) {
      if (this.user) {
        this.showOfferForm = true;
      } else {
        this.showAuthModal();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/marketplace/MarketPlaceItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var marketplace_MarketPlaceItemvue_type_script_lang_js_ = (MarketPlaceItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/marketplace/MarketPlaceItem.vue



function MarketPlaceItem_injectStyles (context) {
  
  var style0 = __webpack_require__(410)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var MarketPlaceItem_component = Object(componentNormalizer["a" /* default */])(
  marketplace_MarketPlaceItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  MarketPlaceItem_injectStyles,
  "5f63d0e6",
  "40b820f1"
  
)

/* harmony default export */ var MarketPlaceItem = __webpack_exports__["a"] = (MarketPlaceItem_component.exports);

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/property/PropertyCard.vue?vue&type=template&id=01012c7c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "property-card"
  }, [_c('NuxtLink', {
    attrs: {
      "to": _vm.localePath(`/rent/${_vm.item.property_slug}?term=${_vm.term}`)
    }
  }, [_c('div', {
    staticClass: "card-images"
  }, [_c('ImageSlider', {
    attrs: {
      "isHome": _vm.isHome,
      "images": _vm.item.images > 3 ? _vm.item.images.slice(0, 3) : _vm.item.images
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"card-content\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": _vm.localePath(`/rent/${_vm.item.property_slug}?term=${_vm.term}`)
    }
  }, [_c('div', {
    staticClass: "card-title"
  }, [_c('NuxtLink', {
    attrs: {
      "to": _vm.localePath(`/rent/${_vm.item.property_slug}?term=${_vm.term}`)
    }
  }, [_vm._v("\n            " + _vm._s(_vm._f("displayExcerpt")(_vm.item.property_name, 40)) + "\n          ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-amenities"
  }, [_c('div', {
    staticClass: "amenity"
  }, [_c('svg-icon', {
    attrs: {
      "name": "grey-bed",
      "width": "16",
      "height": "16",
      "fill": "#48535b"
    }
  }), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.item.no_of_bedroom) + "  " + _vm._s(_vm.dir === 'ltr' ? 'bed' : 'سرير') + " ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "amenity"
  }, [_c('svg-icon', {
    attrs: {
      "name": "grey-bath",
      "width": "16",
      "height": "16",
      "fill": "#48535b"
    }
  }), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.item.no_bathrooms) + " " + _vm._s(_vm.dir === 'ltr' ? 'bath' : 'حمام') + " ")])], 1), _vm._v(" "), _c('div', {
    class: ['amenity', _vm.isHome ? 'd-none' : '']
  }, [_c('svg-icon', {
    attrs: {
      "name": "grey-area",
      "width": "16",
      "height": "16",
      "fill": "#48535b"
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.item.property_area) + " " + _vm._s(_vm.dir === 'ltr' ? 'm' : 'م'))]), _vm._v(" "), _c('span', {
    staticClass: "area-unit"
  }, [_vm._v("²")])], 1)]), _vm._v(" "), _vm.item.min_daily_price !== '0' ? _c('div', {
    staticClass: "card-price"
  }, [_c('span', {
    class: ['price', _vm.isHome ? 'isHome' : '']
  }, [_vm._v("\n            " + _vm._s(` ${_vm.item.min_daily_price} - ${_vm.item.max_daily_price} ${_vm.$t('common.egp')}`) + "\n          ")]), _vm._v(" "), _vm.dir === 'ltr' ? _c('span', {
    staticClass: "light-gray font-size-small"
  }, [_vm._v("/ Day")]) : _c('span', {
    staticClass: "light-gray font-size-small"
  }, [_vm._v("/ نطاق يومى")])]) : _vm._e(), _vm._v(" "), _vm.item.min_monthly_price !== '0' ? _c('div', {
    staticClass: "card-price"
  }, [_c('span', {
    staticClass: "price"
  }, [_vm._v("\n            " + _vm._s(` ${_vm.item.min_monthly_price} - ${_vm.item.min_monthly_price} ${_vm.$t('common.egp')}`) + "\n          ")]), _vm._v(" "), _vm.dir === 'ltr' ? _c('span', {
    staticClass: "light-gray font-size-small"
  }, [_vm._v("/ Month")]) : _c('span', {
    staticClass: "light-gray font-size-small"
  }, [_vm._v("/ نطاق شهرى")])]) : _vm._e()]), _vm._ssrNode(" "), !_vm.isHome ? _vm._ssrNode("<div class=\"card-actions\">", "</div>", [_c('b-button', {
    attrs: {
      "variant": "link"
    },
    on: {
      "click": function ($event) {
        return _vm.updateFavourite(_vm.item.property_id);
      }
    }
  }, [_c('svg-icon', {
    class: _vm.dir === 'rtl' ? 'ml-2' : 'mr-2',
    attrs: {
      "name": _vm.item.isFav ? 'Heart-filled' : 'Heart',
      "width": "22px",
      "height": "22px"
    }
  }), _vm._v("\n          " + _vm._s(_vm.item.isFav ? _vm.dir === 'ltr' ? 'Remove from favourites' : 'حذف من المفضلة' : _vm.dir === 'ltr' ? 'Add to favourites' : 'أضف غلى المفضلة') + "\n        ")], 1), _vm._ssrNode(" <div class=\"vertical-line\"></div> "), _c('b-button', {
    attrs: {
      "variant": "link"
    },
    on: {
      "click": function ($event) {
        return _vm.sendProperty(_vm.item.property_id);
      }
    }
  }, [_c('img', {
    class: _vm.dir === 'rtl' ? 'ml-2' : 'mr-2',
    attrs: {
      "width": "18px",
      "height": "18px",
      "src": __webpack_require__(142)
    }
  }), _vm._v("\n          " + _vm._s(_vm.dir === 'ltr' ? 'Add to compare' : 'أضف للمقارنة') + "\n        ")])], 2) : _vm._e()], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/property/PropertyCard.vue?vue&type=template&id=01012c7c&

// EXTERNAL MODULE: ./components/property/ImageSlider.vue + 4 modules
var ImageSlider = __webpack_require__(400);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/property/PropertyCard.vue?vue&type=script&lang=js&


const {
  mapState
} = Object(external_vuex_["createNamespacedHelpers"])('PropertyModule');
/* harmony default export */ var PropertyCardvue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object,
      required: true
    },
    isHome: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ImageSlider: ImageSlider["a" /* default */]
  },
  computed: {
    ...mapState({
      termState: state => state.term
    }),
    term() {
      let cardTerm = this.item.favourite_term === 1 ? 1 : 0;
      let term = this.$route.query.term ? this.termState : cardTerm;
      return term;
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    }
  },
  methods: {
    updateFavourite(property_id) {
      this.$emit('updateFavouriteProperty', {
        property_id,
        term: this.term
      });
    },
    sendProperty(id) {
      this.$emit('update', {
        id,
        term: this.term
      });
    }
  }
});
// CONCATENATED MODULE: ./components/property/PropertyCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var property_PropertyCardvue_type_script_lang_js_ = (PropertyCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/property/PropertyCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(403)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  property_PropertyCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e7a120e0"
  
)

/* harmony default export */ var PropertyCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/marketplace/MarketPlaceCard_2.vue?vue&type=template&id=2a26035c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-row', {
    class: ['single-prop-card', 'm-2', 'my-3', _vm.shadow ? 'shadow' : '']
  }, [_c('b-col', {
    staticClass: "px-0",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "request_card text-center"
  }, [_c('div', {
    staticClass: "tag_category py-2"
  }, [_vm._v("#Long_Stay")]), _vm._v(" "), _c('div', {
    staticClass: "card_header d-flex align-items-center px-2"
  }, [_c('div', {
    class: ['avatar', _vm.dir === 'ltr' ? 'mr-1' : 'ml-1']
  }, [_c('img', {
    attrs: {
      "width": "50px",
      "height": "50px",
      "src": __webpack_require__(390),
      "alt": "Avatar"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "name_reqPostedDate"
  }, [_c('h2', {
    staticClass: "text-body mb-0"
  }, [_vm._v(_vm._s(_vm.item.user_name))]), _vm._v(" "), _c('p', {
    staticClass: "mb-0"
  }, [_vm._v("Request Posted " + _vm._s(_vm.item.created_at))])])]), _vm._v(" "), _c('hr', {
    staticClass: "my-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "card_body px-3"
  }, [_c('div', {
    staticClass: "location_duration d-flex justify-content-between align-items-center mb-2"
  }, [_c('div', {
    staticClass: "location d-flex"
  }, [_c('img', {
    class: _vm.dir === 'ltr' ? 'mr-1' : 'ml-1',
    attrs: {
      "width": "16px",
      "height": "16px",
      "src": __webpack_require__(391),
      "alt": "Avatar"
    }
  }), _vm._v(" "), _c('h4', {
    staticClass: "text-body font-weight-bold"
  }, [_vm._v(" " + _vm._s(_vm.getFullLocation))])]), _vm._v(" "), _c('div', {
    staticClass: "duration d-flex align-items-center"
  }, [_c('img', {
    class: _vm.dir === 'ltr' ? 'mr-1' : 'ml-1',
    attrs: {
      "width": "16px",
      "height": "16px",
      "src": __webpack_require__(405),
      "alt": "Avatar"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.item.duration))])])]), _vm._v(" "), _c('div', {
    staticClass: "amenities_required d-flex align-items-center mb-2"
  }, [_vm.item.num_of_bed_rooms ? _c('div', {
    staticClass: "amenity bed d-flex align-items-center"
  }, [_c('img', {
    class: _vm.dir === 'ltr' ? 'mr-1' : 'ml-1',
    attrs: {
      "width": "16px",
      "height": "16px",
      "src": __webpack_require__(392),
      "alt": "Beds"
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.item.num_of_bed_rooms) + " Bedrooms")])]) : _vm._e(), _vm._v(" "), _vm.item.num_of_bath_rooms ? _c('div', {
    staticClass: "amenity bath d-flex align-items-center"
  }, [_c('img', {
    class: _vm.dir === 'ltr' ? 'mr-1' : 'ml-1',
    attrs: {
      "width": "16px",
      "height": "16px",
      "src": __webpack_require__(393),
      "alt": "Bathrooms"
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.item.num_of_bath_rooms) + " Bath")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "property_types mb-1"
  }, [_c('p', {
    staticClass: "text-body"
  }, [_vm._v(" #" + _vm._s(_vm.getPropertyTypes))])]), _vm._v(" "), _c('div', {
    staticClass: "budget d-flex align-items-center"
  }, [_c('h5', {
    staticClass: "text-body mb-0"
  }, [_vm._v("Budget")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("~ " + _vm._s(_vm.item.budget) + " EGP")]), _vm._v(" "), _c('span', [_vm._v("/ " + _vm._s(_vm.formating_price_type(_vm.item.term[0].toLowerCase())))])])]), _vm._v(" "), _c('div', {
    staticClass: "moreDetails text-center mt-3"
  }, [_c('b-button', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal",
      value: 'modal-' + _vm.item.id,
      expression: "'modal-' + item.id"
    }],
    attrs: {
      "size": "sm",
      "block": "",
      "variant": "primary"
    }
  }, [_vm._v("More Details")])], 1)])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/marketplace/MarketPlaceCard_2.vue?vue&type=template&id=2a26035c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/marketplace/MarketPlaceCard_2.vue?vue&type=script&lang=js&
/* harmony default export */ var MarketPlaceCard_2vue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object,
      required: true
    },
    isHome: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    isSliderStyle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tag: 'Residential'
    };
  },
  methods: {
    formating_price_type(item) {
      switch (item) {
        case 'dy':
          return this.$t('form.postingRequest.stayingDetails.days');
        case 'my':
          return this.$t('form.postingRequest.stayingDetails.months');
        case 'yy':
          return this.$t('form.postingRequest.stayingDetails.years');
        case 'hr':
          return this.$t('form.postingRequest.stayingDetails.hours');
        case 'wy':
          return this.$t('form.postingRequest.stayingDetails.weeks');
        default:
          return false;
      }
    }
  },
  computed: {
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    getFullLocation() {
      let locations = Object.values(this.item.locations);
      var fullLocation = '';
      for (let location in locations.reverse()) {
        fullLocation += this.dir === 'ltr' ? `${locations[location].en}, ` : `${locations[location].ar}, `;
      }
      return fullLocation;
    },
    getPropertyTypes() {
      let props = this.item.property_types;
      let allProps = '';
      if (props.length > 2) {
        props = props.slice(0, 2);
        for (let prop of props) {
          allProps += this.dir === 'ltr' ? `${prop.name_en}, ` : `${prop.name_ar}, `;
        }
        allProps += 'etc...';
      } else {
        for (let prop of props) {
          allProps += this.dir === 'ltr' ? `${prop.name_en}, ` : `${prop.name_ar}, `;
        }
      }
      return allProps;
    }
  }
});
// CONCATENATED MODULE: ./components/marketplace/MarketPlaceCard_2.vue?vue&type=script&lang=js&
 /* harmony default export */ var marketplace_MarketPlaceCard_2vue_type_script_lang_js_ = (MarketPlaceCard_2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/marketplace/MarketPlaceCard_2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(457)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  marketplace_MarketPlaceCard_2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2a26035c",
  "1b0591be"
  
)

/* harmony default export */ var MarketPlaceCard_2 = __webpack_exports__["a"] = (component.exports);

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

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.9ee4ad5.svg";

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/residential.b9fc817.svg";

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vacations.da5598e.svg";

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/administrative.b623d99.svg";

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/commertial.63d208a.svg";

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/events.ba9ac69.svg";

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/co-working-spaces.e503e44.svg";

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceCard_2_vue_vue_type_style_index_0_id_2a26035c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(406);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceCard_2_vue_vue_type_style_index_0_id_2a26035c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceCard_2_vue_vue_type_style_index_0_id_2a26035c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceCard_2_vue_vue_type_style_index_0_id_2a26035c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceCard_2_vue_vue_type_style_index_0_id_2a26035c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-2a26035c]{color:#204ecf}.dark-blue[data-v-2a26035c]{color:#0f256e !important}.gray[data-v-2a26035c]{color:#262d3d}.light-gray[data-v-2a26035c]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-2a26035c]{color:rgba(38,45,61,.32)}.black-light[data-v-2a26035c]{color:#111}.btn.btn-outline-secondary[data-v-2a26035c]{color:#333}label[data-v-2a26035c]{text-transform:capitalize}.object-fit-cover[data-v-2a26035c]{object-fit:cover}.object-fit-contain[data-v-2a26035c]{object-fit:contain}.font-14[data-v-2a26035c]{font-size:14px}.font-18[data-v-2a26035c]{font-size:18px}.spacer-5[data-v-2a26035c]{height:5px;width:100%;display:block}.spacer-10[data-v-2a26035c]{height:10px;width:100%;display:block}.spacer-15[data-v-2a26035c]{height:15px;width:100%;display:block}.spacer-20[data-v-2a26035c]{height:20px;width:100%;display:block}.spacer-25[data-v-2a26035c]{height:25px;width:100%;display:block}.spacer-30[data-v-2a26035c]{height:30px;width:100%;display:block}.spacer-40[data-v-2a26035c]{height:40px;width:100%;display:block}.spacer-50[data-v-2a26035c]{height:50px;width:100%;display:block}.spacer-65[data-v-2a26035c]{height:65px;width:100%;display:block}.spacer-100[data-v-2a26035c]{height:100px;width:100%;display:block}.sb-wrapper[data-v-2a26035c]{position:relative}.sb-wrapper .sb-button[data-v-2a26035c]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-2a26035c]{cursor:pointer}.sb-wrapper .sb-button[data-v-2a26035c]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-2a26035c]:focus{outline:1px solid}.m-end-2[data-v-2a26035c]{margin-inline-end:10px}.request_card[data-v-2a26035c]{padding:30px 0 10px;background-color:#fff;border-radius:1rem}.request_card .card_header .name_reqPostedDate>p[data-v-2a26035c]{font-size:14px !important;color:#5a5a5a !important}.request_card .card_body .location_duration .location h4[data-v-2a26035c]{font-size:14px !important;font-weight:600 !important}.request_card .card_body .amenities_required[data-v-2a26035c]{gap:20px}.request_card .card_body .amenities_required .amenity[data-v-2a26035c]{gap:5px}.request_card .card_body .amenities_required .amenity p[data-v-2a26035c]{font-size:12px !important}.request_card .card_body .property_types p[data-v-2a26035c]{font-weight:500;font-size:12px !important}.request_card .card_body .budget[data-v-2a26035c]{gap:10px}.request_card .card_body .budget h5[data-v-2a26035c]{font-weight:600;font-size:12px !important}.request_card .card_body .budget p span[data-v-2a26035c]:first-of-type{font-size:14px;color:#0078ff}.request_card .card_body .budget p span[data-v-2a26035c]:last-of-type{font-size:10px}.request_card .card_body .moreDetails .btn[data-v-2a26035c]{background-color:#0078ff !important;border-color:#0078ff !important}.request_card .card_body .moreDetails .btn[data-v-2a26035c]:hover{background-color:rgba(0,120,255,.8) !important}.request_card .tag_category[data-v-2a26035c]{position:absolute;right:0;top:0;transform:rotate(45deg) translateX(94px) translateY(-72px);background-color:#0078ff;color:#fff;padding:10px;width:300px;text-align:center;font-weight:600;font-size:11px !important}.font-size-small[data-v-2a26035c]{font-size:11px !important;font-weight:bold}.font-size-small.price[data-v-2a26035c]{font-size:16px !important}.tags[data-v-2a26035c]{gap:10px}.single-prop-card[data-v-2a26035c]{min-height:258px !important;min-width:285px !important;background:#fff;border:1px solid #e3e5e5;padding-bottom:10px;border-radius:1rem;position:relative;overflow:hidden;cursor:pointer}@media(max-width: 767px){.single-prop-card[data-v-2a26035c]{min-width:340px}}.single-prop-card .tag_avatar[data-v-2a26035c]{position:relative;background-color:#d4dee9 !important;padding:45px 0}.single-prop-card .tag_avatar h3[data-v-2a26035c]{color:#000 !important}.single-prop-card .tag_avatar .avatar[data-v-2a26035c]{padding:6px;background-color:#fff;border-radius:50%}.single-prop-card h1[data-v-2a26035c]{font-size:16px !important}.single-prop-card .user_name[data-v-2a26035c]{font-size:12px !important;font-weight:500 !important}.single-prop-card .per_duration[data-v-2a26035c]{font-size:12px !important}.single-prop-card .makegap[data-v-2a26035c]{gap:5px !important}", ""]);
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

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(678);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("00600348", content, true, context)
};

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(680);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("69bee186", content, true, context)
};

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(682);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3f0c1ecc", content, true, context)
};

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOS4wMiAxMC4zMiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmb250LXNpemU6OC44NnB4O2ZpbGw6I2ZmZjtmb250LWZhbWlseTpDYWxpYnJpLUJvbGQsIENhbGlicmk7Zm9udC13ZWlnaHQ6NzAwO30uY2xzLTJ7ZmlsbDojZmZiNjI1O308L3N0eWxlPjwvZGVmcz48dGV4dCBjbGFzcz0iY2xzLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNy4yMykgc2NhbGUoMS4wNSAxKSI+UmVudDx0c3BhbiBjbGFzcz0iY2xzLTIiIHg9IjE3LjA2IiB5PSIwIj5VcDwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg=="

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/switch-user.ad8eb79.svg";

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(685);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("04e3a858", content, true, context)
};

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(687);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("353dd73e", content, true, context)
};

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF6SURBVHgBpZU7TsNAEIb/ccGjCy2VOQHpKYAeCZA4QFJQIpkGQpWk4tEk1BTxDQgnQBwAkRvYnAB3QUh4mfHawXY21jr5Je9uZjOfZx8zJpjkqQbW0AJhn58mW9zETpggRsj9C+7IN7nSnOVGnbDTiGcaqFbIT78MdkqwARSeLWBIox6ho7owRqgnelhGhCFu6VIPNayVvG0VEU4ZOs6AAbKNt1RjA4i+C8AIU+w4aXQuLCWgjwsguNbjmRTv+yZaDg+O68Bez4HmNkc3NfwhxoFjG10eFn4Bh0+lJYsIu056cQuOwRUwOKqGSW+Q62CBvD0+9rNasDRIwwm7WxoivSxLoDYwSU05lEnZnne2holifArwzTSXQfx3S5iOkC+2VJZ1BJb5W6WQCwVf7CFFHGUbq6svjT7lBxpz+4jlNStjxXrYUT1uu6gjxYHck5f9nC+wOrcF6qIaFPH62lJh8mZa6CBg4jyPGfyfTWHyGfjlm/EDP9n/kv4AgN2F8G8pD3QAAAAASUVORK5CYII="

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(689);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("298ca578", content, true, context)
};

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(691);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7a36aeb8", content, true, context)
};

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(693);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0ee79a82", content, true, context)
};

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user_type.f610c32.svg";

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.b675d2c.png";

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODQuODIgNjkuMTIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7Zm9udC1zaXplOjU5LjMzcHg7ZmlsbDojZmZmO2ZvbnQtZmFtaWx5OkNhbGlicmktQm9sZCwgQ2FsaWJyaTtmb250LXdlaWdodDo3MDA7fS5jbHMtMntmaWxsOiNmZmI2MjU7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHRleHQgY2xhc3M9ImNscy0xIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDQ4LjQxKSI+UmVudDx0c3BhbiBjbGFzcz0iY2xzLTIiIHg9IjExNC4yNSIgeT0iMCI+VXA8L3RzcGFuPjwvdGV4dD48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.jpg": 674,
	"./2.jpg": 675,
	"./3.jpg": 676
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
webpackContext.id = 673;

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.1ec1c93.jpg";

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.47b8b35.jpg";

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/3.0d78c2c.jpg";

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderItem_vue_vue_type_style_index_0_id_0807cc02_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(549);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderItem_vue_vue_type_style_index_0_id_0807cc02_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderItem_vue_vue_type_style_index_0_id_0807cc02_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderItem_vue_vue_type_style_index_0_id_0807cc02_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderItem_vue_vue_type_style_index_0_id_0807cc02_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-0807cc02]{color:#204ecf}.dark-blue[data-v-0807cc02]{color:#0f256e !important}.gray[data-v-0807cc02]{color:#262d3d}.light-gray[data-v-0807cc02]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-0807cc02]{color:rgba(38,45,61,.32)}.black-light[data-v-0807cc02]{color:#111}.btn.btn-outline-secondary[data-v-0807cc02]{color:#333}label[data-v-0807cc02]{text-transform:capitalize}.object-fit-cover[data-v-0807cc02]{object-fit:cover}.object-fit-contain[data-v-0807cc02]{object-fit:contain}.font-14[data-v-0807cc02]{font-size:14px}.font-18[data-v-0807cc02]{font-size:18px}.spacer-5[data-v-0807cc02]{height:5px;width:100%;display:block}.spacer-10[data-v-0807cc02]{height:10px;width:100%;display:block}.spacer-15[data-v-0807cc02]{height:15px;width:100%;display:block}.spacer-20[data-v-0807cc02]{height:20px;width:100%;display:block}.spacer-25[data-v-0807cc02]{height:25px;width:100%;display:block}.spacer-30[data-v-0807cc02]{height:30px;width:100%;display:block}.spacer-40[data-v-0807cc02]{height:40px;width:100%;display:block}.spacer-50[data-v-0807cc02]{height:50px;width:100%;display:block}.spacer-65[data-v-0807cc02]{height:65px;width:100%;display:block}.spacer-100[data-v-0807cc02]{height:100px;width:100%;display:block}.sb-wrapper[data-v-0807cc02]{position:relative}.sb-wrapper .sb-button[data-v-0807cc02]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-0807cc02]{cursor:pointer}.sb-wrapper .sb-button[data-v-0807cc02]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-0807cc02]:focus{outline:1px solid}.m-end-2[data-v-0807cc02]{margin-inline-end:10px}.slider-container[data-v-0807cc02]{position:relative}.slider-container .slider-header[data-v-0807cc02]{position:absolute;top:16%;left:24px}.slider-container .slider-header h1[data-v-0807cc02]{font-weight:600;font-size:14px;line-height:16px;color:#fff}.slider-container .slider-image[data-v-0807cc02]{width:100%;height:100vh}.slider-container .slider-number[data-v-0807cc02]{position:absolute;left:24px;bottom:33%;font-weight:700;font-size:44px;color:#fff}[dir=rtl] .slider-container .slider-number[data-v-0807cc02]{right:24px;left:auto}.slider-container .slider-text[data-v-0807cc02]{position:absolute;color:#fff;left:24px;top:29%;width:60%;font-weight:700;font-size:16px;background-color:rgba(0,0,0,.1);border-radius:8px;padding:10px}[dir=rtl] .slider-container .slider-text[data-v-0807cc02]{right:24px;left:auto;text-align:right}.slider-container .slider-title[data-v-0807cc02]{position:absolute;left:24px;bottom:20%;font-weight:700;font-size:32px;color:#fff;width:60%}[dir=rtl] .slider-container .slider-title[data-v-0807cc02]{right:24px;left:auto}.slider-container .slider-post-link[data-v-0807cc02]{position:absolute;left:50%;transform:translateX(-50%);bottom:10%;background-color:#204ecf;width:calc(100% - 48px);font-weight:600;font-size:16px;color:#fff;padding:12px 24px;text-align:center;border-radius:8px}.slider-container .slider-search-link[data-v-0807cc02]{position:absolute;left:50%;transform:translateX(-50%);bottom:3%;width:100%;text-align:center}.slider-container .slider-search-link a[data-v-0807cc02]{text-decoration:underline !important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceWidget_vue_vue_type_style_index_0_id_3c8f7d0a_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(550);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceWidget_vue_vue_type_style_index_0_id_3c8f7d0a_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceWidget_vue_vue_type_style_index_0_id_3c8f7d0a_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceWidget_vue_vue_type_style_index_0_id_3c8f7d0a_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceWidget_vue_vue_type_style_index_0_id_3c8f7d0a_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-3c8f7d0a]{color:#204ecf}.dark-blue[data-v-3c8f7d0a]{color:#0f256e !important}.gray[data-v-3c8f7d0a]{color:#262d3d}.light-gray[data-v-3c8f7d0a]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-3c8f7d0a]{color:rgba(38,45,61,.32)}.black-light[data-v-3c8f7d0a]{color:#111}.btn.btn-outline-secondary[data-v-3c8f7d0a]{color:#333}label[data-v-3c8f7d0a]{text-transform:capitalize}.object-fit-cover[data-v-3c8f7d0a]{object-fit:cover}.object-fit-contain[data-v-3c8f7d0a]{object-fit:contain}.font-14[data-v-3c8f7d0a]{font-size:14px}.font-18[data-v-3c8f7d0a]{font-size:18px}.spacer-5[data-v-3c8f7d0a]{height:5px;width:100%;display:block}.spacer-10[data-v-3c8f7d0a]{height:10px;width:100%;display:block}.spacer-15[data-v-3c8f7d0a]{height:15px;width:100%;display:block}.spacer-20[data-v-3c8f7d0a]{height:20px;width:100%;display:block}.spacer-25[data-v-3c8f7d0a]{height:25px;width:100%;display:block}.spacer-30[data-v-3c8f7d0a]{height:30px;width:100%;display:block}.spacer-40[data-v-3c8f7d0a]{height:40px;width:100%;display:block}.spacer-50[data-v-3c8f7d0a]{height:50px;width:100%;display:block}.spacer-65[data-v-3c8f7d0a]{height:65px;width:100%;display:block}.spacer-100[data-v-3c8f7d0a]{height:100px;width:100%;display:block}.sb-wrapper[data-v-3c8f7d0a]{position:relative}.sb-wrapper .sb-button[data-v-3c8f7d0a]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-3c8f7d0a]{cursor:pointer}.sb-wrapper .sb-button[data-v-3c8f7d0a]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-3c8f7d0a]:focus{outline:1px solid}.m-end-2[data-v-3c8f7d0a]{margin-inline-end:10px}.requests[data-v-3c8f7d0a]{display:flex;align-items:center;margin-bottom:20px}.requests .mobile-puller[data-v-3c8f7d0a]{width:59px;height:6px;left:146.5px;top:545px;background:linear-gradient(0deg, rgba(38, 45, 61, 0.32), rgba(38, 45, 61, 0.32)),#fff;border-radius:8px;margin:10px auto}.slider-title[data-v-3c8f7d0a]{display:flex;justify-content:flex-start;flex-direction:column;align-items:flex-start}.slider-title .slider-title-text[data-v-3c8f7d0a]{font-weight:700;font-size:32px;line-height:40px;color:#262d3d}.item-container[data-v-3c8f7d0a]{width:262px;padding:12px;background:#fbfbfb;border-radius:4px}.item-container .request-title[data-v-3c8f7d0a]{font-size:14px;line-height:16px;margin-top:10px;color:#0f256e}.item-container .meta-box[data-v-3c8f7d0a]{background:linear-gradient(0deg, rgba(38, 45, 61, 0.04), rgba(38, 45, 61, 0.04)),#fff;border-radius:8px;padding:8px 12px}.item-container .meta-box span[data-v-3c8f7d0a]{font-size:12px;color:#0f256e}.item-container .user-avatar[data-v-3c8f7d0a]{position:relative}.item-container .user-avatar img[data-v-3c8f7d0a]{width:48px;height:48px;border-radius:50%}.view-all[data-v-3c8f7d0a]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:12px 24px;border:1px solid #204ecf;border-radius:8px;color:#204ecf;font-weight:600;font-size:16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_vue_vue_type_style_index_0_id_3316d4a8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(551);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_vue_vue_type_style_index_0_id_3316d4a8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_vue_vue_type_style_index_0_id_3316d4a8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_vue_vue_type_style_index_0_id_3316d4a8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_vue_vue_type_style_index_0_id_3316d4a8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.slick-track{display:flex !important}.slick-slider .slick-slide{margin:0 10px}.eachOwlCarousel{border-radius:20px;overflow:hidden;background-size:cover;background-repeat:no-repeat;min-height:150px}.eachOwlCarousel img{border-radius:20px !important;height:170px !important;user-select:none}.eachOwlCarousel h3{transform:translateY(120px)}.WelcomeHeader h3{transform:translateY(120px)}.home-subtitle{font-weight:700;font-size:24px;line-height:32px;text-align:center;color:#fff;position:relative;top:160px}.home-guide{font-weight:500;font-size:18px;line-height:20px;text-align:center;color:#fff}.onboarding-slider{position:relative;top:200px;transform:translateY(30px)}.onboarding-slider .slide{background-color:#fff !important;border-radius:16px;padding:0 15px}.onboarding-slider .slide .carousel-caption{left:0;width:100%;height:140px;display:flex;flex-direction:row;justify-content:center;align-items:center}.onboarding-slider .slide .carousel-caption .slide-text-container{margin:0 8px}.onboarding-slider .slide .carousel-caption .slide-text-container .slide-title{font-weight:600;font-size:16px;line-height:16px;color:#111}.onboarding-slider .slide .carousel-caption .slide-text-container .slide-description{display:flex;font-weight:400;font-size:18px;line-height:18px;color:#48535b;margin-top:8px}.onboarding-slider .slide .slide-icon-container{width:50px;height:50px;background:#f7f9fa;border-radius:50%;display:flex;justify-content:center;align-items:center}.onboarding-slider .carousel-indicators{margin-bottom:-30px}.onboarding-slider .carousel-indicators li{height:1px;background:#fff;border-radius:10px;border-top-width:4px;border-bottom-width:4px}.slider-container{position:relative;width:100%;background-position:center;background-size:cover;z-index:0}.slider-container::after{content:\"\";position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.2);z-index:-1}.slider-container .slider-header{position:relative;top:150px;display:flex;justify-content:center}.slider-container .slider-header h1{font-weight:600;font-size:14px;line-height:16px;color:#fff}.slider-container .slider-number{position:absolute;left:24px;bottom:33%;font-weight:700;font-size:44px;color:#fff}[dir=rtl] .slider-container .slider-number{right:24px;left:auto}.slider-container .slider-text{position:absolute;color:#fff;left:24px;top:29%;width:60%;font-weight:700;font-size:16px;background-color:rgba(0,0,0,.1);border-radius:8px;padding:10px}[dir=rtl] .slider-container .slider-text{right:24px;left:auto;text-align:right}.slider-container .slider-title{position:absolute;left:24px;bottom:20%;font-weight:700;font-size:32px;color:#fff;width:60%}[dir=rtl] .slider-container .slider-title{right:24px;left:auto}.slider-container .slider-post-link{position:absolute;left:50%;transform:translateX(-50%);bottom:10%;background-color:#0078ff;width:calc(100% - 48px);font-weight:600;font-size:16px;color:#fff;padding:12px 24px;text-align:center;border-radius:8px;margin-bottom:10px;justify-content:center}.slider-container .slider-search-link{position:absolute;left:50%;transform:translateX(-50%);bottom:3%;text-align:center;width:327px;height:48px;border:.5px solid #fff;border-radius:8px;padding:16px}.slider-container .slider-search-link a{margin-left:10px;text-decoration:none !important}.slider-container{padding-top:70px !important;display:flex !important;align-content:space-between;justify-content:center;flex-wrap:wrap}.slider-container .new-ds-home{position:relative !important;width:100%;top:auto !important;bottom:auto !important;left:auto !important;right:auto !important;transform:translateY(20px)}.slider-container .new-ds-home .slider-header{position:static !important}.slider-container .new-ds-home .home-subtitle,.slider-container .new-ds-home .home-guide,.slider-container .new-ds-home .onboarding-slider{position:static !important}.slider-container .new-ds-home .br-subtitle{display:none}@media(max-width: 768px){.slider-container .new-ds-home .br-subtitle{display:block}}.slider-container .new-ds-home .onboarding-slider{padding:0px !important;margin-top:20px}.slider-container .new-ds-home .onboarding-slider .carousel.slide{margin-left:0 !important;margin-right:0 !important;background:transparent !important;padding:0 !important}.slider-container .new-ds-home .onboarding-slider .carousel.slide .carousel-inner{display:flex !important;align-items:flex-start;align-content:flex-start;flex-wrap:wrap}.slider-container .new-ds-home .onboarding-slider .carousel.slide .carousel-inner .carousel-item.slide{background:transparent !important}.slider-container .new-ds-home .onboarding-slider .carousel.slide .carousel-inner .carousel-item.slide img{display:none !important}.slider-container .new-ds-home .onboarding-slider .carousel.slide .carousel-inner .carousel-item.slide .carousel-caption{position:static !important;background:#fff;padding:0 5px;border-radius:20px;padding:24px 16px}.slider-container .bt-home-control{width:100%;padding:0 15px}.slider-container .bt-home-control .slider-post-link,.slider-container .bt-home-control .slider-search-link{position:static !important;display:flex;width:100%;transform:none !important;margin-bottom:20px !important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mic.f47e520.svg";

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_New_vue_vue_type_style_index_0_id_2edc1a5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(554);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_New_vue_vue_type_style_index_0_id_2edc1a5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_New_vue_vue_type_style_index_0_id_2edc1a5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_New_vue_vue_type_style_index_0_id_2edc1a5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_New_vue_vue_type_style_index_0_id_2edc1a5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.tenant-view header{position:absolute;top:40px;left:0;right:0;z-index:999999;color:#fff;z-index:3}.tenant-view header h1{color:#0077e2;font-size:2rem;font-weight:500}.tenant-view header h1 span{color:#ffb625}.tenant-view header .lang_viewBtn{gap:5px}.tenant-view header .lang_viewBtn .btn{background-color:transparent;color:#fff;border:1px solid #ffc025}.tenant-view header .lang_viewBtn .btn span{color:#ffc025 !important}.tenant-view header .lang_viewBtn>a{color:#ffc025 !important}.tenant-view .slider-container{position:relative;width:100%;height:35vh;background-position:center;background-size:cover;z-index:0;padding-top:70px !important;display:flex !important;align-content:space-between;justify-content:center;flex-wrap:wrap}.tenant-view .slider-container .new-ds-home{position:relative !important;width:100%;top:auto !important;bottom:auto !important;left:auto !important;right:auto !important;transform:translateY(75px)}.tenant-view .slider-container .home-subtitle{font-weight:700;font-size:22px;line-height:32px;text-align:center;color:#fff;position:relative;top:160px}.tenant-view .slider-container .home-guide{font-weight:500;font-size:12px;line-height:24px;text-align:center;color:#fff;padding:0 70px}.tenant-view .categories{background-color:#f2f4f5;padding:32px 8px 24px}.tenant-view .categories .categoryCard{background-color:#fff;gap:15px;padding:15px;border-radius:15px;min-height:112px}.tenant-view .popularProperties{background-color:#fff}.tenant-view .popularProperties .card-body{padding:10px !important}.tenant-view .icons-nav .icon{flex-basis:20% !important}.tenant-view .icons-nav .icon p{font-size:.75em}.tenant-view .icons-nav .icon.icon-plus{transform:translateY(-15px)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_New_Owner_vue_vue_type_style_index_0_id_452e64ee_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(555);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_New_Owner_vue_vue_type_style_index_0_id_452e64ee_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_New_Owner_vue_vue_type_style_index_0_id_452e64ee_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_New_Owner_vue_vue_type_style_index_0_id_452e64ee_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboarding_New_Owner_vue_vue_type_style_index_0_id_452e64ee_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.owner-view header{position:absolute;top:40px;left:0;right:0;z-index:999999;color:#fff;z-index:3}.owner-view header h1{color:#0077e2;font-size:2rem;font-weight:500}.owner-view header h1 span{color:#ffb625}.owner-view header .lang_viewBtn{gap:5px}.owner-view header .lang_viewBtn .btn{background-color:transparent;color:#fff;border:1px solid #ffc025}.owner-view header .lang_viewBtn .btn span{color:#ffc025 !important}.owner-view header .lang_viewBtn>a{color:#ffc025 !important}.owner-view .slick-slider.isHome{overflow:hidden}.owner-view .slick-slider.isHome .slick-slide{width:100% !important}.owner-view .slider-container{position:relative;width:100%;height:35vh;background-position:center;background-size:cover;z-index:0;padding-top:70px !important;display:flex !important;align-content:space-between;justify-content:center;flex-wrap:wrap}.owner-view .slider-container .new-ds-home{position:relative !important;width:100%;top:auto !important;bottom:auto !important;left:auto !important;right:auto !important;transform:translateY(75px)}.owner-view .slider-container .home-subtitle{font-weight:700;font-size:22px;line-height:32px;text-align:center;color:#fff;position:relative;top:160px}.owner-view .slider-container .home-guide{font-weight:500;font-size:12px;line-height:24px;text-align:center;color:#fff;padding:0 25px}.owner-view .categories{background-color:#f2f4f5;padding:32px 8px 24px}.owner-view .categories .categoryCard{background-color:#fff;gap:15px;padding:15px;border-radius:15px;min-height:112px}.owner-view .popularProperties{background-color:#fff;padding:15px 0}.owner-view .popularProperties .card-body{padding:10px !important}.owner-view .icons-nav .icon{flex-basis:20% !important}.owner-view .icons-nav .icon p{font-size:.75em}.owner-view .icons-nav .icon.icon-plus{transform:translateY(-15px)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceWidgetWeb_vue_vue_type_style_index_0_id_c5521306_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(557);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceWidgetWeb_vue_vue_type_style_index_0_id_c5521306_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceWidgetWeb_vue_vue_type_style_index_0_id_c5521306_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceWidgetWeb_vue_vue_type_style_index_0_id_c5521306_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketPlaceWidgetWeb_vue_vue_type_style_index_0_id_c5521306_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-c5521306]{color:#204ecf}.dark-blue[data-v-c5521306]{color:#0f256e !important}.gray[data-v-c5521306]{color:#262d3d}.light-gray[data-v-c5521306]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-c5521306]{color:rgba(38,45,61,.32)}.black-light[data-v-c5521306]{color:#111}.btn.btn-outline-secondary[data-v-c5521306]{color:#333}label[data-v-c5521306]{text-transform:capitalize}.object-fit-cover[data-v-c5521306]{object-fit:cover}.object-fit-contain[data-v-c5521306]{object-fit:contain}.font-14[data-v-c5521306]{font-size:14px}.font-18[data-v-c5521306]{font-size:18px}.spacer-5[data-v-c5521306]{height:5px;width:100%;display:block}.spacer-10[data-v-c5521306]{height:10px;width:100%;display:block}.spacer-15[data-v-c5521306]{height:15px;width:100%;display:block}.spacer-20[data-v-c5521306]{height:20px;width:100%;display:block}.spacer-25[data-v-c5521306]{height:25px;width:100%;display:block}.spacer-30[data-v-c5521306]{height:30px;width:100%;display:block}.spacer-40[data-v-c5521306]{height:40px;width:100%;display:block}.spacer-50[data-v-c5521306]{height:50px;width:100%;display:block}.spacer-65[data-v-c5521306]{height:65px;width:100%;display:block}.spacer-100[data-v-c5521306]{height:100px;width:100%;display:block}.sb-wrapper[data-v-c5521306]{position:relative}.sb-wrapper .sb-button[data-v-c5521306]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-c5521306]{cursor:pointer}.sb-wrapper .sb-button[data-v-c5521306]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-c5521306]:focus{outline:1px solid}.m-end-2[data-v-c5521306]{margin-inline-end:10px}.requests[data-v-c5521306]{display:flex;align-items:center;margin-bottom:20px}.requests .mobile-puller[data-v-c5521306]{width:59px;height:6px;left:146.5px;top:545px;background:linear-gradient(0deg, rgba(38, 45, 61, 0.32), rgba(38, 45, 61, 0.32)),#fff;border-radius:8px;margin:10px auto}.slider-title[data-v-c5521306]{display:flex;justify-content:center;flex-direction:column;align-items:center}.slider-title .slider-title-text[data-v-c5521306]{font-weight:700;font-size:40px;line-height:40px;color:#09275b}.item-container[data-v-c5521306]{width:262px;padding:12px;background:#fff;border-radius:4px}.item-container .request-title[data-v-c5521306]{font-size:32px;font-weight:700;color:#09275b}.item-container .meta-box[data-v-c5521306]{background:linear-gradient(0deg, rgba(38, 45, 61, 0.04), rgba(38, 45, 61, 0.04)),#fff;border-radius:8px;padding:8px 12px}.item-container .meta-box span[data-v-c5521306]{font-size:12px;color:#0f256e}.item-container .user-avatar[data-v-c5521306]{position:relative}.item-container .user-avatar img[data-v-c5521306]{width:120px;height:120px;border-radius:50%}.view-all[data-v-c5521306]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:3rem;padding:12px 24px;border:none;border-bottom:2px solid #204ecf;border-top:2px solid #204ecf;color:#204ecf;font-weight:600;font-size:16px}.dateColor[data-v-c5521306]{font-size:22px;font-weight:700;color:#09275b}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboardingweb_vue_vue_type_style_index_0_id_3cb0b3fe_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(558);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboardingweb_vue_vue_type_style_index_0_id_3cb0b3fe_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboardingweb_vue_vue_type_style_index_0_id_3cb0b3fe_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboardingweb_vue_vue_type_style_index_0_id_3cb0b3fe_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Onboardingweb_vue_vue_type_style_index_0_id_3cb0b3fe_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.slick-slider.resizeSlider{max-width:800px;cursor:grab}.slick-slider.resizeSlider ul.slick-dots{bottom:-35px !important}.slick-slider.resizeSlider ul.slick-dots li{margin:0}.slick-slider.resizeSlider ul.slick-dots li:hover button:before,.slick-slider.resizeSlider ul.slick-dots li.slick-active button:before{color:#0078ff !important}.slick-slider.resizeSlider ul.slick-dots li button::before{font-size:12px !important}.slick-slider .slick-slide{margin:0 10px}.categories{padding:50px 0}.categories h2{margin-bottom:40px}.eachOwlCarousel{border-radius:20px;overflow:hidden;background-size:70px !important;background-position:center 30%;background-repeat:no-repeat;min-height:140px}.eachOwlCarousel img{border-radius:20px !important;height:170px !important;user-select:none}.eachOwlCarousel h3{transform:translateY(90px) !important}.WelcomeHeader{position:relative;font-family:\"Open Sans\";background-position:center;background-size:cover;color:#fff;padding-inline:15rem;padding-top:80px;z-index:0;height:45vh !important}.WelcomeHeader .Title{padding-bottom:2rem;font-size:60px}.WelcomeHeader .Content{font-style:normal;font-weight:600;font-size:23px;line-height:36px;text-align:center}.WelcomeHeader .Content .subtitle{font-weight:500;font-size:18px;line-height:24px}.WelcomeHeader::after{content:\"\";position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.2);z-index:-1}.requests{padding:20px 0 !important}.requests .viewAll{cursor:pointer;font-size:16px !important}.pricing{padding:70px 0;background-color:#fff2f2}.pricing .content_header h3{color:#ffc025 !important;text-align:center}.pricing .content_header p{max-width:550px}.pricing .card_price{padding:30px;background-color:#fff;border-radius:1rem;position:relative;overflow:hidden}.pricing .card_price .recommended{position:absolute;left:0;top:0;transform:rotate(-45deg) translateX(-92px) translateY(-65px);background-color:#ffc025;color:#fff;padding:10px;width:300px;text-align:center}.pricing .card_price p:first-of-type{margin-bottom:25px}.pricing .card_price ul li span{font-size:16px !important}.PostRequestButton{margin-top:2rem;display:flex;justify-content:center}.PostRequestButton .PostButt{background:#0078ff;border-radius:8px;color:#fff;font-weight:600;font-size:18px;line-height:16px;padding:14px;width:400px;border-color:transparent !important}.PostRequestButton .SearchPhrase{margin-top:1rem;border:1px solid #fff;border-radius:8px;font-weight:600;font-size:16px;line-height:16px;color:#fff;padding:15px 75px}.Cards{overflow-x:hidden;margin-top:60px;margin-bottom:60px}.Cards .card{border:none;font-weight:bold;font-size:20px;color:#112875;display:flex;flex-direction:row;justify-content:flex-start;gap:20px;align-items:center;background-color:transparent}.Cards .card .icon-container{height:82px;width:64px;padding:20px;background:transparent;border-radius:50%;display:flex;flex-direction:column;justify-content:center}.Cards .card .text-container .title{font-weight:600;font-size:18px;line-height:18px;color:#111}.Cards .card .text-container .description{font-weight:400;font-size:14px;line-height:20px;color:#48535b}.Cards .CardsContent{margin:5px;display:flex;justify-content:center;flex-direction:row;gap:30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_83db84f0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(559);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_83db84f0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_83db84f0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_83db84f0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_83db84f0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-83db84f0]{color:#204ecf}.dark-blue[data-v-83db84f0]{color:#0f256e !important}.gray[data-v-83db84f0]{color:#262d3d}.light-gray[data-v-83db84f0]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-83db84f0]{color:rgba(38,45,61,.32)}.black-light[data-v-83db84f0]{color:#111}.btn.btn-outline-secondary[data-v-83db84f0]{color:#333}label[data-v-83db84f0]{text-transform:capitalize}.object-fit-cover[data-v-83db84f0]{object-fit:cover}.object-fit-contain[data-v-83db84f0]{object-fit:contain}.font-14[data-v-83db84f0]{font-size:14px}.font-18[data-v-83db84f0]{font-size:18px}.spacer-5[data-v-83db84f0]{height:5px;width:100%;display:block}.spacer-10[data-v-83db84f0]{height:10px;width:100%;display:block}.spacer-15[data-v-83db84f0]{height:15px;width:100%;display:block}.spacer-20[data-v-83db84f0]{height:20px;width:100%;display:block}.spacer-25[data-v-83db84f0]{height:25px;width:100%;display:block}.spacer-30[data-v-83db84f0]{height:30px;width:100%;display:block}.spacer-40[data-v-83db84f0]{height:40px;width:100%;display:block}.spacer-50[data-v-83db84f0]{height:50px;width:100%;display:block}.spacer-65[data-v-83db84f0]{height:65px;width:100%;display:block}.spacer-100[data-v-83db84f0]{height:100px;width:100%;display:block}.sb-wrapper[data-v-83db84f0]{position:relative}.sb-wrapper .sb-button[data-v-83db84f0]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-83db84f0]{cursor:pointer}.sb-wrapper .sb-button[data-v-83db84f0]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-83db84f0]:focus{outline:1px solid}.m-end-2[data-v-83db84f0]{margin-inline-end:10px}.makeGap[data-v-83db84f0]{gap:15px}.onboardingMobile[data-v-83db84f0]{margin-top:-70px !important;overflow-y:hidden}[dir=rtl] .onboardingMobile[data-v-83db84f0],[dir=rtl] .onboardingWeb[data-v-83db84f0]{overflow-x:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=83db84f0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"onboardingMobile d-sm-block d-md-none p-0 m-0\" data-v-83db84f0>", "</div>", [_vm.theView === 'tenantView' ? _c('Onboarding_New') : _c('Onboarding_New_Owner')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"onboardingWeb d-none d-sm-none d-md-block\" data-v-83db84f0>", "</div>", [_c('onboarding-web')], 1), _vm._ssrNode(" "), _c('b-container', [_c('b-modal', {
    staticClass: "d-flex flex-column",
    attrs: {
      "hide-footer": "",
      "hide-header": "",
      "centered": ""
    },
    on: {
      "click": _vm.test
    },
    model: {
      value: _vm.modalShow,
      callback: function ($$v) {
        _vm.modalShow = $$v;
      },
      expression: "modalShow"
    }
  }, [_c('b-img', {
    attrs: {
      "src": __webpack_require__(670),
      "fluid": "",
      "alt": "Responsive image"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "text-center font-weight-bold"
  }, [_vm._v("I'm a")]), _vm._v(" "), _c('div', {
    staticClass: "d-flex makeGap justify-content-center mt-4"
  }, [_c('b-button', {
    attrs: {
      "size": "md",
      "variant": "outline-primary"
    },
    on: {
      "click": function ($event) {
        return _vm.changeView('tenantView');
      }
    }
  }, [_vm._v("Tenant")]), _vm._v(" "), _c('b-button', {
    attrs: {
      "size": "md",
      "variant": "outline-primary"
    },
    on: {
      "click": function ($event) {
        return _vm.changeView('ownerView');
      }
    }
  }, [_vm._v("Landlord")]), _vm._v(" "), _c('b-button', {
    attrs: {
      "size": "md",
      "variant": "outline-primary"
    },
    on: {
      "click": function ($event) {
        return _vm.changeView('ownerView');
      }
    }
  }, [_vm._v("Broker")])], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=83db84f0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/Onboarding.vue?vue&type=template&id=3316d4a8&
var Onboardingvue_type_template_id_3316d4a8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "slider-container",
    style: 'background-image:url("' + __webpack_require__(671) + '");'
  }, [_vm._ssrNode("<div style=\"width: 100%\"></div> "), _vm._ssrNode("<div class=\"new-ds-home\">", "</div>", [_vm._ssrNode("<div class=\"slider-header mb-4\"><img" + _vm._ssrAttr("src", __webpack_require__(672)) + " width=\"160\" height=\"64\"></div> <p class=\"home-subtitle px-2\">" + _vm._ssrEscape(_vm._s(_vm.$t('header.title')) + " RentUp!") + "</p> <p class=\"home-guide\">" + _vm._ssrEscape(_vm._s(_vm.$t('header.post_nog_chat'))) + "</p> "), _vm._ssrNode("<div class=\"onboarding-slider\">", "</div>", [_c('VueSlickCarousel', {
    attrs: {
      "initialSlide": 2,
      "infinite": false,
      "waitForAnimate": false,
      "draggable": true,
      "autoplay": false,
      "dots": false,
      "slidesToShow": 2,
      "rows": 1,
      "slidesToScroll": 2
    }
  }, _vm._l(_vm.options, function (option, i) {
    return _c('div', {
      key: i,
      staticClass: "eachOwlCarousel",
      style: {
        'background-image': `url(${option.imgSrc})`
      }
    }, [_c('h3', {
      staticClass: "text-center text-white"
    }, [_vm._v(_vm._s(_vm.dir === 'ltr' ? option.title_en : option.title_ar))])]);
  }), 0)], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bt-home-control\">", "</div>", [_c('nuxt-link', {
    staticClass: "slider-post-link",
    attrs: {
      "to": _vm.localePath('/requests/post/property-category')
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('header.post_request_title')))])], 1)], 2);
};
var Onboardingvue_type_template_id_3316d4a8_staticRenderFns = [];

// CONCATENATED MODULE: ./components/onboarding/Onboarding.vue?vue&type=template&id=3316d4a8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/SliderItem.vue?vue&type=template&id=0807cc02&scoped=true&
var SliderItemvue_type_template_id_0807cc02_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "slider-container"
  }, [_vm._ssrNode("<div class=\"slider-header\" data-v-0807cc02>", "</div>", [_c('svg-icon', {
    attrs: {
      "name": "slider-logo"
    }
  })], 1), _vm._ssrNode(" <img" + _vm._ssrAttr("src", __webpack_require__(673)(`./${_vm.number}.jpg`)) + " class=\"slider-image\" data-v-0807cc02> <p class=\"slider-text\" data-v-0807cc02>" + _vm._ssrEscape(_vm._s(_vm.text)) + "</p> <h1 class=\"slider-number\" data-v-0807cc02>" + _vm._ssrEscape("0" + _vm._s(_vm.number)) + "</h1> <h1 class=\"slider-title\" data-v-0807cc02>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h1> "), _c('nuxt-link', {
    staticClass: "slider-post-link",
    attrs: {
      "to": _vm.localePath('/requests/post/property-category')
    }
  }, [_vm._v("\n    " + _vm._s(_vm.$t('header.post_request_title')))]), _vm._ssrNode(" "), _vm._ssrNode("<h1 class=\"slider-search-link font-size-normal text-white\" data-v-0807cc02>", "</h1>", [_vm._ssrNode(_vm._ssrEscape("\n    " + _vm._s(_vm.$t('common.slider_search_first_part')) + "\n    ")), _c('nuxt-link', {
    attrs: {
      "to": _vm.localePath('/search')
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('common.slider_search_second_part')) + "\n    ")])], 2)], 2);
};
var SliderItemvue_type_template_id_0807cc02_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/onboarding/SliderItem.vue?vue&type=template&id=0807cc02&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/SliderItem.vue?vue&type=script&lang=js&
/* harmony default export */ var SliderItemvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    number: {
      type: Number,
      default: 1
    }
  }
});
// CONCATENATED MODULE: ./components/onboarding/SliderItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var onboarding_SliderItemvue_type_script_lang_js_ = (SliderItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/onboarding/SliderItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(677)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  onboarding_SliderItemvue_type_script_lang_js_,
  SliderItemvue_type_template_id_0807cc02_scoped_true_render,
  SliderItemvue_type_template_id_0807cc02_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "0807cc02",
  "226efdd9"
  
)

/* harmony default export */ var SliderItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/MarketPlaceWidget.vue?vue&type=template&id=3c8f7d0a&scoped=true&
var MarketPlaceWidgetvue_type_template_id_3c8f7d0a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {
    staticClass: "requests"
  }, [_c('b-container', {
    staticClass: "h-25"
  }, [_c('div', {
    staticClass: "mobile-puller"
  }), _vm._v(" "), _c('b-row', {
    staticClass: "mb-3"
  }, [_c('b-col', {
    staticClass: "mb-3",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "slider-title"
  }, [_c('h5', {
    staticClass: "text-left slider-title-text"
  }, [_c('nuxt-link', {
    attrs: {
      "to": _vm.localePath('/Dahab?term=0')
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('marketplace.widget_title')) + ".")])], 1)])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_vm.marketPlaceData.length > 0 ? _c('VueSlickCarousel', _vm._b({}, 'VueSlickCarousel', _vm.settings, false), _vm._l(_vm.marketPlaceData, function (item, index) {
    return _c('div', {
      key: index
    }, [_c('div', {
      staticClass: "item-container mr-3"
    }, [_c('div', {
      staticClass: "user-avatar"
    }, [_c('AppImage', {
      staticClass: "user-image",
      attrs: {
        "src": item.user_avatar ? item.user_avatar : ''
      }
    })], 1), _vm._v(" "), _c('h1', {
      staticClass: "request-title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "d-flex mt-2"
    }, [_c('div', {
      staticClass: "meta-box"
    }, [_c('svg-icon', {
      attrs: {
        "name": "duration",
        "height": "24",
        "width": "24"
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.duration) + " ")])], 1), _vm._v(" "), _c('div', {
      staticClass: "ml-4 meta-box"
    }, [_c('svg-icon', {
      attrs: {
        "name": "calendar",
        "height": "24",
        "width": "24"
      }
    }), _vm._v(" "), _c('span', [_vm._v("\n                    " + _vm._s(_vm.$dateFns.format(new Date(item.move_in_date), 'dd MMM yy')))])], 1)]), _vm._v(" "), _c('p', {
      staticClass: "gray font-size-normal mt-2 mb-0 font-weight-bold"
    }, [_vm._v("\n                " + _vm._s(item.budget) + " EGP\n                "), _c('span', {
      staticClass: "light-gray font-size-smaller font-weight-normal"
    }, [_vm._v("/" + _vm._s(_vm.$t('property.budget')))])])])]);
  }), 0) : _vm._e()], 1)], 1), _vm._v(" "), _c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('nuxt-link', {
    staticClass: "view-all",
    attrs: {
      "to": _vm.localePath('/marketplace')
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('marketplace.view_all_requests')) + ".")])], 1)], 1)], 1)], 1);
};
var MarketPlaceWidgetvue_type_template_id_3c8f7d0a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/onboarding/MarketPlaceWidget.vue?vue&type=template&id=3c8f7d0a&scoped=true&

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(332);

// EXTERNAL MODULE: ./components/shared/PropertyCard.vue + 4 modules
var PropertyCard = __webpack_require__(367);

// EXTERNAL MODULE: external "vue-slick-carousel"
var external_vue_slick_carousel_ = __webpack_require__(333);
var external_vue_slick_carousel_default = /*#__PURE__*/__webpack_require__.n(external_vue_slick_carousel_);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css
var vue_slick_carousel = __webpack_require__(378);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css
var vue_slick_carousel_theme = __webpack_require__(379);

// EXTERNAL MODULE: ./api/marketplace.js
var marketplace = __webpack_require__(380);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/MarketPlaceWidget.vue?vue&type=script&lang=js&




// optional style for arrows & dots


/* harmony default export */ var MarketPlaceWidgetvue_type_script_lang_js_ = ({
  name: 'MarketPlaceWidget',
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"],
    PropertyCard: PropertyCard["a" /* default */],
    VueSlickCarousel: external_vue_slick_carousel_default.a
  },
  data() {
    return {
      marketPlaceData: [],
      settings: {
        pauseOnHover: true,
        autoplaySpeed: 2000,
        autoplay: true,
        lazyLoad: 'ondemand',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        rtl: this.$i18n.locale === 'en' ? false : true,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
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
  created() {
    this.getMarketPlaceData();
  },
  methods: {
    async getMarketPlaceData() {
      try {
        let perPage = 5;
        const response = await Object(marketplace["a" /* fetchMarketPlaceData */])(perPage);
        this.marketPlaceData = response.Data.data.data;
      } catch (error) {}
    }
  }
});
// CONCATENATED MODULE: ./components/onboarding/MarketPlaceWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var onboarding_MarketPlaceWidgetvue_type_script_lang_js_ = (MarketPlaceWidgetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/onboarding/MarketPlaceWidget.vue



function MarketPlaceWidget_injectStyles (context) {
  
  var style0 = __webpack_require__(679)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var MarketPlaceWidget_component = Object(componentNormalizer["a" /* default */])(
  onboarding_MarketPlaceWidgetvue_type_script_lang_js_,
  MarketPlaceWidgetvue_type_template_id_3c8f7d0a_scoped_true_render,
  MarketPlaceWidgetvue_type_template_id_3c8f7d0a_scoped_true_staticRenderFns,
  false,
  MarketPlaceWidget_injectStyles,
  "3c8f7d0a",
  "034ed51a"
  
)

/* harmony default export */ var MarketPlaceWidget = (MarketPlaceWidget_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/Onboarding.vue?vue&type=script&lang=js&
// import SwiperClass, { Pagination } from 'swiper'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'




// Vue Owl Carousel
// import carousel from 'vue-owl-carousel'



// optional style for arrows & dots

/* harmony default export */ var Onboardingvue_type_script_lang_js_ = ({
  name: 'onboarding-slider',
  components: {
    // Swiper,
    // SwiperSlide,
    SliderItem: SliderItem,
    MarketPlaceWidget: MarketPlaceWidget,
    VueSlickCarousel: external_vue_slick_carousel_default.a
    // carousel, // : typeof window !== 'undefined' ? () => import('vue-owl-carousel') : ''
  },

  data() {
    return {
      // swiperOption: {
      //   slidesPerView: 3,
      //   spaceBetween: 30,
      //   pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true
      //   }
      // },
      settings: {
        dots: false,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rtl: this.$i18n.locale === 'en' ? false : true
      }
    };
  },
  computed: {
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    }
  }
});
// CONCATENATED MODULE: ./components/onboarding/Onboarding.vue?vue&type=script&lang=js&
 /* harmony default export */ var onboarding_Onboardingvue_type_script_lang_js_ = (Onboardingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/onboarding/Onboarding.vue



function Onboarding_injectStyles (context) {
  
  var style0 = __webpack_require__(681)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Onboarding_component = Object(componentNormalizer["a" /* default */])(
  onboarding_Onboardingvue_type_script_lang_js_,
  Onboardingvue_type_template_id_3316d4a8_render,
  Onboardingvue_type_template_id_3316d4a8_staticRenderFns,
  false,
  Onboarding_injectStyles,
  null,
  "d69aee40"
  
)

/* harmony default export */ var Onboarding = (Onboarding_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/Onboarding_New.vue?vue&type=template&id=2edc1a5c&
var Onboarding_Newvue_type_template_id_2edc1a5c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tenant-view"
  }, [_vm._ssrNode("<header>", "</header>", [_c('b-container', {
    staticClass: "px-1"
  }, [_c('nav', {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c('img', {
    attrs: {
      "width": "100px",
      "src": __webpack_require__(552),
      "alt": "Logo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center lang_viewBtn"
  }, [_c('b-button', {
    attrs: {
      "rounded": "",
      "size": "sm"
    },
    on: {
      "click": function ($event) {
        return _vm.Set_View('ownerView');
      }
    }
  }, [_c('img', {
    attrs: {
      "width": "20px",
      "src": __webpack_require__(553)
    }
  }), _vm._v(" "), _c('span', [_vm._v("Owner View")])]), _vm._v(" "), _c('NuxtLink', {
    staticClass: "mx-2 font-weight-bold",
    attrs: {
      "to": _vm.switchLocalePath(_vm.availableLocale.code)
    }
  }, [_vm._v(_vm._s(_vm.$i18n.locale === 'ar' ? 'En' : 'Ar'))])], 1)])])], 1), _vm._ssrNode(" <div class=\"slider-container\"" + _vm._ssrStyle(null, 'background-image:url("' + __webpack_require__(450) + '");', null) + "><div class=\"new-ds-home\"><p class=\"home-subtitle px-2\">" + _vm._ssrEscape(_vm._s(_vm.dir === 'ltr' ? 'A New experience in Renting' : 'تجربة جديدة في الإيجار')) + "</p> <p class=\"home-guide\">" + _vm._ssrEscape(_vm._s(_vm.dir === 'ltr' ? 'Owners will send you good offers, just let them know your request!' : 'سيرسل لك الملاك عروضًا جيدة ، فقط دعهم يعرفون طلبك')) + "</p></div></div> "), _vm._ssrNode("<div class=\"categories px-2\">", "</div>", [_c('b-container', {
    staticClass: "makeGap"
  }, [_c('h3', {
    staticClass: "text-dark font-weight-bold"
  }, [_vm._v("What do you want to rent ?")]), _vm._v(" "), _c('b-row', [_vm._l(_vm.categories, function (category, index) {
    return _c('b-col', {
      key: index,
      staticClass: "px-2 my-2",
      attrs: {
        "cols": "4"
      }
    }, [_c('div', {
      staticClass: "categoryCard shadow d-flex align-items-center flex-column justify-content-center"
    }, [_c('img', {
      attrs: {
        "src": category.icon
      }
    }), _vm._v(" "), _c('h5', {
      staticClass: "text-center font-weight-semi-bold text-dark"
    }, [_vm._v(_vm._s(category.text))])])]);
  }), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-button', {
    staticClass: "text-center",
    attrs: {
      "variant": "primary",
      "block": "",
      "to": _vm.localePath('/requests/post/property-category')
    }
  }, [_c('img', {
    staticClass: "mx-2",
    attrs: {
      "width": "20px",
      "src": __webpack_require__(683),
      "alt": "Post Request"
    }
  }), _vm._v("\n            Post Request\n          ")])], 1)], 2)], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"popularProperties py-4\">", "</div>", [_c('b-container', [_c('h3', {
    staticClass: "text-center text-dark font-weight-bold mb-4"
  }, [_vm._v("Popular Properties")]), _vm._v(" "), _c('div', {
    staticClass: "cards"
  }, [_c('b-row', _vm._l(_vm.propertiesSample, function (row) {
    return _c('b-col', {
      key: row.id,
      staticClass: "px-2",
      attrs: {
        "cols": "6"
      }
    }, [_c('PropertyCard', {
      attrs: {
        "isHome": true,
        "item": row
      }
    })], 1);
  }), 1)], 1), _vm._v(" "), _c('b-button', {
    staticClass: "mt-1 mb-3 text-center",
    attrs: {
      "variant": "outline-primary",
      "block": "",
      "to": _vm.localePath('/search')
    }
  }, [_vm._v("Explore all Properties")])], 1)], 1)], 2);
};
var Onboarding_Newvue_type_template_id_2edc1a5c_staticRenderFns = [];

// CONCATENATED MODULE: ./components/onboarding/Onboarding_New.vue?vue&type=template&id=2edc1a5c&

// EXTERNAL MODULE: ./components/property/PropertyCard.vue + 4 modules
var property_PropertyCard = __webpack_require__(442);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/Onboarding_New.vue?vue&type=script&lang=js&


const {
  mapState,
  mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('HomeModule');
/* harmony default export */ var Onboarding_Newvue_type_script_lang_js_ = ({
  name: 'onboarding-slider',
  components: {
    PropertyCard: property_PropertyCard["a" /* default */],
    SideBar: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 977))
  },
  data() {
    return {
      propertiesSample: [],
      showSideBar: false,
      categories: [{
        text: 'Residential',
        icon: __webpack_require__(451)
      }, {
        text: 'Vacations',
        icon: __webpack_require__(452)
      }, {
        text: 'Administrative',
        icon: __webpack_require__(453)
      }, {
        text: 'Commertial',
        icon: __webpack_require__(454)
      }, {
        text: 'Events',
        icon: __webpack_require__(455)
      }, {
        text: 'Coworking Spaces',
        icon: __webpack_require__(456)
      }]
    };
  },
  computed: {
    ...mapState(['theView']),
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    availableLocale() {
      return this.$i18n.locales.find(i => i.code !== this.$i18n.locale);
    }
  },
  methods: {
    ...mapActions(['Set_View']),
    async getProperties() {
      const {
        Data
      } = await this.$axios.$get(`/searchProperty?location_id=2`);
      this.propertiesSample = Data.collection.slice(1, 3);
    }
  },
  mounted() {
    this.getProperties();
  }
});
// CONCATENATED MODULE: ./components/onboarding/Onboarding_New.vue?vue&type=script&lang=js&
 /* harmony default export */ var onboarding_Onboarding_Newvue_type_script_lang_js_ = (Onboarding_Newvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/onboarding/Onboarding_New.vue



function Onboarding_New_injectStyles (context) {
  
  var style0 = __webpack_require__(684)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Onboarding_New_component = Object(componentNormalizer["a" /* default */])(
  onboarding_Onboarding_Newvue_type_script_lang_js_,
  Onboarding_Newvue_type_template_id_2edc1a5c_render,
  Onboarding_Newvue_type_template_id_2edc1a5c_staticRenderFns,
  false,
  Onboarding_New_injectStyles,
  null,
  "0f2b85be"
  
)

/* harmony default export */ var Onboarding_New = (Onboarding_New_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/Onboarding_New_Owner.vue?vue&type=template&id=452e64ee&
var Onboarding_New_Ownervue_type_template_id_452e64ee_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "owner-view"
  }, [_vm._ssrNode("<header>", "</header>", [_c('b-container', {
    staticClass: "px-1"
  }, [_c('nav', {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c('img', {
    attrs: {
      "width": "100px",
      "src": __webpack_require__(552),
      "alt": "Logo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center lang_viewBtn"
  }, [_c('b-button', {
    attrs: {
      "rounded": "",
      "size": "sm"
    },
    on: {
      "click": function ($event) {
        return _vm.Set_View('tenantView');
      }
    }
  }, [_c('img', {
    attrs: {
      "width": "20px",
      "src": __webpack_require__(553)
    }
  }), _vm._v(" "), _c('span', [_vm._v("Tenant View")])]), _vm._v(" "), _c('NuxtLink', {
    staticClass: "mx-2 font-weight-bold",
    attrs: {
      "to": _vm.switchLocalePath(_vm.availableLocale.code)
    }
  }, [_vm._v(_vm._s(_vm.$i18n.locale === 'ar' ? 'En' : 'Ar'))])], 1)])])], 1), _vm._ssrNode(" <div class=\"slider-container\"" + _vm._ssrStyle(null, 'background-image:url("' + __webpack_require__(450) + '");', null) + "><div class=\"new-ds-home\"><p class=\"home-subtitle px-2\">" + _vm._ssrEscape(_vm._s(_vm.dir === 'ltr' ? 'A New experience in Renting' : 'تجربة جديدة في الإيجار')) + "</p> <p class=\"home-guide\">" + _vm._ssrEscape(_vm._s(_vm.dir === 'ltr' ? 'You will find Tenant’s on our  Marketplace, see their requests & communicate DIRECTLY with them' : 'سوف تجد المستأجرين على المتجر الخاص بنا ، وترى طلباتهم تتواصل معهم مباشرة')) + "</p></div></div> "), _vm._ssrNode("<div class=\"popularProperties\">", "</div>", [_c('b-container', [_c('div', {
    staticClass: "card_header d-flex justify-content-between align-items-center font-weight-bold my-2"
  }, [_c('h3', {
    staticClass: "text-dark font-weight-bold"
  }, [_vm._v(_vm._s(_vm.dir === 'ltr' ? 'Rent Requests' : 'طلبات الإيجار'))]), _vm._v(" "), _c('p', {
    staticClass: "text-primary",
    on: {
      "click": () => this.$router.push(this.localePath('/marketplace'))
    }
  }, [_vm._v(_vm._s(_vm.dir === 'ltr' ? 'view all' : 'عرض الكل'))])]), _vm._v(" "), _c('div', [_vm.requestsData && _vm.requestsData.length ? _c('VueSlickCarousel', {
    staticClass: "isHome",
    attrs: {
      "variableWidth": true,
      "centerMode": true,
      "centerPadding": '20px',
      "arrows": false,
      "infinite": false,
      "initialSlide": 1,
      "waitForAnimate": true,
      "draggable": true,
      "autoplay": false,
      "dots": false,
      "slidesToShow": 1
    }
  }, _vm._l(_vm.requestsData, function (item) {
    return _c('b-col', {
      key: item.id,
      staticClass: "px-0",
      attrs: {
        "cols": "12"
      }
    }, [_c('MarketPlaceCard_2', {
      attrs: {
        "isSliderStyle": true,
        "shadow": true,
        "isHome": true,
        "item": item
      },
      on: {
        "click": () => this.$router.push(this.localePath('/marketplace'))
      }
    })], 1);
  }), 1) : _vm._e()], 1), _vm._v(" "), _c('b-button', {
    staticClass: "mt-1 mb-3 text-center",
    attrs: {
      "variant": "outline-primary",
      "block": "",
      "to": _vm.localePath('/marketplace')
    }
  }, [_vm._v("Explore Requests in the Marketpace")])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"categories px-2\">", "</div>", [_c('b-container', {
    staticClass: "makeGap"
  }, [_c('h3', {
    staticClass: "text-dark font-weight-bold"
  }, [_vm._v("What do you want to rent ?")]), _vm._v(" "), _c('b-row', [_vm._l(_vm.categories, function (category, index) {
    return _c('b-col', {
      key: index,
      staticClass: "px-2 my-2",
      attrs: {
        "cols": "4"
      }
    }, [_c('div', {
      staticClass: "categoryCard shadow d-flex align-items-center flex-column justify-content-center"
    }, [_c('img', {
      attrs: {
        "src": category.icon
      }
    }), _vm._v(" "), _c('h5', {
      staticClass: "text-center font-weight-semi-bold text-dark"
    }, [_vm._v(_vm._s(category.text))])])]);
  }), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-button', {
    staticClass: "text-center",
    attrs: {
      "variant": "primary",
      "block": "",
      "to": _vm.localePath('/properties/add/1')
    }
  }, [_vm._v("Add Unit")])], 1)], 2)], 1)], 1)], 2);
};
var Onboarding_New_Ownervue_type_template_id_452e64ee_staticRenderFns = [];

// CONCATENATED MODULE: ./components/onboarding/Onboarding_New_Owner.vue?vue&type=template&id=452e64ee&

// EXTERNAL MODULE: ./components/marketplace/MarketPlaceCard_2.vue + 4 modules
var MarketPlaceCard_2 = __webpack_require__(447);

// EXTERNAL MODULE: ./components/marketplace/MarketPlaceItem.vue + 9 modules
var MarketPlaceItem = __webpack_require__(441);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/Onboarding_New_Owner.vue?vue&type=script&lang=js&



const {
  mapState: Onboarding_New_Ownervue_type_script_lang_js_mapState,
  mapActions: Onboarding_New_Ownervue_type_script_lang_js_mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('HomeModule');


// optional style for arrows & dots

/* harmony default export */ var Onboarding_New_Ownervue_type_script_lang_js_ = ({
  name: 'onboarding-slider',
  components: {
    MarketPlaceCard_2: MarketPlaceCard_2["a" /* default */],
    MarketPlaceItem: MarketPlaceItem["a" /* default */],
    VueSlickCarousel: external_vue_slick_carousel_default.a,
    SideBar: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 977))
  },
  data() {
    return {
      requestsData: [],
      showSideBar: false,
      categories: [{
        text: 'Residential',
        icon: __webpack_require__(451)
      }, {
        text: 'Vacations',
        icon: __webpack_require__(452)
      }, {
        text: 'Administrative',
        icon: __webpack_require__(453)
      }, {
        text: 'Commertial',
        icon: __webpack_require__(454)
      }, {
        text: 'Events',
        icon: __webpack_require__(455)
      }, {
        text: 'Coworking Spaces',
        icon: __webpack_require__(456)
      }]
    };
  },
  computed: {
    ...Onboarding_New_Ownervue_type_script_lang_js_mapState(['theView']),
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    availableLocale() {
      return this.$i18n.locales.find(i => i.code !== this.$i18n.locale);
    }
  },
  methods: {
    ...Onboarding_New_Ownervue_type_script_lang_js_mapActions(['Set_View']),
    async getRequests() {
      const {
        Data
      } = await this.$axios.$get('/requests?per_page=3');
      this.requestsData = Data.collection;
    }
  },
  mounted() {
    this.getRequests();
  }
});
// CONCATENATED MODULE: ./components/onboarding/Onboarding_New_Owner.vue?vue&type=script&lang=js&
 /* harmony default export */ var onboarding_Onboarding_New_Ownervue_type_script_lang_js_ = (Onboarding_New_Ownervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/onboarding/Onboarding_New_Owner.vue



function Onboarding_New_Owner_injectStyles (context) {
  
  var style0 = __webpack_require__(686)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Onboarding_New_Owner_component = Object(componentNormalizer["a" /* default */])(
  onboarding_Onboarding_New_Ownervue_type_script_lang_js_,
  Onboarding_New_Ownervue_type_template_id_452e64ee_render,
  Onboarding_New_Ownervue_type_template_id_452e64ee_staticRenderFns,
  false,
  Onboarding_New_Owner_injectStyles,
  null,
  "8e2e2416"
  
)

/* harmony default export */ var Onboarding_New_Owner = (Onboarding_New_Owner_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/Onboardingweb.vue?vue&type=template&id=3cb0b3fe&
var Onboardingwebvue_type_template_id_3cb0b3fe_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "d-flex flex-column p-0 m-0"
  }, [_vm._ssrNode("<div class=\"WelcomeHeader\"" + _vm._ssrStyle(null, 'background-image:url("' + __webpack_require__(450) + '");', null) + ">", "</div>", [_vm._ssrNode("<p class=\"Content\"><span>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('header.title')) + " Rent") + "<span style=\"color: #ffc025\">Up</span>!\n      </span> <br> <span class=\"subtitle\">" + _vm._ssrEscape(_vm._s(_vm.$t('header.post_nog_chat'))) + "</span></p> "), _vm.theView === 'ownerView' ? _vm._ssrNode("<div class=\"PostRequestButton\">", "</div>", [_c('b-btn', {
    staticClass: "PostButt d-flex justify-content-center",
    attrs: {
      "to": _vm.localePath('/properties/add/1')
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('header.listMyProp')) + "\n      ")])], 1) : _vm._ssrNode("<div class=\"PostRequestButton\">", "</div>", [_c('b-btn', {
    staticClass: "PostButt d-flex justify-content-center",
    attrs: {
      "to": _vm.localePath('/requests/post/property-category')
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('header.post_request_title')) + "\n      ")])], 1)], 2), _vm._ssrNode(" "), _vm.theView === 'tenantView' ? _vm._ssrNode("<div class=\"categories\">", "</div>", [_vm._ssrNode("<h2 class=\"text-center font-weight-bold\">What do you want to rent?</h2> "), _c('b-container', [_c('VueSlickCarousel', {
    staticClass: "mx-auto resizeSlider",
    attrs: {
      "infinite": false,
      "waitForAnimate": false,
      "draggable": true,
      "autoplay": false,
      "dots": true,
      "slidesToShow": 4,
      "rows": 1,
      "slidesToScroll": 2
    }
  }, _vm._l(_vm.categories, function (option, i) {
    return _c('div', {
      key: i,
      staticClass: "eachOwlCarousel shadow p-3",
      style: {
        'background-image': `url(${option.imgSrc})`
      }
    }, [_c('h3', {
      staticClass: "text-center text-dark font-weight-bold"
    }, [_vm._v(_vm._s(_vm.dir === 'ltr' ? option.title_en : option.title_ar))])]);
  }), 0)], 1)], 2) : _vm._e(), _vm._ssrNode(" "), _vm.theView === 'tenantView' ? _c('DahabCities1') : _vm._e(), _vm._ssrNode(" "), _vm.theView === 'ownerView' ? _vm._ssrNode("<div class=\"requests text-center\">", "</div>", [[_vm._ssrNode("<div class=\"cards_wrapper\">", "</div>", [_c('b-container', [_c('div', {
    staticClass: "card_header d-flex justify-content-between align-items-center font-weight-bold my-2"
  }, [_c('h2', {
    staticClass: "h3 text-dark font-weight-bold mb-0"
  }, [_vm._v(_vm._s(_vm.dir === 'ltr' ? 'Rent Requests' : 'طلبات الإيجار'))])]), _vm._v(" "), _c('b-row', {
    staticClass: "justify-content-center"
  }, [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', _vm._l(_vm.requestsData, function (item) {
    return _c('b-col', {
      key: item.id,
      staticClass: "px-0",
      attrs: {
        "sm": "6",
        "lg": "4",
        "xl": "3"
      },
      on: {
        "click": () => _vm.$router.push(_vm.localePath('/marketplace'))
      }
    }, [_c('MarketPlaceCard_2', {
      attrs: {
        "shadow": true,
        "isHome": true,
        "item": item
      }
    })], 1);
  }), 1)], 1)], 1)], 1)], 1)], _vm._ssrNode(" "), _c('b-button', {
    staticClass: "mx-auto my-3 text-center",
    attrs: {
      "variant": "outline-primary",
      "to": _vm.localePath('/marketplace')
    }
  }, [_vm._v(_vm._s(_vm.dir === 'ltr' ? 'Explore Requests in the Marketpace' : 'استكشف طلبات المتجر'))])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.theView === 'ownerView' ? _vm._ssrNode("<div class=\"pricing\">", "</div>", [_c('b-container', [_c('div', {
    staticClass: "content_header"
  }, [_c('h3', {
    staticClass: "h5"
  }, [_vm._v(_vm._s(_vm.dir === 'ltr' ? "Let's work together" : 'لنعمل معا'))]), _vm._v(" "), _c('h2', {
    staticClass: "h2 font-weight-bold text-center"
  }, [_vm._v(_vm._s(_vm.dir === 'ltr' ? 'See our pricing' : 'ألق نظرة على أسعارنا'))]), _vm._v(" "), _c('p', {
    staticClass: "text-center font-size-semi-large mx-auto"
  }, [_vm._v(_vm._s(_vm.dir === 'ltr' ? 'Connections to potential Tenants, Acquiring potential tenants, Increase profits, increase occupancy rates' : 'التواصل مع المستأجرين المحتملين ، اكتساب مستأجرين محتملين ، زيادة الأرباح ، زيادة معدلات الإشغال'))])]), _vm._v(" "), _c('b-row', {
    staticClass: "my-4 justify-content-center"
  }, _vm._l(3, function (n) {
    return _c('b-col', {
      key: n,
      attrs: {
        "cols": "12",
        "sm": "12",
        "md": "6",
        "lg": "4"
      }
    }, [_c('div', {
      staticClass: "card_price text-center mb-4"
    }, [n === 2 ? _c('div', {
      staticClass: "recommended"
    }, [_vm._v(_vm._s(_vm.dir === 'ltr' ? 'Recommended' : 'موصى به'))]) : _vm._e(), _vm._v(" "), _c('p', {
      staticClass: "text-center"
    }, [_c('span', {
      class: ['budget', 'h3', 'font-weight-bold', _vm.dir === 'ltr' ? 'mr-2' : 'ml-2']
    }, [_vm._v("1")]), _vm._v(" "), _c('sub', [_c('span', {
      staticClass: "currency h4"
    }, [_vm._v(_vm._s(_vm.dir === 'ltr' ? 'Free' : 'مجانية'))])])]), _vm._v(" "), _c('p', {
      staticClass: "mb-1"
    }, [_vm._v("Points: 1 Credits")]), _vm._v(" "), _c('p', {
      staticClass: "advantages"
    }, [_vm._v("Regular property ad")]), _vm._v(" "), _c('ul', {
      staticClass: "list-unstyled px-0"
    }, [_c('li', {
      staticClass: "mb-2 d-flex align-items-start"
    }, [_c('img', {
      class: ['mt-1', _vm.dir === 'ltr' ? 'mr-2' : 'ml-2'],
      attrs: {
        "width": "15px",
        "src": __webpack_require__(556),
        "alt": "Features"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "text-primary"
    }, [_vm._v("For sale listings valid for 6 months")])]), _vm._v(" "), _c('li', {
      staticClass: "d-flex align-items-start"
    }, [_c('img', {
      class: ['mt-1', _vm.dir === 'ltr' ? 'mr-2' : 'ml-2'],
      attrs: {
        "width": "15px",
        "src": __webpack_require__(556),
        "alt": "Features"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "text-primary"
    }, [_vm._v("The validity of the rental advertisement is 6 months")])])]), _vm._v(" "), _c('b-button', {
      staticClass: "mt-4",
      attrs: {
        "size": "lg",
        "variant": "primary"
      }
    }, [_vm._v("Get Started")])], 1)]);
  }), 1)], 1)], 1) : _vm._e()], 2);
};
var Onboardingwebvue_type_template_id_3cb0b3fe_staticRenderFns = [];

// CONCATENATED MODULE: ./components/onboarding/Onboardingweb.vue?vue&type=template&id=3cb0b3fe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/MarketPlaceWidgetWeb.vue?vue&type=template&id=c5521306&scoped=true&
var MarketPlaceWidgetWebvue_type_template_id_c5521306_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {
    staticClass: "requests"
  }, [_c('b-container', {
    staticClass: "h-25"
  }, [_c('div', {
    staticClass: "mobile-puller"
  }), _vm._v(" "), _c('b-row', {
    staticClass: "mb-3"
  }, [_c('b-col', {
    staticClass: "mb-3 mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "slider-title"
  }, [_c('h5', {
    staticClass: "text-left slider-title-text"
  }, [_c('nuxt-link', {
    attrs: {
      "to": _vm.localePath('/Dahab?term=0')
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('marketplace.widget_title')) + ".")])], 1)])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12 pt-4 "
    }
  }, [_vm.marketPlaceData.length > 0 ? _c('VueSlickCarousel', _vm._b({}, 'VueSlickCarousel', _vm.settings, false), _vm._l(_vm.marketPlaceData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "d-flex justify-content-center"
    }, [_c('div', {
      staticClass: "item-container d-flex flex-column"
    }, [_c('div', {
      staticClass: "user-avatar"
    }, [_c('AppImage', {
      staticClass: "user-image",
      attrs: {
        "src": item.user_avatar ? item.user_avatar : ''
      }
    })], 1), _vm._v(" "), _c('p', {
      staticClass: "request-title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "my-2 text-lg-start"
    }, [_vm._v(_vm._s(item.duration) + " ")]), _vm._v(" "), _c('div', {
      staticClass: "dateColor"
    }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('marketplace.Starting_at')))]), _vm._v(" "), _c('span', [_vm._v("\n                  " + _vm._s(_vm.$dateFns.format(new Date(item.move_in_date), 'dd MMM yyyy')))])]), _vm._v(" "), _c('div', {
      staticClass: "dateColor"
    }, [_c('span', [_vm._v(" " + _vm._s(_vm.$t('common.night1')))]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(item.budget) + " " + _vm._s(_vm.$t('common.egp')))])])])]);
  }), 0) : _vm._e()], 1)], 1), _vm._v(" "), _c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "d-flex justify-content-center"
  }, [_c('nuxt-link', {
    staticClass: "view-all",
    attrs: {
      "to": _vm.localePath('/marketplace')
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('marketplace.view_all_requests')) + ".")])], 1)])], 1)], 1)], 1);
};
var MarketPlaceWidgetWebvue_type_template_id_c5521306_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/onboarding/MarketPlaceWidgetWeb.vue?vue&type=template&id=c5521306&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/MarketPlaceWidgetWeb.vue?vue&type=script&lang=js&




// optional style for arrows & dots


/* harmony default export */ var MarketPlaceWidgetWebvue_type_script_lang_js_ = ({
  name: 'MarketPlaceWidgetWeb',
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"],
    PropertyCard: PropertyCard["a" /* default */],
    VueSlickCarousel: external_vue_slick_carousel_default.a
  },
  data() {
    return {
      marketPlaceData: [],
      settings: {
        pauseOnHover: true,
        autoplaySpeed: 2000,
        autoplay: true,
        lazyLoad: 'ondemand',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        rtl: this.$i18n.locale === 'en' ? false : true,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1025,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
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
  created() {
    this.getMarketPlaceData();
  },
  methods: {
    async getMarketPlaceData() {
      try {
        let perPage = 5;
        const response = await Object(marketplace["a" /* fetchMarketPlaceData */])(perPage);
        this.marketPlaceData = response.Data.data.data;
      } catch (error) {}
    }
  }
});
// CONCATENATED MODULE: ./components/onboarding/MarketPlaceWidgetWeb.vue?vue&type=script&lang=js&
 /* harmony default export */ var onboarding_MarketPlaceWidgetWebvue_type_script_lang_js_ = (MarketPlaceWidgetWebvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/onboarding/MarketPlaceWidgetWeb.vue



function MarketPlaceWidgetWeb_injectStyles (context) {
  
  var style0 = __webpack_require__(688)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var MarketPlaceWidgetWeb_component = Object(componentNormalizer["a" /* default */])(
  onboarding_MarketPlaceWidgetWebvue_type_script_lang_js_,
  MarketPlaceWidgetWebvue_type_template_id_c5521306_scoped_true_render,
  MarketPlaceWidgetWebvue_type_template_id_c5521306_scoped_true_staticRenderFns,
  false,
  MarketPlaceWidgetWeb_injectStyles,
  "c5521306",
  "4d8b020a"
  
)

/* harmony default export */ var MarketPlaceWidgetWeb = (MarketPlaceWidgetWeb_component.exports);
// EXTERNAL MODULE: ./components/home/DahabCities.vue + 4 modules
var DahabCities = __webpack_require__(535);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/onboarding/Onboardingweb.vue?vue&type=script&lang=js&






// optional style for arrows & dots


const {
  mapState: Onboardingwebvue_type_script_lang_js_mapState,
  mapActions: Onboardingwebvue_type_script_lang_js_mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('HomeModule');
/* harmony default export */ var Onboardingwebvue_type_script_lang_js_ = ({
  name: 'onboarding-web',
  components: {
    SliderItem: SliderItem,
    MarketPlaceWidgetWeb: MarketPlaceWidgetWeb,
    DahabCities1: DahabCities["a" /* default */],
    VueSlickCarousel: external_vue_slick_carousel_default.a,
    MarketPlaceCard_2: MarketPlaceCard_2["a" /* default */]
    // carousel, //: typeof window !== 'undefined' ? () => import('vue-owl-carousel') : ''
  },

  data() {
    return {
      requestsData: [],
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        rtl: this.$i18n.locale === 'en' ? false : true
      },
      categories: [{
        title_en: 'Residential',
        title_ar: 'سكنى',
        imgSrc: __webpack_require__(451)
      }, {
        title_en: 'Vacations',
        title_ar: 'أجازات',
        imgSrc: __webpack_require__(452)
      }, {
        title_en: 'Administration',
        title_ar: 'إدارى',
        imgSrc: __webpack_require__(453)
      }, {
        title_en: 'Commercial',
        title_ar: 'تجارى',
        imgSrc: __webpack_require__(454)
      }, {
        title_en: 'Events',
        title_ar: 'مناسبات',
        imgSrc: __webpack_require__(455)
      }, {
        title_en: 'Coworking Spaces',
        title_ar: 'أماكن للعمل الجماعى',
        imgSrc: __webpack_require__(456)
      }]
      // windowWidth: window.innerWidth,
    };
  },

  computed: {
    ...Onboardingwebvue_type_script_lang_js_mapState(['theView']),
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    }
  },
  methods: {
    ...Onboardingwebvue_type_script_lang_js_mapActions(['Set_View']),
    async getRequests() {
      if (window.innerWidth >= 992 && window.innerWidth < 1200) {
        const {
          Data
        } = await this.$axios.$get('/requests?per_page=3');
        this.requestsData = Data.collection;
      } else {
        const {
          Data
        } = await this.$axios.$get('/requests?per_page=4');
        this.requestsData = Data.collection;
      }
    },
    getRequestsOnResize() {
      this.debounce();
    },
    debounce() {
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.getRequests();
      }, 400);
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.getRequestsOnResize);
    }), this.getRequests();
    this.Set_View(localStorage.getItem('choosedUserView') || 'tenantView');
  }
});
// CONCATENATED MODULE: ./components/onboarding/Onboardingweb.vue?vue&type=script&lang=js&
 /* harmony default export */ var onboarding_Onboardingwebvue_type_script_lang_js_ = (Onboardingwebvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/onboarding/Onboardingweb.vue



function Onboardingweb_injectStyles (context) {
  
  var style0 = __webpack_require__(690)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Onboardingweb_component = Object(componentNormalizer["a" /* default */])(
  onboarding_Onboardingwebvue_type_script_lang_js_,
  Onboardingwebvue_type_template_id_3cb0b3fe_render,
  Onboardingwebvue_type_template_id_3cb0b3fe_staticRenderFns,
  false,
  Onboardingweb_injectStyles,
  null,
  "0bc7d8a4"
  
)

/* harmony default export */ var Onboardingweb = (Onboardingweb_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&





const {
  mapState: lib_vue_loader_options_pagesvue_type_script_lang_js_mapState,
  mapActions: lib_vue_loader_options_pagesvue_type_script_lang_js_mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('HomeModule');
const {
  mapState: userMapState
} = Object(external_vuex_["createNamespacedHelpers"])('UserModule');
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'onboarding',
  data() {
    return {
      list: [],
      modalShow: false,
      choosedView: ''
    };
  },
  components: {
    OnboardingSlider: Onboarding,
    OnboardingWeb: Onboardingweb,
    Onboarding_New: Onboarding_New,
    Onboarding_New_Owner: Onboarding_New_Owner
  },
  computed: {
    ...lib_vue_loader_options_pagesvue_type_script_lang_js_mapState(['theView']),
    ...userMapState(['user']),
    appEnv() {
      return this.$config.APP_ENV;
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    }
  },
  methods: {
    ...lib_vue_loader_options_pagesvue_type_script_lang_js_mapActions(['Set_View']),
    changeView(view) {
      this.Set_View(view);
      this.modalShow = false;
      this.choosedView = view;
      localStorage.setItem('choosedUserView', view);
    },
    test() {
      alert('Clicked');
    }
  },
  head() {
    return {
      title: `${this.dir === 'ltr' ? 'Rentup | Home' : 'الرئيسية'} ${this.appEnv !== 'production' ? '| Staging' : ''}`,
      meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.dir === "ltr" ? "Home Page" : "الصفحة الرئيسية"
      }]
    };
  },
  watch: {
    $i18n: {
      handler(value) {
        if (false) {}
      },
      immediate: true
    },
    modalShow(newVal) {
      if (!newVal) {
        if (!this.choosedView) {
          this.Set_View('tenantView');
          localStorage.setItem('choosedUserView', 'tenantView');
        }
      }
    }
  },
  mounted() {
    if (localStorage.getItem('choosedUserView') || this.user) {
      this.modalShow = false;
      this.choosedView = localStorage.getItem('choosedUserView');
    } else {
      this.modalShow = true;
    }
    this.Set_View(localStorage.getItem('choosedUserView') || 'tenantView');
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(692)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "83db84f0",
  "77310bc0"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map