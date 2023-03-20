exports.ids = [0];
exports.modules = {

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(926);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("21a295dc", content, true, context)
};

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_0250a5c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(665);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_0250a5c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_0250a5c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_0250a5c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_0250a5c2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".primary[data-v-0250a5c2]{color:#204ecf}.dark-blue[data-v-0250a5c2]{color:#0f256e !important}.gray[data-v-0250a5c2]{color:#262d3d}.light-gray[data-v-0250a5c2]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-0250a5c2]{color:rgba(38,45,61,.32)}.black-light[data-v-0250a5c2]{color:#111}.btn.btn-outline-secondary[data-v-0250a5c2]{color:#333}label[data-v-0250a5c2]{text-transform:capitalize}.object-fit-cover[data-v-0250a5c2]{object-fit:cover}.object-fit-contain[data-v-0250a5c2]{object-fit:contain}.font-14[data-v-0250a5c2]{font-size:14px}.font-18[data-v-0250a5c2]{font-size:18px}.spacer-5[data-v-0250a5c2]{height:5px;width:100%;display:block}.spacer-10[data-v-0250a5c2]{height:10px;width:100%;display:block}.spacer-15[data-v-0250a5c2]{height:15px;width:100%;display:block}.spacer-20[data-v-0250a5c2]{height:20px;width:100%;display:block}.spacer-25[data-v-0250a5c2]{height:25px;width:100%;display:block}.spacer-30[data-v-0250a5c2]{height:30px;width:100%;display:block}.spacer-40[data-v-0250a5c2]{height:40px;width:100%;display:block}.spacer-50[data-v-0250a5c2]{height:50px;width:100%;display:block}.spacer-65[data-v-0250a5c2]{height:65px;width:100%;display:block}.spacer-100[data-v-0250a5c2]{height:100px;width:100%;display:block}.sb-wrapper[data-v-0250a5c2]{position:relative}.sb-wrapper .sb-button[data-v-0250a5c2]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-0250a5c2]{cursor:pointer}.sb-wrapper .sb-button[data-v-0250a5c2]::before{content:\"\";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-0250a5c2]:focus{outline:1px solid}.m-end-2[data-v-0250a5c2]{margin-inline-end:10px}.fitContentWidth[data-v-0250a5c2]{max-width:fit-content}.makeGap[data-v-0250a5c2]{gap:10px}.side-bar-container[data-v-0250a5c2]{overflow:hidden !important;height:100%}.side-bar[data-v-0250a5c2]{position:fixed;top:0;left:0;bottom:0;height:100%;width:0;background-color:#fff;transition:all .2s ease-in-out;z-index:4;opacity:0;visibility:hidden;overflow-y:scroll}[dir=rtl] .side-bar[data-v-0250a5c2]{right:0;left:inherit}.overlay[data-v-0250a5c2]{position:absolute;background-color:rgba(0,0,0,.45);width:0;height:100vh;left:0;right:0;bottom:0;top:0}.active-side-bar[data-v-0250a5c2]{width:100%;opacity:1;visibility:visible}@media(min-width: 992px){.active-side-bar[data-v-0250a5c2]{width:30%;padding-left:10%;padding-right:1%}}.active-overlay[data-v-0250a5c2]{width:100%}.close-button[data-v-0250a5c2]{width:36px;height:36px;background-color:#f7f9fa;border-radius:50%;padding:8px}ul[data-v-0250a5c2]{padding:0}ul li[data-v-0250a5c2]{padding:10px 0}ul li a[data-v-0250a5c2]{color:#676767;font-size:16px;text-transform:capitalize;width:100%}.language-icon[data-v-0250a5c2]{width:18px;height:18px}.logout-icon[data-v-0250a5c2]{cursor:pointer}.message-icon[data-v-0250a5c2]{position:absolute;right:15px;top:15px}.message-icon img[data-v-0250a5c2]{cursor:pointer}.colored-card[data-v-0250a5c2]{padding:24px;border-radius:16px;margin-bottom:15px;transition:height .5s ease-in-out}.colored-card.primary[data-v-0250a5c2]{background-color:#004ed4}.colored-card.primary .title[data-v-0250a5c2]{color:#fff}.colored-card.primary .description[data-v-0250a5c2]{color:#fff}.colored-card.secondary[data-v-0250a5c2]{background-color:#ffc025}.colored-card.secondary .title[data-v-0250a5c2]{color:#000}.colored-card.secondary .description[data-v-0250a5c2]{color:#000}.colored-card .title[data-v-0250a5c2]{font-weight:600;font-size:16px}.colored-card .description[data-v-0250a5c2]{font-weight:400;font-size:12px;line-height:16px}.colored-card .text[data-v-0250a5c2]{color:#000 !important}.colored-card .text.white-text[data-v-0250a5c2]{color:#fff !important}.links-list-card[data-v-0250a5c2]{padding:24px;border:1px solid #e3e5e5;border-radius:16px;background:#fff}.links-list-card li span[data-v-0250a5c2]{color:#48535b !important;font-weight:500;font-size:14px;line-height:14px}.links-list-card li[data-v-0250a5c2]:not(:last-child){border-bottom:1px solid #f2f4f5}.side-bar-container .side-bar .nuxt-link-exact-active[data-v-0250a5c2]{display:flex;align-items:flex-start;padding:6px;background:#204ecf;box-shadow:0px 4px 8px rgba(39,39,39,.08);border-radius:8px}.side-bar-container .side-bar .nuxt-link-exact-active span[data-v-0250a5c2]{color:#fff !important}.side-bar-container .side-bar .nuxt-link-exact-active .active-icon[data-v-0250a5c2]{display:inline-block}.side-bar-container .side-bar .nuxt-link-exact-active .inactive-icon[data-v-0250a5c2]{display:none}.side-bar-container .side-bar .active-icon[data-v-0250a5c2]{display:none}.side-bar-container .side-bar .inactive-icon[data-v-0250a5c2]{display:inline-block}.side-bar-container .side-bar .border[data-v-0250a5c2]{background-color:#262d3d;height:2px}.side-bar-container .side-bar .auth-button[data-v-0250a5c2]{display:flex;justify-content:center;align-items:center;padding:12px;position:static;height:48px;left:0px;top:0px;border-radius:8px}.side-bar-container .side-bar .auth-button.transparent[data-v-0250a5c2]{background:#fff;color:#111 !important;justify-content:space-between}.side-bar-container .side-bar .auth-button.bordered[data-v-0250a5c2]{border:1px solid #fff !important;border-radius:8px}.side-bar-container .side-bar .auth-button.bordered.afterLogin_Btn[data-v-0250a5c2]{border:1px solid #fff;border-radius:8px}.side-bar-container .side-bar .auth-button.primary[data-v-0250a5c2]{margin:16px 0;background-color:#0078ff}.side-bar-container .side-bar .auth-button.primary .text[data-v-0250a5c2]{font-weight:600;font-size:16px;line-height:16px;color:#fff}.side-bar-container .side-bar .auth-button__register[data-v-0250a5c2]{border:1px solid #204ecf;color:#fff}.side-bar-container .sidebar-first-button[data-v-0250a5c2]{margin-top:4rem !important}.side-bar-container .sidebar-button[data-v-0250a5c2]{background-color:#004ed4;padding:12px 24px;border-radius:8px}.expand-icon.flipped[data-v-0250a5c2]{transform:rotate(180deg)}.logout-button[data-v-0250a5c2]{border:1px solid #e3e5e5 !important;border-radius:8px;font-weight:600;font-size:18px;line-height:16px;color:#d62828 !important;text-align:center;padding:16px !important;cursor:pointer}.general-buttons-container[data-v-0250a5c2]{margin-bottom:20px;justify-content:space-between}.general-buttons-container .general-buttons[data-v-0250a5c2]{gap:5px}.general-buttons-container .general-buttons a[data-v-0250a5c2]{background:#204ecf;border-radius:10px;padding:6px}.general-buttons-container .general-buttons a .text[data-v-0250a5c2]{color:#fff !important}.auth-button.transparent .arrow[data-v-0250a5c2]{background:rgba(227,229,229,.38);padding:5px;border-radius:50%}.landlord .general-buttons-container .general-buttons a[data-v-0250a5c2]{background:#fff}.landlord .sidebar-header[data-v-0250a5c2]{background-color:#ffc025;margin-left:-15px;margin-right:-15px;margin-top:-50px;padding-bottom:40px;padding-left:15px;padding-right:15px}.landlord .sidebar-header .auth-button.transparent[data-v-0250a5c2]{padding:30px 20px;border:none}.landlord .sidebar-header .auth-button.transparent .arrow[data-v-0250a5c2]{padding:10px}.landlord .sidebar-header .auth-button.transparent .text[data-v-0250a5c2]{font-weight:400;font-size:16px;line-height:16px}.landlord .sidebar-header .auth-button.transparent .text .user-name[data-v-0250a5c2]{font-weight:600;font-size:16px;line-height:24px;color:#000 !important}.landlord .cards-container[data-v-0250a5c2]{display:flex;flex-direction:column-reverse}.landlord .cards-container .colored-card.secondary[data-v-0250a5c2]{border-radius:0 0 16px 16px;margin-right:-15px;margin-left:-15px;padding-right:15px;padding-left:15px}.tenant .general-buttons-container .general-buttons a[data-v-0250a5c2]{background:#fff}.tenant .sidebar-header[data-v-0250a5c2]{background-color:#004ed4;margin-left:-15px;margin-right:-15px;margin-top:-50px;padding-bottom:40px;padding-left:15px;padding-right:15px}.tenant .sidebar-header .auth-button.transparent[data-v-0250a5c2]{background:transparent !important;border:none}.tenant .sidebar-header .auth-button.transparent .arrow[data-v-0250a5c2]{padding:10px}.tenant .sidebar-header .auth-button.transparent .text[data-v-0250a5c2]{font-weight:400;font-size:16px;line-height:16px;color:#fff !important}.tenant .sidebar-header .auth-button.transparent .text .user-name[data-v-0250a5c2]{font-weight:600;font-size:16px;line-height:24px}.tenant .cards-container[data-v-0250a5c2]{display:flex;flex-direction:column}.tenant .cards-container .colored-card.primary[data-v-0250a5c2]{border-radius:0 0 16px 16px;margin-right:-15px;margin-left:-15px;padding-right:15px;padding-left:15px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/AppHeader/SideBar.vue?vue&type=template&id=0250a5c2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {
    class: _vm.user ? _vm.user.isLandlord ? 'landlord side-bar-container' : 'tenant side-bar-container' : 'side-bar-container'
  }, [_vm._ssrNode("<div" + _vm._ssrClass("side-bar", _vm.showSideBarProp ? 'active-side-bar' : '') + " data-v-0250a5c2>", "</div>", [_c('b-container', [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('ul', [_c('li', {
    staticClass: "sidebar-header pb-2"
  }, [_c('div', {
    staticClass: "d-flex general-buttons-container"
  }, [_c('div', {
    staticClass: "close-button",
    on: {
      "click": function ($event) {
        return _vm.$emit('hideSideBar');
      }
    }
  }, [_c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "25px",
      "height": "25px",
      "src": __webpack_require__(146),
      "alt": "photo"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "d-flex general-buttons"
  }, [_c('nuxt-link', {
    staticClass: "pr-2 pl-2",
    attrs: {
      "to": _vm.localePath('/')
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('img', {
    class: [_vm.dir === 'rtl' ? 'ml-1' : 'mr-1'],
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(155),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('header.home')) + "\n                      ")])])]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "d-flex align-items-center",
    attrs: {
      "to": _vm.switchLocalePath(_vm.availableLocale.code)
    }
  }, [_c('div', {
    staticClass: "d-flex"
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t(`header.lang.${_vm.availableLocale.code}`)) + "\n                      ")])])])], 1)]), _vm._v(" "), !_vm.user ? _c('a', {
    staticClass: "mx-1 auth-button auth-button__login font-bold transparent light bordered",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.showAuthModal.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('img', {
    class: ['inactive-icon', _vm.dir === 'rtl' ? 'ml-2' : 'mr-2'],
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(77),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('header.login')) + "\n                  ")])]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm.dir === 'rtl' ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(71),
      "alt": "photo"
    }
  }) : _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(32),
      "alt": "photo"
    }
  })])]) : _c('div', {
    staticClass: "d-flex justify-content-between flex-column"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between mb-2 align-items-center"
  }, [_c('div', {
    staticClass: "close-button bg-transparent",
    on: {
      "click": function ($event) {
        _vm.showSideBarProp = false;
        _vm.$emit('update:showSideBar');
      }
    }
  }, [_c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "25px",
      "height": "25px",
      "src": __webpack_require__(153),
      "alt": "photo"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "d-flex general-buttons makeGap"
  }, [_c('nuxt-link', {
    staticClass: "bg-light py-1 px-2 rounded-lg",
    attrs: {
      "to": _vm.localePath('/')
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('img', {
    class: [_vm.dir === 'rtl' ? 'ml-1' : 'mr-1'],
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(154),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text text-dark"
  }, [_vm._v("\n                          " + _vm._s(_vm.$t('header.home')) + "\n                        ")])])]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "d-flex align-items-center bg-light py-1 px-2 rounded-lg",
    attrs: {
      "to": _vm.switchLocalePath(_vm.availableLocale.code)
    }
  }, [_c('div', {
    staticClass: "text text-dark"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t(`header.lang.${_vm.availableLocale.code}`)) + "\n                      ")])])], 1)]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "auth-button auth-button__login afterLogin_Btn font-bold transparent bordered px-0",
    attrs: {
      "to": _vm.localePath('/profile')
    }
  }, [_c('div', {
    staticClass: "d-flex"
  }, [_c('div', {
    staticClass: "text mx-3"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('header.hi')) + "\n                      "), _vm._v(" "), _c('span', {
    staticClass: "user-name"
  }, [_vm._v(_vm._s(_vm.user.full_name))])])])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "cards-container"
  }, [_c('div', {
    staticClass: "colored-card primary"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("\n                  " + _vm._s(_vm.user ? _vm.$t('header.tenantDashboard') : _vm.$t('header.iamATenant')) + "\n                ")]), _vm._v(" "), _vm.user && _vm.tenantLinksExpanded ? _c('div', {
    staticClass: "links-list-card my-3"
  }, [_c('li', [_c('nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": _vm.localePath('/dashboard/requests')
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('img', {
    class: ['inactive-icon', _vm.dir === 'rtl' ? 'ml-2' : 'mr-2'],
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(145),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mx-1 text"
  }, [_vm._v("\n                          " + _vm._s(_vm.$t('header.myRequests')) + "\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm.dir === 'rtl' ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(71),
      "alt": "photo"
    }
  }) : _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(32),
      "alt": "photo"
    }
  })])])], 1), _vm._v(" "), _c('li', [_c('nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": _vm.localePath('/dashboard/favorite-properties')
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('img', {
    class: ['inactive-icon', _vm.dir === 'rtl' ? 'ml-2' : 'mr-2'],
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(144),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mx-1 text"
  }, [_vm._v("\n                          " + _vm._s(_vm.$t('header.myFavorites')) + "\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm.dir === 'rtl' ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(71),
      "alt": "photo"
    }
  }) : _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(32),
      "alt": "photo"
    }
  })])])], 1), _vm._v(" "), _c('li', [_c('nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": _vm.localePath('/dashboard/messaging')
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('img', {
    class: ['inactive-icon', _vm.dir === 'rtl' ? 'ml-2' : 'mr-2'],
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(143),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mx-1 text"
  }, [_vm._v("\n                          " + _vm._s(_vm.$t('header.myInbox')) + "\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm.dir === 'rtl' ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(71),
      "alt": "photo"
    }
  }) : _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(32),
      "alt": "photo"
    }
  })])])], 1), _vm._v(" "), _c('li', [_c('nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": _vm.localePath('/search')
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('img', {
    class: ['inactive-icon', _vm.dir === 'rtl' ? 'ml-2' : 'mr-2'],
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(141),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mx-1 text"
  }, [_vm._v("\n                          " + _vm._s(_vm.$t('header.explore')) + "\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm.dir === 'rtl' ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(71),
      "alt": "photo"
    }
  }) : _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(32),
      "alt": "photo"
    }
  })])])], 1)]) : _vm._e(), _vm._v(" "), _c('nuxt-link', {
    staticClass: "mx-1 auth-button auth-button__login font-bold primary",
    attrs: {
      "to": _vm.localePath('/requests/post/property-category')
    }
  }, [_c('div', {
    staticClass: "text white-text"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('header.post_new_request')) + "\n                  ")])]), _vm._v(" "), !_vm.tenantLinksExpanded ? _c('div', {
    staticClass: "expand-icon d-flex justify-content-center",
    on: {
      "click": function ($event) {
        _vm.tenantLinksExpanded = true;
      }
    }
  }, [_vm.user ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(147),
      "alt": "photo"
    }
  }) : _vm._e()]) : _c('div', {
    staticClass: "expand-icon d-flex justify-content-center flipped",
    on: {
      "click": function ($event) {
        _vm.tenantLinksExpanded = false;
      }
    }
  }, [_c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(147),
      "alt": "photo"
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "colored-card secondary"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("\n                  " + _vm._s(_vm.user ? _vm.$t('header.landlordDashboard') : _vm.$t('header.iamALandlord')) + "\n                ")]), _vm._v(" "), _vm.user ? _c('div', {
    staticClass: "links-list-card my-3"
  }, [_c('li', [_c('nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": _vm.localePath('/dashboard/offers?type=public')
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('img', {
    class: ['inactive-icon', _vm.dir === 'rtl' ? 'ml-2' : 'mr-2'],
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(145),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mx-1 text"
  }, [_vm._v("\n                          " + _vm._s(_vm.$t('header.myOffers')) + "\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm.dir === 'rtl' ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(71),
      "alt": "photo"
    }
  }) : _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(32),
      "alt": "photo"
    }
  })])])], 1), _vm._v(" "), _c('li', [_c('nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": _vm.localePath('/dashboard/my-properties')
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(144),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mx-1 text"
  }, [_vm._v("\n                          " + _vm._s(_vm.$t('header.my_properties')) + "\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm.dir === 'rtl' ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(71),
      "alt": "photo"
    }
  }) : _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(32),
      "alt": "photo"
    }
  })])])], 1), _vm._v(" "), _c('li', [_c('nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": _vm.localePath('/dashboard/messaging')
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('img', {
    class: ['inactive-icon', _vm.dir === 'rtl' ? 'ml-2' : 'mr-2'],
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(143),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mx-1 text"
  }, [_vm._v("\n                          " + _vm._s(_vm.$t('header.myInbox')) + "\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm.dir === 'rtl' ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(71),
      "alt": "photo"
    }
  }) : _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(32),
      "alt": "photo"
    }
  })])])], 1)]) : _vm._e(), _vm._v(" "), _c('nuxt-link', {
    staticClass: "mx-1 auth-button auth-button__login font-bold transparent bordered",
    attrs: {
      "to": _vm.localePath('/marketplace')
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('img', {
    class: ['inactive-icon', _vm.dir === 'rtl' ? 'ml-2' : 'mr-2'],
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(150),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('marketplace.title')) + "\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm.dir === 'rtl' ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(71),
      "alt": "photo"
    }
  }) : _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(32),
      "alt": "photo"
    }
  })])]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "mx-1 auth-button auth-button__login font-bold primary",
    attrs: {
      "to": _vm.localePath('/properties/add/1')
    }
  }, [_c('div', {
    staticClass: "text white-text"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('header.listMyProp')) + "\n                  ")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "links-list-card"
  }, [_c('li', [_c('nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": _vm.localePath('/about-us')
    }
  }, [_c('span', {
    staticClass: "mx-1 primary",
    staticStyle: {
      "font-weight": "normal"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('header.aboutUs')) + "\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm.dir === 'rtl' ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(71),
      "alt": "photo"
    }
  }) : _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(32),
      "alt": "photo"
    }
  })])])], 1), _vm._v(" "), _c('li', [_c('nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": _vm.localePath('/contact-us')
    }
  }, [_c('span', {
    staticClass: "mx-1 primary",
    staticStyle: {
      "font-weight": "normal"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('header.contactUs')) + "\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm.dir === 'rtl' ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(71),
      "alt": "photo"
    }
  }) : _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(32),
      "alt": "photo"
    }
  })])])], 1), _vm._v(" "), _c('li', [_c('nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": _vm.localePath('/terms-and-conditions')
    }
  }, [_c('span', {
    staticClass: "mx-1 primary",
    staticStyle: {
      "font-weight": "normal"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('header.terms_conditions')) + "\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm.dir === 'rtl' ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(71),
      "alt": "photo"
    }
  }) : _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(32),
      "alt": "photo"
    }
  })])])], 1), _vm._v(" "), _c('li', [_c('nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": _vm.localePath('/privacy-policy')
    }
  }, [_c('span', {
    staticClass: "mx-1 primary",
    staticStyle: {
      "font-weight": "normal"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('header.privacy_policy')) + "\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_vm.dir === 'rtl' ? _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(71),
      "alt": "photo"
    }
  }) : _c('img', {
    staticClass: "inactive-icon",
    attrs: {
      "width": "20px",
      "height": "20px",
      "src": __webpack_require__(32),
      "alt": "photo"
    }
  })])])], 1), _vm._v(" "), _c('li', [_c('NuxtLink', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": _vm.switchLocalePath(_vm.availableLocale.code),
      "dir": _vm.isRTL ? 'ltr' : 'rtl'
    }
  }, [_c('span', {
    staticClass: "mx-1 primary",
    staticStyle: {
      "font-weight": "normal"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t(`header.lang.${_vm.availableLocale.code}`)) + "\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "arrow"
  }, [_c('AppIcon', {
    attrs: {
      "name": "language-black",
      "width": "20px",
      "height": "20px"
    }
  })], 1)])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "social-media-icons d-flex justify-content-center my-3"
  }, [_c('img', {
    staticClass: "inactive-icon mx-1",
    attrs: {
      "width": "44px",
      "height": "44px",
      "src": __webpack_require__(149),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "inactive-icon mx-1",
    attrs: {
      "width": "44px",
      "height": "44px",
      "src": __webpack_require__(152),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "inactive-icon mx-1",
    attrs: {
      "width": "44px",
      "height": "44px",
      "src": __webpack_require__(157),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "inactive-icon mx-1",
    attrs: {
      "width": "44px",
      "height": "44px",
      "src": __webpack_require__(158),
      "alt": "photo"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "inactive-icon mx-1",
    attrs: {
      "width": "44px",
      "height": "44px",
      "src": __webpack_require__(159),
      "alt": "photo"
    }
  })]), _vm._v(" "), _vm.user ? _c('div', {
    staticClass: "logout-button text-uppercase",
    on: {
      "click": _vm.handleLogout
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('header.logout')) + "\n            ")]) : _vm._e()])])], 1)], 1)], 1), _vm._ssrNode(" <div" + _vm._ssrClass("overlay", _vm.showSideBarProp && 'active-overlay') + " data-v-0250a5c2></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/AppHeader/SideBar.vue?vue&type=template&id=0250a5c2&scoped=true&

// EXTERNAL MODULE: ./components/shared/AppHeader/HeaderNav.vue + 9 modules
var HeaderNav = __webpack_require__(15);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./helpers/images.js
var helpers_images = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/AppHeader/SideBar.vue?vue&type=script&lang=js&


const {
  mapActions: mapAuthActions
} = Object(external_vuex_["createNamespacedHelpers"])('AuthModule');
const {
  mapState
} = Object(external_vuex_["createNamespacedHelpers"])('UserModule');

const {
  mapGetters
} = Object(external_vuex_["createNamespacedHelpers"])('CoreModule');
/* harmony default export */ var SideBarvue_type_script_lang_js_ = ({
  name: 'SideBar',
  components: {
    HeaderNav: HeaderNav["a" /* default */]
  },
  props: {
    showSideBar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDisabled: false,
      displayMore: false,
      tenantLinksExpanded: false,
      showSideBarProp: JSON.parse(this.showSideBar)
    };
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isRTL']),
    dir() {
      return this.$store.getters['CoreModule/isRTL'] ? 'rtl' : 'ltr';
    },
    availableLocale() {
      return this.$i18n.locales.find(i => i.code !== this.$i18n.locale);
    },
    avatar() {
      Object(helpers_images["c" /* generateServerImageUrl */])({
        $config: this.$config,
        url: this.user && this.user.avatar
      });
    }
  },
  methods: {
    ...mapAuthActions(['showAuthModal', 'logout']),
    handleLogout() {
      this.$bvToast.toast(this.$t('form.logout_message'), {
        variant: 'success',
        toaster: 'b-toaster-top-center',
        solid: true,
        bodyClass: ['toast-body'],
        headerClass: ['toast-header'],
        noCloseButton: true
      });
      setTimeout(() => {
        this.logout();
      }, 1000);
    }
  },
  watch: {
    $route: {
      handler() {
        // this.$emit('update:showSideBar');
        this.$emit('hideSideBar');
      },
      immediate: true
    },
    showSideBarProp: {
      handler(value) {
        if (false) {}
      },
      immediate: true
    },
    user: {
      handler() {
        if (this.user && this.user.isTenant) {
          this.tenantLinksExpanded = true;
        }
      },
      immediate: true
    },
    showSideBar(value) {
      this.showSideBarProp = value;
    }
  },
  mounted() {
    this.showSideBarProp = this.showSideBar;
  }
});
// CONCATENATED MODULE: ./components/shared/AppHeader/SideBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var AppHeader_SideBarvue_type_script_lang_js_ = (SideBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/AppHeader/SideBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(925)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AppHeader_SideBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0250a5c2",
  "77667f63"
  
)

/* harmony default export */ var SideBar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=0.js.map