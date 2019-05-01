export default {
    name: "v-ss" ,
    data () {
        return {
            form: {
                weight: 0 ,
                hidden: 'n' ,
                p_id: '' ,
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
            api: articleTypeApi ,
            callback: {} ,
            type: [] ,
        };
    } ,
    mixins: [
        // 加载
        mixins.loading ,
        mixins.state ,
        mixins.form.get ,
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
            new Promise((resolve) => {
                this.pendingState('loading');
                articleTypeApi.list({} , (res , code) => {
                    resolve();
                    if (code != 200) {
                        this.eNotice(res);
                        return ;
                    }
                    this.type = res;
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
                this.confirm('分类列表' , '/articleType/list');
            }).finally(() => {
                this.initialState('loading' , 'submit' , 'submit');
            });
        } ,
    }
}