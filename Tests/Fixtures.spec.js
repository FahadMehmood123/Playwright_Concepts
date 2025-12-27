import {test} from './Fixtures';
import { expect } from '@playwright/test';

test("Testing app through Fixtures", async ({LoginFixture,page}) => {
    await LoginFixture.locator("#menu-item-20 > a").click()
    //ya wo jo state the Ficture.js mai usay he pick kary ga aur yahe say continue kary ga agr
    //hum continue kary loginFixture use karna instead of page
    await page.goto("https://www.google.com")
})

// test("Testing Fixtures",async({helloworld,page})=>{
    
//     expect(helloworld).toBe(42);
    

// })

// test("go to the website", async({page})=>{
//     await page.goto("https://www.google.com")
// })