document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const mm = gsap.matchMedia();

  /* =====================================================
    hero section
  ===================================================== */
  gsap.to(".hero-bg", {
    scale: 1.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "center top",
      scrub: 1.2,
      pin: true
    }
  });

  /* =====================================================
    save the date section
  ===================================================== */

  gsap.timeline({
    scrollTrigger: {
      trigger: "#save-the-date",
      start: "top 50%",
      toggleActions: "play none none reverse"
    }
  })
    .from("#save-the-date h1", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from("#save-the-date .date", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .from("#save-the-date .text", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.3");

  /* =====================================================
    invitation section
  ===================================================== */
  gsap.utils.toArray('#invitation .text h1').forEach((el, i) => {
    const img = el.querySelector('img');
    gsap.from(el, {
      y: 40,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "top 60%",
        toggleActions: "play none none reverse",
        scrub: true,
      }
    });

    if (img) {
      gsap.to(img, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    }
  });
  gsap.from("#invitation p", {
    y: 40,
    autoAlpha: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#invitation p",
      start: "top 70%",
      toggleActions: "play none none reverse"
    }
  });

  const imageOne = document.querySelector("#invitation .image1")

  imageOne.addEventListener("mouseenter", function () {
    imageOne.style.scale = "2"
    imageOne.style.transform = "rotate(-10deg)"
  });

  imageOne.addEventListener("mouseleave", function () {
    imageOne.style.scale = "1"
    imageOne.style.transform = "rotate(0deg)"
  });

  const imageTwo = document.querySelector("#invitation .image2")


  imageTwo.addEventListener("mouseenter", function () {
    imageTwo.style.scale = "2"
    imageTwo.style.transform = "rotate(10deg)"
  });

  imageTwo.addEventListener("mouseleave", function () {
    imageTwo.style.scale = "1"
    imageTwo.style.transform = "rotate(0deg)"
  });
  const imageThree = document.querySelector("#invitation .image3")

  imageThree.addEventListener("mouseenter", function () {
    imageThree.style.scale = "2"
    imageThree.style.transform = "rotate(-10deg)"
  });

  imageThree.addEventListener("mouseleave", function () {
    imageThree.style.scale = "1"
    imageThree.style.transform = "rotate(0deg)"
  });

  /* =====================================================
    character section
  ===================================================== */
  mm.add("(max-width: 767px)", () => {
    gsap.from(".bride-part .intro-text", {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".bride-part .intro-text",
        start: "top 100%",
        end: "top 0%",
        scrub: 2,
        // markers: true,
      },
    });

    gsap.from(".groom-part .intro-text", {
      y: -80,
      opacity: 0,
      scrollTrigger: {
        trigger: ".groom-part .intro-text",
        start: "top 100%",
        end: "top 50%",
        scrub: 2,
        // markers: true,
      }
    });
  });

  gsap.from(".groom-img", {
    x: 700,
    rotate: 0,
    scrollTrigger: {
      scroller: "body",
      start: "top 100%",
      end: "top -100%",
      trigger: ".groom-img",

      scrub: 2,

    }
  })

  gsap.from(".brige-img", {
    x: -700,
    rotate: 0,
    scrollTrigger: {
      scroller: "body",
      start: "top 100%",
      end: "top -100%",
      trigger: ".brige-img",

      scrub: 2,

    }
  })
  gsap.to("#character", {
    scrollTrigger: {
      scroller: "body",
      start: "top 10%",
      end: "top -120%",
      trigger: "#character",
      pin: true,
      scrub: 2,
    }
  });
  /* =====================================================
    gallery section
  ===================================================== */
  const tlGallery = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "#gallery",
      start: "top top",
      end: "+=3800",
      scrub: 5,
      // markers: true,
    }
  });
  const gallery = document.querySelector("#gallery");
  tlGallery.fromTo(gallery.querySelector(".bg"), { yPercent: 0 }, { yPercent: -100, duration: 25 }, "<");
  tlGallery.fromTo(gallery.querySelector(".gallery-intro"),
    { yPercent: 100 },
    { yPercent: -300, duration: 100 },
    "<-1");
  tlGallery.fromTo(gallery.querySelectorAll(".gallery-description")[0],
    { yPercent: 600, opacity: 0 },
    { yPercent: -300, opacity: 1, duration: 115 },
    '-=95'
  );

  const moments = gallery.querySelectorAll(".gallery-moments figure");
  tlGallery.fromTo(moments[0],
    { yPercent: 100 },
    { yPercent: -1200, duration: 90 },
    '-=115'
  );
  tlGallery.fromTo(moments[1],
    { yPercent: 110 },
    { yPercent: -1200, duration: 90 },
    '-=110'
  );
  tlGallery.fromTo(moments[2],
    { yPercent: 150 },
    { yPercent: -1200, duration: 90 },
    '-=105'
  );
  tlGallery.fromTo(moments[3],
    { yPercent: 165 },
    { yPercent: -1200, duration: 90 },
    '-=100'
  );

  tlGallery.fromTo(moments[4],
    { yPercent: 170 },
    { yPercent: -1500, duration: 90 },
    '-=95'
  );
  tlGallery.fromTo(moments[5],
    { yPercent: 180 },
    { yPercent: -2000, duration: 90 },
    '-=90'
  );
  tlGallery.fromTo(gallery.querySelectorAll(".gallery-description")[1],
    { yPercent: 200, opacity: 0 },
    { yPercent: -1200, opacity: 1, duration: 90 },
    '-=90'
  );

  /* =====================================================
    photo collection section
  ===================================================== */
  // const photoCollection = document.querySelectorAll("#photo-collection .img-box");
  // const settings = {
  //   desktop: [
  //     { x: 100, endOffset: -500, pinTarget: "#collection1", trigger: "#photo-collection", start: "top 0%" }, // 第一張特例
  //     { x: -300, endOffset: -400 },
  //     { x: 500, endOffset: -300 },
  //     { x: -800, endOffset: -200 },
  //     { x: 900, endOffset: -100 },
  //   ],
  //   mobile: [
  //     { x: 150, endOffset: -500, pinTarget: "#collection1", trigger: "#photo-collection", start: "top 0%" }, // 第一張特例
  //     { x: -120, endOffset: -400 },
  //     { x: 80, endOffset: -300 },
  //     { x: -50, endOffset: -200 },
  //     { x: 60, endOffset: -100 },
  //   ],
  // };
  // mm.add("(min-width: 768px)", () => {
  //   photoCollection.forEach((img, i) => {
  //     const s = settings['desktop'][i] || {};

  //     gsap.to(img, {
  //       boxShadow: "0 35px 60px rgba(0, 0, 0, 0.35)",
  //       x: s.x || 0,
  //       duration: 0.8,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         scroller: "body",
  //         trigger: s.trigger || img,
  //         start: s.start || "top 10%",
  //         end: `top ${s.endOffset}%`,         // 字串模板要加反引號
  //         scrub: 2,
  //         pin: s.pinTarget ? document.querySelector(s.pinTarget) : true,
  //         // markers: true,
  //       }
  //     });
  //   });

  // });

  // mm.add("(max-width: 767px)", () => {

  //   photoCollection.forEach((img, i) => {
  //     const s = settings['mobile'][i] || {};

  //     gsap.to(img, {
  //       boxShadow: "0 35px 60px rgba(0, 0, 0, 0.35)",
  //       x: s.x || 0,
  //       duration: 0.8,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         scroller: "body",
  //         trigger: s.trigger || img,
  //         start: s.start || "top 10%",
  //         end: `top ${s.endOffset}%`,         // 字串模板要加反引號
  //         scrub: 2,
  //         pin: s.pinTarget ? document.querySelector(s.pinTarget) : true,
  //         // markers: true,
  //       }
  //     });
  //   });
  // });
  /* =====================================================
  photo collection section
===================================================== */
  const photoCollection = document.querySelectorAll("#photo-collection .img-box");
  const settings = {
    desktop: [
      { x: "6vw", endOffset: -500, pinTarget: "#collection1", trigger: "#photo-collection", start: "top 0%" },
      { x: "-15vw", endOffset: -400 },
      { x: "20vw", endOffset: -300 },
      { x: "-40vw", endOffset: -200 },
      { x: "43vw", endOffset: -100 },
    ],
    tablet: [
      { x: "12vw", endOffset: -500, pinTarget: "#collection1", trigger: "#photo-collection", start: "top 0%" },
      { x: "-18vw", endOffset: -400 },
      { x: "25vw", endOffset: -300 },
      { x: "-35vw", endOffset: -200 },
      { x: "15vw", endOffset: -100 },
    ],
    mobile: [
      { x: "35vw", endOffset: -500, pinTarget: "#collection1", trigger: "#photo-collection", start: "top 0%" },
      { x: "-25vw", endOffset: -400 },
      { x: "21.3vw", endOffset: -300 },
      { x: "-13.3vw", endOffset: -200 },
      { x: "13vw", endOffset: -100 },
    ],
  };

  function setupPhotoCollection(device) {
    // 先清掉舊的 ScrollTrigger
    ScrollTrigger.getAll().forEach(st => {
      const trg = st.trigger;
      if (trg && trg.closest && trg.closest("#photo-collection")) st.kill();
    });

    const config = settings[device];
    photoCollection.forEach((img, i) => {
      const s = config[i] || {};
      gsap.to(img, {
        boxShadow: "0 35px 60px rgba(0, 0, 0, 0.35)",
        x: s.x || 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          scroller: "body",
          trigger: s.trigger || img,
          start: s.start || "top 10%",
          end: `top ${s.endOffset}%`,
          scrub: 2,
          pin: s.pinTarget ? document.querySelector(s.pinTarget) : true,
          // markers: true,
        },
      });
    });
  }

  mm.add("(min-width: 1024px)", () => setupPhotoCollection("desktop"));
  mm.add("(min-width: 768px) and (max-width: 1023px)", () => setupPhotoCollection("tablet"));
  mm.add("(max-width: 767px)", () => setupPhotoCollection("mobile"));

  // resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      let device;
      const w = window.innerWidth;
      if (w >= 1024) device = "desktop";
      else if (w >= 768) device = "tablet";
      else device = "mobile";
      console.log("device:", device);
      setupPhotoCollection(device);
      ScrollTrigger.refresh();
    }, 300);
  });


  /* =====================================================
    countdown section
  ===================================================== */
  const weddingDate = new Date("2025-11-29T09:30:00+08:00").getTime();
  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
      document.getElementById("countdown").innerHTML = `
        <h2>It's Our Wedding Day! 🎉</h2>
        <p class="countdown-text">感謝你的祝福 ❤️</p>
      `;
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }

  /* =====================================================
    guest comments section
  ===================================================== */
  const API_URL = './data/comments.json';
  const container = document.querySelector('#guest-bubbles .bubbles');
  let bubblesArr = [];

  fetchComments();
  window.addEventListener('resize', fetchComments);

  function fetchComments() {
    fetch(API_URL)
      .then(res => res.json())
      .then(result => {
        const data = result.data || [];
        if (!data.length) return;
        createBubbles(data);
      })
      .catch(err => console.error('載入留言錯誤:', err));
  }

  function createBubbles(data) {
    container.innerHTML = '';
    bubblesArr.length = 0;

    const containerRect = container.getBoundingClientRect();
    const vw = containerRect.width;
    const vh = containerRect.height;
    const speedScale = 0.5;

    const bubbles = [];

    data.forEach(item => {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      const maxChars = 120;
      const text = item.comment.trim();
      const shortText = text.length > maxChars ? text.slice(0, maxChars) + '…' : text;
      bubble.textContent = shortText;

      const base = Math.min(50 + text.length * 5, 280);
      const size = base; // 精準大小控制
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      const x = gsap.utils.random(0, vw - size);
      const y = gsap.utils.random(0, vh - size);
      bubble.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      const vx = gsap.utils.random(-30, 30) * speedScale;
      const vy = gsap.utils.random(-30, 30) * speedScale;

      container.appendChild(bubble);
      bubbles.push({
        el: bubble,
        x,
        y,
        vx,
        vy,
        size,
        vxInitial: vx,
        vyInitial: vy
      });
    });

    function updateBubbles() {
      const containerRect = container.getBoundingClientRect();
      const vw = containerRect.width;
      const vh = containerRect.height;

      bubbles.forEach(bubble => {
        bubble.x += bubble.vx * (1 / 60);
        bubble.y += bubble.vy * (1 / 60);

        if (bubble.x <= 0) { bubble.x = 0; bubble.vx = -bubble.vx; }
        else if (bubble.x >= vw - bubble.size) { bubble.x = vw - bubble.size; bubble.vx = -bubble.vx; }

        if (bubble.y <= 0) { bubble.y = 0; bubble.vy = -bubble.vy; }
        else if (bubble.y >= vh - bubble.size) { bubble.y = vh - bubble.size; bubble.vy = -bubble.vy; }

        bubble.el.style.transform = `translate3d(${bubble.x}px, ${bubble.y}px, 0)`;
      });
    }

    const ticker = gsap.ticker.add(updateBubbles);
    ScrollTrigger.create({
      trigger: "#guest-bubbles",
      start: "top 80%",
      end: "bottom top",
      onEnter: () => gsap.ticker.add(ticker),
      onEnterBack: () => gsap.ticker.add(ticker),
      onLeave: () => gsap.ticker.remove(ticker),
      onLeaveBack: () => gsap.ticker.remove(ticker),
    });

    // 桌機：滑鼠靠近逃開
    container.addEventListener("mousemove", handlePointerMove);

    // 手機：手指移動模擬滑鼠
    container.addEventListener("touchmove", (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      handlePointerMove(touch);
    });

    // 手指/滑鼠移出：自然減速回復
    container.addEventListener("mouseleave", resetBubbles);
    container.addEventListener("touchend", resetBubbles);
    container.addEventListener("touchcancel", resetBubbles);

    function handlePointerMove(e) {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      bubbles.forEach(bubble => {
        const cx = bubble.x + bubble.size / 2;
        const cy = bubble.y + bubble.size / 2;
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const maxDist = 200;
        if (dist < maxDist) {
          const angle = Math.atan2(dy, dx);
          const force = (maxDist - dist) * 0.08;
          bubble.vx -= Math.cos(angle) * force;
          bubble.vy -= Math.sin(angle) * force;
        }
      });
    }
    function resetBubbles() {
      bubbles.forEach(bubble => {
        gsap.to(bubble, {
          duration: 5,
          vx: bubble.vxInitial,
          vy: bubble.vyInitial,
          ease: "power2.out"
        });
      });
    }
  }


});