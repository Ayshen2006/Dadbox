"""
REST API Package Initialization.
Registers API blueprints under the /api namespace.
"""
from flask import Blueprint
from app.api.routes import base_bp
from app.api.auth import auth_bp
from app.api.businesses import businesses_bp
from app.api.boxes import boxes_bp

api_bp = Blueprint("api", __name__, url_prefix="/api")

# Register modular route blueprints
api_bp.register_blueprint(base_bp)
api_bp.register_blueprint(auth_bp, url_prefix="/auth")
api_bp.register_blueprint(businesses_bp, url_prefix="/businesses")
api_bp.register_blueprint(boxes_bp, url_prefix="/boxes")

__all__ = ["api_bp"]
