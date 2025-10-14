import { useState } from "react";
import "./Books.css";

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", available: true },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", available: false },
  { id: 3, title: "1984", author: "George Orwell", genre: "Science Fiction", available: true },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", available: true },
  { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", available: false },
];

function BookCard({ book }) {
  return (
    <div className="book-card">
      <div className="book-head">
        <h3 className="book-title">{book.title}</h3>
        <span className={`badge ${book.available ? "ok" : "nope"}`}>
          {book.available ? "Available" : "Unavailable"}
        </span>
      </div>
      <p className="book-meta">
        by <strong>{book.author}</strong> · <em>{book.genre}</em>
      </p>
    </div>
  );
}

export default function BookLibrary() {
  const [filter, setFilter] = useState("all");
  const filtered = books.filter(b => (filter === "available" ? b.available : true));
  const availableCount = filtered.length;

  return (
    <section className="exerciseBox">
      <h1>Exercise 3: My Book Library</h1>
      <p>View all books or show only the ones that are currently available.</p>

      <div className="filter-group">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Books ({books.length})
        </button>
        <button
          className={`filter-btn ${filter === "available" ? "active" : ""}`}
          onClick={() => setFilter("available")}
        >
          Available Books ({availableCount})
        </button>
      </div>

      <div className="book-grid">
        {filtered.map(b => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </section>
  );
}
