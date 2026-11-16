/* ============================================================
   1. YOUR ARTWORK
   To add a piece: copy a line, change the file path and title.
   "alt" is an optional second version (line art, draft, etc.).
   ============================================================ */
const WORKS = {
  "Illustrations": [
    { src: "images/illustrations/family.jpg", title: "Living room", alt: { src: "images/illustrations/family-lineart.jpg", label: "Line art" } },
    { src: "images/illustrations/custom-art-flyer.jpg", title: "Custom art flyer (Pe6tens services)" },
    { src: "images/illustrations/couple.jpg", title: "Couple portrait", alt: { src: "images/illustrations/couple-lineart.jpg", label: "Line art" } },
    { src: "images/illustrations/bike.jpg", title: "First ride", alt: { src: "images/illustrations/bike-lineart.jpg", label: "Line art" } },
    { src: "images/illustrations/vexel-man.jpg", title: "Yellow jacket (vector vexel)", alt: { src: "images/illustrations/vexel-man-reference.jpg", label: "With reference photo" } },
    { src: "images/illustrations/work-together.jpg", title: "Work together flyer", alt: { src: "images/illustrations/work-together-draft.jpg", label: "Early draft" } },
    { src: "images/illustrations/custom-art-flyer.jpg", title: "Need custom art? flyer" },
    { src: "images/illustrations/messi-portrait.jpg", title: "Lionel Messi (vector vexel)", alt: { src: "images/illustrations/messi-lineart.jpg", label: "Line art" } },
    { src: "images/illustrations/messi-beard.jpg", title: "Messi detail: face and beard" }
  ],
  "Smudge Art": [
    { src: "images/smudge/woman-bench.jpg", title: "Park bench" },
    { src: "images/smudge/woman-pink.jpg", title: "Pink and purple" },
    { src: "images/smudge/woman-houndstooth.jpg", title: "Houndstooth blazer" },
    { src: "images/smudge/woman-purple.jpg", title: "Purple top" },
    { src: "images/smudge/woman-white-headwrap.jpg", title: "White headwrap" },
    { src: "images/smudge/man-black-tee.jpg", title: "Black tee" },
    { src: "images/smudge/man-yellow-jacket.jpg", title: "Yellow jacket (smudge)" },
    { src: "images/smudge/baby.jpg", title: "Little one", alt: { src: "images/smudge/baby-alt.jpg", label: "Other background" } },
    { src: "images/smudge/snapback-cap.jpg", title: "Snapback cap" },
    { src: "images/smudge/yellow-native.jpg", title: "Yellow native wear" },
    { src: "images/smudge/yellow-dress.jpg", title: "Yellow dress" },
    { src: "images/smudge/man-navy-suit.jpg", title: "Navy suit and red tie" },
    { src: "images/smudge/man-splash-background.jpg", title: "Grey suit, splash background" },
    { src: "images/smudge/woman-long-hair.jpg", title: "Long hair and gold necklace" }
  ],
  "Logos": [
    { src: "images/logos/pe6tens.png", title: "Pe6tens (my own logo)" },
    { src: "images/logos/zina-transport.jpg", title: "Zina Transport", alt: { src: "images/logos/zina-transport-lineart.jpg", label: "Line art" } },
    { src: "images/logos/pgl-bv.jpg", title: "PGL BV" },
    { src: "images/logos/servicio-a-pozos.jpg", title: "Servicio A Pozos" },
    { src: "images/logos/mariscos-el-titoo.jpg", title: "Mariscos El Titoo" },
    { src: "images/logos/one-love.jpg", title: "One Love" },
    { src: "images/logos/you-dirty-dark.jpg", title: "Sticker lettering", alt: { src: "images/logos/you-dirty-light.jpg", label: "Light background" } },
    { src: "images/logos/bryan-lank.jpg", title: "Bryan-Lank" }
  ],
  "Cover Art": [
    { src: "images/covers/deemood.jpg", title: "Only Time Will Tell (Deemood)", alt: { src: "images/covers/deemood-lineart.jpg", label: "Line art" } },
    { src: "images/covers/blue-strip-addict.jpg", title: "Blue Strip Addict" },
    { src: "images/covers/apple-worms.jpg", title: "Apple and worms" },
    { src: "images/covers/the-other-side.jpg", title: "The Other Side" }
  ]
};

/* ============================================================
   2. YOUR TIMETABLE
   Change courses, days or times here. Use "HH:MM" in 24-hour time.
   ============================================================ */
