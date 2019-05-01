(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/public/item.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/public/item.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-item",
  props: {
    data: {
      type: Object,
      required: true,
      default: {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/public/menu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/public/menu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.vue */ "./source/vue/view/public/item.vue");
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-menu",
  data: function data() {
    return {// mapping ,
    };
  },
  created: function created() {},
  mounted: function mounted() {},
  components: {
    'v-item': _item_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/public/moduleNav.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/public/moduleNav.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-module-nav",
  data: function data() {
    return {
      dom: {},
      ins: {}
    };
  },
  props: {
    topRoute: {
      type: Object,
      required: true,
      default: {}
    },
    pos: {
      type: Array,
      required: true,
      default: []
    }
  },
  mounted: function mounted() {
    this.initDom();
    this.initInstance();
    this.initialize();
  },
  methods: {
    initDom: function initDom() {
      this.dom.moduleNav = G(this.$refs['module-nav']);
      this.dom.win = G(window);
    },
    initInstance: function initInstance() {},
    initialize: function initialize() {
      this.fixNav();
      this.dom.win.on('scroll', this.fixNav.bind(this), true, false);
    },
    fixNav: function fixNav() {
      var y = window.pageYOffset;

      if (y == 0) {
        this.dom.moduleNav.removeClass('module-nav-fix');
      } else {
        this.dom.moduleNav.addClass('module-nav-fix');
      }

      this.dom.moduleNav.css({
        top: y + 'px'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/index/js/index.js?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./source/vue/view/index/js?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_menu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/menu.vue */ "./source/vue/view/public/menu.vue");
/* harmony import */ var _public_moduleNav_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/moduleNav.vue */ "./source/vue/view/public/moduleNav.vue");
/* harmony import */ var _router_routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../router/routes.js */ "./source/vue/router/routes.js");




var once = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-index",
  data: function data() {
    return {
      dom: {},
      ins: {
        loading: null
      },
      field: {
        id: 'id',
        p_id: 'p_id'
      },
      ajax: {
        logout: null
      },
      pending: {
        logout: false
      },
      render: '',
      value: {
        leftMinW: 50
      }
    };
  },
  mixins: [mixins.loading],
  mounted: function mounted() {
    this.initDom();
    this.initValue();
    this.initInstance();
    this.getData();
  },
  components: {
    'v-menu': _public_menu_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    initDom: function initDom() {
      this.dom.functions = G(this.$refs['functions-for-user']);
      this.dom.con = G(this.$refs.con);
      this.dom.left = G(this.$refs.left);
      this.dom.right = G(this.$refs.right);
      this.dom.leftTop = G(this.$refs['left-top']);
      this.dom.leftMid = G(this.$refs['infinite-classification']);
      this.dom.leftBtm = G(this.$refs['left-btm']);
      this.dom.multipleTab = G(this.$refs['multiple-tab']);
      this.dom.win = G(window);
      this.dom.horizontal = G(this.$refs.horizontal);
      this.dom.vertical = G(this.$refs.vertical);
      this.dom.user = G(this.$refs.user);
      this.dom.block = G(this.$refs.block);
      this.dom.rightTop = G(this.$refs['right-top']);
    },
    initInstance: function initInstance() {},
    // 初始化
    getData: function getData() {
      var _this = this;

      new Promise(function (resolve, reject) {
        _this.info(resolve, reject);
      }).then(function () {
        _this.$nextTick(function () {
          _this.initialize();
        });
      });
    },
    initialize: function initialize() {
      this.initValue(); // DOM 渲染完成

      this.initTab();
      this.initMenu();
      this.initStyle();
      this.initSlidebar();
    },
    initValue: function initValue() {
      this.value.leftW = this.dom.left.width('border-box');
      this.value.userW = this.dom.user.width('border-box');
      this.value.userH = this.dom.user.height('border-box');
    },
    // 初始化
    initStyle: function initStyle() {
      /**
       * ********************
       * 左边：菜单
       * ********************
       */
      this.initLeftMidH();
      this.dom.win.on('resize', this.initLeftMidH.bind(this), true, false);
    },
    initSlidebar: function initSlidebar() {
      var slidebar = G.s.get('slidebar');

      if (G.isNull(slidebar)) {
        return;
      }

      if (slidebar == 'horizontal') {
        return;
      }

      this.vertical();
    },
    initLeftMidH: function initLeftMidH() {
      var leftH = this.dom.left.height('content-box');
      var leftTopH = this.dom.leftTop.height('border-box');
      var leftBtmH = this.dom.leftBtm.height('border-box');
      var leftMidMinH = parseInt(this.dom.leftMid.css('minHeight'));
      var leftMidH = leftH - leftTopH - leftBtmH;
      leftMidH = Math.max(leftMidMinH, leftMidH);
      this.dom.leftMid.css({
        height: leftMidH + 'px'
      });
    },
    initTab: function initTab() {
      var self = this;
      this.ins.tab = new MultipleTab(this.dom.multipleTab.get(0), {
        time: 200,
        ico: '/plugin/MultipleTab/image/icon.ico',
        created: function created(id) {
          // 路由参数
          var param = this.attr(id, 'param');
          param = G.isValid(param) ? G.jsonDecode(param) : {};
          self.create(this, id, param);
        },
        deleted: function deleted(id) {
          self.delete(id);
        },
        click: function click(id) {
          self.switch(id);
        }
      });
    },
    initMenu: function initMenu() {
      var self = this;
      this.ins.ic = new InfiniteClassification(this.dom.leftMid.get(0), {
        // 菜单展开动画过渡时间
        time: 200,
        // 次要的图标类型，new || number || switch
        icon: 'switch',
        // 标识符，展开的项；1. 在元素里面设置 data-focus='y' +
        id: [73],
        // 初始状态，spread || shrink
        status: 'shrink',
        // 层级视觉显示效果
        amount: 12,
        // 同层级是否互斥
        exclution: true,
        // 是否菜单也可被选中
        menuFocus: true,
        // 点击项后是否选中
        focus: false,
        // 是否选中顶级菜单
        topFocus: false,
        // 子级项点击后回调
        child: function child(id) {
          var topRoute = self.topRoute(id);
          var route = self.findRouteById(id);
          var text = self.genTabName(topRoute, route);
          self.open(text, {
            route: route.route
          });
        }
      });
    },
    horizontal: function horizontal() {
      var _this2 = this;

      this.dom.user.removeClass('hide'); // 滑块切换

      this.dom.horizontal.highlight('hide', this.dom.block.children().get(), true); // 菜单展开

      this.dom.left.animate({
        width: this.value.leftW + 'px'
      }, function () {
        _this2.ins.ic.icon('none');
      }); // 用户展开

      this.dom.user.animate({
        width: this.value.userW + 'px',
        height: this.value.userH + 'px'
      }, function () {
        _this2.initLeftMidH();
      }); // 内容收缩

      this.dom.right.animate({
        paddingLeft: this.value.leftW + 'px'
      }); // 右侧顶部导航栏收缩

      this.dom.rightTop.animate({
        paddingLeft: this.value.leftW + 'px'
      });
      G.s.set('slidebar', 'horizontal');
    },
    vertical: function vertical() {
      var _this3 = this;

      // 滑块切换
      this.dom.vertical.highlight('hide', this.dom.block.children().get(), true); // 菜单展开

      this.dom.left.animate({
        width: this.value.leftMinW + 'px'
      }, function () {
        _this3.ins.ic.icon('text');
      }); // 用户收缩

      this.dom.user.animate({
        width: '0px',
        height: '0px'
      }, function () {
        _this3.dom.user.addClass('hide');

        _this3.initLeftMidH();
      }); // 内容收缩

      this.dom.right.animate({
        paddingLeft: this.value.leftMinW + 'px'
      }); // 右侧顶部导航栏收缩

      this.dom.rightTop.animate({
        paddingLeft: this.value.leftMinW + 'px'
      });
      G.s.set('slidebar', 'vertical');
    },
    // 显示
    showUserCtrl: function showUserCtrl() {
      this.dom.functions.removeClass('hide');
      this.dom.functions.animate({
        opacity: 1,
        bottom: '0px'
      });
    },
    // 隐藏
    hideUserCtrl: function hideUserCtrl() {
      var _this4 = this;

      this.dom.functions.animate({
        opacity: 0,
        bottom: '-10px'
      }, function () {
        _this4.dom.functions.addClass('hide');
      });
    },
    // 新开标签页
    open: function open(text, attr) {
      var ico = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.ins.tab.create({
        ico: ico,
        text: text,
        attr: attr
      });
    },
    // 创建内容
    create: function create(tab, id, param) {
      var route = tab.attr(id, 'route');
      var div = document.createElement('div');
      div = G(div);
      div.data('id', id);
      var render = document.createElement('div');
      div.append(render);
      this.dom.con.append(div.get(0));
      this.mount(render, id, route, param);
      div.highlight('hide', div.parent().children().get(), true);
    },
    // 删除内容
    delete: function _delete(id) {
      this.dom.con.remove(this.item(id));
    },
    // 查找给定的项
    item: function item(id) {
      var items = this.dom.con.children();

      for (var i = 0; i < items.length; ++i) {
        var cur = items.jump(i, true);

        if (cur.data('id') == id) {
          // 删除节点
          return cur.get(0);
        }
      }

      throw new Error('未找到给定节点');
    },
    // 标签切换
    switch: function _switch(id) {
      G(this.item(id)).highlight('hide', this.dom.con.children().get(), true);
    },
    // 组件
    component: function component(route) {
      for (var i = 0; i < _router_routes_js__WEBPACK_IMPORTED_MODULE_3__["default"].length; ++i) {
        var v = _router_routes_js__WEBPACK_IMPORTED_MODULE_3__["default"][i];

        if (v.path == route) {
          return v.component;
        }
      }

      throw new Error('未找到 route：' + route + '对应的路由');
    },
    // 挂载组建
    mount: function mount(container, id, route, param) {
      var _this5 = this;

      var component = this.component(route);
      component().then(function (module) {
        // 注意 module.default ！
        // 具体原因请查看 import 语法解释
        var component = _this5.newComponent(module.default, route, param, id);

        new component().$mount(container);
      });
    },
    // 生成标签名称
    genTabName: function genTabName(topRoute, curRoute) {
      return "".concat(topRoute.name, "-").concat(curRoute.name);
    },
    // 重新渲染
    reRender: function reRender(id, route, param) {
      var curRoute = this.findRouteByRoute(route);
      var topRoute = this.topRoute(curRoute.id);
      var title = this.genTabName(topRoute, curRoute);
      this.ins.tab.title(id, title); // 更新标签内容
      // 重新渲染元素内容

      var container = this.item(id);
      container = G(container);
      var div = document.createElement('div');
      this.mount(div, id, route, param); // 清空内容

      container.html('');
      container.append(div);
    },
    // 新开一个标签页
    createTab: function createTab(route) {
      var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var curRoute = this.findRouteByRoute(route);
      var topRoute = this.topRoute(curRoute.id);
      var title = this.genTabName(topRoute, curRoute);
      this.open(title, {
        route: curRoute.route,
        param: G.jsonEncode(param)
      });
    },
    // 实例化 vue 组件
    newComponent: function newComponent(component, route, param, id) {
      var self = this;
      route = this.findRouteByRoute(route);
      var topRoute = this.topRoute(route.id);
      component.mixins = component.mixins ? component.mixins : [];
      var mixins = {
        data: function data() {
          return {
            // 当前组件的标识符
            // 子组件不允许设置这些值！
            id: id,
            param: param,
            route: route,
            topRoute: topRoute,
            pos: []
          };
        },
        created: function created() {
          this.pos = self.curPos(route.id);
        },
        methods: {
          // 也跳跳转方法
          location: function location(route, param) {
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '_self';
            // 目前仅有两种类型
            // _self 页面内重载
            // _blank 打开新的标签页
            var typeRange = ['_self', '_blank'];

            if (type == '_self') {
              return self.reRender(id, route, param);
            }

            if (type == '_blank') {
              // 新开一个标签页
              return self.createTab(route, param);
            } // ...预留的内容

          },
          // 刷新操作
          reload: function reload() {
            this.location(this.route.route, this.param);
          },
          // todo 后退
          prev: function prev() {},
          // todo 前进
          next: function next() {}
        },
        components: {
          'module-nav': _public_moduleNav_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
        }
      };
      component.mixins.push(mixins);
      return Vue.extend(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, component));
    },
    // 获取菜单数据
    getMenuData: function getMenuData(priv) {
      var menu = [];
      var count = 0;

      var filter = function filter(data, res) {
        if (count > 1000) {
          console.log('死循环');
          return;
        }

        count++;

        for (var i = 0; i < data.length; ++i) {
          var v = data[i];

          if (v.menu != 'y') {
            continue;
          }

          var _v = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, v);

          res.push(_v);

          if (v.children.length > 0) {
            _v.children = [];
            filter(v.children, _v.children);
          }
        }
      };

      filter(priv, menu);
      return menu;
    },
    // 获取用户相关数据
    info: function info(resolve, reject) {
      var _this6 = this;

      adminApi.info(function (res, code) {
        if (code != 200) {
          _this6.$error(res);

          reject();
          return;
        } // 针对 data 做一些数据过滤


        var menu = _this6.getMenuData(res.user.role.priv);

        _this6.$store.commit('menu', menu);

        _this6.$store.commit('user', res.user);

        _this6.$store.commit('priv', res.user.role.priv);

        _this6.$store.commit('route', res.route);

        _this6.$store.commit('os', res.os);

        resolve();
      });
    },
    // 获取当前路由 by id
    findRouteById: function findRouteById(id) {
      var routes = this.$store.state.route;
      var route = G.t.current(id, routes, this.field);

      if (G.isNull(route)) {
        throw new Error('未找到当前 id：' + id + ' 对应路由！');
      }

      return route;
    },
    // 获取当前路由，by route
    findRouteByRoute: function findRouteByRoute(route) {
      var routes = this.$store.state.route;

      for (var i = 0; i < routes.length; ++i) {
        var cur = routes[i];

        if (cur.route == route) {
          return cur;
        }
      }

      throw new Error('未找到给定路由：' + route + '！');
    },
    // 获取顶级路由
    topRoute: function topRoute(id) {
      var route = this.$store.state.route;
      var parents = G.t.parents(id, route, this.field, true, true);
      return parents;
    },
    // 获取当前位置
    curPos: function curPos(id) {
      var route = this.$store.state.route;
      return G.t.parents(id, route, this.field, true, false);
    },
    // 注销
    logout: function logout() {
      var _this7 = this;

      if (this.pending.logout) {
        $info('请求中...请耐心等待');
        return;
      }

      this.pending.logout = true;
      this.ins.loading.show();
      this.ajax.logout = adminApi.logout(function (res, code) {
        _this7.pending.logout = false;

        _this7.ins.loading.hide();

        if (code != 200) {
          _this7.$error(res);

          return;
        } // 退出登录


        _this7.forceLogout();
      });
      this.ins.loading.setArgs(this.ins.loading, 'logout');
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/index/css/index.css?vue&type=style&index=0&id=189b68ac&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/index/css/index.css?vue&type=style&index=0&id=189b68ac&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/moduleNav.css?vue&type=style&index=0&id=0e2540ec&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/moduleNav.css?vue&type=style&index=0&id=0e2540ec&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/index/index.vue?vue&type=template&id=189b68ac&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/index/index.vue?vue&type=template&id=189b68ac&scoped=true& ***!
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
    { ref: "container", staticClass: "container" },
    [
      _c("v-loading", { ref: "loading" }),
      _vm._v(" "),
      _c("div", { ref: "left", staticClass: "left" }, [
        _c("div", { staticClass: "in" }, [
          _c("div", { ref: "left-top", staticClass: "top" }, [
            _c("div", { staticClass: "logo" }, [
              _c("div", { staticClass: "left" }, [
                _c("img", {
                  staticClass: "image",
                  attrs: { src: _vm.$store.state.os.system.logo }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "right" }, [
                _vm._v(_vm._s(_vm.$store.state.os.system.name))
              ])
            ]),
            _vm._v(" "),
            _c("div", { ref: "user", staticClass: "user" }, [
              _c("div", { staticClass: "top" }, [
                _c("div", { staticClass: "image-container" }, [
                  _c("img", {
                    staticClass: "image",
                    attrs: { src: _vm.$store.state.user.avatar_explain }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "btm" }, [
                _vm._v(_vm._s(_vm.$store.state.user.username))
              ])
            ]),
            _vm._v(" "),
            _c("div", { ref: "block", staticClass: "block" }, [
              _c(
                "div",
                {
                  ref: "horizontal",
                  staticClass: "horizontal",
                  on: { click: _vm.vertical }
                },
                [_vm._m(0)]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  ref: "vertical",
                  staticClass: "vertical hide",
                  on: { click: _vm.horizontal }
                },
                [_vm._m(1)]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { ref: "infinite-classification", staticClass: "mid" },
            [_c("v-menu")],
            1
          ),
          _vm._v(" "),
          _c("div", { ref: "left-btm", staticClass: "btm" }, [
            _vm._v(_vm._s(_vm.$store.state.os.system.name))
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { ref: "right", staticClass: "right" }, [
        _c("div", { ref: "right-top", staticClass: "top" }, [
          _c("div", { staticClass: "c-top" }, [
            _c("div", { staticClass: "left" }),
            _vm._v(" "),
            _c("div", { staticClass: "right" }, [
              _c(
                "div",
                {
                  staticClass: "user",
                  on: {
                    mouseenter: _vm.showUserCtrl,
                    mouseleave: _vm.hideUserCtrl
                  }
                },
                [
                  _c("div", { staticClass: "ctrl" }, [
                    _c("div", { staticClass: "avatar" }, [
                      _c("div", { staticClass: "image-container" }, [
                        _c("img", {
                          staticClass: "image",
                          attrs: { src: _vm.$store.state.user.avatar_explain }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "username" }, [
                      _vm._v(_vm._s(_vm.$store.state.user.username))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      ref: "functions-for-user",
                      staticClass: "functions hide"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "function", on: { click: _vm.logout } },
                        [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("div", { staticClass: "right" }, [_vm._v("注销")])
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { ref: "multiple-tab", staticClass: "c-btm" }, [_vm._m(3)])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "btm" }, [
          _c("div", { staticClass: "dynamic" }, [
            _c("div", { ref: "con", staticClass: "in" })
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "in" }, [
      _c("div", { staticClass: "line" }),
      _vm._v(" "),
      _c("div", { staticClass: "line" }),
      _vm._v(" "),
      _c("div", { staticClass: "line" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "in" }, [
      _c("div", { staticClass: "line" }),
      _vm._v(" "),
      _c("div", { staticClass: "line" }),
      _vm._v(" "),
      _c("div", { staticClass: "line" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/logout.png */ "./source/vue/view/index/image/logout.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "multiple-tab" }, [
      _c("div", { staticClass: "tabs" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/public/item.vue?vue&type=template&id=fa034964&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/public/item.vue?vue&type=template&id=fa034964&scoped=true& ***!
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
  return _c("div", { staticClass: "item", attrs: { "data-id": _vm.data.id } }, [
    _c("div", { staticClass: "function" }, [
      _c("div", { staticClass: "icon" }, [
        _vm.data.floor > 1 ? _c("span", { staticClass: "text" }) : _vm._e(),
        _vm._v(" "),
        _c("img", {
          staticClass: "image",
          attrs: { src: _vm.data.s_ico_explain }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "explain" }, [
        _c("div", { staticClass: "in" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "text" }, [_vm._v(_vm._s(_vm.data.name))])
        ])
      ]),
      _vm._v(" "),
      _vm._m(1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "child" }, [
      _c(
        "div",
        { staticClass: "list" },
        _vm._l(_vm.data.children, function(v) {
          return _c("v-item", { key: v.id, attrs: { data: v } })
        }),
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ico" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: "/plugin/InfiniteClassification/image/default/ring.png" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flag hide" }, [
      _c("div", { staticClass: "new" }, [_vm._v("新的")]),
      _vm._v(" "),
      _c("div", { staticClass: "number" }, [_vm._v("10")]),
      _vm._v(" "),
      _c("div", { staticClass: "switch" }, [
        _c("img", {
          staticClass: "image",
          attrs: {
            src: "/plugin/InfiniteClassification/image/default/spread.png"
          }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/public/menu.vue?vue&type=template&id=18d1ef9a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/public/menu.vue?vue&type=template&id=18d1ef9a&scoped=true& ***!
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
  return _c("div", { staticClass: "infinite-classification" }, [
    _c(
      "div",
      { staticClass: "list" },
      _vm._l(_vm.$store.state.menu, function(v) {
        return _c("v-item", { key: v.id, attrs: { data: v } })
      }),
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/public/moduleNav.vue?vue&type=template&id=0e2540ec&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/public/moduleNav.vue?vue&type=template&id=0e2540ec&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { ref: "module-nav", staticClass: "module-nav" }, [
    _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: _vm.topRoute.b_ico_explain }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "cn" }, [_vm._v(_vm._s(_vm.topRoute.name))]),
      _vm._v(" "),
      _c("span", { staticClass: "delimiter" }, [_vm._v("/")]),
      _vm._v(" "),
      _c("span", { staticClass: "en" }, [_vm._v(_vm._s(_vm.topRoute.en))]),
      _vm._v("\n          \n        "),
      _c(
        "button",
        {
          staticClass: "run-button run-button-blue",
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.$parent.reload()
            }
          }
        },
        [
          _c("i", { staticClass: "run-iconfont run-reset" }),
          _vm._v("标签页刷新\n        ")
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "right" },
      [
        _vm._l(_vm.pos, function(v, k) {
          return [
            _c(
              "span",
              {
                staticClass: "text",
                on: {
                  click: function($event) {
                    v.route != "" && v.route != _vm.$parent.route.route
                      ? _vm.$parent.location(v.route)
                      : null
                  }
                }
              },
              [_vm._v(_vm._s(v.name))]
            ),
            _vm._v(" "),
            !(k == _vm.pos.length - 1)
              ? _c("span", { staticClass: "delimiter" }, [_vm._v("/")])
              : _vm._e()
          ]
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./source/vue/view/index/css/index.css?vue&type=style&index=0&id=189b68ac&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./source/vue/view/index/css/index.css?vue&type=style&index=0&id=189b68ac&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_189b68ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&id=189b68ac&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/index/css/index.css?vue&type=style&index=0&id=189b68ac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_189b68ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_189b68ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_189b68ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_189b68ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_189b68ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/index/image/logout.png":
/*!************************************************!*\
  !*** ./source/vue/view/index/image/logout.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/logout.png";

/***/ }),

/***/ "./source/vue/view/index/index.vue":
/*!*****************************************!*\
  !*** ./source/vue/view/index/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_189b68ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=189b68ac&scoped=true& */ "./source/vue/view/index/index.vue?vue&type=template&id=189b68ac&scoped=true&");
/* harmony import */ var _js_index_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js?vue&type=script&lang=js& */ "./source/vue/view/index/js/index.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_index_css_vue_type_style_index_0_id_189b68ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/index.css?vue&type=style&index=0&id=189b68ac&scoped=true&lang=css& */ "./source/vue/view/index/css/index.css?vue&type=style&index=0&id=189b68ac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _js_index_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_189b68ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_189b68ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "189b68ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/view/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/view/index/index.vue?vue&type=template&id=189b68ac&scoped=true&":
/*!************************************************************************************!*\
  !*** ./source/vue/view/index/index.vue?vue&type=template&id=189b68ac&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_189b68ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=189b68ac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/index/index.vue?vue&type=template&id=189b68ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_189b68ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_189b68ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./source/vue/view/index/js/index.js?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./source/vue/view/index/js?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_index_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!.?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/index/js/index.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_index_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/view/public/css/moduleNav.css?vue&type=style&index=0&id=0e2540ec&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./source/vue/view/public/css/moduleNav.css?vue&type=style&index=0&id=0e2540ec&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_moduleNav_css_vue_type_style_index_0_id_0e2540ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./moduleNav.css?vue&type=style&index=0&id=0e2540ec&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/moduleNav.css?vue&type=style&index=0&id=0e2540ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_moduleNav_css_vue_type_style_index_0_id_0e2540ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_moduleNav_css_vue_type_style_index_0_id_0e2540ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_moduleNav_css_vue_type_style_index_0_id_0e2540ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_moduleNav_css_vue_type_style_index_0_id_0e2540ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_moduleNav_css_vue_type_style_index_0_id_0e2540ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/public/item.vue":
/*!*****************************************!*\
  !*** ./source/vue/view/public/item.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_vue_vue_type_template_id_fa034964_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.vue?vue&type=template&id=fa034964&scoped=true& */ "./source/vue/view/public/item.vue?vue&type=template&id=fa034964&scoped=true&");
/* harmony import */ var _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.vue?vue&type=script&lang=js& */ "./source/vue/view/public/item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _item_vue_vue_type_template_id_fa034964_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _item_vue_vue_type_template_id_fa034964_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fa034964",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/view/public/item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/view/public/item.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./source/vue/view/public/item.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0!../../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/public/item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/view/public/item.vue?vue&type=template&id=fa034964&scoped=true&":
/*!************************************************************************************!*\
  !*** ./source/vue/view/public/item.vue?vue&type=template&id=fa034964&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_fa034964_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=template&id=fa034964&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/public/item.vue?vue&type=template&id=fa034964&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_fa034964_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_fa034964_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./source/vue/view/public/menu.vue":
/*!*****************************************!*\
  !*** ./source/vue/view/public/menu.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_vue_vue_type_template_id_18d1ef9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.vue?vue&type=template&id=18d1ef9a&scoped=true& */ "./source/vue/view/public/menu.vue?vue&type=template&id=18d1ef9a&scoped=true&");
/* harmony import */ var _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.vue?vue&type=script&lang=js& */ "./source/vue/view/public/menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_vue_vue_type_template_id_18d1ef9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_vue_vue_type_template_id_18d1ef9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "18d1ef9a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/view/public/menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/view/public/menu.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./source/vue/view/public/menu.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0!../../../../node_modules/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/public/menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/view/public/menu.vue?vue&type=template&id=18d1ef9a&scoped=true&":
/*!************************************************************************************!*\
  !*** ./source/vue/view/public/menu.vue?vue&type=template&id=18d1ef9a&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_18d1ef9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=template&id=18d1ef9a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/public/menu.vue?vue&type=template&id=18d1ef9a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_18d1ef9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_18d1ef9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./source/vue/view/public/moduleNav.vue":
/*!**********************************************!*\
  !*** ./source/vue/view/public/moduleNav.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleNav_vue_vue_type_template_id_0e2540ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleNav.vue?vue&type=template&id=0e2540ec&scoped=true& */ "./source/vue/view/public/moduleNav.vue?vue&type=template&id=0e2540ec&scoped=true&");
/* harmony import */ var _moduleNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleNav.vue?vue&type=script&lang=js& */ "./source/vue/view/public/moduleNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_moduleNav_css_vue_type_style_index_0_id_0e2540ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/moduleNav.css?vue&type=style&index=0&id=0e2540ec&scoped=true&lang=css& */ "./source/vue/view/public/css/moduleNav.css?vue&type=style&index=0&id=0e2540ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _moduleNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _moduleNav_vue_vue_type_template_id_0e2540ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _moduleNav_vue_vue_type_template_id_0e2540ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0e2540ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/view/public/moduleNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/view/public/moduleNav.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./source/vue/view/public/moduleNav.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moduleNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0!../../../../node_modules/vue-loader/lib??vue-loader-options!./moduleNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/public/moduleNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moduleNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/view/public/moduleNav.vue?vue&type=template&id=0e2540ec&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./source/vue/view/public/moduleNav.vue?vue&type=template&id=0e2540ec&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moduleNav_vue_vue_type_template_id_0e2540ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./moduleNav.vue?vue&type=template&id=0e2540ec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/public/moduleNav.vue?vue&type=template&id=0e2540ec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moduleNav_vue_vue_type_template_id_0e2540ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_moduleNav_vue_vue_type_template_id_0e2540ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvaXRlbS52dWUiLCJ3ZWJwYWNrOi8vL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvbWVudS52dWUiLCJ3ZWJwYWNrOi8vL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvbW9kdWxlTmF2LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvaW5kZXgvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2luZGV4L2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvbW9kdWxlTmF2LmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvaW5kZXgvaW5kZXgudnVlPzUwYWEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9pdGVtLnZ1ZT84MzQyIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvbWVudS52dWU/OTI3NyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL21vZHVsZU5hdi52dWU/MTYyZCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvaW5kZXgvY3NzL2luZGV4LmNzcz82NmMyIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9pbmRleC9pbWFnZS9sb2dvdXQucG5nIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9pbmRleC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2luZGV4L2luZGV4LnZ1ZT83M2ZmIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9pbmRleC9qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL2Nzcy9tb2R1bGVOYXYuY3NzPzEwYzMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9pdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL2l0ZW0udnVlP2RiZmMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9pdGVtLnZ1ZT8xZGFjIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvbWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9tZW51LnZ1ZT8xZGRkIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvbWVudS52dWU/OWFhMyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL21vZHVsZU5hdi52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9tb2R1bGVOYXYudnVlPzUzNTMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9tb2R1bGVOYXYudnVlPzA5ZDIiXSwibmFtZXMiOlsib25jZSIsIm5hbWUiLCJkYXRhIiwiZG9tIiwiaW5zIiwibG9hZGluZyIsImZpZWxkIiwiaWQiLCJwX2lkIiwiYWpheCIsImxvZ291dCIsInBlbmRpbmciLCJyZW5kZXIiLCJ2YWx1ZSIsImxlZnRNaW5XIiwibWl4aW5zIiwibW91bnRlZCIsImluaXREb20iLCJpbml0VmFsdWUiLCJpbml0SW5zdGFuY2UiLCJnZXREYXRhIiwiY29tcG9uZW50cyIsIm1lbnUiLCJtZXRob2RzIiwiZnVuY3Rpb25zIiwiRyIsIiRyZWZzIiwiY29uIiwibGVmdCIsInJpZ2h0IiwibGVmdFRvcCIsImxlZnRNaWQiLCJsZWZ0QnRtIiwibXVsdGlwbGVUYWIiLCJ3aW4iLCJ3aW5kb3ciLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJ1c2VyIiwiYmxvY2siLCJyaWdodFRvcCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW5mbyIsInRoZW4iLCIkbmV4dFRpY2siLCJpbml0aWFsaXplIiwiaW5pdFRhYiIsImluaXRNZW51IiwiaW5pdFN0eWxlIiwiaW5pdFNsaWRlYmFyIiwibGVmdFciLCJ3aWR0aCIsInVzZXJXIiwidXNlckgiLCJoZWlnaHQiLCJpbml0TGVmdE1pZEgiLCJvbiIsImJpbmQiLCJzbGlkZWJhciIsInMiLCJnZXQiLCJpc051bGwiLCJsZWZ0SCIsImxlZnRUb3BIIiwibGVmdEJ0bUgiLCJsZWZ0TWlkTWluSCIsInBhcnNlSW50IiwiY3NzIiwibGVmdE1pZEgiLCJNYXRoIiwibWF4Iiwic2VsZiIsInRhYiIsIk11bHRpcGxlVGFiIiwidGltZSIsImljbyIsImNyZWF0ZWQiLCJwYXJhbSIsImF0dHIiLCJpc1ZhbGlkIiwianNvbkRlY29kZSIsImNyZWF0ZSIsImRlbGV0ZWQiLCJkZWxldGUiLCJjbGljayIsInN3aXRjaCIsImljIiwiSW5maW5pdGVDbGFzc2lmaWNhdGlvbiIsImljb24iLCJzdGF0dXMiLCJhbW91bnQiLCJleGNsdXRpb24iLCJtZW51Rm9jdXMiLCJmb2N1cyIsInRvcEZvY3VzIiwiY2hpbGQiLCJ0b3BSb3V0ZSIsInJvdXRlIiwiZmluZFJvdXRlQnlJZCIsInRleHQiLCJnZW5UYWJOYW1lIiwib3BlbiIsInJlbW92ZUNsYXNzIiwiaGlnaGxpZ2h0IiwiY2hpbGRyZW4iLCJhbmltYXRlIiwicGFkZGluZ0xlZnQiLCJzZXQiLCJhZGRDbGFzcyIsInNob3dVc2VyQ3RybCIsIm9wYWNpdHkiLCJib3R0b20iLCJoaWRlVXNlckN0cmwiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJtb3VudCIsInBhcmVudCIsInJlbW92ZSIsIml0ZW0iLCJpdGVtcyIsImkiLCJsZW5ndGgiLCJjdXIiLCJqdW1wIiwiRXJyb3IiLCJjb21wb25lbnQiLCJyb3V0ZUZvclZ1ZSIsInYiLCJwYXRoIiwiY29udGFpbmVyIiwibW9kdWxlIiwibmV3Q29tcG9uZW50IiwiZGVmYXVsdCIsIiRtb3VudCIsImN1clJvdXRlIiwicmVSZW5kZXIiLCJmaW5kUm91dGVCeVJvdXRlIiwidGl0bGUiLCJodG1sIiwiY3JlYXRlVGFiIiwianNvbkVuY29kZSIsInBvcyIsImN1clBvcyIsImxvY2F0aW9uIiwidHlwZSIsInR5cGVSYW5nZSIsInJlbG9hZCIsInByZXYiLCJuZXh0IiwibW9kdWxlTmF2IiwicHVzaCIsIlZ1ZSIsImV4dGVuZCIsImdldE1lbnVEYXRhIiwicHJpdiIsImNvdW50IiwiZmlsdGVyIiwicmVzIiwiY29uc29sZSIsImxvZyIsIl92IiwiYWRtaW5BcGkiLCJjb2RlIiwiJGVycm9yIiwicm9sZSIsIiRzdG9yZSIsImNvbW1pdCIsIm9zIiwicm91dGVzIiwic3RhdGUiLCJ0IiwiY3VycmVudCIsInBhcmVudHMiLCIkaW5mbyIsInNob3ciLCJoaWRlIiwiZm9yY2VMb2dvdXQiLCJzZXRBcmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ2ZBLHFCQUFxQixtQkFBTyxDQUFDLGlGQUFrQjs7QUFFL0M7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSwrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNRQTtBQUNBLGdCQURBO0FBRUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsb0JBRkE7QUFHQTtBQUhBO0FBREE7QUFGQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFDQSxnQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQSxZQUNBO0FBREE7QUFH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QUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRztBQUN2QztBQUNMO0FBQ3lDOzs7QUFHakc7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLGdHQUFNO0FBQ1IsRUFBRSx5R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBNkwsQ0FBZ0IsbVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBak47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgaWYgKGtleSBpbiBvYmopIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xyXG4gICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XHJcblxyXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xyXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcclxuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgOmRhdGEtaWQ9XCJkYXRhLmlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZ1bmN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIiB2LWlmPVwiZGF0YS5mbG9vciA+IDFcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJkYXRhLnNfaWNvX2V4cGxhaW5cIiBjbGFzcz1cImltYWdlXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwbGFpblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb1wiPjxpbWcgc3JjPVwiL3BsdWdpbi9JbmZpbml0ZUNsYXNzaWZpY2F0aW9uL2ltYWdlL2RlZmF1bHQvcmluZy5wbmdcIiBjbGFzcz1cImltYWdlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj57eyBkYXRhLm5hbWUgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsYWcgaGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5ld1wiPuaWsOeahDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm51bWJlclwiPjEwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpdGNoXCI+PGltZyBzcmM9XCIvcGx1Z2luL0luZmluaXRlQ2xhc3NpZmljYXRpb24vaW1hZ2UvZGVmYXVsdC9zcHJlYWQucG5nXCIgY2xhc3M9XCJpbWFnZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8di1pdGVtIHYtZm9yPVwidiBpbiBkYXRhLmNoaWxkcmVuXCIgOmRhdGE9XCJ2XCIgOmtleT1cInYuaWRcIj48L3YtaXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJ2LWl0ZW1cIiAsXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0ICxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlICxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz0naW5maW5pdGUtY2xhc3NpZmljYXRpb24nPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgIDx2LWl0ZW0gdi1mb3I9XCJ2IGluICRzdG9yZS5zdGF0ZS5tZW51XCIgOmRhdGE9XCJ2XCIgOmtleT1cInYuaWRcIj48L3YtaXRlbT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBpdGVtIGZyb20gJy4vaXRlbS52dWUnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcInYtbWVudVwiICxcclxuICAgICAgICBkYXRhICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vIG1hcHBpbmcgLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gLFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG5cclxuICAgICAgICB9ICxcclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICB9ICxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICd2LWl0ZW0nOiBpdGVtXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2R1bGUtbmF2XCIgcmVmPVwibW9kdWxlLW5hdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cInRvcFJvdXRlLmJfaWNvX2V4cGxhaW5cIiBjbGFzcz1cImltYWdlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY25cIj57eyB0b3BSb3V0ZS5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlbGltaXRlclwiPi88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZW5cIj57eyB0b3BSb3V0ZS5lbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJydW4tYnV0dG9uIHJ1bi1idXR0b24tYmx1ZVwiIEBjbGljay5wcmV2ZW50PVwiJHBhcmVudC5yZWxvYWQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJydW4taWNvbmZvbnQgcnVuLXJlc2V0XCI+PC9pPuagh+etvumhteWIt+aWsFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgPCEtLSDpnaLljIXlsZEgLS0+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIih2LGspIGluIHBvc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgQGNsaWNrPVwidi5yb3V0ZSAhPSAnJyAmJiB2LnJvdXRlICE9ICRwYXJlbnQucm91dGUucm91dGUgPyAkcGFyZW50LmxvY2F0aW9uKHYucm91dGUpIDogbnVsbFwiPnt7IHYubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVsaW1pdGVyXCIgdi1pZj1cIiEoayA9PSBwb3MubGVuZ3RoIC0gMSlcIj4vPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwidi1tb2R1bGUtbmF2XCIgLFxyXG4gICAgICAgIGRhdGEgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZG9tOiB7fSAsXHJcbiAgICAgICAgICAgICAgICBpbnM6IHt9ICxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9ICxcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0b3BSb3V0ZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0ICxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlICxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHt9XHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBwb3M6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5ICxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlICxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICxcclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0RG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEluc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH0gLFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgaW5pdERvbSAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbS5tb2R1bGVOYXYgPSBHKHRoaXMuJHJlZnNbJ21vZHVsZS1uYXYnXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbS53aW4gPSBHKHdpbmRvdyk7XHJcbiAgICAgICAgICAgIH0gLFxyXG5cclxuICAgICAgICAgICAgaW5pdEluc3RhbmNlICgpIHtcclxuXHJcbiAgICAgICAgICAgIH0gLFxyXG5cclxuICAgICAgICAgICAgaW5pdGlhbGl6ZSAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeE5hdigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb20ud2luLm9uKCdzY3JvbGwnICwgdGhpcy5maXhOYXYuYmluZCh0aGlzKSAsIHRydWUgLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gLFxyXG5cclxuICAgICAgICAgICAgZml4TmF2ICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tLm1vZHVsZU5hdi5yZW1vdmVDbGFzcygnbW9kdWxlLW5hdi1maXgnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb20ubW9kdWxlTmF2LmFkZENsYXNzKCdtb2R1bGUtbmF2LWZpeCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb20ubW9kdWxlTmF2LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB5ICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQgc3JjPVwiLi9jc3MvbW9kdWxlTmF2LmNzc1wiPjwvc3R5bGU+IiwiaW1wb3J0IG1lbnUgZnJvbSAnLi4vLi4vcHVibGljL21lbnUudnVlJztcclxuaW1wb3J0IG1vZHVsZU5hdiBmcm9tICcuLi8uLi9wdWJsaWMvbW9kdWxlTmF2LnZ1ZSc7XHJcbmltcG9ydCByb3V0ZUZvclZ1ZSBmcm9tICcuLi8uLi8uLi9yb3V0ZXIvcm91dGVzLmpzJztcclxuXHJcbmxldCBvbmNlID0gbnVsbDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidi1pbmRleFwiICxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvbToge30gLFxyXG4gICAgICAgICAgICBpbnM6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgZmllbGQ6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAnaWQnICxcclxuICAgICAgICAgICAgICAgIHBfaWQ6ICdwX2lkJ1xyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICAgICAgbG9nb3V0OiBudWxsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBwZW5kaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBsb2dvdXQ6IGZhbHNlICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIHJlbmRlcjogJycgLFxyXG4gICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgbGVmdE1pblc6IDUwICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgfTtcclxuICAgIH0gLFxyXG4gICAgbWl4aW5zOiBbXHJcbiAgICAgICAgbWl4aW5zLmxvYWRpbmcgLFxyXG4gICAgXSAsXHJcbiAgICBtb3VudGVkICgpIHtcclxuICAgICAgICB0aGlzLmluaXREb20oKTtcclxuICAgICAgICB0aGlzLmluaXRWYWx1ZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICB9ICxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAndi1tZW51JzogbWVudVxyXG4gICAgfSAsXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaW5pdERvbSAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmZ1bmN0aW9ucyA9IEcodGhpcy4kcmVmc1snZnVuY3Rpb25zLWZvci11c2VyJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5jb24gPSBHKHRoaXMuJHJlZnMuY29uKTtcclxuICAgICAgICAgICAgdGhpcy5kb20ubGVmdCA9IEcodGhpcy4kcmVmcy5sZWZ0KTtcclxuICAgICAgICAgICAgdGhpcy5kb20ucmlnaHQgPSBHKHRoaXMuJHJlZnMucmlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5sZWZ0VG9wID0gRyh0aGlzLiRyZWZzWydsZWZ0LXRvcCddKTtcclxuICAgICAgICAgICAgdGhpcy5kb20ubGVmdE1pZCA9IEcodGhpcy4kcmVmc1snaW5maW5pdGUtY2xhc3NpZmljYXRpb24nXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmxlZnRCdG0gPSBHKHRoaXMuJHJlZnNbJ2xlZnQtYnRtJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5tdWx0aXBsZVRhYiA9IEcodGhpcy4kcmVmc1snbXVsdGlwbGUtdGFiJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS53aW4gPSBHKHdpbmRvdyk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmhvcml6b250YWwgPSBHKHRoaXMuJHJlZnMuaG9yaXpvbnRhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnZlcnRpY2FsID0gRyh0aGlzLiRyZWZzLnZlcnRpY2FsKTtcclxuICAgICAgICAgICAgdGhpcy5kb20udXNlciA9IEcodGhpcy4kcmVmcy51c2VyKTtcclxuICAgICAgICAgICAgdGhpcy5kb20uYmxvY2sgPSBHKHRoaXMuJHJlZnMuYmxvY2spO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5yaWdodFRvcCA9IEcodGhpcy4kcmVmc1sncmlnaHQtdG9wJ10pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0SW5zdGFuY2UgKCkge1xyXG5cclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgZ2V0RGF0YSAoKSB7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlICwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm8ocmVzb2x2ZSAsIHJlamVjdCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0aWFsaXplICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0VmFsdWUoKTtcclxuICAgICAgICAgICAgLy8gRE9NIOa4suafk+WujOaIkFxyXG4gICAgICAgICAgICB0aGlzLmluaXRUYWIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0TWVudSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRTdHlsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRTbGlkZWJhcigpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0VmFsdWUgKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLmxlZnRXID0gdGhpcy5kb20ubGVmdC53aWR0aCgnYm9yZGVyLWJveCcpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnVzZXJXID0gdGhpcy5kb20udXNlci53aWR0aCgnYm9yZGVyLWJveCcpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnVzZXJIID0gdGhpcy5kb20udXNlci5oZWlnaHQoJ2JvcmRlci1ib3gnKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgaW5pdFN0eWxlICgpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqICoqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgICAqIOW3pui+ue+8muiPnOWNlVxyXG4gICAgICAgICAgICAgKiAqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5pbml0TGVmdE1pZEgoKTtcclxuICAgICAgICAgICAgdGhpcy5kb20ud2luLm9uKCdyZXNpemUnICwgdGhpcy5pbml0TGVmdE1pZEguYmluZCh0aGlzKSAsIHRydWUgLCBmYWxzZSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRTbGlkZWJhciAoKSB7XHJcbiAgICAgICAgICAgIGxldCBzbGlkZWJhciA9IEcucy5nZXQoJ3NsaWRlYmFyJyk7XHJcbiAgICAgICAgICAgIGlmIChHLmlzTnVsbChzbGlkZWJhcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNsaWRlYmFyID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsKCk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRMZWZ0TWlkSCAoKSB7XHJcbiAgICAgICAgICAgIGxldCBsZWZ0SCA9IHRoaXMuZG9tLmxlZnQuaGVpZ2h0KCdjb250ZW50LWJveCcpO1xyXG4gICAgICAgICAgICBsZXQgbGVmdFRvcEggPSB0aGlzLmRvbS5sZWZ0VG9wLmhlaWdodCgnYm9yZGVyLWJveCcpO1xyXG4gICAgICAgICAgICBsZXQgbGVmdEJ0bUggPSB0aGlzLmRvbS5sZWZ0QnRtLmhlaWdodCgnYm9yZGVyLWJveCcpO1xyXG4gICAgICAgICAgICBsZXQgbGVmdE1pZE1pbkggPSBwYXJzZUludCh0aGlzLmRvbS5sZWZ0TWlkLmNzcygnbWluSGVpZ2h0JykpO1xyXG4gICAgICAgICAgICBsZXQgbGVmdE1pZEggPSBsZWZ0SCAtbGVmdFRvcEggLSBsZWZ0QnRtSDtcclxuICAgICAgICAgICAgbGVmdE1pZEggPSBNYXRoLm1heChsZWZ0TWlkTWluSCAsIGxlZnRNaWRIKTtcclxuICAgICAgICAgICAgdGhpcy5kb20ubGVmdE1pZC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBsZWZ0TWlkSCArICdweCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRUYWIgKCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLnRhYiA9IG5ldyBNdWx0aXBsZVRhYih0aGlzLmRvbS5tdWx0aXBsZVRhYi5nZXQoMCkgLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiAyMDAgLFxyXG4gICAgICAgICAgICAgICAgaWNvOiAnL3BsdWdpbi9NdWx0aXBsZVRhYi9pbWFnZS9pY29uLmljbycgLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZCAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDot6/nlLHlj4LmlbBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW0gPSB0aGlzLmF0dHIoaWQgLCAncGFyYW0nKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbSA9IEcuaXNWYWxpZChwYXJhbSkgPyBHLmpzb25EZWNvZGUocGFyYW0pIDoge307XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jcmVhdGUodGhpcyAsIGlkICwgcGFyYW0pO1xyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICBkZWxldGVkIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGVsZXRlKGlkKTtcclxuICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgY2xpY2sgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zd2l0Y2goaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgICAgICBpbml0TWVudSAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLmlucy5pYyA9IG5ldyBJbmZpbml0ZUNsYXNzaWZpY2F0aW9uKHRoaXMuZG9tLmxlZnRNaWQuZ2V0KDApICwge1xyXG4gICAgICAgICAgICAgICAgLy8g6I+c5Y2V5bGV5byA5Yqo55S76L+H5rih5pe26Ze0XHJcbiAgICAgICAgICAgICAgICB0aW1lOiAyMDAgLFxyXG4gICAgICAgICAgICAgICAgLy8g5qyh6KaB55qE5Zu+5qCH57G75Z6L77yMbmV3IHx8IG51bWJlciB8fCBzd2l0Y2hcclxuICAgICAgICAgICAgICAgIGljb246ICdzd2l0Y2gnICxcclxuICAgICAgICAgICAgICAgIC8vIOagh+ivhuespu+8jOWxleW8gOeahOmhue+8mzEuIOWcqOWFg+e0oOmHjOmdouiuvue9riBkYXRhLWZvY3VzPSd5JyArXHJcbiAgICAgICAgICAgICAgICBpZDogWzczXSAsXHJcbiAgICAgICAgICAgICAgICAvLyDliJ3lp4vnirbmgIHvvIxzcHJlYWQgfHwgc2hyaW5rXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzaHJpbmsnICxcclxuICAgICAgICAgICAgICAgIC8vIOWxgue6p+inhuinieaYvuekuuaViOaenFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAxMiAsXHJcbiAgICAgICAgICAgICAgICAvLyDlkIzlsYLnuqfmmK/lkKbkupLmlqVcclxuICAgICAgICAgICAgICAgIGV4Y2x1dGlvbjogdHJ1ZSAsXHJcbiAgICAgICAgICAgICAgICAvLyDmmK/lkKboj5zljZXkuZ/lj6/ooqvpgInkuK1cclxuICAgICAgICAgICAgICAgIG1lbnVGb2N1czogdHJ1ZSAsXHJcbiAgICAgICAgICAgICAgICAvLyDngrnlh7vpobnlkI7mmK/lkKbpgInkuK1cclxuICAgICAgICAgICAgICAgIGZvY3VzOiBmYWxzZSAsXHJcbiAgICAgICAgICAgICAgICAvLyDmmK/lkKbpgInkuK3pobbnuqfoj5zljZVcclxuICAgICAgICAgICAgICAgIHRvcEZvY3VzOiBmYWxzZSAsXHJcbiAgICAgICAgICAgICAgICAvLyDlrZDnuqfpobnngrnlh7vlkI7lm57osINcclxuICAgICAgICAgICAgICAgIGNoaWxkIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3BSb3V0ZSA9IHNlbGYudG9wUm91dGUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb3V0ZSA9IHNlbGYuZmluZFJvdXRlQnlJZChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBzZWxmLmdlblRhYk5hbWUodG9wUm91dGUgLCByb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vcGVuKHRleHQgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlOiByb3V0ZS5yb3V0ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgaG9yaXpvbnRhbCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnVzZXIucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgLy8g5ruR5Z2X5YiH5o2iXHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmhvcml6b250YWwuaGlnaGxpZ2h0KCdoaWRlJyAsIHRoaXMuZG9tLmJsb2NrLmNoaWxkcmVuKCkuZ2V0KCkgLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8g6I+c5Y2V5bGV5byAXHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmxlZnQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy52YWx1ZS5sZWZ0VyArICdweCcgLFxyXG4gICAgICAgICAgICB9ICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMuaWMuaWNvbignbm9uZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8g55So5oi35bGV5byAXHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnVzZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy52YWx1ZS51c2VyVyArICdweCcgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnZhbHVlLnVzZXJIICsgJ3B4J1xyXG4gICAgICAgICAgICB9ICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TGVmdE1pZEgoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIOWGheWuueaUtue8qVxyXG4gICAgICAgICAgICB0aGlzLmRvbS5yaWdodC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiB0aGlzLnZhbHVlLmxlZnRXICsgJ3B4JyAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyDlj7Pkvqfpobbpg6jlr7zoiKrmoI/mlLbnvKlcclxuICAgICAgICAgICAgdGhpcy5kb20ucmlnaHRUb3AuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhpcy52YWx1ZS5sZWZ0VyArICdweCcgLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgRy5zLnNldCgnc2xpZGViYXInICwgJ2hvcml6b250YWwnKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgdmVydGljYWwgKCkge1xyXG4gICAgICAgICAgICAvLyDmu5HlnZfliIfmjaJcclxuICAgICAgICAgICAgdGhpcy5kb20udmVydGljYWwuaGlnaGxpZ2h0KCdoaWRlJyAsIHRoaXMuZG9tLmJsb2NrLmNoaWxkcmVuKCkuZ2V0KCkgLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8g6I+c5Y2V5bGV5byAXHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmxlZnQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy52YWx1ZS5sZWZ0TWluVyArICdweCcgLFxyXG4gICAgICAgICAgICB9ICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMuaWMuaWNvbigndGV4dCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8g55So5oi35pS257ypXHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnVzZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzBweCcgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMHB4J1xyXG4gICAgICAgICAgICB9ICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb20udXNlci5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TGVmdE1pZEgoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIOWGheWuueaUtue8qVxyXG4gICAgICAgICAgICB0aGlzLmRvbS5yaWdodC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiB0aGlzLnZhbHVlLmxlZnRNaW5XICsgJ3B4JyAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyDlj7Pkvqfpobbpg6jlr7zoiKrmoI/mlLbnvKlcclxuICAgICAgICAgICAgdGhpcy5kb20ucmlnaHRUb3AuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhpcy52YWx1ZS5sZWZ0TWluVyArICdweCcgLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgRy5zLnNldCgnc2xpZGViYXInICwgJ3ZlcnRpY2FsJyk7XHJcbiAgICAgICAgfSAsXHJcbiAgICAgICAgLy8g5pi+56S6XHJcbiAgICAgICAgc2hvd1VzZXJDdHJsICgpIHtcclxuICAgICAgICAgICAgdGhpcy5kb20uZnVuY3Rpb25zLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmZ1bmN0aW9ucy5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEgLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAnMHB4J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgICAgICAvLyDpmpDol49cclxuICAgICAgICBoaWRlVXNlckN0cmwgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5mdW5jdGlvbnMuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwICxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogJy0xMHB4J1xyXG4gICAgICAgICAgICB9ICwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb20uZnVuY3Rpb25zLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDmlrDlvIDmoIfnrb7pobVcclxuICAgICAgICBvcGVuICh0ZXh0ICwgYXR0ciAsIGljbyA9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnMudGFiLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpY28gLFxyXG4gICAgICAgICAgICAgICAgdGV4dCAsXHJcbiAgICAgICAgICAgICAgICBhdHRyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDliJvlu7rlhoXlrrlcclxuICAgICAgICBjcmVhdGUgKHRhYiAsIGlkICwgcGFyYW0pIHtcclxuICAgICAgICAgICAgdmFyIHJvdXRlID0gdGFiLmF0dHIoaWQgLCAncm91dGUnKTtcclxuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZGl2ID0gRyhkaXYpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmRhdGEoJ2lkJyAsIGlkKTtcclxuICAgICAgICAgICAgdmFyIHJlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZChyZW5kZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5jb24uYXBwZW5kKGRpdi5nZXQoMCkpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdW50KHJlbmRlciAsIGlkICwgcm91dGUgLCBwYXJhbSk7XHJcbiAgICAgICAgICAgIGRpdi5oaWdobGlnaHQoJ2hpZGUnICwgZGl2LnBhcmVudCgpLmNoaWxkcmVuKCkuZ2V0KCkgLCB0cnVlKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5Yig6Zmk5YaF5a65XHJcbiAgICAgICAgZGVsZXRlIChpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5jb24ucmVtb3ZlKHRoaXMuaXRlbShpZCkpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDmn6Xmib7nu5nlrprnmoTpoblcclxuICAgICAgICBpdGVtIChpZCkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLmRvbS5jb24uY2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1ciA9IGl0ZW1zLmp1bXAoaSAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1ci5kYXRhKCdpZCcpID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yig6Zmk6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1ci5nZXQoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfmnKrmib7liLDnu5nlrproioLngrknKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDmoIfnrb7liIfmjaJcclxuICAgICAgICBzd2l0Y2ggKGlkKSB7XHJcbiAgICAgICAgICAgIEcodGhpcy5pdGVtKGlkKSkuaGlnaGxpZ2h0KCdoaWRlJyAsIHRoaXMuZG9tLmNvbi5jaGlsZHJlbigpLmdldCgpICwgdHJ1ZSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOe7hOS7tlxyXG4gICAgICAgIGNvbXBvbmVudCAocm91dGUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUZvclZ1ZS5sZW5ndGg7ICsraSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSByb3V0ZUZvclZ1ZVtpXTtcclxuICAgICAgICAgICAgICAgIGlmICh2LnBhdGggPT0gcm91dGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi5jb21wb25lbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfmnKrmib7liLAgcm91dGXvvJonICsgcm91dGUgKyAn5a+55bqU55qE6Lev55SxJyk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOaMgui9vee7hOW7ulxyXG4gICAgICAgIG1vdW50IChjb250YWluZXIgLCBpZCAsIHJvdXRlICwgcGFyYW0pIHtcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50KHJvdXRlKTtcclxuICAgICAgICAgICAgY29tcG9uZW50KCkudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDms6jmhI8gbW9kdWxlLmRlZmF1bHQg77yBXHJcbiAgICAgICAgICAgICAgICAvLyDlhbfkvZPljp/lm6Dor7fmn6XnnIsgaW1wb3J0IOivreazleino+mHilxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMubmV3Q29tcG9uZW50KG1vZHVsZS5kZWZhdWx0ICwgcm91dGUgLCBwYXJhbSAsIGlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXcgY29tcG9uZW50KCkuJG1vdW50KGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDnlJ/miJDmoIfnrb7lkI3np7BcclxuICAgICAgICBnZW5UYWJOYW1lICh0b3BSb3V0ZSAsIGN1clJvdXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0b3BSb3V0ZS5uYW1lfS0ke2N1clJvdXRlLm5hbWV9YDtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g6YeN5paw5riy5p+TXHJcbiAgICAgICAgcmVSZW5kZXIgKGlkICwgcm91dGUgLCBwYXJhbSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyUm91dGUgPSB0aGlzLmZpbmRSb3V0ZUJ5Um91dGUocm91dGUpO1xyXG4gICAgICAgICAgICBsZXQgdG9wUm91dGUgPSB0aGlzLnRvcFJvdXRlKGN1clJvdXRlLmlkKTtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5nZW5UYWJOYW1lKHRvcFJvdXRlICwgY3VyUm91dGUpO1xyXG4gICAgICAgICAgICB0aGlzLmlucy50YWIudGl0bGUoaWQgLCB0aXRsZSk7XHJcbiAgICAgICAgICAgIC8vIOabtOaWsOagh+etvuWGheWuuVxyXG4gICAgICAgICAgICAvLyDph43mlrDmuLLmn5PlhYPntKDlhoXlrrlcclxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IHRoaXMuaXRlbShpZCk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBHKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5tb3VudChkaXYgLCBpZCAsIHJvdXRlICwgcGFyYW0pO1xyXG4gICAgICAgICAgICAvLyDmuIXnqbrlhoXlrrlcclxuICAgICAgICAgICAgY29udGFpbmVyLmh0bWwoJycpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGRpdik7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOaWsOW8gOS4gOS4quagh+etvumhtVxyXG4gICAgICAgIGNyZWF0ZVRhYiAocm91dGUgLCBwYXJhbSA9IHt9KSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJSb3V0ZSA9IHRoaXMuZmluZFJvdXRlQnlSb3V0ZShyb3V0ZSk7XHJcbiAgICAgICAgICAgIGxldCB0b3BSb3V0ZSA9IHRoaXMudG9wUm91dGUoY3VyUm91dGUuaWQpO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLmdlblRhYk5hbWUodG9wUm91dGUgLCBjdXJSb3V0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbih0aXRsZSAsIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlOiBjdXJSb3V0ZS5yb3V0ZSAsXHJcbiAgICAgICAgICAgICAgICBwYXJhbTogRy5qc29uRW5jb2RlKHBhcmFtKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5a6e5L6L5YyWIHZ1ZSDnu4Tku7ZcclxuICAgICAgICBuZXdDb21wb25lbnQgKGNvbXBvbmVudCAsIHJvdXRlICwgcGFyYW0gLCBpZCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJvdXRlID0gdGhpcy5maW5kUm91dGVCeVJvdXRlKHJvdXRlKTtcclxuICAgICAgICAgICAgbGV0IHRvcFJvdXRlID0gdGhpcy50b3BSb3V0ZShyb3V0ZS5pZCk7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5taXhpbnMgPSBjb21wb25lbnQubWl4aW5zID8gY29tcG9uZW50Lm1peGlucyA6IFtdO1xyXG4gICAgICAgICAgICBsZXQgbWl4aW5zID0ge1xyXG4gICAgICAgICAgICAgICAgZGF0YSAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5b2T5YmN57uE5Lu255qE5qCH6K+G56ymXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWtkOe7hOS7tuS4jeWFgeiuuOiuvue9rui/meS6m+WAvO+8gVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BSb3V0ZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogW11cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcyA9IHNlbGYuY3VyUG9zKHJvdXRlLmlkKTtcclxuICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS5n+i3s+i3s+i9rOaWueazlVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uIChyb3V0ZSAsIHBhcmFtICwgdHlwZSA9ICdfc2VsZicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g55uu5YmN5LuF5pyJ5Lik56eN57G75Z6LXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIF9zZWxmIOmhtemdouWGhemHjei9vVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBfYmxhbmsg5omT5byA5paw55qE5qCH562+6aG1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0eXBlUmFuZ2UgPSBbJ19zZWxmJyAsICdfYmxhbmsnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ19zZWxmJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucmVSZW5kZXIoaWQgLCByb3V0ZSAsIHBhcmFtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSAnX2JsYW5rJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5paw5byA5LiA5Liq5qCH562+6aG1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5jcmVhdGVUYWIocm91dGUgLCBwYXJhbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLi4u6aKE55WZ55qE5YaF5a65XHJcbiAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yi35paw5pON5L2cXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsb2FkICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbih0aGlzLnJvdXRlLnJvdXRlICwgdGhpcy5wYXJhbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kbyDlkI7pgIBcclxuICAgICAgICAgICAgICAgICAgICBwcmV2ICgpIHt9ICxcclxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvIOWJjei/m1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQgKCkge30gLFxyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ21vZHVsZS1uYXYnOiBtb2R1bGVOYXZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29tcG9uZW50Lm1peGlucy5wdXNoKG1peGlucyk7XHJcbiAgICAgICAgICAgIHJldHVybiBWdWUuZXh0ZW5kKHtcclxuICAgICAgICAgICAgICAgIC8vIOi/meS4quWcsOaWueW/hemhu+imgeS9v+eUqOatpOenjeaWueW8j++8ge+8gVxyXG4gICAgICAgICAgICAgICAgLy8g6YeN5paw5ou35LiA5Lu96K+l57uE5Lu2XHJcbiAgICAgICAgICAgICAgICAvLyDlkKbliJnvvIzmjInnhaflrpjnvZHnmoTmj4/ov7BcclxuICAgICAgICAgICAgICAgIC8vIOW8guatpee7hOS7tue7k+aenOS8muiiq+e8k+WtmFxyXG4gICAgICAgICAgICAgICAgLy8g5Lmf5bCx5piv6K+l57uE5Lu25LuF5Lya5a6e5L6L5YyW5LiA5qyh77yBXHJcbiAgICAgICAgICAgICAgICAvLyDkuYvlkI7kvr/kuI3lho3ph43lpI3lrp7kvovljJZcclxuICAgICAgICAgICAgICAgIC8vIOWkjeeUqOS5i+WJjeeahOWunuS+i1xyXG4gICAgICAgICAgICAgICAgLi4uY29tcG9uZW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDojrflj5boj5zljZXmlbDmja5cclxuICAgICAgICBnZXRNZW51RGF0YSAocHJpdikge1xyXG4gICAgICAgICAgICBsZXQgbWVudSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyID0gKGRhdGEgLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA+IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5q275b6q546vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHYgPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2Lm1lbnUgIT0gJ3knKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF92ID0gey4uLnZ9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKF92KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF92LmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcih2LmNoaWxkcmVuICwgX3YuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmlsdGVyKHByaXYgLCBtZW51KTtcclxuICAgICAgICAgICAgcmV0dXJuIG1lbnU7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+ebuOWFs+aVsOaNrlxyXG4gICAgICAgIGluZm8gKHJlc29sdmUgLCByZWplY3QpIHtcclxuICAgICAgICAgICAgYWRtaW5BcGkuaW5mbygocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZXJyb3IocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g6ZKI5a+5IGRhdGEg5YGa5LiA5Lqb5pWw5o2u6L+H5rukXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51ID0gdGhpcy5nZXRNZW51RGF0YShyZXMudXNlci5yb2xlLnByaXYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdtZW51JyAsIG1lbnUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd1c2VyJyAsIHJlcy51c2VyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgncHJpdicgLCByZXMudXNlci5yb2xlLnByaXYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdyb3V0ZScgLCByZXMucm91dGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdvcycgLCByZXMub3MpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g6I635Y+W5b2T5YmN6Lev55SxIGJ5IGlkXHJcbiAgICAgICAgZmluZFJvdXRlQnlJZCAoaWQpIHtcclxuICAgICAgICAgICAgbGV0IHJvdXRlcyA9IHRoaXMuJHN0b3JlLnN0YXRlLnJvdXRlO1xyXG4gICAgICAgICAgICBsZXQgcm91dGUgPSBHLnQuY3VycmVudChpZCAsIHJvdXRlcyAsIHRoaXMuZmllbGQpO1xyXG4gICAgICAgICAgICBpZiAoRy5pc051bGwocm91dGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+acquaJvuWIsOW9k+WJjSBpZO+8micgKyBpZCArICcg5a+55bqU6Lev55Sx77yBJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDojrflj5blvZPliY3ot6/nlLHvvIxieSByb3V0ZVxyXG4gICAgICAgIGZpbmRSb3V0ZUJ5Um91dGUgKHJvdXRlKSB7XHJcbiAgICAgICAgICAgIGxldCByb3V0ZXMgPSB0aGlzLiRzdG9yZS5zdGF0ZS5yb3V0ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZXMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXIgPSByb3V0ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyLnJvdXRlID09IHJvdXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+acquaJvuWIsOe7meWumui3r+eUse+8micgKyByb3V0ZSArICfvvIEnKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g6I635Y+W6aG257qn6Lev55SxXHJcbiAgICAgICAgdG9wUm91dGUgKGlkKSB7XHJcbiAgICAgICAgICAgIGxldCByb3V0ZSA9IHRoaXMuJHN0b3JlLnN0YXRlLnJvdXRlO1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50cyA9IEcudC5wYXJlbnRzKGlkICwgcm91dGUgLCB0aGlzLmZpZWxkICwgdHJ1ZSAsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cztcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g6I635Y+W5b2T5YmN5L2N572uXHJcbiAgICAgICAgY3VyUG9zIChpZCkge1xyXG4gICAgICAgICAgICBsZXQgcm91dGUgPSB0aGlzLiRzdG9yZS5zdGF0ZS5yb3V0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIEcudC5wYXJlbnRzKGlkICwgcm91dGUgLCB0aGlzLmZpZWxkICwgdHJ1ZSAsIGZhbHNlKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5rOo6ZSAXHJcbiAgICAgICAgbG9nb3V0ICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZy5sb2dvdXQpIHtcclxuICAgICAgICAgICAgICAgICRpbmZvKCfor7fmsYLkuK0uLi7or7fogJDlv4PnrYnlvoUnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nLmxvZ291dCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmFqYXgubG9nb3V0ID0gYWRtaW5BcGkubG9nb3V0KChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmcubG9nb3V0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVycm9yKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOmAgOWHuueZu+W9lVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZUxvZ291dCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5zZXRBcmdzKHRoaXMuaW5zLmxvYWRpbmcgLCAnbG9nb3V0Jyk7XHJcbiAgICAgICAgfSAsXHJcbiAgICB9ICxcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHJlZjogXCJjb250YWluZXJcIiwgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInYtbG9hZGluZ1wiLCB7IHJlZjogXCJsb2FkaW5nXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyByZWY6IFwibGVmdFwiLCBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcImxlZnQtdG9wXCIsIHN0YXRpY0NsYXNzOiBcInRvcFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS4kc3RvcmUuc3RhdGUub3Muc3lzdGVtLmxvZ28gfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiRzdG9yZS5zdGF0ZS5vcy5zeXN0ZW0ubmFtZSkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHJlZjogXCJ1c2VyXCIsIHN0YXRpY0NsYXNzOiBcInVzZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2UtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS4kc3RvcmUuc3RhdGUudXNlci5hdmF0YXJfZXhwbGFpbiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0bVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kc3RvcmUuc3RhdGUudXNlci51c2VybmFtZSkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHJlZjogXCJibG9ja1wiLCBzdGF0aWNDbGFzczogXCJibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS52ZXJ0aWNhbCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl9tKDApXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidmVydGljYWwgaGlkZVwiLFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5ob3Jpem9udGFsIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX20oMSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHJlZjogXCJpbmZpbml0ZS1jbGFzc2lmaWNhdGlvblwiLCBzdGF0aWNDbGFzczogXCJtaWRcIiB9LFxuICAgICAgICAgICAgW19jKFwidi1tZW51XCIpXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyByZWY6IFwibGVmdC1idG1cIiwgc3RhdGljQ2xhc3M6IFwiYnRtXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHN0b3JlLnN0YXRlLm9zLnN5c3RlbS5uYW1lKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyByZWY6IFwicmlnaHRcIiwgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcInJpZ2h0LXRvcFwiLCBzdGF0aWNDbGFzczogXCJ0b3BcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjLXRvcFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXNlclwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjogX3ZtLnNob3dVc2VyQ3RybCxcbiAgICAgICAgICAgICAgICAgICAgbW91c2VsZWF2ZTogX3ZtLmhpZGVVc2VyQ3RybFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjdHJsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF2YXRhclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uJHN0b3JlLnN0YXRlLnVzZXIuYXZhdGFyX2V4cGxhaW4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1c2VybmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kc3RvcmUuc3RhdGUudXNlci51c2VybmFtZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJmdW5jdGlvbnMtZm9yLXVzZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmdW5jdGlvbnMgaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bmN0aW9uXCIsIG9uOiB7IGNsaWNrOiBfdm0ubG9nb3V0IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW192bS5fdihcIuazqOmUgFwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyByZWY6IFwibXVsdGlwbGUtdGFiXCIsIHN0YXRpY0NsYXNzOiBcImMtYnRtXCIgfSwgW192bS5fbSgzKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0bVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImR5bmFtaWNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHJlZjogXCJjb25cIiwgc3RhdGljQ2xhc3M6IFwiaW5cIiB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2UvbG9nb3V0LnBuZ1wiKSB9XG4gICAgICB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXVsdGlwbGUtdGFiXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJzXCIgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtXCIsIGF0dHJzOiB7IFwiZGF0YS1pZFwiOiBfdm0uZGF0YS5pZCB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZ1bmN0aW9uXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICBfdm0uZGF0YS5mbG9vciA+IDEgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSkgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uZGF0YS5zX2ljb19leHBsYWluIH1cbiAgICAgICAgfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXhwbGFpblwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpblwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS5uYW1lKSldKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDEpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNoaWxkXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdFwiIH0sXG4gICAgICAgIF92bS5fbChfdm0uZGF0YS5jaGlsZHJlbiwgZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBfYyhcInYtaXRlbVwiLCB7IGtleTogdi5pZCwgYXR0cnM6IHsgZGF0YTogdiB9IH0pXG4gICAgICAgIH0pLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IFwiL3BsdWdpbi9JbmZpbml0ZUNsYXNzaWZpY2F0aW9uL2ltYWdlL2RlZmF1bHQvcmluZy5wbmdcIiB9XG4gICAgICB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxhZyBoaWRlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuZXdcIiB9LCBbX3ZtLl92KFwi5paw55qEXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJudW1iZXJcIiB9LCBbX3ZtLl92KFwiMTBcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN3aXRjaFwiIH0sIFtcbiAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHNyYzogXCIvcGx1Z2luL0luZmluaXRlQ2xhc3NpZmljYXRpb24vaW1hZ2UvZGVmYXVsdC9zcHJlYWQucG5nXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZmluaXRlLWNsYXNzaWZpY2F0aW9uXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdFwiIH0sXG4gICAgICBfdm0uX2woX3ZtLiRzdG9yZS5zdGF0ZS5tZW51LCBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiBfYyhcInYtaXRlbVwiLCB7IGtleTogdi5pZCwgYXR0cnM6IHsgZGF0YTogdiB9IH0pXG4gICAgICB9KSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHJlZjogXCJtb2R1bGUtbmF2XCIsIHN0YXRpY0NsYXNzOiBcIm1vZHVsZS1uYXZcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IF92bS50b3BSb3V0ZS5iX2ljb19leHBsYWluIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNuXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRvcFJvdXRlLm5hbWUpKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImRlbGltaXRlclwiIH0sIFtfdm0uX3YoXCIvXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW5cIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0udG9wUm91dGUuZW4pKV0pLFxuICAgICAgX3ZtLl92KFwiXFxuICAgICAgICDCoMKgXFxuICAgICAgICBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJ1bi1idXR0b24gcnVuLWJ1dHRvbi1ibHVlXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcGFyZW50LnJlbG9hZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwicnVuLWljb25mb250IHJ1bi1yZXNldFwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIuagh+etvumhteWIt+aWsFxcbiAgICAgICAgXCIpXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uX2woX3ZtLnBvcywgZnVuY3Rpb24odiwgaykge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdi5yb3V0ZSAhPSBcIlwiICYmIHYucm91dGUgIT0gX3ZtLiRwYXJlbnQucm91dGUucm91dGVcbiAgICAgICAgICAgICAgICAgICAgICA/IF92bS4kcGFyZW50LmxvY2F0aW9uKHYucm91dGUpXG4gICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh2Lm5hbWUpKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgIShrID09IF92bS5wb3MubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJkZWxpbWl0ZXJcIiB9LCBbX3ZtLl92KFwiL1wiKV0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTg5YjY4YWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xODliNjhhYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZS9sb2dvdXQucG5nXCI7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTg5YjY4YWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vanMvaW5kZXguanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2pzL2luZGV4LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2Nzcy9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xODliNjhhYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTg5YjY4YWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx3b3JrXFxcXGNvZGVcXFxcY2FyXFxcXHB1YmxpY1xcXFxtb2R1bGVcXFxcYWRtaW5cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE4OWI2OGFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE4OWI2OGFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTg5YjY4YWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTg5YjY4YWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNvdXJjZS92dWUvdmlldy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4OWI2OGFjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4vaW5kZXguanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL2luZGV4LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL21vZHVsZU5hdi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZTI1NDBlYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL21vZHVsZU5hdi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZTI1NDBlYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmEwMzQ5NjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmYTAzNDk2NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdvcmtcXFxcY29kZVxcXFxjYXJcXFxccHVibGljXFxcXG1vZHVsZVxcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZmEwMzQ5NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZmEwMzQ5NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZhMDM0OTY0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2ZhMDM0OTY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL3ZpZXcvcHVibGljL2l0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZhMDM0OTY0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOGQxZWY5YSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE4ZDFlZjlhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcd29ya1xcXFxjb2RlXFxcXGNhclxcXFxwdWJsaWNcXFxcbW9kdWxlXFxcXGFkbWluXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxOGQxZWY5YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxOGQxZWY5YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MThkMWVmOWEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMThkMWVmOWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNvdXJjZS92dWUvdmlldy9wdWJsaWMvbWVudS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MThkMWVmOWEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21vZHVsZU5hdi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGUyNTQwZWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbW9kdWxlTmF2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbW9kdWxlTmF2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jc3MvbW9kdWxlTmF2LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBlMjU0MGVjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwZTI1NDBlY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdvcmtcXFxcY29kZVxcXFxjYXJcXFxccHVibGljXFxcXG1vZHVsZVxcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGUyNTQwZWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGUyNTQwZWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21vZHVsZU5hdi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGUyNTQwZWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGUyNTQwZWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNvdXJjZS92dWUvdmlldy9wdWJsaWMvbW9kdWxlTmF2LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vZHVsZU5hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vZHVsZU5hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9kdWxlTmF2LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZTI1NDBlYyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=