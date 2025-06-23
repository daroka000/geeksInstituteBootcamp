class Person:
    def __init__(self, first_name, age, last_name=""):
        self.first_name = first_name
        self.age = age
        self.last_name = last_name

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        # Crée un nouvel objet Person avec le nom de famille de la famille
        new_member = Person(first_name, age, self.last_name)
        self.members.append(new_member)

    def check_majority(self, first_name):
        # Cherche la personne avec ce prénom
        person = None
        for member in self.members:
            if member.first_name == first_name:
                person = member
                break
        
        if person is None:
            print(f"No family member named {first_name} found.")
            return
        
        if person.is_18():
            print(f"You are over 18, your parents Jane and John accept that you will go out with your friends")
        else:
            print("Sorry, you are not allowed to go out with your friends.")

    def family_presentation(self):
        print(f"Family last name: {self.last_name}")
        for member in self.members:
            print(f"{member.first_name}, Age: {member.age}")


# --------- TEST -----------

# Création d'une famille avec le nom de famille "Smith"
family = Family("Smith")

# Ajout de membres avec born()
family.born("Alice", 20)
family.born("Bob", 16)
family.born("Charlie", 25)

# Vérification majorité
family.check_majority("Alice")    # devrait dire qu'elle peut sortir
family.check_majority("Bob")      # devrait dire qu'il ne peut pas sortir
family.check_majority("Eve")      # personne pas trouvée

# Présentation de la famille
family.family_presentation()
