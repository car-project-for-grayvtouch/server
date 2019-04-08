(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/role/js/priv.js?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./source/vue/view/role/js/priv.js?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-priv",
  data: function data() {
    return {
      // 展开|收缩
      expand: true,
      data: [],
      // 当前角色权限
      priv: [],
      // 路由列表
      routes: [],
      idList: [],
      ins: {
        tree: null
      },
      ajax: {
        getData: null,
        submit: null
      },
      pending: {
        submit: null
      },
      api: roleApi
    };
  },
  mixins: [mixins.loading],
  mounted: function mounted() {
    this.initDom();
    this.initInstance();
    this.getData();
  },
  methods: {
    initDom: function initDom() {},
    initInstance: function initInstance() {
      this.ins.tree = this.$refs.tree;
    },
    getData: function getData() {
      var _this = this;

      new Promise(function (resolve) {
        _this.ins.loading.show();

        _this.ajax.getData = _this.api.info(_this.param.id, function (res, code) {
          resolve();

          if (code != 200) {
            _this.$error(res);

            return;
          }

          _this.priv = res.priv;

          _this.handle(res.route);

          _this.routes = res.route;
        });

        _this.ins.loading.setArgs(_this.ajax.getData);
      }).finally(function () {
        _this.ins.loading.hide();
      });
    },
    handle: function handle(data) {
      for (var i = 0; i < data.length; ++i) {
        var cur = data[i];
        cur.title = cur.name;
        cur.checked = this.isSelected(cur.id);
        cur.expand = this.expand;

        if (cur.children.length > 0) {
          this.handle(cur.children);
        }
      }
    },
    // 是否选中
    isSelected: function isSelected(id) {
      for (var i = 0; i < this.priv.length; ++i) {
        var cur = this.priv[i];

        if (id == cur.id) {
          return true;
        }
      }

      return false;
    },
    // 获取选中项
    getSelected: function getSelected() {
      var nodes = this.ins.tree.getCheckedNodes();
      var idList = [];

      for (var i = 0; i < nodes.length; ++i) {
        var cur = nodes[i];
        idList.push(cur.id);
      }

      return idList;
    },
    submit: function submit() {
      var _this2 = this;

      if (this.pending.submit) {
        return this.$info('请求中...请耐心等待');
      }

      var self = this;
      new Promise(function (resolve) {
        _this2.pending.submit = true;

        _this2.ins.loading.show();

        _this2.ajax.submit = _this2.api.auth({
          id: _this2.param.id,
          route: G.jsonEncode(_this2.getSelected())
        }, function (res, code) {
          if (code != 200) {
            resolve(false);

            _this2.$error(res);

            return;
          }

          resolve(true);
        });

        _this2.ins.loading.setArgs(_this2.ajax.submit, 'submit');
      }).then(function (next) {
        if (!next) {
          return;
        } // 提示成功


        _this2.$success('操作成功', {
          btn: ['继续分配', '角色列表'],
          btn1: function btn1(index) {
            layer.close(index);
          },
          btn2: function btn2() {
            self.location('/role/list', null, '_self');
          }
        });
      }).finally(function () {
        _this2.pending.submit = false;

        _this2.ins.loading.hide();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/list.css?vue&type=style&index=1&id=f7fb1e86&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/list.css?vue&type=style&index=1&id=f7fb1e86&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=0&id=f7fb1e86&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=0&id=f7fb1e86&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/role/css/priv.css?vue&type=style&index=2&id=f7fb1e86&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/role/css/priv.css?vue&type=style&index=2&id=f7fb1e86&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/role/priv.vue?vue&type=template&id=f7fb1e86&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/role/priv.vue?vue&type=template&id=f7fb1e86&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "module-container" },
    [
      _c("module-nav", { attrs: { topRoute: _vm.topRoute, pos: _vm.pos } }),
      _vm._v(" "),
      _c("div", { staticClass: "module-content" }, [
        _c("div", { staticClass: "in" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "content" }, [
                _c("table", { staticClass: "input-tb" }, [
                  _c("tbody", [
                    _c("tr", [
                      _c(
                        "td",
                        [
                          _c("Tree", {
                            ref: "tree",
                            attrs: {
                              data: _vm.routes,
                              "show-checkbox": "",
                              multiple: "",
                              "check-strictly": "",
                              "check-directly": ""
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(1)
                  ])
                ])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-loading", { ref: "loading" })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "run-title" }, [
      _c("div", { staticClass: "left" }, [_vm._v("权限列表")]),
      _vm._v(" "),
      _c("div", { staticClass: "right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [
        _c("button", { staticClass: "run-button run-button-submit" }, [
          _vm._v("提交")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./source/vue/view/public/css/list.css?vue&type=style&index=1&id=f7fb1e86&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./source/vue/view/public/css/list.css?vue&type=style&index=1&id=f7fb1e86&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./list.css?vue&type=style&index=1&id=f7fb1e86&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/list.css?vue&type=style&index=1&id=f7fb1e86&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_list_css_vue_type_style_index_1_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/public/css/public.css?vue&type=style&index=0&id=f7fb1e86&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./source/vue/view/public/css/public.css?vue&type=style&index=0&id=f7fb1e86&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public.css?vue&type=style&index=0&id=f7fb1e86&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=0&id=f7fb1e86&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/role/css/priv.css?vue&type=style&index=2&id=f7fb1e86&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./source/vue/view/role/css/priv.css?vue&type=style&index=2&id=f7fb1e86&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_priv_css_vue_type_style_index_2_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./priv.css?vue&type=style&index=2&id=f7fb1e86&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/role/css/priv.css?vue&type=style&index=2&id=f7fb1e86&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_priv_css_vue_type_style_index_2_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_priv_css_vue_type_style_index_2_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_priv_css_vue_type_style_index_2_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_priv_css_vue_type_style_index_2_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_priv_css_vue_type_style_index_2_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/role/js/priv.js?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./source/vue/view/role/js/priv.js?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_priv_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!./priv.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/role/js/priv.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_priv_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/view/role/priv.vue":
/*!***************************************!*\
  !*** ./source/vue/view/role/priv.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _priv_vue_vue_type_template_id_f7fb1e86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./priv.vue?vue&type=template&id=f7fb1e86&scoped=true& */ "./source/vue/view/role/priv.vue?vue&type=template&id=f7fb1e86&scoped=true&");
/* harmony import */ var _js_priv_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/priv.js?vue&type=script&lang=js& */ "./source/vue/view/role/js/priv.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_public_css_vue_type_style_index_0_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=0&id=f7fb1e86&scoped=true&lang=css& */ "./source/vue/view/public/css/public.css?vue&type=style&index=0&id=f7fb1e86&scoped=true&lang=css&");
/* harmony import */ var _public_css_list_css_vue_type_style_index_1_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/list.css?vue&type=style&index=1&id=f7fb1e86&scoped=true&lang=css& */ "./source/vue/view/public/css/list.css?vue&type=style&index=1&id=f7fb1e86&scoped=true&lang=css&");
/* harmony import */ var _css_priv_css_vue_type_style_index_2_id_f7fb1e86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/priv.css?vue&type=style&index=2&id=f7fb1e86&scoped=true&lang=css& */ "./source/vue/view/role/css/priv.css?vue&type=style&index=2&id=f7fb1e86&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _js_priv_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _priv_vue_vue_type_template_id_f7fb1e86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _priv_vue_vue_type_template_id_f7fb1e86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f7fb1e86",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/view/role/priv.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/view/role/priv.vue?vue&type=template&id=f7fb1e86&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./source/vue/view/role/priv.vue?vue&type=template&id=f7fb1e86&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_priv_vue_vue_type_template_id_f7fb1e86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./priv.vue?vue&type=template&id=f7fb1e86&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/role/priv.vue?vue&type=template&id=f7fb1e86&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_priv_vue_vue_type_template_id_f7fb1e86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_priv_vue_vue_type_template_id_f7fb1e86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcm9sZS9qcy9wcml2LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL2xpc3QuY3NzP2VhMWYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz9jZTZkIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9yb2xlL2Nzcy9wcml2LmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcm9sZS9wcml2LnZ1ZT9iYmY3Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL2xpc3QuY3NzPzRjMWIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz9jNjc3Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9yb2xlL2Nzcy9wcml2LmNzcz82NTAzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9yb2xlL2pzL3ByaXYuanM/MWYwMCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcm9sZS9wcml2LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcm9sZS9wcml2LnZ1ZT8zMzhmIl0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwiZXhwYW5kIiwicHJpdiIsInJvdXRlcyIsImlkTGlzdCIsImlucyIsInRyZWUiLCJhamF4IiwiZ2V0RGF0YSIsInN1Ym1pdCIsInBlbmRpbmciLCJhcGkiLCJyb2xlQXBpIiwibWl4aW5zIiwibG9hZGluZyIsIm1vdW50ZWQiLCJpbml0RG9tIiwiaW5pdEluc3RhbmNlIiwibWV0aG9kcyIsIiRyZWZzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzaG93IiwiaW5mbyIsInBhcmFtIiwiaWQiLCJyZXMiLCJjb2RlIiwiJGVycm9yIiwiaGFuZGxlIiwicm91dGUiLCJzZXRBcmdzIiwiZmluYWxseSIsImhpZGUiLCJpIiwibGVuZ3RoIiwiY3VyIiwidGl0bGUiLCJjaGVja2VkIiwiaXNTZWxlY3RlZCIsImNoaWxkcmVuIiwiZ2V0U2VsZWN0ZWQiLCJub2RlcyIsImdldENoZWNrZWROb2RlcyIsInB1c2giLCIkaW5mbyIsInNlbGYiLCJhdXRoIiwiRyIsImpzb25FbmNvZGUiLCJ0aGVuIiwibmV4dCIsIiRzdWNjZXNzIiwiYnRuIiwiYnRuMSIsImluZGV4IiwibGF5ZXIiLCJjbG9zZSIsImJ0bjIiLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWU7QUFDWEEsTUFBSSxFQUFFLFFBREs7QUFFWEMsTUFGVyxrQkFFSDtBQUNKLFdBQU87QUFDSDtBQUNBQyxZQUFNLEVBQUUsSUFGTDtBQUdIRCxVQUFJLEVBQUUsRUFISDtBQUlIO0FBQ0FFLFVBQUksRUFBRSxFQUxIO0FBTUg7QUFDQUMsWUFBTSxFQUFFLEVBUEw7QUFRSEMsWUFBTSxFQUFFLEVBUkw7QUFTSEMsU0FBRyxFQUFFO0FBQ0RDLFlBQUksRUFBRTtBQURMLE9BVEY7QUFZSEMsVUFBSSxFQUFFO0FBQ0ZDLGVBQU8sRUFBRSxJQURQO0FBRUZDLGNBQU0sRUFBRTtBQUZOLE9BWkg7QUFnQkhDLGFBQU8sRUFBRTtBQUNMRCxjQUFNLEVBQUU7QUFESCxPQWhCTjtBQW1CSEUsU0FBRyxFQUFFQztBQW5CRixLQUFQO0FBcUJILEdBeEJVO0FBMEJYQyxRQUFNLEVBQUUsQ0FDSkEsTUFBTSxDQUFDQyxPQURILENBMUJHO0FBOEJYQyxTQTlCVyxxQkE4QkE7QUFDUCxTQUFLQyxPQUFMO0FBQ0EsU0FBS0MsWUFBTDtBQUNBLFNBQUtULE9BQUw7QUFDSCxHQWxDVTtBQW9DWFUsU0FBTyxFQUFFO0FBQ0xGLFdBREsscUJBQ00sQ0FFVixDQUhJO0FBS0xDLGdCQUxLLDBCQUtXO0FBQ1osV0FBS1osR0FBTCxDQUFTQyxJQUFULEdBQWdCLEtBQUthLEtBQUwsQ0FBV2IsSUFBM0I7QUFDSCxLQVBJO0FBU0xFLFdBVEsscUJBU007QUFBQTs7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QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFBQTtBQUFBO0FBQUE7QUFBOFIsQ0FBZ0IsK1RBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbFQ7QUFBQTtBQUFBO0FBQUE7QUFBZ1MsQ0FBZ0IsaVVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcFQ7QUFBQTtBQUFBO0FBQUE7QUFBOFIsQ0FBZ0IsK1RBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbFQ7QUFBQTtBQUFBLHdDQUFxSCxDQUFnQixxTEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRjtBQUNyQztBQUNMO0FBQ2lEO0FBQ0Y7QUFDUjs7O0FBRzVGO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3pDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInYtcHJpdlwiICxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vIOWxleW8gHzmlLbnvKlcclxuICAgICAgICAgICAgZXhwYW5kOiB0cnVlICxcclxuICAgICAgICAgICAgZGF0YTogW10gLFxyXG4gICAgICAgICAgICAvLyDlvZPliY3op5LoibLmnYPpmZBcclxuICAgICAgICAgICAgcHJpdjogW10gLFxyXG4gICAgICAgICAgICAvLyDot6/nlLHliJfooahcclxuICAgICAgICAgICAgcm91dGVzOiBbXSAsXHJcbiAgICAgICAgICAgIGlkTGlzdDogW10gLFxyXG4gICAgICAgICAgICBpbnM6IHtcclxuICAgICAgICAgICAgICAgIHRyZWU6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YTogbnVsbCAsXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgcGVuZGluZzoge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0OiBudWxsICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGFwaTogcm9sZUFwaSAsXHJcbiAgICAgICAgfTtcclxuICAgIH0gLFxyXG5cclxuICAgIG1peGluczogW1xyXG4gICAgICAgIG1peGlucy5sb2FkaW5nICxcclxuICAgIF0gLFxyXG5cclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdERvbSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICB9ICxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaW5pdERvbSAoKSB7XHJcblxyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0SW5zdGFuY2UgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucy50cmVlID0gdGhpcy4kcmVmcy50cmVlO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBnZXREYXRhICgpIHtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hamF4LmdldERhdGEgPSB0aGlzLmFwaS5pbmZvKHRoaXMucGFyYW0uaWQgLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZXJyb3IocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcml2ID0gcmVzLnByaXY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGUocmVzLnJvdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlcyA9IHJlcy5yb3V0ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zZXRBcmdzKHRoaXMuYWpheC5nZXREYXRhKTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGhhbmRsZSAoZGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXIgPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICAgICAgY3VyLnRpdGxlID0gY3VyLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBjdXIuY2hlY2tlZCA9IHRoaXMuaXNTZWxlY3RlZChjdXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgY3VyLmV4cGFuZCA9IHRoaXMuZXhwYW5kO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1ci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGUoY3VyLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDmmK/lkKbpgInkuK1cclxuICAgICAgICBpc1NlbGVjdGVkIChpZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJpdi5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1ciA9IHRoaXMucHJpdltpXTtcclxuICAgICAgICAgICAgICAgIGlmIChpZCA9PSBjdXIuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOiOt+WPlumAieS4remhuVxyXG4gICAgICAgIGdldFNlbGVjdGVkICgpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGVzID0gdGhpcy5pbnMudHJlZS5nZXRDaGVja2VkTm9kZXMoKTtcclxuICAgICAgICAgICAgbGV0IGlkTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyID0gbm9kZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZExpc3QucHVzaChjdXIuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpZExpc3Q7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHN1Ym1pdCAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlbmRpbmcuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kaW5mbygn6K+35rGC5LitLi4u6K+36ICQ5b+D562J5b6FJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nLnN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWpheC5zdWJtaXQgPSB0aGlzLmFwaS5hdXRoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wYXJhbS5pZCAsXHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGU6IEcuanNvbkVuY29kZSh0aGlzLmdldFNlbGVjdGVkKCkpXHJcbiAgICAgICAgICAgICAgICB9ICwgKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVycm9yKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2V0QXJncyh0aGlzLmFqYXguc3VibWl0ICwgJ3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICB9KS50aGVuKChuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g5o+Q56S65oiQ5YqfXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdWNjZXNzKCfmk43kvZzmiJDlip8nICwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bjogWyfnu6fnu63liIbphY0nICwgJ+inkuiJsuWIl+ihqCddICxcclxuICAgICAgICAgICAgICAgICAgICBidG4xIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jbG9zZShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAgYnRuMiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubG9jYXRpb24oJy9yb2xlL2xpc3QnICwgbnVsbCAsICdfc2VsZicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZy5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgIH0gLFxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlLWNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJtb2R1bGUtbmF2XCIsIHsgYXR0cnM6IHsgdG9wUm91dGU6IF92bS50b3BSb3V0ZSwgcG9zOiBfdm0ucG9zIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2R1bGUtY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpblwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LXRiXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRyZWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJ0cmVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5yb3V0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3ctY2hlY2tib3hcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGVjay1zdHJpY3RseVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGVjay1kaXJlY3RseVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtbG9hZGluZ1wiLCB7IHJlZjogXCJsb2FkaW5nXCIgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJydW4tdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LCBbX3ZtLl92KFwi5p2D6ZmQ5YiX6KGoXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJydW4tYnV0dG9uIHJ1bi1idXR0b24tc3VibWl0XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIuaPkOS6pFwiKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPWY3ZmIxZTg2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbGlzdC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD1mN2ZiMWU4NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjdmYjFlODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjdmYjFlODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcHJpdi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD1mN2ZiMWU4NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3ByaXYuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTImaWQ9ZjdmYjFlODYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi9wcml2LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi9wcml2LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wcml2LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mN2ZiMWU4NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9qcy9wcml2LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9qcy9wcml2LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi9wdWJsaWMvY3NzL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mN2ZiMWU4NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi4vcHVibGljL2Nzcy9saXN0LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPWY3ZmIxZTg2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUyIGZyb20gXCIuL2Nzcy9wcml2LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPWY3ZmIxZTg2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmN2ZiMWU4NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdvcmtcXFxcY29kZVxcXFxjYXJcXFxccHVibGljXFxcXG1vZHVsZVxcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjdmYjFlODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjdmYjFlODYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3ByaXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY3ZmIxZTg2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y3ZmIxZTg2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL3ZpZXcvcm9sZS9wcml2LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcml2LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mN2ZiMWU4NiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=