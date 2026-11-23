import React from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';

export function HomePage({ apiStatus, onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '3rem 1rem',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            backgroundColor: 'var(--color-primary-light)',
            color: 'var(--color-primary)',
            fontWeight: 700,
            fontSize: '0.875rem',
            marginBottom: '1rem',
          }}
        >
          🌱 Full-Stack University Project
        </div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
          Rescue Delicious Food with DadBox
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--color-text-secondary)',
            maxWidth: '650px',
            margin: '0 auto 2rem',
          }}
        >
          Connecting food lovers with local bakeries, cafes, and restaurants to buy discounted
          Surprise Boxes filled with surplus, high-quality edible food.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button variant="primary" size="lg" onClick={() => onNavigate('boxes')}>
            Browse Surprise Boxes
          </Button>
          <Button variant="outline" size="lg" onClick={() => onNavigate('business')}>
            Partner as a Business
          </Button>
        </div>
      </section>

      {/* Backend & Environment Health Card */}
      <Card
        title="Architecture & Service Status"
        subtitle="Live verification of independent frontend-to-backend communication"
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            marginTop: '0.5rem',
          }}
        >
          <div
            style={{
              padding: '1rem',
              backgroundColor: 'var(--color-background)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>Frontend Client</p>
            <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-primary)' }}>
              React 18 + Vite
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>Running on port 5173</p>
          </div>

          <div
            style={{
              padding: '1rem',
              backgroundColor: 'var(--color-background)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>Backend REST API</p>
            <p
              style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: apiStatus.healthy ? 'var(--color-success)' : 'var(--color-secondary)',
              }}
            >
              Python 3.11 + Flask
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
              {apiStatus.healthy
                ? `Connected (${apiStatus.data?.data?.database_driver || 'Database Ready'})`
                : 'Waiting for Flask server (port 5000)'}
            </p>
          </div>

          <div
            style={{
              padding: '1rem',
              backgroundColor: 'var(--color-background)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>Database Layer</p>
            <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              PostgreSQL
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
              Prepared via Flask-SQLAlchemy & Migrations
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
