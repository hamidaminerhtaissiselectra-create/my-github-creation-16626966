import { test, expect } from '@playwright/test';

test('homepage has correct title and a specific text', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Répar'Action Volets/);

  // Expect a specific text to be visible on the page.
  await expect(page.getByText('Réparation, Installation & Motorisation de Volets Roulants')).toBeVisible();
});
