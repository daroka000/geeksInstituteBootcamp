import requests
import psycopg2
from dotenv import load_dotenv
import random
import os
from flask import Flask
from flask import jsonify

load_dotenv()

DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")

app=Flask(__name__)

def insert_random_countries():
    url = "https://restcountries.com/v3.1/all?fields=name,capital"
    response = requests.get(url)

    if response.status_code != 200:
        return " erreur :API", 500

    all_countries = response.json()
    selected = random.sample(all_countries, 10)

    conn = psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
    cursor = conn.cursor()

    for country in selected:
        name = country.get("name", {}).get("common", "N/A")
        capital_list = country.get("capital", [])
        capital = capital_list[0] if capital_list else "N/A"

        flag = country.get("flags", {}).get("png", "N/A")
        subregion = country.get("subregion", "N/A")
        population = country.get("population", 0)

        insert_query = """
        INSERT INTO Countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(insert_query, (name, capital, flag, subregion, population))

    conn.commit()
    cursor.close()
    conn.close()

    return "add with succes", 200


# Route GET pour insérer les pays
@app.route('/insert-countries', methods=['GET'])
def insert_route():
    msg, status = insert_random_countries()
    return jsonify({"message": msg}), status



if __name__ == '__main__':
    app.run(debug=True)