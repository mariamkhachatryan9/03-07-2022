//9․ Find the max payment 
// Գտնել մեծագույն կատարված վճարումը

function findMaxValue(payments) {
    let max = payments[0].payedAmount;
    for (let i = 0; i < payments.length; i++) {
        if (payments[i].payedAmount > max) {
            max = payments[i].payedAmount;
        }
    }
    return max;
}
let res = findMaxValue(payments);
console.log(res);
