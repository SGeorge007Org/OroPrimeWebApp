export interface Product { name: string; category: string; origin: string; use: string; margin: string; image: string; }
export interface Market {
  country: string;
  exports: number;
  imports: number | null;
  totalTrade: number | null;
  balance: number | null;
  exportShare?: number;
  importShare?: number;
  opportunity: string;
  focus: string;
  lane: string;
}
export interface Article { type: string; title: string; summary: string; image: string; meta: string; }
export interface TradeVideo { title: string; summary: string; embed: string; tag: string; }
export interface Testimonial { name: string; location: string; flag: string; role: string; product: string; quote: string; metric: string; avatar: number; avatarFile?: string; }
export interface GlobalExportLeader { country: string; exports: number; topGood: string; }

export const testimonialAvatarImages = [
  'https://commons.wikimedia.org/wiki/Special:FilePath/India%20-%20Faces%20-%20Rural%20Farmer%20in%20Tamil%20Nadu%20%285182306956%29.jpg?width=300',
  'https://commons.wikimedia.org/wiki/Special:FilePath/A%20happy%20farmer.jpg?width=300',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Indian%20Village%20Woman%20%2848874236808%29.jpg?width=300',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20an%20Indian%20village%20woman-%20LIFE.jpg?width=300',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Peoples%20from%20indian%20village%2028.jpg?width=300',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Potatofarmer.jpg?width=300',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Agriculture%20in%20India%2C%20Farmer%20Punjab.jpg?width=300',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Indian%20farmers%20at%20Gateway%20of%20India.png?width=300'
];

export const products: Product[] = [
  { name: 'Cashew Nuts', category: 'Agro', origin: 'Africa / India', use: 'Food processing, wholesale, retail packs', margin: 'High demand', image: 'assets/images/products/Cashew.jpg' },
  { name: 'Fresh Ginger', category: 'Agro', origin: 'India', use: 'Spices, food service, wellness supply chains', margin: 'Seasonal opportunity', image: 'assets/images/products/ginger.jpg' },
  { name: 'Scrap Metal', category: 'Industrial', origin: 'USA / Global', use: 'Steel mills, recycling, foundries', margin: 'Volume driven', image: 'assets/images/products/Scrap-metal.png' },
  { name: 'Agro Commodities', category: 'Agro', origin: 'India / Global', use: 'Importers, distributors, processors', margin: 'Market dependent', image: 'assets/images/products/rice.jpg' },
  { name: 'Baby Food', category: 'Food Export', origin: 'India / Global', use: 'Organic cereals, infant blends, private label packs', margin: 'Premium organic opportunity', image: 'assets/images/products/baby-food.jpg' },
  { name: 'Banana', category: 'Fresh Produce', origin: 'India / Global', use: 'Cold-chain exports, wholesale fresh fruit lanes', margin: 'Reefer container driven', image: 'assets/images/products/banana.jpg' },
  { name: 'Biofuel', category: 'Sustainable Energy', origin: 'India / Global', use: 'Used cooking oil, biodiesel, ethanol and feedstock', margin: 'ESG growth lane', image: 'assets/images/products/biofuel.jpg' },
  { name: 'Corn Silk', category: 'Wellness Export', origin: 'India / Global', use: 'Herbal tea, nutraceuticals, pharma and functional food', margin: 'High-margin niche', image: 'assets/images/products/corn-silk.jpg' },
  { name: 'Essential Oils', category: 'Natural Products', origin: 'India / Global', use: 'Aromatherapy, cosmetics, food, fragrance and wellness', margin: 'Purity-sensitive pricing', image: 'assets/images/products/essential-oils.jpg' },
  { name: 'Herbal Products', category: 'Wellness Export', origin: 'India / Global', use: 'Neem, aloe vera, extracts, capsules and private label', margin: 'Value-added brand lane', image: 'assets/images/products/herbal-products.jpg' },
  { name: 'Jewellery', category: 'Luxury Export', origin: 'India / Global', use: 'Gold, diamond, silver, fashion and gemstone jewellery', margin: 'Design-led premium lane', image: 'assets/images/products/jewellery.jpg' },
  { name: 'Leather Goods', category: 'Lifestyle Export', origin: 'India / Global', use: 'Belts, wallets, bags, card holders and accessories', margin: 'Craft and brand margin', image: 'assets/images/products/leather-goods.jpg' },
  { name: 'Lotus Fiber', category: 'Luxury Textile', origin: 'India / Global', use: 'Sustainable yarn, fabric, scarves and premium apparel', margin: 'Rare eco-luxury lane', image: 'assets/images/products/lotus-fiber.jpg' },
  { name: 'Makhana', category: 'Superfood Export', origin: 'India / Global', use: 'Healthy snacks, retail packs, premium dry-food importers', margin: 'Fast-growing superfood', image: 'assets/images/products/makhana.jpg' },
  { name: 'Moringa Powder', category: 'Wellness Export', origin: 'India / Global', use: 'Nutraceuticals, teas, capsules, animal feed and cosmetics', margin: 'Superfood value-add', image: 'assets/images/products/moringa-powder.jpg' },
  { name: 'Premium Tea', category: 'Beverage Export', origin: 'India / Global', use: 'Darjeeling, Assam, CTC, orthodox and specialty tea', margin: 'Grade and origin premium', image: 'assets/images/products/premium-tea.jpg' },
  { name: 'Rice', category: 'Staple Commodity', origin: 'India / Global', use: 'Basmati, non-basmati, bulk importers and distributors', margin: 'Container-volume lane', image: 'assets/images/products/rice.jpg' }
];

