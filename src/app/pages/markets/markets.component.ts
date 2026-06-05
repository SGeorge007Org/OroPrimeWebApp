import { Component, computed, signal } from '@angular/core';
import { globalExportLeaders, markets, Market } from '../../data/site-data';

type MarketMode = 'exports' | 'imports' | 'trade';

@Component({
  selector: 'app-markets',
  standalone: true,
  template: `
<section class="page reveal markets-hero">
  <span class="eyebrow">Market Intelligence</span>
  <h1>Interactive India trade lanes dashboard</h1>
  <p>Explore verified trade data with country selection, animated charts, global export leaders and a spoken market brief.</p>
</section>

<section class="section market-lab reveal">
  <div class="market-controls">
    <div class="toolbar">
      <select [value]="selected()" (change)="select($any($event.target).value)" aria-label="Select country">
        <option value="All Countries">All Countries</option>
        @for (m of markets; track m.country) {
          <option [value]="m.country">{{m.country}}</option>
        }
      </select>
      <select (change)="focus.set($any($event.target).value)">
        <option value="">All focus areas</option>
        <option>Agro</option>
        <option>metals</option>
        <option>industrial</option>
        <option>logistics</option>
        <option>EU</option>
        <option>GCC</option>
      </select>
    </div>
    <div class="mode-tabs" role="tablist" aria-label="Market chart mode">
      <button [class.active]="mode() === 'exports'" (click)="mode.set('exports')">Exports</button>
      <button [class.active]="mode() === 'imports'" (click)="mode.set('imports')">Imports</button>
      <button [class.active]="mode() === 'trade'" (click)="mode.set('trade')">Total Trade</button>
    </div>
  </div>

  <div class="chart-panel global-chart">
    <div class="chart-head">
      <div>
        <span class="eyebrow">Global Export Leaders</span>
        <h2>Where global export scale is concentrated</h2>
      </div>
      <p>World Bank export values listed by Wikipedia for goods and services, shown in US$ billions.</p>
    </div>
    <div class="leader-chart">
      @for (leader of globalExportLeaders; track leader.country) {
        <div class="leader-row">
          <span>{{leader.country}}</span>
          <div><i [style.width.%]="globalWidth(leader.exports)"></i></div>
          <b>{{money(leader.exports)}}</b>
          <small>{{leader.topGood}}</small>
        </div>
      }
    </div>
  </div>

  <div class="market-dashboard">
    <article class="market-spotlight">
      <small>{{selected() === 'All Countries' ? 'Global overview' : selectedMarket().lane}}</small>
      <h2>{{selected()}}</h2>
      <p>{{selected() === 'All Countries' ? 'All tracked markets are visible. Select one country to review exports, imports, trade balance and country-specific details.' : selectedMarket().opportunity}}</p>
      <div class="spotlight-grid">
        <div><span>Countries shown</span><b>{{filtered().length}}</b></div>
        <div><span>Export chart max</span><b>{{money(chartMax())}}</b></div>
        <div><span>Selected filter</span><b>{{focus() || 'All focus areas'}}</b></div>
      </div>
      <button class="btn gold voice-btn" type="button" (click)="speak()">Play Voice Brief</button>
    </article>

    <article class="trade-orbit country-photo" [style.backgroundImage]="countryBackground()">
      <div>
        <span>{{selected() === 'All Countries' ? 'Tracked Markets' : selectedMarket().country}}</span>
        <strong>{{selected() === 'All Countries' ? filtered().length : selectedMarket().lane}}</strong>
      </div>
      <p>{{selected() === 'All Countries' ? 'Choose a country to review its trade profile and visual references.' : selectedMarket().focus}}</p>
    </article>
  </div>

  @if (selected() !== 'All Countries') {
    <div class="chart-panel country-graph">
      <div class="chart-head">
        <div>
          <span class="eyebrow">Country Graph</span>
          <h2>{{selectedMarket().country}} trade profile</h2>
        </div>
        <p>Country-specific view of exports from India, imports to India, total trade and trade balance where listed.</p>
      </div>
      <div class="country-bars">
        <div><span>Exports</span><i [style.width.%]="countryWidth(selectedMarket().exports)"></i><b>{{money(selectedMarket().exports)}}</b></div>
        <div><span>Imports</span><i [style.width.%]="countryWidth(selectedMarket().imports || 0)"></i><b>{{optionalMoney(selectedMarket().imports)}}</b></div>
        <div><span>Total trade</span><i [style.width.%]="countryWidth(selectedMarket().totalTrade || 0)"></i><b>{{optionalMoney(selectedMarket().totalTrade)}}</b></div>
        <div><span>Balance</span><i [class.deficit]="isNegative(selectedMarket().balance)" [style.width.%]="countryWidth(abs(selectedMarket().balance))"></i><b>{{optionalMoney(selectedMarket().balance)}}</b></div>
      </div>
    </div>

    <div class="chart-panel country-visuals">
      <div class="chart-head">
        <div>
          <span class="eyebrow">Country Inputs</span>
          <h2>{{selectedMarket().country}} visual trade notes</h2>
        </div>
        <p>Review trade visuals, bilateral references and product-flow notes for the selected market.</p>
      </div>
      <div class="country-image-grid">
        <img [src]="countryImage()" [alt]="selectedMarket().country + ' trade visual'">
        <article class="trade-reference-card">
          <span>Trade Direction</span>
          <h3>{{selectedMarket().lane}}</h3>
          <p>{{selectedMarket().opportunity}}</p>
        </article>
        <article class="trade-reference-card">
          <span>Product Focus</span>
          <h3>{{selectedMarket().focus}}</h3>
          <p>Use the country graph to shortlist products, documents and buyer conversations.</p>
        </article>
        @if (selectedMarket().country === 'United States') {
          <img src="assets/images/Historical bilateral trade.jpg" alt="US India historical bilateral trade chart">
          <img src="assets/images/What india exports to usa.jpg" alt="India exports to United States chart">
        }
      </div>
    </div>
  }

  <div class="chart-panel">
    <div class="chart-head">
      <div>
        <span class="eyebrow">Animated Chart</span>
        <h2>{{chartTitle()}}</h2>
      </div>
      <p>Values are in US$ billions. Countries without a value in the selected Wikipedia table are hidden from this chart.</p>
    </div>
    <div class="bar-chart">
      @for (m of chartMarkets(); track m.country) {
        <button class="bar-row" type="button" [class.selected]="selected() === m.country" (click)="select(m.country)">
          <span>{{m.country}}</span>
          <div><i [style.width.%]="barWidth(m)"></i></div>
          <b>{{metricMoney(m)}}</b>
        </button>
      }
    </div>
  </div>

  <div class="market-grid interactive">
    @for (m of filtered(); track m.country) {
      <article class="market-card lift" [class.selected]="selected() === m.country" (click)="select(m.country)">
        <span>{{m.lane}}</span>
        <h3>{{m.country}}</h3>
        <p>{{m.opportunity}}</p>
        <div><span>Exports</span><b>{{money(m.exports)}}</b></div>
        <div><span>Imports</span><b>{{optionalMoney(m.imports)}}</b></div>
        <div><span>Focus</span><b>{{m.focus}}</b></div>
      </article>
    }
  </div>

  <div class="source-note">
    <b>Data note:</b> Country trade values are based on Wikipedia's India trade partner tables. The global export-leader chart uses Wikipedia's World Bank-based list of countries by exports. Values are for directional comparison and should be refreshed before final commercial decisions.
  </div>
</section>
`
})
export class MarketsComponent {
  markets = markets;
  globalExportLeaders = globalExportLeaders;
  focus = signal('');
  mode = signal<MarketMode>('exports');
  selected = signal('All Countries');

