exports.ids = [2];
exports.modules = {

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(508);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("056efec4", content, true, context)
};

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchField_vue_vue_type_style_index_0_id_4ac89f83_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchField_vue_vue_type_style_index_0_id_4ac89f83_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchField_vue_vue_type_style_index_0_id_4ac89f83_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchField_vue_vue_type_style_index_0_id_4ac89f83_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchField_vue_vue_type_style_index_0_id_4ac89f83_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.suggestions{background:#fff;border-radius:0 0 5px 5px;position:absolute;top:100%;left:0;right:0;z-index:999999 !important;overflow-y:scroll;height:200px;box-shadow:0px 0px #f3f3f3;border-radius:20px !important;box-shadow:0 10px 20px rgba(80,48,32,.16) !important;border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}.suggestions li{padding:10px;border-bottom:1px solid #f3f3f3;cursor:pointer}.suggestions li:hover{background:#f3f3f3}.suggestions li:active{background:#f3f3f3}.search-wrapper .search-bar-container{transition:all .3s ease-in-out;position:relative;z-index:50 !important}@media(max-width: 767.98px){.search-wrapper .search-bar-container{z-index:999}}.search-wrapper .search-field-cintainer{position:relative;border-radius:20px;box-shadow:0 10px 20px rgba(80,48,32,.16) !important;width:100%;height:80px;padding:7px 10px 7px 15px;background-color:#fff;outline:none !important}@media(max-width: 767.98px){.search-wrapper .search-field-cintainer{height:60px}}.search-wrapper .search-field-cintainer .banner-input{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:20px;border:1px solid #002bb9;font-weight:600;font-size:16px;line-height:24px}.search-wrapper .search-field-cintainer .banner-input::placeholder{font-weight:600;font-size:16px;line-height:24px}@media(max-width: 767.98px){.search-wrapper .search-field-cintainer .banner-input{border:0}}.search-wrapper .search-field-cintainer .banner-input:focus{box-shadow:none !important}.search-wrapper .banner-button{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:12px 24px;width:100%;height:48px;background:#204ecf;border-radius:8px;margin-top:18px;border-top-left-radius:0;border-bottom-left-radius:0}@media(max-width: 767.98px){.search-wrapper .banner-button{border-radius:0 5px 5px 0;font-size:12px}}[dir=rtl] .search-wrapper .banner-button{left:0;right:auto;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important;border-top-left-radius:inherit !important;border-bottom-left-radius:inherit !important}.search-wrapper .banner-button svg{width:20.4px;height:20.4px}[dir=rtl] .search-wrapper .banner-button svg{transform:rotate(180deg)}.search-wrapper .banner-button span{font-weight:600;font-size:16px;line-height:24px;color:#fff}.search-wrapper .radio-field-cintainer{width:fit-content;margin:0 auto}.search-wrapper .radio-field-cintainer ::v-deep() .custom-control{display:inline-block;height:42px;display:inline-block;margin-top:5px;border-radius:5px;overflow:hidden;position:relative;width:80px}.search-wrapper .radio-field-cintainer ::v-deep() .custom-control .custom-control-label{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;line-height:42px;font-size:13px;background-color:#fff;color:#004ed4;cursor:pointer}.search-wrapper .radio-field-cintainer ::v-deep() .custom-control-input:checked~.custom-control-label{background-color:#004ed4 !important;color:#fff}.search-wrapper .radio-field-cintainer ::v-deep() .custom-control-label::after,.search-wrapper .radio-field-cintainer ::v-deep() .custom-radio .custom-control-label::before,.search-wrapper .radio-field-cintainer ::v-deep() .custom-control-input:checked~.custom-control-label:before,.search-wrapper .radio-field-cintainer ::v-deep() .custom-radio .custom-control-input:checked~.custom-control-label:after{display:none}.search-wrapper ::placeholder{color:#a8a8a8;font-size:12px;font-weight:bold}@media(max-width: 767.98px){.search-wrapper ::placeholder{font-size:9px !important;color:#4b4b4b}}.search-wrapper__text-content{position:relative;z-index:5}.search-wrapper .search-select{position:absolute;top:0;right:100px;bottom:0;border:0;outline:none !important;background-color:transparent !important;margin:0 10px;padding:0 10px;border-left:1px solid #ccc;color:#bfb9b1;font-weight:bold;font-size:14px}@media(max-width: 767.98px){.search-wrapper .search-select{right:90px;font-size:10px;color:#4b4b4b;padding:0 !important}}[dir=rtl] .search-wrapper .search-select{left:100px !important;right:initial !important;border-left:0;border-right:1px solid #ccc}@media(max-width: 767.98px){[dir=rtl] .search-wrapper .search-select{right:initial !important;left:90px !important;font-size:10px}}.search-wrapper__sub-title{z-index:5;position:absolute;bottom:40px;width:100%;display:flex;justify-content:center;flex-direction:column;align-items:center}.search-wrapper__sub-title h2{color:#fff;font-weight:bold}@media(max-width: 767.98px){.search-wrapper__sub-title h2{font-size:18px;text-align:center}}.search-wrapper__sub-title a{margin-top:20px;text-decoration:none;color:#fff;font-weight:bold;font-size:18px;background-color:#004ed4;padding:8px 20px;border-radius:20px;text-transform:capitalize}.app-header .search-field-cintainer{height:40px !important}.app-header .banner-input{border-radius:8px !important;border:0 !important}.app-header ::placeholder{font-size:12px !important}.cards-radio-container{width:100%;display:flex;flex-direction:row;justify-content:center;gap:12px;margin-top:15px}.cards-radio-container .cards-radio-item{display:flex;flex-direction:column;align-items:flex-start;padding:12px;gap:4px;width:150px;height:86px;border:1px solid #111;border-radius:8px;filter:drop-shadow(0px 8px 24px rgba(129, 129, 129, 0.24));flex:none;order:0;flex-grow:1}.cards-radio-container .cards-radio-item .title{font-weight:600;font-size:12px;line-height:12px;color:#111}.cards-radio-container .cards-radio-item .description{font-weight:400;font-size:12px;line-height:12px;color:#48535b}.cards-radio-container .cards-radio-item .radio-circle{background:#fff;border-radius:50px;width:24px;height:24px;border:1px solid #262d3d}.cards-radio-container .cards-radio-item .radio-circle.checked{background-color:#004ed4;border:2px solid #fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/home/SearchField.vue?vue&type=template&id=4ac89f83&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "search-bar-container"
  }, [_c('b-form', {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.searchProperty.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "search-field-cintainer position-relative"
  }, [_c('nuxt-link', {
    staticClass: "slider-post-link d-md-none d-sm-block",
    attrs: {
      "to": _vm.localePath('/search-details')
    }
  }, [_c('b-form-input', {
    staticClass: "banner-input",
    attrs: {
      "placeholder": _vm.$t('home.searchField')
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  })], 1), _vm._v(" "), _c('b-form-input', {
    ref: "searchRef",
    staticClass: "banner-input d-none d-sm-none d-md-block",
    attrs: {
      "placeholder": _vm.$t('home.searchField'),
      "autocomplete": "off"
    },
    on: {
      "click": function ($event) {
        $event.stopPropagation();
        return _vm.onInputSelect.apply(null, arguments);
      },
      "input": _vm.displaySuggestions,
      "focus": _vm.handleShowList
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_vm.showList ? _c('ul', {
    staticClass: "suggestions mb-0 p-0"
  }, _vm._l(_vm.suggestions, function (item, index) {
    return _c('li', {
      key: index,
      staticClass: "suggestion-link text-decoration-none",
      on: {
        "click": function ($event) {
          $event.stopPropagation();
          return _vm.handleSearch(item);
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.name) + "\n          ")]);
  }), 0) : _vm._e()])], 1), _vm._v(" "), _vm.show_SearchBtn_Term ? _c('div', {
    staticClass: "cards-radio-container"
  }, [_c('div', {
    staticClass: "cards-radio-item",
    on: {
      "click": function ($event) {
        _vm.term = 0;
      }
    }
  }, [_c('div', {
    class: _vm.term === 0 ? 'radio-circle checked' : 'radio-circle'
  }), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.$t('form.shortStay')))]), _vm._v(" "), _c('span', {
    staticClass: "description"
  }, [_vm._v(_vm._s(_vm.$t('form.shortStayTooltip')))])]), _vm._v(" "), _c('div', {
    staticClass: "cards-radio-item",
    on: {
      "click": function ($event) {
        _vm.term = 1;
      }
    }
  }, [_c('div', {
    class: _vm.term === 1 ? 'radio-circle checked' : 'radio-circle'
  }), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.$t('form.longStay')))]), _vm._v(" "), _c('span', {
    staticClass: "description"
  }, [_vm._v(_vm._s(_vm.$t('form.longStayTooltip')))])])]) : _vm._e(), _vm._v(" "), _vm.search.length < 1 && _vm.show_SearchBtn_Term ? _c('AppButton', {
    staticClass: "banner-button",
    attrs: {
      "type": "submit",
      "variant": "primary",
      "loading": _vm.loading,
      "disabled": _vm.search.length < 1,
      "label": _vm.$t('common.search')
    }
  }) : _vm._e()], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/SearchField.vue?vue&type=template&id=4ac89f83&

