exports.ids = [20];
exports.modules = {

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(770);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("612a25e7", content, true, context)
};

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4659cf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(594);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4659cf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4659cf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4659cf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4659cf4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-a4659cf4]{color:#204ecf}.dark-blue[data-v-a4659cf4]{color:#0f256e !important}.gray[data-v-a4659cf4]{color:#262d3d}.light-gray[data-v-a4659cf4]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-a4659cf4]{color:rgba(38,45,61,.32)}.black-light[data-v-a4659cf4]{color:#111}.btn.btn-outline-secondary[data-v-a4659cf4]{color:#333}label[data-v-a4659cf4]{text-transform:capitalize}.object-fit-cover[data-v-a4659cf4]{object-fit:cover}.object-fit-contain[data-v-a4659cf4]{object-fit:contain}.font-14[data-v-a4659cf4]{font-size:14px}.font-18[data-v-a4659cf4]{font-size:18px}.spacer-5[data-v-a4659cf4]{height:5px;width:100%;display:block}.spacer-10[data-v-a4659cf4]{height:10px;width:100%;display:block}.spacer-15[data-v-a4659cf4]{height:15px;width:100%;display:block}.spacer-20[data-v-a4659cf4]{height:20px;width:100%;display:block}.spacer-25[data-v-a4659cf4]{height:25px;width:100%;display:block}.spacer-30[data-v-a4659cf4]{height:30px;width:100%;display:block}.spacer-40[data-v-a4659cf4]{height:40px;width:100%;display:block}.spacer-50[data-v-a4659cf4]{height:50px;width:100%;display:block}.spacer-65[data-v-a4659cf4]{height:65px;width:100%;display:block}.spacer-100[data-v-a4659cf4]{height:100px;width:100%;display:block}.sb-wrapper[data-v-a4659cf4]{position:relative}.sb-wrapper .sb-button[data-v-a4659cf4]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-a4659cf4]{cursor:pointer}.sb-wrapper .sb-button[data-v-a4659cf4]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-a4659cf4]:focus{outline:1px solid}.m-end-2[data-v-a4659cf4]{margin-inline-end:10px}.request-details[data-v-a4659cf4]{min-height:100vh;background-color:#f7f9fa}.request-details .section[data-v-a4659cf4]{background-color:#fff;padding:32px 0;margin-top:18px}.request-details .chip[data-v-a4659cf4]{display:inline-block;padding:8px 12px;background-color:#e6f2ff;color:#0078ff;font-weight:bold;border-radius:32px;margin:0px 12px 12px 0}.request-details .chip[data-v-a4659cf4]:last-child{margin:0}.request-details .heading[data-v-a4659cf4]{font-weight:bold}.request-details .heading .container[data-v-a4659cf4]{display:flex;justify-content:space-between}.request-details .heading p[data-v-a4659cf4]{font-size:18px;margin:0}.request-details .heading .btn-primary[data-v-a4659cf4]{background-color:#e6f2ff;color:#0078ff;border:none;font-weight:bold;border-radius:12px}.request-details .cards[data-v-a4659cf4]{display:flex;justify-content:space-around}.request-details .cards .card[data-v-a4659cf4]{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:1rem;height:160px;width:176px;border:1px solid #e3e5e5;border-radius:32px}.request-details .cards .card .price-tag[data-v-a4659cf4]{text-align:center;font-weight:bold;font-size:16px}.request-details .cards .card .price-tag p[data-v-a4659cf4]{font-weight:300;color:#48535b}.request-details .address .container[data-v-a4659cf4]{display:flex;align-items:flex-start}.request-details .address .container .svg-icon[data-v-a4659cf4]{margin:2px 16px 0 0}@media screen and (min-width: 768px){.request-details .cards[data-v-a4659cf4]{justify-content:center}.request-details .cards .card[data-v-a4659cf4]{margin:0 16px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/requests/_requestId/index.vue?vue&type=template&id=a4659cf4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "request-details"
  }, [_vm._ssrNode("<div class=\"heading section\" data-v-a4659cf4>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-a4659cf4>", "</div>", [_vm._ssrNode("<div data-v-a4659cf4><p data-v-a4659cf4>" + _vm._ssrEscape("\n          " + _vm._s(_vm.request.name) + "\n        ") + "</p> <span class=\"light-gray\" data-v-a4659cf4>" + _vm._ssrEscape("\n          " + _vm._s(_vm.request.created_at) + "\n        ") + "</span></div> "), _c('b-button', {
    attrs: {
      "size": "sm",
      "variant": "primary"
    },
    on: {
      "click": () => _vm.$router.push(_vm.localePath(`/dashboard/requests/${_vm.request.id}/offers`))
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('offer.viewRecievedOffers')) + "\n      ")])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"cards section\" data-v-a4659cf4>", "</div>", [_vm._ssrNode("<div class=\"card\" data-v-a4659cf4>", "</div>", [_c('svg-icon', {
    staticClass: "mb-2 ml-2",
    attrs: {
      "fill": "#262D3D",
      "name": "calendar",
      "height": "24",
      "width": "24"
    }
  }), _vm._ssrNode(" <div class=\"price-tag\" data-v-a4659cf4><span data-v-a4659cf4>" + _vm._ssrEscape(_vm._s(_vm.request.duration)) + "</span> " + (_vm.request.move_in_date ? "<p data-v-a4659cf4>" + _vm._ssrEscape("\n          From,\n          " + _vm._s(_vm.$dateFns.format(new Date(_vm.request.move_in_date), 'dd MMM yyyy')) + "\n        ") + "</p>" : "<!---->") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"card\" data-v-a4659cf4>", "</div>", [_c('svg-icon', {
    staticClass: "mb-2",
    attrs: {
      "fill": "#262D3D",
      "name": "dollar",
      "height": "24",
      "width": "24"
    }
  }), _vm._ssrNode(" <div class=\"price-tag\" data-v-a4659cf4><span data-v-a4659cf4>" + _vm._ssrEscape(_vm._s(_vm.request.budget)) + "</span>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('common.egp')) + "\n        ") + "<p data-v-a4659cf4>" + _vm._ssrEscape("\n          " + _vm._s(_vm.request.term === 1 ? _vm.$t('common.per_month') : _vm.$t('common.per_night')) + "\n        ") + "</p></div>")], 2)], 2), _vm._ssrNode(" "), _vm.request.locations ? _vm._ssrNode("<div class=\"address section\" data-v-a4659cf4>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-a4659cf4>", "</div>", [_vm._ssrNode("<div class=\"svg-icon\" data-v-a4659cf4>", "</div>", [_c('svg-icon', {
    attrs: {
      "fill": "#262D3D",
      "name": "MapPin",
      "height": "24",
      "width": "24"
    }
  })], 1), _vm._ssrNode(" <div class=\"text\" data-v-a4659cf4><p class=\"heading font-size-semi-large font-weight-bold mb-0\" data-v-a4659cf4>" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('form.PropertyAddress')) + "\n        ") + "</p> <p class=\"address\" data-v-a4659cf4>" + _vm._ssrList(Object.keys(_vm.request.locations), function (location, index) {
    return "<span" + _vm._ssrClass(null, index === 0 && 'font-weight-bold') + " data-v-a4659cf4>" + _vm._ssrEscape("\n            " + _vm._s(_vm.request.locations[location].en) + "\n          ") + "</span>";
  }) + "</p></div>")], 2)]) : _vm._e(), _vm._ssrNode(" <div class=\"section\" data-v-a4659cf4><div class=\"container\" data-v-a4659cf4><p class=\"heading font-size-semi-large font-weight-bold\" data-v-a4659cf4>Terms</p> " + _vm._ssrList(_vm.request.conditions, function (term) {
    return "<span class=\"chip\" data-v-a4659cf4>" + _vm._ssrEscape("\n        " + _vm._s(term.name) + "\n      ") + "</span>";
  }) + "</div></div> <div class=\"section\" data-v-a4659cf4><div class=\"container\" data-v-a4659cf4><p class=\"heading font-size-semi-large font-weight-bold\" data-v-a4659cf4>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('property.furnishing_status')) + "\n      ") + "</p> " + _vm._ssrList(_vm.request.furnishing_status, function (furnishType) {
    return "<span class=\"chip\" data-v-a4659cf4>" + _vm._ssrEscape("\n        " + _vm._s(furnishType) + "\n      ") + "</span>";
  }) + "</div></div> <div class=\"section\" data-v-a4659cf4><div class=\"container\" data-v-a4659cf4><p class=\"heading font-size-semi-large font-weight-bold\" data-v-a4659cf4>" + _vm._ssrEscape("\n        " + _vm._s(_vm.$t('property.property_types')) + "\n      ") + "</p> " + _vm._ssrList(_vm.request.property_types, function (property_type) {
    return "<span class=\"chip\" data-v-a4659cf4>" + _vm._ssrEscape("\n        " + _vm._s(property_type.name_en) + "\n      ") + "</span>";
  }) + "</div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/dashboard/requests/_requestId/index.vue?vue&type=template&id=a4659cf4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/requests/_requestId/index.vue?vue&type=script&lang=js&
/* harmony default export */ var _requestIdvue_type_script_lang_js_ = ({
  name: 'RequestDetails',
  data() {
    return {
      request: {}
    };
  },
  async created() {
    const {
      Data
    } = await this.$axios.$get(`/requests/${this.$route.params.requestId}`);
    this.request = Data;
  }
});
// CONCATENATED MODULE: ./pages/dashboard/requests/_requestId/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var requests_requestIdvue_type_script_lang_js_ = (_requestIdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/dashboard/requests/_requestId/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(769)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  requests_requestIdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a4659cf4",
  "a2a55542"
  
)

/* harmony default export */ var _requestId = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map