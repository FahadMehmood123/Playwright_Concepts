import {test,expect} from '@playwright/test'

test.skip('skip this test', async ({ page }) => {
   // This test will be skipped
 });



test.fail('not yet ready', async ({ page }) => {
    // will mark test as failure
    //will show error if the test does not fail
   
 });


test.fixme('test to be fixed', async ({ page }) => {
    //test will be aborted
 });


test.slow('slow test', async ({ page }) => {
   //marks the test as slow and triples the test timeout
 });


test.only('focus this test', async ({ page }) => {
   // Run only focused tests in the entire project
 });

//Tags: use to categrize our test

test("@smoke Test with smoke",async({page})=>{
    await page.goto('https://www.google.com/?zx=1765188839660&no_sw_cr=1')
    await page.pause();
})

// COMMAND USE FOR IT IS: npx playwright test -g "@smoke": all the tests with smoke tags will run

// You can tag your tests with tags like


// 1: @smoke → Critical tests to quickly verify basic functionality

// 2: @regression → Tests that check if existing features still work

// 3: @login → Tests related to login functionality

// 4: @api → Tests related to API