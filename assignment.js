
// basic math
function cubeNumber(number) {
    // validation check
    if (typeof number != 'number') {
        return 'Please provide a number'
    }
    // validation check
    else if (number <= 0) {
        return 'Please provide a positive number'
    }
    else {
        // calculating cube of the number
        const cube = number * number * number;
        return cube;
    }
}


// find where is there anything match in string1 with string2
function matchFinder(string1, string2) {
     // validation check
    if (typeof string1 != 'string' && typeof string2 != 'string') {
        return 'Please provide both the input as string'
    }
    else {
        // checking string2 is there in string1 or not
        if (string1.includes(string2)) {
            return true;
        }
        else{
            return false;
        }
    }
}


// sort numbers in array in descending way
function sortMaker(arr) {
    // validation check
    for (const item of arr) {
        if (item < 0) {
            return 'Invalid Input'
        }
        // checking whethere both array is equal
        else if (arr[0] === arr[1]) {
            return 'equal'
        }
        // sorting arrays
        else if (arr[0] < arr[1]) {
            return [arr[1], arr[0]];
        }
        else if (arr[0] > arr[1]) {
            return [arr[0], arr[1]];
        }

    }
}



// show output the property of object, and replace with __ for any missing property

function findAddress(obj) {
     // validation check
    if (typeof obj != 'object') {
        return 'Please provide me a object'
    }
   
     // output of object
    else {
        const street = obj.street|| '__';
        const house = obj.house || '__';
        const society = obj.society || '__';
        return street + ' '+ house + ' ' + society;
    }
}



// Can you buy chips with summation of arrays. 

function canPay(changeArray, totalDue) {
     // validation check
    if (changeArray.length === 0) {
        return 'You cannot keep this array as empty';
    }
    else {
        // initialize sum 
        let sum = 0;
        for (let item of changeArray) {
            sum += item;
        }
        // checking sum is larger than totalDue
        if (sum > totalDue) {
            return true;
        }
        // checking sum is smaller than totalDue
        else if (sum < totalDue) {
            return false;
        }
    }
}


