
// 强制退出
function forceLogout () {
    G.s.del('token');
    router.push({name: 'login'});
}

// 检查用户登录状态
function isLogin () {
    return G.s.exists('token');
}

// 指定 id 滚动到指定位置
// 注意这是特意为当前项目而写的！
// 如果换过一个容器元素就会出现错误！
// 请仅在当前项目使用
function vScroll (id , fn) {
    let dom = G('#' + id);
    let container = G(window);
    let val = dom.getDocOffsetVal('top');
    let extra = 80 + 5 + 60;
    val -= extra;
    G.scrollTo(topContext.animateDuration, 'y', 0, val, fn);
}

function getClass (v) {
    return v ? 'error' : '';
}

function $success (msg , option = {}) {
    option.icon = 1;
    layer.alert(msg , option);
}

// 错误提示
function $error (msg , option = {}) {
    option.icon = 2;
    layer.alert(msg , option);
}

// 消息提醒
function $msg (msg , option = {}) {
    layer.msg(msg , option);
}

function $info (msg , option = {}) {
    option.icon = 7;
    layer.alert(msg , option);
}

// 发生了未知错误
function $unknow() {
    return $error('发生了未知错误');
}

// 获取拼音首字母
function firstLetter(str) {
    let res = pinyinUtil.getFirstLetter(str);
    return res.length > 0 ?
        res[0] :
        '';
}
function $tip(msg , dom) {
    return layer.tips(msg , dom , {
        tips: [1, '#3595CC'],
        time: 4 * 1000
    });
}

function $close(index)
{
    layer.close(index);
}

function $closeAll()
{
    layer.closeAll();
}

Object.assign(window , {
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
});