import {test,expect} from '@playwright/test'


test("Broken Images With URL Response",async({page})=>{

    page.on('response',async(response)=>{
        // this response fucntion above itself is a loop
        // it is basicallay a listner ( sunnay ka kaaam karta hai) 
        // Jab jab koi response aata hai
        // yeh function automatically dobara chal jata hai
        // response ka matlab hai:
        // Page ko jo bhi cheez milay server say chahe wo:
        // image, HTML, CSS, JavaScript, API data
        // 👉 sab ko listen karna
        //server say kaisy milti iss ki explanation google doc mai hain wha say parho
        
        const urls=response.url();
        if(urls.endsWith('.jpg') || urls.endsWith ('.png') || urls.endsWith ('.jpeg')){
            //hr response ka chahy wo html ho css ho har ksi ka
            //status code hota hai 
            const check=response.status()
            if(check !=200){
                console.log("Image is Broken- Needed fixing",urls);
            }
        }
    });
    await page.goto('https://the-internet.herokuapp.com/broken_images');
    

});