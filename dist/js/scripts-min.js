function checkResponsiveMode(){var e;return"none"!==navEl.hamburguer.css("display")?(e="is-responsive",navEl.nav.removeClass("is-desktop"),navEl.nav.addClass("is-responsive")):(e="is-desktop",navEl.nav.removeClass("is-responsive"),navEl.nav.addClass("is-desktop")),e}function closeAllNavElements(){$(".c-subMenu").removeClass("is-active"),navEl.hamburguer.removeClass(isActive)}function disableOverflow(){navEl.body.addClass("u-overflowBlocked")}function enableOverflow(){navEl.body.removeClass("u-overflowBlocked")}var isActive,navEl,rangeSlider,propsTabH,propsSubMenu,player;function removeGridClass(e){for(var s=1;s<=12;s++)e.removeClass("--col"+s);e.removeClass("--colNaN")}function removeMask(){propsSubMenu.mask.removeClass("is-active")}function mobileAdjusts(){is.mobile()?($(".c-subMenuHover").children("a").addClass("is-blocked-mobile"),$(".c-subMenuHover").addClass("is-mobile")):($(".c-subMenuHover").children("a").removeClass("is-blocked-mobile"),$(".c-subMenuHover").removeClass("is-mobile"))}$(window).on("load",function(){scrollDirection(),initGettersAndSetters(),changeTouchClickText()}),$(window).on("hashchange",function(e){initGettersAndSetters()}),is.not.ie()?AOS.init():$("*").removeAttr("data-aos"),$(".m-defaultModal").length&&($(".js-openModal").on("click",function(e){e.preventDefault();e=$(this).attr("href");console.log(e),$(e).addClass("is-active"),$("body").addClass("u-overflowBlocked")}),$(".m-defaultModal__close, .js-closeModal").on("click",function(e){e.preventDefault(),$(this).closest(".m-defaultModal").removeClass("is-active"),$("body").removeClass("u-overflowBlocked"),$("audio").each(function(){this.pause(),this.currentTime=0})})),$("#modal-convite").length&&($(".js-openConvite").on("click",function(e){e.preventDefault(),$(".conviteSts").addClass("u-dnone"),$(".conviteForm").removeClass("u-dnone"),$(".conviteForm input").val("")}),$("#formConvite .c-btn").on("click",function(e){e.preventDefault(),$(".conviteSts").removeClass("u-dnone"),$(".conviteForm").addClass("u-dnone")})),$(".l-nav").length&&(isActive="is-active",(navEl={scrollInit:0,scrollClassScrolled:99,scrollClassMiddle:600,body:$("body"),nav:$(".l-nav"),navHidden:$(".l-navHidden"),hamburguer:$(".l-nav .c-hamburguer"),contentHero:$(".l-nav__contentHero"),mask:$(".l-navHidden__mask")}).hamburguer.on("click",function(){navEl.navHidden.addClass(isActive),disableOverflow()}),navEl.mask.on("click",function(){navEl.navHidden.removeClass(isActive),navEl.hamburguer.removeClass(isActive),enableOverflow()}),$(window).on("load",function(e){checkResponsiveMode(),1<$(this).scrollTop()?navEl.nav.addClass("is-scrolled"):navEl.nav.removeClass("is-scrolled")}),$(window).on("scroll",function(){var e=$(this).scrollTop();e>navEl.scrollClassScrolled?navEl.nav.addClass("is-scrolled"):navEl.nav.removeClass("is-scrolled"),e>navEl.scrollClassMiddle?(navEl.nav.addClass("is-hidden"),navEl.nav.addClass("is-middle")):(navEl.nav.removeClass("is-hidden"),navEl.nav.removeClass("is-middle")),e<navEl.scrollInit?(navEl.nav.removeClass("is-hidden"),navEl.nav.addClass("is-scrolledUp"),navEl.nav.removeClass("is-scrolledDown")):(navEl.nav.removeClass("is-scrolledUp"),navEl.nav.addClass("is-scrolledDown")),navEl.nav.hasClass("is-hidden")&&closeAllNavElements(),navEl.scrollInit=e})),$(".l-headerHome").length&&$(document).ready(function(){new Swiper(".l-headerHome__swiper",{speed:400,spaceBetween:0,autoplay:{delay:5e3},pagination:{el:".l-headerHome__pagination",clickable:!0,renderBullet:function(e,s){return 8<e?'<span class="'+s+'">.'+(e+1)+"</span>":'<span class="'+s+'">.0'+(e+1)+"</span>"}}})}),$(".s-specialEvents").length&&$(document).ready(function(){new Swiper(".s-specialEvents__swiper",{speed:400,spaceBetween:0,autoplay:{delay:5e3},pagination:{el:".s-specialEvents__swiper .swiper-pagination",clickable:!0,type:"bullets"}})}),$(".s-podcasts").length&&$(document).ready(function(){is.mobile()&&new Swiper(".s-podcasts__swiper",{slidesPerView:4,spaceBetween:40,pagination:{el:".s-podcasts__swiper .swiper-pagination",clickable:!0},breakpoints:{540:{slidesPerView:1,spaceBetween:10},760:{slidesPerView:2,spaceBetween:15},920:{slidesPerView:3,spaceBetween:20}}})}),$(".s-nextEvents").length&&$(document).ready(function(){new Swiper(".s-nextEvents__swiper",{slidesPerView:3,navigation:{nextEl:".s-nextEvents .swiper-button-next",prevEl:".s-nextEvents .swiper-button-prev"},breakpoints:{780:{slidesPerView:1},970:{slidesPerView:2}}})}),$(".s-lastPosts").length&&$(document).ready(function(){new Swiper(".s-lastPosts__swiper",{slidesPerView:3,spaceBetween:20,navigation:{nextEl:".s-lastPosts .swiper-button-next",prevEl:".s-lastPosts .swiper-button-prev"},breakpoints:{520:{slidesPerView:1},930:{slidesPerView:2}}})}),$(".s-singlePost").length&&($(window).on("scroll",function(){stickyPosition(".s-singlePost .content__share",0,get__navHeight())}),$(window).on("load",function(){stickyPosition(".s-singlePost .content__share",0,get__navHeight())})),is.not.ie()&&($(".cepMask").mask("99999-999"),$(".cpfMask").mask("999.999.999-99"),$(".dataMask").mask("99/99/9999"),$(".foneMask").focusout(function(){var e=$(this);e.unmask(),10<e.val().replace(/\D/g,"").length?e.mask("(99) 99999-999?9"):e.mask("(99) 9999-9999?9")}).trigger("focusout")),$(".js-select2__multiple").select2({placeholder:"Selecione"}),$(".js-select2__oneOption").select2({placeholder:"Selecione"}),$(".c-form__field.--select2 label *").on("click",function(){var e="#"+(e=$(this).closest("li").find("select").attr("id"));$(e).select2("open")}),$(".c-form").length&&($(".c-form__field.--select select").on("click",function(){$(this).closest(".c-form__field.--select").addClass("is-active")}),$(".c-form__field.--select select").on("focusout",function(){var e=$(this).children("option:selected").text();$(this).closest(".c-form__field.--select").find(".inputBox").children("input").val(e),$(this).closest(".c-form__field.--select").removeClass("is-active")}),$(".inputAttach").on("change",function(){var e=$(this).val().split("fakepath");console.log(e),$(this).closest(".liFile").find(".inputText").val(e[1])}),(rangeSlider=function(){var e=$(".rangeSlider"),s=$(".rangeSlider__range"),n=$(".rangeSlider__value");e.each(function(){n.each(function(){var e=$(this).prev().attr("value");$(this).html(e)}),s.on("input",function(){$(this).next(n).html(this.value)})})})()),$(".c-responsiveGrid").length&&$(window).on("load resize",function(){$(".c-responsiveGrid").each(function(e){var s={maxwBreaks:$(this).attr("data-maxw-breaks").split(", ").map(Number),maxwCols:$(this).attr("data-maxw-cols").split(", ").map(Number),initCols:parseInt($(this).attr("data-cols-init")),windowW:$(window).width()},n=s.maxwBreaks.length;if(s.maxwBreaks.length===s.maxwCols.length)for(var a=0;a<=n;a++)s.maxwBreaks[a]>=s.windowW&&(removeGridClass($(this)),$(this).addClass("--col"+s.maxwCols[a])),s.windowW>s.maxwBreaks[0]&&(removeGridClass($(this)),$(this).addClass("--col"+s.initCols));else console.log("Ta faltando media querie ou colunas, verifique seu componente")})}),$(".c-tabHorizontal").length&&(propsTabH={el:$(".c-tabHorizontal"),item:$(".c-tabHorizontal a"),header:$(".c-tabHorizontal__header"),content:$(".c-tabHorizontal__content")}).item.on("click",function(e){e.preventDefault(),$(this).closest(".c-tabHorizontal__header").find("a").removeClass("is-active"),$(this).addClass("is-active");var s=$(this).attr("href"),n=$(this);n.closest(propsTabH.el).find(propsTabH.content).removeClass("is-active"),setTimeout(function(){n.closest(propsTabH.el).find(propsTabH.content).addClass("u-dnone"),$(s).removeClass("u-dnone"),$(s).addClass("is-active")},350)}),$(".c-toggleList").length&&$(".c-toggleList__header").on("click",function(){$(this).parent().toggleClass("is-active")}),$(".c-subMenu").length&&((propsSubMenu={toggle:$(".c-subMenu__call"),content:$(".c-subMenu__content"),el:$(".c-subMenu"),primary:$(".js-subMenuPrimary"),mask:$(".c-subMenu__mask")}).mask.on("click",function(){$(this).closest(".c-subMenu").hasClass("--mobile")?console.log("mobile"):(propsSubMenu.el.removeClass("is-active"),removeMask())}),propsSubMenu.primary.parent().children(".c-subMenu__content").on("mouseleave",function(){$(this).closest(".c-subMenu").hasClass("--mobile")?console.log("mobile"):(propsSubMenu.el.removeClass("is-active"),removeMask())}),propsSubMenu.primary.on("click",function(e){e.preventDefault(),$(this).parent(".c-subMenu").hasClass("--mobile")?$(this).parent(".c-subMenu").toggleClass("is-active"):$(this).parent(".c-subMenu").hasClass("is-active")?$(this).parent(".c-subMenu").removeClass("is-active"):$(this).parents(".l-nav").length&&$(".l-nav").hasClass("is-responsive")?(console.log("l-nav"),$(this).parent(".c-subMenu").toggleClass("is-active")):(console.log("not nav"),$(".c-subMenu").removeClass("is-active"),$(this).parent(".c-subMenu").addClass("is-active"))}),propsSubMenu.toggle.on("click",function(e){e.preventDefault(),$(this).hasClass("js-subMenuPrimary")||$(this).parent(".c-subMenu").toggleClass("is-active")})),$(".c-subMenuHover").length&&($(window).on("load",function(){mobileAdjusts()}),$(window).on("resize",function(){mobileAdjusts()})),$(".c-hamburguer").length&&$(".c-hamburguer").on("click",function(){$(this).toggleClass("is-active")}),$(".c-audio").length&&(player=new Plyr(".js-audioPlyr"));
//# sourceMappingURL=scripts-min.js.map
