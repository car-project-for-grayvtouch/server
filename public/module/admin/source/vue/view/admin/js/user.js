export default {
    name: "v-route" ,
    data () {
        return {
            form: {
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
            api: adminApi ,
            role: [] ,
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
        mixins.loading ,
    ] ,
    methods: {
        initDom () {
            this.dom.imageContainer = G(this.$refs['image-container']);
        } ,

        initInstance () {
            let self = this;

            // 小图上传
            this.ins.image = new UploadImage(this.dom.imageContainer.get(0) , {
                pluginUrl: topContext.plugin + 'UploadImage/' ,
                mode: 'override' ,
                url:  topContext.imageApi ,
                field: 'image' ,
                success (res , code) {
                    if (G.isFunction(self.callback.image)) {
                        self.callback.image({
                            res ,
                            code
                        });
                    }
                }
            });
        } ,

        initialize () {
            new Promise((resolve) => {
                // 获取角色
                this.ins.loading.show();
                this.ajax.all = roleApi.all((res , code) => {
                    resolve();
                    if (code != 200) {
                        this.$error(res);
                        return ;
                    }
                    this.role = res;
                });
                this.ins.loading.setArgs(this.ajax.all);
            }).then(() => {
                // 获取当前编辑对象
                if (this.param.mode != 'edit') {
                    return ;
                }
                return new Promise((resolve) => {
                    this.ajax.getData = this.api.detail(this.param.id , (res , code) => {
                        resolve();
                        if (code != 200) {
                            this.$error(res);
                            return ;
                        }
                        this.form = res;
                    });
                    this.ins.loading.setArgs(this.ajax.getData);
                });
            }).finally(() => {
                // 隐藏
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
            new Promise((resolve) => {
                // 上传基本数据
                this.ajax.submit = this.api[this.param.mode](this.form , (res , code) => {
                    if (code != 200) {
                        this.pending.submit = false;
                        this.ins.loading.hide();
                        if (code == 400) {
                            this.error = res;
                            vScroll(G.firstKey(res));
                            return ;
                        }
                        if (code == 460) {
                            // 特殊错误
                            this.$error(res);
                            return ;
                        }
                    }
                    this.form.id = res;
                    resolve();
                });
                this.ins.loading.setArgs(this.ajax.submit , 'submit');
            }).then(() => {
                // 上传用户头像
                return new Promise((resolve) => {
                    // 上传用户头像
                    if (this.ins.image.empty()) {
                        resolve();
                        return ;
                    }
                    this.callback.image = resolve;
                    this.ins.image.upload();
                });
            }).then((res) => {
                // 更新用户头像
                return new Promise((resolve) => {
                    if (G.isUndefined(res)) {
                        resolve();
                        return ;
                    }
                    if (res.code != 200) {
                        resolve();
                        this.eNotice(res.res);
                        return ;
                    }
                    res = res.res;
                    // 更新用户头像
                    this.api.image({
                        id: this.form.id ,
                        image: res.url ,
                    } , (res , code) => {
                        resolve();
                        if (code != 200) {
                            this.eNotice(res);
                            return ;
                        }
                    });
                });
            }).then(() => {
                // 提示成功
                this.$success('操作成功' , {
                    btn: ['继续' + (this.param.mode == 'edit' ? '编辑' : '添加') , '用户列表'] ,
                    btn1 (index) {
                        layer.close(index);
                    } ,
                    btn2 () {
                        self.location('/admin/list' , null , '_self');
                    }
                });
            }).finally(() => {
                // 更新状态
                this.pending.submit = false;
                this.ins.loading.hide();
            });
        } ,
    }
}