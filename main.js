$(window).on('load', function () {
    var $preloader = $('.preloader'),
        $loader = $preloader.find('.loader');
    $loader.delay(500).fadeOut();
    $preloader.delay(500).fadeOut('slow');

    text();
    title();
    link();
});

const skin = ['🏻', '🏼', '🏽', '🏾', '🏿'];
const earth = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];

function link() {
    var s = '',
        i, m;

    for (i = 0; i < 10; i++) {
        m = Math.floor(skin.length * ((Math.sin((Date.now() / 100) + i) + 1) / 2));
        s += '🖕' + skin[m];
    }

    location.replace(`#${s}`);

    setTimeout(link, 50);
}

function title() {
    $('title').text('slow.im ' + earth[Math.floor((Date.now() / 100) % earth.length)]);

    setTimeout(title, 50);
}

function text() {
    const $logoWrapper = $('.logo-wrapper');
    let height = $logoWrapper.height(),
        number = 0,
        delay = 0;
    const minusHeight = height / 20 - .1;

    $logoWrapper.css({
        height: minusHeight,
        top: minusHeight,
    }).find('.text').css({
        transform: 'translateY(' + (-minusHeight) + 'px)',
        color: getRandomColor,
    });

    number = minusHeight;

    for (let i = 1; i < 19; i++) {
        $('.logo-wrapper').eq(0).clone().appendTo('.container').css({
            height: minusHeight,
            top: number += minusHeight,
            'animation-delay': (delay += .05) + 's'
        }).find('.text').css({
            transform: 'translateY(' + (-number) + 'px)',
            color: getRandomColor,
        });
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
