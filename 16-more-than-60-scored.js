// 16. Return array of students that have any evaluation more than 60․
// Վերադարձնել այն ուսանողների ցուցակը, որոնք ունեն որևէ արդյունք որը մեծ է 60-ից։
function moreThan60ScoredStudents(evaluations) {
    let studentList = [];
    for (let i = 0; i < evaluations.length; i++) {
        if (evaluations[i].score > 60) {
            let alreadyInList = false;
            for (let j = 0; j < studentList.length; j++) {
                if (evaluations[i].studentId === studentList[j].studentId) {
                    alreadyInList = true;
                    break;
                }
            }
            if (!alreadyInList) {
                studentList.push({
                    "studentId": evaluations[i].studentId,
                    "studentName": evaluations[i].studentName
                });
            }
        }
    }
    return studentList;
}

let res = moreThan60ScoredStudents(evaluations);
console.log(res);
