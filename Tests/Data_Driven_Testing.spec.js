import {test, expect} from '@playwright/test';

const testData=[
    {testname:"Invalid Data 1", username:"student1",password:"Password123", isError: true},
    {testname:"Invalid Data 2", username:"student2",password:"Password1234", isError:true},
    {testname:"Valid Data",username:"student",password:"Password123", isError:false}
]

testData.forEach((data)=>{

    test(`Data Driven Tests for ${data.testname}`,async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator('input#username').fill(data.username);
    await page.locator('input#password').fill(data.password);
    await page.locator('button#submit').click();
    if(data.isError){
        expect(page.locator("div#error")).toBeVisible();
        expect(page.locator("div#error")).toHaveText("Your username is invalid!");
    }else {
        //assertion to check if page is redirected to secure area
        await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");
        
    }   

});

})

