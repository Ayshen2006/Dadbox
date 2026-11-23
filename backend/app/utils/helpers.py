"""
Standardized JSON Response Utilities.
Provides consistent envelope structure across all DadBox REST endpoints.
"""
from flask import jsonify


def api_response(data=None, message="Success", status_code=200, error=None):
    """
    Generate a standardized API response.

    :param data: The payload data (dict or list)
    :param message: Human-readable message
    :param status_code: HTTP response code
    :param error: Error details if applicable
    :return: Flask JSON response tuple
    """
    payload = {
        "success": 200 <= status_code < 300,
        "message": message,
        "data": data,
        "error": error
    }
    return jsonify(payload), status_code
