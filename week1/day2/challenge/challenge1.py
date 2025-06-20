def create_letter():
    word = input(" enter a word: ")
    word = word.lower()  

    letter_indexe = {}  
    for index, char in enumerate(word):
        if 'a' <= char <= 'z':
            if char in letter_indexe:
                letter_indexe[char].append(index)
            else:
                letter_indexe[char] = [index]
        else:
            print(f"enter just word without number o other carctere : '{char}' at index {index}")
    print(letter_indexe)
create_letter()