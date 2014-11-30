(function () {
    var handler = function () {
        $.openImage($('.centred_resized').src);
    };

    $.register({
        rule: {
            host: [
                /^imgs\.it$/,
                /^imgget\.net$/,
                /^imageontime\.org$/,
            ],
            path: /^\/img-.*\.html$/
        },
        ready: handler
    });
})();