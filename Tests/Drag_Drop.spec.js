import {test,expect} from '@playwright/test';

test(`Drag and drop functionality`,async({page})=>{

    await page.goto('https://demoqa.com/droppable');    
    await page.dragAndDrop('#draggable','.simple-drop-container>#droppable');  // source , target
    expect(page.locator(".simple-drop-container>#droppable")).toHaveCSS('background-color','rgb(70, 130, 180)')
    expect(page.locator(".simple-drop-container>#droppable")).toContainText('Dropped!');
})



test(`Drag and drop Revert Dragable`,async({page})=>{

    await page.goto('https://demoqa.com/droppable');
    await page.locator('#droppableExample-tab-revertable').click();
    const currentPosition=await page.locator("#revertable").evaluate((el)=>{
        const style = window.getComputedStyle(el);
        return {
            top: style.top,
            left: style.left
        };
    });
    //console.log(`Current position is x: ${currentPosition.left} and y: ${currentPosition.top}`);
    await page.dragAndDrop('#revertable','.revertable-drop-container>#droppable');
    await page.waitForTimeout(2000);
    const newPostion=await page.locator("#revertable").evaluate((el)=>{
        const style=window.getComputedStyle(el);
        return{
            top:style.top,
            left:style.left
        };
    });
    await page.waitForTimeout(2000);
    expect(currentPosition.top).toEqual(newPostion.top);
    expect(currentPosition.left).toEqual(newPostion.left);
    
    await page.waitForTimeout(2000);
    await page.dragAndDrop(".revertable-drop-container>div>#notRevertable",".revertable-drop-container>#droppable");
    const currentPosition_notRevertable=await page.locator('#notRevertable').evaluate((el)=>{
        const style=window.getComputedStyle(el);
        return{
            top:style.top,
            left:style.left
        }

    })

    await page.dragAndDrop('#notRevertable',`.revertable-drop-container>div:nth-child(1)`);
    await page.waitForTimeout(2000);
    const newPosition_notRevertable=await page.locator('#notRevertable').evaluate((el)=>{
        const style=window.getComputedStyle(el);
        return{
            top:style.top,
            left:style.left
        }
    })
    expect(currentPosition_notRevertable.top).toEqual(newPosition_notRevertable.top);
    expect(currentPosition_notRevertable.left).toEqual(newPosition_notRevertable.left);
    

});