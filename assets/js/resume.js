const content = {
  ru: {
    name: "Иван Лапшев",
    role: "React Native · Frontend Engineer",
    available: "Открыт к новым проектам",
    contactsTitle: "Контакты",
    skillsTitle: "Навыки",
    aboutTitle: "Обо мне",
    introHeadline: "Создаю аккуратные мобильные продукты",
    employmentTitle: "Опыт работы",
    employmentNote: "5+ лет в разработке",
    footer: "Минск · React Native · Mobile",
    about:
      "Я React Native разработчик из Минска, мне 25 лет, с общим опытом в разработке более 5 лет. Основной фокус — кроссплатформенные мобильные приложения, где я применяю современные технологии и лучшие практики. Разработка для меня — не просто работа, а увлечение, которое мотивирует постоянно учиться и создавать качественные продукты. В свободное время занимаюсь собственными проектами, стремясь реализовать интересные идеи и расширить профессиональные горизонты. Также интересуюсь технологиями умного дома и автоматизацией, что помогает мне применять навыки разработки в разных сферах и создавать комфортные решения.",
    contacts: [
      { icon: "phone", label: "+375 44 563-31-86", href: "tel:+375445633186" },
      { icon: "email", label: "vanc4a.vanc4a@gmail.com", href: "mailto:vanc4a.vanc4a@gmail.com" },
      { icon: "telegram", label: "t.me/vanc4a", href: "https://t.me/vanc4a" },
      { icon: "linkedin", label: "linkedin.com/in/vanc4a", href: "https://linkedin.com/in/vanc4a" },
      { icon: "github", label: "github.com/vanc4a", href: "https://github.com/vanc4a" },
    ],
    skills: [
      "react native",
      "mobx",
      "zustand",
      "reanimated",
      "skia",
      "expo",
      "react query",
      "state managers",
      "git",
      "pushes",
      "app publishing",
      "stores account registration",
      "google play console",
      "app store connect",
      "rustore console",
    ],
    jobs: [
      {
        date: "Январь 2025 – настоящее время",
        title: "Monomatch",
        body: "Monomanager.com — мобильная игра в стиле «Монополия», сочетающая классическую механику настольных игр с современным UI/UX-дизайном. Работал над широким спектром задач — от рутинных исправлений до сложных архитектурных улучшений. Отвечаю за полный процесс публикации в Google Play и App Store, включая подготовку, отправку и соблюдение требований платформ. Также осуществлял постоянную поддержку, выпуск регулярных обновлений, улучшение стабильности и функционала на основе обратной связи пользователей и аналитики. Основные обязанности:",
        points: [
          "Полный рефакторинг приложения — реструктуризация и оптимизация существующего кода для повышения читаемости, масштабируемости и производительности.",
          "Разработка нового функционала — внедрение новых игровых механик, расширяющих возможности приложения и повышающих вовлечённость пользователей.",
          "Исправление ошибок — обеспечение стабильности приложения за счёт выявления и устранения как поверхностных, так и глубинных проблем.",
        ],
        stack: ["mobx", "ws", "webrtc", "reanimated", "skia", "fcm", "navigation"],
      },
      {
        date: "Апрель 2023 – Ноябрь 2024",
        title: "EasyCode · Hitz.me",
        body: "Разработка кроссплатформенного мобильного приложения для сервиса потокового вещания музыки Hitz.me. Занимался созданием и улучшением мобильного приложения с использованием кроссплатформенных технологий. В обязанности входили проектирование и реализация нового функционала, внедрение архитектурных улучшений и оптимизация производительности для обеспечения плавной и отзывчивой работы приложения.",
        points: [],
        stack: ["react query", "reanimated", "fcm", "navigation"],
      },
      {
        date: "Август 2022 – Октябрь 2024",
        title: "LIV Studio",
        body: "Разрабатывал небольшие кроссплатформенные приложения на React Native — полный цикл разработки от архитектуры и дизайна интерфейсов до реализации функционала, тестирования и оптимизации. Выполнял сборку приложений для iOS и Android, готовил их к публикации в App Store и Google Play, настраивал необходимые сертификаты и разрешения. Занимался поддержкой уже опубликованных приложений, включая исправление ошибок и выпуск обновлений.",
        points: [],
        stack: ["zustand", "skia", "reanimated", "navigation"],
      },
      {
        date: "Февраль 2021 – настоящее время",
        title: "ИП · Минск",
        body: "",
        points: [
          "Разработка кроссплатформенных мобильных приложений.",
          "Опыт создания мобильных приложений разной сложности для платформ iOS и Android.",
          "Полный цикл разработки: проектирование, программирование, отладка, тестирование и публикация в Google Play и App Store.",
          "Выполнение сопутствующих задач, включая оптимизацию производительности, обеспечение безопасности, обновление и поддержку приложений.",
        ],
        stack: ["state managers", "reanimated", "skia", "fcm", "navigation"],
      },
    ],
  },
  en: {
    name: "Ivan Lapshev",
    role: "React Native · Frontend Engineer",
    available: "Open to new projects",
    contactsTitle: "Contacts",
    skillsTitle: "Skills",
    aboutTitle: "About me",
    introHeadline: "Building polished mobile products",
    employmentTitle: "Experience",
    employmentNote: "5+ years in development",
    footer: "Minsk · React Native · Mobile",
    about:
      "I am a React Native developer from Minsk, 25 years old, with over 5 years of overall development experience. My main focus is cross-platform mobile applications, where I apply modern technologies and best practices. Development for me is not just a job, but a passion that motivates me to continuously learn and create high-quality products. In my free time, I work on my own projects, striving to bring interesting ideas to life and expand my professional horizons. I am also interested in smart home technologies and automation, which helps me apply my development skills across different fields and create comfortable solutions.",
    contacts: [
      { icon: "phone", label: "+375 44 563-31-86", href: "tel:+375445633186" },
      { icon: "email", label: "vanc4a.vanc4a@gmail.com", href: "mailto:vanc4a.vanc4a@gmail.com" },
      { icon: "telegram", label: "t.me/vanc4a", href: "https://t.me/vanc4a" },
      { icon: "linkedin", label: "linkedin.com/in/vanc4a", href: "https://linkedin.com/in/vanc4a" },
      { icon: "github", label: "github.com/vanc4a", href: "https://github.com/vanc4a" },
    ],
    skills: [
      "react native",
      "mobx",
      "zustand",
      "reanimated",
      "skia",
      "expo",
      "react query",
      "state managers",
      "git",
      "pushes",
      "app publishing",
      "stores account registration",
      "google play console",
      "app store connect",
      "rustore console",
    ],
    jobs: [
      {
        date: "January 2025 – Present",
        title: "Monomatch",
        body: "Monomanager.com is a mobile Monopoly-style game that combines classic board game mechanics with modern UI/UX design. I worked on a wide range of tasks — from routine fixes to complex architectural improvements. I am responsible for the full publishing process in Google Play and the App Store, including preparation, submission, and compliance with platform requirements. I also provide ongoing support, release regular updates, and work on improving stability and functionality based on user feedback and analytics.",
        points: [
          "Complete app refactoring — restructured and optimized the existing codebase to improve readability, scalability, and performance.",
          "Feature development — implemented new game mechanics, expanding the app’s functionality and enhancing user engagement.",
          "Bug fixing — ensured app stability by identifying and resolving both surface-level and deeply rooted issues.",
        ],
        stack: ["mobx", "ws", "webrtc", "reanimated", "skia", "fcm", "navigation"],
      },
      {
        date: "April 2023 – November 2024",
        title: "EasyCode · Hitz.me",
        body: "Development of a cross-platform mobile application for the Hitz.me music streaming service. Responsibilities include designing and implementing new features, introducing architectural enhancements, and optimizing performance to ensure a smooth and responsive user experience.",
        points: [],
        stack: ["react query", "reanimated", "fcm", "navigation"],
      },
      {
        date: "August 2022 – October 2024",
        title: "LIV Studio",
        body: "Developed small cross-platform applications using React Native — full development cycle from architecture and UI design to functionality implementation, testing, and optimization. Built applications for both iOS and Android, prepared them for release in the App Store and Google Play, and handled the configuration of required certificates and permissions. Provided maintenance and support for published applications, including bug fixing and releasing updates.",
        points: [],
        stack: ["zustand", "skia", "reanimated", "navigation"],
      },
      {
        date: "February 2021 – Present",
        title: "Self-Employed · Minsk",
        body: "",
        points: [
          "Cross-platform mobile application development.",
          "Experience in developing mobile applications of varying complexity for iOS and Android platforms.",
          "Full development cycle: design, programming, debugging, testing, and publishing in Google Play and App Store.",
          "Handling related tasks, including performance optimization, security, updating, and app maintenance.",
        ],
        stack: ["state managers", "reanimated", "skia", "fcm", "navigation", "expo"],
      },
    ],
  },
};

