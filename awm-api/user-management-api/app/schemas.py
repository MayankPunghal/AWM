from pydantic import BaseModel
from uuid import UUID
from typing import Optional
from datetime import datetime

class Token(BaseModel):
    access_token: str
    token_type: str

class Login(BaseModel):
    username: str
    password: str
    
class UserBase(BaseModel):
    username: str
    email: str
    phone_number: Optional[str] = None
    first_name: str
    last_name : str
    gender : str
    address: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None
    zip_code: Optional[str] = None
    country: Optional[str] = None
    profile_picture: Optional[str] = None
    bio: Optional[str] = None
    website: Optional[str] = None
    twitter_handle: Optional[str] = None
    facebook_profile: Optional[str] = None
    linkedin_profile: Optional[str] = None
    role: Optional[str] = "User"
    subscription_type: Optional[str] = "Free"
    is_verified: Optional[bool] = False
    verification_code: Optional[str] = None
    last_password_change: Optional[datetime] = None
    recovery_email: Optional[str] = None
    preferred_language: Optional[str] = None
    timezone: Optional[str] = None
    newsletter_subscription: Optional[bool] = True
    mobile_verified: Optional[bool] = False
    email_verified: Optional[bool] = False
    age: Optional[int] = None
    favorite_color: Optional[str] = None
    preferred_payment_method: Optional[str] = None
    is_admin: Optional[bool] = False
    is_banned: Optional[bool] = False
    bio_updated: Optional[datetime] = None
    country_code: Optional[str] = None
    street_address: Optional[str] = None
    emergency_contact_name: Optional[str] = None
    emergency_contact_phone: Optional[str] = None
    emergency_contact_relation: Optional[str] = None
    last_activity: Optional[datetime] = None
    status_message: Optional[str] = None
    social_media_links: Optional[str] = None
    login_attempts: Optional[int] = 0
    last_failed_login: Optional[datetime] = None
    is_deleted: Optional[bool] = False
    preferred_contact_method: Optional[str] = None
    education_level: Optional[str] = None
    occupation: Optional[str] = None
    company_name: Optional[str] = None
    marital_status: Optional[str] = None
    children_count: Optional[int] = 0

class UserCreate(UserBase):
    password: str

class UserOut(UserBase):
    id: UUID
    is_active: bool
    created_at: datetime

    class Config:
        orm_mode = True
