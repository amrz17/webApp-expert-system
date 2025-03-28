from flask import Flask, jsonify, request
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from models import db, Users, Category, Questions, UserAnswer, UserResult
from neural_network import forward_propagation
from sqlalchemy import func
import numpy as np

app = Flask(__name__)

# Konfigurasi koneksi database MySQL
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:admin123@localhost/sistem_pakar"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True

CORS(app, supports_credentials=True)

# Inisialisasi database dengan aplikasi Flask
db.init_app(app)

# Membuat semua tabel di database jika belum ada
with app.app_context():
    db.create_all()

# Inisialisasi Marshmallow dengan aplikasi Flask
ma = Marshmallow(app)


# Definisi skema pengguna untuk serialisasi dan deserialisasi dengan Marshmallow
class UserSchema(ma.Schema):
    class Meta:
        fields = (
            "id_tma",
            "nik_tma",
            "name_tma",
            "role_tma",
            "username_tma",
            "password_tma",
            "picture_user_tma",
            "status_deactive_tma",
            "status_deleted_tma",
            "created_by_tma",
            "created_at",
            "updated_at",
        )


# Definisi skema category untuk serialisasi dan deserialisasi dengan Marshmallow
class CategorySchema(ma.Schema):
    class Meta:
        fields = ("id_tmc", "category_name_tmc", "description")


# Definisi skema pengguna untuk serialisasi dan deserialisasi dengan Marshmallow
class QuestionsSchema(ma.Schema):
    class Meta:
        fields = (
            "id_tmq",
            "id_tmc",
            "question_tmq",
            "status_deactive_tmq",
            "updated_by_tmq",
            "created_at",
            "updated_at",
        )


# Definisi skema pengguna untuk serialisasi dan deserialisasi dengan Marshmallow
class UsersAnswerSchema(ma.Schema):
    class Meta:
        fields = (
            "id_tmua",
            "user_answer_tmua",
            "created_at",
        )


# Definisi skema pengguna untuk serialisasi dan deserialisasi dengan flask_marshmallow
class UserResultSchema(ma.Schema):
    class Meta:
        fields = (
            "id_tmur",
            "id_tmua",
            "score_tmur",
            "result_tmur",
            "created_at",
        )


# USER
# Inisialisasi skema pengguna untuk serialisasi banyak pengguna
users_schema = UserSchema(many=True)

user_schema = UserSchema()

# Category
categorys_schema = CategorySchema(many=True)

category_schema = CategorySchema()

# QUESTIONS
questions_schema = QuestionsSchema(many=True)

question_schema = QuestionsSchema()

# USER ANSWER
answers_schema = UsersAnswerSchema(many=True)

answer_schema = UsersAnswerSchema()

# USER RESULT
user_results_schema = UserResultSchema(many=True)

user_result_schema = UserResultSchema()


@app.route("/")
def hello():
    return "Hello, World!"


# Route untuk mendapatkan daftar semua pengguna dalam format JSON
@app.route("/users", methods=["GET"])
def listusers():
    all_users = Users.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result)


# Route untuk mendapatkan detail pengguna berdasarkan ID
@app.route("/userdetails/<id>", methods=["GET"])
def userdetails(id):
    user = Users.query.get(id)
    return user_schema.jsonify(user)


# Route untuk memperbarui detail pengguna berdasarkan ID
@app.route("/userupdate/<id>", methods=["PUT"])
def userupdate(id):
    user = Users.query.get(id)

    # Mengambil data dari permintaan JSON
    nik = request.json["nik_tma"]
    name = request.json["name_tma"]
    role = request.json["role_tma"]
    email = request.json["username_tma"]
    password = request.json["password_tma"]
    picture = request.json["picture_user_tma"]

    # Memperbarui detail pengguna
    user.nik_tma = nik
    user.name_tma = name
    user.role_tma = role
    user.username_tma = email
    user.password_tma = password
    user.picture_user_tma = picture

    # Menyimpan perubahan ke database
    db.session.commit()
    return user_schema.jsonify(user)


# Route untuk menambahkan pengguna baru ke database
@app.route("/adduser", methods=["POST"])
def newuser():
    # Mengambil data dari permintaan JSON
    nik = request.json["nik_tma"]
    name = request.json["name_tma"]
    role = request.json["role_tma"]
    email = request.json["username_tma"]
    password = request.json["password_tma"]
    picture = request.json["picture_user_tma"]

    # Membuat instansi pengguna baru
    users = Users(
        nik_tma=nik,
        name_tma=name,
        role_tma=role,
        username_tma=email,
        password_tma=password,
        picture_user_tma=picture,
    )

    # Menambahkan pengguna baru ke database
    db.session.add(users)
    db.session.commit()
    return user_schema.jsonify(users)


# Route untuk menghapus pengguna berdasarkan ID
@app.route("/userdelete/<id>", methods=["DELETE"])
def userdelete(id):
    user = Users.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)


# Route untuk mendapatkan daftar semua category dalam format JSON
@app.route("/category", methods=["GET"])
def listcategory():
    all_questions = Category.query.all()
    result = categorys_schema.dump(all_questions)
    return jsonify(result)


