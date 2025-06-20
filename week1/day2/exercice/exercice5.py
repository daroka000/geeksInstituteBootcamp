from random import randint

def numbers(user_number):
  if not (1 <= user_number <= 100):
    print(f"The number {user_number} is not valid. Please enter a number between 1 and 100.")
    return 

  random_number = randint(1, 100)
  if user_number < random_number:
    print(" Success! ")
  else:
     print("Fail! ")

numbers(10)
numbers(510)