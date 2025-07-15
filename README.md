## Backend

-   In main path, create and activate a virtual env

    ```bash
    python3 -m venv venv
    source venv/bin/activate   # macOS/Linux
    venv\Scripts\activate      # Windows
    ```

-   Install dependencies

    ```bash
    pip install -r requirements.txt
    ```

-   Go to backend directory, and run server

    ```bash
    cd backend
    python3 manage.py runserver
    ```

-   The backend will be available at: http://localhost:8000

-   Swagger will be available at http://localhost:8000/swagger

## Frontend

-   In frontend directory

    ```bash
    cd frontend
    ```

-   Install dependencies

    ```bash
    npm install
    ```

-   Run service

    ```bash
    npm run dev
    ```

-   The frontend will be available at: http://localhost:5173