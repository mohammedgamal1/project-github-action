exports.ids = [53];
exports.modules = {

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue-chartjs"
var external_vue_chartjs_ = __webpack_require__(336);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/postingRequestForm/BarsChart.vue?vue&type=script&lang=js&

/* harmony default export */ var BarsChartvue_type_script_lang_js_ = ({
  extends: external_vue_chartjs_["Bar"],
  // props: {
  //   chartData: {
  //     type: Array | Object,
  //     required: false
  //   },
  //    options: {
  //     type: Array | Object,
  //     required: false
  //   },
  // },
  data() {
    return {
      gradient: null,
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Sales',
          backgroundColor: '#1976d2',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  // vue-chart-js
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  }
});
// CONCATENATED MODULE: ./components/postingRequestForm/BarsChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var postingRequestForm_BarsChartvue_type_script_lang_js_ = (BarsChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/postingRequestForm/BarsChart.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  postingRequestForm_BarsChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "57d7afff"
  
)

/* harmony default export */ var BarsChart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=53.js.map