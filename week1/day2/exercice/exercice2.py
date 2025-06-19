
family = {}
nombre=int(input("enter your nomber of  family member :"))
for i in range (nombre):
    name=input("enter your name :")
    age=int(input("enter your age :"))
    family[name]=age

cost0=0
for name,age in family.items():
    if age <=3:
        cost=0
    elif age >3 and age<=12:
        cost=10
    elif age>=12:
        cost=15
    print(f"name :{name}/ cost is {cost}")
    cost0+=cost
print("total cost is {} $".format(cost0))
