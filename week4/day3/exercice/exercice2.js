function displayStudentInfo(objUser){
    const { first, last } = objUser; 
    console.log(` your full name is ${objUser.first} ${objUser.last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});