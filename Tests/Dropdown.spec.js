import {test,expect} from '@playwright/test'


test("Single Static Dropdown",async ({page}) => {

    await page.goto("https://practice.expandtesting.com/dropdown");
    await page.waitForTimeout(2000);
    
    await page.selectOption('#dropdown',{label:'Option 1'})
    expect(page.locator('#dropdown')).toHaveValue('1');
     
    //For value and index
    await page.selectOption('#dropdown',{value:'1'})
    expect(page.locator('#dropdown')).toHaveValue("1");
    
    //index is unstable/flaky so avoid using it
    await page.selectOption('#dropdown',{index:1})
    
})

test("Multi Static Dropdown with check option",async ({page}) => {

    await page.goto("https://admirhodzic.github.io/multiselect-dropdown/demo.html");
    await page.locator('body > div > div > div > div:nth-child(3)').click();
    await page.locator('body > div > div > div > div:nth-child(3) > div > div > div:nth-child(2) > input[type=checkbox]').check();

})

test("DropDown with searchable textField",async ({page}) => {

    await page.goto("https://vinothqaacademy.com/drop-down/");
    await page.locator('//span[@id="select2-FromAccount-container"]').click();
    await page.locator('input[type="search"]').fill('8400001')
    await page.getByRole('option', { name: 'Bal - $3,881.62' }).click();
    expect(page.locator(`//span[@id='select2-FromAccount-container']`)).toHaveText("8400001 Bal - $3,881.62");
    
})

test("Drop down with search-suggestions",async ({page}) => {

    await page.goto("https://vinothqaacademy.com/drop-down/");
    
    await page.locator(`.select2-search__field`).click()
    //chaining of locators
    //phly ya ul.select2-results__options click kary ga
    await page.locator(`ul.select2-results__options`).locator('li',{hasText:"Java"}).first().click();
    expect(page.locator(`li.select2-selection__choice`)).toHaveAttribute('Title','Java')
    
})


test("Hidden Dropdown",async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(2000);
    await page.locator("//span[text()='PIM']").click();
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();
    // Wait for the listbox options to appear (or timeout after 5s)
    await page.waitForSelector("//div[@role='listbox']//span", { state: 'visible', timeout: 5000 }).catch(() => null);
    const optionsLocator = page.locator("//div[@role='listbox']//span");
    const count = await optionsLocator.count();
    if (count === 0) {
        console.warn('No dropdown options found.');
    } else {
        for (let i = 0; i < count; i++) {
            const txt = await optionsLocator.nth(i).textContent();
            if(txt?.trim()=="QA Engineer"){await optionsLocator.nth(i).click();}
            break;
        }
    }

});