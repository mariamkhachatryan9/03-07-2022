// 6.Write a function that accepts 2 array arguments and returns a boolean value -
//  Does the first array contain all elements represented in the second array.
// Ստեղծել ֆունկցիա որը ստանում է 2 զանգված և վերադարձնում boolean - 
// ստուգելով արդյոք առաջին զանգվածը պարունակում է 2-րդ զանգվածի բոլոր անդամները

let array1 = [2, 5, "a", 4];
let array2 = [6, 4, "a", 5, 2];

function checkIfElementsAreSame(arr1, arr2) {

    for (let i = 0; i < arr2.length; i++) {
        let temp = true;
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                temp = false;
                break;
            }
        }
        if (temp) {
            return false;
        }
    }
    return true;
}
let res = checkIfElementsAreSame(array1, array2);
console.log(res);