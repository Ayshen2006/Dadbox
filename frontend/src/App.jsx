import { useState, useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/Home/HomePage';
import { BoxesPage } from './pages/Boxes/BoxesPage';
import { BusinessPage } from './pages/Business/BusinessPage';
import { checkBackendHealth } from './services/api';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [apiStatus, setApiStatus] = useState({ loading: true, healthy: false, data: null, error: null });

  useEffect(() => {
    let isMounted = true;
    checkBackendHealth()
      .then((data) => {
        if (isMounted) {
          setApiStatus({ loading: false, healthy: true, data, error: null });
        }
      })
      .catch((err) => {
        if (isMounted) {
          setApiStatus({ loading: false, healthy: false, data: null, error: err.message });
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'boxes':
        return <BoxesPage />;
      case 'business':
        return <BusinessPage />;
      case 'home':
      default:
        return <HomePage apiStatus={apiStatus} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout
      currentPage={currentPage}
      onNavigate={setCurrentPage}
      apiStatus={apiStatus}
    >
      {renderContent()}
    </Layout>
  );
}

export default App;
