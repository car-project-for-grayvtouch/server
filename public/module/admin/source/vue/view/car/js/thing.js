export default {
    name: "v-car-model" ,
    data () {
        return {
            form: {
                name: '',
                price: '0.00',
                mileage: '0.00' ,
                sale_point: 'none' ,
                transfer_record: 0 ,
                image: [] ,
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
            api: carApi,
            delAction: 'delImage' ,
            navMenu: [
                {
                    id: 'base',
                    name: '基本信息'
                },
                {
                    id: 'image',
                    name: '图片'
                } ,
                {
                    id: 'service',
                    name: '服务'
                } ,
            ],
            menu: 'base',
            type: 1 ,
            brand: [],
            carSeries: [] ,
            carModel: [] ,
            comp: {} ,
            value: {
                onceForBrand: true ,
                onceForSeries: true ,
                onceForModel: true ,
                hasThumb: false ,
            } ,
            thumb: {} ,
            iamge: [] ,
            idList: [] ,
            service: [] ,

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
        mixins.list.del ,
        mixins.form.get ,
        mixins.form.confirm ,
        mixins.form.menuSwitch ,
    ] ,
    methods: {
        initDom () {
            this.dom.tbody = G(this.$refs.tbody);
            this.dom.options = G(this.$refs.options);
            this.dom.optionSet = this.dom.options.children(null , false , true);
        } ,

        initComp () {

        } ,

        initInstance () {
            const self = this;
            // 初始菜单
            this.initMenuSwitch();
            // 品牌
            this.ins.brand = new Brand(this.$refs.brand.$el , {
                // 多选模式
                multiple: false ,
                // 选中
                checked (id) {
                    if (self.param.mode == 'edit' && !self.value.onceForBrand) {
                        self.form.car_series_id = '';
                        self.form.car_model_id = '';
                    }
                    self.value.onceForBrand = false;
                    self.carSeries = [];
                    self.carModel = [];
                    self.form.brand_id = id;
                    self.getCarSeries(id);
                } ,
                // 未选中
                unchecked () {
                    self.form.brand_id = '';
                    self.carSeries = [];
                    self.carModel = [];
                } ,
            });
            // 封面
            this.ins.thumb = new UploadImage(this.$refs['thumb-container'] , {
                pluginUrl: topContext.plugin + 'UploadImage/' ,
                mode: 'override' ,
                url:  topContext.imageApi ,
                field: 'image' ,
                success (res , code) {
                    if (G.isFunction(self.callback.thumb)) {
                        self.callback.thumb(res , code);
                    }
                }
            });
            // 图片
            this.ins.image = new UploadImage(this.$refs['image-container'] , {
                pluginUrl: topContext.plugin + 'UploadImage/' ,
                mode: 'append' ,
                url:  topContext.imageApi ,
                field: 'image' ,
                success (res , code) {
                    if (code != 200) {
                        self.eNotice(res);
                        return ;
                    }
                    self.image.push(res);
                } ,
                callback () {
                    if (G.isFunction(self.callback.image)) {
                        self.callback.image();
                    }
                }
            });
        } ,

        initialize () {
            new Promise((resolve) => {
                let count = 0;
                let total = 2;
                let callback = () => {
                    count++;
                    if (count == total) {
                        resolve(true);
                    }
                };
                this.ins.loading.show();
                // 获取品牌
                brandApi.all((res , code) => {
                    if (code != 200) {
                        resolve(false);
                        this.eNotice(res);
                        return ;
                    }
                    this.brand = res;
                    callback();
                });
                // 获取服务
                serviceApi.all((res , code) => {
                    if (code != 200) {
                        resolve(false);
                        this.eNotice(res);
                        return ;
                    }
                    res.forEach((v) => {
                        v.checked = 'n';
                    });
                    this.service = res;
                    callback();
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
                            // 选择品牌
                            this.ins.brand.checked(this.form.brand_id);
                            // 处理服务
                            this.service.forEach((v) => {
                                for (let i = 0; i < this.form.service.length; ++i)
                                {
                                    let cur = this.form.service[i];
                                    if (cur.id == v.id) {
                                        v.checked = 'y';
                                        return ;
                                    }
                                }
                            });
                        }
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
                if (this.param.mode == 'edit' && this.value.onceForSeries) {
                    this.getCarModel(this.form.car_series_id);
                    this.value.onceForSeries = false;
                }
            });
        } ,

        // 获取车型
        getCarModel (car_series_id) {
            if (this.ajax.carModel instanceof G.ajax) {
                this.ajax.carModel.native('abort');
            }
            this.carModel = [];
            if (this.param.mode == 'edit' && !this.value.onceForModel) {
                this.form.car_model_id = '';
            }
            this.value.onceForModel = false;
            // 获取车系
            this.ajax.carModel = carModelApi.all({
                car_series_id
            } , (res , code) => {
                if (code != 200) {
                    this.eNotice(res);
                    return ;
                }
                this.carModel = res;
            });
        } ,

        // 车系变化事件
        selectedCarSeries (car_series_id) {
            this.form.car_model_id = '';
            this.getCarModel(car_series_id);
        } ,

        // 获取服务
        getService () {
            let idList = [];
            this.service.forEach((v) => {
                if (v.checked == 'y') {
                    idList.push(v.id);
                }
            });
            this.form.service = G.jsonEncode(idList);
        } ,

        // 获取数据
        check (data) {
            if (this.param.mode == 'add' && this.ins.image.empty()) {
                this.ins.menuSwitch.switch('image');
                return {
                    status: false ,
                    field: 'image' ,
                    msg: '必须'
                };
            }

            return {
                status: true ,
                field: '' ,
                msg: '' ,
            };
        } ,

        // 设置封面
        setThumb (image) {
            new Promise((resolve) => {
                if (this.pending.thumb) {
                    this.$info('请求中...请耐心等待');
                    return ;
                }
                let self = this;
                this.ins.loading.show();
                this.pending.thumb = true;
                this.ajax.thumb = this.api.thumb({
                    id: this.form.id ,
                    image: image.url ,
                } , (res , code) => {
                    if (code != 200) {
                        this.initialState(this.ins.loading , this.ajax.thumb , this.pending.thumb);
                        this.eNotice(res);
                        return ;
                    }
                    this.$success('操作成功' , {
                        btn: ['预览封面' , '关闭'] ,
                        btn1 (index) {
                            self.ins.menuSwitch.switch('base');
                            self.vScroll('thumb');
                            layer.close(index);
                        } ,
                        btn2 (index) {
                            layer.close(index);
                        } ,
                    });
                    resolve();
                });
                this.ins.loading.setArgs(this.ajax.thumb , 'thumb');
            }).then(() => {
                return new Promise((resolve) => {
                    this.getData(resolve);
                });
            }).finally(() => {
                this.pending.thumb = false;
                this.ins.loading.hide();
            });
        } ,

        preview (url) {

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
                    this.error = G.createObject(this.error , {[filter.field]: filter.msg});
                    this.vScroll(filter.field);
                    return ;
                }
                this.image = [];
                this.getService();
                this.pending.submit = true;
                this.ins.loading.show();
                this.ins.menuSwitch.switch('base');
                this.ajax.submit = this.api[this.param.mode](this.form , (res , code) => {
                    this.error = {};
                    if (code != 200) {
                        this.initialState('loading' , 'submit' , 'submit');
                        this.ins.menuSwitch.switch('base');
                        if (code == 400) {
                            this.error = res;
                            this.vScroll(G.firstKey(res));
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
                // 上传封面
                return new Promise((resolve) => {
                    if (this.ins.thumb.empty()) {
                        resolve(false);
                    }
                    this.callback.thumb = (res , code) => {
                        if (code != 200) {
                            this.eNotice(res);
                            resolve(false);
                            return ;
                        }
                        this.thumb = res;
                        resolve(true);
                    };
                    this.ins.thumb.upload();
                });
            }).then((next) => {
                // 更新封面
                return new Promise((resolve) => {
                    if (!next) {
                        resolve();
                        return ;
                    }
                    this.api.thumb({
                        id: this.form.id ,
                        image: this.thumb.url ,
                    } , (res , code) => {
                        resolve();
                        if (code != 200) {
                            this.eNotice(res);
                            return ;
                        }
                        this.value.hasThumb = true;
                    });
                });
            }).then(() => {
                // 上传图片
                return new Promise((resolve) => {
                    if (this.ins.image.empty()) {
                        resolve(false);
                        return ;
                    }
                    this.callback.image = () => {
                        if (this.image.length == 0) {
                            resolve(false);
                            return ;
                        }
                        resolve(true);
                    };
                    this.ins.menuSwitch.switch('image');
                    this.ins.image.upload();
                });
            }).then((next) => {
                // 更新图片
                return new Promise((resolve) => {
                    if (!next) {
                        resolve();
                        return ;
                    }
                    this.api.image({
                        id: this.form.id ,
                        image: G.jsonEncode(this.image) ,
                        thumb: this.param.mode == 'edit' || this.value.hasThumb ? 'n' : 'y'
                    } , (res , code) => {
                        resolve();
                        if (code != 200) {
                            this.eNotice(res);
                        }
                    });
                });
            }).then(() => {
                this.confirm('车辆列表' , '/car/list');
            }).finally(() => {
                this.initialState('loading' , 'submit' , 'submit');
            });
        } ,
    }
}