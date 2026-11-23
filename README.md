# DadBox 🌱

> **Save Food • Save Money • Save the Planet**  
> A university-level Full-Stack Development project designed to reduce food waste by connecting local businesses with customers through discounted **Surprise Boxes**.

---

## 1. Project Overview

**DadBox** is an environmental and economic sustainability platform inspired by the fight against commercial food waste. Every day, bakeries, cafes, restaurants, and grocery stores produce delicious, fresh food that goes unsold by closing time. DadBox enables these businesses to package their daily surplus into discounted "Surprise Boxes" that customers can discover, reserve, and pick up.

### Core Capabilities (Architectural Foundation)
- **Decoupled Architecture**: Independent frontend and backend services that can be deployed, scaled, and developed separately.
- **RESTful API**: Standardized JSON API endpoints with consistent envelope formatting and health monitoring.
- **Relational Data Modeling**: Structured SQLAlchemy ORM entities prepared for robust PostgreSQL integration.
- **Component-Driven UI**: Fast, responsive React frontend powered by Vite with design tokens and modular page views.

---

## 2. Technology Stack

| Layer | Technology | Version / Specification |
| :--- | :--- | :--- |
| **Frontend** | React, Vite | React 18, Vite 5, JavaScript (ES6+), Modern CSS |
| **Backend** | Python, Flask | Python 3.11+, Flask 3, Flask-CORS, REST API |
| **Database** | PostgreSQL | PostgreSQL 15+, Flask-SQLAlchemy 3, Flask-Migrate |
| **Development** | Git & GitHub | Monorepo structure, feature-branch ready |

---

## 3. Project Architecture & Directory Structure

```text
Dadbox/
├── .env.example                 # Global environment template (backend, database, frontend)
├── .gitignore                   # Git ignore rules for Python, Node, OS, and secrets
├── requirements.txt             # Root Python dependencies manifest
├── README.md                    # Project documentation, setup, and architecture guide
│
├── backend/                     # Python Flask REST API Service
│   ├── .env.example             # Backend-specific environment variables template
│   ├── requirements.txt         # Backend Python packages (Flask, SQLAlchemy, Migrate, etc.)
│   ├── run.py                   # Application entry point (starts server)
│   ├── config.py                # Environment configuration classes (Dev, Test, Prod)
│   ├── dadbox_dev.db            # Local SQLite database (fallback for local development)
│   ├── app/                     # Modular Application Factory Package
│   │   ├── __init__.py          # create_app() factory, extension & blueprint registration
│   │   ├── extensions.py        # Extensions (db, migrate, cors) to prevent circular imports
│   │   ├── api/                 # REST API Blueprints (v1)
│   │   │   ├── __init__.py      # Blueprint aggregation under /api prefix
│   │   │   ├── routes.py        # Health check (/api/health) and API index (/api)
│   │   │   ├── auth.py          # Authentication routes skeleton (/api/auth)
│   │   │   ├── businesses.py    # Business profiles routes skeleton (/api/businesses)
│   │   │   └── boxes.py         # Surprise boxes routes skeleton (/api/boxes)
│   │   ├── models/              # SQLAlchemy Database Models (PostgreSQL Ready)
│   │   │   ├── __init__.py      # Model registry and export
│   │   │   ├── user.py          # User entity (customer, business owner, admin)
│   │   │   ├── business.py      # Business entity (bakery, cafe, restaurant)
│   │   │   └── box.py           # Surprise Box entity (prices, inventory, pickup times)
│   │   ├── services/            # Business logic and domain service layer
│   │   │   └── __init__.py
│   │   └── utils/               # Reusable utility functions
│   │       ├── __init__.py
│   │       └── helpers.py       # Standardized API response envelope generator
│   └── tests/                   # Backend Automated Test Suite
│       ├── __init__.py
│       └── conftest.py          # Pytest fixtures and test database context
│
└── frontend/                    # React + Vite Frontend Client
    ├── .env.example             # Frontend environment variables template
    ├── index.html               # Single Page Application HTML entry point
    ├── package.json             # NPM project manifest (React, Vite, scripts)
    ├── vite.config.js           # Vite configuration with React plugin and /api proxy
    ├── public/                  # Static assets served as-is
    │   └── favicon.svg          # DadBox brand favicon
    └── src/                     # React Application Source Code
        ├── main.jsx             # React DOM root render
        ├── App.jsx              # Main application container and view switcher
        ├── App.css              # Application layout styles
        ├── index.css            # Global CSS variables, design tokens, and resets
        ├── assets/              # Static assets imported into components
        ├── components/          # Reusable UI Components
        │   ├── common/          # Reusable UI primitives (Button, Card, Navbar, Footer)
        │   │   ├── Button.jsx
        │   │   ├── Card.jsx
        │   │   ├── Footer.jsx
        │   │   └── Navbar.jsx
        │   └── layout/          # Page layout structures
        │       └── Layout.jsx
        ├── pages/               # Routed Views / Page Screens
        │   ├── Home/            # Landing page with live API health status check
        │   │   └── HomePage.jsx
        │   ├── Boxes/           # Surprise Box browsing and reservation view
        │   │   └── BoxesPage.jsx
        │   └── Business/        # Partner business management view
        │       └── BusinessPage.jsx
        ├── services/            # Client-side API abstraction layer
        │   └── api.js           # Fetch wrapper with error handling and health checks
        ├── context/             # Global React State Contexts
        │   └── AuthContext.jsx  # Authentication state provider
        ├── hooks/               # Custom React Hooks
        │   └── useFetch.js      # Declarative async data fetching hook
        └── utils/               # Client helper functions and constants
            ├── constants.js     # API endpoints and configuration constants
            └── formatters.js    # Currency and date formatting helpers
```

