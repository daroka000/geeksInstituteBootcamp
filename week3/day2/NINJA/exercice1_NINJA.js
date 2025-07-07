
let person1 = {
    fullName: "Ali ali",
    mass: 66,       
    height: 1.68     
};

let person2 = {
    fullName: "Ahmed ahmed",
    mass: 65,
    height: 1.7
};

function calcbmi(person){
    let bmi=person.mass/(person.height**2)
    return bmi
}
let bmi1 =calcbmi(person1);
let bmi2 =calcbmi(person2);
console.log(bmi1);
console.log(bmi2);

function comparesBMI(){
    if (bmi1 > bmi2) {
        console.log(`${person1.fullName} has a higher BMI (${bmi1.toFixed(2)}) than ${person2.fullName} (${bmi2.toFixed(2)})`);
    } else if (bmi2 > bmi1) {
        console.log(`${person2.fullName} has a higher BMI (${bmi2.toFixed(2)}) than ${person1.fullName} (${bmi1.toFixed(2)})`);
    } else {
        console.log(`Both ${person1.fullName} and ${person2.fullName} have the same BMI (${bmi1.toFixed(2)})`);
    }
}

comparesBMI()

