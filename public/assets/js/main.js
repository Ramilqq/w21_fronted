function loadScript(){
    (function($) {
        "use strict";
    
        /* cart */
        $(".icon-cart").on("click", function() {
            $(this).parent().find('.cart-toogle').slideToggle('medium');
        })
        
        /* search */
        $(".icon-search").on("click", function() {
            $(this).parent().find('.toogle-content').slideToggle('medium');
        })
        
        
        
        $('.details-tab a').on('click', function() {
            $('.details-tab a').removeClass('active');
        })
        

        /* isotop active */
        // filter items on button click
        
        var portfolioarea = $('.portfolio-area , .portfolio-style');
        var portfoliomenuactive = $('.portfolio-menu-active');
        portfolioarea.imagesLoaded(function() {
            portfoliomenuactive.on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-item',
                }
            });
        });
        
        
        /* isotop active */
        // filter items on button click
        portfolioarea.imagesLoaded(function() {
            portfoliomenuactive.on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.grid-2').isotope({
                itemSelector: '.grid-item-2',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                }
            });
        });
        
        
        $('.portfolio-menu-active button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
        
        
        /* magnificPopup image popup */
        $('.img-poppu').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        
        
        /*--
        Testimonial Slick Carousel
        -----------------------------------*/
        $('.testimonial-text-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false,
            fade: true,
            asNavFor: '.slider-nav',
        });
        
        
        /*--
            Testimonial Slick Carousel as Nav
        -----------------------------------*/
        $('.testimonial-image-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.testimonial-text-slider',
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '0px',
            responsive: [{
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        autoplay: true,
                        dots: false,
                        slidesToShow: 2,
                        centerMode: false,
                    }
                }
            ]
        });
        
        
        /*---------------------
        price slider
        --------------------- */
        var sliderrange = $('#slider-range');
        var amountprice = $('#amount');
        $(function() {
            sliderrange.slider({
                range: true,
                min: 0,
                max: 1200,
                values: [0, 1000],
                slide: function(event, ui) {
                    amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
        });
        
        
        /*----- 
            Cart Plus Minus
        --------------------------------*/
        $('.pro-qty, .cart-plus-minus-2').append('<span class="inc qtybtn"><i class="fa fa-plus"></i></span>');
        $('.pro-qty, .cart-plus-minus-2').append('<span class="dec qtybtn"><i class="fa fa-minus"></i></span>');
        $('.qtybtn').on('click', function() {
            var $button = $(this);
            var oldValue = $button.parent().find('input').val();
            if ($button.hasClass('inc')) {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            $button.parent().find('input').val(newVal);
        });
        
        
        /*--- showlogin toggle function ----*/
        $('#showlogin').on('click', function() {
            $('#checkout-login').slideToggle(900);
        });
        
        
        /*--- showlogin toggle function ----*/
        $('#showcoupon').on('click', function() {
            $('#checkout_coupon').slideToggle(900);
        });
        
        
        /*--- showlogin toggle function ----*/
        $('#ship-box').on('click', function() {
            $('#ship-box-info').slideToggle(1000);
        });
        
        
        /* parallax active  */
        $('.parallax-window').parallax();
        
        
        /*--------------------------
            09. ScrollUp
        ---------------------------- */
        $.scrollUp({
            scrollText: '<i class="fa fa-angle-double-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });
        
        
        /* jQuery MeanMenu */
        $('#mobile-menu-active').meanmenu({
            meanScreenWidth: "767",
            meanMenuContainer: ".mobile-menu-area .mobile-menu",
        });
        
        
        /*------------------------------------    
          08. Toogle Menu
        --------------------------------------*/
        var bodyoverlay = $('.body__overlay');
        var offsetmenu = $('.offsetmenu');
        $('.toggle__menu').on('click', function() {
            offsetmenu.addClass('offsetmenu__on');
            bodyoverlay.addClass('is-visible');
        });
        
        $('.offsetmenu__close__btn').on('click', function() {
            offsetmenu.removeClass('offsetmenu__on');
            bodyoverlay.removeClass('is-visible');
        });
        
        
        /*------------------------------------    
          09. Overlay Close
        --------------------------------------*/
        bodyoverlay.on('click', function() {
            $(this).removeClass('is-visible');
            offsetmenu.removeClass('offsetmenu__on');
        });
        
        
        /* creative-menu-6 */
        $(".sidebar-menu-active").on("click", function() {
            $(".sidebar-mega-menu").toggleClass('open');
            return false;
        })
        
        
        /*--
        Menu Stick
        -----------------------------------*/
        var header = $('.transparent-bar');
        var win = $(window);
        
        win.on('scroll', function() {
            var scroll = win.scrollTop();
            if (scroll < 1) {
                header.removeClass('stick');
            } else {
                header.addClass('stick');
            }
        });
    
    })(jQuery);
}

