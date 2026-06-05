import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { MarketsComponent } from './pages/markets/markets.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'OroPrime Exports' },
  { path: 'about', component: AboutComponent, title: 'About OroPrime Exports' },
  { path: 'products', component: ProductsComponent, title: 'Export Products' },
  { path: 'markets', component: MarketsComponent, title: 'Market Insights' },
  { path: 'insights', component: InsightsComponent, title: 'Case Studies and Blogs' },
  { path: 'resources', component: ResourcesComponent, title: 'Export Resources' },
  { path: 'contact', component: ContactComponent, title: 'Request a Quote' },
  { path: '**', redirectTo: '' }
];
