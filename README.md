# JS Tech Solutions Ltd: Website

React + Vite + Tailwind (client) · Express + PostgreSQL (server)

## Setup (first time)

1. Install Node 18+ and PostgreSQL, then create a database:
   ```
   createdb jstech
   ```
2. Install everything:
   ```
   npm install
   npm run install:all
   ```
3. Configure the server:
   ```
   cp server/.env.example server/.env
   ```
   Edit `server/.env`: set `DATABASE_URL`, a long random `JWT_SECRET`, `ADMIN_PASSWORD`, and the Gmail App Password for email alerts (optional).
4. Create the admin user:
   ```
   npm run seed
   ```
5. Run both servers:
   ```
   npm run dev
   ```
   Site: http://localhost:5173 · Admin: http://localhost:5173/admin

## Edit your content

Everything editable (phone, email, hours, services, packages, portfolio, prices) lives in `client/src/config/site.js`. Items marked PLACEHOLDER need your real details.

## Before going live

- Replace `YOUR-DOMAIN` in `client/public/robots.txt` and `client/public/sitemap.xml`.
- Set your shop's exact address in `mapQuery` (site.js).
- Add real projects to `portfolio` and real prices to `packages`.
- Optional: replace `public/logo.png` with a transparent PNG/SVG version.

## Deploy (one server)

```
npm run build
NODE_ENV=production npm start
```
In production Express serves the built React app and the API together. Works on Render, Railway or a VPS. Set the same variables from `.env.example` on the host (use `PGSSL=true` for hosted Postgres), and do not commit `.env`.
