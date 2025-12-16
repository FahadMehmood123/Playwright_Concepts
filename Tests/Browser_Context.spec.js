import {test,expect, chromium} from '@playwright/test'

test('Context Element',async({})=>{

    const browser=await chromium.launch();

    const ContextA=await browser.newContext();
    const ContextB=await browser.newContext();

    const PageA1=await ContextA.newPage();
    const PageB1=await ContextB.newPage();

    await PageA1.goto("https://google.com")
    await PageB1.goto("https://youtube.com")


})