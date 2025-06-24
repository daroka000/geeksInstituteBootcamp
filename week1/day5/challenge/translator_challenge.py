from googletrans import Translator

# Liste de mots en français
french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

# Initialiser le traducteur
translator = Translator()

# Dictionnaire pour stocker les traductions
translations = {}

# Traduire chaque mot et le stocker
for word in french_words:
    translated = translator.translate(word, src='fr', dest='en')
    translations[word] = translated.text

# Afficher le dictionnaire final
print(translations)
