import { expect,test } from "@playwright/test";

test("Handling date pickers",async ({page}) => {

    await page.goto("https://demoqa.com/date-picker");
    await page.locator('#datePickerMonthYearInput').click();
    await page.selectOption(`.react-datepicker__month-select`,{value:"10"})
    await page.selectOption(`.react-datepicker__year-select`,{value:"1999"})
    await page.locator('.react-datepicker__week:nth-child(1) > div:nth-child(5)').click()
    await page.waitForTimeout(5000);
    expect(await page.locator("#datePickerMonthYearInput")).toHaveValue("11/04/1999")
    
})
