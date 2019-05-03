(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/article/js/thing.js?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./source/vue/view/article/js/thing.js?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-image",
  data: function data() {
    return {
      form: {
        article_type_id: '',
        hidden: 'n',
        is_link: 'n',
        weight: 0
      },
      field: {
        id: 'id',
        p_id: 'p_id'
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
      api: articleApi,
      callback: {
        image: null
      },
      image: {},
      type: []
    };
  },
  mixins: [// 加载
  mixins.loading, mixins.state, mixins.form.get, mixins.form.image, mixins.form.confirm],
  mounted: function mounted() {
    this.initDom();
    this.initInstance();
    this.getData();
  },
  methods: {
    initDom: function initDom() {},
    initInstance: function initInstance() {
      this.ins.editor = new wangEditor(this.$refs.editor); // this.ins.editor.customConfig.uploadImgShowBase64 = true;

      this.ins.editor.customConfig.uploadImgServer = topContext.imageApiForwangEditor;
      this.ins.editor.customConfig.uploadFileName = 'image[]';
      this.ins.editor.create();
    },
    getData: function getData() {
      var _this = this;

      new Promise(function (resolve) {
        _this.pendingState('loading'); // 获取文章分类


        articleTypeApi.list({}, function (res, code) {
          resolve();

          if (code != 200) {
            _this.eNotice(res);

            return;
          }

          _this.type = res;
        });
      }).then(function () {
        // 获取数据
        return new Promise(function (resolve) {
          // 检查时编辑
          if (_this.param.mode == 'edit') {
            // 获取当前正在编辑的文章分类
            _this.api.detail(_this.param.id, function (res, code) {
              resolve();

              if (code != 200) {
                _this.eNotice(res);

                return;
              }

              var data = res;
              var content = data.content ? data.content.content : '';
              delete data.content;
              _this.form = data;

              _this.ins.editor.txt.html(content);
            });

            return;
          }

          resolve();
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

      return new Promise(function (resolve) {
        // 上传基本数据
        if (_this2.pending.submit) {
          _this2.$info('请求中...请耐心等待');

          return;
        }

        _this2.pendingState('loading', 'submit'); // 设置内容


        _this2.form.content = _this2.ins.editor.txt.html();
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
        return new Promise(function (resolve) {
          if (_this2.ins.image.empty()) {
            resolve(false);
            return;
          } // 上传图片


          _this2.callback.image = function (res, code) {
            if (code != 200) {
              _this2.eNotice(res);

              resolve(false);
              return;
            }

            res = res;
            _this2.image = res;
            resolve(true);
          };

          _this2.ins.image.upload();
        });
      }).then(function (next) {
        // 更新图片
        return new Promise(function (resolve) {
          if (!next) {
            resolve();
            return;
          }

          _this2.api.image({
            id: _this2.form.id,
            image: _this2.image.url
          }, function (res, code) {
            if (code != 200) {
              _this2.eNotice(res);
            }

            resolve();
          });
        });
      }).then(function () {
        _this2.confirm('文章列表', '/article/list');
      }).finally(function () {
        _this2.initialState('loading', 'submit', 'submit');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/asset/css/wangEditor.css?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/asset/css/wangEditor.css?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/article/css/thing.css?vue&type=style&index=2&id=cfd934ac&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/article/css/thing.css?vue&type=style&index=2&id=cfd934ac&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=cfd934ac&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=cfd934ac&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/article/thing.vue?vue&type=template&id=cfd934ac&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/article/thing.vue?vue&type=template&id=cfd934ac&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
                        _c("span", { staticClass: "tip" }),
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
                      class: _vm.getClass(_vm.error.article_type_id),
                      attrs: { id: "article_type_id" }
                    },
                    [
                      _c("td", [_vm._v("文章分类")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-select", {
                            staticClass: "form-select",
                            attrs: { data: _vm.type, has: false },
                            model: {
                              value: _vm.form.article_type_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "article_type_id", $$v)
                              },
                              expression: "form.article_type_id"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "necessary" }, [
                            _vm._v("*")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "tip" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "msg" }, [
                            _vm._v(_vm._s(_vm.error.article_type_id))
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
                      class: _vm.getClass(_vm.error.thumb),
                      attrs: { id: "thumb" }
                    },
                    [
                      _c("td", [_vm._v("封面")]),
                      _vm._v(" "),
                      _c("td", { ref: "image-container" }, [
                        _c("div", { staticClass: "upload-image" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("div", { staticClass: "init-show-image-list" }, [
                            _vm.param.mode == "edit" && _vm.form.thumb_explain
                              ? _c("img", {
                                  staticClass: "init-show-image",
                                  attrs: { src: _vm.form.thumb_explain }
                                })
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _vm._m(1),
                          _vm._v(" "),
                          _vm._m(2)
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.form.is_link == "n"
                    ? _c(
                        "tr",
                        {
                          class: _vm.getClass(_vm.error.content),
                          attrs: { id: "content" }
                        },
                        [
                          _c("td", [_vm._v("内容")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("div", {
                              ref: "editor",
                              staticClass: "wang-editor"
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "necessary" }, [
                              _vm._v("*")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "tip" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "msg" }, [
                              _vm._v(_vm._s(_vm.error.content))
                            ])
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.source),
                      attrs: { id: "source" }
                    },
                    [
                      _c("td", [_vm._v("来源")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.source,
                              expression: "form.source"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.source },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "source", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.source))
                        ])
                      ])
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
                        _c("span", { staticClass: "tip" }, [_vm._v("默认：0")]),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
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
                        _c("span", { staticClass: "necessary" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }, [
                          _vm._v("默认：否")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.weight))
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("tr", { attrs: { id: "is_link" } }, [
                    _c("td", [_vm._v("是否链接")]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "radio-group",
                          {
                            model: {
                              value: _vm.form.is_link,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "is_link", $$v)
                              },
                              expression: "form.is_link"
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
                        _c("span", { staticClass: "necessary" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }, [
                          _vm._v(
                            "默认：否，如果选择：是，那么文章内容将无需填写（会自动隐藏）"
                          )
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.is_link))
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.link),
                      attrs: { id: "link" }
                    },
                    [
                      _c("td", [_vm._v("链接")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.link,
                              expression: "form.link"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.link },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "link", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }, [
                          _vm._v("链接地址，例如：https://www.baidu.com/")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.link))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(3)
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
      _c("div", { staticClass: "tip" }, [_vm._v("这边是提示内容")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "preview-images hide" }, [
      _c(
        "div",
        {
          staticClass: "image-item",
          attrs: { "data-filename": "sama-96.jpg" }
        },
        [
          _c("div", { staticClass: "img" }, [
            _c("img", {
              staticClass: "image",
              attrs: {
                src:
                  "http://qp333com.oss-cn-hangzhou.aliyuncs.com/7peishang.com/avatar/2017-11-10/bf07531ad5dd288afc93bab47ee8d258.jpg"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "close" }, [
            _c("img", {
              staticClass: "image",
              attrs: {
                src: "/UploadImages/Images/delete_unfocus.png",
                "data-focus": "/UploadImages/Images/delete_focus.png",
                "data-unfocus": "/UploadImages/Images/delete_unfocus.png"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "progress hide" }, [
            _c("div", { staticClass: "p-total" }, [
              _c("div", { staticClass: "p-cur" })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "msg hide" }, [
            _c("div", { staticClass: "msg-in" }, [_vm._v("成功")])
          ])
        ]
      )
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

/***/ "./source/asset/css/wangEditor.css?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./source/asset/css/wangEditor.css?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./wangEditor.css?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/asset/css/wangEditor.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/article/css/thing.css?vue&type=style&index=2&id=cfd934ac&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./source/vue/view/article/css/thing.css?vue&type=style&index=2&id=cfd934ac&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_2_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./thing.css?vue&type=style&index=2&id=cfd934ac&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/article/css/thing.css?vue&type=style&index=2&id=cfd934ac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_2_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_2_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_2_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_2_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_thing_css_vue_type_style_index_2_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/article/js/thing.js?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./source/vue/view/article/js/thing.js?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_thing_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!./thing.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/article/js/thing.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_thing_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/view/article/thing.vue":
/*!*******************************************!*\
  !*** ./source/vue/view/article/thing.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thing_vue_vue_type_template_id_cfd934ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thing.vue?vue&type=template&id=cfd934ac&scoped=true& */ "./source/vue/view/article/thing.vue?vue&type=template&id=cfd934ac&scoped=true&");
/* harmony import */ var _js_thing_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/thing.js?vue&type=script&lang=js& */ "./source/vue/view/article/js/thing.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _asset_css_wangEditor_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../asset/css/wangEditor.css?vue&type=style&index=0&lang=css& */ "./source/asset/css/wangEditor.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _public_css_public_css_vue_type_style_index_1_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=1&id=cfd934ac&scoped=true&lang=css& */ "./source/vue/view/public/css/public.css?vue&type=style&index=1&id=cfd934ac&scoped=true&lang=css&");
/* harmony import */ var _css_thing_css_vue_type_style_index_2_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/thing.css?vue&type=style&index=2&id=cfd934ac&scoped=true&lang=css& */ "./source/vue/view/article/css/thing.css?vue&type=style&index=2&id=cfd934ac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _js_thing_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _thing_vue_vue_type_template_id_cfd934ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _thing_vue_vue_type_template_id_cfd934ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cfd934ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/view/article/thing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/view/article/thing.vue?vue&type=template&id=cfd934ac&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./source/vue/view/article/thing.vue?vue&type=template&id=cfd934ac&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_thing_vue_vue_type_template_id_cfd934ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./thing.vue?vue&type=template&id=cfd934ac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/article/thing.vue?vue&type=template&id=cfd934ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_thing_vue_vue_type_template_id_cfd934ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_thing_vue_vue_type_template_id_cfd934ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./source/vue/view/public/css/public.css?vue&type=style&index=1&id=cfd934ac&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./source/vue/view/public/css/public.css?vue&type=style&index=1&id=cfd934ac&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public.css?vue&type=style&index=1&id=cfd934ac&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=cfd934ac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_cfd934ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYXJ0aWNsZS9qcy90aGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXNzZXQvY3NzL3dhbmdFZGl0b3IuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9hcnRpY2xlL2Nzcy90aGluZy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz83OWI3Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9hcnRpY2xlL3RoaW5nLnZ1ZT8yYmFmIiwid2VicGFjazovLy8uL3NvdXJjZS9hc3NldC9jc3Mvd2FuZ0VkaXRvci5jc3M/Zjk3NCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYXJ0aWNsZS9jc3MvdGhpbmcuY3NzPzY3ODYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2FydGljbGUvanMvdGhpbmcuanM/ZTRlOSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYXJ0aWNsZS90aGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2FydGljbGUvdGhpbmcudnVlP2QyNjYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz9iZDkyIl0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwiZm9ybSIsImFydGljbGVfdHlwZV9pZCIsImhpZGRlbiIsImlzX2xpbmsiLCJ3ZWlnaHQiLCJmaWVsZCIsImlkIiwicF9pZCIsImVycm9yIiwiaW5zIiwiZG9tIiwiYWpheCIsInN1Ym1pdCIsInBlbmRpbmciLCJhcGkiLCJhcnRpY2xlQXBpIiwiY2FsbGJhY2siLCJpbWFnZSIsInR5cGUiLCJtaXhpbnMiLCJsb2FkaW5nIiwic3RhdGUiLCJnZXQiLCJjb25maXJtIiwibW91bnRlZCIsImluaXREb20iLCJpbml0SW5zdGFuY2UiLCJnZXREYXRhIiwibWV0aG9kcyIsImVkaXRvciIsIndhbmdFZGl0b3IiLCIkcmVmcyIsImN1c3RvbUNvbmZpZyIsInVwbG9hZEltZ1NlcnZlciIsInRvcENvbnRleHQiLCJpbWFnZUFwaUZvcndhbmdFZGl0b3IiLCJ1cGxvYWRGaWxlTmFtZSIsImNyZWF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicGVuZGluZ1N0YXRlIiwiYXJ0aWNsZVR5cGVBcGkiLCJsaXN0IiwicmVzIiwiY29kZSIsImVOb3RpY2UiLCJ0aGVuIiwicGFyYW0iLCJtb2RlIiwiZGV0YWlsIiwiY29udGVudCIsInR4dCIsImh0bWwiLCJmaW5hbGx5IiwiaW5pdGlhbFN0YXRlIiwiY2hlY2siLCJzdGF0dXMiLCJtc2ciLCIkaW5mbyIsInZTY3JvbGwiLCJHIiwiZmlyc3RLZXkiLCIkZXJyb3IiLCJzZXRBcmdzIiwiZW1wdHkiLCJ1cGxvYWQiLCJuZXh0IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZTtBQUNYQSxNQUFJLEVBQUUsU0FESztBQUVYQyxNQUZXLGtCQUVIO0FBQ0osV0FBTztBQUNIQyxVQUFJLEVBQUU7QUFDRkMsdUJBQWUsRUFBRSxFQURmO0FBRUZDLGNBQU0sRUFBRSxHQUZOO0FBR0ZDLGVBQU8sRUFBRSxHQUhQO0FBSUZDLGNBQU0sRUFBRTtBQUpOLE9BREg7QUFPSEMsV0FBSyxFQUFFO0FBQ0hDLFVBQUUsRUFBRSxJQUREO0FBRUhDLFlBQUksRUFBRTtBQUZILE9BUEo7QUFXSDtBQUNBQyxXQUFLLEVBQUUsRUFaSjtBQWFIQyxTQUFHLEVBQUUsRUFiRjtBQWNIQyxTQUFHLEVBQUUsRUFkRjtBQWVIQyxVQUFJLEVBQUU7QUFDRkMsY0FBTSxFQUFFO0FBRE4sT0FmSDtBQWtCSEMsYUFBTyxFQUFFO0FBQ0xELGNBQU0sRUFBRTtBQURILE9BbEJOO0FBcUJIRSxTQUFHLEVBQUVDLFVBckJGO0FBc0JIQyxjQUFRLEVBQUU7QUFDTkMsYUFBSyxFQUFFO0FBREQsT0F0QlA7QUF5QkhBLFdBQUssRUFBRSxFQXpCSjtBQTBCSEMsVUFBSSxF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O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOWdCQTtBQUFBO0FBQUE7QUFBQTtBQUEwUCxDQUFnQiw2U0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5UTtBQUFBO0FBQUE7QUFBQTtBQUErUixDQUFnQixnVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FuVDtBQUFBO0FBQUEsd0NBQXNILENBQWdCLHNMQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3JDO0FBQ0w7QUFDaUM7QUFDZTtBQUNUOzs7QUFHN0Y7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDekNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQWdTLENBQWdCLGlVQUFHLEVBQUMsQyIsImZpbGUiOiJqcy8zMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidi1pbWFnZVwiICxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgIGFydGljbGVfdHlwZV9pZDogJycgLFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiAnbicgLFxyXG4gICAgICAgICAgICAgICAgaXNfbGluazogJ24nICxcclxuICAgICAgICAgICAgICAgIHdlaWdodDogMCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdpZCcgLFxyXG4gICAgICAgICAgICAgICAgcF9pZDogJ3BfaWQnXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAvLyDplJnor6/mtojmga9cclxuICAgICAgICAgICAgZXJyb3I6IHt9ICxcclxuICAgICAgICAgICAgaW5zOiB7fSAsXHJcbiAgICAgICAgICAgIGRvbToge30gLFxyXG4gICAgICAgICAgICBhamF4OiB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgcGVuZGluZzoge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0OiBmYWxzZSAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBhcGk6IGFydGljbGVBcGkgLFxyXG4gICAgICAgICAgICBjYWxsYmFjazoge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG51bGxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGltYWdlOiB7fSAsXHJcbiAgICAgICAgICAgIHR5cGU6IFtdICxcclxuICAgICAgICB9O1xyXG4gICAgfSAsXHJcbiAgICBtaXhpbnM6IFtcclxuICAgICAgICAvLyDliqDovb1cclxuICAgICAgICBtaXhpbnMubG9hZGluZyAsXHJcbiAgICAgICAgbWl4aW5zLnN0YXRlICxcclxuICAgICAgICBtaXhpbnMuZm9ybS5nZXQgLFxyXG4gICAgICAgIG1peGlucy5mb3JtLmltYWdlICxcclxuICAgICAgICBtaXhpbnMuZm9ybS5jb25maXJtICxcclxuXHJcbiAgICBdICxcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdERvbSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICB9ICxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBpbml0RG9tICgpIHtcclxuXHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRJbnN0YW5jZSAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmVkaXRvciA9IG5ldyB3YW5nRWRpdG9yKHRoaXMuJHJlZnMuZWRpdG9yKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5pbnMuZWRpdG9yLmN1c3RvbUNvbmZpZy51cGxvYWRJbWdTaG93QmFzZTY0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbnMuZWRpdG9yLmN1c3RvbUNvbmZpZy51cGxvYWRJbWdTZXJ2ZXIgPSB0b3BDb250ZXh0LmltYWdlQXBpRm9yd2FuZ0VkaXRvcjtcclxuICAgICAgICAgICAgdGhpcy5pbnMuZWRpdG9yLmN1c3RvbUNvbmZpZy51cGxvYWRGaWxlTmFtZSA9ICdpbWFnZVtdJztcclxuICAgICAgICAgICAgdGhpcy5pbnMuZWRpdG9yLmNyZWF0ZSgpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBnZXREYXRhICgpIHtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1N0YXRlKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAvLyDojrflj5bmlofnq6DliIbnsbtcclxuICAgICAgICAgICAgICAgIGFydGljbGVUeXBlQXBpLmxpc3Qoe30gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lTm90aWNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g6I635Y+W5pWw5o2uXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmo4Dmn6Xml7bnvJbovpFcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbS5tb2RlID09ICdlZGl0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5blvZPliY3mraPlnKjnvJbovpHnmoTmlofnq6DliIbnsbtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkuZGV0YWlsKHRoaXMucGFyYW0uaWQgLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lTm90aWNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkYXRhLmNvbnRlbnQgPyBkYXRhLmNvbnRlbnQuY29udGVudCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGEuY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucy5lZGl0b3IudHh0Lmh0bWwoY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZSgnbG9hZGluZycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgY2hlY2sgKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSAsXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJycgLFxyXG4gICAgICAgICAgICAgICAgbXNnOiAnJyAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHN1Ym1pdCAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5LiK5Lyg5Z+65pys5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGluZm8oJ+ivt+axguS4rS4uLuivt+iAkOW/g+etieW+hScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdTdGF0ZSgnbG9hZGluZycgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyDorr7nva7lhoXlrrlcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jb250ZW50ID0gdGhpcy5pbnMuZWRpdG9yLnR4dC5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFqYXguc3VibWl0ID0gdGhpcy5hcGlbdGhpcy5wYXJhbS5tb2RlXSh0aGlzLmZvcm0gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZSgnbG9hZGluZycgLCAnc3VibWl0JyAsICdzdWJtaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdlNjcm9sbChHLmZpcnN0S2V5KHJlcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDnibnmrorplJnor69cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZXJyb3IocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmlkID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zZXRBcmdzKHRoaXMuYWpheC5zdWJtaXQgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5zLmltYWdlLmVtcHR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS4iuS8oOWbvueJh1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2suaW1hZ2UgPSAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZU5vdGljZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zLmltYWdlLnVwbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKG5leHQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOabtOaWsOWbvueJh1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkuaW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5mb3JtLmlkICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UudXJsXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsIChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lTm90aWNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtKCfmlofnq6DliJfooagnICwgJy9hcnRpY2xlL2xpc3QnKTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZSgnbG9hZGluZycgLCAnc3VibWl0JyAsICdzdWJtaXQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcbiAgICB9XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtb2R1bGUtY29udGFpbmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIm1vZHVsZS1uYXZcIiwgeyBhdHRyczogeyB0b3BSb3V0ZTogX3ZtLnRvcFJvdXRlLCBwb3M6IF92bS5wb3MgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZHVsZS1jb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtdGJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IudGl0bGUpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInRpdGxlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5qCH6aKYXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS50aXRsZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInRpdGxlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbX3ZtLl92KFwiKlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IudGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci5hcnRpY2xlX3R5cGVfaWQpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImFydGljbGVfdHlwZV9pZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuaWh+eroOWIhuexu1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLnR5cGUsIGhhczogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmFydGljbGVfdHlwZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiYXJ0aWNsZV90eXBlX2lkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uYXJ0aWNsZV90eXBlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5hcnRpY2xlX3R5cGVfaWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLnRodW1iKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0aHVtYlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuWwgemdolwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHJlZjogXCJpbWFnZS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwbG9hZC1pbWFnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluaXQtc2hvdy1pbWFnZS1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXJhbS5tb2RlID09IFwiZWRpdFwiICYmIF92bS5mb3JtLnRodW1iX2V4cGxhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImluaXQtc2hvdy1pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmZvcm0udGh1bWJfZXhwbGFpbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5mb3JtLmlzX2xpbmsgPT0gXCJuXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IuY29udGVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImNvbnRlbnRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLlhoXlrrlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImVkaXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2FuZy1lZGl0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5jb250ZW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3Iuc291cmNlKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJzb3VyY2VcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLmnaXmupBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uc291cmNlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic291cmNlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLnNvdXJjZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLndlaWdodCksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwid2VpZ2h0XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5p2D6YeNXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ud2VpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLndlaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiwgc3RlcDogXCIwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLndlaWdodCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIndlaWdodFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW192bS5fdihcIum7mOiupO+8mjBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLndlaWdodCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCB7IGF0dHJzOiB7IGlkOiBcImhpZGRlblwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLmmK/lkKbpmpDol49cIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmhpZGRlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiaGlkZGVuXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uJHN0b3JlLnN0YXRlLmJ1c2luZXNzLmJvb2xfc3RyLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGssIGF0dHJzOiB7IGxhYmVsOiBrIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3ModikpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZWNlc3NhcnlcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIum7mOiupO+8muWQplwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci53ZWlnaHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCB7IGF0dHJzOiB7IGlkOiBcImlzX2xpbmtcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5piv5ZCm6ZO+5o6lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYWRpby1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5pc19saW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJpc19saW5rXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaXNfbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLiRzdG9yZS5zdGF0ZS5idXNpbmVzcy5ib29sX3N0ciwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBrLCBhdHRyczogeyBsYWJlbDogayB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHYpKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLpu5jorqTvvJrlkKbvvIzlpoLmnpzpgInmi6nvvJrmmK/vvIzpgqPkuYjmlofnq6DlhoXlrrnlsIbml6DpnIDloavlhpnvvIjkvJroh6rliqjpmpDol4/vvIlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLmlzX2xpbmspKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLmxpbmspLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImxpbmtcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLpk77mjqVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5saW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5saW5rIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibGlua1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpk77mjqXlnLDlnYDvvIzkvovlpoLvvJpodHRwczovL3d3dy5iYWlkdS5jb20vXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLmxpbmspKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgzKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWxvYWRpbmdcIiwgeyByZWY6IFwibG9hZGluZ1wiIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VsZWN0LWltYWdlc1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXNob3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2UtbGluZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZSB1cGxvYWQtaW1hZ2UtYnRuXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNlbGVjdGVkLWNvdW50IGhpZGVcIiB9LCBbX3ZtLl92KFwiMTBcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWxpbmVcIiB9LCBbX3ZtLl92KFwi6K+36YCJ5oup6KaB5LiK5Lyg55qE5Zu+54mHXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xlYXItc2VsZWN0ZWRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIua4heepuuW3sumAieaLqeeahOWbvueJh1wiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImltZ1wiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlXCIsIGF0dHJzOiB7IHNyYzogXCJcIiB9IH0pXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaW1hZ2VzLWlucHV0XCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIG5hbWU6IFwidXBsb2FkX2ltYWdlc1wiIH1cbiAgICAgICAgfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW192bS5fdihcIui/mei+ueaYr+aPkOekuuWGheWuuVwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3LWltYWdlcyBoaWRlXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZS1pdGVtXCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWZpbGVuYW1lXCI6IFwic2FtYS05Ni5qcGdcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltZ1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICBcImh0dHA6Ly9xcDMzM2NvbS5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tLzdwZWlzaGFuZy5jb20vYXZhdGFyLzIwMTctMTEtMTAvYmYwNzUzMWFkNWRkMjg4YWZjOTNiYWI0N2VlOGQyNTguanBnXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOiBcIi9VcGxvYWRJbWFnZXMvSW1hZ2VzL2RlbGV0ZV91bmZvY3VzLnBuZ1wiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1mb2N1c1wiOiBcIi9VcGxvYWRJbWFnZXMvSW1hZ2VzL2RlbGV0ZV9mb2N1cy5wbmdcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdW5mb2N1c1wiOiBcIi9VcGxvYWRJbWFnZXMvSW1hZ2VzL2RlbGV0ZV91bmZvY3VzLnBuZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2dyZXNzIGhpZGVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInAtdG90YWxcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicC1jdXJcIiB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnIGhpZGVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZy1pblwiIH0sIFtfdm0uX3YoXCLmiJDlip9cIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwbG9hZC1pbWFnZS1saXN0IGhpZGVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwbG9hZC10aXRsZVwiIH0sIFtfdm0uX3YoXCLlvoXkuIrkvKDliJfooahcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlLWxpc3RcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1jb250ZW50IGxpc3QtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1wcmV2aWV3XCIgfSwgW192bS5fdihcIuWbvueJh+mihOiniFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi10eXBlXCIgfSwgW192bS5fdihcIuexu+Wei1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1zaXplXCIgfSwgW192bS5fdihcIuWkp+Wwj1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1zcGVlZFwiIH0sIFtfdm0uX3YoXCLpgJ/luqZcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtc3RhdHVzXCIgfSwgW192bS5fdihcIueKtuaAgVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1vcHJcIiB9LCBbX3ZtLl92KFwi5pON5L2cXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1jb250ZW50IGxpc3QtYm9keVwiIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1idXR0b24gcnVuLWJ1dHRvbi1zdWJtaXRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuaPkOS6pFwiKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi93YW5nRWRpdG9yLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vd2FuZ0VkaXRvci5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90aGluZy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD1jZmQ5MzRhYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RoaW5nLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPWNmZDkzNGFjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4vdGhpbmcuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL3RoaW5nLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90aGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2ZkOTM0YWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vanMvdGhpbmcuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2pzL3RoaW5nLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuLi8uLi8uLi9hc3NldC9jc3Mvd2FuZ0VkaXRvci5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi4vcHVibGljL2Nzcy9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9Y2ZkOTM0YWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTIgZnJvbSBcIi4vY3NzL3RoaW5nLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPWNmZDkzNGFjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjZmQ5MzRhY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdvcmtcXFxcY29kZVxcXFxjYXJcXFxccHVibGljXFxcXG1vZHVsZVxcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnY2ZkOTM0YWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnY2ZkOTM0YWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RoaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZmQ5MzRhYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjZmQ5MzRhYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic291cmNlL3Z1ZS92aWV3L2FydGljbGUvdGhpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RoaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZmQ5MzRhYyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9Y2ZkOTM0YWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9Y2ZkOTM0YWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiXSwic291cmNlUm9vdCI6IiJ9