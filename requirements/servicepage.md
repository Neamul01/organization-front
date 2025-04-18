# SRS: Services Page – Vinta Software Clone

## Overview

This document outlines the requirements for replicating the Services page of Vinta Software. The implementation should utilize Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui. Emphasis is placed on creating reusable, role-based components located in the `/src/components/services` directory. The UI and animations must closely match the original site.

---

## 1. Page Layout

- **Header**: Consistent with the site's main navigation.
- **Main Sections**:
  1. Hero Section
  2. Nearshoring Benefits
  3. Service Offerings
  4. Tech Stack
  5. Industry Expertise
- **Footer**: Consistent with the site's footer.

---

## 2. Components

### 2.1. Header

- **Logo**: Positioned on the left.
- **Navigation Menu**: Links to Clients, Services, Blog, About Us, Careers, and Contact Us.
- **Call to Action**: "Let's talk!" button.

### 2.2. Hero Section

- **Title**: "Services to make you the chillest person in the office"
- **Subtitle**: "Flexibility and top-notch professionals to take your product one step further, everyday."
- **Background**: Image of Vinta's team.
- **Layout**: Centered text with responsive design.

### 2.3. Nearshoring Benefits

- **Title**: "Why Vinta is the top choice for nearshoring"
- **Content**:
  - Emphasis on speed, reliability, and effective teams.
  - Highlight shared time zones and customized services.
- **Layout**: Two-column layout with text and supporting imagery or icons.

### 2.4. Service Offerings

- **Title**: "We'll help you navigate all stages of your business"
- **Services**:
  1. **Sketch your Business Idea**
     - **Description**: De-risk your software budget in 3 weeks with our Product, UX & Engineering experts.
     - **Icon**: `Pencil` from `lucide-react`
  2. **Launch your Product**
     - **Description**: Transform your idea into a reliable product by leveraging modern technology.
     - **Icon**: `Rocket` from `lucide-react`
  3. **Grow Your Product**
     - **Description**: Deliver more features, overcome performance hurdles, and impress stakeholders.
     - **Icon**: `TrendingUp` from `lucide-react`
- **Layout**: Three-column grid with icons, titles, descriptions, and "Learn more" links.

### 2.5. Tech Stack

- **Title**: "The tech stack that fuels cutting-edge products"
- **Categories**:
  - **Frontend**: React, Next.js
  - **Backend**: Python, Django, Node.js, Celery, Postgres
  - **Cloud**: AWS, Azure, Render
  - **Testing**: Pytest, Jest, Playwright
  - **Design**: Figma, Adobe CC, Dovetail, Maze
  - **CI/CD**: Docker, Kubernetes, CircleCI, Azure DevOps, GitHub Actions
  - **Monitoring**: DataDog, NewRelic, Sentry, Papertrail, Kibana
- **Layout**: Grid layout with category titles and corresponding icons.

### 2.6. Industry Expertise

- **Title**: "Explore our expertise across multiple industries"
- **Industries**:
  1. **Healthtech**
     - **Case Study**: Rewind - Breaking down EHR migration barriers.
     - **Description**: Assisted Rewind in migrating from Healthie to Medplum to create a tailored EHR solution.
     - **Icon**: `HeartPulse` from `lucide-react`
  2. **AI Agents**
     - **Case Study**: United Nations - Social protection knowledge base.
     - **Description**: Developed an AI-powered knowledge base for social protection programs.
     - **Icon**: `Brain` from `lucide-react`
  3. **Fintech**
     - **Case Study**: Tesorio - Cash flow management platform.
     - **Description**: Enhanced Tesorio's platform for better financial forecasting.
     - **Icon**: `CreditCard` from `lucide-react`
- **Layout**: Vertical list or carousel with icons, titles, descriptions, and links to detailed case studies.

### 2.7. Footer

- **Sections**:
  - Company Overview
  - Navigation Links: Clients, Services, Blog, About Us, Careers, Contact Us
  - Social Media Icons: LinkedIn, GitHub, Twitter, Instagram, YouTube
  - Legal: Privacy Policy and other relevant links

---

## 3. Design & Animations

- **Responsiveness**: Mobile-first design ensuring compatibility across devices.
- **Animations**:
  - Smooth transitions for hover effects.
  - Scroll-based animations for section reveals.
  - Interactive elements matching the original site's behavior.
- **Styling**: Consistent use of Tailwind CSS classes to replicate spacing, typography, and color schemes.

---

## 4. Development Guidelines

- **Component Structure**: Each UI element should be a separate, reusable component placed in `/src/components`.
- **Naming Conventions**: Use clear, descriptive names reflecting the component's role.
- **Code Quality**:
  - Implement ESLint with recommended rules for TypeScript and accessibility.
  - Use Prettier for consistent code formatting.
  - Configure VSCode settings to auto-format and remove unused imports on save.
- **shadcn/ui**: Utilize for building accessible and customizable UI components.
- **Icons**: Import icons from `lucide-react` as React components. For example:

  ```tsx
  import { Rocket } from 'lucide-react';

  const LaunchIcon = () => <Rocket size={24} color="currentColor" />;
  ```
