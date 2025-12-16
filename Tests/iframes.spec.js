import {test,expect} from '@playwright/test'

test('practice with iframes',async({page})=>{

    await page.goto('https://www.w3schools.com/html/html_iframe.asp')

    //count the number of frames
    // const frame_count=page.frames();
    // console.log(frame_count.length)

    //acesss the frame by url
    const iframe_location= page.frame({url:'https://www.w3schools.com/html/default.asp'})
    //remeber it is frame not frames :frames is only use when we are counting number of frame
    await iframe_location.click('#main > div.w3-example > a')


})

test('practice',async ({page}) => {
  
    await page.goto('https://www.w3schools.com/html/html_iframe.asp');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('iframe[title="W3Schools HTML Tutorial"]').contentFrame().getByRole('link', { name: 'Try it Yourself »' }).click();
    const page1 = await page1Promise;
    await page1.getByText('This is a paragraph.', { exact: true }).click();
    await page1.getByRole('textbox').fill('codegen ');
    await page1.getByRole('button', { name: 'Run ❯' }).click();    
})