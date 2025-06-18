
# 1. Liste initiale des commandes de sandwiches
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# 2. Créer une liste vide pour les sandwiches terminés
finished_sandwiches = []


print(sandwich_orders)

# --- Partie 1 : Gérer la rupture de stock de Pastrami ---


# Définir le type de sandwich à retirer
item_to_remove = "Pastrami sandwich"

# Utiliser une boucle while pour retirer toutes les occurrences de "Pastrami sandwich"
# La boucle continue tant que le sandwich Pastrami est trouvé dans la liste
while item_to_remove in sandwich_orders:
    sandwich_orders.remove(item_to_remove) # Retire la première occurrence trouvée

print("Commandes de sandwiches après avoir retiré le Pastrami :")
print(sandwich_orders)

# --- Partie 2 : Préparer les sandwiches restants ---

print("\n--- Étape 2 : Préparation des sandwiches ---")
# La boucle 'while sandwich_orders:' continue tant que la liste sandwich_orders n'est pas vide.
# Une liste non vide est considérée comme "True" dans un contexte booléen.
while sandwich_orders:
    # .pop(0) retire le premier élément de la liste sandwich_orders
    # et le retourne, le stockant dans current_sandwich.
    current_sandwich = sandwich_orders.pop(0)

    print(f"Préparation de : {current_sandwich}...")

    # Ajoute le sandwich fraîchement préparé à la liste finished_sandwiches
    finished_sandwiches.append(current_sandwich)

print("\n--- Étape 3 : Résumé des commandes terminées ---")
# --- Partie 3 : Afficher les sandwiches préparés ---

# Vérifie si des sandwiches ont été préparés
if finished_sandwiches:
    print("\nVoici la liste des sandwiches qui ont été préparés :")
    # Itère sur la liste des sandwiches finis pour les afficher un par un
    for sandwich in finished_sandwiches:
        print(f"- {sandwich}")
else:
    print("Aucun sandwich n'a été préparé (peut-être tous étaient des Pastrami !).")

print("\n--- Fin du processus de commande ---")
print(f"Commandes restantes (devrait être vide) : {sandwich_orders}")
print(f"Sandwiches terminés : {finished_sandwiches}")
