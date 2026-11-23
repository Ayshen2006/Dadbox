import React from 'react';

export function Navbar({ currentPage, onNavigate, apiStatus }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'boxes', label: 'Surprise Boxes' },
    { id: 'business', label: 'For Businesses' },
  ];

  return (
    <header
      style={{
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-sm)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0.875rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo / Brand */}
        <div
          onClick={() => onNavigate('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1.25rem',
            }}
          >
            D
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800, lineHeight: 1 }}>DadBox</h1>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Save Surplus Food</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                color:
                  currentPage === item.id
                    ? 'var(--color-primary)'
                    : 'var(--color-text-secondary)',
                backgroundColor:
                  currentPage === item.id ? 'var(--color-primary-light)' : 'transparent',
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Live Backend Health Indicator */}
        <div
          title={
            apiStatus.healthy
              ? 'Backend API Connected'
              : apiStatus.loading
              ? 'Checking Backend...'
              : 'Backend API Offline'
          }
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 0.75rem',
            borderRadius: '9999px',
            backgroundColor: apiStatus.healthy
              ? 'var(--color-primary-light)'
              : 'rgba(239, 68, 68, 0.1)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: apiStatus.healthy ? 'var(--color-primary)' : 'var(--color-danger)',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: apiStatus.healthy
                ? 'var(--color-success)'
                : apiStatus.loading
                ? '#eab308'
                : 'var(--color-danger)',
            }}
          />
          {apiStatus.loading
            ? 'API: Checking...'
            : apiStatus.healthy
            ? 'API: Online'
            : 'API: Offline'}
        </div>
      </div>
    </header>
  );
}
