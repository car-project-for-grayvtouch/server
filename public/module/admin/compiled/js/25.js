(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{386:function(t,s,i){"use strict";i.r(s);var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"module-container"},[i("module-nav",{attrs:{topRoute:t.topRoute,pos:t.pos}}),t._v(" "),i("div",{staticClass:"module-content"},[i("div",{staticClass:"in"},[i("div",{staticClass:"top"},[i("form",{on:{submit:function(s){return s.preventDefault(),t.submit(s)},reset:t.reset}},[t._m(0),t._v(" "),i("div",{staticClass:"filter-options"},[i("div",{staticClass:"option"},[i("div",{staticClass:"field"},[t._v("ID：")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.id,expression:"form.id"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.id},on:{input:function(s){s.target.composing||t.$set(t.form,"id",s.target.value)}}})])]),t._v(" "),i("div",{staticClass:"option"},[i("div",{staticClass:"field"},[t._v("用户ID：")]),t._v(" "),i("div",{staticClass:"value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user_id,expression:"form.user_id"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.user_id},on:{input:function(s){s.target.composing||t.$set(t.form,"user_id",s.target.value)}}})])]),t._v(" "),t._m(1)])])]),t._v(" "),i("div",{staticClass:"btm list"},[i("div",{staticClass:"data"},[i("div",{staticClass:"run-title"},[i("div",{staticClass:"left"},[t._v("数据列表")]),t._v(" "),i("div",{staticClass:"right"},[i("button",{staticClass:"run-button run-button-blue",attrs:{type:"button"},on:{click:t.updateStatusForSelected}},[i("i",{staticClass:"run-iconfont run-edit"}),t._v("\n                                设置状态\n                            ")])])]),t._v(" "),i("table",{staticClass:"line-tb"},[i("thead",[i("tr",[i("th",{staticClass:"w-20"},[i("input",{attrs:{type:"checkbox"},on:{click:t.selectAllEvent}})]),t._v(" "),i("th",{staticClass:"w-40"},[t._v("ID")]),t._v(" "),i("th",{staticClass:"w-100"},[t._v("用户【ID】")]),t._v(" "),i("th",{staticClass:"w-80"},[t._v("电话")]),t._v(" "),i("th",{staticClass:"w-80"},[t._v("微信")]),t._v(" "),i("th",{staticClass:"w-80"},[t._v("职业")]),t._v(" "),i("th",{staticClass:"w-50"},[t._v("ssn?")]),t._v(" "),i("th",{staticClass:"w-80"},[t._v("状态")]),t._v(" "),i("th",{staticClass:"w-100"},[t._v("创建时间")]),t._v(" "),i("th",{staticClass:"w-100"},[t._v("操作")])])]),t._v(" "),i("tbody",{ref:"tbody"},[t._l(t.data,function(s){return i("tr",{key:s.id,attrs:{"data-id":s.id},on:{click:t.selectEvent}},[t._m(2,!0),t._v(" "),i("td",[t._v(t._s(s.id))]),t._v(" "),i("td",[t._v(t._s(s.user?s.user.username+"【"+s.user.id+"】":""))]),t._v(" "),i("td",[t._v(t._s(s.phone))]),t._v(" "),i("td",[t._v(t._s(s.weixin))]),t._v(" "),i("td",[t._v(t._s(s.profession_explain))]),t._v(" "),i("td",[t._v(t._s(s.ssn_explain))]),t._v(" "),i("td",[i("b",{class:"wait"==s.status?"red":"cancel"==s.status?"gray":"completed"==s.status?"green":""},[t._v(t._s(s.status_explain))])]),t._v(" "),i("td",[t._v(t._s(s.create_time))]),t._v(" "),i("td",[i("button",{staticClass:"run-button run-button-blue",attrs:{type:"button"},on:{click:function(i){return i.stopPropagation(),t.updateStatusForTar(s.id)}}},[i("i",{staticClass:"run-iconfont run-edit"}),t._v("设置状态\n                                ")])])])}),t._v(" "),0==t.data.length?i("tr",[i("td",{attrs:{colspan:"10"}},[t._v("没有相关数据")])]):t._e()],2)])]),t._v(" "),i("div",{staticClass:"page"},[i("Page",{attrs:{total:t.page.total,"page-size":t.page.per_page,size:"small","show-total":"","show-elevator":""},on:{"on-change":t.pageEvent}})],1)])])]),t._v(" "),i("v-loading",{ref:"loading"})],1)};n._withStripped=!0;var a={name:"v-list",data:function(){return{form:{id:"",name:"",order:""},ins:{loading:null},pending:{del:null},ajax:{list:null},dom:{},api:stagingBuyApplicationApi,data:[],idList:[],page:{page:1,per_page:20},status:{wait:"等待处理",ignore:"已忽略",completed:"已完成"}}},mixins:[mixins.loading,mixins.state,mixins.list.get.normal,mixins.list.filter,mixins.list.del,mixins.list.page],created:function(){},mounted:function(){this.initDom(),this.initInstance(),this.getData()},methods:{initDom:function(){this.dom.tbody=G(this.$refs.tbody)},initInstance:function(){},genOption:function(t){var s=Object.keys(this.status),i=Object.values(this.status),n={btn:i};return i.forEach(function(i,a){n["btn"+(a+1)]=function(i){layer.close(i),t(s[a])}}),n},updateStatusForSelected:function(){var t=this;new Promise(function(s,i){t.idList.length<1?t.$info("请选择项"):s()}).then(function(){return new Promise(function(s,i){t.$info("你确定要批量修改状态吗？",{btn:["确定","取消"],btn1:function(t){layer.close(t),s()},btn2:function(t){layer.close(t)}})})}).then(function(s){return layer.close(s),new Promise(function(s){t.$info("请选择状态",t.genOption(s))})}).then(function(s){t.updateStatus(t.idList,s)})},updateStatusForTar:function(t){var s=this;new Promise(function(t){s.$info("请选择状态",s.genOption(t))}).then(function(i){s.updateStatus([t],i)})},updateStatus:function(t,s){var i=this;new Promise(function(n){i.pending.updateStatus?i.$info("请求中...请耐心等待"):(i.pendingState("loading","updateStatus"),i.ajax.updateStatus=i.api.updateStatus({id_list:G.jsonEncode(t),status:s},function(t,s){if(200!=s)return i.eNotice(t),void n(!1);n(!0)}),i.ins.loading.setArgs(i.ajax.updateStatus,"updateStatus"))}).then(function(t){return new Promise(function(s){s(),t&&i.getData(function(){s()})})}).finally(function(){i.initialState("loading","updateStatus","updateStatus")})}}},e=(i(393),i(653),i(654),i(655),i(14)),o=Object(e.a)(a,n,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"run-title"},[s("div",{staticClass:"left"},[this._v("筛选")]),this._v(" "),s("div",{staticClass:"right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"option"},[s("div",{staticClass:"field"}),this._v(" "),s("div",{staticClass:"value"},[s("button",{staticClass:"run-button run-button-blue",attrs:{type:"submit"}},[this._v("提交")]),this._v(" "),s("button",{staticClass:"run-button run-button-yellow",attrs:{type:"reset"}},[s("i",{staticClass:"run-iconfont run-reset"}),this._v("\n                                    重置\n                                ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("input",{staticClass:"c-box",attrs:{type:"checkbox"}})])}],!1,null,"a67bc1ba",null);o.options.__file="source/vue/view/stagingBuyApplication/list.vue";s.default=o.exports},392:function(t,s,i){},393:function(t,s,i){"use strict";var n=i(392);i.n(n).a},510:function(t,s,i){},511:function(t,s,i){},512:function(t,s,i){},653:function(t,s,i){"use strict";var n=i(510);i.n(n).a},654:function(t,s,i){"use strict";var n=i(511);i.n(n).a},655:function(t,s,i){"use strict";var n=i(512);i.n(n).a}}]);