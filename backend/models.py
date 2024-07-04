from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from sqlalchemy.types import JSON

# create the extension
db = SQLAlchemy()


class Users(db.Model):
    __tablename__ = "tbl_m_admin"
    id_tma = db.Column(db.Integer, primary_key=True)
    nik_tma = db.Column(db.Integer, unique=True, nullable=False)
    name_tma = db.Column(db.String(255), nullable=False)
    role_tma = db.Column(db.Enum("admin", "owner"), default="admin", nullable=False)
    username_tma = db.Column(db.String(255), nullable=False)
    password_tma = db.Column(db.Text, nullable=False)
    picture_user_tma = db.Column(db.String(255), nullable=True)
    status_deactive_tma = db.Column(db.Integer, default=0, nullable=False)
    status_deleted_tma = db.Column(db.Integer, default=0, nullable=False)
    created_by_tma = db.Column(db.Integer, default=0, nullable=False)
    created_at = db.Column(db.DateTime, nullable=True, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=True, default=datetime.utcnow)


class Category(db.Model):
    __tablename__ = "tbl_m_category"
    id_tmc = db.Column(db.Integer, primary_key=True)
    category_name_tmc = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)


class Questions(db.Model):
    __tablename__ = "tbl_m_question"
    id_tmq = db.Column(db.Integer, primary_key=True)
    id_tmc = db.Column(db.Integer, nullable=False)
    question_tmq = db.Column(db.Text, nullable=False)
    status_deactive_tmq = db.Column(db.Integer, nullable=False, default=0)
    updated_by_tmq = db.Column(db.Integer, nullable=True)
    created_at = db.Column(db.DateTime, nullable=True, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=True, default=datetime.utcnow)


class UserAnswer(db.Model):
    __tablename__ = "tbl_m_user_answer"
    id_tmua = db.Column(db.Integer, primary_key=True)
    user_answer_tmua = db.Column(db.JSON, nullable=False)
    created_at = db.Column(db.DateTime, nullable=True, default=datetime.utcnow)


class UserResult(db.Model):
    __tablename__ = "tbl_m_user_result"
    id_tmur = db.Column(db.Integer, primary_key=True)
    id_tmua = db.Column(db.Integer, nullable=False)
    score_tmur = db.Column(db.JSON, nullable=False)
    result_tmur = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=True, default=datetime.utcnow)
