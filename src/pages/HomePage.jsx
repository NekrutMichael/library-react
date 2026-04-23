import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="animate__animated animate__fadeIn">
      {/* Hero Section */}
      <div className="bg-dark text-white py-5 mb-5 shadow-lg" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1500&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container py-5 text-center">
          <h1 className="display-2 fw-bold mb-3">Бібліотека до ваших послуг!</h1>
          <p className="lead fs-3 mb-4">Від класики до сучасних бестселерів.</p>
          <Link to="/catalog" className="btn btn-warning btn-lg px-5 py-3 fw-bold shadow">
            Перейти до Каталогу
          </Link>
        </div>
      </div>
    </div>
  );
}