(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-login"],{"008e":function(n,i,t){var e=t("689a");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=t("4f06").default;a("d4885884",e,!0,{sourceMap:!1,shadowMode:!1})},"0b51":function(n,i,t){"use strict";t.r(i);var e=function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("v-uni-view",{staticClass:"s-page-wrapper is-100vh"},[t("v-uni-web-view",{attrs:{src:"http://www.17sucai.com/preview/1474877/2018-12-04/spipa-circle/index.html"}}),t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{staticStyle:{position:"absolute"},style:{"margin-top":this.realHeight,"margin-left":this.realWidth},attrs:{id:"content"}},[t("v-uni-view",{staticClass:" has-mgtb-10 "},[t("v-uni-input",{staticClass:"is-input1 ",attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号","data-val":"phone"},on:{input:function(i){i=n.$handleEvent(i),n.BindInput(i)}},model:{value:n.login.phone,callback:function(i){n.$set(n.login,"phone",i)},expression:"login.phone"}})],1),t("v-uni-view",{staticClass:" has-radius has-mgtb-10"},[t("v-uni-input",{staticClass:"is-input1",attrs:{placeholder:"请输入登录密码","data-val":"password"},on:{input:function(i){i=n.$handleEvent(i),n.BindInput(i)}},model:{value:n.login.password,callback:function(i){n.$set(n.login,"password",i)},expression:"login.password"}})],1),t("v-uni-view",{staticClass:" loginbtn has-radius has-mgtb-20"},[t("v-uni-button",{attrs:{loading:n.login.loading},on:{click:function(i){i=n.$handleEvent(i),n.defaultHandlerLogin(i)}}},[n._v(" "+n._s(n.login.loading?"登录中...":"登 录")+" ")])],1)],1)],1),t("v-uni-view",{staticClass:"is-20vh has-mgt-80 content"},[t("v-uni-navigator",{staticClass:" has-radius is-right is-grey has-mgr-20",attrs:{url:"#","hover-class":""}},[t("v-uni-text",[n._v("忘记密码？")]),t("v-uni-text",{staticClass:"is-blue"},[n._v("点击找回")])],1)],1)],1)},a=[],o={data:function(){return{login:{loading:!1,phone:"",password:""},realWidth:0,realHeight:0}},methods:{defaultHandlerLogin:function(){var n=this;this.login.loading=!0,setTimeout(function(i){n.login.loading=!1,uni.navigateTo({url:"../scene/crossing"})},1e3),console.log(JSON.stringify(this.login))},BindInput:function(n){var i=n.currentTarget.dataset.val;this.login[i]=n.detail.value}},onReady:function(){console.log("动态适配");var n=document.getElementById("content"),i=n.clientHeight||n.offsetHeight,t=n.clientWidth||n.offsetWidth;this.realWidth=(uni.getSystemInfoSync().windowWidth-t)/2+"px",this.realHeight=(uni.getSystemInfoSync().windowHeight-i)/2+"px"}},s=o,l=(t("8655"),t("2877")),r=Object(l["a"])(s,e,a,!1,null,"4d157034",null);r.options.__file="login.vue";i["default"]=r.exports},"689a":function(n,i,t){i=n.exports=t("2350")(!1),i.push([n.i,"\nuni-page-body[data-v-4d157034]{min-height:100%;background-color:#fff\n}\n.content[data-v-4d157034]{position:relative;width:99.5%;height:99.5%;margin:0 auto\n}\n.loginbtn uni-button[data-v-4d157034]{margin-top:%?20?%;height:%?66?%;width:100%;line-height:%?66?%;color:#fff;font-size:%?32?%;border-radius:%?44?%;outline:0;display:block;margin:0;font-family:inherit;background:#f35;opacity:.8\n}\n.logoimg[data-v-4d157034]{width:%?200?%;height:%?200?%;border-radius:50%\n}\n.is-input1[data-v-4d157034]{height:%?60?%;width:100%;line-height:%?44?%;padding:0 %?32?%;color:#353535;font-size:%?32?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:%?2?% solid #e5e5e5;-webkit-box-shadow:none;box-shadow:none;border-radius:%?50?%;outline:0;display:block;padding-left:%?30?%;margin:0;font-family:inherit;background:#fff;resize:none\n}\n.input-placeholder[data-v-4d157034]{width:88%\n}\nbody.?%PAGE?%[data-v-4d157034]{background-color:#fff\n}",""])},8655:function(n,i,t){"use strict";var e=t("008e"),a=t.n(e);a.a}}]);