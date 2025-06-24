def longest_word(sentence):
    words = sentence.split()  
    longest = ""  

    for i in words:
        if len(i) > len(longest):  
            longest = i

    return longest



print(longest_word("geeks institut."))       
print(longest_word("hello world"))    
print(longest_word("Forgetfulness is by all means powerless!"))  
