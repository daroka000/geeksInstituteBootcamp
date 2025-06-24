import random


class Game():
    def get_user_item(self):
        user=input("(chose : rock or paper or scissors)").lower()
        list=["rock","paper","scissors"]
        if user in list:
            return user 
        else:
            return (" Invalid choice. Please type 'rock', 'paper', or 'scissors !!!!")

    def get_computer_item(self):
        computer_choice = random.choice(["rock", "paper", "scissors"])
        return computer_choice
        

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (
            (user_item == "rock" and computer_item == "scissors") or
            (user_item == "paper" and computer_item == "rock") or
            (user_item == "scissors" and computer_item == "paper")
        ):
            return "win"
        else:
            return "loss"
    def play(self):
            user_item = self.get_user_item()
            computer_item = self.get_computer_item()
            result = self.get_game_result(user_item, computer_item)
            print(f"You selected {user_item}. The computer selected {computer_item}. You {result}! ")
        
            return result

