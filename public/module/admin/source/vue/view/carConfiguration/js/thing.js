export default {
    name: "v-brand" ,
    data () {
        return {
            form: {
                name: '' ,
                car_configuration_group_id: '' ,
                desc: '' ,
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
            callback: {
                image: null
            } ,
            api: carConfigurationApi ,
            // 图片
            image: {} ,
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
        mixins.form.image ,
        mixins.form.get ,
        mixins.form.confirm ,
    ] ,
    methods: {
        initDom () {

        } ,

        initInstance () {

        } ,

        initialize () {
            new Promise((resolve) => {
                this.ins.loading.show();
                carConfigurationGroupApi.all((res , code) => {
                    if (code != 200) {
                        resolve(false);
                        this.eNotice(res);
                        return ;
                    }
                    this.group = res;
                    this.$nextTick(() => {
                        resolve(true);
                    });
                });
            }).then(() => {
                this.getData();
            }).finally(() => {
                this.ins.loading.hide();
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
                // 上传图片
                return new Promise((resolve) => {
                    if (this.ins.image.empty()) {
                        resolve(false);
                        return ;
                    }
                    this.callback.image = (res , code) => {
                        if (code != 200) {
                            this.eNotice(res);
                            resolve(false);
                            return ;
                        }
                        this.image = res;
                        resolve(true);
                    };
                    this.ins.image.upload();
                });
            }).then((next) => {
                // 更新品牌 logo
                return new Promise((resolve) => {
                    if (!next) {
                        resolve(true);
                        return ;
                    }
                    this.api.image({
                        id: this.form.id ,
                        image: this.image.url ,
                    } , (res , code) => {
                        resolve();
                        if (code != 200) {
                            this.eNotice(res);
                            return ;
                        }
                    });
                });
            }).then(() => {
                this.confirm('车辆配置' , '/carConfiguration/list');
            }).finally(() => {
                this.initialState('loading' , 'submit' , 'submit');
            });
        } ,
    }
}