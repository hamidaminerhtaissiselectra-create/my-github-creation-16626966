# 📋 CAHIER DES CHARGES COMPLET — Répar'Action Volets

**Dernière mise à jour** : 6 mars 2026  
**Version** : 5.1  
**Statut** : ✅ Production

---

## 1. IDENTITÉ & INFORMATIONS ENTREPRISE

| Champ | Valeur |
|-------|--------|
| **Nom** | Répar'Action Volets |
| **Adresse** | 62 Rue Emile Zola, 77610 Fontenay-Trésigny, FRANCE |
| **Téléphone** | 06 03 20 59 67 |
| **Email** | contact@reparaction-volets.fr |
| **Site** | https://reparaction-volets.fr |
| **Fondation** | 2014 |
| **Certifications** | RGE, Qualibat |

---

## 2. OBJECTIF STRATÉGIQUE

Créer un site web ultra-professionnel optimisé **SEO**, **GEO** (Generative Engine Optimization), **IA (SGE)** pour atteindre le **Top 3** sur toutes les recherches liées à la réparation de volets roulants et vitrerie en France.

### Règles impératives
- ❌ **Pas de mention "local"** : couverture nationale, Paris en priorité
- ❌ **Pas de chatbot** : formulaire de devis intelligent multi-étapes uniquement
- ✅ **Couverture nationale** affichée, Paris/IDF prioritaire pour les redirections actives

---

## 3. TECHNOLOGIES

| Composant | Technologie |
|-----------|-------------|
| Frontend | React 18, TypeScript, Tailwind CSS |
| Animations | Framer Motion |
| Routing | React Router DOM v6 |
| Build | Vite |
| UI Components | shadcn/ui |
| Backend (prévu) | Supabase (formulaires, auth) |

---

## 4. ARCHITECTURE DU SITE

### 4.1 Pages principales
| Route | Page | Statut |
|-------|------|--------|
| `/` | Page d'accueil | ✅ |
| `/qui-sommes-nous` | Qui sommes-nous | ✅ |
| `/blog` | Blog SEO (18 articles) | ✅ |
| `/blog/:slug` | Article de blog | ✅ |
| `/zones-intervention` | Zones d'intervention | ✅ |
| `/zones-intervention/paris` | Page région Paris | ✅ |
| `/zones-intervention/ile-de-france` | Page région IDF | ✅ |
| `/mentions-legales` | Mentions légales | ✅ |
| `/politique-confidentialite` | Politique de confidentialité | ✅ |
| `/cgv` | CGV | ✅ |

### 4.2 Pages services (5 pages, 1500+ mots)
| Route | Service | Statut |
|-------|---------|--------|
| `/services/reparation-volets-roulants` | Réparation Volets Roulants | ✅ |
| `/services/installation-remplacement-volets` | Installation & Remplacement | ✅ |
| `/services/vitrerie-remplacement-vitrage` | Vitrerie & Remplacement Vitrage | ✅ |
| `/services/motorisation-domotique` | Motorisation & Domotique | ✅ |
| `/services/depannage-express` | Dépannage Express | ✅ |

### 4.3 Pages zones localisées (53 pages SEO)

**Paris — 20 arrondissements** : `/zones-intervention/reparation-volet-paris-[1-20]`

**Île-de-France — 33 villes** :
- **Hauts-de-Seine (92)** : Boulogne-Billancourt, Neuilly, Levallois-Perret, Courbevoie, Puteaux, La Défense, Sèvres, Saint-Cloud, Rueil-Malmaison
- **Seine-Saint-Denis (93)** : Saint-Denis, Montreuil, Bobigny, Pantin, Bagnolet, Noisy-le-Sec, Aubervilliers, Saint-Ouen
- **Val-de-Marne (94)** : Créteil, Vitry-sur-Seine, Ivry-sur-Seine, Villejuif, Fontenay-sous-Bois, Vincennes, Saint-Mandé
- **Yvelines (78)** : Versailles, Saint-Germain-en-Laye, Rambouillet, Mantes-la-Jolie
- **Essonne (91)** : Évry-Courcouronnes, Corbeil-Essonnes
- **Seine-et-Marne (77)** : Melun
- **Val-d'Oise (95)** : Cergy, Pontoise