export const markets: Market[] = [
  { country: 'United States', exports: 88.02, imports: 43.01, totalTrade: 130.30, balance: 45.01, exportShare: 17.73, importShare: 6.04, opportunity: 'Largest single-country export lane with strong buyer purchasing power.', focus: 'Agro, metals, specialty sourcing', lane: 'Export-led corridor' },
  { country: 'China', exports: 16.66, imports: 101.75, totalTrade: 118.41, balance: -85.09, exportShare: 3.81, importShare: 15.06, opportunity: 'Largest import source, useful for benchmarking pricing and supply competition.', focus: 'Industrial inputs, machinery, raw materials', lane: 'Import-heavy corridor' },
  { country: 'United Arab Emirates', exports: 35.63, imports: 48.02, totalTrade: 83.65, balance: -12.39, exportShare: 8.15, importShare: 7.11, opportunity: 'High-velocity GCC and re-export hub for food, metals and commodity flows.', focus: 'Food, metals, logistics', lane: 'Regional hub corridor' },
  { country: 'Russia', exports: 4.26, imports: 61.43, totalTrade: 65.69, balance: -57.17, opportunity: 'Energy-led trade lane with major import exposure and selective export demand.', focus: 'Energy, industrial materials', lane: 'Import-heavy corridor' },
  { country: 'Saudi Arabia', exports: 11.56, imports: 31.81, totalTrade: 43.37, balance: -20.25, exportShare: 2.65, importShare: 4.71, opportunity: 'GCC buyer base with demand for food products and commodity-linked trade.', focus: 'Agro, food, energy-linked trade', lane: 'GCC corridor' },
  { country: 'Singapore', exports: 14.41, imports: 21.20, totalTrade: 35.61, balance: -6.79, exportShare: 3.30, importShare: 3.14, opportunity: 'Southeast Asian distribution hub with strong re-export and logistics relevance.', focus: 'Logistics, industrial goods, re-export', lane: 'ASEAN hub corridor' },
  { country: 'Netherlands', exports: 21.01, imports: null, totalTrade: null, balance: null, exportShare: 5.12, opportunity: 'European gateway for Indian goods and distribution into EU markets.', focus: 'Agro, industrial goods, EU distribution', lane: 'Export gateway' },
  { country: 'Bangladesh', exports: 10.43, imports: null, totalTrade: null, balance: null, exportShare: 2.53, opportunity: 'Nearby high-frequency trade lane for agro and industrial supply.', focus: 'Agro and industrial supply', lane: 'Regional export lane' },
  { country: 'Germany', exports: 9.51, imports: null, totalTrade: null, balance: null, exportShare: 2.25, opportunity: 'Quality-led European buyer market for certified and well-documented supply chains.', focus: 'Certified supply chains, industrial goods', lane: 'EU quality corridor' }
];

export const articles: Article[] = [
  { type: 'Case Study', title: 'Premium Cashew Import Business', summary: 'Raw cashew sourcing, duties, shipment economics, documents and margin snapshot for India import planning.', image: 'assets/images/Cashew-Case-Study.png', meta: 'Cashew imports' },
  { type: 'Case Study', title: 'Premium Ginger Export Business', summary: 'Market overview, export products, price ranges, compliance, risk mitigation and process flow for ginger exports.', image: 'assets/images/Ginger-Case-Study.png', meta: 'Ginger exports' },
  { type: 'Case Study', title: 'Premium Scrap Metal Import Business', summary: 'Source countries, scrap categories, CIF values, customs duty, inspection needs and profitability outlook.', image: 'assets/images/Scrap-Case-Study.png', meta: 'Scrap imports' },
  { type: 'Case Study', title: 'Premium Baby Food Export Business', summary: 'Organic cereal, fruit puree, certification, packaging and private-label export model.', image: 'assets/images/case-studies/BabyFood_Case_Study.png', meta: 'Food exports' },
  { type: 'Case Study', title: 'Premium Banana Export Business', summary: 'Fresh banana varieties, reefer logistics, quality grades and global destination planning.', image: 'assets/images/case-studies/Banana_Case_Study.png', meta: 'Fresh produce' },
  { type: 'Case Study', title: 'Premium Biofuel Export Business', summary: 'Used cooking oil, biodiesel, ethanol, sustainable feedstock and ESG demand drivers.', image: 'assets/images/case-studies/BioFuel_Case_Study.png', meta: 'Sustainable energy' },
  { type: 'Case Study', title: 'Premium Corn Silk Export Business', summary: 'Corn silk tea, extract, powder, sourcing states, processing and niche wellness exports.', image: 'assets/images/case-studies/CornSlik_Case_Study.png', meta: 'Wellness exports' },
  { type: 'Case Study', title: 'Premium Essential Oils Export Business', summary: 'Sandalwood, lemongrass, citronella and eucalyptus oil export models and compliance.', image: 'assets/images/case-studies/EssentialOils_Case_Study.png', meta: 'Natural products' },
  { type: 'Case Study', title: 'Premium Herbal Products Export Business', summary: 'Neem and aloe vera product categories, quality factors, packaging and global demand.', image: 'assets/images/case-studies/HerbalProducts_NeemAloeVera_Case_Study.png', meta: 'Herbal products' },
  { type: 'Case Study', title: 'Premium Jewellery Export Business', summary: 'Gold, diamond, silver, fashion and gemstone jewellery export business models.', image: 'assets/images/case-studies/Jewelry_Case_Study.png', meta: 'Jewellery exports' },
  { type: 'Case Study', title: 'Premium Leather Goods Export Business', summary: 'Belts, wallets, card holders, key chains and bags with craft-led export positioning.', image: 'assets/images/case-studies/Leather_Case_Study.png', meta: 'Leather goods' },
  { type: 'Case Study', title: 'Premium Lotus Fiber Export Business', summary: 'Luxury textile opportunities across raw lotus fiber, yarn, fabric and scarves.', image: 'assets/images/case-studies/LotusFiber_Case_Study.png', meta: 'Luxury textiles' },
  { type: 'Case Study', title: 'Premium Makhana Export Business', summary: 'Makhana varieties, export grades, healthy snack demand and container profitability.', image: 'assets/images/case-studies/Makhana_Case_Study.png', meta: 'Superfood exports' },
  { type: 'Case Study', title: 'Premium Moringa Powder Export Business', summary: 'Moringa powder grades, applications, quality factors and wellness export potential.', image: 'assets/images/case-studies/MuringaPowder_Case_Study.png', meta: 'Superfood exports' },
  { type: 'Case Study', title: 'Premium Tea Export Business', summary: 'Darjeeling, Assam, CTC, green and specialty tea export forms and quality factors.', image: 'assets/images/case-studies/PremiumTea_Case_Study.png', meta: 'Tea exports' },
  { type: 'Case Study', title: 'Premium Rice Export Business', summary: 'Basmati and non-basmati rice exports, top destinations, documentation and logistics.', image: 'assets/images/case-studies/Rice_Case_Study.png', meta: 'Rice exports' }
];

export const tradeVideos: TradeVideo[] = [
  { title: 'Import-export business basics', summary: 'A beginner-friendly overview of international trade workflows and business setup thinking.', embed: 'https://www.youtube.com/embed/o3BNXCKGBpg', tag: 'Trade basics' },
  { title: 'Shipping container types', summary: 'Container formats, LCL/FCL thinking and logistics considerations for import-export shipments.', embed: 'https://www.youtube.com/embed/BQhSuUgsLs4', tag: 'Logistics' },
  { title: 'How container shipping works', summary: 'A concise look at how container movement supports global export and import operations.', embed: 'https://www.youtube.com/embed/YfDFKgGNP6s', tag: 'Shipping' }
];

