#step 1
# In a new file
# import the Dog class
from exercice2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        
        self.trained = False

    def train(self): #<mark> no need to put the details in the function, you are giving the solution</mark>
        print(self.bark())
        self.trained = True

    def play(self, *args):
        # ... code to print play message ...
        all_dogs = [self.name] + [dog.name for dog in args]
        print(f"{', '.join(all_dogs)} all play together!")

    def do_a_trick(self): #<mark> no need to put the details in the function, you are giving the solution</mark>
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f"{self.name} {random.choice(tricks)}")

        else:
            print(f"{self.name} is not trained yet!")

# Test PetDog methods
my_dog = PetDog("Fido", 2, 10)
dog2 = PetDog("Buddy", 3, 12)
dog3 = PetDog("Max", 4, 14) 

my_dog.train()
my_dog.play(dog2, dog3)
my_dog.do_a_trick()