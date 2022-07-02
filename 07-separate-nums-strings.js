//7. From the given array of numbers and strings create 2 new arrays, one containing only numbers, another one only strings.
// Տրված զանգվածից որը պարունակում թվեր և տողեր, ստեղծել նոր 2 զանգված մեկը միայն թվեր կպարունակի, մյուսը միայն տողեր

let mixedArray = [2, 4, "a", 5, "b"];

function separateNumsAndStrings(array) {
    let strings = [];
    let numbers = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(typeof element == 'string'){
            strings.push(element);
        }else if(typeof element == 'number'){
            numbers.push(element);
        }
    }
    return [numbers,strings];
}
let res = separateNumsAndStrings(mixedArray);
console.log(res);
