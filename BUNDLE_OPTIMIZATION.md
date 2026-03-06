# Guide d'Optimisation du Bundle JavaScript

Ce document détaille les stratégies d'optimisation du bundle JavaScript pour atteindre un score Lighthouse 90+.

## 📊 État Actuel du Bundle

### Dépendances Lourdes Identifiées

| Bibliothèque | Taille | Utilisation | Recommandation |
|---|---|---|---|
| **Radix UI** | ~80-120 KB | Composants UI (buttons, dialogs, etc.) | ✅ Garder (bien utilisée) |
| **framer-motion** | ~40-60 KB | Animations parallax et transitions | ✅ Garder (animations critiques) |
| **react-router-dom** | ~50-70 KB | Routage | ✅ Garder (essentiel) |
| **recharts** | ~100-150 KB | Graphiques (si utilisé) | ⚠️ À vérifier |
| **react-day-picker** | ~30-50 KB | Calendrier (si utilisé) | ⚠️ À vérifier |
| **@tanstack/react-query** | ~30-40 KB | Gestion données | ✅ Garder (utile) |
| **Lucide React** | ~20-30 KB | Icônes | ✅ Garder (bien utilisée) |

## 🎯 Optimisations Implémentées

### 1️⃣ Migration des Images (Complétée)

**Avant:**
```typescript
import heroImg from "@/assets/hero-shutters.webp";
// ❌ Image incluse dans le bundle
```

**Après:**
```typescript
const heroImg = "/images/assets/hero-shutters.webp";
// ✅ Image servie depuis /public
```

**Gain estimé:** -200-300 KB du bundle JS

### 2️⃣ Code Splitting avec React.lazy (Complété)

**Avant:**
```typescript
import Index from "./pages/Index";
import Blog from "./pages/Blog";
// ❌ Tout le code chargé au démarrage
```

**Après:**
```typescript
const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
// ✅ Chaque page chargée à la demande
```

**Gain estimé:** +15-20 points Lighthouse Performance

### 3️⃣ Optimisation des Imports Lucide

**Avant:**
```typescript
import * from "lucide-react";
// ❌ Tous les icônes importés
```

**Après:**
```typescript
import { ArrowRight, Shield, Clock } from "lucide-react";
// ✅ Imports nommés (tree-shaking)
```

**Gain estimé:** -10-20 KB

### 4️⃣ Preload Hero Image (Complété)

**Dans index.html:**
```html
<link rel="preload" as="image" href="/images/assets/hero-shutters.webp" type="image/webp" />
```

**Gain estimé:** +5 points LCP

### 5️⃣ Optimisation des Attributs Image

**Avant:**
```jsx
<img src={heroImg} />
```

**Après:**
```jsx
<img 
  src={heroImg}
  fetchPriority="high"
  loading="eager"
  decoding="sync"
  width={1920}
  height={1280}
/>
```

**Gain estimé:** +10 points Performance

## 📈 Stratégie de Réduction du Bundle

### Étape 1: Analyser le Bundle Actuel

```bash
# Installer l'analyseur
npm install --save-dev rollup-plugin-visualizer

# Générer le rapport
npm run build
```

Puis ouvrir `dist/stats.html` pour voir la répartition des dépendances.

### Étape 2: Identifier les Imports Inutilisés

```bash
# Vérifier les imports inutilisés
npm run lint
```

### Étape 3: Utiliser Tree-Shaking

Assurer que `package.json` contient:
```json
{
  "sideEffects": false
}
```

### Étape 4: Lazy Load les Routes Non-Critiques

Déjà implémenté dans `App.tsx`:
- ✅ Pages services (lazy)
- ✅ Pages régions (lazy)
- ✅ Pages blog (lazy)
- ✅ Pages légales (lazy)

## 🔍 Audit du Bundle Recommandé

### 1. Vérifier recharts

```bash
grep -r "recharts" src/
```

Si non utilisé, supprimer:
```bash
npm uninstall recharts
```

### 2. Vérifier react-day-picker

```bash
grep -r "react-day-picker" src/
```

Si non utilisé, supprimer:
```bash
npm uninstall react-day-picker
```

### 3. Vérifier les Icônes Lucide

Compter les imports uniques:
```bash
grep -r "from \"lucide-react\"" src/ | wc -l
```

Si < 50 icônes, c'est optimal.

## 📊 Scores Estimés Après Optimisation

### Avant Optimisation
```
Performance:    65-75
SEO:            85-95
Accessibility:  80-90
Best Practices: 85-90
```

### Après Optimisation
```
Performance:    90-95  (+20-30 points)
SEO:            100    (+5-15 points)
Accessibility:  95     (+5-15 points)
Best Practices: 95     (+5-10 points)
```

## 🚀 Checklist d'Optimisation

- [x] Migrer les images vers `/public/images/`
- [x] Implémenter le code splitting (React.lazy)
- [x] Ajouter preload pour l'image hero
- [x] Optimiser les attributs des images
- [ ] Analyser le bundle avec rollup-plugin-visualizer
- [ ] Supprimer les dépendances inutilisées
- [ ] Vérifier les imports Lucide (tree-shaking)
- [ ] Tester avec Lighthouse
- [ ] Monitorer les Core Web Vitals

## 🧪 Tester les Optimisations

### Build de Production

```bash
npm run build
npm run preview
```

Puis ouvrir Chrome DevTools > Lighthouse et générer un rapport.

### Lighthouse CLI

```bash
npm install -g @lhci/cli@latest
lhci autorun
```

## 📚 Ressources

- [Webpack Bundle Analyzer](https://github.com/webpack-bundle-analyzer/webpack-bundle-analyzer)
- [Rollup Plugin Visualizer](https://github.com/btd/rollup-plugin-visualizer)
- [Web.dev - Bundle Optimization](https://web.dev/reduce-javascript-for-faster-site-performance/)
- [React Code Splitting](https://react.dev/reference/react/lazy)

## 🎯 Prochaines Étapes

1. **Installer et exécuter l'analyseur de bundle**
   ```bash
   npm install --save-dev rollup-plugin-visualizer
   ```

2. **Ajouter le plugin à vite.config.ts**
   ```typescript
   import { visualizer } from 'rollup-plugin-visualizer';
   
   export default defineConfig({
     plugins: [
       visualizer({
         open: true,
         gzipSize: true,
         brotliSize: true,
       })
     ]
   });
   ```

3. **Générer le rapport**
   ```bash
   npm run build
   ```

4. **Analyser et optimiser** en fonction des résultats
