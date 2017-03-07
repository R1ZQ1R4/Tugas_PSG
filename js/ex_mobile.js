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


    $('#burger-menu').click(function () {
        $('#geser').toggleClass('hide-menu-right-50');
        $('.dim-background, #menu-side-right').toggleClass("d-none ");
        $('.dim-background').animateCss('fadeIn');

        $('#menu-side-right').animateCss('slideInRight');

        //        $('#menu-side-right').toggleClass('hide-menu-right-100 d-none');
    });

    $('#close-menu').click(function () {
        $('#geser').toggleClass('hide-menu-right-50');
        //        $('.dim-background').toggleClass("d-none ");
        $('.dim-background').closeanimateCss('fadeOut');
        $('#menu-side-right').closeanimateCss('slideOutRight');

//        $('#menu-side-right').toggleClass('hide-menu-right-100', function () {
//            $(this).toggleClass("d-none ");
//        });
    });


    $('#search').click(function () {
        $(this).toggleClass('zoomOut');
        $('.dim-background, #search-form').toggleClass("d-none ").animateCss('slideInDown');
    });

    $('#close-search').click(function () {
        $('#search').toggleClass('zoomOut');
        $('.dim-background, #search-form').closeanimateCss('slideOutUp');
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
