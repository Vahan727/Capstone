#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# from models import User, Recipe
from models import Author, Book
# Views go here!

class Authors(Resource):
    def get(self):
        authors = Author.query.all()
        return authors

api.add_resource(Authors, "/authors")


if __name__ == '__main__':
    app.run(port=5555, debug=True)
