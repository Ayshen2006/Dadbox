"""
Business Model.
Represents food businesses (restaurants, cafes, bakeries, supermarkets).
"""
from datetime import datetime, timezone
from app.extensions import db


class Business(db.Model):
    __tablename__ = "businesses"

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, index=True)
    name = db.Column(db.String(128), nullable=False)
    category = db.Column(db.String(64), nullable=False)  # 'bakery', 'restaurant', 'cafe', 'grocery'
    description = db.Column(db.Text, nullable=True)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(64), nullable=False)
    phone = db.Column(db.String(32), nullable=True)
    is_active = db.Column(db.Boolean, default=True, nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False
    )

    # Relationship to Surprise Boxes offered
    boxes = db.relationship("Box", backref="business", lazy=True, cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.id,
            "owner_id": self.owner_id,
            "name": self.name,
            "category": self.category,
            "description": self.description,
            "address": self.address,
            "city": self.city,
            "phone": self.phone,
            "is_active": self.is_active,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }
