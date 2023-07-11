from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy import MetaData, UniqueConstraint
from sqlalchemy_serializer import SerializerMixin
# from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy
# from sqlalchemy.orm import validates
# from flask_login import UserMixin
from config import db
import datetime


class Book(db.Model, SerializerMixin):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    length = db.Column(db.Integer, nullable=False)
    publication_date = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)

    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    author = db.relationship('Author', back_populates='books_by_author')

    book_libraries = db.relationship("Library", back_populates="books")
    user = association_proxy("book_libraries", "user")

    serialize_only = (
        "id", 
        "title", 
        "author_id",
        "length",
        "publication_date",
        "image",
    )


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String)

    user_library = db.relationship("Library", back_populates="user")
    books = association_proxy("user_library", "books")
    
    serialize_only = (
        "id",
        "username",
        "name",
        "email",
        "password",
    )

class Library(db.Model, SerializerMixin):
    __tablename__ = 'library'

    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'))
    books = db.relationship("Book", back_populates="book_libraries")

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship("User", back_populates="user_library")

    serialize_only = (
        "id",
        "book_id",
        "user_id",
    )


class Author(db.Model, SerializerMixin):
    __tablename__ = 'authors'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    date_of_birth = db.Column(db.String, nullable=False)
    image = db.Column(db.String)

    books_by_author = db.relationship('Book', back_populates="author")

    serialize_only = (
        "id",
        "name",
        "date_of_birth",
        "image",
    )

# class Genre(db.Model, SerializerMixin):
#     __tablename__ = 'genres'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String, nullable=False)

# class Award(db.Model, SerializerMixin):
#     __tablename__ = 'awards'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String, nullable=False)


