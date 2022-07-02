const evaluations = [
    {
        studentId: 1, // Unique identifier for each student
        courseName: "John Doe", // Name of the student
        payedAmount: 1600, // Amount payed with this transaction
        year: 2020, // The payment year
    },
    {
        studentId: 1, // Unique for each student
        courseName: "John Doe",
        payedAmount: 1500,
        year: 2021
    },
    {
        studentId: 1, // Unique for each student
        courseName: "John Doe",
        payedAmount: 1400,
        year: 2022
    },
    {
        studentId: 1, // Unique for each student
        courseName: "John Doe",
        payedAmount: 1300,
        year: 2023
    },
    {
        studentId: 2, // Unique for each student
        courseName: "Lu Kang",
        payedAmount: 1500,
        year: 2020
    },
    {
        studentId: 2, // Unique for each student
        courseName: "Lu Kang",
        payedAmount: 1400,
        year: 2021
    },
    {
        studentId: 2, // Unique for each student
        courseName: "Lu Kang",
        payedAmount: 1300,
        year: 2023
    },
    {
        studentId: 2, // Unique for each student
        courseName: "Lu Kang",
        payedAmount: 1200,
        year: 2023
    }
];

// Calculate the total sum of payment amounts made by each student. We need to return an array that 
// contains a list of information about students, including the total paid amount by the student.
// Հաշվել յուրաքանչյուր ուսանողի կողմից վճարված ամբողջ գումարը։ Անհրաժեշտ է վերադարձնել ուսանողների ցուցակը (array),
//  որը ընդգրկում է ուսանողների տվյալները, նեռարյալ ուսանողի կողմից ամբողջ վճարված գումարը։

function getStudentsAndevaluations(evaluations) {
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
let res = getStudentsAndevaluations(evaluations);
console.log(res);