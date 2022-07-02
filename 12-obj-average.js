//12. Calculate the average of all evaluations
// Հաշվել բոլոր կատարված վճարուների թվաբանական միջինը

function getAverageOfPayments(payments) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < payments.length; i++) {
        sum += payments[i].payedAmount;
        count++;
    }
    return sum / count;
}
let res = getAverageOfPayments(payments);
console.log(res);
