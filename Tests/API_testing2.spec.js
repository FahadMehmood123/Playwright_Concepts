import{test,expect} from '@playwright/test'


test('Testing nayatel apis',async({request})=>{

    const Testing=await request.post("https://api.nayatel.com/creatives/JwtAuthentication/authenticateUser.php",{
        name:'Shahid1993',
        password: 'Shahid@786'
})

console.log(Testing.status())

})

test("random testing",async ({request}) => {
    
    const random= request.get("https://api.nayatel.com/creatives/JwtAuthentication/authenticateUser.php");
})