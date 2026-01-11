# EV Awareness

An interactive web application designed to educate users about Electric Vehicles (EVs), charging systems, and sustainability. This platform features an EV charging simulator, EVSE installation calculator, vehicle selection tools, and comprehensive multilingual support.

## Features

- 🚗 **Interactive EV Charging Simulator** - Visualize charging times for different vehicle models
- 🔌 **EVSE Installation Calculator** - Assess your home's electrical readiness for EV charging
- 🚙 **Vehicle Selection Tool** - Find the right EV based on your needs
- ⚡ **Charging Systems Information** - Learn about Level 1, Level 2, and DC Fast Charging
- 🌱 **Sustainability Section** - Understand the environmental benefits of EVs
- 📚 **Knowledge & Resources** - Comprehensive guides and educational content
- 👥 **Stakeholder Engagement** - Connect with communities and partners
- 🌍 **Multi-language Support** - Full English and French translations
- 🎨 **Modern UI** - Built with React, TailwindCSS, and Shadcn UI components
- 🌓 **Dark Mode** - Toggle between light and dark themes

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- Shadcn UI Components
- Framer Motion (animations)
- Wouter (routing)

### Backend
- Node.js
- Express
- TypeScript
- Drizzle ORM

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn**

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/radwakayid23/EV-Awareness.git
   cd EV-Awareness
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   
   Create a `.env` file in the root directory if you need to customize settings:
   ```env
   PORT=3000
   # DATABASE_URL=your_database_url (if using database)
   ```

## Running the Application

### Development Mode

To run the application in development mode with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

> **Note for macOS users**: If port 5000 is in use (commonly by AirPlay Receiver), you can specify a different port:
> ```bash
> PORT=3000 npm run dev
> ```
> Then access the application at `http://localhost:3000`

### Production Build

To build the application for production:

```bash
npm run build
```

To run the production build:

```bash
npm start
```

### Type Checking

To check TypeScript types without building:

```bash
npm run check
```

### Database Setup (Optional)

If you're using a database, push the schema:

```bash
npm run db:push
```

## Project Structure

```
EV-Awareness/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   │   ├── ui/        # Shadcn UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── BenefitsSection.tsx
│   │   │   ├── ChargingSystemsSection.tsx
│   │   │   ├── SustainabilitySection.tsx
│   │   │   └── QuickLinksSection.tsx
│   │   ├── pages/         # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Knowledge.tsx
│   │   │   ├── Stakeholder.tsx
│   │   │   ├── Simulator.tsx
│   │   │   ├── EVSE.tsx
│   │   │   └── VehicleSelection.tsx
│   │   ├── contexts/      # React contexts
│   │   │   └── LanguageContext.tsx  # Multi-language support
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
│   └── index.html
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Database logic
├── shared/               # Shared types and schemas
├── attached_assets/      # Static assets (images)
├── package.json
└── vite.config.ts
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run check` | Type check with TypeScript |
| `npm run db:push` | Push database schema changes |

## Pages & Features

### Home Page (`/`)
- Hero section with call-to-action
- Quick links to Insights, Tools, and Statistics
- Benefits of EVs overview
- Charging systems guide
- Sustainability information

### About Page (`/about`)
- Project information
- Objectives
- Partners

### Knowledge & Resources (`/knowledge`)
- EV Basics
- Charging Guide
- Environmental Impact
- Costs & Savings
- Featured Resources

### Stakeholder Engagement (`/stakeholder`)
- Consumer information
- Industry partnerships
- Educational institutions
- Government collaboration

### Tools (Dropdown Menu)

#### Charging Simulator (`/simulator`)
- Select different EV models
- Choose charging types (Level 1, Level 2, DC Fast)
- Calculate estimated charging times
- View battery capacity and range

#### EVSE Calculator (`/evse`)
- Assess home electrical capacity
- Evaluate panel capacity
- Get installation recommendations
- Generate electrician checklist

#### Vehicle Selection (`/vehicle-selection`)
- Browse EV models by make
- Compare specifications
- Configure charging options
- Simulate charging scenarios

## Multi-language Support

The application fully supports:
- 🇬🇧 **English** (default)
- 🇫🇷 **French** (Français)

Language can be toggled using the language button in the navigation bar. The preference is saved in local storage.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open an issue on the GitHub repository.

## Acknowledgments

- Built in collaboration with [Smart Grid & Green Hydrogen Research Lab](https://smartgrid.eecs.yorku.ca/), York University
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ to promote EV awareness and sustainability