const testimonialsBase: Testimonial[] = [
  { name: 'Aarav N.', location: 'India', flag: '🇮🇳', role: 'Importer', product: 'Cashew import', quote: 'OroPrime helped us turn a broad raw-cashew inquiry into a clean landed-cost view with supplier checks, duty notes and container assumptions.', metric: 'Quote-ready in 72 hours', avatar: 0 },
  { name: 'Maya R.', location: 'United States', flag: '🇺🇸', role: 'Supplier', product: 'Scrap metal export', quote: 'The team clarified grade, inspection, pickup terms and buyer documentation before pricing, which reduced back-and-forth with overseas mills.', metric: '3 verified buyer lanes', avatar: 1 },
  { name: 'Hassan K.', location: 'Dubai, UAE', flag: '🇦🇪', role: 'Importer', product: 'Agro commodities', quote: 'Their market screening made it easier to compare agro shipments across ports and identify which products had realistic repeat demand.', metric: 'GCC-ready RFQ pack', avatar: 2 },
  { name: 'Prakash S.', location: 'Nepal', flag: '🇳🇵', role: 'Exporter', product: 'Ginger and agro trade', quote: 'The documentation checklist and regional trade-lane review helped us prepare buyer communication with confidence.', metric: 'Cleaner documentation flow', avatar: 4 },
  { name: 'Leila A.', location: 'Morocco', flag: '🇲🇦', role: 'Buyer', product: 'Fresh ginger', quote: 'The RFQ pack separated fresh, dry and powder ginger requirements so our team could compare prices without confusion.', metric: '4 product specs aligned', avatar: 5 },
  { name: 'Daniel P.', location: 'Canada', flag: '🇨🇦', role: 'Importer', product: 'Cashew kernels', quote: 'We got practical support on grade, pack size, origin and inspection expectations before supplier introductions started.', metric: 'W-320 lane prepared', avatar: 6 },
  { name: 'Meera V.', location: 'Singapore', flag: '🇸🇬', role: 'Supplier', product: 'Agro distribution', quote: 'OroPrime made our shipment story simple for overseas buyers with clear origin, quantity and destination assumptions.', metric: 'ASEAN buyer brief', avatar: 7 },
  { name: 'Thomas G.', location: 'Germany', flag: '🇩🇪', role: 'Buyer', product: 'Industrial materials', quote: 'Their documentation-first approach helped us screen suppliers before discussing final commercial terms.', metric: 'Reduced quote revisions', avatar: 8 },
  { name: 'Fatima S.', location: 'Saudi Arabia', flag: '🇸🇦', role: 'Importer', product: 'Food commodities', quote: 'We liked the way each product lane included compliance notes, shipment assumptions and next-step ownership.', metric: 'GCC sourcing file', avatar: 9 },
  { name: 'Wei L.', location: 'China', flag: '🇨🇳', role: 'Buyer', product: 'Scrap metal', quote: 'Material type, inspection and freight questions were handled early, making our mill review much faster.', metric: '2 mill-ready leads', avatar: 10 },
  { name: 'Nadia E.', location: 'Netherlands', flag: '🇳🇱', role: 'Importer', product: 'Agro commodities', quote: 'The EU gateway view helped us understand which products were worth deeper sourcing discussions.', metric: 'EU lane mapped', avatar: 11 },
  { name: 'Samuel B.', location: 'United Kingdom', flag: '🇬🇧', role: 'Buyer', product: 'Cashew retail packs', quote: 'OroPrime made supplier questions precise: grade, packaging, certificate needs and destination timing.', metric: 'Retail pack checklist', avatar: 12 },
  { name: 'Tenzin R.', location: 'Nepal', flag: '🇳🇵', role: 'Supplier', product: 'Ginger', quote: 'They translated buyer expectations into a realistic packing and documentation checklist for our team.', metric: 'Cleaner buyer response', avatar: 13 },
  { name: 'Emma C.', location: 'Australia', flag: '🇦🇺', role: 'Importer', product: 'Agro sourcing', quote: 'The trade-lane notes helped us compare India, GCC and Southeast Asia options before committing time.', metric: '3 corridors compared', avatar: 14 },
  { name: 'Raj K.', location: 'India', flag: '🇮🇳', role: 'Supplier', product: 'Cashew processing', quote: 'Buyer qualification improved because every inquiry came with destination, volume and preferred documentation.', metric: 'Better lead quality', avatar: 15 },
  { name: 'Sofia M.', location: 'Spain', flag: '🇪🇸', role: 'Importer', product: 'Agro commodities', quote: 'The market notes were direct and commercial, not generic. They helped us decide what to ask suppliers first.', metric: 'RFQ questions refined', avatar: 16 },
  { name: 'Carlos H.', location: 'Brazil', flag: '🇧🇷', role: 'Supplier', product: 'Commodity exports', quote: 'OroPrime helped present our origin, capacity and shipment assumptions in a buyer-friendly way.', metric: 'Supplier profile improved', avatar: 17 },
  { name: 'Aisha M.', location: 'UAE', flag: '🇦🇪', role: 'Buyer', product: 'Scrap metal', quote: 'The CIF and inspection discussion helped us avoid vague offers and focus on realistic material grades.', metric: 'Inspection path clear', avatar: 18 },
  { name: 'Noah T.', location: 'New Zealand', flag: '🇳🇿', role: 'Importer', product: 'Food ingredients', quote: 'Their sourcing file made our internal review easier because risk points and documents were already listed.', metric: 'Internal approval faster', avatar: 19 },
  { name: 'Yuki S.', location: 'Japan', flag: '🇯🇵', role: 'Buyer', product: 'Ginger products', quote: 'Fresh versus dry ginger requirements were separated clearly, making supplier comparison much easier.', metric: '2 formats shortlisted', avatar: 20 },
  { name: 'Grace W.', location: 'Kenya', flag: '🇰🇪', role: 'Supplier', product: 'Cashew origin', quote: 'OroPrime helped us explain origin, yield expectations and buyer documents before commercial negotiation.', metric: 'Origin story clarified', avatar: 21 },
  { name: 'Victor O.', location: 'Nigeria', flag: '🇳🇬', role: 'Supplier', product: 'Raw cashew', quote: 'The buyer-readiness checklist helped us prepare better documentation and avoid incomplete inquiries.', metric: 'Export file organized', avatar: 22 },
  { name: 'Linh P.', location: 'Vietnam', flag: '🇻🇳', role: 'Supplier', product: 'Cashew kernels', quote: 'Their team kept the discussion practical: grade, price range, pack size, shipment timing and certificates.', metric: 'Buyer deck improved', avatar: 23 },
  { name: 'Rania D.', location: 'Qatar', flag: '🇶🇦', role: 'Importer', product: 'Agro commodities', quote: 'We received a clear comparison of product options and market risks for GCC distribution.', metric: 'GCC risk view', avatar: 0 },
  { name: 'Ethan F.', location: 'United States', flag: '🇺🇸', role: 'Supplier', product: 'Ferrous scrap', quote: 'OroPrime made grade expectations and photos more structured before we approached overseas buyers.', metric: 'Material pack standardized', avatar: 1 },
  { name: 'Priya J.', location: 'India', flag: '🇮🇳', role: 'Exporter', product: 'Ginger export', quote: 'Their export process flow helped our team prepare documents and buyer communication in sequence.', metric: 'Shipment steps mapped', avatar: 2 },
  { name: 'Ahmed R.', location: 'Oman', flag: '🇴🇲', role: 'Buyer', product: 'Food imports', quote: 'The team helped us filter product interest into practical quantity and destination details.', metric: 'RFQ converted', avatar: 3 },
  { name: 'Isabella L.', location: 'Italy', flag: '🇮🇹', role: 'Importer', product: 'Cashew snacks', quote: 'We were able to compare cashew grades and packaging options before asking for final quotes.', metric: 'Grade shortlist ready', avatar: 4 },
  { name: 'Karma B.', location: 'Bhutan', flag: '🇧🇹', role: 'Buyer', product: 'Agro products', quote: 'OroPrime made regional sourcing easier by organizing supplier questions and documentation needs.', metric: 'Regional lane opened', avatar: 5 },
  { name: 'Liam D.', location: 'Ireland', flag: '🇮🇪', role: 'Importer', product: 'Agro commodities', quote: 'The country and port assumptions gave us a practical starting point for landed-cost review.', metric: 'Cost review started', avatar: 6 },
  { name: 'Chen M.', location: 'Malaysia', flag: '🇲🇾', role: 'Buyer', product: 'Industrial scrap', quote: 'The material category screen helped us avoid unsuitable offers and focus on workable scrap grades.', metric: 'Grade filter applied', avatar: 7 },
  { name: 'Zara T.', location: 'Turkey', flag: '🇹🇷', role: 'Importer', product: 'Ginger powder', quote: 'They helped us separate food-service requirements from retail packaging needs before supplier outreach.', metric: 'Two channels defined', avatar: 8 },
  { name: 'Peter N.', location: 'South Africa', flag: '🇿🇦', role: 'Supplier', product: 'Metal recycling', quote: 'OroPrime created a clearer buyer story around volume, pickup terms and inspection expectations.', metric: 'Buyer confidence raised', avatar: 9 },
  { name: 'Mina G.', location: 'South Korea', flag: '🇰🇷', role: 'Buyer', product: 'Aluminum scrap', quote: 'Their quote preparation checklist helped align specification, compliance and shipment questions.', metric: 'Spec review completed', avatar: 10 },
  { name: 'Hannah K.', location: 'Germany', flag: '🇩🇪', role: 'Importer', product: 'Certified supply', quote: 'We appreciated the emphasis on documents and inspection before price negotiation.', metric: 'Compliance first review', avatar: 11 },
  { name: 'Suresh T.', location: 'Sri Lanka', flag: '🇱🇰', role: 'Buyer', product: 'Agro imports', quote: 'The process was practical and quick. We knew exactly what information suppliers needed from us.', metric: 'Inquiry completed', avatar: 12 },
  { name: 'Amelia B.', location: 'France', flag: '🇫🇷', role: 'Importer', product: 'Cashew products', quote: 'The category notes made it easier to compare wholesale and retail-pack routes.', metric: 'Channel decision made', avatar: 13 },
  { name: 'Jamal Y.', location: 'UAE', flag: '🇦🇪', role: 'Supplier', product: 'Re-export trade', quote: 'OroPrime helped position our re-export capability with practical port and documentation notes.', metric: 'Hub story prepared', avatar: 14 },
  { name: 'Maria F.', location: 'Mexico', flag: '🇲🇽', role: 'Buyer', product: 'Food commodities', quote: 'We got a clear product checklist before spending time on supplier calls.', metric: 'Supplier calls focused', avatar: 15 },
  { name: 'Ibrahim C.', location: 'Egypt', flag: '🇪🇬', role: 'Importer', product: 'Ginger and spices', quote: 'Their guidance helped us think through seasonality, packing and compliance questions.', metric: 'Seasonal plan drafted', avatar: 16 },
  { name: 'Nora H.', location: 'Norway', flag: '🇳🇴', role: 'Buyer', product: 'Industrial sourcing', quote: 'The buyer file felt professional and gave our procurement team useful next steps.', metric: 'Procurement-ready notes', avatar: 17 },
  { name: 'Lucas V.', location: 'Chile', flag: '🇨🇱', role: 'Importer', product: 'Agro commodities', quote: 'OroPrime helped us compare route assumptions and product readiness across suppliers.', metric: 'Routes compared', avatar: 18 },
  { name: 'Reem A.', location: 'Kuwait', flag: '🇰🇼', role: 'Buyer', product: 'Food imports', quote: 'The team organized requirements well enough for us to request targeted quotes.', metric: 'Targeted quotes sent', avatar: 19 },
  { name: 'Henry S.', location: 'United Kingdom', flag: '🇬🇧', role: 'Supplier', product: 'Specialty sourcing', quote: 'They helped us present supply capacity with practical commercial assumptions.', metric: 'Profile sharpened', avatar: 20 },
  { name: 'Dawa L.', location: 'Nepal', flag: '🇳🇵', role: 'Supplier', product: 'Agro exports', quote: 'The buyer expectation notes helped us prepare a stronger introductory offer.', metric: 'Offer improved', avatar: 21 },
  { name: 'Elena P.', location: 'Portugal', flag: '🇵🇹', role: 'Importer', product: 'Cashew supply', quote: 'We could see the difference between raw cashew and kernel pricing workflows clearly.', metric: 'Pricing path clarified', avatar: 22 },
  { name: 'Omar N.', location: 'Bahrain', flag: '🇧🇭', role: 'Buyer', product: 'Agro distribution', quote: 'The GCC distribution view was useful for deciding which products to prioritize.', metric: 'Priority list created', avatar: 23 },
  { name: 'Sarah T.', location: 'Canada', flag: '🇨🇦', role: 'Supplier', product: 'Metal sourcing', quote: 'OroPrime made the buyer communication more structured and reduced repeated questions.', metric: 'Follow-up reduced', avatar: 0 },
  { name: 'Akira N.', location: 'Japan', flag: '🇯🇵', role: 'Importer', product: 'Cashew snacks', quote: 'The grade and packaging comparison helped us define a realistic buying brief.', metric: 'Buying brief ready', avatar: 1 },
  { name: 'Claire D.', location: 'New Zealand', flag: '🇳🇿', role: 'Importer', product: 'Ginger products', quote: 'The market guide made fresh, dry and powder ginger options easier to evaluate.', metric: 'Product route selected', avatar: 3 },
  { name: 'Bilal H.', location: 'UAE', flag: '🇦🇪', role: 'Buyer', product: 'Scrap metal', quote: 'We liked the early focus on inspection, customs and material authenticity.', metric: 'Risk screen complete', avatar: 4 },
  { name: 'Anita C.', location: 'Kenya', flag: '🇰🇪', role: 'Exporter', product: 'Cashew origin', quote: 'OroPrime helped us convert supplier details into a clearer buyer-facing presentation.', metric: 'Buyer presentation ready', avatar: 5 },
  { name: 'Mateo R.', location: 'Colombia', flag: '🇨🇴', role: 'Importer', product: 'Food commodities', quote: 'The sourcing notes gave us confidence to compare suppliers across regions.', metric: 'Supplier comparison live', avatar: 6 }
];

