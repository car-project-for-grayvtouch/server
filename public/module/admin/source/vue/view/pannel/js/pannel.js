export default {
    name: "pannel" ,
    data () {
        return {
            dom: {} ,
            ajax: {} ,
            pending: {} ,
            ins: {
                loading: null ,
            } ,
            mode: {
                month: 'single' ,
            } ,
            api: pannelApi ,
            year: [] ,
            month: [] ,
            quarter: {
                1: '第一季度' ,
                2: '第二季度' ,
                3: '第三季度' ,
                4: '第四季度' ,
            } ,
            yearForMonth: 0 ,
            monthForMonth: 0 ,
            yearForYear: 0 ,
            yearForQuarter: 0 ,
            quarterForQuarter: 0 ,
            info: {
                user: {} ,
                admin_user: {} ,
                article: {} ,
                car: {} ,
                sale_application: {} ,
                recommendation_application: {} ,
                staging_buy_application: {} ,
                reservation: {} ,
            } ,
            value: {
                month: null,
                quarter: null,
                year: null,
            } ,
        };
    } ,
    mixins: [
        mixins.state ,
        mixins.loading ,
    ] ,

    mounted () {
        this.initInstance();
        this.initialize();
        this.getData();
        this.reRender();
    } ,

    methods: {
        initInstance () {
            const self = this;

            this.ins.monthLoading = new Loading(this.$refs['month-loading'].$el , {
                status: 'hide' ,
                type: 'line-scale' ,
                close (ajax , key) {
                    // 中断请求
                    if (self.ajax[ajax] instanceof G.ajax) {
                        self.ajax[ajax].native('abort');
                    }
                    self.pending[key] = false;
                }
            });
            this.ins.quarterLoading = new Loading(this.$refs['quarter-loading'].$el  , {
                status: 'hide' ,
                type: 'line-scale' ,
                close (ajax , key) {
                    // 中断请求
                    if (self.ajax[ajax] instanceof G.ajax) {
                        self.ajax[ajax].native('abort');
                    }
                    self.pending[key] = false;
                }
            });
            this.ins.yearLoading = new Loading(this.$refs['year-loading'].$el  , {
                status: 'hide' ,
                type: 'line-scale' ,
                close (ajax , key) {
                    // 中断请求
                    if (self.ajax[ajax] instanceof G.ajax) {
                        self.ajax[ajax].native('abort');
                    }
                    self.pending[key] = false;
                }
            });
        } ,
        initialize () {
            const yearStart = 1990;
            const d = new Date();
            const curYear = d.getFullYear();
            const curMonth = d.getMonth() + 1;
            const yearEnd = curYear;
            const monthStart = 1;
            const monthEnd = 12;
            let year = [];
            let month = {};
            for (let i = yearStart; i <= yearEnd; ++i)
            {
                year.push(i);
            }
            for (let i = monthStart; i <= monthEnd; ++i)
            {
                month[i] = i + '月份';
            }
            this.year = year;
            this.month = month;
            this.yearForMonth = curYear;
            this.yearForQuarter = curYear;
            this.yearForYear = curYear;
            this.monthForMonth = curMonth;
            this.quarterForQuarter = this.getQuarter(curMonth);
        } ,

        getData () {
            new Promise((resolve) => {
                this.pendingState('loading');
                this.ajax.get = this.api.info((res , code) => {
                    resolve();
                    if (code != 200) {
                        this.eNotice(res);
                        return ;
                    }
                    this.info = res;
                });
                this.ins.loading.setArgs(this.ajax.get);
            }).finally(() => {
                this.initialState('loading' , null , 'get');
            });
        } ,

        reRender () {
            this.$nextTick(() => {
                this.monthChart();
                this.quarterChart();
                this.yearChart();
            });
        } ,

        pain (option) {
            const _default = {
                dom: null ,
                chartType: 'spline' ,
                title: '测试标题' ,
                subtitle: '测试副标题' ,
                plotLine: 10 ,
                categories: ['One' , 'Two' , 'Three'] ,
                xTitle: 'x-测试标题' ,
                yTitle: 'y-测试标题' ,
                series: [
                    {
                        name: '图例-1' ,
                        data: [1,2,3] ,
                    } ,
                    {
                        name: '图例-2' ,
                        data: [3,4,5] ,
                    } ,
                ] ,
                legend: {
                    enabled: true ,
                    layout: 'horizontal' ,
                    align: 'center' ,
                    verticalAlign: 'bottom'
                } ,

            };
            option.legend = option.legend ? option.legend : _default.legend;
            return Highcharts.chart({
                chart: {
                    renderTo: option.dom ,
                    type: option.chartType ,
                } ,
                title: {
                    text: option.title
                } ,
                xAxis: {
                    title: {
                        text: option.xTitle ,
                    } ,
                    categories: option.categories
                } ,
                yAxis: {
                    title: {
                        text: option.yTitle
                    } ,
                    plotLines: [
                        {
                            value: option.plotLine ,
                            dashStyle: 'solid' ,
                            color: 'red' ,
                            width: 1 ,
                            zIndex: 10 ,
                        }
                    ]
                } ,
                series: option.series ,
                legend: {
                    enabled: true ,
                    layout: option.legend.layout ,
                    align: option.legend.align ,
                    verticalAlign: option.legend.verticalAlign
                } ,
                credits: {
                    enabled: false ,
                } ,
            });
        } ,

        // 获取季度
        getQuarter (month) {
            if ([1,2,3].indexOf(month) != -1) {
                return 1;
            }
            if ([4,5,6].indexOf(month) != -1) {
                return 2;
            }
            if ([7,8,9].indexOf(month) != -1) {
                return 3;
            }
            if ([10,11,12].indexOf(month) != -1) {
                return 4;
            }
            throw new Error('参数 1 类型错误');
        } ,

        getQuarterStart (quarter) {
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
        } ,

        getQuarterEnd (quarter) {
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
        isNowMonth (year , month) {
            const d = new Date();
            const y = d.getFullYear();
            const m = d.getMonth() + 1;
            return y == year && month == month;
        } ,

        isNowQuarter (year , quarter) {
            const d = new Date();
            const y = d.getFullYear();
            const m = d.getMonth() + 1;
            return y == year && this.getQuarter(m) == quarter;
        } ,

        isNowYear (year) {
            const d = new Date();
            const y = d.getFullYear();
            return y == year;
        } ,

        // 月份统计资料
        monthChart () {
            new Promise((resolve) => {
                if (this.pending.month) {
                    this.$info('请求中...请耐心等待');
                    return ;
                }
                this.pendingState('monthLoading' , 'month');
                this.ajax.month = this.api.month({
                    year: this.yearForMonth ,
                    month: this.monthForMonth ,
                } , (res , code) => {
                    if (code != 200) {
                        this.eNotice(res);
                        resolve(false);
                        return ;
                    }
                    let series = Object.values(res);
                    series.forEach((v) => {
                        v.data = Object.values(v.data);
                    });
                    this.value.month = series;
                    resolve(true);

                });
                this.ins.monthLoading.setArgs(this.ajax.month , 'month');
            }).then((next) => {
                if (!next) {
                    return ;
                }
                const start = 1;
                const end = this.isNowMonth(this.yearForMonth , this.monthForMonth) ?
                    new Date().getDate() :
                    G.getMonthDays(this.yearForYear , this.yearForMonth);
                let categories = [];
                for (let i = start; i <= end; ++i)
                {
                    categories.push(i);
                }
                this.pain({
                    dom: this.$refs.month ,
                    chartType: 'spline' ,
                    title: this.yearForMonth + '年' + this.monthForMonth + '月统计资料' ,
                    categories ,
                    xTitle: '日期' ,
                    yTitle: '数量' ,
                    plotLine: 100 ,
                    series: this.value.month ,
                });
            }).finally(() => {
                this.initialState('monthLoading' , 'month' , 'month');
            });
        } ,

        // 月份统计资料
        quarterChart () {
            new Promise((resolve) => {
                if (this.pending.quarter) {
                    this.$info('请求中...请耐心等待');
                    return ;
                }
                this.pendingState('quarterLoading' , 'month');
                this.ajax.quarter = this.api.quarter({
                    year: this.yearForQuarter ,
                    quarter: this.quarterForQuarter ,
                } , (res , code) => {
                    if (code != 200) {
                        this.eNotice(res);
                        resolve(false);
                        return ;
                    }
                    let series = Object.values(res);
                    series.forEach((v) => {
                        v.data = Object.values(v.data);
                    });
                    this.value.quarter = series;
                    resolve(true);

                });
                this.ins.quarterLoading.setArgs(this.ajax.month , 'month');
            }).then((next) => {
                if (!next) {
                    return ;
                }
                const start = this.getQuarterStart(this.quarterForQuarter);
                const end = this.isNowQuarter(this.yearForQuarter , this.quarterForQuarter) ?
                    new Date().getMonth() + 1 :
                    this.getQuarterEnd(this.quarterForQuarter);
                let categories = [];
                for (let i = start; i <= end; ++i)
                {
                    categories.push(`${i}月份`);
                }
                this.pain({
                    dom: this.$refs.quarter ,
                    chartType: 'column' ,
                    title: this.yearForQuarter + ' 第' + this.quarterForQuarter + '季度 统计资料' ,
                    categories ,
                    xTitle: '日期' ,
                    yTitle: '数量' ,
                    plotLine: 100 ,
                    series: this.value.quarter ,
                });
            }).finally(() => {
                this.initialState('quarterLoading' , 'quarter' , 'quarter');
            });
        } ,

        // 年统计资料
        yearChart () {
            new Promise((resolve) => {
                if (this.pending.year) {
                    this.$info('请求中...请耐心等待');
                    return ;
                }
                this.pendingState('yearLoading' , 'year');
                this.ajax.year = this.api.year({
                    year: this.yearForYear ,
                } , (res , code) => {
                    if (code != 200) {
                        this.eNotice(res);
                        resolve(false);
                        return ;
                    }
                    let series = Object.values(res);
                    series.forEach((v) => {
                        v.data = Object.values(v.data);
                    });
                    this.value.year = series;
                    resolve(true);

                });
                this.ins.yearLoading.setArgs(this.ajax.year , 'year');
            }).then((next) => {
                if (!next) {
                    return ;
                }
                const start = 1;
                const end = this.isNowYear(this.yearForYear) ?
                    new Date().getMonth() + 1 :
                    12;
                let categories = [];
                for (let i = start; i <= end; ++i)
                {
                    categories.push(`${i}月份`);
                }
                this.pain({
                    dom: this.$refs.year ,
                    chartType: 'area' ,
                    title: this.yearForYear + '年统计资料' ,
                    categories ,
                    xTitle: '日期' ,
                    yTitle: '数量' ,
                    plotLine: 100 ,
                    series: this.value.year ,
                });
            }).finally(() => {
                this.initialState('yearLoading' , 'year' , 'year');
            });
        } ,
    }
};