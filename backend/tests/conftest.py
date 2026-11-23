"""
Backend Test Configuration and Fixtures.
"""
import pytest
from app import create_app
from app.extensions import db


@pytest.fixture
def app():
    """Create application configured for testing."""
    test_app = create_app("testing")
    with test_app.app_context():
        db.create_all()
        yield test_app
        db.session.remove()
        db.drop_all()


@pytest.fixture
def client(app):
    """A test client for the app."""
    return app.test_client()
