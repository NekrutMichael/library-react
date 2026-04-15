export default function Header() {
  return (
    <header className="header">
      <div className="logo">Мій Застосунок</div>
      <nav className="nav-menu">
        <ul>
          <li><a href="/">Головна</a></li>
          <li><a href="/catalog">Каталог</a></li>
          <li><a href="/about">Про нас</a></li>
        </ul>
      </nav>
    </header>
  );
}