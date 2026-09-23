/* Recréations HTML/CSS des références. Les captures complètes servent uniquement au catalogue ; ici, le contenu est reconstruit en composants web. */
(() => {
  const themes = {
    violet: { bg: "#10091c", panel: "#1d1430", panel2: "#281a40", fg: "#f8f4ff", muted: "#b5aec3", accent: "#a880ff", accent2: "#35d4dc", line: "rgba(255,255,255,.14)", soft: "#efeaff" },
    lime: { bg: "#061018", panel: "#122332", panel2: "#19384a", fg: "#f5fbff", muted: "#9bafbb", accent: "#77e83d", accent2: "#00ca97", line: "rgba(200,236,255,.15)", soft: "#efffe8" },
    blue: { bg: "#edf4fb", panel: "#ffffff", panel2: "#e0ecf8", fg: "#111c2c", muted: "#617187", accent: "#1769d2", accent2: "#55c0df", line: "rgba(16,38,74,.12)", soft: "#e7f1ff" },
    deepblue: { bg: "#071a38", panel: "#0c2d62", panel2: "#123d80", fg: "#f5f8ff", muted: "#c0cde1", accent: "#4d9dff", accent2: "#16c9d8", line: "rgba(230,243,255,.16)", soft: "#dcecff" },
    orange: { bg: "#fff7ef", panel: "#ffffff", panel2: "#f7e8da", fg: "#1c1b1b", muted: "#69605a", accent: "#ef6429", accent2: "#ffb13d", line: "rgba(45,34,26,.13)", soft: "#fff0e3" },
    rose: { bg: "#fff2f7", panel: "#ffffff", panel2: "#f9dfeb", fg: "#21121b", muted: "#796976", accent: "#ec4e9b", accent2: "#9b65ef", line: "rgba(73,31,57,.13)", soft: "#ffe5f1" },
    black: { bg: "#08090d", panel: "#14161c", panel2: "#20232c", fg: "#f4f4f8", muted: "#a1a3af", accent: "#a573ff", accent2: "#35d7e2", line: "rgba(255,255,255,.14)", soft: "#ece3ff" },
    green: { bg: "#edf4e9", panel: "#fffdf8", panel2: "#dcebd6", fg: "#17231b", muted: "#617063", accent: "#347e4b", accent2: "#86b56c", line: "rgba(31,65,41,.14)", soft: "#e1f0d9" },
    cream: { bg: "#f4eddf", panel: "#fffaf1", panel2: "#e9ddc7", fg: "#211c18", muted: "#776e63", accent: "#815a3d", accent2: "#cf824c", line: "rgba(47,36,26,.15)", soft: "#f5e6d3" },
    slate: { bg: "#1c2028", panel: "#272c36", panel2: "#333a47", fg: "#f1f3f6", muted: "#aeb4c0", accent: "#bcc5d4", accent2: "#8f9bb0", line: "rgba(255,255,255,.15)", soft: "#edf1f7" },
    cyan: { bg: "#061b25", panel: "#0b2b36", panel2: "#113d47", fg: "#effeff", muted: "#a6c1c5", accent: "#18d2c4", accent2: "#48a9ff", line: "rgba(215,255,255,.15)", soft: "#d8fffa" },
    purple: { bg: "#24105a", panel: "#321775", panel2: "#492397", fg: "#fffaff", muted: "#ded1f6", accent: "#bb67ff", accent2: "#4daeff", line: "rgba(255,255,255,.18)", soft: "#efe2ff" },
    coral: { bg: "#fff7f2", panel: "#ffffff", panel2: "#f6e6df", fg: "#201916", muted: "#756861", accent: "#ed533d", accent2: "#ff9d64", line: "rgba(61,35,29,.13)", soft: "#ffe5d8" }
  };

  const site = [
    {kind:"saas",theme:"violet",brand:"Tidy",headline:"One Task at a Time",eyebrow:"A calmer way to work",lead:"Celebrate the joy of getting things done. Plan your day, stay focused and see your progress in one place.",cta:"Get started",second:"See how it works"},
    {kind:"saas",theme:"lime",brand:"KySee.ai",headline:"A Smart Product QC Checking",eyebrow:"Intelligent quality control",lead:"Streamline your process with reliable, real-time inspections and smart quality checks built for modern teams.",cta:"Get started",second:"Watch video"},
    {kind:"store",theme:"black",brand:"NEW BALANCE",headline:"Make room for what’s next.",eyebrow:"New season · New energy",lead:"Discover the latest running shoes, designed for a comfortable stride and a little more distance.",cta:"Shop new arrivals",second:"Explore the collection"},
    {kind:"agency",theme:"orange",brand:"Pixel Point",headline:"Professional Website Design & Development",eyebrow:"Complete digital solutions",lead:"Modern, responsive and results-driven websites designed to help your business move forward.",cta:"Start a project",second:"View our work"},
    {kind:"store",theme:"black",brand:"PORSCHE",headline:"Drive the extraordinary.",eyebrow:"Performance · Precision · Porsche",lead:"Discover the machine built around the feeling of the open road.",cta:"Explore the model",second:"Configure yours"},
    {kind:"store",theme:"blue",brand:"NovaTrend",headline:"Discover Products You’ll Love",eyebrow:"Trending now",lead:"Shop the latest products, curated for modern lifestyles and everyday moments.",cta:"Shop now",second:"Explore collection"},
    {kind:"agency",theme:"deepblue",brand:"APEX SOLUTIONS",headline:"Innovate. Transform. Thrive.",eyebrow:"Technology that moves you forward",lead:"We turn ambitious ideas into dependable digital products, intelligent systems and lasting growth.",cta:"Explore our services",second:"Meet the team"},
    {kind:"saas",theme:"black",brand:"TECTON",headline:"Redefining the boundaries of human capability",eyebrow:"Technology · intelligence · impact",lead:"We build thoughtful AI systems to help people solve complex problems with confidence.",cta:"Get started now",second:"Discover the platform"},
    {kind:"industry",theme:"orange",brand:"Fabrica",headline:"Precision 3D Printing",eyebrow:"Industrial additive tech",lead:"From rapid prototypes to end-use parts, make complex ideas real with reliable 3D printing.",cta:"Get an instant quote",second:"Explore services"},
    {kind:"portfolio",theme:"black",brand:"AV / DIGITAL",headline:"DIGITAL DESIGNER",eyebrow:"Available for select projects",lead:"I design elegant, high-performing digital experiences that merge strategy, aesthetics and technology.",cta:"View my work",second:"Download résumé"},
    {kind:"estate",theme:"green",brand:"Pools",headline:"Find Eco-Friendly Homes Easily",eyebrow:"Find your home",lead:"Discover thoughtfully designed homes and sustainable places to live, made for a better everyday.",cta:"Browse homes",second:"How it works"},
    {kind:"fintech",theme:"blue",brand:"COINFEVER",headline:"Send your crypto in a new way.",eyebrow:"A better way to pay",lead:"Get an ultimate crypto card and payment solution. Move with confidence and keep your keys in control.",cta:"Join the waitlist",second:"Learn more"},
    {kind:"estate",theme:"deepblue",brand:"Rent & U",headline:"Finding Your New Home Is Simple",eyebrow:"Your next chapter starts here",lead:"Browse homes in the places you love, compare the details and find a space that feels like yours.",cta:"Search homes",second:"See how it works"},
    {kind:"portfolio",theme:"slate",brand:"JASON MARTIN",headline:"Graphic Designer",eyebrow:"Independent creative · San Francisco",lead:"I craft visual identities and digital experiences with clarity, character and a strong sense of purpose.",cta:"Explore portfolio",second:"Download résumé"},
    {kind:"estate",theme:"rose",brand:"Awesome Us",headline:"Make it easy for everyone to invest in real estate",eyebrow:"Invest together",lead:"Build a more considered property portfolio with clear projects, transparent returns and simple steps.",cta:"See projects",second:"How it works"},
    {kind:"event",theme:"blue",brand:"Virat Kohli Foundation",headline:"Never say never — limits are often just an illusion.",eyebrow:"Champions · Community · Change",lead:"Meet the people redefining what’s possible, and discover programs creating opportunity for the next generation.",cta:"Explore the program",second:"Meet our champions"},
    {kind:"restaurant",theme:"black",brand:"PITTU PITTU",headline:"Burger Spiesz",eyebrow:"Fresh from our kitchen",lead:"A generous burger, crisp greens and a little heat. Made fresh and ready when you are.",cta:"Order now",second:"View the menu"},
    {kind:"editorial",theme:"slate",brand:"WEB CONTENT",headline:"Website Content Creation",eyebrow:"Publish with purpose",lead:"Create engaging content for your website. Bring your ideas into focus with a clear editorial process.",cta:"Get started",second:"Discover our tools"},
    {kind:"fintech",theme:"black",brand:"exactly bar",headline:"Experience the Future of Payments",eyebrow:"Flexible payment processing",lead:"Simple, personalised and secure payment solutions for teams ready to grow.",cta:"Book a meeting",second:"Discover more"},
    {kind:"agency",theme:"slate",brand:"APEX SOLUTIONS",headline:"Driving innovation through technology",eyebrow:"Your partner for what’s next",lead:"We combine strategy, engineering and design to build services that make a measurable difference.",cta:"Get a free consultation",second:"Explore solutions"},
    {kind:"feature",theme:"cyan",brand:"Surface",headline:"Our services",eyebrow:"A clearer view of your work",lead:"Bring your projects together in one calm, flexible workspace built for focus and momentum.",cta:"Explore features",second:"Start exploring"},
    {kind:"agency",theme:"blue",brand:"Hotch",headline:"Grow Your Business Online",eyebrow:"A digital partner for ambitious teams",lead:"Build a stronger online presence with considered design, smart development and support that lasts.",cta:"Get started",second:"View services"},
    {kind:"web3",theme:"black",brand:"CYFONI",headline:"Collect Next Generation NFTs Today",eyebrow:"A new home for digital art",lead:"Discover original collections, meet artists and make your next great find on-chain.",cta:"Explore collections",second:"How it works"},
    {kind:"feature",theme:"rose",brand:"LOGOHERO",headline:"Create Beautiful Website",eyebrow:"A flexible creative toolkit",lead:"Build, shape and refine the digital home for your next big idea.",cta:"Get started",second:"Explore features"},
    {kind:"portfolio",theme:"black",brand:"LOVRO PODNIK",headline:"Unlimited Digital Design",eyebrow:"Design subscription · made simple",lead:"Design support for your business with a clear process, thoughtful craft and room to evolve.",cta:"Make your ideas happen",second:"See the process"},
    {kind:"agency",theme:"blue",brand:"Byteaxe",headline:"Make Your Future Better.",eyebrow:"Digital experiences that inspire",lead:"We partner with ambitious teams to design, build and grow meaningful digital products.",cta:"Let’s work together",second:"Explore services"},
    {kind:"portfolio",theme:"black",brand:"QualiCode",headline:"Hi, I’m QualiCode",eyebrow:"Web developer · creative technologist",lead:"I build useful, accessible experiences with a focus on craft, clarity and thoughtful motion.",cta:"Contact me",second:"Explore my work"},
    {kind:"feature",theme:"deepblue",brand:"SURFACE",headline:"Dynamic Shapes · Vibrant Colors · Bold Typography",eyebrow:"A design system with personality",lead:"Flexible, animated forms, lively color and confident type help every message feel clear.",cta:"Discover more",second:"Explore the system"},
    {kind:"saas",theme:"rose",brand:"Clayful",headline:"Crafted with Care",eyebrow:"Ideas · tasks · better days",lead:"Stay organised, boost productivity and bring your ideas to life with a workspace made for people.",cta:"Get started",second:"Explore the features"},
    {kind:"agency",theme:"violet",brand:"Studio Pley",headline:"Studio Pley Studio",eyebrow:"A creative room for bright ideas",lead:"We shape digital worlds, visual systems and experiences that stay with you.",cta:"Discover our work",second:"Meet the studio"},
    {kind:"portfolio",theme:"black",brand:"OualiCode",headline:"Hi, I’m OualiCode",eyebrow:"Frontend developer · creative builder",lead:"I build modern interfaces and digital products with care, curiosity and clean code.",cta:"Contact me",second:"View projects"},
    {kind:"store",theme:"cream",brand:"FONTAIN — ES 2024",headline:"A wardrobe with a point of view.",eyebrow:"The new season",lead:"Thoughtful everyday pieces, easy layers and modern essentials made to stay in rotation.",cta:"Explore the collection",second:"Shop the edit"},
    {kind:"industry",theme:"blue",brand:"3DPRINT",headline:"Explore the World of 3D Printing",eyebrow:"Make ideas tangible",lead:"Discover practical, precise 3D printing products and tools made for creators and makers.",cta:"Shop now",second:"View collections"},
    {kind:"editorial",theme:"lime",brand:"CHARACTER FILES",headline:"Character profiles",eyebrow:"The world of hunters",lead:"Explore the stories, abilities and relationships behind the characters you know.",cta:"Explore characters",second:"View rankings"},
    {kind:"event",theme:"purple",brand:"Enter the Metaverse",headline:"Explore the future of the Metaverse",eyebrow:"2nd–3rd December · Online",lead:"Meet the builders and thinkers shaping what comes next across virtual worlds and digital culture.",cta:"Buy tickets",second:"View the schedule"},
    {kind:"feature",theme:"purple",brand:"FEATURE",headline:"Create a Website",eyebrow:"A better way to build online",lead:"Use a complete creative toolkit to build, refine and personalise your next website.",cta:"Get started",second:"See how it works"},
    {kind:"portfolio",theme:"black",brand:"THEPRO",headline:"I am a Developer",eyebrow:"Visual designer · web developer",lead:"I make complex ideas feel simple through expressive design and useful digital experiences.",cta:"Contact me",second:"View résumé"},
    {kind:"portfolio",theme:"deepblue",brand:"ABDULLAH TARIQ",headline:"I build digital experiences that matter.",eyebrow:"Software developer",lead:"I turn ideas into scalable, beautiful and useful web applications for people and teams.",cta:"View my work",second:"Let’s talk"},
    {kind:"restaurant",theme:"green",brand:"Лист & Зёрна",headline:"Кофе, в который влюбляешься с первого глотка",eyebrow:"Спешелти кофе · свежая выпечка",lead:"Свежая обжарка, уютная атмосфера и любимые десерты — заходите в гости каждый день.",cta:"Смотреть меню",second:"Заказать столик"},
    {kind:"fintech",theme:"purple",brand:"Payze",headline:"Send, Receive, Top-Up Your Money Easily",eyebrow:"Feel the convenience",lead:"A simple way to manage payments, send money and stay in control wherever life takes you.",cta:"Download the app",second:"Learn more"},
    {kind:"restaurant",theme:"black",brand:"PITTU PITTU",headline:"Burger Spiesz",eyebrow:"Big flavour · fresh ingredients",lead:"Find your favourite burger, build a meal and order it fresh from our kitchen.",cta:"Order online",second:"Explore the menu"},
    {kind:"web3",theme:"cyan",brand:"Flacto",headline:"Collect Extraordinary Art & NFTs",eyebrow:"Marketplace for digital makers",lead:"Discover the next generation of digital art, collect original work and connect with creators.",cta:"Explore art",second:"Meet the artists"},
    {kind:"agency",theme:"cyan",brand:"COMATIS",headline:"Innovate. Elevate. Transform.",eyebrow:"Digital solutions for tomorrow",lead:"We help businesses unlock their next chapter with cloud, data and intelligent technology.",cta:"Explore solutions",second:"Talk to our team"},
    {kind:"agency",theme:"slate",brand:"APEX SOLUTIONS",headline:"Driving innovation through technology",eyebrow:"Strategy · engineering · growth",lead:"A trusted team for ambitious organisations ready to turn new ideas into lasting progress.",cta:"Get free consultation",second:"Our services"},
    {kind:"store",theme:"black",brand:"techgear",headline:"New arrivals",eyebrow:"Gear that moves you",lead:"Find high-performance gear for gaming, creative work and everything in between.",cta:"Shop now",second:"Explore the range"},
    {kind:"portfolio",theme:"purple",brand:"FRANCESCA LUPI",headline:"PORTFOLIO · 3D ARTIST",eyebrow:"3D modeling · shading · lighting",lead:"A collection of playful worlds, considered materials and carefully composed digital objects.",cta:"Explore the portfolio",second:"Contact me"},
    {kind:"fintech",theme:"purple",brand:"Payze",headline:"Send, Receive, Top-Up Your Money Easily",eyebrow:"Feel the convenience",lead:"One clear app for daily payments, transfers and the little things that keep life moving.",cta:"Download the app",second:"Explore features"},
    {kind:"store",theme:"blue",brand:"Example",headline:"Future Technology Today.",eyebrow:"New launch · smart essentials",lead:"Explore the latest devices and everyday technology, curated for the way you live and work.",cta:"Shop now",second:"Watch the film"},
    {kind:"feature",theme:"deepblue",brand:"3D STUDIO",headline:"Make Your Website Stand Out in 3D",eyebrow:"Custom isometric illustration",lead:"Distinctive, layered visuals for digital brands, web headers, landing pages and campaigns.",cta:"Explore the work",second:"See the process"},
    {kind:"saas",theme:"lime",brand:"KySee.ai",headline:"A Smart Product QC Checking",eyebrow:"Get started",lead:"Make product inspection faster, clearer and more consistent with intelligent quality tools.",cta:"Get started",second:"Watch video"},
    {kind:"feature",theme:"deepblue",brand:"FEATURE LAB",headline:"Dynamic Shapes. Vibrant Colors.",eyebrow:"Three ideas, one bold system",lead:"Flexible forms, eye-catching color and confident type bring digital products to life.",cta:"Discover more",second:"Explore features"},
    {kind:"course",theme:"slate",brand:"QX ACADEMY",headline:"Beginner’s Guide to Cinema 4D",eyebrow:"Next course starts · 01 July 2026",lead:"Learn composition, modeling, animation and lighting in a clear, practical creative program.",cta:"Join the course",second:"View curriculum"},
    {kind:"saas",theme:"black",brand:"TECTON",headline:"Technology that moves us forward.",eyebrow:"AI · automation · insight",lead:"Thoughtful artificial intelligence for teams building a smarter, more capable future.",cta:"Get started now",second:"Explore solutions"},
    {kind:"agency",theme:"cyan",brand:"HYKROX",headline:"We Are Creative Designers",eyebrow:"Creative design studio",lead:"We build distinct identities and thoughtful digital experiences for modern brands.",cta:"Let’s talk",second:"See our services"},
    {kind:"portfolio",theme:"violet",brand:"Navia",headline:"Hi, I’m Navia.",eyebrow:"Frontend developer · React",lead:"I build modern, responsive interfaces and thoughtful web products. Explore my certifications, skills and selected projects.",cta:"View projects",second:"Hire me"},
    {kind:"portfolio",theme:"black",brand:"AV STUDIO",headline:"DIGITAL DESIGNER",eyebrow:"Independent designer · available for select projects",lead:"I create memorable brand and digital experiences through clear strategy and bold visual storytelling.",cta:"View my work",second:"Get in touch"}
  ];

  const navByKind = {
    saas: ["Product", "Features", "Stories", "Pricing"],
    store: ["Shop", "New arrivals", "Collections", "About"],
    agency: ["Services", "Work", "About", "Contact"],
    industry: ["Services", "Materials", "Projects", "Contact"],
    portfolio: ["Work", "Capabilities", "About", "Contact"],
    estate: ["Buy", "Rent", "Explore", "About"],
    fintech: ["Product", "Benefits", "Security", "Company"],
    restaurant: ["Menu", "Our story", "Locations", "Contact"],
    editorial: ["Explore", "Stories", "About", "Contact"],
    event: ["Speakers", "Program", "Venue", "Tickets"],
    feature: ["Features", "Solutions", "Process", "Contact"],
    web3: ["Marketplace", "Artists", "Activity", "Community"],
    course: ["Course", "Curriculum", "Instructor", "FAQ"]
  };

  const sectionId = (index) => ["site-home", "site-features", "site-about", "site-contact"][index] || "site-home";
  const esc = (s) => String(s || "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const art = (item, cls="") => `<div class="re-art ${cls}"><img src="./assets/art/art-${item.id}.jpg" alt="Illustration inspirée du visuel ${item.id}" loading="eager" decoding="async"><span class="re-art-glow"></span></div>`;
  const logo = (cfg) => `<a class="re-brand" href="#site-home" aria-label="${esc(cfg.brand)} — accueil"><span class="re-brand-symbol">${esc((cfg.brand || "S").slice(0,1))}</span><span>${esc(cfg.brand)}</span></a>`;
  const button = (label, secondary=false, href="#site-contact") => `<a class="re-button ${secondary ? "re-button-outline" : ""}" href="${href}">${esc(label)} <span aria-hidden="true">↗</span></a>`;
  const nav = (cfg) => `<header class="re-header">${logo(cfg)}<nav class="re-nav">${(navByKind[cfg.kind] || navByKind.agency).map((label,i)=>`<a href="#${sectionId(Math.min(i,3))}">${esc(label)}</a>`).join("")}</nav><div class="re-header-actions"><button class="re-menu-toggle" type="button" aria-label="Ouvrir le menu" data-menu>☰</button>${cfg.kind === "store" ? '<button class="re-cart" type="button" data-cart>Bag <b data-cart-count>0</b></button>' : button(cfg.cta, false, "#site-contact")}</div></header>`;
  const sectionHead = (eyebrow, title, text="") => `<div class="re-section-head"><span class="re-eyebrow">${esc(eyebrow)}</span><h2>${title}</h2>${text ? `<p>${esc(text)}</p>` : ""}</div>`;
  const footer = (cfg) => `<footer class="re-footer" id="site-contact"><div class="re-footer-main"><div><span class="re-eyebrow">${esc(cfg.brand)}</span><h2>${esc(cfg.cta)}<br><i>starts here.</i></h2></div><form class="re-form"><label for="message-${cfg.id}">Let’s make something great.</label><div class="re-form-row"><input id="message-${cfg.id}" type="email" placeholder="Your email address" required><button type="submit">Send ↗</button></div><small>We’ll be in touch soon.</small></form></div><div class="re-footer-bottom"><span>© 2026 ${esc(cfg.brand)}. All rights reserved.</span><span>Instagram&nbsp;&nbsp; Behance&nbsp;&nbsp; LinkedIn</span><a href="#site-home">Back to top ↑</a></div></footer>`;

  function shell(item, cfg, body, refs) {
    const theme = themes[cfg.theme] || themes.blue;
    const index = refs.findIndex(x => x.id === item.id);
    const prev = refs[(index - 1 + refs.length) % refs.length];
    const next = refs[(index + 1) % refs.length];
    return `<div class="recreated-site re-theme-${cfg.theme} re-kind-${cfg.kind}" style="--re-bg:${theme.bg};--re-panel:${theme.panel};--re-panel2:${theme.panel2};--re-fg:${theme.fg};--re-muted:${theme.muted};--re-accent:${theme.accent};--re-accent2:${theme.accent2};--re-line:${theme.line};--re-soft:${theme.soft}">
      <div class="re-site-wrap">${nav(cfg)}${body}${footer(cfg)}</div>
      <nav class="re-gallery-dock" aria-label="Navigation entre les interfaces"><a href="#/" title="Retour à la galerie">← Galerie</a><span>${item.id}<i>/</i>56</span><a href="#/interface/${prev.id}" aria-label="Interface précédente">‹</a><a href="#/interface/${next.id}" aria-label="Interface suivante">›</a></nav>
    </div>`;
  }

  function mockBrowser(item) {
    return `<div class="re-browser"><div class="re-browser-bar"><i></i><i></i><i></i><span>workspace.app</span><b>•••</b></div><div class="re-app-ui"><aside><div class="re-app-logo">${esc(item.id === "29" ? "Clayful" : "Workspace")}</div><span class="on">Overview</span><span>My tasks</span><span>Projects</span><span>Calendar</span><span>Settings</span></aside><div class="re-app-main"><div class="re-app-top"><b>Good morning, Alex ✦</b><span>Today · 09:41</span></div><div class="re-app-cards"><div><small>Project progress</small><strong>78%</strong><i></i></div><div><small>Tasks completed</small><strong>24</strong><i></i></div><div><small>Focus time</small><strong>4h 20m</strong><i></i></div></div><div class="re-app-list"><b>Today’s focus</b><span>✓&nbsp; Review the brand direction <em>Done</em></span><span>◯&nbsp; Prepare the landing page <em>In progress</em></span><span>◯&nbsp; Share the team update <em>09:30</em></span><span>◯&nbsp; Plan next week’s priorities <em>Later</em></span></div></div></div></div>`;
  }

  function genericCards(item, labels, variant="feature") {
    return `<div class="re-card-grid ${variant}">${labels.map((label,i)=>`<article class="re-card"><div class="re-card-icon">${["✳","↗","◈","⌘"][i%4]}</div><span class="re-card-num">0${i+1}</span><h3>${esc(label)}</h3><p>${esc(["Made for the details that matter, with a clear point of view and room to grow.","A thoughtful approach that helps people move forward with confidence.","Flexible tools and considered craft bring the best ideas into focus."][i%3])}</p><a href="#site-contact" aria-label="Learn more about ${esc(label)}">Explore <b>↗</b></a></article>`).join("")}</div>`;
  }

  function visualCards(item, refs, count=3, kind="visual") {
    const start = Number(item.id);
    const pics = Array.from({length:count},(_,i)=>refs[(start+i*7)%refs.length]);
    return `<div class="re-visual-grid">${pics.map((p,i)=>`<article class="re-visual-card"><div class="re-visual-img"><img src="./assets/art/art-${p.id}.jpg" alt="Visuel ${i+1} de la sélection" loading="lazy"><span class="re-visual-index">0${i+1}</span><a href="#site-contact" aria-label="Voir ${esc(p.title)}">↗</a></div><h3>${esc(kind === "product" ? ["Everyday Essential","Studio Edition","Limited Release","Daily Favourite"][i%4] : ["Explore the idea","Made to move","Designed to last"][i%3])}</h3><p>${esc(kind === "product" ? "Thoughtfully made for every day." : p.category)}</p>${kind === "product" ? '<button type="button" class="re-quick-add" data-add>Add to bag +</button>' : ''}</article>`).join("")}</div>`;
  }

  function renderSaaS(item,cfg,refs) {
    return shell(item,cfg,`<main id="site-home">
      <section class="re-hero re-saas-hero"><div class="re-hero-copy"><span class="re-eyebrow"><i></i>${esc(cfg.eyebrow)}</span><h1>${esc(cfg.headline)}</h1><p>${esc(cfg.lead)}</p><div class="re-hero-actions">${button(cfg.cta)}<a class="re-text-link" href="#site-features">${esc(cfg.second)} <span>→</span></a></div><div class="re-social-proof"><div class="re-avatars"><b>A</b><b>J</b><b>M</b><b>+</b></div><span>Trusted by <strong>12,000+</strong> people who get things done.</span></div></div><div class="re-saas-art">${art(item,"art-large")}<div class="re-floating-stat"><b>↗ 84%</b><small>more focused this week</small></div><div class="re-floating-note">✦&nbsp; Progress feels good.</div></div><div class="re-wave"></div></section>
      <section class="re-logo-strip"><span>Built for work that matters</span><b>ACME</b><b>Quanta</b><b>northern</b><b>orbit</b><b>momentum</b></section>
      <section class="re-section" id="site-features">${sectionHead("Everything in one place","Make room for your best work.","A calm, flexible workspace that helps you focus on what matters today.")}${genericCards(item,["Plan with clarity","Keep momentum","Celebrate progress"])}</section>
      <section class="re-product-section" id="site-about"><div class="re-product-copy"><span class="re-eyebrow">A workspace that works for you</span><h2>Less busywork.<br><i>More great work.</i></h2><p>Bring your tasks, notes and team into one simple flow. Set a goal, see what’s next and enjoy every small win.</p>${button(cfg.second,true,"#site-contact")}</div>${mockBrowser(item)}</section>
      <section class="re-quote"><span class="re-quote-mark">“</span><blockquote>Finally, a workspace that makes us feel focused instead of overwhelmed.</blockquote><small>— Jamie R. · Product lead</small></section>
    </main>`,refs);
  }

  function renderAgency(item,cfg,refs) {
    return shell(item,cfg,`<main id="site-home">
      <section class="re-hero re-agency-hero"><div class="re-hero-copy"><span class="re-eyebrow"><i></i>${esc(cfg.eyebrow)}</span><h1>${esc(cfg.headline)}</h1><p>${esc(cfg.lead)}</p><div class="re-hero-actions">${button(cfg.cta)}<a class="re-text-link" href="#site-features">${esc(cfg.second)} <span>↗</span></a></div><div class="re-trust-row"><span>Strategy</span><b>·</b><span>Design</span><b>·</b><span>Technology</span></div></div><div class="re-agency-art">${art(item,"art-tall")}<div class="re-vertical-label">INDEPENDENT · CREATIVE · DIGITAL</div><div class="re-art-caption"><span>01 / 04</span><b>Ideas that move<br>business forward.</b></div></div></section>
      <section class="re-stat-row"><div><b>12+</b><span>Years of experience</span></div><div><b>84</b><span>Projects delivered</span></div><div><b>18</b><span>Countries reached</span></div><div><b>96%</b><span>Client satisfaction</span></div></section>
      <section class="re-section" id="site-features">${sectionHead("What we do","Big ideas, made real.","From the first conversation to launch day, we bring clarity to every step.")}${genericCards(item,["Brand & strategy","Digital experiences","Web development","Growth & support"])}</section>
      <section class="re-about-band" id="site-about"><div class="re-about-art">${art(item,"art-wide")}</div><div><span class="re-eyebrow">Good work, good people</span><h2>Built around<br><i>your next move.</i></h2><p>${esc(cfg.lead)} We bring curious minds and practical experience together to create work with a lasting effect.</p>${button("Meet the studio",true,"#site-contact")}</div></section>
      <section class="re-contact-band"><span class="re-eyebrow">Have a good one in mind?</span><h2>Let’s make it<br><i>happen.</i></h2>${button(cfg.cta,false,"#site-contact")}</section>
    </main>`,refs);
  }

  function renderStore(item,cfg,refs) {
    return shell(item,cfg,`<main id="site-home">
      <section class="re-store-hero"><div class="re-store-copy"><span class="re-eyebrow"><i></i>${esc(cfg.eyebrow)}</span><h1>${esc(cfg.headline)}</h1><p>${esc(cfg.lead)}</p><div class="re-hero-actions">${button(cfg.cta)}<a class="re-text-link" href="#site-products">${esc(cfg.second)} →</a></div><div class="re-store-perks"><span>♧ &nbsp;Free shipping</span><span>◇ &nbsp;Easy returns</span><span>▣ &nbsp;Secure checkout</span></div></div>${art(item,"store-art")}</section>
      <section class="re-category-row" id="site-features"><a href="#site-products"><span>01</span><b>New arrivals</b><i>↗</i></a><a href="#site-products"><span>02</span><b>Best sellers</b><i>↗</i></a><a href="#site-products"><span>03</span><b>Everyday essentials</b><i>↗</i></a><a href="#site-products"><span>04</span><b>Limited editions</b><i>↗</i></a></section>
      <section class="re-section re-store-products" id="site-products">${sectionHead("Selected for you","The pieces worth keeping.","Thoughtful design, dependable quality and details you’ll notice every day.")}${visualCards(item,refs,4,"product")}</section>
      <section class="re-store-feature" id="site-about"><div class="re-store-feature-art">${art(item,"art-wide")}</div><div><span class="re-eyebrow">Made for real life</span><h2>Good design<br><i>goes further.</i></h2><p>We choose lasting materials, useful details and ideas that make everyday life a little better.</p>${button("Our story",true,"#site-contact")}</div></section>
      <section class="re-newsletter"><span class="re-eyebrow">The good stuff, occasionally</span><h2>Get the latest, first.</h2><form class="re-form re-news-form"><input type="email" placeholder="Your email address" required><button type="submit">Sign me up ↗</button></form></section>
    </main>`,refs);
  }

  function renderEstate(item,cfg,refs) {
    return shell(item,cfg,`<main id="site-home">
      <section class="re-estate-hero"><div class="re-estate-image">${art(item,"estate-art")}</div><div class="re-estate-overlay"><span class="re-eyebrow"><i></i>${esc(cfg.eyebrow)}</span><h1>${esc(cfg.headline)}</h1><p>${esc(cfg.lead)}</p>${button(cfg.cta,false,"#site-search")}</div><form class="re-property-search" id="site-search"><label><small>Location</small><select><option>Anywhere</option><option>San Francisco</option><option>Los Angeles</option><option>New York</option></select></label><label><small>Property type</small><select><option>Any property</option><option>House</option><option>Apartment</option></select></label><label><small>Budget</small><select><option>Any price</option><option>$250k–$500k</option><option>$500k–$1m</option></select></label><button type="submit">Search homes <b>↗</b></button></form></section>
      <section class="re-section" id="site-features">${sectionHead("A good place to begin","Find a place that feels like yours.","Hand-picked homes in neighbourhoods you’ll love, with details that make choosing easier.")}${visualCards(item,refs,3,"home")}</section>
      <section class="re-estate-about" id="site-about"><div>${art(item,"art-wide")}</div><div><span class="re-eyebrow">A little more than a listing</span><h2>Good homes.<br><i>Better beginnings.</i></h2><p>Our local experts make every step clear, from the first saved home to the moment you get the keys.</p>${button("Meet our team",true,"#site-contact")}</div></section>
      <section class="re-estate-stats"><div><b>1,200+</b><span>Homes found</span></div><div><b>28</b><span>Neighbourhoods</span></div><div><b>4.9/5</b><span>Happy movers</span></div></section>
    </main>`,refs);
  }

  function renderRestaurant(item,cfg,refs) {
    const russian = item.id === "39";
    const words = russian ? ["Капучино","Матча латте","Круассан","Чизкейк"] : ["House special","Crispy classic","Green garden","Hot honey"];
    return shell(item,cfg,`<main id="site-home">
      <section class="re-food-hero"><div class="re-food-copy"><span class="re-eyebrow"><i></i>${esc(cfg.eyebrow)}</span><h1>${esc(cfg.headline)}</h1><p>${esc(cfg.lead)}</p><div class="re-hero-actions">${button(cfg.cta)}<a class="re-text-link" href="#site-menu">${esc(cfg.second)} ↓</a></div><div class="re-rating"><b>★★★★★</b><span>4.9 / 5 · made fresh every day</span></div></div>${art(item,"food-art")}<div class="re-food-sticker">FRESH<br><b>DAILY</b></div></section>
      <div class="re-food-categories"><a href="#site-menu">${russian?"Кофе":"Burgers"}</a><a href="#site-menu">${russian?"Выпечка":"Sides"}</a><a href="#site-menu">${russian?"Десерты":"Drinks"}</a><a href="#site-menu">${russian?"Зёрна":"Desserts"}</a></div>
      <section class="re-section re-menu-section" id="site-menu">${sectionHead(russian?"Наше меню":"Fresh from the kitchen",russian?"Любимые напитки и десерты":"Made with good ingredients.","Carefully prepared, generously served and always made fresh to order.")}<div class="re-menu-grid">${words.map((w,i)=>`<article class="re-menu-card"><div class="re-menu-image">${art(refs[(Number(item.id)+i*9)%refs.length],"menu-art")}</div><div class="re-menu-info"><span>0${i+1} · HOUSE FAVOURITE</span><h3>${w}</h3><p>Fresh, full of flavour and made for a very good day.</p><div><b>${russian?"₽":"$"}${[8,12,10,9][i]}</b><button data-add type="button">Add +</button></div></div></article>`).join("")}</div></section>
      <section class="re-food-story" id="site-about"><span class="re-eyebrow">Good food, good people</span><h2>Come hungry.<br><i>Leave happy.</i></h2><p>We believe the best meals bring people together. Stop by for a quick favourite or stay a little longer.</p>${button("Find us nearby",true,"#site-contact")}</section>
      <section class="re-food-reviews"><div><span class="re-eyebrow">From our table to yours</span><h2>Kind words, shared.</h2></div><blockquote>“The kind of place you come back to before you’ve even left.”<small>— Alex R. · Local regular</small></blockquote></section>
    </main>`,refs);
  }

  function renderPortfolio(item,cfg,refs) {
    const developer = ["14","27","31","37","38","55","56"].includes(item.id);
    const skills = developer ? ["React","Next.js","TypeScript","Design systems"] : ["Art direction","Brand identity","UI / UX","Digital design"];
    return shell(item,cfg,`<main id="site-home">
      <section class="re-portfolio-hero"><div class="re-portfolio-copy"><span class="re-eyebrow"><i></i>${esc(cfg.eyebrow)}</span><h1>${esc(cfg.headline)}</h1><p>${esc(cfg.lead)}</p><div class="re-hero-actions">${button(cfg.cta)}<a class="re-text-link" href="#site-work">${esc(cfg.second)} ↘</a></div><div class="re-social-links"><a href="#site-contact">in</a><a href="#site-contact">Be</a><a href="#site-contact">✳</a></div></div><div class="re-portrait-stage">${art(item,"portrait-art")}<div class="re-portrait-orbit"></div><span class="re-portrait-tag">DESIGN · DIGITAL · STORY</span></div></section>
      <section class="re-portfolio-stats"><div><b>05+</b><span>Years experience</span></div><div><b>40+</b><span>Projects completed</span></div><div><b>18</b><span>Happy clients</span></div><div><b>12</b><span>Countries reached</span></div></section>
      <section class="re-section" id="site-work">${sectionHead("Featured work","A few things I’ve made.","A selection of thoughtful projects, built with curiosity and a clear point of view.")}${visualCards(item,refs,3,"work")}</section>
      <section class="re-portfolio-about" id="site-about"><div class="re-about-portrait">${art(item,"art-wide")}</div><div><span class="re-eyebrow">A little about me</span><h2>Turning ideas<br><i>into real things.</i></h2><p>${esc(cfg.lead)} I care about the details, the feeling and the little moments that make a digital experience stick.</p><div class="re-skill-tags">${skills.map(s=>`<span>${esc(s)}</span>`).join("")}</div>${button("More about me",true,"#site-contact")}</div></section>
      <section class="re-skills"><div><span class="re-eyebrow">A good toolkit</span><h2>Made with<br><i>intention.</i></h2></div><div class="re-skill-list">${skills.map((s,i)=>`<div><span>0${i+1}</span><b>${esc(s)}</b><i>${[95,88,92,84][i]}%</i><em style="--skill:${[95,88,92,84][i]}%"></em></div>`).join("")}</div></section>
    </main>`,refs);
  }

  function renderEvent(item,cfg,refs) {
    const course = item.id === "52";
    const cards = course ? ["Composition","Modeling & Texturing","Animation","Camera & Lights"] : ["The ideas that shape us","People building tomorrow","A world without limits","Culture in motion"];
    return shell(item,cfg,`<main id="site-home">
      <section class="re-event-hero"><div class="re-event-copy"><span class="re-eyebrow"><i></i>${esc(cfg.eyebrow)}</span><h1>${esc(cfg.headline)}</h1><p>${esc(cfg.lead)}</p><div class="re-event-date"><b>${course?"01 JULY 2026":"02–03 DEC 2026"}</b><span>${course?"New course starts":"Online · Worldwide"}</span></div><div class="re-hero-actions">${button(cfg.cta)}<a class="re-text-link" href="#site-features">${esc(cfg.second)} ↓</a></div></div>${art(item,"event-art")}<div class="re-countdown"><span><b>12</b><small>DAYS</small></span><span><b>08</b><small>HOURS</small></span><span><b>36</b><small>MINS</small></span></div></section>
      <section class="re-section" id="site-features">${sectionHead(course?"The program":"The experience",course?"A creative skill, step by step.":"Big questions. Bright minds.","Join a thoughtful community for a day of learning, discovery and new perspectives.")}<div class="re-event-grid">${cards.map((t,i)=>`<article><span>0${i+1} · ${course?"WEEK":"SESSION"}</span><h3>${esc(t)}</h3><p>Explore ideas, learn from the people doing the work and leave inspired to make your next move.</p><a href="#site-contact">${course?"Lesson details":"Read more"} ↗</a></article>`).join("")}</div></section>
      <section class="re-speakers" id="site-about"><div><span class="re-eyebrow">The people behind the ideas</span><h2>Meet the<br><i>speakers.</i></h2></div><div class="re-speaker-row">${[0,1,2].map((n)=>`<div class="re-speaker">${art(refs[(Number(item.id)+n*10)%refs.length],"speaker-art")}<b>${["Alex Morgan","Samira Lee","Jordan Blake"][n]}</b><small>${course?"3D artist":"Founder & creative lead"}</small></div>`).join("")}</div></section>
    </main>`,refs);
  }

  function renderFeature(item,cfg,refs) {
    const titles = item.id === "28" || item.id === "51" ? ["Dynamic Shapes","Vibrant Colors","Bold Typography"] : ["Flexible by design","Made to stand out","Ready to grow"];
    return shell(item,cfg,`<main id="site-home">
      <section class="re-feature-hero"><span class="re-eyebrow">${esc(cfg.eyebrow)}</span><h1>${esc(cfg.headline)}</h1><div class="re-feature-hero-inner"><p>${esc(cfg.lead)}</p>${button(cfg.cta)}</div><div class="re-feature-visual">${art(item,"feature-art")}<div class="re-shape shape-a"></div><div class="re-shape shape-b"></div><div class="re-shape shape-c"></div></div></section>
      <section class="re-section" id="site-features">${sectionHead("A few things we believe","The details make the difference.","Each part of the experience is considered to work beautifully on its own and even better together.")}${genericCards(item,titles,"feature")}</section>
      <section class="re-feature-process" id="site-about"><span class="re-eyebrow">From first sketch to final detail</span><h2>Made to move<br><i>your idea forward.</i></h2><div class="re-process-row">${["Discover","Shape","Build","Launch"].map((s,i)=>`<div><span>0${i+1}</span><i>${["⌕","✳","◈","↗"][i]}</i><b>${s}</b><small>Clear thinking, careful craft and a better result at every step.</small></div>`).join("")}</div></section>
    </main>`,refs);
  }

  function renderWeb3(item,cfg,refs) {
    return shell(item,cfg,`<main id="site-home">
      <section class="re-web3-hero"><div class="re-web3-copy"><span class="re-eyebrow">${esc(cfg.eyebrow)}</span><h1>${esc(cfg.headline)}</h1><p>${esc(cfg.lead)}</p><div class="re-hero-actions">${button(cfg.cta)}<a class="re-text-link" href="#site-features">${esc(cfg.second)} →</a></div><div class="re-web3-stats"><span><b>12k+</b> collectors</span><span><b>860</b> artists</span></div></div>${art(item,"web3-art")}<div class="re-chain-orb">✦</div></section>
      <section class="re-web3-banner">ART · CULTURE · COMMUNITY <span>✦</span> ART · CULTURE · COMMUNITY <span>✦</span> ART · CULTURE</section>
      <section class="re-section" id="site-features">${sectionHead("The collection","One of one. Yours to discover.","Meet the artists and explore fresh work from the community.")}${visualCards(item,refs,4,"art")}</section>
      <section class="re-web3-steps" id="site-about"><span class="re-eyebrow">Your next favourite piece is waiting</span><h2>Collect with<br><i>confidence.</i></h2><div class="re-web3-step-row"><div><b>01</b><h3>Connect a wallet</h3><p>Set up securely in just a few simple steps.</p></div><div><b>02</b><h3>Find your piece</h3><p>Explore original work from independent artists.</p></div><div><b>03</b><h3>Make it yours</h3><p>Collect on-chain and share what inspires you.</p></div></div></section>
    </main>`,refs);
  }

  function renderFintech(item,cfg,refs) {
    return shell(item,cfg,`<main id="site-home">
      <section class="re-fintech-hero"><div class="re-fintech-copy"><span class="re-eyebrow"><i></i>${esc(cfg.eyebrow)}</span><h1>${esc(cfg.headline)}</h1><p>${esc(cfg.lead)}</p><div class="re-hero-actions">${button(cfg.cta)}<a class="re-text-link" href="#site-features">${esc(cfg.second)} →</a></div><div class="re-fintech-trust"><span>●&nbsp; Secure by design</span><span>◈&nbsp; Made for everyone</span></div></div><div class="re-card-stage"><div class="re-credit-card"><div class="re-credit-brand">${esc(cfg.brand)}</div><span>VISA</span><div class="re-card-chip"></div><strong>•••• &nbsp;•••• &nbsp;•••• &nbsp; 0428</strong><small>GOOD THINGS AHEAD</small></div>${art(item,"fintech-art")}<div class="re-coin coin-one">$</div><div class="re-coin coin-two">↗</div></div></section>
      <section class="re-section" id="site-features">${sectionHead("Money, made simpler","Everything you need to move with confidence.","From your first payment to your next big plan, keep life moving from one easy place.")}${genericCards(item,["Fast, simple transfers","Built-in security","Always in control"])}</section>
      <section class="re-fintech-flow" id="site-about"><div><span class="re-eyebrow">A little more freedom</span><h2>Tap. Send.<br><i>Done.</i></h2><p>Manage daily payments, make a transfer and see where your money is going — all from one clear app.</p>${button("Get the app",true,"#site-contact")}</div>${mockBrowser(item)}</section>
      <section class="re-fintech-numbers"><div><b>24/7</b><span>Support when you need it</span></div><div><b>0 fees</b><span>On everyday transfers</span></div><div><b>100%</b><span>In control of your money</span></div></section>
    </main>`,refs);
  }

  function renderIndustry(item,cfg,refs) {
    return shell(item,cfg,`<main id="site-home">
      <section class="re-industry-hero"><div class="re-industry-copy"><span class="re-eyebrow">${esc(cfg.eyebrow)}</span><h1>${esc(cfg.headline)}</h1><p>${esc(cfg.lead)}</p><div class="re-hero-actions">${button(cfg.cta)}<a class="re-text-link" href="#site-features">${esc(cfg.second)} ↓</a></div><div class="re-industry-stats"><span><b>99.8%</b> print accuracy</span><span><b>24h</b> turnaround</span></div></div>${art(item,"industry-art")}</section>
      <section class="re-section" id="site-features">${sectionHead("Our services","Built for ideas at every scale.","From one-off prototypes to repeat production, we make complex parts straightforward.")}<div class="re-service-list">${["FDM printing","SLA resin printing","SLS nylon printing","Rapid prototyping","Custom part production"].map((s,i)=>`<a href="#site-contact"><span>0${i+1}</span><b>${s}</b><small>Precision, material choice and practical guidance at every stage.</small><i>↗</i></a>`).join("")}</div></section>
      <section class="re-industry-about" id="site-about"><div>${art(item,"art-wide")}</div><div><span class="re-eyebrow">Reliable by design</span><h2>Good parts.<br><i>On time.</i></h2><p>${esc(cfg.lead)} Our specialists help you choose the right process and finish, from first sample to final delivery.</p>${button("Talk to an expert",true,"#site-contact")}</div></section>
    </main>`,refs);
  }

  function renderEditorial(item,cfg,refs) {
    const chars = item.id === "34";
    return shell(item,cfg,`<main id="site-home">
      <section class="re-editorial-hero"><div class="re-editorial-copy"><span class="re-eyebrow">${esc(cfg.eyebrow)}</span><h1>${esc(cfg.headline)}</h1><p>${esc(cfg.lead)}</p>${button(cfg.cta)}</div>${art(item,"editorial-art")}<div class="re-editorial-index">01 — 06<br><span>SCROLL TO EXPLORE ↓</span></div></section>
      <section class="re-section" id="site-features">${sectionHead(chars?"Hunters · stories · abilities":"Ideas worth reading","A little more to explore.","Browse the latest stories, profiles and useful inspiration from our world.")}${visualCards(item,refs,3,"story")}</section>
      <section class="re-editorial-list" id="site-about"><div><span class="re-eyebrow">A closer look</span><h2>${chars?"Meet the characters":"Stories for curious minds."}</h2></div><div>${["The people behind the story","A closer look at the craft","What comes next"].map((s,i)=>`<a href="#site-contact"><span>0${i+1}</span><b>${s}</b><i>↗</i></a>`).join("")}</div></section>
    </main>`,refs);
  }

  function renderSite(item, refs) {
    const cfg = site[Number(item.id)-1] || site[0];
    cfg.id = item.id;
    const renderers = {saas:renderSaaS,agency:renderAgency,store:renderStore,estate:renderEstate,restaurant:renderRestaurant,portfolio:renderPortfolio,event:renderEvent,feature:renderFeature,web3:renderWeb3,fintech:renderFintech,industry:renderIndustry,editorial:renderEditorial,course:renderEvent};
    const render = renderers[cfg.kind] || renderAgency;
    return render(item,cfg,refs);
  }

  window.renderRecreatedSite = function(item, refs) {
    document.title = `${site[Number(item.id)-1]?.brand || item.title} — Studio 56`;
    const app = document.getElementById("app");
    app.innerHTML = renderSite(item, refs);
    app.querySelectorAll('a[href^="#site-"]').forEach(link => link.addEventListener("click", event => {
      const target = link.getAttribute("href").slice(1);
      const node = document.getElementById(target);
      if (!node) return;
      event.preventDefault();
      node.scrollIntoView({behavior:"smooth",block:"start"});
      document.querySelector(".re-nav")?.classList.remove("is-open");
    }));
    app.querySelectorAll("[data-menu]").forEach(button => button.addEventListener("click", () => document.querySelector(".re-nav")?.classList.toggle("is-open")));
    app.querySelectorAll("[data-add]").forEach(button => button.addEventListener("click", () => {
      const count = app.querySelector("[data-cart-count]");
      if (count) count.textContent = String(Number(count.textContent || 0) + 1);
      const original = button.textContent;
      button.textContent = "Added ✓";
      setTimeout(() => { if (button.isConnected) button.textContent = original; }, 1300);
    }));
    app.querySelectorAll("[data-cart]").forEach(button => button.addEventListener("click", () => {
      const count = app.querySelector("[data-cart-count]")?.textContent || "0";
      button.innerHTML = `Bag <b data-cart-count>${count}</b> · ${count} item${count === "1" ? "" : "s"}`;
    }));
    app.querySelectorAll(".re-property-search").forEach(form => form.addEventListener("submit", event => {
      event.preventDefault();
      const submit = form.querySelector("button");
      if (submit) submit.textContent = "Homes found ↓";
      document.getElementById("site-features")?.scrollIntoView({behavior:"smooth",block:"start"});
      setTimeout(() => { if (submit?.isConnected) submit.innerHTML = 'Search homes <b>↗</b>'; }, 1800);
    }));
    app.querySelectorAll(".re-form").forEach(form => form.addEventListener("submit", event => {
      event.preventDefault();
      const button = form.querySelector("button[type=submit]");
      if (button) { const label = button.textContent; button.textContent = "Thanks — received ✓"; setTimeout(() => { if (button.isConnected) button.textContent = label; }, 2200); }
      form.reset();
    }));
  };
})();
