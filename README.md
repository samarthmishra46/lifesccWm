# LIFESCC - Weight Management Landing Page

A complete, production-ready landing page for LIFESCC, a doctor-guided weight management program that focuses on fat reduction and muscle building.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Database + Edge Functions)
- **Icons**: Lucide React

## Features

- Fully responsive design (mobile-first)
- Clean, medical-grade UI with soft blues and white color scheme
- Multiple CTA forms throughout the page for lead capture
- Animated marquee social proof section
- Collapsible FAQ accordion
- Database integration for lead management
- Serverless API endpoint for form submissions

## Project Structure

```
src/
├── components/
│   ├── CTAForm.tsx              # Reusable form component for lead capture
│   ├── HeroSection.tsx          # Hero section with main headline
│   ├── SocialProof.tsx          # Marquee-style social proof
│   ├── WhatHappens.tsx          # 5-step process explanation
│   ├── PainPoints.tsx           # Pain points, letter, and authority sections
│   ├── FounderSection.tsx       # Founder profile and "How Lifescc Helps"
│   ├── SubPrograms.tsx          # Metabolic Reset & Muscle Gain programs
│   ├── ClinicsSection.tsx       # City/clinic locations
│   ├── Testimonials.tsx         # Customer testimonials
│   ├── FAQ.tsx                  # Frequently asked questions
│   ├── FinalCTA.tsx             # Final conversion section
│   └── Footer.tsx               # Site footer
├── App.tsx                      # Main application component
├── main.tsx                     # Application entry point
└── index.css                    # Global styles (Tailwind)

supabase/
└── functions/
    └── submit-lead/             # Edge function for lead submissions
```

## Database Schema

### Leads Table
- `id` (uuid, primary key) - Unique identifier
- `name` (text) - Full name
- `phone` (text) - Phone number
- `city` (text) - City
- `source_section` (text) - Which CTA was clicked
- `created_at` (timestamptz) - Submission timestamp

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository

2. Install dependencies:
```bash
npm install
```

3. The `.env` file is already configured with Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## API Endpoints

### Submit Lead
**Endpoint**: `POST /functions/v1/submit-lead`

**Request Body**:
```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "city": "Bangalore",
  "source_section": "hero"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "John Doe",
    "phone": "9876543210",
    "city": "Bangalore",
    "source_section": "hero",
    "created_at": "2024-01-07T..."
  }
}
```

## Key Sections

1. **Hero Section** - Main headline with CTA form
2. **Social Proof** - Scrolling testimonial marquee
3. **What Happens** - 5-step booking process
4. **Pain Points** - Relatable weight management struggles
5. **Letter Section** - Empathetic explanation of the problem
6. **Authority Close** - Positioning statement
7. **Founder Section** - Doctor credentials and quote
8. **How Lifescc Helps** - Core program benefits
9. **Sub-Programs** - Metabolic Reset & Muscle Gain details
10. **Clinics** - Location information
11. **Testimonials** - Before/after success stories
12. **FAQ** - Common questions and answers
13. **Final CTA** - Last conversion opportunity

## Customization

### Updating Images
Replace placeholder `<div>` elements with actual images:
- Hero section images
- Step illustrations in "What Happens"
- Founder photo
- Clinic location images
- Testimonial before/after photos
- Map snapshot

### Updating Testimonials
Edit the `testimonials` array in `src/components/Testimonials.tsx`

### Updating FAQs
Edit the `faqs` array in `src/components/FAQ.tsx`

### Updating Clinic Locations
Edit the `clinics` array in `src/components/ClinicsSection.tsx`

## Lead Tracking

All form submissions are tracked with the section they came from:
- `hero` - Hero section
- `what-happens` - After booking process
- `founder` - Founder section
- `programs` - Sub-programs section
- `final-cta` - Final CTA section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized for Core Web Vitals
- Lazy loading ready
- CSS optimized with Tailwind
- Production build is minified and tree-shaken

## Notes

- All copy is used exactly as provided
- No authentication required for lead submission
- Forms validate all required fields
- Success messages display for 5 seconds
- Mobile-first responsive design
- Healthcare-appropriate color scheme

## Support

For questions or issues, contact the development team.

---

Built with care for LIFESCC by your development team.
# lifesccWm
