# __init__.py for the project package

# Import FastAPI app instance if it’s in a separate module
from .main import app

# Import routers or API endpoints directly from the base folder
from .user_router import user_router  # Importing directly from the base folder

# Optionally, import database models or services
from .models import User

# Import configurations or utilities
from .config import settings

# Optional: Any initialization logic, e.g., creating tables, setting up logging, etc.
# app.on_event("startup")(startup_function)
