import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
      cover: "https://via.placeholder.com/200x300",
      description:
        "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      cover: "https://via.placeholder.com/200x300",
      description:
        "A dystopian social science fiction novel and cautionary tale set in a totalitarian society.",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      year: 1925,
      cover: "https://via.placeholder.com/200x300",
      description:
        "A novel that examines the dark side of the American Dream during the Roaring Twenties.",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      year: 1813,
      cover: "https://via.placeholder.com/200x300",
      description:
        "A romantic novel of manners that depicts the emotional development of protagonist Elizabeth Bennet.",
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      year: 1937,
      cover: "https://via.placeholder.com/200x300",
      description:
        "A children's fantasy novel set in a fictional world that follows the quest of home-loving Bilbo Baggins.",
    },
    {
      id: 6,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      year: 1997,
      cover: "https://via.placeholder.com/200x300",
      description:
        "The first novel in the Harry Potter series that follows a young wizard's adventures at Hogwarts School of Witchcraft and Wizardry.",
    },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    updateBook: (state, action) => {
      state.books = action.payload;
    },
    deleteBook: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
