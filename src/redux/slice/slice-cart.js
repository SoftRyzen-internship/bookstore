import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as operations from 'redux/operations/operations-cart';
const initialState = {
  items: [],
  isOpen: false,
  isError: false,
  error: '',
  send: false,
  isLoading: false,
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
      state.send = false;
    },
    increaseQuality(state, { payload }) {
      const book = state.items.find(item => item._id === payload._id);
      book.quality += 1;
      state.send = false;
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen;
      state.send = false;
    },
    clearCart(state) {
      state.items = [];
      state.send = false;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(operations.orderUser.fulfilled, state => {
        state.items = [];
        state.isError = false;
        state.isLoading = false;
        state.send = true;
      })
      .addCase(operations.orderUser.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.send = false;
      })
      .addCase(operations.orderUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.isError = true;
        state.send = false;
      }),
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
