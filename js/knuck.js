$(document).ready(function () {

    function scrolledPast(e) {
        var elementTop = e.offset().top + e.height();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementTop < viewportBottom;
    };

    var sticky = $('.stick')

    function stickIcons(element) {
        var main = $(element)
        var stick = $('.' + element.id + '-foot')
        if (scrolledPast(main)) {
            main.removeClass("off").addClass("on");
            stick.addClass("off").removeClass("on");
        } else {
            main.addClass("off").removeClass("on");
            stick.addClass("on").removeClass("off");
        }
    }

    $(window).scroll(function () {
        sticky.each(function (index, element) {
            stickIcons(element)
        });
    });

});

//END