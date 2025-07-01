import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ErrorBoundary from "./ErrorBoundary";
import Attendance from './pages/Attendance';
import Insights from './pages/Insights';
import BottomNav from './components/BottomNav';
import ThemeToggle from './components/ThemeToggle';

function getTitle(pathname: string): string {
    switch (pathname) {
        case '/attendance':
            return 'Attendance';
        case '/insights':
            return 'Insights';
        case '/':
        default:
            return 'SmartTrack';
    }
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  const location = useLocation();
  const title = getTitle(location.pathname);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>{title}</h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>
      <main>
      <ErrorBoundary>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
     </ErrorBoundary>
      </main>
      <BottomNav />
    </div>
  );
}
