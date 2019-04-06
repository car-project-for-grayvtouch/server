export default {
    name: "v-article-type" ,
    data () {
        return {
            form: {
                pos: '' ,
                text: '' ,
                title: '' ,
                weight: 0 ,
            } ,
            api: announcementApi ,
            isRunning: false ,
            // 错误消息
            error: {} ,
            ins: {} ,
        };
    } ,
    mounted () {
        // 加载层
        this.ins.loading = new Loading(this.$refs.loading.$el , {
            status: 'hide' ,
            type: 'line-scale'
        });

        // 编辑器
        this.initialize();
    } ,
    methods: {
        initialize () {
            this.initEditor();
            // 检查时编辑
            if (this.param.mode == 'edit') {
                // 获取当前正在编辑的文章分类
                this.api.detail({
                    id: this.param.id
                } , (res) => {
                    if (res.code != 200) {
                        return this.$error(res.data);
                    }
                    let data = res.data;
                    this.form = data;
                    this.ins.editor.txt.html(this.form.text);
                });
            }
        } ,
        initEditor() {
            this.ins.editor = new wangEditor(this.$refs.editor);
            // this.ins.editor.customConfig.uploadImgShowBase64 = true;
            this.ins.editor.customConfig.uploadImgServer = topContext.imageApiForwangEditor;
            this.ins.editor.customConfig.uploadFileName = 'image';
            this.ins.editor.create();
        } ,
        check (data) {
            return {
                status: true ,
                field: '' ,
                msg: '' ,
            };
        } ,
        submit () {
            if (this.isRunning) {
                layer.alert('请求中...请耐心等待');
                return ;
            }
            let filter = this.check();
            if (!filter.status) {
                this.error[filter.field] = filter.msg;
                vScroll(filter.field);
                return ;
            }
            this.form.text = this.ins.editor.txt.html();
            this.isRunning = true;
            this.ins.loading.show();
            let self = this;
            this.api[this.param.mode](G.formData(this.form) , (res) => {
                this.isRunning = false;
                this.ins.loading.hide();
                if (res.code == 400) {
                    this.error = res.data;
                    vScroll(firstKey(res.data));
                    return ;
                }
                if (res.code == 450) {
                    // 特殊错误
                    this.$error(res.data);
                    return ;
                }
                this.$success('操作成功' , {
                    btn: ['继续' + (this.param.mode == 'edit' ? '编辑' : '添加') , '公告列表'] ,
                    btn1 () {
                        layer.closeAll();
                    } ,
                    btn2 () {
                        self.location('/announcement/list' , null , '_self');
                    }
                });
            });
        } ,
    }
}