import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');
  await page.getByRole('textbox', { name: 'Search our tutorials' }).click();
  await page.getByRole('textbox', { name: 'Search our tutorials' }).fill('playwright');
  await page.getByRole('textbox', { name: 'Search our tutorials' }).press('Enter');
  await page.locator('#learntocode_searchbtn').click();
  await page.getByRole('link', { name: 'TypeScript Tutorial' }).click();
  await page.getByRole('link', { name: 'TS Introduction' }).click();
});