$(document).ready(function () {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $.fn.extend({
        animateCss: function (animationName) {

            $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);

            });
        },
        closeanimateCss: function (animationName) {
            $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName).toggleClass("d-none ");
            });
        },
        accordion: function (duration) {

            var accord = $(this).find('.collapse');

            if (accord.hasClass('show')) {
                accord.slideUp(duration, function () {
                    accord.removeClass('show');
                });

            } else {
                accord.parent().each(function () {
                    $('.collapse').slideUp(duration, function () {
                        $(this).removeClass('show');
                    });
                    accord.slideDown(duration);
                    accord.addClass('show');

                });

            }
            return false;

        }
    });



    $('.menu-item').click(function () {
        $(this).accordion(275);
    });

    $('.menu-item2').click(function () {
        $(this).accordion(275);
    });

    $('#show-catalog').click(function () {
        $('#hide-catalog, #show-catalog, #catalog').toggleClass('d-none ');
        $('#catalog').animateCss('slideInUp');
    });

    $('#hide-catalog').click(function () {
        $('#hide-catalog, #show-catalog').toggleClass('d-none ');
        $('#catalog').closeanimateCss('slideOutDown', function () {
            $(this).toggleClass("d-none");
        });

    });

});
