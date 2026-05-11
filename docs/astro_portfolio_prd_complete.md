# PRD — Astro Static Portfolio Website

## Source Profile Summary

This PRD is based on the uploaded professional profile of Unggul Cahya Saputra, including:
- Founder and CTO roles across multiple technology organizations
- Open-source systems development experience
- Cybersecurity, healthcare IT, ERP/CRM, and digital transformation expertise
- Public-sector health information systems leadership
- Education, certifications, and long professional history
- Multi-brand ecosystem:
  - AhliWeb
  - SatpamSiber
  - Literasi.top
  - OurCompro
  - BorneojekIndonesia
  - BinaPajak
  - PT Rumah Sehat Noesantara

Primary extracted themes:
- Open-source innovation
- Cybersecurity awareness
- Digital transformation
- Healthcare information systems
- Community empowerment
- AI and ethical technology
- Indonesian digital ecosystem building

---

# 01_product_requirements.md

## Product Overview

Build a modern, high-performance static portfolio website using:
- Astro framework
- Static Site Generation (SSG)
- Markdown-driven content
- SEO-first architecture
- Responsive UI
- Cloudflare Pages deployment

The website serves as:
1. Professional portfolio
2. Founder/company showcase
3. Technical credibility profile
4. Thought leadership platform
5. Contact and lead-generation system

---

## Goals

### Primary Goals
- Showcase professional credibility
- Present projects and companies
- Increase inbound consulting opportunities
- Provide centralized digital identity
- Improve search engine visibility

### Secondary Goals
- Publish articles and insights
- Support multilingual content
- Display certifications and achievements
- Provide downloadable resume/profile

---

## Target Personas

### Persona 1 — Enterprise Client
Needs:
- Assess technical capability
- View past projects
- Verify leadership experience

Pain Points:
- Hard to validate expertise
- Fragmented online presence

Success Criteria:
- Can understand capabilities within 3 minutes

---

### Persona 2 — Government / Institutional Partner
Needs:
- Review healthcare and public-sector experience
- Verify organizational roles
- Understand compliance mindset

Success Criteria:
- Can access public-sector project history quickly

---

### Persona 3 — Startup / SME Client
Needs:
- Affordable technology partner
- Full-stack digital transformation support

Success Criteria:
- Finds service offerings and contact information immediately

---

### Persona 4 — Community / Student Audience
Needs:
- Learn from experience
- Access educational resources

Success Criteria:
- Can discover articles, talks, and community initiatives

---

## MVP Scope

### Public Website
- Home page
- About page
- Experience timeline
- Projects/ventures page
- Skills page
- Certifications page
- Articles/blog
- Contact page
- Resume download

### Admin (Lightweight)
- Markdown/CMS-based content management
- Git-based publishing workflow

### SEO
- Structured metadata
- OpenGraph
- Sitemap
- RSS feed

### Performance
- Lighthouse ≥ 90
- Core Web Vitals optimized

---

## Out of Scope (Phase 1)
- User authentication
- Dynamic dashboard analytics
- Full CMS with RBAC
- E-commerce
- Real-time chat

---

## Functional Requirements

### FR-001 — Home Page
Must display:
- Hero section
- Short professional summary
- Featured companies
- Featured projects
- CTA buttons

---

### FR-002 — Experience Timeline
Display chronological experience from PDF:
- Role
- Organization
- Duration
- Description
- Skills

---

### FR-003 — Ventures Showcase
Display:
- AhliWeb
- SatpamSiber
- Literasi.top
- OurCompro
- BorneojekIndonesia

Each includes:
- Logo
- Summary
- Website link
- Category
- Technologies

---

### FR-004 — Skills Showcase
Must categorize:
- Cybersecurity
- AI
- Full-stack development
- Healthcare IT
- Infrastructure
- Open-source systems

---

### FR-005 — Blog System
Markdown-based blogging:
- Tags
- Categories
- SEO metadata
- RSS

---

### FR-006 — Contact System
Static contact form:
- Email integration
- Spam protection
- Social links

---

## Non-Functional Requirements

### Performance
- TTFB < 200ms
- Fully static rendering

### Security
- CSP headers
- Form spam protection
- Secure deployment pipeline

### Accessibility
- WCAG AA

### SEO
- Schema.org support
- Semantic HTML

