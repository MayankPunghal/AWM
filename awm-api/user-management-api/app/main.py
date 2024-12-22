from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import crud, models, schemas, database
from .user_router import user_router 
from .util.middleware import RequestLoggingMiddleware, TokenValidationMiddleware

app = FastAPI()

# CORS configuration
origins = [
    "http://localhost:3000",  # Your React app origin
]

app.add_middleware(RequestLoggingMiddleware)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow only this origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Other middlewares should come after CORS middleware
excluded_paths = [
    "/login",
    "/register",
    "/healthcheck",
    "/docs",
    "/openapi.json",
]
# app.add_middleware(TokenValidationMiddleware, excluded_paths=excluded_paths)

# Initialize the database
models.Base.metadata.create_all(bind=database.engine)

# Include routers
app.include_router(user_router)
