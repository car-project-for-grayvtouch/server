(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

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
                                      return _vm.toLink(module.image)
                                    }
                                  }
                                },
                                [
                                  _c("img", {
                                    staticClass: "image",
                                    attrs: { src: module.image }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvY2FyL2pzL3JlcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvY2FyL2Nzcy9yZXBvcnQuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvY2FyL3JlcG9ydC52dWU/ODU0MiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvY2FyL2Nzcy9yZXBvcnQuY3NzP2RmZTMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2Nhci9qcy9yZXBvcnQuanM/ZWU2OSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvY2FyL3JlcG9ydC52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2Nhci9yZXBvcnQudnVlPzU4OTkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvZ2xvYmFsLmNzcz9lMDIyIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL3B1YmxpYy5jc3M/NzRiMiJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsImZvcm0iLCJkb20iLCJpbnMiLCJhamF4IiwicGVuZGluZyIsImNhbGxiYWNrIiwidmFsdWUiLCJ0eXBlIiwiYXBpIiwiY2FyQXBpIiwibWVudSIsIm5hdk1lbnUiLCJpZCIsInJ1bGUiLCJyZXBvcnQiLCJvcGFjaXR5IiwibWl4aW5zIiwibG9hZGluZyIsInN0YXRlIiwibWVudVN3aXRjaCIsImNvbmZpcm0iLCJtb3VudGVkIiwiaW5pdERvbSIsImluaXRTdGF0aWMiLCJpbml0RHluYW1pYyIsImluaXRJbnN0YW5jZSIsImluaXRpYWxpemUiLCJtZXRob2RzIiwibGlzdCIsIkciLCIkcmVmcyIsInBhcmFtIiwib3B0aW9uU2V0IiwiY2hpbGRyZW4iLCJnZW5NZW51IiwiaSIsImN1ciIsImN1ck1lbnUiLCJsZW5ndGgiLCJwdXNoIiwiJG5leHRUaWNrIiwiaW5pdE1lbnVTd2l0Y2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInBlbmRpbmdTdGF0ZSIsInJlcyIsImNvZGUiLCJlTm90aWNlIiwiZm9yRWFjaCIsInYiLCJyZXN1bHQiLCJwb3NpdGlvbiIsInYxIiwiaXRlbSIsInYyIiwib3B0aW9uIiwianNvbkRlY29kZSIsImRlc2MiLCJ0aGVuIiwiZ2V0UmVwb3J0IiwibW9kdWxlIiwiayIsIl9tb2R1bGUiLCJrMSIsInBvc2l0aW9ucyIsIl9wb3NpdGlvbiIsImsyIiwiaXRlbXMiLCJfaXRlbSIsImZpbmFsbHkiLCJpbml0aWFsU3RhdGUiLCJjaGVjayIsInN0YXR1cyIsImZpZWxkIiwibXNnIiwic3VibWl0IiwiJGluZm8iLCJmaWx0ZXIiLCJlcnJvciIsImNyZWF0ZU9iamVjdCIsInZTY3JvbGwiLCJjb25zb2xlIiwibG9nIiwianNvbkVuY29kZSIsIm1vZGUiLCIkZXJyb3IiLCJzZXRBcmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDWEEsTUFBSSxFQUFFLFVBREs7QUFFWEMsTUFGVyxrQkFFSDtBQUNKLFdBQU87QUFDSEMsVUFBSSxFQUFFLEVBREg7QUFFSEMsU0FBRyxFQUFFLEVBRkY7QUFHSEMsU0FBRyxFQUFFLEVBSEY7QUFJSEMsVUFBSSxFQUFFLEVBSkg7QUFLSEMsYUFBTyxFQUFFLEVBTE47QUFNSEMsY0FBUSxFQUFFLEVBTlA7QUFPSEMsV0FBSyxFQUFFLEVBUEo7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Ozs7Ozs7Ozs7Ozs7OztBQ3JUQTtBQUFBO0FBQUE7QUFBQTtBQUFnUyxDQUFnQixpVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwVDtBQUFBO0FBQUEsd0NBQXVILENBQWdCLHVMQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlHO0FBQ3JDO0FBQ0w7QUFDdUI7QUFDd0I7QUFDUjs7O0FBRzlGO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3pDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUF3USxDQUFnQix5U0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E1UjtBQUFBO0FBQUE7QUFBQTtBQUFnUyxDQUFnQixpVUFBRyxFQUFDLEMiLCJmaWxlIjoianMvMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgaWYgKGtleSBpbiBvYmopIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xyXG4gICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ3YtcmVwb3J0JyAsXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmb3JtOiB7fSAsXHJcbiAgICAgICAgICAgIGRvbToge30gLFxyXG4gICAgICAgICAgICBpbnM6IHt9ICxcclxuICAgICAgICAgICAgYWpheDoge30gLFxyXG4gICAgICAgICAgICBwZW5kaW5nOiB7fSAsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiB7fSAsXHJcbiAgICAgICAgICAgIHZhbHVlOiB7fSAsXHJcbiAgICAgICAgICAgIHR5cGU6ICcnICxcclxuICAgICAgICAgICAgYXBpOiBjYXJBcGkgLFxyXG4gICAgICAgICAgICBtZW51OiAnb25lJyAsXHJcbiAgICAgICAgICAgIG5hdk1lbnU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ29uZScgLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICfpqb7pqbbns7vnu5/mo4DmtYsnICxcclxuICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAndHdvJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+aOp+WItuezu+e7n+ajgOa1iycgLFxyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIF0gLFxyXG4gICAgICAgICAgICBydWxlOiBbXSAsXHJcbiAgICAgICAgICAgIHJlcG9ydDogW10gLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxICxcclxuICAgICAgICB9O1xyXG4gICAgfSAsXHJcbiAgICBtaXhpbnM6IFtcclxuICAgICAgICAvLyDliqDovb1cclxuICAgICAgICBtaXhpbnMubG9hZGluZyAsXHJcbiAgICAgICAgLy8g54q25oCBXHJcbiAgICAgICAgbWl4aW5zLnN0YXRlICxcclxuICAgICAgICAvLyDoj5zljZVcclxuICAgICAgICBtaXhpbnMuZm9ybS5tZW51U3dpdGNoICxcclxuICAgICAgICAvLyDnoa7lrppcclxuICAgICAgICBtaXhpbnMuZm9ybS5jb25maXJtICxcclxuICAgIF0gLFxyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0RG9tKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U3RhdGljKCk7XHJcbiAgICAgICAgdGhpcy5pbml0RHluYW1pYygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9ICxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBpbml0RG9tICgpIHtcclxuICAgICAgICAgICAgdGhpcy5kb20ubGlzdCA9IEcodGhpcy4kcmVmcy5saXN0KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgaW5pdFN0YXRpYyAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5pZCA9IHRoaXMucGFyYW0uaWQ7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXREeW5hbWljICgpIHtcclxuICAgICAgICAgICAgdGhpcy5kb20ub3B0aW9uU2V0ID0gdGhpcy5kb20ubGlzdC5jaGlsZHJlbigpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0SW5zdGFuY2UgKCkge1xyXG5cclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g55Sf5oiQIG1lbnVcclxuICAgICAgICBnZW5NZW51ICgpIHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICBsZXQgY3VyID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IG1lbnUgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGN1ck1lbnUgPSBudWxsO1xyXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHRoaXMucnVsZS5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY3VyID0gdGhpcy5ydWxlW2ldO1xyXG4gICAgICAgICAgICAgICAgbWVudS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogY3VyLmlkICxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjdXIubmFtZSAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUgPSBjdXIuaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5uYXZNZW51ID0gbWVudTtcclxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TWVudVN3aXRjaCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgaW5pdGlhbGl6ZSAoKSB7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdTdGF0ZSgnbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgLy8g6I635Y+W6KeE5YiZXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwaS5ydWxlKChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVOb3RpY2UocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi5yZXN1bHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi5wb3NpdGlvbi5mb3JFYWNoKCh2MSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdjEuaXRlbS5mb3JFYWNoKCh2MikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYyLm9wdGlvbiA9IEcuanNvbkRlY29kZSh2Mi5vcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYyLmRlc2MgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bGUgPSByZXM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdER5bmFtaWMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5NZW51KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpLmdldFJlcG9ydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wYXJhbS5pZCAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZU5vdGljZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydCA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG8g56iN5L2c5aSE55CGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bGUuZm9yRWFjaCgobW9kdWxlLGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfbW9kdWxlID0gcmVzW2tdID8gcmVzW2tdIDoge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnJlc3VsdCA9IHJlc1trXSA/IF9tb2R1bGUucmVzdWx0IDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnBvc2l0aW9uLmZvckVhY2goKHBvc2l0aW9uICwgazEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gX21vZHVsZS5wb3NpdGlvbiA/IF9tb2R1bGUucG9zaXRpb24gOiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX3Bvc2l0aW9uID0gcG9zaXRpb25zW2sxXSA/IHBvc2l0aW9uc1trMV0gOiB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uaXRlbS5mb3JFYWNoKChpdGVtICwgazIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gX3Bvc2l0aW9uLml0ZW0gPyBfcG9zaXRpb24uaXRlbSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2l0ZW0gPSBpdGVtc1trMl0gPyBpdGVtc1trMl0gOiB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSBfaXRlbS52YWx1ZSA/IF9pdGVtLnZhbHVlIDogaXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGVzYyA9IF9pdGVtLmRlc2MgPyBfaXRlbS5kZXNjIDogaXRlbS5kZXNjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBjaGVjayAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUgLFxyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICcnICxcclxuICAgICAgICAgICAgICAgIG1zZzogJycgLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBzdWJtaXQgKCkge1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZy5zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpbmZvKCfor7fmsYLkuK0uLi7or7fogJDlv4PnrYnlvoUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlciA9IHRoaXMuY2hlY2soKTtcclxuICAgICAgICAgICAgICAgIGlmICghZmlsdGVyLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBHLmNyZWF0ZU9iamVjdCh0aGlzLmVycm9yICwge1tmaWx0ZXIuZmllbGRdOiBmaWx0ZXIubXNnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52U2Nyb2xsKGZpbHRlci5maWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucnVsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVwb3J0ID0gRy5qc29uRW5jb2RlKHRoaXMucnVsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdTdGF0ZSgnbG9hZGluZycgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFqYXguc3VibWl0ID0gdGhpcy5hcGlbdGhpcy5wYXJhbS5tb2RlXSh0aGlzLmZvcm0gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ2xvYWRpbmcnICwgJ3N1Ym1pdCcgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVycm9yKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zZXRBcmdzKHRoaXMuYWpheC5zdWJtaXQgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtKCfovabovobliJfooagnICwgJy9jYXIvbGlzdCcpO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlKCdsb2FkaW5nJyAsICdzdWJtaXQnICwgJ3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgIH0gLFxyXG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZHVsZS1jb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwibW9kdWxlLW5hdlwiLCB7IGF0dHJzOiB7IHRvcFJvdXRlOiBfdm0udG9wUm91dGUsIHBvczogX3ZtLnBvcyB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpblwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ2LW1lbnUtc3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgcmVmOiBcIm1lbnUtc3dpdGNoXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGRhdGE6IF92bS5uYXZNZW51IH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyByZWY6IFwibGlzdFwiLCBzdGF0aWNDbGFzczogXCJsaXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucnVsZSwgZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbW9kdWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kdWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtaWRcIjogbW9kdWxlLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5qih5Z2X5qOA5rWL57uT5p6cXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2R1bGUucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2R1bGUucmVzdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbW9kdWxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHRhcmVhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeajgOa1i+e7k+aenC4uLlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBtb2R1bGUucmVzdWx0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXN1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKG1vZHVsZS5wb3NpdGlvbiwgZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHBvc2l0aW9uLmlkLCBzdGF0aWNDbGFzczogXCJpdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuS9jee9ruWIhue7hO+8mlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocG9zaXRpb24uZ3JvdXAubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXCLCoFwiLnJlcGVhdCg4KSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5qOA5rWL5L2N572u77yaXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLm1hcF92YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBvc2l0aW9uLm5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLjgJDmmKDlsITlgLzvvJpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5tYXBfdmFsdWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLjgJFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBvc2l0aW9uLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHBvc2l0aW9uLml0ZW0sIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGl0ZW0uaWQsIHN0YXRpY0NsYXNzOiBcImxpbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubWFwX3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5uYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi44CQ5pig5bCE5YC877yaXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tYXBfdmFsdWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLjgJFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0ubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlvR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbS5vcHRpb24sIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHYua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IHYua2V5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHYudmFsdWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGVzY1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5kZXNjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLnu5Pmnpzmj4/ov7BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGl0ZW0uZGVzYyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVuY3Rpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGFjaXR5ID0gMC4yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIumAj+aYjuW6pu+8mjIwJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGFjaXR5ID0gMC41XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIumAj+aYjuW6pu+8mjUwJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImJsdWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcGFjaXR5ID0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLpgI/mmI7luqbvvJoxMDAlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIm9wYWNpdHk6IFwiICsgX3ZtLm9wYWNpdHkgKyBcIjtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvTGluayhtb2R1bGUuaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogbW9kdWxlLmltYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sb3I6IFwic3VibWl0XCIsIHR5cGU6IFwic3VibWl0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmj5DkuqRcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1sb2FkaW5nXCIsIHsgcmVmOiBcImxvYWRpbmdcIiB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3JlcG9ydC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD03NWRmZGQwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3JlcG9ydC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD03NWRmZGQwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL3JlcG9ydC5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4vcmVwb3J0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yZXBvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1ZGZkZDBhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2pzL3JlcG9ydC5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vanMvcmVwb3J0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi9wdWJsaWMvY3NzL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi4vcHVibGljL2Nzcy9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NzVkZmRkMGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTIgZnJvbSBcIi4vY3NzL3JlcG9ydC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD03NWRmZGQwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzVkZmRkMGFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx3b3JrXFxcXGNvZGVcXFxcY2FyXFxcXHB1YmxpY1xcXFxtb2R1bGVcXFxcYWRtaW5cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc1ZGZkZDBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc1ZGZkZDBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9yZXBvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1ZGZkZDBhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc1ZGZkZDBhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL3ZpZXcvY2FyL3JlcG9ydC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVwb3J0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NWRmZGQwYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9nbG9iYWwuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9nbG9iYWwuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTc1ZGZkZDBhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTc1ZGZkZDBhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==