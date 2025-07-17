//Evaluate these (ie True or False)
//[2]===[2];
//{} === {};
//out put : false /false
//Even if two objects or arrays look identical,
//  they are not equal with === unless they point to the exact same location in memory
let a = [2];
let b = [2];
console.log(a === b); // false
let x = {};
let y = {};
console.log(x === y); // false


const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};
object1.number = 4;
console.log(object2.number) //4
console.log(object3.number)//4
console.log(object4.number)//5

class Animal{
    constructor (name, type, color){
        this.name=name
        this.type=type
        this.color=color
    }
    describe() {
        console.log(`This is a ${this.color} ${this.type} named ${this.name}.`);
      }
    
}
const animal=new Animal("loli","cat","pink")
animal.describe()

class Mammal  extends Animal {
    constructor(name, type,color,sound) {
      super(name,type,color);
      
    }
 
  Sound(sounds) {
    return `This is a ${this.color} ${this.type} named ${this.name}, and it says "${sounds}".`;
  } };
const farmerCow  = new Mammal("Leo", "lion", "golden");
console.log(farmerCow .Sound("Roar"));
  

