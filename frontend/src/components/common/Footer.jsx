import React from 'react';

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        padding: '2rem 1.5rem',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <p style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>DadBox Platform</p>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
            University Full-Stack Development Project • React + Vite + Flask + PostgreSQL
          </p>
        </div>
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
          © {new Date().getFullYear()} DadBox. Dedicated to food waste reduction.
        </p>
      </div>
    </footer>
  );
}
