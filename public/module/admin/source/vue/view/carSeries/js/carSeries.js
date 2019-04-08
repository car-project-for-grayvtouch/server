export default {
    name: "v-car-series" ,
    data () {
        return {
            form: {
                name: '' ,
                car_series_group_id: '' ,
                brand_id: '' ,
                weight: 0 ,
            } ,
            error: {} ,
            ajax: {
                get: null ,
                submit: null ,
            } ,
            dom: {} ,
            ins: {
                loading: null ,
                image: null ,
            },
            pending: {
                submit: null ,
            } ,
            data: {} ,
            callback: {} ,
            api: carSeriesApi ,
            brand: [] ,
            group: [] ,
        };
    } ,
    created () {

    } ,
    mounted () {
        this.initDom();
        this.initInstance();
        this.initialize();
    } ,
    mixins: [
        mixins.state ,
        mixins.loading ,
        mixins.form.get ,
        mixins.form.confirm ,
    ] ,
    methods: {
        initDom () {

        } ,

        initInstance () {

        } ,

        initialize () {
            this.ins.loading.show();
            new Promise((resolve) => {
                let count = 0;
                // 获取品牌
                brandApi.all((res , code) => {
                    if (code != 200) {
                        this.eNotice(res);
                        resolve(false);
                        return ;
                    }
                    this.brand = res;
                    this.$nextTick(() => {
                        this.initBrand();
                    });
                    count++;
                    if (count ==2) {
                        resolve(true);
                    }
                });
                // 获取分组
                carSeriesGroupApi.all((res , code) => {
                    if (code != 200) {
                        this.eNotice(res);
                        resolve(false);
                        return ;
                    }
                    this.group = res;
                    count++;
                    if (count ==2) {
                        resolve(true);
                    }
                });
            }).then((next) => {
                if (!next) {
                    return ;
                }
                // 获取数据
                this.getData(() => {
                    this.ins.brand.checked(this.form.brand_id);
                });
            }).finally(() => {
                this.ins.loading.hide();
            })
        } ,

        initBrand () {
            let self = this;
            this.ins.brand = new Brand(this.$refs.brand.$el , {
                multiple: false ,
                checked (id) {
                    self.form.brand_id = id;
                } ,
                unchecked () {
                    self.form.brand_id = '';
                } ,
            });
        } ,

        // 获取数据
        check (data) {
            return {
                status: true ,
                field: '' ,
                msg: '' ,
            };
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
                this.pending.submit = true;
                this.ins.loading.show();
                this.ajax.submit = this.api[this.param.mode](this.form , (res , code) => {
                    this.error = {};
                    if (code != 200) {
                        this.initialState('loading' , 'submit' , 'submit');
                        if (code == 400) {
                            this.error = res;
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
                this.confirm('车系列表' , '/carSeries/list');
            }).finally(() => {
                this.initialState('loading' , 'submit' , 'submit');
            });
        } ,
    }
}