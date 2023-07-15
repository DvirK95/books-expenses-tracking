import { createSlice } from '@reduxjs/toolkit';
import Book from '../models/book-model';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface BooksState {
  books: Book[];
}
const initialState: BooksState = {
  books: [],
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
