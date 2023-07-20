import { createSlice } from '@reduxjs/toolkit';
import Book from '../models/book-model';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface BooksState {
  books: Book[];
  totalPrice: number;
  currentBookModal?: Book;
  lastIndex: number;
}
const initialState: BooksState = {
  books: [
    
    {
      id: 1,
      name: 'Offside Trap',
      author: 'Dean David',
      purchaseDate: new Date('2023-07-11'),
      price: 50,
    },
    {
      id: 2,
      name: 'The Magician',
      author: 'Eyal Berkovich',
      purchaseDate: new Date('2023-07-11'),
      price: 99.9,
    },
    {
      id: 3,
      name: 'Im Everywhere',
      author: 'Ali Mohamed',
      purchaseDate: new Date('2023-07-12'),
      price: 44.9,
    },
  ],
  totalPrice: 194.8,
  currentBookModal: {
    id: 3,
    name: 'Im Everywhere',
    author: 'Ali Mohamed',
    purchaseDate: new Date('2023-07-12'),
    price: 44.9,
  },
  lastIndex: 3,
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
    pullTotalPrice: (state) => {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.price;
      }
      state.totalPrice = totalPrice;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      let book = action.payload;
      book.id = state.lastIndex + 1;
      state.books.push(book);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      console.log(action.payload);
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
