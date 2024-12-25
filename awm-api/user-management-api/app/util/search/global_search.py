from sqlalchemy.orm import Session
from sqlalchemy import or_
from typing import Optional, Type
from sqlalchemy.ext.declarative import as_declarative
from app.models import Base
from .search_config import SEARCHABLE_COLUMNS
from sqlalchemy import Column, String, Boolean, DateTime, Integer, UUID

def get_records_with_search(
    db: Session,
    model: Type[Base],  # Accepts any SQLAlchemy model
    page: int = 1,
    size: int = 10,
    search: Optional[str] = None,
    order_by: Optional[str] = "profileid",
):
    query = db.query(model)
    # Apply search filter if search term exists
    if search:
        search_condition = or_()

        # Get the columns that are searchable for the given model
        searchable_columns = SEARCHABLE_COLUMNS.get(model, [])

        # Dynamically create the search condition for each column
        for column_name in searchable_columns:
            column = getattr(model, column_name, None)
            if column and isinstance(column.type, (String, Integer, UUID, DateTime, Boolean)):
                search_condition = search_condition | column.ilike(f"%{search}%")  # Case-insensitive partial match

        query = query.filter(search_condition)

    # Apply pagination
    offset = (page - 1) * size
    total = query.count()
    records = query.offset(offset).limit(size).all()  # Paginated results

    return records, total
