(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1032:function(t,e,r){var content=r(1035);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("16192d46",content,!0,{sourceMap:!1})},1034:function(t,e,r){"use strict";r(1032)},1035:function(t,e,r){var n=r(38)(!1);n.push([t.i,"\n.progress-circle-container[data-v-724294ea] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 5px;\r\n  margin: auto;\r\n  margin-top: 10px;\n}\n.progress-circle-container .percent[data-v-724294ea] {\r\n  position: relative;\n}\n.progress-circle-container svg[data-v-724294ea] {\r\n  position: relative;\r\n  width: 60px;\r\n  height: 60px;\r\n  transform: rotate(-90deg);\n}\n.progress-circle-container svg circle[data-v-724294ea] {\r\n  width: 100%;\r\n  height: 100%;\r\n  fill: none;\r\n  stroke: rgba(0, 120, 255, 0.1);\r\n  stroke-width: 5;\r\n  stroke-linecap: round;\n}\n.progress-circle-container svg circle[data-v-724294ea]:last-of-type {\r\n  stroke-dasharray:125px;\r\n  stroke-dashoffset: calc(125px - (125px * var(--percent)) / 100);\r\n  stroke: #3498db;\n}\n.progress-circle-container .number[data-v-724294ea] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\n}\n.progress-circle-container .number h3[data-v-724294ea] {\r\n  font-weight: 200;\r\n  font-size: .6rem;\r\n  color: #0078FF;\n}\n.progress-circle-container .number h3 span[data-v-724294ea] {\r\n  font-size: 2rem;\n}\n.progress-circle-container .title h2[data-v-724294ea] {\r\n  margin: 25px 0 0;\n}\n.progress-circle-container:nth-child(1) svg circle[data-v-724294ea]:last-of-type {\r\n  stroke: #0078FF;\n}\r\n",""]),t.exports=n},1036:function(t,e,r){"use strict";r(131);var n={name:"ProgressCircle",props:{currentStep:{type:Number,default:function(){return 0}},totalSteps:{type:Number,default:function(){return 1}}},computed:{dir:function(){return this.$store.getters["CoreModule/isRTL"]?"rtl":"ltr"}}},o=(r(1034),r(25)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"progress-circle-container"},[e("div",{staticClass:"percent"},[e("svg",[e("circle",{attrs:{cx:"30",cy:"30",r:"25"}}),t._v(" "),e("circle",{style:"--percent: ".concat(t.currentStep/t.totalSteps*100),attrs:{cx:"30",cy:"30",r:"25"}})]),t._v(" "),e("div",{staticClass:"number"},[e("h3",[t._v(t._s(t.currentStep)+"  "+t._s("rtl"===t.dir?"من":"of")+" "+t._s(t.totalSteps))])])])])}),[],!1,null,"724294ea",null);e.a=component.exports},1060:function(t,e,r){"use strict";var n={props:{show:Boolean,routeTo:String},computed:{toggleModel:{get:function(){return this.show},set:function(){this.$emit("closeModal")}}},methods:{removeCache:function(){localStorage.removeItem("request"),this.closeModalAndNavigate()},closeModalAndNavigate:function(){this.$emit("closeModalAndNavigate"),this.$router.push(this.routeTo)}}},o=r(25),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("b-modal",{scopedSlots:t._u([{key:"modal-header",fn:function(){return[e("b",[t._v(t._s(t.$t("common.warning")))])]},proxy:!0},{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("b-button",{staticClass:"float-right",attrs:{variant:"danger",size:"sm"},on:{click:t.removeCache}},[t._v("\n        "+t._s(t.$t("common.discard_ch"))+"\n      ")]),t._v(" "),e("b-button",{staticClass:"float-right mx-3",attrs:{variant:"success",size:"sm"},on:{click:t.closeModalAndNavigate}},[t._v("\n        "+t._s(t.$t("common.save_for_later"))+"\n      ")])],1)]},proxy:!0}]),model:{value:t.toggleModel,callback:function(e){t.toggleModel=e},expression:"toggleModel"}},[t._v("\n\n  "+t._s(t.$t("common.warning_message"))+"\n\n  ")])}),[],!1,null,null,null);e.a=component.exports},1271:function(t,e,r){var content=r(1594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("3fc7eb86",content,!0,{sourceMap:!1})},1593:function(t,e,r){"use strict";r(1271)},1594:function(t,e,r){var n=r(38)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]),n.push([t.i,'.primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.back_close{background-color:#f2f2f2 !important}.add-property{overflow:hidden}',""]),t.exports=n},1679:function(t,e,r){"use strict";r.r(e);r(15),r(14),r(11),r(10),r(17),r(12),r(18);var n=r(44),o=r(3),c=(r(99),r(35),r(72),r(80),r(1302)),l=r(1036),d=r(1060);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={transition:{name:"slide-fade",mode:"out-in"},components:{UserTerms:c.a,ProgressCircle:l.a,WarningModal:d.a},data:function(){return{currentRequest:null,propertiesData:{},userConditions:[],loading:!1,showWarningModal:!1,routeTo:"",navigate:!1}},head:function(){return{title:"".concat("ltr"===this.dir?"Posting Request | Step 3":"نشر طلب | الخطوة 3"," ").concat("production"!==this.appEnv?"| Staging":""),meta:[{hid:"description",name:"description",content:"ltr"===this.dir?"Posting Request | Terms Selection":"نشر طلب | إختيار الشروط"}]}},computed:{dir:function(){return this.$store.getters["CoreModule/isRTL"]?"rtl":"ltr"},appEnv:function(){return this.$config.APP_ENV},progressHeight:function(){return window.innerWidth<=991?"3px":"5px"}},methods:{goNext:function(t){localStorage.setItem("request",JSON.stringify(f(f({},this.currentRequest),{},{selectPreferences:t}))),this.$router.push(this.localePath("/requests/post/preview"))},closeModalAndNavigate:function(){this.showWarningModal=!1,this.navigate=!0}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.currentRequest=localStorage.getItem("request")&&JSON.parse(localStorage.getItem("request")),t.loading=!0,t.term=localStorage.getItem("request")?"days"===JSON.parse(localStorage.getItem("request")).stayingDetails.selectedDurationType?0:1:0,e.next=5,t.$axios.$get("/getPropMasterData");case 5:return r=e.sent,n=r.Data,t.propertiesData=n,e.next=10,t.$axios.$get("/conditions?term=".concat(t.term));case 10:o=e.sent,t.userConditions=o.Data.conditions,t.loading=!1;case 13:case"end":return e.stop()}}),e)})))()},beforeRouteLeave:function(t,e,r){if(!t.path.includes("/requests/post/")&&this.currentRequest){if(this.showWarningModal=!0,this.routeTo=t.path,this.navigate)return r()}else r()}},v=m,w=(r(1593),r(25)),component=Object(w.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"add-property pb-2"},[e("div",{staticClass:"px-3 back_close d-flex justify-content-between align-items-center py-3 d-md-none"},[e("b-icon",{attrs:{"font-scale":"1.5",icon:"arrow-left"},on:{click:function(e){return t.$router.go(-1)}}}),t._v(" "),e("b-icon",{attrs:{icon:"x-lg"},on:{click:function(e){t.$router.push(t.localePath("/"))}}})],1),t._v(" "),e("b-overlay",{attrs:{show:t.loading,rounded:"sm",opacity:1}},[e("div",{staticClass:"post-form-container"},[e("b-progress",{staticClass:"w-100 mt-lg-2",attrs:{value:4,max:5,height:t.progressHeight}}),t._v(" "),e("div",{staticClass:"p-3 step"},[e("UserTerms",{attrs:{conditionsData:t.userConditions,propertiesData:t.propertiesData},on:{nextStep:t.goNext}})],1)],1)]),t._v(" "),e("WarningModal",{attrs:{show:t.showWarningModal,routeTo:t.routeTo},on:{closeModal:function(e){t.showWarningModal=!1},closeModalAndNavigate:t.closeModalAndNavigate}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);