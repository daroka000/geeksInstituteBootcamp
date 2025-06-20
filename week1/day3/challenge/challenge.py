class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        output = f"{self.name}'s farm\n"
        output += "-" * 20 + "\n"
        for animal, count in self.animals.items():
            output += f"{animal:<10} : {count}\n"
        output += "-" * 20 + "\n"
        output += "E-I-E-I-O!"
        return output
    def get_animal_types(self):
        return sorted(self.animals.keys())

    # Step 7: Résumé court
    def get_short_info(self):
        animal_types = self.get_animal_types()
        plural_names = []

        for animal in animal_types:
            count = self.animals[animal]
            if count > 1:
                plural_names.append(animal + "s")
            else:
                plural_names.append(animal)

        # Construction de la phrase avec virgules et "et" à la fin
        if len(plural_names) == 1:
            animals_str = plural_names[0]
        elif len(plural_names) == 2:
            animals_str = " and ".join(plural_names)
        else:
            animals_str = ", ".join(plural_names[:-1]) + ", and " + plural_names[-1]

        return f"{self.name}'s farm has {animals_str}."


my_farm = Farm("Casa")
my_farm.add_animal("snake", 10)
my_farm.add_animal("cow", 8)

print(my_farm.get_info())
print(my_farm.get_short_info())