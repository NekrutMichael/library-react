import { useState, useEffect } from 'react';

export default function BookCard({ book, isDiscountActive }) {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(`book_${book.id}`);
    return saved ? parseInt(saved) : 0;
  });

  const currentPrice = isDiscountActive 
    ? (book.price * 0.8).toFixed(0) 
    : book.price;

  useEffect(() => {
    localStorage.setItem(`book_${book.id}`, count);
  }, [count, book.id]);

  const handleAdd = () => setCount(count + 1);
  const handleRemove = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="card h-100 shadow-sm border-0 position-relative">
      {isDiscountActive && (
        <span className="position-absolute top-0 start-0 badge bg-danger m-2 shadow-sm" style={{ zIndex: 1 }}>
          -20%
        </span>
      )}
    <img 
      src={book.cover} 
      className="card-img-top" 
      alt={book.title} 
      style={{ 
      height: '350px',
      objectFit: 'contain',
      backgroundColor: '#f8f9fa',
      padding: '10px'  
  }} 
/>
      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-primary">{book.title}</h5>
        <h6 className="card-subtitle mb-3 text-muted">Автор: {book.author}</h6>
        
        <div className="mb-4">
          {isDiscountActive ? (
            <div className="d-flex align-items-baseline">
              <span className="text-decoration-line-through text-muted small">{book.price} грн</span>
              <span className="fw-bold fs-4 text-danger ms-2">{currentPrice} грн</span>
            </div>
          ) : (
            <p className="card-text fw-bold fs-4 text-dark">{book.price} грн</p>
          )}
        </div>
        
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div className="btn-group" role="group">
            <button className="btn btn-success" onClick={handleAdd}>Купити</button>
            <button 
              className="btn btn-outline-danger" 
              onClick={handleRemove}
              disabled={count === 0}
            >
              -
            </button>
          </div>
          
          {count > 0 && (
            <span className="badge bg-warning text-dark fs-6 animate__animated animate__bounceIn">
              У кошику: {count}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}