import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation(); // Допоможе виділяти активну сторінку

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">Комерційна бібліотека</Link>
        <div className="navbar-nav ms-auto">
          <Link 
            className={`nav-link px-3 ${location.pathname === '/' ? 'active border-bottom border-white' : ''}`} 
            to="/"
          >
            Головна
          </Link>
          <Link 
            className={`nav-link px-3 ${location.pathname === '/catalog' ? 'active border-bottom border-white' : ''}`} 
            to="/catalog"
          >
            Каталог
          </Link>
        </div>
      </div>
    </nav>
  );
}