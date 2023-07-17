#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, request, session, make_response
from flask_restful import Resource
from flask_login import LoginManager, UserMixin, login_user, current_user, logout_user, login_required

# Local imports
from config import app, db, api
# from models import User, Recipe
from models import Author, Book, User, Library

# Need to add backend functionality for user's sessions
login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.filter(User.id == user_id).first()

class SignUp(Resource):
    def post(self):
        data = request.get_json()
        new_user = User (
            username = data['username'],
            email = data['email'],
        )
        new_user.password_hash = data['password']
        db.session.add(new_user)
        db.session.commit()
        login_user(new_user, remember=True)
        return new_user.to_dict(), 201

class Login(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        user = User.query.filter(User.username == username).first()
        if user:
            user.authenticate(password)
            login_user(user, remember=True)
            return user.to_dict(), 200
        else:
            return{'Invalid Username/Password'}, 401

class CheckSession(Resource):
    def get(self):
        try:   
            if current_user.is_authenticated:
                user = current_user.to_dict()
                return user, 200
        except:
            return make_response('Not Authorized', 404)

@app.route("/api/signout", methods=["POST"]) 
@login_required 
def logout():
    logout_user() 
    return f'Logout Successful'
# Working
# class SignOut(Resource):
#     @login_required
#     def post(self):
#         session['user_id'] = None
#         return make_response('User signed out successfully', 204)
    

class CurrentUser(Resource):
    def get(self, username):
            user = User.query.filter(User.username == username).first()
            if not user:
                return make_response("User Not Found", 404)
            return make_response(user.to_dict(),200)

    def patch(self, username):
            user = User.query.filter(User.username == username).first()
            data = request.get_json()
            try:
                for attr in data:
                    setattr(user, attr, data.get(attr))
                db.session.add(user)
                db.session.commit()
            except:
                return make_response("Unable to update User", 400)    
            return make_response(user.to_dict(),200)


class OldestBooks(Resource):
    def get(self):
        oldest_books = [o.to_dict() for o in Book.query.order_by(Book.publication_date).limit(3)]
        return oldest_books, 200
    

class ShortestBooks(Resource):
    @login_required
    def get(self):
        shortest_books = [s.to_dict() for s in Book.query.order_by(Book.length).limit(3)]
        return shortest_books, 200

class Authors(Resource):
    @login_required
    def get(self):
        authors = [a.to_dict() for a in Author.query.all()]
        return authors, 200
    
    @login_required
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
    @login_required
    def get(self, id):
        try:
            author = Author.query.filter(Author.id == id).first()
            return author.to_dict(), 200
        except:
            return ({"error": "400: Validation error"}, 400)
    
    @login_required
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
    
    @login_required
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
    @login_required
    def get(self, id):
        try:
            book = Book.query.filter(Book.id == id).first()
            return book.to_dict(), 200
        except:
            return ({"error": "400: Validation error"}, 400)
    
    @login_required
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
    
    @login_required
    def delete(self, id):
        book = Book.query.filter(Book.id == id).first()
        if not book:
            return ({"error": "404 not found"}, 404)
        db.session.delete(book)
        db.session.commit()
        return ({}, 204)
    

class Users(Resource):
    @login_required
    def get(self):
        users = [u.to_dict() for u in User.query.all()]
        return users, 200
    
    @login_required
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
    @login_required
    def get(self, id):
        try:
            user = User.query.filter(User.id == id).first()
            return user.to_dict(), 200
        except:
            return ({"error": "400: Validation error"}, 400)
        
    @login_required
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
    
    @login_required
    def delete(self, id):
        user = User.query.filter(User.id == id).first()
        if not user:
            return ({"error": "404 not found"}, 404)
        db.session.delete(user)
        db.session.commit()
        return ({}, 204)
    
class Libraries(Resource):
    @login_required
    def get(self):
        libraries = [l.to_dict() for l in Library.query.all()]
        return libraries, 200
    
    @login_required
    def post(self):
        data = request.get_json()
        user = current_user
        if user:
            try:
                new_library = Library(
                    user_id=user.id,
                    book_id=data.get["id"],
                )
                db.session.add(new_library)
                db.session.commit()
            except:
                return make_response("Could not add gift", 400)

            return make_response(new_library.to_dict(), 200)    

api.add_resource(CheckSession, "/api/check_session")
api.add_resource(Libraries, "/api/libraries")
api.add_resource(CurrentUser, "/api/current_user")
api.add_resource(OldestBooks, "/api/oldest_books")
api.add_resource(ShortestBooks, "/api/shortest_books")
api.add_resource(Authors, "/api/authors")
api.add_resource(AuthorById, "/api/authors/<int:id>")
api.add_resource(Books, "/api/books")
api.add_resource(BookById,"/api/books/<int:id>")
api.add_resource(Users, "/api/users")
api.add_resource(UserById, "/api/users/<int:id>")
api.add_resource(SignUp, "/api/users/signup")
api.add_resource(Login, "/api/users/login")
# api.add_resource(SignOut, "/api/users/signout")


if __name__ == '__main__':
    app.run(port=5555, debug=True)
