import {test,expect} from '@playwright/test'

test.beforeEach(async ({page}) => {

    await page.goto("https://demoqa.com/alerts");

})

test("Handling Simple Alerts", async ({page}) => {

    page.on('dialog',async(alert)=>{
        const alertMessage=alert.message();
        expect(alertMessage).toBe("You clicked a button");
        alert.accept();
    })
    await page.locator("#alertButton").click();
})

test("Handling Confrimation Alerts",async({page})=>{

    page.on('dialog',async(alert)=>{
        const alertMessage=alert.message();
        expect(alertMessage).toBe("Do you confirm action?")
        
        // do this if you want to accept the confirmation
        alert.accept();
        expect(await page.locator('#confirmResult')).toContainText("You selected Ok");
        
        //Do this if you want to cancel the confirmation
        // alert.dismiss();
        // expect(await page.locator('#confirmResult')).toContainText("You selected Cancel");

    })
    await page.locator("#confirmButton").click();
})

test("Handling Alert Which Contain TextBox",async({page})=>{

    page.on("dialog",async(alert)=>{
        const message=await alert.message();
        expect(message).toBe("Please enter your name")
        
        // do this if you want to accept the confirmation
        alert.accept("Fahad");
        expect(await page.locator("#promptResult")).toHaveText("You entered Fahad");

        //Do this if you want to cancel the confirmation
        // alert.dismiss();
    })
    await page.locator("#promtButton").click()
})

test("Handling Alert that Appears after Delay",async({page})=>{

    page.on('dialog',async(alert)=>{
        await page.waitForTimeout(5000);
        const message=await alert.message();
        expect(message).toBe("This alert appeared after 5 seconds");
        alert.accept();

    })
    await page.locator("#timerAlertButton").click()
})