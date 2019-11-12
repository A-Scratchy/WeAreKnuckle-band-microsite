//action when in view downwards
$('.trigger').waypoint(function (direction) {
    if (direction == 'down') {
        $('.' + this.element.id + '-foot').addClass("active").removeClass("disactive");
        $('#' + this.element.id).removeClass("active").addClass("disactive");
    }

}, {
    offset: 'bottom-in-view'
});

//action when in view upwards
$('.trigger').waypoint(function (direction) {
    if (direction == 'up') {
        $('.' + this.element.id + '-foot').addClass("active").removeClass("disactive");
        $('#' + this.element.id).removeClass("active").addClass("disactive");
    }

});

//action when out of view upwards
$('.trigger').waypoint(function (direction) {
    if (direction == 'up') {
        $('.' + this.element.id + '-foot').removeClass("active").addClass("disactive");
        $('#' + this.element.id).addClass("active").removeClass("disactive");
    }
   
}, { offset: 'bottom-in-view' 
});

//action when bottom in view
$('.guttertop').waypoint(function (direction) {
    if (direction == 'down') {
        $('.info').addClass("disactive").removeClass("active")
    }
   
}, { offset: 'bottom-in-view' 
});

//action when bottom out of view
$('.gutterbottom').waypoint(function (direction) {
    if (direction == 'up') {
        $('.info').addClass("active").removeClass("disactive");
    }
   
});