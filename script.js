(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;

  // Turn on page animations (see "Motion" in style.css)
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) root.classList.add("motion");

  /* =========================================================
     1. Translations
     English text lives in the HTML (default). Gujarati below.
     ========================================================= */
  var GU = {
    label: "લગ્ન બાયોડેટા",
    pdf: "PDF ડાઉનલોડ કરો",
    pdfBusy: "PDF તૈયાર થાય છે…",
    viewPhotos: "3 ફોટા જુઓ",
    viewPhotosAria: "મિલનના ફોટા જુઓ",
    name: "મિલન કુંજડિયા",
    fullName: "મિલન દિલીપભાઈ કુંજડિયા",
    role: "વર્ડપ્રેસ ડેવલપર, બિગસ્કેલ ટેક્નોલોજીસ પ્રા. લિ., સુરત",
    age: "ઉંમર",
    years: "વર્ષ",
    height: "ઊંચાઈ",
    education: "અભ્યાસ",
    eduShort: "બી.ટેક (IT)",
    livesIn: "રહેઠાણ",
    surat: "સુરત",

    aboutTitle: "મારા વિશે",
    aboutText: "હું સુરતમાં બિગસ્કેલ ટેક્નોલોજીસમાં વર્ડપ્રેસ ડેવલપર તરીકે કામ કરું છું. અમારો પરિવાર વરાછામાં રહે છે અને અમારું મૂળ વતન ભેસાણ પાસેનું વાંદરવડ છે. કામ સિવાય મને સંગીત અને પ્રવાસ ગમે છે. હું એવું ઘર ઇચ્છું છું જ્યાં બંને વ્યક્તિને માન, સાથ અને આગળ વધવાની સ્વતંત્રતા મળે.",

    personalTitle: "વ્યક્તિગત માહિતી",
    fullNameLabel: "પૂરું નામ",
    dobLabel: "જન્મ તારીખ",
    dob: "5 ઑક્ટોબર 2002",
    weight: "વજન",
    weightVal: "75 કિલો",
    hobbies: "શોખ",
    hobbiesVal: "સંગીત, પ્રવાસ",
    native: "મૂળ વતન",
    nativeVal: "વાંદરવડ, તાલુકો ભેસાણ, જિલ્લો જૂનાગઢ",

    eduTitle: "અભ્યાસ અને કારકિર્દી",
    profession: "વ્યવસાય",
    job: "વર્ડપ્રેસ ડેવલપર",
    company: "બિગસ્કેલ ટેક્નોલોજીસ પ્રા. લિ., સુરત",
    graduation: "સ્નાતક",
    degree: "બી.ટેક (ઇન્ફોર્મેશન ટેક્નોલોજી)",
    university: "પારુલ યુનિવર્સિટી, વડોદરા",
    schooling: "શાળા અભ્યાસ",
    hsc: "ધોરણ 12 વિજ્ઞાન, 2020",
    school: "પી.પી. સવાણી વિદ્યાભવન, સુરત",

    familyTitle: "કૌટુંબિક માહિતી",
    father: "પિતા",
    fatherName: "દિલીપભાઈ રત્નાભાઈ કુંજડિયા",
    fatherJob: "ડાયમંડ સ્કેઇફ સરાણ મેન્યુફેક્ચરર",
    mother: "માતા",
    motherName: "વિલાસબેન દિલીપભાઈ કુંજડિયા",
    motherJob: "ગૃહિણી",
    sister: "બહેન",
    sisterName: "અંજલિ એલિશભાઈ હિરપરા",
    married: "પરિણીત",

    maternalTitle: "મોસાળ પક્ષ",
    mama: "મામા",
    mama1: "ચંદુભાઈ વલ્લભભાઈ સાવલિયા",
    mama2: "પરેશભાઈ વલ્લભભાઈ સાવલિયા",
    village: "ગામ",
    villageVal: "માણેકવાડા, તાલુકો બગસરા, જિલ્લો અમરેલી",

    photosTitle: "ફોટોગ્રાફ્સ",

    contactTitle: "સંપર્ક",
    fatherContact: "પિતા, દિલીપભાઈ",
    milan: "મિલન",
    address: "સરનામું",
    addressVal: "બી-59, અશ્વિન સોસાયટી - 3, ખોડિયાર નગર રોડ, વરાછા, સુરત",
    thanks: "મિલન અને તેમના પરિવારને જાણવા માટે સમય આપવા બદલ આપનો આભાર.",

    title: "મિલન કુંજડિયા – લગ્ન બાયોડેટા"
  };

  // Save the English text that is already in the page
  var EN = { pdfBusy: "Preparing PDF…", years: "years", title: document.title };
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var k = el.getAttribute("data-i18n");
    if (!(k in EN)) EN[k] = el.textContent.trim();
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    var k = el.getAttribute("data-i18n-aria");
    if (!(k in EN)) EN[k] = el.getAttribute("aria-label");
  });

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  var lang = "en";
  var langBtn = document.querySelector(".js-lang");

  function t(key) {
    var dict = lang === "gu" ? GU : EN;
    return dict[key] != null ? dict[key] : EN[key];
  }

  function applyLang(next) {
    lang = next === "gu" ? "gu" : "en";
    root.setAttribute("lang", lang);
    document.title = t("title");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    renderAge();

    if (langBtn) {
      // The button shows the language you will switch TO
      langBtn.textContent = lang === "en" ? "ગુ" : "En";
      var tip = lang === "en" ? "ગુજરાતીમાં જુઓ" : "View in English";
      langBtn.setAttribute("aria-label", tip);
      langBtn.setAttribute("title", tip);
    }
    store.set("biodata-lang", lang);
  }

  if (langBtn) {
    langBtn.addEventListener("click", function () { applyLang(lang === "en" ? "gu" : "en"); });
  }

  /* =========================================================
     2. Age from date of birth
     ========================================================= */
  function renderAge() {
    document.querySelectorAll(".js-age").forEach(function (el) {
      var dob = new Date(el.getAttribute("data-dob") + "T00:00:00");
      if (isNaN(dob)) return;
      var now = new Date();
      var age = now.getFullYear() - dob.getFullYear();
      if (now.getMonth() < dob.getMonth() ||
          (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) age--;
      el.textContent = age + " " + t("years");
    });
  }

  // English by default; ?lang=gu in the link, or the visitor's last choice, opens Gujarati
  var urlLang = null;
  try { urlLang = new URLSearchParams(location.search).get("lang"); } catch (e) {}
  applyLang(urlLang || store.get("biodata-lang") || "en");

  /* =========================================================
     3. Photo viewer
     ========================================================= */
  var gallery = [];
  try { gallery = JSON.parse(document.getElementById("gallery-data").textContent) || []; } catch (e) {}

  var box = document.getElementById("lightbox");
  var img = document.getElementById("lightbox-img");
  var countEl = document.getElementById("lightbox-count");
  var thumbs = document.getElementById("lightbox-thumbs");
  var idx = 0;
  var lastFocus = null;

  function buildThumbs() {
    thumbs.innerHTML = "";
    if (gallery.length < 2) return;
    gallery.forEach(function (src, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Photo " + (i + 1));
      var im = document.createElement("img");
      im.src = src; im.alt = ""; im.loading = "lazy";
      b.appendChild(im);
      b.addEventListener("click", function () { idx = i; render(); });
      thumbs.appendChild(b);
    });
  }

  function render() {
    if (!gallery.length) return;
    idx = (idx + gallery.length) % gallery.length;
    img.src = gallery[idx];
    img.alt = "Photo " + (idx + 1) + " / " + gallery.length;
    countEl.textContent = gallery.length > 1 ? (idx + 1) + " / " + gallery.length : "";
    thumbs.querySelectorAll("button").forEach(function (b, i) { b.classList.toggle("is-active", i === idx); });
  }

  function openLightbox(start) {
    if (!gallery.length) return;
    lastFocus = document.activeElement;
    idx = start || 0;
    buildThumbs(); render();
    box.hidden = false;
    body.classList.add("is-locked");
    box.querySelector("[data-close]").focus();
  }

  function closeLightbox() {
    box.hidden = true;
    img.removeAttribute("src");
    body.classList.remove("is-locked");
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll(".js-open-gallery").forEach(function (el) {
    el.addEventListener("click", function () { openLightbox(parseInt(el.getAttribute("data-index"), 10) || 0); });
  });

  box.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]") || e.target === box) return closeLightbox();
    var step = e.target.closest("[data-step]");
    if (step) { idx += parseInt(step.getAttribute("data-step"), 10); render(); }
  });

  var startX = null;
  img.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
  img.addEventListener("touchend", function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) { idx += dx < 0 ? 1 : -1; render(); }
    startX = null;
  });

  document.addEventListener("keydown", function (e) {
    if (box.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") { idx++; render(); }
    else if (e.key === "ArrowLeft") { idx--; render(); }
  });

  var param = null;
  try { param = new URLSearchParams(location.search).get("id"); } catch (e) {}
  if (param === "image_show" || param === "profile_image_pdf") openLightbox(0);

  /* =========================================================
     4. PDF download
     Why it failed before:
       - the page was captured at the phone's width and at the
         current scroll position, which gives blank or cut pages;
       - lazy-loaded photos were not loaded yet;
       - very tall canvases go over the phone's size limit.
     Now: we wait for fonts and photos, capture from the top at a
     fixed desktop width, keep sections whole across pages, and if
     the browser still blocks it (for example when the file is
     opened straight from the computer), we open the print dialog
     so the person can choose "Save as PDF".
     ========================================================= */
  function waitForImages(scope) {
    var imgs = Array.prototype.slice.call(scope.querySelectorAll("img"));
    return Promise.all(imgs.map(function (im) {
      im.loading = "eager";
      if (im.complete && im.naturalWidth) return Promise.resolve();
      return new Promise(function (res) { im.onload = im.onerror = res; });
    }));
  }

  function printFallback() {
    window.print();
  }

  /* =========================================================
     Scroll reveal: cards fade up when they come into view.
     Side-by-side cards get a small stagger.
     ========================================================= */
  if (root.classList.contains("motion") && "IntersectionObserver" in window) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        revealIO.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    document.querySelectorAll(".body > .section, .footer").forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 2) * 0.12 + "s";
      revealIO.observe(el);
    });
  }

  document.querySelectorAll(".js-download-pdf").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var el = document.getElementById("biodata");
      var prevTheme = root.getAttribute("data-theme");

      function start() {
        btn.disabled = true;
        btn.textContent = t("pdfBusy");
        root.setAttribute("data-theme", "light");
      }
      function finish() {
        if (prevTheme) root.setAttribute("data-theme", prevTheme); else root.removeAttribute("data-theme");
        btn.disabled = false;
        btn.textContent = t("pdf");
      }

      // Library didn't load (offline / blocked) or page opened as a local file
      if (typeof window.html2pdf !== "function" || location.protocol === "file:") {
        printFallback();
        return;
      }

      start();
      var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();

      // Hidden A4-width copy of the page, always in the two-column layout
      var holder = document.createElement("div");
      holder.className = "pdf-holder";
      var copy = el.cloneNode(true);
      copy.removeAttribute("id");
      copy.classList.add("pdf-layout");

      // Pair the sections into rows so a row never splits across two pages
      var main = copy.querySelector(".body");
      var sections = Array.prototype.slice.call(main.children);
      var row = null;
      sections.forEach(function (sec) {
        var full = sec.classList.contains("section--full");
        if (full || !row || row.children.length === 2) {
          row = document.createElement("div");
          row.className = "pdf-row";
          main.appendChild(row);
        }
        row.appendChild(sec);
        if (full) row = null;
      });
      holder.appendChild(copy);
      body.appendChild(holder);

      function cleanUp() {
        if (holder.parentNode) holder.parentNode.removeChild(holder);
        finish();
      }

      Promise.all([fontsReady, waitForImages(copy)])
        .then(function () {
          return window.html2pdf()
            .set({
              filename: (lang === "gu" ? "milan-kunjadiya-biodata-gujarati" : "milan-kunjadiya-biodata") + ".pdf",
              margin: 0,
              image: { type: "jpeg", quality: 0.95 },
              html2canvas: { scale: 2, useCORS: true, backgroundColor: "#f3f5f4", scrollX: 0, scrollY: 0 },
              jsPDF: { unit: "px", format: [794, 1123], orientation: "portrait", hotfixes: ["px_scaling"] },
              pagebreak: { mode: ["css"], avoid: [".pdf-row", ".masthead", ".footer"] }
            })
            .from(copy)
            .save();
        })
        .then(cleanUp, function (err) {
          console.error("PDF export failed:", err);
          cleanUp();
          printFallback();
        });
    });
  });
})();
