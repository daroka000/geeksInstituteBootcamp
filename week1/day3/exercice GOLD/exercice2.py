import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def get_reversed(self):
        return self.letters[::-1]

    def get_sorted(self):
        return sorted(self.letters)

    def random_list(self):
        return [random.randint(0, 100) for _ in range(len(self.letters))]


my_list = MyList(['d', 'b', 'a', 'c'])

print("Original:", my_list.letters)
print("Reversed:", my_list.get_reversed())
print("Sorted:", my_list.get_sorted())
print("Random numbers:", my_list.random_list())
