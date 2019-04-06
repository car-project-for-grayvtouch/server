export default {
    name: "v-priv" ,
    data () {
        return {
            // 展开|收缩
            expand: true ,
            data: [] ,
            // 当前角色权限
            priv: [] ,
            // 路由列表
            routes: [] ,
            idList: [] ,
            ins: {
                tree: null ,
            } ,
            ajax: {
                getData: null ,
                submit: null ,
            } ,
            pending: {
                submit: null ,
            } ,
            api: roleApi ,
        };
    } ,

    mixins: [
        mixins.loading ,
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
            this.ins.tree = this.$refs.tree;
        } ,

        getData () {
            new Promise((resolve) => {
                this.ins.loading.show();
                this.ajax.getData = this.api.info(this.param.id , (res , code) => {
                    resolve();
                    if (code != 200) {
                        this.$error(res);
                        return ;
                    }
                    this.priv = res.priv;
                    this.handle(res.route);
                    this.routes = res.route;
                });
                this.ins.loading.setArgs(this.ajax.getData);
            }).finally(() => {
                this.ins.loading.hide();
            });
        } ,

        handle (data) {
            for (let i = 0; i < data.length; ++i)
            {
                let cur = data[i];
                cur.title = cur.name;
                cur.checked = this.isSelected(cur.id);
                cur.expand = this.expand;
                if (cur.children.length > 0) {
                    this.handle(cur.children);
                }
            }
        } ,

        // 是否选中
        isSelected (id) {
            for (let i = 0; i < this.priv.length; ++i)
            {
                let cur = this.priv[i];
                if (id == cur.id) {
                    return true;
                }
            }
            return false;
        } ,

        // 获取选中项
        getSelected () {
            let nodes = this.ins.tree.getCheckedNodes();
            let idList = [];
            for (let i = 0; i < nodes.length; ++i)
            {
                let cur = nodes[i];
                idList.push(cur.id);
            }
            return idList;
        } ,

        submit () {
            if (this.pending.submit) {
                return this.$info('请求中...请耐心等待');
            }
            let self = this;
            new Promise((resolve) => {
                this.pending.submit = true;
                this.ins.loading.show();
                this.ajax.submit = this.api.auth({
                    id: this.param.id ,
                    route: G.jsonEncode(this.getSelected())
                } , (res , code) => {
                    if (code != 200) {
                        resolve(false);
                        this.$error(res);
                        return ;
                    }
                    resolve(true);
                });
                this.ins.loading.setArgs(this.ajax.submit , 'submit');
            }).then((next) => {
                if (!next) {
                    return ;
                }
                // 提示成功
                this.$success('操作成功' , {
                    btn: ['继续分配' , '角色列表'] ,
                    btn1 (index) {
                        layer.close(index);
                    } ,
                    btn2 () {
                        self.location('/role/list' , null , '_self');
                    }
                });
            }).finally(() => {
                this.pending.submit = false;
                this.ins.loading.hide();
            });
        } ,
    } ,
}