from sqlalchemy.orm import Session
from .models import User
from .schemas import UserCreate
from uuid import UUID
from passlib.context import CryptContext
from typing import Optional

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

def create_user(db: Session, user: UserCreate):
    hashed_password = hash_password(user.password)
    db_user = User(
        username=user.username,
        email=user.email,
        password_hash=hashed_password,
        first_name=user.first_name,  # Added first name
        last_name=user.last_name,    # Added last name
        gender=user.gender           # Added gender
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


# def get_users(db: Session):
#     return db.query(User).all()
def get_users(db: Session, page: int = 1, size: int = 10):
    offset = (page - 1) * size
    total = db.query(User).count()
    users = db.query(User).order_by(User.profileid.asc()).offset(offset).limit(size).all()
    return users, total

def get_user_by_id(db: Session, user_id: UUID):
    return db.query(User).filter(User.id == user_id).first()

def update_user(db: Session, user_id: UUID, user: UserCreate):
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user:
        db_user.username = user.username
        db_user.email = user.email
        db_user.password_hash = user.password  # You should hash it properly
        db.commit()
        db.refresh(db_user)
    return db_user

def delete_user(db: Session, user_id: UUID):
    db_user = get_user_by_id(db, user_id)
    if db_user:
        db.delete(db_user)
        db.commit()
    return db_user
