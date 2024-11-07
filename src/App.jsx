import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import BookForm from './Components/BookForm';
import BookCard from './Components/BookCard';

function App() {
  const [bookData, setBookData] = useState(null);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="header">
          <BookOpen className="header-icon" />
          <h2 className="header-title">
            Registro de Libro
          </h2>
          <p className="header-subtitle">
            Ingresa la información de tu libro favorito
          </p>
        </div>
        
        {bookData ? (
          <BookCard data={bookData} onReset={() => setBookData(null)} />
        ) : (
          <BookForm onSubmit={setBookData} />
        )}
      </div>
    </div>
  );
}

export default App;