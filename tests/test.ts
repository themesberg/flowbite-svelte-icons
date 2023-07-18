import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Flowbite Svelte Icons' })).toBeVisible();
});

test('all page has expected h1', async ({ page }) => {
  await page.goto('/all');
  await expect(page.getByRole('heading', { name: 'Flowbite Svelte Icons: All icons' })).toBeVisible();
});

test('Outline page has expected h1', async ({ page }) => {
  await page.goto('/outline');
  await expect(page.getByRole('heading', { name: 'Flowbite Svelte Icons: Outline' })).toBeVisible();
});

test('Solid page has expected h1', async ({ page }) => {
  await page.goto('/solid');
  await expect(page.getByRole('heading', { name: 'Flowbite Svelte Icons: Solid' })).toBeVisible();
});

