import React from 'react';
import { Card } from '../../components/common/Card';

export function BoxesPage() {
  return (
    <div>
      <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        Surprise Boxes
      </h2>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
        Browse discounted food boxes available for pickup near you.
      </p>

      <Card
        title="Surprise Box Catalog (Architecture Prepared)"
        subtitle="Connected to endpoint: GET /api/boxes"
      >
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The modular frontend structure and API service layer are configured.
          Feature logic and box listings will be loaded from the backend models.
        </p>
      </Card>
    </div>
  );
}
