function numberType(num)
{   
    let n = num; 
    if(n > 0)
        return "Positive"
    else if(n < 0)
        return "Negative"
    else 
        return "Neutral"
}

console.log(numberType(11));
console.log(numberType(0));
console.log(numberType(-3));

