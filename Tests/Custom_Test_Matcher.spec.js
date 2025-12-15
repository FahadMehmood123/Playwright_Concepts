import { test,expect} from '@playwright/test';
import './Custom_Test_Matcher'

test("To check if the number is in range",async({})=>{

    const temp=7;
    expect(temp).tobeinrange(5,10)
})

test("Even/odd",async({})=>{

    const temp=8;
    expect(temp).toBeEven()
})

test("lengthinnbetween",async ({}) => {

    expect("FahadMehmood").toHaveLengthBetween(4,6)

})

test.only("text included",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    const element=await page.locator('#login > h2').textContent();
    //text.Content() will get the text in an element
    expect(element).toContainTextIgnoreCase("test")
})

test.only("to Be Within Percentage",async({page})=>{
    expect(100).toBeWithinPercentage(100,10)
    
})
