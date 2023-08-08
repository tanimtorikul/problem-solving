function isInteger(number) {
    if (typeof number != 'number' || isNaN(number)) {
        return 'please provide a valid number'
    }
    else{
        if (number % 1 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(isInteger('urii54jup4juop4j'));