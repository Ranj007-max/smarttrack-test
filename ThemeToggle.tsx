import { SunIcon, MoonIcon } from './Icons';
import './ThemeToggle.css';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label={`Activate ${theme === 'light' ? 'dark' : 'light'} mode`}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
