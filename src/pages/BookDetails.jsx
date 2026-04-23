import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { booksData } from '../data/books';

export default function BookDetails() {
  const { id } = useParams();
  const book = booksData.find((item) => item.id === parseInt(id));
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(`book_${id}`);
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`book_${id}`, count);
  }, [count, id]);
  if (!book) return <div className="container py-5"><h2>Книгу не знайдено</h2></div>;

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img src={book.cover} alt={book.title} className="img-fluid rounded shadow-lg mb-4" style={{maxHeight: '500px'}} />
        </div>
        <div className="col-md-7">
          <h1 className="display-4 fw-bold">{book.title}</h1>
          <h3 className="text-muted mb-4">Автор: {book.author}</h3>
          <p className="fs-2 text-primary fw-bold">{book.price} грн</p>
          
          <div className="d-flex align-items-center gap-3 my-4">
            <button className="btn btn-success btn-lg px-5" onClick={() => setCount(count + 1)}>
              Придбати
            </button> {count > 0 && (
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-outline-danger" onClick={() => setCount(count - 1)}>-</button>
                <span className="badge bg-warning text-dark fs-5">{count} у кошику</span>
              </div>
            )}
          </div>

          <Link to="/catalog" className="btn btn-link p-0 text-decoration-none">← Повернутися до каталогу</Link>
        </div>
      </div>
    </div>
  );
}