#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, request, session
from flask_restful import Resource

# Local imports
from config import app, db, api
# from models import User, Recipe
from models import Author, Book, User, Library

# Need to add backend functionality for user's sessions

class SignUp(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        user = User(username=username, email=email, password=password)
        db.session.add(user)
        db.session.commit()

class SignIn(Resource):
    def post(self):
        data = request.get_json()
        id = data.get('id')
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username, password=password).first()
        if user:
            session['user_id'] = user.id
            return {
                'message': 'User logged in successfully',
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'password': user.password
                }
            }
        else:
            return {'message': 'Invalid username or password'}

# class SignOut(Resource):
#     def delete(self):


class OldestBooks(Resource):
    def get(self):
        oldest_books = [o.to_dict() for o in Book.query.order_by(Book.publication_date).limit(5)]
        return oldest_books, 200

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

api.add_resource(OldestBooks, "/api/oldest_books")
api.add_resource(Authors, "/api/authors")
api.add_resource(AuthorById, "/api/authors/<int:id>")
api.add_resource(Books, "/api/books")
api.add_resource(BookById,"/api/books/<int:id>")
api.add_resource(Users, "/api/users")
api.add_resource(UserById, "/api/users/<int:id>")
api.add_resource(SignUp, "/api/users/signup")
api.add_resource(SignIn, "/api/users/signin")


if __name__ == '__main__':
    app.run(port=5555, debug=True)
