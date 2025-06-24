# Affiche le plateau
def display_board(board):
    print("\n")
    print(f"{board[0]} | {board[1]} | {board[2]}")
    print("--+---+--")
    print(f"{board[3]} | {board[4]} | {board[5]}")
    print("--+---+--")
    print(f"{board[6]} | {board[7]} | {board[8]}")
    print("\n")

# Demande au joueur une position
def player_input(player, board):
    while True:
        try:
            pos = int(input(f"Player {player}, enter your position (1-9): ")) - 1
            if pos >= 0 and pos < 9 and board[pos] == " ":
                return pos
            else:
                print("Invalid or occupied position. Try again.")
        except ValueError:
            print("Please enter a number between 1 and 9.")

# Vérifie si le joueur a gagné
def check_win(board, mark):
    win_combinations = [
        (0, 1, 2), (3, 4, 5), (6, 7, 8),  # lignes
        (0, 3, 6), (1, 4, 7), (2, 5, 8),  # colonnes
        (0, 4, 8), (2, 4, 6)              # diagonales
    ]
    return any(board[i] == board[j] == board[k] == mark for i, j, k in win_combinations)

# Fonction principale du jeu
def play():
    board = [" "] * 9  
    current_player = "X"

    for turn in range(9):  
        display_board(board)
        move = player_input(current_player, board)
        board[move] = current_player

        if check_win(board, current_player):
            display_board(board)
            print(f" Player {current_player} wins!")
            return

        current_player = "O" if current_player == "X" else "X"

    display_board(board)
    print(" It's a tie, try again ! ")


play()
