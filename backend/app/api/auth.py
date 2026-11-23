"""
Authentication API Endpoints (Architecture Placeholder).
Ready for user registration, login, and token handling.
"""
from flask import Blueprint
from app.utils.helpers import api_response

auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/status", methods=["GET"])
def auth_status():
    """Auth service status placeholder."""
    return api_response(
        data={"module": "auth", "status": "ready_for_implementation"},
        message="Auth module initialized."
    )
