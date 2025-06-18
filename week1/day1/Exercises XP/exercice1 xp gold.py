mois = int(input("enter number of month (1 -12) : "))
if mois >= 3 and mois <= 5:
    print("its Spring.")
elif mois >= 6 and mois <= 8:
    print("its summer.")
elif mois >= 9 and mois <= 11:
    print("its autumn.")
elif mois == 12 or mois == 1 or mois == 2:
    print("its Winter.")
else:
    print("please enter correct number of month.")