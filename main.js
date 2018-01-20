$(window).on('load', function () {
    var $preloader = $('.preloader'),
        $loader   = $preloader.find('.loader');
    $loader.delay(500).fadeOut();
    $preloader.delay(500).fadeOut('slow');
});