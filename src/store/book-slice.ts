import { createSlice } from '@reduxjs/toolkit';
import Book from '../models/book-model';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface BooksState {
  books: Book[];
  totalPrice: number;
}
const initialState: BooksState = {
  books: [
    {
      id: 1,
      name: 'The Magician',
      author: 'Eyal Berkovich',
      purchaseDate: new Date('2023-07-10'),
      price: 99.9,
    },
    {
      id: 2,
      name: 'Offside Trap',
      author: 'Dean David',
      purchaseDate: new Date('2023-07-11'),
      price: 50,
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
      //toDo add new id
      state.books.push(action.payload);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      for (let book of state.books) {
        if (action.payload.id === book.id) {
          console.log(`payload${action.payload}`);
          console.log(`currentbook${book}`);
          book = action.payload;
        }
      }
    },
  },
});

export const bookActions = booksSlice.actions;
export default booksSlice.reducer;
