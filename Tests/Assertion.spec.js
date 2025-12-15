import {test,expect} from '@playwright/test'

test("Check_Assertions", async({page})=>{
    await page.goto("https://kitchen.applitools.com/");
    //Assertion
    //check if element is present or not
    
    await page.getByRole('heading', { name: 'The Kitchen' }).click();
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);

    if(await page.$('text=The Kitchen')){
        await page.getByText('A pantry full of web').click();
    }

    // above can be writen as

    if(await page.getByRole('heading', { name: 'The Kitchen' }).count()>0){
        await page.getByText('A pantry full of web').click()
    }

    //check element are hidden or visible

    // await page.pause();
    await expect(page.getByText('A pantry full of web')).toBeVisible();
    await expect.soft(page.locator('text=A pantry full of web')).toBeHidden();

    // //check element if Enabled or disabled

    // await expect.soft(page.locator('text=A pantry full of web')).toBeDisabled();
    // await expect.soft(page.locator('#__next > div > div > section > div > h1')).toBeEnabled();

    // //to check if it has text

    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText("The Kitchen")
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText("The Kitchen")

    // await expect.soft(page.locator('text=A pantry full of web components that can be used for automated testing.')).toHaveText('A pantry full of web components that can be used for automated testing.');
    // await expect.soft(page.locator('#__next > div > div > section > div > p')).not.toHaveText('A pantry full of web');

    //to have class    
    
    await expect.soft(page.locator('#__next > div > div > section > div > h1')).toHaveClass("chakra-heading css-dpmy2a");
    //The above one can also be written as
    
    await expect.soft(page.locator('#__next > div > div > section > div > h1')).toHaveClass(/.*css-dpmy2a/);
    await expect.soft(page.locator('#__next > div > div > section > div > h1')).toHaveAttribute('class',/.*css-dpmy2a/)
    
    
    //to check page URL and Title
    await expect(page).toHaveURL("https://kitchen.applitools.com/");
    await expect(page).toHaveTitle(/.*Kitchen/)

    //visual validate with screenshot
    await page.pause();    
    await expect(page).toHaveScreenshot();
}
)