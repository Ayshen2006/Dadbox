import React from 'react';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';

export function Layout({ children, currentPage, onNavigate, apiStatus }) {
  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} apiStatus={apiStatus} />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
