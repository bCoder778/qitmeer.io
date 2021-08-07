$(document).ready(function () {
    var clientWidth = document.body.clientWidth;

    $(window).scroll(function (e) {
        var scrollTop = document.documentElement.scrollTop;

        var clientHeight = $('#banner').height();

        if (scrollTop > (clientWidth > 991 ? clientHeight : 0)) {
            $('#header').removeClass('alt').addClass('animate');
        }
        else {
            $('#header').addClass('alt').removeClass('mobile animate')
        }
        var window_height = document.documentElement.clientHeight;
        var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var animate = document.getElementsByClassName('animate');
        for (var k = 0; k < animate.length; k++) {
            if (_scrollTop >= getOffsetTop(animate[k]) - window_height && _scrollTop <= getOffsetTop(animate[k])) {
                animate[k].style.animationName = animate[k].dataset.animate.split(',')[0];
                animate[k].style.animationDuration = animate[k].dataset.animate.split(',')[1];
                animate[k].style.animationDelay = animate[k].dataset.animate.split(',')[2];
            }
        }
        if (scrollTop > 0 && clientWidth <= 767) {

            $('#header').addClass('mobile');
        }

    })

    function getOffsetTop(ele) {
        var rtn = ele.offsetTop;
        var o = ele.offsetParent;
        while (o != null) {
            rtn += o.offsetTop;
            o = o.offsetParent;
        }
        return rtn;
    }

    var divTyping = document.getElementById('text'),
        i = 0,
        timer = 0,
        str = 'Cutting Edge BlockDAG Based Next Generation Public Chain';


    function typing() {
        if (i <= str.length) {

            divTyping.innerHTML = str.slice(0, i++) + '_'
            timer = setTimeout(typing, 150)
        }
        else {
            divTyping.innerHTML = str;
            clearTimeout(timer)
        }
    }
    typing();
});


