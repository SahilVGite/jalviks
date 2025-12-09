$(document).ready(function () {
  // AOS Initialize
  AOS.init({
    once: true,
    mirror: false,
    offset: 50,
    duration: 800,
    easing: 'ease-in-out',
  });

  // Sticky Header
  $(window).on("scroll", function () {
    $("header").toggleClass("stickyHead", $(this).scrollTop() > 30);
  });

  // Hamburger menu toggle
  $(".menuIcon").on("click", function () {
    $(".headCotent > .headRgt").toggleClass("active");
    $("body").toggleClass("menu-open");
    $(".menuClose").css("display", "block");
    $(".menuIcon").hide();
    if (!$(".menu-overlay").length) {
      $("header").append('<div class="menu-overlay"></div>');
    }
  });

  // Close menu
  $(document).on("click", ".menuClose, .headMenu ul > li > a, .menu-overlay", function () {
    $(".menuClose").hide();
    $(".menuIcon").css("display", "block");
    $(".headCotent > .headRgt").removeClass("active");
    $("body").removeClass("menu-open");
    $(".menu-overlay").remove();
  });

  // Smooth scroll to anchor with 60px offset
  $(document).on('click', '.headMenu ul > li > a, .siteLogo > a', function (e) {
    var href = $(this).attr('href');

    if (href && href.indexOf('#') === 0) {
      e.preventDefault();

      var $target = $(href);
      if ($target.length) {
        var offset = 60;
        var top = $target.offset().top - offset;

        window.scrollTo({
          top: top,
          behavior: "smooth" // ✅ real smooth, no speed jump
        });
      }
    }
  });

  // Slick Sliders
  $('.whyUsSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.reviewSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.appDesignSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 602,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: '0px',
        }
      },
    ]
  });
});