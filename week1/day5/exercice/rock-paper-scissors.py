from game import Game 

def get_user_menu_choice():

    choice = input("Menu:\n  (g)Play a new game\n (x)Show scores and quit :")
    return choice


def print_results(results):
    print("\n=== Game Summary ===")
    for keys,values in results.items():
        print(f"you {keys} {values}  times")

    print("thank you for playing !")
def main():
    choice = get_user_menu_choice()

    game_results = {
    "win": 0,
    "loss": 0,
    "draw": 0
     }
    
    
    while choice !="x":
        g1=Game()
        p1=g1.play()
        game_results[p1] +=1

        choice = get_user_menu_choice()

    print_results(game_results)

main()