# QUESTIONS


# Route untuk mendapatkan daftar semua pertanyaan dalam format JSON
@app.route("/questions", methods=["GET"])
def listquestions():
    all_questions = Questions.query.all()
    result = questions_schema.dump(all_questions)
    return jsonify(result)


# Route untuk mendapatkan detail questions berdasarkan ID
@app.route("/questiondetails/<id>", methods=["GET"])
def questiondetails(id):
    question = Questions.query.get(id)
    return question_schema.jsonify(question)


# Route untuk memperbarui detail question berdasarkan ID
@app.route("/questionupdate/<id>", methods=["PUT"])
def questionupdate(id):
    question = Questions.query.get(id)

    # Mengambil data dari permintaan JSON
    question_id = request.json["question_tmq"]

    # Memperbarui detail question
    question.question_tmq = question_id

    # Menyimpan perubahan ke database
    db.session.commit()
    return question_schema.jsonify(question)


# Route untuk menambahkan question baru ke database
@app.route("/addquestion", methods=["POST"])
def newquestion():
    # Mengambil data dari permintaan JSON
    id_tmc = request.json["id_tmc"]
    question_id = request.json["question_tmq"]

    # Membuat instansi question baru
    question = Questions(id_tmc=id_tmc, question_tmq=question_id)

    # Menambahkan question baru ke database
    db.session.add(question)
    db.session.commit()
    return question_schema.jsonify(question)


# Route untuk menghapus question berdasarkan ID
@app.route("/questiondelete/<id>", methods=["DELETE"])
def questiondelete(id):
    question = Questions.query.get(id)
    db.session.delete(question)
    db.session.commit()
    return question_schema.jsonify(question)


# USER ANSWER


# Route untuk mendapatkan daftar semua user answer dalam format JSON
@app.route("/useranswer", methods=["GET"])
def listuseranswer():
    all_useranswer = UserAnswer.query.all()
    result = answers_schema.dump(all_useranswer)
    return jsonify(result)


# Route untuk mendapatkan user answer berdasarkan ID
@app.route("/answerdetails/<id>", methods=["GET"])
def answerdetails(id):
    answer = UserAnswer.query.get(id)
    return answer_schema.jsonify(answer)


# Route untuk menambahkan user answer baru ke database
@app.route("/adduseranswer", methods=["POST"])
def newuseranswer():
    data = request.json
    # Mengambil data dari permintaan JSON
    print("Request JSON:", data)  # Debugging log
    user_answer = request.json["user_answer_tmua"]
    print("Request JSON:", user_answer  )  # Debugging log

    # Membuat instansi question baru
    answer = UserAnswer(user_answer_tmua=user_answer)

    # Menambahkan question baru ke database
    db.session.add(answer)
    db.session.commit()
    return answer_schema.jsonify(answer)


# USER RESULT


# Route untuk mendapatkan daftar semua user result dalam format JSON
@app.route("/userresult", methods=["GET"])
def listuserresult():
    all_userresult = UserResult.query.all()
    result = user_results_schema.dump(all_userresult)
    return jsonify(result)


# Route untuk mendapatkan user result berdasarkan ID
@app.route("/resultdetails/<id>", methods=["GET"])
def resultdetails(id):
    result = UserResult.query.get(id)
    return user_result_schema.jsonify(result)


@app.route("/result", methods=["POST"])
def submit_answer():
    # id_tmur = UserAnswer.query.order_by(UserAnswer.id_tmur.desc()).first()
    last_answer = UserAnswer.query.order_by(UserAnswer.id_tmua.desc()).first()

    # Hanya mengambil kolom user_answer_tmua
    id_tmua = last_answer.id_tmua
    user_answer_tmua = last_answer.user_answer_tmua

    # Olah data dengan neural network
    user_answer_np = np.array(user_answer_tmua).reshape(1, -1)
    _, _, _, prediction = forward_propagation(user_answer_np)
    score = prediction.tolist()
    result = int(np.argmax(prediction))

    # Simpan hasil prediksi ke database
    new_user_result = UserResult(id_tmua=id_tmua, score_tmur=score, result_tmur=result)
    db.session.add(new_user_result)
    db.session.commit()
    return user_result_schema.jsonify(new_user_result), 200


# Route untuk mendapatkan user answer ID terakhir
@app.route("/lastanswerdetails", methods=["GET"])
def lastanswerdetails():
    # Query untuk mendapatkan jawaban terakhir berdasarkan timestamp atau ID
    last_answer = UserResult.query.order_by(UserResult.id_tmur.desc()).first()

    # id_tmur = request.args.get("id_tmur")
    # id_tmua = request.args.get("id_tmua")

    id_tmur = last_answer.id_tmur
    id_tmua = last_answer.id_tmua

    if id_tmua != id_tmur:
        return jsonify(
            {"error": "ID tidak cocok, tidak diizinkan untuk melakukan metode GET"}
        ), 403

    if not last_answer:
        return jsonify({"error": "No answer found"}), 404

    return user_result_schema.jsonify(last_answer), 200


if __name__ == "__main__":
    app.run(debug=True)
