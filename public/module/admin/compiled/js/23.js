(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

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

            _this2.$error(res);

            return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYWRtaW4vanMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYWRtaW4vY3NzL3VzZXIuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz8yM2Q5Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9hZG1pbi91c2VyLnZ1ZT8wOThlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9hZG1pbi9jc3MvdXNlci5jc3M/MjA1MyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYWRtaW4vanMvdXNlci5qcz9kNjE5Iiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9hZG1pbi91c2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvYWRtaW4vdXNlci52dWU/Njc0ZSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL2Nzcy9nbG9iYWwuY3NzP2UwMjIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcz9kMmY2Il0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwiZm9ybSIsImVycm9yIiwiYWpheCIsImdldCIsInN1Ym1pdCIsImRvbSIsImlucyIsImxvYWRpbmciLCJzbWFsbCIsImJpZyIsInBlbmRpbmciLCJjYWxsYmFjayIsImltYWdlIiwiYXBpIiwiYWRtaW5BcGkiLCJyb2xlIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJpbml0RG9tIiwiaW5pdEluc3RhbmNlIiwiaW5pdGlhbGl6ZSIsIm1peGlucyIsIm1ldGhvZHMiLCJpbWFnZUNvbnRhaW5lciIsIkciLCIkcmVmcyIsInNlbGYiLCJVcGxvYWRJbWFnZSIsInBsdWdpblVybCIsInRvcENvbnRleHQiLCJwbHVnaW4iLCJtb2RlIiwidXJsIiwiaW1hZ2VBcGkiLCJmaWVsZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwiaXNGdW5jdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwic2hvdyIsImFsbCIsInJvbGVBcGkiLCIkZXJyb3IiLCJzZXRBcmdzIiwidGhlbiIsInBhcmFtIiwiZ2V0RGF0YSIsImRldGFpbCIsImlkIiwiZmluYWxseSIsImhpZGUiLCJjaGVjayIsInN0YXR1cyIsIm1zZyIsImxheWVyIiwiYWxlcnQiLCJmaWx0ZXIiLCJ2U2Nyb2xsIiwiZmlyc3RLZXkiLCJlbXB0eSIsInVwbG9hZCIsImlzVW5kZWZpbmVkIiwiZU5vdGljZSIsIiRzdWNjZXNzIiwiYnRuIiwiYnRuMSIsImluZGV4IiwiY2xvc2UiLCJidG4yIiwibG9jYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFlO0FBQ1hBLE1BQUksRUFBRSxTQURLO0FBRVhDLE1BRlcsa0JBRUg7QUFDSixXQUFPO0FBQ0hDLFVBQUksRUFBRSxFQURIO0FBR0hDLFdBQUssRUFBRSxFQUhKO0FBSUhDLFVBQUksRUFBRTtBQUNGQyxXQUFHLEVBQUUsSUFESDtBQUVGQyxjQUFNLEVBQUU7QUFGTixPQUpIO0FBUUhDLFNBQUcsRUFBRSxFQVJGO0FBU0hDLFNBQUcsRUFBRTtBQUNEQyxlQUFPLEVBQUUsSUFEUjtBQUVEQyxhQUFLLEVBQUUsSUFGTjtBQUdEQyxXQUFHLEVBQUU7QUFISixPQVRGO0FBY0hDLGFBQU8sRUFBRTtBQUNMTixjQUFNLEVBQUU7QUFESCxPQWROO0FBaUJITCxVQUFJLEVBQUUsRUFqQkg7QUFrQkhZLGNBQVEsRUFBRTtBQUNOQyxhQUFLLEVBQUU7QUFERCxPQWxCUDtBQXFCSEMsU0FBRyxFQUFFQyxRQXJCRjtBQXNCSEMsVUFBSSxFQUFFO0FBdEJILEtBQVA7QUF3QkgsR0EzQlU7QUE0QlhDLFNBNUJXLHFCQTRCQSxDQUVWLENBOUJVO0FBK0JYQyxTQS9CVyxxQkErQkE7QUFDUCxTQUFLQyxPQUFM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QzNEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTLGVBQWUsRUFBRTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNVZBO0FBQUE7QUFBQTtBQUFBO0FBQThSLENBQWdCLCtUQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWxUO0FBQUE7QUFBQSx3Q0FBcUgsQ0FBZ0IscUxBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBekk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0Y7QUFDckM7QUFDTDtBQUN5QjtBQUN3QjtBQUNWOzs7QUFHNUY7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDekNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXdRLENBQWdCLHlTQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTVSO0FBQUE7QUFBQTtBQUFBO0FBQWdTLENBQWdCLGlVQUFHLEVBQUMsQyIsImZpbGUiOiJqcy8yMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidi1yb3V0ZVwiICxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGVycm9yOiB7fSAsXHJcbiAgICAgICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgICAgIGdldDogbnVsbCAsXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgZG9tOiB7fSAsXHJcbiAgICAgICAgICAgIGluczoge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogbnVsbCAsXHJcbiAgICAgICAgICAgICAgICBzbWFsbDogbnVsbCAsXHJcbiAgICAgICAgICAgICAgICBiaWc6IG51bGwgLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwZW5kaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgZGF0YToge30gLFxyXG4gICAgICAgICAgICBjYWxsYmFjazoge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG51bGxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIGFwaTogYWRtaW5BcGkgLFxyXG4gICAgICAgICAgICByb2xlOiBbXSAsXHJcbiAgICAgICAgfTtcclxuICAgIH0gLFxyXG4gICAgY3JlYXRlZCAoKSB7XHJcblxyXG4gICAgfSAsXHJcbiAgICBtb3VudGVkICgpIHtcclxuICAgICAgICB0aGlzLmluaXREb20oKTtcclxuICAgICAgICB0aGlzLmluaXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIH0gLFxyXG4gICAgbWl4aW5zOiBbXHJcbiAgICAgICAgbWl4aW5zLmxvYWRpbmcgLFxyXG4gICAgXSAsXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaW5pdERvbSAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmltYWdlQ29udGFpbmVyID0gRyh0aGlzLiRyZWZzWydpbWFnZS1jb250YWluZXInXSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRJbnN0YW5jZSAoKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8vIOWwj+WbvuS4iuS8oFxyXG4gICAgICAgICAgICB0aGlzLmlucy5pbWFnZSA9IG5ldyBVcGxvYWRJbWFnZSh0aGlzLmRvbS5pbWFnZUNvbnRhaW5lci5nZXQoMCkgLCB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5Vcmw6IHRvcENvbnRleHQucGx1Z2luICsgJ1VwbG9hZEltYWdlLycgLFxyXG4gICAgICAgICAgICAgICAgbW9kZTogJ292ZXJyaWRlJyAsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICB0b3BDb250ZXh0LmltYWdlQXBpICxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnaW1hZ2UnICxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcyAsIGNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRy5pc0Z1bmN0aW9uKHNlbGYuY2FsbGJhY2suaW1hZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbGJhY2suaW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgaW5pdGlhbGl6ZSAoKSB7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDojrflj5bop5LoibJcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hamF4LmFsbCA9IHJvbGVBcGkuYWxsKChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlcnJvcihyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbGUgPSByZXM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2V0QXJncyh0aGlzLmFqYXguYWxsKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDojrflj5blvZPliY3nvJbovpHlr7nosaFcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtLm1vZGUgIT0gJ2VkaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWpheC5nZXREYXRhID0gdGhpcy5hcGkuZGV0YWlsKHRoaXMucGFyYW0uaWQgLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZXJyb3IocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2V0QXJncyh0aGlzLmFqYXguZ2V0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDpmpDol49cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g6I635Y+W5pWw5o2uXHJcbiAgICAgICAgY2hlY2sgKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSAsXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJycgLFxyXG4gICAgICAgICAgICAgICAgbXNnOiAnJyAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHN1Ym1pdCAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlbmRpbmcuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICBsYXllci5hbGVydCgn6K+35rGC5LitLi4u6K+36ICQ5b+D562J5b6FJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXIgPSB0aGlzLmNoZWNrKCk7XHJcbiAgICAgICAgICAgIGlmICghZmlsdGVyLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcltmaWx0ZXIuZmllbGRdID0gZmlsdGVyLm1zZztcclxuICAgICAgICAgICAgICAgIHZTY3JvbGwoZmlsdGVyLmZpZWxkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nLnN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDkuIrkvKDln7rmnKzmlbDmja5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWpheC5zdWJtaXQgPSB0aGlzLmFwaVt0aGlzLnBhcmFtLm1vZGVdKHRoaXMuZm9ybSAsIChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmcuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSA9PSA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2U2Nyb2xsKEcuZmlyc3RLZXkocmVzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVycm9yKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5pZCA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2V0QXJncyh0aGlzLmFqYXguc3VibWl0ICwgJ3N1Ym1pdCcpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOS4iuS8oOeUqOaIt+WktOWDj1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5LiK5Lyg55So5oi35aS05YOPXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5zLmltYWdlLmVtcHR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmltYWdlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucy5pbWFnZS51cGxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOabtOaWsOeUqOaIt+WktOWDj1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEcuaXNVbmRlZmluZWQocmVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVOb3RpY2UocmVzLnJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IHJlcy5yZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5pu05paw55So5oi35aS05YOPXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkuaW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5mb3JtLmlkICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHJlcy51cmwgLFxyXG4gICAgICAgICAgICAgICAgICAgIH0gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lTm90aWNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDmj5DnpLrmiJDlip9cclxuICAgICAgICAgICAgICAgIHRoaXMuJHN1Y2Nlc3MoJ+aTjeS9nOaIkOWKnycgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuOiBbJ+e7p+e7rScgKyAodGhpcy5wYXJhbS5tb2RlID09ICdlZGl0JyA/ICfnvJbovpEnIDogJ+a3u+WKoCcpICwgJ+eUqOaIt+WIl+ihqCddICxcclxuICAgICAgICAgICAgICAgICAgICBidG4xIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jbG9zZShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAgYnRuMiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubG9jYXRpb24oJy9hZG1pbi9saXN0JyAsIG51bGwgLCAnX3NlbGYnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDmm7TmlrDnirbmgIFcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZy5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZHVsZS1jb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwibW9kdWxlLW5hdlwiLCB7IGF0dHJzOiB7IHRvcFJvdXRlOiBfdm0udG9wUm91dGUsIHBvczogX3ZtLnBvcyB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kdWxlLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5cIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC10YlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci51c2VybmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidXNlcm5hbWVcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnlKjmiLflkI1cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS51c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnVzZXJuYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5lY2Vzc2FyeVwiIH0sIFtfdm0uX3YoXCIqXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci51c2VybmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLnBhc3N3b3JkKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwYXNzd29yZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuWvhueggVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5lY2Vzc2FyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0ucGFyYW0ubW9kZSA9PSBcImFkZFwiID8gW192bS5fdihcIipcIildIDogX3ZtLl9lKCldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5a+G56CB6ZW/5bqm6Iez5bCRNuS9jVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5wYXNzd29yZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLmF2YXRhciksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYXZhdGFyXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5aS05YOPXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgcmVmOiBcImltYWdlLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXBsb2FkLWltYWdlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5pdC1zaG93LWltYWdlLWxpc3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhcmFtLm1vZGUgPT0gXCJlZGl0XCIgJiYgX3ZtLmZvcm0uYXZhdGFyX2V4cGxhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImluaXQtc2hvdy1pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmZvcm0uYXZhdGFyX2V4cGxhaW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3LWltYWdlcyBoaWRlXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5hdmF0YXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci5waG9uZSksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwicGhvbmVcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLmiYvmnLrlj7fnoIFcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiwgc3RlcDogXCIwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnBob25lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGhvbmVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5lY2Vzc2FyeVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6K+36L6T5YWl5pWw5a2XXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLnBob25lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3Iucm9sZV9pZCksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwicm9sZV9pZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIueUqOaIt+inkuiJslwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaS1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIzMDBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucm9sZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJvbGVfaWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucm9sZV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnJvbGUsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogdi5pZCwgYXR0cnM6IHsgdmFsdWU6IHYuaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh2Lm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5lY2Vzc2FyeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIqXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9yLnJvbGVfaWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtbG9hZGluZ1wiLCB7IHJlZjogXCJsb2FkaW5nXCIgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZWxlY3QtaW1hZ2VzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1cGxvYWQtc2hvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZS1saW5lXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlIHVwbG9hZC1pbWFnZS1idG5cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2VsZWN0ZWQtY291bnQgaGlkZVwiIH0sIFtfdm0uX3YoXCIxMFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbGluZVwiIH0sIFtfdm0uX3YoXCLor7fpgInmi6nopoHkuIrkvKDnmoTlm77niYdcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbGVhci1zZWxlY3RlZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi5riF56m65bey6YCJ5oup55qE5Zu+54mHXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW19jKFwiaW1nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIiwgYXR0cnM6IHsgc3JjOiBcIlwiIH0gfSldXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1pbWFnZXMtaW5wdXRcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZpbGVcIiwgbmFtZTogXCJ1cGxvYWRfaW1hZ2VzXCIsIG11bHRpcGxlOiBcIm11bHRpcGxlXCIgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBcIiB9LCBbX3ZtLl92KFwi6L+Z6L655piv5o+Q56S65YaF5a65XCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwbG9hZC1pbWFnZS1saXN0IGhpZGVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVwbG9hZC10aXRsZVwiIH0sIFtfdm0uX3YoXCLlvoXkuIrkvKDliJfooahcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlLWxpc3RcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1jb250ZW50IGxpc3QtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1wcmV2aWV3XCIgfSwgW192bS5fdihcIuWbvueJh+mihOiniFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi10eXBlXCIgfSwgW192bS5fdihcIuexu+Wei1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1zaXplXCIgfSwgW192bS5fdihcIuWkp+Wwj1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1zcGVlZFwiIH0sIFtfdm0uX3YoXCLpgJ/luqZcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbSBkaXYtc3RhdHVzXCIgfSwgW192bS5fdihcIueKtuaAgVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtIGRpdi1vcHJcIiB9LCBbX3ZtLl92KFwi5pON5L2cXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1jb250ZW50IGxpc3QtYm9keVwiIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1idXR0b24gcnVuLWJ1dHRvbi1zdWJtaXRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuaPkOS6pFwiKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi91c2VyLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPTdmYjdkYzc0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdXNlci5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD03ZmI3ZGM3NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL3VzZXIuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL3VzZXIuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdmYjdkYzc0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2pzL3VzZXIuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2pzL3VzZXIuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4uL3B1YmxpYy9jc3MvZ2xvYmFsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuLi9wdWJsaWMvY3NzL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD03ZmI3ZGM3NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMiBmcm9tIFwiLi9jc3MvdXNlci5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD03ZmI3ZGM3NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiN2ZiN2RjNzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx3b3JrXFxcXGNvZGVcXFxcY2FyXFxcXHB1YmxpY1xcXFxtb2R1bGVcXFxcYWRtaW5cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdmYjdkYzc0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdmYjdkYzc0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi91c2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZmI3ZGM3NCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZmI3ZGM3NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic291cmNlL3Z1ZS92aWV3L2FkbWluL3VzZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdmYjdkYzc0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9N2ZiN2RjNzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9N2ZiN2RjNzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiXSwic291cmNlUm9vdCI6IiJ9