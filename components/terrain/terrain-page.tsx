"use client"

import { useEffect, useState } from "react"
import { useLang } from "@/lib/i18n"
import { STRIPE_LINKS } from "@/lib/config"

const TERRAIN_HTML = `<div aria-hidden="true" class="ambient"></div>
<section class="hero">
<div class="hero-fallback"></div>
<div class="hero-scrim"></div>
<div class="wrap">
<span class="hero-kicker eyebrow"><span class="dot"></span><span data-i18n="hero.kicker">Architecture narrative · Lieux</span></span>
<h1 class="wordmark flicker">THE ROOM</h1>
<p class="hero-tag" data-i18n="hero.tag">Votre lieu est déjà une histoire.<br/><b>Personne ne l'a écrite.</b></p>
<div class="hero-cta">
<a class="btn btn-primary" href="__LANG__/#contact"><span data-i18n="hero.cta1">Prendre contact</span><span class="arr">→</span></a>
<a class="btn btn-ghost" data-i18n="hero.cta2" href="__STRIPE__" target="_blank" rel="noopener">Commander l\'architecture</a>
</div>
<p class="hero-assure" data-i18n="hero.assure">2 900 € · trois semaines · jour 21 ou remboursé</p>
</div>
<span class="scroll-hint" data-i18n="hero.scroll">Défiler</span>
</section>
<div aria-hidden="true" class="marquee">
<div class="marquee-track">
<span class="marquee-item" data-i18n="mq.1">Restaurants</span>
<span class="marquee-item" data-i18n="mq.2">Bars</span>
<span class="marquee-item" data-i18n="mq.3">Clubs</span>
<span class="marquee-item" data-i18n="mq.4">Coffee shops</span>
<span class="marquee-item" data-i18n="mq.5">Caves &amp; bistrots</span>
<span class="marquee-item" data-i18n="mq.6">Rooftops</span>
</div>
</div>
<section class="section manifesto">
<div class="wrap">
<span class="eyebrow reveal" data-i18n="man.eyebrow">Le constat</span>
<p class="reveal d1" data-i18n="man.body">Votre cuisine est excellente. Votre salle est pleine. <em>Et pourtant</em>, chaque publication repart de zéro — parce que personne chez vous ne sait ce que votre lieu raconte. Pendant ce temps, à trois rues d'ici, une adresse deux fois moins bonne que la vôtre affiche complet tous les soirs. Elle ne cuisine pas mieux. <em>Elle se raconte mieux.</em></p>
<p class="reveal d2 man-second" data-i18n="man.body2">Vous n'avez pas un problème de contenu. Vous avez un problème de monde. Un restaurant est déjà une fiction — un décor, une heure, une lumière, un casting, des rituels. <em>Le vôtre n'a jamais été écrit.</em></p>
</div>
</section>
<section class="section" id="documents">
<div class="wrap">
<div class="section-head reveal">
<span class="eyebrow" data-i18n="docs.eyebrow">Lisez le travail</span>
<h2 class="h-sec" data-i18n="docs.title" style="margin-top:1.1rem">Lisez le travail avant de le commander.</h2>
<p class="lead" data-i18n="docs.lead" style="margin-top:1.2rem">Deux exemples en accès libre, sans email à laisser.</p>
</div>
<div class="docs-grid reveal d1">
<a class="docs-card" href="__LANG__/documents/sillage"><span class="docs-name" data-i18n="docs.1.name">SILLAGE</span><span class="docs-sub" data-i18n="docs.1.sub">Logiciel de chantier</span><p data-i18n="docs.1.body">Une commande complète.</p><span class="docs-read" data-i18n="docs.read">Lire le document →</span></a>
<a class="docs-card" href="__LANG__/documents/verso"><span class="docs-name" data-i18n="docs.2.name">VERSO</span><span class="docs-sub" data-i18n="docs.2.sub">Reliure d'art</span><p data-i18n="docs.2.body">Un diagnostic écrit.</p><span class="docs-read" data-i18n="docs.read">Lire le document →</span></a>
</div>
</div>
</section>
<section class="section">
<div class="wrap">
<div class="section-head reveal">
<span class="eyebrow" data-i18n="for.eyebrow">Pour qui</span>
<h2 class="h-sec" data-i18n="for.title" style="margin-top:1.1rem">Est-ce que c'est pour vous ?</h2>
</div>
<div class="for-grid reveal d1">
<div class="for-col for-yes"><div class="for-k" data-i18n="for.yesLabel">C'est pour vous si</div><ul>
<li data-i18n="for.yes.1">.</li><li data-i18n="for.yes.2">.</li><li data-i18n="for.yes.3">.</li></ul></div>
<div class="for-col for-no"><div class="for-k" data-i18n="for.noLabel">Ce n'est pas pour vous si</div><ul>
<li data-i18n="for.no.1">.</li><li data-i18n="for.no.2">.</li><li data-i18n="for.no.3">.</li></ul></div>
</div>
</div>
</section><section class="section">
<style>
  .case-radio{ position:absolute; opacity:0; width:1px; height:1px; pointer-events:none; }
  .case-tab{
    font-family:var(--mono); font-size:.66rem; letter-spacing:.1em; text-transform:uppercase;
    padding:.55rem 1rem; border-radius:100px; color:var(--smoke-dim);
    cursor:pointer; transition:background .3s, color .3s; white-space:nowrap; user-select:none;
  }
  .case-radio:focus-visible + label{ outline:2px solid var(--coral); outline-offset:2px; }
  #case1-norm:checked ~ .case-toggle label[for="case1-norm"],
  #case1-refuse:checked ~ .case-toggle label[for="case1-refuse"],
  #case1-result:checked ~ .case-toggle label[for="case1-result"],
  #case2-norm:checked ~ .case-toggle label[for="case2-norm"],
  #case2-refuse:checked ~ .case-toggle label[for="case2-refuse"],
  #case2-result:checked ~ .case-toggle label[for="case2-result"],
  #case3-norm:checked ~ .case-toggle label[for="case3-norm"],
  #case3-refuse:checked ~ .case-toggle label[for="case3-refuse"],
  #case3-result:checked ~ .case-toggle label[for="case3-result"]{ background:var(--coral); color:#0a0a0a; }
  .case-pane-wrap{ position:relative; min-height:4.6em; }
  .case-pane{ position:absolute; inset:0; opacity:0; pointer-events:none; transition:opacity .4s var(--ease); }
  #case1-norm:checked ~ .case-pane-wrap .case-pane[data-pane="norm"],
  #case1-refuse:checked ~ .case-pane-wrap .case-pane[data-pane="refuse"],
  #case1-result:checked ~ .case-pane-wrap .case-pane[data-pane="result"],
  #case2-norm:checked ~ .case-pane-wrap .case-pane[data-pane="norm"],
  #case2-refuse:checked ~ .case-pane-wrap .case-pane[data-pane="refuse"],
  #case2-result:checked ~ .case-pane-wrap .case-pane[data-pane="result"],
  #case3-norm:checked ~ .case-pane-wrap .case-pane[data-pane="norm"],
  #case3-refuse:checked ~ .case-pane-wrap .case-pane[data-pane="refuse"],
  #case3-result:checked ~ .case-pane-wrap .case-pane[data-pane="result"]{ opacity:1; pointer-events:auto; position:relative; }
</style>
<div class="wrap">
<div class="section-head reveal">
<span class="eyebrow" data-i18n="case.eyebrow">Ce que ça donne, ailleurs</span>
<h2 class="h-sec" data-i18n="case.title" style="margin-top:1.1rem">Trois maisons qui ont tranché.</h2>
<p class="lead" data-i18n="case.lead" style="margin-top:1.2rem">Aucune n'a été construite par nous. Toutes les trois ont fait, à leur échelle, ce que cette Architecture fait à la vôtre.</p>
</div>
<div style="display:grid; gap:0">
<div class="case-row reveal" style="padding:2.8rem 0; border-top:1px solid var(--line-soft)">
<div style="display:flex; align-items:baseline; gap:.8rem; margin-bottom:1.6rem">
<span style="font-family:var(--display); font-weight:700; font-size:1.05rem; color:var(--coral)">01</span>
<span style="font-family:var(--mono); font-size:.72rem; letter-spacing:.22em; text-transform:uppercase; color:var(--smoke-dim)" data-i18n="case.1.name">Maison</span>
</div>
<input type="radio" name="case1" id="case1-norm" class="case-radio" checked>
<input type="radio" name="case1" id="case1-refuse" class="case-radio">
<input type="radio" name="case1" id="case1-result" class="case-radio">
<div class="case-toggle" role="tablist" style="display:inline-flex; flex-wrap:wrap; gap:.2rem; border:1px solid var(--line-soft); border-radius:100px; padding:3px; margin-bottom:1.8rem">
<label for="case1-norm" class="case-tab" data-i18n="case.normLabel">Ce que fait le secteur</label>
<label for="case1-refuse" class="case-tab" data-i18n="case.refuseLabel">Ce qu'elle a fait</label>
<label for="case1-result" class="case-tab" data-i18n="case.resultLabel">Ce que ça a donné</label>
</div>
<div class="case-pane-wrap">
<p class="case-pane" data-pane="norm" style="margin:0; max-width:62ch; font-family:var(--body); font-size:1.05rem; color:var(--smoke-dim); line-height:1.75; font-style:italic" data-i18n="case.1.norm">La norme du secteur.</p>
<p class="case-pane" data-pane="refuse" style="margin:0; max-width:62ch; font-family:var(--display); font-weight:600; font-size:1.15rem; color:var(--cream); line-height:1.6" data-i18n="case.1.refuse">Ce qui a été refusé.</p>
<p class="case-pane" data-pane="result" style="margin:0; max-width:62ch; font-family:var(--display); font-weight:700; font-size:1.15rem; color:var(--iris-soft); line-height:1.5" data-i18n="case.1.body">L'effet qui dure.</p>
</div>
</div>
<div class="case-row reveal" style="padding:2.8rem 0; border-top:1px solid var(--line-soft)">
<div style="display:flex; align-items:baseline; gap:.8rem; margin-bottom:1.6rem">
<span style="font-family:var(--display); font-weight:700; font-size:1.05rem; color:var(--coral)">02</span>
<span style="font-family:var(--mono); font-size:.72rem; letter-spacing:.22em; text-transform:uppercase; color:var(--smoke-dim)" data-i18n="case.2.name">Maison</span>
</div>
<input type="radio" name="case2" id="case2-norm" class="case-radio" checked>
<input type="radio" name="case2" id="case2-refuse" class="case-radio">
<input type="radio" name="case2" id="case2-result" class="case-radio">
<div class="case-toggle" role="tablist" style="display:inline-flex; flex-wrap:wrap; gap:.2rem; border:1px solid var(--line-soft); border-radius:100px; padding:3px; margin-bottom:1.8rem">
<label for="case2-norm" class="case-tab" data-i18n="case.normLabel">Ce que fait le secteur</label>
<label for="case2-refuse" class="case-tab" data-i18n="case.refuseLabel">Ce qu'elle a fait</label>
<label for="case2-result" class="case-tab" data-i18n="case.resultLabel">Ce que ça a donné</label>
</div>
<div class="case-pane-wrap">
<p class="case-pane" data-pane="norm" style="margin:0; max-width:62ch; font-family:var(--body); font-size:1.05rem; color:var(--smoke-dim); line-height:1.75; font-style:italic" data-i18n="case.2.norm">La norme du secteur.</p>
<p class="case-pane" data-pane="refuse" style="margin:0; max-width:62ch; font-family:var(--display); font-weight:600; font-size:1.15rem; color:var(--cream); line-height:1.6" data-i18n="case.2.refuse">Ce qui a été refusé.</p>
<p class="case-pane" data-pane="result" style="margin:0; max-width:62ch; font-family:var(--display); font-weight:700; font-size:1.15rem; color:var(--iris-soft); line-height:1.5" data-i18n="case.2.body">L'effet qui dure.</p>
</div>
</div>
<div class="case-row reveal" style="padding:2.8rem 0; border-top:1px solid var(--line-soft); border-bottom:1px solid var(--line-soft)">
<div style="display:flex; align-items:baseline; gap:.8rem; margin-bottom:1.6rem">
<span style="font-family:var(--display); font-weight:700; font-size:1.05rem; color:var(--coral)">03</span>
<span style="font-family:var(--mono); font-size:.72rem; letter-spacing:.22em; text-transform:uppercase; color:var(--smoke-dim)" data-i18n="case.3.name">Maison</span>
</div>
<input type="radio" name="case3" id="case3-norm" class="case-radio" checked>
<input type="radio" name="case3" id="case3-refuse" class="case-radio">
<input type="radio" name="case3" id="case3-result" class="case-radio">
<div class="case-toggle" role="tablist" style="display:inline-flex; flex-wrap:wrap; gap:.2rem; border:1px solid var(--line-soft); border-radius:100px; padding:3px; margin-bottom:1.8rem">
<label for="case3-norm" class="case-tab" data-i18n="case.normLabel">Ce que fait le secteur</label>
<label for="case3-refuse" class="case-tab" data-i18n="case.refuseLabel">Ce qu'elle a fait</label>
<label for="case3-result" class="case-tab" data-i18n="case.resultLabel">Ce que ça a donné</label>
</div>
<div class="case-pane-wrap">
<p class="case-pane" data-pane="norm" style="margin:0; max-width:62ch; font-family:var(--body); font-size:1.05rem; color:var(--smoke-dim); line-height:1.75; font-style:italic" data-i18n="case.3.norm">La norme du secteur.</p>
<p class="case-pane" data-pane="refuse" style="margin:0; max-width:62ch; font-family:var(--display); font-weight:600; font-size:1.15rem; color:var(--cream); line-height:1.6" data-i18n="case.3.refuse">Ce qui a été refusé.</p>
<p class="case-pane" data-pane="result" style="margin:0; max-width:62ch; font-family:var(--display); font-weight:700; font-size:1.15rem; color:var(--iris-soft); line-height:1.5" data-i18n="case.3.body">L'effet qui dure.</p>
</div>
</div>
</div>
</div>
</section>

<section class="section">
<div class="wrap stats">
<div class="stat card tilt reveal"><span class="num">01</span><div class="v" data-i18n="stat.1.v">40+</div><div class="l" data-i18n="stat.1.l">Supports dépouillés, de votre site à vos avis clients</div></div>
<div class="stat card tilt reveal d1"><span class="num">02</span><div class="v" data-i18n="stat.2.v">3–5</div><div class="l" data-i18n="stat.2.l">Scripts prêts à tourner</div></div>
<div class="stat card tilt reveal d2"><span class="num">03</span><div class="v" data-i18n="stat.3.v">∞</div><div class="l" data-i18n="stat.3.l">Réutilisable par vos équipes comme par votre outil IA</div></div>
</div>
</section>

<hr class="rule"/>
<section class="section" style="padding-top:2.5rem; padding-bottom:3rem">
<div class="wrap" style="text-align:center">
<p data-i18n="tour.out" style="font-family:var(--display); font-weight:600; font-size:clamp(1.4rem,3.5vw,2.2rem); color:var(--cream)">Tout ça existe déjà chez vous. Il faut juste l'écrire.</p>
</div>
</section>
<section class="section offer" id="offre">
<div class="wrap">
<div class="section-head reveal">
<span class="eyebrow" data-i18n="offer.eyebrow">L'offre</span>
<h2 class="h-sec" data-i18n="offer.title" style="margin-top:1.1rem">Une offre. Un prix. Une date de livraison.</h2>
</div>
<div class="offer-pair reveal d1">
<div class="offer-card">
<div class="offer-name" data-i18n="offer.name">Phase 1 · Le récit</div>
<div class="offer-price" data-i18n="offer.price">2 900 €</div>
<p class="offer-desc" data-i18n="offer.desc">.</p>
<ul class="offer-list"><li data-i18n="offer.l1">.</li><li data-i18n="offer.l2">.</li><li data-i18n="offer.l3">.</li></ul>
<a class="btn btn-primary" href="__STRIPE__" target="_blank" rel="noopener"><span data-i18n="offer.btn">Commander le récit</span><span class="arr">→</span></a>
<p class="offer-note" data-i18n="offer.note">.</p>
</div>
<div class="offer-card offer-card-full">
<div class="offer-name" data-i18n="offer2.name">Le moment complet</div>
<div class="offer-from" data-i18n="offer2.from">À partir de</div>
<div class="offer-price" data-i18n="offer2.price">6 000 €</div>
<p class="offer-desc" data-i18n="offer2.desc">.</p>
<ul class="offer-list"><li data-i18n="offer2.l1">.</li><li data-i18n="offer2.l2">.</li><li data-i18n="offer2.l3">.</li><li data-i18n="offer2.l4">.</li></ul>
<a class="btn btn-primary" href="__LANG__/#contact"><span data-i18n="offer2.btn">Parlez-nous de votre moment</span><span class="arr">→</span></a>
<p class="offer-note" data-i18n="offer2.note">.</p>
</div>
</div>
<div class="offer-steps-wrap offer-steps-full reveal d1">
<div class="offer-steps-title" data-i18n="offer.stepsTitle">Le déroulé d'un moment</div>
<ol class="offer-steps">
<li><span class="os-k" data-i18n="offer.s1.k">.</span><div><b data-i18n="offer.s1.t">.</b><span data-i18n="offer.s1.d">.</span></div></li>
<li><span class="os-k" data-i18n="offer.s2.k">.</span><div><b data-i18n="offer.s2.t">.</b><span data-i18n="offer.s2.d">.</span></div></li>
<li><span class="os-k" data-i18n="offer.s3.k">.</span><div><b data-i18n="offer.s3.t">.</b><span data-i18n="offer.s3.d">.</span></div></li>
<li><span class="os-k" data-i18n="offer.s4.k">.</span><div><b data-i18n="offer.s4.t">.</b><span data-i18n="offer.s4.d">.</span></div></li>
<li><span class="os-k" data-i18n="offer.s5.k">.</span><div><b data-i18n="offer.s5.t">.</b><span data-i18n="offer.s5.d">.</span></div></li>
</ol>
<p class="offer-steps-note" data-i18n="offer.stepsNote">.</p>
</div>
<div class="guar-title reveal d2" data-i18n="guar.title">Les garanties du récit</div>
<div class="guar-grid reveal d2">
<div class="guar"><b data-i18n="guar.1.t">.</b><p data-i18n="guar.1.d">.</p></div>
<div class="guar"><b data-i18n="guar.2.t">.</b><p data-i18n="guar.2.d">.</p></div>
<div class="guar"><b data-i18n="guar.3.t">.</b><p data-i18n="guar.3.d">.</p></div>
</div>
</div>
</section>
<section class="section">
<div class="wrap">
<div class="section-head reveal">
<span class="eyebrow" data-i18n="faq.eyebrow">Questions fréquentes</span>
<h2 class="h-sec" data-i18n="faq.title">Ce que les gérants nous demandent.</h2>
</div>
<div class="faq reveal d1">
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.1.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.1.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.2.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.2.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.3.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.3.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.4.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.4.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.5.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.5.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.6.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.6.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.7.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.7.a">.</p></div></div></div>
<div class="faq-item"><button aria-expanded="false" class="faq-q"><span data-i18n="faq.8.q">.</span><span class="pm">+</span></button><div class="faq-a"><div><p data-i18n="faq.8.a">.</p></div></div></div>
</div>
</div>
</section><section class="section">
<div class="wrap">
<div class="cta-band wipe">
<span class="eyebrow" data-i18n="cta.eyebrow">L'architecture narrative</span>
<h2 data-i18n="cta.title" style="margin-top:1rem">Racontez-moi votre lieu.</h2>
<p class="lead" data-i18n="cta.lead">2 900 €, livré sous trois semaines. Six pièces écrites à la main, à vous pour toujours.</p>
<div class="cta-btns"><a class="btn btn-primary" href="__LANG__/#contact"><span data-i18n="cta.btn">Parlez-nous de votre moment</span><span class="arr">→</span></a>
<a class="btn btn-ghost" href="__STRIPE__" target="_blank" rel="noopener" data-i18n="cta.btn2">Commander le récit seul</a></div>
<p class="cta-note" data-i18n="cta.note">.</p>
</div>
</div>
</section>
`

