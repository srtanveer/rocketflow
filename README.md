# RocketFlow 🚀

A modern digital marketing automation platform that helps businesses grow their presence across multiple channels including Facebook, Messenger, Instagram, SMS, and Email.

## 🌟 Features

- **Multi-Industry Support**: Customized solutions for Photography, Education, Hotels & Resorts, Restaurants, Corporate Offices, Travel Booking, Events, Salons, E-commerce, and more
- **Multi-Channel Marketing**: Automated campaigns across Facebook, Messenger, Instagram, SMS, and Email
- **Use Case Driven**: Pre-built workflows for growing followers, collecting emails, requesting follows, responding to comments, and sending DMs
- **Modern Tech Stack**: Built with Next.js 15.5.4, React 19, Tailwind CSS 4, and Turbopack
- **Responsive Design**: Beautiful UI that works seamlessly on all devices
- **Animation & Effects**: Smooth interactions powered by Framer Motion

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/idontbyte69/rocketflow.git
cd rocketflow
```

### 2. Install Dependencies

```bash
cd client
npm install
```

This will install all required dependencies including:
- Next.js 15.5.4
- React 19.1.0
- Tailwind CSS 4
- Framer Motion
- React Icons
- And more...

### 3. Run Development Server

```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

🎉 **That's it!** Open your browser and start exploring RocketFlow.

## 📁 Project Structure

```
rocketflow/
├── client/                      # Frontend Next.js application
│   ├── app/                     # Next.js 13+ App Router
│   │   ├── (auth)/             # Authentication routes
│   │   │   └── get-started/    # Get started page
│   │   ├── corporate-office/   # Industry-specific pages
│   │   ├── ecommerce/
│   │   ├── education/
│   │   ├── event/
│   │   ├── gadget-shop/
│   │   ├── hotel-and-resort/
│   │   ├── organic-products/
│   │   ├── orgapro/
│   │   ├── photography/
│   │   ├── salon/
│   │   ├── study-abroad/
│   │   ├── travel-booking/
│   │   ├── layout.js           # Root layout
│   │   ├── page.js             # Home page
│   │   └── globals.css         # Global styles
│   ├── components/             # React components
│   │   ├── layout/            # Layout components
│   │   │   ├── Navbar.jsx     # Navigation with dropdowns
│   │   │   └── Footer.jsx     # Footer component
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Section.jsx
│   │   │   └── ShinyText.jsx
│   │   └── [Page Components]  # Industry-specific page components
│   ├── public/                # Static assets
│   │   ├── logo.png
│   │   └── images/
│   ├── package.json
│   ├── next.config.mjs        # Next.js configuration
│   ├── tailwind.config.mjs    # Tailwind CSS configuration
│   └── jsconfig.json          # JavaScript configuration
└── README.md
```

## 🛠️ Available Scripts

### Development

```bash
npm run dev
```
Starts the development server with Turbopack for ultra-fast builds and hot module replacement.

### Build

```bash
npm run build
```
Creates an optimized production build with Turbopack.

### Start Production Server

```bash
npm start
```
Starts the production server (run `npm run build` first).

### Lint

```bash
npm run lint
```
Runs ESLint to check code quality and style.

## 🎨 Tech Stack

### Frontend
- **Framework**: Next.js 15.5.4 (App Router)
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4
- **Build Tool**: Turbopack
- **Animations**: Framer Motion 12.23.22
- **Icons**: React Icons 5.5.0, Heroicons 2.2.0
- **Effects**: React Parallax Tilt 1.7.268

### Development Tools
- **ESLint**: Code linting
- **TypeScript**: Type checking (configured but optional)
- **PostCSS**: CSS processing

## 🌐 Industry Pages

RocketFlow provides specialized landing pages for various industries:

1. **Photography** - `/photography`
2. **Education** - `/education`
3. **Hotel & Resort** - `/hotel-and-resort`
4. **Restaurants** - `/restaurants`
5. **Study Abroad** - `/study-abroad`
6. **Corporate Office** - `/corporate-office`
7. **Travel Booking** - `/travel-booking`
8. **Event Management** - `/event`
9. **Salon & Parlor** - `/salon`
10. **E-commerce** - `/ecommerce`
11. **Organic Products** - `/organic-products`
12. **Gadget Shops** - `/gadget-shop`

## 📝 Configuration

### Turbopack Configuration

The project uses Turbopack for faster builds. If you encounter any workspace root warnings, you can configure it in `next.config.mjs`:

```javascript
export default {
  turbopack: {
    root: process.cwd(),
  },
};
```

### Tailwind CSS

Tailwind CSS 4 is configured with PostCSS. The configuration is in `tailwind.config.mjs`.

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors, try:

```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Missing Motion Import

If you see "motion is not defined" errors, ensure framer-motion is properly imported in components:

```javascript
import { motion } from "framer-motion";
```

### TypeScript Errors

If you see TypeScript-related ESLint errors, ensure TypeScript is installed:

```bash
npm install --save-dev typescript
```

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

### Manual Deployment

```bash
npm run build
npm start
```

Set the `PORT` environment variable to change the port:
```bash
PORT=3000 npm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Team

- **Repository Owner**: [@idontbyte69](https://github.com/idontbyte69)

## 📞 Support

For support, please contact the development team or open an issue on GitHub.

## 🔗 Links

- **Live Demo**: [Rocketflow](https://rocketflow-v1.vercel.app/)
- **Repository**: [https://github.com/idontbyte69/rocketflow](https://github.com/idontbyte69/rocketflow)

---

Built with ❤️ by the RocketFlow Team
