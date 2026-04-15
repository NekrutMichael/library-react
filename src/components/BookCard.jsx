import { useState } from 'react';

export default function BookCard({ book }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={book.cover} className="card-img-top" alt={book.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-primary">{book.title}</h5>
          <h6 className="card-subtitle mb-3 text-muted">Автор: {book.author}</h6>
          <p className="card-text fw-bold fs-4 text-dark mb-4">{book.price} грн</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <div className="btn-group" role="group">
              <button className="btn btn-success" onClick={handleAdd}>Купити</button>
              <button className="btn btn-outline-danger" onClick={handleRemove}disabled={count === 0}>Прибрати</button>
            </div>
            {count > 0 && (
              <span className="badge bg-warning text-dark fs-6">
                У кошику: {count}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}