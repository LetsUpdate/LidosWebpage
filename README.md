# LidosWebpage

Single-page landing site for **Lindos** - An underground music collective specializing in Afro / Latin / Tech House.

## 🎵 Tech Stack

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Framer Motion** for smooth animations
- Configured for **DigitalOcean App Platform** deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will start at `http://localhost:3000`

## 📦 Deployment to DigitalOcean App Platform

This application is configured with `output: "standalone"` in `next.config.ts` for optimal deployment on DigitalOcean App Platform.

### Deployment Steps:

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to DigitalOcean App Platform
3. Configure build settings:
   - **Build Command:** `npm run build`
   - **Run Command:** `npm start`
   - **Environment:** Node.js
4. Deploy!

## 🎨 Design Features

- **Dark underground aesthetic** - Black and zinc color palette
- **Warm accent colors** - Orange and yellow gradients
- **Mobile-first responsive design**
- **Smooth scroll animations** using Framer Motion
- **Minimal text, maximum visual impact**

## 📁 Project Structure

```
LidosWebpage/
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Hero.tsx          # Hero section with animated background
│   ├── About.tsx         # About/Vibe section
│   ├── Media.tsx         # YouTube embed section
│   ├── NextEvent.tsx     # Event details and tickets
│   ├── Social.tsx        # Social media links
│   └── Footer.tsx        # Footer
├── public/               # Static assets
└── next.config.ts        # Next.js configuration
```

## 🔧 Customization

### Update Social Links

Edit `components/Social.tsx` to update social media URLs:

```typescript
const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/lindosmusic', icon: '📸' },
  // ... add your actual URLs
];
```

### Update YouTube Video

Edit `components/Media.tsx` to change the embedded video:

```typescript
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" />
```

### Update Event Details

Edit `components/NextEvent.tsx` to update event information and ticket links.

## 📄 License

ISC

---

Built with ❤️ for the underground music scene