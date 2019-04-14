export default {
    name: "v-brand" ,
    data () {
        return {
            form: {
                name: '' ,
                letter: '' ,
                hot: 'n' ,
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
            api: serviceApi ,
            // 图片
            image: {} ,
        };
    } ,
    created () {

    } ,
    mounted () {
        this.initDom();
        this.initInstance();
        this.getData();
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

        // 获取数据
        check (data) {
            return {
                status: true ,
                field: '' ,
                msg: '' ,
            };
        } ,

        firstLetterEvent (e) {
            let tar = e.currentTarget;
            if (!this.form.name) {
                this.$tip('请先填写名称' , tar);
                return ;
            }
            this.form.letter = this.firstLetter(this.form.name);
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
                this.confirm('服务列表' , '/service/list');
            }).finally(() => {
                this.initialState('loading' , 'submit' , 'submit');
            });
        } ,
    }
}