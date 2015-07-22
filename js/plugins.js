// Avoid `console` errors in browsers that lack a console.
(function() {

    $(document).ready(function() {
        var method;
        var noop = function () {};
        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});

        while (length--) {
            method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
       

        /////portfolio PAGE AFFIX CODE

        //$('#sidebar').affix({
        //    //offset: {
        //    //    top: $('.portfolio-intro').outerHeight()
        //    //}
        //});
        //
        //$(window).scroll(function(){
        //    if ($(this).scrollTop() > $('.portfolio-images').outerHeight()+100)
        //    {
        //        $('.affix').css({'top':(($('.portfolio-images').height() + 220))+'px','position':'absolute'});
        //    }
        //    if ($(this).scrollTop() < $('.portfolio-images').height() + 100)
        //    {
        //        $('.affix').css({'top':'125px','position':'fixed'});
        //    }
        //    if ($(this).scrollTop() < $('.portfolio-intro').height() + 125) {
        //        $('.affix').css({'top': '0', 'position': 'relative'});
        //    }
        //});


        ///////NAVBAR TOGGLE - HIDE HAMBURGER ADD CLASS FOR X
        //
        //$(window).load(function() {
        //    $('.navbar-toggle').click(function(){
        //        $( this ).toggleClass( 'nav-close' );
        //        $('.icon-bar').toggle();
        //    });
        //
        //});
        //
        ///////NAVBAR FULL SCREEN WIDTH ON IPAD
        //
        //$(window).load(function() {
        //    if ($(window).width() < 1025) {
        //        $('#navbar').removeClass('container');
        //    }
        //});
        //
        ///////PARALAX OFFSET
        //
        //$(window).load(function() {
        //    if ($(window).width() < 1800) {
        //        $('#slide-2').offset({
        //            top: $('#owlimgslider').outerHeight() + 50
        //        });
        //    }
        //});
        //
        //////////OWL CAROUSEL
        //$("#owlimgslider").owlCarousel({
        //    navigation : false, // Show next and prev buttons
        //    slideSpeed : 200,
        //    paginationSpeed : 300,
        //    singleItem : true,
        //    autoPlay : true
        //});

        ////refresh page on browser resize
        //$(window).bind('resize', function(e)
        //{
        //    if ($(window).width() > 767) {
        //
        //        if (window.RT) clearTimeout(window.RT);
        //        window.RT = setTimeout(function () {
        //            this.location.reload(false);
        //            /* false to get page from cache */
        //        }, 200);
        //    }
        //});
});
}());

// Place any jQuery/helper plugins in here.
