# Joshua Shuster — Author Website

A simple, professional, responsive landing site for author and educator Joshua Shuster, built with plain HTML, CSS, and JavaScript. No build step, no framework, no dependencies — open it and it runs.

## Folder structure

```
joshua-shuster-website/
├── index.html          Home page
├── about.html           About the author
├── books.html            Book detail + author interview
├── contact.html           Contact form + social links
├── css/
│   └── styles.css         All styling (design tokens at the top)
├── js/
│   └── main.js             Mobile nav, form validation
├── images/
│   ├── author-photo.jpg
│   └── book-cover.jpg
└── README.md
```

## Running it locally

No build tools are required. Either:

1. **Double-click `index.html`** to open it in your browser, or
2. **Serve it locally** (recommended, avoids browser file:// restrictions):
   ```bash
   cd joshua-shuster-website
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

## Deploying

This is a static site, so it can be hosted anywhere that serves static files:
- **Netlify / Vercel**: drag-and-drop the folder, or connect a Git repo.
- **GitHub Pages**: push the folder to a repo and enable Pages.
- **Any web host**: upload the folder's contents via FTP/SFTP.

No server-side code, database, or environment variables are required.

## Connecting the newsletter form

The newsletter form on the home page (`#newsletter-form`) currently only shows a confirmation message in the browser — **it does not send email or store data anywhere.** To make it functional:

1. Sign up with an email provider (Mailchimp, ConvertKit/Kit, Brevo, etc.).
2. Replace the `<form>` action with the embed code / API endpoint they provide, **or**
3. Keep the existing markup and POST the form data to their API from `js/main.js` using `fetch()`.

## Connecting the contact form

The contact form on `contact.html` (`#contact-form`) validates input in the browser but does not submit anywhere. To make it functional without writing a backend:

- Use a form-as-a-service provider such as Formspree, Basin, or Getform: set the `<form>` `action` to the endpoint they give you and add `method="POST"`.
- Or write a small serverless function (e.g. on Netlify/Vercel) that emails you the submission.

## Security notes

- The site is fully static — there is no database, server code, or user data storage, which removes an entire class of common web vulnerabilities.
- All outbound links use `rel="noopener"` alongside `target="_blank"` to prevent the opened page from gaining a reference back to this site.
- Form inputs are validated on the client for usability; **always re-validate on the server** once you connect a real form backend.
- If you add a backend later, sanitize and validate every field server-side, use HTTPS, and rate-limit form submissions to prevent spam/abuse.

## Editing content

- **Text**: edit the HTML files directly — content is plain, readable markup.
- **Colors/fonts**: all design tokens live at the top of `css/styles.css` under `:root`.
- **Images**: replace files in `images/` (keep the same filenames, or update the `src` attributes).

## Credits

- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) and [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) via Google Fonts.
- Book: *The Power of Want & The Feeling of Need* by Joshua Shuster — [Amazon](https://www.amazon.com/dp/B0FVHML2S7/).
