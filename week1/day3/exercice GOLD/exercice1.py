import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def get_perimeter(self):
        return 2 * math.pi * self.radius

    def get_area(self):
        return math.pi * (self.radius ** 2)

    def print_definition(self):
        print("A circle is a two-dimensional shape made up of all the points that are the same distance from a fixed point called the center.")


c = Circle(3)


print(f"Radius: {c.radius}")
print(f"Perimeter: {c.get_perimeter():.2f}")
print(f"Area: {c.get_area():.2f}")
c.print_definition()
