export default {
    name: "v-route" ,
    data () {
        return {
            form: {
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
            api: roleApi ,
            routes: [] ,
            value: {} ,
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
        mixins.loading ,
        mixins.form.get ,
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

        submit () {
            new Promise((resolve) => {
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
                let self = this;

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
                // 提示成功
                this.$success('操作成功' , {
                    btn: ['继续' + (this.param.mode == 'edit' ? '编辑' : '添加') , '角色列表'] ,
                    btn1 (index) {
                        layer.close(index);
                    } ,
                    btn2 () {
                        self.location('/role/list' , null , '_self');
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