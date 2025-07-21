const compareToTen = (num) => {
    return new Promise((resolve, reject) =>{
        if(num <= 10){
            resolve(num, "is  is less than or equal to 10")
            resolve(num)
        }
        else{
            reject(num,"  is greater than 10.")
            reject(num)
        }
    })
  };

  compareToTen(15)
  .then(result => console.log(result,"is less than or equal to 10"))
  .catch(error => console.log(error," is greater than 10."))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result," is less than or equal to 10"))
  .catch(error => console.log(error, "is greater than 10."))
  