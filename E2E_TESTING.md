# Guide des Tests E2E - Playwright

Ce document détaille la configuration et l'utilisation des tests End-to-End (E2E) avec Playwright.

## 📋 Vue d'ensemble

Les tests E2E valident les parcours utilisateurs complets du site Répar'Action Volets. Ils couvrent:

- Navigation entre les pages
- Interactions utilisateur (clics, formulaires)
- Responsivité mobile et desktop
- Performance de chargement
- Métadonnées SEO
- Absence d'erreurs console

## 🚀 Démarrage Rapide

### Installation

Les dépendances Playwright sont déjà installées. Pour réinstaller les navigateurs:

```bash
pnpm playwright install
```

### Exécuter les Tests

```bash
# Exécuter tous les tests E2E
pnpm test:e2e

# Exécuter les tests en mode UI (interactif)
pnpm test:e2e:ui

# Exécuter les tests en mode debug
pnpm test:e2e:debug

# Afficher le rapport HTML
pnpm test:e2e:report
```

## 📁 Structure des Tests

```
e2e/
├── example.spec.ts           # Test simple de la page d'accueil
└── user-journeys.spec.ts     # Tests des parcours utilisateurs complets
```

### Fichiers de Test

#### `example.spec.ts`
Test basique validant:
- Titre de la page
- Contenu visible

#### `user-journeys.spec.ts`
Suite complète de tests couvrant:

1. **Navigation et Pages de Services**
   - Navigation vers la page blog
   - Navigation vers les zones d'intervention
   - Vérification des URLs

2. **Contact et CTA**
   - Affichage des informations de contact
   - Présence des boutons d'appel à l'action

3. **Responsivité Mobile**
   - Viewport mobile (375x667)
   - Viewport tablet (768x1024)
   - Vérification du contenu visible

4. **Performance**
   - Temps de chargement < 3s
   - Absence d'erreurs console critiques

5. **SEO et Métadonnées**
   - Présence de meta description
   - Présence de og:title
   - Présence de canonical tag

## 🔧 Configuration

### `playwright.config.ts`

Configuration principale:

```typescript
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: 'pnpm dev --host 0.0.0.0 --port 5173',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
```

## ✍️ Écrire de Nouveaux Tests

### Structure de Base

```typescript
import { test, expect } from '@playwright/test';

test('description du test', async ({ page }) => {
  // Arrange
  await page.goto('/');
  
  // Act
  await page.getByRole('link', { name: /blog/i }).click();
  
  // Assert
  await expect(page).toHaveURL(/blog/i);
});
```

### Sélecteurs Recommandés

```typescript
// Par rôle (préféré pour l'accessibilité)
page.getByRole('button', { name: /submit/i })
page.getByRole('link', { name: /contact/i })
page.getByRole('heading', { level: 1 })

// Par texte
page.getByText(/welcome/i)

// Par placeholder
page.getByPlaceholder(/search/i)

// Par label
page.getByLabel(/email/i)

// Par test ID
page.getByTestId('submit-button')
```

### Assertions Courantes

```typescript
// Navigation
await expect(page).toHaveURL(/blog/i);
await expect(page).toHaveTitle(/Répar'Action/);

// Visibilité
await expect(page.getByText('Hello')).toBeVisible();
await expect(page.getByRole('button')).toBeEnabled();

// Contenu
await expect(page.getByText('Email')).toContainText('example@test.com');

// Nombre d'éléments
await expect(page.getByRole('listitem')).toHaveCount(5);
```

### Interactions Utilisateur

```typescript
// Clics
await page.getByRole('button').click();

// Saisie de texte
await page.getByPlaceholder('Email').fill('test@example.com');

// Sélection
await page.getByRole('combobox').selectOption('option1');

// Navigation
await page.goto('/');
await page.goBack();

// Attendre
await page.waitForURL(/blog/);
await page.waitForSelector('.loaded');
```

## 🧪 Exécution en CI/CD

### GitHub Actions

Exemple de workflow:

```yaml
name: E2E Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm test:e2e
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## 📊 Rapports et Debugging

### Rapport HTML

```bash
pnpm test:e2e:report
```

Ouvre un rapport interactif avec:
- Résultats des tests
- Screenshots
- Vidéos (si activées)
- Traces

### Mode Debug

```bash
pnpm test:e2e:debug
```

Lance Playwright Inspector pour:
- Exécuter pas à pas
- Inspecter les éléments
- Tester les sélecteurs

### Traces

Activez les traces pour le debugging avancé:

```typescript
test.use({ trace: 'on' });
```

## 🎯 Bonnes Pratiques

1. **Utiliser les rôles ARIA** plutôt que les sélecteurs CSS
2. **Tester les parcours utilisateurs** complets, pas juste les éléments isolés
3. **Éviter les délais fixes** (`await page.waitForTimeout(1000)`)
4. **Utiliser les attentes** (`await page.waitForURL(...)`)
5. **Tester sur plusieurs navigateurs** (Chromium, Firefox, WebKit)
6. **Garder les tests indépendants** (pas de dépendances entre tests)
7. **Utiliser des données de test** cohérentes et prévisibles

## 🚨 Dépannage

### Les tests échouent localement mais passent en CI

- Vérifier que le serveur de dev est lancé
- Vérifier les ports utilisés
- Vérifier les variables d'environnement

### Erreur: "browserType.launch"

Installer les dépendances système:

```bash
sudo pnpm exec playwright install-deps
```

### Timeouts

Augmenter le timeout global:

```typescript
test.setTimeout(60000); // 60 secondes
```

## 📚 Ressources

- [Documentation Playwright](https://playwright.dev/)
- [Bonnes Pratiques](https://playwright.dev/docs/best-practices)
- [Sélecteurs](https://playwright.dev/docs/locators)
- [Assertions](https://playwright.dev/docs/test-assertions)

## 📈 Résultats des Tests

Dernière exécution: **30/30 tests passés** ✅

- Chromium: 10/10 ✓
- Firefox: 10/10 ✓
- WebKit: 10/10 ✓

Couverture:
- Navigation: ✓
- Contact & CTA: ✓
- Responsivité: ✓
- Performance: ✓
- SEO: ✓
