$.register({
    rule: 'http://imgs.it/img-*.html',
    ready: function () {
        $.openImage($('.centred_resized').src);
    },
});