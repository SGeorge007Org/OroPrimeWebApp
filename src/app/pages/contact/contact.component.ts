import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
<section class="page reveal">
  <span class="eyebrow">Request Quote</span>
  <h1>Send your product requirement</h1>
  <p>Tell us product, quantity, destination country, preferred port and expected timeline.</p>
</section>

<section class="section split">
  <form class="rfq" (ngSubmit)="submitQuote()">
    <input name="name" [(ngModel)]="quote.name" placeholder="Your name" required>
    <input name="contact" [(ngModel)]="quote.contact" placeholder="Email address" required>
    <input name="phone" [(ngModel)]="quote.phone" placeholder="Phone or WhatsApp number">
    <input name="product" [(ngModel)]="quote.product" placeholder="Product interest, for example cashew, ginger, scrap metal, rice">
    <input name="quantity" [(ngModel)]="quote.quantity" placeholder="Quantity">
    <input name="destination" [(ngModel)]="quote.destination" placeholder="Destination country">
    <input name="port" [(ngModel)]="quote.port" placeholder="Preferred port">
    <textarea name="requirements" [(ngModel)]="quote.requirements" placeholder="Additional requirements"></textarea>
    <button class="btn gold" type="submit" [disabled]="submitting">{{submitting ? 'Sending Request...' : 'Submit Request'}}</button>
    @if (statusMessage) {
      <p class="form-status" [class.error]="statusType === 'error'">{{statusMessage}}</p>
    }
  </form>

  <div class="contact-card">
    <h2>Office Locations</h2>
    <p><b>USA:</b> Atlanta, GA</p>
    <p><b>Middle East:</b> Dubai</p>
    <p><b>India West:</b> Pune</p>
    <p><b>India East:</b> Patna</p>
    <p><b>Email:</b> <a href="mailto:sales@oroprime.com">sales&#64;oroprime.com</a></p>
  </div>
</section>`
})
export class ContactComponent {
  submitting = false;
  statusMessage = '';
  statusType: 'success' | 'error' = 'success';
  quote = {
    name: '',
    contact: '',
    phone: '',
    product: '',
    quantity: '',
    destination: '',
    port: '',
    requirements: ''
  };

  async submitQuote(): Promise<void> {
    if (this.submitting) return;
    if (!this.quote.name.trim() || !this.quote.contact.trim()) {
      this.statusType = 'error';
      this.statusMessage = 'Please enter your name and email or WhatsApp number.';
      return;
    }

    this.submitting = true;
    this.statusMessage = '';

    const payload = {
        _subject: `Quote request: ${this.quote.product || 'General product inquiry'}`,
        name: this.quote.name,
        contact: this.quote.contact,
        phone: this.quote.phone || 'Not provided',
        product_interest: this.quote.product || 'General product inquiry',
      quantity: this.quote.quantity || 'Not provided',
      destination_country: this.quote.destination || 'Not provided',
      preferred_port: this.quote.port || 'Not provided',
      additional_requirements: this.quote.requirements || 'Not provided',
      source: 'OroPrime website quote form'
    };

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Email request failed' }));
        throw new Error(error.message || 'Email request failed');
      }

      this.statusType = 'success';
      this.statusMessage = 'Thank you. Your quote request has been sent to OroPrime.';
      this.quote = { name: '', contact: '', phone: '', product: '', quantity: '', destination: '', port: '', requirements: '' };
    } catch (error) {
      this.statusType = 'error';
      this.statusMessage = error instanceof Error && error.message
        ? `We could not send the request automatically: ${error.message}`
        : 'We could not send the request automatically. Please email sales@oroprime.com.';
    } finally {
      this.submitting = false;
    }
  }
}
