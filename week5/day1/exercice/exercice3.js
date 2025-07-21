const promise = Promise.resolve(3);

promise.then((value) => {
  console.log(value); 
});

const reject =Promise.reject("Boo");
reject.catch((error) => {
    console.log(error)

});