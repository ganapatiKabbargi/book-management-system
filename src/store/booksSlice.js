import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialBooks = {
//   books: [
//     {
//       id: 1,
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       genre: "Fiction",
//       year: 1960,
//       cover:
//         "https://media.glamour.com/photos/56e1f3c462b398fa64cbd304/master/w_1600%2Cc_limit/entertainment-2016-02-18-main.jpg",
//       description:
//         "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
//     },
//     {
//       id: 2,
//       title: "1984",
//       author: "George Orwell",
//       genre: "Dystopian",
//       year: 1949,
//       cover:
//         "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b468d093312907.5e6139cf2ab03.png",
//       description:
//         "A dystopian social science fiction novel and cautionary tale set in a totalitarian society.",
//     },
//     {
//       id: 3,
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       genre: "Classic",
//       year: 1925,
//       cover:
//         "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1",
//       description:
//         "A novel that examines the dark side of the American Dream during the Roaring Twenties.",
//     },
//     {
//       id: 4,
//       title: "Pride and Prejudice",
//       author: "Jane Austen",
//       genre: "Romance",
//       year: 1813,
//       cover:
//         "https://cdn.penguin.co.in/wp-content/uploads/2023/05/9780143454229.jpg",
//       description:
//         "A romantic novel of manners that depicts the emotional development of protagonist Elizabeth Bennet.",
//     },
//   ],
// };

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetch(
    "https://e-commerce-app-da0a9-default-rtdb.firebaseio.com/books.json"
  );
  const res2 = await response.json();
  return res2;
});

export const updateBooks = createAsyncThunk(
  "books/updateBooks",
  async (books) => {
    const response = await fetch(
      "https://e-commerce-app-da0a9-default-rtdb.firebaseio.com/books.json",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(books),
      }
    );
    return await response.json();
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: { books: [] },
  reducers: {
    addBook: (state, action) => {
      state.books = action.payload;
    },
    updateBook: (state, action) => {
      state.books = action.payload;
    },
    deleteBook: (state, action) => {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {})
      .addCase(fetchBooks.fulfilled, (state, action) => {
        console.log(action.payload);
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {});
  },
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
