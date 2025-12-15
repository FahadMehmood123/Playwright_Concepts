import {test} from './Fixtures';
import { expect } from '@playwright/test';

test("Testing app through Fixtures", async ({LoginFixture,page}) => {
    await page.goto("https://www.google.com")
})

// test("Testing Fixtures",async({helloworld,page})=>{
    
//     expect(helloworld).toBe(42);
    

// })

// test("go to the website", async({page})=>{
//     await page.goto("https://www.google.com")
// })