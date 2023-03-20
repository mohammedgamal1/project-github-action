exports.ids = [41,3];
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

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(348);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("dd7acc96", content, true, context)
};

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/form/chipSelector.vue?vue&type=template&id=2da2bef2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [!_vm.isRadio ? [_vm._ssrNode(_vm.options && _vm.options.length > 0 ? "<div class=\"chips-container\">" + _vm._ssrList(_vm.options, function (option, index) {
    return "<div" + _vm._ssrClass(null, _vm.selectedOptions.includes(option[_vm.$attrs.value] || option.value) || _vm.selected || _vm.defaultValue && _vm.defaultValue.includes(option[_vm.$attrs.value] || option.value) ? 'selected chip' : 'chip') + "><div class=\"chip-label\"><span>" + _vm._ssrEscape(_vm._s(option[_vm.$attrs.label] || option.label)) + "</span></div></div>";
  }) + "</div>" : "<!---->")] : [_vm._ssrNode("<div class=\"chips-container\">", "</div>", [_c('b-form-radio-group', _vm._b({
    model: {
      value: _vm.form[_vm.fieldName],
      callback: function ($$v) {
        _vm.$set(_vm.form, _vm.fieldName, $$v);
      },
      expression: "form[fieldName]"
    }
  }, 'b-form-radio-group', _vm.$attrs, false), _vm._l(_vm.options, function (option, index) {
    return _c('b-form-radio', {
      key: index,
      attrs: {
        "value": option[_vm.$attrs.value]
      }
    }, [_c('div', {
      staticClass: "chip d-flex align-items-center justify-content",
      class: option[_vm.$attrs.value] == _vm.form[_vm.fieldName] ? 'selected' : ''
    }, [_c('span', {
      staticClass: "chip-label font-size-smaller"
    }, [_vm._v("\n              " + _vm._s(option[_vm.$attrs.label]) + "\n            ")])])]);
  }), 1)], 1)]], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/form/chipSelector.vue?vue&type=template&id=2da2bef2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/form/chipSelector.vue?vue&type=script&lang=js&
/* harmony default export */ var chipSelectorvue_type_script_lang_js_ = ({
  name: 'chipSelector',
  props: {
    options: {
      type: Array,
      required: true
    },
    form: {
      type: Object,
      default: () => {}
    },
    fieldName: {
      type: String,
      default: ''
    },
    isRadio: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: [Object, Array],
      required: false
    }
  },
  data() {
    return {
      selectedOptions: []
    };
  },
  methods: {
    toggleOption(option) {
      if (this.defaultValue) {
        this.selectedOptions = this.defaultValue;
        this.defaultValue = null;
      }
      if (!this.selectedOptions.includes(option[this.$attrs.value] || option.value)) {
        this.selectedOptions.push(option[this.$attrs.value] || option.value);
      } else {
        this.selectedOptions.splice(this.selectedOptions.indexOf(option[this.$attrs.value] || option.value), 1);
      }
      this.$emit('update-selection', this.selectedOptions);
    }
  },
  mounted() {
    if (this.defaultValue) {
      this.selectedOptions = this.defaultValue;
    }
    console.log(this.options);
  }
});
// CONCATENATED MODULE: ./components/shared/form/chipSelector.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_chipSelectorvue_type_script_lang_js_ = (chipSelectorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/form/chipSelector.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(347)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_chipSelectorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b33847d0"
  
)

