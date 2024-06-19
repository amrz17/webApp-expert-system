from flask import Flask
import mysql.connector
from mysql.connector import Error
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins="*")

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


from app import routes
