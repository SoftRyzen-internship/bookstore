import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { userReducer } from './slice/slice-user';
import booksReducer from './slice/slice-books';
import { cartReducer } from './slice/slice-cart';

export const store = configureStore({
  reducer: {
    auth: userReducer,
    books: booksReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
