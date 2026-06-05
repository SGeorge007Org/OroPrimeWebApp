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
export interface Testimonial { name: string; location: string; flag: string; role: string; product: string; quote: string; metric: string; avatar: number; }
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
  { name: 'Olivia M.', location: 'New Zealand', flag: '🇳🇿', role: 'Buyer', product: 'Specialty sourcing', quote: 'We needed practical import guidance, not generic talk. OroPrime gave us a clear product, compliance and logistics checklist before supplier outreach.', metric: 'Lower sourcing risk', avatar: 3 },
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
  { name: 'Ravi M.', location: 'India', flag: '🇮🇳', role: 'Supplier', product: 'Agro commodities', quote: 'Their documentation support helped us prepare cleaner export conversations with new buyers.', metric: 'Docs checklist complete', avatar: 2 },
  { name: 'Claire D.', location: 'New Zealand', flag: '🇳🇿', role: 'Importer', product: 'Ginger products', quote: 'The market guide made fresh, dry and powder ginger options easier to evaluate.', metric: 'Product route selected', avatar: 3 },
  { name: 'Bilal H.', location: 'UAE', flag: '🇦🇪', role: 'Buyer', product: 'Scrap metal', quote: 'We liked the early focus on inspection, customs and material authenticity.', metric: 'Risk screen complete', avatar: 4 },
  { name: 'Anita C.', location: 'Kenya', flag: '🇰🇪', role: 'Exporter', product: 'Cashew origin', quote: 'OroPrime helped us convert supplier details into a clearer buyer-facing presentation.', metric: 'Buyer presentation ready', avatar: 5 },
  { name: 'Mateo R.', location: 'Colombia', flag: '🇨🇴', role: 'Importer', product: 'Food commodities', quote: 'The sourcing notes gave us confidence to compare suppliers across regions.', metric: 'Supplier comparison live', avatar: 6 }
];

const indiaLocations = [
  'Gujarat, India', 'Maharashtra, India', 'Punjab, India', 'Tamil Nadu, India', 'Kerala, India',
  'Karnataka, India', 'Andhra Pradesh, India', 'Telangana, India', 'Rajasthan, India', 'Uttar Pradesh, India',
  'Madhya Pradesh, India', 'West Bengal, India', 'Odisha, India', 'Assam, India', 'Bihar, India'
];

const indiaNames = [
  'Ramesh P.', 'Sita D.', 'Harpreet S.', 'Lakshmi K.', 'Anil V.', 'Kavita R.', 'Manoj T.', 'Farhan A.',
  'Nirmala B.', 'Devendra J.', 'Pooja M.', 'Gopal N.', 'Rekha S.', 'Imran Q.', 'Vikram C.', 'Sunita H.',
  'Mahesh L.', 'Anjali W.', 'Deepak U.', 'Ritu P.', 'Kiran Z.', 'Mehul G.', 'Savita I.', 'Arjun Y.',
  'Neha E.', 'Bharat F.', 'Geeta O.', 'Raghav A.', 'Parul C.', 'Sanjay D.', 'Mina J.', 'Rohit K.',
  'Bhavna L.', 'Nitin M.', 'Asha N.', 'Pradeep O.', 'Komal P.', 'Yogesh Q.', 'Rina R.', 'Sahil S.',
  'Leela T.', 'Chetan U.', 'Payal V.', 'Ajay W.', 'Hema X.', 'Mukesh Y.', 'Tara Z.', 'Ishaan A.',
  'Varsha B.', 'Dinesh C.', 'Kusum D.', 'Naveen E.', 'Jaya F.', 'Rajan G.', 'Seema H.', 'Omkar I',
  'Radha J.', 'Vijay K.', 'Meena L.', 'Kunal M.'
];

const indiaTradeProducts = ['Cashew kernels', 'Raw cashew', 'Fresh ginger', 'Dry ginger', 'Ginger powder', 'Rice and grains', 'Agro commodities', 'Ferrous scrap', 'Aluminum scrap', 'Spice exports'];
const indiaRoles = ['Supplier', 'Exporter', 'Importer', 'Buyer', 'Processor'];

const indianTestimonials: Testimonial[] = indiaNames.map((name, index) => {
  const product = indiaTradeProducts[index % indiaTradeProducts.length];
  const role = indiaRoles[index % indiaRoles.length];
  const location = indiaLocations[index % indiaLocations.length];
  return {
    name,
    location,
    flag: '🇮🇳',
    role,
    product,
    quote: `${role === 'Supplier' || role === 'Exporter' ? 'OroPrime helped us present our product, origin, packing details and shipment readiness in a way overseas buyers could review quickly.' : 'OroPrime helped us compare supplier readiness, documents, destination assumptions and pricing questions before we moved toward a quote.'}`,
    metric: `${product.split(' ')[0]} lane prepared`,
    avatar: index % 8
  };
});

export const testimonials: Testimonial[] = [...indianTestimonials, ...testimonialsBase].map((item, avatar) => ({ ...item, avatar }));

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
