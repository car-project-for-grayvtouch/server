export default {
    name: "v-list" ,
    data () {
        return {
            form: {
                id: '' ,
                p_id: '' ,
                name: ''
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
            api: routeApi ,
            data: [] ,
            // 待删除的记录 id 列表
            idList: [] ,
            all: [] ,

        };
    } ,

    // 注意 mixins 换入的顺序
    // 如果混入的顺序不对，将会报错
    mixins: [
        // 加载
        mixins.loading ,
        // 获取层级数据
        mixins.list.get.floor ,
        // 数据过滤
        mixins.list.filter ,
        // 删除数据
        mixins.list.del ,
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
        // 获取所有路由
        this.getAll();
    } ,


    methods: {
        // 初始化 dom
        initDom () {
            this.dom.tbody = G(this.$refs.tbody);
        } ,

        // 初始化必须的实例
        initInstance () {

        } ,

        // 路由分类
        getAll () {
            this.ins.loading.show();
            this.ajax.list = this.api.list(null , (res , code) => {
                this.ins.loading.hide();
                if (code != 200) {
                    this.$error(res);
                    return ;
                }
                this.all = res;
            });
            this.ins.loading.setArgs(this.ajax.list);
        } ,
    } ,

}

