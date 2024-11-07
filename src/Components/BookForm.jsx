import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';

export default function BookForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { title, author } = formData;

    if (title.trim().length < 3 || title.startsWith(' ')) {
      setError('El título debe tener al menos 3 caracteres y no comenzar con espacios');
      return;
    }

    if (author.length < 6) {
      setError('El autor debe tener al menos 6 caracteres');
      return;
    }

    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error && (
        <div className="error">
          <div className="error-content">
            <AlertCircle className="error-icon" />
            <p className="error-message">{error}</p>
          </div>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Título del Libro
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="form-input"
          placeholder="Ingresa el título"
        />
      </div>

      <div className="form-group">
        <label htmlFor="author" className="form-label">
          Autor
        </label>
        <input
          type="text"
          name="author"
          id="author"
          value={formData.author}
          onChange={handleChange}
          className="form-input"
          placeholder="Ingresa el autor"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Descripción
        </label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="form-textarea"
          placeholder="Describe el libro brevemente"
        />
      </div>

      <button type="submit" className="button button-primary">
        <Send className="button-icon" />
        Enviar
      </button>
    </form>
  );
}