---

## 4. Purpose of Major Folders

### Backend (`/backend`)
- **`app/`**: Contains the core Flask application utilizing the **Application Factory Pattern** (`create_app`), preventing circular dependencies and allowing isolated testing and multiple configurations.
- **`app/api/`**: Implements modular Flask **Blueprints** separating REST endpoints by domain (`auth`, `businesses`, `boxes`, `routes`).
- **`app/models/`**: Houses declarative **SQLAlchemy ORM models** (`User`, `Business`, `Box`). Pre-configured with relationships, foreign keys, timestamps, and JSON serialization (`to_dict()`) methods.
- **`app/services/`**: Encapsulates **business logic**, decoupling database transactions and algorithmic processing from HTTP request handlers.
- **`app/utils/`**: Shared helper functions, including `api_response()`, guaranteeing a unified JSON envelope across all endpoints:
  ```json
  {
    "success": true,
    "message": "Operation successful",
    "data": { ... },
    "error": null
  }
  ```
- **`tests/`**: Pytest fixtures and automated tests running against an isolated in-memory database.

### Frontend (`/frontend`)
- **`src/components/common/`**: Stateless, reusable UI primitives (`Button`, `Card`, `Navbar`, `Footer`) ensuring UI consistency.
- **`src/components/layout/`**: Structural wrappers providing layout composition across different pages.
- **`src/pages/`**: High-level page components representing screens in the application lifecycle (`Home`, `Boxes`, `Business`).
- **`src/services/`**: Centralized HTTP client managing all backend communications via `fetch`, with automatic base URL handling and error unwrapping.
- **`src/context/`**: React Context providers (such as `AuthContext`) for cross-cutting state without prop drilling.
- **`src/hooks/`**: Custom reusable React hooks (e.g., `useFetch` for declarative data queries).
- **`src/utils/`**: Formatting functions (`formatCurrency`, `formatDate`) and endpoint constant definitions.

---

## 5. Getting Started: Installation & Execution

Frontend and backend run **independently** in separate processes.

### Prerequisites
- **Python**: 3.11 or newer (`python --version`)
- **Node.js**: 18.0 or newer and npm (`node --version`, `npm --version`)
- **Git**: Installed and configured (`git --version`)
- **PostgreSQL**: Optional for local mock development (SQLite fallback enabled); required for production database features.

---

### Step 1: Clone and Configure Environment

```bash
# Clone the repository (if not already cloned)
git clone https://github.com/Ayshen2006/Dadbox.git
cd Dadbox

# Copy root environment variables
cp .env.example .env
```

---

### Step 2: Backend Setup & Execution

Open a terminal in the project root:

