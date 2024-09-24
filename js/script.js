const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

$(document).ready(function () {
  let modalShown = false;

  $(window).on("scroll", function () {
    if (!modalShown && $(window).scrollTop() > 500) {
      // Adjust this value to when the modal should appear
      $("#videoModal").modal("show");
      modalShown = true; // Ensure modal is shown only once per session
    }
  });

  $("#videoModal").on("hidden.bs.modal", function () {
    $("#videoIframe").attr("src", ""); // Stop the video
  });

  $("#videoModal").on("shown.bs.modal", function () {
    $("#videoIframe").attr(
      "src",
      "https://www.youtube.com/embed/mApUfvbyCLQ?si=lTiUxHSuCHG40Waq"
    ); // Restore the video source
  });
});

$(document).ready(function () {
  // Show/Hide the scroll-to-top button
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      // Adjust this value to when the button should appear
      $("#scrollTopBtn").removeClass("hide").addClass("show");
    } else {
      $("#scrollTopBtn").removeClass("show").addClass("hide");
    }
  });

  // Scroll to top when button is clicked
  $("#scrollTopBtn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});

var swiper = new Swiper(".happy-customers-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,      // Delay between slides in milliseconds (3 seconds)
        disableOnInteraction: false, // Autoplay will not stop after user interaction
      },
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

$("#hc-prev").click(() => {
  $(".swiper-button-prev").click();
});

$("#hc-next").click(() => {
  $(".swiper-button-next").click();
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("main-head");

// Get the offset position of the navbar
var sticky = 200;

// Add the sticky class to the navbar when you reach its scroll position.
// Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top");
    navbar.classList.add("bg-white");
  } else {
    navbar.classList.remove("fixed-top");
    navbar.classList.remove("bg-white");
  }
}

// Call the function when the page is scrolled
window.onscroll = function() {
  myFunction();
};

// Optional: Call the function once when the page loads to handle initial positioning
myFunction();


$(".hero-banner-slider").slick({
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
});

$(".banner-slide-nav #prev").click(() => {
  $(".slick-prev").click();
});

$(".banner-slide-nav #next").click(() => {
  $(".slick-next").click();
});

$(".partners-slider").slick({
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".brands-slider").slick({
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".store-slider").slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".store-slide-nav #prev").click(() => {
  $(".slick-prev").click();
});

$(".store-slide-nav #next").click(() => {
  $(".slick-next").click();
});

$(".front-trending-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// content display sytem of different lenses
$(document).ready(function () {
  // Click event for the category buttons
  $(".cat-nav").on("click", function (e) {
    e.preventDefault();

    // Get the content type from the clicked button
    var contentType = $(this).data("content");

    // Prepare the content and HTML structure separately
    var title = "";
    var content = "";
    switch (contentType) {
      case "Free Form Progressive":
        title = "<h5>Free Form Progressive  :</h5>";
        content =
          "- Free-form surfacing, also referred to as direct or digital surfacing, refers to a process that is capable of producing complex surface shapes, including aspheric, atoric and even progressive addition surfaces. A typical process begins by generating the lens surface using a three-axis, computer numerically controlled (or CNC) generator. With three possible axes of movement, single-point cutting tools can produce virtually any lens surface shape with a high degree of accuracy and smoothness. The worked lens surface is then polished to a high luster using a flexible polishing pad that is also dynamically controlled by a computer.";
        break;
      case "Blue Cut Lens":
        title = "<h5>Blue Cut Lens :</h5>";
        content =
          "Blue cut lenses feature a special coating that reflects harmful blue light and restricts it from passing through the lenses of your eyeglasses. Blue light is emitted from computer and mobile screens and long term exposure to this type of light increases the chances of retinal damage.";
        break;
      case "Photo Sensitive Lens":
        title = "<h5>Photo Sensitive Lens  :</h5>";
        content =
          'Their ability to vary in the amount of tint depending on the light intensity makes them a versatile lens. The one shortcoming is that they do not darken while driving as the car windshield blocks the direct UV light needed to begin the darkening process. Some photosensitive lenses are "extra" dark for driving but may remain too dark for night driving. There is a photosensitive lens that activates into a polarized lens called Transitions Vantage but it still requires direct light to activate it. ';
        break;
      case "Power Sunglass":
        title = `<h5>Power Sunglass  :</h5>`;
        content = `Power sunglasses are <span class="bg-warning">specially designed for people with vision correction issues to offer them complete visual clarity and UV protection without losing their style</span>.
              `;
        break;
      case "Night Vision Lens":
        title = "<h5>Night Vision Lens :</h5>";
        content =
          'Night vision glasses are <span class="bg-warning">a type of eyeglass that improve night vision, used especially as driving glasses.</span>  These night glasses are coated in yellow-tinted, anti-reflective material, and may also be polarized to improve vision at night.';
        break;
      case "Drive Safe Lens":
        title = "<h5>Drive Safe Lens :</h5>";
        content =
          "These lenses help you enjoy better vision in all weather and light conditions, protect your eyes from perceived glare and make it easier for you to shift your viewing focus from sat nav and rear-view mirror to windscreen – quickly and often.";
        break;
      case "Myopia Control Lens":
        title = "<h5>Myopia Control Lens :</h5>";
        content =
          'Myopia control spectacles and contact lenses are <span class="bg-warning">designed to focus peripheral light rays in front of the retina, to act as a stop signal to encourage slower eye growth and slow progression of myopia.</span>';
        break;
      case "Customized Progressive lens":
        title = "<h5>Customized Progressive lens :</h5>";
        content =
          "With lesser amount of peripheral distortions and wider field of view, there will be lesser amount of head movement when you want to have sharp vision. Your vision will also be more natural looking through the lenses. Hence, with customized progressive, you will be able to adapt faster as compared to standard progressive.";
        break;
      case "Double Aspheric Lenses":
        title = "<h5>Double Aspheric Lenses :</h5>";
        content =
          'Double aspheric lenses <span class="bg-warning">use irregular curvatures on both their front and rear surfaces to make them thinner in profile, lighter in weight and aesthetically flatter.</span> These lenses are popular for strong prescriptions to reduce thickness at their centers or edges.';
        break;
      case "Prism Lenses":
        title = "<h5>Prism Lenses :</h5>";
        content =
          "A prism added to eyeglasses bends light before it travels through the eye. The light is redirected to the right place on the retina in each eye. The brain then fuses the two images together to produce one, clear picture.";
        break;

      // Add more cases for other buttons
    }

    $("#button-section").fadeOut(300, function () {
      $("#content-display").html(""); // Clear previous content

      $("#content-display").append(title);
      $("#content-display").append(content);

      $("#content-section").fadeIn(300); // Fade in the content section
    });
  });

  // Click event for the back button
  $("#back-button").on("click", function () {
    // Fade out the content and show the buttons
    $("#content-section").fadeOut(300, function () {
      $("#button-section").fadeIn(300);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all blue arrow buttons
  const arrowButtons = document.querySelectorAll(".blue-arrow");

  // Add click event to each button
  arrowButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      const card = this.closest(".lva-card");
      const overlay = card.querySelector(".overlay");
      overlay.classList.toggle("active"); // Toggle overlay visibility
    });
  });

  // Add click event to close button in the overlay
  document.querySelectorAll(".close-overlay").forEach((button) => {
    button.addEventListener("click", function () {
      const overlay = this.closest(".overlay");
      overlay.classList.remove("active"); // Hide overlay
    });
  });
});


