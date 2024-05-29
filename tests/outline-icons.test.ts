import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/outline-icons');
});

test('Outline Icons page has expected h1, meta title', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Outline Icons - Flowbite Svelte Icons' })
  ).toBeVisible();
});

test('Outline Icons page has expected meta title', async ({ page }) => {
  await expect(page).toHaveTitle('Outline Icons - Flowbite Svelte Icons');
});

test('Outline Icons page has expected meta description', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', 'Outline Icons - Flowbite Svelte Icons');
});

test('Outline Icons page has expected meta og', async ({ page }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'Outline Icons - Flowbite Svelte Icons');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', 'Outline Icons - Flowbite Svelte Icons');
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/outline-icons');
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/flowbite-svelte-icons?title=Outline Icons'
  );
});

test('Outline Icons page has expected meta twitter', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'Outline Icons - Flowbite Svelte Icons');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute(
    'content',
    'Outline Icons - Flowbite Svelte Icons'
  );
  const metaTwitterImage = page.locator('meta[name="twitter:image"]');
  await expect(metaTwitterImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/flowbite-svelte-icons?title=Outline Icons'
  );
});
