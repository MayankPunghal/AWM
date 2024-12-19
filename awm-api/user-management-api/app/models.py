from sqlalchemy import Column, String, Boolean, DateTime, Integer
from sqlalchemy.dialects.postgresql import UUID
import uuid
from datetime import datetime
from .database import Base
from pydantic import BaseModel
from typing import List
from .schemas import UserOut

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    profileid = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, unique=True, nullable=False)
    last_name = Column(String, unique=True, nullable=False)
    gender = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    phone_number = Column(String, nullable=True)
    address = Column(String, nullable=True)
    city = Column(String, nullable=True)
    state = Column(String, nullable=True)
    zip_code = Column(String, nullable=True)
    country = Column(String, nullable=True)
    date_of_birth = Column(DateTime, nullable=True)
    last_login = Column(DateTime, nullable=True)
    profile_picture = Column(String, nullable=True)
    bio = Column(String, nullable=True)
    website = Column(String, nullable=True)
    twitter_handle = Column(String, nullable=True)
    facebook_profile = Column(String, nullable=True)
    linkedin_profile = Column(String, nullable=True)
    role = Column(String, default="User")
    subscription_type = Column(String, default="Free")
    is_verified = Column(Boolean, default=False)
    verification_code = Column(String, nullable=True)
    last_password_change = Column(DateTime, nullable=True)
    recovery_email = Column(String, nullable=True)
    preferred_language = Column(String, nullable=True)
    timezone = Column(String, nullable=True)
    newsletter_subscription = Column(Boolean, default=True)
    mobile_verified = Column(Boolean, default=False)
    email_verified = Column(Boolean, default=False)
    age = Column(Integer, nullable=True)
    favorite_color = Column(String, nullable=True)
    preferred_payment_method = Column(String, nullable=True)
    is_admin = Column(Boolean, default=False)
    is_banned = Column(Boolean, default=False)
    bio_updated = Column(DateTime, nullable=True)
    country_code = Column(String, nullable=True)
    street_address = Column(String, nullable=True)
    emergency_contact_name = Column(String, nullable=True)
    emergency_contact_phone = Column(String, nullable=True)
    emergency_contact_relation = Column(String, nullable=True)
    last_activity = Column(DateTime, nullable=True)
    status_message = Column(String, nullable=True)
    social_media_links = Column(String, nullable=True)
    login_attempts = Column(Integer, default=0)
    last_failed_login = Column(DateTime, nullable=True)
    is_active = Column(Boolean, default=True)
    is_deleted = Column(Boolean, default=False)
    preferred_contact_method = Column(String, nullable=True)
    education_level = Column(String, nullable=True)
    occupation = Column(String, nullable=True)
    company_name = Column(String, nullable=True)
    marital_status = Column(String, nullable=True)
    children_count = Column(Integer, default=0)

class PaginatedResponse(BaseModel):
    data: List[UserOut]  # List of users
    total: int  # Total number of users
    page: int  # Current page
    size: int  # Items per page
    total_pages: int  # Total number of pages
