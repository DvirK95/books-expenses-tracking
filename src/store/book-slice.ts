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
      purchaseDate: '20230716',
      price: 90
    }
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
