(function($){
    $(document).ready(function(){

        var homeContentBlock = $('.home-content-block');
        var homeSliderHeight = $('.slider-height');
        var homeSlider = $('#owlimgslider');
        var navToggle = $('.navbar-toggle');
        var iconBar = $('.icon-bar');

        // GOOO
        setTimeout(function(){$("body").removeClass("fade");}, 1000);

        //////// CAROUSEL
        $('.carousel').carousel();

        //$(window).load(function() {
        //    if ($(window).width() > 1025) {
        //        $('#sidebar').removeClass('.affix')
        //    }
        //});


        /////PARALAX OFFSET

        $(window).load(function() {
            homeContentBlock.offset({
                top: homeSliderHeight.outerHeight()
            });
            if ($(window).width() < 481) {
                homeContentBlock.offset({
                    top: homeSliderHeight.outerHeight() + 30
                });
            }

            navToggle.click(function(){
                $(this).toggleClass( 'nav-close' );
                iconBar.toggle();
            })

        });

        $(window).resize(function() {
            homeContentBlock.css('top', homeSliderHeight.height() + "px");
            if ($(window).width() < 481) {
                homeContentBlock.css('top', homeSliderHeight.height() + 30 + "px");
            }
        });

    });

})(jQuery)


$(window).load(function() {
    if ($(window).width() > 1025) {
        $('#sidebar').affix({
            offset: {
                top: $('.portfolio-intro').outerHeight() - 160
                //bottom: $( '#page' ).height()+($('#portfolio-block').outerHeight())
            }
        });
    }
});

$(window).scroll(function(){
        if ($(this).scrollTop() > ($('.portfolio-images').innerHeight())+40) {
            $('.affix').css({'top':(($('.portfolio-images').outerHeight() - ($('#sidebar').outerHeight()) - 42))+'px','position':'relative'});
        }
        else if ($(this).scrollTop() < $('.portfolio-intro').innerHeight() + 50) {
            $('.affix').css({'top': '0', 'position': 'relative'});
        }
        else {
            $('.affix').css({'top':'120px','position':'fixed'});
        }
    });







