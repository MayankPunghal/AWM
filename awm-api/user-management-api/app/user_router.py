from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List
from .util.crypt import hash_password, verify_password  
from .util.jwt import create_access_token
from . import crud, schemas, database, models 
from datetime import timedelta
from typing import Optional

user_router = APIRouter()

# Route to create a user
@user_router.post("/users/", response_model=schemas.UserOut)
def create_user(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    db_user = crud.create_user(db, user)
    return db_user

# Route to list all users
# @user_router.get("/users/", response_model=List[schemas.UserOut])
# def list_users(db: Session = Depends(database.get_db)):
#     return crud.get_users(db)

#Pagianted list of users
@user_router.get("/users", response_model=models.PaginatedResponse)
def list_users(
    page: int = Query(1, ge=1),  # Ensure page is >= 1
    size: int = Query(10, ge=1, le=100),  # Ensure size is between 1 and 100
    db: Session = Depends(database.get_db),
):
    # Fetch users and total count from database
    users, total = crud.get_users(db, page, size)
    
    return {
        "data": users,
        "total": total,
        "page": page,
        "size": size,
        "total_pages": (total + size - 1) // size  # Calculate total pages
    }

# Route to get a specific user by ID
@user_router.get("/users/{user_id}", response_model=schemas.UserOut)
def get_user(user_id: str, db: Session = Depends(database.get_db)):
    user = crud.get_user_by_id(db, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# Route to update a user by ID
@user_router.put("/users/{user_id}", response_model=schemas.UserOut)
def update_user(user_id: str, user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    db_user = crud.update_user(db, user_id, user)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

# Route to delete a user by ID
@user_router.delete("/users/{user_id}", response_model=schemas.UserOut)
def remove_user(user_id: str, db: Session = Depends(database.get_db)):
    db_user = crud.delete_user(db, user_id)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user
# Route to login a user and return a JWT token
@user_router.post("/login/", response_model=schemas.Token)
def login_for_access_token(form_data: schemas.Login, db: Session = Depends(database.get_db)):
    # Check if the user exists
    user = crud.get_user_by_username(db, username=form_data.username)
    if not user or not verify_password(form_data.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    # Generate access token
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=timedelta(minutes=30)
    )
    return {"access_token": access_token, "token_type": "bearer"}