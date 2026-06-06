# OroPrime Exports Angular Site

Responsive Angular 19 static website for OroPrime Exports.

## Run locally
```powershell
npm install
npm start
```

## Build
```powershell
npm run build
```

## Cloudflare Pages
- Framework preset: Angular
- Build command: `npm run build`
- Output directory: `dist/oroprime-exports-site/browser`

## Quote Email API
The quote form posts to `/api/send-quote`, which sends email through Zoho SMTP from a server-side endpoint. Do not put the Zoho password in Angular/browser code.

Set these production environment variables on the backend or serverless host:
```text
ZOHO_MAIL_HOST=smtp.zoho.com
ZOHO_MAIL_PORT=465
ZOHO_MAIL_USERNAME=sales@oroprime.com
ZOHO_MAIL_PASSWORD=<zoho-app-password>
```

The included `api/send-quote.js` is a Node/Vercel-style serverless function. If deploying only as a static Cloudflare Pages site, convert this endpoint to a Cloudflare Pages Function or Worker and keep the same `/api/send-quote` route.

## Included
- Logo from provided OroPrime image
- USA Atlanta + India positioning
- Product catalog
- Country-wise market insights
- Responsive RFQ form UI
- Export documentation resources
- Animations and hover interactions
