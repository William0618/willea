document.addEventListener("DOMContentLoaded", () => {
  
  gsap.registerPlugin(ScrollTrigger);

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
  let focus = document.querySelector(".focus");

  document.addEventListener("mousemove", function (e) {
    let x = e.pageX;
    let y = e.pageY;

    focus.style.background = "radial-gradient(circle at " + x + "px " + y + 'px ,rgba(190, 255, 255, 0.2), transparent 40%)';

  });
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

  // // 假設在頁面載入後執行 (類似 bundle.js 的 webpackBootstrap)
  // document.addEventListener('DOMContentLoaded', function () {
  //   const spotlightElements = document.querySelectorAll('[data-spotlight]');
  //   const gradients = {
  //     gradient1: 'linear-gradient(135deg, #1e3c72, #2a5298)',  // 預設
  //     gradient2: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',  // hover 變動
  //     // 可從 JSON data-es.json 的 images 動態載入顏色
  //   };

  //   spotlightElements.forEach(el => {
  //     // 滑鼠移入：變換背景
  //     el.addEventListener('mouseenter', function (e) {
  //       const gradientKey = e.target.getAttribute('data-spotlight');
  //       const newGradient = gradients[gradientKey] || gradients.gradient2;
  //       document.body.style.background = newGradient;

  //     });

  //     // 滑鼠移出：恢復預設
  //     el.addEventListener('mouseleave', function () {
  //       document.body.style.background = gradients.gradient1;
  //     });
  //   });
  // });
});
