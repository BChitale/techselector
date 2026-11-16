/* ===================================================================
   DATA: add or edit content here. The page is generated from it.
   videos = YouTube video IDs (the part after v=)
   search = YouTube search used when a topic has no video IDs
   =================================================================== */
const TECHS = {
  "Frontend": {
    icon: "🎨",
    intro: "Frontend development (the client side) is everything a user sees, touches and clicks on a screen: layout, colours, typography, buttons, menus and animations.",
    used: [
      "E-commerce platforms (Amazon, Shopify storefronts)",
      "Social media apps (X/Twitter, Instagram web, LinkedIn)",
      "Streaming services (Netflix, YouTube interfaces)",
      "Productivity tools (Google Docs, Figma, Trello)"
    ],
    roadmap: ["HTML", "CSS", "JavaScript", "Git & GitHub", "React or Vue", "Responsive design", "Build projects"],
    topicLabel: "Check your knowledge",
    topics: {
      "HTML": {
        desc: "HTML (HyperText Markup Language) is the standard markup language for web pages. It gives structure to the content on the web.",
        resources: [["W3Schools", "https://www.w3schools.com/html/"], ["MDN Web Docs", "https://developer.mozilla.org/en-US/docs/Learn/HTML"], ["GeeksforGeeks", "https://www.geeksforgeeks.org/html/"]],
        videos: ["HcOc7P5BMi4", "XmLOwJHFHf0"]
      },
      "CSS": {
        desc: "CSS (Cascading Style Sheets) describes how HTML is presented. It controls layout, colours, fonts and the overall visual design of a page.",
        resources: [["W3Schools", "https://www.w3schools.com/css/"], ["MDN Web Docs", "https://developer.mozilla.org/en-US/docs/Learn/CSS"], ["CSS-Tricks", "https://css-tricks.com/"]],
        videos: ["ESnrn1kAD4E", "K1naz9wBwKU"]
      },
      "JavaScript": {
        desc: "JavaScript is a programming language that lets you build interactive features on web pages, such as menus, forms, animations and live updates.",
        resources: [["javascript.info", "https://javascript.info/"], ["MDN Web Docs", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript"], ["freeCodeCamp", "https://www.freecodecamp.org/"]],
        videos: ["ajdRvxDWH4w", "a-wVHL0lpb0"]
      },
      "Python (Streamlit)": {
        desc: "Python can also build frontends. Libraries like Streamlit let you create web apps and dashboards with only Python code.",
        resources: [["Streamlit Docs", "https://docs.streamlit.io/"], ["Streamlit Gallery", "https://streamlit.io/gallery"]],
        videos: ["t2_Q2BRzeEE", "_aWbUudZ5Yo", "yKTEC1Y5bEQ"]
      }
    }
  },

  "Backend": {
    icon: "⚙️",
    intro: "Backend development is the server side of the web. It builds and maintains the servers, databases and application logic that power the frontend.",
    used: ["Web applications", "Mobile applications", "E-commerce platforms", "Social media platforms"],
    roadmap: ["Pick a language", "Learn HTTP & REST APIs", "Databases (SQL / NoSQL)", "Authentication & security", "Frameworks", "Deployment & cloud", "Build projects"],
    topicLabel: "Select a backend language",
    topics: {
      "Python": {
        desc: "Python is a high-level language widely used for backend development, automation and data analysis. Popular frameworks: Django, Flask and FastAPI.",
        resources: [["freeCodeCamp", "https://www.freecodecamp.org/"], ["Sheryians Coding School", "https://www.youtube.com/@SheryiansCodingSchool"], ["FastAPI Docs", "https://fastapi.tiangolo.com/"]],
        videos: ["jBzwzrDvZ18", "0IciwnJ6PJI", "Lu8lXXlstvM", "foGklduxhM0"]
      },
      "Java": {
        desc: "Java is a robust, object-oriented language used for large enterprise systems and Android apps. Popular framework: Spring Boot.",
        resources: [["Spring Boot", "https://spring.io/projects/spring-boot"], ["GeeksforGeeks", "https://www.geeksforgeeks.org/java/"], ["W3Schools", "https://www.w3schools.com/java/"]],
        search: "Java Spring Boot backend tutorial"
      },
      "Ruby": {
        desc: "Ruby is a clean, developer-friendly language. Ruby on Rails helps you build full web applications very quickly.",
        resources: [["Ruby on Rails Guides", "https://guides.rubyonrails.org/"], ["Ruby Docs", "https://www.ruby-lang.org/en/documentation/"]],
        search: "Ruby on Rails tutorial for beginners"
      },
      "PHP": {
        desc: "PHP powers a huge part of the web, including WordPress. Laravel is its most popular modern framework.",
        resources: [["PHP Manual", "https://www.php.net/manual/en/"], ["Laravel Docs", "https://laravel.com/docs"], ["W3Schools", "https://www.w3schools.com/php/"]],
        search: "PHP Laravel tutorial for beginners"
      },
      "JavaScript (Node.js)": {
        desc: "Node.js lets you run JavaScript on the server, so you can use one language for the whole stack. Popular framework: Express.",
        resources: [["Node.js Docs", "https://nodejs.org/en/learn"], ["Express", "https://expressjs.com/"], ["freeCodeCamp", "https://www.freecodecamp.org/"]],
        search: "Node.js Express backend tutorial"
      }
    }
  },

  "AI/ML": {
    icon: "🤖",
    intro: "AI/ML (Artificial Intelligence and Machine Learning) is about building systems that learn from data to make predictions, find patterns or generate content.",
    used: [
      "Recommendation systems (Netflix, Spotify, Amazon)",
      "Chatbots and virtual assistants",
      "Self-driving cars and robotics",
      "Healthcare (disease detection, drug discovery)",
      "Finance (fraud detection, risk scoring)"
    ],
    roadmap: ["Python", "Maths: statistics, linear algebra", "NumPy, Pandas, Matplotlib", "Machine Learning (scikit-learn)", "Deep Learning (PyTorch / TensorFlow)", "NLP / Computer Vision / GenAI", "Kaggle & portfolio projects"],
    topicLabel: "Select an AI/ML area",
    topics: {
      "Python for AI": {
        desc: "Python is the main language of AI/ML. Start with the basics, then learn NumPy (arrays), Pandas (data) and Matplotlib (charts).",
        resources: [["Kaggle Learn: Python", "https://www.kaggle.com/learn/python"], ["Kaggle Learn: Pandas", "https://www.kaggle.com/learn/pandas"], ["NumPy Docs", "https://numpy.org/doc/stable/user/"]],
        search: "Python NumPy Pandas for machine learning tutorial"
      },
      "Machine Learning": {
        desc: "Machine Learning teaches computers to learn from data. Key ideas: supervised learning (regression, classification), unsupervised learning (clustering) and model evaluation.",
        resources: [["Kaggle Learn: Intro to ML", "https://www.kaggle.com/learn/intro-to-machine-learning"], ["scikit-learn Docs", "https://scikit-learn.org/stable/"], ["Google ML Crash Course", "https://developers.google.com/machine-learning/crash-course"]],
        search: "machine learning full course scikit-learn"
      },
      "Deep Learning": {
        desc: "Deep Learning uses multi-layer neural networks to learn complex patterns. Main frameworks: PyTorch and TensorFlow/Keras.",
        resources: [["PyTorch Tutorials", "https://pytorch.org/tutorials/"], ["TensorFlow Tutorials", "https://www.tensorflow.org/tutorials"], ["fast.ai", "https://course.fast.ai/"]],
        search: "deep learning neural networks PyTorch tutorial"
      },
      "NLP": {
        desc: "Natural Language Processing helps machines understand human language: chatbots, translation, sentiment analysis and text summarisation.",
        resources: [["Hugging Face NLP Course", "https://huggingface.co/learn/nlp-course"], ["spaCy", "https://spacy.io/usage/spacy-101"], ["NLTK", "https://www.nltk.org/"]],
        search: "natural language processing NLP tutorial"
      },
      "Computer Vision": {
        desc: "Computer Vision lets machines understand images and video: face detection, object detection, medical imaging and more.",
        resources: [["OpenCV Tutorials", "https://docs.opencv.org/4.x/d9/df8/tutorial_root.html"], ["Kaggle Learn: Computer Vision", "https://www.kaggle.com/learn/computer-vision"]],
        search: "computer vision OpenCV tutorial for beginners"
      },
      "Generative AI": {
        desc: "Generative AI creates new content such as text, images and code using large language models and diffusion models. Learn prompt engineering, APIs and RAG.",
        resources: [["Hugging Face Learn", "https://huggingface.co/learn"], ["Anthropic Docs", "https://docs.claude.com/"], ["LangChain Docs", "https://python.langchain.com/docs/"]],
        search: "generative AI LLM application development tutorial"
      }
    }
  },

  "UI/UX": {
    icon: "✏️",
    intro: "UI/UX design shapes how a product looks (User Interface) and how it feels to use (User Experience). Good design makes products easy, useful and enjoyable.",
    used: ["Mobile apps and websites", "Dashboards and SaaS products", "Games and entertainment platforms", "Banking, healthcare and e-commerce flows"],
    roadmap: ["Design principles", "User research", "Wireframing", "Figma (UI design)", "Prototyping & usability testing", "Design systems", "Portfolio / case studies"],
    topicLabel: "Select a UI/UX area",
    topics: {
      "Design Principles": {
        desc: "Core principles include hierarchy, contrast, alignment, spacing, consistency and accessibility. They make interfaces clear and easy to scan.",
        resources: [["Laws of UX", "https://lawsofux.com/"], ["Nielsen Norman Group", "https://www.nngroup.com/articles/"], ["Google Material Design", "https://m3.material.io/"]],
        search: "UI UX design principles for beginners"
      },
      "User Research": {
        desc: "User research finds out who your users are and what they need, using interviews, surveys, personas and journey maps.",
        resources: [["NN/g Research Methods", "https://www.nngroup.com/articles/which-ux-research-methods/"], ["Interaction Design Foundation", "https://www.interaction-design.org/literature"]],
        search: "UX research methods tutorial"
      },
      "Wireframing & Prototyping": {
        desc: "Wireframes are simple layout sketches; prototypes are clickable versions used to test ideas before development starts.",
        resources: [["Figma Learn", "https://help.figma.com/hc/en-us"], ["Balsamiq", "https://balsamiq.com/learn/"]],
        search: "wireframe and prototype tutorial Figma"
      },
      "Figma": {
        desc: "Figma is the most popular design tool for UI design, prototyping and team collaboration. Learn frames, auto layout, components and variants.",
        resources: [["Figma Learn", "https://help.figma.com/hc/en-us"], ["Figma Design School", "https://www.figma.com/resource-library/"]],
        search: "Figma full course for beginners"
      },
      "Colour & Typography": {
        desc: "Colour sets mood and guides attention; typography sets readability and personality. Learn palettes, contrast ratios and font pairing.",
        resources: [["Coolors", "https://coolors.co/"], ["Google Fonts", "https://fonts.google.com/"], ["WebAIM Contrast Checker", "https://webaim.org/resources/contrastchecker/"]],
        search: "color theory and typography for UI design"
      },
      "Usability Testing": {
        desc: "Usability testing means watching real people use your design to find problems early, then improving it based on what you learn.",
        resources: [["NN/g Usability Testing", "https://www.nngroup.com/articles/usability-testing-101/"], ["Maze", "https://maze.co/guides/usability-testing/"]],
        search: "usability testing tutorial UX"
      }
    }
  }
};

const LEARN_SITES = "YouTube, W3Schools, Apna College, Chai aur Code, GeeksforGeeks";

/* ===================================================================
   HELPERS
   =================================================================== */
const $ = (sel) => document.querySelector(sel);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function esc(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

// Replay the swap animation when content changes
function animateSwap(el) {
  if (reduceMotion) return;
  el.classList.remove("animate");
  void el.offsetWidth;
  el.classList.add("animate");
}

/* ===================================================================
   STATE
   =================================================================== */
const state = {
  tech: Object.keys(TECHS)[0],
  topics: {} // remembers the chosen topic for each field
};

/* ===================================================================
   RENDERING
   =================================================================== */
function renderTechButtons() {
  const box = $("#techButtons");
  box.innerHTML = "";
  Object.entries(TECHS).forEach(([name, data]) => {
    const b = document.createElement("button");
    b.className = "btn";
    b.type = "button";
    b.textContent = `${data.icon} ${name}`;
    b.setAttribute("aria-pressed", String(name === state.tech));
    b.addEventListener("click", () => {
      state.tech = name;
      renderAll();
    });
    box.appendChild(b);
  });
}

function renderOverview() {
  const name = state.tech;
  const tech = TECHS[name];
  $("#overviewTitle").textContent = `${name} at a glance`;
  $("#niceChoice").textContent = `Nice choice ${name} 👍`;

  const used = tech.used.map((u) => `<li>${esc(u)}</li>`).join("");
  const steps = tech.roadmap
    .map((s, i) => `<div class="step"><div class="num">${i + 1}</div><div>${esc(s)}</div></div>`)
    .join("");

  const box = $("#overviewContent");
  box.innerHTML = `
    <div class="cards">
      <div class="card">
        <div class="ico">${tech.icon}</div>
        <h3 class="h3">What is ${esc(name)}?</h3>
        <p>${esc(tech.intro)}</p>
      </div>
      <div class="card">
        <div class="ico">📍</div>
        <h3 class="h3">Where is ${esc(name)} used?</h3>
        <ul>${used}</ul>
      </div>
    </div>
    <h3 class="h3 center">Your ${esc(name)} roadmap</h3>
    <div class="steps">${steps}</div>`;
  animateSwap(box);
}

function renderTopics() {
  const name = state.tech;
  const tech = TECHS[name];
  const names = Object.keys(tech.topics);
  if (!names.includes(state.topics[name])) state.topics[name] = names[0];
  const current = state.topics[name];

  $("#topicsTitle").textContent = tech.topicLabel;
  $("#topicsSub").textContent = `Explore ${name} one topic at a time.`;

  const row = $("#topicButtons");
  row.innerHTML = "";
  names.forEach((t) => {
    const b = document.createElement("button");
    b.className = "btn";
    b.type = "button";
    b.textContent = t;
    b.setAttribute("aria-pressed", String(t === current));
    b.addEventListener("click", () => {
      state.topics[name] = t;
      renderTopics();
    });
    row.appendChild(b);
  });

  const data = tech.topics[current];
  const chips = data.resources
    .map(([label, url]) => `<a class="chip" href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`)
    .join("");

  let media;
  if (data.videos) {
    media = `<div class="vgrid">${data.videos
      .map(
        (v) => `<a class="vid" href="https://www.youtube.com/watch?v=${v}" target="_blank" rel="noopener" aria-label="Watch tutorial on YouTube">
          <img src="https://img.youtube.com/vi/${v}/mqdefault.jpg" alt="Video tutorial thumbnail" loading="lazy">
          <span class="play" aria-hidden="true">▶</span></a>`
      )
      .join("")}</div>`;
  } else {
    const q = encodeURIComponent(data.search);
    media = `<a class="pill pill-white" href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener">▶ Find video tutorials on YouTube</a>`;
  }

  const box = $("#topicDetail");
  box.innerHTML = `
    <div class="card">
      <h3 class="h3">${esc(current)}</h3>
      <p>${esc(data.desc)}</p>
      <div class="label">How to learn ${esc(current)}?</div>
      <p>Start with online tutorials on ${esc(LEARN_SITES)}, and use these resources:</p>
      <div class="chips">${chips}</div>
      <div class="label">Video tutorials</div>
      ${media}
      <div class="note">Remember to practice what you learn, and build small projects to reinforce your skills.</div>
    </div>`;
  animateSwap(box);
}

function renderMarquee() {
  const names = new Set();
  Object.values(TECHS).forEach((t) =>
    Object.values(t.topics).forEach((tp) => tp.resources.forEach(([label]) => names.add(label)))
  );
  const items = [...names].sort().map((n) => `<span class="logo-chip">${esc(n)}</span>`).join("");
  $("#track").innerHTML = items + items; // doubled for a seamless loop
}

function renderAll() {
  renderTechButtons();
  renderOverview();
  renderTopics();
}

/* ===================================================================
   HERO: split into tiles that break apart on scroll
   =================================================================== */
const ROWS = 4, COLS = 8;

// small seeded random so the pieces fly the same way every load
function seededRandom(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildHero() {
  const hero = $("#hero");
  const tpl = $("#heroContent");
  const rnd = seededRandom(7);
  const range = (a, b) => a + rnd() * (b - a);

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.style.left = `${(c * 100) / COLS}%`;
      tile.style.top = `${(r * 100) / ROWS}%`;
      tile.style.width = `${100 / COLS}%`;
      tile.style.height = `${100 / ROWS}%`;
      tile.dataset.dx = ((c - (COLS - 1) / 2) * range(30, 70) + range(-30, 30)).toFixed(0);
      tile.dataset.dy = (range(150, 450) + r * 25).toFixed(0);
      tile.dataset.rot = range(-80, 80).toFixed(0);

      const inner = document.createElement("div");
      inner.className = "hero-inner";
      inner.style.width = `${COLS * 100}%`;
      inner.style.height = `${ROWS * 100}%`;
      inner.style.left = `-${c * 100}%`;
      inner.style.top = `-${r * 100}%`;
      inner.appendChild(tpl.content.cloneNode(true));

      // keep one copy of the content readable by screen readers
      if (r !== 0 || c !== 0) inner.setAttribute("aria-hidden", "true");
      if (r !== 0 || c !== 0) inner.querySelectorAll("a").forEach((a) => a.setAttribute("tabindex", "-1"));

      tile.appendChild(inner);
      hero.appendChild(tile);
    }
  }
}

/* ===================================================================
   SCROLL: shatter hero + progress bar
   =================================================================== */
function onScroll() {
  const y = window.scrollY || document.documentElement.scrollTop;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  $("#progress").style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + "%";

  if (reduceMotion) return;
  const hero = $("#hero");
  const p = Math.min(1, Math.max(0, y / (hero.offsetHeight * 0.8))); // 0 whole, 1 fully broken
  hero.querySelectorAll(".tile").forEach((t) => {
    t.style.transform = `translate3d(${t.dataset.dx * p}px, ${t.dataset.dy * p}px, 0) rotate(${t.dataset.rot * p}deg)`;
    t.style.opacity = String(Math.max(0, 1 - p * 1.15));
    t.style.boxShadow = p > 0.02 ? "inset 0 0 0 1px rgba(0, 153, 255, 0.55)" : "none";
  });
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { onScroll(); ticking = false; });
}, { passive: true });
window.addEventListener("resize", onScroll);

/* ===================================================================
   SCROLL REVEAL
   =================================================================== */
function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0, rootMargin: "0px 0px -5% 0px" });
  items.forEach((el) => io.observe(el));
}

/* ===================================================================
   START
   =================================================================== */
buildHero();
renderAll();
renderMarquee();
setupReveal();
onScroll();