const icons = {
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.94 4.2 3.8 11.2c-1.24.48-1.22 1.35-.22 1.7l4.62 1.44 1.78 5.42c.22.66.4.9.9.9.47 0 .68-.22 1-.64l2.32-3.5 4.82 3.56c.88.48 1.52.24 1.74-.82l3.14-14.8c.28-1.22-.46-1.76-1.46-1.26Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3.5 9.5h3V21h-3V9.5Zm6 0h2.88v1.57h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.5c0-1.3-.02-3-1.82-3s-2.1 1.42-2.1 2.9V21h-3V9.5Z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .26.18.58.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z"/></svg>`,
  export: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>`,
};

const state = {
  lang: localStorage.getItem("cv-lang") || "en",
  theme: localStorage.getItem("cv-theme") || "dark",
};

const els = {
  html: document.documentElement,
  name: document.getElementById("name"),
  role: document.getElementById("role"),
  available: document.getElementById("available"),
  contactsTitle: document.getElementById("contacts-title"),
  skillsTitle: document.getElementById("skills-title"),
  aboutTitle: document.getElementById("about-title"),
  introHeadline: document.getElementById("intro-headline"),
  employmentTitle: document.getElementById("employment-title"),
  employmentNote: document.getElementById("employment-note"),
  about: document.getElementById("about"),
  contacts: document.getElementById("contacts"),
  skills: document.getElementById("skills"),
  jobs: document.getElementById("jobs"),
  footer: document.getElementById("footer"),
  langSwitch: document.getElementById("lang-switch"),
  themeSwitch: document.getElementById("theme-switch"),
  exportBtn: document.getElementById("export-btn"),
  pageTitle: document.getElementById("page-title"),
};

function render() {
  const data = content[state.lang];
  els.html.lang = state.lang;
  els.html.dataset.theme = state.theme;
  els.name.textContent = data.name;
  els.role.textContent = data.role;
  els.available.textContent = data.available;
  els.contactsTitle.textContent = data.contactsTitle;
  els.skillsTitle.textContent = data.skillsTitle;
  els.aboutTitle.textContent = data.aboutTitle;
  els.introHeadline.textContent = data.introHeadline;
  els.employmentTitle.textContent = data.employmentTitle;
  els.employmentNote.textContent = data.employmentNote;
  els.about.textContent = data.about;
  els.footer.textContent = data.footer;
  els.pageTitle.textContent = `${data.name} · CV`;

  els.contacts.innerHTML = data.contacts
    .map(
      (item) => `
      <a class="contact" href="${item.href}" ${item.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
        <span class="contact-icon">${icons[item.icon]}</span>
        <span class="contact-text">${item.label}</span>
      </a>`
    )
    .join("");

  els.skills.innerHTML = data.skills.map((skill) => `<span class="skill">${skill}</span>`).join("");

  els.jobs.innerHTML = data.jobs
    .map(
      (job) => `
      <article class="job">
        <div class="job-meta">
          <span class="job-date">${job.date}</span>
        </div>
        <h3 class="job-title">${job.title}</h3>
        ${job.body ? `<p class="job-body">${job.body}</p>` : ""}
        ${
          job.points?.length
            ? `<ul class="job-points">${job.points.map((point) => `<li>${point}</li>`).join("")}</ul>`
            : ""
        }
        ${
          job.stack?.length
            ? `<div class="stack">${job.stack.map((item) => `<span>${item}</span>`).join("")}</div>`
            : ""
        }
      </article>`
    )
    .join("");

  els.langSwitch.checked = state.lang === "ru";
  els.themeSwitch.checked = state.theme === "light";
  els.langSwitch.setAttribute("aria-checked", String(els.langSwitch.checked));
  els.themeSwitch.setAttribute("aria-checked", String(els.themeSwitch.checked));
}

async function exportPdf() {
  const resume = document.getElementById("resume");
  document.body.classList.add("exporting");
  els.exportBtn.disabled = true;

  try {
    const canvas = await html2canvas(resume, {
      scale: 2,
      useCORS: true,
      backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--surface-solid").trim() || "#ffffff",
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jspdf.jsPDF("p", "mm", "a4");
    const pageWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * pageWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, pageWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = -(imgHeight - heightLeft);
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pageWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    const filename = state.lang === "ru" ? "Ivan_Lapshev_CV.pdf" : "Ivan_Lapshev_CV.pdf";
    pdf.save(filename);
  } catch (error) {
    console.error(error);
    window.print();
  } finally {
    document.body.classList.remove("exporting");
    els.exportBtn.disabled = false;
  }
}

els.langSwitch.addEventListener("change", () => {
  state.lang = els.langSwitch.checked ? "ru" : "en";
  localStorage.setItem("cv-lang", state.lang);
  render();
});

els.themeSwitch.addEventListener("change", () => {
  state.theme = els.themeSwitch.checked ? "light" : "dark";
  localStorage.setItem("cv-theme", state.theme);
  render();
  bgAnim.refreshPalette();
});

els.exportBtn.addEventListener("click", exportPdf);

const bgAnim = (() => {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return { refreshPalette() {} };

  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let balls = [];
  let raf = 0;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let running = false;

  const palettes = {
    light: [
      [228, 87, 46],
      [79, 124, 172],
      [201, 139, 76],
      [92, 148, 132],
      [160, 110, 180],
    ],
    dark: [
      [255, 122, 69],
      [96, 150, 210],
      [220, 160, 90],
      [110, 190, 170],
      [180, 130, 220],
    ],
  };

  function currentPalette() {
    return palettes[state.theme] || palettes.light;
  }

  function createBalls() {
    const count = Math.min(18, Math.max(10, Math.floor((width * height) / 90000)));
    const palette = currentPalette();
    balls = Array.from({ length: count }, (_, i) => {
      const color = palette[i % palette.length];
      const radius = 36 + Math.random() * 90;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        dx: (Math.random() - 0.5) * 0.55,
        dy: (Math.random() - 0.5) * 0.55,
        alpha: state.theme === "dark" ? 0.12 + Math.random() * 0.1 : 0.1 + Math.random() * 0.1,
        color,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.008 + Math.random() * 0.012,
      };
    });
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createBalls();
  }

  function drawConnections() {
    const maxDist = 180;
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        const a = balls[i];
        const b = balls[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist > maxDist) continue;
        const opacity = (1 - dist / maxDist) * (state.theme === "dark" ? 0.14 : 0.1);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle =
          state.theme === "dark" ? `rgba(255, 170, 120, ${opacity})` : `rgba(80, 100, 130, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  function frame() {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);

    for (const ball of balls) {
      ball.pulse += ball.pulseSpeed;
      ball.x += ball.dx;
      ball.y += ball.dy;

      if (ball.x + ball.radius > width || ball.x - ball.radius < 0) ball.dx *= -1;
      if (ball.y + ball.radius > height || ball.y - ball.radius < 0) ball.dy *= -1;

      ball.x = Math.min(width + ball.radius, Math.max(-ball.radius, ball.x));
      ball.y = Math.min(height + ball.radius, Math.max(-ball.radius, ball.y));

      const breathe = 1 + Math.sin(ball.pulse) * 0.08;
      const r = ball.radius * breathe;
      const [cr, cg, cb] = ball.color;
      const gradient = ctx.createRadialGradient(ball.x, ball.y, 0, ball.x, ball.y, r);
      gradient.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${ball.alpha})`);
      gradient.addColorStop(0.55, `rgba(${cr}, ${cg}, ${cb}, ${ball.alpha * 0.45})`);
      gradient.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(ball.x, ball.y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    drawConnections();
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (reduceMotion.matches || running) return;
    running = true;
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
    ctx.clearRect(0, 0, width, height);
  }

  function refreshPalette() {
    createBalls();
  }

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  });

  reduceMotion.addEventListener("change", () => {
    if (reduceMotion.matches) stop();
    else {
      resize();
      start();
    }
  });

  if (!reduceMotion.matches) {
    resize();
    start();
  }

  return { refreshPalette };
})();

render();
