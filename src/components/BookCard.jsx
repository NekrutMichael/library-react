import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BookCard({ book, isDiscountActive }) {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(`book_${book.id}`);
    return saved ? parseInt(saved) : 0;
  });

  const currentPrice = isDiscountActive ? (book.price * 0.8).toFixed(0) : book.price;

  useEffect(() => {
    localStorage.setItem(`book_${book.id}`, count);
  }, [count, book.id]);

// src/components/BookCard.jsx

return (
  <div className="card h-100 shadow-sm border-0 position-relative overflow-hidden">
    {/* Бейдж знижки поверх картинки */}
    {isDiscountActive && (
      <div className="position-absolute top-0 start-0 bg-danger text-white px-3 py-1 shadow" 
           style={{ zIndex: 10, borderRadius: '0 0 10px 0', fontWeight: 'bold' }}>
        -20%
      </div>
    )}

    <img 
      src={book.cover} 
      className="card-img-top" 
      alt={book.title} 
      style={{ height: '350px', objectFit: 'contain', padding: '15px', backgroundColor: '#fcfcfc' }} 
    />
    
    <div className="card-body d-flex flex-column">
      <h5 className="card-title text-primary text-truncate">{book.title}</h5>
      
      {/* Блок ціни: стара + нова */}
      <div className="mb-3" style={{ minHeight: '50px' }}>
        {isDiscountActive ? (
          <div>
            <span className="text-decoration-line-through text-muted small">{book.price} грн</span>
            <div className="fw-bold fs-3 text-danger">{currentPrice} грн</div>
          </div>
        ) : (
          <div className="fw-bold fs-3 text-dark">{book.price} грн</div>
        )}
      </div>
      
      <div className="mt-auto">
        {/* Кнопка "Детальніше" на всю ширину */}
        <Link to={`/book/${book.id}`} className="btn btn-outline-primary w-100 mb-2">
          Детальніше
        </Link>

        {/* Ряд з кнопками Купити та Мінус */}
        <div className="d-flex gap-2 align-items-center">
          <button className="btn btn-success flex-grow-1" onClick={() => setCount(count + 1)}>
            Купити
          </button>
          
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-outline-danger px-3" 
              onClick={() => count > 0 && setCount(count - 1)}
              disabled={count === 0}
            >
              -
            </button>
            {count > 0 && (
              <span className="ms-2 badge bg-warning text-dark fs-6">{count}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
}