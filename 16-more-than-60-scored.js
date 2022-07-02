// 16. Return array of students that have any evaluation more than 60․
// Վերադարձնել այն ուսանողների ցուցակը, որոնք ունեն որևէ արդյունք որը մեծ է 60-ից։
const evaluations = [
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe",
        courseId: 1, // Unique identifier for each course
        courseName: "JS Bootcamp",
        score: 70
    },
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe",
        courseId: 2, // Unique identifier for each course
        courseName: "JS Level 0",
        score: 60
    },
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe",
        courseId: 3, // Unique identifier for each course
        courseName: "JS Level 1",
        score: 50
    },
    {
        studentId: 2, // Unique identifier for each student
        studentName: "Tom Colins",
        courseId: 1, // Unique identifier for each course
        courseName: "JS Bootcamp",
        score: 60
    },
    {
        studentId: 2, // Unique identifier for each student
        studentName: "Tom Colins",
        courseId: 2, // Unique identifier for each course
        courseName: "JS Level 0",
        score: 50
    },
    {
        studentId: 2, // Unique identifier for each student
        studentName: "Tom Colins",
        courseId: 3, // Unique identifier for each course
        courseName: "JS Level 1",
        score: 40
    },
    {
        studentId: 3, // Unique identifier for each student
        studentName: "Sarah Conor",
        courseId: 1, // Unique identifier for each course
        courseName: "JS Bootcamp",
        score: 45
    },
    {
        studentId: 3, // Unique identifier for each student
        studentName: "Sarah Conor",
        courseId: 2, // Unique identifier for each course
        courseName: "JS Level 0",
        score: 35
    },
    {
        studentId: 3, // Unique identifier for each student
        studentName: "Sarah Conor",
        courseId: 3, // Unique identifier for each course
        courseName: "JS Level 1",
        score: 25
    }
];
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