import { test, expect } from '@playwright/test';

test("Page Title",async ({page})=>{

    await page.goto('https://www.youtube.com/')
    await expect(page).toHaveTitle("YouTube")
})