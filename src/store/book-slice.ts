import { createSlice } from '@reduxjs/toolkit';
import Book from '../models/book-model';

export interface BooksState {
  books: Book[];
}
const initialState: BooksState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
});

export const bookActions = booksSlice.actions;
export default booksSlice.reducer;