/* harmony default export */ var chipSelector = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_chipSelector_vue_vue_type_style_index_0_id_2da2bef2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(341);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_chipSelector_vue_vue_type_style_index_0_id_2da2bef2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_chipSelector_vue_vue_type_style_index_0_id_2da2bef2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_chipSelector_vue_vue_type_style_index_0_id_2da2bef2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_chipSelector_vue_vue_type_style_index_0_id_2da2bef2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.chips-container{max-width:100%;margin:15px 0px}.chips-container .close-icon{background:#0078ff;color:#e6f2ff;width:13px;height:13px;border-radius:50%;font-size:11px;display:flex;align-items:center;justify-content:center;margin-left:9px;padding:8px}.chips-container .chip{height:36px;left:0;top:0;background:#fff;box-sizing:border-box;cursor:pointer;display:inline-block;padding:8px 12px;margin:8px 12px 8px 0px;transition:all 300ms linear;color:#48535b;border:1px solid #48535b;border-radius:100px}.chips-container .chip .chip-label{font-style:normal;font-weight:600;font-size:12px;line-height:20px;color:#48535b;margin:auto;vertical-align:middle;position:relative;top:50%;transform:translateY(-50%);text-align:center}.chips-container .chip.selected{background:rgba(0,120,255,.1);border:none}.chips-container .chip.selected .chip-label{color:#0078ff}.chips-container .custom-control-label::before{display:none !important}.chips-container .custom-control-label::after{display:none !important}.chips-container .custom-control{padding:0 !important}.chips-container .custom-control-inline{margin:0 !important}.chips-container .chip{border:1px solid #c1c2c5}.chips-container .chip .chip-label{color:#757e8d}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(366);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("45bfce1e", content, true, context)
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

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/form/rentSelect.vue?vue&type=template&id=634ec2fd&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "rent-select",
    attrs: {
      "tabindex": "0"
    }
  }, [_vm._ssrNode((_vm.isClearable && !!Object.keys(_vm.selected).length ? "<img width=\"15px\" height=\"15px\"" + _vm._ssrAttr("src", __webpack_require__(364)) + _vm._ssrClass(null, ['clearData', _vm.dir === 'ltr' ? 'atRight' : 'atLeft']) + ">" : "<!---->") + " <div" + _vm._ssrClass(null, ['dropdown-container', {
    'pl-2': _vm.isClearable
  }]) + "><img width=\"20px\" height=\"20px\"" + _vm._ssrAttr("src", _vm.iconName) + " alt=\"photo\" class=\"dropdown-icon-container\"" + _vm._ssrStyle(null, {
    margin: _vm.dir === 'rtl' ? 'auto 0 auto 10px' : 'auto 10px auto 0'
  }, null) + "> <span class=\"w-100 overflow-hidden\">" + _vm._ssrEscape(_vm._s(_vm._f("displayExcerpt")(_vm.selected[_vm.label] || _vm.placeholder, 26))) + "</span></div> "), _c('b-modal', {
    attrs: {
      "id": "modal-android",
      "hide-footer": true,
      "hide-header": true,
      "centered": "",
      "title": "BootstrapVue"
    },
    model: {
      value: _vm.showMobile,
      callback: function ($$v) {
        _vm.showMobile = $$v;
      },
      expression: "showMobile"
    }
  }, [_c('div', {
    staticClass: "modal-close",
    on: {
      "click": function ($event) {
        _vm.optionsShown = !_vm.optionsShown;
      }
    }
  }, [_c('span', [_vm._v("X")])]), _vm._v(" "), _c('div', {
    staticClass: "title-container"
  }, [_c('p', {
    staticClass: "subtitle"
  }, [_vm._v(_vm._s(_vm.subtitle))]), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "search-field-container"
  }, [_c('svg-icon', {
    staticClass: "search-icon",
    attrs: {
      "name": "magnifying-glass-grey",
      "width": "24",
      "height": "24"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery,
      expression: "searchQuery"
    }],
    staticClass: "dropdown-search",
    attrs: {
      "placeholder": _vm.searchText
    },
    domProps: {
      "value": _vm.searchQuery
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.searchQuery = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.searchQuery !== '' ? _c('span', {
    staticClass: "search-clear",
    on: {
      "click": function ($event) {
        _vm.searchQuery = '';
      }
    }
  }, [_vm._v("Clear")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "options-container"
  }, _vm._l(_vm.shownOptions, function (option) {
    return _c('div', {
      key: option.id,
      class: _vm.selected && _vm.selected === option ? 'option selected' : 'option',
      on: {
        "click": function ($event) {
          _vm.selected = option;
        }
      }
    }, [_c('div', {
      staticClass: "option-label"
    }, [_vm._v(_vm._s(option[_vm.label]))]), _vm._v(" "), _c('div', {
      staticClass: "option-circle"
    }, [_c('div', {
      staticClass: "inner-circle"
    })])]);
  }), 0)]), _vm._ssrNode(" " + (_vm.optionsShown && _vm.currentOS !== 'Android' && _vm.currentOS !== 'iOS' ? "<div id=\"desktop-option-container\"><div class=\"search-field-container\"><input placeholder=\"Search\"" + _vm._ssrAttr("value", _vm.searchQuery) + " class=\"dropdown-search\"></div> <div class=\"options-container\">" + _vm._ssrList(_vm.shownOptions, function (option) {
    return "<div" + _vm._ssrClass(null, _vm.selected && _vm.selected === option ? 'option selected' : 'option') + "><div class=\"option-label\">" + _vm._ssrEscape(_vm._s(option[_vm.label])) + "</div> <div class=\"option-circle\"><div class=\"inner-circle\"></div></div></div>";
  }) + "</div></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/form/rentSelect.vue?vue&type=template&id=634ec2fd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/form/rentSelect.vue?vue&type=script&lang=js&
/* harmony default export */ var rentSelectvue_type_script_lang_js_ = ({
  name: 'rentSelect',
  components: {},
  props: {
    iconName: {
      type: String,
      required: true,
      default: () => ''
    },
    options: {
      type: Array,
      required: false,
      default: () => []
    },
    label: {
      type: String,
      required: false,
      default: () => 'label'
    },
    title: {
      type: String,
      required: false,
      default: () => 'Select option'
    },
    subtitle: {
      type: String,
      required: false,
      default: () => ''
    },
    searchText: {
      type: String,
      required: false,
      default: () => 'Search'
    },
    value: {
      type: String,
      required: false,
      default: () => 'value'
    },
    icon: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false,
      default: () => 'Select an option'
    },
    multiple: {
      type: Boolean,
      required: false,
      default: () => false
    },
    Type: {
      type: String,
      required: false,
      default: () => ''
    },
    defaultValue: {
      type: Object,
      required: false,
      default: () => {}
    },
    isClearable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected: {},
      searchQuery: '',
      optionsShown: false,
      shownOptions: []
    };
  },
  methods: {
    showDropdown() {
      var self = this;
      this.optionsShown = !this.optionsShown;
      if (this.optionsShown && this.currentOS !== 'Android' && this.currentOS !== 'iOS') {
        window.addEventListener('click', e => {
          if (self.optionsShown && self.currentOS !== 'Android' && self.currentOS !== 'iOS') {
            let container = document.getElementById('desktop-option-container').getBoundingClientRect();
            let container2 = document.querySelector(`#${self.$attrs.id} .dropdown-container`).getBoundingClientRect();
            if ((e.clientX < container.left || e.clientX > container.right || e.clientY < container.top || e.clientY > container.bottom) && (e.clientX < container2.left || e.clientX > container2.right || e.clientY < container2.top || e.clientY > container2.bottom)) {
              self.optionsShown = false;
            }
          }
        });
      }
    },
    clearSelected() {
      this.selected = {};
    }
  },
  mounted() {
    this.shownOptions = this.options;
    if (this.defaultValue) {
      this.selected = this.defaultValue;
    }
  },
  computed: {
    currentOS() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        return 'Windows Phone';
      }
      if (/android/i.test(userAgent)) {
        return 'Android';
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS';
      }
      return 'unknown';
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    showMobile: {
      get() {
        return this.optionsShown && (this.currentOS === 'Android' || this.currentOS === 'iOS');
      },
      set(newName) {
        return newName;
      }
    }
  },
  watch: {
    selected: {
      handler(value) {
        this.optionsShown = false;
        this.$emit('input', this.selected);
      }
    },
    options: {
      handler(value) {
        this.shownOptions = value;
      }
    },
    searchQuery: {
      handler(value) {
        if (value === '') {
          this.shownOptions = this.options;
        } else {
          this.shownOptions = this.options.filter(option => {
            return option[this.label].toLowerCase().includes(value.toLowerCase());
          });
        }
      }
    },
    defaultValue: {
      handler() {
        this.selected = this.defaultValue;
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./components/shared/form/rentSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_rentSelectvue_type_script_lang_js_ = (rentSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/form/rentSelect.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(365)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_rentSelectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0cecdda2"
  
)

/* harmony default export */ var rentSelect = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDYwLjk2MyA2MC44NDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwLjk2MyA2MC44NDI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiMyMzFGMjA7IiBkPSJNNTkuNTk1LDUyLjg2MUwzNy4wOTQsMzAuMzU5TDU5LjQ3Myw3Ljk4YzEuODI1LTEuODI2LDEuODI1LTQuNzg2LDAtNi42MTENCgljLTEuODI2LTEuODI1LTQuNzg1LTEuODI1LTYuNjExLDBMMzAuNDgzLDIzLjc0OEw4LjEwNSwxLjM2OWMtMS44MjYtMS44MjUtNC43ODUtMS44MjUtNi42MTEsMGMtMS44MjYsMS44MjYtMS44MjYsNC43ODYsMCw2LjYxMQ0KCWwyMi4zNzgsMjIuMzc5TDEuMzY5LDUyLjg2MWMtMS44MjYsMS44MjYtMS44MjYsNC43ODUsMCw2LjYxMWMwLjkxMywwLjkxMywyLjEwOSwxLjM2OSwzLjMwNiwxLjM2OXMyLjM5My0wLjQ1NiwzLjMwNi0xLjM2OQ0KCWwyMi41MDItMjIuNTAybDIyLjUwMSwyMi41MDJjMC45MTMsMC45MTMsMi4xMDksMS4zNjksMy4zMDYsMS4zNjlzMi4zOTMtMC40NTYsMy4zMDYtMS4zNjkNCglDNjEuNDIsNTcuNjQ3LDYxLjQyLDU0LjY4Nyw1OS41OTUsNTIuODYxeiIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_rentSelect_vue_vue_type_style_index_0_id_634ec2fd_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(349);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_rentSelect_vue_vue_type_style_index_0_id_634ec2fd_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_rentSelect_vue_vue_type_style_index_0_id_634ec2fd_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_rentSelect_vue_vue_type_style_index_0_id_634ec2fd_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_rentSelect_vue_vue_type_style_index_0_id_634ec2fd_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.rent-select{position:relative}.rent-select img.clearData{position:absolute;top:50%;transform:translateY(-50%);cursor:pointer}.rent-select img.clearData.atRight{right:10px}.rent-select img.clearData.atLeft{left:10px}select{display:block;max-width:100%}.dropdown-container{display:flex;border:1px solid #000;border-radius:8px;padding:0 15px;height:44px;line-height:44px;cursor:pointer}.dropdown-container *{cursor:pointer !important}#modal-android .modal-content{background-color:#fff;border-radius:10px}#modal-android .modal-content hr{margin:16px -15px}#modal-android .modal-content .title-container .subtitle{font-weight:400;font-size:14px;line-height:20px;color:#48535b;margin-bottom:4px}#modal-android .modal-content .title-container .title{font-weight:600;font-size:16px;line-height:16px;color:#111;margin-bottom:0}#modal-android .modal-content .search-field-container{position:relative;margin-bottom:24px}#modal-android .modal-content .search-field-container svg{position:absolute;left:5px;top:5px}#modal-android .modal-content .search-field-container .dropdown-search{width:100%;background:transparent;color:#000;padding:5px 35px;font-size:large;height:38px;border:1px solid #e3e5e5;border-radius:8px}#modal-android .modal-content .option{display:flex;flex-direction:row;justify-content:space-between;padding:15px 0}#modal-android .modal-content .option:not(:last-child){border-bottom:#d3d3d3 1px solid}#modal-android .modal-content .option .option-circle{width:20px;height:20px;background-color:transparent;border-radius:50%;border:2px solid #004ed4;margin:auto 0;display:flex;flex-direction:column;justify-content:center}#modal-android .modal-content .option .option-label{max-width:calc(100% - 20px);cursor:default;font-weight:400;font-size:16px;line-height:16px;color:#111}#modal-android .modal-content .option.selected .inner-circle{width:10px;height:10px;background:#004ed4;border-radius:50%;margin:auto}#modal-android .modal-close{display:flex;flex-direction:column;justify-content:center;text-align:center;position:absolute;right:10px;top:10px;width:36px;height:36px;background:#f7f9fa;border-radius:100px}#modal-android .modal-close span{color:#000;font-size:large;font-weight:bolder;text-align:center}#desktop-option-container{width:92%;position:absolute;max-height:50vh;background-color:#fff;z-index:100;padding:5px;margin-top:5px;border-radius:0 0 10px 10px;overflow-y:scroll}#desktop-option-container::-webkit-scrollbar{display:none}#desktop-option-container .search-field-container{padding:15px}#desktop-option-container .search-field-container .dropdown-search{width:100%}#desktop-option-container .option{padding:5px 10px}#desktop-option-container .option:hover{background-color:#f9f9f9}#desktop-option-container .option.selected{background-color:#004ed4;color:#fff}#desktop-option-container .option-label{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 374:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMy42OSAzNC42NSI+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBkPSJNMTEuODUsMzMuNzljLS44OSwwLTEuNC0uODItMS43Ny0xLjQzbC0yLTMuMjdjLTItMy4yNy00LjEtNi42NS02LjA3LTEwQTEzLjQzLDEzLjQzLDAsMCwxLDIuODQsNC43NCwxMSwxMSwwLDAsMSwxNiwuODFjNC40MywxLjgsNy40LDYuODIsNy4zOSwxMi41aDBhMTIuNywxMi43LDAsMCwxLTEuODQsNi4wOHEtMy45MSw2LjQ3LTcuODUsMTIuODljLS4zOS42My0uOTIsMS41LTEuODIsMS41Wk0xMS44OSwyQTkuMTksOS4xOSwwLDAsMCw0LjQ2LDUuOTJhMTEuMzcsMTEuMzcsMCwwLDAtLjcyLDEyLjEzYzIsMy4zNyw0LDYuNzQsNiwxMGwyLDMuMjcuMDcuMTEuMTEtLjE5cTMuOTMtNi40Miw3Ljg1LTEyLjg4YTEwLjc0LDEwLjc0LDAsMCwwLDEuNTUtNS4wN2MwLTQuODYtMi40Ni05LjEzLTYuMTQtMTAuNjNBOSw5LDAsMCwwLDExLjg5LDJaIi8+PHBhdGggZD0iTTExLjg1LDE2LjlBNC45Miw0LjkyLDAsMCwxLDYuOTQsMTJhNC45Miw0LjkyLDAsMCwxLDQuODktNC45MmgwQTQuOTEsNC45MSwwLDAsMSwxNi43NSwxMmE0LjkyLDQuOTIsMCwwLDEtNC44OSw0LjkyWm0wLTguMUEzLjE5LDMuMTksMCwwLDAsOC42NSwxMmEzLjE5LDMuMTksMCwwLDAsMy4yLDMuMTloMGEzLjIsMy4yLDAsMCwwLDAtNi4zOVoiLz48cGF0aCBkPSJNMjIuNzksMzQuNjVILjlhMS4xLDEuMSwwLDAsMSwwLTIuMTZIMjIuNzlhMS4xLDEuMSwwLDAsMSwwLDIuMTZaIi8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNC43OCAzMi42MyI+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBkPSJNMS4wOCwyOS40N2ExLjA5LDEuMDksMCwwLDEtLjY3LS4yM0ExLjA5LDEuMDksMCwwLDEsMCwyOC4zOVY0LjU2YTEuMDcsMS4wNywwLDAsMSwuNzUtMUwxMS4zMS4xNGExLjA4LDEuMDgsMCwwLDEsMSwuMTUsMS4wNywxLjA3LDAsMCwxLC40NC44N1YyNmExLjA3LDEuMDcsMCwwLDEtMS4yOSwxLjA2TDEuMzMsMjkuNDRaTTIuMTYsNS4zNVYyN2w4LjQtMlYyLjY0WiIvPjxwYXRoIGQ9Ik0yMi4yNSwzMi42M2ExLjExLDEuMTEsMCwwLDEtLjUtLjEyTDExLjE0LDI3YTEuMSwxLjEsMCwwLDEtLjU4LTFWMS4xNmExLjA4LDEuMDgsMCwwLDEsLjc3LTFMMTEuNi4wNWExLjEsMS4xLDAsMCwxLC45LjEyTDIzLjE0LDYuOTJhMS4wNiwxLjA2LDAsMCwxLC41LjkxVjMxLjQ4YTEuMDcsMS4wNywwLDAsMS0uODMsMS4wNWwtLjMyLjA3QS45My45MywwLDAsMSwyMi4yNSwzMi42M1ptLTkuNTMtNy4yOCw4Ljc3LDQuNThWOC40M0wxMi43MiwyLjg3WiIvPjxwYXRoIGQ9Ik0yMi41NiwzMi41NmExLjA3LDEuMDcsMCwwLDEtMS4wNy0xLjA4VjcuODNhMS4wNiwxLjA2LDAsMCwxLC43Ny0xTDMzLjQsMy41M2ExLjExLDEuMTEsMCwwLDEsMSwuMTcsMS4wNywxLjA3LDAsMCwxLC40My44NlYyOC42OWExLjA3LDEuMDcsMCwwLDEtLjgxLDFMMjIuODMsMzIuNTNaTTIzLjY0LDguNjRWMzAuMWw5LTIuMjVWNloiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/neighborhood.d3e8570.svg";

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(518);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("335dcce5", content, true, context)
};

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    calculateMoveOutData({
      durationType,
      duration,
      startingDate
    }) {
      if (durationType === 'days' || durationType === 'أيام') {
        this.moveOutDate = this.$dateFns.addDays(new Date(startingDate), duration);
      }
      if (durationType === 'months' || durationType === 'شهور') {
        this.moveOutDate = this.$dateFns.addMonths(new Date(startingDate), duration);
      }
      if (durationType === 'years' || durationType === 'سنين') {
        this.moveOutDate = this.$dateFns.addYears(new Date(startingDate), duration);
      }
    }
  }
});

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(520);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("e7f90996", content, true, context)
};

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(522);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("761911ea", content, true, context)
};

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(524);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("91ff57a2", content, true, context)
};

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDestination_vue_vue_type_style_index_0_id_6e0384cc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(434);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDestination_vue_vue_type_style_index_0_id_6e0384cc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDestination_vue_vue_type_style_index_0_id_6e0384cc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDestination_vue_vue_type_style_index_0_id_6e0384cc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDestination_vue_vue_type_style_index_0_id_6e0384cc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-6e0384cc]{color:#204ecf}.dark-blue[data-v-6e0384cc]{color:#0f256e !important}.gray[data-v-6e0384cc]{color:#262d3d}.light-gray[data-v-6e0384cc]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-6e0384cc]{color:rgba(38,45,61,.32)}.black-light[data-v-6e0384cc]{color:#111}.btn.btn-outline-secondary[data-v-6e0384cc]{color:#333}label[data-v-6e0384cc]{text-transform:capitalize}.object-fit-cover[data-v-6e0384cc]{object-fit:cover}.object-fit-contain[data-v-6e0384cc]{object-fit:contain}.font-14[data-v-6e0384cc]{font-size:14px}.font-18[data-v-6e0384cc]{font-size:18px}.spacer-5[data-v-6e0384cc]{height:5px;width:100%;display:block}.spacer-10[data-v-6e0384cc]{height:10px;width:100%;display:block}.spacer-15[data-v-6e0384cc]{height:15px;width:100%;display:block}.spacer-20[data-v-6e0384cc]{height:20px;width:100%;display:block}.spacer-25[data-v-6e0384cc]{height:25px;width:100%;display:block}.spacer-30[data-v-6e0384cc]{height:30px;width:100%;display:block}.spacer-40[data-v-6e0384cc]{height:40px;width:100%;display:block}.spacer-50[data-v-6e0384cc]{height:50px;width:100%;display:block}.spacer-65[data-v-6e0384cc]{height:65px;width:100%;display:block}.spacer-100[data-v-6e0384cc]{height:100px;width:100%;display:block}.sb-wrapper[data-v-6e0384cc]{position:relative}.sb-wrapper .sb-button[data-v-6e0384cc]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-6e0384cc]{cursor:pointer}.sb-wrapper .sb-button[data-v-6e0384cc]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-6e0384cc]:focus{outline:1px solid}.m-end-2[data-v-6e0384cc]{margin-inline-end:10px}.rent-select[data-v-6e0384cc]{margin-bottom:20px}.step[data-v-6e0384cc]{margin-bottom:50px}.step small[data-v-6e0384cc]{margin:-10px 0 10px;display:block;font-size:12px;color:#989898}h2[data-v-6e0384cc]{font-weight:800;margin-bottom:24px}h6[data-v-6e0384cc]{font-size:16px;font-weight:800;margin-bottom:16px;text-transform:capitalize}[data-v-6e0384cc]  label{font-size:14px}.star-rate[data-v-6e0384cc]{width:25px}[data-v-6e0384cc]  .custome-input .custom-control{padding:0;margin:0}[data-v-6e0384cc]  input,[data-v-6e0384cc]  textarea{text-align:start;unicode-bidi:plaintext}textarea[data-v-6e0384cc]::placeholder,input[data-v-6e0384cc]::placeholder{font-size:12px}.city-img[data-v-6e0384cc]{width:48px;height:48px;border-radius:8px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_StayingDetails_vue_vue_type_style_index_0_id_50d423ee_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(436);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_StayingDetails_vue_vue_type_style_index_0_id_50d423ee_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_StayingDetails_vue_vue_type_style_index_0_id_50d423ee_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_StayingDetails_vue_vue_type_style_index_0_id_50d423ee_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_StayingDetails_vue_vue_type_style_index_0_id_50d423ee_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-50d423ee]{color:#204ecf}.dark-blue[data-v-50d423ee]{color:#0f256e !important}.gray[data-v-50d423ee]{color:#262d3d}.light-gray[data-v-50d423ee]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-50d423ee]{color:rgba(38,45,61,.32)}.black-light[data-v-50d423ee]{color:#111}.btn.btn-outline-secondary[data-v-50d423ee]{color:#333}label[data-v-50d423ee]{text-transform:capitalize}.object-fit-cover[data-v-50d423ee]{object-fit:cover}.object-fit-contain[data-v-50d423ee]{object-fit:contain}.font-14[data-v-50d423ee]{font-size:14px}.font-18[data-v-50d423ee]{font-size:18px}.spacer-5[data-v-50d423ee]{height:5px;width:100%;display:block}.spacer-10[data-v-50d423ee]{height:10px;width:100%;display:block}.spacer-15[data-v-50d423ee]{height:15px;width:100%;display:block}.spacer-20[data-v-50d423ee]{height:20px;width:100%;display:block}.spacer-25[data-v-50d423ee]{height:25px;width:100%;display:block}.spacer-30[data-v-50d423ee]{height:30px;width:100%;display:block}.spacer-40[data-v-50d423ee]{height:40px;width:100%;display:block}.spacer-50[data-v-50d423ee]{height:50px;width:100%;display:block}.spacer-65[data-v-50d423ee]{height:65px;width:100%;display:block}.spacer-100[data-v-50d423ee]{height:100px;width:100%;display:block}.sb-wrapper[data-v-50d423ee]{position:relative}.sb-wrapper .sb-button[data-v-50d423ee]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-50d423ee]{cursor:pointer}.sb-wrapper .sb-button[data-v-50d423ee]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-50d423ee]:focus{outline:1px solid}.m-end-2[data-v-50d423ee]{margin-inline-end:10px}.myParagraph[data-v-50d423ee]{font-size:11px}.makeGap[data-v-50d423ee]{gap:20px}.second-step[data-v-50d423ee]{min-height:100vh}.second-step .step-content .b-form-datepicker .form-control[for=datepicker][data-v-50d423ee]{padding-right:0 !important}.duration-type[data-v-50d423ee]{background-color:transparent;border:1px solid #111;border-radius:8px;font-weight:600;padding:7px 12px;display:flex;gap:4px}.duration-type span[data-v-50d423ee]{font-weight:600;font-size:12px;line-height:12px;color:#111;margin:auto}.duration-type .circle-container[data-v-50d423ee]{width:24px;height:24px;border-radius:50%;border:1px solid #000;display:flex;flex-direction:column;justify-content:center;text-align:center}.duration-type.primary .inner-circle[data-v-50d423ee]{width:14px;height:14px;border-radius:50%;background-color:#004ed4;margin:auto}.duration-indicator[data-v-50d423ee]{font-weight:600;font-size:16px;line-height:16px;color:#111}.inner[data-v-50d423ee]{display:flex;justify-content:space-between;overflow:scroll;padding-bottom:20px;gap:24px}.inner span[data-v-50d423ee]{width:38px;height:38px;padding:10px 12px;font-weight:700;font-size:12px;text-align:center;border-radius:50%;border:1px solid #e3e5e5;color:#48535b;cursor:pointer}.inner span.active[data-v-50d423ee]{color:#0877f1;border-color:#0877f1}.px-minus-15[data-v-50d423ee]{margin-left:-15px !important;margin-right:-15px !important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTerms_vue_vue_type_style_index_0_id_b3ce66de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(437);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTerms_vue_vue_type_style_index_0_id_b3ce66de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTerms_vue_vue_type_style_index_0_id_b3ce66de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTerms_vue_vue_type_style_index_0_id_b3ce66de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTerms_vue_vue_type_style_index_0_id_b3ce66de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-b3ce66de]{color:#204ecf}.dark-blue[data-v-b3ce66de]{color:#0f256e !important}.gray[data-v-b3ce66de]{color:#262d3d}.light-gray[data-v-b3ce66de]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-b3ce66de]{color:rgba(38,45,61,.32)}.black-light[data-v-b3ce66de]{color:#111}.btn.btn-outline-secondary[data-v-b3ce66de]{color:#333}label[data-v-b3ce66de]{text-transform:capitalize}.object-fit-cover[data-v-b3ce66de]{object-fit:cover}.object-fit-contain[data-v-b3ce66de]{object-fit:contain}.font-14[data-v-b3ce66de]{font-size:14px}.font-18[data-v-b3ce66de]{font-size:18px}.spacer-5[data-v-b3ce66de]{height:5px;width:100%;display:block}.spacer-10[data-v-b3ce66de]{height:10px;width:100%;display:block}.spacer-15[data-v-b3ce66de]{height:15px;width:100%;display:block}.spacer-20[data-v-b3ce66de]{height:20px;width:100%;display:block}.spacer-25[data-v-b3ce66de]{height:25px;width:100%;display:block}.spacer-30[data-v-b3ce66de]{height:30px;width:100%;display:block}.spacer-40[data-v-b3ce66de]{height:40px;width:100%;display:block}.spacer-50[data-v-b3ce66de]{height:50px;width:100%;display:block}.spacer-65[data-v-b3ce66de]{height:65px;width:100%;display:block}.spacer-100[data-v-b3ce66de]{height:100px;width:100%;display:block}.sb-wrapper[data-v-b3ce66de]{position:relative}.sb-wrapper .sb-button[data-v-b3ce66de]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-b3ce66de]{cursor:pointer}.sb-wrapper .sb-button[data-v-b3ce66de]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-b3ce66de]:focus{outline:1px solid}.m-end-2[data-v-b3ce66de]{margin-inline-end:10px}.custom-terms-container .term-container[data-v-b3ce66de]{display:flex;justify-content:space-between}.custom-terms-container .term-container h5[data-v-b3ce66de]{margin:auto 0}.custom-terms-container .term-container .percentage-sign[data-v-b3ce66de]{position:absolute;right:50px;top:25px;user-select:none}.custom-terms-container[data-v-b3ce66de]  .counter-input-contianer{gap:5px}.custom-terms-container[data-v-b3ce66de]  .input-field{width:100px !important}.details-container[data-v-b3ce66de]{background:#fff;padding:15px 25px 20px;overflow:hidden;gap:20px}.details-container .form-check[data-v-b3ce66de]{margin-bottom:10px;margin-top:10px;display:flex;align-items:center;padding-left:0}.details-container .form-check.forEn[data-v-b3ce66de]{gap:10px}.details-container .form-check.forEn .form-check-input[data-v-b3ce66de]{margin-left:0}.details-container .form-check.forEn .form-check-label[data-v-b3ce66de]{font-size:13px}.details-container .form-check.forAr[data-v-b3ce66de]{gap:25px}.details-container .form-check.forAr .form-check-input[data-v-b3ce66de]{margin-right:0}.details-container .form-check.forAr .form-check-label[data-v-b3ce66de]{font-size:15px}.details-container .form-check .form-check-input[data-v-b3ce66de]{position:static;width:20px;height:20px;margin-top:auto}.details-container .form-check .form-check-label[data-v-b3ce66de]{font-weight:600;line-height:14px;text-align:center;cursor:pointer}.details-container .cancellation[data-v-b3ce66de]{gap:20px}.details-container .cancellation p[data-v-b3ce66de]{padding-right:20px;font-size:12px}.details-container .prop-type[data-v-b3ce66de]{border:0 !important}.details-container .title-section[data-v-b3ce66de]{margin-bottom:15px}.details-container .row[data-v-b3ce66de]{gap:5px}.details-container .details-item[data-v-b3ce66de]{width:calc((100% / 2) - 10px);text-align:center;padding:15px;border:solid 1px #e3e5e5;border-radius:10px}.details-container .details-item h3[data-v-b3ce66de]{text-align:center;margin:15px 0 0;color:#000;font-weight:bold}.details-container .details-item span[data-v-b3ce66de]{font-size:12px;color:#48535b}.user-terms .title[data-v-b3ce66de]{font-weight:600;font-size:16px;line-height:16px;color:#111}.user-terms .row[data-v-b3ce66de]{align-items:center}.step-content .divider[data-v-b3ce66de]{width:120%;height:5px;position:relative;left:-30px;background-color:#f7f9fa}.user-terms .custom-control.custom-checkbox[data-v-b3ce66de]{width:100%;margin-bottom:10px;padding:10px;border-radius:4px;background:linear-gradient(0deg, rgba(38, 45, 61, 0.04), rgba(38, 45, 61, 0.04)),#fff;span-color:#0f256e !important;span-font-weight:bold;span-margin-left:1.5rem;span-margin-bottom:0 !important}.annual-increase[data-v-b3ce66de]{border:solid 1px #e3e5e5;padding:10px;border-radius:10px}.contract-section .row[data-v-b3ce66de]:first-of-type{border-bottom:1px solid #f2f4f5}.contract-section .row[data-v-b3ce66de]{padding:15px 0px}.contract-section .row[data-v-b3ce66de]:last-of-type{border-top:1px solid #f2f4f5}.user-terms .custom-control-label span[data-v-b3ce66de]{color:#0f256e !important;font-weight:bold;margin-left:1.5rem;margin-bottom:0 !important}[dir=rtl] .user-terms .custom-control-label span[data-v-b3ce66de]{margin-left:unset;margin-right:1.5rem !important}.furnish-radio[data-v-b3ce66de]{display:grid}.furnish-radio .custom-radio[data-v-b3ce66de]{margin:10px 0px;padding:0px}.furnish-radio .custom-radio[data-v-b3ce66de]:first-child{padding-bottom:20px;border-bottom:1px solid #f2f4f5}.furnish-radio .custom-radio .custom-control-label[data-v-b3ce66de]::after{left:0px}.user-terms .form-group .custom-control .custom-control-label[data-v-b3ce66de]::before{left:-24px}.user-terms .custom-control-label[data-v-b3ce66de]::before{left:0}[dir=rtl] .user-terms .custom-control-label[data-v-b3ce66de]::before{left:auto;right:0 !important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_7acf1451_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(438);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_7acf1451_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_7acf1451_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_7acf1451_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_7acf1451_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-7acf1451]{color:#204ecf}.dark-blue[data-v-7acf1451]{color:#0f256e !important}.gray[data-v-7acf1451]{color:#262d3d}.light-gray[data-v-7acf1451]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-7acf1451]{color:rgba(38,45,61,.32)}.black-light[data-v-7acf1451]{color:#111}.btn.btn-outline-secondary[data-v-7acf1451]{color:#333}label[data-v-7acf1451]{text-transform:capitalize}.object-fit-cover[data-v-7acf1451]{object-fit:cover}.object-fit-contain[data-v-7acf1451]{object-fit:contain}.font-14[data-v-7acf1451]{font-size:14px}.font-18[data-v-7acf1451]{font-size:18px}.spacer-5[data-v-7acf1451]{height:5px;width:100%;display:block}.spacer-10[data-v-7acf1451]{height:10px;width:100%;display:block}.spacer-15[data-v-7acf1451]{height:15px;width:100%;display:block}.spacer-20[data-v-7acf1451]{height:20px;width:100%;display:block}.spacer-25[data-v-7acf1451]{height:25px;width:100%;display:block}.spacer-30[data-v-7acf1451]{height:30px;width:100%;display:block}.spacer-40[data-v-7acf1451]{height:40px;width:100%;display:block}.spacer-50[data-v-7acf1451]{height:50px;width:100%;display:block}.spacer-65[data-v-7acf1451]{height:65px;width:100%;display:block}.spacer-100[data-v-7acf1451]{height:100px;width:100%;display:block}.sb-wrapper[data-v-7acf1451]{position:relative}.sb-wrapper .sb-button[data-v-7acf1451]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-7acf1451]{cursor:pointer}.sb-wrapper .sb-button[data-v-7acf1451]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-7acf1451]:focus{outline:1px solid}.m-end-2[data-v-7acf1451]{margin-inline-end:10px}#color-head[data-v-7acf1451]{color:#1c7db6}.details-container[data-v-7acf1451]{background:#fff;padding:0px 25px 20px;overflow:hidden}.details-container.no-border .row span[data-v-7acf1451]{border:none !important}.details-container .prop-type[data-v-7acf1451]{border:0px !important}.details-container .title-section[data-v-7acf1451]{margin-bottom:15px}.details-container .row[data-v-7acf1451]{gap:20px;justify-content:space-between}.details-container .row span[data-v-7acf1451]{border:1px solid #000;border-radius:50%;padding:5px 10px}.details-container .details-item[data-v-7acf1451]{width:calc((100% / 2) - 10px);text-align:center;padding:15px;border:solid 1px #e3e5e5;border-radius:10px}.details-container .details-item h3[data-v-7acf1451]{text-align:center;margin:15px 0px 0px;color:#000;font-weight:bold}.details-container .details-item span[data-v-7acf1451]{font-size:12px;color:#48535b}.request-details[data-v-7acf1451]{min-height:100vh;background-color:#f7f9fa}.request-details .section[data-v-7acf1451]{background-color:#fff;padding:32px 0;margin-top:18px}.request-details .chip[data-v-7acf1451]{display:inline-block;padding:8px 12px;background-color:#e6f2ff;color:#0078ff;font-weight:bold;border-radius:32px;margin:0px 12px 12px 0}.request-details .chip[data-v-7acf1451]:last-child{margin:0}.request-details .heading[data-v-7acf1451]{font-weight:bold}.request-details .heading .container[data-v-7acf1451]{display:flex;justify-content:space-between}.request-details .heading p[data-v-7acf1451]{font-size:18px;margin:0}.request-details .heading .btn-primary[data-v-7acf1451]{background-color:#e6f2ff;color:#0078ff;border:none;font-weight:bold;border-radius:12px}.request-details .cards[data-v-7acf1451]{display:flex;justify-content:space-around}.request-details .cards .card[data-v-7acf1451]{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:1rem;height:156px;width:170px;border:1px solid #e3e5e5;border-radius:32px}.request-details .cards .card .price-tag[data-v-7acf1451]{text-align:center;font-weight:bold;font-size:16px}.request-details .cards .card .price-tag p[data-v-7acf1451]{font-weight:300;color:#48535b;text-align:center;font-size:15px}.request-details .address .container[data-v-7acf1451]{display:flex;align-items:flex-start}.request-details .address .container .svg-icon[data-v-7acf1451]{margin:2px 16px 0 0}.request-details .number-counter[data-v-7acf1451]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #e3e5e5}.request-details .number-counter[data-v-7acf1451]:last-child{border:none}.request-details .number-counter p[data-v-7acf1451]{margin:0;font-weight:600;font-size:16px}.request-details .number-counter .number[data-v-7acf1451]{display:flex;justify-content:center;align-items:center;width:40px;height:40px;border:1px solid #e3e5e5;border-radius:50%}.request-details .actions[data-v-7acf1451]{display:flex;padding:24px 16px 16px;background-color:#fff;margin-top:16px;gap:10px}.request-details .actions .btn[data-v-7acf1451]{padding-top:12px;padding-bottom:12px;border-radius:12px;font-weight:600;border:none;max-width:260px !important}.request-details .actions .btn-secondary[data-v-7acf1451]{background-color:#f7f9fa;color:#111;flex:1;margin-right:14px}.request-details .actions .btn-primary[data-v-7acf1451]{background-color:#0078ff;flex:3}@media screen and (min-width: 768px){.request-details .cards[data-v-7acf1451]{justify-content:center}.request-details .cards .card[data-v-7acf1451]{margin:0 16px}}@media screen and (max-width: 768px){.request-details .actions[data-v-7acf1451]{width:100%;margin:0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/StayingDetails.vue?vue&type=template&id=50d423ee&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {
    staticClass: "second-step"
  }, [_vm._ssrNode("<div class=\"container--fluid\" data-v-50d423ee>", "</div>", [_c('b-row', {
    staticClass: "flex-column"
  }, [_c('b-col', {
    staticClass: "step-heading",
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', {
    staticClass: "second-step__title font-weight-semi font-size-large text-center mb-4"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('form.postingRequest.stayingDetails.heading')) + "\n        ")])]), _vm._v(" "), _vm.selectedTag ? _c('b-col', {
    staticClass: "pt-2 mx-auto d-flex justify-content-center makeGap my-4",
    attrs: {
      "cols": "12",
      "lg": "6"
    }
  }, _vm._l(_vm.selectedTag.price_type, function (duration, index) {
    return _c('button', {
      key: index,
      class: ['duration-type', 'lighter-gray', 'font-size-normal', 'mb-2', 'mt-2', _vm.dir === 'rtl' ? 'mr-1' : 'ml-1', _vm.stayingDetails.selectedDurationType === duration ? 'primary' : ''],
      attrs: {
        "type": "button"
      },
      on: {
        "click": function ($event) {
          return _vm.setDurationType(duration);
        }
      }
    }, [_c('div', {
      staticClass: "circle-container"
    }, [_c('div', {
      staticClass: "inner-circle"
    })]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.formating_price_type(duration)))])]);
  }), 0) : _vm._e(), _vm._v(" "), _c('b-col', {
    staticClass: "my-3 step-content pt-2 mx-auto",
    attrs: {
      "cols": "12",
      "lg": "6"
    }
  }, [_c('div', {
    staticClass: "section-white px-minus-15"
  }, [_c('b-row', {
    staticClass: "px-2 my-2 align-items-center justify-content-between",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-col', {
    attrs: {
      "cols": "6"
    }
  }, [_c('h1', {
    staticClass: "font-size-normal font-weight-bold text-dark"
  }, [_vm._v("\n                " + _vm._s(_vm.dir === 'ltr' ? `Number of ${_vm.formating_price_type(_vm.stayingDetails.selectedDurationType)}` : `عدد ال${_vm.formating_price_type(_vm.stayingDetails.selectedDurationType)}`) + "\n                "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c('b-col', {
    staticClass: "d-flex justify-content-end",
    attrs: {
      "cols": "6"
    }
  }, [_c('CustomCounter', {
    attrs: {
      "id": "duration",
      "step": 1,
      "validation-rules": "required|min_value:1",
      "min": 1,
      "max": _vm.selectedDurationNumber
    },
    model: {
      value: _vm.stayingDetails.selectedDuration,
      callback: function ($$v) {
        _vm.$set(_vm.stayingDetails, "selectedDuration", $$v);
      },
      expression: "stayingDetails.selectedDuration"
    }
  })], 1)], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('b-row', {
    staticClass: "px-2 my-2 align-items-center justify-content-between",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-col', {
    attrs: {
      "cols": "5"
    }
  }, [_c('h1', {
    staticClass: "font-size-normal font-weight-bold text-dark"
  }, [_vm._v("\n                " + _vm._s(_vm.date_StartingDate) + "\n                "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c('b-col', {
    staticClass: "d-flex justify-content-end",
    attrs: {
      "cols": "7"
    }
  }, [_c('b-form-datepicker', {
    staticClass: "pr-4",
    attrs: {
      "date-format-options": _vm.dateFormatOptions,
      "id": "datepicker",
      "placeholder": _vm.$t('common.date'),
      "today-button": "",
      "reset-button": "",
      "close-button": "",
      "locale": "en",
      "min": new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
      "aria-describedby": "inputcheck-in-feedback",
      "state": _vm.startingDateState
    },
    on: {
      "input": _vm.changeDate
    },
    model: {
      value: _vm.stayingDetails.startingDate,
      callback: function ($$v) {
        _vm.$set(_vm.stayingDetails, "startingDate", $$v);
      },
      expression: "stayingDetails.startingDate"
    }
  }), _vm._v(" "), _c('b-form-invalid-feedback', {
    attrs: {
      "id": "input-live-feedback"
    }
  }, [_vm._v("\n                Enter a valid starting date\n              ")])], 1)], 1)], 1)]), _vm._v(" "), _c('b-col', {
    staticClass: "my-3 step-content pt-2 mx-auto",
    attrs: {
      "cols": "12",
      "lg": "6"
    }
  }, [_c('b-row', [_c('b-col', {
    staticClass: "mt-4 section-white",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', {
    staticClass: "align-items-center mb-4"
  }, [_c('b-col', {
    attrs: {
      "md": "12",
      "lg": "6"
    }
  }, [_c('h5', {
    class: ['font-size-normal font-weight-bold text-dark', 'mb-2', _vm.dir === 'rtl' ? 'mr-1' : 'ml-1']
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('form.postingRequest.stayingDetails.budget_range')) + "\n                  "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")]), _vm._v(" "), _vm.stayingDetails.selectedDuration ? _c('span', {
    staticClass: "font-size-smaller light-gray"
  }, [_vm._v("\n                    (" + _vm._s(_vm.formating_price_type_ly()) + ")\n                  ")]) : _vm._e()])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "12",
      "lg": "6"
    }
  }, [_c('b-form-input', {
    attrs: {
      "placeholder": _vm.$t('form.postingRequest.stayingDetails.budget_placeHolder'),
      "type": "number",
      "state": _vm.budgetState
    },
    model: {
      value: _vm.stayingDetails.budgetRange,
      callback: function ($$v) {
        _vm.$set(_vm.stayingDetails, "budgetRange", $$v);
      },
      expression: "stayingDetails.budgetRange"
    }
  }), _vm._v(" "), _c('b-form-invalid-feedback', {
    attrs: {
      "id": "input-live-feedback"
    }
  }, [_vm._v("\n                  Budget range must be over 99 EGP\n                ")])], 1)], 1)], 1), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4 section-white",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', {
    staticClass: "align-items-center mt-4"
  }, [_c('b-col', {
    attrs: {
      "md": "12",
      "lg": "6"
    }
  }, [_c('h5', {
    class: ['font-size-normal font-weight-bold text-dark', 'mb-2', _vm.dir === 'rtl' ? 'mr-1' : 'ml-1']
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('form.postingRequest.stayingDetails.average_Price')) + "\n                ")])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "12",
      "lg": "6"
    }
  }, [_vm.dir === 'ltr' ? _c('p', {
    staticClass: "myParagraph"
  }, [_vm._v("The average rate for this area is between "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("220 LE")]), _vm._v(" to "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("250 LE")]), _vm._v(" per month or "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("30 LE")]), _vm._v(" to "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("35 LE")]), _vm._v(" per day.")]) : _c('p', {
    staticClass: "myParagraph"
  }, [_vm._v("متوسط السعر فى هذه المنطقة ما بين "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("220 جنية")]), _vm._v(" إلى "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("250 جنية")]), _vm._v(" فى الشهر أو "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("30 جنية")]), _vm._v(" إلى "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v("35 جنية")])])])], 1)], 1)], 1), _vm._v(" "), false ? undefined : _vm._e()], 1), _vm._v(" "), _c('b-col', {
    staticClass: "px-0",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', {
    staticClass: "step-next-container mx-auto"
  }, [_c('b-col', {
    attrs: {
      "cols": "5"
    }
  }, [_c('div', [_c('b-button', {
    staticClass: "back-btn",
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": () => {
        _vm.$router.push(this.localePath('/requests/post/destination'));
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('common.back')))])])], 1)]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "7"
    }
  }, [_c('div', [_c('b-button', {
    staticClass: "next-btn",
    attrs: {
      "variant": "primary",
      "disabled": !_vm.budgetState || !_vm.startingDateState
    },
    on: {
      "click": _vm.handleNextClick
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('common.next')))])])], 1)])], 1)], 1)], 1)], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/postingRequestForm/StayingDetails.vue?vue&type=template&id=50d423ee&scoped=true&

