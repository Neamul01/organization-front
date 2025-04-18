# Software Requirements Specification (SRS) - Vinta Software: Contact Page

## Shared Layout

- Use existing `Header` and `Footer` components from base layout.
- see 'src/app/services/page.tsx' for the layout

## 1. Page Overview

**Page Title:** Let’s Talk!  
**Page URL:** https://www.vintasoftware.com/contact  
**Purpose:** Enable prospective clients or collaborators to initiate communication with Vinta Software via a form or by scheduling a call.

---

## 2. Page Sections and Detailed Requirements

### 2.1 Hero Section: "Let's Talk!"

- **Headline:** `Let's Talk!` (in bright blue bold text)
- **Subtext:** “We're excited to collaborate and will respond promptly. Share your vision with us.”
- **Styling:**
  - Center-aligned
  - Blue-to-white gradient background
  - Padding to maintain breathing space
- **CTA Block:**
  - Profile thumbnail images (3 circular headshots)
  - Copy: `Want to skip a step? Just schedule a call directly with us.`
  - Button: `Book a call today!`
    - Style: Bright blue button
    - On click: Opens scheduling widget or external link to calendar

---

### 2.2 Contact Form Section

- **Title (bold):** `Prefer using a form? No worries!`
- **Subtitle:** `Talk a bit about your challenge.`
- **Form implementation:**
  - Use `react-hook-form` for all field handling, validation, and submission.
  - Use schema-based validation via `@hookform/resolvers/yup` with `Yup` schema.

#### Form Fields (with validation rules):

| Field                                    | Type     | Validation Rules                   |
| ---------------------------------------- | -------- | ---------------------------------- |
| First Name                               | Text     | Required, min 2 characters         |
| Last Name                                | Text     | Required, min 2 characters         |
| Email                                    | Email    | Required, must be valid email      |
| Mobile Phone Number                      | Text     | Required, must match phone pattern |
| Company Name                             | Text     | Required                           |
| How did you find us?                     | Dropdown | Required                           |
| Investment (USD)                         | Dropdown | Required                           |
| Project Description                      | Textarea | Required, min 20 characters        |
| CAPTCHA (Google reCAPTCHA or equivalent) | Widget   | Required                           |

- **Form behavior:**

  - On submit, validate with `react-hook-form` and show inline errors.
  - Disable submit button while submitting.
  - Show success message on completion.
  - Show toast or inline error if backend fails.

- **Button:** `Send us a message`

  - Type: Submit
  - Style: Prominent blue button
  - State: Disabled while submitting or on invalid form

- **Disclaimer:** “By sending this message, you agree to receive updates occasionally via email and WhatsApp...”

---

### 2.3 Success Stories Preview

- **Header:** `Check our success stories`
- **Filter Categories (Tags):**
  - Healthtech
  - AI Agents
  - Fintech
  - Retail
  - Wellness
  - Edtech
- **Card Layout:**
  - Title: `Rewind`
  - Tags: `Healthtech`, `Diabetes management`
  - Headline: `Rewind: breaking down EHR migration barriers`
  - Description: Snippet of the case study
  - Thumbnail: Doctor using tablet
  - Layout: Responsive, side-by-side (text left, image right)

---

## 3. Functional Requirements

### 3.1 Form with `react-hook-form`

- Implement form using `useForm()` from `react-hook-form`
- Integrate `Zod` schema for validation via `zodResolver`
- Show inline error messages using `errors` from the hook
- Submission triggers async `onSubmit` function:
  ```tsx
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  ```
