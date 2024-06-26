gsap.registerPlugin(ScrollTrigger);
// Intro slide
gsap.to(".slide--0 .intro__content", {
  scrollTrigger: {
    trigger: ".s1",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
  x: "100vw",
  opacity: 0,
  ease: "power4",
});

gsap.to(".slide--0 .intro__img", {
  scrollTrigger: {
    trigger: ".s1",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
  x: "-100vw",
  opacity: 0,
  ease: "power4",
});

gsap.to(".header", {
  scrollTrigger: {
    trigger: ".s1",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
  x: "-100vw",
  opacity: 0,
  ease: "power4",
});

gsap.to(
  ".slide--0",
  {
    scrollTrigger: {
      trigger: ".s1",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 1

gsap.from(
  ".slide--1 .imgl",
  {
    scrollTrigger: {
      trigger: ".s2",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "-100vw",
    ease: "power2",
  },
  0
);

gsap.from(
  ".slide--1 .imgr",
  {
    scrollTrigger: {
      trigger: ".s2",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "100vw",
    ease: "power2",
  },
  0
);

gsap.to(
  ".slide--1 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s2",
      scrub: true,
      start: "top top+=100",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--1 .bordered",
  {
    scrollTrigger: {
      trigger: ".s2",
      scrub: true,
      start: "top top+=100",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--1",
  {
    scrollTrigger: {
      trigger: ".s2",
      scrub: true,
      start: "bottom center+=100",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--1",
  {
    scrollTrigger: {
      trigger: ".s2",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// Slide 2

gsap.from(
  ".slide--2 .imgl",
  {
    scrollTrigger: {
      trigger: ".s3",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "power2",
  },
  0
);

gsap.from(
  ".slide--2 .imgr",
  {
    scrollTrigger: {
      trigger: ".s3",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "100vw",
    ease: "power2",
  },
  0
);

gsap.to(
  ".slide--2 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s3",
      scrub: true,
      start: "top top+=100",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "power4",
  },
  0
);
gsap.to(
  ".slide--2 .bordered",
  {
    scrollTrigger: {
      trigger: ".s3",
      scrub: true,
      start: "top top+=100",
      end: "top top-=100",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--2",
  {
    scrollTrigger: {
      trigger: ".s3",
      scrub: true,
      start: "bottom center+=100",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--2",
  {
    scrollTrigger: {
      trigger: ".s3",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// Slide 3

gsap.from(
  ".slide--3 .imgl",
  {
    scrollTrigger: {
      trigger: ".s4",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "power2",
  },
  0
);

gsap.from(
  ".slide--3 .imgr",
  {
    scrollTrigger: {
      trigger: ".s4",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "100vw",
    ease: "power2",
  },
  0
);
gsap.to(
  ".slide--3 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s4",
      scrub: true,
      start: "top top+=100",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "power4",
  },
  0
);
gsap.to(
  ".slide--3 .bordered",
  {
    scrollTrigger: {
      trigger: ".s4",
      scrub: true,
      start: "top top+=100",
      end: "top top-=100",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--3",
  {
    scrollTrigger: {
      trigger: ".s4",
      scrub: true,
      start: "bottom center+=100",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--3",
  {
    scrollTrigger: {
      trigger: ".s4",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// Slide 4

gsap.from(
  ".slide--4 .imgr",
  {
    scrollTrigger: {
      trigger: ".s5",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "100vw",
    ease: "power2",
  },
  0
);

gsap.from(
  ".slide--4 .imgl",
  {
    scrollTrigger: {
      trigger: ".s5",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "power2",
  },
  0
);

gsap.to(
  ".slide--4 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s5",
      scrub: true,
      start: "top top+=100",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--4 .bordered",
  {
    scrollTrigger: {
      trigger: ".s5",
      scrub: true,
      start: "top top+=100",
      end: "top top-=100",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--4",
  {
    scrollTrigger: {
      trigger: ".s5",
      scrub: true,
      start: "bottom center+=100",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--4",
  {
    scrollTrigger: {
      trigger: ".s5",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// Slide 5

gsap.from(
  ".slide--5 .imgr",
  {
    scrollTrigger: {
      trigger: ".s6",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "100vw",
    ease: "power2",
  },
  0
);

gsap.from(
  ".slide--5 .imgl",
  {
    scrollTrigger: {
      trigger: ".s6",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "power2",
  },
  0
);
gsap.to(
  ".slide--5 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s6",
      scrub: true,
      start: "top top+=100",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--5 .bordered",
  {
    scrollTrigger: {
      trigger: ".s6",
      scrub: true,
      start: "top top+=100",
      end: "top top-=100",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--5",
  {
    scrollTrigger: {
      trigger: ".s6",
      scrub: true,
      start: "bottom center+=100",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--5",
  {
    scrollTrigger: {
      trigger: ".s6",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// Slide 6

gsap.from(
  ".slide--6 .imgr",
  {
    scrollTrigger: {
      trigger: ".s7",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "100vw",
    ease: "power2",
  },
  0
);

gsap.from(
  ".slide--6 .imgl",
  {
    scrollTrigger: {
      trigger: ".s7",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "power2",
  },
  0
);

gsap.to(
  ".slide--6 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s7",
      scrub: true,
      start: "top top+=100",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--6 .nobordered",
  {
    scrollTrigger: {
      trigger: ".s7",
      scrub: true,
      start: "top top+=100",
      end: "top top-=100",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--6",
  {
    scrollTrigger: {
      trigger: ".s7",
      scrub: true,
      start: "bottom center+=100",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--6",
  {
    scrollTrigger: {
      trigger: ".s7",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// Slide 7

gsap.from(
  ".slide--7 .imgr",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "100vw",
    ease: "power2",
  },
  0
);

gsap.from(
  ".slide--7 .imgl",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "power2",
  },
  0
);

gsap.to(
  ".slide--7 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s8",
      scrub: true,
      start: "top top+=100",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--7 .nobordered",
  {
    scrollTrigger: {
      trigger: ".s8",
      scrub: true,
      start: "top top+=100",
      end: "top top-=100",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--7",
  {
    scrollTrigger: {
      trigger: ".s8",
      scrub: true,
      start: "bottom center+=100",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--7",
  {
    scrollTrigger: {
      trigger: ".s8",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// Slide 8

gsap.from(
  ".slide--8 .imgr",
  {
    scrollTrigger: {
      trigger: ".s9",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "100vw",
    ease: "power2",
  },
  0
);

gsap.from(
  ".slide--8 .imgl",
  {
    scrollTrigger: {
      trigger: ".s9",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "power2",
  },
  0
);

gsap.to(
  ".slide--8 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s9",
      scrub: true,
      start: "top top+=100",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--8 .bordered",
  {
    scrollTrigger: {
      trigger: ".s9",
      scrub: true,
      start: "top top+=100",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--8",
  {
    scrollTrigger: {
      trigger: ".s9",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--8",
  {
    scrollTrigger: {
      trigger: ".s9",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// reds
gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s4",
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
    opacity: 1,
    ease: "power2",
  },
  0
);

gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s4",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    transform: "rotate(90deg)",
    ease: "power2",
  },
  0
);

gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s5",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    transform: "scale(1.5)",
    ease: "power2",
  },
  0
);

gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s5",
      start: "top center",
      end: "center center",
      scrub: true,
    },
    opacity: 0,
    ease: "power2",
  },
  0
);

gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s7",
      start: "top bottom",
      end: "top center",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 1,
    transform: "scale(0.5)",
    y: "-50%",
    ease: "power2",
  },
  0
);

gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s7",
      start: "top center",
      end: "top top",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    y: "50%",
    ease: "power2",
  },
  0
);

gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "top bottom",
      end: "top center",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    y: 0,
    transform: "scale(1.2)",
    ease: "power2",
  },
  0
);

gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "top bottom",
      end: "top center",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    x: "-50%",
    y: "30%",
    transform: "scale(0.8)",
    ease: "power2",
  },
  0
);

gsap.to(
  " .redp2",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "top bottom",
      end: "top center",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 1,
    transform: "scale(0.5)",
    y: "-10%",
    x: "50%",
    ease: "power4",
  },
  0
);

gsap.to(
  " .redp2",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "center center",
      end: "center top",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 1,
    transform: "scale(1)",
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "center center",
      end: "center top",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 1,
    transform: "scale(1)",
    x: 0,
    y: 0,
    opacity: 0,
    ease: "power4",
  },
  0
);

// intro 3

gsap.from(".slide--30 .intro__content", {
  scrollTrigger: {
    trigger: ".s10",
    start: "top bottom",
    end: "top center",
    scrub: true,
    toggleActions: "play none reverse none",
  },
  x: "100vw",
  opacity: 1,
  ease: "power4",
});

gsap.from(".slide--30 .intro__img", {
  scrollTrigger: {
    trigger: ".s10",
    start: "top bottom",
    end: "top center",
    scrub: true,
    toggleActions: "play none reverse none",
  },
  x: "-100vw",
  opacity: 1,
  ease: "power4",
});

gsap.to(
  ".header",
  {
    scrollTrigger: {
      trigger: ".s10",
      start: "top bottom",
      end: "top center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: 0,
    opacity: 1,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--30 .intro__content",
  {
    scrollTrigger: {
      trigger: ".s10",
      start: "top top",
      end: "bottom center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "100vw",
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--30 .intro__img",
  {
    scrollTrigger: {
      trigger: ".s10",
      start: "top top",
      end: "bottom center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-100vw",
    // opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".header",
  {
    scrollTrigger: {
      trigger: ".s10",
      start: "top top",
      end: "bottom center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--30",
  {
    scrollTrigger: {
      trigger: ".s10",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 1

gsap.fromTo(
  ".slide--31 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "top bottom",
      end: "top center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "100vh",
    opacity: 0,
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "top bottom",
      end: "top center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-20vh",
    opacity: 1,
    ease: "power4",
  },
  0
);

gsap.fromTo(
  ".slide--31 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "top bottom",
      end: "top center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-20vh",
    transform: "scale(1)",
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "center center+=200",
      end: "center center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    transform: "scale(0.6)",
    y: "0vh",
    ease: "power4",
  },
  0
);

gsap.from(
  ".slide--31 .slide--31__img1",
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "center center+=200",
      end: "center center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vh",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--31 .slide__content",
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "bottom bottom",
      end: "bottom center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--31",
  {
    scrollTrigger: {
      trigger: ".s11",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 2

gsap.fromTo(
  ".slide--32 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "top bottom",
      end: "top center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "200vw",
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "top bottom",
      end: "top center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-30vw",
    opacity: 1,
    ease: "power4",
  },
  0
);

gsap.fromTo(
  ".slide--32 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "top bottom",
      end: "top center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-30vw",
    transform: "scale(1)",
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "center center+=200",
      end: "center center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    transform: "scale(0.6)",
    y: "0vw",
    ease: "power4",
  },
  0
);

gsap.from(
  ".slide--32 .slide--32__img1",
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "center center+=200",
      end: "center center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: -500,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--32 .slide__content",
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "bottom bottom",
      end: "bottom center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--32",
  {
    scrollTrigger: {
      trigger: ".s12",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 3

gsap.from(
  ".slide--33__img2",
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "center center+=100",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.from(
  ".slide--33__content .rcol .s3_h3",
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "top center",
      end: "top center-=200",
      toggleActions: "play none reverse none",
    },
    x: "100vw",
    ease: "power4",
  },
  0
);

gsap.from(
  ".slide--33__content .rcol p",
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "center center+=200",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    height: 0,
    ease: "power4",
  },
  0
);

gsap.from(
  ".slide--33__content .rcol p",
  {
    scrollTrigger: {
      trigger: ".s13",
      start: "center center+=100",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
    duration: 1,
  },
  0
);

gsap.to(
  ".slide--33 .lcol",
  {
    scrollTrigger: {
      trigger: ".s13",
      start: "bottom center+=100",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
    duration: 1,
  },
  0
);
gsap.to(
  ".slide--33 .rcol",
  {
    scrollTrigger: {
      trigger: ".s13",
      start: "bottom center+=100",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
    duration: 1,
  },
  0
);

gsap.to(
  ".slide--33",
  {
    scrollTrigger: {
      trigger: ".s13",
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 4

gsap.fromTo(
  ".slide--34__img2",
  {
    scrollTrigger: {
      trigger: ".s14",
      start: "center bottom",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s14",
      start: "center bottom",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    y: 0,
    ease: "power4",
  }
);

gsap.to(".slide--34__img2", {
  scrollTrigger: {
    trigger: ".s14",
    start: "center center",
    end: "center center-=300",
    toggleActions: "play none reverse none",
  },
  opacity: 0,
  ease: "power2",
});

gsap.from(
  ".slide--34__content .rcol p",
  {
    scrollTrigger: {
      trigger: ".s14",
      scrub: true,
      start: "top bottom",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    x: "100vw",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--34 .lcol",
  {
    scrollTrigger: {
      trigger: ".s14",
      scrub: true,
      start: "bottom center+=100",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vw",
    ease: "power4",
  },
  0
);
gsap.to(
  ".slide--34 .rcol",
  {
    scrollTrigger: {
      trigger: ".s14",
      scrub: true,
      start: "bottom center+=100",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--34",
  {
    scrollTrigger: {
      trigger: ".s14",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 5

gsap.fromTo(
  ".slide--35 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "center bottom",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "100vh",
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "center bottom",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    y: 0,
    opacity: 1,
    ease: "power4",
  },
  0
);

gsap.fromTo(
  ".slide--35 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "center bottom",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    transform: "scale(1)",
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "center center+=200",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    transform: "scale(0.6)",
    ease: "power4",
  },
  0
);

gsap.from(
  ".slide--35 .slide--35__img1",
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "center center+=200",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vw",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--35 .slide__content",
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vw",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--35",
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 6

gsap.from(
  ".slide--36 .pair-txt",
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "center bottom",
      end: "center center",
    },
    opacity: 0,
    y: "100vh",
    ease: "power4",
  },
  2
);

gsap.fromTo(
  ".slide--36 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "top bottom",
      end: "top center",
    },
    opacity: 0,
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "top bottom",
      end: "top center",
    },
    opacity: 1,
    ease: "power4",
  },
  2
);

gsap.fromTo(
  ".slide--36 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "top bottom",
      end: "top center",
    },
    y: "0",
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "center center+=200",
      end: "center center",
    },
    transform: "scale(0.8)",
    y: 0,
    ease: "power4",
  },
  2
);

gsap.from(".slide--36 .slide--36__img1", {
  scrollTrigger: {
    trigger: ".s16",
    start: "center center+=200",
    end: "center center",
    scrub: true,
  },
  opacity: 0,
  y: "-100vh",
  ease: "power4",
});

gsap.to(".slide--36 .slide__content", {
  scrollTrigger: {
    trigger: ".s16",
    start: "bottom bottom",
    end: "bottom center",
    scrub: true,
  },
  opacity: 0,
  ease: "power4",
});

gsap.to(
  ".slide--36",
  {
    scrollTrigger: {
      trigger: ".s16",
      scrub: true,
      start: "bottom center+=200",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
  },
  0
);
gsap.to(
  ".slide--36",
  {
    scrollTrigger: {
      trigger: ".s16",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 7

gsap.from(".slide--37 .col-txt", {
  scrollTrigger: {
    trigger: ".s17",
    start: "center bottom",
    end: "center center",
    scrub: true,
  },
  opacity: 0,
  y: "100vw",
  ease: "power4",
});

gsap.from(".slide--37 .imgl", {
  scrollTrigger: {
    trigger: ".s17",
    start: "center bottom",
    end: "center center",
    scrub: true,
  },
  opacity: 0,
  x: "-100vw",
  ease: "power4",
});

gsap.from(".slide--37 .imgr", {
  scrollTrigger: {
    trigger: ".s17",
    start: "center bottom",
    end: "center center",
    scrub: true,
  },
  opacity: 0,
  x: "100vw",
  ease: "power4",
});

gsap.to(".txt-1", {
  scrollTrigger: {
    trigger: ".s17",
    start: "center center",
    end: "center center-=200",
    scrub: true,
  },
  opacity: 0,
  height: 0,
  y: "-100vw",
  ease: "power4",
});

gsap.from(".txt-2", {
  scrollTrigger: {
    trigger: ".s17",
    start: "center center",
    end: "center center-=200",
    scrub: true,
  },
  opacity: 0,
  height: 0,
  y: "100vw",
  ease: "power4",
});

gsap.to(
  ".slide--37",
  {
    scrollTrigger: {
      trigger: ".s17",
      scrub: true,
      start: "bottom center+=200",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
  },
  0
);
gsap.to(
  ".slide--37",
  {
    scrollTrigger: {
      trigger: ".s17",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 8

gsap.fromTo(
  ".slide--38 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s18",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    opacity: 0,
    y: "100vw",
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s18",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    y: "40vh",
    opacity: 1,
    ease: "power4",
  },
  0
);

gsap.fromTo(
  ".slide--38 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s18",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    y: "40vh",
    opacity: 1,
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s18",
      start: "center center+=200",
      end: "center center",
      scrub: true,
    },
    transform: "scale(0.6)",
    y: "0vh",
    ease: "power4",
  },
  0
);

gsap.from(
  ".slide--38 .slide--38__img1",
  {
    scrollTrigger: {
      trigger: ".s18",
      start: "center center+=200",
      end: "center center",
      scrub: true,
    },
    opacity: 0,
    y: "100vw",
    ease: "power4",
  },
  0
);

gsap.to(".slide--38 .slide__content", {
  scrollTrigger: {
    trigger: ".s18",
    start: "bottom bottom",
    end: "bottom center",
    scrub: true,
  },
  y: "-100vh",
  ease: "power4",
});

gsap.to(
  ".slide--38",
  {
    scrollTrigger: {
      trigger: ".s18",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 9

gsap.fromTo(
  ".slide--39 .pair-txt",
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    opacity: 0,
    y: "200vh",
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    y: "-20vh",
    opacity: 1,
    ease: "power4",
  },
  0
);

gsap.fromTo(
  ".slide--39 .pair-txt",
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    y: "-20vh",
    opacity: 1,
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "center center+=200",
      end: "center center",
      scrub: true,
    },
    transform: "scale(0.8)",
    y: "0vh",
    ease: "power4",
  }
);

gsap.from(".slide--39 .slide--39__img1", {
  scrollTrigger: {
    trigger: ".s19",
    start: "center center+=200",
    end: "center center",
    scrub: true,
  },
  opacity: 0,
  y: "-100vw",
  ease: "power4",
});

gsap.to(".slide--39 .slide__content", {
  scrollTrigger: {
    trigger: ".s19",
    start: "bottom bottom",
    end: "bottom center",
    scrub: true,
  },
  opacity: 0,
  ease: "power4",
});

gsap.to(
  ".slide--39",
  {
    scrollTrigger: {
      trigger: ".s19",
      scrub: true,
      start: "bottom center+=200",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
  },
  0
);
gsap.to(
  ".slide--39",
  {
    scrollTrigger: {
      trigger: ".s19",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 10

gsap.from(
  ".slide--310 .imgl",
  {
    scrollTrigger: {
      trigger: ".s20",
      start: "center bottom",
      end: "center bottom-=200",
      scrub: true,
    },
    opacity: 0,
    x: "-100vw",
    ease: "power4",
  },
  0
);
gsap.from(
  ".slide--310 .imgr",
  {
    scrollTrigger: {
      trigger: ".s20",
      start: "center bottom",
      end: "center bottom-=200",
      scrub: true,
    },
    opacity: 0,
    x: "100vw",
    ease: "power4",
  },
  0
);
gsap.from(
  ".slide--310 .col-txt",
  {
    scrollTrigger: {
      trigger: ".s20",
      start: "center center+=200",
      end: "center center",
      scrub: true,
    },
    opacity: 0,
    y: "100vw",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--310",
  {
    scrollTrigger: {
      trigger: ".s20",
      scrub: true,
      start: "bottom center+=200",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
  },
  0
);
gsap.to(
  ".slide--310",
  {
    scrollTrigger: {
      trigger: ".s20",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 11

gsap.from(".slide--311 .s3_h3", {
  scrollTrigger: {
    trigger: ".s21",
    start: "center bottom+=50",
    end: "center bottom",
    scrub: true,
  },
  opacity: 0,
  y: "100vh",
  ease: "power4",
});

gsap.to(".slide--311 .s3_h3", {
  scrollTrigger: {
    trigger: ".s21",
    start: "center bottom+=50",
    end: "center bottom",
    scrub: true,
  },
  width: "90vw",
  ease: "power4",
});

gsap.to(
  ".slide--311",
  {
    scrollTrigger: {
      trigger: ".s21",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
  },
  0
);
gsap.to(
  ".slide--311",
  {
    scrollTrigger: {
      trigger: ".s21",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 11
gsap.from(
  ".slide--312",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "top bottom",
      end: "top bottom",
      scrub: true,
    },
    opacity: 0,
    y: "100vh",
    ease: "power4",
  },
  0
);

// 1 - 2
gsap.fromTo(
  ".slide--312 .nred",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom",
      end: "center bottom-=200",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    y: "0%",
    transform: "scale(1) ",
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=101",
      end: "center bottom-=200",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "50vw",
    y: "-250%",
    transform: "scale(3) ",
    ease: "power4",
  },
  0
);

// 2-3
gsap.fromTo(
  ".slide--312 .nred",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=101",
      end: "center bottom-=200",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "50vw",
    y: "-250%",
    transform: "scale(3) ",
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=201",
      end: "center bottom-=300",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "10vw",
    y: "-50%",
    transform: "scale(4)",
    ease: "power4",
    duration: 2,
  },
  0
);

// 3-4
gsap.fromTo(
  ".slide--312 .nred",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=201",
      end: "center bottom-=300",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "10vw",
    y: "-50%",
    transform: "scale(4)",
    ease: "power4",
    duration: 2,
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=301",
      end: "center bottom-=400",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "60vw",
    y: "-25%",
    transform: "scale(6) rotateY(180deg)",
    ease: "power4",
    duration: 2,
  },
  0
);

// 4-5
gsap.fromTo(
  ".slide--312 .nred",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=301",
      end: "center bottom-=400",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "60vw",
    y: "-25%",
    transform: "scale(6) rotateY(180deg)",
    ease: "power4",
    duration: 2,
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=401",
      end: "center bottom-=500",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    x: "50vw",
    y: "20vh",
    transform: "rotateY(180deg) scale(10)",
    ease: "power4",
    duration: 2,
  },
  0
);

// 5-6
gsap.fromTo(
  ".slide--312 .nred",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=401",
      end: "center bottom-=500",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    x: "50vw",
    y: "20vh",
    transform: "rotateY(180deg) scale(10)",
    ease: "power4",
    duration: 2,
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=501",
      end: "center bottom-=600",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    x: "140vw",
    y: "-20vh",
    transform: "rotateY(180deg) scale(64,200)",
    ease: "power4",
    duration: 2,
  },
  0
);

// 1-2
gsap.fromTo(
  ".slide--312 .nw",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom",
      end: "center bottom-=100",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "100vw",
    ease: "power4",
    transform: "scale(1) ",
    x: "0vw",
    y: "0%",
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=101",
      end: "center bottom-=200",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-50vw",
    y: "-150%",
    transform: "scale(2) rotateY(180deg)",
    ease: "power4",
    duration: 2,
  },
  0
);

// 2-3
gsap.fromTo(
  ".slide--312 .nw",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=101",
      end: "center bottom-=200",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-50vw",
    y: "-150%",
    transform: "scale(2) rotateY(180deg)",
    ease: "power4",
    duration: 2,
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=201",
      end: "center bottom-=300",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-10vw",
    y: "-250%",
    transform: "scale(3)",
    ease: "power4",
    duration: 2,
  },
  0
);

// 3-4
gsap.fromTo(
  ".slide--312 .nw",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=201",
      end: "center bottom-=300",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-10vw",
    y: "-250%",
    transform: "scale(3)",
    ease: "power4",
    duration: 2,
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=301",
      end: "center bottom-=400",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-50vw",
    y: "-25%",
    zIndex: -1,
    transform: "scale(6) rotateY(180deg)",
    ease: "power4",
    duration: 2,
  },
  0
);

// 4-5
gsap.fromTo(
  ".slide--312 .nw",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=301",
      end: "center bottom-=400",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-50vw",
    y: "-25%",
    zIndex: -1,
    transform: "scale(6) rotateY(180deg)",
    ease: "power4",
    duration: 2,
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "center bottom-=401",
      end: "center bottom-=500",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    x: "50vw",
    y: "20vh",
    zIndex: -1,
    transform: " rotateY(180deg) scale(10)",
    ease: "power4",
    duration: 2,
  },
  0
);

gsap.to(
  ".slide--312",
  {
    scrollTrigger: {
      trigger: ".s22",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--312",
  {
    scrollTrigger: {
      trigger: ".s22",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 13
gsap.from(
  ".slide--313 .imgl",
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "center bottom",
      end: "center bottom-=200",
      toggleActions: "play none reverse none",
    },
    x: "-100vw",
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.from(
  ".slide--313 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "center bottom",
      end: "center bottom-=200",
      toggleActions: "play none reverse none",
    },
    y: "100vh",
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--313 .imgl",
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "center bottom-=250",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    width: 0,
    y: "-100vh",
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.from(
  ".slide--313 .imgr",
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "center bottom-=250",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    width: 0,
    x: "100vh",
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--313",
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
  },
  0
);
gsap.to(
  ".slide--313",
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 14

gsap.fromTo(
  ".slide--314 .gal-3",
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "center bottom",
      end: "center bottom-=200",
      toggleActions: "play none reverse none",
    },
    y: "100vh",
    x: "200vw",
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "center bottom",
      end: "center bottom-=200",
      toggleActions: "play none reverse none",
    },
    y: "10vh",
    x: "0vw",
    opacity: 1,
    ease: "power4",
  },
  0
);

gsap.from(
  ".slide--314 .s3_h2",
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "center center+=200",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    y: "-50vh",
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.fromTo(
  ".slide--314 .gal-3",
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "center bottom",
      end: "center bottom-=200",
      toggleActions: "play none reverse none",
    },
    y: "10vh",
    opacity: 1,
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "center center+=200",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    transform: "scale(1.2)",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--314",
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
  },
  0
);
gsap.to(
  ".slide--314",
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 15

gsap.from(".slide--315 .s3_h3", {
  scrollTrigger: {
    trigger: ".s25",
    start: "top center+=300",
    end: "top top",
    scrub: true,
  },
  opacity: 0,
  y: "100vh",
  ease: "power4",
});

gsap.to(".slide--315 .s3_h3", {
  scrollTrigger: {
    trigger: ".s25",
    start: "center bottom+=300",
    end: "center bottom",
    scrub: true,
  },
  width: "90vw",
  ease: "power4",
});
gsap.from(".slide--315 .slide--315__img1", {
  scrollTrigger: {
    trigger: ".s25",
    start: "center center+=300",
    end: "center center",
    scrub: true,
  },
  width: "0vw",
  opacity: 0,
  x: "-100vw",
  ease: "power4",
});

gsap.to(
  ".slide--315",
  {
    scrollTrigger: {
      trigger: ".s25",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
  },
  0
);
gsap.to(
  ".slide--315",
  {
    scrollTrigger: {
      trigger: ".s25",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 16

gsap.from(".slide--316 .s3_h3", {
  scrollTrigger: {
    trigger: ".s26",
    start: "center bottom",
    end: "center bottom-=300",
    scrub: true,
  },
  opacity: 0,
  y: "100vh",
  ease: "power4",
});

gsap.to(".slide--316 .s3_h3", {
  scrollTrigger: {
    trigger: ".s26",
    start: "center bottom",
    end: "center bottom-=300",
    scrub: true,
  },
  width: "90vw",
  ease: "power4",
});

gsap.to(
  ".slide--316",
  {
    scrollTrigger: {
      trigger: ".s26",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
  },
  0
);
gsap.to(
  ".slide--316",
  {
    scrollTrigger: {
      trigger: ".s26",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 17

gsap.fromTo(
  ".slide--317 .slide--317__img1",
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "center bottom",
      end: "center bottom-=300",
      scrub: true,
    },
    opacity: 0,
    y: "100vh",
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "center bottom",
      end: "center bottom-=300",
      scrub: true,
    },
    opacity: 1,
    y: "0vh",
    transform: "scale(1.3)",
    ease: "power4",
  },
  0
);

gsap.fromTo(
  ".slide--317 .slide--317__img1",
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "center bottom",
      end: "center bottom-=300",
      scrub: true,
    },
    opacity: 1,
    y: "0vh",
    transform: "scale(1.3)",
    ease: "power4",
  },
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "center center",
      end: "center center-=100",
      scrub: true,
    },
    transform: "scale(1)",
    y: "0vh",
    ease: "power4",
  },
  0
);

gsap.from(
  ".slide--317 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "center center",
      end: "center center-=200",
      scrub: true,
    },
    opacity: 0,
    y: "100vh",
    ease: "power4",
  },
  0
);

gsap.to(
  ".slide--317",
  {
    scrollTrigger: {
      trigger: ".s27",
      scrub: true,
      start: "bottom center+=300",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "power4",
  },
  0
);
gsap.to(
  ".slide--317",
  {
    scrollTrigger: {
      trigger: ".s27",
      scrub: true,
      start: "bottom center+=300",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "power4",
  },
  0
);

// slide 3 18

gsap.from(
  ".slide--318 .p1",
  {
    scrollTrigger: {
      trigger: ".s28",
      start: "center bottom",
      end: "center bottom-=300",
      scrub: true,
    },
    opacity: 0,
    ease: "power4",
  },
  0
);

gsap.from(
  ".slide--318 .p2",
  {
    scrollTrigger: {
      trigger: ".s28",
      start: "bottom center+=300",
      end: "bottom center",
      scrub: true,
    },
    opacity: 0,
    height: 0,
    ease: "power4",
  },
  0
);