export type TerrainCopy = {
  wordmark: { fr: string; en: string }
  fr: Record<string, string>
  en: Record<string, string>
}

const BAR = {"fr": {"name": "Le moment complet · dès 6 000 €", "sub": "Le récit seul · 2 900 €", "btn": "Parlez-nous de votre moment"}, "en": {"name": "The full moment · from €6,000", "sub": "The story alone · €2,900", "btn": "Tell us about your moment"}}

function BuyBar({ lang }: { lang: string }) {
  const bar = BAR[lang === "en" ? "en" : "fr"]

  const [showBar, setShowBar] = useState(false)
  useEffect(() => {
    let raf = 0
    const measure = () => {
      raf = 0
      const vh = window.innerHeight
      const hero = document.querySelector(".hero")?.getBoundingClientRect()
      const past = !!hero && hero.bottom < vh * 0.15
      const inView = (sel: string) => {
        const r = document.querySelector(sel)?.getBoundingClientRect()
        return !!r && r.top < vh * 0.9 && r.bottom > vh * 0.1
      }
      setShowBar(past && !inView(".offer") && !inView(".cta-band"))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(measure) }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    const t = window.setTimeout(measure, 600)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      window.clearTimeout(t)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <div className={`buybar${showBar ? " on" : ""}`} aria-hidden={!showBar}>
      <div className="buybar-txt">
        <b>{bar.name}</b>
        <span>{bar.sub}</span>
      </div>
      <a className="btn btn-primary buybar-btn" href={`/${lang}/#contact`} tabIndex={showBar ? 0 : -1}>
        <span>{bar.btn}</span>
        <span className="arr">→</span>
      </a>
    </div>
  )
}

function localize(html: string, d: Record<string, string>) {
  return html.replace(
    /<([a-zA-Z][a-zA-Z0-9]*)(\s[^>]*?\sdata-i18n="([^"]+)"[^>]*|\sdata-i18n="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/g,
    (m, tag: string, attrs: string, k1: string | undefined, k2: string | undefined) => {
      const k = k1 ?? k2
      return k && d[k] != null ? `<${tag}${attrs}>${d[k]}</${tag}>` : m
    },
  )
}

