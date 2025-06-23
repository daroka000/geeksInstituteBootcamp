"""class Cat ():
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def oldest(self,cat1,cat2,cat3):
        if cat1.age>cat2.age and cat1.age>cat3.age:
            return  cat1
        if cat2.age>cat1.age and cat2.age>cat3.age:
            return cat2
        else:
            return cat3

a1=Cat("loli",1)
a2=Cat("koli",3)
a3=Cat("joli",22)
p=a1.oldest(a1,a2,a3)
print("oldest cat is ",p.name,"and",p.age,"year old")
print(type(p)) """

"""class Dog():
    def __init__(self,name,height):
        self.name=name
        self.height=height
    def bark(self):
        print({self.name},"is wolf")
    def jump(self):
        x=self.height*2
        print(f"{self.name} jumps {x} cm high!")

a=Dog("koki",50)
a.bark()
a.jump()"""


'''class Zoo():
    def __init__(self,zoo_name):
        self.zoo_name=zoo_name
        self.animals=[]
    def add_animals(self,new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            return self.animals
    def get_animals(self):
        return print(" all animals is :",self.animals)
    
    def sell_animal(self,animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        







a=Zoo("casazoo")
n=a.add_animals("cow")
a.add_animals("lion")
a.sell_animal("bee")
a.get_animals() '''

'''class Calculatrice:
    facteur_global = 10  # متغير صنفي (خاص بالكلاس)

    def __init__(self, facteur):
        self.facteur = facteur  # متغير خاص بكل كائن
        print("is si i s",self.facteur)

    # 1. méthode normale (تستخدم self)
    def multiplier(self, valeur):
        return valeur * self.facteur
        # تستخدم self للوصول إلى بيانات الكائن (الانستانس)

    # 2. méthode de classe (تستخدم cls)
    @classmethod
    def multiplier_global(cls, valeur):
        return valeur * cls.facteur_global
        # تستخدم cls للوصول إلى بيانات الكلاس وليس الانستانس

    # 3. méthode statique (لا تستخدم self ولا cls)
    @staticmethod
    def addition(a, b):
        return a + b
        # لا تعتمد على الكلاس ولا على الانستانس، مثل دالة مستقلة داخل الكلاس
a=Calculatrice(10)
print(a.multiplier(20))
print(a.multiplier_global(30))
print(a.addition(3,4)) '''



a={1:10,2:50}
a[5]="ji"

for i , u in a.items():
    print(i,": ",u)


