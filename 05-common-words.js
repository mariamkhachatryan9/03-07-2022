// 5.Create a function that accepts 2 arrays of words and returns the common words from each.
// Գրել ֆունկցիա որը ստանում է 2 զանգված և վերադարձնում է նրանց ընդհանուր տարրերը։


let arr1 = ["dog", "cat", "parrot", "rat"];
let arr2 = ["lizard", "rat", "cat", "parrot"];

function getCommonWords(array1, array2) {
    let newArray = [];
    let k = 0;
    for (let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++)
        if (array1[i] === array2[j]) {
            newArray[k] = array1[i];
            k++;
        }
    }
    return newArray;
}
let result = getCommonWords(arr1, arr2);
console.log(result);