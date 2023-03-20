exports.ids = [22];
exports.modules = {

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(774);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("980b819a", content, true, context)
};

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(776);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("9919bd9e", content, true, context)
};

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantOfferCard_vue_vue_type_style_index_0_id_71bd1d02_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(596);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantOfferCard_vue_vue_type_style_index_0_id_71bd1d02_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantOfferCard_vue_vue_type_style_index_0_id_71bd1d02_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantOfferCard_vue_vue_type_style_index_0_id_71bd1d02_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TenantOfferCard_vue_vue_type_style_index_0_id_71bd1d02_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-71bd1d02]{color:#204ecf}.dark-blue[data-v-71bd1d02]{color:#0f256e !important}.gray[data-v-71bd1d02]{color:#262d3d}.light-gray[data-v-71bd1d02]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-71bd1d02]{color:rgba(38,45,61,.32)}.black-light[data-v-71bd1d02]{color:#111}.btn.btn-outline-secondary[data-v-71bd1d02]{color:#333}label[data-v-71bd1d02]{text-transform:capitalize}.object-fit-cover[data-v-71bd1d02]{object-fit:cover}.object-fit-contain[data-v-71bd1d02]{object-fit:contain}.font-14[data-v-71bd1d02]{font-size:14px}.font-18[data-v-71bd1d02]{font-size:18px}.spacer-5[data-v-71bd1d02]{height:5px;width:100%;display:block}.spacer-10[data-v-71bd1d02]{height:10px;width:100%;display:block}.spacer-15[data-v-71bd1d02]{height:15px;width:100%;display:block}.spacer-20[data-v-71bd1d02]{height:20px;width:100%;display:block}.spacer-25[data-v-71bd1d02]{height:25px;width:100%;display:block}.spacer-30[data-v-71bd1d02]{height:30px;width:100%;display:block}.spacer-40[data-v-71bd1d02]{height:40px;width:100%;display:block}.spacer-50[data-v-71bd1d02]{height:50px;width:100%;display:block}.spacer-65[data-v-71bd1d02]{height:65px;width:100%;display:block}.spacer-100[data-v-71bd1d02]{height:100px;width:100%;display:block}.sb-wrapper[data-v-71bd1d02]{position:relative}.sb-wrapper .sb-button[data-v-71bd1d02]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-71bd1d02]{cursor:pointer}.sb-wrapper .sb-button[data-v-71bd1d02]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-71bd1d02]:focus{outline:1px solid}.m-end-2[data-v-71bd1d02]{margin-inline-end:10px}.offer-card[data-v-71bd1d02]{background:#fff;border:1px solid #e3e5e5;border-radius:16px;padding:24px;margin:16px 0}.offer-card .card-heading[data-v-71bd1d02]{display:flex;justify-content:space-between;align-items:center;width:100%}.offer-card .card-heading .card-title[data-v-71bd1d02]{font-size:16px;font-weight:bold;color:#000;width:100%}.offer-card .card-heading .card-title img[data-v-71bd1d02]{border-radius:8px;object-fit:cover}.offer-card .card-heading .card-budget[data-v-71bd1d02]{text-align:center}.offer-card .card-heading .card-budget p[data-v-71bd1d02]{color:#0078ff;text-align:center}.offer-card .card-actions[data-v-71bd1d02]{font-weight:bold;display:flex;justify-content:space-between;align-items:center}.offer-card .card-actions .chip[data-v-71bd1d02]{height:36px;left:0;top:0;box-sizing:border-box;cursor:pointer;display:inline-block;padding:8px 12px;border-radius:100px}.offer-card .card-actions .chip .chip-label[data-v-71bd1d02]{font-weight:600;font-size:12px;line-height:20px;margin:auto;vertical-align:middle;position:relative;top:50%;transform:translateY(-50%);text-align:center;text-transform:capitalize}.offer-card .card-actions .chip.accepted[data-v-71bd1d02]{background-color:#def2e8}.offer-card .card-actions .chip.accepted .chip-label[data-v-71bd1d02]{color:#00af48}.offer-card .card-actions .chip.rejected[data-v-71bd1d02]{background-color:#fee}.offer-card .card-actions .chip.rejected .chip-label[data-v-71bd1d02]{color:#ff5252}.offer-card .card-actions .chip.pending[data-v-71bd1d02],.offer-card .card-actions .chip.negotiating[data-v-71bd1d02]{background-color:#fff9ea}.offer-card .card-actions .chip.pending .chip-label[data-v-71bd1d02],.offer-card .card-actions .chip.negotiating .chip-label[data-v-71bd1d02]{color:#ffc025}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f125c5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(597);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f125c5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f125c5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f125c5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_73f125c5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-73f125c5]{color:#204ecf}.dark-blue[data-v-73f125c5]{color:#0f256e !important}.gray[data-v-73f125c5]{color:#262d3d}.light-gray[data-v-73f125c5]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-73f125c5]{color:rgba(38,45,61,.32)}.black-light[data-v-73f125c5]{color:#111}.btn.btn-outline-secondary[data-v-73f125c5]{color:#333}label[data-v-73f125c5]{text-transform:capitalize}.object-fit-cover[data-v-73f125c5]{object-fit:cover}.object-fit-contain[data-v-73f125c5]{object-fit:contain}.font-14[data-v-73f125c5]{font-size:14px}.font-18[data-v-73f125c5]{font-size:18px}.spacer-5[data-v-73f125c5]{height:5px;width:100%;display:block}.spacer-10[data-v-73f125c5]{height:10px;width:100%;display:block}.spacer-15[data-v-73f125c5]{height:15px;width:100%;display:block}.spacer-20[data-v-73f125c5]{height:20px;width:100%;display:block}.spacer-25[data-v-73f125c5]{height:25px;width:100%;display:block}.spacer-30[data-v-73f125c5]{height:30px;width:100%;display:block}.spacer-40[data-v-73f125c5]{height:40px;width:100%;display:block}.spacer-50[data-v-73f125c5]{height:50px;width:100%;display:block}.spacer-65[data-v-73f125c5]{height:65px;width:100%;display:block}.spacer-100[data-v-73f125c5]{height:100px;width:100%;display:block}.sb-wrapper[data-v-73f125c5]{position:relative}.sb-wrapper .sb-button[data-v-73f125c5]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-73f125c5]{cursor:pointer}.sb-wrapper .sb-button[data-v-73f125c5]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-73f125c5]:focus{outline:1px solid}.m-end-2[data-v-73f125c5]{margin-inline-end:10px}.request-offers[data-v-73f125c5]{min-height:100vh;background-color:#f7f9fa}.request-offers .heading[data-v-73f125c5]{background-color:#fff;padding:32px 0;font-weight:bold}.request-offers .heading .container[data-v-73f125c5]{display:flex;justify-content:space-between}.request-offers .heading p[data-v-73f125c5]{font-size:18px;margin:0}.request-offers .heading .btn-primary[data-v-73f125c5]{background-color:#e6f2ff;color:#0078ff;border:none;font-weight:bold;border-radius:12px}.request-offers .recieved-offers[data-v-73f125c5]{padding:16px 0}.request-offers .recieved-offers .title[data-v-73f125c5]{color:#111;font-weight:bold;font-size:16px;margin:0 8px}.request-offers .recieved-offers .no-offers[data-v-73f125c5]{text-align:center;margin:64px 0}.request-offers .recieved-offers .no-offers h3[data-v-73f125c5]{text-align:center;font-weight:bold;font-size:18px;margin-top:16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/requests/_requestId/offers/index.vue?vue&type=template&id=73f125c5&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-overlay', {
    attrs: {
      "show": _vm.loading,
      "rounded": "sm",
      "opacity": 1
    }
  }, [_c('div', {
    staticClass: "request-offers"
  }, [_c('div', {
    staticClass: "heading"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', [_c('p', [_vm._v("\n              " + _vm._s(_vm.requestData.name) + "\n            ")]), _vm._v(" "), _c('span', {
    staticClass: "light-gray"
  }, [_vm._v("\n              " + _vm._s(_vm.requestData.created_at) + "\n            ")])]), _vm._v(" "), _c('b-button', {
    attrs: {
      "size": "sm",
      "variant": "primary"
    },
    on: {
      "click": () => _vm.$router.push(_vm.localePath(`/dashboard/requests/${_vm.requestData.id}`))
    }
  }, [_vm._v("\n            View details\n          ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "recieved-offers"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('offer.received_offers')) + "\n          ")]), _vm._v(" "), _vm.haveOffers ? _c('b-row', _vm._l(_vm.offers, function (offer) {
    return _c('b-col', {
      key: offer.id,
      attrs: {
        "xl": "4",
        "lg": "6",
        "cols": "12"
      }
    }, [_c('NuxtLink', {
      attrs: {
        "to": _vm.localePath(`/dashboard/requests/${_vm.$route.params.requestId}/offers/${offer.id}`)
      }
    }, [_c('TenantOfferCard', {
      attrs: {
        "item": offer
      }
    })], 1)], 1);
  }), 1) : _c('div', {
    staticClass: "no-offers"
  }, [_c('svg-icon', {
    attrs: {
      "name": "smiley-meh",
      "width": "48",
      "height": "48"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("You have not recieved any offers yet.")])], 1)], 1)])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/dashboard/requests/_requestId/offers/index.vue?vue&type=template&id=73f125c5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/TenantOfferCard.vue?vue&type=template&id=71bd1d02&scoped=true&
