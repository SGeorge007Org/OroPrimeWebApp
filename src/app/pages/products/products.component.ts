import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../../data/site-data';

interface ShipPoint {
  id: string;
  x: number;
  y: number;
  delay: number;
  speed: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="page reveal products-hero">
  <span class="eyebrow">Products</span>
  <h1>Global product portfolio for import-export opportunities</h1>
  <p>Cashew, ginger, scrap metal and agro commodities presented with buyer use-cases, origin context and quote-ready next steps.</p>
</section>

<section class="section product-cinema reveal">
  <div class="cinema-copy">
    <span class="eyebrow">Product Showcase</span>
    <h2>Premium product visuals before the buyer enters the lane details</h2>
    <p>Product motion gives the portfolio a polished first impression while the categories below stay clear, readable and quote-ready.</p>
    <div class="cinema-points">
      <span>Export categories</span>
      <span>Buyer attention</span>
      <span>Quote-ready products</span>
    </div>
  </div>
  <div class="cinema-stage">
    <video class="cinema-main" src="assets/videos/product-showcase-01.mp4" autoplay muted loop playsinline preload="metadata"></video>
    <div class="cinema-card">
      <video src="assets/videos/product-showcase-02.mp4" autoplay muted loop playsinline preload="metadata"></video>
      <div><small>Portfolio motion</small><b>Product categories presented with premium visual energy.</b></div>
    </div>
  </div>
</section>

<section class="section product-showcase reveal">
  <div class="section-head slider-head">
    <div>
      <span>Global Product Routes</span>
      <h2>Product lanes mapped for worldwide buyers</h2>
      <p>Explore export-ready categories with clear product visuals, buyer use cases, documentation checkpoints and shipment planning cues.</p>
    </div>
    <div class="slider-controls">
      <button type="button" aria-label="Previous product" (click)="slide(-1)">‹</button>
      <button type="button" aria-label="Next product" (click)="slide(1)">›</button>
    </div>
  </div>

  <div class="world-product-map">
    <div class="map-copy">
      <span>Global Route View</span>
      <strong>{{products.length}} curated product lanes</strong>
      <p>{{shipSummary.label}}</p>
    </div>
    <span class="map-node map-india">India</span>
    <span class="map-node map-usa">USA</span>
    <span class="map-node map-gcc">GCC</span>
    <span class="map-node map-eu">EU</span>
    @for(ship of shipPoints.slice(0, 42); track ship.id) {
      <span class="ship-dot" [style.left.%]="ship.x" [style.top.%]="ship.y" [style.animationDelay.s]="ship.delay" [style.--speed]="ship.speed + 's'"></span>
    }
    <span class="map-ship ship-a">◆</span>
    <span class="map-ship ship-b">◆</span>
    <span class="map-ship ship-c">◆</span>
  </div>