// CONCATENATED MODULE: ./mixins/changeCurrent.js
/* harmony default export */ var changeCurrent = ({
  methods: {
    changeStep(action, step) {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    }
  }
});
// EXTERNAL MODULE: ./mixins/calculateMoveOutData.js
var calculateMoveOutData = __webpack_require__(435);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/StayingDetails.vue?vue&type=script&lang=js&


/* harmony default export */ var StayingDetailsvue_type_script_lang_js_ = ({
  name: 'StayingDetails',
  mixins: [changeCurrent, calculateMoveOutData["a" /* default */]],
  components: {
    ChipSelector: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 346)),
    CustomCounter: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 446)),
    BarsChart: () => __webpack_require__.e(/* import() */ 53).then(__webpack_require__.bind(null, 979))
  },
  data() {
    return {
      days: 31,
      months: 12,
      years: 10,
      moveOutDate: null,
      selectedTag: null,
      dateFormatOptions: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      stayingDetails: {
        selectedDurationType: '',
        selectedDuration: 1,
        startingDate: new Date().toISOString().split('T')[0],
        budgetRange: '',
        move_out_date: ''
      }
    };
  },
  computed: {
    selectedDurationNumber() {
      return this.stayingDetails ? this[this.stayingDetails.selectedDurationType] : 0;
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    duration() {
      return this.$dateFns.differenceInDays(new Date(this.moveOutDate), new Date(this.stayingDetails.startingDate));
    },
    budgetTerm() {
      return this.formating_price_type_ly();
    },
    budgetState() {
      if (this.stayingDetails.budgetRange === '') return null;
      return this.stayingDetails.budgetRange >= 100;
    },
    startingDateState() {
      if (this.stayingDetails.startingDate === '') return null;
      return !!this.stayingDetails.startingDate;
    },
    selectedIntialDurationType() {
      this.selectedDurationType = this.selectedDurationType;
      this.selectedDurationType = this.dir === 'ltr' ? this.selectedDurationType : 'أيام';
      return this.selectedDurationType;
    },
    date_StartingDate() {
      let ifHourly = false;
      if (!ifHourly) {
        return this.$t('form.postingRequest.stayingDetails.starting_date');
      } else {
        return this.dir === 'ltr' ? 'Date' : 'التاريخ';
      }
    }
  },
  watch: {
    stayingDetails: {
      handler(newValue, oldValue) {
        const {
          selectedDurationType,
          selectedDuration,
          startingDate
        } = this.stayingDetails;
        this.calculateMoveOutData({
          durationType: selectedDurationType,
          duration: selectedDuration,
          startingDate
        });
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    calculateMoveOutData() {
      switch (this.stayingDetails.selectedDurationType) {
        case 'dy':
          this.stayingDetails.move_out_date = this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate), {
            days: this.stayingDetails.selectedDuration
          })), 'yyyy-MM-dd');
          break;
        case 'my':
          this.stayingDetails.move_out_date = this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate), {
            months: this.stayingDetails.selectedDuration
          })), 'yyyy-MM-dd');
          break;
        case 'yy':
          this.stayingDetails.move_out_date = this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate), {
            years: this.stayingDetails.selectedDuration
          })), 'yyyy-MM-dd');
          break;
        case 'hr':
          this.stayingDetails.move_out_date = this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate), {
            hours: this.stayingDetails.selectedDuration
          })), 'yyyy-MM-dd');
          break;
        case 'wy':
          this.stayingDetails.move_out_date = this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate), {
            weeks: this.stayingDetails.selectedDuration
          })), 'yyyy-MM-dd');
          break;
        default:
          this.stayingDetails.move_out_date = this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate), {
            days: 1
          })), 'yyyy-MM-dd');
      }
    },
    changeDate(value) {
      this.stayingDetails.startingDate = value;
      this.calculateMoveOutData();
    },
    setDurationType(duration) {
      this.stayingDetails.selectedDurationType = duration;
      this.calculateMoveOutData();
    },
    handleDurationNumberClick(value) {
      this.stayingDetails.selectedDuration = value;
    },
    handleNextClick() {
      let {
        budgetRange,
        startingDate,
        selectedDuration,
        selectedDurationType
      } = this.stayingDetails;
      if (!budgetRange || !startingDate || !selectedDuration || !selectedDurationType) {
        let body = this.$t('form.checkListFirst');
        this.$bvToast.toast(body, {
          title: this.$t('form.fillInput'),
          variant: 'primary',
          toaster: 'b-toaster-top-center',
          solid: true,
          autoHideDelay: 1000
        });
        return;
      }
      this.$emit('nextStep', {
        stayingDetails: {
          ...this.stayingDetails,
          ...{
            move_out_date: this.moveOutDate
          }
        },
        term: this.duration > 30 ? 1 : 0
      });
      const request = localStorage.getItem('request') ? JSON.parse(localStorage.getItem('request')) : null;
      localStorage.setItem('request', JSON.stringify({
        ...request,
        stayingDetails: this.stayingDetails
      }));
    },
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
    },
    formating_price_type_ly() {
      switch (this.stayingDetails.selectedDurationType) {
        case 'dy':
          return this.$t('common.daily');
        case 'my':
          return this.$t('common.monthly');
        case 'yy':
          return this.$t('common.yearly');
        case 'hr':
          return this.$t('common.hourly');
        case 'wy':
          return this.$t('common.weekly');
        default:
          return false;
      }
    }
  },
  mounted() {
    const request = localStorage.getItem('request') ? JSON.parse(localStorage.getItem('request')) : this.$router.push(this.localePath('/requests/post/property-category'));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    if (!localStorage.getItem('request')) {
      // Watch The LocalStorage Request
      this.$router.push('/requests/post/property-category');
    }

    // const currentStayingDetails = localStorage.getItem('request') ? JSON.parse(localStorage.getItem('request')).stayingDetails : this.$router.push('/requests/post/destination');

    // if (!!currentStayingDetails.selectedDurationType)
    //   this.stayingDetails = currentStayingDetails;
  },

  created() {
    if (false) {}
  }
});
// CONCATENATED MODULE: ./components/postingRequestForm/StayingDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_StayingDetailsvue_type_script_lang_js_ = (StayingDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/postingRequestForm/StayingDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(519)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_StayingDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "50d423ee",
  "4c13ff68"
  
)

