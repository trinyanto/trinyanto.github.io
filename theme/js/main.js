


jQuery(document).ready(function ($) {
    $(function () {
        $('#example2').dropdown_menu({
            sub_indicator_class: 'dropdown-menu-sub-indicator',   // Class given to LI's with submenus
            vertical_class: 'dropdown-menu-vertical',        // Class for a vertical menu
            shadow_class: 'dropdown-menu-shadow',          // Class for drop shadow on submenus
            hover_class: 'dropdown-menu-hover',           // Class applied to hovered LI's
            open_delay: 150,                             // Delay on menu open
            close_delay: 300,                             // Delay on menu close
            animation_open: { opacity: 'show' },            // Animation for menu open
            speed_open: 'fast',                          // Animation speed for menu open
            animation_close: { opacity: 'hide' },            // Animation for menu close
            speed_close: 'fast',                          // Animation speed for menu close
            sub_indicators: false,                           // Whether to show arrows for submenus
            drop_shadows: false,                           // Whether to apply drop shadow class to submenus
            vertical: false,                           // Whether the root menu is vertically aligned
            viewport_overflow: 'auto',                          // Handle submenu opening offscreen: "auto", "move", "scroll", or false
            init: function () { }                    // Callback function applied on init
        });
    });


    //$('header').hide();
    //$('.slidDown').click(function (e) { // <----you missed the '.' here in your selector.
    //    e.stopPropagation();
    //    $('header').slideToggle();
    //});
    //$('header').click(function (e) {
    //    e.stopPropagation();
    //});

    //$(document).click(function () {
    //    $('header').slideUp();
    //});



});
$(document).ready(function () {
    $(".slidDown").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("up");
        $("header").slideToggle();
        

    });

});

jQuery(document).ready(function ($) {
    $(function () {
        SyntaxHighlighter.all();
    });
    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "slide",
            start: function (slider) {
                $('body').removeClass('loading');
            }
        });
    });
});