// 10. Calculate the sum of all evaluations 
// Հաշվել վճարումների ամբողջ գումարը

function sumOfevaluations(evaluations){
    let sum = 0;
    for (let i = 0; i < evaluations.length; i++) {
        sum += evaluations[i].payedAmount;
    }
    return sum;
}
let res = sumOfevaluations(evaluations);
console.log(res);