export function TerrainPage({ copy }: { copy: TerrainCopy }) {
  const { lang } = useLang()

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/nocta/app.js?v=3"
    script.defer = true
    document.body.appendChild(script)
    return () => script.remove()
  }, [copy, lang])

  const dict = lang === "en" ? copy.en : copy.fr
  const html = localize(
    TERRAIN_HTML.split("__LANG__").join(`/${lang}`).split("__STRIPE__").join(STRIPE_LINKS.architecture).replace(
      /<h1 class="wordmark flicker">[^<]*<\/h1>/,
      `<h1 class="wordmark flicker">${lang === "en" ? copy.wordmark.en : copy.wordmark.fr}</h1>`,
    ),
    dict,
  )

  return (
    <>
      <link rel="stylesheet" href="/nocta/styles.css?v=3" />

      <a
        href={`/${lang}`}
        style={{
          position: "fixed",
          top: "25px",
          left: "clamp(20px,5vw,64px)",
          zIndex: 130,
          fontFamily: "var(--display)",
          fontWeight: 700,
          fontSize: "22px",
          letterSpacing: "-0.02em",
          color: "#2256ff",
          textDecoration: "none",
        }}
      >
        MOMENTUM.
      </a>

      <main id="main">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>

      <BuyBar lang={lang} />
    </>
  )
}
