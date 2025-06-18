basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("kiwi")
basket.append("Apples")
print(basket)
count=0
Appless="Apples"
for i in basket:
    if i==Appless:
        count+=1
    else:
        continue
print(f"le mots Apples repeter  {count} fois :")

