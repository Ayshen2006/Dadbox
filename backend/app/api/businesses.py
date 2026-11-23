"""
Businesses API Endpoints (Architecture Placeholder).
Ready for restaurant/cafe/bakery registration and discovery.
"""
from flask import Blueprint
from app.utils.helpers import api_response

businesses_bp = Blueprint("businesses", __name__)


@businesses_bp.route("/", methods=["GET"])
def list_businesses():
    """Businesses listing placeholder."""
    return api_response(
        data={"businesses": []},
        message="Businesses endpoint ready."
    )
