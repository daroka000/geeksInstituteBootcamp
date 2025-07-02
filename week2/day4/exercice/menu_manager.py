from menu_item import MenuItem, get_connection

class MenuManager:

    @classmethod
    def get_by_name(cls, name):
        try:
            conn = get_connection()
            cursor = conn.cursor()
            query = "SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s"
            cursor.execute(query, (name,))
            result = cursor.fetchone()
            if result:
                return MenuItem(result[0], result[1])
            else:
                return None
        except Exception as e:
            print(" Error fetching item:", e)
            return None
        finally:
            cursor.close()
            conn.close()

    @classmethod
    def all_items(cls):
        try:
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT item_name, item_price FROM Menu_Items")
            results = cursor.fetchall()
            return [MenuItem(name, price) for name, price in results]
        except Exception as e:
            print(" Error fetching all items:", e)
            return []
        finally:
            cursor.close()
            conn.close()
