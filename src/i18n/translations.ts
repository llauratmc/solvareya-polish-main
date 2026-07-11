export type Locale = "en" | "tr" | "ru";
export const LOCALES: Locale[] = ["en", "tr", "ru"];
export const DEFAULT_LOCALE: Locale = "en";

type Dict = Record<string, string>;

const en: Dict = {
  "meta.home.title": "Solvareya Group | International Trade & Sourcing Solutions",
  "meta.home.desc":
    "Solvareya Group provides international sourcing, re-export, trade coordination, heating equipment supply and value-added logistics solutions connecting Canada, Türkiye, Europe, CIS and Asia.",
  "meta.services.title": "Services — Solvareya Group Ltd.",
  "meta.services.desc":
    "Brokerage & re-export, alternative trade solutions and warehousing with value-added services. Compliance-conscious international trade coordination.",
  "meta.privacy.title": "Privacy Policy — Solvareya Group Ltd.",
  "meta.privacy.desc":
    "How Solvareya Group Ltd. handles inquiries, personal data and business communication.",
  "meta.terms.title": "Terms of Use — Solvareya Group Ltd.",
  "meta.terms.desc":
    "Terms governing the use of the Solvareya Group Ltd. website and information provided herein.",
  "meta.notfound.title": "Page Not Found — Solvareya",
  "meta.notfound.desc": "The page you are looking for could not be found.",

  "nav.home": "Home",
  "nav.about": "About Us",
  "nav.services": "Services",
  "nav.heating": "Heating Equipment",
  "nav.network": "Global Network",
  "nav.contact": "Contact",
  "nav.quote": "Request a Quote",
  "nav.approach": "Approach",
  "nav.reach": "Global Reach",
  "nav.menu": "Menu",
  "nav.close": "Close",

  "hero.eyebrow": "International B2B Trade · Ottawa, Canada",
  "hero.title": "Smart Routes. Seamless Trade.",
  "hero.title.line1": "Smart Routes.",
  "hero.title.line2": "Seamless Trade.",
  "hero.subtitle":
    "We design tailored trade routes between Canada, Türkiye, Europe, the CIS and Asia — coordinating sourcing, documentation and logistics so your goods move with clarity and control.",
  "hero.cta.quote": "Request a Quote",
  "hero.cta.services": "Explore Our Services",
  "hero.scroll": "Scroll",

  "heating.eyebrow": "Heating Equipment · Türkiye",
  "heating.title": "Heating Equipment from Turkish Manufacturers",
  "heating.body":
    "Wholesale supply of boilers, water heaters, radiators and residential and commercial heating solutions. We source directly from established Turkish manufacturers, tailor specifications to your market and coordinate direct shipments from Türkiye to your destination.",
  "heating.b1.t": "Boilers & Combi Systems",
  "heating.b1.d":
    "Wall-mounted, condensing and floor-standing units for residential and commercial use.",
  "heating.b2.t": "Water Heaters & Storage",
  "heating.b2.d": "Electric, gas and hybrid water heaters with capacities matched to your project.",
  "heating.b3.t": "Radiators & Distribution",
  "heating.b3.d": "Panel radiators, towel warmers and heating distribution components.",
  "heating.cta": "Request Heating Equipment Quote",

  "value.eyebrow": "Why Solvareya Exists",
  "value.title": "Connecting markets through Türkiye — a strategic bridge between continents.",
  "value.body":
    "Global trade rarely follows a straight line. We build trade routes that reflect the reality of sourcing, regulations and logistics — using Türkiye's position between Europe, Asia and the Middle East to move goods efficiently for our clients in Canada, the CIS and beyond.",
  "value.p1.t": "Tailored, not templated",
  "value.p1.d": "Every route is built around your product, market and timeline.",
  "value.p2.t": "Coordinated end-to-end",
  "value.p2.d": "Sourcing, documentation and logistics handled as one workflow.",
  "value.p3.t": "Clarity at every step",
  "value.p3.d": "Direct communication, straightforward updates and clear ownership.",

  "services.eyebrow": "Services",
  "services.title": "What we do for international clients",
  "services.s1.t": "Brokerage & Re-Export",
  "services.s1.d":
    "Trade brokerage and re-export coordination between manufacturers and buyers, with attention to documentation, routing and applicable compliance requirements.",
  "services.s2.t": "Alternative Trade Solutions",
  "services.s2.d":
    "Lawful, transparent trade routing solutions for complex markets — designed within international trade regulations and adapted to your commercial needs.",
  "services.s3.t": "Warehousing & Value-Added Services",
  "services.s3.d":
    "Coordination of warehousing, consolidation, labeling and preparation services through partner facilities aligned with your route.",
  "services.learn": "Learn more",

  "process.eyebrow": "How Solvareya Works",
  "process.title": "A clear four-step process",
  "process.subtitle":
    "From the first conversation to delivered goods, each stage is documented, coordinated and communicated.",
  "process.s1.t": "Understand the Requirement",
  "process.s1.d":
    "We map your product, destination, volume, timing and any regulatory considerations.",
  "process.s2.t": "Build the Trade Route",
  "process.s2.d": "We design the sourcing, routing and partner setup that best fits your case.",
  "process.s3.t": "Coordinate Documentation & Logistics",
  "process.s3.d":
    "We coordinate commercial documents, customs paperwork and freight — working with licensed brokers where applicable.",
  "process.s4.t": "Deliver with Visibility",
  "process.s4.d":
    "We track shipments and keep you informed until goods arrive at their final destination.",

  "reach.eyebrow": "Global Reach",
  "reach.title": "An international partner network",
  "reach.subtitle":
    "Solvareya operates through a network of partners and coordinators. The regions below reflect where we actively build routes — not necessarily company-owned facilities.",
  "reach.canada": "Canada",
  "reach.turkiye": "Türkiye",
  "reach.europe": "Europe",
  "reach.cis": "CIS",
  "reach.asia": "Asia",
  "reach.note": "Operational network · partner-based coverage",

  "why.eyebrow": "Why Solvareya",
  "why.title": "Built for serious international buyers",
  "why.1.t": "Tailored Trade Strategies",
  "why.1.d": "Routes and terms designed around your product and market.",
  "why.2.t": "International Partner Network",
  "why.2.d": "Established manufacturer, broker and freight partners across key corridors.",
  "why.3.t": "Documentation Coordination",
  "why.3.d": "Careful handling of commercial and shipping paperwork.",
  "why.4.t": "Market-Focused Solutions",
  "why.4.d": "Recommendations grounded in the reality of your destination market.",
  "why.5.t": "Clear Communication",
  "why.5.d": "One point of contact, timely updates and honest answers.",
  "why.6.t": "Compliance-Conscious Approach",
  "why.6.d": "Work is structured within applicable international trade regulations.",

  "quote.eyebrow": "Request a Quote",
  "quote.title": "Tell us about your requirement",
  "quote.subtitle": "Share a few details and our team will get back to you with next steps.",
  "quote.f.first": "First name",
  "quote.f.last": "Last name",
  "quote.f.company": "Company name",
  "quote.f.email": "Business email",
  "quote.f.phone": "Phone",
  "quote.f.country": "Country",
  "quote.f.service": "Service required",
  "quote.f.product": "Product or requirement",
  "quote.f.message": "Message",
  "quote.f.consent":
    "I agree to Solvareya processing the information above to respond to my inquiry.",
  "quote.f.submit": "Send Request",
  "quote.f.submitting": "Sending…",
  "quote.f.select": "Please select",
  "quote.f.opt.brokerage": "Brokerage & Re-Export",
  "quote.f.opt.alternative": "Alternative Trade Solutions",
  "quote.f.opt.warehousing": "Warehousing & Value-Added Services",
  "quote.f.opt.heating": "Heating Equipment Sourcing",
  "quote.f.opt.other": "Other / Not sure yet",
  "quote.success.title": "Thank you — your request has been received.",
  "quote.success.body": "We will get back to you at the business email you provided.",
  "quote.success.again": "Send another request",
  "quote.error": "Something went wrong. Please try again in a moment.",

  "val.required": "This field is required.",
  "val.email": "Please enter a valid business email.",
  "val.min": "Please enter a bit more detail.",
  "val.consent": "Please confirm consent to proceed.",

  "footer.tag": "Smart Routes. Seamless Trade.",
  "footer.company": "Company",
  "footer.services": "Services",
  "footer.legal": "Legal",
  "footer.contact": "Contact",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms of Use",
  "footer.location": "Ottawa, Ontario, Canada",
  "footer.rights": "© 2026 Solvareya Group Ltd. All rights reserved.",

  "lang.label": "Language",
  "lang.en": "English",
  "lang.tr": "Türkçe",
  "lang.ru": "Русский",

  "404.title": "Page not found",
  "404.body": "The page you are looking for doesn't exist or has been moved.",
  "404.home": "Back to home",

  "services.page.title": "Our Services",
  "services.page.subtitle":
    "Compliance-conscious international trade services, coordinated end-to-end by a single team.",
  "services.brokerage.title": "Brokerage & Re-Export",
  "services.brokerage.body":
    "We coordinate trade between manufacturers and buyers across borders. Our role is to design the commercial route, prepare and route documentation, and work with licensed customs brokers and freight partners where applicable. All activity is structured within international trade rules and applicable export controls.",
  "services.brokerage.li1": "Manufacturer identification and offer coordination",
  "services.brokerage.li2": "Contract, invoicing and commercial documentation support",
  "services.brokerage.li3": "Coordination with licensed brokers for customs formalities",
  "services.brokerage.li4": "Re-export routing planning and freight coordination",
  "services.alt.title": "Alternative Trade Solutions",
  "services.alt.body":
    "For clients navigating complex markets or non-standard product flows, we design alternative but fully lawful trade routes. Every solution is developed with careful attention to sanctions regimes, export controls and destination-country regulations.",
  "services.alt.li1": "Route design for complex sourcing and destination pairs",
  "services.alt.li2": "Documentation strategy for multi-leg shipments",
  "services.alt.li3": "Coordination with counsel and licensed brokers where required",
  "services.alt.li4": "Transparent, auditable workflows",
  "services.wh.title": "Warehousing & Value-Added Services",
  "services.wh.body":
    "Through partner facilities, we coordinate warehousing, consolidation and preparation services aligned with your route. Solvareya does not represent that it owns warehouses; capacity is provided by vetted third-party operators.",
  "services.wh.li1": "Short and mid-term storage through partner warehouses",
  "services.wh.li2": "Consolidation, palletizing and re-packing coordination",
  "services.wh.li3": "Labeling, marking and light preparation services",
  "services.wh.li4": "Handover to onward freight partners",
  "services.compliance.title": "A note on compliance",
  "services.compliance.body":
    "Solvareya Group Ltd. structures its work within applicable international trade laws and regulations, including relevant sanctions regimes and export controls. We do not offer, and will not participate in, arrangements designed to evade sanctions or applicable law. Certain formal acts — such as customs clearance, legal advice and regulated brokerage — are performed by appropriately licensed third parties.",

  "privacy.title": "Privacy Policy",
  "privacy.updated": "Last updated: 2026",
  "privacy.p1":
    'Solvareya Group Ltd. ("Solvareya", "we") respects the privacy of the businesses and individuals who contact us. This page describes, in plain language, what information we collect through this website and how we use it.',
  "privacy.p2":
    "When you submit a form on this website, we collect the information you provide — such as your name, company, business email, phone number, country and message. We use this information solely to respond to your inquiry and to coordinate any resulting business communication.",
  "privacy.p3":
    "We do not sell personal information. We do not use this website for behavioral advertising. Information you submit is stored in our secure backend infrastructure and is accessible only to authorized Solvareya personnel.",
  "privacy.p4":
    "You may request that we correct or delete the information you submitted by writing to info@solvareya.com.",

  "terms.title": "Terms of Use",
  "terms.updated": "Last updated: 2026",
  "terms.p1":
    "The information provided on this website is for general informational purposes only and does not constitute legal, customs, tax or financial advice. Nothing on this website should be interpreted as a guarantee of delivery, regulatory approval or commercial outcome.",
  "terms.p2":
    "Solvareya Group Ltd. structures its services within applicable international trade laws and regulations. Certain regulated activities — including customs clearance, legal advice and licensed brokerage — are performed by appropriately licensed third parties.",
  "terms.p3":
    "By using this website you agree that Solvareya is not liable for any decisions made in reliance on the general information published here without a specific written engagement.",

  "meta.about.title": "About Us — Solvareya Group Ltd.",
  "meta.about.desc":
    "About Solvareya Group Ltd. — compliance-conscious international B2B trade and Türkiye's strategic role between East and West.",
  "meta.heating.title": "Heating Equipment from Türkiye — Solvareya Group Ltd.",
  "meta.heating.desc":
    "Wholesale sourcing of boilers, water heaters, radiators and residential and commercial heating solutions from Turkish manufacturers.",
  "meta.network.title": "Global Trade Network — Solvareya Group Ltd.",
  "meta.network.desc":
    "Solvareya's international partner network connecting Canada, Türkiye, Europe, the CIS and Asia.",
  "meta.contact.title": "Contact — Solvareya Group Ltd.",
  "meta.contact.desc": "Get in touch with Solvareya Group Ltd. in Ottawa, Ontario, Canada.",
  "meta.quote.title": "Request a Quote — Solvareya Group Ltd.",
  "meta.quote.desc":
    "Send the details of your international trade requirement — our team will respond with next steps.",

  "footer.desc":
    "Strategic trade solutions connecting manufacturers, distributors and businesses across global markets.",
  "footer.getintouch": "Get in touch",

  "home.intro.eyebrow": "About Solvareya",
  "home.intro.title": "Strategic trade solutions between East and West.",
  "home.intro.body":
    "Based in Ottawa, Solvareya coordinates international trade routes using Türkiye's strategic position between Europe, Asia and the Middle East. We work with manufacturers, distributors and businesses that need transparent, auditable and tailored solutions.",
  "home.intro.cta": "About us",
  "home.intro.map.alt":
    "Editorial world map showing trade routes between Canada, Türkiye, Europe, the CIS and Asia",

  "home.preview.services.eyebrow": "Services",
  "home.preview.services.title": "What we do",
  "home.preview.services.cta": "All services",
  "home.preview.heating.eyebrow": "Heating from Türkiye",
  "home.preview.heating.cta": "Heating equipment",
  "home.preview.network.eyebrow": "Global network",
  "home.preview.network.cta": "Our network",

  "about.hero.eyebrow": "About us",
  "about.hero.title": "Strategic trade solutions from Canada, operating through Türkiye.",
  "about.hero.lead":
    "Solvareya Group Ltd. is an international B2B trade company coordinating sourcing, documentation and logistics between Canada, Türkiye, Europe, the CIS and Asia.",
  "about.s1.t": "Who we are",
  "about.s1.d":
    "Solvareya is an independent trading company registered in Canada. We serve manufacturers, distributors and businesses that need structured, transparent and lawful international trade routes.",
  "about.s1.alt": "Cargo ship and cranes at an international commercial port",
  "about.s2.t": "Türkiye's position",
  "about.s2.d":
    "Türkiye sits geographically and commercially between Europe, Asia, the Middle East and the CIS. We use that position to design practical routes for our clients — from heating equipment producers to industrial suppliers.",
  "about.s2.alt": "The Bosphorus trade corridor connecting the European and Asian sides of Türkiye",
  "about.s3.t": "Markets and regions",
  "about.s3.d":
    "We actively build trade routes between Canada, Türkiye, Europe, the CIS and Asia. Every route is designed around the client's specific requirement rather than a universal template.",
  "about.s3.alt":
    "International logistics hub representing coordinated trade routes across regions",
  "about.values.eyebrow": "Our approach",
  "about.values.title": "How we operate",
  "about.v1.t": "Tailored solutions",
  "about.v1.d": "Each engagement is designed around your product, market and timeline.",
  "about.v2.t": "Clear communication",
  "about.v2.d": "One point of contact, honest updates and understandable documentation.",
  "about.v3.t": "Compliance-conscious",
  "about.v3.d": "Work is structured within applicable international trade regulations.",
  "about.v4.t": "Long-term relationships",
  "about.v4.d": "We build commercial relationships designed for repeat business.",

  "heating.page.title": "Heating Equipment from Turkish Manufacturers",
  "heating.page.lead":
    "Wholesale residential and commercial heating equipment sourced directly from established Turkish manufacturers — with coordinated export, documentation and shipment.",
  "heating.cat.title": "Product categories",
  "heating.cat.boilers.t": "Boilers",
  "heating.cat.boilers.d": "Wall-mounted, condensing and floor-standing units.",
  "heating.cat.wh.t": "Water heaters",
  "heating.cat.wh.d": "Electric, gas and hybrid models.",
  "heating.cat.rad.t": "Radiators",
  "heating.cat.rad.d": "Panel radiators and towel warmers.",
  "heating.cat.res.t": "Residential heating",
  "heating.cat.res.d": "Complete solutions for apartments and homes.",
  "heating.cat.com.t": "Commercial heating",
  "heating.cat.com.d": "Systems for buildings and industrial projects.",
  "heating.cat.ws.t": "Wholesale supply",
  "heating.cat.ws.d": "Direct container and batch shipments.",
  "heating.for.title": "Who it's for",
  "heating.for.d1": "Distributors looking for stable Turkish suppliers.",
  "heating.for.d2": "Trading companies serving the CIS, Europe and Asia.",
  "heating.for.d3": "Construction projects requiring equipment batches.",
  "heating.cta.full": "Request Heating Equipment Supply",

  "network.page.title": "Global Trade Network",
  "network.page.lead":
    "Connecting trusted partners and trade routes across key international markets.",
  "network.regions.title": "Operating regions",
  "network.canada.d":
    "Ottawa, Ontario — legal presence and coordination with Canada and North America.",
  "network.turkiye.d":
    "Manufacturer partners and logistics in Istanbul, Bursa and industrial regions.",
  "network.europe.d": "Partner warehouses and logistics providers in key European hubs.",
  "network.cis.d": "Local coordinators in CIS countries for documentation and customs partners.",
  "network.asia.d": "Sourcing and coordination with Asian manufacturers and hubs.",
  "network.disclaimer":
    "Regions reflect an operational and partner network — not necessarily company-owned offices or facilities.",
  "network.intelligence": "Global Route Intelligence",
  "network.corridor": "Intercontinental partner corridor",
  "network.active": "Active network",
  "network.map.title": "Interactive global trade network map",
  "network.map.description":
    "Türkiye is the central hub connecting Canada, Europe, the CIS and Asia. Select a region for details.",
  "network.select": "Select region",
  "network.corridor.label": "Türkiye connector corridor",
  "network.route.status": "Route status",
  "network.route.open": "Operational",
  "network.region.profile": "Regional profile",

  "quote.page.title": "Request a Quote",
  "quote.page.lead":
    "Tell us about your requirement — the Solvareya team will respond with next steps.",
  "quote.section.company": "Company information",
  "quote.section.requirement": "Requirement information",
  "quote.f.origin": "Origin country",
  "quote.f.destination": "Destination country",
  "quote.f.quantity": "Estimated quantity",
  "quote.f.opt.sourcing": "International Sourcing Support",
  "quote.f.opt.trade": "Other trade requirement",

  "contact.page.title": "Get in touch",
  "contact.page.lead":
    "International business inquiries are welcome in English, Turkish and Russian.",
  "contact.help.title": "How we can help",
  "contact.help.d1": "Heating equipment and industrial product supply inquiries.",
  "contact.help.d2": "Brokerage, re-export and alternative trade solutions.",
  "contact.help.d3": "Partnerships with manufacturers, distributors and trading companies.",
  "contact.response":
    "We aim to respond to business inquiries within a few business days. Response times depend on the nature of the request; no specific response time is guaranteed.",

  "services.s4.t": "International Sourcing",
  "services.s4.d":
    "Supplier research, commercial-offer comparison and shipment coordination against your requirements.",
  "services.sourcing.title": "International Sourcing Support",
  "services.sourcing.body":
    "We help clients find reliable manufacturers and coordinate procurement for their specific markets — from supplier research to shipment planning.",
  "services.sourcing.li1": "Supplier research and vetting",
  "services.sourcing.li2": "Commercial-offer comparison and negotiation support",
  "services.sourcing.li3": "Specification and production-requirement coordination",
  "services.sourcing.li4": "Shipment planning and documentation support",
};

