# Nom à deviner
nom_correct = "Sokaina"
nom_utilisateur=input(" enter yr nme  :")
# Boucle jusqu'à ce que l'utilisateur entre le bon nom
 while True:


        # Vérifie si le nom est le même (insensible à la casse)
    if nom_utilisateur.lower() == nom_correct.lower():
        print("Hello")
        break  # Sortir de la boucle si le nom est correct
    else:
        print("Ce n'est pas le bon nom. Essayez encore.")
        break
    