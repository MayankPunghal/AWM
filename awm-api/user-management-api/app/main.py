from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import crud, models, schemas, database
from uuid import UUID
from fastapi.middleware.cors import CORSMiddleware
from .user_router import user_router 

app = FastAPI()

# Initialize the database
models.Base.metadata.create_all(bind=database.engine)

app.include_router(user_router)
origins = [
    "http://localhost:3000",  # React app running on this URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# @app.post("/users/", response_model=schemas.UserOut)
# def create_user(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
#     db_user = crud.create_user(db, user)
#     return db_user

# @app.get("/users/", response_model=list[schemas.UserOut])
# def list_users(db: Session = Depends(database.get_db)):
#     return crud.get_users(db)

# @app.get("/users/{user_id}", response_model=schemas.UserOut)
# def get_user(user_id: UUID, db: Session = Depends(database.get_db)):
#     user = crud.get_user_by_id(db, user_id)
#     if not user:
#         raise HTTPException(status_code=404, detail="User not found")
#     return user

# @app.put("/users/{user_id}", response_model=schemas.UserOut)
# def update_user(user_id: UUID, user: schemas.UserCreate, db: Session = Depends(database.get_db)):
#     db_user = crud.update_user(db, user_id, user)
#     if not db_user:
#         raise HTTPException(status_code=404, detail="User not found")
#     return db_user

# @app.delete("/users/{user_id}", response_model=schemas.UserOut)
# def remove_user(user_id: UUID, db: Session = Depends(database.get_db)):
#     db_user = crud.delete_user(db, user_id)
#     if not db_user:
#         raise HTTPException(status_code=404, detail="User not found")
#     return db_user
