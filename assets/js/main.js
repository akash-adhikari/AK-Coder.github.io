$(document).ready(function () {
  // active class change in menue
  let $navLinks = $(".headerArea .navbar-nav a");
  $navLinks.click(function (e) {
    $(".headerArea .navbar-nav a").removeClass("active");
    e.target.classList.add("active");
  });

  let $btns = $(".project-area .button-group button");
  $btns.click(function (e) {
    $(".project-area .button-group button").removeClass("active-btn");
    e.target.classList.add("active-btn");
    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector,
    });
    return false;
  });

  $(".project-area .button-group #btn1").trigger("click");

  // For Letter by letter typing
  if ($(".typed").length) {
    var typed_strings = $(".typed").data("typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  // magnificpopup
  $(".project-area .grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });

  // owl-carousal
  $(".siteMain .client-area .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      544: {
        items: 2,
      },
    },
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").show();
    } else {
      $(".back-to-top").hide();
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // For making Nav bar Sticky
  let nav_offset_top = $(".headerArea").height() + 50;

  function navbarFixed() {
    if ($(".headerArea").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".headerArea .mainMenue").addClass("navbar_fixed");
        } else {
          $(".headerArea .mainMenue").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();
});
