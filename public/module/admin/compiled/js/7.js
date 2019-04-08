(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/admin/js/user.js?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./source/vue/view/admin/js/user.js?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-route",
  data: function data() {
    return {
      form: {},
      error: {},
      ajax: {
        get: null,
        submit: null
      },
      dom: {},
      ins: {
        loading: null,
        small: null,
        big: null
      },
      pending: {
        submit: null
      },
      data: {},
      callback: {
        image: null
      },
      api: adminApi,
      role: []
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.initDom();
    this.initInstance();
    this.initialize();
  },
  mixins: [mixins.loading],
  methods: {
    initDom: function initDom() {
      this.dom.imageContainer = G(this.$refs['image-container']);
    },
    initInstance: function initInstance() {
      var self = this; // 小图上传

      this.ins.image = new UploadImage(this.dom.imageContainer.get(0), {
        pluginUrl: topContext.plugin + 'UploadImage/',
        mode: 'override',
        url: topContext.imageApi,
        field: 'image',
        success: function success(res, code) {
          if (G.isFunction(self.callback.image)) {
            self.callback.image({
              res: res,
              code: code
            });
          }
        }
      });
    },
    initialize: function initialize() {
      var _this = this;

      new Promise(function (resolve) {
        // 获取角色
        _this.ins.loading.show();

        _this.ajax.all = roleApi.all(function (res, code) {
          resolve();

          if (code != 200) {
            _this.$error(res);

            return;
          }

          _this.role = res;
        });

        _this.ins.loading.setArgs(_this.ajax.all);
      }).then(function () {
        // 获取当前编辑对象
        if (_this.param.mode != 'edit') {
          return;
        }

        return new Promise(function (resolve) {
          _this.ajax.getData = _this.api.detail(_this.param.id, function (res, code) {
            resolve();

            if (code != 200) {
              _this.$error(res);

              return;
            }

            _this.form = res;
          });

          _this.ins.loading.setArgs(_this.ajax.getData);
        });
      }).finally(function () {
        // 隐藏
        _this.ins.loading.hide();
      });
    },
    // 获取数据
    check: function check(data) {
      return {
        status: true,
        field: '',
        msg: ''
      };
    },
    submit: function submit() {
      var _this2 = this;

      if (this.pending.submit) {
        layer.alert('请求中...请耐心等待');
        return;
      }

      var filter = this.check();

      if (!filter.status) {
        this.error[filter.field] = filter.msg;
        vScroll(filter.field);
        return;
      }

      this.pending.submit = true;
      this.ins.loading.show();
      var self = this;
      new Promise(function (resolve) {
        // 上传基本数据
        _this2.ajax.submit = _this2.api[_this2.param.mode](_this2.form, function (res, code) {
          _this2.error = {};

          if (code != 200) {
            _this2.pending.submit = false;

            _this2.ins.loading.hide();

            if (code == 400) {
              _this2.error = res;
              vScroll(G.firstKey(res));
              return;
            }

            if (code == 460) {
              // 特殊错误
              _this2.$error(res);

              return;
            }
          }

          _this2.form.id = res;
          resolve();
        });

        _this2.ins.loading.setArgs(_this2.ajax.submit, 'submit');
      }).then(function () {
        // 上传用户头像
        return new Promise(function (resolve) {
          // 上传用户头像
          if (_this2.ins.image.empty()) {
            resolve();
            return;
          }

          _this2.callback.image = resolve;

          _this2.ins.image.upload();
        });
      }).then(function (res) {
        // 更新用户头像
        return new Promise(function (resolve) {
          if (G.isUndefined(res)) {
            resolve();
            return;
          }

          if (res.code != 200) {
            resolve();

            _this2.eNotice(res.res);

            return;
          }

          res = res.res; // 更新用户头像

          _this2.api.image({
            id: _this2.form.id,
            image: res.url
          }, function (res, code) {
            resolve();

            if (code != 200) {
              _this2.eNotice(res);

              return;
            }
          });
        });
      }).then(function () {
        // 提示成功
        _this2.$success('操作成功', {
          btn: ['继续' + (_this2.param.mode == 'edit' ? '编辑' : '添加'), '用户列表'],
          btn1: function btn1(index) {
            layer.close(index);
          },
          btn2: function btn2() {
            self.location('/admin/list', null, '_self');
          }
        });
      }).finally(function () {
        // 更新状态
        _this2.pending.submit = false;

        _this2.ins.loading.hide();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/admin/css/user.css?vue&type=style&index=2&id=7fb7dc74&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/admin/css/user.css?vue&type=style&index=2&id=7fb7dc74&scoped=true&lang=css& ***!
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=7fb7dc74&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=7fb7dc74&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/admin/user.vue?vue&type=template&id=7fb7dc74&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/admin/user.vue?vue&type=template&id=7fb7dc74&scoped=true& ***!
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
                      class: _vm.getClass(_vm.error.username),
                      attrs: { id: "username" }
                    },
                    [
                      _c("td", [_vm._v("用户名")]),
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
                        _c("span", { staticClass: "tip" }),
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
                      class: _vm.getClass(_vm.error.password),
                      attrs: { id: "password" }
                    },
                    [
                      _c("td", [_vm._v("密码")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "necessary" },
                          [_vm.param.mode == "add" ? [_vm._v("*")] : _vm._e()],
                          2
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }, [
                          _vm._v("密码长度至少6位")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.password))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.avatar),
                      attrs: { id: "avatar" }
                    },
                    [
                      _c("td", [_vm._v("头像")]),
                      _vm._v(" "),
                      _c("td", { ref: "image-container" }, [
                        _c("div", { staticClass: "upload-image" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("div", { staticClass: "init-show-image-list" }, [
                            _vm.param.mode == "edit" && _vm.form.avatar_explain
                              ? _c("img", {
                                  staticClass: "init-show-image",
                                  attrs: { src: _vm.form.avatar_explain }
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
                          _vm._v(_vm._s(_vm.error.avatar))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.phone),
                      attrs: { id: "phone" }
                    },
                    [
                      _c("td", [_vm._v("手机号码")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.phone,
                              expression: "form.phone"
                            }
                          ],
                          staticClass: "form-text",
                          attrs: { type: "number", step: "0" },
                          domProps: { value: _vm.form.phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "phone", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "necessary" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "tip" }, [
                          _vm._v("请输入数字")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "msg" }, [
                          _vm._v(_vm._s(_vm.error.phone))
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      class: _vm.getClass(_vm.error.role_id),
                      attrs: { id: "role_id" }
                    },
                    [
                      _c("td", [_vm._v("用户角色")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "i-select",
                            {
                              staticStyle: { width: "300px" },
                              model: {
                                value: _vm.form.role_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "role_id", $$v)
                                },
                                expression: "form.role_id"
                              }
                            },
                            _vm._l(_vm.role, function(v) {
                              return _c(
                                "i-option",
                                { key: v.id, attrs: { value: v.id } },
                                [_vm._v(_vm._s(v.name))]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "necessary" }, [
                            _vm._v("*")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "tip" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "msg" }, [
                            _vm._v(_vm._s(_vm.error.role_id))
                          ])
                        ],
                        1
                      )
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
          attrs: { type: "file", name: "upload_images", multiple: "multiple" }
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

/***/ "./source/vue/view/admin/css/user.css?vue&type=style&index=2&id=7fb7dc74&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./source/vue/view/admin/css/user.css?vue&type=style&index=2&id=7fb7dc74&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_user_css_vue_type_style_index_2_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./user.css?vue&type=style&index=2&id=7fb7dc74&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/admin/css/user.css?vue&type=style&index=2&id=7fb7dc74&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_user_css_vue_type_style_index_2_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_user_css_vue_type_style_index_2_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_user_css_vue_type_style_index_2_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_user_css_vue_type_style_index_2_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_user_css_vue_type_style_index_2_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/admin/js/user.js?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./source/vue/view/admin/js/user.js?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_user_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!./user.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/admin/js/user.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_user_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/view/admin/user.vue":
/*!****************************************!*\
  !*** ./source/vue/view/admin/user.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_vue_vue_type_template_id_7fb7dc74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.vue?vue&type=template&id=7fb7dc74&scoped=true& */ "./source/vue/view/admin/user.vue?vue&type=template&id=7fb7dc74&scoped=true&");
/* harmony import */ var _js_user_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/user.js?vue&type=script&lang=js& */ "./source/vue/view/admin/js/user.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/global.css?vue&type=style&index=0&lang=css& */ "./source/vue/view/public/css/global.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _public_css_public_css_vue_type_style_index_1_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=1&id=7fb7dc74&scoped=true&lang=css& */ "./source/vue/view/public/css/public.css?vue&type=style&index=1&id=7fb7dc74&scoped=true&lang=css&");
/* harmony import */ var _css_user_css_vue_type_style_index_2_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/user.css?vue&type=style&index=2&id=7fb7dc74&scoped=true&lang=css& */ "./source/vue/view/admin/css/user.css?vue&type=style&index=2&id=7fb7dc74&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _js_user_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_vue_vue_type_template_id_7fb7dc74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_vue_vue_type_template_id_7fb7dc74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7fb7dc74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/view/admin/user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/view/admin/user.vue?vue&type=template&id=7fb7dc74&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./source/vue/view/admin/user.vue?vue&type=template&id=7fb7dc74&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_7fb7dc74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=template&id=7fb7dc74&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/admin/user.vue?vue&type=template&id=7fb7dc74&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_7fb7dc74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_7fb7dc74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./source/vue/view/public/css/public.css?vue&type=style&index=1&id=7fb7dc74&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./source/vue/view/public/css/public.css?vue&type=style&index=1&id=7fb7dc74&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public.css?vue&type=style&index=1&id=7fb7dc74&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=7fb7dc74&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_7fb7dc74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYWRtaW4vanMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYWRtaW4vY3NzL3VzZXIuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz8yM2Q5Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9hZG1pbi91c2VyLnZ1ZT8wOThlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9hZG1pbi9jc3MvdXNlci5jc3M/MjA1MyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYWRtaW4vanMvdXNlci5qcz9kNjE5Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9hZG1pbi91c2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYWRtaW4vdXNlci52dWU/Njc0ZSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL2Nzcy9nbG9iYWwuY3NzP2UwMjIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz9kMmY2Il0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwiZm9ybSIsImVycm9yIiwiYWpheCIsImdldCIsInN1Ym1pdCIsImRvbSIsImlucyIsImxvYWRpbmciLCJzbWFsbCIsImJpZyIsInBlbmRpbmciLCJjYWxsYmFjayIsImltYWdlIiwiYXBpIiwiYWRtaW5BcGkiLCJyb2xlIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJpbml0RG9tIiwiaW5pdEluc3RhbmNlIiwiaW5pdGlhbGl6ZSIsIm1peGlucyIsIm1ldGhvZHMiLCJpbWFnZUNvbnRhaW5lciIsIkciLCIkcmVmcyIsInNlbGYiLCJVcGxvYWRJbWFnZSIsInBsdWdpblVybCIsInRvcENvbnRleHQiLCJwbHVnaW4iLCJtb2RlIiwidXJsIiwiaW1hZ2VBcGkiLCJmaWVsZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwiaXNGdW5jdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwic2hvdyIsImFsbCIsInJvbGVBcGkiLCIkZXJyb3IiLCJzZXRBcmdzIiwidGhlbiIsInBhcmFtIiwiZ2V0RGF0YSIsImRldGFpbCIsImlkIiwiZmluYWxseSIsImhpZGUiLCJjaGVjayIsInN0YXR1cyIsIm1zZyIsImxheWVyIiwiYWxlcnQiLCJmaWx0ZXIiLCJ2U2Nyb2xsIiwiZmlyc3RLZXkiLCJlbXB0eSIsInVwbG9hZCIsImlzVW5kZWZpbmVkIiwiZU5vdGljZSIsIiRzdWNjZXNzIiwiYnRuIiwiYnRuMSIsImluZGV4IiwiY2xvc2UiLCJidG4yIiwibG9jYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFlO0FBQ1hBLE1BQUksRUFBRSxTQURLO0FBRVhDLE1BRlcsa0JBRUg7QUFDSixXQUFPO0FBQ0hDLFVBQUksRUFBRSxFQURIO0FBR0hDLFdBQUssRUFBRSxFQUhKO0FBSUhDLFVBQUksRUFBRTtBQUNGQyxXQUFHLEVBQUUsSUFESDtBQUVGQyxjQUFNLEVBQUU7QUFGTixPQUpIO0FBUUhDLFNBQUcsRUFBRSxFQVJGO0FBU0hDLFNBQUcsRUFBRTtBQUNEQyxlQUFPLEVBQUUsSUFEUjtBQUVEQyxhQUFLLEVBQUUsSUFGTjtBQUdEQyxXQUFHLEVBQUU7QUFISixPQVRGO0FBY0hDLGFBQU8sRUFBRTtBQUNMTixjQUFNLEVBQUU7QUFESCxPQWROO0FBaUJITCxVQUFJLEVBQUUsRUFqQkg7QUFrQkhZLGNBQVEsRUFBRTtBQUNOQyxhQUFLLEVBQUU7QUFERCxPQWxCUDtBQXFCSEMsU0FBRyxFQUFFQyxRQXJCRjtBQXNCSEMsVUFBSSxFQUFFO0FBdEJILEtBQVA7QUF3QkgsR0EzQlU7QUE0QlhDLFNBNUJXLHFCQTRCQSxDQUVWLENBOUJVO0FBK0JYQyxTQS9CVyxxQkErQkE7QUFDUCxTQUFLQyxPQUFMO0FBQ0EsU0FBS0MsWUFBTDtBQUNBLFNBQUtDLFVBQUw7QUFFSCxHQXBDVTtBQXFDWEMsUUFBTSxFQUFFLENBQ0pBLE1BQU0sQ0FBQ2QsT0FESCxDQXJDRztBQXdDWGUsU0FBTyxFQUFFO0FBQ0xKLFdBREsscUJBQ007QUFDUCxXQUFLYixHQUFMLENBQVNrQixjQUFULEdBQTBCQyxDQUFDLENBQUMsS0FBS0MsS0FBTCxDQUFXLGlCQUFYLENBQUQsQ0FBM0I7QUFDSCxLQUhJO0FBS0xOLGdCQUxLLDBCQUtXO0FBQ1osVUFBSU8sSUFBSSxHQUFHLElBQVgsQ0FEWSxDQUdaOztBQUNBLFdBQUtwQixHQUFMLENBQVNNLEtBQVQsR0FBaUIsSUFBSWUsV0FBSixDQUFnQixLQUFLdEIsR0FBTCxDQUFTa0IsY0FBVCxDQUF3QnBCLEdBQXhCLENBQTRCLENBQTVCLENBQWhCLEVBQWlEO0FBQzlEeUIsaUJBQVMsRUFBRUMsVUFBVSxDQUFDQyxNQUFYLEdBQW9CLGNBRCtCO0FBRTlEQyxZQUFJLEVBQUUsVUFGd0Q7QUFHOURDLFdBQUcsRUFBR0gsVUFBVSxDQUFDSSxRQUg2QztBQUk5REMsYUFBSyxFQUFFLE9BSnVEO0FBSzlEQyxlQUw4RCxtQkFLckRDLEdBTHFELEVBSy9DQyxJQUwrQyxFQUt6QztBQUNqQixjQUFJYixDQUFDLENBQUNjLFVBQUYsQ0FBYVosSUFBSSxDQUFDZixRQUFMLENBQWNDLEtBQTNCLENBQUosRUFBdUM7QUFDbkNjLGdCQUFJLENBQUNmLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQjtBQUNoQndCLGlCQUFHLEVBQUhBLEdBRGdCO0FBRWhCQyxrQkFBSSxFQUFKQTtBQUZnQixhQUFwQjtBQUlIO0FBQ0o7QUFaNkQsT0FBakQsQ0FBakI7QUFjSCxLQXZCSTtBQXlCTGpCLGNBekJLLHdCQXlCUztBQUFBOztBQUNWLFVBQUltQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3JCO0FBQ0EsYUFBSSxDQUFDbEMsR0FBTCxDQUFTQyxPQUFULENBQWlCa0MsSUFBakI7O0FBQ0EsYUFBSSxDQUFDdkMsSUFBTCxDQUFVd0MsR0FBVixHQUFnQkMsT0FBTyxDQUFDRCxHQUFSLENBQVksVUFBQ04sR0FBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ3hDRyxpQkFBTzs7QUFDUCxjQUFJSCxJQUFJLElBQUksR0FBWixFQUFpQjtBQUNiLGlCQUFJLENBQUNPLE1BQUwsQ0FBWVIsR0FBWjs7QUFDQTtBQUNIOztBQUNELGVBQUksQ0FBQ3JCLElBQUwsR0FBWXFCLEdBQVo7QUFDSCxTQVBlLENBQWhCOztBQVFBLGFBQUksQ0FBQzlCLEdBQUwsQ0FBU0MsT0FBVCxDQUFpQnNDLE9BQWpCLENBQXlCLEtBQUksQ0FBQzNDLElBQUwsQ0FBVXdDLEdBQW5DO0FBQ0gsT0FaRCxFQVlHSSxJQVpILENBWVEsWUFBTTtBQUNWO0FBQ0EsWUFBSSxLQUFJLENBQUNDLEtBQUwsQ0FBV2hCLElBQVgsSUFBbUIsTUFBdkIsRUFBK0I7QUFDM0I7QUFDSDs7QUFDRCxlQUFPLElBQUlRLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDNUIsZUFBSSxDQUFDdEMsSUFBTCxDQUFVOEMsT0FBVixHQUFvQixLQUFJLENBQUNuQyxHQUFMLENBQVNvQyxNQUFULENBQWdCLEtBQUksQ0FBQ0YsS0FBTCxDQUFXRyxFQUEzQixFQUFnQyxVQUFDZCxHQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDaEVHLG1CQUFPOztBQUNQLGdCQUFJSCxJQUFJLElBQUksR0FBWixFQUFpQjtBQUNiLG1CQUFJLENBQUNPLE1BQUwsQ0FBWVIsR0FBWjs7QUFDQTtBQUNIOztBQUNELGlCQUFJLENBQUNwQyxJQUFMLEdBQVlvQyxHQUFaO0FBQ0gsV0FQbUIsQ0FBcEI7O0FBUUEsZUFBSSxDQUFDOUIsR0FBTCxDQUFTQyxPQUFULENBQWlCc0MsT0FBakIsQ0FBeUIsS0FBSSxDQUFDM0MsSUFBTCxDQUFVOEMsT0FBbkM7QUFDSCxTQVZNLENBQVA7QUFXSCxPQTVCRCxFQTRCR0csT0E1QkgsQ0E0QlcsWUFBTTtBQUNiO0FBQ0EsYUFBSSxDQUFDN0MsR0FBTCxDQUFTQyxPQUFULENBQWlCNkMsSUFBakI7QUFDSCxPQS9CRDtBQWdDSCxLQTFESTtBQTRETDtBQUNBQyxTQTdESyxpQkE2REV0RCxJQTdERixFQTZEUTtBQUNULGFBQU87QUFDSHVELGNBQU0sRUFBRSxJQURMO0FBRUhwQixhQUFLLEVBQUUsRUFGSjtBQUdIcUIsV0FBRyxFQUFFO0FBSEYsT0FBUDtBQUtILEtBbkVJO0FBcUVMbkQsVUFyRUssb0JBcUVLO0FBQUE7O0FBQ04sVUFBSSxLQUFLTSxPQUFMLENBQWFOLE1BQWpCLEVBQXlCO0FBQ3JCb0QsYUFBSyxDQUFDQyxLQUFOLENBQVksYUFBWjtBQUNBO0FBQ0g7O0FBQ0QsVUFBSUMsTUFBTSxHQUFHLEtBQUtMLEtBQUwsRUFBYjs7QUFDQSxVQUFJLENBQUNLLE1BQU0sQ0FBQ0osTUFBWixFQUFvQjtBQUNoQixhQUFLckQsS0FBTCxDQUFXeUQsTUFBTSxDQUFDeEIsS0FBbEIsSUFBMkJ3QixNQUFNLENBQUNILEdBQWxDO0FBQ0FJLGVBQU8sQ0FBQ0QsTUFBTSxDQUFDeEIsS0FBUixDQUFQO0FBQ0E7QUFDSDs7QUFDRCxXQUFLeEIsT0FBTCxDQUFhTixNQUFiLEdBQXNCLElBQXRCO0FBQ0EsV0FBS0UsR0FBTCxDQUFTQyxPQUFULENBQWlCa0MsSUFBakI7QUFDQSxVQUFJZixJQUFJLEdBQUcsSUFBWDtBQUNBLFVBQUlhLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDckI7QUFDQSxjQUFJLENBQUN0QyxJQUFMLENBQVVFLE1BQVYsR0FBbUIsTUFBSSxDQUFDUyxHQUFMLENBQVMsTUFBSSxDQUFDa0MsS0FBTCxDQUFXaEIsSUFBcEIsRUFBMEIsTUFBSSxDQUFDL0IsSUFBL0IsRUFBc0MsVUFBQ29DLEdBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUNyRSxnQkFBSSxDQUFDcEMsS0FBTCxHQUFhLEVBQWI7O0FBQ0EsY0FBSW9DLElBQUksSUFBSSxHQUFaLEVBQWlCO0FBQ2Isa0JBQUksQ0FBQzNCLE9BQUwsQ0FBYU4sTUFBYixHQUFzQixLQUF0Qjs7QUFDQSxrQkFBSSxDQUFDRSxHQUFMLENBQVNDLE9BQVQsQ0FBaUI2QyxJQUFqQjs7QUFDQSxnQkFBSWYsSUFBSSxJQUFJLEdBQVosRUFBaUI7QUFDYixvQkFBSSxDQUFDcEMsS0FBTCxHQUFhbUMsR0FBYjtBQUNBdUIscUJBQU8sQ0FBQ25DLENBQUMsQ0FBQ29DLFFBQUYsQ0FBV3hCLEdBQVgsQ0FBRCxDQUFQO0FBQ0E7QUFDSDs7QUFDRCxnQkFBSUMsSUFBSSxJQUFJLEdBQVosRUFBaUI7QUFDYjtBQUNBLG9CQUFJLENBQUNPLE1BQUwsQ0FBWVIsR0FBWjs7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsZ0JBQUksQ0FBQ3BDLElBQUwsQ0FBVWtELEVBQVYsR0FBZWQsR0FBZjtBQUNBSSxpQkFBTztBQUNWLFNBbEJrQixDQUFuQjs7QUFtQkEsY0FBSSxDQUFDbEMsR0FBTCxDQUFTQyxPQUFULENBQWlCc0MsT0FBakIsQ0FBeUIsTUFBSSxDQUFDM0MsSUFBTCxDQUFVRSxNQUFuQyxFQUE0QyxRQUE1QztBQUNILE9BdEJELEVBc0JHMEMsSUF0QkgsQ0FzQlEsWUFBTTtBQUNWO0FBQ0EsZUFBTyxJQUFJUCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzVCO0FBQ0EsY0FBSSxNQUFJLENBQUNsQyxHQUFMLENBQVNNLEtBQVQsQ0FBZWlELEtBQWYsRUFBSixFQUE0QjtBQUN4QnJCLG1CQUFPO0FBQ1A7QUFDSDs7QUFDRCxnQkFBSSxDQUFDN0IsUUFBTCxDQUFjQyxLQUFkLEdBQXNCNEIsT0FBdEI7O0FBQ0EsZ0JBQUksQ0FBQ2xDLEdBQUwsQ0FBU00sS0FBVCxDQUFla0QsTUFBZjtBQUNILFNBUk0sQ0FBUDtBQVNILE9BakNELEVBaUNHaEIsSUFqQ0gsQ0FpQ1EsVUFBQ1YsR0FBRCxFQUFTO0FBQ2I7QUFDQSxlQUFPLElBQUlHLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDNUIsY0FBSWhCLENBQUMsQ0FBQ3VDLFdBQUYsQ0FBYzNCLEdBQWQsQ0FBSixFQUF3QjtBQUNwQkksbUJBQU87QUFDUDtBQUNIOztBQUNELGNBQUlKLEdBQUcsQ0FBQ0MsSUFBSixJQUFZLEdBQWhCLEVBQXFCO0FBQ2pCRyxtQkFBTzs7QUFDUCxrQkFBSSxDQUFDd0IsT0FBTCxDQUFhNUIsR0FBRyxDQUFDQSxHQUFqQjs7QUFDQTtBQUNIOztBQUNEQSxhQUFHLEdBQUdBLEdBQUcsQ0FBQ0EsR0FBVixDQVY0QixDQVc1Qjs7QUFDQSxnQkFBSSxDQUFDdkIsR0FBTCxDQUFTRCxLQUFULENBQWU7QUFDWHNDLGNBQUUsRUFBRSxNQUFJLENBQUNsRCxJQUFMLENBQVVrRCxFQURIO0FBRVh0QyxpQkFBSyxFQUFFd0IsR0FBRyxDQUFDSjtBQUZBLFdBQWYsRUFHSSxVQUFDSSxHQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDaEJHLG1CQUFPOztBQUNQLGdCQUFJSCxJQUFJLElBQUksR0FBWixFQUFpQjtBQUNiLG9CQUFJLENBQUMyQixPQUFMLENBQWE1QixHQUFiOztBQUNBO0FBQ0g7QUFDSixXQVREO0FBVUgsU0F0Qk0sQ0FBUDtBQXVCSCxPQTFERCxFQTBER1UsSUExREgsQ0EwRFEsWUFBTTtBQUNWO0FBQ0EsY0FBSSxDQUFDbUIsUUFBTCxDQUFjLE1BQWQsRUFBdUI7QUFDbkJDLGFBQUcsRUFBRSxDQUFDLFFBQVEsTUFBSSxDQUFDbkIsS0FBTCxDQUFXaEIsSUFBWCxJQUFtQixNQUFuQixHQUE0QixJQUE1QixHQUFtQyxJQUEzQyxDQUFELEVBQW9ELE1BQXBELENBRGM7QUFFbkJvQyxjQUZtQixnQkFFYkMsS0FGYSxFQUVOO0FBQ1RaLGlCQUFLLENBQUNhLEtBQU4sQ0FBWUQsS0FBWjtBQUNILFdBSmtCO0FBS25CRSxjQUxtQixrQkFLWDtBQUNKNUMsZ0JBQUksQ0FBQzZDLFFBQUwsQ0FBYyxhQUFkLEVBQThCLElBQTlCLEVBQXFDLE9BQXJDO0FBQ0g7QUFQa0IsU0FBdkI7QUFTSCxPQXJFRCxFQXFFR3BCLE9BckVILENBcUVXLFlBQU07QUFDYjtBQUNBLGNBQUksQ0FBQ3pDLE9BQUwsQ0FBYU4sTUFBYixHQUFzQixLQUF0Qjs7QUFDQSxjQUFJLENBQUNFLEdBQUwsQ0FBU0MsT0FBVCxDQUFpQjZDLElBQWpCO0FBQ0gsT0F6RUQ7QUEwRUg7QUE3Skk7QUF4Q0UsQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGtDQUFrQztBQUN2QztBQUNBLHdCQUF3QixTQUFTLHVDQUF1QyxFQUFFO0FBQzFFO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRCxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxlQUFlO0FBQ2pELHFDQUFxQywyQkFBMkI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0Esb0NBQW9DLDJCQUEyQjtBQUMvRDtBQUNBLG9DQUFvQyxxQkFBcUI7QUFDekQ7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGVBQWU7QUFDakQscUNBQXFDLDJCQUEyQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxQkFBcUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFCQUFxQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHlCQUF5QjtBQUN6RCxtQ0FBbUMsOEJBQThCO0FBQ2pFO0FBQ0E7QUFDQSxxQ0FBcUMsc0NBQXNDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFDQUFxQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxQkFBcUI7QUFDekQ7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDRCQUE0QjtBQUM5RCxxQ0FBcUMsd0JBQXdCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxvQ0FBb0MsMkJBQTJCO0FBQy9EO0FBQ0Esb0NBQW9DLHFCQUFxQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsaUJBQWlCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9CQUFvQixjQUFjLEVBQUU7QUFDckU7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMkJBQTJCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxxQkFBcUI7QUFDM0Q7QUFDQSxzQ0FBc0MscUJBQXFCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0JBQStCO0FBQ3JELGlCQUFpQiw2QkFBNkI7QUFDOUMsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWCxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYLHNCQUFzQiwrQkFBK0IsVUFBVSxFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3Q0FBd0M7QUFDOUQsaUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBLGlCQUFpQiw0QkFBNEI7QUFDN0MsbUJBQW1CLHlDQUF5QztBQUM1RCxxQkFBcUIsa0NBQWtDO0FBQ3ZEO0FBQ0EscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBLHFCQUFxQiwrQkFBK0I7QUFDcEQ7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RDtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7QUFDQTtBQUNBLG1CQUFtQix3Q0FBd0M7QUFDM0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVMsZUFBZSxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1VkE7QUFBQTtBQUFBO0FBQUE7QUFBOFIsQ0FBZ0IsK1RBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbFQ7QUFBQTtBQUFBLHdDQUFxSCxDQUFnQixxTEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRjtBQUNyQztBQUNMO0FBQ3lCO0FBQ3dCO0FBQ1Y7OztBQUc1RjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN6Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBd1EsQ0FBZ0IseVNBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBNVI7QUFBQTtBQUFBO0FBQUE7QUFBZ1MsQ0FBZ0IsaVVBQUcsRUFBQyxDIiwiZmlsZSI6ImpzLzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInYtcm91dGVcIiAsXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBlcnJvcjoge30gLFxyXG4gICAgICAgICAgICBhamF4OiB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IG51bGwgLFxyXG4gICAgICAgICAgICAgICAgc3VibWl0OiBudWxsICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGRvbToge30gLFxyXG4gICAgICAgICAgICBpbnM6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IG51bGwgLFxyXG4gICAgICAgICAgICAgICAgc21hbGw6IG51bGwgLFxyXG4gICAgICAgICAgICAgICAgYmlnOiBudWxsICxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGVuZGluZzoge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0OiBudWxsICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9ICxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiBudWxsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBhcGk6IGFkbWluQXBpICxcclxuICAgICAgICAgICAgcm9sZTogW10gLFxyXG4gICAgICAgIH07XHJcbiAgICB9ICxcclxuICAgIGNyZWF0ZWQgKCkge1xyXG5cclxuICAgIH0gLFxyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0RG9tKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SW5zdGFuY2UoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuXHJcbiAgICB9ICxcclxuICAgIG1peGluczogW1xyXG4gICAgICAgIG1peGlucy5sb2FkaW5nICxcclxuICAgIF0gLFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGluaXREb20gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5pbWFnZUNvbnRhaW5lciA9IEcodGhpcy4kcmVmc1snaW1hZ2UtY29udGFpbmVyJ10pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0SW5zdGFuY2UgKCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvLyDlsI/lm77kuIrkvKBcclxuICAgICAgICAgICAgdGhpcy5pbnMuaW1hZ2UgPSBuZXcgVXBsb2FkSW1hZ2UodGhpcy5kb20uaW1hZ2VDb250YWluZXIuZ2V0KDApICwge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luVXJsOiB0b3BDb250ZXh0LnBsdWdpbiArICdVcGxvYWRJbWFnZS8nICxcclxuICAgICAgICAgICAgICAgIG1vZGU6ICdvdmVycmlkZScgLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAgdG9wQ29udGV4dC5pbWFnZUFwaSAsXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ2ltYWdlJyAsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzIChyZXMgLCBjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEcuaXNGdW5jdGlvbihzZWxmLmNhbGxiYWNrLmltYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxiYWNrLmltYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRpYWxpemUgKCkge1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g6I635Y+W6KeS6ImyXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWpheC5hbGwgPSByb2xlQXBpLmFsbCgocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZXJyb3IocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb2xlID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLnNldEFyZ3ModGhpcy5hamF4LmFsbCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g6I635Y+W5b2T5YmN57yW6L6R5a+56LGhXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbS5tb2RlICE9ICdlZGl0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFqYXguZ2V0RGF0YSA9IHRoaXMuYXBpLmRldGFpbCh0aGlzLnBhcmFtLmlkICwgKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVycm9yKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLnNldEFyZ3ModGhpcy5hamF4LmdldERhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g6ZqQ6JePXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOiOt+WPluaVsOaNrlxyXG4gICAgICAgIGNoZWNrIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUgLFxyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICcnICxcclxuICAgICAgICAgICAgICAgIG1zZzogJycgLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBzdWJtaXQgKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgbGF5ZXIuYWxlcnQoJ+ivt+axguS4rS4uLuivt+iAkOW/g+etieW+hScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZmlsdGVyID0gdGhpcy5jaGVjaygpO1xyXG4gICAgICAgICAgICBpZiAoIWZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JbZmlsdGVyLmZpZWxkXSA9IGZpbHRlci5tc2c7XHJcbiAgICAgICAgICAgICAgICB2U2Nyb2xsKGZpbHRlci5maWVsZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZy5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5LiK5Lyg5Z+65pys5pWw5o2uXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFqYXguc3VibWl0ID0gdGhpcy5hcGlbdGhpcy5wYXJhbS5tb2RlXSh0aGlzLmZvcm0gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdlNjcm9sbChHLmZpcnN0S2V5KHJlcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSA9PSA0NjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeJueauiumUmeivr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZXJyb3IocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmlkID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zZXRBcmdzKHRoaXMuYWpheC5zdWJtaXQgLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5LiK5Lyg55So5oi35aS05YOPXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDkuIrkvKDnlKjmiLflpLTlg49cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnMuaW1hZ2UuZW1wdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2suaW1hZ2UgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zLmltYWdlLnVwbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5pu05paw55So5oi35aS05YOPXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRy5pc1VuZGVmaW5lZChyZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZU5vdGljZShyZXMucmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gcmVzLnJlcztcclxuICAgICAgICAgICAgICAgICAgICAvLyDmm7TmlrDnlKjmiLflpLTlg49cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaS5pbWFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmZvcm0uaWQgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogcmVzLnVybCAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsIChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVOb3RpY2UocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOaPkOekuuaIkOWKn1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3VjY2Vzcygn5pON5L2c5oiQ5YqfJyAsIHtcclxuICAgICAgICAgICAgICAgICAgICBidG46IFsn57un57utJyArICh0aGlzLnBhcmFtLm1vZGUgPT0gJ2VkaXQnID8gJ+e8lui+kScgOiAn5re75YqgJykgLCAn55So5oi35YiX6KGoJ10gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ0bjEgKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLmNsb3NlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICBidG4yICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2NhdGlvbignL2FkbWluL2xpc3QnICwgbnVsbCAsICdfc2VsZicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOabtOaWsOeKtuaAgVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG4gICAgfVxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlLWNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJtb2R1bGUtbmF2XCIsIHsgYXR0cnM6IHsgdG9wUm91dGU6IF92bS50b3BSb3V0ZSwgcG9zOiBfdm0ucG9zIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2R1bGUtY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpblwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LXRiXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLnVzZXJuYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ1c2VybmFtZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIueUqOaIt+WQjVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0udXNlcm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSwgW192bS5fdihcIipcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLnVzZXJuYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IucGFzc3dvcmQpLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInBhc3N3b3JkXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5a+G56CBXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5wYXJhbS5tb2RlID09IFwiYWRkXCIgPyBbX3ZtLl92KFwiKlwiKV0gOiBfdm0uX2UoKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLlr4bnoIHplb/luqboh7PlsJE25L2NXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLnBhc3N3b3JkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IuYXZhdGFyKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJhdmF0YXJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLlpLTlg49cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyByZWY6IFwiaW1hZ2UtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtaW1hZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbml0LXNob3ctaW1hZ2UtbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFyYW0ubW9kZSA9PSBcImVkaXRcIiAmJiBfdm0uZm9ybS5hdmF0YXJfZXhwbGFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5pdC1zaG93LWltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uZm9ybS5hdmF0YXJfZXhwbGFpbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByZXZpZXctaW1hZ2VzIGhpZGVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLmF2YXRhcikpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLnBob25lKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwaG9uZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuaJi+acuuWPt+eggVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIm51bWJlclwiLCBzdGVwOiBcIjBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucGhvbmUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwaG9uZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLor7fovpPlhaXmlbDlrZdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IucGhvbmUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci5yb2xlX2lkKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJyb2xlX2lkXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi55So5oi36KeS6ImyXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjMwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yb2xlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicm9sZV9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yb2xlX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucm9sZSwgZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImktb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiB2LmlkLCBhdHRyczogeyB2YWx1ZTogdi5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHYubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmVjZXNzYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIipcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3Iucm9sZV9pZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1sb2FkaW5nXCIsIHsgcmVmOiBcImxvYWRpbmdcIiB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlbGVjdC1pbWFnZXNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwbG9hZC1zaG93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlLWxpbmVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2UgdXBsb2FkLWltYWdlLWJ0blwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIlwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzZWxlY3RlZC1jb3VudCBoaWRlXCIgfSwgW192bS5fdihcIjEwXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1saW5lXCIgfSwgW192bS5fdihcIuivt+mAieaLqeimgeS4iuS8oOeahOWbvueJh1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsZWFyLXNlbGVjdGVkXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCLmuIXnqbrlt7LpgInmi6nnmoTlm77niYdcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpbWdcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZVwiLCBhdHRyczogeyBzcmM6IFwiXCIgfSB9KV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWltYWdlcy1pbnB1dFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcInVwbG9hZF9pbWFnZXNcIiwgbXVsdGlwbGU6IFwibXVsdGlwbGVcIiB9XG4gICAgICAgIH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtfdm0uX3YoXCLov5novrnmmK/mj5DnpLrlhoXlrrlcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWltYWdlLWxpc3QgaGlkZVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXBsb2FkLXRpdGxlXCIgfSwgW192bS5fdihcIuW+heS4iuS8oOWIl+ihqFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2UtbGlzdFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LWNvbnRlbnQgbGlzdC10aXRsZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXByZXZpZXdcIiB9LCBbX3ZtLl92KFwi5Zu+54mH6aKE6KeIXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXR5cGVcIiB9LCBbX3ZtLl92KFwi57G75Z6LXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXNpemVcIiB9LCBbX3ZtLl92KFwi5aSn5bCPXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LXNwZWVkXCIgfSwgW192bS5fdihcIumAn+W6plwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1zdGF0dXNcIiB9LCBbX3ZtLl92KFwi54q25oCBXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0gZGl2LW9wclwiIH0sIFtfdm0uX3YoXCLmk43kvZxcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LWNvbnRlbnQgbGlzdC1ib2R5XCIgfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicnVuLWJ1dHRvbiBydW4tYnV0dG9uLXN1Ym1pdFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi5o+Q5LqkXCIpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3VzZXIuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTImaWQ9N2ZiN2RjNzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi91c2VyLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPTdmYjdkYzc0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4vdXNlci5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4vdXNlci5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdXNlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2ZiN2RjNzQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vanMvdXNlci5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vanMvdXNlci5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi4vcHVibGljL2Nzcy9nbG9iYWwuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4uL3B1YmxpYy9jc3MvcHVibGljLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTdmYjdkYzc0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUyIGZyb20gXCIuL2Nzcy91c2VyLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPTdmYjdkYzc0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3ZmI3ZGM3NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdvcmtcXFxcY29kZVxcXFxjYXJcXFxccHVibGljXFxcXG1vZHVsZVxcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2ZiN2RjNzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2ZiN2RjNzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdmYjdkYzc0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdmYjdkYzc0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL3ZpZXcvYWRtaW4vdXNlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXNlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2ZiN2RjNzQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vZ2xvYmFsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vZ2xvYmFsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD03ZmI3ZGM3NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD03ZmI3ZGM3NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=