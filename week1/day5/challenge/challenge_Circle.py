import math
pi = math.pi
import turtle


class Circle():
    def __init__(self,radius):
        self.radius=radius

    def  surface_circle(self):
        area = pi * self.radius**2
        return f"surface of circle is {area}  "
    
    def get_attribut(self):
        diameter = self.radius * 2
        return  f"Circle with  radius {self.radius} , and diameter is :", diameter 

    def __add__(self,other):
        if isinstance(other, Circle):
            return Circle(self.radius + other.radius)
        raise TypeError("Can only add Circle to Circle")
    
    
        
    def compare_circle(self, other):
        if not isinstance(other, Circle):
            print ( "Comparison only possible between Circle objects")


        if self.radius > other.radius:
            return"c1  is greater than c2"
        elif self.radius < other.radius:
            return "c2  is greater than  c1 "
        else:
            return "Circle 1 equal Circle 2 "
        

    def __lt__(self, other):
        return self.radius < other.radius
        

c1=Circle(2)
c2=Circle(2)
print(c1.surface_circle())

print(c1.get_attribut())
c3=c1+c2
print(f"New circle radius after addition: {c3.radius}")
print(c1.compare_circle(c2))

liste_circle = [c1, c2, c3]

print("Liste triée des cercles par rayon :", [c.radius for c in liste_circle])


#-------------------------------------------------------------------------------------

import turtle
import math

# Classe Circle
class Circle:
    def __init__(self, radius):
        self.radius = radius

    def __lt__(self, other):
        return self.radius < other.radius

# Créer des cercles
c1 = Circle(30)
c2 = Circle(50)
c3 = Circle(40)

# Liste triée
circles = [c1, c2, c3]
circles.sort()

# Configuration de la fenêtre turtle
turtle.speed(1)
turtle.penup()
x_start = -100

# Dessiner les cercles triés
for c in circles:
    turtle.goto(x_start, 0 - c.radius)  # Positionner en bas du cercle
    turtle.pendown()
    turtle.circle(c.radius)
    turtle.penup()
    x_start += c.radius * 2 + 20  # Avancer pour le prochain cercle

turtle.hideturtle()
turtle.done()
