function mindGame(number) {
    // if (typeof number != 'number') {
    //     return 'please provide a number'
    // }
    // else if (number <= 0) {
    //     return 'please provide a positive number'
    // }
    if (typeof number != 'number' || number <= 0) {
        return 'please provide a number and must be a positive number'
    }
    else {
        const sum = ((((number * 3) + 10) / 2) - 5);
        return sum;
    }
}

console.log(mindGame(12));