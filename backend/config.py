import os
from dotenv import load_dotenv

# Load environment variables from .env if present
load_dotenv()

BASE_DIR = os.path.abspath(os.path.dirname(__file__))


class Config:
    """Base configuration with shared defaults."""
    SECRET_KEY = os.getenv("SECRET_KEY", "dev-fallback-secret-key-dadbox")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CORS_ORIGIN = os.getenv("CORS_ORIGIN", "http://localhost:5173")
    PORT = int(os.getenv("PORT", 5000))


class DevelopmentConfig(Config):
    """Development environment configuration."""
    DEBUG = True
    # Default to PostgreSQL DATABASE_URL if configured, or SQLite fallback for local dev
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        f"sqlite:///{os.path.join(BASE_DIR, 'dadbox_dev.db')}"
    )


class TestingConfig(Config):
    """Testing environment configuration."""
    TESTING = True
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///:memory:"


class ProductionConfig(Config):
    """Production environment configuration."""
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")


# Configuration dictionary lookup
config_by_name = {
    "development": DevelopmentConfig,
    "testing": TestingConfig,
    "production": ProductionConfig,
    "default": DevelopmentConfig,
}
