def birthday():
    # 1. Create a dictionary called 'birthdays'
    # The key is the person's name (string) and the value is their birthday (string "YYYY/MM/DD")
    birthdays = {
        "ali": "1990/5/25",
        "sara": "2000/1/25",
        "soso": "2001/02/28",
        "ahmed": "1999/10/04",
        "karim": "2000/04/17"
    }

    # 2. Print a welcome message for the user
   
    

    # 3. Tell them: “You can look up the birthdays of the people in the list!”
    print("\nYou can look up the birthdays of the following people:")
    # Optionally, print the list of names available
    for name in birthdays.keys():
        #name.upper()
        print(f"Hello  {name}")
    print("\n")

    # 4. Ask the user to give you a person's name and store the answer in a variable
    person_name = input("Please enter a person's name to find their birthday: ")

    # Normalize the input name (e.g., capitalize first letter) for better matching,
    # assuming names in the dictionary are capitalized.
    # If the dictionary keys are all lowercase, then convert input to lowercase.
    # For simplicity, let's assume exact match for now, or use .title() if appropriate.
    # person_name = person_name.title() # Uncomment if you want to normalize input name

    # 5. Get the birthday of the name provided by the user
    # 6. Print out the birthday with a nicely-formatted message
    if person_name in birthdays:
        birthday = birthdays[person_name]
        print(f"\n{person_name}'s birthday is on: {birthday}")
    else:
        print(f"{person_name}' not find se in my list.")

# Call the function to run the program
if __name__ == "__main__":
    birthday()
