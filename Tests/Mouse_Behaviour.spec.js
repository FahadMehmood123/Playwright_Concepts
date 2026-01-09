import {test,expect} from '@playwright/test';

test(`Handling Mouse hover`,async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(2000);
    await page.locator("//span[text()='PIM']").click();
    const button=await page.locator("(//input[@placeholder='Type for hints...'])[1]");
    await button.click({button:'right'});
    //await button.dblclick();// for double click

});