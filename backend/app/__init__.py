"""
Application Factory for DadBox Backend.
Creates and configures the Flask application.
"""
import os
from flask import Flask
from config import config_by_name
from app.extensions import db, migrate, cors


def create_app(config_name=None):
    """
    Application factory pattern.
    Configures extensions, registers blueprints, and returns the app instance.
    """
    if config_name is None:
        config_name = os.getenv("FLASK_ENV", "development")

    app = Flask(__name__)
    config_class = config_by_name.get(config_name, config_by_name["default"])
    app.config.from_object(config_class)

    # Initialize Flask extensions
    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app, resources={r"/api/*": {"origins": app.config.get("CORS_ORIGIN", "*")}})

    # Register API blueprints
    from app.api import api_bp
    app.register_blueprint(api_bp)

    return app
