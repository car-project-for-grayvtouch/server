export default {
    name: "v-image" ,
    data () {
        return {
            form: {
                article_type_id: '' ,
                hidden: 'n' ,
                is_link: 'n' ,
                weight: 0 ,
            } ,
            field: {
                id: 'id' ,
                p_id: 'p_id'
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
            api: articleApi ,
            callback: {
                image: null
            } ,
            image: {} ,
            type: [] ,
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
        this.getData();
    } ,
    methods: {
        initDom () {

        } ,

        initInstance () {
            this.ins.editor = new wangEditor(this.$refs.editor);
            // this.ins.editor.customConfig.uploadImgShowBase64 = true;
            this.ins.editor.customConfig.uploadImgServer = topContext.imageApiForwangEditor;
            this.ins.editor.customConfig.uploadFileName = 'image';
            this.ins.editor.create();
        } ,

        getData () {
            new Promise((resolve) => {
                this.pendingState('loading');
                // 获取文章分类
                articleTypeApi.list({} , (res , code) => {
                    resolve();
                    if (code != 200) {
                        this.eNotice(res);
                        return;
                    }
                    this.type = res;
                });
            }).then(() => {
                // 获取数据
                return new Promise((resolve) => {
                    // 检查时编辑
                    if (this.param.mode == 'edit') {
                        // 获取当前正在编辑的文章分类
                        this.api.detail(this.param.id , (res , code) => {
                            resolve();
                            if (code != 200) {
                                this.eNotice(res);
                                return ;
                            }
                            let data = res;
                            let content = data.content ? data.content.content : '';
                            delete data.content;
                            this.form = data;
                            this.ins.editor.txt.html(content);
                        });
                        return ;
                    }
                    resolve();
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
            return new Promise((resolve) => {
                // 上传基本数据
                if (this.pending.submit) {
                    this.$info('请求中...请耐心等待');
                    return ;
                }
                this.pendingState('loading' , 'submit');
                // 设置内容
                this.form.content = this.ins.editor.txt.html();
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
                        res = res;
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
                        image: this.image.url
                    } , (res , code) => {
                        if (code != 200) {
                            this.eNotice(res);
                        }
                        resolve();
                    });
                });
            }).then(() => {
                this.confirm('文章列表' , '/article/list');
            }).finally(() => {
                this.initialState('loading' , 'submit' , 'submit');
            });
        } ,
    }
}