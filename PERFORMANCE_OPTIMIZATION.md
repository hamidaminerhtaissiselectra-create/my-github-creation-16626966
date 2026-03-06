# Guide d'Optimisation des Performances - Core Web Vitals

Ce document détaille les optimisations implémentées pour améliorer les Core Web Vitals du site Répar'Action Volets.

## 📊 Core Web Vitals Ciblés

### 1. Largest Contentful Paint (LCP)
**Objectif**: < 2.5 secondes

**Optimisations implémentées**:
- Lazy loading des images avec `IntersectionObserver`
- Priorité aux images critiques (hero image)
- Compression des images en WebP
- Préchargement des ressources critiques

### 2. First Input Delay (FID) / Interaction to Next Paint (INP)
**Objectif**: < 100ms

**Optimisations implémentées**:
- Code splitting avec React.lazy()
- Deferring non-critical JavaScript
- Optimisation des event listeners
- Utilisation de requestIdleCallback pour les tâches non-critiques

### 3. Cumulative Layout Shift (CLS)
**Objectif**: < 0.1

**Optimisations implémentées**:
- Dimensions explicites pour toutes les images
- Réservation d'espace pour les images avec placeholder
- Éviter les insertions de contenu au-dessus du fold
- Utilisation de `contain: layout` en CSS

## 🖼️ Optimisation des Images

### Composants Créés

#### 1. LazyImage.tsx
Composant pour le lazy loading simple des images avec IntersectionObserver.

```tsx
import LazyImage from '@/components/LazyImage';

<LazyImage
  src="/path/to/image.webp"
  alt="Description"
  className="w-full h-auto"
  priority={false}
/>
```

#### 2. OptimizedPicture.tsx
Composant Picture avancé avec support WebP et fallback JPG/PNG.

```tsx
import OptimizedPicture from '@/components/OptimizedPicture';

<OptimizedPicture
  src="/path/to/image.jpg"
  alt="Description"
  srcSet="/path/to/image-sm.webp 640w, /path/to/image-lg.webp 1920w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  priority={false}
/>
```

### Stratégie de Format

- **WebP**: Format principal (compression 25-35% meilleure que JPG)
- **JPG/PNG**: Fallback pour les navigateurs anciens
- **Dimensions**: Générer 3 versions (sm: 640px, md: 1024px, lg: 1920px)

### Recommandations d'Implémentation

1. **Images Hero**: Utiliser `priority={true}` pour éviter le lazy loading
2. **Images Below-the-fold**: Utiliser `priority={false}` (défaut)
3. **Placeholder**: Utiliser une couleur de placeholder ou une image très compressée
4. **Srcset**: Adapter les breakpoints aux designs responsive du site

## 🔧 Configuration Vite

La configuration `vite.config.ts` inclut:

```typescript
build: {
  assetsInlineLimit: 4096,
  rollupOptions: {
    output: {
      assetFileNames: (assetInfo) => {
        // Organise les images dans assets/images/
        // Organise les fonts dans assets/fonts/
      },
    },
  },
}
```

## 📝 Checklist d'Optimisation

- [ ] Convertir toutes les images en WebP avec fallback JPG
- [ ] Ajouter des dimensions explicites (width/height) à toutes les images
- [ ] Implémenter le lazy loading pour les images below-the-fold
- [ ] Ajouter des placeholders aux images
- [ ] Générer des srcsets responsives (3 tailles minimum)
- [ ] Utiliser `decoding="async"` sur toutes les images
- [ ] Implémenter le préchargement des ressources critiques
- [ ] Tester avec Lighthouse et PageSpeed Insights
- [ ] Monitorer les Core Web Vitals en production

## 🧪 Tests de Performance

### Lighthouse Audit
```bash
# Générer un rapport Lighthouse
npm run build
npm run preview
# Ouvrir Chrome DevTools > Lighthouse
```

### PageSpeed Insights
Tester sur: https://pagespeed.web.dev/

### Web Vitals Monitoring
Implémenter `web-vitals` pour le monitoring en production:

```bash
npm install web-vitals
```

```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 📚 Ressources

- [Web.dev - Core Web Vitals](https://web.dev/vitals/)
- [MDN - Image Optimization](https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia)
- [Vite - Build Optimization](https://vitejs.dev/guide/build.html)
- [React - Code Splitting](https://react.dev/reference/react/lazy)

## 🚀 Prochaines Étapes

1. Installer `imagemin` et `imagemin-webp` pour la conversion automatique
2. Implémenter le préchargement des ressources critiques
3. Ajouter le monitoring des Web Vitals en production
4. Optimiser les fonts (utiliser `font-display: swap`)
5. Implémenter le code splitting pour les routes non-critiques
