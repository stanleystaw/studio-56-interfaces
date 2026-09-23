const rows = [
  ["One Task at a Time", "Tech & produit", "Une landing page de productivité aux couleurs violettes, centrée sur l’organisation des tâches et le suivi des progrès."],
  ["KySee — Quality Checking", "Tech & produit", "Un produit de contrôle qualité à l’univers vert électrique, avec une illustration 3D et des cartes de fonctionnalités."],
  ["New Balance — Sneaker shop", "Commerce", "Une boutique de sneakers sombre, contrastée, avec une grande mise en avant produit et des blocs éditoriaux."],
  ["Pixel Point — Digital studio", "Studio & services", "Une vitrine d’agence créative orange et crème, avec portfolio, services et appel à l’action."],
  ["Porsche — Performance", "Commerce", "Une page produit automobile noire et rose, conçue autour d’une voiture sportive et de ses caractéristiques."],
  ["NovaTrend — Lifestyle store", "Commerce", "Une boutique mode et lifestyle claire, structurée en catégories, nouveautés et sélections tendance."],
  ["Apex Solutions — Innovation", "Studio & services", "Une vitrine tech bleue mettant en scène une ville futuriste et un catalogue de services."],
  ["Tecton — Intelligence artificielle", "Tech & produit", "Une expérience produit sombre et violette autour de l’IA, avec sections de bénéfices et visuels futuristes."],
  ["Fabrica — Impression 3D", "3D & créatif", "Un site industriel minimaliste pour des services d’impression 3D, de prototypage et de fabrication."],
  ["Digital Designer — Portfolio", "Portfolio", "Un portfolio de designer sombre et éditorial, avec typographie spectaculaire et études de cas."],
  ["EcoHome — Immobilier durable", "Immobilier", "Une plateforme immobilière écoresponsable avec recherche de biens et cartes de maisons."],
  ["Coinfever — Crypto payments", "Tech & produit", "Une présentation claire et lumineuse d’une carte et d’un service de paiement crypto."],
  ["Rent & U — Trouver son logement", "Immobilier", "Une interface de recherche immobilière, avec filtres de location et sélection de maisons."],
  ["Jason Martin — Graphic designer", "Portfolio", "Un portfolio graphique sombre et cinématographique, organisé comme une présentation personnelle."],
  ["Invest — Real estate", "Immobilier", "Une interface d’investissement immobilier présentant les étapes, les rendements et les projets."],
  ["Virat Kohli Foundation", "Culture & événement", "Une vitrine sportive lumineuse avec portraits, programmes, actualités et appels aux dons."],
  ["Pittu Pittu — Burger", "Food & lifestyle", "Un site de restauration sombre et rouge, centré sur un burger vedette et un menu de commande."],
  ["Website Content Creation", "Studio & services", "Une page éditoriale consacrée à la création de contenu web, avec une illustration en relief."],
  ["Exactly Bar — Payments", "Tech & produit", "Une expérience fintech noire et violette, avec déclinaison bureau/mobile et sections de services."],
  ["Apex Solutions — Corporate", "Studio & services", "Une présentation corporate en gris ardoise, articulée autour de l’équipe, des services et du contact."],
  ["Surface — Product experience", "Tech & produit", "Une interface immersive aux couleurs pastel, inspirée d’un univers fantastique et de modules de recherche."],
  ["Hotch — Web studio", "Studio & services", "Une présentation d’agence web dans un ordinateur portable, avec services, portfolio et formulaires."],
  ["Cyfoni — NFT collection", "Tech & produit", "Une vitrine crypto bleu nuit dédiée aux NFT, avec collections, artistes et ressources."],
  ["Create a Website — Concept", "3D & créatif", "Un concept de page violet en relief, illustré par des outils de création et une fenêtre web."],
  ["Lovro Podnik — Design subscription", "Portfolio", "Une offre de design digital sur abonnement, présentée sous forme de parcours et de projets."],
  ["Byteaxe — Digital agency", "Studio & services", "Un site d’agence digitale lumineux, avec services web, bénéfices et formulaire de contact."],
  ["QualiCode — Developer portfolio", "Portfolio", "Un portfolio développeur noir et violet, avec compétences, expérience, réalisations et contact."],
  ["Dynamic Shapes — Feature cards", "3D & créatif", "Trois cartes de fonctionnalités en verre bleu, jouant avec les formes, les couleurs et la typographie."],
  ["Clayful — Creative workspace", "Tech & produit", "Une application d’organisation pastel conçue pour la gestion de tâches, les outils créatifs et les équipes."],
  ["Studio Pley — Creative studio", "Studio & services", "Une vitrine de studio créatif immersive, aux lumières néon et aux visuels éditoriaux."],
  ["OualiCode — Portfolio", "Portfolio", "Un portfolio de développeur minimal et noir, présentant certificats, compétences et parcours."],
  ["Fontain — Fashion 2024", "Commerce", "Une direction artistique mode très épurée, entre éditorial, collection et boutique en ligne."],
  ["3DPrint — World of 3D printing", "Commerce", "Une boutique dédiée à l’impression 3D, avec collections de produits et formulaire newsletter."],
  ["Solo Leveling — Character cards", "Culture & événement", "Des fiches de personnages inspirées de l’animation, présentées dans deux panneaux immersifs."],
  ["Metaverse — Online conference", "Culture & événement", "Une landing page de conférence métaverse violette, avec programme, intervenants et partenaires."],
  ["Create a Website — 3D feature", "3D & créatif", "Une affiche produit en relief, encadrée comme une carte de fonctionnalité web."],
  ["Mary Smith — UX/UI designer", "Portfolio", "Un portfolio de designer aux tons sombres, avec biographie, services et projets sélectionnés."],
  ["Abdullah Tariq — Developer", "Portfolio", "Un portfolio développeur bleu nuit et turquoise, avec expertise, projets, processus et contact."],
  ["Лист & Зёрна — Coffee shop", "Food & lifestyle", "Une identité de café douce et végétale, avec menu, produits, infos boutique et newsletter."],
  ["Exactly Bar — Payment experience", "Tech & produit", "Une présentation de services de paiement avec mise en page violette et adaptation mobile."],
  ["Pittu Pittu — Restaurant", "Food & lifestyle", "Une seconde direction restaurant, sombre et gourmande, avec menu, plats et mise en avant de spécialités."],
  ["Flacto — NFT art", "Tech & produit", "Une marketplace d’art numérique sombre et turquoise, dédiée aux œuvres et objets de collection."],
  ["Comatis — Digital solutions", "Studio & services", "Une vitrine technologique bleu pétrole, consacrée au cloud, à l’IA et aux solutions digitales."],
  ["Innovate · Elevate · Transform", "Studio & services", "Une agence conseil sobre, avec services en cartes et présentation de l’entreprise."],
  ["Techgear — Gaming store", "Commerce", "Un catalogue e-commerce sombre pour accessoires gaming, produits tech et équipements."],
  ["Françesca Lupi — 3D Artist", "Portfolio", "Un portfolio d’artiste 3D à la typographie monumentale, avec univers organique et bio créative."],
  ["Payze — Mobile payments", "Tech & produit", "Une page fintech lumineuse présentant une application pour envoyer, recevoir et recharger de l’argent."],
  ["Example — Electronics shop", "Commerce", "Une boutique électronique structurée autour des catégories, offres, nouveautés et meilleures ventes."],
  ["Make Your Website Stand Out", "3D & créatif", "Une présentation de créations et d’illustrations isométriques pour le web et les marques."],
  ["KySee — Smart Product QC", "Tech & produit", "Une page produit de contrôle qualité intelligent, avec schéma 3D et arguments de performance."],
  ["Dynamic Shapes — Feature set", "3D & créatif", "Une série de cartes graphiques mettant en scène formes dynamiques et couleurs vives."],
  ["QX — Cinema 4D course", "Formation", "Une interface de formation créative autour d’un parcours débutant en Cinema 4D."],
  ["Tecton — AI solutions", "Tech & produit", "Une vitrine IA sombre présentant automatisation, analyse de données et solutions numériques."],
  ["HYKROX — Creative designers", "Studio & services", "Une agence de création à l’esthétique noire et turquoise, avec services, équipe et chiffres-clés."],
  ["Abdullah Tariq — Web developer", "Portfolio", "Un portfolio de développeur full-stack en bleu néon, avec projets et formulaire de contact."],
  ["Digital Designer — Portfolio", "Portfolio", "Une page de designer digitale sombre, centrée sur les titres expressifs et les collaborations."]
];

