# Step 1: Use a base image (official Python image)
FROM python:3.9-slim

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the requirements file into the container
COPY requirements.txt /app/

# Step 4: Install dependencies inside the container
RUN pip install --no-cache-dir -r requirements.txt

# Step 5: Copy the rest of the application code into the container
COPY . /app/

# Step 6: Expose the port the app will run on (FastAPI defaults to 8000)
EXPOSE 8000

# Step 7: Define the command to run the app (using Uvicorn as the ASGI server)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
