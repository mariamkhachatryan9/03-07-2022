// 2. Find the smallest and the largest number from the supplied numeric array. Return an array containing these numbers։
// Գտնել զանգվածի ամենափոքր և ամենամեծ տարրերը և վերադարձնել նոր զանգվածի մեջ։

function findMaxAndMinElements(array){
    let max = array[0];
    let min = array[0];

    for (let i = 0; i < array.length; i++) {
        if(max<array[i]){
            max=array[i];
        } if(min>array[i]){
            min = array[i];
        }
    }
    return [min,max];
}
let numbers = [14, 28, 3, 8, 2];
let result = findMaxAndMinElements(numbers);
alert(result);
