# WebNexus Website

Professional website for WebNexus services: website development, mobile apps, cloud solutions, AI chatbot development, pricing, portfolio, and contact.

## Easy Run

Double-click:

```text
start-webnexus.bat
```

Then open:

```text
http://localhost:5600
```

## Command Line Run

Install dependencies once:

```bash
npm install
```

Start the website:

```bash
npm start
```

Open:

```text
http://localhost:5500
```

## Google Listing Important Point

Google cannot list a local URL like `localhost` or `127.0.0.1`.

To appear on Google, the website must be uploaded to public hosting first. After hosting, submit this sitemap in Google Search Console:

```text
https://www.webnexus.com/sitemap.xml
```

## Easy Hosting Options

Use any one:

- Vercel
- Netlify
- Render
- GitHub Pages
- Shared hosting with cPanel

For Node.js hosting, use:

```bash
npm install
npm start
```

The server uses this port automatically:

```text
process.env.PORT || 5500
```

That means Render, Railway, and other Node hosts can assign their own port.

## Files

- `index.html` - homepage
- `services.html` - service details
- `pricing.html` - packages and AI chatbot add-on
- `portfolio.html` - portfolio examples
- `about.html` - business story and process
- `contact.html` - WhatsApp and inquiry form
- `robots.txt` - search engine crawl rules
- `sitemap.xml` - Google sitemap
- `server.js` - Node.js running server
