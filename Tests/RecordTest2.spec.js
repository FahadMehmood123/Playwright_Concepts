import { test, expect } from '@playwright/test';

test('TestRandom', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('w3schools');
  await page.keyboard.press('Enter');  
  await page.getByRole('link', { name: /W3Schools Online Web/i }).click();
  await page.getByRole('textbox', { name: 'Search our tutorials' }).click();
  await page.getByRole('textbox', { name: 'Search our tutorials' }).fill('Playwright');
  await page.getByRole('textbox', { name: 'Search our tutorials' }).press('Enter');
  await page.getByRole('link', { name: 'Playwrite IS - W3Schools' }).click();
  await page.locator('pre:nth-child(12)').click();
  await page.getByRole('textbox').fill('Fuck you');
});