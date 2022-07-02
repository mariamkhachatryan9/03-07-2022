//4. Write a function to return only unique values of the given array.
// Ստեղծել ֆունկցիա որը վերադարձնում է տրված զանգվածի միայն չկրկնվող անդամները։

function findTheUniqueElements(array) {
    let k = 0;
    let uniqueElements = [];
    for (let i = 0; i < array.length; i++) {
        let j;
        for (j = 0; j < array.length; j++) {
            if (i != j && array[i] == array[j]) {
                break;
            }
        }
        if (j == array.length) {
            uniqueElements[k++] = array[i];
        }
    }
    return uniqueElements;
}

let array1 = ["d", "d", "c", "b", "a", "a"];
let result = findTheUniqueElements(array1);
console.log(result);
