! function(e) {
    "use strict";
    e('.hero_single a[href^="#"].btn_1').on("click", function(o) {
        o.preventDefault();
        var t = this.hash,
            n = e(t);
        e("html, body").stop().animate({
            scrollTop: n.offset().top
        }, 400, "swing", function() {
            window.location.hash = t
        })
    }), e(window).on("scroll", function() {
        0 != e(this).scrollTop() ? e("#toTop").fadeIn() : e("#toTop").fadeOut()
    }), e("#toTop").on("click", function() {
        e("body,html").animate({
            scrollTop: 0
        }, 500)
    }), (new WOW).init(), e("#reccomended").owlCarousel({
        center: !1,
        items: 2,
        loop: !1,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                dots: !0
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    })
}(window.jQuery);



