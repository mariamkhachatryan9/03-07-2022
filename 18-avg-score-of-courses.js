// 18. * Return array of courses including average evaluation for each course,
// Վերադարձնել բոլոր առարկաների ցուցակը և նրանց միջին քննական արդյունքը։

function averageScoreOfCourses(evaluations) {
    let courseList = [];

    for (let i = 0; i < evaluations.length; i++) {
        let alreadyInList = false;
        for (let j = 0; j < courseList.length; j++) {
            if (evaluations[i].courseId == courseList[j].courseId) {
                alreadyInList = true;
                courseList[j].score += evaluations[i].score;
                courseList[j].count++;
            }
        }
        if (!alreadyInList) {
            courseList.push({
                "courseId": evaluations[i].courseId,
                "courseName": evaluations[i].courseName,
                "score": evaluations[i].score,
                "count": 1
            });
        }
    }
    let resultList = [];
    for (let i = 0; i < courseList.length; i++) {
        let avg = courseList[i].score / courseList[i].count;
        resultList.push({
            "courseId": courseList[i].courseId,
            "courseName": courseList[i].courseName,
            "average": avg
        });
    }
    return resultList;
}
let res = averageScoreOfCourses(evaluations);
console.log(res);