class BankAccount:
    def __init__(self,username,password,authenticated =False, balance=0):
        self.balance = balance
        self.username=username
        self.password=password

    def deposit(self, amount):
        if amount <= 0:
            raise Exception("Deposit amount must be a positive integer.")
        self.balance += amount
        return f"Balance is: {self.balance}"

    def withdraw(self, amount):
        if amount <= 0:
            raise Exception("Withdrawal amount must be a positive integer.")
        if amount > self.balance:
            raise Exception("Insufficient balance.")
        self.balance -= amount
        return f"Balance after withdrawal is: {self.balance}"
    
    

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            print("Authentication successful.")
        else:
            raise Exception("Invalid username or password.")




    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("Access denied. Please authenticate first.")
        if amount <= 0:
            raise Exception("Deposit amount must be a positive integer.")
        self.balance += amount
        return f"Balance after deposit: {self.balance}"

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Access denied. Please authenticate first.")
        if amount <= 0:
            raise Exception("Withdrawal amount must be a positive integer.")
        if amount > self.balance:
            raise Exception("Insufficient balance.")
        self.balance -= amount
        return f"Balance after withdrawal: {self.balance}"
    



class MinimumBalanceAccount(BankAccount):
    def __init__(self, initial_balance=0, minimum_balance=0):
        super().__init__(initial_balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if amount <= 0:
            raise Exception("Withdrawal amount must be a positive integer.")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Cannot withdraw: balance would go below minimum balance.")
        self.balance -= amount
        return f"Balance after withdrawal is: {self.balance}"


# ---- TEST ----

a = BankAccount("ali","ali@")
print(a.deposit(10))       # Deposit 10
print(a.withdraw(5))       # Withdraw 5

account = MinimumBalanceAccount(200, 50)
amount_to_withdraw = 20
print(f"Amount to withdraw is: {amount_to_withdraw}")
try:
    print(account.withdraw(amount_to_withdraw))
except Exception as e:
    print("Error:", e)

print(account.deposit(100))  # Deposit 100
print("Balance after deposit:", account.balance)
