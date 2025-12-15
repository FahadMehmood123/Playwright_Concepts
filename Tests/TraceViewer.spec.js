import { test, expect } from '@playwright/test';
import path from 'path';

// let context;

// test.beforeAll(async ({browser})=>{

//     context= await browser.newContext();
//     await context.tracing.start({screenshots: true, snapshots:true , sources:true})

// })

// test.afterAll(async({browser})=>{
//     await context.tracing.stop({path: "traces.zip"})
// })


test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  
  await page.locator('[data-test="username"]').fill('standard_user');
  
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  
  await page.locator('[data-test="login-button123"]').click();
  
  await page.getByRole('button', { name: 'Open Menu' }).click();
  
  await page.locator('[data-test="logout-sidebar-link"]').click();
});