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

test('Number of Rows',async({page})=>{
  // await page.waitForSelector('rt-tr-group');
  // use .rt-tbody .rt-tr-group instead of directly accessing .rt-tr-group
  // becase if we directly access .rt-tr-group then it will be difficult for vs code 
  // to find it and it will throw timeout error  
  const numberofrows=await page.locator('.rt-tbody .rt-tr-group');
  const rowCount = await numberofrows.count();
  console.log(rowCount);
  // expect(rowCount).toEqual(10);

})

test('Number of Columns',async({page})=>{
  const numberofcolumns=await page.locator('.rt-thead .rt-tr .rt-th');
  // .rt-thead=parent .rt-tr=child .rt-th=grand child
  expect(await numberofcolumns.count()).toEqual(7);
})

test("Test-Addition Fucntion",async ({page}) => {
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
  
  await page.locator("#searchBox").fill("Alden");
  
  const numberofrows=await page.locator('.rt-tbody .rt-tr-group');
  const rowCount = await numberofrows.count();
  var count=0;
  

  for (let i=1;i<=numberofrows;i++){
  //Keep in mind i value in loop should start from 1 as child(0) is not accessable in any DOM

    const put=await page.locator(`.rt-tbody .rt-tr-group:nth-child(${i}) .rt-td:nth-child(1)`).textContent();
    if(put=='Alden'){
      expect(put).toEqual('Alden')
      count++;
    }
    else{
      expect(put).toEqual("");
    }
    expect(count).toBeGreaterThan(0);
  }
  
})