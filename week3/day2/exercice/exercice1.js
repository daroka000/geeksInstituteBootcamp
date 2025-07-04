//1
const people = ["Greg", "Mary", "Devon", "James"];
a=people.splice(0,1)
console.log(people);
//2
const index = people.indexOf("James"); 
if (index !== -1) {
  people.splice(index, 1, "Jason");
}
console.log(people); 
//3
people.push("soso");
console.log(people); 
//4
const indexs = people.indexOf("Mary");
console.log(indexs); 
//5
const peopleCopy = people.slice(1,3);
console.log(peopleCopy); 
//6
const indexFoo = people.indexOf("Foo");
console.log(indexFoo);
//item n exest pas  donc il apprendre le -1
//7
const last = people[people.length - 1];
console.log(last); 
console.log("-------loop-----------")
//part II
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
//q2
console.log("-------loop_devon-----------")
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
      break;  
    }
  }
  