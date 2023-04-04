import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItem(state, { payload }) {
      const book = state.items.find(item => item._id === payload._id);
      if (book) {
        book.quality += 1;
      } else {
        const newBook = { ...payload, quality: 1 };
        state.items = [...state.items, newBook];
      }
    },
    deleteItem(state, { payload }) {
      state.items = [...state.items].filter(item => {
        return item._id !== payload._id;
      });
    },
    decreaseQuality(state, { payload }) {
      const book = state.items.find(item => item._id === payload._id);
      if (book.quality !== 1) book.quality -= 1;
    },
    increaseQuality(state, { payload }) {
      const book = state.items.find(item => item._id === payload._id);
      book.quality += 1;
    },
  },
});

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items'],
};

export const { setItem, deleteItem, decreaseQuality, increaseQuality } =
  cartSlice.actions;
export const cartReducer = persistReducer(persistConfig, cartSlice.reducer);
