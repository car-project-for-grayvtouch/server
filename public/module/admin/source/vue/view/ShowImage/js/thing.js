export default {
    name: "v-image" ,
    data () {
        return {
            form: {
                weight: 0 ,
            } ,
            // 错误消息
            error: {} ,
            ins: {} ,
            dom: {} ,
            ajax: {
                submit: null ,
            } ,
            pending: {
                submit: false ,
            } ,
            api: showImageApi ,
            callback: {
                image: null
            } ,
            image: {} ,
            platform: [] ,
        };
    } ,
    mixins: [
        // 加载
        mixins.loading ,
        mixins.state ,
        mixins.form.get ,
        mixins.form.image ,
        mixins.form.confirm ,

    ] ,
    mounted () {
        this.initDom();
        this.initInstance();
        this.initialize();
    } ,
    methods: {
        initDom () {

        } ,

        initInstance () {

        } ,

        initialize () {
            return new Promise((resolve , reject) => {
                this.pendingState('loading');
                platformApi.all((res , code) => {
                    resolve();
                    if (code != 200) {
                        this.eNotice(res);
                        return ;
                    }
                    this.platform = res;
                });
            }).then(() => {
                return new Promise((resolve) => {
                    this.getData(() => {
                        resolve();
                    });
                });
            }).finally(() => {
                this.initialState('loading');
            });
        } ,

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
                this.pendingState('loading' , 'submit');
                let self = this;
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
                return new Promise((resolve) => {
                    if (this.ins.image.empty()) {
                        resolve(false);
                        return ;
                    }
                    // 上传图片
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
                // 更新图片
                return new Promise((resolve) => {
                    if (!next) {
                        resolve();
                        return ;
                    }
                    this.api.image({
                        id: this.form.id ,
                        ...this.image
                    } , (res , code) => {
                        if (code != 200) {
                            this.eNotice(res);
                        }
                        resolve();
                    });
                });
            }).then(() => {
                this.confirm('图片列表' , '/showImage/list');
            }).finally(() => {
                this.initialState('loading' , 'submit' , 'submit');
            });
        } ,
    }
}