const tr: Dict = {
  "meta.home.title": "Solvareya Group | Uluslararası Ticaret ve Tedarik Çözümleri",
  "meta.home.desc":
    "Solvareya Group; Kanada, Türkiye, Avrupa, BDT ve Asya arasında uluslararası tedarik, yeniden ihracat, ticaret koordinasyonu, ısıtma ekipmanları ve lojistik çözümleri sunar.",
  "meta.services.title": "Hizmetler — Solvareya Group Ltd.",
  "meta.services.desc":
    "Brokerlik ve re-export, alternatif ticaret çözümleri, katma değerli depolama. Uyum odaklı uluslararası ticaret koordinasyonu.",
  "meta.privacy.title": "Gizlilik Politikası — Solvareya Group Ltd.",
  "meta.privacy.desc":
    "Solvareya Group Ltd.'in taleplerinizi ve kişisel verilerinizi nasıl işlediği hakkında bilgi.",
  "meta.terms.title": "Kullanım Koşulları — Solvareya Group Ltd.",
  "meta.terms.desc": "Solvareya Group Ltd. web sitesinin kullanımını düzenleyen koşullar.",
  "meta.notfound.title": "Sayfa Bulunamadı — Solvareya",
  "meta.notfound.desc": "Aradığınız sayfa bulunamadı.",

  "nav.home": "Ana Sayfa",
  "nav.about": "Hakkımızda",
  "nav.services": "Hizmetler",
  "nav.heating": "Isıtma Ekipmanları",
  "nav.network": "Küresel Ağ",
  "nav.contact": "İletişim",
  "nav.quote": "Teklif Talep Et",
  "nav.approach": "Yaklaşım",
  "nav.reach": "Küresel Erişim",
  "nav.menu": "Menü",
  "nav.close": "Kapat",

  "hero.eyebrow": "Uluslararası B2B Ticaret · Ottawa, Kanada",
  "hero.title": "Akıllı Rotalar. Kesintisiz Ticaret.",
  "hero.title.line1": "Akıllı Rotalar.",
  "hero.title.line2": "Kesintisiz Ticaret.",
  "hero.subtitle":
    "Kanada, Türkiye, Avrupa, BDT ve Asya arasında özel ticaret rotaları tasarlıyoruz — tedarik, evrak ve lojistiği koordine ederek ürünlerinizin net ve kontrollü şekilde hareket etmesini sağlıyoruz.",
  "hero.cta.quote": "Teklif Talep Et",
  "hero.cta.services": "Hizmetlerimizi İnceleyin",
  "hero.scroll": "Kaydır",

  "heating.eyebrow": "Isıtma Ekipmanları · Türkiye",
  "heating.title": "Türk Üreticilerden Isıtma Ekipmanları",
  "heating.body":
    "Kombi, şofben, radyatör ve konut ile ticari ısıtma çözümlerinin toptan tedariki. Yerleşik Türk üreticilerden doğrudan temin ediyor, spesifikasyonları hedef pazarınıza göre uyarlıyor ve Türkiye'den varış noktanıza doğrudan sevkiyat koordine ediyoruz.",
  "heating.b1.t": "Kombiler ve Kazan Sistemleri",
  "heating.b1.d": "Konut ve ticari kullanım için duvar tipi, yoğuşmalı ve yer tipi üniteler.",
  "heating.b2.t": "Şofben ve Depolamalı Sistemler",
  "heating.b2.d": "Projelerinize uygun kapasitede elektrikli, gazlı ve hibrit su ısıtıcıları.",
  "heating.b3.t": "Radyatörler ve Dağıtım",
  "heating.b3.d": "Panel radyatörler, havlupanlar ve ısıtma dağıtım bileşenleri.",
  "heating.cta": "Isıtma Ekipmanı Teklifi Alın",

  "value.eyebrow": "Solvareya Neden Var",
  "value.title": "Türkiye üzerinden pazarları birleştiriyoruz — kıtalar arası stratejik bir köprü.",
  "value.body":
    "Küresel ticaret nadiren düz bir çizgi izler. Türkiye'nin Avrupa, Asya ve Orta Doğu arasındaki konumundan yararlanarak, Kanada, BDT ve ötesindeki müşterilerimiz için tedarik, mevzuat ve lojistiğin gerçeklerini yansıtan ticaret rotaları kuruyoruz.",
  "value.p1.t": "Şablon değil, özel",
  "value.p1.d": "Her rota ürününüz, pazarınız ve zaman çizelgeniz etrafında tasarlanır.",
  "value.p2.t": "Uçtan uca koordinasyon",
  "value.p2.d": "Tedarik, evrak ve lojistik tek bir iş akışı olarak yönetilir.",
  "value.p3.t": "Her adımda netlik",
  "value.p3.d": "Doğrudan iletişim, açık güncellemeler ve net sorumluluk.",

  "services.eyebrow": "Hizmetler",
  "services.title": "Uluslararası müşteriler için ne yapıyoruz",
  "services.s1.t": "Brokerlik ve Re-Export",
  "services.s1.d":
    "Üreticiler ve alıcılar arasında ticaret brokerliği ve re-export koordinasyonu; evrak, güzergâh ve uygulanabilir uyum gerekliliklerine özen ile.",
  "services.s2.t": "Alternatif Ticaret Çözümleri",
  "services.s2.d":
    "Karmaşık pazarlar için yasal ve şeffaf ticaret yönlendirme çözümleri — uluslararası ticaret düzenlemelerine uygun tasarlanır.",
  "services.s3.t": "Depolama ve Katma Değerli Hizmetler",
  "services.s3.d":
    "Rotanıza uygun ortak tesisler üzerinden depolama, konsolidasyon, etiketleme ve hazırlık hizmetlerinin koordinasyonu.",
  "services.learn": "Daha fazla",

  "process.eyebrow": "Solvareya Nasıl Çalışır",
  "process.title": "Net dört adımlı bir süreç",
  "process.subtitle":
    "İlk görüşmeden teslim edilen mala kadar her aşama belgelenir, koordine edilir ve iletilir.",
  "process.s1.t": "İhtiyacı Anlamak",
  "process.s1.d": "Ürün, hedef, hacim, zamanlama ve düzenleyici hususları haritalarız.",
  "process.s2.t": "Ticaret Rotasını Kurmak",
  "process.s2.d": "Vakanıza en uygun tedarik, yönlendirme ve ortak yapısını tasarlarız.",
  "process.s3.t": "Evrak ve Lojistik Koordinasyonu",
  "process.s3.d":
    "Ticari belgeler, gümrük evrakları ve navlun koordinasyonu — gerektiğinde lisanslı brokerlerle birlikte.",
  "process.s4.t": "Görünürlükle Teslimat",
  "process.s4.d":
    "Sevkiyatları takip eder, mal nihai varış noktasına ulaşana kadar sizi bilgilendiririz.",

  "reach.eyebrow": "Küresel Erişim",
  "reach.title": "Uluslararası bir iş ortağı ağı",
  "reach.subtitle":
    "Solvareya bir iş ortağı ve koordinatör ağı üzerinden çalışır. Aşağıdaki bölgeler aktif olarak rota kurduğumuz coğrafyaları yansıtır — mutlaka şirkete ait tesisleri değil.",
  "reach.canada": "Kanada",
  "reach.turkiye": "Türkiye",
  "reach.europe": "Avrupa",
  "reach.cis": "BDT",
  "reach.asia": "Asya",
  "reach.note": "Operasyonel ağ · iş ortağı bazlı kapsam",

  "why.eyebrow": "Neden Solvareya",
  "why.title": "Ciddi uluslararası alıcılar için tasarlandı",
  "why.1.t": "Özel Ticaret Stratejileri",
  "why.1.d": "Ürününüz ve pazarınıza göre tasarlanmış rotalar ve şartlar.",
  "why.2.t": "Uluslararası İş Ortağı Ağı",
  "why.2.d": "Anahtar koridorlarda yerleşik üretici, broker ve navlun ortakları.",
  "why.3.t": "Evrak Koordinasyonu",
  "why.3.d": "Ticari ve sevkiyat evraklarının titiz yönetimi.",
  "why.4.t": "Pazar Odaklı Çözümler",
  "why.4.d": "Hedef pazarınızın gerçekliğine dayanan öneriler.",
  "why.5.t": "Net İletişim",
  "why.5.d": "Tek muhatap, zamanında güncelleme ve dürüst cevaplar.",
  "why.6.t": "Uyum Odaklı Yaklaşım",
  "why.6.d":
    "Çalışmalar uygulanabilir uluslararası ticaret düzenlemeleri çerçevesinde yapılandırılır.",

  "quote.eyebrow": "Teklif Talep Et",
  "quote.title": "İhtiyacınızı bize anlatın",
  "quote.subtitle": "Birkaç ayrıntı paylaşın; ekibimiz sonraki adımlarla size dönecektir.",
  "quote.f.first": "Ad",
  "quote.f.last": "Soyad",
  "quote.f.company": "Şirket adı",
  "quote.f.email": "Kurumsal e-posta",
  "quote.f.phone": "Telefon",
  "quote.f.country": "Ülke",
  "quote.f.service": "Talep edilen hizmet",
  "quote.f.product": "Ürün veya gereksinim",
  "quote.f.message": "Mesaj",
  "quote.f.consent":
    "Talebime yanıt verilmesi amacıyla yukarıdaki bilgilerin Solvareya tarafından işlenmesini kabul ediyorum.",
  "quote.f.submit": "Talebi Gönder",
  "quote.f.submitting": "Gönderiliyor…",
  "quote.f.select": "Lütfen seçin",
  "quote.f.opt.brokerage": "Brokerlik ve Re-Export",
  "quote.f.opt.alternative": "Alternatif Ticaret Çözümleri",
  "quote.f.opt.warehousing": "Depolama ve Katma Değerli Hizmetler",
  "quote.f.opt.heating": "Isıtma Ekipmanı Tedariki",
  "quote.f.opt.other": "Diğer / Henüz emin değilim",
  "quote.success.title": "Teşekkür ederiz — talebiniz alındı.",
  "quote.success.body": "Belirttiğiniz kurumsal e-posta adresi üzerinden size döneceğiz.",
  "quote.success.again": "Yeni bir talep gönder",
  "quote.error": "Bir sorun oluştu. Lütfen kısa süre sonra tekrar deneyin.",

  "val.required": "Bu alan zorunludur.",
  "val.email": "Geçerli bir kurumsal e-posta girin.",
  "val.min": "Lütfen biraz daha ayrıntı ekleyin.",
  "val.consent": "Devam etmek için onay verin.",

  "footer.tag": "Smart Routes. Seamless Trade.",
  "footer.company": "Şirket",
  "footer.services": "Hizmetler",
  "footer.legal": "Hukuki",
  "footer.contact": "İletişim",
  "footer.privacy": "Gizlilik Politikası",
  "footer.terms": "Kullanım Koşulları",
  "footer.location": "Ottawa, Ontario, Kanada",
  "footer.rights": "© 2026 Solvareya Group Ltd. Tüm hakları saklıdır.",

  "lang.label": "Dil",
  "lang.en": "English",
  "lang.tr": "Türkçe",
  "lang.ru": "Русский",

  "404.title": "Sayfa bulunamadı",
  "404.body": "Aradığınız sayfa mevcut değil veya taşınmış.",
  "404.home": "Ana sayfaya dön",

  "services.page.title": "Hizmetlerimiz",
  "services.page.subtitle":
    "Tek bir ekip tarafından uçtan uca koordine edilen, uyum odaklı uluslararası ticaret hizmetleri.",
  "services.brokerage.title": "Brokerlik ve Re-Export",
  "services.brokerage.body":
    "Sınır ötesi üretici ve alıcılar arasında ticareti koordine ediyoruz. Rolümüz; ticari rotayı tasarlamak, evrakları hazırlayıp yönlendirmek ve gerektiğinde lisanslı gümrük müşavirleri ile navlun ortakları ile birlikte çalışmaktır. Tüm çalışmalar uluslararası ticaret kuralları ve geçerli ihracat kontrolleri çerçevesindedir.",
  "services.brokerage.li1": "Üretici tanımlama ve teklif koordinasyonu",
  "services.brokerage.li2": "Sözleşme, faturalama ve ticari evrak desteği",
  "services.brokerage.li3": "Gümrük formaliteleri için lisanslı brokerlerle koordinasyon",
  "services.brokerage.li4": "Re-export güzergâh planlaması ve navlun koordinasyonu",
  "services.alt.title": "Alternatif Ticaret Çözümleri",
  "services.alt.body":
    "Karmaşık pazarlarda veya standart olmayan ürün akışlarında faaliyet gösteren müşteriler için alternatif fakat tamamen yasal ticaret rotaları tasarlıyoruz. Her çözüm; yaptırım rejimleri, ihracat kontrolleri ve varış ülkesi düzenlemelerine dikkat ederek geliştirilir.",
  "services.alt.li1": "Karmaşık tedarik-varış çiftleri için rota tasarımı",
  "services.alt.li2": "Çok bacaklı sevkiyatlar için evrak stratejisi",
  "services.alt.li3": "Gerektiğinde hukuk müşavirleri ve lisanslı brokerlerle koordinasyon",
  "services.alt.li4": "Şeffaf, denetlenebilir iş akışları",
  "services.wh.title": "Depolama ve Katma Değerli Hizmetler",
  "services.wh.body":
    "Ortak tesisler aracılığıyla, rotanıza uygun depolama, konsolidasyon ve hazırlık hizmetlerini koordine ediyoruz. Solvareya depolara sahip olduğunu beyan etmez; kapasite, incelenmiş üçüncü taraf operatörler tarafından sağlanır.",
  "services.wh.li1": "Ortak depolar üzerinden kısa ve orta vadeli saklama",
  "services.wh.li2": "Konsolidasyon, paletleme ve yeniden paketleme koordinasyonu",
  "services.wh.li3": "Etiketleme, işaretleme ve hafif hazırlık hizmetleri",
  "services.wh.li4": "İleri navlun ortaklarına devir",
  "services.compliance.title": "Uyum notu",
  "services.compliance.body":
    "Solvareya Group Ltd., çalışmalarını yaptırım rejimleri ve ihracat kontrolleri dahil olmak üzere uygulanabilir uluslararası ticaret yasa ve düzenlemeleri çerçevesinde yapılandırır. Yaptırımları veya geçerli hukuku aşmayı amaçlayan düzenlemelere teklif vermeyiz ve katılmayız. Gümrük işlemleri, hukuki danışmanlık ve düzenlenmiş brokerlik gibi belirli resmi işlemler, uygun lisansa sahip üçüncü taraflarca yürütülür.",

  "privacy.title": "Gizlilik Politikası",
  "privacy.updated": "Son güncelleme: 2026",
  "privacy.p1":
    'Solvareya Group Ltd. ("Solvareya", "biz"), bize ulaşan işletme ve kişilerin gizliliğine saygı duyar. Bu sayfa, bu web sitesi aracılığıyla hangi bilgileri topladığımızı ve nasıl kullandığımızı açıkça anlatır.',
  "privacy.p2":
    "Bu web sitesindeki bir formu doldurduğunuzda ad, şirket, kurumsal e-posta, telefon, ülke ve mesaj gibi verdiğiniz bilgileri topluyoruz. Bu bilgileri yalnızca talebinize yanıt vermek ve sonrasında oluşabilecek iş iletişimini koordine etmek için kullanırız.",
  "privacy.p3":
    "Kişisel bilgileri satmayız. Bu web sitesini davranışsal reklamcılık için kullanmayız. Gönderdiğiniz bilgiler güvenli altyapımızda saklanır ve yalnızca yetkili Solvareya personelinin erişimine açıktır.",
  "privacy.p4":
    "Gönderdiğiniz bilgilerin düzeltilmesini veya silinmesini info@solvareya.com adresine yazarak talep edebilirsiniz.",

  "terms.title": "Kullanım Koşulları",
  "terms.updated": "Son güncelleme: 2026",
  "terms.p1":
    "Bu web sitesinde sunulan bilgiler yalnızca genel bilgilendirme amaçlıdır; hukuki, gümrük, vergi veya finansal danışmanlık teşkil etmez. Bu web sitesindeki hiçbir şey teslimat, düzenleyici onay veya ticari sonuç garantisi olarak yorumlanmamalıdır.",
  "terms.p2":
    "Solvareya Group Ltd., hizmetlerini uygulanabilir uluslararası ticaret yasa ve düzenlemeleri çerçevesinde yapılandırır. Gümrük işlemleri, hukuki danışmanlık ve lisanslı brokerlik gibi belirli düzenlenmiş faaliyetler, uygun lisansa sahip üçüncü taraflarca yürütülür.",
  "terms.p3":
    "Bu web sitesini kullanarak, Solvareya'nın özel bir yazılı sözleşme olmaksızın burada yayımlanan genel bilgilere dayanılarak alınan kararlardan sorumlu olmadığını kabul edersiniz.",

  "meta.about.title": "Hakkımızda — Solvareya Group Ltd.",
  "meta.about.desc":
    "Solvareya Group Ltd. hakkında — Uyum odaklı uluslararası B2B ticaret ve Türkiye'nin Doğu ile Batı arasındaki stratejik konumu.",
  "meta.heating.title": "Türkiye'den Isıtma Ekipmanı — Solvareya Group Ltd.",
  "meta.heating.desc":
    "Türk üreticilerden kombi, şofben, radyatör ve konut/ticari ısıtma çözümlerinin toptan tedariki.",
  "meta.network.title": "Küresel Ticaret Ağı — Solvareya Group Ltd.",
  "meta.network.desc":
    "Solvareya'nın Kanada, Türkiye, Avrupa, BDT ve Asya'yı birbirine bağlayan uluslararası iş ortağı ağı.",
  "meta.contact.title": "İletişim — Solvareya Group Ltd.",
  "meta.contact.desc": "Ottawa, Ontario, Kanada'daki Solvareya Group Ltd. ile iletişime geçin.",
  "meta.quote.title": "Teklif Talep Et — Solvareya Group Ltd.",
  "meta.quote.desc":
    "Talebinizin ayrıntılarını gönderin — uluslararası ticaret çözümleriyle size döneceğiz.",

  "footer.desc":
    "Üreticileri, distribütörleri ve işletmeleri küresel pazarlarda birbirine bağlayan uluslararası B2B ticaret.",
  "footer.getintouch": "İletişime Geç",

  "home.intro.eyebrow": "Solvareya Hakkında",
  "home.intro.title": "Doğu ile Batı arasında stratejik ticaret çözümleri.",
  "home.intro.body":
    "Ottawa merkezli Solvareya, Türkiye'nin Avrupa, Asya ve Orta Doğu arasındaki stratejik konumundan yararlanarak uluslararası ticaret rotalarını koordine eder. Şeffaf, denetlenebilir ve özel çözümler arayan üreticiler, distribütörler ve işletmelerle çalışıyoruz.",
  "home.intro.cta": "Hakkımızda",
  "home.intro.map.alt":
    "Kanada, Türkiye, Avrupa, BDT ve Asya arasındaki ticaret rotalarını gösteren editoryal dünya haritası",

  "home.preview.services.eyebrow": "Hizmetler",
  "home.preview.services.title": "Ne yapıyoruz",
  "home.preview.services.cta": "Tüm hizmetler",
  "home.preview.heating.eyebrow": "Türkiye'den Isıtma",
  "home.preview.heating.cta": "Isıtma Ekipmanları",
  "home.preview.network.eyebrow": "Küresel Ağ",
  "home.preview.network.cta": "Ağımız",

  "about.hero.eyebrow": "Hakkımızda",
  "about.hero.title": "Kanada merkezli, Türkiye üzerinden çalışan stratejik ticaret çözümleri.",
  "about.hero.lead":
    "Solvareya Group Ltd., Kanada, Türkiye, Avrupa, BDT ve Asya arasında tedarik, evrak ve lojistiği koordine eden uluslararası bir B2B ticaret şirketidir.",
  "about.s1.t": "Biz Kimiz",
  "about.s1.d":
    "Solvareya, Kanada'da tescilli bağımsız bir ticaret şirketidir. Yapılandırılmış, şeffaf ve yasal uluslararası ticaret rotalarına ihtiyaç duyan üreticilere, distribütörlere ve işletmelere hizmet veriyoruz.",
  "about.s1.alt": "Uluslararası bir ticari limanda yük gemisi ve vinçler",
  "about.s2.t": "Türkiye'nin Konumu",
  "about.s2.d":
    "Türkiye, Avrupa, Asya, Orta Doğu ve BDT arasında coğrafi ve ticari olarak konumlanmıştır. Bu konumu, ısıtma ekipmanı üreticilerinden endüstriyel tedarikçilere kadar müşterilerimiz için pratik rotalar tasarlamak amacıyla kullanıyoruz.",
  "about.s2.alt": "Türkiye'nin Avrupa ve Asya yakalarını bağlayan Boğaz ticaret koridoru",
  "about.s3.t": "Pazarlar ve Bölgeler",
  "about.s3.d":
    "Kanada, Türkiye, Avrupa, BDT ve Asya arasında aktif olarak ticaret rotaları kuruyoruz. Her rota, evrensel bir şablon değil, müşterinin belirli bir ihtiyacı üzerine tasarlanır.",
  "about.s3.alt":
    "Bölgeler arasındaki ticaret rotalarını temsil eden uluslararası lojistik merkezi",
  "about.values.eyebrow": "Yaklaşımımız",
  "about.values.title": "Nasıl Çalışırız",
  "about.v1.t": "Özel Çözümler",
  "about.v1.d": "Her işlem ürününüz, pazarınız ve zaman çizelgeniz etrafında tasarlanır.",
  "about.v2.t": "Şeffaf İletişim",
  "about.v2.d": "Tek muhatap, dürüst güncellemeler ve net evrak.",
  "about.v3.t": "Uyum Odaklı",
  "about.v3.d": "Çalışma, uygulanabilir uluslararası ticaret düzenlemeleri çerçevesinde yapılır.",
  "about.v4.t": "Uzun Vadeli İlişkiler",
  "about.v4.d": "Tekrarlayan iş için tasarlanmış ticari ilişkiler kuruyoruz.",

  "heating.page.title": "Türkiye'den Isıtma Ekipmanları",
  "heating.page.lead":
    "Türk üreticilerden doğrudan tedarik edilen, ihracat, evrak ve sevkiyat koordinasyonuyla toptan konut ve ticari ısıtma ekipmanları.",
  "heating.cat.title": "Ürün Kategorileri",
  "heating.cat.boilers.t": "Kombiler",
  "heating.cat.boilers.d": "Duvar tipi, yoğuşmalı ve yer tipi modeller.",
  "heating.cat.wh.t": "Şofbenler",
  "heating.cat.wh.d": "Elektrikli, gazlı ve hibrit modeller.",
  "heating.cat.rad.t": "Radyatörler",
  "heating.cat.rad.d": "Panel radyatörler ve havlupanlar.",
  "heating.cat.res.t": "Konut Isıtma",
  "heating.cat.res.d": "Daire ve konutlar için komple çözümler.",
  "heating.cat.com.t": "Ticari Isıtma",
  "heating.cat.com.d": "Bina ve endüstriyel projeler için sistemler.",
  "heating.cat.ws.t": "Toptan Tedarik",
  "heating.cat.ws.d": "Doğrudan konteyner ve parti sevkiyatları.",
  "heating.for.title": "Kimler İçin",
  "heating.for.d1": "İstikrarlı Türk tedarikçi arayan distribütörler.",
  "heating.for.d2": "BDT, Avrupa ve Asya ile çalışan ticaret şirketleri.",
  "heating.for.d3": "Ekipman partisi gerektiren inşaat projeleri.",
  "heating.cta.full": "Isıtma Ekipmanı Tedariki Talep Et",

  "network.page.title": "Küresel Ticaret Ağı",
  "network.page.lead":
    "Kilit uluslararası pazarlarda güvenilir iş ortakları ve ticaret rotalarını birbirine bağlıyoruz.",
  "network.regions.title": "Faaliyet Bölgeleri",
  "network.canada.d": "Ottawa, Ontario — Kanada ve Kuzey Amerika koordinasyonu için yasal varlık.",
  "network.turkiye.d":
    "İstanbul, Bursa ve endüstriyel bölgelerde üretici iş ortakları ve lojistik.",
  "network.europe.d": "Ana Avrupa düğüm noktalarında ortak depolar ve lojistik sağlayıcıları.",
  "network.cis.d": "Evrak ve gümrük iş ortakları için BDT ülkelerinde yerel koordinatörler.",
  "network.asia.d": "Asyalı üreticiler ve merkezlerle tedarik ve koordinasyon.",
  "network.disclaimer":
    "Bölgeler operasyonel ve iş ortağı ağını yansıtır — mutlaka şirkete ait ofis veya tesisleri değil.",
  "network.intelligence": "Küresel Rota İstihbaratı",
  "network.corridor": "Kıtalar arası iş ortağı koridoru",
  "network.active": "Aktif ağ",
  "network.map.title": "Etkileşimli küresel ticaret ağı haritası",
  "network.map.description":
    "Türkiye, Kanada, Avrupa, BDT ve Asya'yı birbirine bağlayan merkezdir. Ayrıntılar için bir bölge seçin.",
  "network.select": "Bölge seç",
  "network.corridor.label": "Türkiye bağlantı koridoru",
  "network.route.status": "Rota durumu",
  "network.route.open": "Operasyonel",
  "network.region.profile": "Bölge profili",

  "quote.page.title": "Teklif Talep Et",
  "quote.page.lead": "Talebinizi bize anlatın — Solvareya ekibi sonraki adımlarla size dönecektir.",
  "quote.section.company": "Şirket Bilgileri",
  "quote.section.requirement": "Talep Bilgileri",
  "quote.f.origin": "Menşe ülke",
  "quote.f.destination": "Varış ülkesi",
  "quote.f.quantity": "Tahmini miktar",
  "quote.f.opt.sourcing": "Uluslararası Sorssing",
  "quote.f.opt.trade": "Diğer ticaret talebi",

  "contact.page.title": "Bize Ulaşın",
  "contact.page.lead":
    "Uluslararası ticari yazışmalar İngilizce, Türkçe ve Rusça olarak kabul edilir.",
  "contact.help.title": "Nasıl Yardımcı Olabiliriz",
  "contact.help.d1": "Isıtma ekipmanı ve endüstriyel ürün tedarik talepleri.",
  "contact.help.d2": "Brokerlik, re-export ve alternatif ticaret çözümleri.",
  "contact.help.d3": "Üreticiler, distribütörler ve ticaret şirketleriyle iş ortaklığı.",
  "contact.response":
    "İş taleplerine birkaç iş günü içinde yanıt vermeyi hedefliyoruz. Yanıt süresi talebin karmaşıklığına göre değişir; kesin yanıt süresi garantisi verilmez.",

  "services.s4.t": "Uluslararası Sorssing",
  "services.s4.d":
    "Üretici araştırması, ticari teklif karşılaştırması ve gereksinimlerinize göre tedarik koordinasyonu.",
  "services.sourcing.title": "Uluslararası Sorssing Desteği",
  "services.sourcing.body":
    "Müşterilerimize güvenilir üretici bulma ve hedef pazarları için tedarik koordinasyonu konusunda yardımcı oluyoruz — tedarikçi araştırmasından sevkiyat takibine kadar.",
  "services.sourcing.li1": "Üretici araştırması ve doğrulama",
  "services.sourcing.li2": "Ticari teklif karşılaştırması ve müzakere",
  "services.sourcing.li3": "Spesifikasyon ve üretim gereklilikleri koordinasyonu",
  "services.sourcing.li4": "Sevkiyat planlaması ve evrak desteği",
};