var TenantOfferCardvue_type_template_id_71bd1d02_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "offer-card"
  }, [_vm._ssrNode("<div class=\"card-heading\" data-v-71bd1d02>", "</div>", [_vm._ssrNode("<div class=\"card-title\" data-v-71bd1d02>", "</div>", [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "3"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.item.property.images[0],
      "width": "98px",
      "height": "80px"
    }
  })]), _vm._v(" "), _c('b-col', {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.item.name))]), _vm._v(" "), _c('div', {
    staticClass: "font-size-small font-weight-semi-bold light-gray"
  }, [_vm._v("\n            @ " + _vm._s(_vm.item.property_owner.full_name) + "\n          ")])]), _vm._v(" "), _c('b-col', {
    staticClass: "p-0",
    attrs: {
      "cols": "3"
    }
  }, [_c('div', {
    staticClass: "card-budget"
  }, [_c('p', {
    staticClass: "mb-0 font-weight-bold"
  }, [_vm._v("\n              " + _vm._s(_vm.item.budget) + " " + _vm._s(_vm.$t('common.egp')) + "\n            ")]), _vm._v(" "), _c('span', {
    staticClass: "font-size-smaller light-gray"
  }, [_vm._v("\n              " + _vm._s(_vm.item.term === 1 ? _vm.$t('common.per_month') : _vm.$t('common.per_night')) + "\n            ")])])])], 1)], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"d-flex mt-3 justify-content-start\" data-v-71bd1d02>", "</div>", [_vm._ssrNode("<div data-v-71bd1d02>", "</div>", [_c('svg-icon', {
    attrs: {
      "name": "calendar",
      "height": "24",
      "width": "24"
    }
  }), _vm._ssrNode(" <span class=\"font-size-small light-gray font-weight-bold\" data-v-71bd1d02>" + _vm._ssrEscape("\n        " + _vm._s(_vm.item.duration + _vm.$t('common.from')) + "\n        " + _vm._s(_vm.$dateFns.format(new Date(_vm.item.move_in_date), 'dd MMM yy')) + "\n      ") + "</span>")], 2)]), _vm._ssrNode(" <hr data-v-71bd1d02> "), _vm._ssrNode("<div class=\"card-actions\" data-v-71bd1d02>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass(null, `chip ${_vm.offerStatus}`) + " data-v-71bd1d02><div class=\"chip-label\" data-v-71bd1d02><span data-v-71bd1d02>" + _vm._ssrEscape(_vm._s(_vm.offerStatus)) + "</span></div></div> "), _vm._ssrNode("<div class=\"gray\" data-v-71bd1d02>", "</div>", [_vm._ssrNode(_vm._ssrEscape("\n      " + _vm._s(_vm.$t('offer.viewOfferDetails')) + "\n      ")), _c('svg-icon', {
    attrs: {
      "name": "black-arrow-right",
      "height": "24",
      "width": "24"
    }
  })], 2)], 2)], 2);
};
var TenantOfferCardvue_type_template_id_71bd1d02_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/dashboard/TenantOfferCard.vue?vue&type=template&id=71bd1d02&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/TenantOfferCard.vue?vue&type=script&lang=js&
/* harmony default export */ var TenantOfferCardvue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    offerStatus() {
      if (this.item.status_details) return this.item.status_details.status_tenant;
      return '';
    }
  }
});
// CONCATENATED MODULE: ./components/dashboard/TenantOfferCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_TenantOfferCardvue_type_script_lang_js_ = (TenantOfferCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/dashboard/TenantOfferCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(773)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_TenantOfferCardvue_type_script_lang_js_,
  TenantOfferCardvue_type_template_id_71bd1d02_scoped_true_render,
  TenantOfferCardvue_type_template_id_71bd1d02_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "71bd1d02",
  "55ab3c44"
  
)