Chaque page contient :
- H1 et métadonnées uniques
- Infos locales (population, repères, caractère)
- 6 services spécialisés
- 3 témoignages clients
- 8 questions fréquentes
- Maillage vers villes limitrophes
- Image locale unique
- Schema.org LocalBusiness + FAQPage

---

## 5. SECTIONS PAGE D'ACCUEIL (ordre)

1. **Navbar** — Navigation sticky avec liens + CTA
2. **HeroSection** — Parallaxe, CTA principal, badges confiance
3. **ServicesSection** — 5 cartes services avec images et badges colorés
4. **QuoteFormSection** — Formulaire de devis multi-étapes (Formspree)
5. **AboutSection** — Présentation entreprise, chiffres clés animés
6. **ProcessSection** — 6 étapes (timeline visuelle)
7. **ImageTextSection** — Section image + texte expertise + maillage blog
8. **TestimonialsSection** — 6 avis clients complets avec badges colorés
9. **ServiceRegionsSection** — Toutes les régions de France (dépliable, redirections actives uniquement pour Paris/IDF)
10. **FAQSection** — 12 FAQ avec Schema.org FAQPage + microdata
11. **ContactSection** — Coordonnées + Google Maps embed
12. **Footer** — Liens, légal, réseaux, Schema.org LocalBusiness