// EXTERNAL MODULE: ./helpers/axios-port.js
var axios_port = __webpack_require__(2);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/SearchField.vue?vue&type=script&lang=js&


const {
  mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('SearchModule');
/* harmony default export */ var SearchFieldvue_type_script_lang_js_ = ({
  name: 'SearchField',
  props: {
    show_SearchBtn_Term: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      search: '',
      timeStamp: null,
      showList: false,
      term: 0,
      suggestions: [],
      loading: false,
      width: 0
    };
  },
  methods: {
    ...mapActions(['setSearchLocationId', 'setSearchPropertyTerm']),
    handleSearch(item) {
      if (this.search.trim() != '') {
        this.setSearchLocationId(JSON.stringify(item.id));
        this.setSearchPropertyTerm(JSON.stringify(this.term));
        localStorage.setItem('searchLocationId', JSON.stringify(item.id));
        localStorage.setItem('searchPropertyTerm', JSON.stringify(this.term));
        this.$router.push({
          path: this.localePath('properties'),
          query: {
            location_id: this.$store.state.SearchModule.searchLocationId || localStorage.getItem('searchLocationId'),
            term: 0
          }
        });
        this.gtag_report_conversion();
      }
    },
    searchProperty() {
      if (this.search.trim() != '') {
        this.gtag_report_conversion();
        this.$router.push({
          path: this.localePath('properties'),
          query: {
            keyword: this.search,
            term: this.term
          }
        });
      }
    },
    gtag_report_conversion(url) {
      let callback = function () {
        if (typeof url != 'undefined') {
          window.location = url;
        }
      };
      gtag('event', 'conversion', {
        send_to: 'AW-10826966991/bkSQCOy7j4wDEM_P2aoo',
        event_callback: callback
      });
      return false;
    },
    async onInputSelect() {
      var self = this;
      self.loading = true;
      if (this.search.trim() != '') {
        await axios_port["a" /* default */].$get(`/autoComplete?keyword=${this.search}&term=${this.term}`).then(res => {
          self.suggestions = res.Data;
        });
      }
    },
    displaySuggestions() {
      if (!this.search || this.search == '') return;
      this.onInputSelect();
    },
    handleShowList() {
      if (this.suggestions && this.suggestions.length > 0) {
        this.showList = true;
      }
    },
    handleListVisibility() {
      this.showList = false;
      if (this.$refs.searchRef) {
        this.$refs.searchRef.blur();
      }
    },
    handleResize() {
      if (window != undefined) this.width = window.innerWidth;
    }
  },
  mounted() {
    document.addEventListener('click', () => {
      this.handleListVisibility();
    });
    if (window != undefined) window.addEventListener('resize', this.handleResize);
  },
  watch: {
    suggestions: {
      handler(value) {
        if (value && value.length > 0) {
          this.showList = true;
          this.loading = false;
        } else {
          this.showList = false;
          this.loading = false;
        }
      },
      immediate: true
    }
  },
  destroyed() {
    if (window != undefined) window.removeEventListener('resize', this.handleResize);
  }
});
// CONCATENATED MODULE: ./components/home/SearchField.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_SearchFieldvue_type_script_lang_js_ = (SearchFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/home/SearchField.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(507)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_SearchFieldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cba0d8fe"
  
)

/* harmony default export */ var SearchField = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map