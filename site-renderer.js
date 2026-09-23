/* Real HTML/CSS recreations for each reference. Source screenshots are not rendered as pages. */
(() => {
  const layouts = [
    'planner','saas','shop','agency','shop','shop','agency','saas','industrial','portfolio',
    'realty','fintech','realty','portfolio','realty','foundation','food','agency','fintech','agency',
    'feature','agency','nft','feature','portfolio','agency','portfolio','feature','saas','portfolio',
    'portfolio','shop','shop','character','event','feature','portfolio','portfolio','food','fintech',
    'food','nft','agency','agency','shop','portfolio','fintech','shop','feature','saas',
    'feature','course','saas','agency','portfolio','portfolio'
  ];
  const headlines = [
    'One Task|at a Time','A Smart Product|QC Checking','NEW BALANCE|Move with purpose','Professional|Web Design & Development','Drive the|Next Chapter','Discover Products|You’ll Love','Innovate.|Transform.|Thrive.','Techon|Human Potential','Precision|3D Printing','Digital|Designer',
    'Find Eco-Friendly|Homes Easily','Spend your crypto|in a new way','Finding Your|New Home Is Simple','Jason|Martin','Invest in|Real Estate','Never say never|because limits are an illusion','Pizza &|Burger','Website Content|Creation','Experience the|Future of Payments','Driving innovation|through technology',
    'Dynamic|Shapes','Grow Your|Business Online','Collect Next|Generation NFTs Today','Create Beautiful|Website','Unlimited|Digital Design','Make Your Future|Better','Hi, I’m|QualiCode','Dynamic Shapes|Vibrant Colors','Crafted with|Care','Studio|Pley',
    'Hi, I’m|OualiCode','Fontain|2024','Explore the|World of 3D Printing','Meet your|Hunters','Explore the Future|of the Metaverse','Create a|Website','I’m Mary Smith|Designer','I build digital|experiences that matter','Coffee,|made with care','Send your crypto|in a new way',
    'Burger|Spiesz','Make your|Website Stand Out in 3D','Innovate.|Elevate.|Transform.','Innovate.|Elevate.|Transform.','NEW|Move better','Portfolio|3D Artist','Send, Receive,|Top-Up Your Money','Future|Technology Today','Make Your Website|Stand Out in 3D','A Smart Product|QC Checking',
    'Dynamic|Shapes','Beginner’s Guide|to Cinema 4D','Techon|We’re redefining possibility','We are Creative|Designers','I build digital|experiences that matter','Digital|Designer'
  ];
  const themeNames = [
    'violet','lime','ink','orange','pink','light','blue','purple','orange','ink','forest','lavender','ocean','gray','violet','ocean','red','ink','purple','gray','electric','light','purple','soft','ink','light','violet','electric','soft','purple','ink','light','ocean','gray','purple','soft','gray','electric','forest','purple','red','electric','electric','ocean','ink','purple','lavender','light','blue','lime','electric','blue','purple','electric','electric','gray'
  ];
  const palettes = {
    violet:  { bg:'#100c1c', panel:'#191426', panel2:'#211a30', ink:'#f6f2ff', muted:'#b7adc9', line:'rgba(255,255,255,.12)', accent:'#a277ff', accent2:'#dc72ff', soft:'rgba(162,119,255,.16)', light:false },
    lime:    { bg:'#07131b', panel:'#10212a', panel2:'#152a31', ink:'#f4f7f8', muted:'#9eafb4', line:'rgba(255,255,255,.12)', accent:'#80e535', accent2:'#1acb91', soft:'rgba(128,229,53,.17)', light:false },
    ink:     { bg:'#101116', panel:'#191a20', panel2:'#202129', ink:'#f4f3f2', muted:'#a5a4ad', line:'rgba(255,255,255,.13)', accent:'#f15b98', accent2:'#b59bff', soft:'rgba(241,91,152,.16)', light:false },
    orange:  { bg:'#f5f0e8', panel:'#fffdf9', panel2:'#eee8dd', ink:'#211e1a', muted:'#777068', line:'rgba(32,27,22,.12)', accent:'#f07425', accent2:'#ffbd58', soft:'rgba(240,116,37,.13)', light:true },
    pink:    { bg:'#100c12', panel:'#1a151d', panel2:'#261621', ink:'#f8f3f7', muted:'#b6a9b3', line:'rgba(255,255,255,.13)', accent:'#ed4caa', accent2:'#a776ff', soft:'rgba(237,76,170,.17)', light:false },
    light:   { bg:'#f7f8fa', panel:'#ffffff', panel2:'#edf0f5', ink:'#171b23', muted:'#69717f', line:'rgba(20,27,39,.12)', accent:'#2c68ec', accent2:'#50b8dc', soft:'rgba(44,104,236,.11)', light:true },
    blue:    { bg:'#0a162b', panel:'#122342', panel2:'#182d52', ink:'#f5f7ff', muted:'#a7b6d2', line:'rgba(255,255,255,.14)', accent:'#4a8cff', accent2:'#35d2ed', soft:'rgba(74,140,255,.17)', light:false },
    purple:  { bg:'#10071c', panel:'#1b0e2e', panel2:'#26123e', ink:'#f8f4ff', muted:'#b8a9cd', line:'rgba(255,255,255,.14)', accent:'#a855f7', accent2:'#3a8dff', soft:'rgba(168,85,247,.18)', light:false },
    forest:  { bg:'#f1f2e8', panel:'#fffdf6', panel2:'#e3e8db', ink:'#17251e', muted:'#68756a', line:'rgba(24,53,36,.13)', accent:'#47784a', accent2:'#9bbd77', soft:'rgba(71,120,74,.13)', light:true },
    lavender:{ bg:'#f4f0fb', panel:'#ffffff', panel2:'#e9e2f8', ink:'#211c2f', muted:'#756c86', line:'rgba(36,23,60,.12)', accent:'#8051de', accent2:'#b955ee', soft:'rgba(128,81,222,.13)', light:true },
    ocean:   { bg:'#eaf1f7', panel:'#ffffff', panel2:'#dce7f0', ink:'#172a38', muted:'#627481', line:'rgba(23,42,56,.12)', accent:'#1461c8', accent2:'#50b9d7', soft:'rgba(20,97,200,.12)', light:true },
    red:     { bg:'#111014', panel:'#1d1a20', panel2:'#2b2428', ink:'#faf7f4', muted:'#b7adb0', line:'rgba(255,255,255,.13)', accent:'#ef3439', accent2:'#ff9a22', soft:'rgba(239,52,57,.18)', light:false },
    electric:{ bg:'#071725', panel:'#0e2231', panel2:'#123046', ink:'#f2fbff', muted:'#9eb6c4', line:'rgba(255,255,255,.13)', accent:'#1bd1d0', accent2:'#8f68ff', soft:'rgba(27,209,208,.15)', light:false },
    soft:    { bg:'#f3efff', panel:'#fffdfc', panel2:'#ebe4ff', ink:'#202033', muted:'#76738a', line:'rgba(38,32,68,.12)', accent:'#8a60ee', accent2:'#f05ba8', soft:'rgba(138,96,238,.14)', light:true },
    gray:    { bg:'#191b20', panel:'#23262d', panel2:'#2b2f37', ink:'#f4f4f4', muted:'#a6aab0', line:'rgba(255,255,255,.13)', accent:'#d0d5df', accent2:'#75a0cb', soft:'rgba(208,213,223,.12)', light:false }
  };
  const layoutLabels = {
    planner:'Productivité', saas:'SaaS · produit numérique', shop:'Commerce · boutique en ligne', industrial:'Industrie · impression 3D',
    agency:'Agence · services digitaux', portfolio:'Portfolio · profil créatif', realty:'Immobilier · recherche de biens',
    fintech:'Fintech · paiement', food:'Restaurant · food', event:'Événement · communauté', feature:'Concept · expérience visuelle',
    nft:'Art numérique · collection', course:'Formation · cours en ligne', character:'Fiche · personnage', foundation:'Sport · fondation'
  };
  const brandById = {
    '01':'OneTask','02':'KySee','03':'New Balance','04':'Pixel Point','05':'Porsche','06':'NovaTrend','07':'Apex Solutions','08':'Tecton','09':'FABRIX','10':'Digital Designer',
    '11':'PooIs','12':'Coinfever','13':'Rent & U','14':'Jason Martin','15':'Invest','16':'Virat Kohli Foundation','17':'Pittu Pittu','18':'Byteaxe','19':'exactly bar','20':'Apex Solutions',
    '21':'Surface','22':'Hoth','23':'Cyfoni','24':'Create.','25':'Lovro Podnik','26':'Byteaxe','27':'QualiCode','28':'Dynamic Shapes','29':'Clayful','30':'Studio Pley',
    '31':'OualiCode','32':'Fontain','33':'3DPRINT','34':'Solo Leveling','35':'Enter the Metaverse','36':'Website Studio','37':'Mary Smith','38':'Abdullah Tariq','39':'Лист & Зёрна','40':'Coinfever',
    '41':'Pittu Pittu','42':'Flacto','43':'Comatis','44':'Apex Solutions','45':'Techgear','46':'Francesca Lupi','47':'Payze','48':'Example','49':'Isometric Studio','50':'KySee',
    '51':'Interface Lab','52':'QX','53':'Tecton','54':'HYKROX','55':'Abdullah Tariq','56':'Digital Designer'
  };

  const esc = s => String(s ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const artPath = id => `./assets/art/art-${String(id).padStart(2,'0')}.jpg`;
  const idNumber = id => Number.parseInt(id,10) || 1;
  function themeVars(theme) {
    return `--w-bg:${theme.bg};--w-panel:${theme.panel};--w-panel2:${theme.panel2};--w-ink:${theme.ink};--w-muted:${theme.muted};--w-line:${theme.line};--w-accent:${theme.accent};--w-accent2:${theme.accent2};--w-soft:${theme.soft};--w-light:${theme.light ? '1' : '0'};`;
  }
  function titleMarkup(site) {
    const parts = headlines[idNumber(site.id)-1].split('|');
    return parts.map((part,i) => `<span class="hero-line ${i>0?'accent-line':''}">${esc(part)}</span>`).join(' ');
  }
  function nav(site, names=['About','Services','Projects','Contact'], cta='Let’s talk') {
    const ids=['site-about','site-services','site-work','site-contact'];
    return `<header class="w-nav"><a class="w-brand" href="#site-top"><span class="w-brand-symbol">${esc(site.brand.slice(0,1))}</span><span>${esc(site.brand)}</span></a><nav class="w-links" id="w-links">${names.map((label,i)=>`<a href="#${ids[i]||'site-contact'}">${esc(label)}</a>`).join('')}</nav><a class="w-nav-cta" href="#site-contact">${esc(cta)} <span>↗</span></a><button class="w-menu" type="button" data-menu-toggle aria-expanded="false" aria-label="Ouvrir le menu">☰</button></header>`;
  }
  function siteArt(site, cls='w-art') {
    return `<div class="${cls}"><img src="${artPath(site.id)}" alt="Illustration de ${esc(site.title)}" loading="eager"><span class="w-art-orbit"></span><span class="w-art-chip">${esc(site.category)}</span></div>`;
  }
  function btn(label, href='#site-contact', secondary=false, action='') {
    return `<a class="w-btn ${secondary?'w-btn-secondary':''}" href="${href}" ${action?`data-action="${action}"`:''}>${esc(label)} <span aria-hidden="true">↗</span></a>`;
  }
  function intro(kicker,title,desc='') {
    return `<div class="w-section-intro"><span class="w-kicker">${esc(kicker)}</span><h2>${title}</h2>${desc?`<p>${esc(desc)}</p>`:''}</div>`;
  }
  function statCards(items) {
    return `<div class="w-stats">${items.map(([big,small])=>`<div class="w-stat"><strong>${esc(big)}</strong><span>${esc(small)}</span></div>`).join('')}</div>`;
  }
  function featureCards(items) {
    const marks=['✦','↗','◈','◎','⌘','✳'];
    return `<div class="w-feature-grid">${items.map((x,i)=>`<article class="w-feature-card"><span class="w-feature-mark">${marks[i%marks.length]}</span><h3>${esc(x[0])}</h3><p>${esc(x[1])}</p><a href="#site-contact" aria-label="En savoir plus sur ${esc(x[0])}">Explorer ↗</a></article>`).join('')}</div>`;
  }
  function projects(site) {
    const entries=[['01','FinTrack','Dashboard & application'],['02','Forma','Branding & site web'],['03','Wellness','Mobile · lifestyle']];
    return `<div class="w-project-grid">${entries.map((p,i)=>`<a href="#site-contact" class="w-project-card"><div class="w-project-visual project-tone-${i+1}"><div class="w-browser"><i></i><i></i><i></i></div><div class="w-mini-title">${esc(p[1])}</div><div class="w-mini-lines"><i></i><i></i><i></i></div><span class="w-project-num">${p[0]}</span></div><div class="w-project-meta"><span><strong>${esc(p[1])}</strong><small>${esc(p[2])}</small></span><b>↗</b></div></a>`).join('')}</div>`;
  }
  function contact(site, label='Let’s work together') {
    return `<section class="w-contact" id="site-contact"><div><span class="w-kicker">Start a conversation</span><h2>${esc(label)}</h2><p>${esc(site.description)}</p><a class="w-email" href="mailto:hello@example.com">hello@example.com ↗</a></div><form class="w-contact-form"><label>Your name<input required name="name" placeholder="Alex Morgan"></label><label>Email address<input required type="email" name="email" placeholder="alex@email.com"></label><label>Tell me about your project<textarea name="message" rows="3" placeholder="A few words about your idea…"></textarea></label><button class="w-btn" type="submit">Send a message <span>↗</span></button></form></section>`;
  }
  function footer(site) {
    return `<footer class="w-footer"><a class="w-brand" href="#site-top"><span class="w-brand-symbol">${esc(site.brand.slice(0,1))}</span>${esc(site.brand)}</a><span>© 2026 ${esc(site.brand)}. Made with intention.</span><a href="#site-top">Back to top ↑</a></footer>`;
  }
  function genericHero(site, opts={}) {
    const top=opts.kicker || layoutLabels[site.layout] || site.category;
    const copy=opts.copy || site.description;
    const cta=opts.cta || 'Explore the work';
    return `<section class="w-hero ${opts.className||''}" id="site-top"><div class="w-hero-copy"><span class="w-kicker"><i></i>${esc(top)}</span><h1>${titleMarkup(site)}</h1><p>${esc(copy)}</p><div class="w-hero-actions">${btn(cta,opts.href||'#site-work')}${opts.secondary?btn(opts.secondary,'#site-about',true):''}</div>${opts.note?`<div class="w-hero-note">${esc(opts.note)}</div>`:''}</div>${siteArt(site,opts.artClass||'w-art')}</section>`;
  }
  function renderPortfolio(site) {
    return `<div class="w-site w-portfolio" style="${themeVars(site.theme)}">${nav(site,['About','Work','Services','Contact'],'Download CV')}${genericHero(site,{kicker:'Available for selected projects',cta:'View my work',secondary:'Download résumé',className:'portfolio-hero',note:'✦  Available for freelance projects'})}
      <section class="w-band" id="site-about">${statCards([['6+','Years of experience'],['40+','Projects completed'],['18+','Happy clients'],['12','Countries reached']])}</section>
      <section class="w-section" id="site-work">${intro('Featured work','Selected projects','A few recent collaborations built with clarity, character, and care.')}${projects(site)}</section>
      <section class="w-section w-capabilities" id="site-services"><div>${intro('Core capabilities','Thoughtful design.\nUseful outcomes.','')}<p class="w-body-copy">${esc(site.description)}</p></div>${featureCards([['Digital design','Interfaces and identities shaped around people.'],['Web experiences','Responsive websites made to feel effortless.'],['Creative direction','A clear visual voice from first sketch to launch.'],['Prototyping','Test ideas early and refine what matters.']])}</section>
      ${contact(site,'Have a good project? Let’s make it real.')}${footer(site)}</div>`;
  }
  function renderShop(site) {
    const products=[['Everyday essential','$129','New'],['Studio edition','$89','Popular'],['Next generation','$159','Limited'],['Designed to move','$99','Best seller']];
    return `<div class="w-site w-shop" style="${themeVars(site.theme)}"><div class="w-promo">Free shipping on orders over $100 <span>Discover the new collection ↗</span></div>${nav(site,['Shop','New arrivals','Collections','About'],'Shop now')}
      ${genericHero(site,{kicker:'New season · designed to move',cta:'Shop the collection',secondary:'Explore details',className:'shop-hero',note:'Premium materials · Thoughtful design · Made to last'})}
      <section class="w-benefits" id="site-about"><div>◈ <span><b>Free shipping</b><small>On orders over $100</small></span></div><div>◇ <span><b>Secure checkout</b><small>Protected from start to finish</small></span></div><div>↺ <span><b>Easy returns</b><small>30 days to find your fit</small></span></div><div>✳ <span><b>Made to last</b><small>Quality you can feel</small></span></div></section>
      <section class="w-section" id="site-services">${intro('Find your style','Shop by category','Carefully selected pieces for every day.') }<div class="w-category-grid"><a href="#site-work" class="w-category cat-one"><span>01 / Essentials</span><b>Daily<br>wear</b><i>↗</i></a><a href="#site-work" class="w-category cat-two"><span>02 / Studio</span><b>New<br>arrivals</b><i>↗</i></a><a href="#site-work" class="w-category cat-three"><span>03 / Lifestyle</span><b>Accessories</b><i>↗</i></a></div></section>
      <section class="w-section" id="site-work">${intro('The edit','Featured products','Considered details. Effortless forms. Built for the everyday.') }<div class="w-product-grid">${products.map((p,i)=>`<article class="w-product-card"><div class="w-product-image product-tone-${i+1}"><span class="w-product-tag">${p[2]}</span><div class="w-product-shape shape-${i+1}"></div><button type="button" class="w-heart" data-action="favorite" aria-label="Ajouter aux favoris">♡</button></div><div class="w-product-info"><div><b>${p[0]}</b><small>${i%2?'Designed for everyday':'Signature collection'}</small></div><strong>${p[1]}</strong></div><button class="w-add" type="button" data-action="add">Add to bag <span>+</span></button></article>`).join('')}</div></section>
      <section class="w-banner"><div><span class="w-kicker">A better way to shop</span><h2>Good design<br>goes a long way.</h2><p>${esc(site.description)}</p>${btn('Explore the collection','#site-work')}</div><div class="w-banner-orb">✳</div></section>${contact(site,'Questions? We’re here to help.')}${footer(site)}</div>`;
  }
  function renderAgency(site) {
    return `<div class="w-site w-agency" style="${themeVars(site.theme)}">${nav(site,['Home','Services','About','Work','Contact'],'Start a project')}${genericHero(site,{kicker:'Independent digital studio',cta:'Explore our services',secondary:'See selected work',className:'agency-hero',note:'Strategy · Design · Development'})}
      <section class="w-logo-row"><span>Trusted by teams at</span><b>ACME</b><b>Northstar</b><b>Goodwell</b><b>Futura</b><b>Fieldnotes</b></section>
      <section class="w-section" id="site-services">${intro('What we do','Ideas into experiences.','We partner with ambitious teams to make digital products feel clearer and work harder.')}${featureCards([['Digital strategy','Find the right problem, audience, and story.'],['Brand & identity','Build a distinctive visual language that lasts.'],['Web design','Make every interaction purposeful and easy.'],['Development','Ship fast, accessible, responsive experiences.']])}</section>
      <section class="w-agency-about" id="site-about"><div class="w-about-art">${siteArt(site,'w-art w-art-small')}</div><div>${intro('A little about us','Small team.\nBig-picture thinking.','')}<p class="w-body-copy">${esc(site.description)} We bring strategy, craft, and technology together to create work that feels considered from the first click to the final detail.</p>${btn('Meet the studio','#site-contact',true)}</div></section>
      <section class="w-section" id="site-work">${intro('Selected work','Built for what’s next.','A few projects that brought clarity to complex ideas.')}${projects(site)}</section>
      <section class="w-process" id="site-process">${intro('Our approach','From first sketch to launch.','A calm, collaborative process that keeps the work moving.')}${['Discover','Define','Design','Develop','Deliver'].map((x,i)=>`<div class="w-process-step"><span>0${i+1}</span><b>${x}</b><small>${['Listen closely','Find the focus','Make it real','Build with care','Launch confidently'][i]}</small></div>`).join('')}</section>
      ${contact(site,'Let’s build something useful.')}${footer(site)}</div>`;
  }
  function renderRealty(site) {
    const homes=[['Ocean Breeze Villa','$910,000','3 beds · 2 baths'],['Oak House','$750,000','4 beds · 3 baths'],['Lakeside Cottage','$540,000','2 beds · 2 baths']];
    return `<div class="w-site w-realty" style="${themeVars(site.theme)}">${nav(site,['Buy','Rent','Sell','Neighborhoods','About'],'Get in touch')}
      <section class="w-realty-hero" id="site-top" style="--hero-art:url('${artPath(site.id)}')"><div class="w-realty-copy"><span class="w-kicker"><i></i>Find a place to call home</span><h1>${titleMarkup(site)}</h1><p>${esc(site.description)}</p><a class="w-btn" href="#site-work">Browse homes <span>↗</span></a></div><div class="w-search-panel" id="site-search"><label>Location<input placeholder="City, neighborhood, ZIP"></label><label>Property type<select><option>Any type</option><option>House</option><option>Apartment</option></select></label><label>Price range<select><option>Any price</option><option>$300k – $700k</option><option>$700k+</option></select></label><button type="button" class="w-search-btn" data-action="search">Search homes ↗</button></div></section>
      <section class="w-section" id="site-work">${intro('The shortlist','Featured homes','Thoughtful homes in places you’ll love to live.') }<div class="w-listing-grid">${homes.map((h,i)=>`<article class="w-listing-card"><div class="w-listing-image listing-${i+1}"><span>For sale</span><button data-action="favorite" type="button" aria-label="Save listing">♡</button><div class="w-house-shape"><i></i><i></i><i></i></div></div><div class="w-listing-body"><strong>${h[0]}</strong><p>${h[2]}</p><b>${h[1]}</b></div></article>`).join('')}</div></section>
      <section class="w-realty-about" id="site-about"><div><span class="w-kicker">Your next chapter</span><h2>Find the right place.<br>Feel at home.</h2><p>${esc(site.description)}</p>${btn('Talk to an advisor','#site-contact')}</div><div class="w-realty-stats">${statCards([['1,200+','Homes listed'],['98%','Client satisfaction'],['24/7','Local guidance']])}</div></section>${contact(site,'Ready when you are.')}${footer(site)}</div>`;
  }
  function renderFood(site) {
    const dishes=[['House special','14.90'],['Crispy favorite','12.50'],['Fresh & bright','11.90'],['Something sweet','7.50']];
    return `<div class="w-site w-food" style="${themeVars(site.theme)}"><div class="w-food-top">Made fresh every day · Open today 11:00–22:00</div>${nav(site,['Menu','Our story','Locations','Contact'],'Order now')}
      ${genericHero(site,{kicker:'Fresh ingredients · made with love',cta:'View the menu',secondary:'Our story',className:'food-hero',note:'Dine in · Take away · Delivery'})}
      <section class="w-food-values" id="site-about"><div><span>♧</span><b>Fresh daily</b><small>Local ingredients</small></div><div><span>✳</span><b>Made to order</b><small>Never rushed</small></div><div><span>♡</span><b>Good company</b><small>Always welcome</small></div></section>
      <section class="w-section" id="site-services">${intro('A little something for everyone','Explore the menu','Comfort food, bright flavors, and a few things worth sharing.') }<div class="w-food-tabs"><button class="active" data-food-filter="all">All menu</button><button data-food-filter="main">Mains</button><button data-food-filter="side">Sides</button><button data-food-filter="sweet">Something sweet</button></div><div class="w-dish-grid">${dishes.map((d,i)=>`<article class="w-dish-card" data-food-kind="${i===3?'sweet':i===2?'side':'main'}"><div class="w-dish-art dish-${i+1}"><span>${['✦','◒','❋','●'][i]}</span></div><div class="w-dish-copy"><small>GUEST FAVORITE</small><b>${d[0]}</b><p>Thoughtfully prepared with fresh ingredients and a little extra care.</p><div><strong>$${d[1]}</strong><button data-action="add" type="button" aria-label="Add ${d[0]}">＋</button></div></div></article>`).join('')}</div></section>
      <section class="w-food-story"><div>${siteArt(site,'w-art w-art-food')}</div><div><span class="w-kicker">A table for everyone</span><h2>Good food.<br>Good company.</h2><p>${esc(site.description)}</p>${btn('Reserve a table','#site-contact')}</div></section>
      ${contact(site,'Come hungry. Leave happy.')}${footer(site)}</div>`;
  }
  function dashboardMockup(site, appName='Overview') {
    return `<div class="w-dashboard"><aside class="w-dash-side"><b class="w-dash-logo"><i></i>${esc(site.brand)}</b><span class="selected">▦ &nbsp; ${esc(appName)}</span><span>◫ &nbsp; Projects</span><span>◷ &nbsp; Schedule</span><span>◎ &nbsp; Reports</span><span>⚙ &nbsp; Settings</span><div class="w-dash-avatar">AM <small>Alex Morgan</small></div></aside><div class="w-dash-main"><div class="w-dash-top"><div><small>MONDAY, MAY 20</small><h3>Good morning, Alex <span>✦</span></h3></div><button type="button" data-action="notify">＋ New task</button></div><div class="w-dash-stats"><div><small>Active projects</small><b>12</b><i>↑ 8.4%</i></div><div><small>Tasks completed</small><b>84%</b><i>↑ 12.1%</i></div><div><small>Team members</small><b>08</b><i>On track</i></div></div><div class="w-dash-columns"><div class="w-dash-chart"><div class="w-card-heading"><b>Weekly activity</b><small>Last 7 days⌄</small></div><div class="w-chart-bars">${[42,61,47,78,57,92,69,84,55,73,98,67].map((h,i)=>`<i style="--bar:${h}%;--n:${i}"></i>`).join('')}</div><div class="w-chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span></div></div><div class="w-dash-tasks"><div class="w-card-heading"><b>Today’s tasks</b><a href="#site-work">View all</a></div>${['Review campaign direction','Share prototype with team','Finalize launch checklist'].map((x,i)=>`<label class="w-task"><input type="checkbox"><span>${x}<small>${['09:30','11:00','14:30'][i]}</small></span></label>`).join('')}</div></div></div></div>`;
  }
  function renderSaaS(site) {
    return `<div class="w-site w-saas" style="${themeVars(site.theme)}">${nav(site,['Platform','Solutions','Resources','Pricing'],'Get started')}${genericHero(site,{kicker:'A simpler way to work',cta:'Start for free',secondary:'See how it works',className:'saas-hero',note:'No credit card required · Set up in minutes'})}
      <section class="w-logo-row"><span>Teams use ${esc(site.brand)} to do their best work</span><b>Notion</b><b>Linear</b><b>Figma</b><b>Slack</b><b>Atlassian</b></section>
      <section class="w-section" id="site-services">${intro('Everything in one place','The tools to move you forward.','Clear priorities, less busywork, and a better view of what comes next.')}${featureCards([['Bring work together','Keep projects, people, and decisions connected.'],['Make progress visible','See what’s moving and what needs your attention.'],['Work at your pace','Flexible tools that fit the way your team thinks.'],['Stay focused','Simple workflows help good ideas become done.']])}</section>
      <section class="w-dashboard-section" id="site-work"><div class="w-dashboard-copy">${intro('A clearer picture','Your work, at a glance.','Keep every important update in view without losing focus.')}</div>${dashboardMockup(site,site.layout==='planner'?'My workspace':'Overview')}</section>
      <section class="w-steps">${intro('How it works','Set up in three easy steps.','')}<div class="w-step-grid">${[['01','Add your team','Invite your people and bring work together.'],['02','Shape your workflow','Choose the tools that suit your rhythm.'],['03','Make progress','Keep the next best action in view.']].map(x=>`<article><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>${contact(site,'Make work feel lighter.')}${footer(site)}</div>`;
  }
  function renderFintech(site) {
    return `<div class="w-site w-fintech" style="${themeVars(site.theme)}">${nav(site,['Personal','Business','Security','About'],'Open an account')}${genericHero(site,{kicker:'Your money, moving with you',cta:'Get started',secondary:'Explore the app',className:'fintech-hero',note:'Fast transfers · Clear fees · Secure by design'})}
      <section class="w-money-card-section" id="site-work"><div class="w-money-card"><span>${esc(site.brand)}</span><b>•••• &nbsp; •••• &nbsp; •••• &nbsp; 2048</b><small>Everyday account</small><strong>$ 12,480.50</strong><i>VISA</i></div><div class="w-money-copy"><span class="w-kicker">Money on your terms</span><h2>Everything you need.<br>Nothing you don’t.</h2><p>${esc(site.description)}</p>${btn('Get the app','#site-contact')}</div></section>
      <section class="w-section" id="site-services">${intro('Built around you','Money made more simple.','A flexible, secure way to manage everyday payments.')}${featureCards([['Send in seconds','Move money quickly, wherever the day takes you.'],['Know what you spend','Clear activity and useful insights at a glance.'],['Stay protected','Smart security tools look out for every transaction.']])}</section>
      <section class="w-finance-stats">${statCards([['2M+','Happy customers'],['30+','Countries supported'],['24/7','Always-on protection']])}</section>${contact(site,'A better way to move money.')}${footer(site)}</div>`;
  }
  function renderFoundation(site) {
    return `<div class="w-site w-foundation" style="${themeVars(site.theme)}">${nav(site,['Home','Athletes','Selection process','Programs','Gallery'],'Donate')}
      <section class="w-foundation-hero" id="site-top"><div class="w-foundation-shape"></div><div class="w-foundation-copy"><span class="w-kicker">Believe in the power of sport</span><h1>${titleMarkup(site)}</h1><p>${esc(site.description)}</p><div class="w-hero-actions">${btn('Selection process','#site-work')}${btn('Athlete development program','#site-services',true)}</div></div>${siteArt(site,'w-art w-foundation-art')}<div class="w-foundation-caption"><b>18+</b><span>Years building<br>champions</span></div></section>
      <section class="w-section" id="site-about">${intro('Our mission','Every champion starts somewhere.','We create pathways for young athletes through opportunity, mentorship, and world-class training.')}${featureCards([['Find your path','Explore a sport and discover what you can become.'],['Learn from the best','Get guidance from coaches and athletes who care.'],['Build your future','Grow with a community that believes in you.'],['Give back','Help more young people step onto the field.']])}</section>
      <section class="w-section" id="site-work">${intro('Meet the champions','Stories that inspire.','A closer look at the people who make the journey matter.')}${projects(site)}</section>
      <section class="w-foundation-program" id="site-services"><div><span class="w-kicker">Athlete development program</span><h2>Talent deserves<br>the right support.</h2><p>${esc(site.description)}</p>${btn('Join the program','#site-contact')}</div><div class="w-foundation-badge">✦<small>PLAY<br>WITH<br>PURPOSE</small></div></section>
      <section class="w-logo-row"><span>Partners in possibility</span><b>Walmart</b><b>Cooper</b><b>PayPal</b><b>Johnson</b><b>ALSO</b></section>${contact(site,'Help a future champion rise.')}${footer(site)}</div>`;
  }
  function renderEvent(site) {
    const schedule=[['09:00','Opening session','The next wave of digital experiences'],['11:30','Designing for change','Building products with purpose'],['14:00','Future in motion','A new creative landscape'],['16:30','Closing keynote','What we make possible together']];
    return `<div class="w-site w-event" style="${themeVars(site.theme)}">${nav(site,['Speakers','Schedule','Venue','FAQ'],'Get tickets')}${genericHero(site,{kicker:'A gathering for curious minds',cta:'Get your ticket',secondary:'View the schedule',className:'event-hero',note:'LIVE · MAY 20–22 · COTONOU / ONLINE'})}
      <section class="w-countdown">${[['02','DAYS'],['18','HOURS'],['42','MINUTES'],['09','SECONDS']].map(x=>`<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}</section>
      <section class="w-event-schedule" id="site-work">${intro('Three days. New perspectives.','The moments that matter.','A carefully curated program for the ideas shaping what comes next.') }<div class="w-schedule-list">${schedule.map(x=>`<article><time>${x[0]}</time><div><small>MAIN STAGE · KEYNOTE</small><h3>${x[1]}</h3><p>${x[2]}</p></div><a href="#site-contact">↗</a></article>`).join('')}</div></section>
      <section class="w-section" id="site-services">${intro('Meet the voices','People worth listening to.','Designers, founders, and makers who are pushing things forward.')}${featureCards([['Maya Laurent','Creative director · Studio North'],['Jonas Adeyemi','Founder · Future Works'],['Sana Okafor','Product designer · Atlas'],['Theo Martin','Independent artist · Paris']])}</section><section class="w-event-cta" id="site-about"><span class="w-kicker">Be in the room</span><h2>Good ideas happen<br>when we meet.</h2>${btn('Reserve your place','#site-contact')}</section>${contact(site,'Join the conversation.')}${footer(site)}</div>`;
  }
  function renderFeature(site) {
    const cards=[['Dynamic shapes','Flexible motion and forms make every detail feel alive.','△'],['Vibrant colors','A confident palette built to stand out and stay clear.','◉'],['Bold typography','Modern type gives every message room to breathe.','A']];
    return `<div class="w-site w-feature" style="${themeVars(site.theme)}">${nav(site,['Features','Capabilities','About','Contact'],'Discover more')}
      ${genericHero(site,{kicker:'A new way to build online',cta:'Explore the concept',secondary:'See the details',className:'feature-hero',note:'Designed to move · Built to stand out'})}
      <section class="w-feature-showcase" id="site-work">${intro('Made for the curious','A little more than expected.','A considered set of tools and ideas for a more expressive web.') }<div class="w-feature-panels">${cards.map((c,i)=>`<article class="w-feature-panel panel-${i+1}"><span class="w-kicker">FEATURE 0${i+1}</span><div class="w-feature-illustration illustration-${i+1}">${c[2]}</div><h3>${c[0]}</h3><p>${c[1]}</p></article>`).join('')}</div></section>
      <section class="w-feature-cta" id="site-services"><div><span class="w-kicker">Create something memorable</span><h2>Make space<br>for a new idea.</h2><p>${esc(site.description)}</p>${btn('Discover more','#site-contact')}</div>${siteArt(site,'w-art w-art-feature')}</section>${contact(site,'Let’s create something.')}${footer(site)}</div>`;
  }
  function renderNFT(site) {
    const collections=[['Future Forms','7.4 ETH','01'],['Soft Systems','4.8 ETH','02'],['New Icons','3.2 ETH','03']];
    return `<div class="w-site w-nft" style="${themeVars(site.theme)}">${nav(site,['Explore','Collections','Creators','About'],'Connect wallet')}${genericHero(site,{kicker:'Digital art · collected differently',cta:'Explore collection',secondary:'How it works',className:'nft-hero',note:'Curated drops · Verified creators · Made for collectors'})}
      <section class="w-nft-ticker"><span>✦ DIGITAL ART</span><span>✦ CULTURE</span><span>✦ COMMUNITY</span><span>✦ DIGITAL ART</span></section>
      <section class="w-section" id="site-work">${intro('Freshly collected','Top collections','Discover work from independent creators and emerging studios.') }<div class="w-nft-grid">${collections.map((x,i)=>`<article class="w-nft-card"><div class="w-nft-art nft-art-${i+1}"><span>✦</span><small>EDITION ${x[2]}</small></div><div><b>${x[0]}</b><small>Floor price <strong>${x[1]}</strong></small></div><a href="#site-contact">View collection ↗</a></article>`).join('')}</div></section>
      <section class="w-nft-how" id="site-services">${intro('Start collecting','Three steps to your next favorite.','')}<div class="w-step-grid">${[['01','Connect your wallet','Bring your collection into one secure place.'],['02','Discover artists','Find work that speaks to you.'],['03','Collect with confidence','Every piece has a story and a creator.']].map(x=>`<article><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>${contact(site,'Make room for great art.')}${footer(site)}</div>`;
  }
  function renderIndustrial(site) {
    return `<div class="w-site w-industrial" style="${themeVars(site.theme)}">${nav(site,['Services','Materials','Industries','About','Contact'],'Get a quote')}${genericHero(site,{kicker:'Precision manufacturing · built to deliver',cta:'Get an instant quote',secondary:'Explore services',className:'industrial-hero',note:'Fast turnaround · 15+ materials · Quality guaranteed'})}
      <section class="w-industrial-stats">${statCards([['500+','Projects completed'],['15+','Material options'],['99.8%','Print accuracy']])}</section>
      <section class="w-section" id="site-services">${intro('Our capabilities','Everything you need,\nprinted to perfection.','From rapid prototypes to production-ready parts, made to your exact specifications.')}
        <div class="w-service-list">${['FDM printing','SLA resin printing','SLS nylon printing','Rapid prototyping','Custom part production'].map((x,i)=>`<a href="#site-contact"><span>0${i+1}</span><b>${x}</b><small>Materials · finish · delivery</small><i>↗</i></a>`).join('')}</div>
      </section><section class="w-industrial-banner" id="site-about"><div><span class="w-kicker">Engineering the future</span><h2>One precise layer<br>at a time.</h2><p>${esc(site.description)}</p>${btn('Talk to an engineer','#site-contact')}</div><div class="w-blueprint">${siteArt(site,'w-art w-art-blueprint')}</div></section>${contact(site,'Ready to make it real?')}${footer(site)}</div>`;
  }
  function renderCourse(site) {
    const weeks=[['01','Composition','Build a strong foundation in visual storytelling.'],['02','Modeling & texturing','Create shape, surface, and material with intention.'],['03','Animation','Bring your ideas to life with expressive motion.'],['04','Camera & lights','Set the scene and make every frame count.']];
    return `<div class="w-site w-course" style="${themeVars(site.theme)}">${nav(site,['Courses','Tutorials','Podcast','About'],'Enroll now')}${genericHero(site,{kicker:'Next course starts · July 2026',cta:'View the curriculum',secondary:'Meet the instructor',className:'course-hero',note:'Beginner friendly · Project based · 4 weeks'})}
      <section class="w-course-weeks" id="site-work">${weeks.map(x=>`<article><span>WEEK ${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><a href="#site-services">Explore module ↗</a></article>`).join('')}</section>
      <section class="w-course-detail" id="site-services"><div class="w-course-visual"><span>QX</span><i>◈</i><b>DESIGN<br>IN 3D</b></div><div>${intro('What you’ll learn','Make your ideas<br>feel tangible.','A practical course built around the tools and techniques used by working artists.')}${featureCards([['Model with confidence','Create clean forms from a simple blockout.'],['Light every scene','Use light to build depth and atmosphere.'],['Tell a story','Turn a still image into a compelling moment.']])}</div></section>${contact(site,'Ready to make your first scene?')}${footer(site)}</div>`;
  }
  function renderCharacter(site) {
    return `<div class="w-site w-character" style="${themeVars(site.theme)}">${nav(site,['Home','Characters','Help'],'Join the guild')}
      <section class="w-character-hero" id="site-top"><div class="w-character-copy"><span class="w-kicker">Hunter profile · Rank S</span><h1>${titleMarkup(site)}</h1><p>${esc(site.description)}</p><div class="w-character-actions">${btn('View abilities','#site-services')}${btn('All characters','#site-work',true)}</div></div>${siteArt(site,'w-art w-character-art')}<aside class="w-character-panel"><span>PROFILE</span><b>RANK <strong>S</strong></b><p>Level 99</p><p>Shadow hunter</p><div class="w-power"><small>POWER</small><strong>9,850</strong></div></aside></section>
      <section class="w-character-stats" id="site-about">${statCards([['S','Rank'],['99','Level'],['7','Abilities'],['∞','Potential']])}</section>
      <section class="w-section" id="site-services">${intro('Skills & abilities','A force of nature.','Choose a path, build your strength, and discover what lies beyond the gate.')}${featureCards([['Shadow extraction','Raise fallen enemies as loyal shadows.'],['Dagger mastery','Move fast and strike with precision.'],['Stealth','Disappear before the danger arrives.'],['Limit break','Unlock a stronger form under pressure.']])}</section>
      <section class="w-section" id="site-work">${intro('The hunter archive','Other profiles to discover','')}${projects(site)}</section>${footer(site)}</div>`;
  }
  function renderPlanner(site) {
    return `<div class="w-site w-planner" style="${themeVars(site.theme)}">${nav(site,['Product','Solutions','Resources','Pricing'],'Get started')}${genericHero(site,{kicker:'A little progress, every day',cta:'Get started for free',secondary:'See the app',className:'planner-hero',note:'Plan with intention · Celebrate the small wins'})}
      <section class="w-planner-stats">${statCards([['5+','Years of focus'],['50+','Ways to organize'],['100%','Made for your rhythm']])}</section>
      <section class="w-section" id="site-services">${intro('Less overwhelm, more momentum','Everything you need to keep moving.','A calm home for your tasks, goals, and good ideas.')}${featureCards([['Plan your day','See your priorities clearly and start with one thing.'],['Track your progress','Make the small wins visible along the way.'],['Build a rhythm','Create routines that work for real life.']])}</section>
      <section class="w-planner-demo" id="site-work"><div class="w-planner-demo-copy"><span class="w-kicker">A closer look</span><h2>Your day,<br>with a little more space.</h2><p>Keep your tasks in view without letting them take over.</p></div>${dashboardMockup(site,'My day')}</section>${contact(site,'Let’s make today a good one.')}${footer(site)}</div>`;
  }

  const renderers={portfolio:renderPortfolio,shop:renderShop,agency:renderAgency,realty:renderRealty,food:renderFood,saas:renderSaaS,fintech:renderFintech,event:renderEvent,foundation:renderFoundation,feature:renderFeature,nft:renderNFT,industrial:renderIndustrial,course:renderCourse,character:renderCharacter,planner:renderPlanner};
  window.buildRecreatedSite = function(item) {
    const i=idNumber(item.id)-1;
    item.layout=layouts[i] || 'agency';
    item.theme=palettes[themeNames[i]] || palettes.violet;
    item.brand=brandById[item.id] || item.title.split('—')[0].trim();
    item.headline=headlines[i];
    const renderer=renderers[item.layout] || renderAgency;
    return renderer(item);
  };
  window.bindRecreatedSite = function(root) {
    const notify=(text='Thanks — your request is ready.')=>{
      const toast=document.getElementById('site-toast');
      if(!toast)return;
      toast.querySelector('span').textContent=text;
      toast.classList.add('show');
      clearTimeout(window.__siteToastTimer);
      window.__siteToastTimer=setTimeout(()=>toast.classList.remove('show'),2600);
    };
    root.querySelectorAll('[data-menu-toggle]').forEach(button=>button.addEventListener('click',()=>{
      const links=root.querySelector('#w-links');
      const open=links?.classList.toggle('is-open');
      button.setAttribute('aria-expanded',String(!!open));
    }));
    root.querySelectorAll('[data-action]').forEach(button=>button.addEventListener('click',event=>{
      const action=button.dataset.action;
      if(action==='favorite') { event.preventDefault(); button.classList.toggle('is-favorite'); button.textContent=button.classList.contains('is-favorite')?'♥':'♡'; notify(button.classList.contains('is-favorite')?'Saved to your favorites.':'Removed from favorites.'); }
      if(action==='add') { event.preventDefault(); const count=root.querySelector('#cart-count'); if(count) count.textContent=String((Number(count.textContent)||0)+1); notify('Added to your bag.'); }
      if(action==='search') { event.preventDefault(); notify('Searching available homes…'); }
      if(action==='notify') { event.preventDefault(); notify('Your new item is ready to add.'); }
    }));
    root.querySelectorAll('form').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();notify('Thanks — your message has been received.');form.reset();}));
    root.querySelectorAll('[data-food-filter]').forEach(button=>button.addEventListener('click',()=>{
      root.querySelectorAll('[data-food-filter]').forEach(x=>x.classList.toggle('active',x===button));
      const filter=button.dataset.foodFilter;
      root.querySelectorAll('[data-food-kind]').forEach(card=>card.hidden=filter!=='all'&&card.dataset.foodKind!==filter);
    }));
  };
})();
