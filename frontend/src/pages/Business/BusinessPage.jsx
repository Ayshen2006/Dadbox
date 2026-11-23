import React from 'react';
import { Card } from '../../components/common/Card';

export function BusinessPage() {
  return (
    <div>
      <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        Partner Food Businesses
      </h2>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
        Bakeries, cafes, and restaurants reducing food waste by selling Surprise Boxes.
      </p>

      <Card
        title="Business Management (Architecture Prepared)"
        subtitle="Connected to endpoint: GET /api/businesses"
      >
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The business entity model and REST blueprint are ready in the Flask backend.
        </p>
      </Card>
    </div>
  );
}