const COURSES = {
  "GST 122": ["Communication in English Language II", 2],
  "MTH 102": ["Elementary Mathematics (Calculus) II", 2],
  "PHY 102": ["General Physics II", 2],
  "PHY 108": ["General Physics Practical II", 1],
  "COS 102": ["Introduction to Problem-Solving", 3],
  "MIVA-CSC 106": ["Introduction to Web Technologies", 3],
  "GST 112": ["Nigerian Peoples and Culture", 2],
  "MIVA-COS 111": ["Technical Certification in Computing I", 1]
};

// [start, end, course code or a plain label, note]
const WEEK = [
  { day: "Monday", slots: [["08:00", "10:00", "COS 102", "Lecture and notes"], ["10:30", "12:00", "MTH 102", "Calculus practice"], ["15:00", "16:30", "GST 122", "Reading and exercises"]] },
  { day: "Tuesday", slots: [["08:00", "10:00", "MIVA-CSC 106", "HTML, CSS and JavaScript"], ["10:30", "12:00", "PHY 102", "Lecture and notes"], ["15:00", "16:00", "MIVA-COS 111", "Certification study"]] },
  { day: "Wednesday", slots: [["08:00", "10:00", "COS 102", "Problem-solving drills"], ["10:30", "12:00", "GST 112", "Reading"], ["15:00", "16:30", "MTH 102", "Assignments"]] },
  { day: "Thursday", slots: [["08:00", "10:00", "MIVA-CSC 106", "Build a page"], ["10:30", "12:00", "PHY 102", "Practice questions"], ["14:00", "16:00", "PHY 108", "Practical report"]] },
  { day: "Friday", slots: [["08:00", "09:30", "GST 122", "Writing practice"], ["10:00", "11:30", "GST 112", "Summary notes"], ["14:00", "16:00", "COS 102", "Weekly self-quiz"]] },
  { day: "Saturday", slots: [["09:00", "11:00", "Revision", "One hour each for the weakest two courses"], ["11:30", "13:00", "MIVA-COS 111", "Certification practice"], ["16:00", "18:00", "Football", "Rest and recharge"]] },
  { day: "Sunday", rest: true, slots: [["All day", "", "Day off", "Plan and strategize: review the week, set next week's goals, rest."]] }
];

/* ============================================================
   3. SMALL HELPERS
   ============================================================ */
const $ = id => document.getElementById(id);
const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

/* ============================================================
   4. HOME: the typing line under my introduction
   Edit the phrases below. Each one finishes the sentence "I ..."
   ============================================================ */
const DOING = [
  "draw digital illustrations",
  "paint smudge portraits",
  "craft vector vexel art",
  "design logos and cover art",
  "teach children",
  "learn to code",
  "build things that look good and work well"
];

function initTypeLine() {
  const target = $("doing");
  // Visitors who prefer less motion keep the still sentence from the HTML
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let i = 0, n = 0, erasing = false;
  target.textContent = "";
  function tick() {
    const full = DOING[i];
    n += erasing ? -1 : 1;
    target.textContent = full.slice(0, n);
    let wait = erasing ? 25 : 55;
    if (!erasing && n === full.length) { erasing = true; wait = 1500; }
    else if (erasing && n === 0) { erasing = false; i = (i + 1) % DOING.length; wait = 350; }
    setTimeout(tick, wait);
  }
  tick();
}

/* ============================================================
   5. PROJECTS: gallery, tabs and lightbox
   ============================================================ */
function initGallery() {
  const tabsEl = $("tabs"), galleryEl = $("gallery"), lb = $("lightbox");
  const lbImg = $("lbImg"), lbTitle = $("lbTitle"), lbAlt = $("lbAlt");
  let current = Object.keys(WORKS)[0], index = 0, showingAlt = false, opener = null;

  function renderTabs() {
    tabsEl.innerHTML = "";
    Object.keys(WORKS).forEach(name => {
      const b = el("button", "", name);
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", name === current);
      b.addEventListener("click", () => setTab(name));
      tabsEl.appendChild(b);
    });
  }

  function renderGallery() {
    galleryEl.innerHTML = "";
    WORKS[current].forEach((w, i) => {
      const b = el("button");
      b.type = "button";
      b.setAttribute("aria-label", "Open " + w.title);
      const img = el("img");
      img.src = w.src; img.alt = w.title; img.loading = "lazy";
      b.appendChild(img);
      b.addEventListener("click", () => openBox(i, b));
      galleryEl.appendChild(b);
    });
  }

  function setTab(name) {
    if (!WORKS[name]) return;
    current = name; renderTabs(); renderGallery();
  }

  function showBox() {
    const w = WORKS[current][index];
    const item = showingAlt && w.alt ? w.alt : w;
    lbImg.src = item.src;
    lbImg.alt = w.title;
    lbTitle.textContent = w.title + (showingAlt && w.alt ? " (" + w.alt.label + ")" : "");
    lbAlt.hidden = !w.alt;
    if (w.alt) lbAlt.textContent = showingAlt ? "Show final" : "Show " + w.alt.label.toLowerCase();
  }

  function openBox(i, from) {
    opener = from; index = i; showingAlt = false;
    lb.hidden = false; document.body.style.overflow = "hidden";
    showBox(); $("lbClose").focus();
  }
  function closeBox() {
    lb.hidden = true; document.body.style.overflow = "";
    if (opener) opener.focus();
  }
  function step(n) {
    const len = WORKS[current].length;
    index = (index + n + len) % len; showingAlt = false; showBox();
  }

  $("lbClose").addEventListener("click", closeBox);
  $("lbPrev").addEventListener("click", () => step(-1));
  $("lbNext").addEventListener("click", () => step(1));
  lbAlt.addEventListener("click", () => { showingAlt = !showingAlt; showBox(); });
  lb.addEventListener("click", e => { if (e.target === lb) closeBox(); });
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeBox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  // Project cards can jump straight to a gallery tab: <a data-tab="Logos" href="#gallery">
  document.querySelectorAll("[data-tab]").forEach(a =>
    a.addEventListener("click", () => setTab(a.dataset.tab)));

  renderTabs();
  renderGallery();
}

// If a project screenshot is missing, show a tidy placeholder instead of a broken icon
function initProjectImages() {
  document.querySelectorAll(".project-card img").forEach(img => {
    const swap = () => img.replaceWith(el("div", "shot-missing", "Screenshot coming soon"));
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener("error", swap, { once: true });
  });
}

/* ============================================================
   6. PLANNER: task manager (add, complete, delete)
   Tasks are kept in the browser, so they are still there tomorrow.
   ============================================================ */
const TASKS_KEY = "pe6tens-tasks";

function initTasks() {
  const form = $("taskForm"), input = $("taskText"), courseSel = $("taskCourse"), dueInput = $("taskDue");
  const errorEl = $("taskError"), list = $("taskList"), countEl = $("taskCount");
  const emptyEl = $("taskEmpty"), clearBtn = $("clearDone");
  const filterBtns = document.querySelectorAll("[data-filter]");
  let filter = "all";

  function load() {
    try {
      const raw = localStorage.getItem(TASKS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* storage blocked: fall through to the sample tasks */ }
    return [
      { id: "s1", text: "Read the term project brief", course: "MIVA-CSC 106", due: "", done: true },
      { id: "s2", text: "Finish the web technologies term project", course: "MIVA-CSC 106", due: "", done: false },
      { id: "s3", text: "Practise calculus questions", course: "MTH 102", due: "", done: false }
    ];
  }
  function save() {
    try { localStorage.setItem(TASKS_KEY, JSON.stringify(tasks)); } catch (e) { /* ignore */ }
  }

  let tasks = load();

  Object.keys(COURSES).forEach(code => {
    const o = el("option", "", code + ": " + COURSES[code][0]);
    o.value = code;
    courseSel.appendChild(o);
  });

  function dueText(t) {
    if (!t.due) return "";
    const d = new Date(t.due + "T00:00:00");
    const label = d.toLocaleDateString(undefined, { day: "numeric", month: "short" });
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return !t.done && d < today ? "Due " + label + " (overdue)" : "Due " + label;
  }

  function render() {
    list.innerHTML = "";
    const shown = tasks.filter(t => filter === "all" || (filter === "done" ? t.done : !t.done));

    shown.forEach(t => {
      const li = el("li", "task" + (t.done ? " done" : ""));
      const box = el("input");
      box.type = "checkbox"; box.id = "task-" + t.id; box.checked = t.done; box.dataset.id = t.id;
      const label = el("label", "task-text");
      label.htmlFor = box.id;
      label.appendChild(el("span", "", t.text));
      const meta = [t.course, dueText(t)].filter(Boolean).join(" · ");
      if (meta) label.appendChild(el("small", "", meta));
      const del = el("button", "del", "Delete");
      del.type = "button"; del.dataset.id = t.id;
      del.setAttribute("aria-label", "Delete task: " + t.text);
      li.append(box, label, del);
      list.appendChild(li);
    });

    const doneCount = tasks.filter(t => t.done).length;
    countEl.textContent = tasks.length ? doneCount + " of " + tasks.length + " tasks done" : "";
    emptyEl.hidden = shown.length > 0;
    emptyEl.textContent = tasks.length ? "Nothing in this view. Try another filter." : "No tasks yet. Add your first one above.";
    clearBtn.disabled = doneCount === 0;
    filterBtns.forEach(b => b.setAttribute("aria-pressed", b.dataset.filter === filter));
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) {
      errorEl.textContent = "Type a task before adding it.";
      input.setAttribute("aria-invalid", "true");
      input.focus();
      return;
    }
    errorEl.textContent = "";
    input.setAttribute("aria-invalid", "false");
    tasks.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), text, course: courseSel.value, due: dueInput.value, done: false });
    save();
    form.reset();
    render();
    input.focus();
  });

  list.addEventListener("change", e => {
    if (e.target.type !== "checkbox") return;
    const t = tasks.find(x => x.id === e.target.dataset.id);
    if (t) { t.done = e.target.checked; save(); render(); }
  });

  list.addEventListener("click", e => {
    const b = e.target.closest("button.del");
    if (!b) return;
    tasks = tasks.filter(x => x.id !== b.dataset.id);
    save(); render();
  });

  filterBtns.forEach(b => b.addEventListener("click", () => { filter = b.dataset.filter; render(); }));
  clearBtn.addEventListener("click", () => { tasks = tasks.filter(t => !t.done); save(); render(); });

  render();
}

/* ============================================================
   7. PLANNER: timetable and course tables
   ============================================================ */
function initTables() {
  const todayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];
  const body = $("timetableBody");

  WEEK.forEach(d => {
    d.slots.forEach(([start, end, code, note], i) => {
      const tr = el("tr", d.day === todayName ? "today" : "");
      if (i === 0) {
        const th = el("th", "", d.day + (d.day === todayName ? " (today)" : ""));
        th.scope = "rowgroup"; th.rowSpan = d.slots.length;
        tr.appendChild(th);
      }
      tr.appendChild(el("td", "time", end ? start + " to " + end : start));
      tr.appendChild(el("td", "", COURSES[code] ? code + ": " + COURSES[code][0] : code));
      tr.appendChild(el("td", "", note));
      body.appendChild(tr);
    });
  });

  const courseBody = $("courseBody");
  let total = 0;
  Object.entries(COURSES).forEach(([code, [title, units]]) => {
    total += units;
    const tr = el("tr");
    tr.append(el("th", "", code), el("td", "", title), el("td", "", String(units)));
    tr.firstChild.scope = "row";
    courseBody.appendChild(tr);
  });
  $("totalUnits").textContent = String(total);
}

/* ============================================================
   8. CONTACT: form with validation
   Rules: no empty field, email looks valid, phone is digits only.
   ============================================================ */
function initContact() {
  const form = $("contactForm"), status = $("formStatus");
  const rules = {
    name: v => v ? "" : "Enter your name.",
    email: v => !v ? "Enter your email address."
      : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address, like name@example.com.",
    phone: v => !v ? "Enter your phone number."
      : /^\d+$/.test(v) ? "" : "Use digits only: no spaces, dashes or plus sign.",
    message: v => v ? "" : "Write a message."
  };

  function check(field) {
    const input = form.elements[field];
    const msg = rules[field](input.value.trim());
    $(field + "Error").textContent = msg;
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  }

  Object.keys(rules).forEach(field => {
    form.elements[field].addEventListener("input", () => {
      if (form.elements[field].getAttribute("aria-invalid") === "true") check(field);
    });
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const results = Object.keys(rules).map(check);   // check every field so all errors show at once
    if (results.includes(false)) {
      status.className = "form-status bad";
      status.textContent = "Please fix the fields marked below, then send again.";
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }
    const v = Object.fromEntries(Object.keys(rules).map(f => [f, form.elements[f].value.trim()]));
    status.className = "form-status good";
    status.textContent = "Thanks, " + v.name + ". Your message is ready. Your email app should open so you can send it.";
    form.reset();
    Object.keys(rules).forEach(f => form.elements[f].removeAttribute("aria-invalid"));
    const subject = encodeURIComponent("Message from " + v.name);
    const body = encodeURIComponent(v.message + "\n\nName: " + v.name + "\nEmail: " + v.email + "\nPhone: " + v.phone);
    window.location.href = "mailto:p.musa4597@miva.edu.ng?subject=" + subject + "&body=" + body;
  });
}

/* ============================================================
   9. START: each page only runs the parts it has
   ============================================================ */
if ($("doing")) initTypeLine();
if ($("gallery")) initGallery();
initProjectImages();
if ($("taskList")) initTasks();
if ($("timetableBody")) initTables();
if ($("contactForm")) initContact();
