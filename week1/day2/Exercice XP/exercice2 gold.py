# 1. Create a dictionary called 'birthdays'
    # The key is the person's name (string) and the value is their birthday (string "YYYY/MM/DD")
    # Updated with the new names and birthdays provided by the user, and converted keys to lowercase
def birthdays():
    birthdays = {
        "ali": "1990/05/25",
        "sara": "2000/01/25",
        "soso": "2001/02/28",
        "ahmed": "1999/10/04",
        "karim": "2000/04/17"
    }


    print("Welcome to the Birthday Look-up App!")
    print("\nYou can look up the birthdays of the following people:")
    for name in birthdays.keys():
        print(f"- {name.capitalize()}") 
    print("\n")

    person_name = input("Please enter a person's name to find their birthday: ")

    person_name_normalized = person_name.lower()
    if person_name_normalized in birthdays:
        birthday = birthdays[person_name_normalized]
        print(f"\n{person_name}'s birthday is on: {birthday}")
    else:
        print(f"\nSorry, we don’t have the birthday information for {person_name}.")
birthdays()