/* harmony default export */ var StayingDetails = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/SelectDestination.vue?vue&type=template&id=6e0384cc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-row', {
    staticClass: "align-items-center justify-content-center"
  }, [_c('b-col', {
    staticClass: "order-2 order-lg-1",
    attrs: {
      "lg": "6"
    }
  }, [_c('h2', {
    staticClass: "text-capitalize-2 font-weight-bold font-size-large text-center"
  }, [_vm._v("\n      " + _vm._s(_vm.$t('form.postingRequest.selectedDestination.heading')) + "\n    ")]), _vm._v(" "), _c('b-row', {
    staticClass: "justify-content-center"
  }, [_c('b-col', {
    staticClass: "mb-4",
    attrs: {
      "lg": "6"
    }
  }, [_c('rent-select', {
    staticClass: "destination-input",
    attrs: {
      "options": _vm.propertiesData.rootLocations,
      "id": "citySelect",
      "title": "Select city",
      "iconName": __webpack_require__(374),
      "placeholder": _vm.$t('form.select_city'),
      "label": "location_name",
      "value": "location_id",
      "defaultValue": _vm.cityDefault
    },
    on: {
      "input": _vm.cityInput
    }
  }, [_vm._v("s\n        ")]), _vm._v(" "), _vm.childLocationDistrict.length > 0 && _vm.destination.city !== null ? _c('rent-select', {
    attrs: {
      "dir": _vm.dir,
      "label": "location_name",
      "options": _vm.childLocationDistrict,
      "title": "Select district",
      "iconName": __webpack_require__(375),
      "placeholder": _vm.$t('form.select_district'),
      "defaultValue": _vm.districtDefault
    },
    on: {
      "input": _vm.districtInput
    }
  }) : _vm._e(), _vm._v(" "), _vm.childLocationNeighborhood.length > 0 && _vm.destination.district !== null ? _c('rent-select', {
    attrs: {
      "dir": _vm.dir,
      "label": "location_name",
      "options": _vm.childLocationNeighborhood,
      "title": "Select neighbourhood",
      "iconName": __webpack_require__(398),
      "placeholder": _vm.$t('form.choose_neighborhood'),
      "defaultValue": _vm.neighborhoodDefault
    },
    on: {
      "input": _vm.neighborhoodInput
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', {
    staticClass: "step-next-container mx-auto"
  }, [_c('b-col', {
    attrs: {
      "cols": "5"
    }
  }, [_c('div', [_c('b-button', {
    staticClass: "back-btn",
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": () => {
        _vm.$router.push(this.localePath('/requests/post/property-category'));
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('common.back')))])])], 1)]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "7"
    }
  }, [_c('div', [_c('b-button', {
    staticClass: "next-btn",
    attrs: {
      "variant": "primary",
      "disabled": !_vm.destination.city
    },
    on: {
      "click": _vm.handleNextClick
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('common.next')))])])], 1)])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/postingRequestForm/SelectDestination.vue?vue&type=template&id=6e0384cc&scoped=true&

// EXTERNAL MODULE: ./components/shared/form/rentSelect.vue + 4 modules
var rentSelect = __webpack_require__(359);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/SelectDestination.vue?vue&type=script&lang=js&

/* harmony default export */ var SelectDestinationvue_type_script_lang_js_ = ({
  components: {
    rentSelect: rentSelect["a" /* default */]
  },
  name: 'SelectDestination',
  props: {
    propertiesData: Object
  },
  data() {
    return {
      destination: {
        city: '',
        district: '',
        neighborhood: ''
      }
    };
  },
  computed: {
    childLocationNeighborhood() {
      return this.$store.state.PropertyModule.neighborhoodLocation;
    },
    childLocationDistrict() {
      return this.$store.state.PropertyModule.districtLocation;
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    cityDefault() {
      var _this$propertiesData, _this$propertiesData$;
      return ((_this$propertiesData = this.propertiesData) === null || _this$propertiesData === void 0 ? void 0 : (_this$propertiesData$ = _this$propertiesData.rootLocations) === null || _this$propertiesData$ === void 0 ? void 0 : _this$propertiesData$.find(city => {
        var _this$destination;
        return city.location_id === ((_this$destination = this.destination) === null || _this$destination === void 0 ? void 0 : _this$destination.city);
      })) || '';
    },
    districtDefault() {
      var _this$childLocationDi;
      return ((_this$childLocationDi = this.childLocationDistrict) === null || _this$childLocationDi === void 0 ? void 0 : _this$childLocationDi.find(district => {
        var _this$destination2;
        return district.location_id === ((_this$destination2 = this.destination) === null || _this$destination2 === void 0 ? void 0 : _this$destination2.district);
      })) || '';
    },
    neighborhoodDefault() {
      var _this$childLocationNe;
      if (!this.districtDefault) return '';
      return ((_this$childLocationNe = this.childLocationNeighborhood) === null || _this$childLocationNe === void 0 ? void 0 : _this$childLocationNe.find(neighborhood => {
        var _this$destination3;
        return neighborhood.location_id === ((_this$destination3 = this.destination) === null || _this$destination3 === void 0 ? void 0 : _this$destination3.neighborhood);
      })) || '';
    }
  },
  methods: {
    handleNextClick() {
      const {
        city
      } = this.destination;
      if (!city) {
        let body = this.$t('form.postingRequest.selectedDestination.fillCity');
        this.$bvToast.toast(body, {
          title: this.$t('form.postingRequest.selectedDestination.fillCity'),
          variant: 'primary',
          toaster: 'b-toaster-top-center',
          solid: true,
          autoHideDelay: 1000
        });
        return;
      }
      this.$emit('nextStep', this.destination);
    },
    cityInput(city) {
      if (!city.location_id) return;
      this.destination.city = city.location_id;
      this.$store.dispatch('PropertyModule/getChildRoot', {
        location_id: city.location_id,
        type: 'district'
      });
      this.$store.dispatch('PropertyModule/getChildRoot', {
        location_id: '',
        type: 'neighborhood'
      });
    },
    districtInput(district) {
      if (!(district !== null && district !== void 0 && district.location_id)) return;
      this.destination.district = district.location_id;
      this.$store.dispatch('PropertyModule/getChildRoot', {
        location_id: district.location_id,
        type: 'neighborhood'
      });
    },
    neighborhoodInput(neighborhood) {
      this.destination.neighborhood = neighborhood.location_id;
    }
  },
  mounted() {
    let request = localStorage.getItem('request') && JSON.parse(localStorage.getItem('request'));
    let propertyCategory = request && request.propertyCategory;
    if (!propertyCategory) {
      this.$router.push(this.localePath('/requests/post/property-category'));
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    const currentDestination = JSON.parse(localStorage.getItem('request')) && JSON.parse(localStorage.getItem('request')).selectedDestination != 'undefined' ? JSON.parse(localStorage.getItem('request')).selectedDestination : {};
    if (!!currentDestination) this.destination = currentDestination;
  }
});
// CONCATENATED MODULE: ./components/postingRequestForm/SelectDestination.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_SelectDestinationvue_type_script_lang_js_ = (SelectDestinationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/postingRequestForm/SelectDestination.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(517)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_SelectDestinationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6e0384cc",
  "12f2c573"
  
)

/* harmony default export */ var SelectDestination = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/UserTerms.vue?vue&type=template&id=b3ce66de&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row user-terms"
  }, [_c('b-col', {
    staticClass: "mt-2 step-content pt-2 mx-auto",
    attrs: {
      "cols": "12",
      "lg": "6"
    }
  }, [_c('b-row', [_c('b-col', {
    staticClass: "step-heading",
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', {
    staticClass: "second-step__title font-weight-semi font-size-large text-center"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('form.postingRequest.userTerms.heading')) + "\n        ")])]), _vm._v(" "), _c('b-col', {
    staticClass: "mt-2 section-white mb-0",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('h3', {
    staticClass: "font-size-semi-large dark-blue title"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('form.postingRequest.preview.your_terms')) + "\n              "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _vm.terms.checkBoxes.length ? [_c('chip-selector', {
    attrs: {
      "options": _vm.terms.checkBoxes,
      "label": "text"
    },
    on: {
      "update-selection": _vm.updateSelectedTerm
    }
  })] : _vm._e()], 2), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_vm.terms.radioBtns.length ? _c('b-row', _vm._l(_vm.terms.radioBtns, function (radio) {
    return _c('div', {
      key: radio.id,
      staticClass: "details-container col-12"
    }, [_c('div', {
      staticClass: "arrive-section"
    }, [_c('h5', {
      staticClass: "font-size-semi-large dark-blue title"
    }, [_vm._v("\n                    " + _vm._s(radio.name) + "\n                  ")]), _vm._v(" "), _c('b-row', _vm._l(radio.input_values, function (val) {
      return _c('b-col', {
        key: val.value_en + radio.id
      }, [_c('div', {
        class: ['form-check', _vm.dir === 'rtl' ? 'forAr' : 'forEn']
      }, [_c('input', {
        staticClass: "form-check-input",
        attrs: {
          "type": "radio",
          "name": _vm.replaceSpacesWithunderscore(radio.name),
          "id": _vm.replaceSpacesWithunderscore(val.value_en)
        },
        on: {
          "change": function ($event) {
            return _vm.getConditions(radio.id, _vm.dir === 'ltr' ? val.value_en : val.value_ar, radio.name);
          }
        }
      }), _vm._v(" "), _c('label', {
        staticClass: "form-check-label font-weight-normal",
        attrs: {
          "for": _vm.replaceSpacesWithunderscore(val.value_en)
        }
      }, [_vm._v("\n                          " + _vm._s(_vm.dir === 'ltr' ? val.value_en : val.value_ar) + "\n                        ")])])]);
    }), 1)], 1)]);
  }), 0) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_vm.terms.inputInt.length ? _c('b-row', [_c('b-col', {
    staticClass: "details-container cancellation mt-0 section-white py-2",
    attrs: {
      "cols": "12"
    }
  }, _vm._l(_vm.terms.inputInt, function (inputTerm) {
    return _c('b-row', {
      key: inputTerm.id,
      staticClass: "justify-content-between mb-3"
    }, [_c('b-col', {
      staticClass: "px-1",
      attrs: {
        "md": "12",
        "lg": "6"
      }
    }, [_c('h5', {
      staticClass: "font-size-semi-large dark-blue title",
      staticStyle: {
        "font-size": "13px"
      }
    }, [_vm._v("\n                  " + _vm._s(inputTerm.name) + "\n                ")]), _vm._v(" "), inputTerm.name.toLowerCase().indexOf('Cancellation'.toLowerCase()) >= 0 ? _c('p', [_vm._v("You can cancel this reservation after the specific days, after this the price will be Non-refundable.")]) : _vm._e()]), _vm._v(" "), _c('b-col', {
      attrs: {
        "md": "12",
        "lg": "3"
      }
    }, [_c('CustomCounter', {
      attrs: {
        "id": `${inputTerm.name}_${inputTerm.id}`,
        "step": 1,
        "validation-rules": "required|min_value:1",
        "min": 1,
        "max": 365
      },
      on: {
        "inputt": function ($event) {
          return _vm.userInputs($event, inputTerm.id, inputTerm.name);
        },
        "changee": function ($event) {
          _vm.getConditions(inputTerm.id, parseInt(inputTerm.value), inputTerm.name);
        }
      },
      model: {
        value: inputTerm.value,
        callback: function ($$v) {
          _vm.$set(inputTerm, "value", $$v);
        },
        expression: "inputTerm.value"
      }
    })], 1)], 1);
  }), 1)], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('b-row', [_c('b-col', {
    staticClass: "section-white",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-semi-large dark-blue title"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('property.furnishing_status')) + "\n          "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c('chip-selector', {
    attrs: {
      "options": _vm.transformFurnishTypes,
      "defaultValue": _vm.selectPreferences.furnishType
    },
    on: {
      "update-selection": _vm.updateFurnishTypes
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4 section-white",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', {
    staticClass: "justify-content-between"
  }, [_c('b-col', {
    attrs: {
      "md": "12",
      "lg": "4"
    }
  }, [_c('h5', {
    staticClass: "font-size-semi-large dark-blue title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('form.postingRequest.SelectPreferences.minimum_rooms')) + "\n            "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")])])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "12",
      "lg": "3"
    }
  }, [_c('CustomCounter', {
    attrs: {
      "id": "minimumRooms",
      "step": 1,
      "validation-rules": "required|min_value:1",
      "min": 1,
      "max": 10
    },
    model: {
      value: _vm.selectPreferences.miniumRooms,
      callback: function ($$v) {
        _vm.$set(_vm.selectPreferences, "miniumRooms", $$v);
      },
      expression: "selectPreferences.miniumRooms"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4 section-white",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-semi-large dark-blue title"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('property.property_types')) + "\n        "), _c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c('chip-selector', {
    attrs: {
      "options": _vm.propertyTypes,
      "defaultValue": _vm.selectPreferences.propertyType
    },
    on: {
      "update-selection": _vm.updatePropertyTypes
    }
  })], 1)], 1), _vm._ssrNode(" "), _vm.showNext ? [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('b-row', {
    staticClass: "step-next-container mx-auto"
  }, [_c('b-col', {
    attrs: {
      "cols": "5"
    }
  }, [_c('div', [_c('b-button', {
    staticClass: "back-btn",
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": () => {
        _vm.$router.push(this.localePath('/requests/post/staying-details'));
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('common.back')))])])], 1)]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "7"
    }
  }, [_c('div', [_c('b-button', {
    staticClass: "next-btn",
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": _vm.handleNextClick
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('common.next')))])])], 1)])], 1)], 1)] : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/postingRequestForm/UserTerms.vue?vue&type=template&id=b3ce66de&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/esnext.string.replace-all.js"
var esnext_string_replace_all_js_ = __webpack_require__(337);

// EXTERNAL MODULE: ./components/shared/CounterInput.vue + 4 modules
var CounterInput = __webpack_require__(76);

// EXTERNAL MODULE: ./components/shared/form/chipSelector.vue + 4 modules
var chipSelector = __webpack_require__(346);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(22);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/UserTerms.vue?vue&type=script&lang=js&




/* harmony default export */ var UserTermsvue_type_script_lang_js_ = ({
  name: 'UserTerms',
  props: {
    showDescription: {
      type: Boolean,
      default: () => true
    },
    showNext: {
      type: Boolean,
      default: () => true
    },
    conditionsData: {
      type: Array,
      default: []
    },
    propertiesData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ChipSelector: chipSelector["default"],
    CounterInput: CounterInput["a" /* default */],
    CustomCounter: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 446))
  },
  data() {
    return {
      selectPreferences: {
        miniumRooms: 1,
        minimumContract: 1,
        evictionNotice: 1,
        maximumAnnualIncrease: null,
        arrive: 'Early check-in',
        furnishType: [],
        propertyType: [],
        userTerms: [],
        cancellationDays: 5
      },
      conditions: [],
      conditions_for_Preview: [],
      propertyTypes: [],
      terms: {
        checkBoxes: [],
        radioBtns: [],
        inputInt: []
      },
      propertyCategory: {}
    };
  },
  computed: {
    transformUserConditions() {
      return this.conditionsData.map(condition => ({
        value: condition.id,
        text: condition[`name_${this.$i18n.locale}`]
      }));
    },
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    transformFurnishTypes() {
      return this.propertiesData.furnishType && this.propertiesData.furnishType.map(furnish => ({
        value: furnish.id,
        label: furnish.text
      }));
    },
    transformPropertyTypes() {
      return this.propertiesData.propertyType && this.propertiesData.propertyType.map(property => ({
        value: property.prop_type_id,
        label: property.prop_type_name
      }));
    }
  },
  methods: {
    updateSelectedTerm(terms) {
      this.selectPreferences.userTerms = terms;
      this.conditions = this.conditions.filter(condition => typeof condition.value !== 'boolean');
      this.conditions_for_Preview = this.conditions_for_Preview.filter(condition => typeof condition.value !== 'boolean');
      for (let term of terms) {
        this.getConditions(term, true, "");
      }
    },
    updatePropertyTypes(values) {
      this.selectPreferences.propertyType = values;
    },
    updateFurnishTypes(values) {
      this.selectPreferences.furnishType = values;
    },
    handleNextClick() {
      localStorage.setItem('conditions', JSON.stringify(this.conditions));
      localStorage.setItem('conditionsPreview', JSON.stringify(this.conditions_for_Preview));
      let {
        furnishType,
        miniumRooms,
        propertyType,
        userTerms
      } = this.selectPreferences;
      if (!this.conditions.length) {
        window.scrollTo({
          top: 120,
          left: 0,
          behavior: 'smooth'
        });
        let body = this.$t('form.one_condition_at_Least');
        this.$bvToast.toast(body, {
          title: this.$t('form.fillInput'),
          variant: 'primary',
          toaster: 'b-toaster-top-center',
          solid: true,
          autoHideDelay: 1000
        });
        return;
      }
      if (!furnishType || !propertyType) {
        window.scrollTo({
          top: 120,
          left: 0,
          behavior: 'smooth'
        });
        let body = this.$t('form.checkListFirst');
        this.$bvToast.toast(body, {
          title: this.$t('form.fillInput'),
          variant: 'primary',
          toaster: 'b-toaster-top-center',
          solid: true,
          autoHideDelay: 1000
        });
        return;
      }
      if (!furnishType.length || !miniumRooms || !propertyType.length) {
        window.scrollTo({
          top: 120,
          left: 0,
          behavior: 'smooth'
        });
        let body = this.$t('form.checkListFirst');
        this.$bvToast.toast(body, {
          title: this.$t('form.fillInput'),
          variant: 'primary',
          toaster: 'b-toaster-top-center',
          solid: true,
          autoHideDelay: 1000
        });
        return;
      }
      this.$emit('nextStep', this.selectPreferences);
    },
    replaceSpacesWithunderscore(text) {
      return text.replaceAll(/\s/g, '_');
    },
    getConditions(conditionId, val, name) {
      if (this.conditions.length) {
        if (val !== null || val.trim() !== '') {
          for (let condition of this.conditions) {
            if (condition.condition_id === conditionId) {
              condition.value = val;
              let currentConditionInPreview = this.conditions_for_Preview.filter(condition => condition.id === conditionId)[0];
              currentConditionInPreview.value = val;
              return;
            }
          }
        } else {
          return;
        }
        this.conditions.push({
          condition_id: conditionId,
          value: val
        });
        this.conditions_for_Preview.push({
          id: conditionId,
          value: val,
          name: name
        });
      } else {
        this.conditions.push({
          condition_id: conditionId,
          value: val
        });
        this.conditions_for_Preview.push({
          id: conditionId,
          value: val,
          name: name
        });
      }
    },
    userInputs(e, id, name) {
      this.getConditions(id, parseInt(e), name);
    }
  },
  async mounted() {
    var _request$selectPrefer, _request$selectPrefer2, _request$selectPrefer3, _request$selectPrefer4;
    this.conditions = [];
    this.conditions_for_Preview = [];
    const request = localStorage.getItem('request') ? JSON.parse(localStorage.getItem('request')) : this.$router.push(this.localePath('/requests/post/property-category'));
    let selectedCategory = request.propertyCategory;
    this.propertyCategory = request.propertyCategory;
    const propertyRes = await external_axios_default.a.get(`https://apibeta.rentup.co/api/tags/${selectedCategory.id}/propertyTypeByTag`);
    const conditionRes = await external_axios_default.a.get(`https://apibeta.rentup.co/api/tags/${selectedCategory.id}/conditionByTag`);
    this.propertyTypes = [];
    for (let property of propertyRes.data.Data) {
      this.propertyTypes.push({
        value: property.id,
        label: property.name
      });
    }
    let allConditions = conditionRes.data.Data;
    this.terms.checkBoxes = [];
    this.terms.radioBtns = [];
    this.terms.inputInt = [];
    let checkBoxes = allConditions.filter(condition => condition.category_name.indexOf('Check') >= 0);
    if (checkBoxes.length) {
      for (let term of checkBoxes) {
        this.terms.checkBoxes.push({
          value: term.id,
          text: term.name
        });
      }
    }
    this.terms.radioBtns = allConditions.filter(condition => condition.category_name.indexOf('Radio') >= 0);
    this.terms.inputInt = allConditions.filter(condition => condition.category_name.indexOf('Input') >= 0);
    for (let termInput of this.terms.inputInt) {
      termInput.value = 1;
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.selectPreferences.userTerms = (_request$selectPrefer = request.selectPreferences) === null || _request$selectPrefer === void 0 ? void 0 : _request$selectPrefer.userTerms;
    this.selectPreferences.furnishType = (_request$selectPrefer2 = request.selectPreferences) === null || _request$selectPrefer2 === void 0 ? void 0 : _request$selectPrefer2.furnishType;
    this.selectPreferences.propertyType = (_request$selectPrefer3 = request.selectPreferences) === null || _request$selectPrefer3 === void 0 ? void 0 : _request$selectPrefer3.propertyType;
    this.selectPreferences.miniumRooms = ((_request$selectPrefer4 = request.selectPreferences) === null || _request$selectPrefer4 === void 0 ? void 0 : _request$selectPrefer4.miniumRooms) || 1;
  }
});
// CONCATENATED MODULE: ./components/postingRequestForm/UserTerms.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_UserTermsvue_type_script_lang_js_ = (UserTermsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/postingRequestForm/UserTerms.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(521)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_UserTermsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b3ce66de",
  "2dc3bc7d"
  
)

