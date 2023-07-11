#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# from models import User, Recipe
from models import Author, Book, User, Library
# Views go here!

class Authors(Resource):
    def get(self):
        authors = [a.to_dict() for a in Author.query.all()]
        return authors, 200
    
    def post(self):
        data = request.get_json()
        try:
            new_author = Author(
                name = data.get("name"),
                date_of_birth = data.get("date_of_birth"),
            )
            db.session.add(new_author)
            db.session.commit()
            return new_author.to_dict(), 201
        except Exception:
            return ({"error": "400: Validation error"}, 400)

class AuthorById(Resource):
    def get(self, id):
        try:
            author = Author.query.filter(Author.id == id).first()
            return author.to_dict(), 200
        except:
            return ({"error": "400: Validation error"}, 400)
    
    def patch(self, id):
        data = request.get_json()
        book = Book.query.filter(Book.id == id).first()
        if not book:
            return ({"error": "404 not found"}, 404)
        for attr in data:
            setattr(book, attr, data.get(attr))
        db.session.add(book)
        db.session.commit()
        return book.to_dict(), 202

class Books(Resource):
    def get(self):
        books = [b.to_dict() for b in Book.query.all()]
        return books, 200
    
    def post(self):
        data = request.get_json()
        try:
            new_book = Book(
                title = data.get("title"),
                length = data.get("length"),
                publication_date = data.get("publication_date"),
                author_id = data.get("author_id"),
            )
            db.session.add(new_book)
            db.session.commit()
            return new_book.to_dict(), 201
        except:
            return ({"error": "400: Validation error"}, 400)
    
class BookById(Resource):
    def get(self, id):
        try:
            book = Book.query.filter(Book.id == id).first()
            return book.to_dict(), 200
        except:
            return ({"error": "400: Validation error"}, 400)
    
    def patch(self, id):
        data = request.get_json()
        book = Book.query.filter(Book.id == id).first()
        if not book:
            return ({"error": "404 not found"}, 404)
        for attr in data:
            setattr(book, attr, data.get(attr))

        db.session.add(book)
        db.session.commit()
        return book.to_dict(), 202
    
    def delete(self, id):
        book = Book.query.filter(Book.id == id).first()
        if not book:
            return ({"error": "404 not found"}, 404)
        db.session.delete(book)
        db.session.commit()
        return ({}, 204)
    

class Users(Resource):
    def get(self):
        users = [u.to_dict() for u in User.query.all()]
        return users, 200
    
    def post(self):
        data = request.get_json()
        try:
            new_user = User(
                username = data.get('username'),
                name = data.get('name'),
                email = data.get('email'),
                password = data.get('password'),
            )
            db.session.add(new_user)
            db.session.commit()
            return new_user.to_dict(), 201
        except:
            return ({"error": "400: Validation error"}, 400)

class UserById(Resource):
    def get(self, id):
        try:
            user = User.query.filter(User.id == id).first()
            return user.to_dict(), 200
        except:
            return ({"error": "400: Validation error"}, 400)
        
    def patch(self, id):
        data = request.get_json()
        user = User.query.filter(User.id == id).first()
        if not user:
            return ({"error": "404 not found"}, 404)
        for attr in data:
            setattr(user, attr, data.get(attr))

        db.session.add(user)
        db.session.commit()
        return user.to_dict(), 202
    
    def delete(self, id):
        user = User.query.filter(User.id == id).first()
        if not user:
            return ({"error": "404 not found"}, 404)
        db.session.delete(user)
        db.session.commit()
        return ({}, 204)


api.add_resource(Authors, "/authors")
api.add_resource(AuthorById, "/authors/<int:id>")
api.add_resource(Books, "/books")
api.add_resource(BookById,"/books/<int:id>")
api.add_resource(Users, "/users")
api.add_resource(UserById, "/users/<int:id>")


if __name__ == '__main__':
    app.run(port=5555, debug=True)
