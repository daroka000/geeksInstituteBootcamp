# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor
import os
from dotenv import load_dotenv



# Load environment variables
load_dotenv()

# Access variables
db_host = os.getenv('DB_HOST')
db_name = os.getenv('DB_NAME')

app = Flask(__name__)
CORS(app)

# Database connection function
def get_db_connection():
    conn = psycopg2.connect(
        host=os.getenv("DB_HOST"),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        port=os.getenv("DB_PORT"),
        cursor_factory=RealDictCursor
    )
    return conn

@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "healthy",
                     "message": "API is running"}), 200

# -------------- USERS ------------------
@app.route("/users", methods=["POST"])
def create_user():
    data = request.get_json()
    if not data or not data.get("username") or not data.get("email"):
        return jsonify({"success": False, "message": "Missing username or email"}), 400

    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute(
            """
            INSERT INTO users (username, email, password)
            VALUES (%s, %s, %s)
            RETURNING id, username, email, created_at
            """,
            (data["username"], data["email"], data.get("password", ""))
        )
        new_user = cur.fetchone()
        conn.commit()
        return jsonify({"success": True, "data": new_user}), 201
    except Exception as e:
        conn.rollback()
        return jsonify({"success": False, "message": str(e)}), 500
    finally:
        cur.close()
        conn.close()

@app.route("/users", methods=["GET"])
def get_users():
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute("SELECT id, username, email, created_at FROM users")
        users = cur.fetchall()
        return jsonify({"success": True, "data": users}), 200
    finally:
        cur.close()
        conn.close()

