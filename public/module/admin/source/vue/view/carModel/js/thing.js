export default {
    name: "v-car-model" ,
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
            },
            pending: {
                submit: null ,
            } ,
            data: {} ,
            callback: {
            } ,
            api: carModelApi ,
            navMenu: [
                {
                    id: 'base' ,
                    name: '基本信息'
                } ,
                {
                    id: 'configuration' ,
                    name: '车辆配置'
                }
            ] ,
            menu: 'base' ,
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
        mixins.form.get ,
        mixins.form.confirm ,
    ] ,
    methods: {
        initDom () {
            this.dom.options = G(this.$refs.options);
            this.dom.optionSet = this.dom.options.children(null , false , true);
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

        switchS (id) {
            this.dom.optionSet.each((dom) => {
                dom = G(dom);
                if (dom.data('id') == id) {
                    dom.removeClass('hide');
                } else {
                    dom.addClass('hide');
                }
            });
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
                this.confirm('车辆型号' , '/carModel/list');
            }).finally(() => {
                this.initialState('loading' , 'submit' , 'submit');
            });
        } ,
    }
}