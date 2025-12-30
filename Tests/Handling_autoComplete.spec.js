import {test,expect} from '@playwright/test'

test("Handling auto complete with keyborad",async ({page}) => {
    
    await page.goto("https://www.google.com/");
    await page.locator(`//textarea[@jsname="yZiJbe"]`).fill("Fahad Mehmood")
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(4000);
})

test("Handling auto Complete with Suggestions",async ({page}) => {
    
    await page.goto("https://www.google.com/");
    await page.locator(`//textarea[@jsname="yZiJbe"]`).fill("Fahad Mehmood")
    await page.waitForSelector('.wM6W7d> span')

    //There are 13 matches for .wM6W7d> span so what $$ gonna do is it will store all those
    //13 in an array in array name=element
    const element=await page.$$(`.wM6W7d> span`)
    
    for(let i=0;i<element.length;i++){
        
        const text=await element[i].textContent()
        
        if(text=='fahad mehmood linkedin'){
            await element[i].click()
            break;
        }
    }
    
})