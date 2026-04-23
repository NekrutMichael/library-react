import BookCard from '../components/BookCard';
import { booksData } from '../data/books';

export default function CatalogPage() {
  return (
    <main className="container py-5">
      <div className="border-bottom pb-3 mb-4">
        <h2 className="fw-bold">Наш асортимент</h2>
        <p className="text-muted">Знайдено книг: {booksData.length}</p>
      </div>
      <div className="row">
        {booksData.map((book) => (
          <div className="col-lg-4 col-md-6 mb-4" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </main>
  );
}