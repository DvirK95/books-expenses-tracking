import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menu-slice';
import bookReducer from './book-slice';

export const store = configureStore({
  reducer: { menu: menuReducer, book: bookReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
