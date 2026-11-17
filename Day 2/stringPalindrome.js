
let actualStr = "RadaR";
let reverseStr = "";

function reverseString()
{
    let convertStr = actualStr.split("");
    console.log(convertStr);
    
        for (let i = convertStr.length - 1 ; i >= 0 ; i--)
    {
        reverseStr = reverseStr + convertStr[i];
    }
    console.log(reverseStr);
        return reverseStr; 
}
function isPalindrome()
{
    if(actualStr.toLowerCase() === reverseStr.toLowerCase())
        return true;
    else
        return false;        
}
reverseString()
console.log(isPalindrome());



