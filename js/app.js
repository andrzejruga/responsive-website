$(document).ready(function () {

    // hamburger menu toggle
    $('.nav-toggle').click(function () {
        $('.main-nav').toggleClass('main-nav--is-open');
        $('.nav-toggle__hamburger').toggleClass('nav-toggle__hamburger--is-open');
    })
    
});