---

## Acceptance Criteria

| ID | Requirement | Acceptance |
|---|---|---|
| AC-001 | Static generation | Entire site builds with Astro SSG |
| AC-002 | Mobile responsive | Works on mobile/tablet/desktop |
| AC-003 | SEO | Metadata available on every page |
| AC-004 | Performance | Lighthouse > 90 |
| AC-005 | Experience import | PDF content fully represented |
| AC-006 | Accessibility | Keyboard accessible |
| AC-007 | Deployment | Deployable to Cloudflare Pages |

---

# 02_architecture.md

## System Architecture

### Frontend
- Astro
- TypeScript
- TailwindCSS
- Markdown collections

### Hosting
- Cloudflare Pages

### Content
- Local markdown content collections

### Forms
- Cloudflare Workers or Formspree

---

## Architecture Layers

```text
Presentation Layer
├── Astro Pages
├── Astro Components
└── Layouts

Content Layer
├── Markdown Collections
├── JSON Data
└── Assets

Infrastructure Layer
├── Cloudflare Pages
├── Cloudflare CDN
└── GitHub Actions
```

---

## Route Structure

```text
/
├── /about
├── /experience
├── /projects
├── /ventures
├── /skills
├── /certifications
├── /blog
│   └── /[slug]
├── /contact
└── /resume
```

---

## Module Architecture

### Core Modules
- Hero
- Timeline
- Project cards
- Blog engine
- SEO engine
- Contact form
- Navigation system

### Shared Components
- Header
- Footer
- CTA
- Cards
- Tags
- Markdown renderer

---

## Deployment Model

### CI/CD
GitHub → Cloudflare Pages

### Build Flow

```text
Git Push
→ GitHub Action
→ Astro Build
→ Static Assets Generated
→ Cloudflare Deploy
```

---

## Environment Variables

```env
SITE_URL=
CONTACT_EMAIL=
FORMSPREE_ENDPOINT=
PUBLIC_GA_ID=
```

---

# 03_data_model.md

## Content Collections

### experiences

```ts
{
  title: string
  organization: string
  location: string
  startDate: date
  endDate?: date
  current: boolean
  description: string
  skills: string[]
}
```

---

### ventures

```ts
{
  name: string
  slug: string
  website: string
  category: string
  description: string
  technologies: string[]
  featured: boolean
}
```

---

### blog

```ts
{
  title: string
  slug: string
  excerpt: string
  content: markdown
  tags: string[]
  publishedAt: date
  updatedAt?: date
  coverImage?: string
}
```

---

## D1 Schema (Optional Future)

```sql
CREATE TABLE contacts (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## Data Dictionary Rules

| Rule | Description |
|---|---|
| Required slugs | Must be unique |
| Dates | ISO 8601 |
| Tags | lowercase kebab-case |
| Images | optimized webp |
| Markdown | sanitized before rendering |

---

## Table Groups

### Public Content
- experiences
- projects
- blog
- certifications

### Operational
- contacts
- analytics_events

---

# 04_api_contracts.md

## API Strategy

Primary architecture is static-first.

Dynamic APIs only for:
- Contact forms
- Analytics
- Search (optional future)

---

## API Envelope

### Success

```json
{
  "success": true,
  "data": {},
  "meta": {}
}
```

### Error

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request"
  }
}
```

---

## Endpoint List

| Endpoint | Method | Purpose |
|---|---|---|
| /api/contact | POST | Contact form |
| /api/search | GET | Blog search |
| /api/analytics | POST | Event tracking |

---

## Contact API

### Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Interested in consulting"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "submitted": true
  }
}
```

---

## Validation Rules

| Field | Rule |
|---|---|
| name | required |
| email | valid email |
| message | min 10 chars |

---

# 05_ui_ux.md

## Design Principles

- Minimalist
- Professional
- High readability
- Strong typography
- Dark/light mode
- Indonesian + English ready

---

## Public Screens

### Home
Sections:
- Hero
- About
- Featured ventures
- Experience highlights
- CTA

---

### About
- Full biography
- Leadership journey
- Mission statement

---

### Experience Timeline
Visual chronological timeline

---

### Ventures
Card-based showcase

---

### Blog
- Category filters
- Tag filters
- Reading time

---

### Contact
- Form
- Social links
- WhatsApp CTA

---

## Admin Flow

### Content Publishing

```text
Create markdown
→ Commit to Git
→ CI/CD deploy
→ Published
```

---

## Verification

### Content Validation
- Markdown linting
- Broken link checks
- Image optimization checks

---

## Import Flow

### Resume Import

```text
PDF
→ structured JSON
→ markdown collections
→ generated pages
```

---

## Reports

### SEO Reports
- Lighthouse
- Accessibility
- Performance
- Broken links

---

# 06_security_rbac_abac.md

## Security Principles

- Static-first architecture
- Minimal attack surface
- Least privilege

---

## Roles

| Role | Access |
|---|---|
| Public User | Read-only |
| Content Admin | Markdown editing |
| DevOps Admin | Deployment |
| Super Admin | Full access |

---

## RBAC

### Content Admin
Can:
- Edit content
- Publish blog posts

Cannot:
- Change deployment config

---

### DevOps Admin
Can:
- Configure hosting
- Manage environment variables

---

## ABAC Rules

| Attribute | Rule |
|---|---|
| environment | production-only restrictions |
| content_status | draft vs published |
| branch | main branch deploy protection |

---

## Data Masking

Never expose:
- Internal email addresses
- API secrets
- Environment variables

---

## Public Data Safety

Allowed:
- Public work history
- Certifications
- Portfolio items

Restricted:
- Sensitive operational data
- Internal infrastructure details

---

## Audit Controls

- Git commit history
- Deployment logs
- Form submission logging

---

# 07_operations_sop.md

## SOP — Content Input

### Process

```text
Gather content
→ Validate accuracy
→ Convert to markdown
→ Review
→ Publish
```

---

## SOP — Validation

Checklist:
- Grammar
- SEO metadata
- Link validation
- Accessibility

---

## SOP — Verification

Verify:
- Responsive layout
- Performance
- Structured data

---

## SOP — Publication

```text
Merge PR
→ CI checks
→ Astro build
→ Deploy
→ Smoke test
```

---

## SOP — Export

Supported:
- PDF resume
- JSON export
- RSS feed

---

## SOP — Audit

Monthly:
- Broken links
- Lighthouse audit
- Dependency review
- Security headers verification

---

# 08_implementation_backlog.md

## Epic 1 — Project Setup

### Tasks
- Initialize Astro project
- Configure TypeScript
- Configure TailwindCSS
- Configure ESLint/Prettier
- Configure content collections

---

## Epic 2 — Design System

### Tasks
- Typography system
- Color system
- Responsive grid
- Dark mode
- Reusable cards

---

## Epic 3 — Navigation

### Tasks
- Header
- Footer
- Mobile menu
- Breadcrumbs

---

## Epic 4 — Home Page

### Tasks
- Hero section
- CTA buttons
- Featured ventures
- Featured experience

---

## Epic 5 — Experience System

### Tasks
- Timeline component
- Markdown-driven experience entries
- Skills tags

---

## Epic 6 — Ventures Showcase

### Tasks
- Venture cards
- Logo system
- Technology badges
- External link handling

---

## Epic 7 — Blog Engine

### Tasks
- Markdown posts
- Dynamic routes
- RSS feed
- Syntax highlighting
- SEO metadata

---

## Epic 8 — Contact System

### Tasks
- Contact form UI
- Spam protection
- API integration
- Email notifications

---

## Epic 9 — SEO

### Tasks
- Sitemap
- robots.txt
- OpenGraph
- JSON-LD schema
- Canonical URLs

---

## Epic 10 — Performance

### Tasks
- Image optimization
- Font optimization
- Lazy loading
- Asset compression

---

## Epic 11 — Deployment

### Tasks
- GitHub Actions
- Cloudflare Pages config
- Environment variables
- Preview deployments

---

## Epic 12 — QA

### Tasks
- Lighthouse testing
- Accessibility testing
- Mobile testing
- Broken link testing

---

## Epic 13 — Content Migration

### Tasks
- Convert PDF profile to structured markdown
- Generate experience entries
- Generate ventures data
- Generate certifications content
- Generate skills taxonomy

---

## Epic 14 — Documentation

### Tasks
- README
- Contribution guide
- Deployment guide
- Content editing guide