const indianProfiles = [
  { name: 'Rohit P.', location: 'Maharashtra, India', role: 'Exporter', product: 'Fresh ginger', avatarFile: 'person-001.jpg' },
  { name: 'Sita K.', location: 'Kerala, India', role: 'Supplier', product: 'Cashew kernels', avatarFile: 'person-002.jpg' },
  { name: 'Vikas R.', location: 'Delhi, India', role: 'Importer', product: 'Scrap metal', avatarFile: 'person-003.jpg' },
  { name: 'Arjun & Team', location: 'Gujarat, India', role: 'Buyer', product: 'Agro commodities', avatarFile: 'person-004.jpg' },
  { name: 'Nirmala T.', location: 'Tamil Nadu, India', role: 'Processor', product: 'Herbal products', avatarFile: 'person-005.jpg' },
  { name: 'Manoj B.', location: 'Bihar, India', role: 'Exporter', product: 'Makhana', avatarFile: 'person-006.jpg' },
  { name: 'Farhan A.', location: 'Uttar Pradesh, India', role: 'Supplier', product: 'Leather goods', avatarFile: 'person-007.jpg' },
  { name: 'Deepak M.', location: 'Karnataka, India', role: 'Supplier', product: 'Cashew kernels', avatarFile: 'person-008.jpg' },
  { name: 'Bhanwar S.', location: 'Rajasthan, India', role: 'Exporter', product: 'Leather goods', avatarFile: 'person-011.jpg' },
  { name: 'Ajay N.', location: 'Maharashtra, India', role: 'Buyer', product: 'Rice and grains', avatarFile: 'person-012.jpg' },
  { name: 'Kamala D.', location: 'West Bengal, India', role: 'Supplier', product: 'Rice and grains', avatarFile: 'person-013.jpg' },
  { name: 'Ishaan V.', location: 'Gujarat, India', role: 'Importer', product: 'Industrial scrap', avatarFile: 'person-014.jpg' },
  { name: 'Naveen K.', location: 'Andhra Pradesh, India', role: 'Supplier', product: 'Raw cashew', avatarFile: 'person-015.jpg' },
  { name: 'Mahesh L.', location: 'Rajasthan, India', role: 'Exporter', product: 'Jewellery', avatarFile: 'person-016.jpg' },
  { name: 'Pooja M.', location: 'Maharashtra, India', role: 'Buyer', product: 'Baby food', avatarFile: 'person-017.jpg' },
  { name: 'Gopal N.', location: 'Tamil Nadu, India', role: 'Supplier', product: 'Fresh ginger', avatarFile: 'person-018.jpg' },
  { name: 'Lakshmi R.', location: 'Karnataka, India', role: 'Processor', product: 'Cashew kernels', avatarFile: 'person-019.jpg' },
  { name: 'Raghav S.', location: 'Telangana, India', role: 'Exporter', product: 'Biofuel', avatarFile: 'person-020.jpg' },
  { name: 'Mei L.', location: 'Arunachal Pradesh, India', role: 'Buyer', product: 'Premium tea', avatarFile: 'person-048.jpg' },
  { name: 'Anjali W.', location: 'Assam, India', role: 'Supplier', product: 'Premium tea', avatarFile: 'person-022.jpg' },
  { name: 'Devendra J.', location: 'Madhya Pradesh, India', role: 'Supplier', product: 'Corn silk', avatarFile: 'person-023.jpg' },
  { name: 'Sahil S.', location: 'Punjab, India', role: 'Buyer', product: 'Agro commodities', avatarFile: 'person-024.jpg' },
  { name: 'Harpreet S.', location: 'Punjab, India', role: 'Supplier', product: 'Rice and grains', avatarFile: 'person-025.jpg' },
  { name: 'Rajan G.', location: 'Maharashtra, India', role: 'Importer', product: 'Metal scrap', avatarFile: 'person-026.jpg' },
  { name: 'Bhavna L.', location: 'Goa, India', role: 'Supplier', product: 'Cashew processing', avatarFile: 'person-027.jpg' },
  { name: 'Chetan U.', location: 'Gujarat, India', role: 'Exporter', product: 'Biofuel', avatarFile: 'person-028.jpg' },
  { name: 'Pradeep O.', location: 'Uttar Pradesh, India', role: 'Buyer', product: 'Leather goods', avatarFile: 'person-029.jpg' },
  { name: 'Asha N.', location: 'Odisha, India', role: 'Supplier', product: 'Rice and grains', avatarFile: 'person-030.jpg' },
  { name: 'Priya J.', location: 'Karnataka, India', role: 'Exporter', product: 'Moringa powder', avatarFile: 'person-032.jpg' },
  { name: 'Imran Q.', location: 'Maharashtra, India', role: 'Supplier', product: 'Ferrous scrap', avatarFile: 'person-036.jpg' },
  { name: 'Vikram C.', location: 'Rajasthan, India', role: 'Exporter', product: 'Spice exports', avatarFile: 'person-039.jpg' },
  { name: 'Komal P.', location: 'Delhi, India', role: 'Buyer', product: 'Jewellery', avatarFile: 'person-040.jpg' },
  { name: 'Kunal M.', location: 'Bihar, India', role: 'Supplier', product: 'Makhana', avatarFile: 'person-041.jpg' },
  { name: 'Radha J.', location: 'Rajasthan, India', role: 'Supplier', product: 'Agro commodities', avatarFile: 'person-043.jpg' },
  { name: 'Omkar I.', location: 'Maharashtra, India', role: 'Exporter', product: 'Essential oils', avatarFile: 'person-044.jpg' },
  { name: 'Dinesh C.', location: 'Tamil Nadu, India', role: 'Supplier', product: 'Fresh ginger', avatarFile: 'person-049.jpg' },
  { name: 'Rekha S.', location: 'Maharashtra, India', role: 'Buyer', product: 'Baby food', avatarFile: 'person-052.jpg' },
  { name: 'Sunita H.', location: 'Odisha, India', role: 'Processor', product: 'Rice and grains', avatarFile: 'person-053.jpg' },
  { name: 'Mehul G.', location: 'Gujarat, India', role: 'Importer', product: 'Scrap metal', avatarFile: 'person-054.jpg' },
  { name: 'Nitin M.', location: 'Delhi, India', role: 'Exporter', product: 'Leather goods', avatarFile: 'person-055.jpg' },
  { name: 'Mina J.', location: 'Kerala, India', role: 'Supplier', product: 'Raw cashew', avatarFile: 'person-056.jpg' },
  { name: 'Neha E.', location: 'Maharashtra, India', role: 'Buyer', product: 'Jewellery', avatarFile: 'person-060.jpg' },
  { name: 'Savita I.', location: 'Karnataka, India', role: 'Supplier', product: 'Cashew kernels', avatarFile: 'person-061.jpg' },
  { name: 'Yogesh & Kavita', location: 'Rajasthan, India', role: 'Exporter', product: 'Jewellery', avatarFile: 'person-062.jpg' },
  { name: 'Bharat F.', location: 'Maharashtra, India', role: 'Exporter', product: 'Ginger powder', avatarFile: 'person-066.jpg' },
  { name: 'Geeta O.', location: 'Andhra Pradesh, India', role: 'Processor', product: 'Cashew kernels', avatarFile: 'person-067.jpg' },
  { name: 'Jaya F.', location: 'Tamil Nadu, India', role: 'Supplier', product: 'Herbal products', avatarFile: 'person-068.jpg' },
  { name: 'Varsha B.', location: 'Assam, India', role: 'Exporter', product: 'Premium tea', avatarFile: 'person-072.jpg' },
  { name: 'Sanjay D.', location: 'Uttar Pradesh, India', role: 'Importer', product: 'Agro commodities', avatarFile: 'person-082.jpg' },
  { name: 'Rohit K.', location: 'Gujarat, India', role: 'Buyer', product: 'Biofuel', avatarFile: 'person-098.jpg' },
  { name: 'Payal V.', location: 'Delhi, India', role: 'Buyer', product: 'Jewellery', avatarFile: 'person-099.jpg' },
  { name: 'Parul C.', location: 'Rajasthan, India', role: 'Exporter', product: 'Jewellery', avatarFile: 'person-110.jpg' },
  { name: 'Ajay & Meena', location: 'Maharashtra, India', role: 'Supplier', product: 'Agro commodities', avatarFile: 'person-111.jpg' },
  { name: 'Mukesh Y.', location: 'Uttar Pradesh, India', role: 'Buyer', product: 'Rice and grains', avatarFile: 'person-117.jpg' },
  { name: 'Arjun Y.', location: 'Punjab, India', role: 'Supplier', product: 'Rice and grains', avatarFile: 'person-119.jpg' },
  { name: 'Seema H.', location: 'Karnataka, India', role: 'Processor', product: 'Baby food', avatarFile: 'person-120.jpg' }
];

