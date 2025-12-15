import { expect } from "@playwright/test";


expect.extend({

    tobeinrange(recieved,min,max){
        const pass= recieved >=min && recieved <=max //this will store true/false
        
        //Now it is the rule for custom tester that it should return 2 things 
        //true/false boolean 
        //Function returning a  string message
        return {
            pass, 
            message: () => pass ? "Number in range" : "Number not in range"
        }    
    },
    toBeEven(number){
        const pass= number%2==0
        return{
            pass,
            message: () => pass ? "Number is even" : "Number is odd"
        }
    },
    toHaveLengthBetween(str,min,max){
        const pass= str.length >=min && str.length <=max
        return{
            pass,
            message: ()=> pass ? "Length in rang" : "length is out of range"
        }
    },
    toContainTextIgnoreCase(str,str2){
        const ignorecase=str.toLowerCase();
        const pass= ignorecase.includes(str2.toLowerCase());
        return{
            pass,
            message: ()=> pass ? "has text" : "do not have text"
        }
    },
    toBeWithinPercentage(recieved,expected,percentage){
        const number1=expected+percentage/100*expected;
        const number2=expected-percentage/100*expected;
        const pass=recieved<=number1 && recieved>=number2
        return{
            pass,
            message:()=> pass ? `${recieved} is in the range of ±${percentage}% of ${expected}` : `${recieved} is not in the range of ±${percentage}% of ${expected}`
        }
    }
    
})