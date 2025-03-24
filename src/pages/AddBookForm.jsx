import React, { useState } from "react";
import styles from "./AddBookForm.module.css";

function AddBookForm({ onAddBook, onCancel }) {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!bookData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!bookData.author.trim()) {
      newErrors.author = "Author is required";
    }

    if (!bookData.genre.trim()) {
      newErrors.genre = "Genre is required";
    }

    if (!bookData.year) {
      newErrors.year = "Year is required";
    } else if (isNaN(bookData.year) || bookData.year < 0) {
      newErrors.year = "Year must be a valid number";
    }

    if (!bookData.description.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onAddBook({
        ...bookData,
        year: Number.parseInt(bookData.year),
      });
    }
  };
  return (
    <div className={styles.addBookForm}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Add New Book</h2>
        <button
          className={styles.closeButton}
          onClick={onCancel}
          aria-label="Close form"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.formLabel}>
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            className={`${styles.formInput} ${
              errors.title ? styles.inputError : ""
            }`}
          />
          {errors.title && (
            <span className={styles.errorMessage}>{errors.title}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="author" className={styles.formLabel}>
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            className={`${styles.formInput} ${
              errors.author ? styles.inputError : ""
            }`}
          />
          {errors.author && (
            <span className={styles.errorMessage}>{errors.author}</span>
          )}
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="genre" className={styles.formLabel}>
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={bookData.genre}
              onChange={handleChange}
              className={`${styles.formInput} ${
                errors.genre ? styles.inputError : ""
              }`}
            />
            {errors.genre && (
              <span className={styles.errorMessage}>{errors.genre}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="year" className={styles.formLabel}>
              Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={bookData.year}
              onChange={handleChange}
              className={`${styles.formInput} ${
                errors.year ? styles.inputError : ""
              }`}
            />
            {errors.year && (
              <span className={styles.errorMessage}>{errors.year}</span>
            )}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.formLabel}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={bookData.description}
            onChange={handleChange}
            rows="4"
            className={`${styles.formTextarea} ${
              errors.description ? styles.inputError : ""
            }`}
          ></textarea>
          {errors.description && (
            <span className={styles.errorMessage}>{errors.description}</span>
          )}
        </div>

        <div className={styles.formActions}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBookForm;