/* harmony default export */ var UserTerms = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/PostingPreview.vue?vue&type=template&id=7acf1451&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "request-details py-3"
  }, [_vm._ssrNode("<div class=\"container\" data-v-7acf1451>", "</div>", [_c('b-col', {
    staticClass: "step-heading",
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', {
    staticClass: "second-step__title font-weight-semi font-size-large text-center",
    attrs: {
      "id": "color-head"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('form.postingRequest.preview.heading')) + "\n      ")]), _vm._v(" "), _c('h1', {
    staticClass: "second-step__title font-weight-semi font-size-large text-center"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('form.postingRequest.preview.preview')) + "\n      ")])]), _vm._ssrNode(" "), _c('b-col', {
    staticClass: "mx-auto px-0",
    attrs: {
      "cols": "12",
      "md": "9"
    }
  }, [_vm.postingRequest.stayingDetails ? _c('div', {
    staticClass: "cards section"
  }, [_c('div', {
    staticClass: "card mx-2"
  }, [_c('svg-icon', {
    staticClass: "mb-2 ml-2",
    attrs: {
      "fill": "#262D3D",
      "name": "calendar",
      "height": "24",
      "width": "24"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "price-tag"
  }, [_c('span', [_vm._v("\n              " + _vm._s(_vm.postingRequest.stayingDetails.selectedDuration) + "\n              " + _vm._s(_vm.formating_price_type(_vm.postingRequest.stayingDetails.selectedDurationType)) + "\n            ")]), _vm._v(" "), _c('p', [_vm._v("\n              From,\n              " + _vm._s(_vm.$dateFns.format(new Date(_vm.postingRequest.stayingDetails.startingDate), 'dd MMM yyyy')) + "\n            ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "card mx-2"
  }, [_c('svg-icon', {
    staticClass: "mb-2",
    attrs: {
      "fill": "#262D3D",
      "name": "dollar",
      "height": "24",
      "width": "24"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "price-tag"
  }, [_c('span', [_vm._v(_vm._s(_vm.postingRequest.stayingDetails.budgetRange))]), _vm._v("\n            " + _vm._s(_vm.$t('common.egp')) + "\n            "), _c('p', [_vm._v("\n              " + _vm._s(_vm.formating_price_type_ly(_vm.postingRequest.stayingDetails.selectedDurationType)) + "\n            ")])])], 1)]) : _vm._e()]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"section mx-auto col-md-9 col-12 py-0\" data-v-7acf1451>", "</div>", [_vm._ssrNode("<div class=\"container mb-3\" data-v-7acf1451><p class=\"heading font-size-semi-large font-weight-bold\" data-v-7acf1451>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('form.postingRequest.preview.your_terms')) + "\n        ") + "</p> " + _vm._ssrList(_vm.checkboxesTerms, function (term, index) {
    return "<span class=\"chip\" data-v-7acf1451>" + _vm._ssrEscape("\n          " + _vm._s(term.name) + "\n        ") + "</span>";
  }) + "</div> "), _vm._ssrNode("<div class=\"container mt-3\" data-v-7acf1451>", "</div>", _vm._l(_vm.otherTerms, function (term) {
    return _c('b-col', {
      key: term.id,
      staticClass: "m-0 p-0",
      attrs: {
        "cols": "12"
      }
    }, [_c('div', {
      class: ['details-container', 'col-12', 'staying_details', isNaN(term.value) ? 'no-border' : '']
    }, [_c('b-row', [_c('h4', {
      staticClass: "gray m-0"
    }, [_vm._v("\n                " + _vm._s(term.name) + "\n              ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(term.value))])])], 1)]);
  }), 1)], 2), _vm._ssrNode(" " + (_vm.postingRequest.selectPreferences ? "<div class=\"section mx-auto col-md-9 col-12\" data-v-7acf1451><div class=\"container\" data-v-7acf1451><p class=\"heading font-size-semi-large font-weight-bold\" data-v-7acf1451>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('form.postingRequest.preview.furnishing_status')) + "\n        ") + "</p> " + _vm._ssrList(_vm.selectedFurnishTypes, function (furnishType, index) {
    return "<span class=\"chip\" data-v-7acf1451>" + _vm._ssrEscape("\n          " + _vm._s(furnishType.text) + "\n        ") + "</span>";
  }) + "</div></div>" : "<!---->") + " " + (_vm.postingRequest.selectPreferences ? "<div class=\"section mx-auto col-md-9 col-12\" data-v-7acf1451><div class=\"container\" data-v-7acf1451><div class=\"number-counter\" data-v-7acf1451><p data-v-7acf1451>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('form.postingRequest.preview.minimum_rooms')) + "\n          ") + "</p> <div class=\"number\" data-v-7acf1451><span data-v-7acf1451>" + _vm._ssrEscape("\n              " + _vm._s(_vm.postingRequest.selectPreferences.miniumRooms || 1) + "\n            ") + "</span></div></div></div></div>" : "<!---->") + " <div class=\"section mx-auto col-md-9 col-12\" data-v-7acf1451><div class=\"container\" data-v-7acf1451><p class=\"heading font-size-semi-large font-weight-bold\" data-v-7acf1451>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('property.property_types')) + "\n        ") + "</p> " + _vm._ssrList(_vm.propertyType, function (type, index) {
    return "<span class=\"chip\" data-v-7acf1451>" + _vm._ssrEscape("\n          " + _vm._s(type.prop_type_name) + "\n        ") + "</span>";
  }) + "</div></div> "), _vm._ssrNode("<div class=\"actions justify-content-center mx-auto col-md-9 col-12 mt-3\" data-v-7acf1451>", "</div>", [_c('b-button', {
    on: {
      "click": () => this.$router.push(this.localePath('/requests/post/terms'))
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('common.back')) + "\n        ")]), _vm._ssrNode(" "), _c('b-button', {
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('submitRequest', _vm.moveOutDate);
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('form.postingRequest.preview.submit')) + "\n        ")])], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/postingRequestForm/PostingPreview.vue?vue&type=template&id=7acf1451&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(22);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/PostingPreview.vue?vue&type=script&lang=js&

/* harmony default export */ var PostingPreviewvue_type_script_lang_js_ = ({
  name: 'PostingPreview',
  props: {
    conditionsData: {
      type: Array,
      default: []
    },
    propertiesData: Object
  },
  data() {
    return {
      moveOutDate: null,
      postingRequest: {},
      checkboxesTerms: [],
      otherTerms: [],
      propertyCategory: {}
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
    },
    formating_price_type_ly(item) {
      switch (item) {
        case 'dy':
          return this.$t('common.daily');
        case 'my':
          return this.$t('common.monthly');
        case 'yy':
          return this.$t('common.yearly');
        case 'hr':
          return this.$t('common.hourly');
        case 'wy':
          return this.$t('common.weekly');
        default:
          return false;
      }
    }
  },
  computed: {
    selectedFurnishTypes() {
      if (this.propertiesData.furnishType) return this.propertiesData.furnishType.filter(type => {
        var _this$postingRequest$, _this$postingRequest$2;
        return (_this$postingRequest$ = this.postingRequest.selectPreferences) === null || _this$postingRequest$ === void 0 ? void 0 : (_this$postingRequest$2 = _this$postingRequest$.furnishType) === null || _this$postingRequest$2 === void 0 ? void 0 : _this$postingRequest$2.some(term => term === type.id);
      });
      return [];
    },
    propertyType() {
      var _this$propertiesData, _this$propertiesData$;
      return (_this$propertiesData = this.propertiesData) === null || _this$propertiesData === void 0 ? void 0 : (_this$propertiesData$ = _this$propertiesData.propertyType) === null || _this$propertiesData$ === void 0 ? void 0 : _this$propertiesData$.filter(type => {
        var _this$postingRequest, _this$postingRequest$3, _this$postingRequest$4;
        return (_this$postingRequest = this.postingRequest) === null || _this$postingRequest === void 0 ? void 0 : (_this$postingRequest$3 = _this$postingRequest.selectPreferences) === null || _this$postingRequest$3 === void 0 ? void 0 : (_this$postingRequest$4 = _this$postingRequest$3.propertyType) === null || _this$postingRequest$4 === void 0 ? void 0 : _this$postingRequest$4.some(p => p === type.prop_type_id);
      });
      return [];
    }
  },
  async mounted() {
    let conditionsPreview = localStorage.getItem('conditionsPreview') ? JSON.parse(localStorage.getItem('conditionsPreview')) : this.$router.push(this.localePath('/requests/post/property-category'));
    let checkboxesConditions = conditionsPreview.filter(condition => condition.name === "");
    this.otherTerms = conditionsPreview.filter(condition => condition.name !== "");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.postingRequest = localStorage.getItem('request') && JSON.parse(localStorage.getItem('request'));
    this.propertyCategory = this.postingRequest.propertyCategory;
    const conditionRes = await external_axios_default.a.get(`https://apibeta.rentup.co/api/tags/${this.propertyCategory.id}/conditionByTag`);
    for (let conditionId of checkboxesConditions) {
      for (let condition of conditionRes.data.Data) {
        if (conditionId.id === condition.id) {
          this.checkboxesTerms.push(condition);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/postingRequestForm/PostingPreview.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_PostingPreviewvue_type_script_lang_js_ = (PostingPreviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/postingRequestForm/PostingPreview.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(523)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_PostingPreviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7acf1451",
  "9b957016"
  
)

/* harmony default export */ var PostingPreview = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(856);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("663482c8", content, true, context)
};

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(858);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f4f5ff5c", content, true, context)
};

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(860);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("40b1249b", content, true, context)
};

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(862);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4fb48198", content, true, context)
};

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(864);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("ebe218f8", content, true, context)
};

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(866);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f4973ba2", content, true, context)
};

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(868);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7ceed0b6", content, true, context)
};

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(870);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7f558012", content, true, context)
};

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(872);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("60e9c98f", content, true, context)
};

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_0_id_00683ed5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(632);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_0_id_00683ed5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_0_id_00683ed5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_0_id_00683ed5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_0_id_00683ed5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-00683ed5]{color:#204ecf}.dark-blue[data-v-00683ed5]{color:#0f256e !important}.gray[data-v-00683ed5]{color:#262d3d}.light-gray[data-v-00683ed5]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-00683ed5]{color:rgba(38,45,61,.32)}.black-light[data-v-00683ed5]{color:#111}.btn.btn-outline-secondary[data-v-00683ed5]{color:#333}label[data-v-00683ed5]{text-transform:capitalize}.object-fit-cover[data-v-00683ed5]{object-fit:cover}.object-fit-contain[data-v-00683ed5]{object-fit:contain}.font-14[data-v-00683ed5]{font-size:14px}.font-18[data-v-00683ed5]{font-size:18px}.spacer-5[data-v-00683ed5]{height:5px;width:100%;display:block}.spacer-10[data-v-00683ed5]{height:10px;width:100%;display:block}.spacer-15[data-v-00683ed5]{height:15px;width:100%;display:block}.spacer-20[data-v-00683ed5]{height:20px;width:100%;display:block}.spacer-25[data-v-00683ed5]{height:25px;width:100%;display:block}.spacer-30[data-v-00683ed5]{height:30px;width:100%;display:block}.spacer-40[data-v-00683ed5]{height:40px;width:100%;display:block}.spacer-50[data-v-00683ed5]{height:50px;width:100%;display:block}.spacer-65[data-v-00683ed5]{height:65px;width:100%;display:block}.spacer-100[data-v-00683ed5]{height:100px;width:100%;display:block}.sb-wrapper[data-v-00683ed5]{position:relative}.sb-wrapper .sb-button[data-v-00683ed5]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-00683ed5]{cursor:pointer}.sb-wrapper .sb-button[data-v-00683ed5]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-00683ed5]:focus{outline:1px solid}.m-end-2[data-v-00683ed5]{margin-inline-end:10px}[data-v-00683ed5]  .icon-container{background:#fff;border-radius:16px;padding:12px;width:56px;height:56px}.step-heading[data-v-00683ed5]{height:56px;padding:10px 24px;background-color:#fff}.step-heading .btn.go-home[data-v-00683ed5]{width:36px;height:36px;background-color:#f7f9fa !important;border-radius:100px}.step-heading .btn.go-home .x[data-v-00683ed5]{color:#000;font-weight:bolder;font-size:x-large}[data-v-00683ed5]  .section-white{background-color:#fff;margin:8px 0;padding:10px}@media only screen and (min-width: 1024px){[data-v-00683ed5]  .section-white{margin:0;margin-top:0 !important;background-color:transparent !important}[data-v-00683ed5]  .section-white:not(:last-child){border-bottom:1px solid #f2f4f5}}.post-form-container[data-v-00683ed5]{background:#f7f9fa;display:block;position:relative;top:0;width:100vw;margin:0;min-height:100vh}.step[data-v-00683ed5]{margin-bottom:50px}.step .btn-outline-primary[data-v-00683ed5],.step .btn-primary[data-v-00683ed5]{height:40px;min-width:100px;line-height:0;font-size:16px;text-transform:capitalize;display:flex;align-items:center;justify-content:space-between;font-weight:800}.step .btn-outline-primary .arrow[data-v-00683ed5],.step .btn-primary .arrow[data-v-00683ed5]{font-size:18px}.step .btn-primary[data-v-00683ed5]{float:right}.step[data-v-00683ed5]  .btn-outline-primary{float:left;border-color:transparent}@media only screen and (min-width: 1024px){.step[data-v-00683ed5]  .step-content{border-radius:20px;background-color:#fff;padding:30px !important}}[dir=rtl] .step .btn-primary[data-v-00683ed5]{float:left}[dir=rtl] .step .btn-outline-primary[data-v-00683ed5]{float:right}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_1_id_00683ed5_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(633);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_1_id_00683ed5_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_1_id_00683ed5_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_1_id_00683ed5_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_1_id_00683ed5_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.step-next-container{text-align:center;position:fixed;bottom:0;width:100%;z-index:999;left:0;background-color:#fff;height:96px;padding:16px 24px}.step-next-container .btn{padding:14px;height:48px;background:#0078ff;border-radius:8px;width:100%;font-weight:600;font-size:16px;line-height:16px;text-align:center;color:#fff}.step-next-container .btn svg path{fill:#fff}.step-next-container .btn.back-btn{background-color:#f7f9fa;color:#000;border:none}.back-reverse{transform:rotate(180deg)}@media only screen and (min-width: 1024px){.step-next-container{position:relative;background-color:transparent;z-index:1;max-width:500px;margin:auto}.step-next-container .btn.back-btn{background-color:#fff}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_050101df_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(634);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_050101df_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_050101df_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_050101df_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_050101df_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-050101df]{color:#204ecf}.dark-blue[data-v-050101df]{color:#0f256e !important}.gray[data-v-050101df]{color:#262d3d}.light-gray[data-v-050101df]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-050101df]{color:rgba(38,45,61,.32)}.black-light[data-v-050101df]{color:#111}.btn.btn-outline-secondary[data-v-050101df]{color:#333}label[data-v-050101df]{text-transform:capitalize}.object-fit-cover[data-v-050101df]{object-fit:cover}.object-fit-contain[data-v-050101df]{object-fit:contain}.font-14[data-v-050101df]{font-size:14px}.font-18[data-v-050101df]{font-size:18px}.spacer-5[data-v-050101df]{height:5px;width:100%;display:block}.spacer-10[data-v-050101df]{height:10px;width:100%;display:block}.spacer-15[data-v-050101df]{height:15px;width:100%;display:block}.spacer-20[data-v-050101df]{height:20px;width:100%;display:block}.spacer-25[data-v-050101df]{height:25px;width:100%;display:block}.spacer-30[data-v-050101df]{height:30px;width:100%;display:block}.spacer-40[data-v-050101df]{height:40px;width:100%;display:block}.spacer-50[data-v-050101df]{height:50px;width:100%;display:block}.spacer-65[data-v-050101df]{height:65px;width:100%;display:block}.spacer-100[data-v-050101df]{height:100px;width:100%;display:block}.sb-wrapper[data-v-050101df]{position:relative}.sb-wrapper .sb-button[data-v-050101df]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-050101df]{cursor:pointer}.sb-wrapper .sb-button[data-v-050101df]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-050101df]:focus{outline:1px solid}.m-end-2[data-v-050101df]{margin-inline-end:10px}.header-container[data-v-050101df]{display:none}@media only screen and (min-width: 1024px){.header-container[data-v-050101df]{display:block;width:100%;background:linear-gradient(267.97deg, #0f256e 1.21%, #1f3c9b 100.15%);height:250px}.page-title[data-v-050101df]{font-weight:700;font-size:42px}.page-sub-title[data-v-050101df]{color:#fbfbfb;font-size:16px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_rent_heading_vue_vue_type_style_index_0_id_109ab929_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(635);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_rent_heading_vue_vue_type_style_index_0_id_109ab929_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_rent_heading_vue_vue_type_style_index_0_id_109ab929_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_rent_heading_vue_vue_type_style_index_0_id_109ab929_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_rent_heading_vue_vue_type_style_index_0_id_109ab929_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-109ab929]{color:#204ecf}.dark-blue[data-v-109ab929]{color:#0f256e !important}.gray[data-v-109ab929]{color:#262d3d}.light-gray[data-v-109ab929]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-109ab929]{color:rgba(38,45,61,.32)}.black-light[data-v-109ab929]{color:#111}.btn.btn-outline-secondary[data-v-109ab929]{color:#333}label[data-v-109ab929]{text-transform:capitalize}.object-fit-cover[data-v-109ab929]{object-fit:cover}.object-fit-contain[data-v-109ab929]{object-fit:contain}.font-14[data-v-109ab929]{font-size:14px}.font-18[data-v-109ab929]{font-size:18px}.spacer-5[data-v-109ab929]{height:5px;width:100%;display:block}.spacer-10[data-v-109ab929]{height:10px;width:100%;display:block}.spacer-15[data-v-109ab929]{height:15px;width:100%;display:block}.spacer-20[data-v-109ab929]{height:20px;width:100%;display:block}.spacer-25[data-v-109ab929]{height:25px;width:100%;display:block}.spacer-30[data-v-109ab929]{height:30px;width:100%;display:block}.spacer-40[data-v-109ab929]{height:40px;width:100%;display:block}.spacer-50[data-v-109ab929]{height:50px;width:100%;display:block}.spacer-65[data-v-109ab929]{height:65px;width:100%;display:block}.spacer-100[data-v-109ab929]{height:100px;width:100%;display:block}.sb-wrapper[data-v-109ab929]{position:relative}.sb-wrapper .sb-button[data-v-109ab929]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-109ab929]{cursor:pointer}.sb-wrapper .sb-button[data-v-109ab929]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-109ab929]:focus{outline:1px solid}.m-end-2[data-v-109ab929]{margin-inline-end:10px}@media only screen and (min-width: 1024px){h1[data-v-109ab929]{font-weight:700;font-size:42px;line-height:48px;color:#fff;margin-top:72px}p[data-v-109ab929]{font-weight:400;font-size:16px;line-height:24px;color:#fbfbfb}.heading-container[data-v-109ab929]{position:absolute;left:0%;right:.07%;top:84px;bottom:0%;background:linear-gradient(267.97deg, #0F256E 1.21%, #1F3C9B 100.15%);height:264px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingData_vue_vue_type_style_index_0_id_dc54cff8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(636);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingData_vue_vue_type_style_index_0_id_dc54cff8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingData_vue_vue_type_style_index_0_id_dc54cff8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingData_vue_vue_type_style_index_0_id_dc54cff8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingData_vue_vue_type_style_index_0_id_dc54cff8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.posting-form-container{background:#fff;box-shadow:0px 4px 8px rgba(39,39,39,.08);border-radius:8px;max-width:calc(100% - 80px);margin:-40px auto 0;padding:48px}.accordion.posting-accordion button{position:relative;border:none;background:linear-gradient(0deg, rgba(38, 45, 61, 0.04), rgba(38, 45, 61, 0.04)),#fff}.accordion.posting-accordion button:focus{outline:none;box-shadow:none}.accordion.posting-accordion button h1{font-weight:700;font-size:24px;line-height:32px;color:#262d3d}.posting-accordion .collapsed>.when-opened,:not(.collapsed)>.when-closed{display:none}.posting-accordion .when-closed,.posting-accordion .when-opened{position:absolute;right:0;left:auto;top:50%}[dir=rtl] .posting-accordion .when-closed,[dir=rtl] .posting-accordion .when-opened{left:5px;right:auto}.posting-accordion .custom-control.custom-checkbox{width:100%;margin-bottom:10px;padding:10px;border-radius:4px;background:linear-gradient(0deg, rgba(38, 45, 61, 0.04), rgba(38, 45, 61, 0.04)),#fff;span-color:#0f256e !important;span-font-weight:bold;span-margin-left:1.5rem;span-margin-bottom:0 !important}.posting-accordion .custom-control-label span{color:#0f256e !important;font-weight:bold;margin-left:1.5rem;margin-bottom:0 !important}[dir=rtl] .posting-accordion .custom-control-label span{margin-left:unset;margin-right:1.5rem}[dir=rtl] .posting-accordion .custom-control.custom-checkbox .custom-control-label:before,[dir=rtl] .posting-accordion .custom-control.custom-checkbox .custom-control-label:after{right:0}.posting-accordion .custom-control-label::before{left:0}.posting-accordion .chips-container .chip.selected .chip-label{color:#fff !important}.posting-accordion .vs__dropdown-menu{z-index:10000000}.posting-accordion .dropdown-menu{z-index:10030 !important}.posting-accordion .counter-input-contianer{padding:2px 5px !important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_3c4cb0ca_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(637);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_3c4cb0ca_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_3c4cb0ca_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_3c4cb0ca_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PostingPreview_vue_vue_type_style_index_0_id_3c4cb0ca_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-3c4cb0ca]{color:#204ecf}.dark-blue[data-v-3c4cb0ca]{color:#0f256e !important}.gray[data-v-3c4cb0ca]{color:#262d3d}.light-gray[data-v-3c4cb0ca]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-3c4cb0ca]{color:rgba(38,45,61,.32)}.black-light[data-v-3c4cb0ca]{color:#111}.btn.btn-outline-secondary[data-v-3c4cb0ca]{color:#333}label[data-v-3c4cb0ca]{text-transform:capitalize}.object-fit-cover[data-v-3c4cb0ca]{object-fit:cover}.object-fit-contain[data-v-3c4cb0ca]{object-fit:contain}.font-14[data-v-3c4cb0ca]{font-size:14px}.font-18[data-v-3c4cb0ca]{font-size:18px}.spacer-5[data-v-3c4cb0ca]{height:5px;width:100%;display:block}.spacer-10[data-v-3c4cb0ca]{height:10px;width:100%;display:block}.spacer-15[data-v-3c4cb0ca]{height:15px;width:100%;display:block}.spacer-20[data-v-3c4cb0ca]{height:20px;width:100%;display:block}.spacer-25[data-v-3c4cb0ca]{height:25px;width:100%;display:block}.spacer-30[data-v-3c4cb0ca]{height:30px;width:100%;display:block}.spacer-40[data-v-3c4cb0ca]{height:40px;width:100%;display:block}.spacer-50[data-v-3c4cb0ca]{height:50px;width:100%;display:block}.spacer-65[data-v-3c4cb0ca]{height:65px;width:100%;display:block}.spacer-100[data-v-3c4cb0ca]{height:100px;width:100%;display:block}.sb-wrapper[data-v-3c4cb0ca]{position:relative}.sb-wrapper .sb-button[data-v-3c4cb0ca]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-3c4cb0ca]{cursor:pointer}.sb-wrapper .sb-button[data-v-3c4cb0ca]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-3c4cb0ca]:focus{outline:1px solid}.m-end-2[data-v-3c4cb0ca]{margin-inline-end:10px}.preview-container[data-v-3c4cb0ca]{background:#fff;box-shadow:0px 4px 8px rgba(39,39,39,.08);border-radius:8px;max-width:calc(100% - 80px);margin:-40px auto 0;padding:48px}.destination-preview[data-v-3c4cb0ca]{border:1px solid rgba(38,45,61,.32);padding:12px;border-radius:8px}.details-item[data-v-3c4cb0ca]{padding:12px;background:linear-gradient(0deg, rgba(38, 45, 61, 0.04), rgba(38, 45, 61, 0.04)),#fff;border-radius:4px}.icon[data-v-3c4cb0ca]{max-height:20px}[data-v-3c4cb0ca]  .custom-control-label::before{left:0}.back[data-v-3c4cb0ca]{cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_0_id_124a467a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(638);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_0_id_124a467a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_0_id_124a467a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_0_id_124a467a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_0_id_124a467a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-124a467a]{color:#204ecf}.dark-blue[data-v-124a467a]{color:#0f256e !important}.gray[data-v-124a467a]{color:#262d3d}.light-gray[data-v-124a467a]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-124a467a]{color:rgba(38,45,61,.32)}.black-light[data-v-124a467a]{color:#111}.btn.btn-outline-secondary[data-v-124a467a]{color:#333}label[data-v-124a467a]{text-transform:capitalize}.object-fit-cover[data-v-124a467a]{object-fit:cover}.object-fit-contain[data-v-124a467a]{object-fit:contain}.font-14[data-v-124a467a]{font-size:14px}.font-18[data-v-124a467a]{font-size:18px}.spacer-5[data-v-124a467a]{height:5px;width:100%;display:block}.spacer-10[data-v-124a467a]{height:10px;width:100%;display:block}.spacer-15[data-v-124a467a]{height:15px;width:100%;display:block}.spacer-20[data-v-124a467a]{height:20px;width:100%;display:block}.spacer-25[data-v-124a467a]{height:25px;width:100%;display:block}.spacer-30[data-v-124a467a]{height:30px;width:100%;display:block}.spacer-40[data-v-124a467a]{height:40px;width:100%;display:block}.spacer-50[data-v-124a467a]{height:50px;width:100%;display:block}.spacer-65[data-v-124a467a]{height:65px;width:100%;display:block}.spacer-100[data-v-124a467a]{height:100px;width:100%;display:block}.sb-wrapper[data-v-124a467a]{position:relative}.sb-wrapper .sb-button[data-v-124a467a]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-124a467a]{cursor:pointer}.sb-wrapper .sb-button[data-v-124a467a]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-124a467a]:focus{outline:1px solid}.m-end-2[data-v-124a467a]{margin-inline-end:10px}.step[data-v-124a467a]{margin-bottom:50px}.step .btn-outline-primary[data-v-124a467a],.step .btn-primary[data-v-124a467a]{height:40px;min-width:100px;line-height:0;font-size:16px;text-transform:capitalize;display:flex;align-items:center;justify-content:space-between;font-weight:800}.step .btn-outline-primary .arrow[data-v-124a467a],.step .btn-primary .arrow[data-v-124a467a]{font-size:18px}.step .btn-primary[data-v-124a467a]{float:right}.step[data-v-124a467a]  .btn-outline-primary{float:left;border-color:transparent}[dir=rtl] .step .btn-primary[data-v-124a467a]{float:left}[dir=rtl] .step .btn-outline-primary[data-v-124a467a]{float:right}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_1_id_124a467a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(639);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_1_id_124a467a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_1_id_124a467a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_1_id_124a467a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_FormContainer_vue_vue_type_style_index_1_id_124a467a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-124a467a]{color:#204ecf}.dark-blue[data-v-124a467a]{color:#0f256e !important}.gray[data-v-124a467a]{color:#262d3d}.light-gray[data-v-124a467a]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-124a467a]{color:rgba(38,45,61,.32)}.black-light[data-v-124a467a]{color:#111}.btn.btn-outline-secondary[data-v-124a467a]{color:#333}label[data-v-124a467a]{text-transform:capitalize}.object-fit-cover[data-v-124a467a]{object-fit:cover}.object-fit-contain[data-v-124a467a]{object-fit:contain}.font-14[data-v-124a467a]{font-size:14px}.font-18[data-v-124a467a]{font-size:18px}.spacer-5[data-v-124a467a]{height:5px;width:100%;display:block}.spacer-10[data-v-124a467a]{height:10px;width:100%;display:block}.spacer-15[data-v-124a467a]{height:15px;width:100%;display:block}.spacer-20[data-v-124a467a]{height:20px;width:100%;display:block}.spacer-25[data-v-124a467a]{height:25px;width:100%;display:block}.spacer-30[data-v-124a467a]{height:30px;width:100%;display:block}.spacer-40[data-v-124a467a]{height:40px;width:100%;display:block}.spacer-50[data-v-124a467a]{height:50px;width:100%;display:block}.spacer-65[data-v-124a467a]{height:65px;width:100%;display:block}.spacer-100[data-v-124a467a]{height:100px;width:100%;display:block}.sb-wrapper[data-v-124a467a]{position:relative}.sb-wrapper .sb-button[data-v-124a467a]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-124a467a]{cursor:pointer}.sb-wrapper .sb-button[data-v-124a467a]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-124a467a]:focus{outline:1px solid}.m-end-2[data-v-124a467a]{margin-inline-end:10px}.step-next-container[data-v-124a467a]{text-align:center;position:fixed;bottom:10px;width:100%;z-index:999;left:0}.step-next-container .next-btn[data-v-124a467a]{padding:14px;width:52px;height:52px;box-shadow:0px 6px 8px 8px rgba(8,119,241,.12);border-radius:8px}.step-next-container .next-btn svg path[data-v-124a467a]{fill:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_posting_vue_vue_type_style_index_0_id_cd5956f8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(640);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_posting_vue_vue_type_style_index_0_id_cd5956f8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_posting_vue_vue_type_style_index_0_id_cd5956f8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_posting_vue_vue_type_style_index_0_id_cd5956f8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_posting_vue_vue_type_style_index_0_id_cd5956f8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(340);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(873);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(874);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(875);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-cd5956f8]{color:#204ecf}.dark-blue[data-v-cd5956f8]{color:#0f256e !important}.gray[data-v-cd5956f8]{color:#262d3d}.light-gray[data-v-cd5956f8]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-cd5956f8]{color:rgba(38,45,61,.32)}.black-light[data-v-cd5956f8]{color:#111}.btn.btn-outline-secondary[data-v-cd5956f8]{color:#333}label[data-v-cd5956f8]{text-transform:capitalize}.object-fit-cover[data-v-cd5956f8]{object-fit:cover}.object-fit-contain[data-v-cd5956f8]{object-fit:contain}.font-14[data-v-cd5956f8]{font-size:14px}.font-18[data-v-cd5956f8]{font-size:18px}.spacer-5[data-v-cd5956f8]{height:5px;width:100%;display:block}.spacer-10[data-v-cd5956f8]{height:10px;width:100%;display:block}.spacer-15[data-v-cd5956f8]{height:15px;width:100%;display:block}.spacer-20[data-v-cd5956f8]{height:20px;width:100%;display:block}.spacer-25[data-v-cd5956f8]{height:25px;width:100%;display:block}.spacer-30[data-v-cd5956f8]{height:30px;width:100%;display:block}.spacer-40[data-v-cd5956f8]{height:40px;width:100%;display:block}.spacer-50[data-v-cd5956f8]{height:50px;width:100%;display:block}.spacer-65[data-v-cd5956f8]{height:65px;width:100%;display:block}.spacer-100[data-v-cd5956f8]{height:100px;width:100%;display:block}.sb-wrapper[data-v-cd5956f8]{position:relative}.sb-wrapper .sb-button[data-v-cd5956f8]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-cd5956f8]{cursor:pointer}.sb-wrapper .sb-button[data-v-cd5956f8]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-cd5956f8]:focus{outline:1px solid}.m-end-2[data-v-cd5956f8]{margin-inline-end:10px}.is-mobile-device[data-v-cd5956f8]{display:block;position:relative;width:100%;height:100%}.add-property[data-v-cd5956f8]{display:block;position:relative;width:100%;height:100%}.add-property .property-list-container[data-v-cd5956f8]{position:sticky;background:#fff;z-index:9;overflow-x:scroll}.add-property .property-list-container h6[data-v-cd5956f8]{margin-bottom:0}.add-property .property-list-container[data-v-cd5956f8]::-webkit-scrollbar{height:10px}.add-property .property-list-container[data-v-cd5956f8]::-webkit-scrollbar-track{background:#fff}.add-property .property-list-container[data-v-cd5956f8]::-webkit-scrollbar-thumb{background:#fff}.add-property .property-list-container[data-v-cd5956f8]::-webkit-scrollbar-thumb:hover{background:#c3c3c3}.add-property .add-property-list[data-v-cd5956f8]{text-align:center;padding:0;margin:0;list-style:none;padding:30px 0;border-top:1px solid #c3c3c3;width:max-content;min-width:100%;white-space:nowrap}.add-property .add-property-list li[data-v-cd5956f8]{display:inline-block;color:#333;font-size:14px;padding:0 55px 0 25px;position:relative}.add-property .add-property-list li[data-v-cd5956f8]:before,.add-property .add-property-list li[data-v-cd5956f8]:after{position:absolute;content:\"\"}.add-property .add-property-list li[data-v-cd5956f8]::before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:21px;background-repeat:no-repeat;width:21px;height:21px;left:0}.add-property .add-property-list li[data-v-cd5956f8]::after{height:3px;width:46px;background:#f4f4f4;top:40%;right:0}.add-property .add-property-list li[data-v-cd5956f8]:last-of-type{padding-right:5px}.add-property .add-property-list li[data-v-cd5956f8]:last-of-type::after{display:none}.add-property .add-property-list li.previous[data-v-cd5956f8]::before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:21px;background-repeat:no-repeat}.add-property .add-property-list li.previous[data-v-cd5956f8]::after{background:#004ed4}.add-property .add-property-list li.current[data-v-cd5956f8]::before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-size:21px;background-repeat:no-repeat}[dir=rtl] .add-property .add-property-list li[data-v-cd5956f8]{padding:0 25px 0 55px}[dir=rtl] .add-property .add-property-list li[data-v-cd5956f8]::before{left:auto;right:0}[dir=rtl] .add-property .add-property-list li[data-v-cd5956f8]::after{left:0;right:auto}[dir=rtl] .add-property .add-property-list li[data-v-cd5956f8]:last-of-type{padding-left:5px;padding-right:25px}[dir=rtl] .add-property .add-property-list li.previous[data-v-cd5956f8]::before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:21px;background-repeat:no-repeat}[dir=rtl] .add-property .add-property-list li.current[data-v-cd5956f8]::before{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-size:21px;background-repeat:no-repeat}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGYSURBVEhLtZXdisIwEEanQlWQIoqCgmBBb33/B/FaUBAUBIuooC3U9QxOtquua8N6btKEzHzNz3wJLlfkg7wUyPNcNpuNbLdbORwOkmWZjodhKFEUSavVkm63K5VKRcef8asAiefzuZzP59vIc2q1msRxrELPeBCgu1gsZLlcar/RaEiv15Nmsyn1el3HTqeT7HY7Wa/XcjwedWwwGMhwOJQgCLRvPAjw15Z8PB5r8lesViuZzWb6jQirKfJj89gWSz6ZTP5MDv1+X+cCseQo4gQ4UP4e+HO25F2YOxqN9Jsc5DKcAMocqO15WVgJseQorsIJcBXBJ7lhsUmSaAtOgHsOZbbmHovd7/faghNI01Rbu4o+UBNgBQlO4FM4gWq1qi1F5ItVPVZiOAG8BahQXyzWcoETwLiA8vfFYtvttrbgBDArDglvofzLQgyx5Oh0OrfRggCWaz6Ct5TZKuaaH5GjaN/fX1dYBYYF0+n0rZUwh7lA7L1tl7Jru+fcFm+7Nj724BSxJxNvofzvn0xuCwfq9WT+DyJfuMT1/ZRtHAIAAAAASUVORK5CYII="

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAI3SURBVEhLtZXNS1VBGMafuRmICblIDQpKCJEStwkSfVIStYg0bJO7Vq41JdCFYO6jf6APtWiVgqDelUFS15UL0UANSYICRfzIjzue58ycOTP3nnvuRfS3uXPeO/M873y9I6QHjpFYg+09YHBGYnhOIrUC/N1U8TMlwNVzQOMlgZZageIiFY8ipwGFOyckFld1IAcXy4C+28ooiiyDvTTwMinR/9UOs50p4MY6GgR6bwkUJXRAk2XwYjxTvHBo8uqOm4hjwGV5+jn4dDOMJ+w78NhdLjMhbiizDylUnIR9qUGtAGPA7JfW9EcB1JYDyWcCFad0QEMNagUYAx5FhT2LaCg+0Spws0qg65o9UzV29GeEwY/fupFnafzMWxNe5sIXah+zE1Jjvy37Pz7G4M+GbliUnAS6rwuc0J5B5uXesiQXJB4NSezsq/9s/m3phocxiLpun5oFem4IfPBORl1lmPnkL4mHA+5m2thaxuBsqW5YvPmuMnxyRSD1POFnPrUscf+9xOau7hQBS0mAMag/rxvWJo/MA00f09j1THhDUysS995JrO/oDlmosaGWZcDCpXA3+cscvMuXxrQnfvetxNp//UckauyD6lDD3GSuZ83rdM67wBmwTuXjwmlgti1hKqyZAQNuHXF3PV487EsNu3wbA8IawoKlcJcqHtWXYzPLtmNAWHJDkwB3Ngo3FpTrTGIfHBaufPWJa85lKfjBsQmeTJYEXn/7yeRR5GlpunzIJ/NoAA4AfBblxOLaYQsAAAAASUVORK5CYII="

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHmSURBVEhLtZXLK4RRGMafDwtJWChTJmYhCylCUSzcFtIsLfwBio01yoJS2CsjKyv+AEW5pFDKTBErWQzJpSiUy4I5PN8758xnfHPpi9/mNGfe93n6zuU5lvoG/0hag/cPYOVUYfVMIXID3L/KfGkB0FwO9FRZ6K+1kJ8n826kNKDw2JZC9DE+kYJACTDdJUZu/DL4iAHj2wqz+zJdVwYMNVloD1BMRKKPCjtRIBRWOL6zpzDSamGq00Jejvw20MDJyEZMYeJT5U5+qsVILD6bmvnDmF3LHvYm88Ng+SQhvnuRWVzDWm1CDSfmg7iho5uyLKGghbYK9zV1g7VzvVJPDWppjAE39eJJ1nygIXtxDfeJvdSglsYY8CgSFnpF966fuxiEr2XkafGK7j24kpEYg7sXGfVR9IK/SHof3uzBxhj8ZWA4tYyBr1BGXiKvXD1LL6NEYwxa/DLyhnpF92otYgwYXITX3yu6N1id2EdjwLCqLIadLV5MdC5Ro6/GxYCRO9MtfwyvKexdZm/CWvYQajjj2xgQfgVTkYnasaSy+hLWsJY97E2O7YxxXe8DBhslrvU552nhhi5EFI5u7amUcZ32wWFwMVvSwTXnsmT94DjRTyazhdff+WTyKPK0cEM9PZl/A/AFP7Z1wl0cxc8AAAAASUVORK5CYII="

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/posting.vue?vue&type=template&id=cd5956f8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "add-property py-2"
  }, [_c('postingRequestForm', {
    on: {
      "changeActiveStep": _vm.changeActiveStep
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/properties/posting.vue?vue&type=template&id=cd5956f8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/FormContainer.vue?vue&type=template&id=00683ed5&scoped=true&
var FormContainervue_type_template_id_00683ed5_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"posting-header\" data-v-00683ed5>", "</div>", [_c('b-btn', {
    staticClass: "btn btn-sm btn-outline-primary bg-white m-0 border-0 go-home",
    on: {
      "click": function ($event) {
        _vm.$router.push({
          path: _vm.localePath('/')
        });
      }
    }
  }, [_c('span', {
    staticClass: "x"
  }, [_vm._v(" > Home")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"p-3 post-form-container\" data-v-00683ed5>", "</div>", [_vm._ssrNode("<div class=\"step\"" + _vm._ssrStyle(null, null, {
    display: _vm.step == 0 ? '' : 'none'
  }) + " data-v-00683ed5>", "</div>", [_c('select-destination', {
    attrs: {
      "propertiesData": _vm.propertiesData
    },
    on: {
      "nextStep": _vm.handleDestinationClick
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"step\"" + _vm._ssrStyle(null, null, {
    display: _vm.step == 1 ? '' : 'none'
  }) + " data-v-00683ed5>", "</div>", [_c('staying-details', {
    on: {
      "nextStep": _vm.handleStayingDetailsClick
    }
  })], 1), _vm._ssrNode(" "), _vm.step == 2 ? _vm._ssrNode("<div class=\"step\" data-v-00683ed5>", "</div>", [_c('user-terms', {
    attrs: {
      "userTerms": _vm.postingRequest.userTerms,
      "conditionsData": _vm.userConditions,
      "propertiesData": _vm.propertiesData
    },
    on: {
      "nextStep": _vm.handleSelectPreferenceClick
    }
  })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.step === 3 ? _vm._ssrNode("<div class=\"step\" data-v-00683ed5>", "</div>", [_c('posting-preview', {
    attrs: {
      "postingRequest": _vm.postingRequest,
      "conditionsData": _vm.userConditions,
      "propertiesData": _vm.propertiesData
    },
    on: {
      "submitRequest": _vm.handleSubmitClick
    }
  })], 1) : _vm._e()], 2)], 2);
};
var FormContainervue_type_template_id_00683ed5_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/postingRequestForm/FormContainer.vue?vue&type=template&id=00683ed5&scoped=true&

// EXTERNAL MODULE: ./components/postingRequestForm/SelectDestination.vue + 4 modules
var SelectDestination = __webpack_require__(544);

// EXTERNAL MODULE: ./components/postingRequestForm/StayingDetails.vue + 5 modules
var StayingDetails = __webpack_require__(534);

// EXTERNAL MODULE: ./components/postingRequestForm/UserTerms.vue + 4 modules
var UserTerms = __webpack_require__(545);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/SelectPreferences.vue?vue&type=template&id=543108cf&scoped=true&
var SelectPreferencesvue_type_template_id_543108cf_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row"
  }, [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('h1', {
    staticClass: "second-step__title font-weight-semi font-size-large"
  }, [_vm._v("\n      " + _vm._s(_vm.$t('form.postingRequest.SelectPreferences.heading')) + "\n    ")])]), _vm._ssrNode(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-semi-large dark-blue"
  }, [_vm._v("\n      " + _vm._s(_vm.$t('property.furnishing_status')) + "\n    ")]), _vm._v(" "), _c('chip-selector', {
    attrs: {
      "options": _vm.transformFurnishTypes
    },
    on: {
      "update-selection": _vm.updateFurnishTypes
    }
  })], 1), _vm._ssrNode(" "), _c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-normal dark-blue"
  }, [_vm._v("\n      " + _vm._s(_vm.$t('form.postingRequest.SelectPreferences.minimum_rooms')) + "\n    ")]), _vm._v(" "), _c('CustomCounter', {
    attrs: {
      "id": "minimumRooms",
      "step": 1,
      "validation-rules": "required|min_value:1",
      "min": 1,
      "max": 10
    },
    model: {
      value: _vm.selectPreferences.miniumRooms,
      callback: function ($$v) {
        _vm.$set(_vm.selectPreferences, "miniumRooms", $$v);
      },
      expression: "selectPreferences.miniumRooms"
    }
  })], 1), _vm._ssrNode(" "), _c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-semi-large dark-blue"
  }, [_vm._v("\n      " + _vm._s(_vm.$t('property.property_types')) + "\n    ")]), _vm._v(" "), _c('chip-selector', {
    attrs: {
      "options": _vm.transformPropertyTypes
    },
    on: {
      "update-selection": _vm.updatePropertyTypes
    }
  })], 1), _vm._ssrNode(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "step-next-container"
  }, [_c('b-button', {
    staticClass: "next-btn",
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": _vm.handleNextClick
    }
  }, [_c('svg-icon', {
    attrs: {
      "name": "next",
      "fill": '#FFFFF'
    }
  })], 1)], 1)])], 2);
};
var SelectPreferencesvue_type_template_id_543108cf_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/postingRequestForm/SelectPreferences.vue?vue&type=template&id=543108cf&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/SelectPreferences.vue?vue&type=script&lang=js&
/* harmony default export */ var SelectPreferencesvue_type_script_lang_js_ = ({
  name: 'SelectPreferences',
  props: {
    propertiesData: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ChipSelector: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 346)),
    CustomCounter: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 446))
  },
  data() {
    return {
      selectPreferences: {
        miniumRooms: 1,
        furnishType: null,
        propertyType: null
      }
    };
  },
  computed: {
    transformFurnishTypes() {
      return this.propertiesData.furnishType && this.propertiesData.furnishType.map(furnish => ({
        value: furnish.id,
        label: furnish.text
      }));
    },
    transformPropertyTypes() {
      return this.propertiesData.propertyType && this.propertiesData.propertyType.map(property => ({
        value: property.prop_type_id,
        label: property.prop_type_name
      }));
    }
  },
  methods: {
    updatePropertyTypes(values) {
      this.selectPreferences.propertyType = values;
    },
    updateFurnishTypes(values) {
      this.selectPreferences.furnishType = values;
    },
    handleNextClick() {
      let {
        furnishType,
        miniumRooms,
        propertyType
      } = this.selectPreferences;
      if (!furnishType.length && !miniumRooms && !propertyType.length) {
        let body = this.$t('form.checkListFirst');
        this.$bvToast.toast(body, {
          title: this.$t('form.fillInput'),
          variant: 'primary',
          toaster: 'b-toaster-top-center',
          solid: true,
          autoHideDelay: 1000
        });
        return;
      }
      let furnishTypes = this.propertiesData.furnishType.reduce((accumulator, currentValue) => {
        if (furnishType.some(f => f === currentValue.id)) {
          accumulator.push(currentValue.text);
        }
        return accumulator;
      }, []);
      this.selectPreferences = {
        ...this.selectPreferences,
        furnishType: furnishTypes
      };
      this.$emit('nextStep', this.selectPreferences);
    }
  }
});
// CONCATENATED MODULE: ./components/postingRequestForm/SelectPreferences.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_SelectPreferencesvue_type_script_lang_js_ = (SelectPreferencesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/postingRequestForm/SelectPreferences.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_SelectPreferencesvue_type_script_lang_js_,
  SelectPreferencesvue_type_template_id_543108cf_scoped_true_render,
  SelectPreferencesvue_type_template_id_543108cf_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "543108cf",
  "5bcbdb5d"
  
)