/* harmony default export */ var TenantOfferCard = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/requests/_requestId/offers/index.vue?vue&type=script&lang=js&

/* harmony default export */ var offersvue_type_script_lang_js_ = ({
  name: 'RequestOffers',
  head() {
    return {
      title: !!this.requestData.name && `Recieved Offers in ${this.requestData.name}`
    };
  },
  components: {
    TenantOfferCard: TenantOfferCard
  },
  data() {
    return {
      requestData: {},
      offers: null,
      haveOffers: true,
      loading: false
    };
  },
  async created() {
    this.loading = true;
    this.requestData = await this.$axios.$get(`/requests/${this.$route.params.requestId}`);
    this.requestData = this.requestData.Data;
    this.offers = await this.$axios.$get(`/user/requests/${this.$route.params.requestId}/received-offers`);
    this.offers = this.offers.Data.collection;
    if (this.offers && this.offers.length === 0) this.haveOffers = false;
    this.loading = false;
  }
});
// CONCATENATED MODULE: ./pages/dashboard/requests/_requestId/offers/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _requestId_offersvue_type_script_lang_js_ = (offersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/dashboard/requests/_requestId/offers/index.vue



function offers_injectStyles (context) {
  
  var style0 = __webpack_require__(775)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var offers_component = Object(componentNormalizer["a" /* default */])(
  _requestId_offersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  offers_injectStyles,
  "73f125c5",
  "afaeac60"
  
)

/* harmony default export */ var offers = __webpack_exports__["default"] = (offers_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map