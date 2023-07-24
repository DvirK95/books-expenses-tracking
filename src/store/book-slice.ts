import { createSlice } from '@reduxjs/toolkit';
import Book from '../Models/book-model';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface BooksState {
  books: Book[];
  totalPrice: number;
  currentBookModal?: Book;
}
const initialState: BooksState = {
  books: [
    {
      id: 1,
      name: 'Offside Trap',
      author: 'Dean David',
      purchaseDate: new Date('2023-07-11').toISOString(),
      price: 50,
    },
    {
      id: 2,
      name: 'The Magician',
      author: 'Eyal Berkovich',
      purchaseDate: new Date('2023-07-11').toISOString(),
      price: 99.9,
    },
    {
      id: 3,
      name: 'Im Everywhere',
      author: 'Ali Mohamed',
      purchaseDate: new Date('2023-07-12').toISOString(),
      price: 44.9,
    },
  ],
  totalPrice: 194.8,
  currentBookModal: {} as Book,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    pullTotalPrice: (state) => {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.price;
      }
      state.totalPrice = totalPrice;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      const length = state.books.length;
      const lastIndex = state.books[length - 1].id;
      let book = action.payload;
      book.id = lastIndex + 1;
      state.books.push(book);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    removeBook: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    setCurrentBookModal: (state, action: PayloadAction<Book>) => {
      state.currentBookModal = action.payload;
    },
  },
});

export const bookActions = booksSlice.actions;
export default booksSlice.reducer;
