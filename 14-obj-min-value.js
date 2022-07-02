// 14.  Return  the evaluation record with the lowest evaluation score,
// Վերադարձնել ամենացածր գնահատականով(score) քննության արդյունքը։

function minScore(evaluations) {
    let min = evaluations[0].score;
    for (let i = 0; i < evaluations.length; i++) {
        if (evaluations[i].score < min) {
            min = evaluations[i].score;
        }
    }
    return min;
}
let res = minScore(evaluations);
console.log(res);
