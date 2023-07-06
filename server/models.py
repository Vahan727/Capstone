from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy import MetaData, UniqueConstraint
from sqlalchemy_serializer import SerializerMixin
# from sqlalchemy.ext.hybrid import hybrid_property
# from sqlalchemy.ext.associationproxy import association_proxy
# from sqlalchemy.orm import validates
# from flask_login import UserMixin
from config import db
import datetime


# Models go here!

# class User(db.Model, SerializerMixin):
#     __tablename__ = 'users'

#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String, unique=True, nullable=False)
#     name = db.Column(db.String)
#     email = db.Column(db.String, unique=True, nullable=False)
#     password = db.Column(db.String)


class Author(db.Model, SerializerMixin):
    __tablename__ = 'authors'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)


class Book(db.Model, SerializerMixin):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    length = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    publication_date = db.Column(db.DateTime, nullable=False)

class Award(db.Model, SerializerMixin):
    __tablename__ = 'awards'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

class UserBooks(db.Model, SerializerMixin):
    __tablename__ = 'user_books'

    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'))
    # books = db.relationship
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    # awards = db.relationship