const ru: Dict = {
  "meta.home.title": "Solvareya Group | Международная торговля и снабжение",
  "meta.home.desc":
    "Solvareya Group предоставляет решения в области международного снабжения, реэкспорта, координации торговли, поставок отопительного оборудования и логистики между Канадой, Турцией, Европой, СНГ и Азией.",
  "meta.services.title": "Услуги — Solvareya Group Ltd.",
  "meta.services.desc":
    "Брокеридж и реэкспорт, альтернативные торговые решения, складские услуги с добавленной стоимостью. Координация международной торговли с учётом требований комплаенса.",
  "meta.privacy.title": "Политика конфиденциальности — Solvareya Group Ltd.",
  "meta.privacy.desc": "Как Solvareya Group Ltd. обрабатывает обращения и персональные данные.",
  "meta.terms.title": "Условия использования — Solvareya Group Ltd.",
  "meta.terms.desc": "Условия использования сайта Solvareya Group Ltd.",
  "meta.notfound.title": "Страница не найдена — Solvareya",
  "meta.notfound.desc": "Запрашиваемая страница не найдена.",

  "nav.home": "Главная",
  "nav.about": "О компании",
  "nav.services": "Услуги",
  "nav.heating": "Отопительное оборудование",
  "nav.network": "Глобальная сеть",
  "nav.contact": "Контакты",
  "nav.quote": "Запросить расчёт",
  "nav.approach": "Подход",
  "nav.reach": "География",
  "nav.menu": "Меню",
  "nav.close": "Закрыть",

  "hero.eyebrow": "Международная B2B-торговля · Оттава, Канада",
  "hero.title": "Умные маршруты. Торговля без границ.",
  "hero.title.line1": "Умные маршруты.",
  "hero.title.line2": "Торговля без границ.",
  "hero.subtitle":
    "Мы выстраиваем индивидуальные торговые маршруты между Канадой, Турцией, Европой, СНГ и Азией — координируем закупки, документацию и логистику так, чтобы товар шёл прозрачно и под контролем.",
  "hero.cta.quote": "Запросить расчёт",
  "hero.cta.services": "Наши услуги",
  "hero.scroll": "Ниже",

  "heating.eyebrow": "Отопительное оборудование · Турция",
  "heating.title": "Отопительное оборудование от турецких производителей",
  "heating.body":
    "Оптовые поставки котлов, водонагревателей, радиаторов и решений для жилого и коммерческого отопления. Мы работаем напрямую с проверенными турецкими производителями, адаптируем спецификации под ваш рынок и организуем прямые отгрузки из Турции.",
  "heating.b1.t": "Котлы и системы отопления",
  "heating.b1.d":
    "Настенные, конденсационные и напольные модели для жилых и коммерческих объектов.",
  "heating.b2.t": "Водонагреватели и накопители",
  "heating.b2.d": "Электрические, газовые и гибридные водонагреватели под задачи проекта.",
  "heating.b3.t": "Радиаторы и распределение",
  "heating.b3.d": "Панельные радиаторы, полотенцесушители и компоненты распределения тепла.",
  "heating.cta": "Запросить расчёт на отопление",

  "value.eyebrow": "Почему Solvareya",
  "value.title": "Соединяем рынки через Турцию — стратегический мост между континентами.",
  "value.body":
    "Международная торговля редко идёт по прямой. Мы выстраиваем маршруты, учитывающие реальность закупок, регулирования и логистики, используя положение Турции между Европой, Азией и Ближним Востоком для клиентов в Канаде, СНГ и других регионах.",
  "value.p1.t": "Индивидуально, не по шаблону",
  "value.p1.d": "Каждый маршрут строится под ваш товар, рынок и сроки.",
  "value.p2.t": "Полный цикл координации",
  "value.p2.d": "Закупки, документация и логистика — единый рабочий процесс.",
  "value.p3.t": "Прозрачность на каждом шаге",
  "value.p3.d": "Прямая связь, понятные обновления и чёткая ответственность.",

  "services.eyebrow": "Услуги",
  "services.title": "Что мы делаем для международных клиентов",
  "services.s1.t": "Брокеридж и реэкспорт",
  "services.s1.d":
    "Координация торговли между производителями и покупателями с вниманием к документации, маршрутам и требованиям комплаенса.",
  "services.s2.t": "Альтернативные торговые решения",
  "services.s2.d":
    "Законные и прозрачные схемы маршрутизации для сложных рынков — в рамках международных торговых норм.",
  "services.s3.t": "Складские и вспомогательные услуги",
  "services.s3.d":
    "Координация хранения, консолидации, маркировки и подготовки через партнёрские склады, соответствующие вашему маршруту.",
  "services.learn": "Подробнее",

  "process.eyebrow": "Как работает Solvareya",
  "process.title": "Прозрачный процесс из четырёх шагов",
  "process.subtitle":
    "От первого разговора до доставленного груза каждый этап задокументирован, скоординирован и понятен.",
  "process.s1.t": "Понять задачу",
  "process.s1.d": "Разбираем товар, направление, объём, сроки и регуляторные аспекты.",
  "process.s2.t": "Построить маршрут",
  "process.s2.d": "Проектируем схему закупок, логистики и партнёрскую структуру под ваш случай.",
  "process.s3.t": "Документация и логистика",
  "process.s3.d":
    "Координируем коммерческие документы, таможенные бумаги и фрахт — при необходимости с лицензированными брокерами.",
  "process.s4.t": "Доставка с контролем",
  "process.s4.d": "Отслеживаем груз и держим вас в курсе до прибытия в пункт назначения.",

  "reach.eyebrow": "География",
  "reach.title": "Международная партнёрская сеть",
  "reach.subtitle":
    "Solvareya работает через сеть партнёров и координаторов. Ниже — регионы, где мы активно выстраиваем маршруты. Это не обязательно собственные офисы или склады компании.",
  "reach.canada": "Канада",
  "reach.turkiye": "Турция",
  "reach.europe": "Европа",
  "reach.cis": "СНГ",
  "reach.asia": "Азия",
  "reach.note": "Операционная сеть · покрытие через партнёров",

  "why.eyebrow": "Почему Solvareya",
  "why.title": "Для серьёзных международных покупателей",
  "why.1.t": "Индивидуальные торговые стратегии",
  "why.1.d": "Маршруты и условия под ваш товар и рынок.",
  "why.2.t": "Международная партнёрская сеть",
  "why.2.d": "Проверенные производители, брокеры и перевозчики в ключевых коридорах.",
  "why.3.t": "Координация документации",
  "why.3.d": "Аккуратная работа с коммерческими и отгрузочными документами.",
  "why.4.t": "Ориентация на рынок",
  "why.4.d": "Рекомендации, основанные на реальности вашего рынка.",
  "why.5.t": "Понятная коммуникация",
  "why.5.d": "Один контактный человек, своевременные обновления и честные ответы.",
  "why.6.t": "Комплаенс-ориентированный подход",
  "why.6.d": "Работа выстраивается в рамках применимых международных торговых норм.",

  "quote.eyebrow": "Запросить расчёт",
  "quote.title": "Расскажите о вашей задаче",
  "quote.subtitle": "Заполните несколько полей — мы вернёмся к вам со следующими шагами.",
  "quote.f.first": "Имя",
  "quote.f.last": "Фамилия",
  "quote.f.company": "Название компании",
  "quote.f.email": "Корпоративный e-mail",
  "quote.f.phone": "Телефон",
  "quote.f.country": "Страна",
  "quote.f.service": "Необходимая услуга",
  "quote.f.product": "Товар или требование",
  "quote.f.message": "Сообщение",
  "quote.f.consent":
    "Я согласен на обработку указанных данных компанией Solvareya для ответа на моё обращение.",
  "quote.f.submit": "Отправить запрос",
  "quote.f.submitting": "Отправляем…",
  "quote.f.select": "Выберите вариант",
  "quote.f.opt.brokerage": "Брокеридж и реэкспорт",
  "quote.f.opt.alternative": "Альтернативные торговые решения",
  "quote.f.opt.warehousing": "Складские услуги",
  "quote.f.opt.heating": "Отопительное оборудование",
  "quote.f.opt.other": "Другое / пока не уверен",
  "quote.success.title": "Спасибо — ваш запрос получен.",
  "quote.success.body": "Мы свяжемся с вами по указанному корпоративному e-mail.",
  "quote.success.again": "Отправить ещё один запрос",
  "quote.error": "Что-то пошло не так. Пожалуйста, попробуйте ещё раз через минуту.",

  "val.required": "Это поле обязательно.",
  "val.email": "Введите корректный корпоративный e-mail.",
  "val.min": "Пожалуйста, добавьте больше деталей.",
  "val.consent": "Подтвердите согласие, чтобы продолжить.",

  "footer.tag": "Smart Routes. Seamless Trade.",
  "footer.company": "Компания",
  "footer.services": "Услуги",
  "footer.legal": "Правовое",
  "footer.contact": "Контакты",
  "footer.privacy": "Политика конфиденциальности",
  "footer.terms": "Условия использования",
  "footer.location": "Оттава, Онтарио, Канада",
  "footer.rights": "© 2026 Solvareya Group Ltd. Все права защищены.",

  "lang.label": "Язык",
  "lang.en": "English",
  "lang.tr": "Türkçe",
  "lang.ru": "Русский",

  "404.title": "Страница не найдена",
  "404.body": "Запрашиваемая страница не существует или была перемещена.",
  "404.home": "Вернуться на главную",

  "services.page.title": "Наши услуги",
  "services.page.subtitle":
    "Услуги международной торговли под ключ — с ориентацией на комплаенс и одной командой на всех этапах.",
  "services.brokerage.title": "Брокеридж и реэкспорт",
  "services.brokerage.body":
    "Координируем торговлю между производителями и покупателями в разных странах. Наша роль — спроектировать коммерческий маршрут, подготовить и провести документацию, работать с лицензированными таможенными брокерами и логистическими партнёрами. Вся деятельность выстраивается в рамках международных правил торговли и применимого экспортного контроля.",
  "services.brokerage.li1": "Поиск производителей и координация коммерческих предложений",
  "services.brokerage.li2": "Поддержка по контрактам, счетам и коммерческой документации",
  "services.brokerage.li3":
    "Взаимодействие с лицензированными брокерами по таможенным формальностям",
  "services.brokerage.li4": "Планирование маршрутов реэкспорта и координация фрахта",
  "services.alt.title": "Альтернативные торговые решения",
  "services.alt.body":
    "Для клиентов, работающих со сложными рынками или нестандартными товарными потоками, мы разрабатываем альтернативные, но полностью законные маршруты. Каждое решение прорабатывается с учётом санкционных режимов, экспортного контроля и норм страны назначения.",
  "services.alt.li1": "Проектирование маршрутов для сложных пар источник–назначение",
  "services.alt.li2": "Документальная стратегия для многозвеньевых поставок",
  "services.alt.li3": "Взаимодействие с юристами и лицензированными брокерами при необходимости",
  "services.alt.li4": "Прозрачные и проверяемые процессы",
  "services.wh.title": "Складские и вспомогательные услуги",
  "services.wh.body":
    "Через партнёрские площадки мы координируем хранение, консолидацию и подготовительные услуги, соответствующие вашему маршруту. Solvareya не заявляет о собственных складах — мощности предоставляются проверенными сторонними операторами.",
  "services.wh.li1": "Кратко- и среднесрочное хранение на партнёрских складах",
  "services.wh.li2": "Консолидация, паллетирование и переупаковка",
  "services.wh.li3": "Маркировка и лёгкая предпродажная подготовка",
  "services.wh.li4": "Передача грузов дальнейшим логистическим партнёрам",
  "services.compliance.title": "О комплаенсе",
  "services.compliance.body":
    "Solvareya Group Ltd. выстраивает свою работу в рамках применимых международных торговых норм, включая релевантные санкционные режимы и экспортный контроль. Мы не предлагаем и не участвуем в схемах, направленных на обход санкций или применимого законодательства. Отдельные регулируемые действия — таможенное оформление, юридические консультации, лицензированный брокеридж — выполняются соответствующими лицензированными сторонами.",

  "privacy.title": "Политика конфиденциальности",
  "privacy.updated": "Обновлено: 2026",
  "privacy.p1":
    "Solvareya Group Ltd. («Solvareya», «мы») уважает конфиденциальность компаний и лиц, обращающихся к нам. На этой странице простыми словами описано, какую информацию мы собираем через сайт и как её используем.",
  "privacy.p2":
    "При отправке формы на сайте мы собираем указанные вами данные — имя, компанию, корпоративный e-mail, телефон, страну и сообщение. Эти данные используются исключительно для ответа на ваше обращение и последующей деловой переписки.",
  "privacy.p3":
    "Мы не продаём персональные данные и не используем сайт для поведенческой рекламы. Отправленная информация хранится в защищённой инфраструктуре и доступна только уполномоченным сотрудникам Solvareya.",
  "privacy.p4":
    "Вы можете запросить исправление или удаление своих данных, написав на info@solvareya.com.",

  "terms.title": "Условия использования",
  "terms.updated": "Обновлено: 2026",
  "terms.p1":
    "Информация на этом сайте носит общий характер и не является юридической, таможенной, налоговой или финансовой консультацией. Ничто на сайте не должно восприниматься как гарантия доставки, регуляторного одобрения или коммерческого результата.",
  "terms.p2":
    "Solvareya Group Ltd. выстраивает свои услуги в рамках применимых международных торговых норм. Отдельные регулируемые действия — таможенное оформление, юридические консультации, лицензированный брокеридж — выполняются соответствующими лицензированными сторонами.",
  "terms.p3":
    "Используя сайт, вы соглашаетесь, что Solvareya не несёт ответственности за решения, принятые на основании общей информации сайта без отдельного письменного соглашения.",

  "meta.about.title": "О компании — Solvareya Group Ltd.",
  "meta.about.desc":
    "О Solvareya Group Ltd. — международная B2B-торговля, ориентированная на комплаенс, и стратегическая позиция Турции между Востоком и Западом.",
  "meta.heating.title": "Отопительное оборудование из Турции — Solvareya Group Ltd.",
  "meta.heating.desc":
    "Оптовые поставки котлов, водонагревателей, радиаторов и решений жилого и коммерческого отопления от турецких производителей.",
  "meta.network.title": "Глобальная торговая сеть — Solvareya Group Ltd.",
  "meta.network.desc":
    "Международная партнёрская сеть Solvareya, соединяющая Канаду, Турцию, Европу, СНГ и Азию.",
  "meta.contact.title": "Контакты — Solvareya Group Ltd.",
  "meta.contact.desc": "Свяжитесь с Solvareya Group Ltd. в Оттаве, Онтарио, Канада.",
  "meta.quote.title": "Запросить расчёт — Solvareya Group Ltd.",
  "meta.quote.desc":
    "Отправьте детали вашего запроса — мы вернёмся с предложением по международным торговым решениям.",

  "footer.desc":
    "Международная B2B-торговля, соединяющая производителей, дистрибьюторов и предприятия на глобальных рынках.",
  "footer.getintouch": "Связаться",

  "home.intro.eyebrow": "О Solvareya",
  "home.intro.title": "Стратегические торговые решения между Востоком и Западом.",
  "home.intro.body":
    "Из Оттавы мы координируем международные торговые маршруты, используя стратегическое положение Турции между Европой, Азией и Ближним Востоком. Мы работаем с производителями, дистрибьюторами и предприятиями, которым нужны прозрачные, проверяемые и адаптированные решения.",
  "home.intro.cta": "О нас",
  "home.intro.map.alt":
    "Редакционная карта мира с торговыми маршрутами между Канадой, Турцией, Европой, СНГ и Азией",

  "home.preview.services.eyebrow": "Услуги",
  "home.preview.services.title": "Что мы делаем",
  "home.preview.services.cta": "Все услуги",
  "home.preview.heating.eyebrow": "Отопление из Турции",
  "home.preview.heating.cta": "Отопительное оборудование",
  "home.preview.network.eyebrow": "Глобальная сеть",
  "home.preview.network.cta": "Наша сеть",

  "about.hero.eyebrow": "О компании",
  "about.hero.title": "Стратегические торговые решения из Канады, работающие через Турцию.",
  "about.hero.lead":
    "Solvareya Group Ltd. — международная B2B-торговая компания, координирующая закупки, документацию и логистику между Канадой, Турцией, Европой, СНГ и Азией.",
  "about.s1.t": "Кто мы",
  "about.s1.d":
    "Solvareya — независимая торговая компания, зарегистрированная в Канаде. Мы обслуживаем производителей, дистрибьюторов и предприятия, которым нужны структурированные, прозрачные и юридически корректные международные торговые маршруты.",
  "about.s1.alt": "Грузовое судно и краны в международном торговом порту",
  "about.s2.t": "Позиция Турции",
  "about.s2.d":
    "Турция географически и коммерчески расположена между Европой, Азией, Ближним Востоком и СНГ. Мы используем эту позицию для разработки практических маршрутов для наших клиентов — от производителей отопительного оборудования до промышленных поставщиков.",
  "about.s2.alt": "Торговый коридор Босфора, соединяющий европейскую и азиатскую части Турции",
  "about.s3.t": "Рынки и регионы",
  "about.s3.d":
    "Мы активно выстраиваем торговые маршруты между Канадой, Турцией, Европой, СНГ и Азией. Каждый маршрут проектируется под конкретную задачу клиента, а не по универсальному шаблону.",
  "about.s3.alt":
    "Международный логистический узел, представляющий торговые маршруты между регионами",
  "about.values.eyebrow": "Наш подход",
  "about.values.title": "Как мы работаем",
  "about.v1.t": "Индивидуальные решения",
  "about.v1.d": "Каждая сделка проектируется под ваш продукт, рынок и сроки.",
  "about.v2.t": "Прозрачная коммуникация",
  "about.v2.d": "Один контактный человек, честные обновления и понятная документация.",
  "about.v3.t": "Ориентация на комплаенс",
  "about.v3.d": "Работа выстраивается в рамках применимых международных торговых норм.",
  "about.v4.t": "Долгосрочные отношения",
  "about.v4.d": "Мы строим коммерческие отношения, рассчитанные на повторный бизнес.",

  "heating.page.title": "Отопительное оборудование из Турции",
  "heating.page.lead":
    "Оптовые поставки жилого и коммерческого отопительного оборудования — напрямую от проверенных турецких производителей, с координацией экспорта, документации и отгрузки.",
  "heating.cat.title": "Категории продукции",
  "heating.cat.boilers.t": "Котлы",
  "heating.cat.boilers.d": "Настенные, конденсационные и напольные модели.",
  "heating.cat.wh.t": "Водонагреватели",
  "heating.cat.wh.d": "Электрические, газовые и гибридные модели.",
  "heating.cat.rad.t": "Радиаторы",
  "heating.cat.rad.d": "Панельные радиаторы и полотенцесушители.",
  "heating.cat.res.t": "Жилое отопление",
  "heating.cat.res.d": "Комплексные решения для квартир и домов.",
  "heating.cat.com.t": "Коммерческое отопление",
  "heating.cat.com.d": "Системы для зданий и промышленных объектов.",
  "heating.cat.ws.t": "Оптовые поставки",
  "heating.cat.ws.d": "Прямые отгрузки контейнерами и партиями.",
  "heating.for.title": "Для кого",
  "heating.for.d1": "Дистрибьюторы, которые ищут стабильных турецких поставщиков.",
  "heating.for.d2": "Торговые компании, работающие с СНГ, Европой и Азией.",
  "heating.for.d3": "Строительные проекты, требующие партий оборудования.",
  "heating.cta.full": "Запросить поставку отопительного оборудования",

  "network.page.title": "Глобальная торговая сеть",
  "network.page.lead":
    "Соединяем надёжных партнёров и торговые маршруты на ключевых международных рынках.",
  "network.regions.title": "Регионы работы",
  "network.canada.d":
    "Оттава, Онтарио — юридическое присутствие и координация с Канадой и Северной Америкой.",
  "network.turkiye.d":
    "Партнёры-производители и логистика в Стамбуле, Бурсе и промышленных регионах.",
  "network.europe.d": "Партнёрские склады и логистические провайдеры в ключевых европейских узлах.",
  "network.cis.d": "Локальные координаторы в странах СНГ для документации и таможенных партнёров.",
  "network.asia.d": "Поиск и координация с азиатскими производителями и хабами.",
  "network.disclaimer":
    "Регионы отражают операционную и партнёрскую сеть — не обязательно офисы или объекты, принадлежащие компании.",
  "network.intelligence": "Глобальная маршрутная аналитика",
  "network.corridor": "Межконтинентальный партнёрский коридор",
  "network.active": "Сеть активна",
  "network.map.title": "Интерактивная карта глобальной торговой сети",
  "network.map.description":
    "Турция — центральный узел, соединяющий Канаду, Европу, СНГ и Азию. Выберите регион для подробностей.",
  "network.select": "Выбрать регион",
  "network.corridor.label": "Связующий коридор Турции",
  "network.route.status": "Статус маршрута",
  "network.route.open": "Действует",
  "network.region.profile": "Профиль региона",

  "quote.page.title": "Запросить расчёт",
  "quote.page.lead":
    "Расскажите о вашем запросе — команда Solvareya свяжется со следующими шагами.",
  "quote.section.company": "Информация о компании",
  "quote.section.requirement": "Информация о запросе",
  "quote.f.origin": "Страна происхождения",
  "quote.f.destination": "Страна назначения",
  "quote.f.quantity": "Ориентировочный объём",
  "quote.f.opt.sourcing": "Международный сорсинг",
  "quote.f.opt.trade": "Другое торговое требование",

  "contact.page.title": "Свяжитесь с нами",
  "contact.page.lead":
    "Международная деловая переписка приветствуется на английском, турецком и русском языках.",
  "contact.help.title": "Как мы можем помочь",
  "contact.help.d1": "Запросы на поставку отопительного оборудования и промышленных товаров.",
  "contact.help.d2": "Брокеридж, реэкспорт и альтернативные торговые решения.",
  "contact.help.d3": "Партнёрство с производителями, дистрибьюторами и торговыми компаниями.",
  "contact.response":
    "Мы стараемся отвечать на деловые запросы в течение нескольких рабочих дней. Время ответа зависит от сложности и специфики запроса; гарантии времени ответа не предоставляются.",

  "services.s4.t": "Международный сорсинг",
  "services.s4.d":
    "Поиск производителей, сравнение коммерческих предложений и координация поставок по вашим требованиям.",
  "services.sourcing.title": "Международный сорсинг",
  "services.sourcing.body":
    "Мы помогаем клиентам находить надёжных производителей и координировать закупки для их конкретных рынков — от исследования поставщиков до сопровождения поставки.",
  "services.sourcing.li1": "Поиск и проверка производителей",
  "services.sourcing.li2": "Сравнение коммерческих предложений и переговоры",
  "services.sourcing.li3": "Координация спецификаций и производственных требований",
  "services.sourcing.li4": "Планирование отгрузок и документальная поддержка",
};

export const translations: Record<Locale, Dict> = { en, tr, ru };

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}
