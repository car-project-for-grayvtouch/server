export default {
    store ,
    router ,
    methods: {
        forceLogout ,
        isLogin ,
        vScroll ,
        getClass ,
        $success ,
        $error ,
        $msg ,
        $info ,
        $unknow ,
        // 通知
        notice (type , title , desc = '') {
            this.$Notice[type]({
                title ,
                desc ,
            });
        } ,
        sNotice (title , desc = '') {
            this.notice('success' , title , desc);
        } ,

        wNotice (title , desc = '') {
            this.notice('warning' , title , desc);
        } ,

        iNotice (title , desc = '') {
            this.notice('info' , title , desc);
        } ,

        eNotice (title , desc = '') {
            this.notice('error' , title , desc);
        } ,
    } ,
    components: {

    }
};