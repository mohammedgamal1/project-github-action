(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1051:function(t,e,o){var content=o(1072);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("56780d35",content,!0,{sourceMap:!1})},1061:function(t,e,o){var content=o(1086);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("0428f7be",content,!0,{sourceMap:!1})},1062:function(t,e,o){var content=o(1091);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("3260be82",content,!0,{sourceMap:!1})},1071:function(t,e,o){"use strict";o(1051)},1072:function(t,e,o){var r=o(38)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]),r.push([t.i,'.primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}#carousel-fade.property-image-slider .carousel-item.isHome img{height:100px !important}#carousel-fade.property-image-slider .carousel-item img{width:100%;height:220px;object-fit:cover}',""]),t.exports=r},1080:function(t,e,o){"use strict";var r={name:"PropertyImageSlider",props:{images:{type:Array,required:!1},isHome:{type:Boolean,default:!1}}},n=(o(1071),o(25)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("b-carousel",{staticClass:"property-image-slider",attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"1024","img-height":"480"}},t._l(t.images,(function(image,o){return e("b-carousel-slide",{key:o,class:t.isHome?"isHome":"",attrs:{"img-src":image}})})),1)}),[],!1,null,null,null);e.a=component.exports},1084:function(t,e,o){"use strict";o(15),o(14),o(11),o(17),o(12),o(18);var r=o(218),n=o(3),c=(o(10),o(61),o(41)),d=["move_in_date","move_out_date"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(c.a)("PropertyModule"),h=m.mapState,v=m.mapActions,y=Object(c.a)("UserModule").mapState,_={name:"PropertyBidDetails",data:function(){return{notes:"",submitingLoading:!1,showModel:!1}},mounted:function(){var t=this;this.$eventBus.$on("on-user-loggedIn",(function(){t.submit()}))},computed:f(f(f(f(f({},h({visibility:function(t){return t.confirmationModal.visibility}})),h({confirmData:function(t){return t.confirmationModal.data}})),h({serverErrors:function(t){return t.serverErrors}})),y(["user"])),{},{term:function(){return this.confirmData.form.term},longTerm:function(){return 1==this.term},shortTerm:function(){return 0==this.term}}),watch:{visibility:function(t){t?this.$refs["confirmation-modal"].show():this.$refs["confirmation-modal"].hide()}},beforeDestroy:function(){this.hideConfirmationModal()},methods:f(f({},v(["hideConfirmationModal","sendOffer","hideSendOfferModal"])),{},{onCloseModal:function(){this.hideConfirmationModal()},submit:function(){var t=this,e={};if(this.longTerm){var o=JSON.parse(JSON.stringify(this.confirmData.form)),n=(o.move_in_date,o.move_out_date,Object(r.a)(o,d));e=n}else e=JSON.parse(JSON.stringify(this.confirmData.form));""!=this.notes&&this.$set(e,"notes",this.notes),e.type=0,this.user?(this.submitingLoading=!0,this.$axios.$post("/requests",e).then((function(){t.notes="",window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"offer-sent","unit-id":e.property_id,price:e.budget,duration:e.duration})})).finally((function(){t.$bvModal.show("success-modal"),setTimeout((function(){t.showModel=!1,t.hideSendOfferModal(),t.$refs["confirmation-modal"].hide(),t.$bvModal.hide("success-modal")}),2e3),t.submitingLoading=!1}))):this.$store.dispatch("AuthModule/showAuthModal",{},{root:!0})}})},x=(o(1090),o(25)),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;return e("b-modal",{ref:"confirmation-modal",attrs:{id:"confirmation-modal"},on:{hidden:t.onCloseModal},scopedSlots:t._u([{key:"modal-header",fn:function(){return[e("h3",{staticClass:"modal-title"},[t._v("\n      "+t._s(t.confirmData.offerInfo.property_name)+"\n    ")]),t._v(" "),e("b-button",{staticClass:"close-button",attrs:{size:"sm"},on:{click:t.onCloseModal}},[e("svg-icon",{attrs:{name:"close-black"}})],1)]},proxy:!0},{key:"default",fn:function(){return[e("b-row",{staticClass:"m-0"},[e("transition",{attrs:{name:"slide"}},[t.serverErrors&&t.serverErrors.Data?e("b-alert",{attrs:{show:"",variant:"danger"}},[e("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.serverErrors.Data.message))])]):t._e()],1),t._v(" "),e("b-col",{staticClass:"offer-info",attrs:{md:"12"}},[e("div",{staticClass:"offer-info-title"},[t._v("\n          "+t._s(t.$t("common.yourOffer"))+" "+t._s(t.$t("common.price"))+"\n          "+t._s(t.longTerm?"/"+t.$t("common.month"):"/"+t.$t("common.night"))+"\n        ")]),t._v(" "),e("div",{staticClass:"offer-info-value"},[t._v("\n          "+t._s(t.confirmData.form.budget)+"\n          "+t._s(t.$t("common.egp"))+"\n          "+t._s(t.longTerm?"/"+t.$t("common.month"):"/"+t.$t("common.night"))+"\n        ")])]),t._v(" "),e("b-col",{staticClass:"offer-info",attrs:{md:"12"}},[e("div",{staticClass:"offer-info-title"},[t._v("\n          "+t._s(t.$t("common.offerDuration"))+"\n        ")]),t._v(" "),e("div",{staticClass:"offer-info-value"},[t._v("\n          "+t._s(t.confirmData.form.duration)+"\n          "+t._s(t.longTerm?t.$t("common.month"):t.$t("common.night"))+"\n        ")])]),t._v(" "),t.shortTerm?e("b-col",{staticClass:"offer-info",attrs:{md:"12"}},[e("div",{staticClass:"offer-info-title"},[t._v("\n          "+t._s(t.$t("common.dateRange"))+"\n        ")]),t._v(" "),e("div",{staticClass:"offer-info-value"},[t._v("\n          "+t._s(t._f("formatDate")(t.confirmData.form.move_in_date))+" :\n          "+t._s(t._f("formatDate")(t.confirmData.form.move_out_date))+"\n        ")])]):t._e(),t._v(" "),e("b-col",{staticClass:"offer-info",attrs:{md:"12"}},[e("div",{staticClass:"offer-info-title"},[t._v("\n          "+t._s(t.$t("common.dateRangeFlexibility"))+"\n        ")]),t._v(" "),e("div",{staticClass:"offer-info-value"},[t._v("\n          "+t._s(t.confirmData.form.is_date_flexible?t.$t("common.yes"):t.$t("common.no"))+"\n        ")])]),t._v(" "),e("b-col",{staticClass:"offer-info",attrs:{md:"12"}},[e("div",{staticClass:"offer-info-title"},[t._v("\n          "+t._s(t.$t("common.guests"))+"\n        ")]),t._v(" "),e("div",{staticClass:"offer-info-value"},[t._v("\n          "+t._s(t.confirmData.form.num_adult)+" "+t._s(t.$t("common.adult"))+" &\n          "+t._s(t.confirmData.form.num_children)+"\n          "+t._s(t.$t("common.children"))+"\n        ")])]),t._v(" "),e("b-col",{staticClass:"offer-info offer-info-total",attrs:{md:"12"}},[e("div",{staticClass:"offer-info-title"},[t._v("\n          "+t._s(t.$t("common.total_amount"))+" : ("+t._s(t.confirmData.form.duration)+"\n          "+t._s(t.longTerm?t.$t("common.month"):t.$t("common.night"))+"\n          * "+t._s(t.confirmData.form.budget)+" "+t._s(t.$t("common.egp"))+")\n        ")]),t._v(" "),e("div",{staticClass:"offer-info-value"},[t._v("\n          "+t._s(t.confirmData.totalOffer)+"\n          "+t._s(t.$t("common.egp"))+"\n        ")])])],1)]},proxy:!0},{key:"modal-footer",fn:function(){return[e("div",{staticClass:"modal-actions"},[e("b-button",{staticClass:"sendoffer btn btn-primary",attrs:{disabled:t.submitingLoading,type:"submit"},on:{click:t.submit}},[t._v("\n        "+t._s(t.$t("common.sendOffer"))+"\n      ")])],1)]},proxy:!0}]),model:{value:t.showModel,callback:function(e){t.showModel=e},expression:"showModel"}})}),[],!1,null,"42492824",null);e.a=component.exports},1085:function(t,e,o){"use strict";o(1061)},1086:function(t,e,o){var r=o(38)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]),r.push([t.i,'.primary{color:#204ecf}.dark-blue{color:#0f256e !important}.gray{color:#262d3d}.light-gray{color:rgba(38,45,61,.64)}.lighter-gray{color:rgba(38,45,61,.32)}.black-light{color:#111}.btn.btn-outline-secondary{color:#333}label{text-transform:capitalize}.object-fit-cover{object-fit:cover}.object-fit-contain{object-fit:contain}.font-14{font-size:14px}.font-18{font-size:18px}.spacer-5{height:5px;width:100%;display:block}.spacer-10{height:10px;width:100%;display:block}.spacer-15{height:15px;width:100%;display:block}.spacer-20{height:20px;width:100%;display:block}.spacer-25{height:25px;width:100%;display:block}.spacer-30{height:30px;width:100%;display:block}.spacer-40{height:40px;width:100%;display:block}.spacer-50{height:50px;width:100%;display:block}.spacer-65{height:65px;width:100%;display:block}.spacer-100{height:100px;width:100%;display:block}.sb-wrapper{position:relative}.sb-wrapper .sb-button{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button{cursor:pointer}.sb-wrapper .sb-button::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button:focus{outline:1px solid}.m-end-2{margin-inline-end:10px}.property-card{margin:0 0 16px;background-color:#fff;border:1px solid #e8e8e8;border-radius:16px}.property-card .card-images div{border-radius:16px 16px 0 0}.property-card .card-content .container .card-title{font-size:16px;font-weight:bold;margin:10px 0 8px}.property-card .card-content .container .card-title a{color:#111}.property-card .card-content .container .card-amenities{display:flex}.property-card .card-content .container .card-amenities .amenity{font-size:13px;color:rgba(38,45,61,.64)}.property-card .card-content .container .card-amenities .amenity:nth-child(2){margin:0 16px}.property-card .card-content .container .card-price{margin:16px 0}.property-card .card-content .container .card-price .price{color:#0078ff;font-weight:bold;font-size:16px}.property-card .card-content .container .card-price .price.isHome{font-size:11px}.property-card .card-content .container .card-price .font-size-small{font-size:14px}.property-card .card-content .container .card-actions{display:flex;justify-content:center;align-items:center;padding:16px 0;border-top:1px solid #e8e8e8}.property-card .card-content .container .card-actions .btn{display:flex;align-items:center;justify-content:center;width:100%;text-decoration:none;font-size:14px;color:#111;padding:8px}.property-card .card-content .container .card-actions .vertical-line{width:1px;height:36px;background-color:#e8e8e8}',""]),t.exports=r},1089:function(t,e,o){var content=o(1125);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("daab5f62",content,!0,{sourceMap:!1})},1090:function(t,e,o){"use strict";o(1062)},1091:function(t,e,o){var r=o(38)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]),r.push([t.i,'.primary[data-v-42492824]{color:#204ecf}.dark-blue[data-v-42492824]{color:#0f256e !important}.gray[data-v-42492824]{color:#262d3d}.light-gray[data-v-42492824]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-42492824]{color:rgba(38,45,61,.32)}.black-light[data-v-42492824]{color:#111}.btn.btn-outline-secondary[data-v-42492824]{color:#333}label[data-v-42492824]{text-transform:capitalize}.object-fit-cover[data-v-42492824]{object-fit:cover}.object-fit-contain[data-v-42492824]{object-fit:contain}.font-14[data-v-42492824]{font-size:14px}.font-18[data-v-42492824]{font-size:18px}.spacer-5[data-v-42492824]{height:5px;width:100%;display:block}.spacer-10[data-v-42492824]{height:10px;width:100%;display:block}.spacer-15[data-v-42492824]{height:15px;width:100%;display:block}.spacer-20[data-v-42492824]{height:20px;width:100%;display:block}.spacer-25[data-v-42492824]{height:25px;width:100%;display:block}.spacer-30[data-v-42492824]{height:30px;width:100%;display:block}.spacer-40[data-v-42492824]{height:40px;width:100%;display:block}.spacer-50[data-v-42492824]{height:50px;width:100%;display:block}.spacer-65[data-v-42492824]{height:65px;width:100%;display:block}.spacer-100[data-v-42492824]{height:100px;width:100%;display:block}.sb-wrapper[data-v-42492824]{position:relative}.sb-wrapper .sb-button[data-v-42492824]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-42492824]{cursor:pointer}.sb-wrapper .sb-button[data-v-42492824]::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-42492824]:focus{outline:1px solid}.m-end-2[data-v-42492824]{margin-inline-end:10px}[data-v-42492824]  #confirmation-modal{background:rgba(0,0,0,.2)}[data-v-42492824]  #confirmation-modal.modal{display:flex !important;height:100%}[data-v-42492824]  #confirmation-modal .modal-footer,[data-v-42492824]  #confirmation-modal .modal-header,[data-v-42492824]  #confirmation-modal .modal-body{align-items:center;border:0px !important;padding:25px;justify-content:space-between}[data-v-42492824]  #confirmation-modal .modal-header,[data-v-42492824]  #confirmation-modal .modal-body{padding-bottom:0}[data-v-42492824]  #confirmation-modal .modal-dialog{max-width:551px;margin:auto}[data-v-42492824]  #confirmation-modal .modal-title{font-size:18px;font-weight:700;margin:0px}[data-v-42492824]  #confirmation-modal .close-button{background:none;border:none;margin:0px;padding:0px;line-height:1}[data-v-42492824]  #confirmation-modal .modal-content{border-radius:0}[data-v-42492824]  #confirmation-modal .offer-info{display:flex;flex-direction:row;margin-bottom:8px;justify-content:space-between;font-size:12px;padding:0px}[data-v-42492824]  #confirmation-modal .offer-info .offer-info-title{color:#989898}[data-v-42492824]  #confirmation-modal .offer-info.offer-info-total{padding-top:13px;padding-bottom:13px;margin-top:10px;border-top:1px solid #c3c3c3;border-bottom:1px solid #c3c3c3;font-weight:bold}[data-v-42492824]  #confirmation-modal .offer-info.offer-info-total .offer-info-title{color:#333}[data-v-42492824]  #confirmation-modal .notes-for-landlord{margin:15px 0 0;padding:0px}[data-v-42492824]  #confirmation-modal .notes-for-landlord textarea{width:100%;min-width:100%;min-height:70px}[data-v-42492824]  #confirmation-modal .notes-for-landlord .modal-actions{display:flex;justify-content:flex-end;margin:0}[data-v-42492824]  #confirmation-modal .sendoffer{padding:8px 14px;font-size:14px;font-weight:400;background-color:#0080fd;border-color:#0080fd;color:#fff}[data-v-42492824]  #confirmation-modal svg{width:24px;height:24px}',""]),t.exports=r},1107:function(t,e,o){"use strict";o(35),o(46),o(15),o(14),o(11),o(10),o(17),o(12),o(18);var r=o(3),n=o(1080),c=o(41);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(c.a)("PropertyModule").mapState,m={props:{item:{type:Object,required:!0},isHome:{type:Boolean,default:!1}},components:{ImageSlider:n.a},computed:l(l({},f({termState:function(t){return t.term}})),{},{term:function(){var t=1===this.item.favourite_term?1:0,e=this.$route.query.term?this.termState:t;return e},dir:function(){return this.$store.getters["CoreModule/isRTL"]?"rtl":"ltr"}}),methods:{updateFavourite:function(t){this.$emit("updateFavouriteProperty",{property_id:t,term:this.term})},sendProperty:function(t){this.$emit("update",{id:t,term:this.term})}}},h=(o(1085),o(25)),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"property-card"},[e("NuxtLink",{attrs:{to:t.localePath("/rent/".concat(t.item.property_slug,"?term=").concat(t.term))}},[e("div",{staticClass:"card-images"},[e("ImageSlider",{attrs:{isHome:t.isHome,images:t.item.images>3?t.item.images.slice(0,3):t.item.images}})],1)]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"container"},[e("NuxtLink",{attrs:{to:t.localePath("/rent/".concat(t.item.property_slug,"?term=").concat(t.term))}},[e("div",{staticClass:"card-title"},[e("NuxtLink",{attrs:{to:t.localePath("/rent/".concat(t.item.property_slug,"?term=").concat(t.term))}},[t._v("\n            "+t._s(t._f("displayExcerpt")(t.item.property_name,40))+"\n          ")])],1),t._v(" "),e("div",{staticClass:"card-amenities"},[e("div",{staticClass:"amenity"},[e("svg-icon",{attrs:{name:"grey-bed",width:"16",height:"16",fill:"#48535b"}}),t._v(" "),e("span",[t._v(" "+t._s(t.item.no_of_bedroom)+"  "+t._s("ltr"===t.dir?"bed":"سرير")+" ")])],1),t._v(" "),e("div",{staticClass:"amenity"},[e("svg-icon",{attrs:{name:"grey-bath",width:"16",height:"16",fill:"#48535b"}}),t._v(" "),e("span",[t._v(" "+t._s(t.item.no_bathrooms)+" "+t._s("ltr"===t.dir?"bath":"حمام")+" ")])],1),t._v(" "),e("div",{class:["amenity",t.isHome?"d-none":""]},[e("svg-icon",{attrs:{name:"grey-area",width:"16",height:"16",fill:"#48535b"}}),t._v(" "),e("span",[t._v(t._s(t.item.property_area)+" "+t._s("ltr"===t.dir?"m":"م"))]),t._v(" "),e("span",{staticClass:"area-unit"},[t._v("²")])],1)]),t._v(" "),"0"!==t.item.min_daily_price?e("div",{staticClass:"card-price"},[e("span",{class:["price",t.isHome?"isHome":""]},[t._v("\n            "+t._s(" ".concat(t.item.min_daily_price," - ").concat(t.item.max_daily_price," ").concat(t.$t("common.egp")))+"\n          ")]),t._v(" "),"ltr"===t.dir?e("span",{staticClass:"light-gray font-size-small"},[t._v("/ Day")]):e("span",{staticClass:"light-gray font-size-small"},[t._v("/ نطاق يومى")])]):t._e(),t._v(" "),"0"!==t.item.min_monthly_price?e("div",{staticClass:"card-price"},[e("span",{staticClass:"price"},[t._v("\n            "+t._s(" ".concat(t.item.min_monthly_price," - ").concat(t.item.min_monthly_price," ").concat(t.$t("common.egp")))+"\n          ")]),t._v(" "),"ltr"===t.dir?e("span",{staticClass:"light-gray font-size-small"},[t._v("/ Month")]):e("span",{staticClass:"light-gray font-size-small"},[t._v("/ نطاق شهرى")])]):t._e()]),t._v(" "),t.isHome?t._e():e("div",{staticClass:"card-actions"},[e("b-button",{attrs:{variant:"link"},on:{click:function(e){return t.updateFavourite(t.item.property_id)}}},[e("svg-icon",{class:"rtl"===t.dir?"ml-2":"mr-2",attrs:{name:t.item.isFav?"Heart-filled":"Heart",width:"22px",height:"22px"}}),t._v("\n          "+t._s(t.item.isFav?"ltr"===t.dir?"Remove from favourites":"حذف من المفضلة":"ltr"===t.dir?"Add to favourites":"أضف غلى المفضلة")+"\n        ")],1),t._v(" "),e("div",{staticClass:"vertical-line"}),t._v(" "),e("b-button",{attrs:{variant:"link"},on:{click:function(e){return t.sendProperty(t.item.property_id)}}},[e("img",{class:"rtl"===t.dir?"ml-2":"mr-2",attrs:{width:"18px",height:"18px",src:o(663)}}),t._v("\n          "+t._s("ltr"===t.dir?"Add to compare":"أضف للمقارنة")+"\n        ")])],1)],1)])],1)}),[],!1,null,null,null);e.a=component.exports},1124:function(t,e,o){"use strict";o(1089)},1125:function(t,e,o){var r=o(38)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Mulish:wght@300;400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap);"]),r.push([t.i,'.primary[data-v-3d2dca2f]{color:#204ecf}.dark-blue[data-v-3d2dca2f]{color:#0f256e !important}.gray[data-v-3d2dca2f]{color:#262d3d}.light-gray[data-v-3d2dca2f]{color:rgba(38,45,61,.64)}.lighter-gray[data-v-3d2dca2f]{color:rgba(38,45,61,.32)}.black-light[data-v-3d2dca2f]{color:#111}.btn.btn-outline-secondary[data-v-3d2dca2f]{color:#333}label[data-v-3d2dca2f]{text-transform:capitalize}.object-fit-cover[data-v-3d2dca2f]{object-fit:cover}.object-fit-contain[data-v-3d2dca2f]{object-fit:contain}.font-14[data-v-3d2dca2f]{font-size:14px}.font-18[data-v-3d2dca2f]{font-size:18px}.spacer-5[data-v-3d2dca2f]{height:5px;width:100%;display:block}.spacer-10[data-v-3d2dca2f]{height:10px;width:100%;display:block}.spacer-15[data-v-3d2dca2f]{height:15px;width:100%;display:block}.spacer-20[data-v-3d2dca2f]{height:20px;width:100%;display:block}.spacer-25[data-v-3d2dca2f]{height:25px;width:100%;display:block}.spacer-30[data-v-3d2dca2f]{height:30px;width:100%;display:block}.spacer-40[data-v-3d2dca2f]{height:40px;width:100%;display:block}.spacer-50[data-v-3d2dca2f]{height:50px;width:100%;display:block}.spacer-65[data-v-3d2dca2f]{height:65px;width:100%;display:block}.spacer-100[data-v-3d2dca2f]{height:100px;width:100%;display:block}.sb-wrapper[data-v-3d2dca2f]{position:relative}.sb-wrapper .sb-button[data-v-3d2dca2f]{font:inherit;background:transparent;position:static;border:none;padding:0}.sb-wrapper .sb-button::before .sb-wrapper .sb-button[data-v-3d2dca2f]{cursor:pointer}.sb-wrapper .sb-button[data-v-3d2dca2f]::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%}.sb-wrapper .sb-button[data-v-3d2dca2f]:focus{outline:1px solid}.m-end-2[data-v-3d2dca2f]{margin-inline-end:10px}.header[data-v-3d2dca2f]{padding:64px 0 32px;background-color:#fff}.header .container[data-v-3d2dca2f]{display:flex;justify-content:space-between;align-items:flex-end}.header .container .content[data-v-3d2dca2f]{padding:16px 0 0;display:flex;justify-content:center;align-items:flex-start}.header .container .content .icon[data-v-3d2dca2f]{padding:18px;background-color:#f7f9fa;clip-path:circle()}.header .container .content .title[data-v-3d2dca2f]{margin:0 24px}.header .container .content .title h1[data-v-3d2dca2f]{font-size:24px;font-weight:bold;color:#111}.header .container .content .title .subtitle[data-v-3d2dca2f]{font-size:16px;color:#48535b;inline-size:400px}.header .container .action[data-v-3d2dca2f]{padding:0 24px}.header .container .action .btn[data-v-3d2dca2f]{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;color:#0078ff;width:400px;background-color:#e6f2ff;font-weight:bold;font-size:14px;border:none}.header .container .action .btn .text[data-v-3d2dca2f]{display:flex;align-items:center;justify-content:flex-start}.header .container .action .btn .text .number[data-v-3d2dca2f]{display:flex;justify-content:center;align-items:center;padding:8px;font-size:12px;background-color:#0078ff;color:#fff;clip-path:circle()}@media screen and (max-width: 768px){.header[data-v-3d2dca2f]{padding:24px 0}.header .container[data-v-3d2dca2f]{flex-direction:column;justify-content:center;align-items:center}.header .container .content[data-v-3d2dca2f]{flex-direction:column;align-items:center}.header .container .content .icon[data-v-3d2dca2f]{background-color:#fff;padding:8px}.header .container .content .title[data-v-3d2dca2f]{margin:0}.header .container .content .title .subtitle[data-v-3d2dca2f],.header .container .content .title h1[data-v-3d2dca2f]{inline-size:unset;text-align:center}.header .container .action[data-v-3d2dca2f]{padding:0;width:100%;margin-top:24px}.header .container .action .btn[data-v-3d2dca2f]{width:100%}}',""]),t.exports=r},1151:function(t,e,o){"use strict";var r={props:["icon"]},n=(o(1124),o(25)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"32px",height:"32px",src:o(364)("./".concat(t.icon))}})]),t._v(" "),e("div",{staticClass:"title"},[e("h1",[t._t("title")],2),t._v(" "),e("p",{staticClass:"subtitle"},[t._t("subtitle")],2)])]),t._v(" "),t._t("action")],2)])}),[],!1,null,"3d2dca2f",null);e.a=component.exports},1662:function(t,e,o){"use strict";o.r(e);o(15),o(14),o(11),o(10),o(17),o(12),o(18);var r=o(3),n=(o(35),o(1151)),c=o(1107),d=o(156),l=o(1084),f=o(41);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(f.a)("PropertyModule"),y=v.mapState,_=v.mapActions,x={components:{Header:n.a,PropertyCard:c.a,SendOfferModal:d.a,PropertyBidDetails:l.a},data:function(){return{compareArray:[]}},head:function(){return{title:"".concat("ltr"===this.dir?"Favourite Properties":"العقارات المفضلة"," ").concat("production"!==this.appEnv?"| Staging":""),meta:[{hid:"description",name:"description",content:"ltr"===this.dir?"Favourite Properties":"العقارات المفضلة"}]}},methods:h(h({handleOffer:function(t){this.showSendOfferModal({offerData:t})}},_(["removePropertyFavourite","updateMyFavouritesParams","showSendOfferModal","getCompareProperty"])),{},{removeFavourite:function(t){var e={prop_id:t.property_id,term:t.term};this.removePropertyFavourite(e)},updateFavouritesPagination:function(t){this.updateMyFavouritesParams({page:t})}}),created:function(){return this.$store.dispatch("PropertyModule/getFavourites")},computed:h(h({appEnv:function(){return this.$config.APP_ENV}},y(["myFavourites","compareProperty"])),{},{dir:function(){return this.$store.getters["CoreModule/isRTL"]?"rtl":"ltr"}}),watch:{compareArray:function(){this.getCompareProperty(this.compareArray)}}},w=o(25),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;return e("div",[e("Header",{staticClass:"mb-2",attrs:{icon:"Heart.svg"}},[e("template",{slot:"title"},[t._v(t._s(t.$t("header.myFavorites")))]),t._v(" "),e("template",{slot:"subtitle"},[t._v(" "+t._s("ltr"===t.dir?"Your favorite properties":"عقاراتك المفضلة")+" ")])],2),t._v(" "),e("b-overlay",{attrs:{show:t.myFavourites.loading,rounded:"sm",opacity:1}},[e("b-container",[e("div",{staticClass:"spacer-30"}),t._v(" "),0!=t.myFavourites.data.length||t.myFavourites.loading?t._e():e("div",[e("p",{staticClass:"text-center mt-2"},[t._v(t._s(t.$t("common.noFavorites")))])]),t._v(" "),e("b-row",t._l(t.myFavourites.data,(function(o,r){return e("b-col",{key:r,attrs:{lg:"4"}},[e("PropertyCard",{attrs:{item:o},on:{update:function(e){return t.updateCompare(e)},showSendOfferModal:t.handleOffer,updateFavouriteProperty:t.removeFavourite}})],1)})),1),t._v(" "),t.myFavourites.data.length?e("div",{staticClass:"overflow-auto pagination-container pt-4"},[e("b-container",[e("b-pagination",{attrs:{value:t.myFavourites.params.page,"total-rows":t.myFavourites.total,"per-page":t.myFavourites.params.perPage,pills:"",size:"md",align:"center"},on:{input:t.updateFavouritesPagination}})],1)],1):t._e(),t._v(" "),e("div",{staticClass:"spacer-30"}),t._v(" "),e("PropertyBidDetails"),t._v(" "),e("success-modal",{attrs:{title:t.$t("property.offerSentSucess"),description:t.$t("property.successMessage")}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);