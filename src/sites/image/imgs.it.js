(function () {
    var handler = function () {
        $.openImage($('.centred_resized').src);
    };

    $.register({
        rule: {
            host: [
                /^imgs\.it$/,
                /^imgget\.net$/,
            ],
            path: /^\/img-.*\.html$/
        },
        ready: handler
    });
})();