function productFeedback(product: string, role: string, location: string, index: number): string {
  const isSeller = role === 'Supplier' || role === 'Exporter' || role === 'Processor';
  const place = location.replace(', India', '');
  const buyerClosers = [
    'That made our buying brief specific enough for a serious quote.',
    'It helped us compare suppliers without mixing grade, packing and freight questions.',
    'Our team could decide what to ask before spending time on supplier calls.',
    'The landed-cost review felt practical because the product assumptions were written clearly.',
    'It gave us confidence to move from general enquiry to a proper RFQ.'
  ];
  const sellerClosers = [
    'Buyers responded better because the offer had the details they usually ask for later.',
    'It made our first reply look more professional and reduced repeated follow-up questions.',
    'We could explain our capacity and documents without sounding vague.',
    'The buyer conversation moved faster because quality, packing and shipment basics were ready.',
    'It helped us show our product as export-ready instead of just locally available.'
  ];
  const closers = isSeller ? sellerClosers : buyerClosers;
  const close = closers[index % closers.length];
  const notes: Record<string, string[]> = {
    'fresh ginger': [
      `For fresh ginger from ${place}, OroPrime asked us to confirm washed or unwashed stock, rhizome size, carton weight and phytosanitary timing.`,
      `They separated fresh ginger requirements by size, season and destination instead of treating it like a simple spice enquiry.`
    ],
    'cashew kernels': [
      `For cashew kernels, OroPrime made us separate W-240, W-320, broken grades, moisture limits and carton packing before pricing.`,
      `The cashew discussion became clearer once grade, origin, packing weight and sample expectations were written in one buyer file.`
    ],
    'scrap metal': [
      `For scrap metal, OroPrime focused on grade photos, HMS versus shredded material, radiation-free note, loading weight and inspection timing.`,
      `They made the scrap enquiry practical by asking for yard location, material mix, container weight and buyer inspection process.`
    ],
    'industrial scrap': [
      `The industrial scrap brief included grade, photo proof, loading method and pickup terms before the price conversation started.`,
      `OroPrime helped us avoid mixed-material offers by separating ferrous, stainless and aluminum scrap requirements.`
    ],
    'ferrous scrap': [
      `For ferrous scrap, they pushed us to show HMS grade, rust level, loading weight, yard photos and inspection terms up front.`,
      `The ferrous scrap offer became stronger after container weight, material photos and buyer inspection steps were added.`
    ],
    'metal scrap': [
      `OroPrime helped us compare metal scrap offers by material grade, inspection method, shipment lot size and realistic CIF assumptions.`,
      `The metal scrap enquiry stopped being generic once material type, weight, port and document questions were listed clearly.`
    ],
    'agro commodities': [
      `For agro commodities, OroPrime grouped product, harvest window, packing style, shelf life and destination requirements before outreach.`,
      `They helped us turn a broad agro enquiry into separate product lanes with quantity, quality and document notes.`
    ],
    'herbal products': [
      `For herbal products, they asked about active ingredient, drying method, microbial limits, label needs and batch traceability.`,
      `The herbal export file became easier to share after quality, packaging and certificate expectations were listed together.`
    ],
    'makhana': [
      `For makhana, OroPrime separated grade, moisture, roasting option, retail pack size and bulk carton assumptions.`,
      `They helped us explain why premium makhana pricing depends on size, whiteness, cleaning and packing format.`
    ],
    'leather goods': [
      `For leather goods, the enquiry moved from simple photos to material type, stitching quality, hardware finish, MOQ and private-label packing.`,
      `OroPrime helped us describe belts and wallets by leather grade, finish, size mix, branding option and carton plan.`
    ],
    'rice and grains': [
      `For rice and grains, OroPrime separated basmati and non-basmati needs, bag size, broken percentage, origin and shipment quantity.`,
      `They made the rice enquiry more usable by asking for grade, moisture, packing weight and destination port before pricing.`
    ],
    'raw cashew': [
      `For raw cashew, they asked for crop year, KOR range, nut count, moisture, defects and bagging before any buyer introduction.`,
      `OroPrime helped us present raw cashew with origin, quality range, shipment season and document readiness in one place.`
    ],
    'jewellery': [
      `For jewellery, OroPrime asked for metal type, plating, stone setting, design photos, finish quality and retail packing expectations.`,
      `The jewellery enquiry became easier once designs, material, MOQ, certificate needs and packaging were separated.`
    ],
    'baby food': [
      `For baby food, they focused on ingredients, age label, FSSAI details, pouch size, shelf life and destination compliance notes.`,
      `OroPrime helped us review baby-food options by formulation, pack format, certificate needs and sample flow.`
    ],
    'premium tea': [
      `For premium tea, OroPrime separated Darjeeling, Assam, CTC and specialty grades with aroma, pack size and certificate notes.`,
      `They made the tea offer stronger by asking for grade, estate/source, tasting notes, moisture and private-label pack options.`
    ],
    'corn silk': [
      `For corn silk, the team asked for dried form, cut size, moisture, herbal-tea use case and export packaging.`,
      `OroPrime helped position corn silk as a wellness product by explaining drying, cleaning, packing and buyer applications.`
    ],
    'biofuel': [
      `For biofuel, they separated UCO, biodiesel and ethanol enquiries with source, quality test, volume and sustainability document questions.`,
      `The biofuel review became practical once feedstock source, test report, volume and buyer destination were put in one file.`
    ],
    'moringa powder': [
      `For moringa powder, OroPrime asked for leaf quality, powder mesh, microbial limits, organic option, pouch size and COA.`,
      `They helped us compare moringa suppliers by purity, color, grinding quality, certificate status and packaging format.`
    ],
    'essential oils': [
      `For essential oils, they asked for botanical name, extraction method, GC-MS report, bottle size and private-label packing.`,
      `The essential-oil quote became clearer after purity, aroma profile, test report and minimum order details were aligned.`
    ],
    'spice exports': [
      `For spice exports, OroPrime separated product grade, moisture, grinding option, retail pack and certificate expectations.`,
      `They helped us prepare spice enquiries with quality, packaging, shelf life and destination compliance in the first message.`
    ],
    'ginger powder': [
      `For ginger powder, they asked for mesh size, moisture, color, microbial limits, pouch or bulk packing and sample quantity.`,
      `The ginger powder lane became quote-ready after quality specs, packaging and certificate questions were aligned.`
    ],
    'cashew processing': [
      `For cashew processing, OroPrime helped us explain roasting, sorting, grading, packing and sample flow before pricing.`,
      `They made our processed cashew offer more credible by connecting grade, process, shelf life and carton packing.`
    ]
  };
  const productNotes = notes[product.toLowerCase()] || [
    `For ${product.toLowerCase()}, OroPrime organized quality, quantity, packing, documents and destination questions before pricing.`,
    `They made the ${product.toLowerCase()} enquiry more practical by separating product readiness, documents and shipment assumptions.`
  ];
  return `${productNotes[index % productNotes.length]} ${close}`;
}

