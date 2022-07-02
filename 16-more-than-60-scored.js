// 16. Return array of students that have any evaluation more than 60․
// Վերադարձնել այն ուսանողների ցուցակը, որոնք ունեն որևէ արդյունք որը մեծ է 60-ից։

function moreThan60ScoredStudents(evaluations) {
    let studentList = [];
    for (let i = 0; i < evaluations.length; i++) {
        if (evaluations[i].score > 50) {
            studentList.push({
                "studentId": evaluations[i].studentId,
                "studentName": evaluations[i].studentName,
                "score": evaluations[i].score
            });
        }
    }
    return studentList;
}
let res = moreThan60ScoredStudents(evaluations);
console.log(res);