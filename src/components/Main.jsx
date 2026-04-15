import { useState, useEffect } from 'react';
import BookCard from './BookCard';

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(15); // Акція на 15 секунд

  const booksData = [
    { id: 1, title: 'Розум вбивці', author: 'Майк Омер', price: 220, cover: '/images/book1.jpg' },
    { id: 2, title: 'Кафе на краю світу', author: 'Джон Стрелекі', price: 150, cover: '/images/book2.jpg' },
    { id: 3, title: 'Том Соєр', author: 'Марк Твен', price: 120, cover: '/images/book3.jpg' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height: '50vh'}}>
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <main className="container py-4">
      {timeLeft > 0 ? (
        <div className="alert alert-danger text-center shadow-sm animate__animated animate__pulse animate__infinite">
        <strong>АКЦІЯ!</strong> Знижка 20% на всі книги! Часу залишилось: 
        <span className="badge bg-dark ms-2">{timeLeft} сек</span>
        </div>
      ) : (
        <div className="alert alert-secondary text-center">Акцію завершено. Ціни повернулися до норми.</div>
      )}

      <div className="row mt-4">
        {booksData.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <BookCard book={book} isDiscountActive={timeLeft > 0} />
          </div>
        ))}
      </div>
    </main>
  );
}