// Calculate the total sum of payment amounts made by each student. We need to return an array that 
// contains a list of information about students, including the total paid amount by the student.
// Հաշվել յուրաքանչյուր ուսանողի կողմից վճարված ամբողջ գումարը։ Անհրաժեշտ է վերադարձնել ուսանողների ցուցակը (array),
//  որը ընդգրկում է ուսանողների տվյալները, նեռարյալ ուսանողի կողմից ամբողջ վճարված գումարը։

function getStudentsAndEvaluations(evaluations) {
    let studentList = [];
    let sum = 0;
    for (let i = 0; i < evaluations.length; i++) {
        let alreadyInList = false;
        for (let j = 0; j < studentList.length; j++) {
            if (evaluations[i].studentId == studentList[j].studentId) {
                alreadyInList = true;
                studentList[j].payedAmount += evaluations[i].payedAmount;
            }
        }
        if (!alreadyInList) {
            studentList.push({
                "studentId": evaluations[i].studentId,
                "courseName": evaluations[i].courseName,
                "payedAmount": evaluations[i].payedAmount

            });
        }
    }
    return studentList;
}

let res = getStudentsAndEvaluations(evaluations);
console.log(res);
