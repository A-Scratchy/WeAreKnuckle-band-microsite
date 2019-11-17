
    var scrolledPast = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (
           bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    var sticky = document.querySelectorAll('.stick')

    var stickIcons = function (e) {
        //maybe change this to an id so dont waste the array
        var stick = document.getElementsByClassName(`${e.id}-foot`)[0]
        scrolledPast(e) ? (
            e.classList.add("on"),
            e.classList.remove("off"),
            stick.classList.add("off"),
            stick.classList.remove("on")
        ) : (
            e.classList.add("off"),
            e.classList.remove("on"),
            stick.classList.add("on"),
            stick.classList.remove("off")
        )
    }

    document.addEventListener("scroll", function() {
        Array.prototype.forEach.call(sticky, function(el, i){
            stickIcons(el)
        });
    });