// 3.From the given array of numbers create two arrays one containing only odd and the other only even numbers.
// Տրված թվային զանգվածից ստանալ երկու զանգվածներ, որոնցից մեկը կպարունակի միայն կենտ իսկ մյուսը միայն զույգ թվեր:

let numbers = [14, 28, 3, 8, 5, 1];
function getEvenNumbers(array) {
    let j = 0;
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers[j] = array[i];
            j++
        }
    }
    return evenNumbers;
}

let result1 = getEvenNumbers(numbers);

function getOddNumbers(array) {
    let k = 0;
    let oddNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddNumbers[k] = array[i];
            k++
        }
    }
    return oddNumbers;
}
let result2 = getOddNumbers(numbers);
console.log("Even numbers = " + result1 + "\n Odd numbers = " + result2);