from starlette.middleware.base import BaseHTTPMiddleware
from fastapi import Request
import logging
import json
from fastapi import Request, HTTPException
from starlette.middleware.base import BaseHTTPMiddleware
from .jwt import verify_token

# Set up logging
logger = logging.getLogger("")
logging.basicConfig(level=logging.INFO)

class RequestLoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        # Log request details
        logger.info(f"Request {request.method} {request.url}")
        
        # Log request headers
        logger.info(f"Headers: {request.headers}")

        # Log query parameters (if any)
        if request.query_params:
            logger.info(f"Query Params: {request.query_params}")

        # Log request body (for POST, PUT, PATCH requests)
        if request.method in ["POST", "PUT", "PATCH"]:
            body = await request.body()
            try:
                body_json = json.loads(body)
                logger.info(f"Request Body: {json.dumps(body_json, indent=2)}")
            except json.JSONDecodeError:
                logger.info(f"Request Body: {body.decode()}")

        # Call the next middleware or endpoint handler
        response = await call_next(request)
        return response

class TokenValidationMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, excluded_paths: list = None):
        super().__init__(app)
        self.excluded_paths = excluded_paths or []

    async def dispatch(self, request: Request, call_next):
        # Get the path of the current request
        request_path = request.url.path

        # Check if the path should be excluded from token validation
        if any(request_path.startswith(path) for path in self.excluded_paths):
            # Skip token validation for excluded paths
            return await call_next(request)

        # Get the Authorization header
        authorization: str = request.headers.get("Authorization")

        if authorization is None:
            raise HTTPException(status_code=401, detail="Authorization header missing")
        
        # Extract the token from the Authorization header
        token_type, token = authorization.split(" ", 1) if " " in authorization else (None, None)

        if token_type != "Bearer" or token is None:
            raise HTTPException(status_code=401, detail="Invalid or missing Bearer token")

        # Verify the token using your verify_token function
        payload = verify_token(token)
        if payload is None:
            raise HTTPException(status_code=401, detail="Invalid token or token expired")

        # Add the payload to the request state for access in route handlers (optional)
        request.state.user = payload

        # Proceed with the request
        response = await call_next(request)
        return response