export default {
    name: "v-brand" ,
    data () {
        return {
            form: {
                name: '' ,
                detection_group_id: 0 ,
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
            api: detectionPosApi ,
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
            new Promise((resolve) => {
                // 获取分组
                this.ins.loading.show();
                detectionGroupApi.all((res , code) => {
                    if (code != 200) {
                        this.eNotice(res);
                        resolve(false);
                        return ;
                    }
                    this.group = res;
                    resolve(true);
                });
            }).then((next) => {
                return new Promise((resolve) => {
                    if (!next) {
                        resolve();
                        return ;
                    }
                    this.getData(() => {
                        resolve();
                    });
                });
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
                this.confirm('检测位置' , '/detectionPos/list');
            }).finally(() => {
                this.initialState('loading' , 'submit' , 'submit');
            });
        } ,
    }
}