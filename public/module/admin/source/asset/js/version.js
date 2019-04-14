let key = '__version_tip_count__3';
let count = G.s.get(key);
if (G.isNull(count)) {
    count = 1;
}
count = parseInt(count);
if (isLogin()) {
    if (false) {
        // 提示版本更新
        layer.alert(`
        <h4 style='font-weight:bold; text-align: center;margin-bottom: 5px;'>版本升级 1.0.3 -> 1.0.4</h4>
        <ol style='margin-bottom: 5px;'>
            <li>1. 优化页面体验</li>
            <li>2. 优化加载层</li>
        </ol>
        <p style='font-size: 12px;color: #555;'>该提示会在用户点击&nbsp;<b style='color: black;'>关闭按钮</b>&nbsp;两次后自动关闭。</p>
    ` , {
            btn: ['关闭'] ,
            btn1 (index) {
                count++;
                G.s.set(key , count);
                layer.close(index);
            } ,
            closeBtn: false
        });
    }
}
