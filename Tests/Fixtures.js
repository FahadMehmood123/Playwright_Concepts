import {test as base} from '@playwright/test'


const test= base.extend({

    LoginFixture:async ({page},use) => {

        await page.goto('https://practicetestautomation.com/practice-test-login/');
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('student');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
        await page.getByRole('button', { name: 'Submit' }).click();
        await use(page);
        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill('the oddyssey');
        
    }
})

export {test};

// const test=base.extend({
    
//     Loginasadmin:async({page})=>{

//         //code for adminlogin step using codegen
//         await use();
//     },
    
//     Loginasuser:async({page})=>{

//         //code for userlogin step using codegen
//         await use();
//     },

//     Login:async({page})=>{

//         //simply paste in link of homepage: step using codegen
//         await use();
//     }


// })


// const test2=base.extend({

//     nameoffixture: async ({page}) => {
//         await page.goto("https://www.google.com")
//         await use();

//     }


// })

