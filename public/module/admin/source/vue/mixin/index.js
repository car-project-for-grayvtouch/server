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
        $tip ,
        $unknow ,
        firstLetter ,
        determine ,
        // 通知
        notice (type , title , desc = '' , duration , onClose) {
            this.$Notice[type]({
                title ,
                desc ,
                duration , 
                onClose ,
            });
        } ,
        sNotice (title , desc = '' , duration , close) {
            this.notice('success' , title , desc , duration , close);
        } ,

        wNotice (title , desc = '' , duration , close) {
            this.notice('warning' , title , desc , duration , close);
        } ,

        iNotice (title , desc = '' , duration , close) {
            this.notice('info' , title , desc , duration , close);
        } ,

        eNotice (title , desc = '' , duration , close) {
            this.notice('error' , title , desc , duration , close);
        } ,
        toLink (url) {
            window.open(url , '_blank');
        } ,
    } ,
    components: {

    }
};