### 5.1 Sections pages internes (services, à propos, etc.)
Chaque page interne affiche :
- **LocalZonesGrid** en bas de page, montrant 16 zones Paris/IDF dans un **ordre différent** (shuffle déterministe basé sur l'identifiant de la page)
- **Section "Services Complémentaires"** avec maillage interne vers les autres services et articles de blog pertinents (v5.0)

---

## 6. DESIGN SYSTEM

### Palette de couleurs (tokens sémantiques)
- `--primary` : Bleu principal (213 72% 30%)
- `--accent` : Bleu ciel CTA (205 85% 45%)
- `--service-blue`, `--service-orange`, `--service-emerald`, `--service-violet`, `--service-rose`, `--service-cyan` : Badges par service
- `--background`, `--foreground`, `--muted`, `--muted-foreground` : Textes et fonds

### Typography
- **Display** : Plus Jakarta Sans (titres)
- **Body** : Inter (texte)

### Composants réutilisables
- Badges colorés par service (style unifié : `bg-[color]/90 text-white border shadow-md backdrop-blur-sm`)
- Badge variants shadcn : `serviceBlue`, `serviceOrange`, `serviceEmerald`, `serviceRose`, `serviceViolet`, `serviceCyan`, `accent`
- Cartes avec `card-shadow` / `card-shadow-hover`
- Boutons : `variant="accent"`, `variant="accent-outline"`
- Sections avec `bg-section-gradient`
- Statistiques colorées avec tokens `text-service-blue`, `text-service-violet`, `text-service-emerald`, `text-service-orange`
- RepairShowcaseSection : 3 stats colorées avec icônes (Diagnostic, Garantie, Intervention)

### Animations (Framer Motion)
- `fadeUp`, `fadeLeft`, `fadeRight`, `fadeIn` — Scroll reveal
- `staggerItem(i)` — Items décalés dans les grilles
- `hoverLift`, `hoverLiftMd` — Élévation au survol
- `heroEntry(delay)` — Animation d'entrée de page
- Parallaxe Hero avec `useScroll` / `useTransform`

---

## 7. SEO & GEO

### On-Page SEO
- ✅ H1 unique par page avec mots-clés
- ✅ Meta description unique < 160 chars
- ✅ URLs SEO-friendly
- ✅ Balises ALT sur images (descriptives avec mots-clés)
- ✅ Maillage interne contextuel (services → blog, blog → services)
- ✅ Sitemap XML (93 URLs)
- ✅ Robots.txt (bots IA autorisés : GPTBot, ClaudeBot, PerplexityBot)

### Schema.org (v5.0 — enrichi)
- ✅ LocalBusiness (enrichi : @id, foundingDate 2014, hasCredential RGE/Qualibat, numberOfEmployees, knowsAbout)
- ✅ Organization (contactPoint customer service + emergency 7j/7)
- ✅ Service × 5 avec AggregateRating individuel
- ✅ FAQPage (accueil index.html + composant FAQSection dynamique + pages zones)
- ✅ BreadcrumbList (accueil + toutes les sous-pages : services, blog, à propos, zones)
- ✅ HowTo ("Comment faire réparer un volet roulant ?")
- ✅ AggregateRating (4.9/5, 500 avis)
- ✅ Review × 3 (avis structurés individuels)
- ✅ WebSite avec SearchAction
- ✅ WebPage avec SpeakableSpecification (recherche vocale)

### GEO Meta Tags
- ✅ `geo.region`, `geo.placename`, `geo.position`, `ICBM`
- ✅ Coordonnées GPS dans LocalBusiness

### Mots-clés principaux
- Réparation volet roulant Paris
- Installation volet roulant
- Motorisation volet
- Dépannage volet urgence
- Vitrerie Paris
- Volet bloqué
- Artisan RGE volets

### Blog SEO (18 articles)
Sujets : entretien volets, comparatifs marques (Somfy vs Bubendorff), guides motorisation, économies d'énergie, aides financières, volets solaires, articles hyper-locaux

### Maillage interne (v5.0)
- ✅ Pages services → liens vers les 4 autres services
- ✅ Pages services → liens vers 3 articles de blog pertinents
- ✅ Page blog → liens vers les 5 services
- ✅ ImageTextSection (accueil) → liens vers 3 articles blog
- ✅ LocalZonesGrid → liens vers toutes les pages zones

---

## 8. PERFORMANCE & ACCESSIBILITÉ

### Core Web Vitals cibles
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

### Optimisations
- ✅ Lazy loading images (composants et routes)
- ✅ Code splitting (lazy imports React — 15 routes lazy-loaded)
- ✅ Images WebP optimisées
- ✅ Responsive mobile-first
- ✅ Framer Motion animations (fadeUp, stagger, parallaxe)
- ✅ Font preload (Inter + Plus Jakarta Sans)
- ✅ DNS-prefetch pour CDN images
- ✅ Performance Observer (LCP monitoring)

### Breakpoints
- Mobile : < 640px (1 colonne)
- Tablet : 640-1024px (2 colonnes)
- Desktop : > 1024px (3+ colonnes)

---

## 9. FICHIERS DE DONNÉES

| Fichier | Contenu | Statut |
|---------|---------|--------|
| `src/data/zonesPagesData.ts` | 53 pages zones (20 arrondissements + 33 villes IDF) | ✅ OK |
| `src/data/blogArticles.ts` | 18 articles de blog SEO | ✅ OK |
| `src/data/content.ts` | Contenu centralisé (contact, nav, hero, services) | ✅ Nettoyé v4.0 |
| `src/data/regionsData.ts` | Données régions Paris + IDF | ✅ OK |
| `src/data/idfCities.ts` | Mapping villes IDF par département | ✅ OK |
| `src/data/villes-geolocalisation.ts` | Coordonnées GPS des 53 zones | ✅ OK |

---

## 10. HARMONISATION VISUELLE (v5.0)

### ✅ Badges overlay services
Style unifié sur toutes les pages services pour correspondre à la page d'accueil :
- `bg-[service-color]/90 text-white border shadow-md backdrop-blur-sm`
- Badge variants shadcn : `serviceBlue`, `serviceOrange`, `serviceEmerald`, `serviceRose`, `serviceViolet`, `serviceCyan`

### ✅ Statistiques colorées
Couleurs par token sémantique appliquées sur toutes les pages :
- `text-service-blue`, `text-service-violet`, `text-service-emerald`, `text-service-orange`

### ✅ RepairShowcaseSection (v5.0)
- Affichage des 3 stats (Diagnostic 15min, Garantie 3 ans, Intervention 48h) au lieu de 2
- Icônes colorées avec background sémantique (`bg-service-blue/10`, etc.)
- Uniformisation avec le style des autres sections

### ✅ TestimonialsSection (v5.0)
- Affichage des 6 témoignages complets au lieu de 3
- Chaque témoignage avec badge coloré par service

### ✅ Maillage interne contextuel (v5.0)
- Section "Services Complémentaires" ajoutée à toutes les pages services
- Liens vers les 4 autres services + 3 articles blog pertinents
- Style cohérent avec la page blog (rounded-full, border, hover)

---

## 11. CE QUI RESTE À FAIRE

### 🔴 Priorité haute
- [ ] **Connexion Supabase** : formulaire de devis fonctionnel (envoi emails, stockage données)
- [ ] **Vérification rendu mobile** : tester toutes les pages sur mobile (badges, statistiques, cartes)
- [ ] **Tests E2E** : vérifier tous les liens, redirections et le rendu sur chaque page

### 🟡 Priorité moyenne
- [ ] **Google Business Profile** : configuration et optimisation
- [ ] **Pages régions hors IDF** : activer les redirections vers des pages dédiées quand le contenu sera prêt
- [ ] **Optimisation images** : vérifier poids, dimensions, alt-text de toutes les images
- [ ] **CookieConsent** : corriger le warning React.forwardRef

### 🟢 Priorité basse
- [ ] **Analytics** : Google Analytics / Tag Manager
- [ ] **Avis Google** : intégration widget avis réels
- [ ] **Newsletter** : capture email pour fidélisation
- [ ] **WhatsApp Business** : intégration API (optionnel)

---

## 12. HISTORIQUE DES VERSIONS

| Version | Date | Changements |
|---------|------|-------------|
| 5.0 | 06/03/2026 | Enrichissement SEO (BreadcrumbList Blog/About, foundingDate corrigé 2014), harmonisation visuelle (6 témoignages, 3 stats RepairShowcase), maillage interne contextuel sur toutes les pages services (liens services + blog), mise à jour documentation |
| 4.0 | 06/03/2026 | Nettoyage données (suppression HD Connect), harmonisation badges et statistiques colorées sur toutes les pages, mise à jour documentation |
| 3.0 | 04/03/2026 | Consolidation documentation, 18 articles blog, harmonisation design, section régions France complète |
| 2.0 | 23/02/2026 | 53 pages localisées, animations avancées, mobile-first |
| 1.5 | 22/02/2026 | Animations et effets visuels |
| 1.0 | 22/02/2026 | Création initiale, SEO/GEO |

---

## 13. DÉPLOIEMENT

```bash
# Installation
pnpm install

# Développement
pnpm run dev

# Build production
pnpm run build

# Vérification TypeScript
pnpm run check
```

### Checklist pré-déploiement
- [ ] Vérifier types TypeScript
- [ ] Tester toutes les pages
- [ ] Vérifier responsivité mobile
- [ ] Tester animations
- [ ] Vérifier liens internes
- [ ] Vérifier métadonnées SEO
- [ ] Tester formulaires
- [ ] Vérifier images
- [ ] Tester multi-navigateurs
- [ ] Vérifier Core Web Vitals

---

## HISTORIQUE DES MODIFICATIONS v5.1

### TestimonialsSection — Personnalisée par service
- Chaque page service affiche les témoignages triés par pertinence (ex: page Vitrerie → témoignage bris de glace en premier)
- Titres et sous-titres uniques par page service
- Prop `priorityService` ajoutée au composant

### FAQSection — FAQs uniques par page  
- Chaque page service a 6 FAQs spécifiques (réparation, dépannage, installation, motorisation, vitrerie)
- Schéma JSON-LD FAQPage généré dynamiquement avec les FAQs de la page courante
- Pages régions Paris et IdF enrichies avec 6 FAQs contextuelles chacune

### ProcessSection — Titres contextualisés
- Chaque page service a son propre titre, sous-titre et description détaillée
- Props `title`, `subtitle`, `detail`, `badge` ajoutées au composant

### RepairShowcaseSection — Stats uniques par page
- Prop `stats` ajoutée pour passer des statistiques personnalisées
- 5 jeux de stats différents (Réparation, Dépannage, Installation, Motorisation, Vitrerie)

### Sitemap.xml — Complété
- Ajout des articles de blog locaux manquants : `choisir-volet-roulant-marais-paris`, `depannage-volet-montmartre-paris-18`
- Vérification de la cohérence avec les routes de l'application

### Pages Régions — FAQs enrichies
- Page Paris : 6 FAQs détaillées (prix, arrondissements, haussmannien, motorisation, RGE)
- Page IdF : 6 FAQs détaillées (délais, déplacement, départements, copropriétés, marques, maintenance)

---

**Répar'Action Volets — Cahier des charges v5.1**
