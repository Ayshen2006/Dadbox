"""
DadBox Application Entry Point.
Starts the Flask development server.
"""
import os
from app import create_app

app = create_app(os.getenv("FLASK_ENV", "development"))

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    debug = app.config.get("DEBUG", True)
    app.run(host="0.0.0.0", port=port, debug=debug)
