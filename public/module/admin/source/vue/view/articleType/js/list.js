export default {
    name: "v-list" ,
    data () {
        return {
            form: {
                id: '' ,
                name: '' ,
                order: '' ,
            } ,
            ins: {
                loading: null ,
            } ,
            pending: {
                del: null ,
            } ,
            ajax: {
                list: null ,
            } ,
            dom: {} ,
            api: articleTypeApi ,
            data: [] ,
            // 待删除的记录 id 列表
            idList: [] ,
            page: {
                page: 1 ,
                per_page: 20
            }

        };
    } ,

    // 注意 mixins 换入的顺序
    // 如果混入的顺序不对，将会报错
    mixins: [
        // 加载
        mixins.loading ,
        // 状态
        mixins.state ,
        // 获取层级数据
        mixins.list.get.floor ,
        // 数据过滤
        mixins.list.filter ,
        // 删除数据
        mixins.list.del ,
        // 分页数据
        mixins.list.page ,
    ] ,

    created () {

    } ,

    mounted () {
        // 获取相关的 dom
        this.initDom();
        // 初始化必须的相关实例
        this.initInstance();
        // 获取当前数据
        this.getData();
    } ,


    methods: {
        // 初始化 dom
        initDom () {
            this.dom.tbody = G(this.$refs.tbody);
        } ,

        // 初始化必须的实例
        initInstance () {

        } ,

        // 删除选中项
        del (idList , fn) {
            if (idList.length < 1) {
                this.$error('您尚未选择待删除的项！');
                return ;
            }
            let del = () => {
                if (this.pending.del) {
                    this.$info('请求中...请耐心等待');
                    return ;
                }
                this.pendingState('loading' , 'del');
                this.ajax.del = this.api[G.isString(this.delApi) ? this.delApi : 'del']({
                    id_list: G.jsonEncode(idList)
                } , (res , code) => {
                    this.initialState('loading' , 'del' , 'del');
                    if (code != 200) {
                        this.$error(res);
                        return ;
                    }
                    this.$success('删除成功');
                    this.getData();
                    if (G.isFunction(fn)) {
                        fn();
                    }
                });
                this.ins.loading.setArgs(this.ajax.del , 'del');
            };
            this.$info('如果删除，将会连同子类一起删除，你确定删除吗？' , {
                btn: ['确定' , '取消'] ,
                btn1 (index) {
                    layer.close(index);
                    del();
                } ,
                btn2 (index) {
                    layer.close(index);
                } ,
            });
        } ,
    } ,

};