export default {
    name: "v-brand" ,
    data () {
        return {
            form: {
                name: '' ,
                detection_pos_id: 0 ,
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
            api: detectionItemApi ,
            position: [] ,
            option: [
                {
                    key: 'normal' ,
                    value: '正常'
                } ,
                {
                    key: 'exception' ,
                    value: '异常'
                }
            ] ,
            preview: '' ,
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
                detectionPosApi.all((res , code) => {
                    if (code != 200) {
                        this.eNotice(res);
                        resolve(false);
                        return ;
                    }
                    this.position = res;
                    resolve(true);
                });
            }).then((next) => {
                return new Promise((resolve) => {
                    if (!next) {
                        resolve();
                        return ;
                    }
                    this.getData(() => {
                        this.setPreview(this.form.detection_pos_id);
                        if (this.param.mode == 'edit') {
                            this.option = G.jsonDecode(this.form.option);
                        }
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

        // 获取 option
        getOption () {
            this.form.option = G.jsonEncode(this.option);
        } ,

        setPreview (value) {
            let i = 0;
            let cur = null;
            for (; i < this.position.length; ++i)
            {
                cur = this.position[i];
                if (cur.id == value) {
                    if (this.ajax.module instanceof G.ajax) {
                        this.ajax.module.native('abort');
                    }
                    this.ajax.module = detectionModuleApi.detail(cur.detection_module_id , (res , code) => {
                        if (code != 200) {
                            this.eNotice(res);
                            return ;
                        }
                        this.preview = res.image;
                    });
                    return ;
                }
            }
            this.preview = '';
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
                this.getOption();
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
                this.confirm('检测项' , '/detectionItem/list');
            }).finally(() => {
                this.initialState('loading' , 'submit' , 'submit');
            });
        } ,
    }
}