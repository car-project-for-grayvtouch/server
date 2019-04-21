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
        time: 300,
        // 次要的图标类型，new || number || switch
        icon: 'switch',
        // 标识符，展开的项；1. 在元素里面设置 data-focus='y' +
        id: [73],
        // 初始状态，spread || shrink
        status: 'shrink',
        // 层级视觉显示效果
        amount: 12,
        // 同层级是否互斥
        exclution: false,
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
        _c("img", { staticClass: "image", attrs: { src: _vm.data.s_ico } })
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
      _c("img", { staticClass: "image", attrs: { src: _vm.topRoute.b_ico } }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvaXRlbS52dWUiLCJ3ZWJwYWNrOi8vL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvbWVudS52dWUiLCJ3ZWJwYWNrOi8vL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvbW9kdWxlTmF2LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvaW5kZXgvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2luZGV4L2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvbW9kdWxlTmF2LmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvaW5kZXgvaW5kZXgudnVlPzUwYWEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9pdGVtLnZ1ZT84MzQyIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvbWVudS52dWU/OTI3NyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL21vZHVsZU5hdi52dWU/MTYyZCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvaW5kZXgvY3NzL2luZGV4LmNzcz82NmMyIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9pbmRleC9pbWFnZS9sb2dvdXQucG5nIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9pbmRleC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L2luZGV4L2luZGV4LnZ1ZT83M2ZmIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9pbmRleC9qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL2Nzcy9tb2R1bGVOYXYuY3NzPzEwYzMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9pdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL2l0ZW0udnVlP2RiZmMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9pdGVtLnZ1ZT8xZGFjIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvbWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9tZW51LnZ1ZT8xZGRkIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvbWVudS52dWU/OWFhMyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL21vZHVsZU5hdi52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9tb2R1bGVOYXYudnVlPzUzNTMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9tb2R1bGVOYXYudnVlPzA5ZDIiXSwibmFtZXMiOlsib25jZSIsIm5hbWUiLCJkYXRhIiwiZG9tIiwiaW5zIiwibG9hZGluZyIsImZpZWxkIiwiaWQiLCJwX2lkIiwiYWpheCIsImxvZ291dCIsInBlbmRpbmciLCJyZW5kZXIiLCJ2YWx1ZSIsImxlZnRNaW5XIiwibWl4aW5zIiwibW91bnRlZCIsImluaXREb20iLCJpbml0VmFsdWUiLCJpbml0SW5zdGFuY2UiLCJnZXREYXRhIiwiY29tcG9uZW50cyIsIm1lbnUiLCJtZXRob2RzIiwiZnVuY3Rpb25zIiwiRyIsIiRyZWZzIiwiY29uIiwibGVmdCIsInJpZ2h0IiwibGVmdFRvcCIsImxlZnRNaWQiLCJsZWZ0QnRtIiwibXVsdGlwbGVUYWIiLCJ3aW4iLCJ3aW5kb3ciLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJ1c2VyIiwiYmxvY2siLCJyaWdodFRvcCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW5mbyIsInRoZW4iLCIkbmV4dFRpY2siLCJpbml0aWFsaXplIiwiaW5pdFRhYiIsImluaXRNZW51IiwiaW5pdFN0eWxlIiwiaW5pdFNsaWRlYmFyIiwibGVmdFciLCJ3aWR0aCIsInVzZXJXIiwidXNlckgiLCJoZWlnaHQiLCJpbml0TGVmdE1pZEgiLCJvbiIsImJpbmQiLCJzbGlkZWJhciIsInMiLCJnZXQiLCJpc051bGwiLCJsZWZ0SCIsImxlZnRUb3BIIiwibGVmdEJ0bUgiLCJsZWZ0TWlkTWluSCIsInBhcnNlSW50IiwiY3NzIiwibGVmdE1pZEgiLCJNYXRoIiwibWF4Iiwic2VsZiIsInRhYiIsIk11bHRpcGxlVGFiIiwidGltZSIsImljbyIsImNyZWF0ZWQiLCJwYXJhbSIsImF0dHIiLCJpc1ZhbGlkIiwianNvbkRlY29kZSIsImNyZWF0ZSIsImRlbGV0ZWQiLCJkZWxldGUiLCJjbGljayIsInN3aXRjaCIsImljIiwiSW5maW5pdGVDbGFzc2lmaWNhdGlvbiIsImljb24iLCJzdGF0dXMiLCJhbW91bnQiLCJleGNsdXRpb24iLCJtZW51Rm9jdXMiLCJmb2N1cyIsInRvcEZvY3VzIiwiY2hpbGQiLCJ0b3BSb3V0ZSIsInJvdXRlIiwiZmluZFJvdXRlQnlJZCIsInRleHQiLCJnZW5UYWJOYW1lIiwib3BlbiIsInJlbW92ZUNsYXNzIiwiaGlnaGxpZ2h0IiwiY2hpbGRyZW4iLCJhbmltYXRlIiwicGFkZGluZ0xlZnQiLCJzZXQiLCJhZGRDbGFzcyIsInNob3dVc2VyQ3RybCIsIm9wYWNpdHkiLCJib3R0b20iLCJoaWRlVXNlckN0cmwiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJtb3VudCIsInBhcmVudCIsInJlbW92ZSIsIml0ZW0iLCJpdGVtcyIsImkiLCJsZW5ndGgiLCJjdXIiLCJqdW1wIiwiRXJyb3IiLCJjb21wb25lbnQiLCJyb3V0ZUZvclZ1ZSIsInYiLCJwYXRoIiwiY29udGFpbmVyIiwibW9kdWxlIiwibmV3Q29tcG9uZW50IiwiZGVmYXVsdCIsIiRtb3VudCIsImN1clJvdXRlIiwicmVSZW5kZXIiLCJmaW5kUm91dGVCeVJvdXRlIiwidGl0bGUiLCJodG1sIiwiY3JlYXRlVGFiIiwianNvbkVuY29kZSIsInBvcyIsImN1clBvcyIsImxvY2F0aW9uIiwidHlwZSIsInR5cGVSYW5nZSIsInJlbG9hZCIsInByZXYiLCJuZXh0IiwibW9kdWxlTmF2IiwicHVzaCIsIlZ1ZSIsImV4dGVuZCIsImdldE1lbnVEYXRhIiwicHJpdiIsImNvdW50IiwiZmlsdGVyIiwicmVzIiwiY29uc29sZSIsImxvZyIsIl92IiwiYWRtaW5BcGkiLCJjb2RlIiwiJGVycm9yIiwicm9sZSIsIiRzdG9yZSIsImNvbW1pdCIsIm9zIiwicm91dGVzIiwic3RhdGUiLCJ0IiwiY3VycmVudCIsInBhcmVudHMiLCIkaW5mbyIsInNob3ciLCJoaWRlIiwiZm9yY2VMb2dvdXQiLCJzZXRBcmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ2ZBLHFCQUFxQixtQkFBTyxDQUFDLGlGQUFrQjs7QUFFL0M7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSwrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNRQTtBQUNBLGdCQURBO0FBRUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsb0JBRkE7QUFHQTtBQUhBO0FBREE7QUFGQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFDQSxnQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQSxZQUNBO0FBREE7QUFH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O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0c7QUFDdkM7QUFDTDtBQUN5Qzs7O0FBR2pHO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTZMLENBQWdCLG1QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xyXG4gIGlmIChrZXkgaW4gb2JqKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xyXG5cclxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcclxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XHJcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIDpkYXRhLWlkPVwiZGF0YS5pZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdW5jdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgdi1pZj1cImRhdGEuZmxvb3IgPiAxXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZGF0YS5zX2ljb1wiIGNsYXNzPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBsYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvXCI+PGltZyBzcmM9XCIvcGx1Z2luL0luZmluaXRlQ2xhc3NpZmljYXRpb24vaW1hZ2UvZGVmYXVsdC9yaW5nLnBuZ1wiIGNsYXNzPVwiaW1hZ2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPnt7IGRhdGEubmFtZSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxhZyBoaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmV3XCI+5paw55qEPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibnVtYmVyXCI+MTA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2l0Y2hcIj48aW1nIHNyYz1cIi9wbHVnaW4vSW5maW5pdGVDbGFzc2lmaWNhdGlvbi9pbWFnZS9kZWZhdWx0L3NwcmVhZC5wbmdcIiBjbGFzcz1cImltYWdlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hpbGRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDx2LWl0ZW0gdi1mb3I9XCJ2IGluIGRhdGEuY2hpbGRyZW5cIiA6ZGF0YT1cInZcIiA6a2V5PVwidi5pZFwiPjwvdi1pdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcInYtaXRlbVwiICxcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QgLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUgLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPSdpbmZpbml0ZS1jbGFzc2lmaWNhdGlvbic+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cclxuICAgICAgICAgICAgPHYtaXRlbSB2LWZvcj1cInYgaW4gJHN0b3JlLnN0YXRlLm1lbnVcIiA6ZGF0YT1cInZcIiA6a2V5PVwidi5pZFwiPjwvdi1pdGVtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IGl0ZW0gZnJvbSAnLi9pdGVtLnZ1ZSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwidi1tZW51XCIgLFxyXG4gICAgICAgIGRhdGEgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbWFwcGluZyAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSAsXHJcbiAgICAgICAgY3JlYXRlZCAoKSB7XHJcblxyXG4gICAgICAgIH0gLFxyXG4gICAgICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgIH0gLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ3YtaXRlbSc6IGl0ZW1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZHVsZS1uYXZcIiByZWY9XCJtb2R1bGUtbmF2XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cclxuICAgICAgICAgICAgPGltZyA6c3JjPVwidG9wUm91dGUuYl9pY29cIiBjbGFzcz1cImltYWdlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY25cIj57eyB0b3BSb3V0ZS5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlbGltaXRlclwiPi88L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZW5cIj57eyB0b3BSb3V0ZS5lbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJydW4tYnV0dG9uIHJ1bi1idXR0b24tYmx1ZVwiIEBjbGljay5wcmV2ZW50PVwiJHBhcmVudC5yZWxvYWQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJydW4taWNvbmZvbnQgcnVuLXJlc2V0XCI+PC9pPuagh+etvumhteWIt+aWsFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgPCEtLSDpnaLljIXlsZEgLS0+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIih2LGspIGluIHBvc1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgQGNsaWNrPVwidi5yb3V0ZSAhPSAnJyAmJiB2LnJvdXRlICE9ICRwYXJlbnQucm91dGUucm91dGUgPyAkcGFyZW50LmxvY2F0aW9uKHYucm91dGUpIDogbnVsbFwiPnt7IHYubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVsaW1pdGVyXCIgdi1pZj1cIiEoayA9PSBwb3MubGVuZ3RoIC0gMSlcIj4vPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwidi1tb2R1bGUtbmF2XCIgLFxyXG4gICAgICAgIGRhdGEgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZG9tOiB7fSAsXHJcbiAgICAgICAgICAgICAgICBpbnM6IHt9ICxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9ICxcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0b3BSb3V0ZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0ICxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlICxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHt9XHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBwb3M6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5ICxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlICxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICxcclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0RG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEluc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH0gLFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgaW5pdERvbSAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbS5tb2R1bGVOYXYgPSBHKHRoaXMuJHJlZnNbJ21vZHVsZS1uYXYnXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbS53aW4gPSBHKHdpbmRvdyk7XHJcbiAgICAgICAgICAgIH0gLFxyXG5cclxuICAgICAgICAgICAgaW5pdEluc3RhbmNlICgpIHtcclxuXHJcbiAgICAgICAgICAgIH0gLFxyXG5cclxuICAgICAgICAgICAgaW5pdGlhbGl6ZSAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeE5hdigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb20ud2luLm9uKCdzY3JvbGwnICwgdGhpcy5maXhOYXYuYmluZCh0aGlzKSAsIHRydWUgLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gLFxyXG5cclxuICAgICAgICAgICAgZml4TmF2ICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tLm1vZHVsZU5hdi5yZW1vdmVDbGFzcygnbW9kdWxlLW5hdi1maXgnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb20ubW9kdWxlTmF2LmFkZENsYXNzKCdtb2R1bGUtbmF2LWZpeCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb20ubW9kdWxlTmF2LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB5ICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQgc3JjPVwiLi9jc3MvbW9kdWxlTmF2LmNzc1wiPjwvc3R5bGU+IiwiaW1wb3J0IG1lbnUgZnJvbSAnLi4vLi4vcHVibGljL21lbnUudnVlJztcclxuaW1wb3J0IG1vZHVsZU5hdiBmcm9tICcuLi8uLi9wdWJsaWMvbW9kdWxlTmF2LnZ1ZSc7XHJcbmltcG9ydCByb3V0ZUZvclZ1ZSBmcm9tICcuLi8uLi8uLi9yb3V0ZXIvcm91dGVzLmpzJztcclxuXHJcbmxldCBvbmNlID0gbnVsbDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidi1pbmRleFwiICxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvbToge30gLFxyXG4gICAgICAgICAgICBpbnM6IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IG51bGwgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgZmllbGQ6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAnaWQnICxcclxuICAgICAgICAgICAgICAgIHBfaWQ6ICdwX2lkJ1xyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICAgICAgbG9nb3V0OiBudWxsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBwZW5kaW5nOiB7XHJcbiAgICAgICAgICAgICAgICBsb2dvdXQ6IGZhbHNlICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIHJlbmRlcjogJycgLFxyXG4gICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgbGVmdE1pblc6IDUwICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgfTtcclxuICAgIH0gLFxyXG4gICAgbWl4aW5zOiBbXHJcbiAgICAgICAgbWl4aW5zLmxvYWRpbmcgLFxyXG4gICAgXSAsXHJcbiAgICBtb3VudGVkICgpIHtcclxuICAgICAgICB0aGlzLmluaXREb20oKTtcclxuICAgICAgICB0aGlzLmluaXRWYWx1ZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICB9ICxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAndi1tZW51JzogbWVudVxyXG4gICAgfSAsXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaW5pdERvbSAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmZ1bmN0aW9ucyA9IEcodGhpcy4kcmVmc1snZnVuY3Rpb25zLWZvci11c2VyJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5jb24gPSBHKHRoaXMuJHJlZnMuY29uKTtcclxuICAgICAgICAgICAgdGhpcy5kb20ubGVmdCA9IEcodGhpcy4kcmVmcy5sZWZ0KTtcclxuICAgICAgICAgICAgdGhpcy5kb20ucmlnaHQgPSBHKHRoaXMuJHJlZnMucmlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5sZWZ0VG9wID0gRyh0aGlzLiRyZWZzWydsZWZ0LXRvcCddKTtcclxuICAgICAgICAgICAgdGhpcy5kb20ubGVmdE1pZCA9IEcodGhpcy4kcmVmc1snaW5maW5pdGUtY2xhc3NpZmljYXRpb24nXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmxlZnRCdG0gPSBHKHRoaXMuJHJlZnNbJ2xlZnQtYnRtJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5tdWx0aXBsZVRhYiA9IEcodGhpcy4kcmVmc1snbXVsdGlwbGUtdGFiJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS53aW4gPSBHKHdpbmRvdyk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmhvcml6b250YWwgPSBHKHRoaXMuJHJlZnMuaG9yaXpvbnRhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnZlcnRpY2FsID0gRyh0aGlzLiRyZWZzLnZlcnRpY2FsKTtcclxuICAgICAgICAgICAgdGhpcy5kb20udXNlciA9IEcodGhpcy4kcmVmcy51c2VyKTtcclxuICAgICAgICAgICAgdGhpcy5kb20uYmxvY2sgPSBHKHRoaXMuJHJlZnMuYmxvY2spO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5yaWdodFRvcCA9IEcodGhpcy4kcmVmc1sncmlnaHQtdG9wJ10pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0SW5zdGFuY2UgKCkge1xyXG5cclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgZ2V0RGF0YSAoKSB7XHJcbiAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlICwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm8ocmVzb2x2ZSAsIHJlamVjdCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0aWFsaXplICgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0VmFsdWUoKTtcclxuICAgICAgICAgICAgLy8gRE9NIOa4suafk+WujOaIkFxyXG4gICAgICAgICAgICB0aGlzLmluaXRUYWIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0TWVudSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRTdHlsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRTbGlkZWJhcigpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpbml0VmFsdWUgKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLmxlZnRXID0gdGhpcy5kb20ubGVmdC53aWR0aCgnYm9yZGVyLWJveCcpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnVzZXJXID0gdGhpcy5kb20udXNlci53aWR0aCgnYm9yZGVyLWJveCcpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnVzZXJIID0gdGhpcy5kb20udXNlci5oZWlnaHQoJ2JvcmRlci1ib3gnKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgICAgaW5pdFN0eWxlICgpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqICoqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgICAqIOW3pui+ue+8muiPnOWNlVxyXG4gICAgICAgICAgICAgKiAqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5pbml0TGVmdE1pZEgoKTtcclxuICAgICAgICAgICAgdGhpcy5kb20ud2luLm9uKCdyZXNpemUnICwgdGhpcy5pbml0TGVmdE1pZEguYmluZCh0aGlzKSAsIHRydWUgLCBmYWxzZSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRTbGlkZWJhciAoKSB7XHJcbiAgICAgICAgICAgIGxldCBzbGlkZWJhciA9IEcucy5nZXQoJ3NsaWRlYmFyJyk7XHJcbiAgICAgICAgICAgIGlmIChHLmlzTnVsbChzbGlkZWJhcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNsaWRlYmFyID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsKCk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRMZWZ0TWlkSCAoKSB7XHJcbiAgICAgICAgICAgIGxldCBsZWZ0SCA9IHRoaXMuZG9tLmxlZnQuaGVpZ2h0KCdjb250ZW50LWJveCcpO1xyXG4gICAgICAgICAgICBsZXQgbGVmdFRvcEggPSB0aGlzLmRvbS5sZWZ0VG9wLmhlaWdodCgnYm9yZGVyLWJveCcpO1xyXG4gICAgICAgICAgICBsZXQgbGVmdEJ0bUggPSB0aGlzLmRvbS5sZWZ0QnRtLmhlaWdodCgnYm9yZGVyLWJveCcpO1xyXG4gICAgICAgICAgICBsZXQgbGVmdE1pZE1pbkggPSBwYXJzZUludCh0aGlzLmRvbS5sZWZ0TWlkLmNzcygnbWluSGVpZ2h0JykpO1xyXG4gICAgICAgICAgICBsZXQgbGVmdE1pZEggPSBsZWZ0SCAtbGVmdFRvcEggLSBsZWZ0QnRtSDtcclxuICAgICAgICAgICAgbGVmdE1pZEggPSBNYXRoLm1heChsZWZ0TWlkTWluSCAsIGxlZnRNaWRIKTtcclxuICAgICAgICAgICAgdGhpcy5kb20ubGVmdE1pZC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBsZWZ0TWlkSCArICdweCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGluaXRUYWIgKCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLnRhYiA9IG5ldyBNdWx0aXBsZVRhYih0aGlzLmRvbS5tdWx0aXBsZVRhYi5nZXQoMCkgLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiAyMDAgLFxyXG4gICAgICAgICAgICAgICAgaWNvOiAnL3BsdWdpbi9NdWx0aXBsZVRhYi9pbWFnZS9pY29uLmljbycgLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZCAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDot6/nlLHlj4LmlbBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW0gPSB0aGlzLmF0dHIoaWQgLCAncGFyYW0nKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbSA9IEcuaXNWYWxpZChwYXJhbSkgPyBHLmpzb25EZWNvZGUocGFyYW0pIDoge307XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jcmVhdGUodGhpcyAsIGlkICwgcGFyYW0pO1xyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICBkZWxldGVkIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGVsZXRlKGlkKTtcclxuICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgY2xpY2sgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zd2l0Y2goaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgICAgICBpbml0TWVudSAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLmlucy5pYyA9IG5ldyBJbmZpbml0ZUNsYXNzaWZpY2F0aW9uKHRoaXMuZG9tLmxlZnRNaWQuZ2V0KDApICwge1xyXG4gICAgICAgICAgICAgICAgLy8g6I+c5Y2V5bGV5byA5Yqo55S76L+H5rih5pe26Ze0XHJcbiAgICAgICAgICAgICAgICB0aW1lOiAzMDAgLFxyXG4gICAgICAgICAgICAgICAgLy8g5qyh6KaB55qE5Zu+5qCH57G75Z6L77yMbmV3IHx8IG51bWJlciB8fCBzd2l0Y2hcclxuICAgICAgICAgICAgICAgIGljb246ICdzd2l0Y2gnICxcclxuICAgICAgICAgICAgICAgIC8vIOagh+ivhuespu+8jOWxleW8gOeahOmhue+8mzEuIOWcqOWFg+e0oOmHjOmdouiuvue9riBkYXRhLWZvY3VzPSd5JyArXHJcbiAgICAgICAgICAgICAgICBpZDogWzczXSAsXHJcbiAgICAgICAgICAgICAgICAvLyDliJ3lp4vnirbmgIHvvIxzcHJlYWQgfHwgc2hyaW5rXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzaHJpbmsnICxcclxuICAgICAgICAgICAgICAgIC8vIOWxgue6p+inhuinieaYvuekuuaViOaenFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAxMiAsXHJcbiAgICAgICAgICAgICAgICAvLyDlkIzlsYLnuqfmmK/lkKbkupLmlqVcclxuICAgICAgICAgICAgICAgIGV4Y2x1dGlvbjogZmFsc2UgLFxyXG4gICAgICAgICAgICAgICAgLy8g5piv5ZCm6I+c5Y2V5Lmf5Y+v6KKr6YCJ5LitXHJcbiAgICAgICAgICAgICAgICBtZW51Rm9jdXM6IHRydWUgLFxyXG4gICAgICAgICAgICAgICAgLy8g54K55Ye76aG55ZCO5piv5ZCm6YCJ5LitXHJcbiAgICAgICAgICAgICAgICBmb2N1czogZmFsc2UgLFxyXG4gICAgICAgICAgICAgICAgLy8g5piv5ZCm6YCJ5Lit6aG257qn6I+c5Y2VXHJcbiAgICAgICAgICAgICAgICB0b3BGb2N1czogZmFsc2UgLFxyXG4gICAgICAgICAgICAgICAgLy8g5a2Q57qn6aG554K55Ye75ZCO5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBjaGlsZCAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9wUm91dGUgPSBzZWxmLnRvcFJvdXRlKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcm91dGUgPSBzZWxmLmZpbmRSb3V0ZUJ5SWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gc2VsZi5nZW5UYWJOYW1lKHRvcFJvdXRlICwgcm91dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYub3Blbih0ZXh0ICwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZTogcm91dGUucm91dGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGhvcml6b250YWwgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRvbS51c2VyLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIC8vIOa7keWdl+WIh+aNolxyXG4gICAgICAgICAgICB0aGlzLmRvbS5ob3Jpem9udGFsLmhpZ2hsaWdodCgnaGlkZScgLCB0aGlzLmRvbS5ibG9jay5jaGlsZHJlbigpLmdldCgpICwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIOiPnOWNleWxleW8gFxyXG4gICAgICAgICAgICB0aGlzLmRvbS5sZWZ0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMudmFsdWUubGVmdFcgKyAncHgnICxcclxuICAgICAgICAgICAgfSAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmljLmljb24oJ25vbmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIOeUqOaIt+WxleW8gFxyXG4gICAgICAgICAgICB0aGlzLmRvbS51c2VyLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMudmFsdWUudXNlclcgKyAncHgnICxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy52YWx1ZS51c2VySCArICdweCdcclxuICAgICAgICAgICAgfSAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdExlZnRNaWRIKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyDlhoXlrrnmlLbnvKlcclxuICAgICAgICAgICAgdGhpcy5kb20ucmlnaHQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhpcy52YWx1ZS5sZWZ0VyArICdweCcgLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8g5Y+z5L6n6aG26YOo5a+86Iiq5qCP5pS257ypXHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnJpZ2h0VG9wLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHRoaXMudmFsdWUubGVmdFcgKyAncHgnICxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEcucy5zZXQoJ3NsaWRlYmFyJyAsICdob3Jpem9udGFsJyk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHZlcnRpY2FsICgpIHtcclxuICAgICAgICAgICAgLy8g5ruR5Z2X5YiH5o2iXHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnZlcnRpY2FsLmhpZ2hsaWdodCgnaGlkZScgLCB0aGlzLmRvbS5ibG9jay5jaGlsZHJlbigpLmdldCgpICwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIOiPnOWNleWxleW8gFxyXG4gICAgICAgICAgICB0aGlzLmRvbS5sZWZ0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMudmFsdWUubGVmdE1pblcgKyAncHgnICxcclxuICAgICAgICAgICAgfSAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zLmljLmljb24oJ3RleHQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIOeUqOaIt+aUtue8qVxyXG4gICAgICAgICAgICB0aGlzLmRvbS51c2VyLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcwcHgnICxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzBweCdcclxuICAgICAgICAgICAgfSAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tLnVzZXIuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdExlZnRNaWRIKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyDlhoXlrrnmlLbnvKlcclxuICAgICAgICAgICAgdGhpcy5kb20ucmlnaHQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhpcy52YWx1ZS5sZWZ0TWluVyArICdweCcgLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8g5Y+z5L6n6aG26YOo5a+86Iiq5qCP5pS257ypXHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnJpZ2h0VG9wLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHRoaXMudmFsdWUubGVmdE1pblcgKyAncHgnICxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEcucy5zZXQoJ3NsaWRlYmFyJyAsICd2ZXJ0aWNhbCcpO1xyXG4gICAgICAgIH0gLFxyXG4gICAgICAgIC8vIOaYvuekulxyXG4gICAgICAgIHNob3dVc2VyQ3RybCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmZ1bmN0aW9ucy5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5mdW5jdGlvbnMuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxICxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogJzBweCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcbiAgICAgICAgLy8g6ZqQ6JePXHJcbiAgICAgICAgaGlkZVVzZXJDdHJsICgpIHtcclxuICAgICAgICAgICAgdGhpcy5kb20uZnVuY3Rpb25zLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCAsXHJcbiAgICAgICAgICAgICAgICBib3R0b206ICctMTBweCdcclxuICAgICAgICAgICAgfSAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tLmZ1bmN0aW9ucy5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5paw5byA5qCH562+6aG1XHJcbiAgICAgICAgb3BlbiAodGV4dCAsIGF0dHIgLCBpY28gPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLnRhYi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgaWNvICxcclxuICAgICAgICAgICAgICAgIHRleHQgLFxyXG4gICAgICAgICAgICAgICAgYXR0clxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5Yib5bu65YaF5a65XHJcbiAgICAgICAgY3JlYXRlICh0YWIgLCBpZCAsIHBhcmFtKSB7XHJcbiAgICAgICAgICAgIHZhciByb3V0ZSA9IHRhYi5hdHRyKGlkICwgJ3JvdXRlJyk7XHJcbiAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRpdiA9IEcoZGl2KTtcclxuICAgICAgICAgICAgICAgIGRpdi5kYXRhKCdpZCcgLCBpZCk7XHJcbiAgICAgICAgICAgIHZhciByZW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmQocmVuZGVyKTtcclxuICAgICAgICAgICAgdGhpcy5kb20uY29uLmFwcGVuZChkaXYuZ2V0KDApKTtcclxuICAgICAgICAgICAgdGhpcy5tb3VudChyZW5kZXIgLCBpZCAsIHJvdXRlICwgcGFyYW0pO1xyXG4gICAgICAgICAgICBkaXYuaGlnaGxpZ2h0KCdoaWRlJyAsIGRpdi5wYXJlbnQoKS5jaGlsZHJlbigpLmdldCgpICwgdHJ1ZSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOWIoOmZpOWGheWuuVxyXG4gICAgICAgIGRlbGV0ZSAoaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kb20uY29uLnJlbW92ZSh0aGlzLml0ZW0oaWQpKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5p+l5om+57uZ5a6a55qE6aG5XHJcbiAgICAgICAgaXRlbSAoaWQpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5kb20uY29uLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXIgPSBpdGVtcy5qdW1wKGkgLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXIuZGF0YSgnaWQnKSA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIoOmZpOiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXIuZ2V0KDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign5pyq5om+5Yiw57uZ5a6a6IqC54K5Jyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5qCH562+5YiH5o2iXHJcbiAgICAgICAgc3dpdGNoIChpZCkge1xyXG4gICAgICAgICAgICBHKHRoaXMuaXRlbShpZCkpLmhpZ2hsaWdodCgnaGlkZScgLCB0aGlzLmRvbS5jb24uY2hpbGRyZW4oKS5nZXQoKSAsIHRydWUpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDnu4Tku7ZcclxuICAgICAgICBjb21wb25lbnQgKHJvdXRlKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVGb3JWdWUubGVuZ3RoOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gcm91dGVGb3JWdWVbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAodi5wYXRoID09IHJvdXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYuY29tcG9uZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign5pyq5om+5YiwIHJvdXRl77yaJyArIHJvdXRlICsgJ+WvueW6lOeahOi3r+eUsScpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDmjILovb3nu4Tlu7pcclxuICAgICAgICBtb3VudCAoY29udGFpbmVyICwgaWQgLCByb3V0ZSAsIHBhcmFtKSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudChyb3V0ZSk7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCgpLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5rOo5oSPIG1vZHVsZS5kZWZhdWx0IO+8gVxyXG4gICAgICAgICAgICAgICAgLy8g5YW35L2T5Y6f5Zug6K+35p+l55yLIGltcG9ydCDor63ms5Xop6Pph4pcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLm5ld0NvbXBvbmVudChtb2R1bGUuZGVmYXVsdCAsIHJvdXRlICwgcGFyYW0gLCBpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3IGNvbXBvbmVudCgpLiRtb3VudChjb250YWluZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g55Sf5oiQ5qCH562+5ZCN56ewXHJcbiAgICAgICAgZ2VuVGFiTmFtZSAodG9wUm91dGUgLCBjdXJSb3V0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7dG9wUm91dGUubmFtZX0tJHtjdXJSb3V0ZS5uYW1lfWA7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOmHjeaWsOa4suafk1xyXG4gICAgICAgIHJlUmVuZGVyIChpZCAsIHJvdXRlICwgcGFyYW0pIHtcclxuICAgICAgICAgICAgbGV0IGN1clJvdXRlID0gdGhpcy5maW5kUm91dGVCeVJvdXRlKHJvdXRlKTtcclxuICAgICAgICAgICAgbGV0IHRvcFJvdXRlID0gdGhpcy50b3BSb3V0ZShjdXJSb3V0ZS5pZCk7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMuZ2VuVGFiTmFtZSh0b3BSb3V0ZSAsIGN1clJvdXRlKTtcclxuICAgICAgICAgICAgdGhpcy5pbnMudGFiLnRpdGxlKGlkICwgdGl0bGUpO1xyXG4gICAgICAgICAgICAvLyDmm7TmlrDmoIfnrb7lhoXlrrlcclxuICAgICAgICAgICAgLy8g6YeN5paw5riy5p+T5YWD57Sg5YaF5a65XHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSB0aGlzLml0ZW0oaWQpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gRyhjb250YWluZXIpO1xyXG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMubW91bnQoZGl2ICwgaWQgLCByb3V0ZSAsIHBhcmFtKTtcclxuICAgICAgICAgICAgLy8g5riF56m65YaF5a65XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5odG1sKCcnKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDmlrDlvIDkuIDkuKrmoIfnrb7pobVcclxuICAgICAgICBjcmVhdGVUYWIgKHJvdXRlICwgcGFyYW0gPSB7fSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyUm91dGUgPSB0aGlzLmZpbmRSb3V0ZUJ5Um91dGUocm91dGUpO1xyXG4gICAgICAgICAgICBsZXQgdG9wUm91dGUgPSB0aGlzLnRvcFJvdXRlKGN1clJvdXRlLmlkKTtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5nZW5UYWJOYW1lKHRvcFJvdXRlICwgY3VyUm91dGUpO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4odGl0bGUgLCB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZTogY3VyUm91dGUucm91dGUgLFxyXG4gICAgICAgICAgICAgICAgcGFyYW06IEcuanNvbkVuY29kZShwYXJhbSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOWunuS+i+WMliB2dWUg57uE5Lu2XHJcbiAgICAgICAgbmV3Q29tcG9uZW50IChjb21wb25lbnQgLCByb3V0ZSAsIHBhcmFtICwgaWQpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICByb3V0ZSA9IHRoaXMuZmluZFJvdXRlQnlSb3V0ZShyb3V0ZSk7XHJcbiAgICAgICAgICAgIGxldCB0b3BSb3V0ZSA9IHRoaXMudG9wUm91dGUocm91dGUuaWQpO1xyXG4gICAgICAgICAgICBjb21wb25lbnQubWl4aW5zID0gY29tcG9uZW50Lm1peGlucyA/IGNvbXBvbmVudC5taXhpbnMgOiBbXTtcclxuICAgICAgICAgICAgbGV0IG1peGlucyA9IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW9k+WJjee7hOS7tueahOagh+ivhuesplxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlrZDnu4Tku7bkuI3lhYHorrjorr7nva7ov5nkupvlgLzvvIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wUm91dGUgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3MgPSBzZWxmLmN1clBvcyhyb3V0ZS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDkuZ/ot7Pot7Povazmlrnms5VcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbiAocm91dGUgLCBwYXJhbSAsIHR5cGUgPSAnX3NlbGYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOebruWJjeS7heacieS4pOenjeexu+Wei1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBfc2VsZiDpobXpnaLlhoXph43ovb1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gX2JsYW5rIOaJk+W8gOaWsOeahOagh+etvumhtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZVJhbmdlID0gWydfc2VsZicgLCAnX2JsYW5rJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09ICdfc2VsZicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnJlUmVuZGVyKGlkICwgcm91dGUgLCBwYXJhbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ19ibGFuaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaWsOW8gOS4gOS4quagh+etvumhtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuY3JlYXRlVGFiKHJvdXRlICwgcGFyYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLumihOeVmeeahOWGheWuuVxyXG4gICAgICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIt+aWsOaTjeS9nFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbG9hZCAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb24odGhpcy5yb3V0ZS5yb3V0ZSAsIHRoaXMucGFyYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG8g5ZCO6YCAXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldiAoKSB7fSAsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kbyDliY3ov5tcclxuICAgICAgICAgICAgICAgICAgICBuZXh0ICgpIHt9ICxcclxuICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgICdtb2R1bGUtbmF2JzogbW9kdWxlTmF2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5taXhpbnMucHVzaChtaXhpbnMpO1xyXG4gICAgICAgICAgICByZXR1cm4gVnVlLmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICAvLyDov5nkuKrlnLDmlrnlv4XpobvopoHkvb/nlKjmraTnp43mlrnlvI/vvIHvvIFcclxuICAgICAgICAgICAgICAgIC8vIOmHjeaWsOaLt+S4gOS7veivpee7hOS7tlxyXG4gICAgICAgICAgICAgICAgLy8g5ZCm5YiZ77yM5oyJ54Wn5a6Y572R55qE5o+P6L+wXHJcbiAgICAgICAgICAgICAgICAvLyDlvILmraXnu4Tku7bnu5PmnpzkvJrooqvnvJPlrZhcclxuICAgICAgICAgICAgICAgIC8vIOS5n+WwseaYr+ivpee7hOS7tuS7heS8muWunuS+i+WMluS4gOasoe+8gVxyXG4gICAgICAgICAgICAgICAgLy8g5LmL5ZCO5L6/5LiN5YaN6YeN5aSN5a6e5L6L5YyWXHJcbiAgICAgICAgICAgICAgICAvLyDlpI3nlKjkuYvliY3nmoTlrp7kvotcclxuICAgICAgICAgICAgICAgIC4uLmNvbXBvbmVudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g6I635Y+W6I+c5Y2V5pWw5o2uXHJcbiAgICAgICAgZ2V0TWVudURhdGEgKHByaXYpIHtcclxuICAgICAgICAgICAgbGV0IG1lbnUgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICAgICAgbGV0IGZpbHRlciA9IChkYXRhICwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+atu+W+queOrycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2ID0gZGF0YVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodi5tZW51ICE9ICd5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZSA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdiA9IHsuLi52fTtcclxuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChfdik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdi5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIodi5jaGlsZHJlbiAsIF92LmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZpbHRlcihwcml2ICwgbWVudSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtZW51O1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDojrflj5bnlKjmiLfnm7jlhbPmlbDmja5cclxuICAgICAgICBpbmZvIChyZXNvbHZlICwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGFkbWluQXBpLmluZm8oKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVycm9yKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOmSiOWvuSBkYXRhIOWBmuS4gOS6m+aVsOaNrui/h+a7pFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVudSA9IHRoaXMuZ2V0TWVudURhdGEocmVzLnVzZXIucm9sZS5wcml2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnbWVudScgLCBtZW51KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndXNlcicgLCByZXMudXNlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3ByaXYnICwgcmVzLnVzZXIucm9sZS5wcml2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgncm91dGUnICwgcmVzLnJvdXRlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnb3MnICwgcmVzLm9zKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOiOt+WPluW9k+WJjei3r+eUsSBieSBpZFxyXG4gICAgICAgIGZpbmRSb3V0ZUJ5SWQgKGlkKSB7XHJcbiAgICAgICAgICAgIGxldCByb3V0ZXMgPSB0aGlzLiRzdG9yZS5zdGF0ZS5yb3V0ZTtcclxuICAgICAgICAgICAgbGV0IHJvdXRlID0gRy50LmN1cnJlbnQoaWQgLCByb3V0ZXMgLCB0aGlzLmZpZWxkKTtcclxuICAgICAgICAgICAgaWYgKEcuaXNOdWxsKHJvdXRlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfmnKrmib7liLDlvZPliY0gaWTvvJonICsgaWQgKyAnIOWvueW6lOi3r+eUse+8gScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g6I635Y+W5b2T5YmN6Lev55Sx77yMYnkgcm91dGVcclxuICAgICAgICBmaW5kUm91dGVCeVJvdXRlIChyb3V0ZSkge1xyXG4gICAgICAgICAgICBsZXQgcm91dGVzID0gdGhpcy4kc3RvcmUuc3RhdGUucm91dGU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVzLmxlbmd0aDsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyID0gcm91dGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1ci5yb3V0ZSA9PSByb3V0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfmnKrmib7liLDnu5nlrprot6/nlLHvvJonICsgcm91dGUgKyAn77yBJyk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOiOt+WPlumhtue6p+i3r+eUsVxyXG4gICAgICAgIHRvcFJvdXRlIChpZCkge1xyXG4gICAgICAgICAgICBsZXQgcm91dGUgPSB0aGlzLiRzdG9yZS5zdGF0ZS5yb3V0ZTtcclxuICAgICAgICAgICAgbGV0IHBhcmVudHMgPSBHLnQucGFyZW50cyhpZCAsIHJvdXRlICwgdGhpcy5maWVsZCAsIHRydWUgLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudHM7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOiOt+WPluW9k+WJjeS9jee9rlxyXG4gICAgICAgIGN1clBvcyAoaWQpIHtcclxuICAgICAgICAgICAgbGV0IHJvdXRlID0gdGhpcy4kc3RvcmUuc3RhdGUucm91dGU7XHJcbiAgICAgICAgICAgIHJldHVybiBHLnQucGFyZW50cyhpZCAsIHJvdXRlICwgdGhpcy5maWVsZCAsIHRydWUgLCBmYWxzZSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIC8vIOazqOmUgFxyXG4gICAgICAgIGxvZ291dCAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlbmRpbmcubG9nb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAkaW5mbygn6K+35rGC5LitLi4u6K+36ICQ5b+D562J5b6FJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZy5sb2dvdXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgdGhpcy5hamF4LmxvZ291dCA9IGFkbWluQXBpLmxvZ291dCgocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nLmxvZ291dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMubG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlcnJvcihyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDpgIDlh7rnmbvlvZVcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VMb2dvdXQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zLmxvYWRpbmcuc2V0QXJncyh0aGlzLmlucy5sb2FkaW5nICwgJ2xvZ291dCcpO1xyXG4gICAgICAgIH0gLFxyXG4gICAgfSAsXHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyByZWY6IFwiY29udGFpbmVyXCIsIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LWxvYWRpbmdcIiwgeyByZWY6IFwibG9hZGluZ1wiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcImxlZnRcIiwgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpblwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHJlZjogXCJsZWZ0LXRvcFwiLCBzdGF0aWNDbGFzczogXCJ0b3BcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ29cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uJHN0b3JlLnN0YXRlLm9zLnN5c3RlbS5sb2dvIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kc3RvcmUuc3RhdGUub3Muc3lzdGVtLm5hbWUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyByZWY6IFwidXNlclwiLCBzdGF0aWNDbGFzczogXCJ1c2VyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uJHN0b3JlLnN0YXRlLnVzZXIuYXZhdGFyX2V4cGxhaW4gfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG1cIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHN0b3JlLnN0YXRlLnVzZXIudXNlcm5hbWUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyByZWY6IFwiYmxvY2tcIiwgc3RhdGljQ2xhc3M6IFwiYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udmVydGljYWwgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fbSgwKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZlcnRpY2FsIGhpZGVcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaG9yaXpvbnRhbCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl9tKDEpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyByZWY6IFwiaW5maW5pdGUtY2xhc3NpZmljYXRpb25cIiwgc3RhdGljQ2xhc3M6IFwibWlkXCIgfSxcbiAgICAgICAgICAgIFtfYyhcInYtbWVudVwiKV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcImxlZnQtYnRtXCIsIHN0YXRpY0NsYXNzOiBcImJ0bVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiRzdG9yZS5zdGF0ZS5vcy5zeXN0ZW0ubmFtZSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcInJpZ2h0XCIsIHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHJlZjogXCJyaWdodC10b3BcIiwgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYy10b3BcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVzZXJcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlZW50ZXI6IF92bS5zaG93VXNlckN0cmwsXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU6IF92bS5oaWRlVXNlckN0cmxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY3RybFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhdmF0YXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLiRzdG9yZS5zdGF0ZS51c2VyLmF2YXRhcl9leHBsYWluIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlcm5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHN0b3JlLnN0YXRlLnVzZXIudXNlcm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZnVuY3Rpb25zLWZvci11c2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZnVuY3Rpb25zIGhpZGVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmdW5jdGlvblwiLCBvbjogeyBjbGljazogX3ZtLmxvZ291dCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtfdm0uX3YoXCLms6jplIBcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcIm11bHRpcGxlLXRhYlwiLCBzdGF0aWNDbGFzczogXCJjLWJ0bVwiIH0sIFtfdm0uX20oMyldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG1cIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkeW5hbWljXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyByZWY6IFwiY29uXCIsIHN0YXRpY0NsYXNzOiBcImluXCIgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpblwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpblwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL2xvZ291dC5wbmdcIikgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm11bHRpcGxlLXRhYlwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFic1wiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbVwiLCBhdHRyczogeyBcImRhdGEtaWRcIjogX3ZtLmRhdGEuaWQgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmdW5jdGlvblwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sIFtcbiAgICAgICAgX3ZtLmRhdGEuZmxvb3IgPiAxID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0pIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIiwgYXR0cnM6IHsgc3JjOiBfdm0uZGF0YS5zX2ljbyB9IH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV4cGxhaW5cIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5cIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEubmFtZSkpXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjaGlsZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3RcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLmRhdGEuY2hpbGRyZW4sIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJ2LWl0ZW1cIiwgeyBrZXk6IHYuaWQsIGF0dHJzOiB7IGRhdGE6IHYgfSB9KVxuICAgICAgICB9KSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImljb1wiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9wbHVnaW4vSW5maW5pdGVDbGFzc2lmaWNhdGlvbi9pbWFnZS9kZWZhdWx0L3JpbmcucG5nXCIgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsYWcgaGlkZVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmV3XCIgfSwgW192bS5fdihcIuaWsOeahFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtYmVyXCIgfSwgW192bS5fdihcIjEwXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzd2l0Y2hcIiB9LCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBzcmM6IFwiL3BsdWdpbi9JbmZpbml0ZUNsYXNzaWZpY2F0aW9uL2ltYWdlL2RlZmF1bHQvc3ByZWFkLnBuZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZpbml0ZS1jbGFzc2lmaWNhdGlvblwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3RcIiB9LFxuICAgICAgX3ZtLl9sKF92bS4kc3RvcmUuc3RhdGUubWVudSwgZnVuY3Rpb24odikge1xuICAgICAgICByZXR1cm4gX2MoXCJ2LWl0ZW1cIiwgeyBrZXk6IHYuaWQsIGF0dHJzOiB7IGRhdGE6IHYgfSB9KVxuICAgICAgfSksXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyByZWY6IFwibW9kdWxlLW5hdlwiLCBzdGF0aWNDbGFzczogXCJtb2R1bGUtbmF2XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIiwgYXR0cnM6IHsgc3JjOiBfdm0udG9wUm91dGUuYl9pY28gfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjblwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50b3BSb3V0ZS5uYW1lKSldKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJkZWxpbWl0ZXJcIiB9LCBbX3ZtLl92KFwiL1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImVuXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRvcFJvdXRlLmVuKSldKSxcbiAgICAgIF92bS5fdihcIlxcbiAgICAgICAgwqDCoFxcbiAgICAgICAgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJydW4tYnV0dG9uIHJ1bi1idXR0b24tYmx1ZVwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJHBhcmVudC5yZWxvYWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInJ1bi1pY29uZm9udCBydW4tcmVzZXRcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCLmoIfnrb7pobXliLfmlrBcXG4gICAgICAgIFwiKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9sKF92bS5wb3MsIGZ1bmN0aW9uKHYsIGspIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHYucm91dGUgIT0gXCJcIiAmJiB2LnJvdXRlICE9IF92bS4kcGFyZW50LnJvdXRlLnJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgPyBfdm0uJHBhcmVudC5sb2NhdGlvbih2LnJvdXRlKVxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Modi5uYW1lKSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICEoayA9PSBfdm0ucG9zLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGVsaW1pdGVyXCIgfSwgW192bS5fdihcIi9cIildKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE4OWI2OGFjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTg5YjY4YWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2UvbG9nb3V0LnBuZ1wiOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4OWI2OGFjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2pzL2luZGV4LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9qcy9pbmRleC5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jc3MvaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTg5YjY4YWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE4OWI2OGFjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcd29ya1xcXFxjb2RlXFxcXGNhclxcXFxwdWJsaWNcXFxcbW9kdWxlXFxcXGFkbWluXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxODliNjhhYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxODliNjhhYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4OWI2OGFjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE4OWI2OGFjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL3ZpZXcvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODliNjhhYyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuL2luZGV4LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi9pbmRleC5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9tb2R1bGVOYXYuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGUyNTQwZWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9tb2R1bGVOYXYuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGUyNTQwZWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZhMDM0OTY0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZmEwMzQ5NjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx3b3JrXFxcXGNvZGVcXFxcY2FyXFxcXHB1YmxpY1xcXFxtb2R1bGVcXFxcYWRtaW5cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ZhMDM0OTY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ZhMDM0OTY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTAzNDk2NCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmYTAzNDk2NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic291cmNlL3Z1ZS92aWV3L3B1YmxpYy9pdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTAzNDk2NCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MThkMWVmOWEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxOGQxZWY5YVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdvcmtcXFxcY29kZVxcXFxjYXJcXFxccHVibGljXFxcXG1vZHVsZVxcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMThkMWVmOWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMThkMWVmOWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4ZDFlZjlhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE4ZDFlZjlhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL3ZpZXcvcHVibGljL21lbnUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4ZDFlZjlhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tb2R1bGVOYXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlMjU0MGVjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21vZHVsZU5hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21vZHVsZU5hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY3NzL21vZHVsZU5hdi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZTI1NDBlYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGUyNTQwZWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFx3b3JrXFxcXGNvZGVcXFxcY2FyXFxcXHB1YmxpY1xcXFxtb2R1bGVcXFxcYWRtaW5cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBlMjU0MGVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBlMjU0MGVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tb2R1bGVOYXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlMjU0MGVjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBlMjU0MGVjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzb3VyY2UvdnVlL3ZpZXcvcHVibGljL21vZHVsZU5hdi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2R1bGVOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2R1bGVOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vZHVsZU5hdi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGUyNTQwZWMmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9