  <div id="productsPageSlider" class="slider-track product-page-slider">
    @for(p of products; track p.name) {
      <article class="product-feature slider-card lift">
        <img [src]="p.image" [alt]="p.name">
        <div>
          <small>{{p.category}} · {{p.origin}}</small>
          <h3>{{p.name}}</h3>
          <p>{{p.use}}</p>
          <ul>
            <li>{{p.margin}}</li>
            <li>Buyer requirement and quantity screening</li>
            <li>Documentation and shipment assumptions before quote</li>
          </ul>
          <a routerLink="/contact" class="btn gold">Request Quote</a>
        </div>
      </article>
    }
  </div>
</section>

<section class="section product-lanes reveal">
  <div class="section-head">
    <span>Trade Fit</span>
    <h2>How we position each product lane</h2>
  </div>
  <div class="process">
    <div><b>1. Qualify the product</b><span>Confirm grade, HS code, origin, quantity range, buyer use case, target price and acceptable substitute options.</span></div>
    <div><b>2. Prepare supplier proof</b><span>Collect photos, packing details, capacity, certifications, inspection history and realistic shipment lead time.</span></div>
    <div><b>3. Build landed-cost assumptions</b><span>Estimate container size, freight lane, insurance, port fees, duties, exchange exposure and local clearance costs.</span></div>
    <div><b>4. Align documents early</b><span>Map invoice, packing list, certificate of origin, inspection, phytosanitary or pre-shipment paperwork before pricing.</span></div>
    <div><b>5. Validate buyer readiness</b><span>Check destination, volume, Incoterms, payment preference, import license needs and decision timeline.</span></div>
    <div><b>6. Run quote follow-up</b><span>Send a structured RFQ pack, track questions, compare supplier responses and update risks before shipment commitment.</span></div>
  </div>
</section>
`
})
export class ProductsComponent implements AfterViewInit, OnDestroy {
  products = products;
  shipPoints: ShipPoint[] = this.createFallbackShips(64);
  shipSummary = {
    count: 'Connecting',
    label: 'Reading live ship volume across ocean trade lanes.',
    updated: 'Now',
    source: 'Source: PocketWorld live maritime API'
  };
  private timer?: number;
  private cinemaTimer?: number;
  private shipTimer?: number;
  private activeIndex = 0;

  ngAfterViewInit(): void {
    this.startCinemaVideos();
    this.loadShipTelemetry();
    this.cinemaTimer = window.setInterval(() => this.startCinemaVideos(), 2000);
    this.shipTimer = window.setInterval(() => this.loadShipTelemetry(), 60000);
    this.timer = window.setInterval(() => this.advance(), 3000);
  }

  ngOnDestroy(): void {
    if (this.timer) window.clearInterval(this.timer);
    if (this.cinemaTimer) window.clearInterval(this.cinemaTimer);
    if (this.shipTimer) window.clearInterval(this.shipTimer);
  }

  slide(direction: number): void {
    this.move(direction, 'smooth');
  }

  private advance(): void {
    this.move(1, 'auto');
  }

  private startCinemaVideos(): void {
    document.querySelectorAll<HTMLVideoElement>('.product-cinema video').forEach((video) => {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      if (video.ended) video.currentTime = 0;
      video.play().catch(() => undefined);
    });
  }

  private async loadShipTelemetry(): Promise<void> {
    try {
      const summaryResponse = await fetch('https://pocketworld.org/api/live-summary', { cache: 'no-store' });
      const summary = await summaryResponse.json();
      const ships = summary.items?.find((item: { key: string }) => item.key === 'ships');
      if (ships?.count) {
        this.shipSummary = {
          count: Number(ships.count).toLocaleString(),
          label: `Public vessel activity shown as a trade-route reference, not a shipping service.`,
          updated: new Date(summary.updated_at || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          source: 'Source: PocketWorld live maritime API'
        };
      }

      const shipsResponse = await fetch('https://pocketworld.org/api/ships', { cache: 'no-store' });
      if (!shipsResponse.ok) return;
      const payload = await shipsResponse.json();
      const list = Array.isArray(payload) ? payload : (payload.ships || payload.items || payload.vessels || []);
      const livePoints = this.extractShipPoints(list);
      if (livePoints.length > 20) this.shipPoints = livePoints;
    } catch {
      this.shipSummary = {
        count: 'Live standby',
        label: 'Trade-route visualization is running while the public vessel feed reconnects.',
        updated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: 'Fallback visualization; API reconnects every 60 seconds'
      };
    }
  }

  private extractShipPoints(list: unknown[]): ShipPoint[] {
    return list
      .map((item, index) => {
        const vessel = item as Record<string, unknown>;
        const lat = Number(vessel['lat'] ?? vessel['latitude'] ?? vessel['Latitude']);
        const lon = Number(vessel['lon'] ?? vessel['lng'] ?? vessel['longitude'] ?? vessel['Longitude']);
        if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
        return {
          id: String(vessel['mmsi'] ?? vessel['id'] ?? `ship-${index}`),
          x: Math.min(96, Math.max(4, ((lon + 180) / 360) * 100)),
          y: Math.min(88, Math.max(10, ((90 - lat) / 180) * 100)),
          delay: (index % 16) * .15,
          speed: 2.6 + (index % 7) * .22
        };
      })
      .filter((point): point is ShipPoint => point !== null)
      .slice(0, 120);
  }

  private createFallbackShips(count: number): ShipPoint[] {
    return Array.from({ length: count }, (_, index) => ({
      id: `fallback-${index}`,
      x: 6 + ((index * 37) % 88),
      y: 13 + ((index * 23) % 72),
      delay: (index % 18) * .14,
      speed: 2.8 + (index % 8) * .18
    }));
  }

  private move(direction: number, behavior: ScrollBehavior): void {
    const el = document.getElementById('productsPageSlider');
    if (!el) return;
    this.activeIndex = (this.activeIndex + direction + this.products.length) % this.products.length;
    const card = el.querySelector<HTMLElement>('.slider-card');
    const step = card ? card.offsetWidth + 24 : Math.min(el.clientWidth * .9, 860);
    el.scrollTo({ left: this.activeIndex * step, behavior });
  }
}
