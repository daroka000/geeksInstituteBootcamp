class Dog:
    def __init__(self, name, age, weight):
        # ... code to initialize attributes ...
        self.name=name
        self.age=age
        self.weight=weight

    def bark(self):
        # ... code to return bark message ...
        return f"{self.name}  is barking "

    def run_speed(self):
        # ... code to return run speed ...
        try:
            return f"{(self.weight / self.age) * 10} kg "
        except:
            return 0

    def fight(self, other_dog):
        # ... code to determine and return winner ...
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} wins the fight against {other_dog.name}!"
        elif my_power < other_power:
            return f"{other_dog.name} wins the fight against {self.name}!"
        else:
            return f"The fight between {self.name} and {other_dog.name} is a tie!"


# Step 2: Create dog instances
#... your code here
dog1=Dog("lisa",4,12)
dog2=Dog("wisa",2,10)
dog3=Dog("bobby",5,22)



# Step 3: Test dog methods
print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog2))

print(dog1.bark())             
print(f"{dog2.name}'s speed: {dog2.run_speed()}")
print(dog1.fight(dog2))        
print(dog3.fight(dog1))        
print(dog2.fight(dog3)) 