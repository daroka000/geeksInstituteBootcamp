# Initialize an empty list to store the pizza toppings
toppings = []

# Define the base price of the pizza and the cost per topping
BASE_PRICE = 10.00
TOPPING_PRICE = 2.50

print("Welcome to our Pizza Topping Order System!")
print("Enter your desired toppings one by one.")
print("Type 'quit' when you are finished.")

# Start a loop to get toppings from the user
while True:
    topping = input("Enter a topping: ").strip().lower() # .strip() removes whitespace, .lower() makes input case-insensitive

    if topping == 'quit':
        break # Exit the loop if the user types 'quit'
    elif topping: # Ensure the user actually typed something before adding
        toppings.append(topping)
        print(f"Adding {topping.capitalize()} to your pizza.")
    else:
        print("Please enter a topping or type 'quit'.")

# After exiting the loop, calculate the total cost
number_of_toppings = len(toppings)
total_cost = BASE_PRICE + (number_of_toppings * TOPPING_PRICE)

print("\n--- Your Pizza Order Summary ---")

if toppings:
    # Print all the toppings
    print("Your pizza includes the following toppings:")
    for topping_item in toppings:
        print(f"- {topping_item.capitalize()}")
else:
    print("You ordered a plain pizza with no extra toppings.")

# Print the total cost of the pizza using f-string for formatting
print(f"\nBase Price: ${BASE_PRICE:.2f}")
print(f"Number of Toppings: {number_of_toppings}")
print(f"Cost of Toppings: ${number_of_toppings * TOPPING_PRICE:.2f}")
print(f"Total Cost: ${total_cost:.2f}")

print("\nEnjoy your pizza!")