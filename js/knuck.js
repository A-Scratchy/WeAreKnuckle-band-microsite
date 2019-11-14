//action when in view downwards
$('.stick').waypoint(function (direction) {
    if (direction == 'down') {
        $('.' + this.element.id + '-foot').addClass("off").removeClass("on");
        $('#' + this.element.id).removeClass("off").addClass("on");
    }

}, {
    offset: 'bottom-in-view'
});

//action when in view upwards
$('.stick').waypoint(function (direction) {
    if (direction == 'up') {
        $('.' + this.element.id + '-foot').addClass("off").removeClass("on");
        $('#' + this.element.id).removeClass("off").addClass("on");
    }

});

//action when out of view upwards
$('.stick').waypoint(function (direction) {
    if (direction == 'up') {
        $('.' + this.element.id + '-foot').removeClass("off").addClass("on");
        $('#' + this.element.id).addClass("off").removeClass("on");
    }

}, {
    offset: 'bottom-in-view'
});

//action when bottom in view
$('.guttertop').waypoint(function (direction) {
    if (direction == 'down') {
        $('.info').addClass("on").removeClass("off")
    }

}, {
    offset: 'bottom-in-view'
});

//action when bottom out of view
$('.gutterbottom').waypoint(function (direction) {
    if (direction == 'up') {
        $('.info').addClass("off").removeClass("on");
    }

});