  filtered = computed(() => this.markets.filter(m => {
    const haystack = `${m.country} ${m.focus} ${m.lane}`.toLowerCase();
    return (this.selected() === 'All Countries' || m.country === this.selected()) &&
      (!this.focus() || haystack.includes(this.focus().toLowerCase()));
  }));

  selectedMarket = computed(() => this.markets.find(m => m.country === this.selected()) || this.markets[0]);

  chartMarkets = computed(() => this.filtered()
    .filter(m => this.metricValue(m) !== null)
    .sort((a, b) => (this.metricValue(b) || 0) - (this.metricValue(a) || 0)));

  chartMax = computed(() => Math.max(...this.chartMarkets().map(m => this.metricValue(m) || 0), 1));

  select(country: string): void {
    this.selected.set(country);
  }

  metricValue(market: Market): number | null {
    if (this.mode() === 'imports') return market.imports;
    if (this.mode() === 'trade') return market.totalTrade;
    return market.exports;
  }

  chartTitle(): string {
    if (this.mode() === 'imports') return 'Largest import sources for India';
    if (this.mode() === 'trade') return 'Largest total trade partners';
    return 'Largest export destinations from India';
  }

  barWidth(market: Market): number {
    return ((this.metricValue(market) || 0) / this.chartMax()) * 100;
  }

