number1=int(input("enter a number :"))
number2=int(input("enter another  number :"))
list=[]
for i in range(1,number2+1) :
    s=number1*i
    list.append(s)
    
print(list)
