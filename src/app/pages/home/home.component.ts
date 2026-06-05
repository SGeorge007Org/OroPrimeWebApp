import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { products, markets, articles, Testimonial, tradeVideos, testimonials } from '../../data/site-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
  <section class="hero reveal">
    <div class="hero-copy">
      <span class="eyebrow">USA · India · Global Trade</span>
      <h1>Connecting Worlds, Delivering Trust</h1>
      <p>OroPrime Exports helps buyers source agro commodities and industrial materials with market clarity, documentation support and reliable execution.</p>
      <div class="actions"><a routerLink="/products" class="btn gold">Explore Products</a><a routerLink="/contact" class="btn navy">Request Quote</a></div>
      <div class="office-strip"><span>Atlanta, Georgia, USA</span><span>India Operations</span><span>Quote-ready documentation</span></div>
    </div>
  </section>

  <section class="stats reveal">
    <div><strong>50+</strong><span>Countries tracked</span></div><div><strong>{{products.length}}</strong><span>Product lanes</span></div><div><strong>115</strong><span>Success snapshots</span></div><div><strong>24/7</strong><span>Lead capture</span></div>
  </section>

  <section class="section product-cinema home-cinema reveal">
    <div class="cinema-copy">
      <span class="eyebrow">Import Export Dashboard</span>
      <h2>See how OroPrime helps buyers and suppliers trade products globally</h2>
      <p>This section gives a simple view of our import-export work: product sourcing, buyer requirements, supplier readiness, destination countries, documents and quote preparation. We help businesses buy and sell goods internationally with clear next steps.</p>
      <div class="cinema-points">
        <span>Global product sourcing</span>
        <span>Import and export support</span>
        <span>Buyer-supplier coordination</span>
      </div>
    </div>
    <div class="cinema-stage">
      <video class="cinema-main" src="assets/videos/trade-ocean-01.mp4" autoplay muted loop playsinline preload="metadata"></video>
      <div class="cinema-card">
        <video src="assets/videos/trade-ocean-02.mp4" autoplay muted loop playsinline preload="metadata"></video>
        <div><small>Trade readiness</small><b>Products, countries, documents and quote details organized before the deal moves forward.</b></div>
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="section-head slider-head">
      <div><span>Products</span><h2>Premium export categories</h2><p>Built for buyers who need clarity on origin, usage, documentation and quantity before starting a trade conversation.</p></div>
      <div class="slider-controls">
        <button type="button" aria-label="Previous products" (click)="slide('productSlider', -1)">‹</button>
        <button type="button" aria-label="Next products" (click)="slide('productSlider', 1)">›</button>
      </div>
    </div>
    <div id="productSlider" class="slider-track product-slider" tabindex="0" (focusin)="pauseProductSlider()" (focusout)="resumeProductSlider()" (pointerdown)="pauseProductSlider()">
      @for (product of products; track product.name) {
        <article class="product-card slider-card lift" tabindex="0">
          <img [src]="product.image" [alt]="product.name" />
          <div><small>{{product.origin}}</small><h3>{{product.name}}</h3><p>{{product.use}}</p><b>{{product.margin}}</b></div>
        </article>
      }
    </div>
  </section>

  <section class="editorial-section reveal">
    <div class="section-head slider-head">
      <div>
        <span>Case Studies / Blogs</span>
        <h2>Case studies built for trade decisions</h2>
        <p>Explore ready-to-review business pages for ginger exports, scrap metal imports and cashew import planning.</p>
      </div>
      <div class="slider-controls light">
        <button type="button" aria-label="Previous case studies" (click)="slide('caseSlider', -1)">‹</button>
        <button type="button" aria-label="Next case studies" (click)="slide('caseSlider', 1)">›</button>
      </div>
    </div>
    <div id="caseSlider" class="slider-track case-slider">
      @for (article of articles; track article.title) {
        <article class="article-card case-study-card slider-card lift">
          <img [src]="article.image" [alt]="article.title" />
          <div>
            <small>{{article.type}} · {{article.meta}}</small>
            <h3>{{article.title}}</h3>
            <p>{{article.summary}}</p>
            <a routerLink="/insights" class="text-link">View case study -></a>
          </div>
        </article>
      }
    </div>
  </section>

  <section class="section video-section reveal">
    <div class="section-head slider-head">
      <div><span>Trade Videos</span><h2>Short video library for export-import readiness</h2><p>Helpful primers for buyers learning international trade basics, documents and product movement terms.</p></div>
      <div class="slider-controls">
        <button type="button" aria-label="Previous videos" (click)="slide('videoSlider', -1)">‹</button>
        <button type="button" aria-label="Next videos" (click)="slide('videoSlider', 1)">›</button>
      </div>
    </div>
    <div id="videoSlider" class="slider-track video-slider">
      @for (video of tradeVideos; track video.title) {
        <article class="video-card slider-card">
          <iframe [src]="safeUrl(video.embed)" [title]="video.title" loading="lazy" allowfullscreen></iframe>
          <div><small>{{video.tag}}</small><h3>{{video.title}}</h3><p>{{video.summary}}</p></div>
        </article>
      }
    </div>
  </section>

  <section class="section testimonials-section reveal">
    <div class="section-head slider-head">
      <div><span>Testimonials</span><h2>Success snapshots from global trade lanes</h2><p>Cashew, metal and agro product buyer-supplier work across USA, India, Dubai, New Zealand and Nepal.</p></div>
      <div class="slider-controls">
        <button type="button" aria-label="Previous testimonials" (click)="slide('testimonialSlider', -1)">‹</button>
        <button type="button" aria-label="Next testimonials" (click)="slide('testimonialSlider', 1)">›</button>
      </div>
    </div>
    <div id="testimonialSlider" class="slider-track testimonial-slider">
      @for (item of testimonials; track item.name) {
        <article class="testimonial-card slider-card lift">
          <div class="testimonial-top">
            <span class="avatar-tile" [style.backgroundImage]="avatarImage(item)" [style.backgroundPosition]="avatarPosition(item)"></span>
            <img class="flag-badge" [src]="flagUrl(item)" [alt]="item.location + ' flag'">
          </div>
          <small>{{item.role}} · {{item.product}} · {{item.location}}</small>
          <p>“{{item.quote}}”</p>
          <div><b>{{item.name}}</b><span>{{item.metric}}</span></div>
        </article>
      }
    </div>
  </section>

  <section class="insight-panel reveal">
    <div>
      <span class="eyebrow">Market Intelligence</span>
      <h2>Country-wise trade insights for buyer traffic</h2>
      <p>Interactive export/import cards help visitors understand active trade lanes before requesting a quote.</p>
    </div>
    <div class="filter-tabs">
      @for (market of markets; track market.country) {
        <button [class.active]="selected() === market.country" (click)="selected.set(market.country)">{{market.country}}</button>
      }
    </div>
    <div class="market-detail">
      @for (market of markets; track market.country) {
        @if (selected() === market.country) {
          <div class="map-card"><h3>{{market.country}}</h3><p>{{market.opportunity}}</p></div>
          <div class="market-metrics"><div><span>Exports from India</span><strong>{{formatUsd(market.exports)}}</strong></div><div><span>Import profile</span><strong>{{market.imports === null ? 'Not in top import list' : formatUsd(market.imports)}}</strong></div><div><span>Focus</span><strong>{{market.focus}}</strong></div></div>
        }
      }
    </div>
  </section>

  <section class="section split reveal">
    <div><span class="eyebrow">Why buyers choose us</span><h2>Clear sourcing, compliant documents, practical trade support</h2><p>We align product specifications, quantities, price expectations, origin, destination and documents before the buyer and seller commit.</p></div>
    <div class="process">
      @for (step of ['Inquiry','Product validation','Pricing','Documentation','Shipment coordination','Delivery support']; track step) { <div>{{step}}</div> }
    </div>
  </section>
  `
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  products = products;
  markets = markets;
  articles = articles;
  tradeVideos = tradeVideos;
  testimonials = testimonials;
  selected = signal('United States');
  private testimonialTimer?: number;
  private productTimer?: number;
  private cinemaTimer?: number;
  private productIndex = 0;
  private productPaused = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    this.startAmbientVideos();
    this.cinemaTimer = window.setInterval(() => this.startAmbientVideos(), 2000);
    this.testimonialTimer = window.setInterval(() => this.slide('testimonialSlider', 1), 3000);
    this.productTimer = window.setInterval(() => this.advanceProductSlider(), 3000);
  }

  ngOnDestroy(): void {
    if (this.testimonialTimer) window.clearInterval(this.testimonialTimer);
    if (this.productTimer) window.clearInterval(this.productTimer);
    if (this.cinemaTimer) window.clearInterval(this.cinemaTimer);
  }

  formatUsd(value: number): string {
    return `$${value.toFixed(2)}B`;
  }

  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  slide(id: string, direction: number): void {
    if (id === 'productSlider') {
      this.pauseProductSlider();
      this.moveProductSlider(direction, 'smooth');
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollBy({ left: direction * Math.min(el.clientWidth * .86, 760), behavior: 'smooth' });
    if (direction > 0 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 12) {
      window.setTimeout(() => el.scrollTo({ left: 0, behavior: 'smooth' }), 450);
    }
  }

  avatarImage(item: Testimonial): string {
    return 'url("assets/images/testimonial-portraits-unique.png")';
  }

  avatarPosition(item: Testimonial): string {
    const index = item.avatar % 120;
    const col = index % 12;
    const row = Math.floor(index / 12);
    return `${col * 9.0909}% ${row * 11.1111}%`;
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

  pauseProductSlider(): void {
    this.productPaused = true;
  }

  resumeProductSlider(): void {
    window.setTimeout(() => {
      this.productPaused = false;
    }, 1200);
  }

  private advanceProductSlider(): void {
    if (this.productPaused) return;
    this.moveProductSlider(1, 'auto');
  }

  private moveProductSlider(direction: number, behavior: ScrollBehavior): void {
    const el = document.getElementById('productSlider');
    const card = el?.querySelector<HTMLElement>('.slider-card');
    if (!el || !card) return;
    this.productIndex = (this.productIndex + direction + this.products.length) % this.products.length;
    const gap = 24;
    el.scrollTo({ left: this.productIndex * (card.offsetWidth + gap), behavior });
  }

  private startAmbientVideos(): void {
    document.querySelectorAll<HTMLVideoElement>('.home-cinema video').forEach((video) => {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      if (video.ended) video.currentTime = 0;
      video.play().catch(() => undefined);
    });
  }
}
