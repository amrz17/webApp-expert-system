from flask import request, jsonify
from app import app, get_db_connection
from app.model import forward_propagation
import numpy as np

"""Menampilkan daftar pengguna dari tabel 'tbl_m_admin'"""


@app.route("/api/users", methods=["GET"])
def users():
    connection = get_db_connection()
    if connection:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM tbl_m_admin")
        users = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify(users)
    else:
        return "Failed to connect to database"


"""Menampilkan daftar pertanyaan dari tabel 'tbl_m_question'"""


@app.route("/api/questions", methods=["GET"])
def questions():
    connection = get_db_connection()
    if connection:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM tbl_m_question")
        questions = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify(questions)
    else:
        return "Failed to connect to database"


"""Mengirim daftar jawaban ke tabel 'tbl_m_user_answer'"""


@app.route("/api/answers", methods=["POST"])
def answers():
    data = request.json
    answers = np.array(data["answers"])
    _, _, _, prediction = forward_propagation(answers)
    return jsonify(prediction.tolist())
