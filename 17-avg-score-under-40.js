// 17. * Return array of students for whom the average evaluation is less than 40,
// Վերադարձնել այն ուսանողների ցուցակը որոնց միջին գնահատականը 40 ից ցածր է։

function averageScoreUnder40(evaluations) {
    let studentList = [];

    for (let i = 0; i < evaluations.length; i++) {
        let alreadyInList = false;
        for (let j = 0; j < studentList.length; j++) {
            if (evaluations[i].studentId == studentList[j].studentId) {
                alreadyInList = true;
                studentList[j].score += evaluations[i].score;
                studentList[j].count++;
            }
        }
        if (!alreadyInList) {
            studentList.push({
                "studentId": evaluations[i].studentId,
                "studentName": evaluations[i].studentName,
                "score": evaluations[i].score,
                "count": 1
            });
        }
    }
    let resultList = [];
    for (let i = 0; i < studentList.length; i++) {
        let avg = studentList[i].score / studentList[i].count;
        if (avg < 40) {
            resultList.push({
                "studentId": studentList[i].studentId,
                "studentName": studentList[i].studentName,
                "average": avg
            });
        }
    }
    return resultList;
}
let res = averageScoreUnder40(evaluations);
console.log(res);