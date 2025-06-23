class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        print("Les animaux vont se promener :")
        for animal in self.animals:
            print(animal.walk())

class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f"{self.name} est en train de se promener."


# Sous-classes de chats


class Bengal(Cat):
    def sing(self, sound):
        return f"{self.name} chante : {sound}"

class Chartreux(Cat):
    def sing(self, sound):
        return f"{self.name} chante : {sound}"

class Siamese(Cat):
    def __init__(self, name, age, fur_color):
        super().__init__(name, age)
        self.fur_color = fur_color  

    def sing(self, sound):
        return f"{self.name} chante (avec une voix douce de Siamese) : {sound}"


# Création des objets (Étape 2)


bengal_cat = Bengal("loli", 2)
chartreux_cat = Chartreux("tom", 4)
siamese_cat = Siamese("lisa", 3, "white and black")

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# Instancier la classe Pets (Étape 3)


sara_pets = Pets(all_cats)

sara_pets.walk()


for cat in all_cats:
    print(cat.sing("Miaouuu"))
