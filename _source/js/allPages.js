// init base functions
$(window).on('load', function () {
    scrollDirection();
    initGettersAndSetters();
    changeTouchClickText();
});
$(window).on('hashchange', function (a) {
    initGettersAndSetters();
});

// init AOS
if (is.not.ie()) {
    AOS.init();
} else {
    $('*').removeAttr("data-aos");
}

// m
if ($('.m-defaultModal').length) {
    // open
    $('.js-openModal').on('click', function(e) {
        e.preventDefault();
        var thisHref = $(this).attr('href');
        console.log(thisHref)
        $(thisHref).addClass('is-active');
    });

    $('.m-defaultModal__close').on('click', function() {
       $('.m-defaultModal').removeClass('is-active');
    });
}

// l
if ($('.l-nav').length) {
    var isActive = 'is-active';
    var navEl = {
        scrollInit: 0,
        scrollClassScrolled: 99,
        scrollClassMiddle: 600,
        body: $('body'),
        nav: $('.l-nav'),
        navHidden: $('.l-navHidden'),
        hamburguer: $('.l-nav .c-hamburguer'),
        contentHero: $('.l-nav__contentHero'),
        mask: $('.l-navHidden__mask')
    };

    function checkResponsiveMode() {
        var resultCheck;
        var displayCheck = navEl.hamburguer.css('display');
        if (displayCheck !== 'none') {
            resultCheck = 'is-responsive';
            navEl.nav.removeClass('is-desktop');
            navEl.nav.addClass('is-responsive');
        } else {
            resultCheck = 'is-desktop';
            navEl.nav.removeClass('is-responsive');
            navEl.nav.addClass('is-desktop');
        }
        return resultCheck;
    }

    function closeAllNavElements() {
        $('.c-subMenu').removeClass('is-active');
        navEl.hamburguer.removeClass(isActive);
    }
    function disableOverflow() {
        navEl.body.addClass('u-overflowBlocked');
    }
    function enableOverflow() {
        navEl.body.removeClass('u-overflowBlocked');
    }


    // RESPONSIVE MENU
    // - open
    navEl.hamburguer.on('click', function() {
        navEl.navHidden.addClass(isActive);
        disableOverflow();
    });
    navEl.mask.on('click', function() {
        navEl.navHidden.removeClass(isActive);
        navEl.hamburguer.removeClass(isActive);
        enableOverflow();
    });


    // SCROLL CHANGES
    $(window).on('load', function(event) {
        checkResponsiveMode();
        var scrollBody = $(this).scrollTop();
        if (scrollBody > 1) {
            navEl.nav.addClass('is-scrolled');
        } else {
            navEl.nav.removeClass('is-scrolled');
        }
    });
    $(window).on('scroll', function() {
        var scrollBody = $(this).scrollTop();
        // scroll up to 99
        if (scrollBody > navEl.scrollClassScrolled) {
            navEl.nav.addClass('is-scrolled');
        } else {
            navEl.nav.removeClass('is-scrolled');
        }
        // middle class
        if (scrollBody > navEl.scrollClassMiddle) {
            navEl.nav.addClass('is-hidden');
            navEl.nav.addClass('is-middle');
        } else {
            navEl.nav.removeClass('is-hidden');
            navEl.nav.removeClass('is-middle');
        }
        // scroll up or down
        if (scrollBody < navEl.scrollInit) {
            navEl.nav.removeClass('is-hidden');
            navEl.nav.addClass('is-scrolledUp');
            navEl.nav.removeClass('is-scrolledDown');
        } else {
            navEl.nav.removeClass('is-scrolledUp');
            navEl.nav.addClass('is-scrolledDown');
        }
        // close menus on hidden nav
        if(navEl.nav.hasClass('is-hidden')) {
            closeAllNavElements();
        }
        // reference var
        navEl.scrollInit = scrollBody;
    });

}
if ($('.l-headerHome').length) {
    $( document ).ready(function() {
        var headerHome__swiper = new Swiper ('.l-headerHome__swiper', {
            speed: 400,
            spaceBetween: 0,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.l-headerHome__pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    if (index > 8) {
                        return '<span class="' + className + '">.' + (index + 1) + '</span>';
                    } else {
                        return '<span class="' + className + '">.0' + (index + 1) + '</span>';
                    }
                },
            },
        });
    });
}

// s
if ($('.s-specialEvents').length) {
    //s-specialEvents__swiper
    var specialEvents__swiper = new Swiper ('.s-specialEvents__swiper', {
        speed: 400,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.s-specialEvents__swiper .swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
    });
}
if ($('.s-podcasts').length) {
    if (is.mobile()) {
        var podcasts__swiper = new Swiper('.s-podcasts__swiper', {
            slidesPerView: 4,
            spaceBetween: 40,
            pagination: {
                el: '.s-podcasts__swiper .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                540: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                760: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                920: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
            }
        });
    }
}
if ($('.s-nextEvents').length) {
    var nextEvents__swiper = new Swiper('.s-nextEvents__swiper', {
        slidesPerView: 3,
        navigation: {
            nextEl: '.s-nextEvents .swiper-button-next',
            prevEl: '.s-nextEvents .swiper-button-prev',
        },
        breakpoints: {
            780: {
                slidesPerView: 1,
            },
            970: {
                slidesPerView: 2,
            },
        }
    });
}
if ($('.s-lastPosts').length) {
    var lastPosts__swiper = new Swiper('.s-lastPosts__swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.s-lastPosts .swiper-button-next',
            prevEl: '.s-lastPosts .swiper-button-prev',
        },
        breakpoints: {
            520: {
                slidesPerView: 1,
            },
            930: {
                slidesPerView: 2,
            },
        }
    });
}