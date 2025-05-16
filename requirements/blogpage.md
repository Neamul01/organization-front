# Software Requirements Specification (SRS) - Vinta Software: Blog Page

## Page Overview

**URL:** https://www.vintasoftware.com/blog  
**Purpose:** Present blog posts authored by Vinta Software on technical topics such as healthtech, security, APIs, frameworks, and team processes. Allows filtering by category and supports discoverability and engagement with insightful technical content.

---

## Route

`/blog`

## Shared Layout

- Use existing `Header` and `Footer` components from base layout.
- see 'src/app/services/page.tsx' for the layout

## Section 1: Header (Global Navigation)

---

## Section 2: Blog Hero Section

### Content

- **Title:** `Our Blog` (large, centered, blue text)
- **Subtitle:** `Boost your knowledge with the insights from our expert team.` (centered, gray text)

### Design

- Background: Light gradient with abstract geometric shapes and soft blue tones
- Layout: Centered content with ample vertical padding (top and bottom)

---

## Section 3: Category Filter Chips

### UI Elements

- Horizontally scrollable list of filter tags (pills/buttons), default style white with border
- **Active chip:** Blue background, white text
- **Tags include:**
  - Health (default selected in screenshot)
  - EHR
  - Medplum
  - Security
  - Next.js
  - React
  - People
  - Open Source
  - API

### Behavior

- Clicking a tag updates the post grid below by filtering posts by category
- URL updates accordingly (e.g., `/blog/category/health` for “Health”)
- Smooth transition animation on selection

---

## Section 4: Blog Post Grid

### Layout

- Responsive grid (3-column on desktop, 2-column tablet, 1-column mobile)

### Each Blog Card Includes:

- **Image thumbnail** (top, illustrated style)
- **Title** (clickable, routes to full blog post)
- **Excerpt** (short summary of the article)
- **Meta:**
  - Label: `Article`
  - Read time: `4 min read` (or equivalent)

### Behavior

- Hover effect on card (subtle shadow or scale)
- Cards link to individual blog post detail pages

### Posts shown in screenshot:

- How to build a HIPAA-compliant telehealth app...
- Lab testing integration for healthtech...
- Awell and Medplum integration...
- FHIR-native applications...
- Headless EHRs...
- Medplum Design System...
- Streamlining clinical workflows...
- Building secure patient-provider communication...
- Inside Vinta’s HIPAA compliance blueprint...
- Transforming user data entry...
- Stop building your own EHR...
- FHIR, US Core, and Medplum...

---

## Section 5: “Check out other blog posts”

### Content

- **Heading:** `Check out other blog posts`
- **Grid layout:** 3-card horizontal row

### Cards:

- Coding a chatless assistant with Django & OpenAI
- Vinta at Pygotham.tv 2023
- URL, URI, URN — what’s the difference?

### Styling

- Dark background cards
- White font
- Hover interaction: border or light highlight
- Clickable entire card

---

## Section 6: Newsletter Sign-up

### Content

- **Title:** `Join the Tech Forward newsletter`
- **Subtitle:** `Stay ahead of the curve with our latest trends about tech development`

### Form:

- Input field: `Email`
- CTA button: `Subscribe`

### Behavior:

- Validation: Email format must be valid before allowing submission
- Style: Form aligned horizontally, compact, inside dark block with rounded corners

---

## Section 7: Footer

---

## Section 8: Functionality & UX

- **Category filter behavior:**
  - Updates visible posts via client-side routing or filtering
  - URL reflects selected tag (e.g., `/blog/category/medplum`)
- **Responsive Design:**
  - Mobile: collapses grids, stacks sections vertically
  - Tablet: adjusts to 2-column layouts
  - Desktop: full layout with margin padding
- **Blog Cards:**
  - Hoverable, clickable
  - Optimized images with lazy loading

---

## Section 9: Accessibility

- All interactive elements (chips, cards, buttons) must be keyboard navigable
- Input field labeled with accessible `aria-label`
- Semantic HTML used for headings, sections, articles
- Images include descriptive `alt` text

---

## Section 10: SEO Requirements

- **Title Tag:** “Blog - Insights and Engineering Articles | Vinta Software”
- **Meta Description:** “Explore software engineering insights, healthcare integration tutorials, and Vinta’s tech expertise in Python, Django, Medplum, React, and more.”
- **Open Graph Tags:**
  - `og:title`, `og:description`, `og:image`, `og:url`
- **Twitter Card Metadata**
- Schema markup for `BlogPosting`

---

## Section 11: Performance

- Blog post thumbnails lazy-loaded
- Static generation or SSR for posts list (Next.js preferred)
- Filter categories client-side for faster UX
- Compress all images for web performance
