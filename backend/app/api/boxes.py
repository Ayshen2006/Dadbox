"""
Surprise Boxes API Endpoints (Architecture Placeholder).
Ready for box creation, searching, and reservation flows.
"""
from flask import Blueprint
from app.utils.helpers import api_response

boxes_bp = Blueprint("boxes", __name__)


@boxes_bp.route("/", methods=["GET"])
def list_boxes():
    """Surprise boxes listing placeholder."""
    return api_response(
        data={"boxes": []},
        message="Surprise boxes endpoint ready."
    )
