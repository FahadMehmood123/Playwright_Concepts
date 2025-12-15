import { test, expect } from '@playwright/test';

test("Pratice test", async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    // #user-name
    await page.locator('#user-name').click();
    await page.locator('#user-name').fill('standard_user');
    //#using CSS selector
    // await page.locator('#password').fill('secret_sauce');
    // #login-button
    await page.locator('#login-button').click();
    //using xpath ( we use xpath because sometime id aur class same hti hai )
    await page.locator('//*[@id="password"]').fill('secret_sauce');
    //using Text ( Elemnt kay oper jo text likha hota hai uss say b locator access kar skty hain)
    await page.locator('text=LOGIN').click();

})