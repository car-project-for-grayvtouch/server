(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/car/js/report.js?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./source/vue/view/car/js/report.js?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-report',
  data: function data() {
    return {
      form: {},
      dom: {},
      ins: {},
      ajax: {},
      pending: {},
      callback: {},
      value: {},
      type: '',
      api: carApi,
      menu: 'one',
      navMenu: [{
        id: 'one',
        name: '驾驶系统检测'
      }, {
        id: 'two',
        name: '控制系统检测'
      }],
      rule: [],
      report: [],
      opacity: 1
    };
  },
  mixins: [// 加载
  mixins.loading, // 状态
  mixins.state, // 菜单
  mixins.form.menuSwitch, // 确定
  mixins.form.confirm],
  mounted: function mounted() {
    this.initDom();
    this.initStatic();
    this.initDynamic();
    this.initInstance();
    this.initialize();
  },
  methods: {
    initDom: function initDom() {
      this.dom.list = G(this.$refs.list);
    },
    initStatic: function initStatic() {
      this.form.id = this.param.id;
    },
    initDynamic: function initDynamic() {
      this.dom.optionSet = this.dom.list.children();
    },
    initInstance: function initInstance() {},
    // 生成 menu
    genMenu: function genMenu() {
      var _this = this;

      var i = 0;
      var cur = null;
      var menu = [];
      var curMenu = null;

      for (; i < this.rule.length; ++i) {
        cur = this.rule[i];
        menu.push({
          id: cur.id,
          name: cur.name
        });

        if (i == 0) {
          this.menu = cur.id;
        }
      }

      this.navMenu = menu;
      this.$nextTick(function () {
        _this.initMenuSwitch();
      });
    },
    initialize: function initialize() {
      var _this2 = this;

      new Promise(function (resolve) {
        _this2.pendingState('loading'); // 获取规则


        _this2.api.rule(function (res, code) {
          resolve();

          if (code != 200) {
            _this2.eNotice(res);

            return;
          }

          res.forEach(function (v) {
            v.result = '';
            v.position.forEach(function (v1) {
              v1.item.forEach(function (v2) {
                v2.option = G.jsonDecode(v2.option);
                v2.desc = '';
              });
            });
          });
          _this2.rule = res;
        });
      }).then(function () {
        return new Promise(function (resolve) {
          _this2.$nextTick(function () {
            _this2.initDynamic();

            _this2.genMenu();

            _this2.api.getReport({
              id: _this2.param.id
            }, function (res, code) {
              resolve();

              if (code != 200) {
                if (code == 404) {
                  return;
                }

                _this2.eNotice(res);

                return;
              }

              _this2.report = res; // todo 稍作处理

              _this2.rule.forEach(function (module, k) {
                var _module = res[k] ? res[k] : {};

                module.result = res[k] ? _module.result : '';
                module.position.forEach(function (position, k1) {
                  var positions = _module.position ? _module.position : [];

                  var _position = positions[k1] ? positions[k1] : {};

                  position.item.forEach(function (item, k2) {
                    var items = _position.item ? _position.item : [];

                    var _item = items[k2] ? items[k2] : {};

                    item.value = _item.value ? _item.value : item.value;
                    item.desc = _item.desc ? _item.desc : item.desc;
                  });
                });
              });
            });
          });
        });
      }).finally(function () {
        _this2.initialState('loading');
      });
    },
    check: function check() {
      return {
        status: true,
        field: '',
        msg: ''
      };
    },
    submit: function submit() {
      var _this3 = this;

      new Promise(function (resolve) {
        if (_this3.pending.submit) {
          _this3.$info('请求中...请耐心等待');

          return;
        }

        var filter = _this3.check();

        if (!filter.status) {
          _this3.error = G.createObject(_this3.error, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, filter.field, filter.msg));

          _this3.vScroll(filter.field);

          return;
        }

        console.log(_this3.rule);
        _this3.form.report = G.jsonEncode(_this3.rule);

        _this3.pendingState('loading', 'submit');

        _this3.ajax.submit = _this3.api[_this3.param.mode](_this3.form, function (res, code) {
          _this3.error = {};

          if (code != 200) {
            _this3.initialState('loading', 'submit', 'submit');

            _this3.$error(res);

            return;
          }

          resolve();
        });

        _this3.ins.loading.setArgs(_this3.ajax.submit, 'submit');
      }).then(function () {
        _this3.confirm('车辆列表', '/car/list');
      }).finally(function () {
        _this3.initialState('loading', 'submit', 'submit');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/car/css/report.css?vue&type=style&index=2&id=75dfdd0a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/car/css/report.css?vue&type=style&index=2&id=75dfdd0a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/global.css?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/global.css?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=75dfdd0a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=75dfdd0a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/car/report.vue?vue&type=template&id=75dfdd0a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/car/report.vue?vue&type=template&id=75dfdd0a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        _c(
          "div",
          { staticClass: "in" },
          [
            _c("v-menu-switch", {
              ref: "menu-switch",
              attrs: { data: _vm.navMenu }
            }),
            _vm._v(" "),
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
                _c(
                  "div",
                  { ref: "list", staticClass: "list" },
                  _vm._l(_vm.rule, function(module) {
                    return _c(
                      "div",
                      {
                        key: module.id,
                        staticClass: "module",
                        attrs: { "data-id": module.id }
                      },
                      [
                        _c("div", { staticClass: "content" }, [
                          _c("div", { staticClass: "top" }, [
                            _c("div", { staticClass: "left" }, [
                              _vm._v("模块检测结果")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "right" }, [
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: module.result,
                                    expression: "module.result"
                                  }
                                ],
                                key: module.id,
                                staticClass: "form-textarea",
                                attrs: { placeholder: "请输入检测结果..." },
                                domProps: { value: module.result },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      module,
                                      "result",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "btm" },
                            _vm._l(module.position, function(position) {
                              return _c(
                                "div",
                                { key: position.id, staticClass: "item" },
                                [
                                  _c("div", { staticClass: "pos" }, [
                                    position.group
                                      ? _c("span", [
                                          _vm._v(
                                            "位置分组：" +
                                              _vm._s(position.group.name)
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(
                                      _vm._s(" ".repeat(8)) +
                                        "检测位置：" +
                                        _vm._s(
                                          position.map_value
                                            ? position.name +
                                                "【映射值：" +
                                                position.map_value +
                                                "】"
                                            : position.name
                                        )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "list" },
                                    _vm._l(position.item, function(item) {
                                      return _c(
                                        "div",
                                        { key: item.id, staticClass: "line" },
                                        [
                                          _c("div", { staticClass: "name" }, [
                                            _vm._v(
                                              _vm._s(
                                                item.map_value
                                                  ? item.name +
                                                      "【映射值：" +
                                                      item.map_value +
                                                      "】"
                                                  : item.name
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "value" },
                                            [
                                              _c(
                                                "RadioGroup",
                                                {
                                                  model: {
                                                    value: item.value,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "value",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "item.value"
                                                  }
                                                },
                                                _vm._l(item.option, function(
                                                  v
                                                ) {
                                                  return _c(
                                                    "Radio",
                                                    {
                                                      key: v.key,
                                                      attrs: { label: v.key }
                                                    },
                                                    [_vm._v(_vm._s(v.value))]
                                                  )
                                                }),
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "desc" }, [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: item.desc,
                                                  expression: "item.desc"
                                                }
                                              ],
                                              staticClass: "form-text",
                                              attrs: {
                                                type: "text",
                                                placeholder: "结果描述"
                                              },
                                              domProps: { value: item.desc },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    item,
                                                    "desc",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          ])
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        module.image
                          ? _c("div", { staticClass: "preview" }, [
                              _c(
                                "div",
                                { staticClass: "function" },
                                [
                                  _c(
                                    "v-button",
                                    {
                                      attrs: { color: "blue" },
                                      on: {
                                        click: function($event) {
                                          _vm.opacity = 0.2
                                        }
                                      }
                                    },
                                    [_vm._v("透明度：20%")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-button",
                                    {
                                      attrs: { color: "blue" },
                                      on: {
                                        click: function($event) {
                                          _vm.opacity = 0.5
                                        }
                                      }
                                    },
                                    [_vm._v("透明度：50%")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-button",
                                    {
                                      attrs: { color: "blue" },
                                      on: {
                                        click: function($event) {
                                          _vm.opacity = 1
                                        }
                                      }
                                    },
                                    [_vm._v("透明度：100%")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "con",
                                  style: "opacity: " + _vm.opacity + ";",
                                  on: {
                                    click: function($event) {
                                      return _vm.toLink(module.image_explain)
                                    }
                                  }
                                },
                                [
                                  _c("img", {
                                    staticClass: "image",
                                    attrs: { src: module.image_explain }
                                  })
                                ]
                              )
                            ])
                          : _vm._e()
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "submit" },
                  [
                    _c(
                      "v-button",
                      { attrs: { color: "submit", type: "submit" } },
                      [_vm._v("提交")]
                    )
                  ],
                  1
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("v-loading", { ref: "loading" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./source/vue/view/car/css/report.css?vue&type=style&index=2&id=75dfdd0a&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./source/vue/view/car/css/report.css?vue&type=style&index=2&id=75dfdd0a&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_report_css_vue_type_style_index_2_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./report.css?vue&type=style&index=2&id=75dfdd0a&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/car/css/report.css?vue&type=style&index=2&id=75dfdd0a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_report_css_vue_type_style_index_2_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_report_css_vue_type_style_index_2_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_report_css_vue_type_style_index_2_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_report_css_vue_type_style_index_2_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_report_css_vue_type_style_index_2_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/car/js/report.js?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./source/vue/view/car/js/report.js?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_report_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!./report.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/car/js/report.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_report_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/view/car/report.vue":
/*!****************************************!*\
  !*** ./source/vue/view/car/report.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _report_vue_vue_type_template_id_75dfdd0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.vue?vue&type=template&id=75dfdd0a&scoped=true& */ "./source/vue/view/car/report.vue?vue&type=template&id=75dfdd0a&scoped=true&");
/* harmony import */ var _js_report_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/report.js?vue&type=script&lang=js& */ "./source/vue/view/car/js/report.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/global.css?vue&type=style&index=0&lang=css& */ "./source/vue/view/public/css/global.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _public_css_public_css_vue_type_style_index_1_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=1&id=75dfdd0a&scoped=true&lang=css& */ "./source/vue/view/public/css/public.css?vue&type=style&index=1&id=75dfdd0a&scoped=true&lang=css&");
/* harmony import */ var _css_report_css_vue_type_style_index_2_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/report.css?vue&type=style&index=2&id=75dfdd0a&scoped=true&lang=css& */ "./source/vue/view/car/css/report.css?vue&type=style&index=2&id=75dfdd0a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _js_report_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _report_vue_vue_type_template_id_75dfdd0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _report_vue_vue_type_template_id_75dfdd0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "75dfdd0a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/view/car/report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/view/car/report.vue?vue&type=template&id=75dfdd0a&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./source/vue/view/car/report.vue?vue&type=template&id=75dfdd0a&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_template_id_75dfdd0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./report.vue?vue&type=template&id=75dfdd0a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/car/report.vue?vue&type=template&id=75dfdd0a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_template_id_75dfdd0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_template_id_75dfdd0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./source/vue/view/public/css/global.css?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./source/vue/view/public/css/global.css?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./global.css?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/global.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/public/css/public.css?vue&type=style&index=1&id=75dfdd0a&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./source/vue/view/public/css/public.css?vue&type=style&index=1&id=75dfdd0a&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public.css?vue&type=style&index=1&id=75dfdd0a&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=75dfdd0a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_75dfdd0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvY2FyL2pzL3JlcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvY2FyL2Nzcy9yZXBvcnQuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz81ZjJmIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9jYXIvcmVwb3J0LnZ1ZT84NTQyIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9jYXIvY3NzL3JlcG9ydC5jc3M/ZGZlMyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvY2FyL2pzL3JlcG9ydC5qcz9lZTY5Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9jYXIvcmVwb3J0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvY2FyL3JlcG9ydC52dWU/NTg5OSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL2Nzcy9nbG9iYWwuY3NzP2UwMjIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz83NGIyIl0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwiZm9ybSIsImRvbSIsImlucyIsImFqYXgiLCJwZW5kaW5nIiwiY2FsbGJhY2siLCJ2YWx1ZSIsInR5cGUiLCJhcGkiLCJjYXJBcGkiLCJtZW51IiwibmF2TWVudSIsImlkIiwicnVsZSIsInJlcG9ydCIsIm9wYWNpdHkiLCJtaXhpbnMiLCJsb2FkaW5nIiwic3RhdGUiLCJtZW51U3dpdGNoIiwiY29uZmlybSIsIm1vdW50ZWQiLCJpbml0RG9tIiwiaW5pdFN0YXRpYyIsImluaXREeW5hbWljIiwiaW5pdEluc3RhbmNlIiwiaW5pdGlhbGl6ZSIsIm1ldGhvZHMiLCJsaXN0IiwiRyIsIiRyZWZzIiwicGFyYW0iLCJvcHRpb25TZXQiLCJjaGlsZHJlbiIsImdlbk1lbnUiLCJpIiwiY3VyIiwiY3VyTWVudSIsImxlbmd0aCIsInB1c2giLCIkbmV4dFRpY2siLCJpbml0TWVudVN3aXRjaCIsIlByb21pc2UiLCJyZXNvbHZlIiwicGVuZGluZ1N0YXRlIiwicmVzIiwiY29kZSIsImVOb3RpY2UiLCJmb3JFYWNoIiwidiIsInJlc3VsdCIsInBvc2l0aW9uIiwidjEiLCJpdGVtIiwidjIiLCJvcHRpb24iLCJqc29uRGVjb2RlIiwiZGVzYyIsInRoZW4iLCJnZXRSZXBvcnQiLCJtb2R1bGUiLCJrIiwiX21vZHVsZSIsImsxIiwicG9zaXRpb25zIiwiX3Bvc2l0aW9uIiwiazIiLCJpdGVtcyIsIl9pdGVtIiwiZmluYWxseSIsImluaXRpYWxTdGF0ZSIsImNoZWNrIiwic3RhdHVzIiwiZmllbGQiLCJtc2ciLCJzdWJtaXQiLCIkaW5mbyIsImZpbHRlciIsImVycm9yIiwiY3JlYXRlT2JqZWN0IiwidlNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJqc29uRW5jb2RlIiwibW9kZSIsIiRlcnJvciIsInNldEFyZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNYQSxNQUFJLEVBQUUsVUFESztBQUVYQyxNQUZXLGtCQUVIO0FBQ0osV0FBTztBQUNIQyxVQUFJLEVBQUUsRUFESDtBQUVIQyxTQUFHLEVBQUUsRUFGRjtBQUdIQyxTQUFHLEVBQUUsRUFIRjtBQUlIQyxVQUFJLEVBQUUsRUFKSDtBQUtIQyxhQUFPLEVBQUUsRUFMTjtBQU1IQyxjQUFRLEVBQUUsRUFOUDtBQU9IQyxXQUFLLEVBQUUs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O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDclRBO0FBQUE7QUFBQTtBQUFBO0FBQWdTLENBQWdCLGlVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBUO0FBQUE7QUFBQSx3Q0FBdUgsQ0FBZ0IsdUxBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUc7QUFDckM7QUFDTDtBQUN1QjtBQUN3QjtBQUNSOzs7QUFHOUY7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLDZGQUFNO0FBQ1IsRUFBRSxzR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDekNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXdRLENBQWdCLHlTQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTVSO0FBQUE7QUFBQTtBQUFBO0FBQWdTLENBQWdCLGlVQUFHLEVBQUMsQyIsImZpbGUiOiJqcy8xOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcclxuICBpZiAoa2V5IGluIG9iaikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XHJcbiAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9ialtrZXldID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAndi1yZXBvcnQnICxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvcm06IHt9ICxcclxuICAgICAgICAgICAgZG9tOiB7fSAsXHJcbiAgICAgICAgICAgIGluczoge30gLFxyXG4gICAgICAgICAgICBhamF4OiB7fSAsXHJcbiAgICAgICAgICAgIHBlbmRpbmc6IHt9ICxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IHt9ICxcclxuICAgICAgICAgICAgdmFsdWU6IHt9ICxcclxuICAgICAgICAgICAgdHlwZTogJycgLFxyXG4gICAgICAgICAgICBhcGk6IGNhckFwaSAsXHJcbiAgICAgICAgICAgIG1lbnU6ICdvbmUnICxcclxuICAgICAgICAgICAgbmF2TWVudTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAnb25lJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+mpvumptuezu+e7n+ajgOa1iycgLFxyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICd0d28nICxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5o6n5Yi257O757uf5qOA5rWLJyAsXHJcbiAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgXSAsXHJcbiAgICAgICAgICAgIHJ1bGU6IFtdICxcclxuICAgICAgICAgICAgcmVwb3J0OiBbXSAsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEgLFxyXG4gICAgICAgIH07XHJcbiAgICB9ICxcclxuICAgIG1peGluczogW1xyXG4gICAgICAgIC8vIOWKoOi9vVxyXG4gICAgICAgIG1peGlucy5sb2FkaW5nICxcclxuICAgICAgICAvLyDnirbmgIFcclxuICAgICAgICBtaXhpbnMuc3RhdGUgLFxyXG4gICAgICAgIC8vIOiPnOWNlVxyXG4gICAgICAgIG1peGlucy5mb3JtLm1lbnVTd2l0Y2ggLFxyXG4gICAgICAgIC8vIOehruWumlxyXG4gICAgICAgIG1peGlucy5mb3JtLmNvbmZpcm0gLFxyXG4gICAgXSAsXHJcbiAgICBtb3VudGVkICgpIHtcclxuICAgICAgICB0aGlzLmluaXREb20oKTtcclxuICAgICAgICB0aGlzLmluaXRTdGF0aWMoKTtcclxuICAgICAgICB0aGlzLmluaXREeW5hbWljKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SW5zdGFuY2UoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH0gLFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGluaXREb20gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5saXN0ID0gRyh0aGlzLiRyZWZzLmxpc3QpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0U3RhdGljICgpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLmlkID0gdGhpcy5wYXJhbS5pZDtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgaW5pdER5bmFtaWMgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5vcHRpb25TZXQgPSB0aGlzLmRvbS5saXN0LmNoaWxkcmVuKCk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRJbnN0YW5jZSAoKSB7XHJcblxyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDnlJ/miJAgbWVudVxyXG4gICAgICAgIGdlbk1lbnUgKCkge1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBjdXIgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgbWVudSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY3VyTWVudSA9IG51bGw7XHJcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdGhpcy5ydWxlLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLnJ1bGVbaV07XHJcbiAgICAgICAgICAgICAgICBtZW51LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBjdXIuaWQgLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGN1ci5uYW1lICxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudSA9IGN1ci5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5hdk1lbnUgPSBtZW51O1xyXG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRNZW51U3dpdGNoKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0aWFsaXplICgpIHtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1N0YXRlKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAvLyDojrflj5bop4TliJlcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBpLnJ1bGUoKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZU5vdGljZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnJlc3VsdCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnBvc2l0aW9uLmZvckVhY2goKHYxKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2MS5pdGVtLmZvckVhY2goKHYyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdjIub3B0aW9uID0gRy5qc29uRGVjb2RlKHYyLm9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdjIuZGVzYyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVsZSA9IHJlcztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0RHluYW1pYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbk1lbnUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkuZ2V0UmVwb3J0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnBhcmFtLmlkICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAsIChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSA9PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lTm90aWNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0ID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbyDnqI3kvZzlpITnkIZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVsZS5mb3JFYWNoKChtb2R1bGUsaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9tb2R1bGUgPSByZXNba10gPyByZXNba10gOiB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUucmVzdWx0ID0gcmVzW2tdID8gX21vZHVsZS5yZXN1bHQgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUucG9zaXRpb24uZm9yRWFjaCgocG9zaXRpb24gLCBrMSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBfbW9kdWxlLnBvc2l0aW9uID8gX21vZHVsZS5wb3NpdGlvbiA6IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfcG9zaXRpb24gPSBwb3NpdGlvbnNbazFdID8gcG9zaXRpb25zW2sxXSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5pdGVtLmZvckVhY2goKGl0ZW0gLCBrMikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBfcG9zaXRpb24uaXRlbSA/IF9wb3NpdGlvbi5pdGVtIDogW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfaXRlbSA9IGl0ZW1zW2syXSA/IGl0ZW1zW2syXSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IF9pdGVtLnZhbHVlID8gX2l0ZW0udmFsdWUgOiBpdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kZXNjID0gX2l0ZW0uZGVzYyA/IF9pdGVtLmRlc2MgOiBpdGVtLmRlc2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGNoZWNrICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSAsXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJycgLFxyXG4gICAgICAgICAgICAgICAgbXNnOiAnJyAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHN1Ym1pdCAoKSB7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGluZm8oJ+ivt+axguS4rS4uLuivt+iAkOW/g+etieW+hScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyID0gdGhpcy5jaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXIuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IEcuY3JlYXRlT2JqZWN0KHRoaXMuZXJyb3IgLCB7W2ZpbHRlci5maWVsZF06IGZpbHRlci5tc2d9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZTY3JvbGwoZmlsdGVyLmZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ydWxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXBvcnQgPSBHLmpzb25FbmNvZGUodGhpcy5ydWxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1N0YXRlKCdsb2FkaW5nJyAsICdzdWJtaXQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWpheC5zdWJtaXQgPSB0aGlzLmFwaVt0aGlzLnBhcmFtLm1vZGVdKHRoaXMuZm9ybSAsIChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZSgnbG9hZGluZycgLCAnc3VibWl0JyAsICdzdWJtaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZXJyb3IocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLnNldEFyZ3ModGhpcy5hamF4LnN1Ym1pdCAsICdzdWJtaXQnKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm0oJ+i9pui+huWIl+ihqCcgLCAnL2Nhci9saXN0Jyk7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ2xvYWRpbmcnICwgJ3N1Ym1pdCcgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG4gICAgfSAsXHJcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlLWNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJtb2R1bGUtbmF2XCIsIHsgYXR0cnM6IHsgdG9wUm91dGU6IF92bS50b3BSb3V0ZSwgcG9zOiBfdm0ucG9zIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2R1bGUtY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInYtbWVudS1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICByZWY6IFwibWVudS1zd2l0Y2hcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLm5hdk1lbnUgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHJlZjogXCJsaXN0XCIsIHN0YXRpY0NsYXNzOiBcImxpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5ydWxlLCBmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBtb2R1bGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2R1bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1pZFwiOiBtb2R1bGUuaWQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmqKHlnZfmo4DmtYvnu5PmnpxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZHVsZS5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZHVsZS5yZXN1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBtb2R1bGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWl5qOA5rWL57uT5p6cLi4uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IG1vZHVsZS5yZXN1bHQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wobW9kdWxlLnBvc2l0aW9uLCBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogcG9zaXRpb24uaWQsIHN0YXRpY0NsYXNzOiBcIml0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5L2N572u5YiG57uE77yaXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwb3NpdGlvbi5ncm91cC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcIsKgXCIucmVwZWF0KDgpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLmo4DmtYvkvY3nva7vvJpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24ubWFwX3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcG9zaXRpb24ubmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuOAkOaYoOWwhOWAvO+8mlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLm1hcF92YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuOAkVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcG9zaXRpb24ubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wocG9zaXRpb24uaXRlbSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaXRlbS5pZCwgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tYXBfdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLm5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLjgJDmmKDlsITlgLzvvJpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm1hcF92YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuOAkVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaW9Hcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChpdGVtLm9wdGlvbiwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdi5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogdi5rZXkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Modi52YWx1ZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXNjXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmRlc2MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5kZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIue7k+aenOaPj+i/sFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogaXRlbS5kZXNjIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByZXZpZXdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmdW5jdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wYWNpdHkgPSAwLjJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi6YCP5piO5bqm77yaMjAlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wYWNpdHkgPSAwLjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi6YCP5piO5bqm77yaNTAlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wYWNpdHkgPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIumAj+aYjuW6pu+8mjEwMCVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwib3BhY2l0eTogXCIgKyBfdm0ub3BhY2l0eSArIFwiO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9MaW5rKG1vZHVsZS5pbWFnZV9leHBsYWluKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IG1vZHVsZS5pbWFnZV9leHBsYWluIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sb3I6IFwic3VibWl0XCIsIHR5cGU6IFwic3VibWl0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmj5DkuqRcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1sb2FkaW5nXCIsIHsgcmVmOiBcImxvYWRpbmdcIiB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3JlcG9ydC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD03NWRmZGQwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3JlcG9ydC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD03NWRmZGQwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL3JlcG9ydC5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4vcmVwb3J0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yZXBvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1ZGZkZDBhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2pzL3JlcG9ydC5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vanMvcmVwb3J0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi9wdWJsaWMvY3NzL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi4vcHVibGljL2Nzcy9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NzVkZmRkMGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTIgZnJvbSBcIi4vY3NzL3JlcG9ydC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD03NWRmZGQwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzVkZmRkMGFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx3b3JrXFxcXGNvZGVcXFxcY2FyXFxcXHB1YmxpY1xcXFxtb2R1bGVcXFxcYWRtaW5cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc1ZGZkZDBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc1ZGZkZDBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9yZXBvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1ZGZkZDBhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc1ZGZkZDBhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL3ZpZXcvY2FyL3JlcG9ydC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVwb3J0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NWRmZGQwYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9nbG9iYWwuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9nbG9iYWwuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTc1ZGZkZDBhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTc1ZGZkZDBhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==