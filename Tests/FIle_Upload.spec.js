import { expect,test } from "@playwright/test";
import { chromium } from "@playwright/test";

test("Handle uploading of files",async({page})=>{

  //FIle upload method
    const handle= page.locator('#uploadPicture');
    await handle.setInputFiles('F:/Automation_project_1/playwright.config.js')
  //FIle upload method
})

test("Multiple File Handling",async({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    const handle= page.locator('#filesToUpload');
    await handle.setInputFiles(["F:/Playwrite_automation/package-lock.json","F:/Playwrite_automation/playwright.config.js"])
    //wait for time to upload the file
    await page.waitForTimeout(5000);
    expect(page.locator("//li[normalize-space()='package-lock.json']")).toHaveText('package-lock.json')
    expect(page.locator('xpath=id("fileList")/li[2]')).toHaveText('playwright.config.js')

    //remove file
    await page.locator('#filesToUpload').setInputFiles([])
    expect(page.locator('xpath=id("fileList")/li[1]')).toHaveText('No Files Selected')


})

