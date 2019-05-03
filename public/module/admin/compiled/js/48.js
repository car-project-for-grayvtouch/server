(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/articleType/js/thing.js?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./source/vue/view/articleType/js/thing.js?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-ss",
  data: function data() {
    return {
      form: {
        weight: 0,
        hidden: 'n',
        p_id: ''
      },
      // 错误消息
      error: {},
      ins: {},
      dom: {},
      ajax: {
        submit: null
      },
      pending: {
        submit: false
      },
      api: articleTypeApi,
      callback: {},
      type: []
    };
  },
  mixins: [// 加载
  mixins.loading, mixins.state, mixins.form.get, mixins.form.confirm],
  mounted: function mounted() {
    this.initDom();
    this.initInstance();
    this.initialize();
  },
  methods: {
    initDom: function initDom() {},
    initInstance: function initInstance() {},
    initialize: function initialize() {
      var _this = this;

      new Promise(function (resolve) {
        _this.pendingState('loading');

        articleTypeApi.list({}, function (res, code) {
          resolve();

          if (code != 200) {
            _this.eNotice(res);

            return;
          }

          _this.type = res;
        });
      }).then(function () {
        return new Promise(function (resolve) {
          _this.getData(function () {
            resolve();
          });
        });
      }).finally(function () {
        _this.initialState('loading');
      });
    },
    check: function check(data) {
      return {
        status: true,
        field: '',
        msg: ''
      };
    },
    submit: function submit() {
      var _this2 = this;

      new Promise(function (resolve) {
        // 上传基本数据
        if (_this2.pending.submit) {
          _this2.$info('请求中...请耐心等待');

          return;
        }

        _this2.pendingState('loading', 'submit');

        var self = _this2;
        _this2.ajax.submit = _this2.api[_this2.param.mode](_this2.form, function (res, code) {
          if (code != 200) {
            _this2.initialState('loading', 'submit', 'submit');

            if (code == 400) {
              _this2.error = res;
              vScroll(G.firstKey(res));
              return;
            } // 特殊错误


            _this2.$error(res);

            return;
          }

          _this2.form.id = res;
          resolve();
        });

        _this2.ins.loading.setArgs(_this2.ajax.submit, 'submit');
      }).then(function () {
        _this2.confirm('分类列表', '/articleType/list');
      }).finally(function () {
        _this2.initialState('loading', 'submit', 'submit');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/articleType/css/thing.css?vue&type=style&index=1&id=5dc70f04&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/articleType/css/thing.css?vue&type=style&index=1&id=5dc70f04&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=0&id=5dc70f04&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=0&id=5dc70f04&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/articleType/thing.vue?vue&type=template&id=5dc70f04&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/articleType/thing.vue?vue&type=template&id=5dc70f04&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
              _c("table", { staticClass: "input-tb" }, [
                _c("tbody", [
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.name),
                      attrs: { id: "name" }
                    },
                    [
                      _c("td", [_vm._v("名称")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }, [_vm._v("*")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }, [
                          _vm._v(_vm._s(_vm.error.name))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.p_id),
                      attrs: { id: "p_id" }
                    },
                    [
                      _c("td", [_vm._v("上级分类")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-select", {
                            staticClass: "form-select",
                            attrs: { data: _vm.type },
                            model: {
                              value: _vm.form.p_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "p_id", $$v)
                              },
                              expression: "form.p_id"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "necessary" }, [
                            _vm._v("*")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "tip" }, [
                            _vm._v(_vm._s(_vm.error.p_id))
                          ])
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.weight),
                      attrs: { id: "weight" }
                    },
                    [
                      _c("td", [_vm._v("权重")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.weight,
                              expression: "form.weight"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "number", step: "0" },
                          domProps: { value: _vm.form.weight },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "weight", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }, [_vm._v("*")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }, [
                          _vm._v(_vm._s(_vm.error.weight))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("tr", { attrs: { id: "hidden" } }, [
                    _c("td", [_vm._v("是否隐藏")]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "radio-group",
                          {
                            model: {
                              value: _vm.form.hidden,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "hidden", $$v)
                              },
                              expression: "form.hidden"
                            }
                          },
                          _vm._l(_vm.$store.state.business.bool_str, function(
                            v,
                            k
                          ) {
                            return _c(
                              "radio",
                              { key: k, attrs: { label: k } },
                              [_c("span", [_vm._v(_vm._s(v))])]
                            )
                          }),
                          1
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }, [_vm._v("*")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }, [
                          _vm._v(_vm._s(_vm.error.weight))
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(0)
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
    return _c("tr", [
      _c("td", { attrs: { colspan: "2" } }, [
        _c(
          "button",
          {
            staticClass: "run-button run-button-submit",
            attrs: { type: "submit" }
          },
          [_vm._v("提交")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./source/vue/view/articleType/css/thing.css?vue&type=style&index=1&id=5dc70f04&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./source/vue/view/articleType/css/thing.css?vue&type=style&index=1&id=5dc70f04&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_1_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./thing.css?vue&type=style&index=1&id=5dc70f04&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/articleType/css/thing.css?vue&type=style&index=1&id=5dc70f04&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_1_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_1_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_1_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_1_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_1_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/articleType/js/thing.js?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./source/vue/view/articleType/js/thing.js?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_thing_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!./thing.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/articleType/js/thing.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_thing_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/view/articleType/thing.vue":
/*!***********************************************!*\
  !*** ./source/vue/view/articleType/thing.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thing_vue_vue_type_template_id_5dc70f04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thing.vue?vue&type=template&id=5dc70f04&scoped=true& */ "./source/vue/view/articleType/thing.vue?vue&type=template&id=5dc70f04&scoped=true&");
/* harmony import */ var _js_thing_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/thing.js?vue&type=script&lang=js& */ "./source/vue/view/articleType/js/thing.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_public_css_vue_type_style_index_0_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=0&id=5dc70f04&scoped=true&lang=css& */ "./source/vue/view/public/css/public.css?vue&type=style&index=0&id=5dc70f04&scoped=true&lang=css&");
/* harmony import */ var _css_thing_css_vue_type_style_index_1_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/thing.css?vue&type=style&index=1&id=5dc70f04&scoped=true&lang=css& */ "./source/vue/view/articleType/css/thing.css?vue&type=style&index=1&id=5dc70f04&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _js_thing_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _thing_vue_vue_type_template_id_5dc70f04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _thing_vue_vue_type_template_id_5dc70f04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5dc70f04",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/view/articleType/thing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/view/articleType/thing.vue?vue&type=template&id=5dc70f04&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./source/vue/view/articleType/thing.vue?vue&type=template&id=5dc70f04&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_thing_vue_vue_type_template_id_5dc70f04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./thing.vue?vue&type=template&id=5dc70f04&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/articleType/thing.vue?vue&type=template&id=5dc70f04&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_thing_vue_vue_type_template_id_5dc70f04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_thing_vue_vue_type_template_id_5dc70f04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./source/vue/view/public/css/public.css?vue&type=style&index=0&id=5dc70f04&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./source/vue/view/public/css/public.css?vue&type=style&index=0&id=5dc70f04&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public.css?vue&type=style&index=0&id=5dc70f04&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=0&id=5dc70f04&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_0_id_5dc70f04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYXJ0aWNsZVR5cGUvanMvdGhpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2FydGljbGVUeXBlL2Nzcy90aGluZy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz9hOGI5Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9hcnRpY2xlVHlwZS90aGluZy52dWU/ZGEzZSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYXJ0aWNsZVR5cGUvY3NzL3RoaW5nLmNzcz84MGVmIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9hcnRpY2xlVHlwZS9qcy90aGluZy5qcz9mZTJiIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9hcnRpY2xlVHlwZS90aGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2FydGljbGVUeXBlL3RoaW5nLnZ1ZT83Mjg0Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL3B1YmxpYy5jc3M/NWQyOCJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsImZvcm0iLCJ3ZWlnaHQiLCJoaWRkZW4iLCJwX2lkIiwiZXJyb3IiLCJpbnMiLCJkb20iLCJhamF4Iiwic3VibWl0IiwicGVuZGluZyIsImFwaSIsImFydGljbGVUeXBlQXBpIiwiY2FsbGJhY2siLCJ0eXBlIiwibWl4aW5zIiwibG9hZGluZyIsInN0YXRlIiwiZ2V0IiwiY29uZmlybSIsIm1vdW50ZWQiLCJpbml0RG9tIiwiaW5pdEluc3RhbmNlIiwiaW5pdGlhbGl6ZSIsIm1ldGhvZHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInBlbmRpbmdTdGF0ZSIsImxpc3QiLCJyZXMiLCJjb2RlIiwiZU5vdGljZSIsInRoZW4iLCJnZXREYXRhIiwiZmluYWxseSIsImluaXRpYWxTdGF0ZSIsImNoZWNrIiwic3RhdHVzIiwiZmllbGQiLCJtc2ciLCIkaW5mbyIsInNlbGYiLCJwYXJhbSIsIm1vZGUiLCJ2U2Nyb2xsIiwiRyIsImZpcnN0S2V5IiwiJGVycm9yIiwiaWQiLCJzZXRBcmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZTtBQUNYQSxNQUFJLEVBQUUsTUFESztBQUVYQyxNQUZXLGtCQUVIO0FBQ0osV0FBTztBQUNIQyxVQUFJLEVBQUU7QUFDRkMsY0FBTSxFQUFFLENBRE47QUFFRkMsY0FBTSxFQUFFLEdBRk47QUFHRkMsWUFBSSxFQUFFO0FBSEosT0FESDtBQU1IO0FBQ0FDLFdBQUssRUFBRSxFQVBKO0FBUUhDLFNBQUcsRUFBRSxFQVJGO0FBU0hDLFNBQUcsRUFBRSxFQVRGO0FBVUhDLFVBQUksRUFBRTtBQUNGQyxjQUFNLEVBQUU7QUFETixPQVZIO0FBYUhDLGFBQU8sRUFBRTtBQUNMRCxjQUFNLEVBQUU7QUFESCxPQWJOO0FBZ0JIRSxTQUFHLEVBQUVDLGNBaEJGO0FBaUJIQyxjQUFRLEVBQUUsRUFqQlA7QUFrQkhDLFVBQUksRUFBRTtBQWxCSCxLQUFQO0FBb0JILEdBdkJVO0FBd0JYQyxRQUFNLEVBQUUsQ0FDSjtBQUNBQSxRQUFNLENBQUNDLE9BRkgsRUFHSkQsTUFBTSxDQUFDRSxLQUhILEVBSUpGLE1BQU0sQ0FBQ2QsSUFBUCxDQUFZaUIsR0FKUixFQUtKSCxNQUFNLENBQUNkLElBQVAsQ0FBWWtCLE9BTFIsQ0F4Qkc7QUFnQ1hDLFNBaENXLHFCQWdDQTtBQUNQLFNBQUtDLE9BQUw7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsVUFBTDtBQUNILEdBcENVO0FBcUNYQyxTQUFPLEVBQUU7QUFDTEgsV0FESyxxQkFDTSxDQUVWLENBSEk7QUFLTEMsZ0JBTEssMEJBS1csQ0FFZixDQVBJO0FBU0xDLGNBVEssd0JBU1M7QUFBQTs7QUFDVixVQUFJRSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3JCLGFBQUksQ0FBQ0MsWUFBTCxDQUFrQixTQUFsQjs7QUFDQWYs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QUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFnUyxDQUFnQixpVUFBRyxFQUFDLEMiLCJmaWxlIjoianMvNDguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInYtc3NcIiAsXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDAgLFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiAnbicgLFxyXG4gICAgICAgICAgICAgICAgcF9pZDogJycgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgLy8g6ZSZ6K+v5raI5oGvXHJcbiAgICAgICAgICAgIGVycm9yOiB7fSAsXHJcbiAgICAgICAgICAgIGluczoge30gLFxyXG4gICAgICAgICAgICBkb206IHt9ICxcclxuICAgICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0OiBudWxsICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIHBlbmRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgYXBpOiBhcnRpY2xlVHlwZUFwaSAsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiB7fSAsXHJcbiAgICAgICAgICAgIHR5cGU6IFtdICxcclxuICAgICAgICB9O1xyXG4gICAgfSAsXHJcbiAgICBtaXhpbnM6IFtcclxuICAgICAgICAvLyDliqDovb1cclxuICAgICAgICBtaXhpbnMubG9hZGluZyAsXHJcbiAgICAgICAgbWl4aW5zLnN0YXRlICxcclxuICAgICAgICBtaXhpbnMuZm9ybS5nZXQgLFxyXG4gICAgICAgIG1peGlucy5mb3JtLmNvbmZpcm0gLFxyXG5cclxuICAgIF0gLFxyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0RG9tKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SW5zdGFuY2UoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH0gLFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGluaXREb20gKCkge1xyXG5cclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgaW5pdEluc3RhbmNlICgpIHtcclxuXHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRpYWxpemUgKCkge1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nU3RhdGUoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGFydGljbGVUeXBlQXBpLmxpc3Qoe30gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lTm90aWNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9IHJlcztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBjaGVjayAoZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlICxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnJyAsXHJcbiAgICAgICAgICAgICAgICBtc2c6ICcnICxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgc3VibWl0ICgpIHtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOS4iuS8oOWfuuacrOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZy5zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpbmZvKCfor7fmsYLkuK0uLi7or7fogJDlv4PnrYnlvoUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nU3RhdGUoJ2xvYWRpbmcnICwgJ3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hamF4LnN1Ym1pdCA9IHRoaXMuYXBpW3RoaXMucGFyYW0ubW9kZV0odGhpcy5mb3JtICwgKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ2xvYWRpbmcnICwgJ3N1Ym1pdCcgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZTY3JvbGwoRy5maXJzdEtleShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g54m55q6K6ZSZ6K+vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVycm9yKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5pZCA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2V0QXJncyh0aGlzLmFqYXguc3VibWl0ICwgJ3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybSgn5YiG57G75YiX6KGoJyAsICcvYXJ0aWNsZVR5cGUvbGlzdCcpO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlKCdsb2FkaW5nJyAsICdzdWJtaXQnICwgJ3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZHVsZS1jb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwibW9kdWxlLW5hdlwiLCB7IGF0dHJzOiB7IHRvcFJvdXRlOiBfdm0udG9wUm91dGUsIHBvczogX3ZtLnBvcyB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5cIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC10YlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJuYW1lXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5ZCN56ewXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5lY2Vzc2FyeVwiIH0sIFtfdm0uX3YoXCIqXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IucF9pZCksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwicF9pZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuS4iue6p+WIhuexu1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLnR5cGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLnBfaWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLndlaWdodCksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwid2VpZ2h0XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5p2D6YeNXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ud2VpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLndlaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiwgc3RlcDogXCIwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLndlaWdodCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIndlaWdodFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSwgW192bS5fdihcIipcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLndlaWdodCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCB7IGF0dHJzOiB7IGlkOiBcImhpZGRlblwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLmmK/lkKbpmpDol49cIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmhpZGRlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiaGlkZGVuXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uJHN0b3JlLnN0YXRlLmJ1c2luZXNzLmJvb2xfc3RyLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGssIGF0dHJzOiB7IGxhYmVsOiBrIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3ModikpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbX3ZtLl92KFwiKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3Iud2VpZ2h0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWxvYWRpbmdcIiwgeyByZWY6IFwibG9hZGluZ1wiIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1idXR0b24gcnVuLWJ1dHRvbi1zdWJtaXRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuaPkOS6pFwiKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90aGluZy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD01ZGM3MGYwNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RoaW5nLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTVkYzcwZjA0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4vdGhpbmcuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL3RoaW5nLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90aGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWRjNzBmMDQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vanMvdGhpbmcuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2pzL3RoaW5nLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi9wdWJsaWMvY3NzL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZGM3MGYwNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi9jc3MvdGhpbmcuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NWRjNzBmMDQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjVkYzcwZjA0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcd29ya1xcXFxjb2RlXFxcXGNhclxcXFxwdWJsaWNcXFxcbW9kdWxlXFxcXGFkbWluXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ZGM3MGYwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ZGM3MGYwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGhpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVkYzcwZjA0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVkYzcwZjA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL3ZpZXcvYXJ0aWNsZVR5cGUvdGhpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RoaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZGM3MGYwNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWRjNzBmMDQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWRjNzBmMDQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiXSwic291cmNlUm9vdCI6IiJ9