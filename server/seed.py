from app import app
from models import db, Book, Author, Library, User


if __name__ == '__main__':
    with app.app_context():

        # clear tables of current data
        print("Clearing all tables...")
        # User.query.delete()
        Book.query.delete()
        Author.query.delete()

        # seed books table
        print("Seeding books table...")

        seed_books = [
            Book (
                id = '1',
                title = 'A Farewell To Arms',
                author_id = 1,
                length = 355,
                publication_date = 1929,
                image = "https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png"
            ),
            Book (
                id = '2',
                title = 'Nineteen Eighty-Four',
                author_id = 2,
                length = 328,
                publication_date = 1949,
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/1984first.jpg/440px-1984first.jpg"
            ),
            Book (
                id = '3',
                title = 'A Tale of Two Cities',
                author_id = 3,
                length = 448,
                publication_date = 1859,
                image = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg"
            ),
            Book (
                id = '4',
                title = 'Adventures of Huckleberry Finn',
                author_id = 4,
                length = 362,
                publication_date = 1884,
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Huckleberry_Finn_book.JPG/440px-Huckleberry_Finn_book.JPG"
            ),
            Book (
                id = '5',
                title = "Harry Potter and the Philosopher's Stone",
                author_id = 5,
                length = 223,
                publication_date = 1997,
                image = "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/27/1427451436337/c75efc44-41b0-452a-8858-0811c0fd9978-401x600.jpeg?width=300&quality=45&auto=format&fit=max&dpr=2&s=b37753a8032188c743bab10405ad9508"
            ),
            Book (
                id = '6',
                title = "Lord of the Flies",
                author_id = 6,
                length = 224,
                publication_date = 1954,
                image = "https://upload.wikimedia.org/wikipedia/en/9/9b/LordOfTheFliesBookCover.jpg"
            ),
            Book (
                id = '7',
                title = "The Catcher in the Rye",
                author_id = 7,
                length = 234,
                publication_date = 1951,
                image = "https://www.pluggedin.com/wp-content/uploads/2020/01/catcher-in-the-rye-cover-image-682x1024.jpeg"
            ),
            Book (
                id = '8',
                title = "For Whom the Bell Tolls",
                author_id = 1,
                length = 416,
                publication_date = 1940,
                image = "https://upload.wikimedia.org/wikipedia/en/4/48/ErnestHemmingway_ForWhomTheBellTolls.jpg"
            ),
            Book (
                id = '9',
                title = "Animal Farm",
                author_id = 2,
                length = 140,
                publication_date = 1945,
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Animal_Farm_-_1st_edition.jpg/440px-Animal_Farm_-_1st_edition.jpg"
            ),
            Book (
                id = '10',
                title = "Oliver Twist",
                author_id = 3,
                length = 608,
                publication_date = 1837,
                image = "https://m.media-amazon.com/images/I/91ZLjkG+YNL._AC_UF1000,1000_QL80_.jpg"
            ),
            Book (
                id = '11',
                title = "The Adventures of Tom Sawyer",
                author_id = 4,
                length = 168,
                publication_date = 1876,
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Tom_Sawyer_1876_frontispiece.jpg/440px-Tom_Sawyer_1876_frontispiece.jpg"
            ),
            Book (
                id = '12',
                title = "Harry Potter and the Chamber of Secrets",
                author_id = 5,
                length = 223,
                publication_date = 1997,
                image = "https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg"
            ),
            Book (
                id = '13',
                title = "The Inheritors",
                author_id = 6,
                length = 233,
                publication_date = 1955,
                image = "https://upload.wikimedia.org/wikipedia/en/9/9c/WillianGolding_TheInheritors.jpg"
            ),
            Book (
                id = '14',
                title = "Franny and Zooey",
                author_id = 7,
                length = 201,
                publication_date = 1961,
                image = "https://upload.wikimedia.org/wikipedia/commons/7/72/Frannyzoey.jpg"
            ),
            Book (
                id = '15',
                title = "The Old Man and the Sea",
                author_id = 1,
                length = 127,
                publication_date = 1952,
                image = "https://upload.wikimedia.org/wikipedia/en/7/73/Oldmansea.jpg"
            ),
            Book (
                id = '16',
                title = "Homage to Catalonia",
                author_id = 2,
                length = 368,
                publication_date = 1938,
                image = "https://upload.wikimedia.org/wikipedia/en/b/b6/Homage_to_Catalonia%2C_Cover%2C_1st_Edition.jpg"
            ),
            Book (
                id = '17',
                title = "Great Expectations",
                author_id = 3,
                length = 544,
                publication_date = 1861,
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Greatexpectations_vol1.jpg/400px-Greatexpectations_vol1.jpg"
            ),
            Book (
                id = '18',
                title = "Roughing It",
                author_id = 4,
                length = 608,
                publication_date = 1872,
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Roughing_It%2C_p._001.jpg/440px-Roughing_It%2C_p._001.jpg"
            ),
            Book (
                id = '19',
                title = "Harry Potter and the Prisoner of Azkaban",
                author_id = 5,
                length = 223,
                publication_date = 1997,
                image = "https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg"
            ),
            Book (
                id = '20',
                title = "Rites of Passage",
                author_id = 6,
                length = 288,
                publication_date = 1980,
                image = "https://static.faber.co.uk/wp-content/uploads/2022/09/Rites-of-Passage-1-600x922.jpg"
            )
        ]

        db.session.add_all(seed_books)

        # seed authors table
        print("Seeding authors table...")

        seed_authors = [
            Author (
                id = 1,
                name = 'Ernest Hemingway',
                date_of_birth = '1899-07-21',
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/440px-ErnestHemingway.jpg"
            ),
            Author (
                id = 2,
                name = "George Orwell",
                date_of_birth = '1903-06-25',
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/440px-George_Orwell_press_photo.jpg"
            ),
            Author (
                id = 3,
                name = "Charles Dickens",
                date_of_birth = '1812-02-07',
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/440px-Dickens_Gurney_head.jpg"
            ),
            Author (
                id = 4,
                name = "Mark Twain",
                date_of_birth = '1835-11-20',
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mark_Twain_by_AF_Bradley.jpg/440px-Mark_Twain_by_AF_Bradley.jpg"
            ),
            Author (
                id = 5,
                name = "J.K. Rowling",
                date_of_birth = '1965-07-31',
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/440px-J._K._Rowling_2010.jpg"
            ),
            Author (
                id = 6,
                name = "William Golding",
                date_of_birth = '1911-09-19',
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/William_Golding_1983.jpg/440px-William_Golding_1983.jpg"
            ),
            Author (
                id = 7,
                name = "J.D. Salinger",
                date_of_birth = '1919-01-01',
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/J._D._Salinger_%28Catcher_in_the_Rye_portrait%29.jpg/440px-J._D._Salinger_%28Catcher_in_the_Rye_portrait%29.jpg"
            )
        ]

        db.session.add_all(seed_authors)

        print("Seeding users table...")

        seed_users = [
            User (
                id = 1,
                username = 'Vahan727',
                email = 'vahan@gmail.com',
                password = 'Password1'
            ),
            User (
                id = 2, 
                username = 'User123',
                email = 'fake@gmail.com',
                password = 'Password2'
            ),
            User (
                id = 3, 
                username = 'User456',
                email = 'another@gmail.com',
                password = 'Password3'
            ),
            User (
                id = 4, 
                username = 'User789',
                email = 'definitely@gmail.com',
                password = 'Password4'
            )
        ]

        db.session.add_all(seed_users)

        db.session.commit()