/* harmony default export */ var SelectPreferences = (component.exports);
// EXTERNAL MODULE: ./components/postingRequestForm/PostingPreview.vue + 4 modules
var PostingPreview = __webpack_require__(546);

// EXTERNAL MODULE: ./api/properties.js
var properties = __webpack_require__(357);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/FormContainer.vue?vue&type=script&lang=js&







const {
  mapActions: mapAuthActions
} = Object(external_vuex_["createNamespacedHelpers"])('AuthModule');
const {
  mapActions
} = Object(external_vuex_["createNamespacedHelpers"])('PropertyModule');
const {
  mapState
} = Object(external_vuex_["createNamespacedHelpers"])('UserModule');
const {
  mapGetters
} = Object(external_vuex_["createNamespacedHelpers"])('CoreModule');
/* harmony default export */ var FormContainervue_type_script_lang_js_ = ({
  components: {
    SelectDestination: SelectDestination["a" /* default */],
    StayingDetails: StayingDetails["a" /* default */],
    UserTerms: UserTerms["a" /* default */],
    SelectPreferences: SelectPreferences,
    PostingPreview: PostingPreview["a" /* default */]
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isRTL'])
  },
  data() {
    return {
      step: 0,
      propertiesData: {},
      userConditions: [],
      postingRequest: {
        selectedDestination: null,
        stayingDetails: null,
        userTerms: {
          selectedTerms: []
        },
        selectPreferences: {}
      }
    };
  },
  fetch() {
    this.getPropertiesData();
  },
  methods: {
    ...mapAuthActions(['showAuthModal']),
    ...mapActions(['postRequest']),
    nextStep() {
      this.step++;
      this.$emit('changestep', 1);
    },
    async getPropertiesData() {
      try {
        const response = await Object(properties["b" /* fetchPropertiesData */])();
        this.propertiesData = response.Data;
      } catch (error) {
        console.log(error);
      }
    },
    handleDestinationClick(value) {
      this.postingRequest.selectedDestination = value;
      this.nextStep();
    },
    async handleStayingDetailsClick(data) {
      this.postingRequest.stayingDetails = {
        ...data.stayingDetails
      };
      const response = await Object(properties["c" /* fetchUserTerms */])(data.term);
      this.userConditions = response.Data.conditions;
      this.nextStep();
    },
    handleSelectPreferenceClick(data) {
      this.postingRequest.selectPreferences = {
        ...data
      };
      this.step++;
      this.$emit('changestep', 1);
    },
    transformUserTerms() {
      this.userConditions = this.userConditions.filter(condition => {
        if (this.postingRequest.selectPreferences.userTerms.selectedTerms.indexOf(condition.id) >= 0) {
          return {
            condition_id: condition.id
          };
        }
      });
      return this.userConditions.map(condition => {
        return {
          condition_id: condition.id
        };
      });
    },
    async handleSubmitClick(moveOutDate) {
      const {
        selectedDestination,
        stayingDetails,
        selectPreferences
      } = this.postingRequest;
      let stayingDuration = this.$dateFns.differenceInDays(new Date(moveOutDate), new Date(stayingDetails.startingDate));
      const {
        city,
        district,
        neighborhood
      } = selectedDestination;
      let locationId = neighborhood ? neighborhood : district ? district : city;
      const payload = {
        name: null,
        type: 1,
        term: stayingDuration > 30 ? 1 : 0,
        move_in_date: stayingDetails.startingDate,
        move_out_date: this.$dateFns.format(new Date(moveOutDate), 'yyyy-MM-dd'),
        budget: stayingDetails.budgetRange,
        num_children: null,
        num_of_bed_rooms: selectPreferences.miniumRooms,
        num_of_bath_rooms: null,
        location_id: locationId,
        property_type_ids: selectPreferences.propertyType,
        is_date_flexible: 1,
        notes: null,
        conditions: this.transformUserTerms(),
        furnishing_status: selectPreferences.furnishType
      };
      if (!this.user) {
        this.$store.dispatch('AuthModule/showAuthModal', {
          callbackAction: {
            name: 'PropertyModule/addProperty',
            payload
          }
        }, {
          root: true
        });
      }
      this.postRequest(payload).finally(response => {});
    }
  }
});
// CONCATENATED MODULE: ./components/postingRequestForm/FormContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_FormContainervue_type_script_lang_js_ = (FormContainervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/postingRequestForm/FormContainer.vue