const references = rows.map(([title, category, description], index) => {
  const id = String(index + 1).padStart(2, "0");
  return { id, title, category, description, asset: `./assets/art/art-${id}.jpg` };
});

const iconPaths = {
  arrowUpRight: '<path d="M7 17 17 7M7 7h10v10"/>',
  arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  arrowLeft: '<path d="M19 12H5m7 7-7-7 7-7"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
  copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bookmark: '<path d="M6 4h12v17l-6-4-6 4V4Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>'
};

function icon(name, cls = "") {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.spark}</svg>`;
}

const app = document.getElementById("app");
let currentView = "";
let activeCategory = "Tout";
let searchTerm = "";
let sortMode = "selection";
let toastTimer;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

function header(detail = false) {
  return `<header class="site-header">
    <div class="header-inner">
      <a class="brand" href="#/" aria-label="Studio 56 — accueil">
        <span class="brand-mark">S</span>
        <span class="brand-type">studio 56<small>interface archive</small></span>
      </a>
      <nav class="header-nav" aria-label="Navigation principale">
        ${detail ? '<a href="#/">La galerie</a><a href="#/interface/01">Première référence</a>' : '<a href="#catalogue">Catalogue</a><a href="#a-propos">Le principe</a>'}
      </nav>
      <div class="header-actions">
        <a class="header-count" href="${detail ? "#/" : "#catalogue"}"><span class="pulse"></span>${detail ? "Retour aux 56 visuels" : "56 références"}${detail ? "" : icon("arrowUpRight")}</a>
      </div>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container footer-inner">
      <div><strong>Studio 56</strong> <span>· galerie des visuels fournis</span></div>
      <div class="footer-links"><a href="#catalogue">Catalogue</a><a href="#a-propos">Le principe</a><span>Fait pour explorer, pas pour défiler sans fin.</span></div>
    </div>
  </footer>`;
}

function renderHome() {
  currentView = "home";
  document.title = "Studio 56 — Galerie d’interfaces";
  app.innerHTML = `${header(false)}
    <main id="main">
      <section class="hero" aria-labelledby="hero-title">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="eyebrow"><span class="eyebrow-dot"></span> Moodboard interactif · édition 01</div>
            <h1 id="hero-title">Des idées<br>à <span class="gradient-word">parcourir.</span></h1>
            <p class="hero-copy">56 inspirations transformées en vraies pages web. Chaque interface est reconstruite en HTML/CSS avec sa propre mise en page, ses couleurs, ses sections et ses interactions.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#catalogue">Explorer les références ${icon("arrowRight")}</a>
              <a class="button button-quiet" href="#/interface/01">Ouvrir la première ${icon("arrowUpRight")}</a>
            </div>
            <div class="hero-note"><span></span> Les pages détail sont recodées — pas des captures affichées en plein écran.</div>
          </div>
          <div class="hero-art" aria-label="Aperçu de plusieurs références">
            <div class="hero-orbit"></div>
            <a class="float-shot one" href="#/interface/03" tabindex="-1" aria-hidden="true"><img src="./assets/art/art-03.jpg" alt=""></a>
            <a class="float-shot two" href="#/interface/48" tabindex="-1" aria-hidden="true"><img src="./assets/art/art-48.jpg" alt=""></a>
            <a class="float-shot three" href="#/interface/29" tabindex="-1" aria-hidden="true"><img src="./assets/art/art-29.jpg" alt=""></a>
            <a class="float-shot four" href="#/interface/54" tabindex="-1" aria-hidden="true"><img src="./assets/art/art-54.jpg" alt=""></a>
            <div class="float-label label-a"><span class="tiny-mark">✦</span><span><strong>Collection complète</strong><small>56 pages en vrai code</small></span></div>
            <div class="float-label label-b"><span class="tiny-mark">↗</span><span><strong>Un clic pour ouvrir</strong><small>Navigation précédente / suivante</small></span></div>
            <div class="hero-index"><b>56</b> références · <b>01</b> galerie</div>
          </div>
        </div>
      </section>

      <section class="stats-strip container" aria-label="À propos de la galerie">
        <div class="stats-panel">
          <div class="stat"><div><div class="stat-label">Références reconstruites</div><div class="stat-value">56 interfaces</div></div><span class="stat-icon">${icon("layers")}</span></div>
          <div class="stat"><div><div class="stat-label">Chaque page est composée en</div><div class="stat-value">HTML · CSS · JS</div></div><span class="stat-icon">${icon("monitor")}</span></div>
          <div class="stat"><div><div class="stat-label">Une galerie pour naviguer</div><div class="stat-value">1 index · 56 pages</div></div><span class="stat-icon">${icon("grid")}</span></div>
        </div>
      </section>

      <section class="catalog-section container" id="catalogue" aria-labelledby="catalogue-title">
        <div class="section-heading">
          <div><div class="section-kicker">Le tableau complet</div><h2 id="catalogue-title">Choisis une direction.</h2></div>
          <p>Chaque carte ouvre une interface reconstruite : navigation, textes, boutons, cartes et sections sont des éléments web réels, pas une image de la page.</p>
        </div>
        <div class="catalog-tools">
          <div class="tool-row">
            <label class="search-wrap" for="search-input">${icon("search")}<input id="search-input" class="search-input" type="search" autocomplete="off" placeholder="Rechercher une interface…" value="${escapeHTML(searchTerm)}"><span class="shortcut">/</span></label>
            <span class="results-count" id="results-count" aria-live="polite"></span>
            <select class="sort-select" id="sort-select" aria-label="Trier les références">
              <option value="selection" ${sortMode === "selection" ? "selected" : ""}>Ordre du tableau</option>
              <option value="az" ${sortMode === "az" ? "selected" : ""}>Nom A → Z</option>
              <option value="za" ${sortMode === "za" ? "selected" : ""}>Nom Z → A</option>
            </select>
          </div>
          <div class="filter-list" id="filter-list" aria-label="Filtrer par catégorie"></div>
        </div>
        <div class="gallery-grid" id="gallery-grid"></div>
      </section>

      <section class="container" id="a-propos" style="padding:0 0 74px">
        <div class="info-card" style="display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:22px;padding:22px 25px">
          <div><div class="section-kicker" style="margin:0 0 8px">À propos du rendu</div><strong style="display:block;font-size:18px;letter-spacing:-.04em">Des interfaces construites en vrai code.</strong><p style="max-width:760px;margin:8px 0 0;color:var(--muted);font-size:11px;line-height:1.7">Chaque route assemble une page HTML/CSS avec sa composition, ses sections, ses textes, ses boutons et des interactions. Les images de référence ne sont plus utilisées comme pages complètes ; quelques recadrages servent uniquement d’illustrations. Sans les fichiers sources, polices et assets séparés d’origine, le rendu est une reconstruction fidèle, pas une garantie de pixel-perfect absolu.</p></div>
          <a class="button button-quiet" href="#catalogue">Retourner au catalogue ${icon("arrowUpRight")}</a>
        </div>
      </section>
    </main>
    ${footer()}`;

  const filterList = document.getElementById("filter-list");
  const categories = ["Tout", ...new Set(references.map(item => item.category))];
  filterList.innerHTML = categories.map(category => `<button type="button" class="filter-chip ${activeCategory === category ? "active" : ""}" data-filter="${escapeHTML(category)}" aria-pressed="${activeCategory === category}">${escapeHTML(category)}</button>`).join("");

  const input = document.getElementById("search-input");
  input.addEventListener("input", () => { searchTerm = input.value; updateGallery(); });
  document.getElementById("sort-select").addEventListener("change", event => { sortMode = event.target.value; updateGallery(); });
  filterList.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeCategory = button.dataset.filter;
    filterList.querySelectorAll("[data-filter]").forEach(chip => {
      const active = chip.dataset.filter === activeCategory;
      chip.classList.toggle("active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    updateGallery();
  });
  updateGallery();
}

function updateGallery() {
  const grid = document.getElementById("gallery-grid");
  const count = document.getElementById("results-count");
  if (!grid || !count) return;
  const term = searchTerm.trim().toLocaleLowerCase("fr");
  let visible = references.filter(item => {
    const matchesCategory = activeCategory === "Tout" || item.category === activeCategory;
    const matchesSearch = !term || `${item.title} ${item.category} ${item.description} ${item.id}`.toLocaleLowerCase("fr").includes(term);
    return matchesCategory && matchesSearch;
  });
  if (sortMode === "az") visible.sort((a, b) => a.title.localeCompare(b.title, "fr"));
  if (sortMode === "za") visible.sort((a, b) => b.title.localeCompare(a.title, "fr"));
  count.innerHTML = `<strong>${visible.length}</strong> / ${references.length} références`;
  if (!visible.length) {
    grid.innerHTML = `<div class="empty-state"><strong>Aucune référence trouvée.</strong>Essaie un autre mot-clé ou retire le filtre actif.<br><button class="button button-quiet" data-reset style="margin-top:18px">Effacer les filtres</button></div>`;
    grid.querySelector("[data-reset]").addEventListener("click", () => {
      activeCategory = "Tout"; searchTerm = "";
      const input = document.getElementById("search-input");
      if (input) input.value = "";
      const list = document.getElementById("filter-list");
      if (list) list.querySelectorAll("[data-filter]").forEach(chip => {
        const active = chip.dataset.filter === "Tout";
        chip.classList.toggle("active", active); chip.setAttribute("aria-pressed", String(active));
      });
      updateGallery();
    });
    return;
  }
  grid.innerHTML = visible.map(item => `<article class="reference-card">
    <a class="card-link" href="#/interface/${item.id}" aria-label="Ouvrir ${escapeHTML(item.title)}">
      <div class="card-visual">
        <img src="${item.asset}" alt="Aperçu de ${escapeHTML(item.title)}" loading="lazy" decoding="async">
        <span class="card-number">REF ${item.id}</span>
        <span class="card-open">${icon("arrowUpRight")}</span>
      </div>
      <div class="card-info"><div class="card-title"><strong>${escapeHTML(item.title)}</strong><span>${escapeHTML(item.category)}</span></div><span class="card-arrow" aria-hidden="true">↗</span></div>
    </a>
  </article>`).join("");
}

function detailRoute() {
  const match = window.location.hash.match(/^#\/interface\/(\d{1,2})$/);
  if (!match) return null;
  const id = match[1].padStart(2, "0");
  return references.find(item => item.id === id) || null;
}

function renderDetail(item) {
  if (!item) {
    currentView = "not-found";
    app.innerHTML = `${header(true)}<main id="main" class="container" style="padding:90px 0 130px;text-align:center"><div class="eyebrow" style="justify-content:center"><span class="eyebrow-dot"></span> Référence introuvable</div><h1 style="font-size:clamp(38px,8vw,72px);letter-spacing:-.07em">Cette page n’existe pas.</h1><a class="button button-primary" href="#/">Revenir à la galerie ${icon("arrowLeft")}</a></main>${footer()}`;
    return;
  }
  currentView = "detail";
  const index = references.findIndex(ref => ref.id === item.id);
  const previous = references[(index - 1 + references.length) % references.length];
  const next = references[(index + 1) % references.length];
  document.title = `${item.title} — interface reconstruite · Studio 56`;
  const recreatedSite = window.buildRecreatedSite(item);
  app.innerHTML = `<div class="recreation-wrap">
    <div class="recreation-toolbar">
      <a class="recreation-back" href="#/">${icon("arrowLeft")} <span>Galerie</span></a>
      <div class="recreation-status"><b>REF ${item.id}</b><span>Interface reconstruite · HTML / CSS</span></div>
      <div class="recreation-actions"><button type="button" data-copy class="recreation-control" aria-label="Copier le lien">${icon("copy")}<span>Copier le lien</span></button><button type="button" data-immersive class="recreation-control" aria-label="Masquer la barre">${icon("monitor")}<span>Immersion</span></button><a class="recreation-pager" href="#/interface/${previous.id}" aria-label="Interface précédente">${icon("chevronLeft")}</a><a class="recreation-pager" href="#/interface/${next.id}" aria-label="Interface suivante">${icon("chevronRight")}</a></div>
    </div>
    <main id="main" class="recreation-stage">${recreatedSite}</main>
    <div class="toast recreation-toast" id="site-toast" role="status">${icon("check")}<span>Action effectuée.</span></div>
  </div>`;
  app.querySelector("[data-copy]").addEventListener("click", copyCurrentLink);
  app.querySelector("[data-immersive]").addEventListener("click", () => {
    document.body.classList.toggle("immersive-mode");
  });
  window.bindRecreatedSite(app.querySelector(".recreation-stage"));
}

async function copyCurrentLink() {
  try {
    await navigator.clipboard.writeText(window.location.href);
  } catch (error) {
    const helper = document.createElement("textarea");
    helper.value = window.location.href;
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  const toast = document.getElementById("site-toast");
  if (toast) {
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }
}

function route() {
  const item = detailRoute();
  if (item || window.location.hash.startsWith("#/interface/")) {
    renderDetail(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const returningFromDetail = currentView !== "home";
  if (returningFromDetail) renderHome();
  if (returningFromDetail && (window.location.hash === "#catalogue" || window.location.hash === "#a-propos")) {
    const targetId = window.location.hash.slice(1);
    requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" }));
  } else if (returningFromDetail) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

window.addEventListener("hashchange", route);
window.addEventListener("keydown", event => {
  if (event.key === "Escape" && document.body.classList.contains("immersive-mode")) {
    document.body.classList.remove("immersive-mode");
    return;
  }
  const target = event.target;
  const isTyping = target && (target.matches("input, textarea, select") || target.isContentEditable);
  if (currentView === "detail" && !isTyping) {
    const item = detailRoute();
    if (!item) return;
    const index = references.findIndex(ref => ref.id === item.id);
    if (event.key === "ArrowRight") { window.location.hash = `#/interface/${references[(index + 1) % references.length].id}`; }
    if (event.key === "ArrowLeft") { window.location.hash = `#/interface/${references[(index - 1 + references.length) % references.length].id}`; }
    if (event.key === "Escape") { window.location.hash = "#/"; }
  } else if (currentView === "home" && event.key === "/" && !isTyping) {
    event.preventDefault();
    document.getElementById("search-input")?.focus();
  }
});

route();
