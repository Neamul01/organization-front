# SRS: Homepage – organization-front

## Overview

This document outlines the requirements for replicating the homepage of Vinta Software. The implementation should utilize Next.js, TypeScript, Tailwind CSS, and shadcn/ui, lucide-react(for icons). Emphasis is placed on creating reusable, role-based components located in the `/src/components` directory. The UI and animations must closely match the original site.

## Important Notes

- You should maintain the design background and the design of the original site.
- The design should be responsive and mobile-friendly.
- The design should be consistent with the original design.
- The design should be accessible.

---

## 1. Page Layout

- **Header**: Sticky navigation bar with logo and menu items.
- **Main Sections**:
  - Hero Section
  - Client Logos
  - Service Offerings (Kickstart, Launch, Scale)
  - Testimonials
  - Tech Stack
  - Call to Action
  - FAQ
- **Footer**: Company information, social media links, and additional navigation.

---

## 2. Components

### 2.1. Header

- **Logo**: Positioned on the left.
- **Navigation Menu**: Links to Clients, Services, Blog, About Us, Careers, and Contact Us.
- **Call to Action**: "Let's talk!" button.
- **Design**: should match the design and position also the padding and margin.

### 2.2. Hero Section

- **Headline**: "Your product. Our mastery. Lasting partnerships."
- **Subheadline**: Brief description emphasizing flexibility and quality.
- **Background**: High-quality image or gradient matching the original design.

### 2.3. Client Logos

- **Display**: Grid or carousel showcasing client logos such as WM McCann, Tesorio, Splendid Spoon, BentoBox, PlusPlus, and Findigs.

### 2.4. Service Offerings

- **Sections**:
  - **Kickstart Your Product**: Emphasis on de-risking budgets with expert teams.
  - **Launch Your Product**: Focus on transforming ideas into reliable products.
  - **Scale Your Product**: Highlight delivering more features and overcoming performance hurdles.
- **Each Section Includes**:
  - Title
  - Description
  - Relevant imagery
  - "Learn more" links

### 2.5. Testimonials

- **Content**: Quotes from clients with names, titles, and company affiliations.
- **Design**: Styled cards with client photos and ratings.

### 2.6. Tech Stack

- **Description**: Overview of technologies used, emphasizing Python and Django expertise.
- **Visuals**: Icons or images representing the tech stack.

### 2.7. Call to Action

- **Message**: "Let's start the convo. Just book a call."
- **Options**: Booking link and alternative contact methods (e.g., email).

### 2.8. FAQ

- **Questions**:
  - Types of clients partnered with.
  - Industry specializations.
  - Team consistency during assignments.
- **Answers**: Detailed responses matching the original content.

### 2.9. Footer

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

---

## 5. Assets & Content

- **Images**: Use optimized images matching those on the original site.
- **Text**: Replicate all textual content accurately.
- **Icons**: Incorporate icons that align with the original design, ensuring consistency in style and size.

---

## 6. Folder Structure
