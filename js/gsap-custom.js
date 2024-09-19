// OUR STORE
Splitting();
// const ourStoreTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#our-store-wrapper",
//     start: "top 50%",
//     end: "50% 50%",
//     // markers: true,
//     scrub: 1,
//   },
// });

// ourStoreTl.from("#our-store-wrapper .subhead .char", {
//   y: 50,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.05,
//   ease: "back.out",
// });

document.querySelectorAll("section").forEach((section) => {
  // Check if there are .char elements within .subhead in this section
  const chars = section.querySelectorAll(".subhead .char");

  if (chars.length) {
    // Create a timeline for this section
    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 1,
          // markers: true, // Uncomment for debugging
        },
      })
      .from(chars, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "back.out",
      });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animate the hero section
  gsap.from(".hero-stall .head", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-stall",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".hero-stall .schedule-call", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-stall",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".hero-stall img", {
    duration: 1.5,
    opacity: 0,
    x: 100,
    delay: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-stall",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none none",
    },
  });

  // Animate sections on scroll
  gsap.utils
    .toArray(
      ".more-stores, .low-vision-aids, .callback"
    )
    .forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      });
    });

  // Animate headings
  gsap.utils
    .toArray(".more-stores h2, .why-partners h2, .partners h2")
    .forEach((heading) => {
      gsap.from(heading, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      });
    });

  // Animate cards
  gsap.utils.toArray(".aids-card, .listing-num").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.2 + i * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        end: "bottom 70%",
        toggleActions: "play none none none",
      },
    });
  });
});

// Initialize GSAP with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


// Another animation for the "management-program" section
gsap.from(".management-program ul li", {
  opacity: 0,
  x: -100, // Move the elements from the left
  stagger: 0.3,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".management-program",
    start: "top 75%",
    toggleActions: "play none none reverse",
    markers: false
  }
});

