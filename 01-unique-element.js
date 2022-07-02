// 1. Find the value that is not being repeated inside the given array.
// Գտնել այն արժեքը որը ընհանրապես չի կրկնվում տրված զանգվածում
// Օրինակ։ ["a", "a", "b", "a"] //Պատասխան։ 'b'


function findTheUniqueElement(array) {
    for (let i = 0; i < array.length; i++) {
        let j;
        for (j = 0; j < array.length; j++) {
            if (i != j && array[i] == array[j]) {
                break;
            }
        }
        if (j == array.length) {
            return array[i];
        }
    }
    return "nope";
}
let array1 = ["a", "a", "b", "a"];
let result = findTheUniqueElement(array1);
console.log(result);