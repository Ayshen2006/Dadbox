"""
Surprise Box Model.
Represents discounted boxes with surplus edible food offered by businesses.
"""
from datetime import datetime, timezone
from app.extensions import db


class Box(db.Model):
    __tablename__ = "boxes"

    id = db.Column(db.Integer, primary_key=True)
    business_id = db.Column(db.Integer, db.ForeignKey("businesses.id"), nullable=False, index=True)
    title = db.Column(db.String(128), nullable=False)
    description = db.Column(db.Text, nullable=True)
    original_price = db.Column(db.Numeric(10, 2), nullable=False)
    discounted_price = db.Column(db.Numeric(10, 2), nullable=False)
    quantity_available = db.Column(db.Integer, default=1, nullable=False)
    pickup_start = db.Column(db.DateTime, nullable=False)
    pickup_end = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String(20), default="available", nullable=False)  # 'available', 'reserved', 'sold_out'
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False
    )

    def to_dict(self):
        return {
            "id": self.id,
            "business_id": self.business_id,
            "title": self.title,
            "description": self.description,
            "original_price": float(self.original_price) if self.original_price is not None else None,
            "discounted_price": float(self.discounted_price) if self.discounted_price is not None else None,
            "quantity_available": self.quantity_available,
            "pickup_start": self.pickup_start.isoformat() if self.pickup_start else None,
            "pickup_end": self.pickup_end.isoformat() if self.pickup_end else None,
            "status": self.status,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }
