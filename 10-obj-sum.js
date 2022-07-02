// 10. Calculate the sum of all evaluations 
// Հաշվել վճարումների ամբողջ գումարը

function sumOfPayments(payments){
    let sum = 0;
    for (let i = 0; i < payments.length; i++) {
        sum += payments[i].payedAmount;
    }
    return sum;
}
let res = sumOfPayments(payments);
console.log(res);