function productMetric(product: string, role: string, index: number): string {
  const outcomes = [
    'RFQ became quote-ready',
    'Buyer file sharpened',
    'Grade notes clarified',
    'Packing details aligned',
    'Document list completed',
    'Supplier reply improved',
    'Sample path defined',
    'Shipment assumptions ready'
  ];
  return `${product.split(' ')[0]} ${outcomes[index % outcomes.length]}`;
}

const indianTestimonials: Testimonial[] = indianProfiles.map((profile, index) => {
  const { name, product, role, location, avatarFile } = profile;
  const country = location.split(',').pop()?.trim() || location;
  const flagByCountry: Record<string, string> = { Canada: '🇨🇦', Germany: '🇩🇪', Nepal: '🇳🇵', UAE: '🇦🇪', Vietnam: '🇻🇳' };
  return {
    name,
    location,
    flag: flagByCountry[country] || '🇮🇳',
    role,
    product,
    quote: productFeedback(product, role, location, index),
    metric: productMetric(product, role, index),
    avatar: index,
    avatarFile
  };
});

const globalProfiles = [
  { name: 'Emily C.', location: 'United States', flag: '🇺🇸', role: 'Buyer', product: 'Jewellery sourcing', avatarFile: 'person-121-usa.jpg', quote: 'For our fashion jewellery order, OroPrime separated alloy type, plating, stone setting, nickel-free notes and retail-card packing before we asked for final pricing.', metric: 'Jewellery specs locked' },
  { name: 'Jacob H.', location: 'United States', flag: '🇺🇸', role: 'Importer', product: 'Moringa powder', avatarFile: 'person-13-usa.jpg', quote: 'We were comparing private-label moringa powder for wellness stores. OroPrime helped us ask for COA, microbial limits, pouch size and organic options in one clean RFQ.', metric: 'Wellness RFQ cleaned' },
  { name: 'Michael R.', location: 'United States', flag: '🇺🇸', role: 'Supplier', product: 'Ferrous scrap', avatarFile: 'person-132-usa.jpg', quote: 'Our scrap offer used to create too many follow-up questions. OroPrime pushed us to show grade photos, loading weight, yard pickup terms and inspection timing up front.', metric: 'Scrap offer standardized' },
  { name: 'Wei L.', location: 'China', flag: '🇨🇳', role: 'Buyer', product: 'Scrap metal', avatarFile: 'person-122-china.jpg', quote: 'For the mill review, they split HMS, shredded and stainless scrap into separate notes with inspection expectations. That saved us from comparing mixed material offers.', metric: 'Mill review faster' },
  { name: 'Chen M.', location: 'China', flag: '🇨🇳', role: 'Importer', product: 'Industrial materials', avatarFile: 'person-123-china2.jpg', quote: 'OroPrime helped us frame industrial input enquiries around grade, photos, shipment lot size and port assumptions, which made supplier replies much easier to judge.', metric: 'Grade filter applied' },
  { name: 'Miguel R.', location: 'Philippines', flag: '🇵🇭', role: 'Buyer', product: 'Agro commodities', avatarFile: 'person-124-philipines.jpg', quote: 'We needed more than a product list. Their team grouped rice, ginger and dry-food options by pack type, shelf life and destination needs before we shortlisted suppliers.', metric: 'Agro shortlist built' },
  { name: 'Minh T.', location: 'Vietnam', flag: '🇻🇳', role: 'Supplier', product: 'Cashew kernels', avatarFile: 'person-125-vietnam.jpg', quote: 'OroPrime helped us present W-240, W-320 and broken cashew separately, with carton weight and moisture expectations. Buyers understood our offer much faster.', metric: 'Cashew grades separated' },
  { name: 'Bao N.', location: 'Vietnam', flag: '🇻🇳', role: 'Exporter', product: 'Cashew processing', avatarFile: 'person-126-vietnam2.jpg', quote: 'For processed cashew, they asked us to document roasting, packing, shelf life and sample flow before price discussion. It made the buyer call more practical.', metric: 'Sample flow ready' },
  { name: 'Linh & An P.', location: 'Vietnam', flag: '🇻🇳', role: 'Supplier', product: 'Cashew trade', avatarFile: 'person-127-vietnam3.jpg', quote: 'The best part was how the raw cashew and kernel discussions were kept separate. We could explain yield, grade and payment expectations without confusion.', metric: 'Yield notes clarified' },
  { name: 'Kossi A.', location: 'Togo', flag: '🇹🇬', role: 'Supplier', product: 'Raw cashew', avatarFile: 'person-128-togo.jpg', quote: 'OroPrime helped us turn a local raw-cashew supply note into a buyer-ready file with origin, nut count, moisture, bag size and shipment season details.', metric: 'Origin file improved' },
  { name: 'Amina O.', location: 'Nigeria', flag: '🇳🇬', role: 'Supplier', product: 'Raw cashew', avatarFile: 'person-129-Nigeria.jpg', quote: 'Before OroPrime, our buyers kept asking the same questions. Now our raw cashew offer starts with crop year, KOR range, defects, bagging and port plan.', metric: 'Buyer questions reduced' },
  { name: 'Chinedu O.', location: 'Nigeria', flag: '🇳🇬', role: 'Exporter', product: 'Agro commodities', avatarFile: 'person-130-Nigeria.jpg', quote: 'They helped us describe agro lots in commercial terms: quantity available, harvest window, inspection method and which documents would be ready before shipment.', metric: 'Export file organized' },
  { name: 'Daniel P.', location: 'Canada', flag: '🇨🇦', role: 'Importer', product: 'Cashew kernels', avatarFile: 'person-031.jpg', quote: 'Our team wanted retail cashew packs, not a bulk commodity quote. OroPrime helped us compare grade, private-label pouch options and carton configuration first.', metric: 'Retail pack checklist' },
  { name: 'Hannah K.', location: 'Germany', flag: '🇩🇪', role: 'Importer', product: 'Certified supply', avatarFile: 'person-037.jpg', quote: 'For EU review, they kept certificates and traceability in the first conversation instead of after pricing. That helped us reject weak suppliers early.', metric: 'Compliance-first review' },
  { name: 'Ahmed R.', location: 'Dubai, UAE', flag: '🇦🇪', role: 'Buyer', product: 'Food imports', avatarFile: 'person-042.jpg', quote: 'Our Dubai distribution enquiry needed product photos, Arabic label questions and realistic carton counts. OroPrime organized that before supplier outreach.', metric: 'GCC buying file ready' },
  { name: 'Aisha M.', location: 'UAE', flag: '🇦🇪', role: 'Buyer', product: 'Scrap metal', avatarFile: 'person-050.jpg', quote: 'The scrap conversation became more serious once OroPrime added inspection, radiation-free note, container weight and CIF assumptions to the buyer brief.', metric: 'Inspection path clear' },
  { name: 'Prakash S.', location: 'Nepal', flag: '🇳🇵', role: 'Exporter', product: 'Ginger and agro trade', avatarFile: 'person-109.jpg', quote: 'For ginger, they helped us separate fresh, dry and powder enquiries. We stopped sending one generic reply and started giving buyers a proper grade-wise response.', metric: 'Ginger reply refined' },
  { name: 'Dawa L.', location: 'Nepal', flag: '🇳🇵', role: 'Supplier', product: 'Agro exports', avatarFile: 'person-112.jpg', quote: 'OroPrime made our agro offer more believable by adding available quantity, packing style, route assumption and what documents we could provide immediately.', metric: 'Offer details sharpened' },
  { name: 'Tenzin R.', location: 'Nepal', flag: '🇳🇵', role: 'Supplier', product: 'Ginger', avatarFile: 'person-116.jpg', quote: 'They asked the exact questions buyers later asked us: washed or unwashed ginger, size range, season, carton weight and phytosanitary certificate timeline.', metric: 'Seasonal plan drafted' },
];

const globalTestimonials: Testimonial[] = globalProfiles.map((profile, index) => ({
  ...profile,
  quote: profile.quote,
  metric: profile.metric,
  avatar: indianTestimonials.length + index
}));

export const testimonials: Testimonial[] = [...globalTestimonials, ...indianTestimonials].map((item, avatar) => ({ ...item, avatar }));

export const globalExportLeaders: GlobalExportLeader[] = [
  { country: 'China', exports: 3792.95, topGood: 'Broadcasting equipment' },
  { country: 'United States', exports: 3232.52, topGood: 'Petroleum' },
  { country: 'Germany', exports: 1989.10, topGood: 'Cars' },
  { country: 'France', exports: 1203.58, topGood: 'Packaged medications' },
  { country: 'United Kingdom', exports: 1116.62, topGood: 'Gold' },
  { country: 'Netherlands', exports: 1032.47, topGood: 'Petroleum' },
  { country: 'Singapore', exports: 978.60, topGood: 'Integrated circuits' },
  { country: 'India', exports: 956.88, topGood: 'Petroleum' },
  { country: 'United Arab Emirates', exports: 558.40, topGood: 'Petroleum' },
  { country: 'New Zealand', exports: 61.80, topGood: 'Milk' }
];
