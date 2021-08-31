$(function(){

  /*  Fixed header
=================== */

  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();


  $(window).on("scroll load resize", function() {

      introH = intro.innerHeight();
      scrollPos = $(this).scrollTop();

      if( scrollPos > introH ) {
        header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }

      console.log(scrollPos);

  });


  /*  Smooth scroll
=================== */
console.log($("[data-scroll]"));

  $("[data-scroll]").on("click", function(event) {
    console.log(event);

    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    

    $("html, body").animate ({
      scrollTop: elementOffset - 70
    }, 700);
    });

  /* Nav Toggle */
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");
  });




});
