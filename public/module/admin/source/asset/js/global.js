import mixins from './mixinOption.js';

const host = '/';
const plugin = `${host}plugin/`;
const api = `${host}api/admin/`;
const imageApiForwangEditor = `${api}file/imageForWangEditor`;
const imageApi = `${api}file/image`;
const fileApi = `${api}file/file`;
const websocket = 'ws://47.252.80.36:9300';
const websocketHost = 'http://47.252.80.36:9301';
const websocketIdentifier = '0hGFPPyf7Bnu3gnF';

Object.assign(window , {
    mixins ,
    // 共享变量
    topContext: {
        host ,
        plugin ,
        api ,
        ins: {} ,
        // 动画时间
        animateDuration: 300 ,
        imageApiForwangEditor ,
        imageApi ,
        fileApi ,
        websocket ,
        websocketHost ,
        websocketIdentifier ,
    } ,
});