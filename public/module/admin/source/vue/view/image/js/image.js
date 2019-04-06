export default {
    name: "v-image" ,
    data () {
        return {
            form: {
                weight: 0 ,
            } ,
            isRunning: false ,
            error: {} ,
            ins: {} ,
            callback: {
                image: null
            } ,
            api: imageApi
        };
    } ,
    created () {
        // 检查时编辑
        if (this.param.mode == 'edit') {
            // 获取当前正在编辑的文章分类
            this.api.detail({
                id: this.param.id
            } , (res) => {
                if (res.code != 200) {
                    return this.$msg(res.data);
                }
                let data = res.data;
                this.form = data;
            });
        }
    } ,
    mounted () {
        let self = this;
        // 加载层
        this.ins.loading = new Loading(this.$refs.loading.$el , {
            status: 'hide' ,
            type: 'line-scale'
        });

        // 图片上传
        this.ins.image = new UploadImage(this.$refs['image-container'] , {
            pluginUrl: topContext.plugin + 'UploadImage/' ,
            mode: 'override' ,
            url:  `${topContext.api}Image/save` ,
            field: 'image' ,
            success (res) {
                if (G.isFunction(self.callback.image)) {
                    self.callback.image(res);
                }
            }
        });
    } ,
    methods: {
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
            this.isRunning = true;
            this.ins.loading.show();
            let self = this;
            new Promise((resolve , reject) => {
                // 上传基本数据
                this.api[this.param.mode](this.form , (res) => {
                    if (res.code != 200) {
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
                    }
                    this.form.id = res.data;
                    resolve();
                });
            }).then(() => {
                // 上传图片
                return new Promise((resolve , reject) => {
                    if (this.ins.image.empty()) {
                        resolve();
                        return ;
                    }
                    this.ins.image.upload();
                    // 上传图片
                    this.callback.image = resolve;
                });
            }).then((res) => {
                // 更新图片
                return new Promise((resolve) => {
                    if (G.isUndefined(res)) {
                        resolve();
                        return ;
                    }
                    if (res.code != 200) {
                        this.$msg(res.data);
                        resolve();
                    }
                    let data = res.data;
                    // 更新
                    this.api.saveImage({
                        id: this.form.id ,
                        ...data
                    } , resolve);
                });
            }).then(() => {
                // 提示成功
                this.$success('操作成功' , {
                    btn: ['继续' + (this.param.mode == 'edit' ? '编辑' : '添加') , '图片列表'] ,
                    btn1 () {
                        layer.closeAll();
                    } ,
                    btn2 () {
                        self.location('/image/list' , null , '_self');
                    }
                });
            }).finally(() => {
                // 更新状态
                this.isRunning = false;
                this.ins.loading.hide();
            });
        } ,
    }
}