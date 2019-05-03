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
            api: stagingBuyApplicationApi ,
            data: [] ,
            // 待删除的记录 id 列表
            idList: [] ,

            page: {
                page: 1 ,
                per_page: 20
            } ,
            status: {
                wait: '等待处理' ,
                ing: '处理中' ,
                ignore: '已忽略' ,
                completed: '已完成' ,
            } ,

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

        // 生成选项
        genOption (resolve) {
            let keys    = Object.keys(this.status);
            let values  = Object.values(this.status);
            let option = {
                btn: values ,
            };
            values.forEach((v,k) => {
                option['btn' + (k + 1)] = (index) => {
                    layer.close(index);
                    resolve(keys[k]);
                };
            });
            return option;
        } ,

        // 更新选中项状态
        updateStatusForSelected () {
            new Promise((resolve , reject) => {
                if (this.idList.length < 1) {
                    this.$info('请选择项');
                    return ;
                }
                resolve();
            }).then(() => {
                return new Promise((resolve , reject) => {
                    this.$info('你确定要批量修改状态吗？' , {
                        btn: ['确定' , '取消'] ,
                        btn1 (index) {
                            layer.close(index);
                            resolve();
                        },
                        btn2 (index) {
                            layer.close(index);
                        }
                    });
                });
            }).then((index) => {
                layer.close(index);
                return new Promise((resolve) => {
                    this.$info('请选择状态' , this.genOption(resolve));
                });
            }).then((status) => {
                this.updateStatus(this.idList , status);
            });
        } ,

        updateStatusForTar (id) {
            new Promise((resolve) => {
                this.$info('请选择状态' , this.genOption(resolve));
            }).then((status) => {
                this.updateStatus([id] , status);
            });
        } ,

        updateStatus (idList , status) {
            new Promise((resolve) => {
                if (this.pending.updateStatus) {
                    this.$info('请求中...请耐心等待');
                    return ;
                }
                this.pendingState('loading' , 'updateStatus');
                this.ajax.updateStatus = this.api.updateStatus({
                    id_list: G.jsonEncode(idList) ,
                    status ,
                } , (res , code) => {
                    if (code != 200) {
                        this.eNotice(res);
                        resolve(false);
                        return ;
                    }
                    resolve(true);
                });
                this.ins.loading.setArgs(this.ajax.updateStatus , 'updateStatus');
            }).then((next) => {
                return new Promise((resolve) => {
                    resolve();
                    if (!next) {
                        return ;
                    }
                    this.getData(() => {
                        resolve();
                    });
                });
            }).finally(() => {
                this.initialState('loading' , 'updateStatus' , 'updateStatus')
            });
        } ,
    } ,

}

