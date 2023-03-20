(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1032:function(t,e,n){var content=n(1035);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("16192d46",content,!0,{sourceMap:!1})},1034:function(t,e,n){"use strict";n(1032)},1035:function(t,e,n){var r=n(38)(!1);r.push([t.i,"\n.progress-circle-container[data-v-724294ea] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 5px;\r\n  margin: auto;\r\n  margin-top: 10px;\n}\n.progress-circle-container .percent[data-v-724294ea] {\r\n  position: relative;\n}\n.progress-circle-container svg[data-v-724294ea] {\r\n  position: relative;\r\n  width: 60px;\r\n  height: 60px;\r\n  transform: rotate(-90deg);\n}\n.progress-circle-container svg circle[data-v-724294ea] {\r\n  width: 100%;\r\n  height: 100%;\r\n  fill: none;\r\n  stroke: rgba(0, 120, 255, 0.1);\r\n  stroke-width: 5;\r\n  stroke-linecap: round;\n}\n.progress-circle-container svg circle[data-v-724294ea]:last-of-type {\r\n  stroke-dasharray:125px;\r\n  stroke-dashoffset: calc(125px - (125px * var(--percent)) / 100);\r\n  stroke: #3498db;\n}\n.progress-circle-container .number[data-v-724294ea] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\n}\n.progress-circle-container .number h3[data-v-724294ea] {\r\n  font-weight: 200;\r\n  font-size: .6rem;\r\n  color: #0078FF;\n}\n.progress-circle-container .number h3 span[data-v-724294ea] {\r\n  font-size: 2rem;\n}\n.progress-circle-container .title h2[data-v-724294ea] {\r\n  margin: 25px 0 0;\n}\n.progress-circle-container:nth-child(1) svg circle[data-v-724294ea]:last-of-type {\r\n  stroke: #0078FF;\n}\r\n",""]),t.exports=r},1036:function(t,e,n){"use strict";n(131);var r={name:"ProgressCircle",props:{currentStep:{type:Number,default:function(){return 0}},totalSteps:{type:Number,default:function(){return 1}}},computed:{dir:function(){return this.$store.getters["CoreModule/isRTL"]?"rtl":"ltr"}}},o=(n(1034),n(25)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"progress-circle-container"},[e("div",{staticClass:"percent"},[e("svg",[e("circle",{attrs:{cx:"30",cy:"30",r:"25"}}),t._v(" "),e("circle",{style:"--percent: ".concat(t.currentStep/t.totalSteps*100),attrs:{cx:"30",cy:"30",r:"25"}})]),t._v(" "),e("div",{staticClass:"number"},[e("h3",[t._v(t._s(t.currentStep)+"  "+t._s("rtl"===t.dir?"من":"of")+" "+t._s(t.totalSteps))])])])])}),[],!1,null,"724294ea",null);e.a=component.exports},1060:function(t,e,n){"use strict";var r={props:{show:Boolean,routeTo:String},computed:{toggleModel:{get:function(){return this.show},set:function(){this.$emit("closeModal")}}},methods:{removeCache:function(){localStorage.removeItem("request"),this.closeModalAndNavigate()},closeModalAndNavigate:function(){this.$emit("closeModalAndNavigate"),this.$router.push(this.routeTo)}}},o=n(25),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("b-modal",{scopedSlots:t._u([{key:"modal-header",fn:function(){return[e("b",[t._v(t._s(t.$t("common.warning")))])]},proxy:!0},{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("b-button",{staticClass:"float-right",attrs:{variant:"danger",size:"sm"},on:{click:t.removeCache}},[t._v("\n        "+t._s(t.$t("common.discard_ch"))+"\n      ")]),t._v(" "),e("b-button",{staticClass:"float-right mx-3",attrs:{variant:"success",size:"sm"},on:{click:t.closeModalAndNavigate}},[t._v("\n        "+t._s(t.$t("common.save_for_later"))+"\n      ")])],1)]},proxy:!0}]),model:{value:t.toggleModel,callback:function(e){t.toggleModel=e},expression:"toggleModel"}},[t._v("\n\n  "+t._s(t.$t("common.warning_message"))+"\n\n  ")])}),[],!1,null,null,null);e.a=component.exports},1104:function(t,e,n){"use strict";e.a={methods:{calculateMoveOutData:function(t){var e=t.durationType,n=t.duration,r=t.startingDate;"days"!==e&&"أيام"!==e||(this.moveOutDate=this.$dateFns.addDays(new Date(r),n)),"months"!==e&&"شهور"!==e||(this.moveOutDate=this.$dateFns.addMonths(new Date(r),n)),"years"!==e&&"سنين"!==e||(this.moveOutDate=this.$dateFns.addYears(new Date(r),n))}}}},1105:function(t,e,n){var content=n(1146);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("e7f90996",content,!0,{sourceMap:!1})},1145:function(t,e,n){"use strict";n(1105)},1146:function(t,e,n){var r=n(38)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]),r.push([t.i,'.primary[data-v-50d423ee]{color:#204ecf}.dark-blue[data-v-50d423ee]{color:#0f256e !important}.gray[data-v-50d423ee]{color:#262d3d}.light-gray[data-v-50d423ee]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-50d423ee]{color:rgba(38,45,61,.32)}.black-light[data-v-50d423ee]{color:#111}.btn.btn-outline-secondary[data-v-50d423ee]{color:#333}label[data-v-50d423ee]{text-transform:capitalize}.object-fit-cover[data-v-50d423ee]{object-fit:cover}.object-fit-contain[data-v-50d423ee]{object-fit:contain}.font-14[data-v-50d423ee]{font-size:14px}.font-18[data-v-50d423ee]{font-size:18px}.spacer-5[data-v-50d423ee]{height:5px;width:100%;display:block}.spacer-10[data-v-50d423ee]{height:10px;width:100%;display:block}.spacer-15[data-v-50d423ee]{height:15px;width:100%;display:block}.spacer-20[data-v-50d423ee]{height:20px;width:100%;display:block}.spacer-25[data-v-50d423ee]{height:25px;width:100%;display:block}.spacer-30[data-v-50d423ee]{height:30px;width:100%;display:block}.spacer-40[data-v-50d423ee]{height:40px;width:100%;display:block}.spacer-50[data-v-50d423ee]{height:50px;width:100%;display:block}.spacer-65[data-v-50d423ee]{height:65px;width:100%;display:block}.spacer-100[data-v-50d423ee]{height:100px;width:100%;display:block}.sb-wrapper[data-v-50d423ee]{position:relative}.sb-wrapper .sb-button[data-v-50d423ee]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-50d423ee]{cursor:pointer}.sb-wrapper .sb-button[data-v-50d423ee]::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-50d423ee]:focus{outline:1px solid}.m-end-2[data-v-50d423ee]{margin-inline-end:10px}.myParagraph[data-v-50d423ee]{font-size:11px}.makeGap[data-v-50d423ee]{gap:20px}.second-step[data-v-50d423ee]{min-height:100vh}.second-step .step-content .b-form-datepicker .form-control[for=datepicker][data-v-50d423ee]{padding-right:0 !important}.duration-type[data-v-50d423ee]{background-color:transparent;border:1px solid #111;border-radius:8px;font-weight:600;padding:7px 12px;display:flex;gap:4px}.duration-type span[data-v-50d423ee]{font-weight:600;font-size:12px;line-height:12px;color:#111;margin:auto}.duration-type .circle-container[data-v-50d423ee]{width:24px;height:24px;border-radius:50%;border:1px solid #000;display:flex;flex-direction:column;justify-content:center;text-align:center}.duration-type.primary .inner-circle[data-v-50d423ee]{width:14px;height:14px;border-radius:50%;background-color:#004ed4;margin:auto}.duration-indicator[data-v-50d423ee]{font-weight:600;font-size:16px;line-height:16px;color:#111}.inner[data-v-50d423ee]{display:flex;justify-content:space-between;overflow:scroll;padding-bottom:20px;gap:24px}.inner span[data-v-50d423ee]{width:38px;height:38px;padding:10px 12px;font-weight:700;font-size:12px;text-align:center;border-radius:50%;border:1px solid #e3e5e5;color:#48535b;cursor:pointer}.inner span.active[data-v-50d423ee]{color:#0877f1;border-color:#0877f1}.px-minus-15[data-v-50d423ee]{margin-left:-15px !important;margin-right:-15px !important}',""]),t.exports=r},1150:function(t,e,n){"use strict";n(31),n(47),n(46),n(659);var r=n(3);n(10),n(63),n(66),n(15),n(14),n(11),n(17),n(12),n(18);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={name:"StayingDetails",mixins:[{methods:{changeStep:function(t,e){window.scrollTo({left:0,top:0,behavior:"smooth"})}}},n(1104).a],components:{ChipSelector:function(){return n.e(14).then(n.bind(null,1042))},CustomCounter:function(){return n.e(2).then(n.bind(null,1113))},BarsChart:function(){return n.e(68).then(n.bind(null,1684))}},data:function(){return{days:31,months:12,years:10,moveOutDate:null,selectedTag:null,dateFormatOptions:{year:"numeric",month:"numeric",day:"numeric"},stayingDetails:{selectedDurationType:"",selectedDuration:1,startingDate:(new Date).toISOString().split("T")[0],budgetRange:"",move_out_date:""}}},computed:{selectedDurationNumber:function(){return this.stayingDetails?this[this.stayingDetails.selectedDurationType]:0},dir:function(){return this.$store.getters["CoreModule/isRTL"]?"rtl":"ltr"},duration:function(){return this.$dateFns.differenceInDays(new Date(this.moveOutDate),new Date(this.stayingDetails.startingDate))},budgetTerm:function(){return this.formating_price_type_ly()},budgetState:function(){return""===this.stayingDetails.budgetRange?null:this.stayingDetails.budgetRange>=100},startingDateState:function(){return""===this.stayingDetails.startingDate?null:!!this.stayingDetails.startingDate},selectedIntialDurationType:function(){return this.selectedDurationType=this.selectedDurationType,this.selectedDurationType="ltr"===this.dir?this.selectedDurationType:"أيام",this.selectedDurationType},date_StartingDate:function(){return this.$t("form.postingRequest.stayingDetails.starting_date")}},watch:{stayingDetails:{handler:function(t,e){var n=this.stayingDetails,r=n.selectedDurationType,o=n.selectedDuration,l=n.startingDate;this.calculateMoveOutData({durationType:r,duration:o,startingDate:l})},immediate:!0,deep:!0}},methods:{calculateMoveOutData:function(){switch(this.stayingDetails.selectedDurationType){case"dy":this.stayingDetails.move_out_date=this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate),{days:this.stayingDetails.selectedDuration})),"yyyy-MM-dd");break;case"my":this.stayingDetails.move_out_date=this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate),{months:this.stayingDetails.selectedDuration})),"yyyy-MM-dd");break;case"yy":this.stayingDetails.move_out_date=this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate),{years:this.stayingDetails.selectedDuration})),"yyyy-MM-dd");break;case"hr":this.stayingDetails.move_out_date=this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate),{hours:this.stayingDetails.selectedDuration})),"yyyy-MM-dd");break;case"wy":this.stayingDetails.move_out_date=this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate),{weeks:this.stayingDetails.selectedDuration})),"yyyy-MM-dd");break;default:this.stayingDetails.move_out_date=this.$dateFns.format(new Date(this.$dateFns.add(new Date(this.stayingDetails.startingDate),{days:1})),"yyyy-MM-dd")}},changeDate:function(t){this.stayingDetails.startingDate=t,this.calculateMoveOutData()},setDurationType:function(t){this.stayingDetails.selectedDurationType=t,this.calculateMoveOutData()},handleDurationNumberClick:function(t){this.stayingDetails.selectedDuration=t},handleNextClick:function(){var t=this.stayingDetails,e=t.budgetRange,n=t.startingDate,r=t.selectedDuration,o=t.selectedDurationType;if(e&&n&&r&&o){this.$emit("nextStep",{stayingDetails:l(l({},this.stayingDetails),{move_out_date:this.moveOutDate}),term:this.duration>30?1:0});var c=localStorage.getItem("request")?JSON.parse(localStorage.getItem("request")):null;localStorage.setItem("request",JSON.stringify(l(l({},c),{},{stayingDetails:this.stayingDetails})))}else{var body=this.$t("form.checkListFirst");this.$bvToast.toast(body,{title:this.$t("form.fillInput"),variant:"primary",toaster:"b-toaster-top-center",solid:!0,autoHideDelay:1e3})}},formating_price_type:function(t){switch(t){case"dy":return this.$t("form.postingRequest.stayingDetails.days");case"my":return this.$t("form.postingRequest.stayingDetails.months");case"yy":return this.$t("form.postingRequest.stayingDetails.years");case"hr":return this.$t("form.postingRequest.stayingDetails.hours");case"wy":return this.$t("form.postingRequest.stayingDetails.weeks");default:return!1}},formating_price_type_ly:function(){switch(this.stayingDetails.selectedDurationType){case"dy":return this.$t("common.daily");case"my":return this.$t("common.monthly");case"yy":return this.$t("common.yearly");case"hr":return this.$t("common.hourly");case"wy":return this.$t("common.weekly");default:return!1}}},mounted:function(){localStorage.getItem("request")?JSON.parse(localStorage.getItem("request")):this.$router.push(this.localePath("/requests/post/property-category"));window.scrollTo({top:0,left:0,behavior:"smooth"}),localStorage.getItem("request")||this.$router.push("/requests/post/property-category")},created:function(){var t=localStorage.getItem("request")?JSON.parse(localStorage.getItem("request")):this.$router.push(this.localePath("/requests/post/property-category"));t.propertyCategory?(this.selectedTag=t.propertyCategory,this.stayingDetails.selectedDurationType=this.selectedTag.price_type[0],t.stayingDetails&&(this.stayingDetails=t.stayingDetails)):this.$router.push(this.localePath("/requests/post/property-category"))}},d=(n(1145),n(25)),component=Object(d.a)(c,(function(){var t=this,e=this,n=e._self._c;return n("main",{staticClass:"second-step"},[n("div",{staticClass:"container--fluid"},[n("b-row",{staticClass:"flex-column"},[n("b-col",{staticClass:"step-heading",attrs:{cols:"12"}},[n("h1",{staticClass:"second-step__title font-weight-semi font-size-large text-center mb-4"},[e._v("\n          "+e._s(e.$t("form.postingRequest.stayingDetails.heading"))+"\n        ")])]),e._v(" "),e.selectedTag?n("b-col",{staticClass:"pt-2 mx-auto d-flex justify-content-center makeGap my-4",attrs:{cols:"12",lg:"6"}},e._l(e.selectedTag.price_type,(function(t,r){return n("button",{key:r,class:["duration-type","lighter-gray","font-size-normal","mb-2","mt-2","rtl"===e.dir?"mr-1":"ml-1",e.stayingDetails.selectedDurationType===t?"primary":""],attrs:{type:"button"},on:{click:function(n){return e.setDurationType(t)}}},[n("div",{staticClass:"circle-container"},[n("div",{staticClass:"inner-circle"})]),e._v(" "),n("span",[e._v(e._s(e.formating_price_type(t)))])])})),0):e._e(),e._v(" "),n("b-col",{staticClass:"my-3 step-content pt-2 mx-auto",attrs:{cols:"12",lg:"6"}},[n("div",{staticClass:"section-white px-minus-15"},[n("b-row",{staticClass:"px-2 my-2 align-items-center justify-content-between",attrs:{cols:"12"}},[n("b-col",{attrs:{cols:"6"}},[n("h1",{staticClass:"font-size-normal font-weight-bold text-dark"},[e._v("\n                "+e._s("ltr"===e.dir?"Number of ".concat(e.formating_price_type(e.stayingDetails.selectedDurationType)):"عدد ال".concat(e.formating_price_type(e.stayingDetails.selectedDurationType)))+"\n                "),n("span",{staticStyle:{color:"red"}},[e._v("*")])])]),e._v(" "),n("b-col",{staticClass:"d-flex justify-content-end",attrs:{cols:"6"}},[n("CustomCounter",{attrs:{id:"duration",step:1,"validation-rules":"required|min_value:1",min:1,max:e.selectedDurationNumber},model:{value:e.stayingDetails.selectedDuration,callback:function(t){e.$set(e.stayingDetails,"selectedDuration",t)},expression:"stayingDetails.selectedDuration"}})],1)],1),e._v(" "),n("hr"),e._v(" "),n("b-row",{staticClass:"px-2 my-2 align-items-center justify-content-between",attrs:{cols:"12"}},[n("b-col",{attrs:{cols:"5"}},[n("h1",{staticClass:"font-size-normal font-weight-bold text-dark"},[e._v("\n                "+e._s(e.date_StartingDate)+"\n                "),n("span",{staticStyle:{color:"red"}},[e._v("*")])])]),e._v(" "),n("b-col",{staticClass:"d-flex justify-content-end",attrs:{cols:"7"}},[n("b-form-datepicker",{staticClass:"pr-4",attrs:{"date-format-options":e.dateFormatOptions,id:"datepicker",placeholder:e.$t("common.date"),"today-button":"","reset-button":"","close-button":"",locale:"en",min:(new Date).toJSON().slice(0,10).replace(/-/g,"-"),"aria-describedby":"inputcheck-in-feedback",state:e.startingDateState},on:{input:e.changeDate},model:{value:e.stayingDetails.startingDate,callback:function(t){e.$set(e.stayingDetails,"startingDate",t)},expression:"stayingDetails.startingDate"}}),e._v(" "),n("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[e._v("\n                Enter a valid starting date\n              ")])],1)],1)],1)]),e._v(" "),n("b-col",{staticClass:"my-3 step-content pt-2 mx-auto",attrs:{cols:"12",lg:"6"}},[n("b-row",[n("b-col",{staticClass:"mt-4 section-white",attrs:{cols:"12"}},[n("b-row",{staticClass:"align-items-center mb-4"},[n("b-col",{attrs:{md:"12",lg:"6"}},[n("h5",{class:["font-size-normal font-weight-bold text-dark","mb-2","rtl"===e.dir?"mr-1":"ml-1"]},[e._v("\n                  "+e._s(e.$t("form.postingRequest.stayingDetails.budget_range"))+"\n                  "),n("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v(" "),e.stayingDetails.selectedDuration?n("span",{staticClass:"font-size-smaller light-gray"},[e._v("\n                    ("+e._s(e.formating_price_type_ly())+")\n                  ")]):e._e()])]),e._v(" "),n("b-col",{attrs:{md:"12",lg:"6"}},[n("b-form-input",{attrs:{placeholder:e.$t("form.postingRequest.stayingDetails.budget_placeHolder"),type:"number",state:e.budgetState},model:{value:e.stayingDetails.budgetRange,callback:function(t){e.$set(e.stayingDetails,"budgetRange",t)},expression:"stayingDetails.budgetRange"}}),e._v(" "),n("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[e._v("\n                  Budget range must be over 99 EGP\n                ")])],1)],1)],1),e._v(" "),n("b-col",{staticClass:"mt-4 section-white",attrs:{cols:"12"}},[n("b-row",{staticClass:"align-items-center mt-4"},[n("b-col",{attrs:{md:"12",lg:"6"}},[n("h5",{class:["font-size-normal font-weight-bold text-dark","mb-2","rtl"===e.dir?"mr-1":"ml-1"]},[e._v("\n                  "+e._s(e.$t("form.postingRequest.stayingDetails.average_Price"))+"\n                ")])]),e._v(" "),n("b-col",{attrs:{md:"12",lg:"6"}},["ltr"===e.dir?n("p",{staticClass:"myParagraph"},[e._v("The average rate for this area is between "),n("span",{staticClass:"font-weight-bold"},[e._v("220 LE")]),e._v(" to "),n("span",{staticClass:"font-weight-bold"},[e._v("250 LE")]),e._v(" per month or "),n("span",{staticClass:"font-weight-bold"},[e._v("30 LE")]),e._v(" to "),n("span",{staticClass:"font-weight-bold"},[e._v("35 LE")]),e._v(" per day.")]):n("p",{staticClass:"myParagraph"},[e._v("متوسط السعر فى هذه المنطقة ما بين "),n("span",{staticClass:"font-weight-bold"},[e._v("220 جنية")]),e._v(" إلى "),n("span",{staticClass:"font-weight-bold"},[e._v("250 جنية")]),e._v(" فى الشهر أو "),n("span",{staticClass:"font-weight-bold"},[e._v("30 جنية")]),e._v(" إلى "),n("span",{staticClass:"font-weight-bold"},[e._v("35 جنية")])])])],1)],1)],1),e._v(" "),e._e()],1),e._v(" "),n("b-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("b-row",{staticClass:"step-next-container mx-auto"},[n("b-col",{attrs:{cols:"5"}},[n("div",[n("b-button",{staticClass:"back-btn",attrs:{variant:"primary"},on:{click:function(){e.$router.push(t.localePath("/requests/post/destination"))}}},[n("span",[e._v(e._s(e.$t("common.back")))])])],1)]),e._v(" "),n("b-col",{attrs:{cols:"7"}},[n("div",[n("b-button",{staticClass:"next-btn",attrs:{variant:"primary",disabled:!e.budgetState||!e.startingDateState},on:{click:e.handleNextClick}},[n("span",[e._v(e._s(e.$t("common.next")))])])],1)])],1)],1)],1)],1)])}),[],!1,null,"50d423ee",null);e.a=component.exports},1270:function(t,e,n){var content=n(1592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("64a21342",content,!0,{sourceMap:!1})},1591:function(t,e,n){"use strict";n(1270)},1592:function(t,e,n){var r=n(38)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]),r.push([t.i,'.primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.back_close{background-color:#f2f2f2 !important}',""]),t.exports=r},1678:function(t,e,n){"use strict";n.r(e);n(15),n(14),n(11),n(10),n(17),n(12),n(18);var r=n(3),o=(n(35),n(72),n(80),n(1150)),l=n(1036),c=n(1060);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={transition:{name:"slide-fade",mode:"out-in"},components:{StayingDetails:o.a,ProgressCircle:l.a,WarningModal:c.a},data:function(){return{currentRequest:null,showWarningModal:!1,routeTo:"",navigate:!1}},computed:{dir:function(){return this.$store.getters["CoreModule/isRTL"]?"rtl":"ltr"},appEnv:function(){return this.$config.APP_ENV},progressHeight:function(){return window.innerWidth<=991?"3px":"5px"}},head:function(){return{title:"".concat("ltr"===this.dir?"Posting Request | Step 2":"نشر طلب | الخطوة 2"," ").concat("production"!==this.appEnv?"| Staging":""),meta:[{hid:"description",name:"description",content:"ltr"===this.dir?"Posting Request | Staying Details":"نشر طلب | تفاصيل الاقامة"}]}},methods:{goNext:function(t){localStorage.setItem("request",JSON.stringify(h(h({},JSON.parse(this.currentRequest)),{},{stayingDetails:t.stayingDetails}))),this.$router.push(this.localePath("/requests/post/terms"))},closeModalAndNavigate:function(){this.showWarningModal=!1,this.navigate=!0}},mounted:function(){this.currentRequest=localStorage.getItem("request")},beforeRouteLeave:function(t,e,n){if(!t.path.includes("/requests/post/")&&this.currentRequest){if(this.showWarningModal=!0,this.routeTo=t.path,this.navigate)return n()}else n()}},f=(n(1591),n(25)),component=Object(f.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"add-property pb-2"},[e("div",[e("div",{staticClass:"px-3 back_close d-flex justify-content-between align-items-center py-3 d-md-none"},[e("b-icon",{attrs:{"font-scale":"1.5",icon:"arrow-left"},on:{click:function(e){return t.$router.go(-1)}}}),t._v(" "),e("b-icon",{attrs:{icon:"x-lg"},on:{click:function(e){t.$router.push(t.localePath("/"))}}})],1),t._v(" "),e("div",{staticClass:"post-form-container"},[e("b-progress",{staticClass:"w-100 mt-lg-2",attrs:{value:3,max:5,height:t.progressHeight}}),t._v(" "),e("div",{staticClass:"p-3 step"},[e("StayingDetails",{on:{nextStep:t.goNext}})],1)],1)]),t._v(" "),e("WarningModal",{attrs:{show:t.showWarningModal,routeTo:t.routeTo},on:{closeModal:function(e){t.showWarningModal=!1},closeModalAndNavigate:t.closeModalAndNavigate}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);