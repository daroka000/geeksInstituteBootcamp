//1.Analyze the options below. Which constructor will successfully extend the Dog class?  
//1  code  is true 
class Dog {
    constructor(name) {
      this.name = name;
    }
  };
    // 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
