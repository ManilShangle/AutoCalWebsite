# AutoCal Website

This is the public landing page and marketing website for AutoCal, a Chrome extension that uses AI to extract event details from screenshots and add them to Google Calendar.

## Website Overview

The website is built with React, Vite, and Tailwind CSS. It showcases the AutoCal Chrome extension, explains how it works, and provides links to install the extension.

### Features

- Landing page with hero section and feature showcase
- How it Works section explaining the three-step process
- Features section highlighting AI extraction, crop tool, and meeting link detection
- Demo section showing a sample event extraction
- FAQ section addressing common questions
- Privacy Policy, Terms of Service, and Contact pages

### Tech Stack

- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- shadcn/ui (UI components)
- React Router (routing with HashRouter for GitHub Pages)

### Routes

The website uses HashRouter for GitHub Pages compatibility:
- `/` - Home/Landing page
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/contact` - Contact page

### Deployment

The website is deployed to GitHub Pages at: https://manilshangle.github.io/AutoCalWebsite/

To build for production:
```bash
npm run build
```

The built files are in the `dist` folder. Deploy this folder to GitHub Pages or any static hosting service.

### Development

To run the development server:
```bash
npm run dev
```

The website will be available at http://localhost:8080

### Project Structure

```
AutoCalWebsite/
├── public/             # Static assets
│   ├── images/         # Icons and images
│   └── 404.html        # Custom 404 for GitHub Pages
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── pages/         # Page components
│   │   ├── Index.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   └── Contact.tsx
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   └── App.tsx        # Main app component
├── index.html         # HTML entry point
├── package.json       # Dependencies
├── vite.config.ts     # Vite configuration
└── tailwind.config.ts # Tailwind configuration
```

### Chrome Web Store Submission

When submitting to the Chrome Web Store, ensure your extension's manifest.json correctly links to this website as the official homepage. The website must have accessible links to the privacy policy and terms of service.

## License

This project is proprietary software. All rights reserved.
