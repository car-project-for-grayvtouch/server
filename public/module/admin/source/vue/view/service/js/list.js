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
            api: serviceApi ,
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
        // 获取层级数据
        mixins.list.get.normal ,
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
    } ,

}