@app.route("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute("SELECT id, username, email, created_at FROM users WHERE id = %s", (user_id,))
        user = cur.fetchone()
        if not user:
            return jsonify({"success": False, "message": "User not found"}), 404
        return jsonify({"success": True, "data": user}), 200
    finally:
        cur.close()
        conn.close()

@app.route("/users/<int:user_id>", methods=["PUT"])
def update_user(user_id):
    data = request.get_json()
    fields = []
    values = []
    for key in ["username", "email", "password"]:
        if key in data:
            fields.append(f"{key} = %s")
            values.append(data[key])
    if not fields:
        return jsonify({"success": False, "message": "No fields to update"}), 400

    values.append(user_id)
    query = f"UPDATE users SET {', '.join(fields)} WHERE id = %s RETURNING id, username, email, created_at"
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute(query, tuple(values))
        updated_user = cur.fetchone()
        conn.commit()
        if not updated_user:
            return jsonify({"success": False, "message": "User not found"}), 404
        return jsonify({"success": True, "data": updated_user}), 200
    finally:
        cur.close()
        conn.close()

@app.route("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute("DELETE FROM users WHERE id = %s RETURNING id", (user_id,))
        result = cur.fetchone()
        conn.commit()
        if not result:
            return jsonify({"success": False, "message": "User not found"}), 404
        return jsonify({"success": True, "message": "User deleted"}), 200
    finally:
        cur.close()
        conn.close()

# -------------- PROJECTS -----------------
@app.route("/projects", methods=["POST"])
def create_project():
    data = request.get_json()
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute(
            """
            INSERT INTO projects (name, description, user_id, status)
            VALUES (%s, %s, %s, %s)
            RETURNING *
            """,
            (data["name"], data.get("description"), data["user_id"], data.get("status", "active"))
        )
        project = cur.fetchone()
        conn.commit()
        return jsonify({"success": True, "data": project}), 201
    finally:
        cur.close()
        conn.close()

@app.route("/projects", methods=["GET"])
def get_projects():
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute("SELECT * FROM projects")
        return jsonify({"success": True, "data": cur.fetchall()}), 200
    finally:
        cur.close()
        conn.close()

@app.route("/projects/<int:project_id>", methods=["GET"])
def get_project(project_id):
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute("SELECT * FROM projects WHERE id = %s", (project_id,))
        project = cur.fetchone()
        if not project:
            return jsonify({"success": False, "message": "Project not found"}), 404
        return jsonify({"success": True, "data": project}), 200
    finally:
        cur.close()
        conn.close()

@app.route("/projects/<int:project_id>", methods=["PUT"])
def update_project(project_id):
    data = request.get_json()
    fields = []
    values = []
    for key in ["name", "description", "status"]:
        if key in data:
            fields.append(f"{key} = %s")
            values.append(data[key])
    if not fields:
        return jsonify({"success": False, "message": "No fields to update"}), 400
    values.append(project_id)
    query = f"UPDATE projects SET {', '.join(fields)} WHERE id = %s RETURNING *"
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute(query, tuple(values))
        project = cur.fetchone()
        conn.commit()
        return jsonify({"success": True, "data": project}), 200
    finally:
        cur.close()
        conn.close()

@app.route("/projects/<int:project_id>", methods=["DELETE"])
def delete_project(project_id):
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute("DELETE FROM projects WHERE id = %s RETURNING id", (project_id,))
        result = cur.fetchone()
        conn.commit()
        if not result:
            return jsonify({"success": False, "message": "Project not found"}), 404
        return jsonify({"success": True, "message": "Project deleted"}), 200
    finally:
        cur.close()
        conn.close()

# ----------------------------- TASKS -----------------------------
@app.route("/tasks", methods=["POST"])
def create_task():
    data = request.get_json()
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute(
            """
            INSERT INTO tasks (title, description, status, priority, due_date, user_id, project_id)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            RETURNING *
            """,
            (
                data["title"], data.get("description"), data.get("status", "pending"),
                data.get("priority", "medium"), data.get("due_date"),
                data.get("user_id"), data.get("project_id")
            )
        )
        task = cur.fetchone()
        conn.commit()
        return jsonify({"success": True, "data": task}), 201
    finally:
        cur.close()
        conn.close()

@app.route("/tasks", methods=["GET"])
def get_tasks():
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        query = "SELECT * FROM tasks WHERE 1=1"
        filters = []
        values = []
        for field in ["status", "priority", "user_id", "project_id"]:
            value = request.args.get(field)
            if value:
                filters.append(f"{field} = %s")
                values.append(value)
        if filters:
            query += " AND " + " AND ".join(filters)
        query += " ORDER BY created_at DESC"
        cur.execute(query, tuple(values))
        return jsonify({"success": True, "data": cur.fetchall()}), 200
    finally:
        cur.close()
        conn.close()

@app.route("/tasks/<int:task_id>", methods=["GET"])
def get_task(task_id):
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute("SELECT * FROM tasks WHERE id = %s", (task_id,))
        task = cur.fetchone()
        if not task:
            return jsonify({"success": False, "message": "Task not found"}), 404
        return jsonify({"success": True, "data": task}), 200
    finally:
        cur.close()
        conn.close()

@app.route("/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    data = request.get_json()
    fields = []
    values = []
    for key in ["title", "description", "status", "priority", "due_date"]:
        if key in data:
            fields.append(f"{key} = %s")
            values.append(data[key])
    if not fields:
        return jsonify({"success": False, "message": "No fields to update"}), 400
    values.append(task_id)
    query = f"UPDATE tasks SET {', '.join(fields)}, updated_at = CURRENT_TIMESTAMP WHERE id = %s RETURNING *"
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute(query, tuple(values))
        task = cur.fetchone()
        conn.commit()
        return jsonify({"success": True, "data": task}), 200
    finally:
        cur.close()
        conn.close()

@app.route("/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute("DELETE FROM tasks WHERE id = %s RETURNING id", (task_id,))
        task = cur.fetchone()
        conn.commit()
        if not task:
            return jsonify({"success": False, "message": "Task not found"}), 404
        return jsonify({"success": True, "message": "Task deleted"}), 200
    finally:
        cur.close()
        conn.close()

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)