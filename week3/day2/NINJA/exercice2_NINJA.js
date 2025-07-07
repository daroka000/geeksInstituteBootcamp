function findAvg(gradesList) {
    if (gradesList.length === 0) {
        console.log("list empty !!!");
        return null;
    } 
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    let average = sum / gradesList.length;
    return average;
}


function checkResult(gradesList) {
    let avg = findAvg(gradesList);

    if (avg === null) return;

    console.log("Average grade is:", avg.toFixed(2));

    if (avg >= 65) {
        console.log(" You passed!");
    } else {
        console.log(" You failed and must repeat the course.");
    }
}


let grades1 = [70, 80, 90];
checkResult(grades1); 

