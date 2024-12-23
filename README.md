# AWM

## Project Setup

### Tracking User Stories and Bugs
You can track user stories and bugs using the following link:
[AWM YouTrack](https://awm.youtrack.cloud/projects/0bf521da-8ec3-4e43-80fe-e59746a7a9ea)

### Join the Discord Server
Join our Discord server to collaborate on this project:
[AWM Discord Invite](https://discord.gg/fkngqFQN)

### Database Setup
Execute the scripts to create the schema. You can find the scripts to run in the `Database-PG` directory.

### Python FAST API

1. Update the Postgres connection string in `config.py`:
    ```python
    DATABASE_URL = "postgresql://awmappuser:<Your Password>@localhost/awm"
    ```

2. Navigate to the project directory:
    ```sh
    cd AWM/awm-api/user-management-api
    ```

3. Install the dependencies:
    ```sh
    pip install -r requirements.txt
    ```

4. Run the application:
    ```sh
    uvicorn app.main:app --reload
    ```

### React Front End

1. Navigate to the project directory:
    ```sh
    cd AWM/awm-admin
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Run the application:
    ```sh
    npm start
    ```