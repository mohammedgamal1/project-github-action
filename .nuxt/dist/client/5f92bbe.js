(window.webpackJsonp=window.webpackJsonp||[]).push([[45,2,14],{1032:function(t,e,r){var content=r(1035);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("16192d46",content,!0,{sourceMap:!1})},1034:function(t,e,r){"use strict";r(1032)},1035:function(t,e,r){var n=r(38)(!1);n.push([t.i,"\n.progress-circle-container[data-v-724294ea] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 5px;\r\n  margin: auto;\r\n  margin-top: 10px;\n}\n.progress-circle-container .percent[data-v-724294ea] {\r\n  position: relative;\n}\n.progress-circle-container svg[data-v-724294ea] {\r\n  position: relative;\r\n  width: 60px;\r\n  height: 60px;\r\n  transform: rotate(-90deg);\n}\n.progress-circle-container svg circle[data-v-724294ea] {\r\n  width: 100%;\r\n  height: 100%;\r\n  fill: none;\r\n  stroke: rgba(0, 120, 255, 0.1);\r\n  stroke-width: 5;\r\n  stroke-linecap: round;\n}\n.progress-circle-container svg circle[data-v-724294ea]:last-of-type {\r\n  stroke-dasharray:125px;\r\n  stroke-dashoffset: calc(125px - (125px * var(--percent)) / 100);\r\n  stroke: #3498db;\n}\n.progress-circle-container .number[data-v-724294ea] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\n}\n.progress-circle-container .number h3[data-v-724294ea] {\r\n  font-weight: 200;\r\n  font-size: .6rem;\r\n  color: #0078FF;\n}\n.progress-circle-container .number h3 span[data-v-724294ea] {\r\n  font-size: 2rem;\n}\n.progress-circle-container .title h2[data-v-724294ea] {\r\n  margin: 25px 0 0;\n}\n.progress-circle-container:nth-child(1) svg circle[data-v-724294ea]:last-of-type {\r\n  stroke: #0078FF;\n}\r\n",""]),t.exports=n},1036:function(t,e,r){"use strict";r(131);var n={name:"ProgressCircle",props:{currentStep:{type:Number,default:function(){return 0}},totalSteps:{type:Number,default:function(){return 1}}},computed:{dir:function(){return this.$store.getters["CoreModule/isRTL"]?"rtl":"ltr"}}},o=(r(1034),r(25)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"progress-circle-container"},[e("div",{staticClass:"percent"},[e("svg",[e("circle",{attrs:{cx:"30",cy:"30",r:"25"}}),t._v(" "),e("circle",{style:"--percent: ".concat(t.currentStep/t.totalSteps*100),attrs:{cx:"30",cy:"30",r:"25"}})]),t._v(" "),e("div",{staticClass:"number"},[e("h3",[t._v(t._s(t.currentStep)+"  "+t._s("rtl"===t.dir?"من":"of")+" "+t._s(t.totalSteps))])])])])}),[],!1,null,"724294ea",null);e.a=component.exports},1038:function(t,e,r){var content=r(1047);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("dd7acc96",content,!0,{sourceMap:!1})},1042:function(t,e,r){"use strict";r.r(e);r(72),r(80),r(267);var n={name:"chipSelector",props:{options:{type:Array,required:!0},form:{type:Object,default:function(){}},fieldName:{type:String,default:""},isRadio:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},defaultValue:{type:[Object,Array],required:!1}},data:function(){return{selectedOptions:[]}},methods:{toggleOption:function(option){this.defaultValue&&(this.selectedOptions=this.defaultValue,this.defaultValue=null),this.selectedOptions.includes(option[this.$attrs.value]||option.value)?this.selectedOptions.splice(this.selectedOptions.indexOf(option[this.$attrs.value]||option.value),1):this.selectedOptions.push(option[this.$attrs.value]||option.value),this.$emit("update-selection",this.selectedOptions)}},mounted:function(){this.defaultValue&&(this.selectedOptions=this.defaultValue),console.log(this.options)}},o=(r(1046),r(25)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("main",[t.isRadio?[e("div",{staticClass:"chips-container"},[e("b-form-radio-group",t._b({model:{value:t.form[t.fieldName],callback:function(e){t.$set(t.form,t.fieldName,e)},expression:"form[fieldName]"}},"b-form-radio-group",t.$attrs,!1),t._l(t.options,(function(option,r){return e("b-form-radio",{key:r,attrs:{value:option[t.$attrs.value]}},[e("div",{staticClass:"chip d-flex align-items-center justify-content",class:option[t.$attrs.value]==t.form[t.fieldName]?"selected":""},[e("span",{staticClass:"chip-label font-size-smaller"},[t._v("\n              "+t._s(option[t.$attrs.label])+"\n            ")])])])})),1)],1)]:[t.options&&t.options.length>0?e("div",{staticClass:"chips-container"},t._l(t.options,(function(option,r){return e("div",{key:r,class:t.selectedOptions.includes(option[t.$attrs.value]||option.value)||t.selected||t.defaultValue&&t.defaultValue.includes(option[t.$attrs.value]||option.value)?"selected chip":"chip",on:{click:function(e){return t.toggleOption(option)}}},[e("div",{staticClass:"chip-label"},[e("span",[t._v(t._s(option[t.$attrs.label]||option.label))])])])})),0):t._e()]],2)}),[],!1,null,null,null);e.default=component.exports},1046:function(t,e,r){"use strict";r(1038)},1047:function(t,e,r){var n=r(38)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]),n.push([t.i,'.primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.chips-container{max-width:100%;margin:15px 0px}.chips-container .close-icon{background:#0078ff;color:#e6f2ff;width:13px;height:13px;border-radius:50%;font-size:11px;display:flex;align-items:center;justify-content:center;margin-left:9px;padding:8px}.chips-container .chip{height:36px;left:0;top:0;background:#fff;box-sizing:border-box;cursor:pointer;display:inline-block;padding:8px 12px;margin:8px 12px 8px 0px;transition:all 300ms linear;color:#48535b;border:1px solid #48535b;border-radius:100px}.chips-container .chip .chip-label{font-style:normal;font-weight:600;font-size:12px;line-height:20px;color:#48535b;margin:auto;vertical-align:middle;position:relative;top:50%;transform:translateY(-50%);text-align:center}.chips-container .chip.selected{background:rgba(0,120,255,.1);border:none}.chips-container .chip.selected .chip-label{color:#0078ff}.chips-container .custom-control-label::before{display:none !important}.chips-container .custom-control-label::after{display:none !important}.chips-container .custom-control{padding:0 !important}.chips-container .custom-control-inline{margin:0 !important}.chips-container .chip{border:1px solid #c1c2c5}.chips-container .chip .chip-label{color:#757e8d}',""]),t.exports=n},1064:function(t,e,r){var content=r(1102);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("2083eb0f",content,!0,{sourceMap:!1})},1101:function(t,e,r){"use strict";r(1064)},1102:function(t,e,r){var n=r(38)(!1);n.push([t.i,"\n.counter-input-contianer[data-v-973c7e12] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-radius: 8px;\r\n  padding: 12px;\n}\nbutton[data-v-973c7e12] {\r\n  background: none;\r\n  border: solid 2px rgb(72, 72, 255);\r\n  border-radius: 100%;\r\n  width: 27px;\r\n  height: 27px;\r\n  padding: 2px;\r\n  cursor: pointer;\n}\nbutton.counter-disabled[data-v-973c7e12] {\r\n  cursor: default;\r\n  opacity: 0.4;\n}\n.counter-value[data-v-973c7e12] {\r\n  width: auto;\r\n  min-width: 50px;\r\n  height: auto;\r\n  display: inline-block;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  border: none;\r\n  padding: 0;\r\n  -webkit-appearance: textfield;\r\n  -moz-appearance: textfield;\r\n  appearance: textfield;\r\n  background-color: #e9ecef;\n}\r\n/* Chrome, Safari, Edge, Opera */\ninput[data-v-973c7e12]::-webkit-outer-spin-button,\r\ninput[data-v-973c7e12]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\n}\r\n",""]),t.exports=n},1113:function(t,e,r){"use strict";r.r(e);r(131),r(31),r(47);var n={name:"CustomCounter",inheritAttrs:!1,props:{value:{required:!0,type:Number},min:{required:!1,type:Number,default:0},max:{required:!1,type:Number,default:5e3},validationRules:{type:String,default:""},step:{required:!1,default:1},validationName:{type:String,required:!1,default:"text"}},data:function(){return{counterValue:0}},computed:{feedbackId:function(){return"input"+this.validationName.replace(/ /g,"-")+"-feedback"}},methods:{increment:function(){parseInt(this.counterValue)<this.max&&(this.emitInputEvent(parseInt(this.counterValue)+this.step),this.updateCounterValue(parseInt(this.counterValue)+this.step),this.$emit("changee"))},decrement:function(){parseInt(this.counterValue)>this.min&&(this.emitInputEvent(parseInt(this.counterValue)-this.step),this.updateCounterValue(parseInt(this.counterValue)-this.step),this.$emit("changee"))},emitInputEvent:function(t){this.$emit("input",t)},validateNumber:function(t){return t>=this.min&&t<=this.max},getValidationState:function(t){return!t.errors[0]&&(!!t.valid||null)},onInputChange:function(){this.validateNumber(this.counterValue)?this.emitInputEvent(this.counterValue):this.counterValue>this.max?this.updateCounterValue(this.max):this.updateCounterValue(this.min)},updateCounterValue:function(t){this.counterValue=t}},mounted:function(){this.value?this.updateCounterValue(this.value):this.updateCounterValue(this.min)},watch:{value:function(t){this.updateCounterValue(t)}}},o=(r(1101),r(25)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("ValidationProvider",{attrs:{rules:t.validationRules,name:t.feedbackId},scopedSlots:t._u([{key:"default",fn:function(r){return[e("div",{staticClass:"counter-input-contianer"},[e("button",{class:{"counter-disabled":t.counterValue==t.min},attrs:{type:"button"},on:{click:t.decrement}},[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z",fill:"#004ED4"}})])]),t._v(" "),e("b-form-input",{staticClass:"counter-value",attrs:{type:"number","aria-describedby":t.feedbackId,min:t.min,max:t.max},on:{input:function(e){return t.$emit("inputt",t.counterValue)},change:t.onInputChange},model:{value:t.counterValue,callback:function(e){t.counterValue=e},expression:"counterValue"}}),t._v(" "),e("button",{class:{"counter-disabled":t.counterValue==t.max},attrs:{type:"button"},on:{click:t.increment}},[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z",fill:"#004ED4"}})])])],1),t._v(" "),e("transition",{attrs:{name:"slide"}},[e("b-form-invalid-feedback",{staticClass:"error-field",attrs:{id:t.feedbackId}},[t._v(t._s(!r.valid&&r.errors[0]))])],1)]}}])})}),[],!1,null,"973c7e12",null);e.default=component.exports},1247:function(t,e,r){var content=r(1541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("1e286f2a",content,!0,{sourceMap:!1})},1540:function(t,e,r){"use strict";r(1247)},1541:function(t,e,r){var n=r(38)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]),n.push([t.i,'.primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.form-input.area{position:relative}.form-input.area .input-field{width:120px !important}.form-input.area .metre-sign{position:absolute;top:33px;user-select:none}.form-input.area .metre-sign.en_sign{right:40px}.form-input.area .metre-sign.ar_sign{left:20px}',""]),t.exports=n},1672:function(t,e,r){"use strict";r.r(e);r(37),r(15),r(14),r(11),r(10),r(17),r(12),r(18);var n=r(3),o=(r(35),r(1042)),l=r(1113),c=r(1036);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"AddPropertyPage2",props:{propertyData:{type:Object,required:!0}},components:{ChipSelector:o.default,CustomCounter:l.default,ProgressCircle:c.a},transition:{name:"slide-fade",mode:"out-in"},data:function(){return{currentProperty:null,property:{form1:null,form2:{area:100,furnishType:null,propertyType:null,bedrooms:1,bathrooms:1,bedTypes:[{property_bed_types_id:1,count:0},{property_bed_types_id:2,count:0},{property_bed_types_id:3,count:0},{property_bed_types_id:4,count:0}]},form3:null,form4:null,form5:null,form6:null}}},head:function(){return{title:"".concat("ltr"===this.dir?"Add Property | Step 2":"إضافة عقار | الخطوة 2"," ").concat("production"!==this.appEnv?"| Staging":""),meta:[{hid:"description",name:"description",content:"ltr"===this.dir?"Add Property | Property Details":"إضافة عقار | تفاصيل العقار"}]}},methods:{updatePropertyType:function(t){this.property.form2.propertyType=t},updateFurnishType:function(t){this.property.form2.furnishType=t},goNext:function(){var t=this.property.form2,e=t.furnishType,r=t.propertyType,area=t.area;if(null!=e&&e.length&&null!=r&&r.length)if((area>1e4||area<0)&&area){window.scrollTo({top:120,left:0,behavior:"smooth",solid:!0,autoHideDelay:2e3}),alert(area);var n=this.$t("property.propertyArea_Warning");this.$bvToast.toast(n,{title:this.$t("property.propertyArea_Warning"),variant:"primary",toaster:"b-toaster-top-center",solid:!0,autoHideDelay:1e3})}else localStorage.setItem("property",JSON.stringify(h(h({},this.currentProperty),{},{form2:this.property.form2}))),this.$router.push(this.localePath("/properties/add/3"));else{window.scrollTo({top:120,left:0,behavior:"smooth"});var body=this.$t("form.checkListFirst");this.$bvToast.toast(body,{title:this.$t("form.checkListFirst"),variant:"primary",toaster:"b-toaster-top-center",solid:!0,autoHideDelay:2e3})}},goBack:function(){this.$router.push(this.localePath("/properties/add/1"))}},computed:{appEnv:function(){return this.$config.APP_ENV},dir:function(){return this.$store.getters["CoreModule/isRTL"]?"rtl":"ltr"}},mounted:function(){window.scrollTo({top:0,left:0,behavior:"smooth"}),this.currentProperty=localStorage.getItem("property")&&JSON.parse(localStorage.getItem("property")),this.currentProperty||this.$router.push(this.localePath("/properties/add/1")),this.currentProperty.form2&&(this.property=this.currentProperty)}},m=(r(1540),r(25)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"form-container"},[e("ProgressCircle",{attrs:{"current-step":2,"total-steps":7}}),t._v(" "),e("h2",{staticClass:"form-heading"},[t._v(t._s(t.$t("property.define_specs")))]),t._v(" "),e("div",{staticClass:"form-input"},[e("label",[t._v("\n        "+t._s(t.$t("property.furnishing_status"))+" "),e("sup",{staticStyle:{color:"red"}},[t._v("*")])]),t._v(" "),e("ChipSelector",{attrs:{value:"id",label:"text",options:t.propertyData.furnishType,defaultValue:t.property.form2.furnishType},on:{"update-selection":t.updateFurnishType}})],1),t._v(" "),e("div",{staticClass:"form-input"},[e("label",[t._v("\n        "+t._s(t.$t("property.property_types"))+" "),e("sup",{staticStyle:{color:"red"}},[t._v("*")])]),t._v(" "),e("ChipSelector",{attrs:{value:"prop_type_id",label:"prop_type_name",options:t.propertyData.propertyType,defaultValue:t.property.form2.propertyType},on:{"update-selection":t.updatePropertyType}})],1),t._v(" "),e("div",{staticClass:"form-input area d-flex justify-content-between align-items-center"},[e("label",[t._v("\n        "+t._s(t.$t("property.propertyArea"))+"\n      ")]),t._v(" "),e("AppInput",{attrs:{type:"number",min:0,max:1e4,"validation-rules":"required|min:0|max:10000","input-id":"area",placeholder:"ltr"===t.dir?"ex: 200m":"مثال: 200م",isRequired:!1},model:{value:t.property.form2.area,callback:function(e){t.$set(t.property.form2,"area",e)},expression:"property.form2.area"}}),t._v(" "),t.property.form2.area?e("span",{class:["metre-sign","font-size-semi-large","ltr"===t.dir?"en_sign":"ar_sign"]},[t._v(" "+t._s("ltr"===t.dir?"m":"م")+" "),e("sup",[t._v("2")])]):t._e()],1),t._v(" "),e("div",{staticClass:"form-input"},[e("label",[t._v("\n        "+t._s(t.$t("property.room_numbers"))+" "),e("sup",{staticStyle:{color:"red"}},[t._v("*")])]),t._v(" "),e("div",{staticClass:"number-counter-input"},[e("label",[t._v("\n          "+t._s(t.$t("property.bedrooms"))+"\n        ")]),t._v(" "),e("CustomCounter",{attrs:{step:1,"validation-name":t.$t("property.bedrooms"),"validation-rules":"required|min_value:1",min:1,max:10},model:{value:t.property.form2.bedrooms,callback:function(e){t.$set(t.property.form2,"bedrooms",e)},expression:"property.form2.bedrooms"}})],1),t._v(" "),e("div",{staticClass:"number-counter-input"},[e("label",{attrs:{for:"bathrooms1"}},[t._v("\n          "+t._s(t.$t("property.bathrooms"))+"\n        ")]),t._v(" "),e("CustomCounter",{attrs:{id:"bathrooms1",step:1,"validation-name":t.$t("property.bathrooms"),"validation-rules":"required|min_value:1",min:1,max:10},model:{value:t.property.form2.bathrooms,callback:function(e){t.$set(t.property.form2,"bathrooms",e)},expression:"property.form2.bathrooms"}})],1)]),t._v(" "),e("div",{staticClass:"form-input"},[e("label",[t._v("\n        "+t._s(t.$t("property.beds_availability"))+"\n      ")]),t._v(" "),t._l(t.propertyData.bedTypes,(function(r,n){return e("div",{key:n,staticClass:"number-counter-input"},[e("label",{staticClass:"mb-0"},[t._v("\n          "+t._s(r.name)+"\n        ")]),t._v(" "),e("CustomCounter",{attrs:{step:1,"validation-name":"count","validation-rules":"required|min_value:0",min:0,max:10},model:{value:t.property.form2.bedTypes[n].count,callback:function(e){t.$set(t.property.form2.bedTypes[n],"count",e)},expression:"property.form2.bedTypes[index].count"}})],1)}))],2)],1),t._v(" "),e("div",{staticClass:"page-actions"},[e("b-button",{on:{click:t.goBack}},[t._v(t._s(t.$t("common.back")))]),t._v(" "),e("b-button",{attrs:{variant:"primary"},on:{click:t.goNext}},[t._v("\n      "+t._s(t.$t("common.next"))+"\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);