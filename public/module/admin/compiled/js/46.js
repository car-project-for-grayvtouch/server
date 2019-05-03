(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/story/js/thing.js?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./source/vue/view/story/js/thing.js?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-brand",
  data: function data() {
    return {
      form: {
        hidden: 'n',
        weight: 0,
        score: 0
      },
      error: {},
      ajax: {
        get: null,
        submit: null
      },
      dom: {},
      ins: {
        loading: null,
        image: null
      },
      pending: {
        submit: null
      },
      data: {},
      callback: {
        image: null
      },
      api: storyApi,
      // 图片
      image: {}
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.initDom();
    this.initInstance();
    this.getData();
  },
  mixins: [mixins.state, mixins.loading, mixins.form.image, mixins.form.get, mixins.form.confirm],
  methods: {
    initDom: function initDom() {},
    initInstance: function initInstance() {},
    // 获取数据
    check: function check(data) {
      return {
        status: true,
        field: '',
        msg: ''
      };
    },
    submit: function submit() {
      var _this = this;

      new Promise(function (resolve) {
        // 上传基本数据
        if (_this.pending.submit) {
          _this.$info('请求中...请耐心等待');

          return;
        }

        var filter = _this.check();

        if (!filter.status) {
          _this.error[filter.field] = filter.msg;
          vScroll(filter.field);
          return;
        }

        _this.pending.submit = true;

        _this.ins.loading.show();

        _this.ajax.submit = _this.api[_this.param.mode](_this.form, function (res, code) {
          _this.error = {};

          if (code != 200) {
            _this.initialState('loading', 'submit', 'submit');

            if (code == 400) {
              _this.error = res;
              vScroll(G.firstKey(res));
              return;
            }

            _this.$error(res);

            return;
          }

          _this.form.id = res;
          resolve();
        });

        _this.ins.loading.setArgs(_this.ajax.submit, 'submit');
      }).then(function () {
        // 上传图片
        return new Promise(function (resolve) {
          if (_this.ins.image.empty()) {
            resolve(false);
            return;
          }

          _this.callback.image = function (res, code) {
            if (code != 200) {
              _this.eNotice(res);

              resolve(false);
              return;
            }

            _this.image = res;
            resolve(true);
          };

          _this.ins.image.upload();
        });
      }).then(function (next) {
        // 更新品牌 logo
        return new Promise(function (resolve) {
          if (!next) {
            resolve(true);
            return;
          }

          _this.api.image({
            id: _this.form.id,
            image: _this.image.url
          }, function (res, code) {
            resolve();

            if (code != 200) {
              _this.eNotice(res);

              return;
            }
          });
        });
      }).then(function () {
        _this.confirm('故事列表', '/story/list');
      }).finally(function () {
        _this.initialState('loading', 'submit', 'submit');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/global.css?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/global.css?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=00977a29&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=00977a29&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/story/css/thing.css?vue&type=style&index=2&id=00977a29&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/story/css/thing.css?vue&type=style&index=2&id=00977a29&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/story/thing.vue?vue&type=template&id=00977a29&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/story/thing.vue?vue&type=template&id=00977a29&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
                      class: _vm.getClass(_vm.error.title),
                      attrs: { id: "title" }
                    },
                    [
                      _c("td", [_vm._v("标题")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.title,
                              expression: "form.title"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.title },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "title", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }, [_vm._v("*")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }, [
                          _vm._v("例如：2016 Nissan Quest")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.title))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.username),
                      attrs: { id: "username" }
                    },
                    [
                      _c("td", [_vm._v("用户名称")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.username,
                              expression: "form.username"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.username },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "username",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }, [_vm._v("*")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }, [
                          _vm._v("例如：陈先生")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.username))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.logo_explain),
                      attrs: { id: "logo" }
                    },
                    [
                      _c("td", [_vm._v("图片")]),
                      _vm._v(" "),
                      _c("td", { ref: "image-container" }, [
                        _c("div", { staticClass: "upload-image" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("div", { staticClass: "init-show-image-list" }, [
                            _vm.param.mode == "edit" && _vm.form.image_explain
                              ? _c("img", {
                                  staticClass: "init-show-image",
                                  attrs: { src: _vm.form.image_explain }
                                })
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "preview-images hide" }),
                          _vm._v(" "),
                          _vm._m(1)
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.image))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.content),
                      attrs: { id: "content" }
                    },
                    [
                      _c("td", [_vm._v("内容")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.content,
                              expression: "form.content"
                            }
                          ],
                          staticClass: "form-textarea",
                          domProps: { value: _vm.form.content },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "content", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }, [_vm._v("*")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.letter))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.score),
                      attrs: { id: "score" }
                    },
                    [
                      _c("td", [_vm._v("分数")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.score,
                              expression: "form.score"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "number", step: "0.01" },
                          domProps: { value: _vm.form.score },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "score", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }, [_vm._v("*")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }, [
                          _vm._v("例如：9，最多允许两位小数")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.score))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.hidden),
                      attrs: { id: "hidden" }
                    },
                    [
                      _c("td", [_vm._v("隐藏？")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "RadioGroup",
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
                                "Radio",
                                { key: k, attrs: { label: k } },
                                [_vm._v(_vm._s(v))]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "necessary" }, [
                            _vm._v("*")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "tip" }, [
                            _vm._v("默认：否")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "msg" }, [
                            _vm._v(_vm._s(_vm.error.hidden))
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
                        _c("span", { staticClass: "necessary" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }, [
                          _vm._v("默认：0，仅允许输入整数")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.weight))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(2)
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
    return _c("div", { staticClass: "select-images" }, [
      _c("div", { staticClass: "upload-show" }, [
        _c("div", { staticClass: "image-line" }, [
          _c("img", {
            staticClass: "image upload-image-btn",
            attrs: { src: "" }
          }),
          _c("span", { staticClass: "selected-count hide" }, [_vm._v("10")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "text-line" }, [_vm._v("请选择要上传的图片")]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "clear-selected",
            attrs: { title: "清空已选择的图片" }
          },
          [_c("img", { staticClass: "image", attrs: { src: "" } })]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "upload-images-input",
          attrs: { type: "file", name: "upload_images" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tip" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "upload-image-list hide" }, [
      _c("div", { staticClass: "upload-title" }, [_vm._v("待上传列表")]),
      _vm._v(" "),
      _c("div", { staticClass: "image-list" }, [
        _c("div", { staticClass: "list-content list-title" }, [
          _c("div", { staticClass: "item div-preview" }, [_vm._v("图片预览")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-type" }, [_vm._v("类型")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-size" }, [_vm._v("大小")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-speed" }, [_vm._v("速度")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-status" }, [_vm._v("状态")]),
          _vm._v(" "),
          _c("div", { staticClass: "item div-opr" }, [_vm._v("操作")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "list-content list-body" })
      ])
    ])
  },
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

/***/ "./source/vue/view/public/css/public.css?vue&type=style&index=1&id=00977a29&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./source/vue/view/public/css/public.css?vue&type=style&index=1&id=00977a29&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public.css?vue&type=style&index=1&id=00977a29&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=00977a29&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/story/css/thing.css?vue&type=style&index=2&id=00977a29&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./source/vue/view/story/css/thing.css?vue&type=style&index=2&id=00977a29&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_2_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./thing.css?vue&type=style&index=2&id=00977a29&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/story/css/thing.css?vue&type=style&index=2&id=00977a29&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_2_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_2_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_2_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_2_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_2_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/story/js/thing.js?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./source/vue/view/story/js/thing.js?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_thing_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!./thing.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/story/js/thing.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_thing_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/view/story/thing.vue":
/*!*****************************************!*\
  !*** ./source/vue/view/story/thing.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thing_vue_vue_type_template_id_00977a29_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thing.vue?vue&type=template&id=00977a29&scoped=true& */ "./source/vue/view/story/thing.vue?vue&type=template&id=00977a29&scoped=true&");
/* harmony import */ var _js_thing_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/thing.js?vue&type=script&lang=js& */ "./source/vue/view/story/js/thing.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/global.css?vue&type=style&index=0&lang=css& */ "./source/vue/view/public/css/global.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _public_css_public_css_vue_type_style_index_1_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=1&id=00977a29&scoped=true&lang=css& */ "./source/vue/view/public/css/public.css?vue&type=style&index=1&id=00977a29&scoped=true&lang=css&");
/* harmony import */ var _css_thing_css_vue_type_style_index_2_id_00977a29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/thing.css?vue&type=style&index=2&id=00977a29&scoped=true&lang=css& */ "./source/vue/view/story/css/thing.css?vue&type=style&index=2&id=00977a29&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _js_thing_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _thing_vue_vue_type_template_id_00977a29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _thing_vue_vue_type_template_id_00977a29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "00977a29",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/view/story/thing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/view/story/thing.vue?vue&type=template&id=00977a29&scoped=true&":
/*!************************************************************************************!*\
  !*** ./source/vue/view/story/thing.vue?vue&type=template&id=00977a29&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_thing_vue_vue_type_template_id_00977a29_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./thing.vue?vue&type=template&id=00977a29&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/story/thing.vue?vue&type=template&id=00977a29&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_thing_vue_vue_type_template_id_00977a29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_thing_vue_vue_type_template_id_00977a29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvc3RvcnkvanMvdGhpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL2Nzcy9wdWJsaWMuY3NzP2Y2OGIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3N0b3J5L2Nzcy90aGluZy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3N0b3J5L3RoaW5nLnZ1ZT9jNzk3Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL2dsb2JhbC5jc3M/ZTAyMiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL2Nzcy9wdWJsaWMuY3NzPzZkNTkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3N0b3J5L2Nzcy90aGluZy5jc3M/M2E0YSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvc3RvcnkvanMvdGhpbmcuanM/ZTVmYSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvc3RvcnkvdGhpbmcudnVlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9zdG9yeS90aGluZy52dWU/NzRmOSJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsImZvcm0iLCJoaWRkZW4iLCJ3ZWlnaHQiLCJzY29yZSIsImVycm9yIiwiYWpheCIsImdldCIsInN1Ym1pdCIsImRvbSIsImlucyIsImxvYWRpbmciLCJpbWFnZSIsInBlbmRpbmciLCJjYWxsYmFjayIsImFwaSIsInN0b3J5QXBpIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJpbml0RG9tIiwiaW5pdEluc3RhbmNlIiwiZ2V0RGF0YSIsIm1peGlucyIsInN0YXRlIiwiY29uZmlybSIsIm1ldGhvZHMiLCJjaGVjayIsInN0YXR1cyIsImZpZWxkIiwibXNnIiwiUHJvbWlzZSIsInJlc29sdmUiLCIkaW5mbyIsImZpbHRlciIsInZTY3JvbGwiLCJzaG93IiwicGFyYW0iLCJtb2RlIiwicmVzIiwiY29kZSIsImluaXRpYWxTdGF0ZSIsIkciLCJmaXJzdEtleSIsIiRlcnJvciIsImlkIiwic2V0QXJncyIsInRoZW4iLCJlbXB0eSIsImVOb3RpY2UiLCJ1cGxvYWQiLCJuZXh0IiwidXJsIiwiZmluYWxseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWU7QUFDWEEsTUFBSSxFQUFFLFNBREs7QUFFWEMsTUFGVyxrQkFFSDtBQUNKLFdBQU87QUFDSEMsVUFBSSxFQUFFO0FBQ0ZDLGNBQU0sRUFBRSxHQUROO0FBRUZDLGNBQU0sRUFBRSxDQUZOO0FBR0ZDLGFBQUssRUFBRTtBQUhMLE9BREg7QUFNSEMsV0FBSyxFQUFFLEVBTko7QUFPSEMsVUFBSSxFQUFFO0FBQ0ZDLFdBQUcsRUFBRSxJQURIO0FBRUZDLGNBQU0sRUFBRTtBQUZOLE9BUEg7QUFXSEMsU0FBRyxFQUFFLEVBWEY7QUFZSEMsU0FBRyxFQUFFO0FBQ0RDLGVBQU8sRUFBRSxJQURSO0FBRURDLGFBQUssRUFBRTtBQUZOLE9BWkY7QUFnQkhDLGFBQU8sRUFBRTtBQUNMTCxjQUFNLEVBQUU7QUFESCxPQWhCTjtBQW1CSFIsVUFBSSxFQUFFLEVBbkJIO0FBb0JIYyxjQUFRLEVBQUU7QUFDTkYsYUFBSyxFQUFFO0FBREQsT0FwQlA7QUF1QkhHLFNBQUcsRUFBRUMsUUF2QkY7QUF3Qkg7QUFDQUosV0FBSyxFQUFFO0FBekJKLEtBQVA7QUE2QkgsR0FoQ1U7QUFpQ1hLLFNBakNXLHFCQWlDQSxDQUVWLENBbkNVO0FBb0NYQyxTQXBDVyxxQkFvQ0E7QUFDUCxTQUFLQyxPQUFMO0FBQ0EsU0FBS0MsWUFBTDtBQUNBLFNBQUtDLE9BQUw7QUFDSCxHQXhDVTtBQXlDWEMsUUFBTSxFQUFFLENBQ0pBLE1BQU0sQ0FBQ0MsS0FESCxFQUVKRCxNQUFNLENBQUNYLE9BRkgsRUFHSlcsTUFBTSxDQUFDckIsSUFBUCxDQUFZVyxLQUhSLEVBSUpVLE1BQU0sQ0FBQ3JCLElBQVAsQ0FBWU0sR0FKUixFQUtKZSxNQUFNLENBQUNyQixJQUFQLENBQVl1QixPQUxSLENBekNHO0FBZ0RYQyxTQUFPLEVBQUU7QUFDTE4sV0FESyxxQkFDTSxDQUVWLENBSEk7QUFLTEMsZ0JBTEssMEJBS1csQ0FFZixDQVBJO0FBU0w7QUFDQU0sU0FWSyxpQkFVRTFCLElBVkYsRUFVUTtBQUNULGFBQU87QUFDSDJCLGNBQU0sRUFBRSxJQURMO0FBRUhDLGFBQUssRUFBRSxFQUZKO0FBR0hDLFdBQUcsRUFBRTtBQUhGLE9BQVA7QUFLSCxLQWhCSTtBQWtCTHJCLFVBbEJLLG9CQWtCSztBQUFBOztBQUNOLFVBQUlzQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3JCO0FBQ0EsWUFBSSxLQUFJLENBQUNsQixPQUFMLENBQWFMLE1BQWpCLEVBQXlCO0FBQ3JCLGVBQUksQ0FBQ3dCLEtBQUwsQ0FBVyxhQUFYOztBQUNBO0FBQ0g7O0FBQ0QsWUFBSUMsTUFBTSxHQUFHLEtBQUksQ0FBQ1AsS0FBTCxFQUFiOztBQUNBLFlBQUksQ0FBQ08sTUFBTSxDQUFDTixNQUFaLEVBQW9CO0FBQ2hCLGVBQUksQ0FBQ3RCLEtBQUwsQ0FBVzRCLE1BQU0sQ0FBQ0wsS0FBbEIsSUFBMkJLLE1BQU0sQ0FBQ0osR0FBbEM7QUFDQUssaUJBQU8sQ0FBQ0QsTUFBTSxDQUFDTCxLQUFSLENBQVA7QUFDQTtBQUNIOztBQUNELGFBQUksQ0FBQ2YsT0FBTCxDQUFhTCxNQUFiLEdBQXNCLElBQXRCOztBQUNBLGFBQUksQ0FBQ0UsR0FBTCxDQUFTQyxPQUFULENBQWlCd0IsSUFBakI7O0FBQ0EsYUFBSSxDQUFDN0IsSUFBTCxDQUFVRSxNQUFWLEdBQW1CLEtBQUksQ0FBQ08sR0FBTCxDQUFTLEtBQUksQ0FBQ3FCLEtBQUwsQ0FBV0MsSUFBcEIsRUFBMEIsS0FBSSxDQUFDcEMsSUFBL0IsRUFBc0MsVUFBQ3FDLEdBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUNyRSxlQUFJLENBQUNsQyxLQUFMLEdBQWEsRUFBYjs7QUFDQSxjQUFJa0MsSUFBSSxJQUFJLEdBQVosRUFBaUI7QUFDYixpQkFBSSxDQUFDQyxZQUFMLENBQWtCLFNBQWxCLEVBQThCLFFBQTlCLEVBQXlDLFFBQXpDOztBQUNBLGdCQUFJRCxJQUFJLElBQUksR0FBWixFQUFpQjtBQUNiLG1CQUFJLENBQUNsQyxLQUFMLEdBQWFpQyxHQUFiO0FBQ0FKLHFCQUFPLENBQUNPLENBQUMsQ0FBQ0MsUUFBRixDQUFXSixHQUFYLENBQUQsQ0FBUDtBQUNBO0FBQ0g7O0FBQ0QsaUJBQUksQ0FBQ0ssTUFBTCxDQUFZTCxHQUFaOztBQUNBO0FBQ0g7O0FBQ0QsZUFBSSxDQUFDckMsSUFBTCxDQUFVMkMsRUFBVixHQUFlTixHQUFmO0FBQ0FQLGlCQUFPO0FBQ1YsU0Fka0IsQ0FBbkI7O0FBZUEsYUFBSSxDQUFDckIsR0FBTCxDQUFTQyxPQUFULENBQWlCa0MsT0FBakIsQ0FBeUIsS0FBSSxDQUFDdkMsSUFBTCxDQUFVRSxNQUFuQyxFQUE0QyxRQUE1QztBQUNILE9BOUJELEVBOEJHc0MsSUE5QkgsQ0E4QlEsWUFBTTtBQUNWO0FBQ0EsZUFBTyxJQUFJaEIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM1QixjQUFJLEtBQUksQ0FBQ3JCLEdBQUwsQ0FBU0UsS0FBVCxDQUFlbUMsS0FBZixFQUFKLEVBQTRCO0FBQ3hCaEIsbUJBQU8sQ0FBQyxLQUFELENBQVA7QUFDQTtBQUNIOztBQUNELGVBQUksQ0FBQ2pCLFFBQUwsQ0FBY0YsS0FBZCxHQUFzQixVQUFDMEIsR0FBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ2xDLGdCQUFJQSxJQUFJLElBQUksR0FBWixFQUFpQjtBQUNiLG1CQUFJLENBQUNTLE9BQUwsQ0FBYVYsR0FBYjs7QUFDQVAscUJBQU8sQ0FBQyxLQUFELENBQVA7QUFDQTtBQUNIOztBQUNELGlCQUFJLENBQUNuQixLQUFMLEdBQWEwQixHQUFiO0FBQ0FQLG1CQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0gsV0FSRDs7QUFTQSxlQUFJLENBQUNyQixHQUFMLENBQVNFLEtBQVQsQ0FBZXFDLE1BQWY7QUFDSCxTQWZNLENBQVA7QUFnQkgsT0FoREQsRUFnREdILElBaERILENBZ0RRLFVBQUNJLElBQUQsRUFBVTtBQUNkO0FBQ0EsZUFBTyxJQUFJcEIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM1QixjQUFJLENBQUNtQixJQUFMLEVBQVc7QUFDUG5CLG1CQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0E7QUFDSDs7QUFDRCxlQUFJLENBQUNoQixHQUFMLENBQVNILEtBQVQsQ0FBZTtBQUNYZ0MsY0FBRSxFQUFFLEtBQUksQ0FBQzNDLElBQUwsQ0FBVTJDLEVBREg7QUFFWGhDLGlCQUFLLEVBQUUsS0FBSSxDQUFDQSxLQUFMLENBQVd1QztBQUZQLFdBQWYsRUFHSSxVQUFDYixHQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDaEJSLG1CQUFPOztBQUNQLGdCQUFJUSxJQUFJLElBQUksR0FBWixFQUFpQjtBQUNiLG1CQUFJLENBQUNTLE9BQUwsQ0FBYVYsR0FBYjs7QUFDQTtBQUNIO0FBQ0osV0FURDtBQVVILFNBZk0sQ0FBUDtBQWdCSCxPQWxFRCxFQWtFR1EsSUFsRUgsQ0FrRVEsWUFBTTtBQUNWLGFBQUksQ0FBQ3RCLE9BQUwsQ0FBYSxNQUFiLEVBQXNCLGFBQXRCO0FBQ0gsT0FwRUQsRUFvRUc0QixPQXBFSCxDQW9FVyxZQUFNO0FBQ2IsYUFBSSxDQUFDWixZQUFMLENBQWtCLFNBQWxCLEVBQThCLFFBQTlCLEVBQXlDLFFBQXpDO0FBQ0gsT0F0RUQ7QUF1RUg7QUExRkk7QUFoREUsQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGtDQUFrQztBQUN2QztBQUNBLHdCQUF3QixTQUFTLHVDQUF1QyxFQUFFO0FBQzFFO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRCxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxlQUFlO0FBQ2pELHFDQUFxQyx3QkFBd0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLG9DQUFvQywyQkFBMkI7QUFDL0Q7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxQkFBcUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZUFBZTtBQUNqRCxxQ0FBcUMsMkJBQTJCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLG9DQUFvQywyQkFBMkI7QUFDL0Q7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxQkFBcUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5QkFBeUI7QUFDekQsbUNBQW1DLDhCQUE4QjtBQUNqRTtBQUNBO0FBQ0EscUNBQXFDLHNDQUFzQztBQUMzRTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQ0FBcUM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEO0FBQ0Esb0NBQW9DLHFCQUFxQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywwQkFBMEI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLG9DQUFvQywyQkFBMkI7QUFDL0Q7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEO0FBQ0Esb0NBQW9DLHFCQUFxQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywrQkFBK0I7QUFDakUscUNBQXFDLHdCQUF3QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0Esb0NBQW9DLDJCQUEyQjtBQUMvRDtBQUNBLG9DQUFvQyxxQkFBcUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFCQUFxQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUJBQWlCLFdBQVcsRUFBRTtBQUMvRDtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywyQkFBMkI7QUFDakU7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHFCQUFxQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUJBQXFCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw0QkFBNEI7QUFDOUQscUNBQXFDLHlCQUF5QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0Esb0NBQW9DLDJCQUEyQjtBQUMvRDtBQUNBLG9DQUFvQyxxQkFBcUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFCQUFxQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0JBQStCO0FBQ3JELGlCQUFpQiw2QkFBNkI7QUFDOUMsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWCxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYLHNCQUFzQiwrQkFBK0IsVUFBVSxFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3Q0FBd0M7QUFDOUQsaUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBLGlCQUFpQiw0QkFBNEI7QUFDN0MsbUJBQW1CLHlDQUF5QztBQUM1RCxxQkFBcUIsa0NBQWtDO0FBQ3ZEO0FBQ0EscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBLHFCQUFxQiwrQkFBK0I7QUFDcEQ7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RDtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7QUFDQTtBQUNBLG1CQUFtQix3Q0FBd0M7QUFDM0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVMsZUFBZSxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoYkE7QUFBQTtBQUFBO0FBQUE7QUFBd1EsQ0FBZ0IseVNBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBNVI7QUFBQTtBQUFBO0FBQUE7QUFBZ1MsQ0FBZ0IsaVVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcFQ7QUFBQTtBQUFBO0FBQUE7QUFBK1IsQ0FBZ0IsZ1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBblQ7QUFBQTtBQUFBLHdDQUFzSCxDQUFnQixzTEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0ExSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUNyQztBQUNMO0FBQ3dCO0FBQ3dCO0FBQ1Q7OztBQUc3RjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN6Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJ2LWJyYW5kXCIgLFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiAnbicgLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAwICxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiAwICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGVycm9yOiB7fSAsXHJcbiAgICAgICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgICAgIGdldDogbnVsbCAsXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgZG9tOiB7fSAsXHJcbiAgICAgICAgICAgIGluczoge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogbnVsbCAsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbnVsbCAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBlbmRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdDogbnVsbCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBkYXRhOiB7fSAsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbnVsbFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgYXBpOiBzdG9yeUFwaSAsXHJcbiAgICAgICAgICAgIC8vIOWbvueJh1xyXG4gICAgICAgICAgICBpbWFnZToge1xyXG5cclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgfTtcclxuICAgIH0gLFxyXG4gICAgY3JlYXRlZCAoKSB7XHJcblxyXG4gICAgfSAsXHJcbiAgICBtb3VudGVkICgpIHtcclxuICAgICAgICB0aGlzLmluaXREb20oKTtcclxuICAgICAgICB0aGlzLmluaXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgfSAsXHJcbiAgICBtaXhpbnM6IFtcclxuICAgICAgICBtaXhpbnMuc3RhdGUgLFxyXG4gICAgICAgIG1peGlucy5sb2FkaW5nICxcclxuICAgICAgICBtaXhpbnMuZm9ybS5pbWFnZSAsXHJcbiAgICAgICAgbWl4aW5zLmZvcm0uZ2V0ICxcclxuICAgICAgICBtaXhpbnMuZm9ybS5jb25maXJtICxcclxuICAgIF0gLFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGluaXREb20gKCkge1xyXG5cclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgaW5pdEluc3RhbmNlICgpIHtcclxuXHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOiOt+WPluaVsOaNrlxyXG4gICAgICAgIGNoZWNrIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUgLFxyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICcnICxcclxuICAgICAgICAgICAgICAgIG1zZzogJycgLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBzdWJtaXQgKCkge1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5LiK5Lyg5Z+65pys5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGluZm8oJ+ivt+axguS4rS4uLuivt+iAkOW/g+etieW+hScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyID0gdGhpcy5jaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXIuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcltmaWx0ZXIuZmllbGRdID0gZmlsdGVyLm1zZztcclxuICAgICAgICAgICAgICAgICAgICB2U2Nyb2xsKGZpbHRlci5maWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZy5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFqYXguc3VibWl0ID0gdGhpcy5hcGlbdGhpcy5wYXJhbS5tb2RlXSh0aGlzLmZvcm0gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ2xvYWRpbmcnICwgJ3N1Ym1pdCcgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZTY3JvbGwoRy5maXJzdEtleShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZXJyb3IocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmlkID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zZXRBcmdzKHRoaXMuYWpheC5zdWJtaXQgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5LiK5Lyg5Zu+54mHXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnMuaW1hZ2UuZW1wdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjay5pbWFnZSA9IChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lTm90aWNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zLmltYWdlLnVwbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKG5leHQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOabtOaWsOWTgeeJjCBsb2dvXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkuaW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5mb3JtLmlkICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UudXJsICxcclxuICAgICAgICAgICAgICAgICAgICB9ICwgKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZU5vdGljZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtKCfmlYXkuovliJfooagnICwgJy9zdG9yeS9saXN0Jyk7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ2xvYWRpbmcnICwgJ3N1Ym1pdCcgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG4gICAgfVxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlLWNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJtb2R1bGUtbmF2XCIsIHsgYXR0cnM6IHsgdG9wUm91dGU6IF92bS50b3BSb3V0ZSwgcG9zOiBfdm0ucG9zIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2R1bGUtY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpblwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LXRiXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLnRpdGxlKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0aXRsZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuagh+mimFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0udGl0bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ0aXRsZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSwgW192bS5fdihcIipcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS+i+Wmgu+8mjIwMTYgTmlzc2FuIFF1ZXN0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLnRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IudXNlcm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInVzZXJuYW1lXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi55So5oi35ZCN56ewXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS51c2VybmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbX3ZtLl92KFwiKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5L6L5aaC77ya6ZmI5YWI55SfXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLnVzZXJuYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IubG9nb19leHBsYWluKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJsb2dvXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5Zu+54mHXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgcmVmOiBcImltYWdlLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWltYWdlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5pdC1zaG93LWltYWdlLWxpc3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhcmFtLm1vZGUgPT0gXCJlZGl0XCIgJiYgX3ZtLmZvcm0uaW1hZ2VfZXhwbGFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5pdC1zaG93LWltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uZm9ybS5pbWFnZV9leHBsYWluIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJldmlldy1pbWFnZXMgaGlkZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IuaW1hZ2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci5jb250ZW50KSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJjb250ZW50XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5YaF5a65XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmNvbnRlbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJjb250ZW50XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbX3ZtLl92KFwiKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IubGV0dGVyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3Iuc2NvcmUpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInNjb3JlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5YiG5pWwXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2NvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2NvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIsIHN0ZXA6IFwiMC4wMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5zY29yZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNjb3JlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbX3ZtLl92KFwiKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5L6L5aaC77yaOe+8jOacgOWkmuWFgeiuuOS4pOS9jeWwj+aVsFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5zY29yZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLmhpZGRlbiksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiaGlkZGVuXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi6ZqQ6JeP77yfXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSYWRpb0dyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmhpZGRlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImhpZGRlblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5oaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS4kc3RvcmUuc3RhdGUuYnVzaW5lc3MuYm9vbF9zdHIsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaywgYXR0cnM6IHsgbGFiZWw6IGsgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh2KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIum7mOiupO+8muWQplwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLmhpZGRlbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3Iud2VpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ3ZWlnaHRcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLmnYPph41cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS53ZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ud2VpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIm51bWJlclwiLCBzdGVwOiBcIjBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ud2VpZ2h0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwid2VpZ2h0XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIum7mOiupO+8mjDvvIzku4XlhYHorrjovpPlhaXmlbTmlbBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3Iud2VpZ2h0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1sb2FkaW5nXCIsIHsgcmVmOiBcImxvYWRpbmdcIiB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlbGVjdC1pbWFnZXNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwbG9hZC1zaG93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlLWxpbmVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2UgdXBsb2FkLWltYWdlLWJ0blwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIlwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzZWxlY3RlZC1jb3VudCBoaWRlXCIgfSwgW192bS5fdihcIjEwXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1saW5lXCIgfSwgW192bS5fdihcIuivt+mAieaLqeimgeS4iuS8oOeahOWbvueJh1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsZWFyLXNlbGVjdGVkXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCLmuIXnqbrlt7LpgInmi6nnmoTlm77niYdcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpbWdcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZVwiLCBhdHRyczogeyBzcmM6IFwiXCIgfSB9KV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWltYWdlcy1pbnB1dFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcInVwbG9hZF9pbWFnZXNcIiB9XG4gICAgICAgIH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaW1hZ2UtbGlzdCBoaWRlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtdGl0bGVcIiB9LCBbX3ZtLl92KFwi5b6F5LiK5Lyg5YiX6KGoXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZS1saXN0XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtY29udGVudCBsaXN0LXRpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtcHJldmlld1wiIH0sIFtfdm0uX3YoXCLlm77niYfpooTop4hcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtdHlwZVwiIH0sIFtfdm0uX3YoXCLnsbvlnotcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtc2l6ZVwiIH0sIFtfdm0uX3YoXCLlpKflsI9cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtc3BlZWRcIiB9LCBbX3ZtLl92KFwi6YCf5bqmXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXN0YXR1c1wiIH0sIFtfdm0uX3YoXCLnirbmgIFcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtb3ByXCIgfSwgW192bS5fdihcIuaTjeS9nFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtY29udGVudCBsaXN0LWJvZHlcIiB9KVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4tYnV0dG9uIHJ1bi1idXR0b24tc3VibWl0XCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLmj5DkuqRcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vZ2xvYmFsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vZ2xvYmFsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0wMDk3N2EyOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0wMDk3N2EyOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90aGluZy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD0wMDk3N2EyOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RoaW5nLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPTAwOTc3YTI5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4vdGhpbmcuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL3RoaW5nLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90aGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDA5NzdhMjkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vanMvdGhpbmcuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2pzL3RoaW5nLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi9wdWJsaWMvY3NzL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi4vcHVibGljL2Nzcy9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MDA5NzdhMjkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTIgZnJvbSBcIi4vY3NzL3RoaW5nLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPTAwOTc3YTI5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwMDk3N2EyOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdvcmtcXFxcY29kZVxcXFxjYXJcXFxccHVibGljXFxcXG1vZHVsZVxcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDA5NzdhMjknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDA5NzdhMjknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RoaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMDk3N2EyOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwMDk3N2EyOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic291cmNlL3Z1ZS92aWV3L3N0b3J5L3RoaW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90aGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDA5NzdhMjkmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9