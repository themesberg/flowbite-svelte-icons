import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Flowbite Svelte Icons' })).toBeVisible();
});

test('Outline page has expected h1', async ({ page }) => {
  await page.goto('/icons');
  await expect(page.getByRole('heading', { name: 'Flowbite Svelte Icons: Outline' })).toBeVisible();
});

test('Solid page has expected h1', async ({ page }) => {
  await page.goto('/icons');
  await expect(page.getByRole('heading', { name: 'Flowbite Svelte Icons: Solid' })).toBeVisible();
});
