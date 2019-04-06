export default {
    name: "v-article-type" ,
    data () {
        return {
            form: {
                p_id: 0 ,
                weight: 0 ,
                hidden: 'n'
            } ,
            type: [] ,
            field: {
                id: 'id' ,
                p_id: 'p_id'
            } ,
            isRunning: false ,
            // 错误消息
            error: {} ,
            ins: {} ,
        };
    } ,
    created () {
        // 获取所有文章分类
        articleTypeApi.all((res) => {
            if (res.code != 200) {
                this.$msg(res.data);
                return ;
            }
            let data = res.data;
            // 数据处理
            this.type = G.t.childrens(0 , data , this.field , false , true);
        });
        // 检查时编辑
        if (this.param.mode == 'edit') {
            // 获取当前正在编辑的文章分类
            articleTypeApi.detail({
                id: this.param.id
            } , (res) => {
                if (res.code != 200) {
                    return this.$Message.error(res.data);
                }
                let data = res.data;
                this.form = data;
            });
        }
    } ,
    mounted () {
        // 加载层
        this.ins.loading = new Loading(this.$refs.loading.$el , {
            status: 'hide' ,
            type: 'line-scale'
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
            articleTypeApi[this.param.mode](this.form , (res) => {
                this.isRunning = false;
                this.ins.loading.hide();
                if (res.code == 400) {
                    this.error = res.data;
                    vScroll(firstKey(res.data));
                    return ;
                }
                if (res.code == 450) {
                    // 特殊错误
                    this.$Message.error(res.data);
                    return ;
                }
                layer.alert('操作成功' , {
                    btn: ['继续' + (this.param.mode == 'edit' ? '编辑' : '添加') , '分类列表'] ,
                    btn1 () {
                        layer.closeAll();
                    } ,
                    btn2 () {
                        self.location('/articleType/list' , null , '_self');
                    }
                });
            });
        } ,
    }
}