```bash
# Navigate to the backend directory
cd backend

# Create a virtual environment
# Windows:
python -m venv venv
# macOS/Linux:
python3 -m venv venv

# Activate the virtual environment
# Windows (PowerShell):
.\venv\Scripts\Activate.ps1
# Windows (CMD):
.\venv\Scripts\activate.bat
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# (Optional) Copy backend-specific environment file
cp .env.example .env

# Run the Flask development server
python run.py
```

The Flask REST API will start on:  
👉 **`http://localhost:5000`**

Verify backend health in your browser or with curl:
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "success": true,
  "message": "DadBox Backend API is running successfully.",
  "data": {
    "service": "DadBox API",
    "status": "healthy",
    "version": "1.0.0",
    "environment": "development",
    "database_driver": "sqlite/other"
  },
  "error": null
}
```

---

### Step 3: Frontend Setup & Execution

Open a **separate terminal** window:

```bash
# Navigate to the frontend directory
cd frontend

# Install Node dependencies
npm install

# Run the Vite development server
npm run dev
```

The React frontend will start on:  
👉 **`http://localhost:5173`**

Open your browser to `http://localhost:5173`.  
The dashboard will display a live status badge verifying connectivity to the Flask API.

---

## 6. PostgreSQL Integration Guide

The project architecture is fully prepared for PostgreSQL using **Flask-SQLAlchemy**, **Flask-Migrate**, and **psycopg2-binary**.

### 1. Create the PostgreSQL Database
Using PostgreSQL CLI (`psql`):

```sql
CREATE DATABASE dadbox_db;
CREATE USER dadbox_user WITH ENCRYPTED PASSWORD 'dadbox_password';
GRANT ALL PRIVILEGES ON DATABASE dadbox_db TO dadbox_user;
```

### 2. Configure the Connection String
Edit your `.env` (or `backend/.env`):

```ini
DATABASE_URL=postgresql://dadbox_user:dadbox_password@localhost:5432/dadbox_db
```

### 3. Initialize and Run Database Migrations
Activate your Python virtual environment inside `/backend`, then execute:

```bash
# 1. Initialize migration repository (first time only)
flask db init

# 2. Generate migration script from existing models (User, Business, Box)
flask db migrate -m "Initial migration: User, Business, Box models"

# 3. Apply migration to the PostgreSQL database
flask db upgrade
```

### 4. Database Schema Overview

```mermaid
erDiagram
    USERS ||--o{ BUSINESSES : "owns"
    BUSINESSES ||--o{ BOXES : "offers"

    USERS {
        int id PK
        string email UK
        string password_hash
        string first_name
        string last_name
        string role "customer | business | admin"
        datetime created_at
        datetime updated_at
    }

    BUSINESSES {
        int id PK
        int owner_id FK
        string name
        string category "bakery | restaurant | cafe | grocery"
        text description
        string address
        string city
        string phone
        boolean is_active
        datetime created_at
        datetime updated_at
    }

    BOXES {
        int id PK
        int business_id FK
        string title
        text description
        numeric original_price
        numeric discounted_price
        int quantity_available
        datetime pickup_start
        datetime pickup_end
        string status "available | reserved | sold_out"
        datetime created_at
        datetime updated_at
    }
```

---

## 7. Available REST API Endpoints

| Method | Endpoint | Description | Status |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/` | Root API descriptor and route index | Ready |
| `GET` | `/api/health` | Health check verifying server and DB status | Ready |
| `GET` | `/api/auth/status` | Authentication module health status | Architecture Ready |
| `GET` | `/api/businesses/` | List partner food businesses | Architecture Ready |
| `GET` | `/api/boxes/` | List active surprise boxes | Architecture Ready |

---

## 8. Development Workflow & Git Guidelines

The repository is organized to support team collaboration across multiple tracks:
- **`main`**: Production-ready branch.
- **`frontend`**: Frontend React + Vite development.
- **`backend`**: Backend Flask API development.
- **`database`**: Database schema, migrations, and PostgreSQL configurations.

When working on a feature:
```bash
git checkout -b feature/box-reservation
# make changes...
git add .
git commit -m "feat: implement surprise box reservation endpoint"
git push origin feature/box-reservation
```
