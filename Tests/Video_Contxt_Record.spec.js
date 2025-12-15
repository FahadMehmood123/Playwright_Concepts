import { chromium, expect, test } from "@playwright/test";


test("Slow motion and video recording wtih context", async()=>{

    // launch browser
    const browser = await chromium.launch({
         headless: false,
         slowMo: 1000
    })
// create a context for browser
        const context = await browser.newContext({
            recordVideo: {
             dir: 'videos/',
             size: {width:800, height: 600}
   }
})
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'username' }).press('Tab');
  await page.getByRole('textbox', { name: 'password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('listitem').filter({ hasText: 'manda userSmith' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.close();
})




