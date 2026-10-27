(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none)").matches;
  const clamp01 = (v) => Math.max(0, Math.min(1, v));

  document.querySelectorAll(".marquee-track").forEach((tr) => {
    tr.innerHTML += tr.innerHTML;
  });

  const revs = document.querySelectorAll(".reveal");
  if (revs.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("shown"); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    revs.forEach((el) => io.observe(el));
  }

  const racks = document.querySelectorAll(".rack");
  if (racks.length) {
    const rio = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-focus"); });
    }, { threshold: 0.35 });
    racks.forEach((el) => rio.observe(el));
  }

  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const open = btn.closest(".faq-item").classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  if (!isTouch && !reduce) {
    document.querySelectorAll(".card, .tilt").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.setProperty("--mx", px * 100 + "%");
        card.style.setProperty("--my", py * 100 + "%");
        if (card.classList.contains("tilt")) {
          card.style.transform = `perspective(900px) rotateX(${(py - 0.5) * -7}deg) rotateY(${(px - 0.5) * 7}deg) translateY(-4px)`;
        }
      });
      card.addEventListener("pointerleave", () => {
        if (card.classList.contains("tilt")) card.style.transform = "";
      });
    });

    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
      });
      btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
    });
  }

  function splitWords() {
    document.querySelectorAll('.manifesto [data-i18n="man.body"]').forEach((el) => {
      if (el.querySelector(".mword")) return;
      const wrap = (node) => {
        if (node.nodeType === 3) {
          const frag = document.createDocumentFragment();
          node.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const sp = document.createElement("span");
            sp.className = "mword";
            sp.textContent = part;
            frag.appendChild(sp);
          });
          node.parentNode.replaceChild(frag, node);
        } else if (node.nodeType === 1) {
          Array.from(node.childNodes).forEach(wrap);
        }
      };
      Array.from(el.childNodes).forEach(wrap);
    });
  }
  splitWords();
  document.addEventListener("nocta:lang", splitWords);

  if (reduce) return;

  const ambient = document.querySelector(".ambient");
  const hero = document.querySelector(".hero");
  const heroWrap = hero ? hero.querySelector(".wrap") : null;
  const wordmark = hero ? hero.querySelector(".wordmark") : null;
  const manifesto = document.querySelector(".manifesto");
  const wipes = Array.from(document.querySelectorAll(".wipe"));

  let geo = {};
  function measure() {
    const y = window.scrollY;
    const abs = (el) => { const r = el.getBoundingClientRect(); return { top: r.top + y, h: r.height }; };
    geo = { vh: window.innerHeight, docH: document.documentElement.scrollHeight };
    if (manifesto) geo.man = abs(manifesto);
    geo.wipes = wipes.map((el) => ({ el, ...abs(el) }));
  }

  function run() {
    ticking = false;
    const vh = geo.vh, y = window.scrollY;
    const globalP = clamp01(y / Math.max(1, geo.docH - vh));

    if (ambient) ambient.style.filter = "hue-rotate(" + (globalP * 50).toFixed(1) + "deg)";

    if (heroWrap) {
      const p = clamp01(y / (vh * 0.9));
      heroWrap.style.transform = "translate3d(0," + (-p * 60).toFixed(1) + "px,0)";
      heroWrap.style.opacity = (1 - p * 1.05).toFixed(3);
      if (wordmark) wordmark.style.transform = "scale(" + (1 + p * 0.14).toFixed(3) + ")";
    }

    if (geo.man) {
      const top = geo.man.top - y;
      const p = clamp01((vh * 0.85 - top) / (geo.man.h * 0.7 + vh * 0.05));
      const ws = manifesto.querySelectorAll(".mword");
      const lit = Math.floor(p * ws.length);
      if (manifesto.__lit !== lit) {
        ws.forEach((w, i) => w.classList.toggle("lit", i < lit));
        manifesto.__lit = lit;
      }
    }

    for (const it of geo.wipes) {
      const p = clamp01((vh * 0.94 - (it.top - y)) / (vh * 0.5));
      it.el.style.clipPath = "inset(" + ((1 - p) * 14).toFixed(1) + "% 0 0 0 round 20px)";
      it.el.style.transform = "translate3d(0," + ((1 - p) * 40).toFixed(1) + "px,0)";
      it.el.style.opacity = (0.25 + p * 0.75).toFixed(3);
    }
  }

  let ticking = false;
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } };
  let rt;
  const onResize = () => { clearTimeout(rt); rt = setTimeout(() => { measure(); onScroll(); }, 150); };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
  window.addEventListener("load", () => { measure(); onScroll(); });
  measure();
  run();
})();
