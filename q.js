function animateFrom(selector, animationProps) {
  gsap.from(
    selector,
    { ...animationProps.startState },
    {
      ...animationProps.animation,
      scrollTrigger: {
        trigger: animationProps.trigger,
        start: animationProps.scrollStart,
        end: animationProps.scrollEnd,
        scrub: animationProps.scrub || false,
      },
    }
  );
}

function animateTo(selector, animationProps) {
  gsap.to(
    selector,
    { ...animationProps.startState },
    {
      ...animationProps.animation,
      scrollTrigger: {
        trigger: animationProps.trigger,
        start: animationProps.scrollStart,
        end: animationProps.scrollEnd,
        scrub: animationProps.scrub || false,
      },
    }
  );
}

animateTo(".slide--0 .intro__content", {
  startState: {
    x: 500,
    opacity: 0,
  },
  animation: {
    x: 0,
    opacity: 1,
  },
  trigger: ".s1",
  scrollStart: "top top",
  scrollEnd: "bottom center",
  scrub: true,
});

// Intro slide
// gsap.to(".slide--0 .intro__content", {
//   scrollTrigger: {
//     trigger: ".s1",
//     start: "top top",
//     end: "bottom center",
//     scrub: true,
//   },
//   x: 500,
//   opacity: 0,
//   ease: "power4.in",
// });

gsap.to(".slide--0 .intro__img", {
  scrollTrigger: {
    trigger: ".s1",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
  x: -500,
  opacity: 0,
  ease: "power4.in",
});

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
      start: "top top+=200",
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
    opacity: 0,
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
    opacity: 0,
    ease: "power2",
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
  ".slide--2 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s3",
      scrub: true,
      start: "top top+=200",
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
    opacity: 0,
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
    opacity: 0,
    ease: "power2",
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
  ".slide--3 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s4",
      scrub: true,
      start: "top top+=200",
      end: "top top-=200",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
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
    opacity: 0,
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
    opacity: 0,
    ease: "power2",
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
  ".slide--4 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s5",
      scrub: true,
      start: "top top+=200",
      end: "top top-=200",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
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
    opacity: 0,
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
    opacity: 0,
    ease: "power2",
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
  ".slide--5 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s6",
      scrub: true,
      start: "top top+=200",
      end: "top top-=200",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
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
    opacity: 0,
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
    opacity: 0,
    ease: "power2",
  },
  0
);

gsap.to(
  ".slide--6 nobordered",
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
  ".slide--6 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s7",
      scrub: true,
      start: "top top+=200",
      end: "top top-=200",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
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
    opacity: 0,
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
    opacity: 0,
    ease: "power2",
  },
  0
);

gsap.to(
  ".slide--7 nobordered",
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
  ".slide--7 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s8",
      scrub: true,
      start: "top top+=200",
      end: "top top-=200",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
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
    opacity: 0,
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
    opacity: 0,
    ease: "power2",
  },
  0
);

gsap.to(
  ".slide--8 borderedq",
  {
    scrollTrigger: {
      trigger: ".s9",
      scrub: true,
      start: "top top+=100",
      end: "top top-=100",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
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
      start: "top top+=200",
      end: "top top-=200",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
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
