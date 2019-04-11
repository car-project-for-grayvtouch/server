(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/login/js/login.js?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./source/vue/view/login/js/login.js?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-login",
  data: function data() {
    return {
      form: {
        username: '',
        password: '',
        verify_code: '',
        verify_code_key: ''
      },
      error: {},
      verifyCode: '',
      ins: {},
      ajax: {},
      api: adminApi,
      pending: {
        login: false
      }
    };
  },
  created: function created() {
    // 获取验证码
    this.getVerifyCode();
  },
  mixins: [mixins.loading],
  mounted: function mounted() {},
  methods: {
    check: function check() {
      return {
        status: true,
        field: '',
        value: ''
      };
    },
    // 获取验证码
    getVerifyCode: function getVerifyCode() {
      var _this = this;

      miscApi.verifyCode(function (res, code) {
        if (code != 200) {
          _this.error.code_verify = res;
          vScroll('code_verify');
          return;
        } // 清空错误信息


        _this.error.code_verify = '';
        _this.verifyCode = res.img;
        _this.form.verify_code_key = res.key;
      });
    },
    submit: function submit() {
      var _this2 = this;

      if (this.pending.login) {
        return this.$info('请求中...请耐心等待');
      }

      var filter = this.check();

      if (!filter.status) {
        this.error[filter.field] = filter.value;
        return;
      }

      this.pending.login = true;
      this.ins.loading.show();
      new Promise(function (resolve, reject) {
        _this2.ajax.login = _this2.api.login(_this2.form, function (res, code) {
          resolve();

          if (code != 200) {
            // 重新获取验证码
            _this2.getVerifyCode();

            if (code == 460) {
              _this2.$error(res);

              return;
            }

            _this2.error = G.createObject(_this2.error, res);
            return;
          } // 更新验证码


          G.s.json('token', res); // 获取用户权限范围

          _this2.$router.push({
            name: 'home'
          }); // 跳转到首页

        }, function () {
          resolve();
        });

        _this2.ins.loading.setArgs(_this2.ajax.login, 'login');
      }).then(function () {
        _this2.pending.login = false;

        _this2.ins.loading.hide();
      });
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/login/css/login.css?vue&type=style&index=0&id=73aab6d0&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/login/css/login.css?vue&type=style&index=0&id=73aab6d0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/login/login.vue?vue&type=template&id=73aab6d0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/login/login.vue?vue&type=template&id=73aab6d0&scoped=true& ***!
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
    { staticClass: "container" },
    [
      _c("v-loading", { ref: "loading" }),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "form",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            }
          }
        },
        [
          _c("div", { staticClass: "top" }, [
            _c("div", { staticClass: "image-container" }, [
              _c("img", {
                staticClass: "image",
                attrs: {
                  src:
                    _vm.$store.state.topContext.host +
                    "/static/image/avatar.jpg"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "btm" }, [
            _c("div", { staticClass: "line field" }, [
              _c("div", { staticClass: "top" }, [
                _c("div", { staticClass: "left" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.username,
                        expression: "form.username"
                      }
                    ],
                    staticClass: "input",
                    attrs: { type: "text", placeholder: "请输入用户名" },
                    domProps: { value: _vm.form.username },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "username", $event.target.value)
                        },
                        function($event) {
                          _vm.error.username = ""
                        }
                      ]
                    }
                  })
                ]),
                _vm._v(" "),
                _vm._m(0)
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "btm", class: _vm.getClass(_vm.error.username) },
                [_vm._v(_vm._s(_vm.error.username))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "line field" }, [
              _c("div", { staticClass: "top" }, [
                _c("div", { staticClass: "left" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.password,
                        expression: "form.password"
                      }
                    ],
                    staticClass: "input",
                    attrs: { type: "password", placeholder: "请输入密码" },
                    domProps: { value: _vm.form.password },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "password", $event.target.value)
                        },
                        function($event) {
                          _vm.error.password = ""
                        }
                      ]
                    }
                  })
                ]),
                _vm._v(" "),
                _vm._m(1)
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "btm", class: _vm.getClass(_vm.error.password) },
                [_vm._v(_vm._s(_vm.error.password))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "line field verify_code" }, [
              _c("div", { staticClass: "top" }, [
                _c("div", { staticClass: "left" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.verify_code,
                        expression: "form.verify_code"
                      }
                    ],
                    staticClass: "input",
                    attrs: { type: "text", placeholder: "请输入验证码" },
                    domProps: { value: _vm.form.verify_code },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "verify_code", $event.target.value)
                        },
                        function($event) {
                          _vm.error.verify_code = ""
                        }
                      ]
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("img", {
                    staticClass: "image",
                    attrs: { src: _vm.verifyCode },
                    on: { click: _vm.getVerifyCode }
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "btm",
                  class: _vm.getClass(_vm.error.verify_code)
                },
                [_vm._v(_vm._s(_vm.error.verify_code))]
              )
            ]),
            _vm._v(" "),
            _vm._m(2)
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/user.png */ "./source/vue/view/login/image/user.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/password.png */ "./source/vue/view/login/image/password.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "line btns" }, [
      _c(
        "button",
        {
          staticClass: "run-button run-button-submit",
          attrs: { type: "submit" }
        },
        [_vm._v("提交")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./source/vue/view/login/css/login.css?vue&type=style&index=0&id=73aab6d0&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./source/vue/view/login/css/login.css?vue&type=style&index=0&id=73aab6d0&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_login_css_vue_type_style_index_0_id_73aab6d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./login.css?vue&type=style&index=0&id=73aab6d0&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/login/css/login.css?vue&type=style&index=0&id=73aab6d0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_login_css_vue_type_style_index_0_id_73aab6d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_login_css_vue_type_style_index_0_id_73aab6d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_login_css_vue_type_style_index_0_id_73aab6d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_login_css_vue_type_style_index_0_id_73aab6d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_login_css_vue_type_style_index_0_id_73aab6d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/login/image/password.png":
/*!**************************************************!*\
  !*** ./source/vue/view/login/image/password.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/password.png";

/***/ }),

/***/ "./source/vue/view/login/image/user.png":
/*!**********************************************!*\
  !*** ./source/vue/view/login/image/user.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/user.png";

/***/ }),

