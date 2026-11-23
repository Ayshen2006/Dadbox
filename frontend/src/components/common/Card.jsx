import React from 'react';

export function Card({ children, className = '', title, subtitle }) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-sm)',
        padding: '1.5rem',
      }}
    >
      {(title || subtitle) && (
        <div style={{ marginBottom: '1rem' }}>
          {title && <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{title}</h3>}
          {subtitle && (
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
