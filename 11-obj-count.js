//11. Find the count of all evaluations that are more than 1500
// Գտնել բոլոր այն վճարումների քանակը, որոնք ավելին են 1500-ից

function countOfPayments(payments) {
    let count = 0;
    for (let i = 0; i < payments.length; i++) {
        if (payments[i].payedAmount > 1500){
            count++;
        }
    }
    return count;
}
let res = countOfPayments(payments);
console.log(res);
