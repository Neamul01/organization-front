# SRS: About Us Page – Vinta Software Clone

## Route

`/about-us`

## Shared Layout

- Use existing `Header` and `Footer` components from base layout.
- see 'src/app/services/page.tsx' for the layout

---

## Sections & Components

### 1. Hero Section – `src/components/about/Hero.tsx`

- **Title (2-line)**:

  ```
  For a decade, we have
  been a trusted partner in building successful products
  ```

- **Subtitle**:  
  `Creating and scaling winning products for fast-growing businesses is our expertise.`

- **Visuals**:

  - Group of team members displayed in circular portraits with subtle geometric shapes.
  - Gradient background (light blue).
  - Vinta logo top-left, CTA header.

- **Layout**:
  - Left-aligned text, right-aligned group photos with abstract shapes.
  - Use blue/white color scheme.

---

### 2. Founders & Mission – `src/components/about/Founders.tsx`

- **Title**:  
  `Three fellow developers teamed up`

- **Image**:  
  Founders standing in a blue-lit room.

- **Paragraph**:  
  Explains the founding story from Recife, Brazil, 2013. Highlights:

  - Software is more than code – it's solving problems for business leaders.
  - Built with a focus on human-centered, inclusive, and respected culture.

- **Layout**:
  - Two-column layout: image left, text right.
  - Include circular accent elements.

---

### 3. Testimonial Quote – `src/components/about/Quote.tsx`

- **Quote Box**:

  > “Vinta exists to find the balance between stakeholders’ goals and product constraints through swift learning fail-fast cycles. Our routine embodies and embraces this adaptive ethos.”

- **Author**:  
  Felipe Farias – CEO and Founder

- **Style**:
  - Dark box with subtle shadow.
  - White and blue text.
  - Positioned below Mission section.

---

### 4. Timeline Section – `src/components/about/Timeline.tsx`

- **Title**:  
  `10 years of tech excellence: A timeline`

- **Intro Paragraph**:  
  General statement on innovation, learning, and complexity.

- **Timeline Items** (Horizontal):

  - **2013** – The beginning
    - Focused on small agile projects with a compact dev team.
  - **2015** – Expanding abroad
    - Built MVPs and entered the US market.
  - **2018** – Stabilization and maturity
    - Long-term clients, product teams, and internal growth.

- **Design**:
  - Line with dots and vertical divider.
  - Equal-width columns with bold year labels.

---

### 5. Open Source & Community – `src/components/about/OpenSource.tsx`

- **Title**:  
  `We pride ourselves for contributing to the open-source community`

- **Content**:

  - Involvement in PyCon, DjangoCon.
  - 10+ years building.
  - 30+ talks.
  - 80+ articles.
  - 160+ repos.

- **Visual**:

  - Speaker image (Flávio Juvenal).
  - Text box hover on image with role.

- **Layout**:
  - Dark gradient background.
  - Two-column split with stats/icons on right.

---

### 6. Team Overview – `src/components/about/Team.tsx`

- **Header**:  
  `Empowering Market Needs with a Diverse and Expert Team`

- **Roles**:

  - Full-stack Developers
  - Product Designers
  - Product Managers

- **Images**:

  - Team portraits (circular cards).

- **Style**:
  - Horizontal card slider or fixed grid.
  - Use glow or highlight on hover.

---

### 7. Client Testimonials – `src/components/about/Testimonials.tsx`

- **Title**:  
  `Exceeding Expectations: What Clients Share About Us`

- **Stats**:

  - 4.9/5 – based on reviews.
  - 25 long-term clients.

- **Client Quotes**:

  - Will Ploegh, CTO at LastMile
  - Marko Gargenta, CEO at PlusPlus
  - Nehal Madhani, CEO at AltLegal

- **Cards**:

  - Dark backgrounds with rounded corners.
  - Name, role, logo (optional).

- **Link**:  
  `Browse case studies →`

---

### 8. Team Experience Testimonials – `src/components/about/WorkCulture.tsx`

- **Title**:  
  `What our team says about working at Vinta`

- **Testimonies**:

  - Tathyane Muniz – Human Resources
  - Túlio Lages – Developer
  - Victor Ferraz – Developer
  - Rebeca Sarai – Tech Lead

- **Themes**:

  - Career growth, collaboration, learning, inclusive culture.

- **Design**:

  - White cards on light blue background.
  - Optional glassmorphism styling.

- **Link**:  
  `Check our Glassdoor reviews →`

---

### 9. Final CTA Section – `src/components/about/CallToAction.tsx`

- **Title**:  
  `Now that you know us, let’s make history together`

- **Buttons**:

  - `Book a free consultation` (primary – blue)
  - `Explore careers` (secondary – outline)

- **Visual**:

  - Full team image in background.
  - Gradient and shape overlays.

- **Layout**:
  - Centered CTA.
  - Large, confident typography.

---

## Assets

- Icons: Use `lucide-react` for all iconography.
- Images: Place in `public/assets/about/`
- Team images: Optimize with `.webp`
- Backgrounds: Use SVG/PNG for gradients and patterns

---

## Folder Structure

```
src/
  components/
    about/
      Hero.tsx
      Founders.tsx
      Quote.tsx
      Timeline.tsx
      OpenSource.tsx
      Team.tsx
      Testimonials.tsx
      WorkCulture.tsx
      CallToAction.tsx
  app/
    about-us/
      page.tsx
```

---

## Styling & Animation

- **Use Shadcn/UI for components**

- **Animations**:

  - Fade-up on scroll for each section (Framer Motion)
  - Image hover reveal for testimonial cards
  - Section entry staggered with delay

- **Tailwind Styling**:

  - Blue + neutral theme
  - Rounded-2xl corners on cards
  - Shadow-lg for testimonials & quote box
  - Font size responsive: `text-3xl md:text-5xl`, etc.
  - Spacing: `px-6 py-16`

- **Responsiveness**:
  - All sections responsive with mobile-first layout.
  - Cards stack vertically on smaller screens.

---

## Dev Guidelines

- Use `yarn` for package management.

---