function FormContainer_injectStyles (context) {
  
  var style0 = __webpack_require__(855)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(857)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var FormContainer_component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_FormContainervue_type_script_lang_js_,
  FormContainervue_type_template_id_00683ed5_scoped_true_render,
  FormContainervue_type_template_id_00683ed5_scoped_true_staticRenderFns,
  false,
  FormContainer_injectStyles,
  "00683ed5",
  "6e0b8f1e"
  
)

/* harmony default export */ var FormContainer = (FormContainer_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/desktop/postingRequestForm/FormContainer.vue?vue&type=template&id=124a467a&scoped=true&
var FormContainervue_type_template_id_124a467a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"step\"" + _vm._ssrStyle(null, null, {
    display: _vm.step == 0 ? '' : 'none'
  }) + " data-v-124a467a>", "</div>", [_c('PostingData', {
    attrs: {
      "propertiesData": _vm.propertiesData,
      "conditionsData": _vm.userConditions
    },
    on: {
      "getConditions": _vm.getUserTerms,
      "confirm": _vm.handleConfirmClick
    }
  })], 1), _vm._ssrNode(" "), _vm.step == 1 ? _vm._ssrNode("<div class=\"step\" data-v-124a467a>", "</div>", [_c('posting-preview', {
    attrs: {
      "postingRequest": _vm.postingRequest,
      "conditionsData": _vm.userConditions,
      "propertiesData": _vm.propertiesData
    },
    on: {
      "goBack": _vm.goBack,
      "submit": _vm.handleSubmitClick
    }
  })], 1) : _vm._e()], 2);
};
var FormContainervue_type_template_id_124a467a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/desktop/postingRequestForm/FormContainer.vue?vue&type=template&id=124a467a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/desktop/postingRequestForm/PostingData.vue?vue&type=template&id=dc54cff8&
var PostingDatavue_type_template_id_dc54cff8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('PageHeader', {
    attrs: {
      "title": _vm.$t('header.post_request_title'),
      "subTitle": _vm.$t(`header.post_request_sub_title`)
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"posting-form-container\">", "</div>", [_c('b-row', {
    staticClass: "align-items-center"
  }, [_c('b-col', {
    attrs: {
      "lg": "4"
    }
  }, [_c('v-select', {
    staticClass: "destination-input",
    attrs: {
      "label": "location_name",
      "options": _vm.propertiesData.rootLocations,
      "reduce": location => location.location_id,
      "id": "neighborhoodSelect",
      "placeholder": _vm.$t('form.postingRequest.selectedDestination.input_place_holder')
    },
    on: {
      "input": _vm.cityInput
    },
    model: {
      value: _vm.requestData.destination.city,
      callback: function ($$v) {
        _vm.$set(_vm.requestData.destination, "city", $$v);
      },
      expression: "requestData.destination.city"
    }
  })], 1), _vm._v(" "), _vm.childLocationDistrict.length && _vm.requestData.destination.city !== null ? _c('b-col', {
    attrs: {
      "lg": "4"
    }
  }, [_c('v-select', {
    staticClass: "destination-input",
    attrs: {
      "label": "location_name",
      "options": _vm.childLocationDistrict,
      "reduce": location => location.location_id,
      "id": "neighborhoodSelect",
      "placeholder": _vm.$t('form.postingRequest.selectedDestination.input_place_holder')
    },
    on: {
      "input": _vm.districtInput
    },
    model: {
      value: _vm.requestData.destination.district,
      callback: function ($$v) {
        _vm.$set(_vm.requestData.destination, "district", $$v);
      },
      expression: "requestData.destination.district"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.childLocationNeighborhood.length > 0 && _vm.requestData.destination.district !== null ? _c('b-col', {
    attrs: {
      "lg": "4"
    }
  }, [_c('v-select', {
    staticClass: "destination-input",
    attrs: {
      "label": "location_name",
      "options": _vm.childLocationNeighborhood,
      "reduce": location => location.location_id,
      "id": "neighborhoodSelect",
      "placeholder": _vm.$t('form.postingRequest.selectedDestination.input_place_holder')
    },
    on: {
      "input": _vm.neighborhoodInput
    },
    model: {
      value: _vm.requestData.destination.neighborhood,
      callback: function ($$v) {
        _vm.$set(_vm.requestData.destination, "neighborhood", $$v);
      },
      expression: "requestData.destination.neighborhood"
    }
  })], 1) : _vm._e()], 1), _vm._ssrNode(" "), _c('b-row', {
    staticClass: "mt-3"
  }, [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "accordion posting-accordion",
    attrs: {
      "role": "tablist"
    }
  }, [_c('b-card', {
    staticClass: "mb-3 border-0",
    attrs: {
      "no-body": ""
    }
  }, [_c('b-card-header', {
    staticClass: "p-1",
    attrs: {
      "header-tag": "header",
      "role": "tab"
    }
  }, [_c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-1",
      modifiers: {
        "accordion-1": true
      }
    }],
    attrs: {
      "block": ""
    }
  }, [_c('h1', [_vm._v("\n                  " + _vm._s(_vm.$t('form.postingRequest.stayingDetails.heading')) + "\n                ")]), _vm._v(" "), _c('h2', {
    staticClass: "light-gray font-size-normal"
  }, [_vm._v("\n                  This is a dummy text and will be replaced with real text\n                  later after clients approval, so please don’t read this text\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "when-opened"
  }, [_c('svg-icon', {
    staticClass: "mb-2",
    attrs: {
      "name": "arrow-down-blue",
      "height": "24",
      "width": "24"
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "when-closed"
  }, [_c('svg-icon', {
    staticClass: "mb-2",
    attrs: {
      "name": "arrow-down-dark",
      "height": "24",
      "width": "24"
    }
  })], 1)])], 1), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-1",
      "visible": "",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('b-card-body', [_c('b-row', [_c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-normal"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('form.postingRequest.stayingDetails.budget_range')) + "\n                    ")]), _vm._v(" "), _vm.duration ? _c('span', {
    staticClass: "font-size-smaller light-gray"
  }, [_vm._v("(" + _vm._s(_vm.budgetTerm) + ")")]) : _vm._e(), _vm._v(" "), _c('AppInput', {
    attrs: {
      "placeholder": _vm.$t('form.postingRequest.stayingDetails.budget_placeHolder'),
      "type": "number"
    },
    model: {
      value: _vm.requestData.budgetRange,
      callback: function ($$v) {
        _vm.$set(_vm.requestData, "budgetRange", $$v);
      },
      expression: "requestData.budgetRange"
    }
  })], 1)], 1), _vm._v(" "), _c('b-row', [_c('b-col', {
    attrs: {
      "cols": "2"
    }
  }, [_c('h5', {
    staticClass: "font-size-normal"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('form.postingRequest.stayingDetails.duration')) + "\n                    ")]), _vm._v(" "), _c('CustomCounter', {
    attrs: {
      "id": "noOfBathrooms",
      "step": 1,
      "validation-rules": "required|min_value:1",
      "min": 1,
      "max": 31
    },
    model: {
      value: _vm.requestData.duration,
      callback: function ($$v) {
        _vm.$set(_vm.requestData, "duration", $$v);
      },
      expression: "requestData.duration"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "3"
    }
  }, [_c('h5', {
    staticClass: "font-size-normal"
  }, [_vm._v("Per")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.requestData.durationType,
      expression: "requestData.durationType"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.requestData, "durationType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.durationTypes, function (option) {
    return _c('option', {
      domProps: {
        "value": option
      }
    }, [_vm._v("\n                        " + _vm._s(option) + "\n                      ")]);
  }), 0)]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "6"
    }
  }, [_c('h5', {
    staticClass: "font-size-normal"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('form.postingRequest.stayingDetails.starting_date')) + "\n                    ")]), _vm._v(" "), _c('b-form-datepicker', {
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
      value: _vm.requestData.startingDate,
      callback: function ($$v) {
        _vm.$set(_vm.requestData, "startingDate", $$v);
      },
      expression: "requestData.startingDate"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('b-card', {
    staticClass: "mb-3 border-0",
    attrs: {
      "no-body": ""
    }
  }, [_c('b-card-header', {
    staticClass: "p-1",
    attrs: {
      "header-tag": "header",
      "role": "tab"
    }
  }, [_c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-2",
      modifiers: {
        "accordion-2": true
      }
    }],
    attrs: {
      "block": ""
    }
  }, [_c('h1', [_vm._v(_vm._s(_vm.$t('form.postingRequest.userTerms.heading')))]), _vm._v(" "), _c('h2', {
    staticClass: "light-gray font-size-normal"
  }, [_vm._v("\n                  This is a dummy text and will be replaced with real text\n                  later after clients approval, so please don’t read this text\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "when-opened"
  }, [_c('svg-icon', {
    staticClass: "mb-2",
    attrs: {
      "name": "arrow-down-blue",
      "height": "24",
      "width": "24"
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "when-closed"
  }, [_c('svg-icon', {
    staticClass: "mb-2",
    attrs: {
      "name": "arrow-down-dark",
      "height": "24",
      "width": "24"
    }
  })], 1)])], 1), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-2",
      "visible": "",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('b-card-body', [_c('b-row', [_c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('b-form-checkbox-group', {
    attrs: {
      "options": _vm.transformUserConditions,
      "stacked": ""
    },
    model: {
      value: _vm.requestData.selectedTerms,
      callback: function ($$v) {
        _vm.$set(_vm.requestData, "selectedTerms", $$v);
      },
      expression: "requestData.selectedTerms"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('b-card', {
    staticClass: "mb-3 border-0",
    attrs: {
      "no-body": ""
    }
  }, [_c('b-card-header', {
    staticClass: "p-1",
    attrs: {
      "header-tag": "header",
      "role": "tab"
    }
  }, [_c('b-button', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-3",
      modifiers: {
        "accordion-3": true
      }
    }],
    attrs: {
      "block": ""
    }
  }, [_c('h1', [_vm._v("\n                  " + _vm._s(_vm.$t('form.postingRequest.SelectPreferences.heading')) + "\n                ")]), _vm._v(" "), _c('h2', {
    staticClass: "light-gray font-size-normal"
  }, [_vm._v("\n                  This is a dummy text and will be replaced with real text\n                  later after clients approval, so please don’t read this text\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "when-opened"
  }, [_c('svg-icon', {
    staticClass: "mb-2",
    attrs: {
      "name": "arrow-down-blue",
      "height": "24",
      "width": "24"
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "when-closed"
  }, [_c('svg-icon', {
    staticClass: "mb-2",
    attrs: {
      "name": "arrow-down-dark",
      "height": "24",
      "width": "24"
    }
  })], 1)])], 1), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-3",
      "visible": "",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('b-card-body', [_c('b-row', {
    staticClass: "align-items-center"
  }, [_c('b-col', {
    attrs: {
      "cols": "2"
    }
  }, [_c('h5', {
    staticClass: "font-size-semi-large dark-blue"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('property.furnishing_status')) + "\n                    ")])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "10"
    }
  }, [_c('chip-selector', {
    attrs: {
      "options": _vm.transformFurnishTypes
    },
    on: {
      "update-selection": _vm.updateFurnishTypes
    }
  })], 1)], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('b-row', {
    staticClass: "align-items-center"
  }, [_c('b-col', {
    attrs: {
      "cols": "2"
    }
  }, [_c('h5', {
    staticClass: "font-size-semi-large dark-blue"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('property.property_types')) + "\n                    ")])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "10"
    }
  }, [_c('chip-selector', {
    attrs: {
      "options": _vm.transformPropertyTypes
    },
    on: {
      "update-selection": _vm.updatePropertyTypes
    }
  })], 1)], 1), _vm._v(" "), _c('hr')], 1)], 1)], 1)], 1)])], 1), _vm._ssrNode(" "), _c('b-row', {
    staticClass: "mt-3"
  }, [_c('b-col', {
    staticClass: "d-flex justify-content-end"
  }, [_c('b-button', {
    staticClass: "font-weight-bold mr-2",
    attrs: {
      "variant": "outline"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('form.cancel')) + "\n        ")]), _vm._v(" "), _c('b-button', {
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": _vm.confirmData
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('common.next')) + "\n        ")])], 1)], 1)], 2)], 2);
};
var PostingDatavue_type_template_id_dc54cff8_staticRenderFns = [];

// CONCATENATED MODULE: ./components/desktop/postingRequestForm/PostingData.vue?vue&type=template&id=dc54cff8&

// EXTERNAL MODULE: ./components/shared/form/rentSelect.vue + 4 modules
var rentSelect = __webpack_require__(359);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/desktop/PageHeader.vue?vue&type=template&id=050101df&scoped=true&
var PageHeadervue_type_template_id_050101df_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-row', {
    staticClass: "header-container mx-0 px-3 pt-3"
  }, [_c('b-col', {
    staticClass: "mt-4",
    attrs: {
      "cols": "12"
    }
  }, [_vm._t("default"), _vm._v(" "), _c('h1', {
    staticClass: "page-title text-white"
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]), _vm._v(" "), _c('h3', {
    staticClass: "page-sub-title"
  }, [_vm._v("\n      " + _vm._s(_vm.subTitle) + "\n    ")])], 2)], 1);
};
var PageHeadervue_type_template_id_050101df_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/desktop/PageHeader.vue?vue&type=template&id=050101df&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/desktop/PageHeader.vue?vue&type=script&lang=js&
/* harmony default export */ var PageHeadervue_type_script_lang_js_ = ({
  name: 'page-header',
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/desktop/PageHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var desktop_PageHeadervue_type_script_lang_js_ = (PageHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/desktop/PageHeader.vue



function PageHeader_injectStyles (context) {
  
  var style0 = __webpack_require__(859)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PageHeader_component = Object(componentNormalizer["a" /* default */])(
  desktop_PageHeadervue_type_script_lang_js_,
  PageHeadervue_type_template_id_050101df_scoped_true_render,
  PageHeadervue_type_template_id_050101df_scoped_true_staticRenderFns,
  false,
  PageHeader_injectStyles,
  "050101df",
  "31715448"
  
)

/* harmony default export */ var PageHeader = (PageHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/global/rent-heading.vue?vue&type=template&id=109ab929&scoped=true&
var rent_headingvue_type_template_id_109ab929_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "heading-container"
  }, [_vm._ssrNode("<div class=\"container\" data-v-109ab929>" + (_vm.title ? "<h1 data-v-109ab929>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h1>" : "<!---->") + " " + (_vm.subtitle ? "<p data-v-109ab929>" + _vm._ssrEscape(_vm._s(_vm.subtitle)) + "</p>" : "<!---->") + "</div>")]);
};
var rent_headingvue_type_template_id_109ab929_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/global/rent-heading.vue?vue&type=template&id=109ab929&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/rent-heading.vue?vue&type=script&lang=js&
/* harmony default export */ var rent_headingvue_type_script_lang_js_ = ({
  name: 'rent-heading',
  props: ['title', 'subtitle']
});
// CONCATENATED MODULE: ./components/global/rent-heading.vue?vue&type=script&lang=js&
 /* harmony default export */ var global_rent_headingvue_type_script_lang_js_ = (rent_headingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/global/rent-heading.vue



function rent_heading_injectStyles (context) {
  
  var style0 = __webpack_require__(861)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var rent_heading_component = Object(componentNormalizer["a" /* default */])(
  global_rent_headingvue_type_script_lang_js_,
  rent_headingvue_type_template_id_109ab929_scoped_true_render,
  rent_headingvue_type_template_id_109ab929_scoped_true_staticRenderFns,
  false,
  rent_heading_injectStyles,
  "109ab929",
  "673712cb"
  
)

/* harmony default export */ var rent_heading = (rent_heading_component.exports);
// EXTERNAL MODULE: ./mixins/calculateMoveOutData.js
var calculateMoveOutData = __webpack_require__(435);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/desktop/postingRequestForm/PostingData.vue?vue&type=script&lang=js&




/* harmony default export */ var PostingDatavue_type_script_lang_js_ = ({
  name: 'posting-data',
  components: {
    PageHeader: PageHeader,
    rentSelect: rentSelect["a" /* default */],
    RentHeading: rent_heading,
    ChipSelector: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 346)),
    CustomCounter: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 446))
  },
  mixins: [calculateMoveOutData["a" /* default */]],
  props: {
    propertiesData: {
      type: Object,
      default: () => {}
    },
    conditionsData: {
      type: Array,
      default: []
    }
  },
  computed: {
    transformUserConditions() {
      return this.conditionsData.map(condition => ({
        value: condition.id,
        text: condition[`name_${this.$i18n.locale}`]
      }));
    },
    transformFurnishTypes() {
      return this.propertiesData.furnishType && this.propertiesData.furnishType.map(furnish => ({
        value: furnish.id,
        label: furnish.text
      }));
    },
    transformPropertyTypes() {
      return this.propertiesData.propertyType && this.propertiesData.propertyType.map(property => ({
        value: property.prop_type_id,
        label: property.prop_type_name
      }));
    },
    duration() {
      return this.$dateFns.differenceInDays(new Date(this.moveOutDate), new Date(this.requestData.startingDate));
    },
    childLocationNeighborhood() {
      return this.$store.state.PropertyModule.neighborhoodLocation;
    },
    childLocationDistrict() {
      return this.$store.state.PropertyModule.districtLocation;
    },
    budgetTerm() {
      return this.requestData.durationType === 'years' ? this.$t('common.yearly') : this.requestData.durationType === 'months' ? this.$t('common.monthly') : this.$t('common.daily');
    }
  },
  data() {
    return {
      moveOutDate: null,
      requestData: {
        destination: {
          city: '',
          district: '',
          neighborhood: ''
        },
        furnishType: [],
        propertyType: [],
        duration: 1,
        startingDate: null,
        durationType: 'months',
        selectedTerms: [],
        budgetRange: ''
      },
      durationTypes: ['years', 'months', 'days'],
      dateFormatOptions: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      }
    };
  },
  watch: {
    requestData: {
      handler(newValue, oldValue) {
        const {
          durationType,
          duration,
          startingDate
        } = this.requestData;
        this.calculateMoveOutData({
          durationType,
          duration,
          startingDate
        });
      },
      immediate: true,
      deep: true
    },
    duration: {
      handler(newValue, oldValue) {
        if (!newValue) return;
        let term = newValue > 30 ? 1 : 0;
        this.$emit('getConditions', term);
      },
      immediate: true
    }
  },
  methods: {
    cityInput(cityId) {
      if (!cityId) return;
      this.$store.dispatch('PropertyModule/getChildRoot', {
        location_id: cityId,
        type: 'district'
      });
    },
    districtInput(districtId) {
      if (!districtId) return;
      this.$store.dispatch('PropertyModule/getChildRoot', {
        location_id: districtId,
        type: 'neighborhood'
      });
    },
    updatePropertyTypes(values) {
      this.requestData.propertyType = values;
    },
    updateFurnishTypes(values) {
      this.requestData.furnishType = values;
    },
    changeDate(value) {
      this.requestData.startingDate = value;
    },
    confirmData() {
      const {
        destination,
        furnishType,
        propertyType,
        duration,
        startingDate,
        durationType,
        budgetRange
      } = this.requestData;
      if (!(destination !== null && destination !== void 0 && destination.city) || !furnishType.length || !propertyType.length || !duration || !startingDate || !durationType || !budgetRange) {
        let body = this.$t('form.checkListFirst');
        this.$bvToast.toast(body, {
          title: this.$t('form.fillInput'),
          variant: 'primary',
          toaster: 'b-toaster-top-center',
          solid: true,
          autoHideDelay: 1000
        });
        return;
      }
      let furnishTypes = this.propertiesData.furnishType.reduce((accumulator, currentValue) => {
        if (furnishType.some(f => f === currentValue.id)) {
          accumulator.push(currentValue.text);
        }
        return accumulator;
      }, []);
      this.requestData = {
        ...this.requestData,
        furnishType: furnishTypes
      };
      this.$emit('confirm', this.requestData);
    }
  }
});
// CONCATENATED MODULE: ./components/desktop/postingRequestForm/PostingData.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_PostingDatavue_type_script_lang_js_ = (PostingDatavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/desktop/postingRequestForm/PostingData.vue



