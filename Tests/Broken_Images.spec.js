import { expect,test } from "@playwright/test";

const numbers=[1,2,3,4,5]
const squares=numbers.map(square)

function square(element){
    return Math.pow(element,2)
}


test('check broken images', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/broken_images');

  //lazy loading check karny lia -optional to write
  await page.mouse.wheel(0, 2000);

  // get all image elements
  const images = await page.locator('img');

  const count = await images.count();
  console.log('Total images:', count);

  for (let i = 0; i < count; i++) {
    const image = images.nth(i);

    // check image is loaded or not
    //natural width tells the real width of image after loading
    const isBroken = await image.evaluate(img => img.naturalWidth === 0);

    const src = await image.getAttribute('src');
    isBroken? console.log(`❌ Broken image found: ${src}`): console.log(`✅ Image loaded correctly ${src}`);
  //   if (isBroken) {
  //     const src = await image.getAttribute('src');
  //     console.log('❌ Broken image found:', src);
  //   } else {
  //     const src = await image.getAttribute('src');
  //     console.log('✅ Image loaded correctly',src);
  //   }
  }
});









