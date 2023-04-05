import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
  isOpen: false,
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
        newBook.discount = newBook.discount || 16;
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
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items'],
};

export const {
  setItem,
  deleteItem,
  decreaseQuality,
  increaseQuality,
  toggleCart,
  clearCart,
} = cartSlice.actions;

export const cartReducer = persistReducer(persistConfig, cartSlice.reducer);
