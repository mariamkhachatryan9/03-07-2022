//12. Calculate the average of all evaluations
// Հաշվել բոլոր կատարված վճարուների թվաբանական միջինը

function getAverageOfevaluations(evaluations) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < evaluations.length; i++) {
        sum += evaluations[i].payedAmount;
        count++;
    }
    return sum / count;
}
let res = getAverageOfevaluations(evaluations);
console.log(res);