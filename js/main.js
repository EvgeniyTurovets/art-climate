$(document).ready(function() {
  $(".burger-menu").click(function() {
    $(this).toggleClass("active");
    $(this)
      .parent(".header")
      .find(".nav-mobile")
      .toggleClass("active");
  });
  $(".scroll-to-form").click(function() {
    $("html").animate(
      {
        scrollTop: $("#contact-form").offset().top // прокручиваем страницу к требуемому элементу
      },
      1500 // скорость прокрутки
    );
  });

  $(".acordeon-item.active")
    .find(".acordeon-item-content")
    .slideDown(500);
  $(".acordeon-item").click(function() {
    if ($(this).hasClass("active") == 0) {
      function closeItem() {
        $(".acordeon-item ")
          .find(".acordeon-item-content")
          .slideUp();
      }
      function openItem(e) {
        $(e)
          .find(".acordeon-item-content")
          .slideDown(500);
      }
      closeItem();
      $(".acordeon-item ").removeClass("active");
      $(this).addClass("active");
      setTimeout(openItem($(this)), 500);
    }
  });

  $("#on-for-client").click(function() {
    $(".for-bisnes").removeClass("active");
    $("#on-for-bisnes").removeClass("active");
    $("#on-for-client").addClass("active");
    $(".for-client").addClass("active");
    $("#for-bissnes").fadeOut();
    setTimeout(function() {
      $("#for-client").fadeIn();
    }, 500);
  });
  $("#on-for-bisnes").click(function() {
    $("#on-for-bisnes").removeClass("active");
    $(".for-client").removeClass("active");
    $("#on-for-bisnes").addClass("active");
    $(".for-bisnes").addClass("active");
    $("#for-client").fadeOut();
    setTimeout(function() {
      $("#for-bissnes").fadeIn();
    }, 500);
  });

  $(".variable").slick({
    dots: true,
    customPaging: function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      i++;
      return "0" + i;
    },
    arrows: false,
    infinite: true,
    variableWidth: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slider-dots",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipe: true,
          variableWidth: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          swipe: true,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1
      
        }
      }
    ]
  });
  $(".slider-dots li")
    .eq(1)
    .after("<div class='slide-load active'><span></span></div>");
  $(".variable").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".slide-load").addClass("active");
  });
  $(".variable").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".slide-load").removeClass("active");
  });

  if ($(".fullpage-wrap").hasClass() == 0) {
    if ($(window).width() > 991) {
      var myFullpage = new fullpage("#fullpage", {});
      $(".scroll-to-form").on("click", function() {
        fullpage_api.moveTo(5);
      });
    }
  }
});
