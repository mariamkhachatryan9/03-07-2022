// 15.  Return the name of the student who has the lowest evaluation score․
// Վարադարձնել այն ուսանողի անունը, ով արդյունքների մեջ ունի ամենացածր գնահատականը։

function lowestScoredStudent(evaluations) {
    let min = evaluations[0].score;
    let name = evaluations[0].studentName;
    for (let i = 0; i < evaluations.length; i++) {
        if (evaluations[i].score < min) {
            min = evaluations[i].score;
            name = evaluations[i].studentName;
        }
    }
    return name;
}
let res = lowestScoredStudent(evaluations);
console.log(res);