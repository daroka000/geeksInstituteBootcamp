class MenuManager:
    def __init__(self):
        self.menu = [
            {'name': 'Soup', 'price': 10, 'spice': 'B', 'gluten': False},
            {'name': 'Hamburger', 'price': 15, 'spice': 'A', 'gluten': True},
            {'name': 'Salad', 'price': 18, 'spice': 'A', 'gluten': False},
            {'name': 'French Fries', 'price': 5, 'spice': 'C', 'gluten': False},
            {'name': 'Beef bourguignon', 'price': 25, 'spice': 'B', 'gluten': True},
        ]

    def add_item(self, name, price, spice, gluten):
        if any(dish['name'].lower() == name.lower() for dish in self.menu):
            print(f"{name} is already in the menu.")
            return
        self.menu.append({'name': name, 'price': price, 'spice': spice, 'gluten': gluten})
        print(f"{name} has been added to the menu.")

    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish['name'].lower() == name.lower():
                dish['price'] = price
                dish['spice'] = spice
                dish['gluten'] = gluten
                print(f"{name} has been updated.")
                return
        print(f"Manager, {name} is not in the menu.")

    def remove_item(self, name):
        for i, dish in enumerate(self.menu):
            if dish['name'].lower() == name.lower():
                del self.menu[i]
                print(f"{name} has been removed from the menu.")
                print("Updated menu:", self.menu)
                return
        print(f"Manager, {name} is not in the menu.")


if __name__ == "__main__":
    manager = MenuManager()

    manager.add_item('Pizza', 20, 'A', True)
    manager.update_item('Soup', 12, 'B', False)
    manager.remove_item('Hamburger')
    manager.remove_item('Steak')  
