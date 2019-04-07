export default {
    name: "v-route" ,
    data () {
        return {
            form: {
                method: 'NONE' ,
                type: 'view' ,
                p_id: 0 ,
                weight: 0 ,
                enable: 'y' ,
                hidden: 'n' ,
                menu: 'n' ,
            } ,
            error: {} ,
            ajax: {
                get: null ,
                submit: null ,
            } ,
            dom: {} ,
            ins: {
                loading: null ,
                small: null ,
                big: null ,
            },
            pending: {
                submit: null ,
            } ,
            data: {} ,
            callback: {
                image: null
            } ,
            api: routeApi ,
            routes: [] ,
            value: {} ,
        };
    } ,
    created () {

    } ,
    mounted () {
        this.initDom();
        this.initInstance();
        if (this.param.mode == 'edit') {
            new Promise((resolve , reject) => {
                this.getRoute(resolve);
            }).then(() => {
                this.getData();
            });
        } else {
            this.getRoute();
        }
    } ,
    mixins: [
        mixins.loading ,
        mixins.state ,
    ] ,
    methods: {
        initDom () {

        } ,

        initInstance () {
            let self = this;

            // 小图上传
            this.ins.small = new UploadImage(this.$refs['small-image-container'] , {
                pluginUrl: topContext.plugin + 'UploadImage/' ,
                mode: 'override' ,
                url:  topContext.imageApi ,
                field: 'image' ,
                success (res , code) {
                    if (G.isFunction(self.callback.small)) {
                        self.callback.small(res , code);
                    }
                }
            });

            // 大图上传
            this.ins.big = new UploadImage(this.$refs['big-image-container'] , {
                pluginUrl: topContext.plugin + 'UploadImage/' ,
                mode: 'override' ,
                url:  topContext.imageApi ,
                field: 'image' ,
                success (res , code) {
                    if (G.isFunction(self.callback.big)) {
                        self.callback.big(res , code);
                    }
                }
            });
        } ,

        getData () {
            this.ins.loading.show();
            this.ajax.getData = this.api.detail(this.param.id , (res , code) => {
                this.ins.loading.hide();
                if (code != 200) {
                    this.$error(res);
                    return ;
                }
                this.form = res;
            });
            this.ins.loading.setArgs(this.ajax.getData);
        } ,

        getRoute (fn) {
            this.api.list(null , (res , code) => {
                if (code != 200) {
                    this.$msg(res);
                    return;
                }
                this.routes = res;
                if (G.isFunction(fn)) {
                    fn();
                }
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
            if (this.pending.submit) {
                layer.alert('请求中...请耐心等待');
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
            let self = this;
            new Promise((resolve , reject) => {
                // 上传基本数据
                this.ajax.submit = this.api[this.param.mode](this.form , (res , code) => {
                    this.error = {};
                    if (code != 200) {
                        this.initialState('loading' , 'submit' , 'submit');
                        if (code == 400) {
                            this.error = res;
                            vScroll(G.firstKey(res));
                            return ;
                        }
                        // 特殊错误
                        this.$error(res);
                        return ;
                    }
                    this.form.id = res;
                    resolve();
                });
                this.ins.loading.setArgs(this.ajax.submit , 'submit');
            }).then(() => {
                // 上传小图片
                return new Promise((resolve) => {
                    if (this.ins.small.empty()) {
                        resolve(false);
                        return ;
                    }
                    // 上传图片
                    this.callback.small = (res , code) => {
                        if (code != 200) {
                            this.eNotice(res);
                            resolve(false);
                            return ;
                        }
                        this.value.small = res;
                        resolve(true);
                    };
                    this.ins.small.upload();
                });
            }).then((next) => {
                // 更新小图片
                return new Promise((resolve) => {
                    if (!next) {
                        resolve();
                        return ;
                    }
                    // 更新
                    this.api.image({
                        id: this.form.id ,
                        image: this.value.small.url ,
                        type: 'small' ,
                    } , (res , code) => {
                        if (code != 200) {
                            this.eNotice(res);
                        }
                        resolve();
                    });
                });
            }).then(() => {
                // 上传大图片
                return new Promise((resolve , reject) => {
                    if (this.ins.big.empty()) {
                        resolve(false);
                        return ;
                    }
                    // 上传图片
                    this.callback.big = (res , code) => {
                        if (code != 200) {
                            this.eNotice(res);
                            resolve(false);
                            return ;
                        }
                        this.value.big = res;
                        resolve(true);
                    };
                    this.ins.big.upload();
                });
            }).then((next) => {
                // 更新大图片
                return new Promise((resolve) => {
                    if (!next) {
                        resolve();
                        return ;
                    }
                    // 更新
                    this.api.image({
                        id: this.form.id ,
                        image: this.value.big.url ,
                        type: 'big' ,
                    } , (res , code) => {
                        if (code != 200) {
                            this.eNotice(res);
                        }
                        resolve();
                    });
                });
            }).then(() => {
                // 提示成功
                this.$success('操作成功' , {
                    btn: ['继续' + (this.param.mode == 'edit' ? '编辑' : '添加') , '路由列表'] ,
                    btn1 (index) {
                        layer.close(index);
                    } ,
                    btn2 () {
                        self.location('/route/list' , null , '_self');
                    }
                });
            }).finally(() => {
                // 更新状态
                this.initialState('loading' , 'submit' , 'submit');
            });
        } ,
    }
}