(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

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
      this.ins.editor.customConfig.uploadFileName = 'image';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYXJ0aWNsZS9qcy90aGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvYXNzZXQvY3NzL3dhbmdFZGl0b3IuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9hcnRpY2xlL2Nzcy90aGluZy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz83OWI3Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9hcnRpY2xlL3RoaW5nLnZ1ZT8yYmFmIiwid2VicGFjazovLy8uL3NvdXJjZS9hc3NldC9jc3Mvd2FuZ0VkaXRvci5jc3M/Zjk3NCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYXJ0aWNsZS9jc3MvdGhpbmcuY3NzPzY3ODYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2FydGljbGUvanMvdGhpbmcuanM/ZTRlOSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYXJ0aWNsZS90aGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2FydGljbGUvdGhpbmcudnVlP2QyNjYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz9iZDkyIl0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwiZm9ybSIsImFydGljbGVfdHlwZV9pZCIsImhpZGRlbiIsImlzX2xpbmsiLCJ3ZWlnaHQiLCJmaWVsZCIsImlkIiwicF9pZCIsImVycm9yIiwiaW5zIiwiZG9tIiwiYWpheCIsInN1Ym1pdCIsInBlbmRpbmciLCJhcGkiLCJhcnRpY2xlQXBpIiwiY2FsbGJhY2siLCJpbWFnZSIsInR5cGUiLCJtaXhpbnMiLCJsb2FkaW5nIiwic3RhdGUiLCJnZXQiLCJjb25maXJtIiwibW91bnRlZCIsImluaXREb20iLCJpbml0SW5zdGFuY2UiLCJnZXREYXRhIiwibWV0aG9kcyIsImVkaXRvciIsIndhbmdFZGl0b3IiLCIkcmVmcyIsImN1c3RvbUNvbmZpZyIsInVwbG9hZEltZ1NlcnZlciIsInRvcENvbnRleHQiLCJpbWFnZUFwaUZvcndhbmdFZGl0b3IiLCJ1cGxvYWRGaWxlTmFtZSIsImNyZWF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicGVuZGluZ1N0YXRlIiwiYXJ0aWNsZVR5cGVBcGkiLCJsaXN0IiwicmVzIiwiY29kZSIsImVOb3RpY2UiLCJ0aGVuIiwicGFyYW0iLCJtb2RlIiwiZGV0YWlsIiwiY29udGVudCIsInR4dCIsImh0bWwiLCJmaW5hbGx5IiwiaW5pdGlhbFN0YXRlIiwiY2hlY2siLCJzdGF0dXMiLCJtc2ciLCIkaW5mbyIsInZTY3JvbGwiLCJHIiwiZmlyc3RLZXkiLCIkZXJyb3IiLCJzZXRBcmdzIiwiZW1wdHkiLCJ1cGxvYWQiLCJuZXh0IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZTtBQUNYQSxNQUFJLEVBQUUsU0FESztBQUVYQyxNQUZXLGtCQUVIO0FBQ0osV0FBTztBQUNIQyxVQUFJLEVBQUU7QUFDRkMsdUJBQWUsRUFBRSxFQURmO0FBRUZDLGNBQU0sRUFBRSxHQUZOO0FBR0ZDLGVBQU8sRUFBRSxHQUhQO0FBSUZDLGNBQU0sRUFBRTtBQUpOLE9BREg7QUFPSEMsV0FBSyxFQUFFO0FBQ0hDLFVBQUUsRUFBRSxJQUREO0FBRUhDLFlBQUksRUFBRTtBQUZILE9BUEo7QUFXSDtBQUNBQyxXQUFLLEVBQUUsRUFaSjtBQWFIQyxTQUFHLEVBQUUsRUFiRjtBQWNIQyxTQUFHLEVBQUUsRUFkRjtBQWVIQyxVQUFJLEVBQUU7QUFDRkMsY0FBTSxFQUFFO0FBRE4sT0FmSDtBQWtCSEMsYUFBTyxFQUFFO0FBQ0xELGNBQU0sRUFBRTtBQURILE9BbEJOO0FBcUJIRSxTQUFHLEVBQUVDLFVBckJGO0FBc0JIQyxjQUFRLEVBQUU7QUFDTkMsYUFBSyxFQUFFO0FBREQsT0F0QlA7QUF5QkhBLFdBQUssRUFBRSxFQXpCSjtBQTBCSEMsVUFBSSxF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O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOWdCQTtBQUFBO0FBQUE7QUFBQTtBQUEwUCxDQUFnQiw2U0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5UTtBQUFBO0FBQUE7QUFBQTtBQUErUixDQUFnQixnVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FuVDtBQUFBO0FBQUEsd0NBQXNILENBQWdCLHNMQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3JDO0FBQ0w7QUFDaUM7QUFDZTtBQUNUOzs7QUFHN0Y7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDekNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQWdTLENBQWdCLGlVQUFHLEVBQUMsQyIsImZpbGUiOiJqcy8yNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidi1pbWFnZVwiICxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgIGFydGljbGVfdHlwZV9pZDogJycgLFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiAnbicgLFxyXG4gICAgICAgICAgICAgICAgaXNfbGluazogJ24nICxcclxuICAgICAgICAgICAgICAgIHdlaWdodDogMCAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdpZCcgLFxyXG4gICAgICAgICAgICAgICAgcF9pZDogJ3BfaWQnXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAvLyDplJnor6/mtojmga9cclxuICAgICAgICAgICAgZXJyb3I6IHt9ICxcclxuICAgICAgICAgICAgaW5zOiB7fSAsXHJcbiAgICAgICAgICAgIGRvbToge30gLFxyXG4gICAgICAgICAgICBhamF4OiB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgcGVuZGluZzoge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0OiBmYWxzZSAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBhcGk6IGFydGljbGVBcGkgLFxyXG4gICAgICAgICAgICBjYWxsYmFjazoge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG51bGxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGltYWdlOiB7fSAsXHJcbiAgICAgICAgICAgIHR5cGU6IFtdICxcclxuICAgICAgICB9O1xyXG4gICAgfSAsXHJcbiAgICBtaXhpbnM6IFtcclxuICAgICAgICAvLyDliqDovb1cclxuICAgICAgICBtaXhpbnMubG9hZGluZyAsXHJcbiAgICAgICAgbWl4aW5zLnN0YXRlICxcclxuICAgICAgICBtaXhpbnMuZm9ybS5nZXQgLFxyXG4gICAgICAgIG1peGlucy5mb3JtLmltYWdlICxcclxuICAgICAgICBtaXhpbnMuZm9ybS5jb25maXJtICxcclxuXHJcbiAgICBdICxcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdERvbSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICB9ICxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBpbml0RG9tICgpIHtcclxuXHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRJbnN0YW5jZSAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmVkaXRvciA9IG5ldyB3YW5nRWRpdG9yKHRoaXMuJHJlZnMuZWRpdG9yKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5pbnMuZWRpdG9yLmN1c3RvbUNvbmZpZy51cGxvYWRJbWdTaG93QmFzZTY0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbnMuZWRpdG9yLmN1c3RvbUNvbmZpZy51cGxvYWRJbWdTZXJ2ZXIgPSB0b3BDb250ZXh0LmltYWdlQXBpRm9yd2FuZ0VkaXRvcjtcclxuICAgICAgICAgICAgdGhpcy5pbnMuZWRpdG9yLmN1c3RvbUNvbmZpZy51cGxvYWRGaWxlTmFtZSA9ICdpbWFnZSc7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmVkaXRvci5jcmVhdGUoKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgZ2V0RGF0YSAoKSB7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdTdGF0ZSgnbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgLy8g6I635Y+W5paH56ug5YiG57G7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlVHlwZUFwaS5saXN0KHt9ICwgKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZU5vdGljZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9IHJlcztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOiOt+WPluaVsOaNrlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5qOA5p+l5pe257yW6L6RXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW0ubW9kZSA9PSAnZWRpdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5b2T5YmN5q2j5Zyo57yW6L6R55qE5paH56ug5YiG57G7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpLmRldGFpbCh0aGlzLnBhcmFtLmlkICwgKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZU5vdGljZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gZGF0YS5jb250ZW50ID8gZGF0YS5jb250ZW50LmNvbnRlbnQgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnMuZWRpdG9yLnR4dC5odG1sKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGNoZWNrIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUgLFxyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICcnICxcclxuICAgICAgICAgICAgICAgIG1zZzogJycgLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBzdWJtaXQgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOS4iuS8oOWfuuacrOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZy5zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpbmZvKCfor7fmsYLkuK0uLi7or7fogJDlv4PnrYnlvoUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nU3RhdGUoJ2xvYWRpbmcnICwgJ3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u5YaF5a65XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY29udGVudCA9IHRoaXMuaW5zLmVkaXRvci50eHQuaHRtbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hamF4LnN1Ym1pdCA9IHRoaXMuYXBpW3RoaXMucGFyYW0ubW9kZV0odGhpcy5mb3JtICwgKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ2xvYWRpbmcnICwgJ3N1Ym1pdCcgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZTY3JvbGwoRy5maXJzdEtleShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g54m55q6K6ZSZ6K+vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVycm9yKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5pZCA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2V0QXJncyh0aGlzLmFqYXguc3VibWl0ICwgJ3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucy5pbWFnZS5lbXB0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDkuIrkvKDlm77niYdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmltYWdlID0gKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVOb3RpY2UocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucy5pbWFnZS51cGxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKChuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDmm7TmlrDlm77niYdcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpLmltYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZm9ybS5pZCAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLnVybFxyXG4gICAgICAgICAgICAgICAgICAgIH0gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZU5vdGljZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybSgn5paH56ug5YiX6KGoJyAsICcvYXJ0aWNsZS9saXN0Jyk7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ2xvYWRpbmcnICwgJ3N1Ym1pdCcgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG4gICAgfVxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlLWNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJtb2R1bGUtbmF2XCIsIHsgYXR0cnM6IHsgdG9wUm91dGU6IF92bS50b3BSb3V0ZSwgcG9zOiBfdm0ucG9zIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2R1bGUtY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpblwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LXRiXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLnRpdGxlKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0aXRsZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuagh+mimFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0udGl0bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ0aXRsZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSwgW192bS5fdihcIipcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLnRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IuYXJ0aWNsZV90eXBlX2lkKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJhcnRpY2xlX3R5cGVfaWRcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLmlofnq6DliIbnsbtcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRhdGE6IF92bS50eXBlLCBoYXM6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5hcnRpY2xlX3R5cGVfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImFydGljbGVfdHlwZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmFydGljbGVfdHlwZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIipcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IuYXJ0aWNsZV90eXBlX2lkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci50aHVtYiksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidGh1bWJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLlsIHpnaJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyByZWY6IFwiaW1hZ2UtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaW1hZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbml0LXNob3ctaW1hZ2UtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFyYW0ubW9kZSA9PSBcImVkaXRcIiAmJiBfdm0uZm9ybS50aHVtYl9leHBsYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbml0LXNob3ctaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5mb3JtLnRodW1iX2V4cGxhaW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZm9ybS5pc19saW5rID09IFwiblwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLmNvbnRlbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJjb250ZW50XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5YaF5a65XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJlZGl0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndhbmctZWRpdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5lY2Vzc2FyeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIipcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IuY29udGVudCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLnNvdXJjZSksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwic291cmNlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5p2l5rqQXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnNvdXJjZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNvdXJjZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5zb3VyY2UpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci53ZWlnaHQpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIndlaWdodFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuadg+mHjVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLndlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS53ZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIsIHN0ZXA6IFwiMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS53ZWlnaHQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ3ZWlnaHRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5lY2Vzc2FyeVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtfdm0uX3YoXCLpu5jorqTvvJowXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci53ZWlnaHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgeyBhdHRyczogeyBpZDogXCJoaWRkZW5cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5piv5ZCm6ZqQ6JePXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYWRpby1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5oaWRkZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImhpZGRlblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLiRzdG9yZS5zdGF0ZS5idXNpbmVzcy5ib29sX3N0ciwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBrLCBhdHRyczogeyBsYWJlbDogayB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHYpKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLpu5jorqTvvJrlkKZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3Iud2VpZ2h0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgeyBhdHRyczogeyBpZDogXCJpc19saW5rXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuaYr+WQpumTvuaOpVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicmFkaW8tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaXNfbGluayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiaXNfbGlua1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmlzX2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS4kc3RvcmUuc3RhdGUuYnVzaW5lc3MuYm9vbF9zdHIsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga1xuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaywgYXR0cnM6IHsgbGFiZWw6IGsgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyh2KSldKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5lY2Vzc2FyeVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi6buY6K6k77ya5ZCm77yM5aaC5p6c6YCJ5oup77ya5piv77yM6YKj5LmI5paH56ug5YaF5a655bCG5peg6ZyA5aGr5YaZ77yI5Lya6Ieq5Yqo6ZqQ6JeP77yJXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5pc19saW5rKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci5saW5rKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJsaW5rXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi6ZO+5o6lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubGluayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ubGluayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImxpbmtcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5lY2Vzc2FyeVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6ZO+5o6l5Zyw5Z2A77yM5L6L5aaC77yaaHR0cHM6Ly93d3cuYmFpZHUuY29tL1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5saW5rKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMylcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1sb2FkaW5nXCIsIHsgcmVmOiBcImxvYWRpbmdcIiB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlbGVjdC1pbWFnZXNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwbG9hZC1zaG93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlLWxpbmVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2UgdXBsb2FkLWltYWdlLWJ0blwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIlwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzZWxlY3RlZC1jb3VudCBoaWRlXCIgfSwgW192bS5fdihcIjEwXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1saW5lXCIgfSwgW192bS5fdihcIuivt+mAieaLqeimgeS4iuS8oOeahOWbvueJh1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsZWFyLXNlbGVjdGVkXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCLmuIXnqbrlt7LpgInmi6nnmoTlm77niYdcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpbWdcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZVwiLCBhdHRyczogeyBzcmM6IFwiXCIgfSB9KV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWltYWdlcy1pbnB1dFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcInVwbG9hZF9pbWFnZXNcIiB9XG4gICAgICAgIH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtfdm0uX3YoXCLov5novrnmmK/mj5DnpLrlhoXlrrlcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJldmlldy1pbWFnZXMgaGlkZVwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2UtaXRlbVwiLFxuICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1maWxlbmFtZVwiOiBcInNhbWEtOTYuanBnXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWdcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgXCJodHRwOi8vcXAzMzNjb20ub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbS83cGVpc2hhbmcuY29tL2F2YXRhci8yMDE3LTExLTEwL2JmMDc1MzFhZDVkZDI4OGFmYzkzYmFiNDdlZThkMjU4LmpwZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsb3NlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNyYzogXCIvVXBsb2FkSW1hZ2VzL0ltYWdlcy9kZWxldGVfdW5mb2N1cy5wbmdcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtZm9jdXNcIjogXCIvVXBsb2FkSW1hZ2VzL0ltYWdlcy9kZWxldGVfZm9jdXMucG5nXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXVuZm9jdXNcIjogXCIvVXBsb2FkSW1hZ2VzL0ltYWdlcy9kZWxldGVfdW5mb2N1cy5wbmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9ncmVzcyBoaWRlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLXRvdGFsXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInAtY3VyXCIgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZyBoaWRlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtc2ctaW5cIiB9LCBbX3ZtLl92KFwi5oiQ5YqfXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaW1hZ2UtbGlzdCBoaWRlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtdGl0bGVcIiB9LCBbX3ZtLl92KFwi5b6F5LiK5Lyg5YiX6KGoXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZS1saXN0XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtY29udGVudCBsaXN0LXRpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtcHJldmlld1wiIH0sIFtfdm0uX3YoXCLlm77niYfpooTop4hcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtdHlwZVwiIH0sIFtfdm0uX3YoXCLnsbvlnotcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtc2l6ZVwiIH0sIFtfdm0uX3YoXCLlpKflsI9cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtc3BlZWRcIiB9LCBbX3ZtLl92KFwi6YCf5bqmXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXN0YXR1c1wiIH0sIFtfdm0uX3YoXCLnirbmgIFcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtb3ByXCIgfSwgW192bS5fdihcIuaTjeS9nFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtY29udGVudCBsaXN0LWJvZHlcIiB9KVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4tYnV0dG9uIHJ1bi1idXR0b24tc3VibWl0XCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLmj5DkuqRcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vd2FuZ0VkaXRvci5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3dhbmdFZGl0b3IuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGhpbmcuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTImaWQ9Y2ZkOTM0YWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90aGluZy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD1jZmQ5MzRhYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL3RoaW5nLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi90aGluZy5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGhpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNmZDkzNGFjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2pzL3RoaW5nLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9qcy90aGluZy5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi4vLi4vLi4vYXNzZXQvY3NzL3dhbmdFZGl0b3IuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4uL3B1YmxpYy9jc3MvcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPWNmZDkzNGFjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUyIGZyb20gXCIuL2Nzcy90aGluZy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD1jZmQ5MzRhYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiY2ZkOTM0YWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx3b3JrXFxcXGNvZGVcXFxcY2FyXFxcXHB1YmxpY1xcXFxtb2R1bGVcXFxcYWRtaW5cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2NmZDkzNGFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2NmZDkzNGFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90aGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2ZkOTM0YWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2ZkOTM0YWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNvdXJjZS92dWUvdmlldy9hcnRpY2xlL3RoaW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90aGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2ZkOTM0YWMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPWNmZDkzNGFjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPWNmZDkzNGFjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==