/***/ "./source/vue/view/login/js/login.js?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./source/vue/view/login/js/login.js?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_login_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!./login.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/login/js/login.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_login_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/view/login/login.vue":
/*!*****************************************!*\
  !*** ./source/vue/view/login/login.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_73aab6d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=73aab6d0&scoped=true& */ "./source/vue/view/login/login.vue?vue&type=template&id=73aab6d0&scoped=true&");
/* harmony import */ var _js_login_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/login.js?vue&type=script&lang=js& */ "./source/vue/view/login/js/login.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_login_css_vue_type_style_index_0_id_73aab6d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/login.css?vue&type=style&index=0&id=73aab6d0&scoped=true&lang=css& */ "./source/vue/view/login/css/login.css?vue&type=style&index=0&id=73aab6d0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _js_login_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_73aab6d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_73aab6d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "73aab6d0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/view/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/view/login/login.vue?vue&type=template&id=73aab6d0&scoped=true&":
/*!************************************************************************************!*\
  !*** ./source/vue/view/login/login.vue?vue&type=template&id=73aab6d0&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_73aab6d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=73aab6d0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/login/login.vue?vue&type=template&id=73aab6d0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_73aab6d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_73aab6d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvbG9naW4vanMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2xvZ2luL2Nzcy9sb2dpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2xvZ2luL2xvZ2luLnZ1ZT80NGVmIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9sb2dpbi9jc3MvbG9naW4uY3NzPzgzNGEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2xvZ2luL2ltYWdlL3Bhc3N3b3JkLnBuZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvbG9naW4vaW1hZ2UvdXNlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2xvZ2luL2pzL2xvZ2luLmpzPzIyNWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2xvZ2luL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvbG9naW4vbG9naW4udnVlPzdhMzIiXSwibmFtZXMiOlsibmFtZSIsImRhdGEiLCJmb3JtIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInZlcmlmeV9jb2RlIiwidmVyaWZ5X2NvZGVfa2V5IiwiZXJyb3IiLCJ2ZXJpZnlDb2RlIiwiaW5zIiwiYWpheCIsImFwaSIsImFkbWluQXBpIiwicGVuZGluZyIsImxvZ2luIiwiY3JlYXRlZCIsImdldFZlcmlmeUNvZGUiLCJtaXhpbnMiLCJsb2FkaW5nIiwibW91bnRlZCIsIm1ldGhvZHMiLCJjaGVjayIsInN0YXR1cyIsImZpZWxkIiwidmFsdWUiLCJtaXNjQXBpIiwicmVzIiwiY29kZSIsImNvZGVfdmVyaWZ5IiwidlNjcm9sbCIsImltZyIsImtleSIsInN1Ym1pdCIsIiRpbmZvIiwiZmlsdGVyIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiJGVycm9yIiwiRyIsImNyZWF0ZU9iamVjdCIsInMiLCJq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dCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidi1sb2dpblwiICxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgICAgIHZlcmlmeV9jb2RlOiAnJyAsXHJcbiAgICAgICAgICAgICAgICB2ZXJpZnlfY29kZV9rZXk6ICcnICxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IHt9LFxyXG4gICAgICAgICAgICB2ZXJpZnlDb2RlOiAnJyAsXHJcbiAgICAgICAgICAgIGluczoge30gLFxyXG4gICAgICAgICAgICBhamF4OiB7fSAsXHJcbiAgICAgICAgICAgIGFwaTogYWRtaW5BcGkgLFxyXG4gICAgICAgICAgICBwZW5kaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBsb2dpbjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9ICxcclxuICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgIC8vIOiOt+WPlumqjOivgeeggVxyXG4gICAgICAgIHRoaXMuZ2V0VmVyaWZ5Q29kZSgpO1xyXG4gICAgfSAsXHJcbiAgICBtaXhpbnM6IFtcclxuICAgICAgICBtaXhpbnMubG9hZGluZyAsXHJcbiAgICBdICxcclxuICAgIG1vdW50ZWQgKCkge1xyXG5cclxuICAgIH0gLFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNoZWNrICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSAsXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJycgLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOiOt+WPlumqjOivgeeggVxyXG4gICAgICAgIGdldFZlcmlmeUNvZGUgKCkge1xyXG4gICAgICAgICAgICBtaXNjQXBpLnZlcmlmeUNvZGUoKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IuY29kZV92ZXJpZnkgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdlNjcm9sbCgnY29kZV92ZXJpZnknKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g5riF56m66ZSZ6K+v5L+h5oGvXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yLmNvZGVfdmVyaWZ5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeUNvZGUgPSByZXMuaW1nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnZlcmlmeV9jb2RlX2tleSA9IHJlcy5rZXk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBzdWJtaXQgKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nLmxvZ2luKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kaW5mbygn6K+35rGC5LitLi4u6K+36ICQ5b+D562J5b6FJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGZpbHRlciA9IHRoaXMuY2hlY2soKTtcclxuICAgICAgICAgICAgaWYgKCFmaWx0ZXIuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yW2ZpbHRlci5maWVsZF0gPSBmaWx0ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZy5sb2dpbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSAsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hamF4LmxvZ2luID0gdGhpcy5hcGkubG9naW4odGhpcy5mb3JtICwgKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmHjeaWsOiOt+WPlumqjOivgeeggVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFZlcmlmeUNvZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gNDYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlcnJvcihyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gRy5jcmVhdGVPYmplY3QodGhpcy5lcnJvciAsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOabtOaWsOmqjOivgeeggVxyXG4gICAgICAgICAgICAgICAgICAgIEcucy5qc29uKCd0b2tlbicgLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPlueUqOaIt+adg+mZkOiMg+WbtFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaG9tZSd9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDot7PovazliLDpppbpobVcclxuICAgICAgICAgICAgICAgIH0gLCAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zZXRBcmdzKHRoaXMuYWpheC5sb2dpbiAsICdsb2dpbicpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZy5sb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG4gICAgfSAsXHJcbiAgICB3YXRjaDoge1xyXG5cclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LWxvYWRpbmdcIiwgeyByZWY6IFwibG9hZGluZ1wiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZvcm1cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1cIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuc3RhdGUudG9wQ29udGV4dC5ob3N0ICtcbiAgICAgICAgICAgICAgICAgICAgXCIvc3RhdGljL2ltYWdlL2F2YXRhci5qcGdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0bVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZSBmaWVsZFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS51c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWl55So5oi35ZCNXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnVzZXJuYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ1c2VybmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3IudXNlcm5hbWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRtXCIsIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLnVzZXJuYW1lKSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci51c2VybmFtZSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmUgZmllbGRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiLCBwbGFjZWhvbGRlcjogXCLor7fovpPlhaXlr4bnoIFcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvci5wYXNzd29yZCA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG1cIiwgY2xhc3M6IF92bS5nZXRDbGFzcyhfdm0uZXJyb3IucGFzc3dvcmQpIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmVycm9yLnBhc3N3b3JkKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZSBmaWVsZCB2ZXJpZnlfY29kZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS52ZXJpZnlfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS52ZXJpZnlfY29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWl6aqM6K+B56CBXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnZlcmlmeV9jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ2ZXJpZnlfY29kZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3IudmVyaWZ5X2NvZGUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0udmVyaWZ5Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmdldFZlcmlmeUNvZGUgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG1cIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLnZlcmlmeV9jb2RlKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmVycm9yLnZlcmlmeV9jb2RlKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgyKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZS91c2VyLnBuZ1wiKSB9XG4gICAgICB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2UvcGFzc3dvcmQucG5nXCIpIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lIGJ0bnNcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1idXR0b24gcnVuLWJ1dHRvbi1zdWJtaXRcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIuaPkOS6pFwiKV1cbiAgICAgIClcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9sb2dpbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03M2FhYjZkMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2xvZ2luLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTczYWFiNmQwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlL3Bhc3N3b3JkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZS91c2VyLnBuZ1wiOyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL2xvZ2luLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi9sb2dpbi5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTczYWFiNmQwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2pzL2xvZ2luLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9qcy9sb2dpbi5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jc3MvbG9naW4uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzNhYWI2ZDAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjczYWFiNmQwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcd29ya1xcXFxjb2RlXFxcXGNhclxcXFxwdWJsaWNcXFxcbW9kdWxlXFxcXGFkbWluXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3M2FhYjZkMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3M2FhYjZkMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTczYWFiNmQwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzczYWFiNmQwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL3ZpZXcvbG9naW4vbG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03M2FhYjZkMCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=