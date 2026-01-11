# Translation Guide for EVMotion

## How to Use Translations in Your Components

### 1. Import the useLanguage hook:
```tsx
import { useLanguage } from "@/contexts/LanguageContext";
```

### 2. Use the translation function in your component:
```tsx
const { t } = useLanguage();

// Then use it like this:
<h1>{t('hero.title')}</h1>
```

## Available Translation Keys

### Navigation (`nav.*`)
- `nav.home` - Home / Accueil
- `nav.benefits` - Benefits / Avantages
- `nav.charging` - Charging / Recharge
- `nav.simulator` - Simulator / Simulateur
- `nav.sustainability` - Sustainability / Durabilité
- `nav.tools` - Tools / Outils
- `nav.evse` - EVSE
- `nav.vehicleSelection` - Vehicle Selection / Sélection de véhicule

### Common (`common.*`)
- `common.evAwareness` - EV Awareness / Sensibilisation aux VE
- `common.yes` - Yes / Oui
- `common.no` - No / Non
- `common.clear` - CLEAR / EFFACER
- `common.save` - SAVE CONFIG / ENREGISTRER LA CONFIG
- `common.start` - START SIMULATION / DÉMARRER LA SIMULATION

### Hero Section (`hero.*`)
- `hero.title` - Welcome to the Future of
- `hero.titleHighlight` - Electric Mobility
- `hero.subtitle` - Discover how electric vehicles...
- `hero.exploreButton` - Explore Benefits
- `hero.simulatorButton` - Try Simulator

### Benefits Section (`benefits.*`)
- `benefits.title` - Why Choose Electric Vehicles?
- `benefits.environmental.title` - Environmental Impact
- `benefits.cost.title` - Cost Savings
- `benefits.performance.title` - Superior Performance
- `benefits.tech.title` - Advanced Technology

### Charging Section (`charging.*`)
- `charging.title` - Understanding EV Charging
- `charging.level1.title` - Level 1 Charging
- `charging.level2.title` - Level 2 Charging
- `charging.dcfast.title` - DC Fast Charging

### EVSE Page (`evse.*`)
- `evse.title` - EVSE Installation Assessment Tool
- `evse.sectionA` - Section A: Your Electrical Service
- `evse.sectionB` - Section B: Existing Home Loads
- `evse.sectionC` - Section C: EV Charger Details
- And many more...

### Vehicle Selection Page (`vehicle.*`)
- `vehicle.title` - VEHICLE SELECTION
- `vehicle.makeLabel` - Vehicle Make
- `vehicle.chargerSection` - CHARGER SELECTION
- And many more...

### Footer (`footer.*`)
- `footer.tagline` - Driving the future of sustainable transportation
- `footer.about` - About
- `footer.resources` - Resources
- `footer.legal` - Legal

## Example Usage in a Component

```tsx
import { useLanguage } from "@/contexts/LanguageContext";

export function MyComponent() {
  const { t, language } = useLanguage();

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
      <button>{t('hero.exploreButton')}</button>
      
      {/* Current language: {language} */}
    </div>
  );
}
```

## Adding New Translations

To add new translations:

1. Open `/client/src/contexts/LanguageContext.tsx`
2. Add your key to both `en` and `fr` objects:

```tsx
en: {
  'mySection.myKey': 'English text',
},
fr: {
  'mySection.myKey': 'Texte français',
}
```

3. Use it in your component: `{t('mySection.myKey')}`

## Notes

- The language preference is automatically saved to localStorage
- The language persists across page reloads
- All translations are centralized in one file for easy management
- Use dot notation for organization (section.key)

