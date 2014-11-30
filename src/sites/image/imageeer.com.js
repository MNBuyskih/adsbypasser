(function () {
    'use strict';

    $.register({
        rule: {
            host: [
                /^imageeer\.com$/,
            ],
        },
        ready: function () {
            var i = $.$('img.pic');
            if (!i) {
                // first stage
                i = $('form');
                i.submit();
                return;
            }
            $.openImage(i.src);
        }
    });
})();