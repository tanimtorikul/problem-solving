function isLGSeven(number) {
    if (typeof number != 'number') {
        return 'please provide me a number'
    }
    else{
        
        const differ = number - 7;
        if (differ < 7) {
            return differ;
        }
        else{
            return number *2;
        }
    }
}

console.log(isLGSeven(15));