function PostingData_injectStyles (context) {
  
  var style0 = __webpack_require__(863)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PostingData_component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_PostingDatavue_type_script_lang_js_,
  PostingDatavue_type_template_id_dc54cff8_render,
  PostingDatavue_type_template_id_dc54cff8_staticRenderFns,
  false,
  PostingData_injectStyles,
  null,
  "6f90478d"
  
)

/* harmony default export */ var PostingData = (PostingData_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/desktop/postingRequestForm/PostingPreview.vue?vue&type=template&id=3c4cb0ca&scoped=true&
var PostingPreviewvue_type_template_id_3c4cb0ca_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('PageHeader', {
    attrs: {
      "title": _vm.$t('header.post_request_confirmation_title'),
      "subTitle": _vm.$t(`header.post_request_sub_title`)
    }
  }, [_c('svg-icon', {
    staticClass: "back",
    attrs: {
      "name": "back-white",
      "height": "24px"
    },
    on: {
      "click": _vm.goBack
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"preview-container\" data-v-3c4cb0ca>", "</div>", [_c('b-row', {
    staticClass: "mb-4"
  }, [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "destination-preview"
  }, [_c('h1', {
    staticClass: "dark-blue font-size-normal mb-0"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('form.postingRequest.preview.destination')) + " :\n            " + _vm._s(_vm.selectedLocation) + "\n          ")])])])], 1), _vm._ssrNode(" "), _c('b-row', {
    staticClass: "mb-4"
  }, [_c('b-col', {
    staticClass: "mb-3",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-large gray"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('form.postingRequest.preview.staying_details')) + "\n        ")]), _vm._v(" "), _c('h2', {
    staticClass: "light-gray font-size-normal"
  }, [_vm._v("\n          This is a dummy text and will be replaced with real text later after\n          clients approval, so please don’t read this text\n        ")])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "4"
    }
  }, [_c('div', {
    staticClass: "details-item mt-2"
  }, [_c('svg-icon', {
    attrs: {
      "name": "duration",
      "width": "24",
      "height": "24"
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "font-size-smaller light-gray mt-1"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('form.postingRequest.preview.duration')) + "\n          ")]), _vm._v(" "), _c('h3', {
    staticClass: "font-size-normal dark-blue"
  }, [_vm._v(_vm._s(_vm.duration) + " days")])], 1)]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "4"
    }
  }, [_c('div', {
    staticClass: "details-item mt-2"
  }, [_c('svg-icon', {
    attrs: {
      "name": "calendar",
      "width": "24",
      "height": "24"
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "font-size-smaller light-gray mt-1"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('form.postingRequest.preview.starting_date')) + "\n          ")]), _vm._v(" "), _vm.postingRequest.startingDate ? _c('h3', {
    staticClass: "font-size-normal dark-blue"
  }, [_vm._v("\n            " + _vm._s(_vm.$dateFns.format(new Date(_vm.postingRequest.startingDate), 'dd MMM yy')) + "\n          ")]) : _vm._e()], 1)]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "4"
    }
  }, [_c('div', {
    staticClass: "details-item mt-2"
  }, [_c('svg-icon', {
    attrs: {
      "name": "price",
      "width": "24",
      "height": "24"
    }
  }), _vm._v(" "), _c('h3', {
    staticClass: "font-size-smaller light-gray mt-1"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('form.postingRequest.preview.price_budget')) + "\n          ")]), _vm._v(" "), _c('h3', {
    staticClass: "font-size-normal dark-blue"
  }, [_vm._v("\n            " + _vm._s(_vm.postingRequest.budgetRange) + " EGP\n          ")])], 1)])], 1), _vm._ssrNode(" "), _c('b-row', {
    staticClass: "mb-4"
  }, [_c('b-col', {
    staticClass: "mb-3",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-large gray"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('form.postingRequest.preview.your_terms')) + "\n        ")]), _vm._v(" "), _c('h2', {
    staticClass: "light-gray font-size-normal"
  }, [_vm._v("\n          This is a dummy text and will be replaced with real text later after\n          clients approval, so please don’t read this text\n        ")])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, _vm._l(_vm.selectedTerms, function (term) {
    return _c('div', {
      key: term.id,
      staticClass: "details-item mt-2",
      attrs: {
        "id": term.id
      }
    }, [_c('h3', {
      staticClass: "font-size-normal dark-blue"
    }, [_vm._v(_vm._s(term.name_en))]), _vm._v(" "), _c('h4', {
      staticClass: "font-size-smaller lighter-gray"
    }, [_vm._v("\n            " + _vm._s(term.name_en) + "\n          ")])]);
  }), 0)], 1), _vm._ssrNode(" "), _c('b-row', {
    staticClass: "mb-4"
  }, [_c('b-col', {
    staticClass: "mb-3",
    attrs: {
      "cols": "12"
    }
  }, [_c('h5', {
    staticClass: "font-size-large gray"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('form.postingRequest.preview.preferences')) + "\n        ")]), _vm._v(" "), _c('h2', {
    staticClass: "light-gray font-size-normal"
  }, [_vm._v("\n          This is a dummy text and will be replaced with real text later after\n          clients approval, so please don’t read this text\n        ")])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "4"
    }
  }, [_c('div', {
    staticClass: "details-item mt-2"
  }, [_c('h3', {
    staticClass: "font-size-smaller light-gray mt-1"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('form.postingRequest.preview.furnishing_status')) + "\n          ")]), _vm._v(" "), _vm._l(_vm.postingRequest.furnishType, function (furnish, index) {
    return _c('h3', {
      key: index,
      staticClass: "font-size-normal dark-blue"
    }, [_vm._v("\n            " + _vm._s(furnish) + "\n          ")]);
  })], 2)]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "4"
    }
  }, [_c('div', {
    staticClass: "details-item mt-2"
  }, [_c('h3', {
    staticClass: "font-size-smaller light-gray mt-1"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('form.postingRequest.preview.property_types')) + "\n          ")]), _vm._v(" "), _vm._l(_vm.propertyType, function (type) {
    return _c('h3', {
      key: type.id,
      staticClass: "font-size-normal dark-blue"
    }, [_vm._v("\n            " + _vm._s(type.prop_type_name) + "\n          ")]);
  })], 2)])], 1), _vm._ssrNode(" "), _c('b-row', [_c('b-col', {
    staticClass: "d-flex justify-content-end"
  }, [_c('b-button', {
    staticClass: "mr-2 font-weight-bold",
    attrs: {
      "variant": "outline"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('goBack');
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('form.cancel')) + "\n        ")]), _vm._v(" "), _c('b-button', {
    attrs: {
      "variant": "primary"
    },
    on: {
      "click": _vm.submitData
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('form.confirm')) + "\n        ")])], 1)], 1)], 2)], 2);
};
var PostingPreviewvue_type_template_id_3c4cb0ca_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/desktop/postingRequestForm/PostingPreview.vue?vue&type=template&id=3c4cb0ca&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/desktop/postingRequestForm/PostingPreview.vue?vue&type=script&lang=js&


/* harmony default export */ var PostingPreviewvue_type_script_lang_js_ = ({
  name: 'PostingPreview',
  mixins: [calculateMoveOutData["a" /* default */]],
  components: {
    PageHeader: PageHeader
  },
  props: {
    postingRequest: {
      type: Object,
      default: () => {}
    },
    conditionsData: {
      type: Array,
      default: []
    },
    propertiesData: Object
  },
  computed: {
    selectedLocation() {
      var _this$propertiesData$;
      return (_this$propertiesData$ = this.propertiesData.rootLocations.filter(location => {
        var _this$postingRequest, _this$postingRequest$;
        return location.location_id === ((_this$postingRequest = this.postingRequest) === null || _this$postingRequest === void 0 ? void 0 : (_this$postingRequest$ = _this$postingRequest.destination) === null || _this$postingRequest$ === void 0 ? void 0 : _this$postingRequest$.city);
      })[0]) === null || _this$propertiesData$ === void 0 ? void 0 : _this$propertiesData$.location_name;
    },
    selectedTerms() {
      return this.conditionsData.filter(condition => this.postingRequest.selectedTerms.indexOf(condition.id) >= 0);
    },
    furnishStatus() {
      var _this$propertiesData, _this$propertiesData$2;
      if ((_this$propertiesData = this.propertiesData) !== null && _this$propertiesData !== void 0 && (_this$propertiesData$2 = _this$propertiesData.furnishType) !== null && _this$propertiesData$2 !== void 0 && _this$propertiesData$2.length) {
        var _this$propertiesData$3;
        return (_this$propertiesData$3 = this.propertiesData.furnishType.filter(type => type.id === this.postingRequest.furnishType)[0]) === null || _this$propertiesData$3 === void 0 ? void 0 : _this$propertiesData$3.text;
      }
    },
    propertyType() {
      var _this$propertiesData2, _this$propertiesData3;
      if ((_this$propertiesData2 = this.propertiesData) !== null && _this$propertiesData2 !== void 0 && (_this$propertiesData3 = _this$propertiesData2.propertyType) !== null && _this$propertiesData3 !== void 0 && _this$propertiesData3.length) {
        return this.propertiesData.propertyType.filter(type => this.postingRequest.propertyType.some(p => p === type.prop_type_id));
      }
    },
    duration() {
      const {
        durationType,
        duration,
        startingDate
      } = this.postingRequest;
      this.calculateMoveOutData({
        durationType,
        duration,
        startingDate
      });
      return this.$dateFns.differenceInDays(new Date(this.moveOutDate), new Date(this.postingRequest.startingDate));
    }
  },
  data() {
    return {
      moveOutDate: null
    };
  },
  methods: {
    submitData() {
      this.$emit('submit', this.moveOutDate);
    },
    goBack() {
      this.$emit('goBack');
    }
  }
});
// CONCATENATED MODULE: ./components/desktop/postingRequestForm/PostingPreview.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_PostingPreviewvue_type_script_lang_js_ = (PostingPreviewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/desktop/postingRequestForm/PostingPreview.vue



function PostingPreview_injectStyles (context) {
  
  var style0 = __webpack_require__(865)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PostingPreview_component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_PostingPreviewvue_type_script_lang_js_,
  PostingPreviewvue_type_template_id_3c4cb0ca_scoped_true_render,
  PostingPreviewvue_type_template_id_3c4cb0ca_scoped_true_staticRenderFns,
  false,
  PostingPreview_injectStyles,
  "3c4cb0ca",
  "37d07f96"
  
)

/* harmony default export */ var postingRequestForm_PostingPreview = (PostingPreview_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/desktop/postingRequestForm/FormContainer.vue?vue&type=script&lang=js&


const {
  mapActions: FormContainervue_type_script_lang_js_mapAuthActions
} = Object(external_vuex_["createNamespacedHelpers"])('AuthModule');


const {
  mapState: FormContainervue_type_script_lang_js_mapState
} = Object(external_vuex_["createNamespacedHelpers"])('UserModule');
/* harmony default export */ var desktop_postingRequestForm_FormContainervue_type_script_lang_js_ = ({
  components: {
    PostingData: PostingData,
    PostingPreview: postingRequestForm_PostingPreview
  },
  computed: {
    ...FormContainervue_type_script_lang_js_mapState(['user'])
  },
  data() {
    return {
      step: 0,
      propertiesData: {},
      userConditions: [],
      postingRequest: {}
    };
  },
  created() {
    this.getPropertiesData();
  },
  methods: {
    ...FormContainervue_type_script_lang_js_mapAuthActions(['showAuthModal']),
    nextStep() {
      this.step++;
    },
    goBack() {
      this.step = 0;
    },
    async getPropertiesData() {
      try {
        const response = await Object(properties["b" /* fetchPropertiesData */])();
        this.propertiesData = response.Data;
      } catch (error) {
        console.log(error);
      }
    },
    async getUserTerms(term = 0) {
      try {
        const response = await Object(properties["c" /* fetchUserTerms */])(term);
        this.userConditions = response.Data.conditions;
      } catch (error) {
        console.log(error);
      }
    },
    handleConfirmClick(value) {
      this.postingRequest = {
        ...value
      };
      this.$emit('changeTitle', 'post_request_confirmation_title');
      this.nextStep();
    },
    transformUserTerms() {
      return this.userConditions.map(condition => {
        if (this.postingRequest.selectedTerms.indexOf(condition.id) >= 0) {
          return {
            condition_id: condition.id
          };
        }
        return {
          condition_id: condition.id
        };
      });
    },
    async handleSubmitClick(moveOutDate) {
      const {
        startingDate,
        budgetRange,
        destination,
        propertyType,
        furnishType
      } = this.postingRequest;
      let stayingDuration = this.$dateFns.differenceInDays(new Date(moveOutDate), new Date(startingDate));
      const {
        city,
        district,
        neighborhood
      } = destination;
      let locationId = neighborhood ? neighborhood : district ? district : city;
      const payload = {
        name: null,
        type: 1,
        term: stayingDuration > 30 ? 1 : 0,
        move_in_date: startingDate,
        move_out_date: this.$dateFns.format(new Date(moveOutDate), 'yyyy-MM-dd'),
        budget: budgetRange,
        num_children: null,
        num_of_bed_rooms: null,
        num_of_bath_rooms: null,
        location_id: locationId,
        property_type_ids: propertyType,
        is_date_flexible: 1,
        notes: null,
        conditions: this.transformUserTerms(),
        furnishing_status: furnishType
      };
      if (!this.user) {
        this.$bvModal.show('auth-modal');
      }
      const response = await Object(properties["d" /* postingRequest */])(payload);
      if (response.Message === 'success') {
        let request_id = response.Data.request_id;
        this.$router.push({
          path: this.localePath('/properties/thanks'),
          query: {
            locationId: locationId,
            request_id: request_id
          }
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./components/desktop/postingRequestForm/FormContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_desktop_postingRequestForm_FormContainervue_type_script_lang_js_ = (desktop_postingRequestForm_FormContainervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/desktop/postingRequestForm/FormContainer.vue



function postingRequestForm_FormContainer_injectStyles (context) {
  
  var style0 = __webpack_require__(867)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(869)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var postingRequestForm_FormContainer_component = Object(componentNormalizer["a" /* default */])(
  components_desktop_postingRequestForm_FormContainervue_type_script_lang_js_,
  FormContainervue_type_template_id_124a467a_scoped_true_render,
  FormContainervue_type_template_id_124a467a_scoped_true_staticRenderFns,
  false,
  postingRequestForm_FormContainer_injectStyles,
  "124a467a",
  "35d90ede"
  
)

/* harmony default export */ var postingRequestForm_FormContainer = (postingRequestForm_FormContainer_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/properties/posting.vue?vue&type=script&lang=js&




/* harmony default export */ var postingvue_type_script_lang_js_ = ({
  data() {
    return {
      activeStep: 1
    };
  },
  components: {
    postingRequestForm: FormContainer,
    postingRequestFormDesktop: postingRequestForm_FormContainer,
    PageHeader: PageHeader,
    RentHeading: rent_heading
  },
  computed: {
    isRTL() {
      return this.$store.getters['CoreModule/isRTL'];
    }
  },
  methods: {
    changeActiveStep(value) {
      this.activeStep = this.activeStep + value;
    }
  }
});
// CONCATENATED MODULE: ./pages/properties/posting.vue?vue&type=script&lang=js&
 /* harmony default export */ var properties_postingvue_type_script_lang_js_ = (postingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/properties/posting.vue



function posting_injectStyles (context) {
  
  var style0 = __webpack_require__(871)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var posting_component = Object(componentNormalizer["a" /* default */])(
  properties_postingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  posting_injectStyles,
  "cd5956f8",
  "693e23bb"
  
)

/* harmony default export */ var posting = __webpack_exports__["default"] = (posting_component.exports);

/***/ })

};;
//# sourceMappingURL=posting.js.map