!(function(doc,win){
    var docHtml = doc.documentElement;
    var recalc = function(){
        var clientW = docHtml.clientWidth;
        if(!clientW)return;
        // 修改成50px  设置html中font-size:50px;
        docHtml.style.fontSize = 100*(clientW/750) + 'px'; 
    }

    window.addEventListener('resize',recalc,false);

})(document,window)


!(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);