  money(value: number): string {
    return `$${value.toFixed(2)}B`;
  }

  globalWidth(value: number): number {
    const max = Math.max(...this.globalExportLeaders.map(item => item.exports), 1);
    return (value / max) * 100;
  }

  countryWidth(value: number): number {
    const market = this.selectedMarket();
    const max = Math.max(market.exports, market.imports || 0, market.totalTrade || 0, Math.abs(market.balance || 0), 1);
    return (Math.abs(value) / max) * 100;
  }

  abs(value: number | null): number {
    return Math.abs(value || 0);
  }

  metricMoney(market: Market): string {
    return this.optionalMoney(this.metricValue(market));
  }

  optionalMoney(value: number | null): string {
    return value === null ? 'Not listed' : this.money(value);
  }

  isPositive(value: number | null): boolean {
    return value !== null && value > 0;
  }

  isNegative(value: number | null): boolean {
    return value !== null && value < 0;
  }

  shareGradient(market: Market): string {
    const share = Math.min(market.exportShare || market.importShare || 8, 24);
    const angle = Math.max(share * 10, 48);
    return `conic-gradient(from 200deg, #f2d28a 0deg ${angle}deg, #123a5a ${angle}deg 360deg)`;
  }

  countryBackground(): string {
    return `linear-gradient(0deg, rgba(7,23,38,.72), rgba(7,23,38,.72)), url("${this.countryImage()}")`;
  }

  countryImage(): string {
    const images: Record<string, string> = {
      'United States': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=82&w=1200&auto=format&fit=crop',
      China: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=82&w=1200&auto=format&fit=crop',
      'United Arab Emirates': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=82&w=1200&auto=format&fit=crop',
      Russia: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=82&w=1200&auto=format&fit=crop',
      'Saudi Arabia': 'https://images.unsplash.com/photo-1587213811864-46e59f6873b1?q=82&w=1200&auto=format&fit=crop',
      Singapore: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=82&w=1200&auto=format&fit=crop',
      Netherlands: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=82&w=1200&auto=format&fit=crop',
      Bangladesh: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=82&w=1200&auto=format&fit=crop',
      Germany: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=82&w=1200&auto=format&fit=crop'
    };
    return images[this.selectedMarket().country] || 'https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?q=82&w=1200&auto=format&fit=crop';
  }

  speak(): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const market = this.selectedMarket();
    const text = this.selected() === 'All Countries'
      ? `All countries are selected. The dashboard is showing ${this.filtered().length} tracked markets. Choose a country from the dropdown for a focused trade brief.`
      : `${market.country}. ${market.opportunity} Exports from India are ${this.money(market.exports)}. Imports are ${this.optionalMoney(market.imports)}. Focus areas are ${market.focus}.`;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
}
