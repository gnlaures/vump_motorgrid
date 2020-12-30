// forms
// -- masks
if (is.not.ie()) {
    $('.cepMask').mask("99999-999");
    $('.cpfMask').mask("999.999.999-99");
    $('.dataMask').mask("99/99/9999");
    $('.foneMask').focusout(function () {
        var phone, element;
        element = $(this);
        element.unmask();
        phone = element.val().replace(/\D/g, '');
        if (phone.length > 10) {
            element.mask("(99) 99999-999?9");
        } else {
            element.mask("(99) 9999-9999?9");
        }
    }).trigger('focusout');
}
// -- select 2
$('.js-select2__multiple').select2({
    placeholder: "Selecione",
});
$('.js-select2__oneOption').select2({
    placeholder: "Selecione",
});
$('.c-form__field.--select2 label *').on('click', function () {
    var idSelect2 = $(this).closest('li').find('select').attr('id');
    idSelect2 = '#' + idSelect2;
    $(idSelect2).select2('open');
});
// -- default form
if ($('.c-form').length) {
    // select
    $('.c-form__field.--select select').on('click', function () {
        $(this).closest('.c-form__field.--select').addClass('is-active');
    });
    $('.c-form__field.--select select').on('focusout', function () {
        var thisSelectOption = $(this).children('option:selected').text();
        $(this).closest('.c-form__field.--select').find('.inputBox').children('input').val(thisSelectOption);
        $(this).closest('.c-form__field.--select').removeClass('is-active');
    });

    // file
    $('.inputAttach').on('change', function() {
        var t = $(this).val().split('fakepath');
        console.log(t);
        $(this).closest('.liFile').find('.inputText').val(t[1]);
    });

    // rangeDefault
    var rangeSlider = function(){
        var slider = $('.rangeSlider'),
            range = $('.rangeSlider__range'),
            value = $('.rangeSlider__value');

        slider.each(function(){
            value.each(function(){
                var value = $(this).prev().attr('value');
                $(this).html(value);
            });
            range.on('input', function(){
                $(this).next(value).html(this.value);
            });
        });
    };
    rangeSlider();
}

// grids / tabs
if ($('.c-responsiveGrid').length) {

    function removeGridClass(el) {
        for (var i = 1; i <= 12; i++) {
            el.removeClass('--col' + i);
        }
        el.removeClass('--colNaN');
    }

    $(window).on('load resize', function() {
        $('.c-responsiveGrid').each(function( index ) {
            var propsGrid = {
                maxwBreaks: $(this).attr('data-maxw-breaks').split(', ').map(Number),
                maxwCols: $(this).attr('data-maxw-cols').split(', ').map(Number),
                initCols: parseInt($(this).attr('data-cols-init')),
                windowW: $(window).width(),
            };
            var qtfBreaks = propsGrid.maxwBreaks.length;
            if (propsGrid.maxwBreaks.length === propsGrid.maxwCols.length) {
                for (var i = 0; i <= qtfBreaks; i++) {
                    if (propsGrid.maxwBreaks[i] >= propsGrid.windowW) {
                        removeGridClass($(this));
                        $(this).addClass('--col' + propsGrid.maxwCols[i]);
                    }
                    if (propsGrid.windowW > propsGrid.maxwBreaks[0]) {
                        removeGridClass($(this));
                        $(this).addClass('--col' + propsGrid.initCols);
                    }
                }
            } else {
                console.log('Ta faltando media querie ou colunas, verifique seu componente');
            }
        });
    });
}
if ($('.c-tabHorizontal').length) {
    var propsTabH = {
        el: $('.c-tabHorizontal'),
        item: $('.c-tabHorizontal a'),
        header: $('.c-tabHorizontal__header'),
        content: $('.c-tabHorizontal__content'),
    };

    propsTabH.item.on('click', function(e) {
        e.preventDefault();
        // toggle active header
        $(this).closest('.c-tabHorizontal__header').find('a').removeClass('is-active');
        $(this).addClass('is-active');

        // scroll to active
        //console.log($(this).closest('.c-tabHorizontal__header ul').scrollLeft());

        // toggle active content
        var contentDestiny = $(this).attr('href');
        var thisElement = $(this);
        thisElement.closest(propsTabH.el).find(propsTabH.content).removeClass('is-active');
        setTimeout(function(){
            thisElement.closest(propsTabH.el).find(propsTabH.content).addClass('u-dnone');
            $(contentDestiny).removeClass('u-dnone');
            $(contentDestiny).addClass('is-active');
        }, 350);
    });
}
if ($('.c-toggleList').length) {
    $('.c-toggleList__header').on('click', function() {
        $(this).parent().toggleClass('is-active');
    });
}

// menus
if ($('.c-subMenu').length) {
    var propsSubMenu = {
        toggle: $('.c-subMenu__call'),
        content: $('.c-subMenu__content'),
        el: $('.c-subMenu'),
        primary: $('.js-subMenuPrimary'),
        mask: $('.c-subMenu__mask')
    };

    function removeMask() {
        propsSubMenu.mask.removeClass('is-active');
    }

    // close
    propsSubMenu.mask.on('click', function() {
        if ($(this).closest('.c-subMenu').hasClass('--mobile')) {
            console.log('mobile')
        } else {
            propsSubMenu.el.removeClass('is-active');
            removeMask();
        }
    });
    propsSubMenu.primary.parent().children('.c-subMenu__content').on('mouseleave', function() {
        if ($(this).closest('.c-subMenu').hasClass('--mobile')) {
            console.log('mobile')
        } else {
            propsSubMenu.el.removeClass('is-active');
            removeMask();
        }
    });

    // open
    propsSubMenu.primary.on('click', function(e) {
        e.preventDefault();
        if ($(this).parent('.c-subMenu').hasClass('--mobile')) {
            $(this).parent('.c-subMenu').toggleClass('is-active');
        } else {
            if ($(this).parent('.c-subMenu').hasClass('is-active')) {
                $(this).parent('.c-subMenu').removeClass('is-active');
            } else {
                if (($(this).parents('.l-nav').length) && ($('.l-nav').hasClass('is-responsive'))) {
                    console.log('l-nav')
                    $(this).parent('.c-subMenu').toggleClass('is-active');
                } else {
                    console.log('not nav')
                    $('.c-subMenu').removeClass('is-active');
                    $(this).parent('.c-subMenu').addClass('is-active');
                }
            }
        }
    });
    propsSubMenu.toggle.on('click', function(e) {
        e.preventDefault();
        if (!$(this).hasClass('js-subMenuPrimary')) {
            $(this).parent('.c-subMenu').toggleClass('is-active');
        }
    });
}
if ($('.c-subMenuHover').length) {
    function mobileAdjusts() {
        if (is.mobile()) {
            $('.c-subMenuHover').children('a').addClass('is-blocked-mobile');
            $('.c-subMenuHover').addClass('is-mobile');
        } else {
            $('.c-subMenuHover').children('a').removeClass('is-blocked-mobile');
            $('.c-subMenuHover').removeClass('is-mobile');
        }
    }
    $(window).on('load', function(){mobileAdjusts()});
    $(window).on('resize', function(){mobileAdjusts()});
}
if ($('.c-hamburguer').length) {
    $('.c-hamburguer').on('click', function() {
       $(this).toggleClass('is-active');
    });
}