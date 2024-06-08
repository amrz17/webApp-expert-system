from flask import Flask, jsonify, render_template, request, redirect, url_for
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

"""Cennection to database MySQL"""


def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host="localhost", user="root", password="", database="sistempakar"
        )
        if connection.is_connected():
            return connection
    except Error as e:
        print("Error while connecting to MySQL", e)
        return None


"""Menampilkan daftar pengguna dari tabel 'users'"""


@app.route("/", methods=["GET"])
def users():
    connection = get_db_connection()
    if connection:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM tbl_m_user")
        users = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify(users)
    else:
        return "Failed to connect to database"


if __name__ == "__main__":
    app.run(debug=True)
