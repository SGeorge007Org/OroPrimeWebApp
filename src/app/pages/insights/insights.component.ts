import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Article, articles, tradeVideos } from '../../data/site-data';

@Component({selector:'app-insights', standalone:true, template:`<section class="page reveal"><span class="eyebrow">Case Studies / Blogs</span><h1>Business pages for import-export decisions</h1><p>Review product economics, compliance checkpoints, shipment assumptions and buyer-seller readiness in one visual library.</p></section><section class="section"><div class="section-head slider-head"><div><span>Case Study Library</span><h2>Review detailed business pages</h2><p>Select any case study to view the full product business page in detail.</p></div><div class="slider-controls"><button type="button" aria-label="Previous case studies" (click)="slide('insightCaseSlider', -1)">‹</button><button type="button" aria-label="Next case studies" (click)="slide('insightCaseSlider', 1)">›</button></div></div><div id="insightCaseSlider" class="slider-track case-slider">@for(article of articles; track article.title){<article class="article-card case-study-card slider-card lift"><button class="case-thumb" type="button" (click)="openCase(article)"><img [src]="article.image" [alt]="article.title"></button><div><small>{{article.type}} · {{article.meta}}</small><h3>{{article.title}}</h3><p>{{article.summary}}</p><button type="button" class="text-link link-button" (click)="openCase(article)">View details -></button></div></article>}</div></section><section class="section video-section reveal"><div class="section-head slider-head"><div><span>Trade Videos</span><h2>Videos for export-import readiness</h2><p>Quick primers for import-export basics, product documents and international trade terms.</p></div><div class="slider-controls"><button type="button" aria-label="Previous videos" (click)="slide('insightVideoSlider', -1)">‹</button><button type="button" aria-label="Next videos" (click)="slide('insightVideoSlider', 1)">›</button></div></div><div id="insightVideoSlider" class="slider-track video-slider">@for(video of tradeVideos; track video.title){<article class="video-card slider-card"><iframe [src]="safeUrl(video.embed)" [title]="video.title" loading="lazy" allowfullscreen></iframe><div><small>{{video.tag}}</small><h3>{{video.title}}</h3><p>{{video.summary}}</p></div></article>}</div></section><section class="section editorial-band"><div><span class="eyebrow">Buyer education</span><h2>Helpful trade knowledge</h2><p>Market explainers, documentation guides, product grade checklists and country-specific sourcing notes for buyers and suppliers.</p></div><div class="process"><div>Market explainers</div><div>Product grade guides</div><div>Case studies</div><div>Documentation notes</div></div></section>@if(selectedCase()){<div class="case-modal" role="dialog" aria-modal="true" (click)="closeCase()"><div class="case-modal-panel" (click)="$event.stopPropagation()"><button class="case-close" type="button" aria-label="Close case study" (click)="closeCase()">×</button><img [src]="selectedCase()?.image" [alt]="selectedCase()?.title"><div><small>{{selectedCase()?.meta}}</small><h2>{{selectedCase()?.title}}</h2><p>{{selectedCase()?.summary}}</p></div></div></div>}`})
export class InsightsComponent implements AfterViewInit, OnDestroy {
  articles = articles;
  tradeVideos = tradeVideos;
  selectedCase = signal<Article | null>(null);
  private caseTimer?: number;
  private caseIndex = 0;

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    this.caseTimer = window.setInterval(() => this.advanceCases(), 3000);
  }

  ngOnDestroy(): void {
    if (this.caseTimer) window.clearInterval(this.caseTimer);
  }

  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  slide(id: string, direction: number): void {
    this.move(id, direction, 'smooth');
  }

  private advanceCases(): void {
    this.move('insightCaseSlider', 1, 'auto');
  }

  private move(id: string, direction: number, behavior: ScrollBehavior): void {
    const el = document.getElementById(id);
    if (!el) return;
    const total = id === 'insightCaseSlider' ? this.articles.length : this.tradeVideos.length;
    this.caseIndex = (this.caseIndex + direction + total) % total;
    const card = el.querySelector<HTMLElement>('.slider-card');
    const step = card ? card.offsetWidth + 24 : Math.min(el.clientWidth * .86, 760);
    el.scrollTo({ left: this.caseIndex * step, behavior });
  }

  openCase(article: Article): void {
    this.selectedCase.set(article);
  }

  closeCase(): void {
    this.selectedCase.set(null);
  }
}
