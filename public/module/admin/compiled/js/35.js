(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

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
          _vm._m(0),
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
                _vm._m(1)
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
                _vm._m(2)
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
            _vm._m(3)
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
    return _c("div", { staticClass: "top" }, [
      _c("div", { staticClass: "image-container" }, [
        _c("img", {
          staticClass: "image",
          attrs: { src: "/static/image/logo.jpg" }
        })
      ])
    ])
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvbG9naW4vanMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2xvZ2luL2Nzcy9sb2dpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2xvZ2luL2xvZ2luLnZ1ZT80NGVmIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9sb2dpbi9jc3MvbG9naW4uY3NzPzgzNGEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2xvZ2luL2ltYWdlL3Bhc3N3b3JkLnBuZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvbG9naW4vaW1hZ2UvdXNlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2xvZ2luL2pzL2xvZ2luLmpzPzIyNWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2xvZ2luL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvbG9naW4vbG9naW4udnVlPzdhMzIiXSwibmFtZXMiOlsibmFtZSIsImRhdGEiLCJmb3JtIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInZlcmlmeV9jb2RlIiwidmVyaWZ5X2NvZGVfa2V5IiwiZXJyb3IiLCJ2ZXJpZnlDb2RlIiwiaW5zIiwiYWpheCIsImFwaSIsImFkbWluQXBpIiwicGVuZGluZyIsImxvZ2luIiwiY3JlYXRlZCIsImdldFZlcmlmeUNvZGUiLCJtaXhpbnMiLCJsb2FkaW5nIiwibW91bnRlZCIsIm1ldGhvZHMiLCJjaGVjayIsInN0YXR1cyIsImZpZWxkIiwidmFsdWUiLCJtaXNjQXBpIiwicmVzIiwiY29kZSIsImNvZGVfdmVyaWZ5IiwidlNjcm9sbCIsImltZyIsImtleSIsInN1Ym1pdCIsIiRpbmZvIiwiZmlsdGVyIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiJGVycm9yIiwiRyIsImNyZWF0ZU9iamVjdCIsInMiLCJqc29uIiwiJHJvdXRlciIsInB1c2giLCJzZXRBcmdzIiwidGhlbiIsImhpZGUiLCJ3YXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWU7QUFDWEEsTUFBSSxFQUFFLFNBREs7QUFFWEMsTUFGVyxrQkFFSDtBQUNKLFdBQU87QUFDSEMsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUUsRUFEUjtBQUVGQyxnQkFBUSxFQUFFLEVBRlI7QUFHRkMsbUJBQVcsRUFBRSxFQUhYO0FBSUZDLHVCQUFlLEVBQUU7QUFKZixPQURIO0FBT0hDLFdBQUssRUFBRSxFQVBKO0FBUUhDLGdCQUFVLEVBQUUsRUFSVDtBQVNIQyxTQUFHLEVBQUUsRUFURjtBQVVIQyxVQUFJLEVBQUUsRUFWSDtBQVdIQyxTQUFHLEVBQUVDLFFBWEY7QUFZSEMsYUFBTyxFQUFFO0FBQ0xDLGFBQUssRUFBRTtBQURGO0FBWk4sS0FBUDtBQWdCSCxHQW5CVTtBQW9CWEMsU0FwQlcscUJBb0JBO0FBQ1A7QUFDQSxTQUFLQyxhQUFMO0FBQ0gsR0F2QlU7QUF3QlhDLFFBQU0sRUFBRSxDQUNKQSxNQUFNLENBQUNDLE9BREgsQ0F4Qkc7QUEyQlhDLFNBM0JXLHFCQTJCQSxDQUVWLENBN0JVO0FBOEJYQyxTQUFPLEVBQUU7QUFDTEMsU0FESyxtQkFDSTtBQUNMLGFBQU87QUFDSEMsY0FBTSxFQUFFLElBREw7QUFFSEMsYUFBSyxFQUFFLEVBRko7QUFHSEMsYUFBSyxFQUFFO0FBSEosT0FBUDtBQUtILEtBUEk7QUFTTDtBQUNBUixpQkFWSywyQkFVWTtBQUFBOztBQUNiUyxhQUFPLENBQUNqQixVQUFSLENBQW1CLFVBQUNrQixHQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDL0IsWUFBSUEsSUFBSSxJQUFJLEdBQVosRUFBaUI7QUFDYixlQUFJLENBQUNwQixLQUFMLENBQVdxQixXQUFYLEdBQXlCRixHQUF6QjtBQUNBRyxpQkFBTyxDQUFDLGFBQUQsQ0FBUDtBQUNBO0FBQ0gsU0FMOEIsQ0FNL0I7OztBQUNBLGFBQUksQ0FBQ3RCLEtBQUwsQ0FBV3FCLFdBQVgsR0FBeUIsRUFBekI7QUFDQSxhQUFJLENBQUNwQixVQUFMLEdBQWtCa0IsR0FBRyxDQUFDSSxHQUF0QjtBQUNBLGFBQUksQ0FBQzVCLElBQUwsQ0FBVUksZUFBVixHQUE0Qm9CLEdBQUcsQ0FBQ0ssR0FBaEM7QUFDSCxPQVZEO0FBV0gsS0F0Qkk7QUF3QkxDLFVBeEJLLG9CQXdCSztBQUFBOztBQUNOLFVBQUksS0FBS25CLE9BQUwsQ0FBYUMsS0FBakIsRUFBd0I7QUFDcEIsZUFBTyxLQUFLbUIsS0FBTCxDQUFXLGFBQVgsQ0FBUDtBQUNIOztBQUNELFVBQUlDLE1BQU0sR0FBRyxLQUFLYixLQUFMLEVBQWI7O0FBQ0EsVUFBSSxDQUFDYSxNQUFNLENBQUNaLE1BQVosRUFBb0I7QUFDaEIsYUFBS2YsS0FBTCxDQUFXMkIsTUFBTSxDQUFDWCxLQUFsQixJQUEyQlcsTUFBTSxDQUFDVixLQUFsQztBQUNBO0FBQ0g7O0FBQ0QsV0FBS1gsT0FBTCxDQUFhQyxLQUFiLEdBQXFCLElBQXJCO0FBQ0EsV0FBS0wsR0FBTCxDQUFTUyxPQUFULENBQWlCaUIsSUFBakI7QUFDQSxVQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFXQyxNQUFYLEVBQXNCO0FBQzlCLGNBQUksQ0FBQzVCLElBQUwsQ0FBVUksS0FBVixHQUFrQixNQUFJLENBQUNILEdBQUwsQ0FBU0csS0FBVCxDQUFlLE1BQUksQ0FBQ1osSUFBcEIsRUFBMkIsVUFBQ3dCLEdBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUN6RFUsaUJBQU87O0FBQ1AsY0FBSVYsSUFBSSxJQUFJLEdBQVosRUFBaUI7QUFDYjtBQUNBLGtCQUFJLENBQUNYLGFBQUw7O0FBQ0EsZ0JBQUlXLElBQUksSUFBSSxHQUFaLEVBQWlCO0FBQ2Isb0JBQUksQ0FBQ1ksTUFBTCxDQUFZYixHQUFaOztBQUNBO0FBQ0g7O0FBQ0Qsa0JBQUksQ0FBQ25CLEtBQUwsR0FBYWlDLENBQUMsQ0FBQ0MsWUFBRixDQUFlLE1BQUksQ0FBQ2xDLEtBQXBCLEVBQTRCbUIsR0FBNUIsQ0FBYjtBQUNBO0FBQ0gsV0FYd0QsQ0FZekQ7OztBQUNBYyxXQUFDLENBQUNFLENBQUYsQ0FBSUMsSUFBSixDQUFTLE9BQVQsRUFBbUJqQixHQUFuQixFQWJ5RCxDQWN6RDs7QUFDQSxnQkFBSSxDQUFDa0IsT0FBTCxDQUFhQyxJQUFiLENBQWtCO0FBQUM3QyxnQkFBSSxFQUFFO0FBQVAsV0FBbEIsRUFmeUQsQ0FnQnpEOztBQUNILFNBakJpQixFQWlCZCxZQUFhO0FBQ2JxQyxpQkFBTztBQUNWLFNBbkJpQixDQUFsQjs7QUFvQkEsY0FBSSxDQUFDNUIsR0FBTCxDQUFTUyxPQUFULENBQWlCNEIsT0FBakIsQ0FBeUIsTUFBSSxDQUFDcEMsSUFBTCxDQUFVSSxLQUFuQyxFQUEyQyxPQUEzQztBQUNILE9BdEJELEVBc0JHaUMsSUF0QkgsQ0FzQlEsWUFBTTtBQUNWLGNBQUksQ0FBQ2xDLE9BQUwsQ0FBYUMsS0FBYixHQUFxQixLQUFyQjs7QUFDQSxjQUFJLENBQUNMLEdBQUwsQ0FBU1MsT0FBVCxDQUFpQjhCLElBQWpCO0FBQ0gsT0F6QkQ7QUEwQkg7QUE3REksR0E5QkU7QUE2RlhDLE9BQUssRUFBRTtBQTdGSSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssMkJBQTJCO0FBQ2hDO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUMsdUJBQXVCLDRCQUE0QjtBQUNuRCx5QkFBeUIscUJBQXFCO0FBQzlDLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0NBQXNDO0FBQ2xFLCtCQUErQiwyQkFBMkI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4REFBOEQ7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25ELHlCQUF5QixxQkFBcUI7QUFDOUMsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5Q0FBeUM7QUFDckUsK0JBQStCLDJCQUEyQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhEQUE4RDtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3Q0FBd0M7QUFDL0QseUJBQXlCLHFCQUFxQjtBQUM5QywyQkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHNDQUFzQztBQUNsRSwrQkFBK0IsOEJBQThCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDLGlCQUFpQixpQ0FBaUM7QUFDbEQ7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBLGdCQUFnQixNQUFNLG1CQUFPLENBQUMsZ0VBQWtCO0FBQ2hELE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBLGdCQUFnQixNQUFNLG1CQUFPLENBQUMsd0VBQXNCO0FBQ3BELE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6TkE7QUFBQTtBQUFBO0FBQUE7QUFBK1IsQ0FBZ0IsZ1VBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0FuVCxpQkFBaUIscUJBQXVCLCtCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDJCOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFBLHdDQUFzSCxDQUFnQixzTEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0ExSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3JDO0FBQ0w7QUFDdUM7OztBQUc3RjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJ2LWxvZ2luXCIgLFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgdmVyaWZ5X2NvZGU6ICcnICxcclxuICAgICAgICAgICAgICAgIHZlcmlmeV9jb2RlX2tleTogJycgLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjoge30sXHJcbiAgICAgICAgICAgIHZlcmlmeUNvZGU6ICcnICxcclxuICAgICAgICAgICAgaW5zOiB7fSAsXHJcbiAgICAgICAgICAgIGFqYXg6IHt9ICxcclxuICAgICAgICAgICAgYXBpOiBhZG1pbkFwaSAsXHJcbiAgICAgICAgICAgIHBlbmRpbmc6IHtcclxuICAgICAgICAgICAgICAgIGxvZ2luOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0gLFxyXG4gICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgLy8g6I635Y+W6aqM6K+B56CBXHJcbiAgICAgICAgdGhpcy5nZXRWZXJpZnlDb2RlKCk7XHJcbiAgICB9ICxcclxuICAgIG1peGluczogW1xyXG4gICAgICAgIG1peGlucy5sb2FkaW5nICxcclxuICAgIF0gLFxyXG4gICAgbW91bnRlZCAoKSB7XHJcblxyXG4gICAgfSAsXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hlY2sgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlICxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnJyAsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g6I635Y+W6aqM6K+B56CBXHJcbiAgICAgICAgZ2V0VmVyaWZ5Q29kZSAoKSB7XHJcbiAgICAgICAgICAgIG1pc2NBcGkudmVyaWZ5Q29kZSgocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvci5jb2RlX3ZlcmlmeSA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICB2U2Nyb2xsKCdjb2RlX3ZlcmlmeScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDmuIXnqbrplJnor6/kv6Hmga9cclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IuY29kZV92ZXJpZnkgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5Q29kZSA9IHJlcy5pbWc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0udmVyaWZ5X2NvZGVfa2V5ID0gcmVzLmtleTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHN1Ym1pdCAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlbmRpbmcubG9naW4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRpbmZvKCfor7fmsYLkuK0uLi7or7fogJDlv4PnrYnlvoUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZmlsdGVyID0gdGhpcy5jaGVjaygpO1xyXG4gICAgICAgICAgICBpZiAoIWZpbHRlci5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JbZmlsdGVyLmZpZWxkXSA9IGZpbHRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nLmxvZ2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlICwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFqYXgubG9naW4gPSB0aGlzLmFwaS5sb2dpbih0aGlzLmZvcm0gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YeN5paw6I635Y+W6aqM6K+B56CBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VmVyaWZ5Q29kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSA9PSA0NjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVycm9yKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBHLmNyZWF0ZU9iamVjdCh0aGlzLmVycm9yICwgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5pu05paw6aqM6K+B56CBXHJcbiAgICAgICAgICAgICAgICAgICAgRy5zLmpzb24oJ3Rva2VuJyAsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W55So5oi35p2D6ZmQ6IyD5Zu0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdob21lJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOi3s+i9rOWIsOmmlumhtVxyXG4gICAgICAgICAgICAgICAgfSAsICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLnNldEFyZ3ModGhpcy5hamF4LmxvZ2luICwgJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nLmxvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcbiAgICB9ICxcclxuICAgIHdhdGNoOiB7XHJcblxyXG4gICAgfVxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInYtbG9hZGluZ1wiLCB7IHJlZjogXCJsb2FkaW5nXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybVwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmUgZmllbGRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeeUqOaIt+WQjVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS51c2VybmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidXNlcm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9yLnVzZXJuYW1lID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgxKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bVwiLCBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci51c2VybmFtZSkgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IudXNlcm5hbWUpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lIGZpZWxkXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWl5a+G56CBXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwYXNzd29yZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3IucGFzc3dvcmQgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRtXCIsIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoX3ZtLmVycm9yLnBhc3N3b3JkKSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci5wYXNzd29yZCkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmUgZmllbGQgdmVyaWZ5X2NvZGVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udmVyaWZ5X2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udmVyaWZ5X2NvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpemqjOivgeeggVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS52ZXJpZnlfY29kZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidmVyaWZ5X2NvZGVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9yLnZlcmlmeV9jb2RlID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnZlcmlmeUNvZGUgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5nZXRWZXJpZnlDb2RlIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRtXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKF92bS5lcnJvci52ZXJpZnlfY29kZSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvci52ZXJpZnlfY29kZSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMylcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvc3RhdGljL2ltYWdlL2xvZ28uanBnXCIgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL3VzZXIucG5nXCIpIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZS9wYXNzd29yZC5wbmdcIikgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmUgYnRuc1wiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicnVuLWJ1dHRvbiBydW4tYnV0dG9uLXN1Ym1pdFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwi5o+Q5LqkXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2xvZ2luLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTczYWFiNmQwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vbG9naW4uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzNhYWI2ZDAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2UvcGFzc3dvcmQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlL3VzZXIucG5nXCI7IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4vbG9naW4uanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL2xvZ2luLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzNhYWI2ZDAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vanMvbG9naW4uanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2pzL2xvZ2luLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2Nzcy9sb2dpbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03M2FhYjZkMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzNhYWI2ZDBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx3b3JrXFxcXGNvZGVcXFxcY2FyXFxcXHB1YmxpY1xcXFxtb2R1bGVcXFxcYWRtaW5cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzczYWFiNmQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzczYWFiNmQwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzNhYWI2ZDAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzNhYWI2ZDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNvdXJjZS92dWUvdmlldy9sb2dpbi9sb2dpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTczYWFiNmQwJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==