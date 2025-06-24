def sort_words():
    input_string = input("enter comma-separated words: ")
    sorted_words = ",".join(sorted([word.strip() for word in input_string.split(",")]))
    print(sorted_words)

sort_words()
