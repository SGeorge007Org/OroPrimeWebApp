import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Testimonial, testimonials } from '../../data/site-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="page reveal about-hero">
  <span class="eyebrow">About OroPrime</span>
  <h1>We export, import and source goods for global buyers</h1>
  <p>OroPrime Exports helps businesses buy and sell products across countries. We work with buyers, suppliers and manufacturers to make international trade simpler, clearer and more practical.</p>
</section>

<section class="section about-grid reveal">
  <article class="glass">
    <span class="eyebrow">What We Do</span>
    <h2>We help move products from the right seller to the right buyer</h2>
    <p>We export goods from trusted suppliers, import products when buyers need overseas supply, and help companies find suitable product sources. We do not own ships or operate as a shipping company. We coordinate with freight forwarders, customs brokers and logistics partners after the product deal is clear.</p>
    <a routerLink="/contact" class="btn gold">Request Product Quote</a>
  </article>
  <div class="capability-stack">
    <div><b>01</b><h3>Export and Import</h3><p>We support product trade for agro goods, food products, metals, wellness items, leather, jewellery and other practical product categories.</p></div>
    <div><b>02</b><h3>Product Sourcing</h3><p>We help buyers compare suppliers, product grades, quantities, origin, target price and packing expectations before a deal moves forward.</p></div>
    <div><b>03</b><h3>Trade Documents</h3><p>We prepare and organize commercial invoices, packing lists, certificates, inspection papers and other documents needed for international trade.</p></div>
    <div><b>04</b><h3>Partner Coordination</h3><p>Once the goods are agreed, we help coordinate with shipping, customs and local partners so the buyer and seller know the next steps.</p></div>
  </div>
</section>

<section class="section global-strip reveal">
  <div><strong>50+</strong><span>Potential country markets researched</span></div>
  <div><strong>17</strong><span>Active product categories</span></div>
  <div><strong>24/7</strong><span>RFQ capture and follow-up</span></div>
  <div><strong>Global</strong><span>USA, India, UAE, NZ, Nepal and beyond</span></div>
</section>

<section class="section testimonials-section reveal">
  <div class="section-head">
    <span>Success Testimonials</span>
    <h2>Trade wins across global corridors</h2>
    <p>Buyer and supplier stories from cashew, metal and agro product import-export work across multiple regions.</p>
  </div>
  <div id="aboutTestimonialSlider" class="slider-track testimonial-slider" tabindex="0" (mouseenter)="pauseTestimonialSlider()" (mouseleave)="resumeTestimonialSlider()" (focusin)="pauseTestimonialSlider()" (focusout)="resumeTestimonialSlider()">
    @for (item of testimonials; track item.name) {
      <article class="testimonial-card slider-card lift">
        <div class="testimonial-top">
          <span class="avatar-tile" [style.backgroundImage]="avatarImage(item)"></span>
          <img class="flag-badge" [src]="flagUrl(item)" [alt]="item.location + ' flag'">
        </div>
        <small>{{item.role}} · {{item.product}} · {{item.location}}</small>
        <p>“{{item.quote}}”</p>
        <div><b>{{item.name}}</b><span>{{item.metric}}</span></div>
      </article>
    }
  </div>
</section>
`
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  testimonials = testimonials;
  private testimonialTimer?: number;

  ngAfterViewInit(): void {
    this.resumeTestimonialSlider();
  }

  ngOnDestroy(): void {
    if (this.testimonialTimer) window.clearInterval(this.testimonialTimer);
  }

  slide(direction: number): void {
    const el = document.getElementById('aboutTestimonialSlider');
    if (!el) return;
    el.scrollBy({ left: direction * Math.min(el.clientWidth * .86, 760), behavior: 'smooth' });
    if (direction > 0 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 12) {
      window.setTimeout(() => el.scrollTo({ left: 0, behavior: 'smooth' }), 450);
    }
  }

  pauseTestimonialSlider(): void {
    if (this.testimonialTimer) {
      window.clearInterval(this.testimonialTimer);
      this.testimonialTimer = undefined;
    }
  }

  resumeTestimonialSlider(): void {
    if (!this.testimonialTimer) {
      this.testimonialTimer = window.setInterval(() => this.slide(1), 3000);
    }
  }

  avatarImage(item: Testimonial): string {
    if (item.avatarFile) {
      return `url("assets/images/testimonials/${item.avatarFile}")`;
    }
    const index = (item.avatar % 120) + 1;
    return `url("assets/images/testimonials/person-${index.toString().padStart(3, '0')}.jpg")`;
  }

  flagUrl(item: Testimonial): string {
    const country = item.location.split(',').pop()?.trim() || item.location;
    const codes: Record<string, string> = {
      Australia: 'au',
      Bahrain: 'bh',
      Bangladesh: 'bd',
      Bhutan: 'bt',
      Brazil: 'br',
      Canada: 'ca',
      Chile: 'cl',
      China: 'cn',
      Colombia: 'co',
      Dubai: 'ae',
      Egypt: 'eg',
      France: 'fr',
      Germany: 'de',
      India: 'in',
      Ireland: 'ie',
      Italy: 'it',
      Japan: 'jp',
      Kenya: 'ke',
      Kuwait: 'kw',
      Malaysia: 'my',
      Mexico: 'mx',
      Morocco: 'ma',
      Nepal: 'np',
      Netherlands: 'nl',
      'New Zealand': 'nz',
      Nigeria: 'ng',
      Norway: 'no',
      Oman: 'om',
      Portugal: 'pt',
      Qatar: 'qa',
      'Saudi Arabia': 'sa',
      Singapore: 'sg',
      Spain: 'es',
      'South Africa': 'za',
      'South Korea': 'kr',
      'Sri Lanka': 'lk',
      Turkey: 'tr',
      UAE: 'ae',
      'United Arab Emirates': 'ae',
      'United Kingdom': 'gb',
      'United States': 'us',
      Vietnam: 'vn'
    };
    return `https://flagcdn.com/w40/${codes[country] || 'un'}.png`;
  }
}
