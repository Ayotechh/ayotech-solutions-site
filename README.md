# Ayotech Solutions Website

Responsive React + TypeScript + Tailwind CSS website for Ayotech Solutions, with selectable website packages and a booking/enquiry form that can send through email (Vercel Function + Resend) or WhatsApp.

## Included

- Responsive landing page with service categories, process, about section and contact information.
- Actual Ayotech brand lockup cropped from the supplied branding image (`public/ayotech-logo.jpg`).
- Selectable website package list; choosing one updates the details panel and preselects that service in the enquiry form.
- Official package ranges: Landing Page ₦35,000–₦50,000; Starter ₦65,000–₦85,000; Standard ₦95,000–₦150,000; Advanced ₦160,000–₦250,000; E-commerce ₦200,000–₦350,000; Custom by quotation.
- Explicit dashboard descriptions, Google SEO / AI-search explanations, separately billed domain/hosting notes and maintenance offers for Advanced/E-commerce.
- WhatsApp enquiries open a prepared message to +234 706 378 8674. The visitor must press Send in WhatsApp.
- Email endpoint at `api/enquiry.ts`, built for Vercel Functions and Resend.

## Local development

Requirements: Node.js 20+ recommended.

```bash
npm install
npm run dev
```

## Email setup before deployment

1. Create a Resend account and API key.
2. Verify a sending domain or email address with Resend. Use a sender address Resend permits for production sending; the destination address can remain `bookayotechsolutions@gmail.com`.
3. In Vercel Project Settings → Environment Variables, set:
   - `RESEND_API_KEY`
   - `ENQUIRY_FROM_EMAIL` (for example, `Ayotech Website <website@your-verified-domain.com>`)
   - `ENQUIRY_TO_EMAIL` (`bookayotechsolutions@gmail.com`)
4. Deploy to Vercel. The `api/enquiry.ts` function sends the submitted details using Resend. The secret remains server-side and is not exposed to the browser.
5. Test an email enquiry and check the destination inbox/spam folder. Until the environment variables and sender verification are configured, the email form will show a clear setup message and visitors can use WhatsApp.

The website is a Vite SPA. For Vercel, Vite static output and the `/api` function are supported from this project layout. Do not put API keys in frontend `VITE_*` variables.

## Pricing / scope notes

- Domain registration and third-party hosting are excluded from all website package prices and should be quoted separately.
- Advanced Website includes one month of free maintenance; E-commerce includes two months. Terms and conditions apply. The precise maintenance coverage and exclusions should be agreed in the client proposal/contract.
- Payment gateway availability and provider charges depend on the selected provider and are separate where applicable.
- Google SEO and AI-search optimisation can improve machine understanding and eligibility for relevant discovery but cannot guarantee rankings or recommendations.

## Before going live

- Confirm the public domain to use. The source proposal mentions `www.ayotechcom.com`, but the domain was not independently verified or configured here.
- Confirm the verified sender identity for Resend.
- Review the service scope, privacy wording, maintenance terms and any required legal policies.
- Run `npm run build` and test desktop/mobile layouts and both enquiry routes.
