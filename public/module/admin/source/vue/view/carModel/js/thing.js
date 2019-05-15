export default {
    name: "v-car-model" ,
    data () {
        return {
            form: {
                name: '',
                year: new Date().getFullYear() ,
                price: '0.00',
                door_count: 0 ,
                seat_count: 0 ,
                high_speed_fuel_consumption: 0 ,
                city_fuel_consumption: 0 ,
                displacement: '0.0' ,
                cylinder_count: 0 ,
                weight: 0,
                maximum_horsepower: '0.00' ,
                maximum_torque: '0.00' ,
                engine_anti_theft_system: 'n' ,
                gearbox: '手动' ,
            },
            error: {},
            ajax: {
                get: null,
                submit: null,
            },
            dom: {},
            ins: {
                loading: null,
            },
            pending: {
                submit: null,
            },
            data: {},
            callback: {},
            api: carModelApi,
            navMenu: [
                {
                    id: 'base',
                    name: '基本信息'
                },
                {
                    id: 'configuration',
                    name: '车型配置'
                }
            ],
            menu: 'base',
            type: 1 ,
            brand: [],
            carSeries: [] ,
            carType: [] ,
            comp: {} ,
            configuration: [] ,

        };
    } ,
    created () {

    } ,
    mounted () {
        this.initDom();
        this.initComp();
        this.initialize();
    } ,
    mixins: [
        mixins.state ,
        mixins.loading ,
        mixins.form.get ,
        mixins.form.confirm ,
        mixins.form.menuSwitch ,
    ] ,
    methods: {
        initDom () {
            this.dom.options = G(this.$refs.options);
            this.dom.optionSet = this.dom.options.children(null , false , true);
        } ,

        initComp () {
            this.comp.brand = this.$refs.brand;
        } ,

        initInstance () {
            const self = this;
            // 初始菜单
            this.initMenuSwitch();
            // 品牌
            this.ins.brand = new Brand(this.comp.brand.$el , {
                // 多选模式
                multiple: false ,
                // 选中
                checked (id) {
                    self.form.brand_id = id;
                    self.getCarSeries(id);
                } ,
                // 未选中
                unchecked () {
                    self.form.brand_id = '';
                    self.carSeries = [];
                } ,
            });
        } ,

        initialize () {
            new Promise((resolve) => {
                let count = 0;
                this.ins.loading.show();
                // 获取品牌
                brandApi.all((res , code) => {
                    if (code != 200) {
                        resolve(false);
                        this.eNotice(res);
                        return ;
                    }
                    this.brand = res;
                    count++;
                    if (count == 3) {
                        resolve(true);
                    }
                });
                // 获取车辆类型
                carTypeApi.all((res , code) => {
                    if (code != 200) {
                        resolve(false);
                        this.eNotice(res);
                        return ;
                    }
                    this.carType = res;
                    count++;
                    if (count == 3) {
                        resolve(true);
                    }
                });
                // 获取车辆配置
                carConfigurationApi.group((res , code) => {
                    if (code != 200) {
                        resolve(false);
                        this.eNotice(res);
                        return ;
                    }
                    res.forEach((v) => {
                        v.data.forEach((v1) => {
                            v1.checked = 'n';
                        });
                    });
                    this.configuration = res;
                    count++;
                    if (count == 3) {
                        resolve(true);
                    }
                });
            }).then((next) => {
                if (!next) {
                    return ;
                }
                this.$nextTick(() => {
                    // 数据获取之后初始化
                    this.initInstance();
                    this.getData(() => {
                        if (this.param.mode == 'edit') {
                            this.form._configuration = [...this.form.configuration];
                        } else {
                            this.form._configuration = [];
                        }
                        // 车辆配置处理
                        this.configuration.forEach((v) => {
                            v.data.forEach((v1) => {
                                for (let i = 0; i < this.form._configuration.length; ++i)
                                {
                                    let cur = this.form._configuration[i];
                                    if (v1.id == cur.id) {
                                        v1.checked = 'y';
                                        return ;
                                    }
                                }
                                v1.checked = 'n';
                            });
                        });
                        this.ins.brand.checked(this.form.brand_id);
                    });
                });
            }).finally(() => {
                this.ins.loading.hide();
            });
        } ,

        // 获取车系
        getCarSeries (brand_id) {
            if (this.ajax.carSeries instanceof G.ajax) {
                this.ajax.carSeries.native('abort');
            }
            // 获取车系
            this.ajax.carSeries = carSeriesApi.all({
                brand_id
            } , (res , code) => {
                if (code != 200) {
                    this.eNotice(res);
                    return ;
                }
                this.carSeries = res;
            });
        } ,

        hasConfiguration () {

        } ,

        configurationChangeEvent () {

        } ,

        // 获取数据
        check (data) {
            return {
                status: true ,
                field: '' ,
                msg: '' ,
            };
        } ,

        // 获取车辆配置
        getConfiguration () {
            this.form.configuration = [];
            this.configuration.forEach((v) => {
                v.data.forEach((v2) => {
                    if (v2.checked == 'y') {
                        this.form.configuration.push(v2.id);
                    }
                });
            });
            this.form.configuration = G.jsonEncode(this.form.configuration);
        } ,

        submit () {
            new Promise((resolve) => {
                // 上传基本数据
                if (this.pending.submit) {
                    this.$info('请求中...请耐心等待');
                    return ;
                }
                let filter = this.check();
                if (!filter.status) {
                    this.error[filter.field] = filter.msg;
                    vScroll(filter.field);
                    return ;
                }
                this.getConfiguration();
                this.pending.submit = true;
                this.ins.loading.show();
                this.ajax.submit = this.api[this.param.mode](this.form , (res , code) => {
                    this.error = {};
                    if (code != 200) {
                        this.initialState('loading' , 'submit' , 'submit');
                        if (code == 400) {
                            this.error = res;
                            this.ins.menuSwitch.switch('base');
                            vScroll(G.firstKey(res));
                            return ;
                        }
                        this.$error(res);
                        return ;
                    }
                    this.form.id = res;
                    resolve();
                });
                this.ins.loading.setArgs(this.ajax.submit , 'submit');
            }).then(() => {
                this.confirm('车辆型号' , '/carModel/list');
            }).finally(() => {
                this.initialState('loading' , 'submit' , 'submit');
            });
        } ,
    }
}