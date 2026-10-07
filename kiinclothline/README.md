# Kiin Clothline

Website for **Kiin Clothline**, a bespoke suit tailor in Eastleigh, Nairobi, Kenya. Built with Next.js (App Router).

## Features

- Information sections: hero, about, services, how it works, visit us (map, hours, phone/WhatsApp, Instagram)
- **Collection**: a gallery of tailored suits, filterable by category, with a lightbox
- **Booking form**: customer details, suit type, occasion, preferred fitting date/time, optional measurements and notes
  - Requests are saved by `POST /api/bookings`
  - After submitting, the customer can also send the booking to the shop on WhatsApp with one tap (the message is pre-filled)
- **Admin page** (`/admin`): view booking requests (protected by `ADMIN_KEY`)

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

| Env variable | Default      | Purpose                                         |
|--------------|--------------|-------------------------------------------------|
| `ADMIN_KEY`  | `kiin-admin` | Key for `/admin`. **Change this in production.** |

Bookings are stored in `data/bookings.json`, which git ignores. Serverless hosts like Vercel have a read-only filesystem, so to deploy there, swap that file for a database. Until then, the WhatsApp button still delivers each booking to the shop.

## Editing content

- **Shop details** (phone, WhatsApp, Instagram, map): `app/lib/site.ts`
- **Suits gallery**: the `suits` list in `app/lib/site.ts`. The images are web-optimised copies in `public/suits/`. The originals stay in `public/Images/`.
- **Booking options** (suit types, time slots): `app/lib/booking.ts`
