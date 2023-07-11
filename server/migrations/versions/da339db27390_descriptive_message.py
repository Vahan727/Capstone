"""descriptive message

Revision ID: da339db27390
Revises: c5bc24b42360
Create Date: 2023-07-10 09:57:51.364466

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'da339db27390'
down_revision = 'c5bc24b42360'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('password', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('library',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('book_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['book_id'], ['books.id'], name=op.f('fk_library_book_id_books')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_library_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('awards')
    op.drop_table('book_awards')
    with op.batch_alter_table('books', schema=None) as batch_op:
        batch_op.add_column(sa.Column('author_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(batch_op.f('fk_books_author_id_authors'), 'authors', ['author_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('books', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_books_author_id_authors'), type_='foreignkey')
        batch_op.drop_column('author_id')

    op.create_table('book_awards',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('book_id', sa.INTEGER(), nullable=True),
    sa.Column('award_id', sa.INTEGER(), nullable=True),
    sa.ForeignKeyConstraint(['award_id'], ['awards.id'], name='fk_book_awards_award_id_awards'),
    sa.ForeignKeyConstraint(['book_id'], ['books.id'], name='fk_book_awards_book_id_books'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('awards',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('library')
    op.drop_table('users')
    # ### end Alembic commands ###
