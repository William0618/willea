document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  gsap.to(".hero-bg", {
    scale: 1.1,       // 放大倍數
    ease: "power3.out", // 或 "power3.out"
    scrollTrigger: {
      trigger: ".hero-banner",
      start: "top top",
      end: "center top",
      scrub: 1.2,
      pin: true
    }
  });

  // let focus = document.querySelector(".focus");

  // document.addEventListener("mousemove", function (e) {
  //   let x = e.pageX;
  //   let y = e.pageY;

  //   focus.style.background = "radial-gradient(circle at " + x + "px " + y + 'px ,rgba(190, 255, 255, 0.2), transparent 40%)';

  // });
  // 滑鼠移動視差 (hero 文字微偏移)
  const heroContent = document.querySelector(".name-img");
  document.addEventListener("mousemove", e => {
    const { innerWidth, innerHeight } = window;
    const moveX = (e.clientX - innerWidth / 2) / 50;  // 數字越小，偏移越大
    const moveY = (e.clientY - innerHeight / 2) / 50;
    gsap.to(heroContent, {
      x: moveX,
      y: moveY,
      duration: 0.5,
      ease: "power2.out"
    });
  });
  // gsap.to("#photo-gallery .gallery-img img", {
  //   y: -150,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: "#photo-gallery",
  //     start: "top bottom",
  //     end: "bottom top",
  //     scrub: true
  //   }
  // });

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#photo-gallery",
  //     start: "top top",     // 捲到頂端觸發
  //     end: "+=1000",        // 區塊總長度
  //     scrub: true,          // 跟著滾動
  //     pin: true,            // 固定在畫面
  //     anticipatePin: 1
  //   }
  // });

  // // 每張照片依序浮現 + 往上滾走
  // tl.fromTo("#photo-gallery .gallery-img:nth-of-type(1)", 
  //   { yPercent: 100,}, 
  //   { yPercent: -200, opacity: 1, duration: 5 }, "<+0.5");

  // tl.fromTo("#photo-gallery .gallery-img:nth-of-type(2)", 
  //   { yPercent: 100,}, 
  //   { yPercent: -200, opacity: 1, duration: 5 }, "<+1");

  // tl.fromTo("#photo-gallery .gallery-img:nth-of-type(3)", 
  //   { yPercent: 100,}, 
  //   { yPercent: -200, opacity: 1, duration: 5 }, "<+1.5");
  // gsap.to("#character", {
  //   scrollTrigger: {
  //     scroller: "body",
  //     start: "top 10%",
  //     end: "top -100%",
  //     trigger: "#character",
  //     pin: true,
  //     scrub: 2,
  //   }
  // });
  let mm = gsap.matchMedia();
  // 桌機（>=768px）做 X 軸
  mm.add("(min-width: 768px)", () => {
    gsap.from(".groom-part", {
      xPercent: 100,
      rotate: 0,
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        start: "top 100%",
        end: "top 0",
        trigger: ".groom-part",
        scrub: 2,
        // markers: true,

      }
    });

    gsap.from(".bride-part", {
      xPercent: -100,
      rotate: 0,
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        start: "top 100%",
        end: "top 0%",
        trigger: ".bride-part",
        scrub: 2,
        // markers: true,

      }
    });
  });



  // 手機（<768px）做 Y 軸
  mm.add("(max-width: 767px)", () => {
    gsap.from(".groom-part .intro-text", {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".groom-part .intro-text",
        start: "top 100%",
        end: "top 0%",
        scrub: 2,
        // markers: true,
      },
    });

    gsap.from(".bride-part .intro-text", {
      y: -80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".bride-part .intro-text",
        start: "top 100%",
        end: "top 50%",
        scrub: 2,
        // markers: true,
      }
    });
  });
  
});
