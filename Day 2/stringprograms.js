//Example 1
    let myName = "Welcome to TestLeaf";
    let splitName = myName.split(" ");
    console.log(splitName);
    console.log(splitName[2]);
    console.log(splitName[2].length);  
        
//Example 2

function findLastWordLength()
    {
    let strTrim = "   This is my second string program   "
    console.log(strTrim);

    let strTrimmed = strTrim.trim();
    console.log(strTrimmed);
    
    let splitLast= strTrimmed.split(" ");
    console.log(splitLast);
    console.log(splitLast[5]);
    return splitLast[5].length;
    }
let result = findLastWordLength();
console.log(result);  

//Example 3

function isAnagram(str1 , str2)
{
    let string1 = str1.trim().toLowerCase();
    let string2 = str2.trim().toLowerCase();
    console.log(string1 , string2);
    
    let splitString1 = string1.split("");
    let splitString2 = string2.split("");
    console.log(splitString1 , splitString2);

    let sortString1 = splitString1.sort();
    let sortString2 = splitString2.sort();
    console.log(sortString1 , sortString2);

    for(let i = 0 ; i < sortString1.length ; i++)
        if(sortString1[i] === sortString2[i])
            return true;
        else
            return false;
     }

console.log(isAnagram(" listen " , " liste ")); 