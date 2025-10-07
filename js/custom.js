document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // gsap.to(".hero-bg", {
  //   scale: 1.1,       // 放大倍數
  //   ease: "power3.out", // 或 "power3.out"
  //   scrollTrigger: {
  //     trigger: ".hero-banner",
  //     start: "top top",
  //     end: "center top",
  //     scrub: 1.2,
  //     pin: true
  //   }
  // });

  // let focus = document.querySelector(".focus");

  // document.addEventListener("mousemove", function (e) {
  //   let x = e.pageX;
  //   let y = e.pageY;

  //   focus.style.background = "radial-gradient(circle at " + x + "px " + y + 'px ,rgba(190, 255, 255, 0.2), transparent 40%)';

  // });
  // 滑鼠移動視差 (hero 文字微偏移)
  // const heroContent = document.querySelector(".name-img");
  // document.addEventListener("mousemove", e => {
  //   const { innerWidth, innerHeight } = window;
  //   const moveX = (e.clientX - innerWidth / 2) / 50;  // 數字越小，偏移越大
  //   const moveY = (e.clientY - innerHeight / 2) / 50;
  //   gsap.to(heroContent, {
  //     x: moveX,
  //     y: moveY,
  //     duration: 0.5,
  //     ease: "power2.out"
  //   });
  // });
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
  gsap.to(".hero-bg", {
    scale: 1.1,       // 放大倍數
    ease: "power3.out", // 或 "power3.out"
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "center top",
      scrub: 1.2,
      pin: true
    }
  });
  gsap.to("#save-the-date>h1", {

    scale: 10,
    scrollTrigger: {
      scroller: "body",
      trigger: "#save-the-date",
      start: "top 0%",
      end: "top -100%",
      scrub: 2,
      pin: "#save-the-date",
    }
  });
  gsap.to("#save-the-date", {
    backgroundColor: "#7295A4",

    scrollTrigger: {
      scroller: "body",
      trigger: "#save-the-date",
      start: "top 50%",
      end: "top -50%",
      scrub: 2,
    }
  });
  gsap.utils.toArray('#invitation .text h1').forEach((el, i) => {
    // 文字與圖片分開動畫：文字從下方淡入，圖片同時放大並淡入
    const img = el.querySelector('img');

    // 文字部分（從 y=40、opacity 0 -> 原位）
    gsap.from(el, {
      y: 40,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",      // 元素頂端到達視窗 85% 高度時觸發
        end: "top 60%",
        toggleActions: "play none none reverse",
        // scrub: true, // 想要隨捲動平滑追蹤可開啟 scrub
      }
    });

    // 圖片（若存在）微延遲執行放大淡入
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
    y: 40,               // 從下方滑上
    autoAlpha: 0,        // 從透明到顯示
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#invitation p",
      start: "top 70%",  // 當段落頂端接近視窗底部時觸發
      toggleActions: "play none none reverse"
    }
  });

  // 桌機（>=768px）
  mm.add("(min-width: 768px)", () => {
    // gsap.from(".bride-part", {
    //   xPercent: 100,
    //   rotate: 0,
    //   opacity: 0,
    //   scrollTrigger: {
    //     scroller: "body",
    //     start: "top 100%",
    //     end: "top 75%",
    //     trigger: ".bride-part",
    //     scrub: 2,
    //     // markers: true,

    //   }
    // });

    // gsap.from(".groom-part", {
    //   xPercent: -100,
    //   rotate: 0,
    //   opacity: 0,
    //   scrollTrigger: {
    //     scroller: "body",
    //     start: "top 100%",
    //     end: "top 75%",
    //     trigger: ".groom-part",
    //     scrub: 2,
    //     // markers: true,

    //   }
    // });
  });





  // 手機（<768px）
  mm.add("(max-width: 767px)", () => {
    // gsap.from(".bride-part .intro-text", {
    //   y: 80,
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: ".bride-part .intro-text",
    //     start: "top 100%",
    //     end: "top 0%",
    //     scrub: 2,
    //     // markers: true,
    //   },
    // });

    // gsap.from(".groom-part .intro-text", {
    //   y: -80,
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: ".groom-part .intro-text",
    //     start: "top 100%",
    //     end: "top 50%",
    //     scrub: 2,
    //     // markers: true,
    //   }
    // });
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
      end: "top -100%",
      trigger: "#character",

      pin: true,
      scrub: 2,

    }
  });

  const weddingDate = new Date("2025-11-29T12:09:30+08:00").getTime();
  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
      document.getElementById("countdown").innerHTML = `
        <h2>It's Our Wedding Day! 🎉</h2>
        <p class="countdown-text">感謝你的祝福，讓愛延續 ❤️</p>
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



  // fetch(API_URL)
  //   .then(res => res.json())
  //   .then(result => {
  //     const data = result.data || [];
  //     if (!data.length) return;

  //     const vw = window.innerWidth;
  //     const vh = window.innerHeight;

  //     data.forEach(item => {
  //       const bubble = document.createElement('div');
  //       bubble.classList.add('bubble');
  //       bubble.textContent = item.comment.trim();

  //       // 設定大小依留言長度
  //       const base = Math.min(100 + item.comment.length * 3, 260);
  //       const size = gsap.utils.random(base * 0.8, base * 1.1);
  //       bubble.style.width = `${size}px`;
  //       bubble.style.height = `${size}px`;

  //       // 起始位置
  //       const x = gsap.utils.random(0, vw - size);
  //       const y = gsap.utils.random(0, vh - size);
  //       bubble.style.left = `${x}px`;
  //       bubble.style.top = `${y}px`;

  //       container.appendChild(bubble);
  //       bubblesArr.push({ el: bubble, baseX: x, baseY: y, size });

  //       // 漂浮動畫（永遠持續）
  //       gsap.to(bubble, {
  //         x: `random(-30, 30)`,
  //         y: `random(-50, 50)`,
  //         duration: gsap.utils.random(1, 10),
  //         repeat: -1,
  //         yoyo: true,
  //         ease: "sine.inOut"
  //       });

  //     });

  //     // 滑鼠互動
  //     document.addEventListener("mousemove", (e) => {
  //       bubblesArr.forEach(({ el, baseX, baseY, size }) => {
  //         const rect = el.getBoundingClientRect();
  //         const cx = rect.left + rect.width / 2;
  //         const cy = rect.top + rect.height / 2;
  //         const dx = e.clientX - cx;
  //         const dy = e.clientY - cy;
  //         const dist = Math.sqrt(dx * dx + dy * dy);

  //         const maxDist = 250; // 滑鼠影響範圍
  //         if (dist < maxDist) {
  //           const angle = Math.atan2(dy, dx);
  //           const force = (maxDist - dist) * 0.8; // 距離越近、力道越大
  //           const offsetX = -Math.cos(angle) * force;
  //           const offsetY = -Math.sin(angle) * force;

  //           gsap.to(el, {
  //             x: offsetX,
  //             y: offsetY,
  //             duration: 0.5,
  //             ease: "power2.out"
  //           });
  //         } else {
  //           gsap.to(el, {
  //             x: 0,
  //             y: 0,
  //             duration: 2,
  //             ease: "elastic.out(1, 0.4)"
  //           });
  //         }
  //       });
  //     });
  //   });
  // const API_URL = './data/comments.json';
  // const container = document.querySelector('#guest-bubbles .bubbles');
  // let bubblesArr = [];
  // fetchComments();
  // window.addEventListener('resize', () => {
  //   fetchComments();
  // });
  // function fetchComments() {
  //   fetch(API_URL)
  //     .then(res => res.json())
  //     .then(result => {
  //       const data = result.data || [];
  //       if (!data.length) return;
  //       createBubbles(data);
  //     })
  //     .catch(err => console.error('載入留言錯誤:', err));
  // }
  // function createBubbles(data) {
  //   container.innerHTML = ''; // 清空現有的泡泡
  //   bubblesArr.length = 0; // 清空陣列

  //   const containerRect = container.getBoundingClientRect();
  //   const vw = containerRect.width; // 使用容器寬度
  //   const vh = containerRect.height; // 使用容器高度
  //   const speedScale = 0.5; // 速度縮放因子，保持較慢速度

  //   // 儲存所有氣泡的動畫狀態
  //   const bubbles = [];

  //   data.forEach(item => {
  //     const bubble = document.createElement('div');
  //     bubble.classList.add('bubble');
  //     bubble.textContent = item.comment.trim();


  //     // 設定大小依留言長度
  //     const base = Math.min(100 + item.comment.length * 5, 260);
  //     const size = gsap.utils.random(base * 0.8, base * 1.1);
  //     bubble.style.width = `${size}px`;
  //     bubble.style.height = `${size}px`;

  //     // 起始位置（確保不超出邊界）
  //     const x = gsap.utils.random(0, vw - size);
  //     const y = gsap.utils.random(0, vh - size);

  //     // 使用 transform 取代 left/top
  //     bubble.style.transform = `translate3d(${x}px, ${y}px, 0)`;

  //     // 初始隨機速度（單位：像素/秒）
  //     const vx = gsap.utils.random(-30, 30) * speedScale; // 速度範圍
  //     const vy = gsap.utils.random(-30, 30) * speedScale;

  //     container.appendChild(bubble);
  //     bubbles.push({ el: bubble, x, y, vx, vy, size });

  //     // 儲存 baseX 和 baseY 以便後續使用（如滑鼠互動）
  //     bubblesArr.push({ el: bubble, baseX: x, baseY: y, size });
  //   });

  //   // 動畫更新函數
  //   function updateBubbles() {
  //     const containerRect = container.getBoundingClientRect();
  //     const vw = containerRect.width;
  //     const vh = containerRect.height;

  //     bubbles.forEach(bubble => {
  //       // 更新位置
  //       bubble.x += bubble.vx * (1 / 60); // 假設 60fps
  //       bubble.y += bubble.vy * (1 / 60);

  //       // 邊界碰撞檢測（即時反彈，無延遲）
  //       if (bubble.x <= 0) {
  //         bubble.x = 0;
  //         bubble.vx = -bubble.vx; // 直接反轉速度，無減弱
  //       } else if (bubble.x >= vw - bubble.size) {
  //         bubble.x = vw - bubble.size;
  //         bubble.vx = -bubble.vx; // 直接反轉速度，無減弱
  //       }

  //       if (bubble.y <= 0) {
  //         bubble.y = 0;
  //         bubble.vy = -bubble.vy; // 直接反轉速度，無減弱
  //       } else if (bubble.y >= vh - bubble.size) {
  //         bubble.y = vh - bubble.size;
  //         bubble.vy = -bubble.vy; // 直接反轉速度，無減弱
  //       }

  //       // 使用 transform 更新位置（即時渲染）
  //       bubble.el.style.transform = `translate3d(${bubble.x}px, ${bubble.y}px, 0)`;
  //     });
  //   }

  //   // 使用 GSAP ticker 進行動畫更新
  //   const ticker = gsap.ticker.add(updateBubbles);

  //   // ScrollTrigger 控制動畫播放與暫停
  //   ScrollTrigger.create({
  //     trigger: "#guest-bubbles",
  //     start: "top 80%", // 區塊進入視窗底部 20% 時開始
  //     end: "bottom top", // 滾出畫面上方時結束
  //     onEnter: () => gsap.ticker.add(ticker),
  //     onEnterBack: () => gsap.ticker.add(ticker),
  //     onLeave: () => gsap.ticker.remove(ticker),
  //     onLeaveBack: () => gsap.ticker.remove(ticker),
  //   });
  // }
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
      // bubble.textContent = item.comment.trim();
  
      const base = Math.min(50 + shortText.length * 5, 260);
      const size = gsap.utils.random(base * 0.8, base * 1.1);
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
        vxInitial: vx, // ← 記住初始速度
        vyInitial: vy
      });
  
      bubblesArr.push({ el: bubble, baseX: x, baseY: y, size });
    });
  
    // 📦 更新位置
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
  
    // 📍 滑鼠靠近 → 逃開
    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
  
      bubbles.forEach(bubble => {
        const cx = bubble.x + bubble.size / 2;
        const cy = bubble.y + bubble.size / 2;
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
  
        const maxDist = 250;
        if (dist < maxDist) {
          const angle = Math.atan2(dy, dx);
          const force = (maxDist - dist) * 0.08;
          bubble.vx -= Math.cos(angle) * force;
          bubble.vy -= Math.sin(angle) * force;
        }
      });
    });
  
    // 📍 滑鼠離開 → 自動「內插回原始速度」
    container.addEventListener("mouseleave", () => {
      bubbles.forEach(bubble => {
        gsap.to(bubble, {
          duration: 2, // 回復的時間（秒）越長越自然
          vx: bubble.vxInitial,
          vy: bubble.vyInitial,
          ease: "power2.out"
        });
      });
    });
  }
  
  

  
});

