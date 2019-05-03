(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/pannel/js/pannel.js?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./source/vue/view/pannel/js/pannel.js?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "pannel",
  data: function data() {
    return {
      dom: {},
      ajax: {},
      pending: {},
      ins: {
        loading: null
      },
      mode: {
        month: 'single'
      },
      api: pannelApi,
      year: [],
      month: [],
      quarter: {
        1: '第一季度',
        2: '第二季度',
        3: '第三季度',
        4: '第四季度'
      },
      yearForMonth: 0,
      monthForMonth: 0,
      yearForYear: 0,
      yearForQuarter: 0,
      quarterForQuarter: 0,
      info: {
        user: {},
        admin_user: {},
        article: {},
        car: {},
        sale_application: {},
        recommendation_application: {},
        staging_buy_application: {},
        reservation: {}
      },
      value: {
        month: null,
        quarter: null,
        year: null
      }
    };
  },
  mixins: [mixins.state, mixins.loading],
  mounted: function mounted() {
    this.initInstance();
    this.initialize();
    this.getData();
    this.reRender();
  },
  methods: {
    initInstance: function initInstance() {
      var self = this;
      this.ins.monthLoading = new Loading(this.$refs['month-loading'].$el, {
        status: 'hide',
        type: 'line-scale',
        close: function close(ajax, key) {
          // 中断请求
          if (self.ajax[ajax] instanceof G.ajax) {
            self.ajax[ajax].native('abort');
          }

          self.pending[key] = false;
        }
      });
      this.ins.quarterLoading = new Loading(this.$refs['quarter-loading'].$el, {
        status: 'hide',
        type: 'line-scale',
        close: function close(ajax, key) {
          // 中断请求
          if (self.ajax[ajax] instanceof G.ajax) {
            self.ajax[ajax].native('abort');
          }

          self.pending[key] = false;
        }
      });
      this.ins.yearLoading = new Loading(this.$refs['year-loading'].$el, {
        status: 'hide',
        type: 'line-scale',
        close: function close(ajax, key) {
          // 中断请求
          if (self.ajax[ajax] instanceof G.ajax) {
            self.ajax[ajax].native('abort');
          }

          self.pending[key] = false;
        }
      });
    },
    initialize: function initialize() {
      var yearStart = 1990;
      var d = new Date();
      var curYear = d.getFullYear();
      var curMonth = d.getMonth() + 1;
      var yearEnd = curYear;
      var monthStart = 1;
      var monthEnd = 12;
      var year = [];
      var month = {};

      for (var i = yearStart; i <= yearEnd; ++i) {
        year.push(i);
      }

      for (var _i = monthStart; _i <= monthEnd; ++_i) {
        month[_i] = _i + '月份';
      }

      this.year = year;
      this.month = month;
      this.yearForMonth = curYear;
      this.yearForQuarter = curYear;
      this.yearForYear = curYear;
      this.monthForMonth = curMonth;
      this.quarterForQuarter = this.getQuarter(curMonth);
    },
    getData: function getData() {
      var _this = this;

      new Promise(function (resolve) {
        _this.pendingState('loading');

        _this.ajax.get = _this.api.info(function (res, code) {
          resolve();

          if (code != 200) {
            _this.eNotice(res);

            return;
          }

          _this.info = res;
        });

        _this.ins.loading.setArgs(_this.ajax.get);
      }).finally(function () {
        _this.initialState('loading', null, 'get');
      });
    },
    reRender: function reRender() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.monthChart();

        _this2.quarterChart();

        _this2.yearChart();
      });
    },
    pain: function pain(option) {
      var _default = {
        dom: null,
        chartType: 'spline',
        title: '测试标题',
        subtitle: '测试副标题',
        plotLine: 10,
        categories: ['One', 'Two', 'Three'],
        xTitle: 'x-测试标题',
        yTitle: 'y-测试标题',
        series: [{
          name: '图例-1',
          data: [1, 2, 3]
        }, {
          name: '图例-2',
          data: [3, 4, 5]
        }],
        legend: {
          enabled: true,
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      };
      option.legend = option.legend ? option.legend : _default.legend;
      return Highcharts.chart({
        chart: {
          renderTo: option.dom,
          type: option.chartType
        },
        title: {
          text: option.title
        },
        xAxis: {
          title: {
            text: option.xTitle
          },
          categories: option.categories
        },
        yAxis: {
          title: {
            text: option.yTitle
          },
          plotLines: [{
            value: option.plotLine,
            dashStyle: 'solid',
            color: 'red',
            width: 1,
            zIndex: 10
          }]
        },
        series: option.series,
        legend: {
          enabled: true,
          layout: option.legend.layout,
          align: option.legend.align,
          verticalAlign: option.legend.verticalAlign
        },
        credits: {
          enabled: false
        }
      });
    },
    // 获取季度
    getQuarter: function getQuarter(month) {
      if ([1, 2, 3].indexOf(month) != -1) {
        return 1;
      }

      if ([4, 5, 6].indexOf(month) != -1) {
        return 2;
      }

      if ([7, 8, 9].indexOf(month) != -1) {
        return 3;
      }

      if ([10, 11, 12].indexOf(month) != -1) {
        return 4;
      }

      throw new Error('参数 1 类型错误');
    },
    getQuarterStart: function getQuarterStart(quarter) {
      switch (quarter) {
        case 1:
          return 1;

        case 2:
          return 4;

        case 3:
          return 7;

        case 4:
          return 10;

        default:
          throw new Error('参数 1 错误');
      }
    },
    getQuarterEnd: function getQuarterEnd(quarter) {
      switch (quarter) {
        case 1:
          return 3;

        case 2:
          return 6;

        case 3:
          return 9;

        case 4:
          return 12;

        default:
          throw new Error('参数 1 错误');
      }
    },
    // 判断是否同月
    isNowMonth: function isNowMonth(year, month) {
      var d = new Date();
      var y = d.getFullYear();
      var m = d.getMonth() + 1;
      return y == year && month == month;
    },
    isNowQuarter: function isNowQuarter(year, quarter) {
      var d = new Date();
      var y = d.getFullYear();
      var m = d.getMonth() + 1;
      return y == year && this.getQuarter(m) == quarter;
    },
    isNowYear: function isNowYear(year) {
      var d = new Date();
      var y = d.getFullYear();
      return y == year;
    },
    // 月份统计资料
    monthChart: function monthChart() {
      var _this3 = this;

      new Promise(function (resolve) {
        if (_this3.pending.month) {
          _this3.$info('请求中...请耐心等待');

          return;
        }

        _this3.pendingState('monthLoading', 'month');

        _this3.ajax.month = _this3.api.month({
          year: _this3.yearForMonth,
          month: _this3.monthForMonth
        }, function (res, code) {
          if (code != 200) {
            _this3.eNotice(res);

            resolve(false);
            return;
          }

          var series = Object.values(res);
          series.forEach(function (v) {
            v.data = Object.values(v.data);
          });
          _this3.value.month = series;
          resolve(true);
        });

        _this3.ins.monthLoading.setArgs(_this3.ajax.month, 'month');
      }).then(function (next) {
        if (!next) {
          return;
        }

        var start = 1;
        var end = _this3.isNowMonth(_this3.yearForMonth, _this3.monthForMonth) ? new Date().getDate() : G.getMonthDays(_this3.yearForYear, _this3.yearForMonth);
        var categories = [];

        for (var i = start; i <= end; ++i) {
          categories.push(i);
        }

        _this3.pain({
          dom: _this3.$refs.month,
          chartType: 'spline',
          title: _this3.yearForMonth + '年' + _this3.monthForMonth + '月统计资料',
          categories: categories,
          xTitle: '日期',
          yTitle: '数量',
          plotLine: 100,
          series: _this3.value.month
        });
      }).finally(function () {
        _this3.initialState('monthLoading', 'month', 'month');
      });
    },
    // 月份统计资料
    quarterChart: function quarterChart() {
      var _this4 = this;

      new Promise(function (resolve) {
        if (_this4.pending.quarter) {
          _this4.$info('请求中...请耐心等待');

          return;
        }

        _this4.pendingState('quarterLoading', 'month');

        _this4.ajax.quarter = _this4.api.quarter({
          year: _this4.yearForQuarter,
          quarter: _this4.quarterForQuarter
        }, function (res, code) {
          if (code != 200) {
            _this4.eNotice(res);

            resolve(false);
            return;
          }

          var series = Object.values(res);
          series.forEach(function (v) {
            v.data = Object.values(v.data);
          });
          _this4.value.quarter = series;
          resolve(true);
        });

        _this4.ins.quarterLoading.setArgs(_this4.ajax.month, 'month');
      }).then(function (next) {
        if (!next) {
          return;
        }

        var start = _this4.getQuarterStart(_this4.quarterForQuarter);

        var end = _this4.isNowQuarter(_this4.yearForQuarter, _this4.quarterForQuarter) ? new Date().getMonth() + 1 : _this4.getQuarterEnd(_this4.quarterForQuarter);
        var categories = [];

        for (var i = start; i <= end; ++i) {
          categories.push("".concat(i, "\u6708\u4EFD"));
        }

        _this4.pain({
          dom: _this4.$refs.quarter,
          chartType: 'column',
          title: _this4.yearForQuarter + ' 第' + _this4.quarterForQuarter + '季度 统计资料',
          categories: categories,
          xTitle: '日期',
          yTitle: '数量',
          plotLine: 100,
          series: _this4.value.quarter
        });
      }).finally(function () {
        _this4.initialState('quarterLoading', 'quarter', 'quarter');
      });
    },
    // 年统计资料
    yearChart: function yearChart() {
      var _this5 = this;

      new Promise(function (resolve) {
        if (_this5.pending.year) {
          _this5.$info('请求中...请耐心等待');

          return;
        }

        _this5.pendingState('yearLoading', 'year');

        _this5.ajax.year = _this5.api.year({
          year: _this5.yearForYear
        }, function (res, code) {
          if (code != 200) {
            _this5.eNotice(res);

            resolve(false);
            return;
          }

          var series = Object.values(res);
          series.forEach(function (v) {
            v.data = Object.values(v.data);
          });
          _this5.value.year = series;
          resolve(true);
        });

        _this5.ins.yearLoading.setArgs(_this5.ajax.year, 'year');
      }).then(function (next) {
        if (!next) {
          return;
        }

        var start = 1;
        var end = _this5.isNowYear(_this5.yearForYear) ? new Date().getMonth() + 1 : 12;
        var categories = [];

        for (var i = start; i <= end; ++i) {
          categories.push("".concat(i, "\u6708\u4EFD"));
        }

        _this5.pain({
          dom: _this5.$refs.year,
          chartType: 'area',
          title: _this5.yearForYear + '年统计资料',
          categories: categories,
          xTitle: '日期',
          yTitle: '数量',
          plotLine: 100,
          series: _this5.value.year
        });
      }).finally(function () {
        _this5.initialState('yearLoading', 'year', 'year');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/pannel/css/pannel.css?vue&type=style&index=2&id=eed9fff8&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/pannel/css/pannel.css?vue&type=style&index=2&id=eed9fff8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=eed9fff8&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=eed9fff8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/pannel/pannel.vue?vue&type=template&id=eed9fff8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/vue/view/pannel/pannel.vue?vue&type=template&id=eed9fff8&scoped=true& ***!
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
          _c("div", { staticClass: "welcome" }, [
            _c("div", { staticClass: "top" }, [
              _vm._v("欢迎回来 "),
              _c("b", [_vm._v(_vm._s(_vm.$store.state.user.username))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "btm" }, [
              _vm._v("最近一次登录于 "),
              _c("b", [_vm._v(_vm._s(_vm.$store.state.user.last_time))])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "today" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "list" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("新增用户")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _c("div", { staticClass: "line" }, [
                      _vm._v("今日："),
                      _c("b", [_vm._v(_vm._s(_vm.info.user.today))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("昨日："),
                      _c("b", [_vm._v(_vm._s(_vm.info.user.yesterday))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("相较昨天："),
                      _c("b", [_vm._v(_vm._s(_vm.info.user.ratio))]),
                      _vm._v(" "),
                      _vm.info.user.flag == "up"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/top.png */ "./source/vue/view/pannel/image/top.png") }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.info.user.flag == "down"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/btm.png */ "./source/vue/view/pannel/image/btm.png") }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("新增后台用户")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _c("div", { staticClass: "line" }, [
                      _vm._v("今日："),
                      _c("b", [_vm._v(_vm._s(_vm.info.admin_user.today))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("昨日："),
                      _c("b", [_vm._v(_vm._s(_vm.info.admin_user.yesterday))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("相较昨天："),
                      _c("b", [_vm._v(_vm._s(_vm.info.admin_user.ratio))]),
                      _vm._v(" "),
                      _vm.info.admin_user.flag == "up"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/top.png */ "./source/vue/view/pannel/image/top.png") }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.info.admin_user.flag == "down"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/btm.png */ "./source/vue/view/pannel/image/btm.png") }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("新增车辆")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _c("div", { staticClass: "line" }, [
                      _vm._v("今日："),
                      _c("b", [_vm._v(_vm._s(_vm.info.car.today))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("昨日："),
                      _c("b", [_vm._v(_vm._s(_vm.info.car.yesterday))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("相较昨天："),
                      _c("b", [_vm._v(_vm._s(_vm.info.car.ratio))]),
                      _vm._v(" "),
                      _vm.info.car.flag == "up"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/top.png */ "./source/vue/view/pannel/image/top.png") }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.info.car.flag == "down"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/btm.png */ "./source/vue/view/pannel/image/btm.png") }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("新增文章")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _c("div", { staticClass: "line" }, [
                      _vm._v("今日："),
                      _c("b", [_vm._v(_vm._s(_vm.info.article.today))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("昨日："),
                      _c("b", [_vm._v(_vm._s(_vm.info.article.yesterday))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("相较昨天："),
                      _c("b", [_vm._v(_vm._s(_vm.info.article.ratio))]),
                      _vm._v(" "),
                      _vm.info.article.flag == "up"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/top.png */ "./source/vue/view/pannel/image/top.png") }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.info.article.flag == "down"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/btm.png */ "./source/vue/view/pannel/image/btm.png") }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _vm._m(5),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("新增卖车申请")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _c("div", { staticClass: "line" }, [
                      _vm._v("今日："),
                      _c("b", [_vm._v(_vm._s(_vm.info.sale_application.today))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("昨日："),
                      _c("b", [
                        _vm._v(_vm._s(_vm.info.sale_application.yesterday))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("相较昨天："),
                      _c("b", [
                        _vm._v(_vm._s(_vm.info.sale_application.ratio))
                      ]),
                      _vm._v(" "),
                      _vm.info.sale_application.flag == "up"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/top.png */ "./source/vue/view/pannel/image/top.png") }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.info.sale_application.flag == "down"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/btm.png */ "./source/vue/view/pannel/image/btm.png") }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _vm._m(6),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("新增值购申请")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _c("div", { staticClass: "line" }, [
                      _vm._v("今日："),
                      _c("b", [
                        _vm._v(
                          _vm._s(_vm.info.recommendation_application.today)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("昨日："),
                      _c("b", [
                        _vm._v(
                          _vm._s(_vm.info.recommendation_application.yesterday)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("相较昨天："),
                      _c("b", [
                        _vm._v(
                          _vm._s(_vm.info.recommendation_application.ratio)
                        )
                      ]),
                      _vm._v(" "),
                      _vm.info.recommendation_application.flag == "up"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/top.png */ "./source/vue/view/pannel/image/top.png") }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.info.recommendation_application.flag == "down"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/btm.png */ "./source/vue/view/pannel/image/btm.png") }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _vm._m(7),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [
                    _vm._v("新增分期购车申请")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _c("div", { staticClass: "line" }, [
                      _vm._v("今日："),
                      _c("b", [
                        _vm._v(_vm._s(_vm.info.staging_buy_application.today))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("昨日："),
                      _c("b", [
                        _vm._v(
                          _vm._s(_vm.info.staging_buy_application.yesterday)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("相较昨天："),
                      _c("b", [
                        _vm._v(_vm._s(_vm.info.staging_buy_application.ratio))
                      ]),
                      _vm._v(" "),
                      _vm.info.staging_buy_application.flag == "up"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/top.png */ "./source/vue/view/pannel/image/top.png") }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.info.staging_buy_application.flag == "down"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/btm.png */ "./source/vue/view/pannel/image/btm.png") }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _vm._m(8),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [
                    _vm._v("新增预约看车申请")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _c("div", { staticClass: "line" }, [
                      _vm._v("今日："),
                      _c("b", [_vm._v(_vm._s(_vm.info.reservation.today))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("昨日："),
                      _c("b", [_vm._v(_vm._s(_vm.info.reservation.yesterday))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }, [
                      _vm._v("相较昨天："),
                      _c("b", [_vm._v(_vm._s(_vm.info.reservation.ratio))]),
                      _vm._v(" "),
                      _vm.info.reservation.flag == "up"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/top.png */ "./source/vue/view/pannel/image/top.png") }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.info.reservation.flag == "down"
                        ? _c("img", {
                            staticClass: "image",
                            attrs: { src: __webpack_require__(/*! ./image/btm.png */ "./source/vue/view/pannel/image/btm.png") }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "history" }, [
            _vm._m(9),
            _vm._v(" "),
            _c("div", { staticClass: "list" }, [
              _c("div", { staticClass: "card-for-total" }, [
                _vm._m(10),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("用户数")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _vm._v(_vm._s(_vm.info.user.total))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-for-total" }, [
                _vm._m(11),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("后台用户数")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _vm._v(_vm._s(_vm.info.admin_user.total))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-for-total" }, [
                _vm._m(12),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("车辆数")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _vm._v(_vm._s(_vm.info.car.total))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-for-total" }, [
                _vm._m(13),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("文章数")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _vm._v(_vm._s(_vm.info.article.total))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-for-total" }, [
                _vm._m(14),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("卖车申请数")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _vm._v(_vm._s(_vm.info.sale_application.total))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-for-total" }, [
                _vm._m(15),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("值购申请数")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _vm._v(_vm._s(_vm.info.recommendation_application.total))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-for-total" }, [
                _vm._m(16),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("分期购车申请数")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _vm._v(_vm._s(_vm.info.staging_buy_application.total))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-for-total" }, [
                _vm._m(17),
                _vm._v(" "),
                _c("div", { staticClass: "right" }, [
                  _c("div", { staticClass: "top" }, [_vm._v("预约看车数")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btm" }, [
                    _vm._v(_vm._s(_vm.info.reservation.total))
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "chart" }, [
            _c("div", { staticClass: "top" }, [
              _c("div", { staticClass: "month chart-box" }, [
                _c("div", { staticClass: "run-title" }, [
                  _c("div", { staticClass: "left" }, [
                    _vm._m(18),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "year" },
                      [
                        _vm._v(
                          "\n                                    年份：\n                                    "
                        ),
                        _c(
                          "i-select",
                          {
                            staticStyle: { width: "80px" },
                            model: {
                              value: _vm.yearForMonth,
                              callback: function($$v) {
                                _vm.yearForMonth = $$v
                              },
                              expression: "yearForMonth"
                            }
                          },
                          _vm._l(_vm.year, function(v) {
                            return _c(
                              "i-option",
                              { key: v, attrs: { value: v } },
                              [_vm._v(_vm._s(v))]
                            )
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "month single" },
                      [
                        _vm._v(
                          "\n                                    月份：\n                                    "
                        ),
                        _c(
                          "i-select",
                          {
                            staticStyle: { width: "80px" },
                            model: {
                              value: _vm.monthForMonth,
                              callback: function($$v) {
                                _vm.monthForMonth = $$v
                              },
                              expression: "monthForMonth"
                            }
                          },
                          _vm._l(_vm.month, function(v, k) {
                            return _c(
                              "i-option",
                              { key: k, attrs: { value: parseInt(k) } },
                              [_vm._v(_vm._s(v))]
                            )
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "btns" },
                      [
                        _c(
                          "v-button",
                          {
                            attrs: { color: "blue" },
                            on: { click: _vm.monthChart }
                          },
                          [_vm._v("确定")]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "right" })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "con" },
                  [
                    _c("div", { ref: "month", staticClass: "chart-container" }),
                    _vm._v(" "),
                    _c("v-loading", { ref: "month-loading" })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "quarter chart-box" }, [
                _c("div", { staticClass: "run-title" }, [
                  _c("div", { staticClass: "left" }, [
                    _vm._m(19),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "year" },
                      [
                        _vm._v(
                          "\n                                    年份：\n                                    "
                        ),
                        _c(
                          "i-select",
                          {
                            staticStyle: { width: "80px" },
                            model: {
                              value: _vm.yearForQuarter,
                              callback: function($$v) {
                                _vm.yearForQuarter = $$v
                              },
                              expression: "yearForQuarter"
                            }
                          },
                          _vm._l(_vm.year, function(v) {
                            return _c(
                              "i-option",
                              { key: v, attrs: { value: v } },
                              [_vm._v(_vm._s(v))]
                            )
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "month single" },
                      [
                        _vm._v(
                          "\n                                    季度：\n                                    "
                        ),
                        _c(
                          "i-select",
                          {
                            staticStyle: { width: "100px" },
                            model: {
                              value: _vm.quarterForQuarter,
                              callback: function($$v) {
                                _vm.quarterForQuarter = $$v
                              },
                              expression: "quarterForQuarter"
                            }
                          },
                          _vm._l(_vm.quarter, function(v, k) {
                            return _c(
                              "i-option",
                              { key: k, attrs: { value: parseInt(k) } },
                              [_vm._v(_vm._s(v))]
                            )
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "btns" },
                      [
                        _c(
                          "v-button",
                          {
                            attrs: { color: "blue" },
                            on: { click: _vm.quarterChart }
                          },
                          [_vm._v("确定")]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "right" })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "con" },
                  [
                    _c("div", {
                      ref: "quarter",
                      staticClass: "chart-container"
                    }),
                    _vm._v(" "),
                    _c("v-loading", { ref: "quarter-loading" })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "btm chart-box" }, [
              _c("div", { staticClass: "run-title" }, [
                _c("div", { staticClass: "left" }, [
                  _vm._m(20),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "year" },
                    [
                      _vm._v(
                        "\n                                年份：\n                                "
                      ),
                      _c(
                        "i-select",
                        {
                          staticStyle: { width: "80px" },
                          model: {
                            value: _vm.yearForYear,
                            callback: function($$v) {
                              _vm.yearForYear = $$v
                            },
                            expression: "yearForYear"
                          }
                        },
                        _vm._l(_vm.year, function(v) {
                          return _c(
                            "i-option",
                            { key: v, attrs: { value: v } },
                            [_vm._v(_vm._s(v))]
                          )
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "btns" },
                    [
                      _c(
                        "v-button",
                        {
                          attrs: { color: "blue" },
                          on: { click: _vm.yearChart }
                        },
                        [_vm._v("确定")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "right" })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "con" },
                [
                  _c("div", { ref: "year", staticClass: "chart-container" }),
                  _vm._v(" "),
                  _c("v-loading", { ref: "year-loading" })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(21)
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
    return _c("div", { staticClass: "run-title" }, [
      _c("div", { staticClass: "left" }, [_vm._v("今日统计资料")]),
      _vm._v(" "),
      _c("div", { staticClass: "right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/user1.png */ "./source/vue/view/pannel/image/user1.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/admin_user.png */ "./source/vue/view/pannel/image/admin_user.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/car.png */ "./source/vue/view/pannel/image/car.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/article.png */ "./source/vue/view/pannel/image/article.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/sale.png */ "./source/vue/view/pannel/image/sale.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/recommendation.png */ "./source/vue/view/pannel/image/recommendation.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/staging_buy.png */ "./source/vue/view/pannel/image/staging_buy.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/reservation.png */ "./source/vue/view/pannel/image/reservation.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "run-title" }, [
      _c("div", { staticClass: "left" }, [_vm._v("历史统计资料 ")]),
      _vm._v(" "),
      _c("div", { staticClass: "right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/user1.png */ "./source/vue/view/pannel/image/user1.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/admin_user.png */ "./source/vue/view/pannel/image/admin_user.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/car.png */ "./source/vue/view/pannel/image/car.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/article.png */ "./source/vue/view/pannel/image/article.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/sale.png */ "./source/vue/view/pannel/image/sale.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/recommendation.png */ "./source/vue/view/pannel/image/recommendation.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/staging_buy.png */ "./source/vue/view/pannel/image/staging_buy.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/reservation.png */ "./source/vue/view/pannel/image/reservation.png") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/month.png */ "./source/vue/view/pannel/image/month.png") }
      }),
      _vm._v("月统计资料")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/quarter.png */ "./source/vue/view/pannel/image/quarter.png") }
      }),
      _vm._v("季度统计资料")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("img", {
        staticClass: "image",
        attrs: { src: __webpack_require__(/*! ./image/year.png */ "./source/vue/view/pannel/image/year.png") }
      }),
      _vm._v("年统计资料")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "system" }, [
      _c("div", { staticClass: "run-title" }, [
        _c("div", { staticClass: "left" }, [_vm._v("系统信息")]),
        _vm._v(" "),
        _c("div", { staticClass: "right" })
      ]),
      _vm._v(" "),
      _c("table", { staticClass: "table" }, [
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("系统版本")]),
            _vm._v(" "),
            _c("td", [_vm._v("1.0.1")]),
            _vm._v(" "),
            _c("td"),
            _vm._v(" "),
            _c("td")
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("作者")]),
            _vm._v(" "),
            _c("td", [_vm._v("grayVTouch")]),
            _vm._v(" "),
            _c("td"),
            _vm._v(" "),
            _c("td")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./source/vue/view/pannel/css/pannel.css?vue&type=style&index=2&id=eed9fff8&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./source/vue/view/pannel/css/pannel.css?vue&type=style&index=2&id=eed9fff8&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_pannel_css_vue_type_style_index_2_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./pannel.css?vue&type=style&index=2&id=eed9fff8&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/pannel/css/pannel.css?vue&type=style&index=2&id=eed9fff8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_pannel_css_vue_type_style_index_2_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_pannel_css_vue_type_style_index_2_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_pannel_css_vue_type_style_index_2_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_pannel_css_vue_type_style_index_2_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_pannel_css_vue_type_style_index_2_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./source/vue/view/pannel/image/admin_user.png":
/*!*****************************************************!*\
  !*** ./source/vue/view/pannel/image/admin_user.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/admin_user.png";

/***/ }),

/***/ "./source/vue/view/pannel/image/article.png":
/*!**************************************************!*\
  !*** ./source/vue/view/pannel/image/article.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/article.png";

/***/ }),

/***/ "./source/vue/view/pannel/image/btm.png":
/*!**********************************************!*\
  !*** ./source/vue/view/pannel/image/btm.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/btm.png";

/***/ }),

/***/ "./source/vue/view/pannel/image/car.png":
/*!**********************************************!*\
  !*** ./source/vue/view/pannel/image/car.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/car.png";

/***/ }),

/***/ "./source/vue/view/pannel/image/month.png":
/*!************************************************!*\
  !*** ./source/vue/view/pannel/image/month.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/month.png";

/***/ }),

/***/ "./source/vue/view/pannel/image/quarter.png":
/*!**************************************************!*\
  !*** ./source/vue/view/pannel/image/quarter.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/quarter.png";

/***/ }),

/***/ "./source/vue/view/pannel/image/recommendation.png":
/*!*********************************************************!*\
  !*** ./source/vue/view/pannel/image/recommendation.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/recommendation.png";

/***/ }),

/***/ "./source/vue/view/pannel/image/reservation.png":
/*!******************************************************!*\
  !*** ./source/vue/view/pannel/image/reservation.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/reservation.png";

/***/ }),

/***/ "./source/vue/view/pannel/image/sale.png":
/*!***********************************************!*\
  !*** ./source/vue/view/pannel/image/sale.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/sale.png";

/***/ }),

/***/ "./source/vue/view/pannel/image/staging_buy.png":
/*!******************************************************!*\
  !*** ./source/vue/view/pannel/image/staging_buy.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/staging_buy.png";

/***/ }),

/***/ "./source/vue/view/pannel/image/top.png":
/*!**********************************************!*\
  !*** ./source/vue/view/pannel/image/top.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/top.png";

/***/ }),

/***/ "./source/vue/view/pannel/image/user1.png":
/*!************************************************!*\
  !*** ./source/vue/view/pannel/image/user1.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/user1.png";

/***/ }),

/***/ "./source/vue/view/pannel/image/year.png":
/*!***********************************************!*\
  !*** ./source/vue/view/pannel/image/year.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/image/year.png";

/***/ }),

/***/ "./source/vue/view/pannel/js/pannel.js?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./source/vue/view/pannel/js/pannel.js?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_pannel_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!./pannel.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./source/vue/view/pannel/js/pannel.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_pannel_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./source/vue/view/pannel/pannel.vue":
/*!*******************************************!*\
  !*** ./source/vue/view/pannel/pannel.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pannel_vue_vue_type_template_id_eed9fff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pannel.vue?vue&type=template&id=eed9fff8&scoped=true& */ "./source/vue/view/pannel/pannel.vue?vue&type=template&id=eed9fff8&scoped=true&");
/* harmony import */ var _js_pannel_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/pannel.js?vue&type=script&lang=js& */ "./source/vue/view/pannel/js/pannel.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_global_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/global.css?vue&type=style&index=0&lang=css& */ "./source/vue/view/public/css/global.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _public_css_public_css_vue_type_style_index_1_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/public.css?vue&type=style&index=1&id=eed9fff8&scoped=true&lang=css& */ "./source/vue/view/public/css/public.css?vue&type=style&index=1&id=eed9fff8&scoped=true&lang=css&");
/* harmony import */ var _css_pannel_css_vue_type_style_index_2_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/pannel.css?vue&type=style&index=2&id=eed9fff8&scoped=true&lang=css& */ "./source/vue/view/pannel/css/pannel.css?vue&type=style&index=2&id=eed9fff8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _js_pannel_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pannel_vue_vue_type_template_id_eed9fff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pannel_vue_vue_type_template_id_eed9fff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eed9fff8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "source/vue/view/pannel/pannel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./source/vue/view/pannel/pannel.vue?vue&type=template&id=eed9fff8&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./source/vue/view/pannel/pannel.vue?vue&type=template&id=eed9fff8&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pannel_vue_vue_type_template_id_eed9fff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./pannel.vue?vue&type=template&id=eed9fff8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./source/vue/view/pannel/pannel.vue?vue&type=template&id=eed9fff8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pannel_vue_vue_type_template_id_eed9fff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pannel_vue_vue_type_template_id_eed9fff8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./source/vue/view/public/css/public.css?vue&type=style&index=1&id=eed9fff8&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./source/vue/view/public/css/public.css?vue&type=style&index=1&id=eed9fff8&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./public.css?vue&type=style&index=1&id=eed9fff8&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./source/vue/view/public/css/public.css?vue&type=style&index=1&id=eed9fff8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_public_css_vue_type_style_index_1_id_eed9fff8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcGFubmVsL2pzL3Bhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcGFubmVsL2Nzcy9wYW5uZWwuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3B1YmxpYy9jc3MvcHVibGljLmNzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcGFubmVsL3Bhbm5lbC52dWU/NGQ2NCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcGFubmVsL2Nzcy9wYW5uZWwuY3NzP2YyMDMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3Bhbm5lbC9pbWFnZS9hZG1pbl91c2VyLnBuZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcGFubmVsL2ltYWdlL2FydGljbGUucG5nIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wYW5uZWwvaW1hZ2UvYnRtLnBuZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcGFubmVsL2ltYWdlL2Nhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3Bhbm5lbC9pbWFnZS9tb250aC5wbmciLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3Bhbm5lbC9pbWFnZS9xdWFydGVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcGFubmVsL2ltYWdlL3JlY29tbWVuZGF0aW9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcGFubmVsL2ltYWdlL3Jlc2VydmF0aW9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcGFubmVsL2ltYWdlL3NhbGUucG5nIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wYW5uZWwvaW1hZ2Uvc3RhZ2luZ19idXkucG5nIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wYW5uZWwvaW1hZ2UvdG9wLnBuZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcGFubmVsL2ltYWdlL3VzZXIxLnBuZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcGFubmVsL2ltYWdlL3llYXIucG5nIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wYW5uZWwvanMvcGFubmVsLmpzPzNmMWYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL3Z1ZS92aWV3L3Bhbm5lbC9wYW5uZWwudnVlIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wYW5uZWwvcGFubmVsLnZ1ZT8xNDhjIiwid2VicGFjazovLy8uL3NvdXJjZS92dWUvdmlldy9wdWJsaWMvY3NzL2dsb2JhbC5jc3M/ZTAyMiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvdnVlL3ZpZXcvcHVibGljL2Nzcy9wdWJsaWMuY3NzPzY0ZmMiXSwibmFtZXMiOlsibmFtZSIsImRhdGEiLCJkb20iLCJhamF4IiwicGVuZGluZyIsImlucyIsImxvYWRpbmciLCJtb2RlIiwibW9udGgiLCJhcGkiLCJwYW5uZWxBcGkiLCJ5ZWFyIiwicXVhcnRlciIsInllYXJGb3JNb250aCIsIm1vbnRoRm9yTW9udGgiLCJ5ZWFyRm9yWWVhciIsInllYXJGb3JRdWFydGVyIiwicXVhcnRlckZvclF1YXJ0ZXIiLCJpbmZvIiwidXNlciIsImFkbWluX3VzZXIiLCJhcnRpY2xlIiwiY2FyIiwic2FsZV9hcHBsaWNhdGlvbiIsInJlY29tbWVuZGF0aW9uX2FwcGxpY2F0aW9uIiwic3RhZ2luZ19idXlfYXBwbGljYXRpb24iLCJyZXNlcnZhdGlvbiIsInZhbHVlIiwibWl4aW5zIiwic3RhdGUiLCJtb3VudGVkIiwiaW5pdEluc3RhbmNlIiwiaW5pdGlhbGl6ZSIsImdldERhdGEiLCJyZVJlbmRlciIsIm1ldGhvZHMiLCJzZWxmIiwibW9udGhMb2FkaW5nIiwiTG9hZGluZyIsIiRyZWZzIiwiJGVsIiwic3RhdHVzIiwidHlwZSIsImNsb3NlIiwia2V5IiwiRyIsIm5hdGl2ZSIsInF1YXJ0ZXJMb2FkaW5nIiwieWVhckxvYWRpbmciLCJ5ZWFyU3RhcnQiLCJkIiwiRGF0ZSIsImN1clllYXIiLCJnZXRGdWxsWWVhciIsImN1ck1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyRW5kIiwibW9udGhTdGFydCIsIm1vbnRoRW5kIiwiaSIsInB1c2giLCJnZXRRdWFydGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwZW5kaW5nU3RhdGUiLCJnZXQiLCJyZXMiLCJjb2RlIiwiZU5vdGljZSIsInNldEFyZ3MiLCJmaW5hbGx5IiwiaW5pdGlhbFN0YXRlIiwiJG5leHRUaWNrIiwibW9udGhDaGFydCIsInF1YXJ0ZXJDaGFydCIsInllYXJDaGFydCIsInBhaW4iLCJvcHRpb24iLCJfZGVmYXVsdCIsImNoYXJ0VHlwZSIsInRpdGxlIiwic3VidGl0bGUiLCJwbG90TGluZSIsImNhdGVnb3JpZXMiLCJ4VGl0bGUiLCJ5VGl0bGUiLCJzZXJpZXMiLCJsZWdlbmQiLCJlbmFibGVkIiwibGF5b3V0IiwiYWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiSGlnaGNoYXJ0cyIsImNoYXJ0IiwicmVuZGVyVG8iLCJ0ZXh0IiwieEF4aXMiLCJ5QXhpcyIsInBsb3RMaW5lcyIsImRhc2hTdHlsZSIsImNvbG9yIiwid2lkdGgiLCJ6SW5kZXgiLCJjcmVkaXRzIiwiaW5kZXhPZiIsIkVycm9yIiwiZ2V0UXVhcnRlclN0YXJ0IiwiZ2V0UXVhcnRlckVuZCIsImlzTm93TW9udGgiLCJ5IiwibSIsImlzTm93UXVhcnRlciIsImlzTm93WWVhciIsIiRpbmZvIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInYiLCJ0aGVuIiwibmV4dCIsInN0YXJ0IiwiZW5kIiwiZ2V0RGF0ZSIsImdldE1vbnRoRGF5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWU7QUFDWEEsTUFBSSxFQUFFLFFBREs7QUFFWEMsTUFGVyxrQkFF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Q0F4QyxpQkFBaUIscUJBQXVCLDhCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDBCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDBCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDRCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDhCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLHFDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGtDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDJCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGtDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDBCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDRCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDJCOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFBLHdDQUF1SCxDQUFnQix1TEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EzSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpRztBQUNyQztBQUNMO0FBQ3VCO0FBQ3dCO0FBQ1I7OztBQUc5RjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN6Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBd1EsQ0FBZ0IseVNBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBNVI7QUFBQTtBQUFBO0FBQUE7QUFBZ1MsQ0FBZ0IsaVVBQUcsRUFBQyxDIiwiZmlsZSI6ImpzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInBhbm5lbFwiICxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvbToge30gLFxyXG4gICAgICAgICAgICBhamF4OiB7fSAsXHJcbiAgICAgICAgICAgIHBlbmRpbmc6IHt9ICxcclxuICAgICAgICAgICAgaW5zOiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBudWxsICxcclxuICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIG1vZGU6IHtcclxuICAgICAgICAgICAgICAgIG1vbnRoOiAnc2luZ2xlJyAsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICBhcGk6IHBhbm5lbEFwaSAsXHJcbiAgICAgICAgICAgIHllYXI6IFtdICxcclxuICAgICAgICAgICAgbW9udGg6IFtdICxcclxuICAgICAgICAgICAgcXVhcnRlcjoge1xyXG4gICAgICAgICAgICAgICAgMTogJ+esrOS4gOWto+W6picgLFxyXG4gICAgICAgICAgICAgICAgMjogJ+esrOS6jOWto+W6picgLFxyXG4gICAgICAgICAgICAgICAgMzogJ+esrOS4ieWto+W6picgLFxyXG4gICAgICAgICAgICAgICAgNDogJ+esrOWbm+Wto+W6picgLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgeWVhckZvck1vbnRoOiAwICxcclxuICAgICAgICAgICAgbW9udGhGb3JNb250aDogMCAsXHJcbiAgICAgICAgICAgIHllYXJGb3JZZWFyOiAwICxcclxuICAgICAgICAgICAgeWVhckZvclF1YXJ0ZXI6IDAgLFxyXG4gICAgICAgICAgICBxdWFydGVyRm9yUXVhcnRlcjogMCAsXHJcbiAgICAgICAgICAgIGluZm86IHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHt9ICxcclxuICAgICAgICAgICAgICAgIGFkbWluX3VzZXI6IHt9ICxcclxuICAgICAgICAgICAgICAgIGFydGljbGU6IHt9ICxcclxuICAgICAgICAgICAgICAgIGNhcjoge30gLFxyXG4gICAgICAgICAgICAgICAgc2FsZV9hcHBsaWNhdGlvbjoge30gLFxyXG4gICAgICAgICAgICAgICAgcmVjb21tZW5kYXRpb25fYXBwbGljYXRpb246IHt9ICxcclxuICAgICAgICAgICAgICAgIHN0YWdpbmdfYnV5X2FwcGxpY2F0aW9uOiB7fSAsXHJcbiAgICAgICAgICAgICAgICByZXNlcnZhdGlvbjoge30gLFxyXG4gICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIG1vbnRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcXVhcnRlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIHllYXI6IG51bGwsXHJcbiAgICAgICAgICAgIH0gLFxyXG4gICAgICAgIH07XHJcbiAgICB9ICxcclxuICAgIG1peGluczogW1xyXG4gICAgICAgIG1peGlucy5zdGF0ZSAsXHJcbiAgICAgICAgbWl4aW5zLmxvYWRpbmcgLFxyXG4gICAgXSAsXHJcblxyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0SW5zdGFuY2UoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICB0aGlzLnJlUmVuZGVyKCk7XHJcbiAgICB9ICxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaW5pdEluc3RhbmNlICgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlucy5tb250aExvYWRpbmcgPSBuZXcgTG9hZGluZyh0aGlzLiRyZWZzWydtb250aC1sb2FkaW5nJ10uJGVsICwge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnaGlkZScgLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUtc2NhbGUnICxcclxuICAgICAgICAgICAgICAgIGNsb3NlIChhamF4ICwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lit5pat6K+35rGCXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuYWpheFthamF4XSBpbnN0YW5jZW9mIEcuYWpheCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFqYXhbYWpheF0ubmF0aXZlKCdhYm9ydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnBlbmRpbmdba2V5XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbnMucXVhcnRlckxvYWRpbmcgPSBuZXcgTG9hZGluZyh0aGlzLiRyZWZzWydxdWFydGVyLWxvYWRpbmcnXS4kZWwgICwge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnaGlkZScgLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUtc2NhbGUnICxcclxuICAgICAgICAgICAgICAgIGNsb3NlIChhamF4ICwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lit5pat6K+35rGCXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuYWpheFthamF4XSBpbnN0YW5jZW9mIEcuYWpheCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFqYXhbYWpheF0ubmF0aXZlKCdhYm9ydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnBlbmRpbmdba2V5XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbnMueWVhckxvYWRpbmcgPSBuZXcgTG9hZGluZyh0aGlzLiRyZWZzWyd5ZWFyLWxvYWRpbmcnXS4kZWwgICwge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnaGlkZScgLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUtc2NhbGUnICxcclxuICAgICAgICAgICAgICAgIGNsb3NlIChhamF4ICwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lit5pat6K+35rGCXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuYWpheFthamF4XSBpbnN0YW5jZW9mIEcuYWpheCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFqYXhbYWpheF0ubmF0aXZlKCdhYm9ydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnBlbmRpbmdba2V5XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgICAgICBpbml0aWFsaXplICgpIHtcclxuICAgICAgICAgICAgY29uc3QgeWVhclN0YXJ0ID0gMTk5MDtcclxuICAgICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1ck1vbnRoID0gZC5nZXRNb250aCgpICsgMTtcclxuICAgICAgICAgICAgY29uc3QgeWVhckVuZCA9IGN1clllYXI7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoU3RhcnQgPSAxO1xyXG4gICAgICAgICAgICBjb25zdCBtb250aEVuZCA9IDEyO1xyXG4gICAgICAgICAgICBsZXQgeWVhciA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgbW9udGggPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHllYXJTdGFydDsgaSA8PSB5ZWFyRW5kOyArK2kpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHllYXIucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbW9udGhTdGFydDsgaSA8PSBtb250aEVuZDsgKytpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtb250aFtpXSA9IGkgKyAn5pyI5Lu9JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRoID0gbW9udGg7XHJcbiAgICAgICAgICAgIHRoaXMueWVhckZvck1vbnRoID0gY3VyWWVhcjtcclxuICAgICAgICAgICAgdGhpcy55ZWFyRm9yUXVhcnRlciA9IGN1clllYXI7XHJcbiAgICAgICAgICAgIHRoaXMueWVhckZvclllYXIgPSBjdXJZZWFyO1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRoRm9yTW9udGggPSBjdXJNb250aDtcclxuICAgICAgICAgICAgdGhpcy5xdWFydGVyRm9yUXVhcnRlciA9IHRoaXMuZ2V0UXVhcnRlcihjdXJNb250aCk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIGdldERhdGEgKCkge1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nU3RhdGUoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWpheC5nZXQgPSB0aGlzLmFwaS5pbmZvKChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVOb3RpY2UocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZvID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5sb2FkaW5nLnNldEFyZ3ModGhpcy5hamF4LmdldCk7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ2xvYWRpbmcnICwgbnVsbCAsICdnZXQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHJlUmVuZGVyICgpIHtcclxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb250aENoYXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1YXJ0ZXJDaGFydCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ZWFyQ2hhcnQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAsXHJcblxyXG4gICAgICAgIHBhaW4gKG9wdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBfZGVmYXVsdCA9IHtcclxuICAgICAgICAgICAgICAgIGRvbTogbnVsbCAsXHJcbiAgICAgICAgICAgICAgICBjaGFydFR5cGU6ICdzcGxpbmUnICxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rWL6K+V5qCH6aKYJyAsXHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZTogJ+a1i+ivleWJr+agh+mimCcgLFxyXG4gICAgICAgICAgICAgICAgcGxvdExpbmU6IDEwICxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsnT25lJyAsICdUd28nICwgJ1RocmVlJ10gLFxyXG4gICAgICAgICAgICAgICAgeFRpdGxlOiAneC3mtYvor5XmoIfpopgnICxcclxuICAgICAgICAgICAgICAgIHlUaXRsZTogJ3kt5rWL6K+V5qCH6aKYJyAsXHJcbiAgICAgICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICflm77kvostMScgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMSwyLDNdICxcclxuICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICflm77kvostMicgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMyw0LDVdICxcclxuICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgIF0gLFxyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiAnaG9yaXpvbnRhbCcgLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ2JvdHRvbSdcclxuICAgICAgICAgICAgICAgIH0gLFxyXG5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgb3B0aW9uLmxlZ2VuZCA9IG9wdGlvbi5sZWdlbmQgPyBvcHRpb24ubGVnZW5kIDogX2RlZmF1bHQubGVnZW5kO1xyXG4gICAgICAgICAgICByZXR1cm4gSGlnaGNoYXJ0cy5jaGFydCh7XHJcbiAgICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclRvOiBvcHRpb24uZG9tICxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBvcHRpb24uY2hhcnRUeXBlICxcclxuICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBvcHRpb24udGl0bGVcclxuICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgeEF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBvcHRpb24ueFRpdGxlICxcclxuICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBvcHRpb24uY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICB5QXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG9wdGlvbi55VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICBwbG90TGluZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi5wbG90TGluZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoU3R5bGU6ICdzb2xpZCcgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICBzZXJpZXM6IG9wdGlvbi5zZXJpZXMgLFxyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiBvcHRpb24ubGVnZW5kLmxheW91dCAsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IG9wdGlvbi5sZWdlbmQuYWxpZ24gLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IG9wdGlvbi5sZWdlbmQudmVydGljYWxBbGlnblxyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICBjcmVkaXRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UgLFxyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDojrflj5blraPluqZcclxuICAgICAgICBnZXRRdWFydGVyIChtb250aCkge1xyXG4gICAgICAgICAgICBpZiAoWzEsMiwzXS5pbmRleE9mKG1vbnRoKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFs0LDUsNl0uaW5kZXhPZihtb250aCkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChbNyw4LDldLmluZGV4T2YobW9udGgpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoWzEwLDExLDEyXS5pbmRleE9mKG1vbnRoKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCflj4LmlbAgMSDnsbvlnovplJnor68nKTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgZ2V0UXVhcnRlclN0YXJ0IChxdWFydGVyKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocXVhcnRlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA3O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxMDtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCflj4LmlbAgMSDplJnor68nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBnZXRRdWFydGVyRW5kIChxdWFydGVyKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocXVhcnRlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA2O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA5O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxMjtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCflj4LmlbAgMSDplJnor68nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyDliKTmlq3mmK/lkKblkIzmnIhcclxuICAgICAgICBpc05vd01vbnRoICh5ZWFyICwgbW9udGgpIHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBkLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG0gPSBkLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgICAgICByZXR1cm4geSA9PSB5ZWFyICYmIG1vbnRoID09IG1vbnRoO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICBpc05vd1F1YXJ0ZXIgKHllYXIgLCBxdWFydGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBjb25zdCBtID0gZC5nZXRNb250aCgpICsgMTtcclxuICAgICAgICAgICAgcmV0dXJuIHkgPT0geWVhciAmJiB0aGlzLmdldFF1YXJ0ZXIobSkgPT0gcXVhcnRlcjtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgaXNOb3dZZWFyICh5ZWFyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICByZXR1cm4geSA9PSB5ZWFyO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDmnIjku73nu5/orqHotYTmlplcclxuICAgICAgICBtb250aENoYXJ0ICgpIHtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlbmRpbmcubW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpbmZvKCfor7fmsYLkuK0uLi7or7fogJDlv4PnrYnlvoUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nU3RhdGUoJ21vbnRoTG9hZGluZycgLCAnbW9udGgnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWpheC5tb250aCA9IHRoaXMuYXBpLm1vbnRoKHtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiB0aGlzLnllYXJGb3JNb250aCAsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IHRoaXMubW9udGhGb3JNb250aCAsXHJcbiAgICAgICAgICAgICAgICB9ICwgKHJlcyAsIGNvZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lTm90aWNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VyaWVzID0gT2JqZWN0LnZhbHVlcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcmllcy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuZGF0YSA9IE9iamVjdC52YWx1ZXModi5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLm1vbnRoID0gc2VyaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5tb250aExvYWRpbmcuc2V0QXJncyh0aGlzLmFqYXgubW9udGggLCAnbW9udGgnKTtcclxuICAgICAgICAgICAgfSkudGhlbigobmV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IHRoaXMuaXNOb3dNb250aCh0aGlzLnllYXJGb3JNb250aCAsIHRoaXMubW9udGhGb3JNb250aCkgP1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpIDpcclxuICAgICAgICAgICAgICAgICAgICBHLmdldE1vbnRoRGF5cyh0aGlzLnllYXJGb3JZZWFyICwgdGhpcy55ZWFyRm9yTW9udGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7ICsraSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhaW4oe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbTogdGhpcy4kcmVmcy5tb250aCAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRUeXBlOiAnc3BsaW5lJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMueWVhckZvck1vbnRoICsgJ+W5tCcgKyB0aGlzLm1vbnRoRm9yTW9udGggKyAn5pyI57uf6K6h6LWE5paZJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcyAsXHJcbiAgICAgICAgICAgICAgICAgICAgeFRpdGxlOiAn5pel5pyfJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgeVRpdGxlOiAn5pWw6YePJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxvdExpbmU6IDEwMCAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiB0aGlzLnZhbHVlLm1vbnRoICxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlKCdtb250aExvYWRpbmcnICwgJ21vbnRoJyAsICdtb250aCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuXHJcbiAgICAgICAgLy8g5pyI5Lu957uf6K6h6LWE5paZXHJcbiAgICAgICAgcXVhcnRlckNoYXJ0ICgpIHtcclxuICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlbmRpbmcucXVhcnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGluZm8oJ+ivt+axguS4rS4uLuivt+iAkOW/g+etieW+hScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdTdGF0ZSgncXVhcnRlckxvYWRpbmcnICwgJ21vbnRoJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFqYXgucXVhcnRlciA9IHRoaXMuYXBpLnF1YXJ0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXI6IHRoaXMueWVhckZvclF1YXJ0ZXIgLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1YXJ0ZXI6IHRoaXMucXVhcnRlckZvclF1YXJ0ZXIgLFxyXG4gICAgICAgICAgICAgICAgfSAsIChyZXMgLCBjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZU5vdGljZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlcmllcyA9IE9iamVjdC52YWx1ZXMocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJpZXMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LmRhdGEgPSBPYmplY3QudmFsdWVzKHYuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5xdWFydGVyID0gc2VyaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucy5xdWFydGVyTG9hZGluZy5zZXRBcmdzKHRoaXMuYWpheC5tb250aCAsICdtb250aCcpO1xyXG4gICAgICAgICAgICB9KS50aGVuKChuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmdldFF1YXJ0ZXJTdGFydCh0aGlzLnF1YXJ0ZXJGb3JRdWFydGVyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IHRoaXMuaXNOb3dRdWFydGVyKHRoaXMueWVhckZvclF1YXJ0ZXIgLCB0aGlzLnF1YXJ0ZXJGb3JRdWFydGVyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRNb250aCgpICsgMSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRRdWFydGVyRW5kKHRoaXMucXVhcnRlckZvclF1YXJ0ZXIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7ICsraSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goYCR7aX3mnIjku71gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucGFpbih7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9tOiB0aGlzLiRyZWZzLnF1YXJ0ZXIgLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0VHlwZTogJ2NvbHVtbicgLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnllYXJGb3JRdWFydGVyICsgJyDnrKwnICsgdGhpcy5xdWFydGVyRm9yUXVhcnRlciArICflraPluqYg57uf6K6h6LWE5paZJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcyAsXHJcbiAgICAgICAgICAgICAgICAgICAgeFRpdGxlOiAn5pel5pyfJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgeVRpdGxlOiAn5pWw6YePJyAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxvdExpbmU6IDEwMCAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiB0aGlzLnZhbHVlLnF1YXJ0ZXIgLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUoJ3F1YXJ0ZXJMb2FkaW5nJyAsICdxdWFydGVyJyAsICdxdWFydGVyJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gLFxyXG5cclxuICAgICAgICAvLyDlubTnu5/orqHotYTmlplcclxuICAgICAgICB5ZWFyQ2hhcnQgKCkge1xyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZy55ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW5mbygn6K+35rGC5LitLi4u6K+36ICQ5b+D562J5b6FJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ1N0YXRlKCd5ZWFyTG9hZGluZycgLCAneWVhcicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hamF4LnllYXIgPSB0aGlzLmFwaS55ZWFyKHtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiB0aGlzLnllYXJGb3JZZWFyICxcclxuICAgICAgICAgICAgICAgIH0gLCAocmVzICwgY29kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVOb3RpY2UocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZXJpZXMgPSBPYmplY3QudmFsdWVzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi5kYXRhID0gT2JqZWN0LnZhbHVlcyh2LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUueWVhciA9IHNlcmllcztcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnMueWVhckxvYWRpbmcuc2V0QXJncyh0aGlzLmFqYXgueWVhciAsICd5ZWFyJyk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKG5leHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSB0aGlzLmlzTm93WWVhcih0aGlzLnllYXJGb3JZZWFyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRNb250aCgpICsgMSA6XHJcbiAgICAgICAgICAgICAgICAgICAgMTI7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgKytpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChgJHtpfeaciOS7vWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWluKHtcclxuICAgICAgICAgICAgICAgICAgICBkb206IHRoaXMuJHJlZnMueWVhciAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRUeXBlOiAnYXJlYScgLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnllYXJGb3JZZWFyICsgJ+W5tOe7n+iuoei1hOaWmScgLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgLFxyXG4gICAgICAgICAgICAgICAgICAgIHhUaXRsZTogJ+aXpeacnycgLFxyXG4gICAgICAgICAgICAgICAgICAgIHlUaXRsZTogJ+aVsOmHjycgLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsb3RMaW5lOiAxMDAgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcmllczogdGhpcy52YWx1ZS55ZWFyICxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFN0YXRlKCd5ZWFyTG9hZGluZycgLCAneWVhcicgLCAneWVhcicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICxcclxuICAgIH1cclxufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtb2R1bGUtY29udGFpbmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIm1vZHVsZS1uYXZcIiwgeyBhdHRyczogeyB0b3BSb3V0ZTogX3ZtLnRvcFJvdXRlLCBwb3M6IF92bS5wb3MgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZHVsZS1jb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2VsY29tZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCLmrKLov47lm57mnaUgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXJuYW1lKSldKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG1cIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIuacgOi/keS4gOasoeeZu+W9leS6jiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHN0b3JlLnN0YXRlLnVzZXIubGFzdF90aW1lKSldKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9kYXlcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW192bS5fdihcIuaWsOWinueUqOaIt1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5LuK5pel77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaW5mby51c2VyLnRvZGF5KSldKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaYqOaXpe+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmluZm8udXNlci55ZXN0ZXJkYXkpKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi55u46L6D5pio5aSp77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaW5mby51c2VyLnJhdGlvKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5pbmZvLnVzZXIuZmxhZyA9PSBcInVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZS90b3AucG5nXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5mby51c2VyLmZsYWcgPT0gXCJkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZS9idG0ucG5nXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BcIiB9LCBbX3ZtLl92KFwi5paw5aKe5ZCO5Y+w55So5oi3XCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLku4rml6XvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLmFkbWluX3VzZXIudG9kYXkpKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5pio5pel77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaW5mby5hZG1pbl91c2VyLnllc3RlcmRheSkpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLnm7jovoPmmKjlpKnvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLmFkbWluX3VzZXIucmF0aW8pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmluZm8uYWRtaW5fdXNlci5mbGFnID09IFwidXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL3RvcC5wbmdcIikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5pbmZvLmFkbWluX3VzZXIuZmxhZyA9PSBcImRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL2J0bS5wbmdcIikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcFwiIH0sIFtfdm0uX3YoXCLmlrDlop7ovabovoZcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0bVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS7iuaXpe+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmluZm8uY2FyLnRvZGF5KSldKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaYqOaXpe+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmluZm8uY2FyLnllc3RlcmRheSkpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLnm7jovoPmmKjlpKnvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLmNhci5yYXRpbykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5mby5jYXIuZmxhZyA9PSBcInVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZS90b3AucG5nXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5mby5jYXIuZmxhZyA9PSBcImRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL2J0bS5wbmdcIikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcFwiIH0sIFtfdm0uX3YoXCLmlrDlop7mlofnq6BcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0bVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS7iuaXpe+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmluZm8uYXJ0aWNsZS50b2RheSkpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmmKjml6XvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLmFydGljbGUueWVzdGVyZGF5KSldKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuebuOi+g+aYqOWkqe+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmluZm8uYXJ0aWNsZS5yYXRpbykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5mby5hcnRpY2xlLmZsYWcgPT0gXCJ1cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2UvdG9wLnBuZ1wiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmluZm8uYXJ0aWNsZS5mbGFnID09IFwiZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2UvYnRtLnBuZ1wiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDUpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW192bS5fdihcIuaWsOWinuWNlui9pueUs+ivt1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5LuK5pel77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaW5mby5zYWxlX2FwcGxpY2F0aW9uLnRvZGF5KSldKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaYqOaXpe+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW5mby5zYWxlX2FwcGxpY2F0aW9uLnllc3RlcmRheSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLnm7jovoPmmKjlpKnvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8uc2FsZV9hcHBsaWNhdGlvbi5yYXRpbykpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5mby5zYWxlX2FwcGxpY2F0aW9uLmZsYWcgPT0gXCJ1cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2UvdG9wLnBuZ1wiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmluZm8uc2FsZV9hcHBsaWNhdGlvbi5mbGFnID09IFwiZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2UvYnRtLnBuZ1wiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDYpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW192bS5fdihcIuaWsOWinuWAvOi0reeUs+ivt1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5LuK5pel77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaW5mby5yZWNvbW1lbmRhdGlvbl9hcHBsaWNhdGlvbi50b2RheSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaYqOaXpe+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmluZm8ucmVjb21tZW5kYXRpb25fYXBwbGljYXRpb24ueWVzdGVyZGF5KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi55u46L6D5pio5aSp77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaW5mby5yZWNvbW1lbmRhdGlvbl9hcHBsaWNhdGlvbi5yYXRpbylcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5pbmZvLnJlY29tbWVuZGF0aW9uX2FwcGxpY2F0aW9uLmZsYWcgPT0gXCJ1cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2UvdG9wLnBuZ1wiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmluZm8ucmVjb21tZW5kYXRpb25fYXBwbGljYXRpb24uZmxhZyA9PSBcImRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL2J0bS5wbmdcIikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSg3KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5paw5aKe5YiG5pyf6LSt6L2m55Sz6K+3XCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0bVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS7iuaXpe+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW5mby5zdGFnaW5nX2J1eV9hcHBsaWNhdGlvbi50b2RheSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmmKjml6XvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pbmZvLnN0YWdpbmdfYnV5X2FwcGxpY2F0aW9uLnllc3RlcmRheSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuebuOi+g+aYqOWkqe+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW5mby5zdGFnaW5nX2J1eV9hcHBsaWNhdGlvbi5yYXRpbykpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5mby5zdGFnaW5nX2J1eV9hcHBsaWNhdGlvbi5mbGFnID09IFwidXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL3RvcC5wbmdcIikgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5pbmZvLnN0YWdpbmdfYnV5X2FwcGxpY2F0aW9uLmZsYWcgPT0gXCJkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZS9idG0ucG5nXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oOCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaWsOWinumihOe6pueci+i9pueUs+ivt1wiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLku4rml6XvvJpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLnJlc2VydmF0aW9uLnRvZGF5KSldKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaYqOaXpe+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmluZm8ucmVzZXJ2YXRpb24ueWVzdGVyZGF5KSldKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuebuOi+g+aYqOWkqe+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmluZm8ucmVzZXJ2YXRpb24ucmF0aW8pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmluZm8ucmVzZXJ2YXRpb24uZmxhZyA9PSBcInVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZS90b3AucG5nXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5mby5yZXNlcnZhdGlvbi5mbGFnID09IFwiZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2UvYnRtLnBuZ1wiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoaXN0b3J5XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDkpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvci10b3RhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMTApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW192bS5fdihcIueUqOaIt+aVsFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLnVzZXIudG90YWwpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvci10b3RhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMTEpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW192bS5fdihcIuWQjuWPsOeUqOaIt+aVsFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLmFkbWluX3VzZXIudG90YWwpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvci10b3RhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMTIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW192bS5fdihcIui9pui+huaVsFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLmNhci50b3RhbCkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9yLXRvdGFsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgxMyksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BcIiB9LCBbX3ZtLl92KFwi5paH56ug5pWwXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8uYXJ0aWNsZS50b3RhbCkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9yLXRvdGFsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgxNCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BcIiB9LCBbX3ZtLl92KFwi5Y2W6L2m55Sz6K+35pWwXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8uc2FsZV9hcHBsaWNhdGlvbi50b3RhbCkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9yLXRvdGFsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgxNSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BcIiB9LCBbX3ZtLl92KFwi5YC86LSt55Sz6K+35pWwXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8ucmVjb21tZW5kYXRpb25fYXBwbGljYXRpb24udG90YWwpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvci10b3RhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMTYpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW192bS5fdihcIuWIhuacn+i0rei9pueUs+ivt+aVsFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLnN0YWdpbmdfYnV5X2FwcGxpY2F0aW9uLnRvdGFsKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1mb3ItdG90YWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDE3KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcFwiIH0sIFtfdm0uX3YoXCLpooTnuqbnnIvovabmlbBcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0bVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW5mby5yZXNlcnZhdGlvbi50b3RhbCkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjaGFydFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vbnRoIGNoYXJ0LWJveFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJ1bi10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDE4KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInllYXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlubTku73vvJpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImktc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS55ZWFyRm9yTW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS55ZWFyRm9yTW9udGggPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInllYXJGb3JNb250aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnllYXIsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImktb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogdiwgYXR0cnM6IHsgdmFsdWU6IHYgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vbnRoIHNpbmdsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaciOS7ve+8mlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaS1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1vbnRoRm9yTW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb250aEZvck1vbnRoID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb250aEZvck1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubW9udGgsIGZ1bmN0aW9uKHYsIGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImktb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaywgYXR0cnM6IHsgdmFsdWU6IHBhcnNlSW50KGspIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHYpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG5zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5tb250aENoYXJ0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuehruWumlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvblwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcIm1vbnRoXCIsIHN0YXRpY0NsYXNzOiBcImNoYXJ0LWNvbnRhaW5lclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInYtbG9hZGluZ1wiLCB7IHJlZjogXCJtb250aC1sb2FkaW5nXCIgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJxdWFydGVyIGNoYXJ0LWJveFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJ1bi10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDE5KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInllYXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlubTku73vvJpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImktc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS55ZWFyRm9yUXVhcnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnllYXJGb3JRdWFydGVyID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ5ZWFyRm9yUXVhcnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnllYXIsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImktb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogdiwgYXR0cnM6IHsgdmFsdWU6IHYgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vbnRoIHNpbmdsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWto+W6pu+8mlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaS1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5xdWFydGVyRm9yUXVhcnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnF1YXJ0ZXJGb3JRdWFydGVyID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJxdWFydGVyRm9yUXVhcnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnF1YXJ0ZXIsIGZ1bmN0aW9uKHYsIGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImktb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaywgYXR0cnM6IHsgdmFsdWU6IHBhcnNlSW50KGspIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHYpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG5zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5xdWFydGVyQ2hhcnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi56Gu5a6aXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29uXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJxdWFydGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hhcnQtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1sb2FkaW5nXCIsIHsgcmVmOiBcInF1YXJ0ZXItbG9hZGluZ1wiIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRtIGNoYXJ0LWJveFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJydW4tdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIwKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ5ZWFyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlubTku73vvJpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaS1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS55ZWFyRm9yWWVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ueWVhckZvclllYXIgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwieWVhckZvclllYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS55ZWFyLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImktb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHYsIGF0dHJzOiB7IHZhbHVlOiB2IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh2KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG5zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJibHVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS55ZWFyQ2hhcnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnoa7lrppcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb25cIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcInllYXJcIiwgc3RhdGljQ2xhc3M6IFwiY2hhcnQtY29udGFpbmVyXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWxvYWRpbmdcIiwgeyByZWY6IFwieWVhci1sb2FkaW5nXCIgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbSgyMSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1sb2FkaW5nXCIsIHsgcmVmOiBcImxvYWRpbmdcIiB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJ1bi10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtfdm0uX3YoXCLku4rml6Xnu5/orqHotYTmlplcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2UvdXNlcjEucG5nXCIpIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL2FkbWluX3VzZXIucG5nXCIpIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL2Nhci5wbmdcIikgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2UvYXJ0aWNsZS5wbmdcIikgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2Uvc2FsZS5wbmdcIikgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2UvcmVjb21tZW5kYXRpb24ucG5nXCIpIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL3N0YWdpbmdfYnV5LnBuZ1wiKSB9XG4gICAgICB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZS9yZXNlcnZhdGlvbi5wbmdcIikgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJ1bi10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtfdm0uX3YoXCLljoblj7Lnu5/orqHotYTmlpkgXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL3VzZXIxLnBuZ1wiKSB9XG4gICAgICB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZS9hZG1pbl91c2VyLnBuZ1wiKSB9XG4gICAgICB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZS9jYXIucG5nXCIpIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL2FydGljbGUucG5nXCIpIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL3NhbGUucG5nXCIpIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL3JlY29tbWVuZGF0aW9uLnBuZ1wiKSB9XG4gICAgICB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZS9zdGFnaW5nX2J1eS5wbmdcIikgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnRcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vaW1hZ2UvcmVzZXJ2YXRpb24ucG5nXCIpIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZS9tb250aC5wbmdcIikgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCLmnIjnu5/orqHotYTmlplcIilcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltYWdlL3F1YXJ0ZXIucG5nXCIpIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwi5a2j5bqm57uf6K6h6LWE5paZXCIpXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9pbWFnZS95ZWFyLnBuZ1wiKSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIuW5tOe7n+iuoei1hOaWmVwiKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3lzdGVtXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJydW4tdGl0bGVcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sIFtfdm0uX3YoXCLns7vnu5/kv6Hmga9cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVcIiB9LCBbXG4gICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi57O757uf54mI5pysXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiMS4wLjFcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5L2c6ICFXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiZ3JheVZUb3VjaFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Bhbm5lbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD1lZWQ5ZmZmOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Bhbm5lbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MiZpZD1lZWQ5ZmZmOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZS9hZG1pbl91c2VyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZS9hcnRpY2xlLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZS9idG0ucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlL2Nhci5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2UvbW9udGgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlL3F1YXJ0ZXIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlL3JlY29tbWVuZGF0aW9uLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZS9yZXNlcnZhdGlvbi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2Uvc2FsZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2Uvc3RhZ2luZ19idXkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlL3RvcC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2UvdXNlcjEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlL3llYXIucG5nXCI7IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4vcGFubmVsLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi9wYW5uZWwuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Bhbm5lbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWVkOWZmZjgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vanMvcGFubmVsLmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9qcy9wYW5uZWwuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4uL3B1YmxpYy9jc3MvZ2xvYmFsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuLi9wdWJsaWMvY3NzL3B1YmxpYy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD1lZWQ5ZmZmOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMiBmcm9tIFwiLi9jc3MvcGFubmVsLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0yJmlkPWVlZDlmZmY4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlZWQ5ZmZmOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdvcmtcXFxcY29kZVxcXFxjYXJcXFxccHVibGljXFxcXG1vZHVsZVxcXFxhZG1pblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZWVkOWZmZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZWVkOWZmZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Bhbm5lbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWVkOWZmZjgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZWVkOWZmZjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNvdXJjZS92dWUvdmlldy9wYW5uZWwvcGFubmVsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYW5uZWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVlZDlmZmY4JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2dsb2JhbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9ZWVkOWZmZjgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wdWJsaWMuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9ZWVkOWZmZjgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiXSwic291cmNlUm9vdCI6IiJ9