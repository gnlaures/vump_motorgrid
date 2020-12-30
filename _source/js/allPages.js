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

// l
if ($('.l-nav').length) {
    var propsNav = {
        active: 'is-active',
        scrollInit: 0,
        scrollClassScrolled: 99,
        scrollClassMiddle: 600,
        body: $('body'),
        nav: $('.l-nav'),
        hamburguer: $('.l-nav .c-hamburguer'),
        contentHero: $('.l-nav__contentHero'),
        mask: $('.l-nav__maskMenu'),
        maskAll: $('.l-nav__maskMenu.maskAll'),
    };

    function checkResponsiveMode() {
        var resultCheck;
        var displayCheck = propsNav.hamburguer.css('display');
        if (displayCheck !== 'none') {
            resultCheck = 'is-responsive';
            propsNav.nav.removeClass('is-desktop');
            propsNav.nav.addClass('is-responsive');
        } else {
            resultCheck = 'is-desktop';
            propsNav.nav.removeClass('is-responsive');
            propsNav.nav.addClass('is-desktop');
        }
        return resultCheck;
    }
    function closeAllSubMenus() {
        $('.c-subMenu').removeClass('is-active');
    }
    function closeResponsiveMenu() {
        propsNav.hamburguer.removeClass(propsNav.active);
        propsNav.contentHero.removeClass(propsNav.active);
    }
    function hideMaskMenu() {
        propsNav.mask.removeClass(propsNav.active);
    }
    function disableOverflow() {
        propsNav.body.addClass('u-overflowBlocked');
    }
    function enableOverflow() {
        propsNav.body.removeClass('u-overflowBlocked');
    }


    // RESPONSIVE MENU
    // - open / close
    propsNav.hamburguer.on('click', function() {
        if ($(this).hasClass(propsNav.active)) {
            // close menu
            enableOverflow();
            $(this).removeClass(propsNav.active);
            propsNav.maskAll.removeClass(propsNav.active);
            propsNav.contentHero.removeClass(propsNav.active);
        } else {
            // open menu
            disableOverflow();
            $(this).addClass(propsNav.active);
            propsNav.maskAll.addClass(propsNav.active);
            propsNav.contentHero.addClass(propsNav.active);
        }
    });
    // - close
    propsNav.maskAll.on('click', function(){
        closeResponsiveMenu();
        hideMaskMenu();
        closeAllSubMenus();
        enableOverflow();
    });


    // RESPONSIVE MODE
    $(window).on('resize', function() {
        if (checkResponsiveMode() === "is-desktop") {
            if (propsNav.contentHero.hasClass(propsNav.active)) {
                closeAllSubMenus();
                closeResponsiveMenu();
                hideMaskMenu();
            }
        }
    });


    // SCROLL CHANGES
    $(window).on('load', function(event) {
        checkResponsiveMode();
        var scrollBody = $(this).scrollTop();
        if (scrollBody > 1) {
            propsNav.nav.addClass('scrolled');
        } else {
            propsNav.nav.removeClass('scrolled');
        }
    });
    $(window).on('scroll', function() {
        var scrollBody = $(this).scrollTop();
        // scroll up to 99
        if (scrollBody > propsNav.scrollClassScrolled) {
            propsNav.nav.addClass('scrolled');
        } else {
            propsNav.nav.removeClass('scrolled');
        }
        // middle class
        if (scrollBody > propsNav.scrollClassMiddle) {
            propsNav.nav.addClass('hidden');
            propsNav.nav.addClass('scrolledMiddle');
        } else {
            propsNav.nav.removeClass('hidden');
            propsNav.nav.removeClass('scrolledMiddle');
        }
        // scroll up or down
        if (scrollBody < propsNav.scrollInit) {
            propsNav.nav.removeClass('hidden');
            propsNav.nav.addClass('scrolledUp');
            propsNav.nav.removeClass('scrolledDown');
        } else {
            propsNav.nav.removeClass('scrolledUp');
            propsNav.nav.addClass('scrolledDown');
        }
        // close menus on hidden nav
        if(propsNav.nav.hasClass('hidden')) {
            closeAllSubMenus();
            hideMaskMenu();
        }
        // reference var
        propsNav.scrollInit = scrollBody;
    });

}
if ($('.l-headerHome').length) {
    var swiper__headerHome = new Swiper ('.swiper__headerHome', {
        speed: 400,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

// s
// if ($('.s-sectionX').length) {}

// #page
if ($('#page_contato').length) {
    $("#formContato").validate({
        submitHandler: function (form) {
            //SUBMIT form
            $(form).ajaxSubmit({
                //target: 'status-envio',
                beforeSubmit: function () {
                    $('#formContato .c-stsSend').removeClass('u-dnone');
                    $('#formContato .c-stsSend__feedback--load').removeClass('u-dnone');
                    $('#formContato  #btnContato').attr('disabled', true);
                },
                success: function (result) {
                    result = result.split('|');
                    if(parseInt(result[1]) == 1){
                        $('#formContato .c-stsSend__feedback').addClass('u-dnone');
                        $('#formContato .c-stsSend__feedback--success').removeClass('u-dnone');
                        setTimeout(function(){
                            $('#formContato #btnContato').attr('disabled',false);
                            $("#formContato .field").val('');
                            $("#formContato textarea").val('').html('');
                            $("#formContato .field").removeClass('error');
                            $('#formContato .c-stsSend').addClass('u-dnone');
                            $('#formContato .c-stsSend__feedback').addClass('u-dnone');
                        },2000);
                    }else{
                        $('#formContato .c-stsSend__feedback').addClass('u-dnone');
                        $('#formContato .c-stsSend__feedback--error').removeClass('u-dnone');
                        $('#formContato .c-stsSend__feedback--error span').html(result[2]);
                        setTimeout(function () {
                            $('#formContato .c-stsSend').addClass('u-dnone');
                            $('#formContato .c-stsSend__feedback').addClass('u-dnone');
                            $('#formContato #btnContato').attr('disabled', false);
                        }, 3000);
                    }
                }
            });
        }
    });
    $(document).on('change','#formContato_estado',function(){
        var uf = $(this).val();
        $("#formContato_cidade").html('<option>Carregando cidades...</option>');
        $.ajax({
            type: "POST",
            data: {uf: uf},
            url: "ajax-cidades.php",
            success: function (result) {
                $("#formContato_cidade").html(result);
            }
        });
    });
}