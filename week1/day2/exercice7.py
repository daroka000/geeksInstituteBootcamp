import random

# Step 1 & 4 & 5: Create the get_random_temp() Function
# Modified to return floating-point temperatures specific to each season.
def get_random_temp(season):
  """
  Generates and returns a random floating-point temperature specific to the given season.

  Args:
    season (str): The name of the season ("Winter", "Spring", "Summer", "Autumn").

  Returns:
    float: A random temperature in degrees Celsius for the specified season.
  """
  if season == "Winter":
    # Typical winter range for a moderate climate
    return random.uniform(5.0, 15.0)
  elif season == "Spring":
    # Typical spring range
    return random.uniform(12.0, 25.0)
  elif season == "Summer":
    # Typical summer range, considering warmer climates
    return random.uniform(25.0, 40.0)
  elif season == "Autumn":
    # Typical autumn range
    return random.uniform(15.0, 28.0)
  else:
    # Fallback for unexpected season input, though error handling should prevent this
    print("Warning: Unknown season detected. Returning a general random temperature.")
    return random.uniform(-5.0, 35.0) # General range if season is somehow invalid


# Step 2: Create the main() Function
# Step 3: Provide Temperature-Based Advice
# Step 5: Month-Based Seasons (integrated)
def main():
  """
  Asks the user for a month, determines the season, gets a random seasonal
  floating-point temperature, prints it, and provides advice based on the temperature.
  """
  # Ask the user for a month (1-12) and validate input
  while True:
    try:
      month_input = int(input("Please enter the current month as a number (1 for Jan, 12 for Dec): "))
      if 1 <= month_input <= 12:
        break # Valid input, exit the loop
      else:
        print("Invalid month number. Please enter a number between 1 and 12.")
    except ValueError:
      print("Invalid input. Please enter a whole number.")

  # Determine the season based on the month (Northern Hemisphere seasons)
  season = ""
  if month_input in [12, 1, 2]: # December, January, February
    season = "Winter"
  elif month_input in [3, 4, 5]: # March, April, May
    season = "Spring"
  elif month_input in [6, 7, 8]: # June, July, August
    season = "Summer"
  elif month_input in [9, 10, 11]: # September, October, November
    season = "Autumn"

  print(f"\nBased on month {month_input}, the current season is {season}.")

  # Call get_random_temp() to get a random temperature for the determined season.
  current_temp = get_random_temp(season)

  # Store the temperature and print a friendly message (formatted to 2 decimal places)
  print(f"The temperature right now is {current_temp:.2f} degrees Celsius.")

  # Provide advice based on the temperature using conditionals.
  if current_temp < 0:
    print("Brrr, that’s freezing! Wear some extra layers today.")
  elif 0 <= current_temp <= 16:
    print("Quite chilly! Don’t forget your coat.")
  elif 16 < current_temp <= 23: # Use strict inequality for the lower bound to avoid overlap
    print("Nice weather.")
  elif 23 < current_temp <= 32:
    print("A bit warm, stay hydrated.")
  else: # current_temp > 32 (up to 40 from random.uniform)
    print("It’s really hot! Stay cool and seek shade.")

# This ensures main() is called only when the script is executed directly
if __name__ == "__main__":
  main()
  print("\n--- Running again for another scenario ---")
  main()
  print("\n--- One more time for testing different months ---")
  main()