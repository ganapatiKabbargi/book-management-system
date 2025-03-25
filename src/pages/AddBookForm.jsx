import React, { useState } from "react";
import styles from "./AddBookForm.module.css";
import { useForm } from "react-hook-form";

function AddBookForm({ onAddBook, onUpdateBook, onCancel, book }) {
  // const [bookData, setBookData] = useState({
  //   title: book?.title || "",
  //   author: book?.author || "",
  //   genre: book?.genre || "",
  //   year: book?.year || "",
  //   description: book?.description || "",
  // });

  const defaultData = {
    title: book?.title || "",
    author: book?.author || "",
    genre: book?.genre || "",
    year: book?.year || "",
    description: book?.description || "",
    id: book?.id || "",
    cover: book?.cover || "",
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: defaultData });

  // const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setBookData({
  //     ...bookData,
  //     [name]: value,
  //   });

  //   // Clear error when user types
  //   if (errors[name]) {
  //     setErrors({
  //       ...errors,
  //       [name]: "",
  //     });
  //   }
  // };

  // const validateForm = () => {
  //   const newErrors = {};

  //   if (!bookData.title.trim()) {
  //     newErrors.title = "Title is required";
  //   }

  //   if (!bookData.author.trim()) {
  //     newErrors.author = "Author is required";
  //   }

  //   if (!bookData.genre.trim()) {
  //     newErrors.genre = "Genre is required";
  //   }

  //   if (!bookData.year) {
  //     newErrors.year = "Year is required";
  //   } else if (isNaN(bookData.year) || bookData.year < 0) {
  //     newErrors.year = "Year must be a valid number";
  //   }

  //   if (!bookData.description.trim()) {
  //     newErrors.description = "Description is required";
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const submitHandler = (data) => {
    console.log(data);
    if (book) {
      onUpdateBook({
        ...data,
        year: Number.parseInt(data.year),
      });
    } else {
      onAddBook({
        ...data,
        year: Number.parseInt(data.year),
      });
    }

    // setBookData({
    //   title: "",
    //   author: "",
    //   genre: "",
    //   year: "",
    //   description: "",
    // });
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

      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.formLabel}>
            Title*
          </label>
          {errors.title?.type === "required" && (
            <span role="alert">title is required</span>
          )}
          <input
            type="text"
            id="title"
            name="title"
            {...register("title", { required: true })}
            aria-invalid={errors.title ? "true" : "false"}
            className={`${styles.formInput} `}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="author" className={styles.formLabel}>
            Author*
          </label>
          {errors.author?.type === "required" && (
            <span role="alert">author is required</span>
          )}
          <input
            type="text"
            id="author"
            name="author"
            {...register("author", { required: true })}
            aria-invalid={errors.author ? "true" : "false"}
            className={`${styles.formInput}`}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cover" className={styles.formLabel}>
            Cover*
          </label>
          {errors.cover?.type === "required" && (
            <span role="alert">cover image is required</span>
          )}
          <input
            type="text"
            id="cover"
            name="cover"
            {...register("cover", { required: true })}
            aria-invalid={errors.cover ? "true" : "false"}
            className={`${styles.formInput}`}
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="genre" className={styles.formLabel}>
              Genre*
            </label>
            {errors.genre?.type === "required" && (
              <span role="alert">genre is required</span>
            )}
            <input
              type="text"
              id="genre"
              name="genre"
              {...register("genre", { required: true })}
              aria-invalid={errors.genre ? "true" : "false"}
              className={`${styles.formInput} `}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="year" className={styles.formLabel}>
              Year*
            </label>
            {errors.year?.type === "required" && (
              <span role="alert">author is required</span>
            )}
            <input
              type="number"
              id="year"
              name="year"
              {...register("year", { required: true })}
              aria-invalid={errors.year ? "true" : "false"}
              className={`${styles.formInput}`}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.formLabel}>
            Description*
          </label>
          {errors.description?.type === "required" && (
            <span role="alert">author is required</span>
          )}
          <textarea
            id="description"
            name="description"
            {...register("description", { required: true })}
            rows="4"
            aria-invalid={errors.description ? "true" : "false"}
            className={`${styles.formTextarea} `}
          ></textarea>
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
