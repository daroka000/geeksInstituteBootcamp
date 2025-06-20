class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(f"- {animal}")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        # Trie la liste d'animaux
        sorted_animals = sorted(self.animals)
        grouped_animals = {}

        # Regroupe les animaux par lettre initiale
        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = [animal]
            else:
                grouped_animals[first_letter].append(animal)

        return grouped_animals
    
    def get_groups(self):
        grouped = self.sort_animals()
        print("Grouped animals:")
        for letter, group in grouped.items():
            print(f"{letter}: {group}")


Z = Zoo("Zow")
Z.add_animal("lion")
Z.add_animal("tiger")
Z.add_animal("lion")  
Z.add_animal("tiger")

Z.get_animals()
Z.get_animals()
Z.sort_animals()
Z.get_groups()
isinstance=Zoo("casa zoo")
isinstance.add_animal("Bear")
isinstance.get_animals()
isinstance.sort_animals()