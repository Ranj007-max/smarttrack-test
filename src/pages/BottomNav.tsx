import { NavLink } from 'react-router-dom';
import { HomeIcon, AttendanceIcon, InsightsIcon } from './Icons';
import './BottomNav.css';

const navItems = [
  { path: '/', label: 'Home', icon: <HomeIcon /> },
  { path: '/attendance', label: 'Attendance', icon: <AttendanceIcon /> },
  { path: '/insights', label: 'Insights', icon: <InsightsIcon /> },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          {item.icon}
          <span className="nav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
