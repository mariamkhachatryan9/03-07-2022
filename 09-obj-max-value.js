//9․ Find the max payment 
// Գտնել մեծագույն կատարված վճարումը

function findMaxValue(evaluations) {
    let max = evaluations[0].payedAmount;
    for (let i = 0; i < evaluations.length; i++) {
        if (evaluations[i].payedAmount > max) {
            max = evaluations[i].payedAmount;
        }
    }
    return max;
}
let res = findMaxValue(evaluations);
console.log(res);
