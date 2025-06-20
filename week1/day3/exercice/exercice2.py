class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self): 
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

    @staticmethod
    def compare(dog1, dog2):
        if dog1.height > dog2.height:
            print(f"{dog1.name} is taller with a height of {dog1.height} cm.")
        elif dog2.height > dog1.height:
            print(f"{dog2.name} is taller with a height of {dog2.height} cm.")
        else:
            print(f"Both dogs are the same height: {dog1.height} cm.")

if __name__ == "__main__":
    
    dog1 = Dog("Lolita", 50)      
    dog2 = Dog("Tubo", 20)        

  
    print("Dog 1 (David's dog):")
    dog1.bark()
    dog1.jump()

 
    print("\nDog 2 (Sarah's dog):")
    dog2.bark()
    dog2.jump()

    print("\nComparing the two dogs:")
    Dog.compare(dog1, dog2)

