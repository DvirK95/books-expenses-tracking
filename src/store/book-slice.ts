import { createSlice } from '@reduxjs/toolkit';
import Book from '../models/book-model';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface BooksState {
  books: Book[];
}
const initialState: BooksState = {
  books: [
    {
      id: 1,
      name: "The Magician",
      author: "Eyal Berkovich",
      purchaseDate: new Date('2023-07-10'),
      price: 99.90
    },
    {
      id: 2,
      name: "Offside Trap",
      author: "Dean David",
      purchaseDate: new Date('2023-07-11'),
      price: 50
    },
    {
      id: 3,
      name: "Everywhere",
      author: "Ali Mohamed",
      purchaseDate: new Date('2023-07-12'),
      price: 44.90
    },
  ],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    filterByName: (state, action: PayloadAction<string>) => {
      const filterText = action.payload.trim().toLowerCase();
      state.books = initialState.books.filter((book) =>
        book.name.toLowerCase().includes(filterText)
      );
    },
  },
});

export const { filterByName } = booksSlice.actions;
export default booksSlice.reducer;
