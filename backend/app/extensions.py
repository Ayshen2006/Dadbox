"""
Flask Extensions Initialization Module.

Extensions are instantiated here without an active application instance
to prevent circular imports when using the application factory pattern.
"""
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()
cors = CORS()
