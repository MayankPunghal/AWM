from app.models import User  # Import your models

# Define which columns should be searched in each model/table
SEARCHABLE_COLUMNS = {
    User:[
        "username",  # Searchable by username
    ]
}
