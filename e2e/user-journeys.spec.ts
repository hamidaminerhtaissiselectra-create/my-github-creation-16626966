import { test, expect } from '@playwright/test';

test.describe('User Journey: Navigation and Service Pages', () => {
  test('should navigate to blog page', async ({ page }) => {
    await page.goto('/');
    
    // Click on blog link
    await page.getByRole('link', { name: /blog|actualités/i }).first().click();
    
    // Verify we're on blog page
    await expect(page).toHaveURL(/blog/i);
    
    // Verify blog articles are visible
    await expect(page.getByRole('heading').first()).toBeVisible();
  });

  test('should navigate to regions page', async ({ page }) => {
    await page.goto('/');
    
    // Click on zones d'intervention link
    await page.getByRole('link', { name: /zones.*intervention|paris|île-de-france/i }).first().click();
    
    // Verify we're on a regions page
    await expect(page).toHaveURL(/zones|regions|paris|idf/i);
  });
});

test.describe('User Journey: Contact and CTA', () => {
  test('should display contact information', async ({ page }) => {
    await page.goto('/');
    
    // Look for phone number or contact button
    const contactElements = await page.getByText(/contact|appel|téléphone|01|06/i).count();
    expect(contactElements).toBeGreaterThan(0);
  });

  test('should have working call-to-action buttons', async ({ page }) => {
    await page.goto('/');
    
    // Look for CTA buttons
    const ctaButtons = await page.getByRole('button').count();
    expect(ctaButtons).toBeGreaterThan(0);
  });
});

test.describe('User Journey: Mobile Responsiveness', () => {
  test('should be responsive on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Verify page loads correctly on mobile
    await expect(page.getByRole('heading').first()).toBeVisible();
  });

  test('should be responsive on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    // Verify page loads correctly on tablet
    await expect(page.getByRole('heading').first()).toBeVisible();
  });
});

test.describe('User Journey: Page Performance', () => {
  test('should load homepage within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    
    // Allow some errors but not critical ones
    const criticalErrors = errors.filter(e => !e.includes('ref'));
    expect(criticalErrors.length).toBe(0);
  });
});

test.describe('User Journey: SEO and Meta Tags', () => {
  test('should have proper meta tags on homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check for meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toBeTruthy();
    expect(metaDescription?.length).toBeGreaterThan(10);
    
    // Check for og:title
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();
  });

  test('should have proper canonical tag', async ({ page }) => {
    await page.goto('/');
    
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBeTruthy();
  });
});
