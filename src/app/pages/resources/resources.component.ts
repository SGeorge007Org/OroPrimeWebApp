import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  standalone: true,
  template: `
<section class="page reveal resources-hero">
  <span class="eyebrow">Resources</span>
  <h1>Export-import forms, checklists and official portals</h1>
  <p>Use these government portals and document guides to prepare a practical product inquiry, trade file and compliance checklist.</p>
</section>

<section class="section resource-section reveal">
  <div class="section-head">
    <span>Official Links</span>
    <h2>Government and trade portals</h2>
    <p>Start with official sources before finalizing documentation, duties, registration or customs workflows.</p>
  </div>
  <div class="resource-grid">
    <a class="resource-card lift" href="https://www.dgft.gov.in/CP/" target="_blank" rel="noopener"><small>India</small><h3>DGFT Portal</h3><p>IEC, exporter services, schemes, trade notices and policy resources.</p></a>
    <a class="resource-card lift" href="https://www.icegate.gov.in/" target="_blank" rel="noopener"><small>India</small><h3>ICEGATE</h3><p>Indian customs e-filing, shipping bill, bill of entry and customs services.</p></a>
    <a class="resource-card lift" href="https://apeda.gov.in/" target="_blank" rel="noopener"><small>India Agro</small><h3>APEDA</h3><p>Agricultural export promotion, registration and product-specific guidance.</p></a>
    <a class="resource-card lift" href="https://www.cbp.gov/trade" target="_blank" rel="noopener"><small>USA</small><h3>U.S. Customs and Border Protection</h3><p>Importing into the United States, customs compliance and trade programs.</p></a>
    <a class="resource-card lift" href="https://www.trade.gov/export-solutions" target="_blank" rel="noopener"><small>USA</small><h3>Trade.gov Export Solutions</h3><p>Export planning, market intelligence and trade assistance from the U.S. government.</p></a>
    <a class="resource-card lift" href="https://www.trade.gov/incoterms" target="_blank" rel="noopener"><small>Global</small><h3>Incoterms Overview</h3><p>Buyer-seller responsibility points for common international shipping terms.</p></a>
  </div>
</section>

<section class="section sample-forms reveal">
  <div class="section-head">
    <span>Trade Documents</span>
    <h2>Common document layouts</h2>
    <p>These layouts help buyers and sellers prepare information clearly. Final documents should be reviewed by the relevant broker, bank, freight forwarder or government portal.</p>
  </div>
  <div class="form-grid">
    <article class="sample-form">
      <h3>Pro Forma Invoice</h3>
      <div><span>Seller</span><b>OroPrime Exports / Supplier Name</b></div>
      <div><span>Buyer</span><b>Importer company, country, contact</b></div>
      <div><span>Product</span><b>Grade, HS code, packing, quantity</b></div>
      <div><span>Commercial Terms</span><b>Incoterm, currency, payment, validity</b></div>
      <div><span>Shipment</span><b>Origin, destination port, container type</b></div>
    </article>
    <article class="sample-form">
      <h3>Packing List</h3>
      <div><span>Packages</span><b>Cartons / bags / bundles count</b></div>
      <div><span>Weights</span><b>Net weight, gross weight, tare</b></div>
      <div><span>Marks</span><b>Batch, lot, container, seal number</b></div>
      <div><span>Dimensions</span><b>Pallet or package dimensions</b></div>
      <div><span>Notes</span><b>Inspection, fumigation or handling notes</b></div>
    </article>
    <article class="sample-form">
      <h3>Buyer RFQ Intake</h3>
      <div><span>Requirement</span><b>Product, specification, grade and use case</b></div>
      <div><span>Quantity</span><b>Trial quantity and repeat monthly demand</b></div>
      <div><span>Destination</span><b>Country, port, warehouse or consignee</b></div>
      <div><span>Documents</span><b>COO, inspection, phytosanitary, fumigation</b></div>
      <div><span>Timeline</span><b>Quote deadline and shipment window</b></div>
    </article>
  </div>
</section>
`
})
export class ResourcesComponent {}
