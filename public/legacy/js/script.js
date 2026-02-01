var repeat = 0;
var sec = 4000;



$(function () {
    $.scrollify({
        section: ".scroll",
        scrollbars: true,
        before: function () {},
        afterRender: function () {}
    });
});

var hr = function () {
    $('.rec').stop(true, true).css('width', '50%');
};

var reset_move1 = function () {
    $('.typo_challenge').css('top', 'inherit');
    $('.typo_opportunity').css('bottom', 'inherit');
    $('.typo_portfolio_1').css('left', 'inherit');
    $('.typo_portfolio_2').css('right', 'inherit');
};

var reset_move2 = function () {
    $('.typo_challenge').css('left', 'inherit');
    $('.typo_opportunity').css('right', 'inherit');
    $('.typo_portfolio_1').css('bottom', 'inherit');
    $('.typo_portfolio_2').css('top', 'inherit');
};

var reset_move3 = function () {
    $('.typo_challenge').css('bottom', 'inherit');
    $('.typo_opportunity').css('top', 'inherit');
    $('.typo_portfolio_1').css('right', 'inherit');
    $('.typo_portfolio_2').css('left', 'inherit');
};

var reset_move4 = function () {
    $('.typo_challenge').css('right', 'inherit');
    $('.typo_opportunity').css('left', 'inherit');
    $('.typo_portfolio_1').css('top', 'inherit');
    $('.typo_portfolio_2').css('bottom', 'inherit');
};



var rot = function () {
    if (repeat == 0) {
        $('.typo_challenge').stop(true, true).animate({
            bottom: '30'
        }, sec);
        $('.typo_opportunity').stop(true, true).animate({
            top: '30'
        }, sec);
        $('.typo_portfolio_1').stop(true, true).animate({
            right: '30'
        }, sec);
        $('.typo_portfolio_2').stop(true, true).animate({
            left: '30'
        }, sec);


        repeat = 1;
        reset_move1();
    } else if (repeat == 1) {
        $('.typo_challenge').stop(true, true).animate({
            right: '30'
        }, sec);
        $('.typo_opportunity').stop(true, true).animate({
            left: '30'
        }, sec);
        $('.typo_portfolio_1').stop(true, true).animate({
            top: '30'
        }, sec);
        $('.typo_portfolio_2').stop(true, true).animate({
            bottom: '30'
        }, sec);

        repeat = 2;
        reset_move2();
    } else if (repeat == 2) {
        $('.typo_challenge').stop(true, true).animate({
            top: '30'
        }, sec);
        $('.typo_opportunity').stop(true, true).animate({
            bottom: '30'
        }, sec);
        $('.typo_portfolio_1').stop(true, true).animate({
            left: '30'
        }, sec);
        $('.typo_portfolio_2').stop(true, true).animate({
            right: '30'
        }, sec);

        repeat = 3;
        reset_move3();
    } else if (repeat == 3) {
        $('.typo_challenge').stop(true, true).animate({
            left: '30'
        }, sec);
        $('.typo_opportunity').stop(true, true).animate({
            right: '30'
        }, sec);
        $('.typo_portfolio_1').stop(true, true).animate({
            bottom: '30'
        }, sec);
        $('.typo_portfolio_2').stop(true, true).animate({
            top: '30'
        }, sec);

        repeat = 0;
        reset_move4();
    }

};

setTimeout(function () {
    rot();
    hr();

}, 300);

