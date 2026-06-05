import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <a class="brand" routerLink="/" aria-label="OroPrime Exports Home">
        <img src="assets/images/oroprime-logo.png" alt="OroPrime Exports logo" />
      </a>
      <nav>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/products" routerLinkActive="active">Products</a>
        <a routerLink="/markets" routerLinkActive="active">Markets</a>
        <a routerLink="/insights" routerLinkActive="active">Case Studies</a>
        <a routerLink="/resources" routerLinkActive="active">Resources</a>
        <a routerLink="/contact" class="quote-link">Request Quote</a>
      </nav>
    </header>
    <router-outlet />
    <footer class="site-footer">
      <div>
        <img src="assets/images/oroprime-logo.png" alt="OroPrime Exports" />
        <p>Connecting Worlds, Delivering Trust.</p>
        <div class="social-links" aria-label="Social media links">
          <a href="https://www.linkedin.com/search/results/companies/?keywords=OroPrime%20Exports" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://www.instagram.com/explore/search/keyword/?q=oroprime%20exports" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.youtube.com/results?search_query=OroPrime+Exports" target="_blank" rel="noopener">YouTube</a>
          <a href="https://www.facebook.com/search/top/?q=OroPrime%20Exports" target="_blank" rel="noopener">Facebook</a>
        </div>
      </div>
      <div><h4>Global Reach</h4><p><a routerLink="/markets">North America</a></p><p><a routerLink="/markets">GCC and Middle East</a></p><p><a routerLink="/markets">Europe and Asia-Pacific</a></p></div>
      <div><h4>Services</h4><p><a routerLink="/products">Product sourcing</a></p><p><a routerLink="/markets">Market research</a></p><p><a routerLink="/resources">Documentation support</a></p></div>
      <div><h4>Contact</h4><p><a href="mailto:sales@oroprimeexports.com">sales&#64;oroprimeexports.com</a></p><p><a routerLink="/contact">WhatsApp inquiry enabled</a></p></div>
    </footer>
  `
})
export class AppComponent {}
