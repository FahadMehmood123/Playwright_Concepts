import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://demoqa.com/webtables')
})

test('Test-header', async ({ page }) => {
  const headers = page.locator('.rt-th'); //to check columns
  await page.waitForTimeout(5000);
  expect(headers.nth(0)).toHaveText("First Name");
  //Another way to check all at once
  await expect(headers).toHaveText([
    'First Name',
    'Last Name',
    'Age',
    'Email',
    'Salary',
    'Department',
    'Action'
  ]);

});

test.only("Test-Addition Fucntion",async ({page}) => {
  await page.locator("#addNewRecordButton").click()
  await expect.soft(page.locator('.modal-content')).toHaveScreenshot();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Fahad');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Mehmood');
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('name@example.com');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Tab');
  await page.getByRole('textbox', { name: 'Age' }).fill('44');
  await page.getByRole('textbox', { name: 'Age' }).press('Tab');
  await page.getByRole('textbox', { name: 'Salary' }).fill('120000');
  await page.getByRole('textbox', { name: 'Salary' }).press('Tab');
  await page.getByRole('textbox', { name: 'Department' }).fill('Computer Science');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('gridcell', { name: 'Fahad' })).toBeVisible();
  
})

test("Search-Fuctionality",async ({page}) => {
  await page.locator("input#searchBox").click()
  await page.locator("input#searchBox").fill("Alden")
  

})