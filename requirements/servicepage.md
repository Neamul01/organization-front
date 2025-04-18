# SRS: Services Page – Vinta Software Clone

## Route

`/services`

## Shared Layout

- Use existing `Header` and `Footer` components from the base layout.

---

## Sections & Components

### 1. Hero Section – `src/components/services/Hero.tsx`

- **Title**:

- Style: "chillest person" is highlighted in gradient blue.

- **Subtitle**:  
  `Flexibility and top-notch professionals to take your product one step further, everyday.`

- **Image**:
- Right-aligned image of woman with laptop.
- Rounded corners.
- Fades in smoothly on scroll.

- **Layout**:
- Two columns: text on the left, image on the right.
- Dark gradient background.
- Vertical and horizontal centering.

---

### 2. Testimonial + Nearshoring Section – `src/components/services/Nearshoring.tsx`

- **Left Box**: Testimonial Card
- Contains:
  - UNDP logo.
  - Tags: "Social Tech", "GPT-4".
  - Quote: _"In just a few meetings to discuss our complex AI product, they had an in-depth understanding of our needs through a multidisciplinary team."_
  - Name: Ricardo Pravia Jácamo, ICT Associate at United Nations.
  - Rating: 5 stars.
- Style: Dark card with white text.

- **Right Box**: Text
- **Heading**:  
  `Why Vinta is the top choice for nearshoring`
- Paragraph describing:
  - Speed & reliability.
  - Burden-free onboarding.
  - Custom services.
  - Shared time zones.
- Highlight: "top choice", "speed and reliability", "customized to fit".

- **Layout**:
- Side-by-side layout.
- Right section is justified left.

---

### 3. Services Offering Section – `src/components/services/ServiceAccordion.tsx`

- **Title**: Our Services
- **Subtitle**:
  `We'll help you navigate all stages of your business`
- Style: 'of your business' text in gradient blue.

- **Clutch Badge**:
- Image with rating: 4.9 stars.
- CTA: "View all reviews"

- **Accordion Items**:
  Each is a card with dropdown behavior (can use shadcn Accordion):

1. **Sketch your Business Idea**

   - Icon: `Pencil`
   - Description:  
     `De-risk your software budget in 3 weeks with our Product, UX & Engineering experts.`
   - CTA: "Learn more"

2. **Launch your Product**

   - Icon: `Rocket`
   - Description:  
     `Transform your idea into a reliable product using modern tech.`

3. **Grow Your Product**
   - Icon: `TrendingUp`
   - Description:  
     `Expertise to help deliver features, overcome hurdles and impress stakeholders.`

- **Layout**:
- Left-aligned title.
- Accordion items stacked vertically.

---

### 4. Tech Stack Section – `src/components/services/TechStack.tsx`

- **Title**:  
  `The tech stack that fuels cutting-edge products`

- **Intro Text**:  
  `Leverage our expertise in the tech stack you need to develop reliable, scalable, and highly-performative software solutions.`

- **Stack Groups**:
  Displayed in 3 rows of icons with labels. Use `lucide-react` where possible.

- **Frontend**:

  - React
  - Next.js

- **Cloud**:

  - AWS
  - Azure
  - Render

- **Testing**:

  - Pytest
  - Jest
  - Playwright

- **Design**:

  - Figma
  - Adobe CC
  - Dovetail
  - Maze

- **Backend**:

  - Python
  - Django
  - Node.js
  - Celery
  - Postgres

- **CI/CD**:

  - Docker
  - Kubernetes
  - CircleCI
  - Azure DevOps
  - GitHub Actions

- **Monitoring**:

  - DataDog
  - NewRelic
  - Sentry
  - Papertrail
  - Kibana

- **Layout**:
- Grid view.
- All groups are equally spaced and aligned under the same container.

---

### 5. Industry Expertise Section – `src/components/services/Industries.tsx`

- **Title**:  
  `Explore our expertise across multiple industries`

- **Tab Buttons**:
- Healthtech (active by default)
- AI Agents
- Fintech
- Retail
- Wellness
- Edtech

- **Industry Card**:
- **Logo**: "Rewind"
- **Category**: Healthtech – Diabetes management
- **Title**: `Rewind: breaking down EHR migration barriers`
- **Description**:  
  How Vinta helped Rewind migrate EHR from Healthie to Medplum and their process.
- **Image**: Doctor using tablet.

- **CTA**:
- Bottom link: "Browse case studies →"

- **Layout**:
- Horizontal button group on top.
- Card with text left, image right.

---

### 6. CTA Card Section – `src/components/services/CallToAction.tsx`

- **Heading**:

  - Let's start the convo.
  - Just book a call →

- **Avatar Icons**:
- 5 team avatars with a fun animation or hover effect.

- **CTA**: "Contact us" link for email.

- **Layout**:
- Card with black background, white text.
- Neon glow effect around CTA section.
- Right side has a placeholder white block.

---

### 7. FAQ Section – `src/components/services/Faq.tsx`

- **Title**:  
  `Questions? We’ve got answers`

- **FAQ Items** (Accordion style):
- Why should I work with Vinta instead of hiring for my in-house team?
- How flexible is the engagement model?
- How quickly can you start working on my project?
- What are the terms of your standard contract agreement?

- **Layout**:
- Vertical accordion list.
- Highlight first question with slight expansion on load.

---

## Assets

- All icons: Use `lucide-react`
- Images: Place in `public/assets/services/`
- Logos: Optimize SVG/PNG before use.

---

## Folder Structure

---

## Animations & Styling

- **Animations**:

  - Fade-ins on scroll (use Framer Motion or Tailwind + Intersection Observer).
  - Accordion toggle animations.
  - Hover effects on buttons & cards.

- **Styling**:
  - Fully responsive.
  - Match spacing, font sizes, gradients, and border radius from original site.

---

## Dev Guidelines

- Use `yarn`

---
