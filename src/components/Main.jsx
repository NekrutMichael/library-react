import BookCard from './BookCard';

export default function Main() {
  const booksData = [
    { 
      id: 1, 
      title: 'Розум вбивці', 
      author: 'Майк Омер', 
      price: 220, 
      cover: 'https://via.placeholder.com/300x400?text=Книга+1' 
    },
    { 
      id: 2, 
      title: 'Кафе на краю світу', 
      author: 'Джон Стрелекі', 
      price: 150, 
      cover: 'https://via.placeholder.com/300x400?text=Книга+2' 
    },
    { 
      id: 3, 
      title: 'Том Соєр', 
      author: 'Марк Твен', 
      price: 120, 
      cover: 'https://via.placeholder.com/300x400?text=Книга+3' 
    },
  ];

  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Каталог книг</h1>
        <p className="lead text-muted">Оберіть книгу та додайте її до кошика</p>
      </div>

      <div className="row">
        {booksData.map((book) => (
          <BookCard key={book.id} book={book} /> 
        ))}
      </div>
    </main>
  );
}