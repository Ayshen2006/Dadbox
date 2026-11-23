"""
Base & Health Check API Endpoints.
"""
from flask import Blueprint, current_app
from app.utils.helpers import api_response

base_bp = Blueprint("base", __name__)


@base_bp.route("/health", methods=["GET"])
def health_check():
    """
    Health check endpoint to verify backend service status and database readiness.
    """
    db_uri = current_app.config.get("SQLALCHEMY_DATABASE_URI", "")
    db_type = "postgresql" if "postgresql" in db_uri else "sqlite/other"

    return api_response(
        data={
            "service": "DadBox API",
            "status": "healthy",
            "version": "1.0.0",
            "environment": current_app.config.get("ENV", "development"),
            "database_driver": db_type,
        },
        message="DadBox Backend API is running successfully."
    )


@base_bp.route("/", methods=["GET"])
def api_index():
    """
    Root API info endpoint.
    """
    return api_response(
        data={
            "name": "DadBox REST API",
            "description": "Food waste reduction platform connecting businesses with customers.",
            "documentation": "/api/health",
            "endpoints": [
                "/api/health",
                "/api/auth",
                "/api/businesses",
                "/api/boxes"
            ]
        },
        message="Welcome to the DadBox REST API."
    )
