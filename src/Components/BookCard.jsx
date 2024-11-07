import React from 'react';
import { BookOpen, User, FileText, RotateCcw } from 'lucide-react';

export default function BookCard({ data, onReset }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-content">
          <div className="card-title">
            <BookOpen className="card-icon" />
            <h3>{data.title}</h3>
          </div>
          
          <div className="card-info">
            <User className="card-icon" />
            <p>{data.author}</p>
          </div>
          
          {data.description && (
            <div className="card-description">
              <FileText className="card-icon" />
              <p>{data.description}</p>
            </div>
          )}
          
          <button onClick={onReset} className="button button-secondary">
            <RotateCcw className="button-icon" />
            Registrar otro libro
          </button>
        </div>
      </div>
    </div>
  );
}