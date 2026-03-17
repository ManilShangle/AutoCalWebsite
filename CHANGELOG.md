# Changelog

All notable changes to the AutoCal Website project will be documented in this file.

## [Unreleased]

### Fixed

- **GitHub Pages Routing Issue**: Fixed the issue where direct navigation or page reload on routes like `/privacy` would result in a 404 error. The website now properly redirects all direct navigation requests to the HashRouter format.

  - Problem: When users directly navigated to or reloaded a URL like `https://manilshangle.github.io/AutoCalWebsite/privacy`, GitHub Pages would serve a 404 page because it didn't know about the SPA routing.
  
  - Solution: Updated `public/404.html` with a JavaScript redirect that detects the requested path and redirects to the proper HashRouter URL format.
  
  - Before: `https://manilshangle.github.io/AutoCalWebsite/privacy` (broken)
  - After: `https://manilshangle.github.io/AutoCalWebsite/#/privacy` (works)

- **Navbar Scroll Navigation**: Fixed the scroll navigation issue when clicking "How it Works" or "Features" from non-home pages. Updated the redirect URL from `/#${id}` to `/#/${id}`.

- **Image Paths**: Fixed redundant image paths in components. Changed `/AutoCalWebsite/images/...` to `/images/...` in:
  - `src/components/Navbar.tsx`
  - `src/components/Footer.tsx`
  - `src/components/ExtensionMockup.tsx`

  This was necessary because Vite's `base: '/AutoCalWebsite/'` configuration already prepends the base path to all asset URLs.

### Added

- **README.md**: Created comprehensive README documentation for the website project.
- **CHANGELOG.md**: Created this changelog file to track changes.

## Project Information

- **Website URL**: https://manilshangle.github.io/AutoCalWebsite/
- **Repository**: https://github.com/ManilShangle/Data-Glacier-Internship
- **Tech Stack**: React, Vite, Tailwind CSS, HashRouter

### Routing Configuration

The website uses HashRouter for GitHub Pages compatibility. Routes:
- `/` - Home/Landing page
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/contact` - Contact page
- `*` - 404 Not Found

### Build and Deployment

To build for production:
```bash
npm run build
```

The built files are in the `dist` folder. Deploy this folder to GitHub Pages.
