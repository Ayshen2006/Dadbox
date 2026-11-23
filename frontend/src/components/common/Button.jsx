import React from 'react';

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  className = '',
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    borderRadius: 'var(--radius-sm)',
    transition: 'background-color 0.15s ease, transform 0.1s ease',
    padding: size === 'sm' ? '0.375rem 0.75rem' : size === 'lg' ? '0.75rem 1.5rem' : '0.5rem 1rem',
    fontSize: size === 'sm' ? '0.875rem' : size === 'lg' ? '1.125rem' : '1rem',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: 'var(--color-secondary)',
      color: '#ffffff',
    },
    outline: {
      backgroundColor: 'transparent',
      border: '1px solid var(--color-border)',
      color: 'var(--color-text-primary)',
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={{ ...baseStyle, ...variants[variant], opacity: disabled ? 0.6 : 1 }}
    >
      {children}
    </button>
  );
}
