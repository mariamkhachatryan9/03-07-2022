//11. Find the count of all evaluations that are more than 1500
// Գտնել բոլոր այն վճարումների քանակը, որոնք ավելին են 1500-ից

function countOfevaluations(evaluations) {
    let count = 0;
    for (let i = 0; i < evaluations.length; i++) {
        if (evaluations[i].payedAmount > 1500){
            count++;
        }
    }
    return count;
}
let res = countOfevaluations(evaluations);
console.log(res);